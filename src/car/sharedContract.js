import * as THREE from 'three';

export const CAR_DIMENSIONS = Object.freeze({
  length: 5.63,
  width: 2.00,
  height: 0.95,
  wheelbase: 3.60,
  frontAxleX: 1.80,
  rearAxleX: -1.80,
  wheelRadius: 0.36,
  frontTireWidth: 0.305,
  rearTireWidth: 0.405,
  frontTrackHalfZ: 0.84,
  rearTrackHalfZ: 0.80,
  rakeFrontY: 0.015,
  rakeRearY: 0.052
});

export const PART_REGISTRY = Object.freeze([
  {
    id: 'part_01_front_wing',
    code: 'ASM-01',
    name: 'Front wing & nosecone assembly',
    layer: 'aero',
    assembledPivot: [2.10, 0.24, 0.00],
    explodeVector: [1.45, 0.06, 0.00],
    explodeArcOffset: [0.65, 0.22, 0.00],
    explodeRotation: [0.04, 0.0, 0.0],
    staggerWindow: [0.02, 0.52],
    omegaN: 15.2,
    zeta: 0.58,
    massKg: 14.8,
    materialSpec: 'Toray T1100G CFRP / Nomex Honeycomb Core',
    fiaArticle: 'FIA Tech Reg Art. 3.9',
    telemetryMetrics: { loadN: 4850, tempC: 34, aeroCoeff: 'Cz -0.82 / Cx 0.14' },
    description: '7-station lofted survival nosecone with solar-amber tip, 4-element slotted carbon airfoils, canted outwash endplates, S-shaped diveplanes, and twin swan-neck pylons.'
  },
  {
    id: 'part_02_monocoque',
    code: 'ASM-02',
    name: 'Survival cell monocoque & cockpit',
    layer: 'chassis',
    assembledPivot: [0.55, 0.42, 0.00],
    explodeVector: [0.00, 0.36, 0.00],
    explodeArcOffset: [0.05, 0.22, 0.00],
    explodeRotation: [0.0, 0.0, 0.0],
    staggerWindow: [0.22, 0.72],
    omegaN: 14.0,
    zeta: 0.62,
    massKg: 62.5,
    materialSpec: 'T1100G Carbon / Zylon Anti-Intrusion Laminate',
    fiaArticle: 'FIA Tech Reg Art. 12.1',
    telemetryMetrics: { loadN: 32500, tempC: 41, aeroCoeff: 'Torsional 52 kNm/deg' },
    description: '8-station lofted carbon-Kevlar survival tub housing the sculpted carbon bucket seat, FIA head-protection collar, multi-rotary OLED steering wheel, and pedal box.'
  },
  {
    id: 'part_03_halo',
    code: 'ASM-03',
    name: 'Titanium Halo safety structure',
    layer: 'chassis',
    assembledPivot: [0.42, 0.74, 0.00],
    explodeVector: [0.15, 0.98, 0.00],
    explodeArcOffset: [0.18, 0.62, 0.00],
    explodeRotation: [-0.06, 0.0, 0.0],
    staggerWindow: [0.06, 0.56],
    omegaN: 16.0,
    zeta: 0.56,
    massKg: 7.0,
    materialSpec: 'Grade 5 Ti-6Al-4V Forged Titanium + Carbon Fairing',
    fiaArticle: 'FIA Tech Reg Art. 12.4',
    telemetryMetrics: { loadN: 125000, tempC: 32, aeroCoeff: 'Wake Fairing Cd 0.02' },
    description: 'Aerodynamically faired Grade 5 titanium cockpit protection hoop with central V-strut shear mount rated to withstand 125 kN vertical compressive load.'
  },
  {
    id: 'part_04_sidepod_left',
    code: 'ASM-04',
    name: 'Left undercut downwash sidepod (-Z)',
    layer: 'aero',
    assembledPivot: [-0.35, 0.38, -0.52],
    explodeVector: [-0.10, 0.28, -1.18],
    explodeArcOffset: [-0.04, 0.42, -0.68],
    explodeRotation: [-0.05, 0.08, 0.04],
    staggerWindow: [0.04, 0.54],
    omegaN: 14.8,
    zeta: 0.57,
    massKg: 11.2,
    materialSpec: 'Ultra-Thin Pre-Preg CFRP + Al-Matrix Radiator Core',
    fiaArticle: 'FIA Tech Reg Art. 3.7',
    telemetryMetrics: { loadN: 1620, tempC: 108, aeroCoeff: 'Coanda Downwash +14%' },
    description: 'Port (-Z) 7-station lofted sidepod shell with high overbite intake lip, deep floor undercut channel, 8 cooling louvre gills, and angled water/oil radiator core.'
  },
  {
    id: 'part_05_sidepod_right',
    code: 'ASM-05',
    name: 'Right undercut downwash sidepod (+Z)',
    layer: 'aero',
    assembledPivot: [-0.35, 0.38, 0.52],
    explodeVector: [-0.10, 0.28, 1.18],
    explodeArcOffset: [-0.04, 0.42, 0.68],
    explodeRotation: [0.05, -0.08, 0.04],
    staggerWindow: [0.04, 0.54],
    omegaN: 14.8,
    zeta: 0.57,
    massKg: 11.2,
    materialSpec: 'Ultra-Thin Pre-Preg CFRP + Charge-Air Intercooler',
    fiaArticle: 'FIA Tech Reg Art. 3.7',
    telemetryMetrics: { loadN: 1620, tempC: 96, aeroCoeff: 'Coanda Downwash +14%' },
    description: 'Starboard (+Z) 7-station lofted sidepod shell with forward-reading bilateral ORACLE UV mapping, deep undercut trough, 8 cooling louvres, and turbo charge-air intercooler.'
  },
  {
    id: 'part_06_engine_cover',
    code: 'ASM-06',
    name: 'Engine cover, roll hoop & shark fin',
    layer: 'aero',
    assembledPivot: [-0.78, 0.70, 0.00],
    explodeVector: [-0.45, 1.28, 0.00],
    explodeArcOffset: [-0.18, 0.85, 0.00],
    explodeRotation: [0.0, 0.0, 0.06],
    staggerWindow: [0.05, 0.55],
    omegaN: 14.4,
    zeta: 0.56,
    massKg: 8.4,
    materialSpec: 'Autoclaved Carbon Monoskin + Ti Roll Structure',
    fiaArticle: 'FIA Tech Reg Art. 3.6 / 12.3',
    telemetryMetrics: { loadN: 2400, tempC: 84, aeroCoeff: 'Yaw Stability +18%' },
    description: '8-station lofted spine cowl featuring the solar-amber roll-hoop ram-air intake, FIA T-Cam transponder bar, dorsal shark-fin stabilizer, and rear cooling cannon exit.'
  },
  {
    id: 'part_07_venturi_floor',
    code: 'ASM-07',
    name: 'Venturi ground-effect floor & diffuser',
    layer: 'aero',
    assembledPivot: [-0.45, 0.08, 0.00],
    explodeVector: [0.00, -0.54, 0.00],
    explodeArcOffset: [-0.08, -0.32, 0.00],
    explodeRotation: [0.0, 0.0, 0.0],
    staggerWindow: [0.20, 0.72],
    omegaN: 13.8,
    zeta: 0.60,
    massKg: 26.5,
    materialSpec: 'High-Modulus Carbon Floor + Titanium Skid Blocks',
    fiaArticle: 'FIA Tech Reg Art. 3.5',
    telemetryMetrics: { loadN: 11400, tempC: 68, aeroCoeff: 'Cz -1.95 (62% Total DF)' },
    description: 'Full-span ground-effect undertray with 4 pairs of curved Venturi inlet fences, sculpted low-pressure throat tunnels, rising rear diffuser expansion ramp, and edge vortex scroll.'
  },
  {
    id: 'part_08_power_unit',
    code: 'ASM-08',
    name: '1.6L V6 turbo hybrid power unit & ERS',
    layer: 'powertrain',
    assembledPivot: [-0.58, 0.34, 0.00],
    explodeVector: [-0.28, 0.68, 0.00],
    explodeArcOffset: [-0.12, 0.45, 0.00],
    explodeRotation: [0.0, 0.0, 0.0],
    staggerWindow: [0.26, 0.78],
    omegaN: 13.5,
    zeta: 0.61,
    massKg: 151.0,
    materialSpec: 'Billet Al-Si Block / Inconel 625 Headers / Li-Ion ES',
    fiaArticle: 'FIA Tech Reg Art. 5.1',
    telemetryMetrics: { loadN: 9800, tempC: 790, aeroCoeff: '1050 BHP @ 15,000 RPM' },
    description: 'Stressed 90-degree 1.6L V6 internal combustion engine with axial-radial turbocharger, MGU-H shaft generator, 120 kW MGU-K, carbon airbox plenum, and hydroformed Inconel 625 3-into-1 exhaust.'
  },
  {
    id: 'part_09_gearbox',
    code: 'ASM-09',
    name: '8-speed carbon-titanium gearbox & diffuser spine',
    layer: 'powertrain',
    assembledPivot: [-1.58, 0.30, 0.00],
    explodeVector: [-1.05, 0.18, 0.00],
    explodeArcOffset: [-0.62, 0.24, 0.00],
    explodeRotation: [0.0, 0.0, -0.03],
    staggerWindow: [0.24, 0.76],
    omegaN: 14.2,
    zeta: 0.60,
    massKg: 41.0,
    materialSpec: 'Woven Carbon Maincase + Investment-Cast Ti6Al4V Bulkhead',
    fiaArticle: 'FIA Tech Reg Art. 9.1 / 13.6',
    telemetryMetrics: { loadN: 14200, tempC: 118, aeroCoeff: 'Shift Time 6.5 ms' },
    description: 'Structural carbon-composite 8-speed seamless-shift longitudinal transmission housing the electronically controlled hydraulic differential, rear suspension torsion mounts, and FIA rear impact structure.'
  },
  {
    id: 'part_10_suspension_brakes',
    code: 'ASM-10',
    name: 'Pullrod/pushrod suspension & Brembo brakes',
    layer: 'chassis_dynamics',
    assembledPivot: [0.00, 0.36, 0.00],
    explodeVector: [0.00, 0.12, 0.56],
    explodeArcOffset: [0.00, 0.18, 0.32],
    explodeRotation: [0.0, 0.0, 0.0],
    staggerWindow: [0.18, 0.68],
    omegaN: 15.6,
    zeta: 0.58,
    massKg: 34.0,
    materialSpec: 'Aero-Profiled Carbon Wishbones + Carbon-Ceramic Discs',
    fiaArticle: 'FIA Tech Reg Art. 10.3 / 11.1',
    telemetryMetrics: { loadN: 21500, tempC: 685, aeroCoeff: 'Peak Decel 5.8 G' },
    description: 'Front pullrod and rear pushrod double-wishbone carbon suspension assemblies with CNC upright carriers, carbon cooling ducts, 328mm cross-drilled carbon-ceramic discs, and 6-piston Brembo calipers.'
  },
  {
    id: 'part_11_rear_wing_drs',
    code: 'ASM-11',
    name: 'DRS rear wing & dual beam wing assembly',
    layer: 'aero',
    assembledPivot: [-2.32, 0.64, 0.00],
    explodeVector: [-1.68, 0.66, 0.00],
    explodeArcOffset: [-0.95, 0.55, 0.00],
    explodeRotation: [0.0, 0.0, -0.05],
    staggerWindow: [0.04, 0.54],
    omegaN: 15.0,
    zeta: 0.56,
    massKg: 12.6,
    materialSpec: 'High-Strain CFRP + Hydraulic Swan-Neck DRS Pod',
    fiaArticle: 'FIA Tech Reg Art. 3.10',
    telemetryMetrics: { loadN: 6100, tempC: 36, aeroCoeff: 'DRS Delta -28% Drag' },
    description: 'Single central swan-neck pylon supporting the deep-spoon mainplane, hinged upper DRS flap (0-24 deg active actuation), curved louvred endplates, and lower bi-plane beam wing.'
  },
  {
    id: 'part_12_wheels_tires',
    code: 'ASM-12',
    name: '4x 18-inch Pirelli P Zero wheels & aero covers',
    layer: 'chassis_dynamics',
    assembledPivot: [0.00, 0.36, 0.00],
    explodeVector: [0.35, 0.00, 1.35],
    explodeArcOffset: [0.18, 0.14, 0.78],
    explodeRotation: [0.0, 0.0, 0.0],
    staggerWindow: [0.00, 0.48],
    omegaN: 16.4,
    zeta: 0.54,
    massKg: 78.0,
    materialSpec: 'Forged Mg BBS 18" Rims + Pirelli P Zero C5 Soft Compound',
    fiaArticle: 'FIA Tech Reg Art. 10.8',
    telemetryMetrics: { loadN: 18400, tempC: 102, aeroCoeff: '720mm OD (305F / 405R)' },
    description: 'Four 720mm outer-diameter Pirelli P Zero Soft slick tires mounted on 18-inch forged magnesium BBS rims with rotating carbon aero wheel covers, center-lock nuts, and over-wheel wake winglets.'
  }
]);

