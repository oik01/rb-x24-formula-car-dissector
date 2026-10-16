import * as THREE from 'three';
import { createLoftedShellGeometry } from './sharedContract.js';

function enableShadows(root, partId) {
  root.name = partId;
  root.userData.partId = partId;
  root.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      child.userData.partId = partId;
    }
  });
  return root;
}

/**
 * Creates a spanwise 3D airfoil blade (spanning Z from zMin to zMax) with a central spoon drop,
 * chord sweep, and cambered upper/lower surfaces.
 */
function createSpanwiseAirfoilGeometry({
  zMin,
  zMax,
  zSegments = 36,
  chordSegments = 14,
  xLeadingFn,
  xTrailingFn,
  yBaseFn,
  thickness = 0.016,
  camber = 0.010
}) {
  const positions = [];
  const uvs = [];
  const indices = [];

  const ringCount = chordSegments * 2;
  for (let iz = 0; iz <= zSegments; iz++) {
    const u = iz / zSegments;
    const z = THREE.MathUtils.lerp(zMin, zMax, u);
    const xLead = xLeadingFn(z);
    const xTrail = xTrailingFn(z);
    const yBase = yBaseFn(z);

    for (let ic = 0; ic <= ringCount; ic++) {
      const v = ic / ringCount;
      const isUpper = v <= 0.5;
      const tChord = isUpper ? v * 2.0 : (1.0 - v) * 2.0; // 0 = trailing, 1 = leading
      const x = THREE.MathUtils.lerp(xTrail, xLead, tChord);

      const foilEnv = Math.sin(tChord * Math.PI);
      const camberOffset = camber * foilEnv;
      const halfThick = thickness * 0.5 * Math.pow(foilEnv, 0.75);
      const y = yBase + camberOffset + (isUpper ? halfThick : -halfThick);

      positions.push(x, y, z);
      uvs.push(u, v);
    }
  }

  const stride = ringCount + 1;
  for (let iz = 0; iz < zSegments; iz++) {
    for (let ic = 0; ic < ringCount; ic++) {
      const a = iz * stride + ic;
      const b = (iz + 1) * stride + ic;
      const c = (iz + 1) * stride + (ic + 1);
      const d = iz * stride + (ic + 1);
      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
  geo.setIndex(indices);
  geo.computeVertexNormals();
  return geo;
}

/**
 * 1. part_01_front_wing
 * 7-station lofted nosecone (x=+1.35..+2.82m), twin swan-neck pylons,
 * 4-element stacked carbon airfoils (z=-0.98..+0.98m) with central spoon,
 * slot-gap separators, canted outboard endplates, S-shaped diveplanes, and FIA camera pods.
 */
function buildFrontWingAndNose(materials) {
  const group = new THREE.Group();

  // 7-station lofted survival nosecone from x = +1.35m to x = +2.82m
  const noseStations = [
    { x: 1.35, yBottom: 0.34, yTop: 0.56, zHalfWidth: 0.250, topWidthRatio: 0.74, bottomWidthRatio: 0.90, crown: 0.022 },
    { x: 1.62, yBottom: 0.31, yTop: 0.50, zHalfWidth: 0.215, topWidthRatio: 0.74, bottomWidthRatio: 0.88, crown: 0.020 },
    { x: 1.90, yBottom: 0.27, yTop: 0.43, zHalfWidth: 0.180, topWidthRatio: 0.75, bottomWidthRatio: 0.88, crown: 0.018 },
    { x: 2.18, yBottom: 0.23, yTop: 0.36, zHalfWidth: 0.148, topWidthRatio: 0.76, bottomWidthRatio: 0.86, crown: 0.015 },
    { x: 2.44, yBottom: 0.19, yTop: 0.29, zHalfWidth: 0.118, topWidthRatio: 0.78, bottomWidthRatio: 0.86, crown: 0.012 },
    { x: 2.66, yBottom: 0.16, yTop: 0.24, zHalfWidth: 0.094, topWidthRatio: 0.80, bottomWidthRatio: 0.85, crown: 0.008 },
    { x: 2.82, yBottom: 0.14, yTop: 0.21, zHalfWidth: 0.075, topWidthRatio: 0.82, bottomWidthRatio: 0.84, crown: 0.005 }
  ];
  const noseGeo = createLoftedShellGeometry(noseStations, 48, true);
  const noseMesh = new THREE.Mesh(noseGeo, materials.monocoqueLiveryMat);
  group.add(noseMesh);

  // Twin swan-neck front wing pylons at x = +2.38m..+2.62m, z = ±0.11m
  for (const side of [-1, 1]) {
    const pylonStations = [
      { x: 2.38, yBottom: 0.075, yTop: 0.21, zCenter: side * 0.11, zHalfWidth: 0.012, topWidthRatio: 0.9, bottomWidthRatio: 0.9 },
      { x: 2.50, yBottom: 0.068, yTop: 0.20, zCenter: side * 0.11, zHalfWidth: 0.014, topWidthRatio: 0.9, bottomWidthRatio: 0.9 },
      { x: 2.62, yBottom: 0.078, yTop: 0.18, zCenter: side * 0.11, zHalfWidth: 0.010, topWidthRatio: 0.9, bottomWidthRatio: 0.9 }
    ];
    const pylonGeo = createLoftedShellGeometry(pylonStations, 20, true);
    group.add(new THREE.Mesh(pylonGeo, materials.carbonWeaveMat));
  }

  // 4-element stacked carbon airfoils spanning z = -0.98m to +0.98m (x = +2.28m..+2.85m, y = 0.045m..0.16m)
  const elements = [
    { xLeadCenter: 2.85, xLeadTip: 2.74, chord: 0.16, yCenter: 0.048, yPeak: 0.078, yTip: 0.065, camber: 0.008 },
    { xLeadCenter: 2.71, xLeadTip: 2.61, chord: 0.14, yCenter: 0.068, yPeak: 0.102, yTip: 0.088, camber: 0.011 },
    { xLeadCenter: 2.58, xLeadTip: 2.48, chord: 0.13, yCenter: 0.094, yPeak: 0.130, yTip: 0.114, camber: 0.013 },
    { xLeadCenter: 2.45, xLeadTip: 2.35, chord: 0.12, yCenter: 0.122, yPeak: 0.160, yTip: 0.142, camber: 0.015 }
  ];

  elements.forEach((el, idx) => {
    const airfoilGeo = createSpanwiseAirfoilGeometry({
      zMin: -0.98,
      zMax: 0.98,
      zSegments: 44,
      chordSegments: 12,
      xLeadingFn: (z) => {
        const az = Math.abs(z) / 0.98;
        return THREE.MathUtils.lerp(el.xLeadCenter, el.xLeadTip, Math.pow(az, 1.35));
      },
      xTrailingFn: (z) => {
        const az = Math.abs(z) / 0.98;
        const lead = THREE.MathUtils.lerp(el.xLeadCenter, el.xLeadTip, Math.pow(az, 1.35));
        return lead - el.chord * (1.0 - 0.12 * az);
      },
      yBaseFn: (z) => {
        const az = Math.abs(z) / 0.98;
        // Central spoon dip for |z| < 0.25, rising to mid-span peak, sweeping slightly down toward endplate
        const spoon = Math.exp(-Math.pow(az / 0.24, 2));
        const midRise = Math.sin(Math.min(1, az) * Math.PI * 0.85);
        return el.yCenter * spoon + THREE.MathUtils.lerp(el.yPeak, el.yTip, az) * (1 - spoon * 0.65) + 0.012 * midRise;
      },
      thickness: 0.015 - idx * 0.0015,
      camber: el.camber
    });

    const mat = idx === 1 || idx === 2 ? materials.frontWingMat : materials.carbonWeaveMat;
    group.add(new THREE.Mesh(airfoilGeo, mat));
  });

  // Titanium slot-gap separators across the span
  const separatorZ = [-0.78, -0.52, -0.26, 0.26, 0.52, 0.78];
  const sepGeo = new THREE.BoxGeometry(0.32, 0.055, 0.005);
  for (const sz of separatorZ) {
    const sep = new THREE.Mesh(sepGeo, materials.titaniumMat);
    sep.position.set(2.56, 0.105, sz);
    sep.rotation.z = -0.18;
    group.add(sep);
  }

  // Canted outboard endplates (x = +2.25m..+2.82m, y = 0.04m..0.34m, z = ±0.99m) + S-shaped outer diveplanes
  for (const side of [-1, 1]) {
    const epStations = [
      { x: 2.25, yBottom: 0.045, yTop: 0.34, zCenter: side * 0.995, zHalfWidth: 0.010, topWidthRatio: 0.8, bottomWidthRatio: 1.0 },
      { x: 2.44, yBottom: 0.042, yTop: 0.31, zCenter: side * 0.990, zHalfWidth: 0.011, topWidthRatio: 0.8, bottomWidthRatio: 1.0 },
      { x: 2.64, yBottom: 0.040, yTop: 0.24, zCenter: side * 0.985, zHalfWidth: 0.010, topWidthRatio: 0.8, bottomWidthRatio: 1.0 },
      { x: 2.82, yBottom: 0.042, yTop: 0.14, zCenter: side * 0.980, zHalfWidth: 0.008, topWidthRatio: 0.8, bottomWidthRatio: 1.0 }
    ];
    const epGeo = createLoftedShellGeometry(epStations, 24, true);
    const epMesh = new THREE.Mesh(epGeo, materials.carbonWeaveMat);
    epMesh.rotation.x = side * 0.05;
    group.add(epMesh);

    const epAccentGeo = new THREE.BoxGeometry(0.52, 0.012, 0.014);
    const epAccent = new THREE.Mesh(epAccentGeo, materials.camCoverRedMat);
    epAccent.position.set(2.52, 0.25, side * 0.992);
    epAccent.rotation.z = -0.32;
    group.add(epAccent);

    // Footplate outwash tunnel runner
    const footStations = [
      { x: 2.25, yBottom: 0.038, yTop: 0.055, zCenter: side * 0.975, zHalfWidth: 0.032 },
      { x: 2.55, yBottom: 0.038, yTop: 0.055, zCenter: side * 0.975, zHalfWidth: 0.035 },
      { x: 2.80, yBottom: 0.040, yTop: 0.054, zCenter: side * 0.970, zHalfWidth: 0.024 }
    ];
    group.add(new THREE.Mesh(createLoftedShellGeometry(footStations, 18, true), materials.carbonWeaveMat));

    // S-shaped outer diveplane canard on endplate outer face
    const diveCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(2.68, 0.14, side * 1.002),
      new THREE.Vector3(2.52, 0.18, side * 1.012),
      new THREE.Vector3(2.34, 0.23, side * 1.015)
    ]);
    const diveGeo = new THREE.TubeGeometry(diveCurve, 18, 0.009, 10, false);
    group.add(new THREE.Mesh(diveGeo, materials.carbonWeaveMat));

    // FIA Optical Camera Pods on nosecone flanks (x = +2.15m, y = 0.36m, z = ±0.18m)
    const camStations = [
      { x: 2.06, yBottom: 0.345, yTop: 0.375, zCenter: side * 0.165, zHalfWidth: 0.025 },
      { x: 2.15, yBottom: 0.342, yTop: 0.378, zCenter: side * 0.185, zHalfWidth: 0.032 },
      { x: 2.23, yBottom: 0.348, yTop: 0.372, zCenter: side * 0.175, zHalfWidth: 0.018 }
    ];
    group.add(new THREE.Mesh(createLoftedShellGeometry(camStations, 16, true), materials.carbonWeaveMat));
  }

  return enableShadows(group, 'part_01_front_wing');
}

