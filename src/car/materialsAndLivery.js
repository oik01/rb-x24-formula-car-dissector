import * as THREE from 'three';

function createCanvas2D(width, height) {
  if (typeof document !== 'undefined') {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return { canvas, ctx: canvas.getContext('2d') };
  }
  const noop = () => {};
  const grad = { addColorStop: noop };
  const ctx = {
    fillStyle: '#000',
    strokeStyle: '#000',
    lineWidth: 1,
    font: '16px sans-serif',
    textAlign: 'center',
    textBaseline: 'middle',
    globalAlpha: 1,
    fillRect: noop,
    strokeRect: noop,
    clearRect: noop,
    beginPath: noop,
    closePath: noop,
    moveTo: noop,
    lineTo: noop,
    bezierCurveTo: noop,
    quadraticCurveTo: noop,
    arc: noop,
    ellipse: noop,
    fill: noop,
    stroke: noop,
    clip: noop,
    save: noop,
    restore: noop,
    translate: noop,
    rotate: noop,
    scale: noop,
    fillText: noop,
    strokeText: noop,
    createLinearGradient: () => grad,
    createRadialGradient: () => grad
  };
  return { canvas: { width, height }, ctx };
}

function finalizeCanvasTexture(canvas, repeatX = 1, repeatY = 1) {
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  if (repeatX > 1 || repeatY > 1) {
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set(repeatX, repeatY);
  } else {
    tex.wrapS = THREE.ClampToEdgeWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
  }
  tex.needsUpdate = true;
  return tex;
}

/**
 * Draws a stylized charging bull silhouette facing +X in local coordinates.
 */
function drawChargingBull(ctx, cx, cy, scaleX, scaleY) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scaleX, scaleY);

  // Sun disk behind bull
  ctx.fillStyle = '#FFB800';
  ctx.beginPath();
  ctx.arc(18, -4, 46, 0, Math.PI * 2);
  ctx.fill();

  // Bull silhouette with solar-amber outline and crimson fill
  ctx.lineWidth = 5;
  ctx.strokeStyle = '#FFB800';
  ctx.fillStyle = '#E11D48';

  ctx.beginPath();
  // Rear haunch & raised tail
  ctx.moveTo(-78, 12);
  ctx.bezierCurveTo(-92, -18, -86, -42, -70, -48);
  ctx.bezierCurveTo(-76, -28, -72, -12, -58, -14);
  // Muscular back & shoulder hump
  ctx.bezierCurveTo(-34, -22, -8, -38, 18, -34);
  ctx.bezierCurveTo(36, -32, 48, -20, 62, -14);
  // Swept forward horn
  ctx.lineTo(86, -24);
  ctx.lineTo(74, -6);
  // Snout & lowered head
  ctx.lineTo(82, 8);
  ctx.lineTo(58, 14);
  // Foreleg charging forward
  ctx.lineTo(74, 36);
  ctx.lineTo(62, 40);
  ctx.lineTo(40, 18);
  // Chest & belly tuck
  ctx.bezierCurveTo(16, 22, -12, 16, -34, 18);
  // Hind leg extended rearward
  ctx.lineTo(-72, 42);
  ctx.lineTo(-84, 36);
  ctx.lineTo(-56, 12);
  ctx.closePath();
  ctx.stroke();
  ctx.fill();

  ctx.restore();
}

/**
 * Executes a drawing callback on both the -Z Port flank (v=0.25 -> py=0.75*H)
 * and the +Z Starboard flank (v=0.75 -> py=0.25*H) with bilateral orientation compensation
 * so that all text and graphics read left-to-right and right-side-up on BOTH sides of the car.
 *
 * Inside callback(ctx, sideSign):
 *   local +x points toward the RIGHT of the viewer looking at that flank
 *   local +y points DOWNWARD from top of car toward bottom of car
 *   forwardSign = +1 on Port (-Z, where +X nose is to viewer's right)
 *   forwardSign = -1 on Starboard (+Z, where +X nose is to viewer's left)
 */