export function getEnvelopeBounds(x) {
  const clampedX = Math.max(-2.20, Math.min(2.85, x));
  const rakeY = 0.015 + Math.max(0, (1.80 - clampedX) / 3.80) * 0.037;
  let yTop = 0.58;
  let zSpineHalf = 0.28;
  let zPodHalf = 0.72;

  if (clampedX > 1.45) {
    const t = (clampedX - 1.45) / (2.85 - 1.45);
    yTop = THREE.MathUtils.lerp(0.56, 0.19, Math.pow(t, 0.85));
    zSpineHalf = THREE.MathUtils.lerp(0.27, 0.085, t);
    zPodHalf = zSpineHalf;
  } else if (clampedX >= 0.0) {
    const t = clampedX / 1.45;
    yTop = THREE.MathUtils.lerp(0.68, 0.56, t);
    zSpineHalf = THREE.MathUtils.lerp(0.34, 0.27, t);
    zPodHalf = THREE.MathUtils.lerp(0.73, 0.30, Math.pow(t, 1.4));
  } else {
    const t = Math.min(1, Math.abs(clampedX) / 1.75);
    yTop = THREE.MathUtils.lerp(0.92, 0.46, Math.pow(t, 0.9));
    zSpineHalf = THREE.MathUtils.lerp(0.32, 0.13, t);
    zPodHalf = THREE.MathUtils.lerp(0.73, 0.22, Math.pow(t, 1.15));
  }

  return {
    yBottom: rakeY + 0.025,
    yTop,
    zSpineHalf,
    zPodHalf,
    internalMaxY: yTop - 0.025,
    internalMaxZ: Math.max(0.16, zSpineHalf - 0.022)
  };
}

