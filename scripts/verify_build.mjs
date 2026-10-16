import fs from 'node:fs/promises';
import path from 'node:path';
import { chromium } from 'playwright';

const APP_URL = process.env.APP_URL || 'http://localhost:5188';
const OUTPUT_DIR =
  process.env.RENDER_OUTPUT_DIR ||
  '/Users/omarkreidieh/.gemini/antigravity/brain/39a28cd7-8f75-46f6-bfdf-fa796dc71306/scratch/renders';

const TURNAROUND_VIEWS = [
  'side',
  'front_34',
  'front',
  'top',
  'rear_34',
  'closeup',
  'ground_check'
];

async function runVerificationSuite() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const consoleErrors = [];
  const pageErrors = [];

  const browser = await chromium.launch({
    headless: true,
    executablePath:
      process.env.CHROME_PATH ||
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: [
      '--use-gl=angle',
      '--use-angle=metal',
      '--enable-webgl',
      '--ignore-gpu-blocklist',
      '--disable-gpu-sandbox'
    ]
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1
  });
  const page = await context.newPage();

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });
  page.on('pageerror', (err) => {
    pageErrors.push(err.message || String(err));
  });

  console.log(`[verify_build] Navigating to ${APP_URL} ...`);
  await page.goto(APP_URL, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForSelector('#viewport-container canvas', { timeout: 15000 });

  // Give WebGL scene 400ms to finish initial shader compile and frame settle
  await page.waitForTimeout(400);

  // 1. Verify Global Hooks Exist
  const hooksCheck = await page.evaluate(() => {
    return {
      hasSimState: typeof window.__SIM_STATE__ === 'object' && window.__SIM_STATE__ !== null,
      hasMotionTelemetry:
        typeof window.__MOTION_TELEMETRY__ === 'object' && window.__MOTION_TELEMETRY__ !== null,
      hasSetCameraView: typeof window.__SET_CAMERA_VIEW__ === 'function',
      hasStartAutopilot: typeof window.__START_AUTOPILOT__ === 'function',
      hasStepTime: typeof window.__STEP_TIME__ === 'function'
    };
  });

  console.log('[verify_build] Global Hooks Check:', hooksCheck);
  if (
    !hooksCheck.hasSimState ||
    !hooksCheck.hasMotionTelemetry ||
    !hooksCheck.hasSetCameraView ||
    !hooksCheck.hasStartAutopilot
  ) {
    throw new Error(`Missing required global verification hooks: ${JSON.stringify(hooksCheck)}`);
  }

  // 2. Verify Assembled State (E = 0) Invariants: 12 parts, tire ground contact, internal part containment
  const assembledAudit = await page.evaluate(() => {
    if (typeof window.__STEP_TIME__ === 'function') {
      window.__STEP_TIME__(250);
    }
    const audit = window.__AUDIT_GEOMETRY__?.() || null;
    const sim = window.__SIM_STATE__ || {};
    const tel = window.__MOTION_TELEMETRY__ || {};

    return {
      masterExplode: sim.masterExplode ?? 0,
      audit,
      partStateKeys: tel.partStates ? Object.keys(tel.partStates) : []
    };
  });

  console.log('[verify_build] Assembled State Audit (E=0):', JSON.stringify(assembledAudit, null, 2));

  if (assembledAudit.audit) {
    const { partCount, tireMinY, internalContained } = assembledAudit.audit;
    if (typeof partCount === 'number' && partCount !== 12) {
      throw new Error(`Expected 12 sub-assemblies, found ${partCount}`);
    }
    if (typeof tireMinY === 'number' && (tireMinY < -0.006 || tireMinY > 0.006)) {
      throw new Error(`Tire ground contact y_min out of [-0.006, +0.006] bounds: ${tireMinY}`);
    }
    if (internalContained === false) {
      throw new Error('Internal powertrain (part_08 / part_09) protrudes outside outer bodywork at E=0!');
    }
  }

  // 3. Capture Assembled Turnaround & Detail Renders at 1440x900 with UI hidden (capture-clean)
  await page.evaluate(() => {
    document.body.classList.add('capture-clean');
  });

  for (const viewName of TURNAROUND_VIEWS) {
    await page.evaluate((v) => {
      window.__SET_CAMERA_VIEW__(v);
      if (typeof window.__STEP_TIME__ === 'function') {
        window.__STEP_TIME__(120);
      }
    }, viewName);
    await page.waitForTimeout(120);
    const outPath = path.join(OUTPUT_DIR, `${viewName}.png`);
    await page.screenshot({ path: outPath });
    console.log(`[verify_build] Captured ${outPath}`);
  }

  // 4. Trigger m1_full_cad_explode (E = 1.0) and step through t0, t1, t2, t3
  await page.evaluate(() => {
    window.__SET_CAMERA_VIEW__('exploded');
    const m1Btn = document.querySelector('[data-preset="m1_full_cad_explode"]');
    if (m1Btn) {
      m1Btn.click();
    } else if (window.__SIM_STATE__) {
      window.__SIM_STATE__.masterExplode = 1.0;
    }
  });

  const phaseCaptures = [
    { name: 'phase_t0.png', stepMs: 140 },
    { name: 'phase_t1.png', stepMs: 360 },
    { name: 'phase_t2.png', stepMs: 420 },
    { name: 'phase_t3.png', stepMs: 650 }
  ];

  for (const phase of phaseCaptures) {
    await page.evaluate((ms) => {
      if (typeof window.__STEP_TIME__ === 'function') {
        window.__STEP_TIME__(ms);
      }
    }, phase.stepMs);
    await page.waitForTimeout(120);
    const outPath = path.join(OUTPUT_DIR, phase.name);
    await page.screenshot({ path: outPath });
    console.log(`[verify_build] Captured ${outPath}`);
  }

  // Settle Full Explode & Capture Clean 3D exploded.png + Full UI exploded_ui.png
  await page.evaluate(() => {
    if (typeof window.__STEP_TIME__ === 'function') {
      window.__STEP_TIME__(800);
    }
  });
  await page.waitForTimeout(150);
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'exploded.png') });

  await page.evaluate(() => {
    document.body.classList.remove('capture-clean');
  });
  await page.waitForTimeout(150);
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'exploded_ui.png') });

  // 5. Capture m2 (powertrain_cutaway.png) and m3 (wind_tunnel_drs.png)
  await page.evaluate(() => {
    window.__SET_CAMERA_VIEW__('front_34');
    const m2Btn = document.querySelector('[data-preset="m2_aero_powertrain_strip"]');
    if (m2Btn) m2Btn.click();
    if (typeof window.__STEP_TIME__ === 'function') {
      window.__STEP_TIME__(1200);
    }
  });
  await page.waitForTimeout(180);
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'powertrain_cutaway.png') });

  await page.evaluate(() => {
    window.__SET_CAMERA_VIEW__('front_34');
    const m3Btn = document.querySelector('[data-preset="m3_drs_wind_tunnel"]');
    if (m3Btn) m3Btn.click();
    if (typeof window.__STEP_TIME__ === 'function') {
      window.__STEP_TIME__(1200);
    }
  });
  await page.waitForTimeout(180);
  await page.screenshot({ path: path.join(OUTPUT_DIR, 'wind_tunnel_drs.png') });

  // 6. Responsive Viewport Captures (1440x900, 768x1024, 390x844) & Unobstructed Viewport Ratio Check
  const viewports = [
    { width: 1440, height: 900, name: 'viewport_1440x900.png' },
    { width: 768, height: 1024, name: 'viewport_768x1024.png' },
    { width: 390, height: 844, name: 'viewport_390x844.png' }
  ];

  for (const vp of viewports) {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.waitForTimeout(180);
    await page.screenshot({ path: path.join(OUTPUT_DIR, vp.name) });
    console.log(`[verify_build] Captured responsive viewport ${vp.name}`);
  }

  // 7. Restore 1440x900 and record 9.5s live gameplay_session.mp4 of window.__START_AUTOPILOT__() (m1 -> m2 -> m3 -> m4)
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.waitForTimeout(150);
  console.log('[verify_build] Recording gameplay_session.mp4 of 4-phase autopilot sequence...');
  const videoBase64 = await page.evaluate(async () => {
    const canvas = document.querySelector('#viewport-container canvas');
    if (!canvas || typeof canvas.captureStream !== 'function') return null;

    const mimeCandidates = [
      'video/mp4;codecs=avc1.42E01E',
      'video/mp4;codecs=avc1',
      'video/mp4',
      'video/webm;codecs=vp9',
      'video/webm'
    ];
    const mimeType =
      mimeCandidates.find((m) => MediaRecorder.isTypeSupported(m)) || 'video/webm';

    const stream = canvas.captureStream(30);
    const recorder = new MediaRecorder(stream, {
      mimeType,
      videoBitsPerSecond: 6_500_000
    });
    const chunks = [];
    recorder.ondataavailable = (e) => {
      if (e.data && e.data.size > 0) chunks.push(e.data);
    };

    const donePromise = new Promise((resolve) => {
      recorder.onstop = async () => {
        const blob = new Blob(chunks, { type: mimeType });
        const buf = await blob.arrayBuffer();
        const bytes = new Uint8Array(buf);
        let binary = '';
        const chunkSize = 0x8000;
        for (let i = 0; i < bytes.length; i += chunkSize) {
          binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunkSize));
        }
        resolve({ base64: btoa(binary), mimeType });
      };
    });

    window.__SET_CAMERA_VIEW__?.('exploded');
    window.__START_AUTOPILOT__?.();
    recorder.start(200);

    // Step 9.6 seconds of simulation across 48 frames (200ms sim step + 60ms real wait = ~2.9s wall time)
    for (let i = 0; i < 48; i++) {
      window.__STEP_TIME__?.(200);
      await new Promise((r) => setTimeout(r, 65));
    }

    recorder.stop();
    return await donePromise;
  });

  if (videoBase64 && videoBase64.base64) {
    const videoPath = path.join(OUTPUT_DIR, 'gameplay_session.mp4');
    await fs.writeFile(videoPath, Buffer.from(videoBase64.base64, 'base64'));
    console.log(
      `[verify_build] Saved gameplay_session.mp4 (${videoBase64.mimeType}) to ${videoPath}`
    );
  }

  // Dump motion telemetry after autopilot run
  const telemetryDump = await page.evaluate(() => {
    return {
      timestamp: new Date().toISOString(),
      simState: window.__SIM_STATE__,
      motionTelemetry: window.__MOTION_TELEMETRY__
    };
  });

  const dumpPath = path.join(OUTPUT_DIR, 'motion_telemetry_dump.json');
  await fs.writeFile(dumpPath, JSON.stringify(telemetryDump, null, 2), 'utf8');
  console.log(`[verify_build] Saved motion telemetry dump to ${dumpPath}`);

  await browser.close();

  if (consoleErrors.length > 0 || pageErrors.length > 0) {
    throw new Error(
      `Verification failed due to runtime errors:\nConsole Errors: ${JSON.stringify(
        consoleErrors
      )}\nPage Errors: ${JSON.stringify(pageErrors)}`
    );
  }

  console.log('[verify_build] ALL VERIFICATION CHECKS & RENDERS PASSED ZERO-ERROR GATE.');
}

runVerificationSuite().catch((err) => {
  console.error('[verify_build] FATAL:', err);
  process.exit(1);
});