function drawBilateralFlanks(ctx, width, height, drawFlankCallback) {
  // Port (-Z) flank: v in [0, 0.5] -> canvas py in [0.5*H, 1.0*H], center at (0.5*W, 0.75*H)
  // Viewer on -Z side looking +Z sees +X nose to their LEFT (-x) and car top->bottom along +py (+y)
  ctx.save();
  ctx.translate(width * 0.5, height * 0.75);
  ctx.scale(-1, 1);
  drawFlankCallback(ctx, -1);
  ctx.restore();

  // Starboard (+Z) flank: v in [0.5, 1.0] -> canvas py in [0.0, 0.5*H], center at (0.5*W, 0.25*H)
  // Viewer on +Z side looking -Z sees +X nose to their RIGHT (+x) and car top->bottom along -py (-y)
  ctx.save();
  ctx.translate(width * 0.5, height * 0.25);
  ctx.scale(1, -1);
  drawFlankCallback(ctx, 1);
  ctx.restore();
}

function createCarbonWeaveTextures() {
  const size = 1024;
  const { canvas, ctx } = createCanvas2D(size, size);
  const { canvas: bumpCanvas, ctx: bumpCtx } = createCanvas2D(size, size);

  ctx.fillStyle = '#121620';
  ctx.fillRect(0, 0, size, size);
  bumpCtx.fillStyle = '#808080';
  bumpCtx.fillRect(0, 0, size, size);

  const cell = 16;
  for (let y = 0; y < size; y += cell) {
    for (let x = 0; x < size; x += cell) {
      const shift = ((x + y) / cell) % 4;
      ctx.fillStyle = shift < 2 ? '#1C2230' : '#0E121A';
      ctx.fillRect(x, y, cell - 1, cell - 1);

      ctx.fillStyle = shift === 0 ? '#273042' : '#151A24';
      ctx.fillRect(x + 2, y + 2, cell - 5, cell - 5);

      bumpCtx.fillStyle = shift < 2 ? '#B0B0B0' : '#555555';
      bumpCtx.fillRect(x + 1, y + 1, cell - 2, cell - 2);
    }
  }

  return {
    map: finalizeCanvasTexture(canvas, 6, 6),
    bumpMap: finalizeCanvasTexture(bumpCanvas, 6, 6)
  };
}

function createMonocoqueLiveryTexture() {
  const W = 2048;
  const H = 1024;
  const { canvas, ctx } = createCanvas2D(W, H);

  // Matte stealth midnight navy base
  ctx.fillStyle = '#0B101E';
  ctx.fillRect(0, 0, W, H);

  // Subtle carbon panel seams
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.06)';
  ctx.lineWidth = 2;
  for (let u = 0.15; u < 0.9; u += 0.15) {
    ctx.beginPath();
    ctx.moveTo(W * u, 0);
    ctx.lineTo(W * u, H);
    ctx.stroke();
  }

  // Solar-amber nose tip (u from 0.74 to 1.00 across entire perimeter)
  ctx.fillStyle = '#FFB800';
  ctx.fillRect(W * 0.76, 0, W * 0.24, H);

  // Angled transitionchevron between navy nose and solar-amber tip
  ctx.fillStyle = '#FFB800';
  ctx.beginPath();
  ctx.moveTo(W * 0.68, H * 0.50);
  ctx.lineTo(W * 0.78, H * 0.18);
  ctx.lineTo(W * 0.78, H * 0.82);
  ctx.closePath();
  ctx.fill();

  // Crimson upper chine pin-stripes along monocoque shoulders (v ≈ 0.36 and v ≈ 0.64)
  ctx.fillStyle = '#E11D48';
  ctx.fillRect(W * 0.08, H * 0.35, W * 0.66, 12);
  ctx.fillRect(W * 0.08, H * 0.64, W * 0.66, 12);

  // Dorsal top graphics (v = 0.50 -> py = 0.50*H)
  // Orient dorsal text along X axis
  ctx.save();
  ctx.translate(W * 0.54, H * 0.50);
  ctx.rotate(-Math.PI * 0.5);
  // Crimson #1 driver number
  ctx.fillStyle = '#E11D48';
  ctx.strokeStyle = '#FFFFFF';
  ctx.lineWidth = 4;
  ctx.font = '900 92px "Arial Black", Impact, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.strokeText('1', 0, 0);
  ctx.fillText('1', 0, 0);
  ctx.restore();

  // TAG Heuer & ORACLE dorsal nose badges
  ctx.save();
  ctx.translate(W * 0.38, H * 0.50);
  ctx.fillStyle = '#E11D48';
  ctx.fillRect(-26, -22, 52, 22);
  ctx.fillStyle = '#10B981';
  ctx.fillRect(-26, 0, 52, 22);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 15px Arial, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('TAG', 0, -10);
  ctx.fillText('HEUER', 0, 11);
  ctx.restore();

  ctx.save();
  ctx.translate(W * 0.66, H * 0.50);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 26px "Arial Black", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('ORACLE', 0, -14);
  ctx.fillText('Mobil 1', 0, 18);
  ctx.restore();

  // Bilateral flank decals on monocoque/nosecone (-Z Port & +Z Starboard)
  drawBilateralFlanks(ctx, W, H, (fCtx, forwardSign) => {
    // BYBIT sponsor on monocoque cockpit flank (u ≈ 0.34 -> local x = (0.34 - 0.5)*W * forwardSign)
    const bybitX = (0.34 - 0.5) * W * forwardSign;
    fCtx.fillStyle = '#FFFFFF';
    fCtx.font = '900 48px "Arial Black", sans-serif';
    fCtx.textAlign = 'center';
    fCtx.textBaseline = 'middle';
    fCtx.fillText('BYB', bybitX - 28, -28);
    fCtx.fillStyle = '#FFB800';
    fCtx.fillText('I', bybitX + 34, -28);
    fCtx.fillStyle = '#FFFFFF';
    fCtx.fillText('T', bybitX + 62, -28);

    // Charging bull on nosecone flank (u ≈ 0.72)
    const bullX = (0.72 - 0.5) * W * forwardSign;
    drawChargingBull(fCtx, bullX, 0, forwardSign * 0.85, 0.85);
  });

  return finalizeCanvasTexture(canvas);
}

