export function createMotorsportAudio() {
  let ctx = null;
  let masterGain = null;
  let isInitialized = false;
  let muted = false;

  let servoOsc = null;
  let servoFilter = null;
  let servoGain = null;

  let windNoiseSource = null;
  let windBandpass = null;
  let windGain = null;

  let v6FundamentalOsc = null;
  let v6HarmonicOsc = null;
  let mguhWhistleOsc = null;
  let engineFilter = null;
  let engineGain = null;
  let mguhGain = null;

  function createPinkNoiseBuffer(audioCtx, durationSec = 2.5) {
    const bufferSize = Math.floor(audioCtx.sampleRate * durationSec);
    const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = buffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.045;
      b6 = white * 0.115926;
    }
    return buffer;
  }

  function ensureContext() {
    if (isInitialized && ctx) {
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }
      return true;
    }

    if (typeof window === 'undefined') return false;
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return false;

    try {
      ctx = new AudioCtx();
      masterGain = ctx.createGain();
      masterGain.gain.value = muted ? 0.0 : 0.28;
      masterGain.connect(ctx.destination);

      // 1. Continuous CAD Actuator Servo Sweep Node
      servoOsc = ctx.createOscillator();
      servoOsc.type = 'sawtooth';
      servoOsc.frequency.value = 140;

      servoFilter = ctx.createBiquadFilter();
      servoFilter.type = 'bandpass';
      servoFilter.frequency.value = 520;
      servoFilter.Q.value = 3.2;

      servoGain = ctx.createGain();
      servoGain.gain.value = 0.0;

      servoOsc.connect(servoFilter);
      servoFilter.connect(servoGain);
      servoGain.connect(masterGain);
      servoOsc.start();

      // 2. Wind-Tunnel CFD Filtered Pink Noise Node
      const noiseBuf = createPinkNoiseBuffer(ctx, 3.0);
      windNoiseSource = ctx.createBufferSource();
      windNoiseSource.buffer = noiseBuf;
      windNoiseSource.loop = true;

      windBandpass = ctx.createBiquadFilter();
      windBandpass.type = 'bandpass';
      windBandpass.frequency.value = 380;
      windBandpass.Q.value = 1.4;

      windGain = ctx.createGain();
      windGain.gain.value = 0.0;

      windNoiseSource.connect(windBandpass);
      windBandpass.connect(windGain);
      windGain.connect(masterGain);
      windNoiseSource.start();

      // 3. 1.6L V6 Turbo Hybrid Drone + 3.2kHz MGU-H Whistle
      v6FundamentalOsc = ctx.createOscillator();
      v6FundamentalOsc.type = 'sawtooth';
      v6FundamentalOsc.frequency.value = 95;

      v6HarmonicOsc = ctx.createOscillator();
      v6HarmonicOsc.type = 'triangle';
      v6HarmonicOsc.frequency.value = 142.5;

      engineFilter = ctx.createBiquadFilter();
      engineFilter.type = 'lowpass';
      engineFilter.frequency.value = 340;
      engineFilter.Q.value = 2.0;

      engineGain = ctx.createGain();
      engineGain.gain.value = 0.0;

      v6FundamentalOsc.connect(engineFilter);
      v6HarmonicOsc.connect(engineFilter);
      engineFilter.connect(engineGain);
      engineGain.connect(masterGain);

      mguhWhistleOsc = ctx.createOscillator();
      mguhWhistleOsc.type = 'sine';
      mguhWhistleOsc.frequency.value = 3200;

      mguhGain = ctx.createGain();
      mguhGain.gain.value = 0.0;

      mguhWhistleOsc.connect(mguhGain);
      mguhGain.connect(masterGain);

      v6FundamentalOsc.start();
      v6HarmonicOsc.start();
      mguhWhistleOsc.start();

      isInitialized = true;
      return true;
    } catch {
      return false;
    }
  }

  if (typeof window !== 'undefined') {
    const unlockHandler = () => {
      ensureContext();
    };
    window.addEventListener('pointerdown', unlockHandler, { once: true, passive: true });
    window.addEventListener('keydown', unlockHandler, { once: true, passive: true });
  }

  function triggerLatchImpulse(mode = 'unlatch') {
    if (!ensureContext() || muted) return;
    try {
      const now = ctx.currentTime;

      // Titanium quarter-turn fastener metallic click
      const clickOsc = ctx.createOscillator();
      const clickGain = ctx.createGain();
      clickOsc.type = 'triangle';
      const startFreq = mode === 'unlatch' ? 1480 : 920;
      const endFreq = mode === 'unlatch' ? 620 : 1680;
      clickOsc.frequency.setValueAtTime(startFreq, now);
      clickOsc.frequency.exponentialRampToValueAtTime(endFreq, now + 0.065);

      clickGain.gain.setValueAtTime(0.24, now);
      clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      clickOsc.connect(clickGain);
      clickGain.connect(masterGain);
      clickOsc.start(now);
      clickOsc.stop(now + 0.075);

      // Sub-bass chassis preload thump
      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(115, now);
      subOsc.frequency.exponentialRampToValueAtTime(42, now + 0.14);

      subGain.gain.setValueAtTime(0.32, now);
      subGain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      subOsc.connect(subGain);
      subGain.connect(masterGain);
      subOsc.start(now);
      subOsc.stop(now + 0.16);
    } catch {
      // Ignore audio errors in headless environments
    }
  }

  function triggerWheelGunBurst() {
    if (!ensureContext() || muted) return;
    try {
      const now = ctx.currentTime;
      const numImpacts = 6;
      const pulseSpacing = 0.036;

      for (let i = 0; i < numImpacts; i++) {
        const t0 = now + i * pulseSpacing;
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(520 + i * 95, t0);
        osc.frequency.exponentialRampToValueAtTime(1850, t0 + 0.026);

        gain.gain.setValueAtTime(0.22, t0);
        gain.gain.exponentialRampToValueAtTime(0.002, t0 + 0.028);

        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(t0);
        osc.stop(t0 + 0.03);
      }
    } catch {
      // Ignore audio errors in headless environments
    }
  }

  function triggerDrsActuator(opening = true) {
    if (!ensureContext() || muted) return;
    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(opening ? 480 : 880, now);
      osc.frequency.exponentialRampToValueAtTime(opening ? 940 : 410, now + 0.11);

      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(masterGain);
      osc.start(now);
      osc.stop(now + 0.13);
    } catch {
      // Ignore audio errors in headless environments
    }
  }

  function updateAudio(simState, telemetry) {
    if (!isInitialized || !ctx || muted) return;
    try {
      const now = ctx.currentTime;
      const velocity = Math.min(12.0, telemetry?.velocity ?? 0.0);

      // Modulate CAD servo sweep by aggregate part velocity |s_dot|
      const targetServoGain = Math.min(0.16, velocity * 0.022);
      const targetServoFreq = 140 + velocity * 52;
      servoGain.gain.setTargetAtTime(targetServoGain, now, 0.04);
      servoOsc.frequency.setTargetAtTime(targetServoFreq, now, 0.04);
      servoFilter.frequency.setTargetAtTime(380 + velocity * 140, now, 0.04);

      // Modulate wind-tunnel pink noise by airspeedKmh & DRS opening
      const airspeed = simState?.windTunnelActive ? (simState.airspeedKmh || 0) : 0;
      const speedNorm = Math.max(0, Math.min(1.2, airspeed / 315));
      const drsFactor = simState?.drsOpen ?? 0.0;
      const targetWindGain = speedNorm * 0.24;
      const targetWindFreq = 260 + speedNorm * 680 + drsFactor * 220;

      windGain.gain.setTargetAtTime(targetWindGain, now, 0.06);
      windBandpass.frequency.setTargetAtTime(targetWindFreq, now, 0.06);

      // Modulate 1.6L V6 Turbo Hybrid drone + 3.2kHz MGU-H whistle
      const isPowertrainActive =
        simState?.activePreset === 'powertrain_cutaway' ||
        simState?.windTunnelActive ||
        (simState?.wheelSpinRpm || 0) > 100;
      const rpmNorm = Math.max(0, Math.min(1.0, (simState?.wheelSpinRpm || (isPowertrainActive ? 650 : 0)) / 2400));

      const baseHz = 85 + rpmNorm * 165;
      v6FundamentalOsc.frequency.setTargetAtTime(baseHz, now, 0.05);
      v6HarmonicOsc.frequency.setTargetAtTime(baseHz * 1.5, now, 0.05);
      engineFilter.frequency.setTargetAtTime(280 + rpmNorm * 620, now, 0.05);
      engineGain.gain.setTargetAtTime(isPowertrainActive ? 0.09 + rpmNorm * 0.08 : 0.0, now, 0.08);

      mguhWhistleOsc.frequency.setTargetAtTime(3150 + rpmNorm * 680, now, 0.05);
      mguhGain.gain.setTargetAtTime(isPowertrainActive ? 0.025 + rpmNorm * 0.045 : 0.0, now, 0.08);
    } catch {
      // Ignore audio errors in headless environments
    }
  }

  function setMuted(nextMuted) {
    muted = Boolean(nextMuted);
    if (masterGain && ctx) {
      masterGain.gain.setTargetAtTime(muted ? 0.0 : 0.28, ctx.currentTime, 0.03);
    }
    return muted;
  }

  return {
    init: ensureContext,
    triggerLatchImpulse,
    triggerWheelGunBurst,
    triggerDrsActuator,
    updateAudio,
    setMuted,
    toggleMute: () => setMuted(!muted),
    isMuted: () => muted
  };
}