/**
 * 2. part_02_monocoque
 * 8-station lofted T1100G carbon survival cell tub from x = -0.25m to x = +1.36m,
 * recessed dark cockpit cavity, molded carbon bucket seat, driver helmet + visor,
 * FIA head-protection collar, detailed F1 steering wheel with OLED screen & rotaries,
 * and aerodynamic wing mirrors at x = +0.62m, y = 0.62m, z = ±0.44m.
 */
function buildMonocoqueAndCockpit(materials) {
  const group = new THREE.Group();

  // 8-station lofted T1100G carbon survival cell tub from x = -0.25m to x = +1.36m (seamless join with nosecone at x = 1.35m)
  const tubStations = [
    { x: -0.25, yBottom: 0.050, yTop: 0.66, zHalfWidth: 0.31, topWidthRatio: 0.76, bottomWidthRatio: 0.88, crown: 0.024 },
    { x: -0.02, yBottom: 0.050, yTop: 0.68, zHalfWidth: 0.33, topWidthRatio: 0.78, bottomWidthRatio: 0.90, crown: 0.022 },
    { x: 0.22,  yBottom: 0.050, yTop: 0.64, zHalfWidth: 0.34, topWidthRatio: 0.82, bottomWidthRatio: 0.90, crown: -0.035 },
    { x: 0.48,  yBottom: 0.052, yTop: 0.63, zHalfWidth: 0.33, topWidthRatio: 0.80, bottomWidthRatio: 0.88, crown: -0.032 },
    { x: 0.74,  yBottom: 0.058, yTop: 0.63, zHalfWidth: 0.31, topWidthRatio: 0.76, bottomWidthRatio: 0.86, crown: 0.018 },
    { x: 0.98,  yBottom: 0.140, yTop: 0.61, zHalfWidth: 0.29, topWidthRatio: 0.75, bottomWidthRatio: 0.86, crown: 0.022 },
    { x: 1.20,  yBottom: 0.250, yTop: 0.58, zHalfWidth: 0.265, topWidthRatio: 0.74, bottomWidthRatio: 0.88, crown: 0.024 },
    { x: 1.36,  yBottom: 0.340, yTop: 0.56, zHalfWidth: 0.250, topWidthRatio: 0.74, bottomWidthRatio: 0.90, crown: 0.022 }
  ];
  const tubGeo = createLoftedShellGeometry(tubStations, 52, true);
  group.add(new THREE.Mesh(tubGeo, materials.monocoqueLiveryMat));

  // Recessed dark cockpit opening cavity & FIA head-protection coaming collar at x = +0.05m..+0.78m
  const cavityStations = [
    { x: 0.05, yBottom: 0.48, yTop: 0.655, zHalfWidth: 0.21, topWidthRatio: 0.95, bottomWidthRatio: 0.85, crown: -0.04 },
    { x: 0.28, yBottom: 0.44, yTop: 0.640, zHalfWidth: 0.23, topWidthRatio: 0.95, bottomWidthRatio: 0.85, crown: -0.05 },
    { x: 0.56, yBottom: 0.45, yTop: 0.635, zHalfWidth: 0.21, topWidthRatio: 0.92, bottomWidthRatio: 0.82, crown: -0.04 },
    { x: 0.78, yBottom: 0.52, yTop: 0.642, zHalfWidth: 0.15, topWidthRatio: 0.88, bottomWidthRatio: 0.80, crown: -0.02 }
  ];
  group.add(new THREE.Mesh(createLoftedShellGeometry(cavityStations, 32, true), materials.pirelliTireMat));

  // FIA impact head-protection horseshoe collar
  const collarCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.58, 0.635, -0.22),
    new THREE.Vector3(0.24, 0.650, -0.24),
    new THREE.Vector3(0.04, 0.675, 0.00),
    new THREE.Vector3(0.24, 0.650, 0.24),
    new THREE.Vector3(0.58, 0.635, 0.22)
  ]);
  const collarGeo = new THREE.TubeGeometry(collarCurve, 28, 0.024, 12, false);
  group.add(new THREE.Mesh(collarGeo, materials.carbonWeaveMat));

  // Molded carbon bucket seat shell inside cockpit
  const seatStations = [
    { x: 0.08, yBottom: 0.24, yTop: 0.60, zHalfWidth: 0.17, topWidthRatio: 0.85, bottomWidthRatio: 0.75 },
    { x: 0.26, yBottom: 0.18, yTop: 0.46, zHalfWidth: 0.18, topWidthRatio: 0.90, bottomWidthRatio: 0.80 },
    { x: 0.46, yBottom: 0.22, yTop: 0.38, zHalfWidth: 0.16, topWidthRatio: 0.88, bottomWidthRatio: 0.80 }
  ];
  group.add(new THREE.Mesh(createLoftedShellGeometry(seatStations, 24, true), materials.carbonWeaveMat));

  // Sculpted aerodynamic driver helmet + iridescent visor at (x = +0.24m, y = 0.66m, z = 0)
  const helmetGroup = new THREE.Group();
  helmetGroup.position.set(0.24, 0.66, 0.0);

  const helmetShellGeo = new THREE.SphereGeometry(0.125, 28, 22);
  helmetShellGeo.scale(1.16, 0.96, 0.92);
  helmetGroup.add(new THREE.Mesh(helmetShellGeo, materials.monocoqueLiveryMat));

  // Helmet rear aero spoiler crown
  const spoilerGeo = new THREE.ConeGeometry(0.085, 0.11, 16);
  spoilerGeo.rotateZ(Math.PI * 0.5);
  const spoilerMesh = new THREE.Mesh(spoilerGeo, materials.yellowTcamMat);
  spoilerMesh.position.set(-0.08, 0.02, 0);
  helmetGroup.add(spoilerMesh);

  // Iridescent solar-red/amber visor
  const visorGeo = new THREE.CylinderGeometry(0.118, 0.118, 0.072, 24, 1, true, -Math.PI * 0.38, Math.PI * 0.76);
  visorGeo.rotateY(Math.PI * 0.5);
  const visorMesh = new THREE.Mesh(visorGeo, materials.inconelExhaustMat);
  visorMesh.position.set(0.018, 0.008, 0);
  helmetGroup.add(visorMesh);
  group.add(helmetGroup);

  // Detailed F1 Steering Wheel at (x = +0.58m, y = 0.58m, z = 0) with OLED screen & rotary dials
  const wheelGroup = new THREE.Group();
  wheelGroup.position.set(0.58, 0.58, 0.0);
  wheelGroup.rotation.z = -0.38;

  // Steering column shaft
  const shaftGeo = new THREE.CylinderGeometry(0.016, 0.018, 0.24, 14);
  shaftGeo.rotateZ(Math.PI * 0.5);
  const shaftMesh = new THREE.Mesh(shaftGeo, materials.titaniumMat);
  shaftMesh.position.set(0.11, 0, 0);
  wheelGroup.add(shaftMesh);

  // Rectangular butterfly carbon yoke body
  const yokeGeo = new THREE.BoxGeometry(0.028, 0.145, 0.27);
  wheelGroup.add(new THREE.Mesh(yokeGeo, materials.carbonWeaveMat));

  // Left & right contoured thumb grips
  for (const side of [-1, 1]) {
    const gripGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.135, 12);
    const grip = new THREE.Mesh(gripGeo, materials.pirelliTireMat);
    grip.position.set(-0.006, 0, side * 0.125);
    wheelGroup.add(grip);
  }

  // Central PCU-8D OLED telemetry display
  const oledGeo = new THREE.BoxGeometry(0.008, 0.058, 0.095);
  const oledMesh = new THREE.Mesh(oledGeo, materials.ersGreenMat);
  oledMesh.position.set(-0.016, 0.018, 0);
  wheelGroup.add(oledMesh);

  // Multi-color rotary encoder dials & shift LEDs
  const dialOffsets = [
    [-0.018, -0.032, -0.055, materials.camCoverRedMat],
    [-0.018, -0.038, 0.000, materials.yellowTcamMat],
    [-0.018, -0.032, 0.055, materials.ersGreenMat],
    [-0.018, 0.035, -0.082, materials.bremboCaliperMat],
    [-0.018, 0.035, 0.082, materials.yellowTcamMat]
  ];
  const dialGeo = new THREE.CylinderGeometry(0.012, 0.012, 0.012, 12);
  dialGeo.rotateZ(Math.PI * 0.5);
  for (const [dx, dy, dz, dMat] of dialOffsets) {
    const dial = new THREE.Mesh(dialGeo, dMat);
    dial.position.set(dx, dy, dz);
    wheelGroup.add(dial);
  }
  group.add(wheelGroup);

  // Aerodynamic Wing Mirrors at (x = +0.62m, y = 0.62m, z = ±0.44m) with twin aero stalks
  for (const side of [-1, 1]) {
    const mirrorStations = [
      { x: 0.57, yBottom: 0.605, yTop: 0.638, zCenter: side * 0.44, zHalfWidth: 0.062 },
      { x: 0.62, yBottom: 0.602, yTop: 0.640, zCenter: side * 0.44, zHalfWidth: 0.068 },
      { x: 0.67, yBottom: 0.608, yTop: 0.635, zCenter: side * 0.44, zHalfWidth: 0.048 }
    ];
    group.add(new THREE.Mesh(createLoftedShellGeometry(mirrorStations, 20, true), materials.carbonWeaveMat));

    // Reflective glass insert on rear face (x = 0.57m)
    const glassGeo = new THREE.BoxGeometry(0.006, 0.026, 0.095);
    const glass = new THREE.Mesh(glassGeo, materials.titaniumMat);
    glass.position.set(0.568, 0.621, side * 0.44);
    group.add(glass);

    // Inner horizontal aero stalk connecting to monocoque shoulder
    const stalkCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.64, 0.59, side * 0.29),
      new THREE.Vector3(0.63, 0.61, side * 0.37),
      new THREE.Vector3(0.62, 0.615, side * 0.42)
    ]);
    const stalkGeo = new THREE.TubeGeometry(stalkCurve, 12, 0.008, 8, false);
    group.add(new THREE.Mesh(stalkGeo, materials.carbonWeaveMat));
  }

  return enableShadows(group, 'part_02_monocoque');
}