function createSidepodLiveryTexture(side) {
  const W = 2048;
  const H = 1024;
  const { canvas, ctx } = createCanvas2D(W, H);

  // Matte stealth midnight navy base
  ctx.fillStyle = '#0B101E';
  ctx.fillRect(0, 0, W, H);

  // Lower carbon undercut skirt zone (v near 0.0 and 1.0 -> py near H and 0)
  ctx.fillStyle = '#121622';
  ctx.fillRect(0, 0, W, H * 0.10);
  ctx.fillRect(0, H * 0.90, W, H * 0.10);

  // Upper cooling louvre gill recesses near v = 0.42..0.48 (py = 0.52..0.58*H) and v = 0.52..0.58 (py = 0.42..0.48*H)
  ctx.fillStyle = '#05070E';
  for (let i = 0; i < 8; i++) {
    const gx = W * (0.34 + i * 0.045);
    ctx.fillRect(gx, H * 0.53, 44, H * 0.055);
    ctx.fillRect(gx, H * 0.415, 44, H * 0.055);
  }

  // Bilateral flank graphics: ensures both -Z Port and +Z Starboard read left-to-right and right-side-up!
  drawBilateralFlanks(ctx, W, H, (fCtx, forwardSign) => {
    // Crimson upper chine & intake leading-edge pin-stripe
    fCtx.strokeStyle = '#E11D48';
    fCtx.lineWidth = 10;
    fCtx.beginPath();
    fCtx.moveTo(-W * 0.36 * forwardSign, -86);
    fCtx.lineTo(W * 0.40 * forwardSign, -74);
    fCtx.lineTo(W * 0.44 * forwardSign, 60);
    fCtx.stroke();

    // Diagonal Red Bull script above/rearward of ORACLE
    const rbX = -W * 0.14 * forwardSign;
    fCtx.save();
    fCtx.translate(rbX, -58);
    fCtx.rotate(-0.08 * forwardSign);
    fCtx.font = 'italic 900 58px "Arial Black", Impact, sans-serif';
    fCtx.textAlign = 'center';
    fCtx.textBaseline = 'middle';
    fCtx.lineWidth = 6;
    fCtx.strokeStyle = '#FFB800';
    fCtx.fillStyle = '#E11D48';
    fCtx.strokeText('Red Bull', 0, 0);
    fCtx.fillText('Red Bull', 0, 0);
    fCtx.restore();

    // Crisp white ORACLE sidepod hero lettering
    const oracleX = W * 0.04 * forwardSign;
    fCtx.fillStyle = '#FFFFFF';
    fCtx.font = '900 108px "Arial Black", Impact, sans-serif';
    fCtx.textAlign = 'center';
    fCtx.textBaseline = 'middle';
    fCtx.fillText('ORACLE', oracleX, 18);

    // Yellow RAUCH oval badge at lower leading edge (u ≈ 0.80)
    const rauchX = W * 0.28 * forwardSign;
    const rauchY = 88;
    fCtx.fillStyle = '#FFB800';
    fCtx.strokeStyle = '#E11D48';
    fCtx.lineWidth = 5;
    fCtx.beginPath();
    fCtx.ellipse(rauchX, rauchY, 74, 30, 0, 0, Math.PI * 2);
    fCtx.fill();
    fCtx.stroke();

    fCtx.fillStyle = '#B91C1C';
    fCtx.font = '900 28px "Arial Black", sans-serif';
    fCtx.textAlign = 'center';
    fCtx.textBaseline = 'middle';
    fCtx.fillText('RAUCH', rauchX, rauchY + 1);

    // Secondary technical sponsor badges (HONDA RBPT / SIEMENS)
    const rearBadgeX = -W * 0.30 * forwardSign;
    fCtx.fillStyle = '#E2E8F0';
    fCtx.font = 'bold 26px Arial, sans-serif';
    fCtx.fillText('HONDA', rearBadgeX, -18);
    fCtx.font = 'bold 18px Arial, sans-serif';
    fCtx.fillText('SIEMENS', rearBadgeX, 46);
  });

  return finalizeCanvasTexture(canvas);
}

