import * as THREE from 'three';

const NUM_RIBBONS = 18;
const SAMPLES_PER_RIBBON = 76;
const NUM_TRACER_PARTICLES = 540;
const X_START = 3.40;
const X_END = -3.40;

const COLOR_STAGNATION_CYAN = new THREE.Color('#38BDF8');
const COLOR_FREESTREAM_BLUE = new THREE.Color('#6366F1');
const COLOR_SUCTION_CRIMSON = new THREE.Color('#F43F5E');
const COLOR_WAKE_VIOLET = new THREE.Color('#A855F7');

const STREAMLINE_SEEDS = Object.freeze([
  // 4 Underfloor Venturi throat & diffuser suction channels
  { id: 0, y0: 0.045, z0: -0.26, ribbonHalfWidth: 0.022, zone: 'venturi' },
  { id: 1, y0: 0.045, z0: 0.26, ribbonHalfWidth: 0.022, zone: 'venturi' },
  { id: 2, y0: 0.052, z0: -0.48, ribbonHalfWidth: 0.020, zone: 'venturi' },
  { id: 3, y0: 0.052, z0: 0.48, ribbonHalfWidth: 0.020, zone: 'venturi' },

  // 4 Front wing & sidepod undercut floor-edge Coanda channels
  { id: 4, y0: 0.14, z0: -0.36, ribbonHalfWidth: 0.021, zone: 'undercut' },
  { id: 5, y0: 0.14, z0: 0.36, ribbonHalfWidth: 0.021, zone: 'undercut' },
  { id: 6, y0: 0.18, z0: -0.58, ribbonHalfWidth: 0.021, zone: 'undercut' },
  { id: 7, y0: 0.18, z0: 0.58, ribbonHalfWidth: 0.021, zone: 'undercut' },

  // 4 Sidepod overbite downwash & Coke-bottle waist channels
  { id: 8, y0: 0.34, z0: -0.44, ribbonHalfWidth: 0.022, zone: 'sidepod_downwash' },
  { id: 9, y0: 0.34, z0: 0.44, ribbonHalfWidth: 0.022, zone: 'sidepod_downwash' },
  { id: 10, y0: 0.44, z0: -0.52, ribbonHalfWidth: 0.020, zone: 'sidepod_downwash' },
  { id: 11, y0: 0.44, z0: 0.52, ribbonHalfWidth: 0.020, zone: 'sidepod_downwash' },

  // 4 Nosecone, Halo & central spine over-body Rear Wing / DRS channels
  { id: 12, y0: 0.22, z0: -0.09, ribbonHalfWidth: 0.019, zone: 'center_spine' },
  { id: 13, y0: 0.22, z0: 0.09, ribbonHalfWidth: 0.019, zone: 'center_spine' },
  { id: 14, y0: 0.38, z0: -0.18, ribbonHalfWidth: 0.019, zone: 'center_spine' },
  { id: 15, y0: 0.38, z0: 0.18, ribbonHalfWidth: 0.019, zone: 'center_spine' },

  // 2 Front tire outwash wake & rear wing endplate vortex channels
  { id: 16, y0: 0.28, z0: -0.76, ribbonHalfWidth: 0.020, zone: 'tire_outwash' },
  { id: 17, y0: 0.28, z0: 0.76, ribbonHalfWidth: 0.020, zone: 'tire_outwash' }
]);

function gaussianPulse(x, center, sigma) {
  const d = (x - center) / sigma;
  return Math.exp(-0.5 * d * d);
}