/**
 * 3. part_03_halo
 * Swept Grade 5 titanium protection hoop (TubeGeometry along 3D CatmullRomCurve3
 * from rear mounts x=+0.02m, y=0.65m, z=±0.26m around x=+0.84m, y=0.69m, z=0
 * and down central V-pillar to x=+0.80m, y=0.56m, z=0) + upper carbon aero fairing lip.
 */
function buildHaloStructure(materials) {
  const group = new THREE.Group();

  // Main horseshoe titanium protection hoop
  const hoopCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.02, 0.65, -0.26),
    new THREE.Vector3(0.32, 0.68, -0.25),
    new THREE.Vector3(0.64, 0.695, -0.18),
    new THREE.Vector3(0.84, 0.69, 0.00),
    new THREE.Vector3(0.64, 0.695, 0.18),
    new THREE.Vector3(0.32, 0.68, 0.25),
    new THREE.Vector3(0.02, 0.65, 0.26)
  ]);
  const hoopGeo = new THREE.TubeGeometry(hoopCurve, 56, 0.026, 16, false);
  group.add(new THREE.Mesh(hoopGeo, materials.titaniumMat));

  // Upper aerodynamic carbon fairing lip along the hoop (offset in Y without origin scaling)
  const fairingCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.06, 0.672, -0.255),
    new THREE.Vector3(0.34, 0.702, -0.245),
    new THREE.Vector3(0.64, 0.715, -0.175),
    new THREE.Vector3(0.83, 0.708, 0.00),
    new THREE.Vector3(0.64, 0.715, 0.175),
    new THREE.Vector3(0.34, 0.702, 0.245),
    new THREE.Vector3(0.06, 0.672, 0.255)
  ]);
  const fairingGeo = new THREE.TubeGeometry(fairingCurve, 48, 0.014, 12, false);
  group.add(new THREE.Mesh(fairingGeo, materials.carbonWeaveMat));

  // Central forward V-pillar shear strut from (0.84, 0.69, 0) down to (0.80, 0.56, 0)
  const vPillarCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.84, 0.69, 0.00),
    new THREE.Vector3(0.82, 0.625, 0.00),
    new THREE.Vector3(0.80, 0.56, 0.00)
  ]);
  const vPillarGeo = new THREE.TubeGeometry(vPillarCurve, 18, 0.022, 14, false);
  group.add(new THREE.Mesh(vPillarGeo, materials.carbonWeaveMat));

  // Titanium V-pillar base transition gusset & rear mount shear cones
  const frontFootGeo = new THREE.CylinderGeometry(0.026, 0.042, 0.035, 16);
  const frontFoot = new THREE.Mesh(frontFootGeo, materials.titaniumMat);
  frontFoot.position.set(0.80, 0.565, 0.00);
  group.add(frontFoot);

  for (const side of [-1, 1]) {
    const rearMountGeo = new THREE.CylinderGeometry(0.028, 0.036, 0.06, 16);
    rearMountGeo.rotateZ(Math.PI * 0.42);
    const rearMount = new THREE.Mesh(rearMountGeo, materials.titaniumMat);
    rearMount.position.set(0.02, 0.65, side * 0.26);
    group.add(rearMount);
  }

  return enableShadows(group, 'part_03_halo');
}