function createEngineCoverLiveryTexture() {
  const W = 2048;
  const H = 1024;
  const { canvas, ctx } = createCanvas2D(W, H);

  // Matte stealth midnight navy base
  ctx.fillStyle = '#0B101E';
  ctx.fillRect(0, 0, W, H);

  // Solar-amber roll-hoop airbox cowl at front of engine cover (u from 0.62 to 1.00)
  ctx.fillStyle = '#FFB800';
  ctx.beginPath();
  ctx.moveTo(W * 0.56, H * 0.50);
  ctx.lineTo(W * 0.74, H * 0.12);
  ctx.lineTo(W, H * 0.12);
  ctx.lineTo(W, H * 0.88);
  ctx.lineTo(W * 0.74, H * 0.88);
  ctx.closePath();
  ctx.fill();

  // Crimson dorsal spine stripe along shark fin root (v = 0.50 -> py = 0.50*H)
  ctx.fillStyle = '#E11D48';
  ctx.fillRect(W * 0.08, H * 0.47, W * 0.52, H * 0.06);

  // Bilateral charging Red Bull silhouette & dorsal #1 on BOTH -Z and +Z flanks
  drawBilateralFlanks(ctx, W, H, (fCtx, forwardSign) => {
    // Large iconic charging bull lunging toward the roll hoop (+X)
    const bullCenterX = W * 0.10 * forwardSign;
    drawChargingBull(fCtx, bullCenterX, -18, forwardSign * 2.15, 1.85);

    // Crimson driver number '1' on rear shark fin / spine flank
    const numX = -W * 0.22 * forwardSign;
    fCtx.fillStyle = '#E11D48';
    fCtx.strokeStyle = '#FFFFFF';
    fCtx.lineWidth = 4;
    fCtx.font = '900 76px "Arial Black", Impact, sans-serif';
    fCtx.textAlign = 'center';
    fCtx.textBaseline = 'middle';
    fCtx.strokeText('1', numX, -48);
    fCtx.fillText('1', numX, -48);

    // HONDA RBPT &HRC badge near rear cooling cannon
    const hrcX = -W * 0.30 * forwardSign;
    fCtx.fillStyle = '#FFFFFF';
    fCtx.font = '900 34px "Arial Black", sans-serif';
    fCtx.fillText('HRC', hrcX, 34);
    fCtx.font = 'bold 20px Arial, sans-serif';
    fCtx.fillText('HONDA RBPT', hrcX, 64);
  });

  return finalizeCanvasTexture(canvas);
}