/**
 * Multi-station 3D cross-section lofting utility with separated endcap normals
 * and bilateral UV parameterization:
 * u in [0, 1] along longitudinal stations
 * v in [0, 1] around cross-section perimeter (0=bottom, 0.25=-Z port flank, 0.5=top, 0.75=+Z starboard flank, 1=bottom)
 */
export function createLoftedShellGeometry(stations, radialSegments = 48, closeCaps = true) {
  const numStations = stations.length;
  const positions = [];
  const uvs = [];
  const indices = [];

  const xMin = stations[0].x;
  const xMax = stations[numStations - 1].x;
  const xSpan = Math.max(0.0001, xMax - xMin);

  function sampleStationPoint(st, sNorm) {
    const theta = sNorm * Math.PI * 2;
    const rawZ = -Math.sin(theta);
    const rawY = -Math.cos(theta);
    const yNorm = (rawY + 1) * 0.5;

    const topRatio = st.topWidthRatio ?? 0.72;
    const bottomRatio = st.bottomWidthRatio ?? 0.88;
    const undercut = st.undercut ?? 0.0;
    const shoulderPower = st.shoulderPower ?? 1.35;

    let widthProfile = THREE.MathUtils.lerp(bottomRatio, topRatio, Math.pow(yNorm, shoulderPower));
    if (undercut > 0 && yNorm < 0.48) {
      const uPhase = Math.sin((yNorm / 0.48) * Math.PI);
      widthProfile *= (1.0 - undercut * uPhase);
    }

    const zHalf = Math.max(0.005, st.zHalfWidth * widthProfile);
    const zOffset = st.zCenter ?? 0.0;
    const z = zOffset + rawZ * zHalf;

    const ySpan = Math.max(0.005, st.yTop - st.yBottom);
    const crown = (st.crown ?? 0.0) * Math.cos(rawZ * Math.PI * 0.5);
    const y = st.yBottom + yNorm * ySpan + (yNorm > 0.5 ? crown * (yNorm - 0.5) * 2.0 : 0.0);

    return [st.x, y, z];
  }

  for (let i = 0; i < numStations; i++) {
    const st = stations[i];
    const u = (st.x - xMin) / xSpan;
    for (let j = 0; j <= radialSegments; j++) {
      const sNorm = j / radialSegments;
      const [px, py, pz] = sampleStationPoint(st, sNorm);
      positions.push(px, py, pz);
      uvs.push(u, sNorm);
    }
  }

  const ringStride = radialSegments + 1;
  for (let i = 0; i < numStations - 1; i++) {
    for (let j = 0; j < radialSegments; j++) {
      const a = i * ringStride + j;
      const b = (i + 1) * ringStride + j;
      const c = (i + 1) * ringStride + (j + 1);
      const d = i * ringStride + (j + 1);
      indices.push(a, d, b);
      indices.push(b, d, c);
    }
  }

  const shellGeo = new THREE.BufferGeometry();
  shellGeo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  shellGeo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  shellGeo.setIndex(indices);
  shellGeo.computeVertexNormals();

  if (!closeCaps) {
    return shellGeo;
  }

  // Separated endcap rings so flat cap normals never average with smooth hull normals
  const capPositions = Array.from(shellGeo.attributes.position.array);
  const capNormals = Array.from(shellGeo.attributes.normal.array);
  const capUvs = Array.from(shellGeo.attributes.uv.array);
  const capIndices = Array.from(shellGeo.index.array);

  function appendEndcap(station, normalDir) {
    const centerIdx = capPositions.length / 3;
    const cy = (station.yBottom + station.yTop) * 0.5;
    const cz = station.zCenter ?? 0.0;
    capPositions.push(station.x, cy, cz);
    capNormals.push(normalDir, 0, 0);
    capUvs.push(normalDir < 0 ? 0 : 1, 0.5);

    const ringStart = capPositions.length / 3;
    for (let j = 0; j <= radialSegments; j++) {
      const sNorm = j / radialSegments;
      const [px, py, pz] = sampleStationPoint(station, sNorm);
      capPositions.push(px, py, pz);
      capNormals.push(normalDir, 0, 0);
      capUvs.push(normalDir < 0 ? 0 : 1, sNorm);
    }

    for (let j = 0; j < radialSegments; j++) {
      const r0 = ringStart + j;
      const r1 = ringStart + j + 1;
      if (normalDir < 0) {
        capIndices.push(centerIdx, r1, r0);
      } else {
        capIndices.push(centerIdx, r0, r1);
      }
    }
  }

  appendEndcap(stations[0], -1);
  appendEndcap(stations[numStations - 1], 1);

  const fullGeo = new THREE.BufferGeometry();
  fullGeo.setAttribute('position', new THREE.Float32BufferAttribute(capPositions, 3));
  fullGeo.setAttribute('normal', new THREE.Float32BufferAttribute(capNormals, 3));
  fullGeo.setAttribute('uv', new THREE.Float32BufferAttribute(capUvs, 2));
  fullGeo.setIndex(capIndices);
  return fullGeo;
}