/**
 * Shared builder for asymmetric 7-station lofted downwash sidepods:
 * - part_04_sidepod_left (-Z Port, sideSign = -1) with internal Al-matrix radiator core + coolant pipes
 * - part_05_sidepod_right (+Z Starboard, sideSign = +1) with internal charge-air intercooler + braided oil lines
 * Strict containment invariant: internal core at (x=+0.08m, y=0.30m, z=±0.40m) nests 100% inside the outer lofted shell at E=0.
 */
function buildSidepodAssembly(sideSign, materials) {
  const partId = sideSign < 0 ? 'part_04_sidepod_left' : 'part_05_sidepod_right';
  const sidepodMat = sideSign < 0 ? materials.sidepodLeftMat : materials.sidepodRightMat;
  const group = new THREE.Group();

  // 7-station lofted asymmetric downwash shell from x = -1.42m (Coke-bottle exit) to x = +0.56m (RB19 overbite intake)
  const stations = [
    { x: -1.42, yBottom: 0.14, yTop: 0.38, zCenter: sideSign * 0.20, zHalfWidth: 0.16, topWidthRatio: 0.78, bottomWidthRatio: 0.90, undercut: 0.18, crown: 0.015 },
    { x: -1.04, yBottom: 0.14, yTop: 0.44, zCenter: sideSign * 0.28, zHalfWidth: 0.22, topWidthRatio: 0.80, bottomWidthRatio: 0.90, undercut: 0.24, crown: 0.020 },
    { x: -0.68, yBottom: 0.14, yTop: 0.49, zCenter: sideSign * 0.35, zHalfWidth: 0.26, topWidthRatio: 0.82, bottomWidthRatio: 0.92, undercut: 0.28, crown: 0.025 },
    { x: -0.32, yBottom: 0.14, yTop: 0.53, zCenter: sideSign * 0.40, zHalfWidth: 0.29, topWidthRatio: 0.84, bottomWidthRatio: 0.94, undercut: 0.30, crown: 0.028 },
    { x: 0.04,  yBottom: 0.14, yTop: 0.56, zCenter: sideSign * 0.42, zHalfWidth: 0.30, topWidthRatio: 0.86, bottomWidthRatio: 0.94, undercut: 0.30, crown: 0.030 },
    { x: 0.34,  yBottom: 0.16, yTop: 0.56, zCenter: sideSign * 0.42, zHalfWidth: 0.29, topWidthRatio: 0.88, bottomWidthRatio: 0.92, undercut: 0.28, crown: 0.026 },
    { x: 0.56,  yBottom: 0.22, yTop: 0.56, zCenter: sideSign * 0.41, zHalfWidth: 0.24, topWidthRatio: 0.88, bottomWidthRatio: 0.86, undercut: 0.24, crown: 0.018 }
  ];

  const shellGeo = createLoftedShellGeometry(stations, 48, true);
  group.add(new THREE.Mesh(shellGeo, sidepodMat));

  // RB19 High-Overbite Intake Scoop Lip & Dark Plenum Mouth at x = +0.55m..+0.59m
  const overbiteStations = [
    { x: 0.48, yBottom: 0.38, yTop: 0.48, zCenter: sideSign * 0.41, zHalfWidth: 0.17 },
    { x: 0.57, yBottom: 0.36, yTop: 0.52, zCenter: sideSign * 0.41, zHalfWidth: 0.18 },
    { x: 0.60, yBottom: 0.36, yTop: 0.39, zCenter: sideSign * 0.41, zHalfWidth: 0.16 }
  ];
  group.add(new THREE.Mesh(createLoftedShellGeometry(overbiteStations, 24, true), materials.carbonWeaveMat));

  // Recessed dark radiator intake duct aperture at x = +0.562m
  const mouthGeo = new THREE.BoxGeometry(0.016, 0.15, 0.28);
  const mouthMesh = new THREE.Mesh(mouthGeo, materials.pirelliTireMat);
  mouthMesh.position.set(0.562, 0.44, sideSign * 0.41);
  group.add(mouthMesh);

  // 8 Recessed Upper Cooling Louvre Gills along the Coanda downwash deck
  const louvreGeo = new THREE.BoxGeometry(0.022, 0.010, 0.12);
  for (let i = 0; i < 8; i++) {
    const lx = 0.04 - i * 0.095;
    const ly = THREE.MathUtils.lerp(0.548, 0.470, i / 7);
    const lz = sideSign * THREE.MathUtils.lerp(0.37, 0.31, i / 7);
    const louvre = new THREE.Mesh(louvreGeo, materials.carbonWeaveMat);
    louvre.position.set(lx, ly, lz);
    louvre.rotation.z = -0.18;
    louvre.rotation.y = sideSign * 0.15;
    group.add(louvre);
  }

  // Internal Heat-Exchanger Module tucked strictly inside the shell at (x = +0.06m, y = 0.31m, z = ±0.39m)
  const coreGroup = new THREE.Group();
  coreGroup.position.set(0.06, 0.31, sideSign * 0.39);
  coreGroup.rotation.set(sideSign * 0.18, sideSign * 0.10, 0.22);

  // Finned Aluminum-Matrix Radiator / Intercooler Core (compact so 100% enclosed at E=0)
  const coreBoxGeo = new THREE.BoxGeometry(0.24, 0.12, 0.13);
  coreGroup.add(new THREE.Mesh(coreBoxGeo, materials.radiatorCoreMat));

  // Titanium upper & lower welded header tanks
  const tankGeo = new THREE.BoxGeometry(0.25, 0.018, 0.14);
  const topTank = new THREE.Mesh(tankGeo, materials.titaniumMat);
  topTank.position.set(0, 0.068, 0);
  coreGroup.add(topTank);

  const botTank = new THREE.Mesh(tankGeo, materials.titaniumMat);
  botTank.position.set(0, -0.068, 0);
  coreGroup.add(botTank);

  // Plumbing lines routed toward central power unit spine (remaining strictly inside shell envelope)
  const pipeCurve1 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.06, 0.35, sideSign * 0.35),
    new THREE.Vector3(0.00, 0.33, sideSign * 0.31),
    new THREE.Vector3(-0.12, 0.30, sideSign * 0.28)
  ]);
  const pipeCurve2 = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.04, 0.26, sideSign * 0.36),
    new THREE.Vector3(-0.04, 0.25, sideSign * 0.32),
    new THREE.Vector3(-0.16, 0.24, sideSign * 0.29)
  ]);
  const pipeMat1 = sideSign < 0 ? materials.camCoverRedMat : materials.titaniumMat;
  const pipeMat2 = sideSign < 0 ? materials.titaniumMat : materials.camCoverRedMat;
  group.add(new THREE.Mesh(new THREE.TubeGeometry(pipeCurve1, 16, 0.014, 10, false), pipeMat1));
  group.add(new THREE.Mesh(new THREE.TubeGeometry(pipeCurve2, 16, 0.012, 10, false), pipeMat2));

  group.add(coreGroup);

  return enableShadows(group, partId);
}