function createWingLiveryTexture(type) {
  const W = 2048;
  const H = 1024;
  const { canvas, ctx } = createCanvas2D(W, H);

  ctx.fillStyle = '#0D1322';
  ctx.fillRect(0, 0, W, H);

  // Crimson leading/trailing edge accent trim
  ctx.fillStyle = '#E11D48';
  ctx.fillRect(0, 0, W, 36);
  ctx.fillRect(0, H - 36, W, 36);

  if (type === 'front') {
    // BYBIT & Red Bull graphics across front wing flaps
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 112px "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('BYBIT', W * 0.26, H * 0.35);
    ctx.fillText('BYBIT', W * 0.74, H * 0.35);

    ctx.fillStyle = '#E11D48';
    ctx.font = '900 96px "Arial Black", sans-serif';
    ctx.fillText('Red Bull', W * 0.26, H * 0.70);
    ctx.fillText('Red Bull', W * 0.74, H * 0.70);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 64px Arial, sans-serif';
    ctx.fillText('Mobil 1', W * 0.50, H * 0.50);
  } else {
    // Rear wing: ORACLE / BYBIT mainplane & DRS flap + Mobil 1 endplates
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 150px "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('ORACLE', W * 0.50, H * 0.28);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '900 140px "Arial Black", sans-serif';
    ctx.fillText('BYB', W * 0.43, H * 0.72);
    ctx.fillStyle = '#FFB800';
    ctx.fillText('I', W * 0.58, H * 0.72);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText('T', W * 0.65, H * 0.72);
  }

  return finalizeCanvasTexture(canvas);
}

function createRadiatorCoreTexture() {
  const size = 512;
  const { canvas, ctx } = createCanvas2D(size, size);

  ctx.fillStyle = '#94A3B8';
  ctx.fillRect(0, 0, size, size);

  // Fine horizontal heat-exchanger tubes & vertical corrugated fins
  ctx.fillStyle = '#334155';
  for (let y = 0; y < size; y += 8) {
    ctx.fillRect(0, y, size, 3);
  }
  ctx.strokeStyle = '#E2E8F0';
  ctx.lineWidth = 1;
  for (let x = 0; x < size; x += 6) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, size);
    ctx.stroke();
  }

  return finalizeCanvasTexture(canvas, 4, 4);
}

function createPirelliSidewallTexture(sideSign) {
  const size = 1024;
  const { canvas, ctx } = createCanvas2D(size, size);
  const cx = size * 0.5;
  const cy = size * 0.5;

  // Vulcanized dark tire sidewall background
  ctx.fillStyle = '#14171F';
  ctx.fillRect(0, 0, size, size);

  // Outer tire shoulder subtle ribbing
  ctx.strokeStyle = '#1E2330';
  ctx.lineWidth = 14;
  ctx.beginPath();
  ctx.arc(cx, cy, 465, 0, Math.PI * 2);
  ctx.stroke();

  // Pirelli C5 Soft crimson-red sidewall stripe arc
  ctx.strokeStyle = '#E11D48';
  ctx.lineWidth = 22;
  ctx.beginPath();
  ctx.arc(cx, cy, 392, 0.18, Math.PI - 0.18);
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(cx, cy, 392, Math.PI + 0.18, Math.PI * 2 - 0.18);
  ctx.stroke();

  // Curved PIRELLI and P ZERO lettering along sidewall radius
  ctx.save();
  ctx.translate(cx, cy);
  if (sideSign < 0) {
    ctx.scale(-1, 1);
  }
  const drawArcText = (str, radius, startAngle, stepAngle, color) => {
    ctx.fillStyle = color;
    ctx.font = '900 44px "Arial Black", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    for (let i = 0; i < str.length; i++) {
      const ang = startAngle + i * stepAngle;
      ctx.save();
      ctx.rotate(ang);
      ctx.translate(0, -radius);
      ctx.fillText(str[i], 0, 0);
      ctx.restore();
    }
  };
  drawArcText('PIRELLI', 432, -0.36, 0.12, '#FFB800');
  drawArcText('P ZERO', 432, Math.PI - 0.30, 0.12, '#E11D48');
  ctx.restore();

  // 18-inch BBS rim flange & carbon aero wheel cover
  ctx.fillStyle = '#0D1017';
  ctx.beginPath();
  ctx.arc(cx, cy, 330, 0, Math.PI * 2);
  ctx.fill();

  // Red & solar-amber wheel cover outer ring
  ctx.strokeStyle = '#E11D48';
  ctx.lineWidth = 12;
  ctx.beginPath();
  ctx.arc(cx, cy, 316, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = '#FFB800';
  ctx.lineWidth = 6;
  ctx.beginPath();
  ctx.arc(cx, cy, 296, 0, Math.PI * 2);
  ctx.stroke();

  // Radial BBS structural ribs under aero cover
  ctx.strokeStyle = '#1F2637';
  ctx.lineWidth = 8;
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * 90, cy + Math.sin(a) * 90);
    ctx.lineTo(cx + Math.cos(a) * 285, cy + Math.sin(a) * 285);
    ctx.stroke();
  }

  return finalizeCanvasTexture(canvas);
}