function smoothStepRange(x, edge0, edge1) {
  const t = Math.max(0, Math.min(1, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function mapCpToColor(cp, outColor) {
  if (cp >= 0.0) {
    const t = Math.min(1.0, cp / 0.55);
    outColor.copy(COLOR_FREESTREAM_BLUE).lerp(COLOR_STAGNATION_CYAN, t);
  } else if (cp >= -0.65) {
    const t = Math.min(1.0, -cp / 0.65);
    outColor.copy(COLOR_FREESTREAM_BLUE).lerp(COLOR_WAKE_VIOLET, t);
  } else {
    const t = Math.min(1.0, (-cp - 0.65) / 0.85);
    outColor.copy(COLOR_WAKE_VIOLET).lerp(COLOR_SUCTION_CRIMSON, t);
  }
  return outColor;
}

export function evaluateStreamlinePoint(seed, uNorm, drsOpen, explodeFactor, elapsed, outPos, outColor) {
  const x = THREE.MathUtils.lerp(X_START, X_END, uNorm);
  const sideSign = seed.z0 < 0 ? -1 : 1;
  const absZ0 = Math.abs(seed.z0);

  let y = seed.y0;
  let z = seed.z0;
  let velocityRatio = 1.0;

  // 1. Front wing upwash & nose stagnation (x in [1.55, 2.75])
  const fwPulse = gaussianPulse(x, 2.32, 0.34);
  if (seed.zone === 'venturi') {
    y -= 0.012 * fwPulse;
    velocityRatio += 0.22 * fwPulse;
  } else {
    const fwUpwash = 0.085 * smoothStepRange(2.65, 1.75, x) * gaussianPulse(x, 2.05, 0.55);
    y += fwUpwash;
    velocityRatio -= 0.18 * gaussianPulse(x, 2.52, 0.22);
  }

  // 2. Front 18-inch tire outwash wake (x in [1.25, 2.20], |z| near 0.78)
  const frontTirePulse = gaussianPulse(x, 1.80, 0.36);
  if (seed.zone === 'tire_outwash' || absZ0 > 0.52) {
    z += sideSign * 0.24 * frontTirePulse;
    y += 0.09 * frontTirePulse;
    velocityRatio -= 0.14 * frontTirePulse;
  }

  // 3. Underfloor Venturi throat acceleration & rear diffuser expansion
  if (seed.zone === 'venturi') {
    const inTunnel = smoothStepRange(1.45, 0.65, x) * smoothStepRange(-2.15, -1.35, x);
    const throatPeak = gaussianPulse(x, -0.25, 0.68);
    y = Math.max(0.022, y - 0.020 * inTunnel);
    z *= 1.0 - 0.18 * throatPeak;
    velocityRatio += 0.64 * throatPeak + 0.32 * inTunnel;

    // Diffuser expansion ramp (x in [-2.25, -1.25])
    if (x < -1.15) {
      const diffRamp = smoothStepRange(-1.15, -2.35, x);
      y += 0.22 * diffRamp;
      z += sideSign * 0.08 * diffRamp;
      velocityRatio += 0.25 * (1.0 - diffRamp * 0.6);
    }
  }

  // 4. Sidepod undercut & Coanda downwash into Coke-bottle waist (x in [-1.65, 0.55])
  if (seed.zone === 'undercut') {
    const undercutPass = smoothStepRange(0.75, -0.15, x) * smoothStepRange(-1.95, -0.95, x);
    z += sideSign * 0.12 * gaussianPulse(x, 0.15, 0.38);
    if (x < -0.15) {
      const cokeBottle = smoothStepRange(-0.15, -1.55, x);
      z *= 1.0 - 0.42 * cokeBottle;
      y -= 0.035 * cokeBottle * (1.0 - smoothStepRange(-1.55, -2.35, x));
    }
    velocityRatio += 0.38 * undercutPass;
  } else if (seed.zone === 'sidepod_downwash') {
    const intakeStag = gaussianPulse(x, 0.32, 0.24);
    velocityRatio -= 0.22 * intakeStag;
    const shoulderLift = gaussianPulse(x, 0.05, 0.36);
    y += 0.11 * shoulderLift;

    if (x < -0.05) {
      const coandaSweep = smoothStepRange(-0.05, -1.55, x) * smoothStepRange(-2.45, -1.45, x);
      y -= 0.16 * coandaSweep;
      z *= 1.0 - 0.36 * coandaSweep;
      velocityRatio += 0.34 * coandaSweep;
    }
  } else if (seed.zone === 'center_spine') {
    const noseClimb = smoothStepRange(2.45, 0.55, x);
    const cockpitArch = gaussianPulse(x, 0.25, 0.55);
    const engineCoverSlope = smoothStepRange(-0.45, -1.85, x);
    y += 0.32 * noseClimb + 0.18 * cockpitArch - 0.14 * engineCoverSlope;
    velocityRatio += 0.24 * cockpitArch;
  }

  // 5. Rear tire wake & Rear Wing + active DRS flap deflection (x < -1.75)
  if (x < -1.70) {
    const rwProgress = smoothStepRange(-1.70, -2.65, x);
    const wakeProgress = smoothStepRange(-2.15, -3.40, x);
    const drsFactor = Math.max(0, Math.min(1, drsOpen));

    // Closed DRS = strong upwash (+0.28m) and steep suction/drag wake; Open DRS (24 deg) reduces upwash by 58%
    const upwashGain = THREE.MathUtils.lerp(0.28, 0.11, drsFactor);
    y += upwashGain * rwProgress;

    const wingTipVortex = Math.sin(elapsed * 9.0 + wakeProgress * 7.5 + seed.id) * 0.032 * wakeProgress * (1.0 - 0.45 * drsFactor);
    z += sideSign * wingTipVortex;
    y += Math.cos(elapsed * 9.0 + wakeProgress * 7.5 + seed.id) * 0.024 * wakeProgress * (1.0 - 0.45 * drsFactor);

    const rwSuction = gaussianPulse(x, -2.28, 0.26) * THREE.MathUtils.lerp(0.46, 0.22, drsFactor);
    velocityRatio += rwSuction;
  }

  // Subtle harmonic wave & explode radial expansion
  const wave = Math.sin(uNorm * 16.0 - elapsed * 11.0 + seed.id * 0.7) * 0.006;
  y += wave + explodeFactor * 0.08 * (y > 0.2 ? 1 : -0.4);
  z *= 1.0 + explodeFactor * 0.18;

  outPos.set(x, y, z);

  // Bernoulli pressure coefficient Cp = 1 - (V / V_inf)^2
  const cp = 1.0 - velocityRatio * velocityRatio;
  mapCpToColor(cp, outColor);

  return cp;
}

export function createWindTunnelSolver(scene) {
  const rootGroup = new THREE.Group();
  rootGroup.name = 'cfd_wind_tunnel_group';
  rootGroup.renderOrder = 4;
  rootGroup.visible = false;

  if (scene && typeof scene.add === 'function') {
    scene.add(rootGroup);
  }

  const ribbonMat = new THREE.MeshBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.0,
    depthWrite: false,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending
  });

  const ribbons = [];
  for (let r = 0; r < NUM_RIBBONS; r++) {
    const seed = STREAMLINE_SEEDS[r];
    const numVerts = SAMPLES_PER_RIBBON * 2;
    const positions = new Float32Array(numVerts * 3);
    const colors = new Float32Array(numVerts * 3);
    const indices = [];

    for (let i = 0; i < SAMPLES_PER_RIBBON - 1; i++) {
      const a = i * 2;
      const b = a + 1;
      const c = a + 2;
      const d = a + 3;
      indices.push(a, b, c);
      indices.push(b, d, c);
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geo.setIndex(indices);

    const mesh = new THREE.Mesh(geo, ribbonMat);
    mesh.name = `cfd_streamline_ribbon_${r}`;
    mesh.renderOrder = 4;
    mesh.frustumCulled = false;
    rootGroup.add(mesh);

    ribbons.push({
      seed,
      mesh,
      geo,
      positions,
      colors
    });
  }

  // 540 high-speed flow tracer particles (30 per streamline)
  const particlePositions = new Float32Array(NUM_TRACER_PARTICLES * 3);
  const particleColors = new Float32Array(NUM_TRACER_PARTICLES * 3);
  const particlePhases = new Float32Array(NUM_TRACER_PARTICLES);
  const particleRibbonIdx = new Uint16Array(NUM_TRACER_PARTICLES);

  for (let p = 0; p < NUM_TRACER_PARTICLES; p++) {
    particleRibbonIdx[p] = p % NUM_RIBBONS;
    particlePhases[p] = (p / NUM_TRACER_PARTICLES + (p % 17) * 0.058) % 1.0;
  }

  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

  const particleMat = new THREE.PointsMaterial({
    size: 0.042,
    vertexColors: true,
    transparent: true,
    opacity: 0.0,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  });

  const particlesMesh = new THREE.Points(particleGeo, particleMat);
  particlesMesh.name = 'cfd_flow_tracer_particles';
  particlesMesh.renderOrder = 4;
  particlesMesh.frustumCulled = false;
  rootGroup.add(particlesMesh);

  let currentOpacity = 0.0;
  const tmpCenter = new THREE.Vector3();
  const tmpColor = new THREE.Color();

  function update(rawDt, elapsed = 0.0, simState = window.__SIM_STATE__) {
    const dt = Math.max(0.001, Math.min(0.05, Number.isFinite(rawDt) ? rawDt : 0.016));
    const isActive = Boolean(simState?.windTunnelActive);
    const targetOpacity = isActive ? 0.82 : 0.0;

    currentOpacity += (targetOpacity - currentOpacity) * Math.min(1.0, dt * 8.0);
    if (currentOpacity <= 0.005) {
      rootGroup.visible = false;
      return;
    }

    rootGroup.visible = true;
    ribbonMat.opacity = currentOpacity * 0.72;
    particleMat.opacity = Math.min(1.0, currentOpacity * 1.15);

    const drsOpen = simState?.drsOpen ?? 0.0;
    const explodeFactor = simState?.masterExplode ?? 0.0;
    const airspeedNorm = Math.max(0.25, Math.min(1.4, (simState?.airspeedKmh || 280) / 300));

    for (let r = 0; r < NUM_RIBBONS; r++) {
      const rib = ribbons[r];
      const { seed, positions, colors, geo } = rib;
      const halfW = seed.ribbonHalfWidth;

      for (let i = 0; i < SAMPLES_PER_RIBBON; i++) {
        const uNorm = i / (SAMPLES_PER_RIBBON - 1);
        evaluateStreamlinePoint(seed, uNorm, drsOpen, explodeFactor, elapsed, tmpCenter, tmpColor);

        // Streamwise surge pulse so ribbons visually stream from front to rear
        const pulseWave = 0.78 + 0.22 * Math.sin(uNorm * 22.0 - elapsed * 14.0 * airspeedNorm + r * 0.5);
        const cr = tmpColor.r * pulseWave;
        const cg = tmpColor.g * pulseWave;
        const cb = tmpColor.b * pulseWave;

        const bankAngle = seed.zone === 'sidepod_downwash' ? 0.55 * (seed.z0 < 0 ? -1 : 1) : 0.15;
        const dz = Math.cos(bankAngle) * halfW;
        const dy = Math.sin(bankAngle) * halfW;

        const vIdx = i * 6;
        positions[vIdx] = tmpCenter.x;
        positions[vIdx + 1] = tmpCenter.y - dy;
        positions[vIdx + 2] = tmpCenter.z - dz;

        positions[vIdx + 3] = tmpCenter.x;
        positions[vIdx + 4] = tmpCenter.y + dy;
        positions[vIdx + 5] = tmpCenter.z + dz;

        colors[vIdx] = cr;
        colors[vIdx + 1] = cg;
        colors[vIdx + 2] = cb;
        colors[vIdx + 3] = cr;
        colors[vIdx + 4] = cg;
        colors[vIdx + 5] = cb;
      }

      geo.attributes.position.needsUpdate = true;
      geo.attributes.color.needsUpdate = true;
    }

    const advSpeed = 0.62 * airspeedNorm * (1.0 + 0.12 * drsOpen);
    for (let p = 0; p < NUM_TRACER_PARTICLES; p++) {
      let u = (particlePhases[p] + dt * advSpeed) % 1.0;
      particlePhases[p] = u;

      const rIdx = particleRibbonIdx[p];
      const seed = STREAMLINE_SEEDS[rIdx];
      evaluateStreamlinePoint(seed, u, drsOpen, explodeFactor, elapsed, tmpCenter, tmpColor);

      const pIdx = p * 3;
      particlePositions[pIdx] = tmpCenter.x;
      particlePositions[pIdx + 1] = tmpCenter.y + 0.005;
      particlePositions[pIdx + 2] = tmpCenter.z;

      const edgeFade = Math.sin(u * Math.PI);
      particleColors[pIdx] = Math.min(1, tmpColor.r * 1.25 * edgeFade);
      particleColors[pIdx + 1] = Math.min(1, tmpColor.g * 1.25 * edgeFade);
      particleColors[pIdx + 2] = Math.min(1, tmpColor.b * 1.25 * edgeFade);
    }

    particleGeo.attributes.position.needsUpdate = true;
    particleGeo.attributes.color.needsUpdate = true;
  }

  function setVisible(visible) {
    rootGroup.visible = Boolean(visible);
  }

  return {
    group: rootGroup,
    ribbons,
    particles: particlesMesh,
    update,
    setVisible
  };
}