/**
 * 6. part_06_engine_cover
 * 8-station lofted spine cover (x = -1.88m to +0.05m) enclosing the internal V6 hybrid PU & 8-speed gearbox
 * at E=0, roll-hoop oval airbox scoop opening at x = +0.02m, y = 0.80m, dorsal shark-fin stabilizer blade,
 * and yellow FIA T-Cam bar at x = -0.04m, y = 0.94m.
 */
function buildEngineCoverAssembly(materials) {
  const group = new THREE.Group();

  // 8-station lofted engine cover & Coke-bottle cowling from x = -1.88m (rear cannon) to x = +0.05m (roll-hoop airbox)
  const spineStations = [
    { x: -1.88, yBottom: 0.18, yTop: 0.49, zHalfWidth: 0.16, topWidthRatio: 0.82, bottomWidthRatio: 0.88, crown: 0.015 },
    { x: -1.52, yBottom: 0.16, yTop: 0.56, zHalfWidth: 0.21, topWidthRatio: 0.76, bottomWidthRatio: 0.90, crown: 0.022 },
    { x: -1.16, yBottom: 0.15, yTop: 0.64, zHalfWidth: 0.25, topWidthRatio: 0.70, bottomWidthRatio: 0.92, crown: 0.028 },
    { x: -0.84, yBottom: 0.16, yTop: 0.72, zHalfWidth: 0.28, topWidthRatio: 0.66, bottomWidthRatio: 0.94, crown: 0.032 },
    { x: -0.54, yBottom: 0.18, yTop: 0.79, zHalfWidth: 0.30, topWidthRatio: 0.62, bottomWidthRatio: 0.94, crown: 0.036 },
    { x: -0.28, yBottom: 0.22, yTop: 0.85, zHalfWidth: 0.31, topWidthRatio: 0.60, bottomWidthRatio: 0.92, crown: 0.038 },
    { x: -0.08, yBottom: 0.36, yTop: 0.90, zHalfWidth: 0.31, topWidthRatio: 0.58, bottomWidthRatio: 0.90, crown: 0.035 },
    { x: 0.05,  yBottom: 0.56, yTop: 0.89, zHalfWidth: 0.23, topWidthRatio: 0.64, bottomWidthRatio: 0.86, crown: 0.025 }
  ];
  const spineGeo = createLoftedShellGeometry(spineStations, 48, true);
  group.add(new THREE.Mesh(spineGeo, materials.engineCoverMat));

  // Roll-hoop oval ram-air intake scoop fairing & dark duct recess at x = +0.02m, y = 0.80m
  const scoopRimGeo = new THREE.CylinderGeometry(0.095, 0.105, 0.08, 28, 1, false);
  scoopRimGeo.rotateZ(Math.PI * 0.5);
  const scoopRim = new THREE.Mesh(scoopRimGeo, materials.engineCoverMat);
  scoopRim.position.set(0.03, 0.80, 0);
  group.add(scoopRim);

  const scoopMouthGeo = new THREE.CylinderGeometry(0.078, 0.078, 0.02, 24);
  scoopMouthGeo.rotateZ(Math.PI * 0.5);
  const scoopMouth = new THREE.Mesh(scoopMouthGeo, materials.pirelliTireMat);
  scoopMouth.position.set(0.062, 0.80, 0);
  group.add(scoopMouth);

  // Internal roll-hoop vertical splitter vane inside airbox mouth
  const vaneGeo = new THREE.BoxGeometry(0.03, 0.14, 0.008);
  const vane = new THREE.Mesh(vaneGeo, materials.carbonWeaveMat);
  vane.position.set(0.055, 0.80, 0);
  group.add(vane);

  // Rear cooling cannon exit aperture at x = -1.88m
  const cannonExitGeo = new THREE.CylinderGeometry(0.085, 0.095, 0.03, 24);
  cannonExitGeo.rotateZ(Math.PI * 0.5);
  const cannonExit = new THREE.Mesh(cannonExitGeo, materials.pirelliTireMat);
  cannonExit.position.set(-1.88, 0.44, 0);
  group.add(cannonExit);

  // Dorsal aerodynamic carbon shark-fin stabilizer blade (x = -1.52m..-0.18m, y = 0.64m..0.90m, z = 0)
  const finStations = [
    { x: -1.52, yBottom: 0.52, yTop: 0.72, zHalfWidth: 0.007, topWidthRatio: 0.6, bottomWidthRatio: 1.0 },
    { x: -1.10, yBottom: 0.60, yTop: 0.79, zHalfWidth: 0.008, topWidthRatio: 0.6, bottomWidthRatio: 1.0 },
    { x: -0.65, yBottom: 0.70, yTop: 0.85, zHalfWidth: 0.009, topWidthRatio: 0.6, bottomWidthRatio: 1.0 },
    { x: -0.18, yBottom: 0.80, yTop: 0.90, zHalfWidth: 0.008, topWidthRatio: 0.6, bottomWidthRatio: 1.0 }
  ];
  group.add(new THREE.Mesh(createLoftedShellGeometry(finStations, 20, true), materials.carbonWeaveMat));

  // Crimson top trim strip along dorsal shark fin
  const finTrimGeo = new THREE.BoxGeometry(1.30, 0.012, 0.018);
  const finTrim = new THREE.Mesh(finTrimGeo, materials.camCoverRedMat);
  finTrim.position.set(-0.85, 0.81, 0);
  finTrim.rotation.z = 0.135;
  group.add(finTrim);

  // High-vis yellow FIA T-Cam transponder bar at (x = -0.04m, y = 0.94m, z = 0)
  const tcamStemGeo = new THREE.BoxGeometry(0.065, 0.055, 0.016);
  const tcamStem = new THREE.Mesh(tcamStemGeo, materials.carbonWeaveMat);
  tcamStem.position.set(-0.04, 0.915, 0);
  group.add(tcamStem);

  const tcamBarGeo = new THREE.CylinderGeometry(0.015, 0.015, 0.24, 16);
  tcamBarGeo.rotateX(Math.PI * 0.5);
  const tcamBar = new THREE.Mesh(tcamBarGeo, materials.yellowTcamMat);
  tcamBar.position.set(-0.04, 0.942, 0);
  group.add(tcamBar);

  for (const side of [-1, 1]) {
    const podGeo = new THREE.CylinderGeometry(0.018, 0.018, 0.055, 14);
    podGeo.rotateZ(Math.PI * 0.5);
    const pod = new THREE.Mesh(podGeo, materials.yellowTcamMat);
    pod.position.set(-0.03, 0.942, side * 0.115);
    group.add(pod);
  }

  return enableShadows(group, 'part_06_engine_cover');
}