export function createCarMaterials() {
  const carbonTextures = createCarbonWeaveTextures();
  const monocoqueTex = createMonocoqueLiveryTexture();
  const sidepodLeftTex = createSidepodLiveryTexture('left');
  const sidepodRightTex = createSidepodLiveryTexture('right');
  const engineCoverTex = createEngineCoverLiveryTexture();
  const frontWingTex = createWingLiveryTexture('front');
  const rearWingTex = createWingLiveryTexture('rear');
  const radiatorTex = createRadiatorCoreTexture();
  const pirelliLeftTex = createPirelliSidewallTexture(-1);
  const pirelliRightTex = createPirelliSidewallTexture(1);

  const monocoqueLiveryMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    map: monocoqueTex,
    roughness: 0.34,
    metalness: 0.18,
    clearcoat: 0.45,
    clearcoatRoughness: 0.22
  });

  const sidepodLeftMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    map: sidepodLeftTex,
    roughness: 0.34,
    metalness: 0.18,
    clearcoat: 0.45,
    clearcoatRoughness: 0.22
  });

  const sidepodRightMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    map: sidepodRightTex,
    roughness: 0.34,
    metalness: 0.18,
    clearcoat: 0.45,
    clearcoatRoughness: 0.22
  });

  const engineCoverMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    map: engineCoverTex,
    roughness: 0.34,
    metalness: 0.18,
    clearcoat: 0.45,
    clearcoatRoughness: 0.22
  });

  const frontWingMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    map: frontWingTex,
    roughness: 0.32,
    metalness: 0.22,
    clearcoat: 0.50,
    clearcoatRoughness: 0.18
  });

  const rearWingMat = new THREE.MeshPhysicalMaterial({
    color: 0xffffff,
    map: rearWingTex,
    roughness: 0.32,
    metalness: 0.22,
    clearcoat: 0.50,
    clearcoatRoughness: 0.18
  });

  const carbonWeaveMat = new THREE.MeshPhysicalMaterial({
    color: new THREE.Color('#151922'),
    map: carbonTextures.map,
    bumpMap: carbonTextures.bumpMap,
    bumpScale: 0.003,
    roughness: 0.38,
    metalness: 0.25,
    clearcoat: 0.35,
    clearcoatRoughness: 0.25
  });

  const titaniumMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#94A3B8'),
    metalness: 0.85,
    roughness: 0.26
  });

  const radiatorCoreMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#CBD5E1'),
    map: radiatorTex,
    bumpMap: radiatorTex,
    bumpScale: 0.006,
    metalness: 0.82,
    roughness: 0.32
  });

  const inconelExhaustMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#B45309'),
    metalness: 0.88,
    roughness: 0.24,
    emissive: new THREE.Color(0xFF5500),
    emissiveIntensity: 0.15
  });

  const camCoverRedMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#E11D48'),
    metalness: 0.72,
    roughness: 0.22
  });

  const ersGreenMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#10B981'),
    metalness: 0.45,
    roughness: 0.30
  });

  const pirelliTireMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#14171F'),
    roughness: 0.78,
    metalness: 0.05
  });

  const pirelliSidewallLeftMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: pirelliLeftTex,
    roughness: 0.65,
    metalness: 0.12
  });

  const pirelliSidewallRightMat = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    map: pirelliRightTex,
    roughness: 0.65,
    metalness: 0.12
  });

  const brakeDiscMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#262B36'),
    roughness: 0.45,
    metalness: 0.55,
    emissive: new THREE.Color(0xFF4500),
    emissiveIntensity: 0.08
  });

  const bremboCaliperMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#E11D48'),
    metalness: 0.65,
    roughness: 0.25
  });

  const yellowTcamMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#FFD000'),
    roughness: 0.25,
    metalness: 0.15
  });

  return {
    monocoqueLiveryMat,
    sidepodLeftMat,
    sidepodRightMat,
    engineCoverMat,
    frontWingMat,
    rearWingMat,
    carbonWeaveMat,
    titaniumMat,
    radiatorCoreMat,
    inconelExhaustMat,
    camCoverRedMat,
    ersGreenMat,
    pirelliTireMat,
    pirelliSidewallLeftMat,
    pirelliSidewallRightMat,
    brakeDiscMat,
    bremboCaliperMat,
    yellowTcamMat
  };
}