/**
 * 7. part_11_rear_wing_drs
 * Single central swan-neck pylon (x=-2.28..-1.88m, y=0.45..0.85m, z=0) with DRS actuator pod,
 * deep-spoon carbon mainplane (x=-2.55..-2.22m, y=0.72m, z=-0.52..+0.52m),
 * hinged upper DRS flap (drsFlapPivot Group at x=-2.54m, y=0.84m, z=0 exposed on group.userData.drsFlapPivot),
 * curved rear wing endplates (x=-2.68..-2.12m, y=0.34..0.91m, z=±0.525m), and lower bi-plane beam wing (y=0.42..0.48m).
 */
function buildRearWingAndDrs(materials) {
  const group = new THREE.Group();

  // Single central swan-neck pylon (x = -2.28m..-1.88m, y = 0.45m..0.85m, z = 0)
  const swanCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1.88, 0.45, 0.0),
    new THREE.Vector3(-2.02, 0.62, 0.0),
    new THREE.Vector3(-2.14, 0.78, 0.0),
    new THREE.Vector3(-2.22, 0.85, 0.0),
    new THREE.Vector3(-2.28, 0.76, 0.0)
  ]);
  const swanGeo = new THREE.TubeGeometry(swanCurve, 32, 0.020, 14, false);
  group.add(new THREE.Mesh(swanGeo, materials.carbonWeaveMat));

  // Aerodynamic DRS hydraulic actuator pod on top of swan-neck at (x = -2.26m, y = 0.855m, z = 0)
  const podStations = [
    { x: -2.38, yBottom: 0.835, yTop: 0.880, zHalfWidth: 0.022 },
    { x: -2.25, yBottom: 0.830, yTop: 0.888, zHalfWidth: 0.028 },
    { x: -2.14, yBottom: 0.835, yTop: 0.865, zHalfWidth: 0.016 }
  ];
  group.add(new THREE.Mesh(createLoftedShellGeometry(podStations, 18, true), materials.carbonWeaveMat));

  // Deep-spoon carbon mainplane (x = -2.55m..-2.22m, y = 0.72m, z = -0.52m..+0.52m)
  const mainplaneGeo = createSpanwiseAirfoilGeometry({
    zMin: -0.52,
    zMax: 0.52,
    zSegments: 36,
    chordSegments: 14,
    xLeadingFn: (z) => {
      const az = Math.abs(z) / 0.52;
      return THREE.MathUtils.lerp(-2.22, -2.26, az * az);
    },
    xTrailingFn: (z) => {
      const az = Math.abs(z) / 0.52;
      return THREE.MathUtils.lerp(-2.54, -2.55, az);
    },
    yBaseFn: (z) => {
      const az = Math.abs(z) / 0.52;
      // Spoon profile: 0.71m at center rising to 0.745m toward endplates
      return THREE.MathUtils.lerp(0.71, 0.745, Math.pow(az, 1.4));
    },
    thickness: 0.026,
    camber: -0.022
  });
  group.add(new THREE.Mesh(mainplaneGeo, materials.rearWingMat));

  // Hinged upper DRS flap (drsFlapPivot Group at x = -2.54m, y = 0.84m, z = 0)
  // Exposed on group.userData.drsFlapPivot so kinematics can rotate it 0..24 deg
  const drsFlapPivot = new THREE.Group();
  drsFlapPivot.name = 'drsFlapPivot';
  drsFlapPivot.position.set(-2.54, 0.84, 0.0);

  const flapGeo = createSpanwiseAirfoilGeometry({
    zMin: -0.515,
    zMax: 0.515,
    zSegments: 32,
    chordSegments: 12,
    xLeadingFn: () => 0.16,   // world x = -2.38m when closed
    xTrailingFn: () => -0.04, // world x = -2.58m when closed
    yBaseFn: (z) => {
      const az = Math.abs(z) / 0.515;
      return THREE.MathUtils.lerp(-0.045, -0.025, Math.pow(az, 1.5));
    },
    thickness: 0.018,
    camber: -0.014
  });
  flapGeo.rotateZ(-0.34); // Steep closed angle of attack; rotating drsFlapPivot flattens the flap
  const flapMesh = new THREE.Mesh(flapGeo, materials.rearWingMat);
  drsFlapPivot.add(flapMesh);

  // Titanium DRS linkage clevis horn attached to flap
  const hornGeo = new THREE.BoxGeometry(0.045, 0.028, 0.010);
  const horn = new THREE.Mesh(hornGeo, materials.titaniumMat);
  horn.position.set(0.14, 0.01, 0);
  drsFlapPivot.add(horn);

  group.add(drsFlapPivot);
  group.userData.drsFlapPivot = drsFlapPivot;

  // Curved rear wing endplates (x = -2.68m..-2.12m, y = 0.34m..0.91m, z = ±0.525m) with rear louvre cutouts
  for (const side of [-1, 1]) {
    const epStations = [
      { x: -2.68, yBottom: 0.42, yTop: 0.89, zCenter: side * 0.522, zHalfWidth: 0.010 },
      { x: -2.50, yBottom: 0.36, yTop: 0.91, zCenter: side * 0.525, zHalfWidth: 0.012 },
      { x: -2.30, yBottom: 0.34, yTop: 0.90, zCenter: side * 0.525, zHalfWidth: 0.012 },
      { x: -2.12, yBottom: 0.38, yTop: 0.84, zCenter: side * 0.515, zHalfWidth: 0.009 }
    ];
    group.add(new THREE.Mesh(createLoftedShellGeometry(epStations, 24, true), materials.carbonWeaveMat));

    // Crimson rear endplate leading/top trim accent
    const epTrimGeo = new THREE.BoxGeometry(0.54, 0.014, 0.016);
    const epTrim = new THREE.Mesh(epTrimGeo, materials.camCoverRedMat);
    epTrim.position.set(-2.40, 0.885, side * 0.525);
    epTrim.rotation.z = -0.06;
    group.add(epTrim);

    // Endplate tip vortex louvre strakes
    const strakeGeo = new THREE.BoxGeometry(0.18, 0.008, 0.026);
    for (let k = 0; k < 4; k++) {
      const strake = new THREE.Mesh(strakeGeo, materials.carbonWeaveMat);
      strake.position.set(-2.34 - k * 0.04, 0.78 + k * 0.024, side * 0.528);
      strake.rotation.z = 0.22;
      group.add(strake);
    }
  }

  // Lower bi-plane beam wing (y = 0.42m..0.48m, x = -2.48m..-2.18m, z = -0.49m..+0.49m)
  const beamLowerGeo = createSpanwiseAirfoilGeometry({
    zMin: -0.49,
    zMax: 0.49,
    zSegments: 28,
    chordSegments: 10,
    xLeadingFn: () => -2.18,
    xTrailingFn: () => -2.36,
    yBaseFn: (z) => 0.42 + 0.015 * Math.pow(Math.abs(z) / 0.49, 1.4),
    thickness: 0.015,
    camber: -0.012
  });
  group.add(new THREE.Mesh(beamLowerGeo, materials.carbonWeaveMat));

  const beamUpperGeo = createSpanwiseAirfoilGeometry({
    zMin: -0.49,
    zMax: 0.49,
    zSegments: 28,
    chordSegments: 10,
    xLeadingFn: () => -2.32,
    xTrailingFn: () => -2.48,
    yBaseFn: (z) => 0.465 + 0.015 * Math.pow(Math.abs(z) / 0.49, 1.4),
    thickness: 0.014,
    camber: -0.014
  });
  group.add(new THREE.Mesh(beamUpperGeo, materials.carbonWeaveMat));

  // FIA Rear Rain & ERS Status Light Housing beneath beam wing at (x = -2.52m, y = 0.34m, z = 0)
  const rainHousingGeo = new THREE.BoxGeometry(0.10, 0.075, 0.036);
  const rainHousing = new THREE.Mesh(rainHousingGeo, materials.carbonWeaveMat);
  rainHousing.position.set(-2.50, 0.35, 0);
  group.add(rainHousing);

  const rainLedGeo = new THREE.BoxGeometry(0.012, 0.058, 0.022);
  const rainLed = new THREE.Mesh(rainLedGeo, materials.bremboCaliperMat);
  rainLed.position.set(-2.55, 0.35, 0);
  group.add(rainLed);

  return enableShadows(group, 'part_11_rear_wing_drs');
}

export function buildAeroAndChassisParts(materials) {
  return {
    part_01_front_wing: buildFrontWingAndNose(materials),
    part_02_monocoque: buildMonocoqueAndCockpit(materials),
    part_03_halo: buildHaloStructure(materials),
    part_04_sidepod_left: buildSidepodAssembly(-1, materials),
    part_05_sidepod_right: buildSidepodAssembly(1, materials),
    part_06_engine_cover: buildEngineCoverAssembly(materials),
    part_11_rear_wing_drs: buildRearWingAndDrs(materials)
  };
}
