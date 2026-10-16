import * as THREE from 'three';
import {
  CAR_DIMENSIONS,
  getEnvelopeBounds,
  createLoftedShellGeometry
} from './sharedContract.js';

function resolveMaterials(materials = {}) {
  const fallback = (key, opts) => {
    if (materials[key]) return materials[key];
    return new THREE.MeshStandardMaterial(opts);
  };

  const carbonFloorMat =
    materials.carbonFloorMat ||
    materials.carbonWeaveMat ||
    materials.carbonMat ||
    fallback('_carbonFloor', {
      color: 0x161920,
      roughness: 0.38,
      metalness: 0.18
    });

  const carbonGlossMat =
    materials.carbonWeaveMat ||
    materials.carbonGlossMat ||
    materials.carbonMat ||
    fallback('_carbonGloss', {
      color: 0x12151c,
      roughness: 0.24,
      metalness: 0.22
    });

  const redAccentMat =
    materials.redAccentMat ||
    materials.crimsonRedMat ||
    fallback('_redAccent', {
      color: 0xe11d2a,
      roughness: 0.28,
      metalness: 0.15
    });

  const skidTitaniumMat =
    materials.skidTitaniumMat ||
    materials.titaniumMat ||
    fallback('_skidTitanium', {
      color: 0xb8af9e,
      roughness: 0.32,
      metalness: 0.86
    });

  const plankResinMat =
    materials.plankResinMat ||
    fallback('_plankResin', {
      color: 0x5c3a21,
      roughness: 0.62,
      metalness: 0.05
    });

  const billetAluminumMat =
    materials.billetAluminumMat ||
    materials.aluminumMat ||
    fallback('_billetAluminum', {
      color: 0xc8d0d8,
      roughness: 0.26,
      metalness: 0.88
    });

  const titaniumMat =
    materials.titaniumMat ||
    fallback('_titanium', {
      color: 0x9aa2ad,
      roughness: 0.30,
      metalness: 0.84
    });

  const camCoverRedMat =
    materials.camCoverRedMat ||
    fallback('_camCoverRed', {
      color: 0xc8102e,
      roughness: 0.22,
      metalness: 0.68
    });

  const ersGreenMat =
    materials.ersGreenMat ||
    fallback('_ersGreen', {
      color: 0x059669,
      emissive: 0x022c22,
      emissiveIntensity: 0.35,
      roughness: 0.28,
      metalness: 0.45
    });

  const hvOrangeMat =
    materials.hvOrangeMat ||
    materials.amberAccentMat ||
    fallback('_hvOrange', {
      color: 0xff6b00,
      roughness: 0.32,
      metalness: 0.18
    });

  const inconelExhaustMat =
    materials.inconelExhaustMat ||
    materials.inconelMat ||
     materials.exhaustGlowMat ||
    fallback('_inconelExhaust', {
      color: 0x9e8472,
      emissive: 0x451204,
      emissiveIntensity: 0.25,
      roughness: 0.34,
      metalness: 0.82
    });

  const brakeDiscMat =
    materials.brakeDiscMat ||
    fallback('_brakeDisc', {
      color: 0x2b2d33,
      emissive: 0x3b0d02,
      emissiveIntensity: 0.15,
      roughness: 0.52,
      metalness: 0.42
    });

  const bremboCaliperMat =
    materials.bremboCaliperMat ||
    materials.bremboRedMat ||
    materials.camCoverRedMat ||
    fallback('_bremboCaliper', {
      color: 0xd91424,
      roughness: 0.20,
      metalness: 0.58
    });

  const tireRubberMat =
    materials.tireRubberMat ||
    materials.tireMat ||
    fallback('_tireRubber', {
      color: 0x15171b,
      roughness: 0.68,
      metalness: 0.06
    });

  const rimMagnesiumMat =
    materials.rimMagnesiumMat ||
    materials.rimMat ||
    fallback('_rimMagnesium', {
      color: 0x22262e,
      roughness: 0.28,
      metalness: 0.78
    });

  const pirelliSidewallLeftMat =
    materials.pirelliSidewallLeftMat ||
    materials.pirelliSoftMat ||
    redAccentMat;

  const pirelliSidewallRightMat =
    materials.pirelliSidewallRightMat ||
    materials.pirelliSoftMat ||
    redAccentMat;

  const centerNutPortMat =
    materials.centerNutPortMat ||
    camCoverRedMat;

  const centerNutStarboardMat =
    materials.centerNutStarboardMat ||
    fallback('_centerNutStarboard', {
      color: 0x0ea5e9,
      roughness: 0.22,
      metalness: 0.76
    });

  const rainLightLedMat =
    materials.rainLightLedMat ||
    materials.ledRedMat ||
    fallback('_rainLightLed', {
      color: 0xff1e27,
      emissive: 0xff0a18,
      emissiveIntensity: 1.8,
      roughness: 0.15,
      metalness: 0.1
    });

  return {
    carbonFloorMat,
    carbonGlossMat,
    redAccentMat,
    skidTitaniumMat,
    plankResinMat,
    billetAluminumMat,
    titaniumMat,
    camCoverRedMat,
    ersGreenMat,
    hvOrangeMat,
    inconelExhaustMat,
    brakeDiscMat,
    bremboCaliperMat,
    tireRubberMat,
    rimMagnesiumMat,
    pirelliSidewallLeftMat,
    pirelliSidewallRightMat,
    centerNutPortMat,
    centerNutStarboardMat,
    rainLightLedMat
  };
}

function enableShadows(root) {
  root.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
}

function createAeroLinkMesh(pA, pB, chord, thickness, material) {
  const vec = new THREE.Vector3().subVectors(pB, pA);
  const len = vec.length();
  const mid = new THREE.Vector3().addVectors(pA, pB).multiplyScalar(0.5);

  const geo = new THREE.CylinderGeometry(1, 1, len, 14, 1, false);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    pos.setX(i, pos.getX(i) * (chord * 0.5));
    pos.setZ(i, pos.getZ(i) * (thickness * 0.5));
  }
  geo.computeVertexNormals();

  const mesh = new THREE.Mesh(geo, material);
  mesh.position.copy(mid);
  const up = new THREE.Vector3(0, 1, 0);
  const dir = vec.clone().normalize();
  if (Math.abs(dir.dot(up)) < 0.999) {
    mesh.quaternion.setFromUnitVectors(up, dir);
  }
  return mesh;
}

function buildVenturiFloorGroup(mat) {
  const group = new THREE.Group();
  group.name = 'part_07_venturi_floor';

  // 1. Main Full-Span Ground-Effect Carbon Floor Deck (x = -2.15m .. +1.18m, z = -0.82m .. +0.82m)
  const deckStations = [
    { x: -2.15, yBottom: 0.095, yTop: 0.240, zHalfWidth: 0.54, topWidthRatio: 0.92, bottomWidthRatio: 1.0, shoulderPower: 1.2, crown: 0.015 },
    { x: -1.85, yBottom: 0.068, yTop: 0.165, zHalfWidth: 0.62, topWidthRatio: 0.95, bottomWidthRatio: 1.0, shoulderPower: 1.3, crown: 0.010 },
    { x: -1.35, yBottom: 0.036, yTop: 0.072, zHalfWidth: 0.76, topWidthRatio: 0.98, bottomWidthRatio: 1.0, shoulderPower: 1.4, crown: 0.005 },
    { x: -0.75, yBottom: 0.026, yTop: 0.058, zHalfWidth: 0.81, topWidthRatio: 0.99, bottomWidthRatio: 1.0, shoulderPower: 1.5, crown: 0.004 },
    { x: -0.10, yBottom: 0.022, yTop: 0.056, zHalfWidth: 0.82, topWidthRatio: 0.99, bottomWidthRatio: 1.0, shoulderPower: 1.5, crown: 0.004 },
    { x: 0.65, yBottom: 0.019, yTop: 0.062, zHalfWidth: 0.80, topWidthRatio: 0.98, bottomWidthRatio: 1.0, shoulderPower: 1.4, crown: 0.006 },
    { x: 1.02, yBottom: 0.018, yTop: 0.082, zHalfWidth: 0.74, topWidthRatio: 0.94, bottomWidthRatio: 1.0, shoulderPower: 1.25, crown: 0.012 },
    { x: 1.18, yBottom: 0.020, yTop: 0.066, zHalfWidth: 0.42, topWidthRatio: 0.90, bottomWidthRatio: 0.96, shoulderPower: 1.2, crown: 0.008 }
  ];
  const mainDeckGeo = createLoftedShellGeometry(deckStations, 48, true);
  const mainDeckMesh = new THREE.Mesh(mainDeckGeo, mat.carbonFloorMat);
  mainDeckMesh.name = 'venturi_floor_main_deck';
  group.add(mainDeckMesh);

  // 2. Central Boat-Tail Keel & Tea-Tray Splitter Extension (+0.55m .. +1.18m)
  const keelStations = [
    { x: -2.15, yBottom: 0.055, yTop: 0.145, zHalfWidth: 0.095, topWidthRatio: 1.0, bottomWidthRatio: 0.65, shoulderPower: 1.2 },
    { x: -1.65, yBottom: 0.038, yTop: 0.092, zHalfWidth: 0.125, topWidthRatio: 1.0, bottomWidthRatio: 0.75, shoulderPower: 1.2 },
    { x: -1.10, yBottom: 0.024, yTop: 0.060, zHalfWidth: 0.160, topWidthRatio: 1.0, bottomWidthRatio: 0.90, shoulderPower: 1.3 },
    { x: 0.50, yBottom: 0.017, yTop: 0.048, zHalfWidth: 0.175, topWidthRatio: 1.0, bottomWidthRatio: 0.92, shoulderPower: 1.3 },
    { x: 1.18, yBottom: 0.015, yTop: 0.042, zHalfWidth: 0.115, topWidthRatio: 0.92, bottomWidthRatio: 0.85, shoulderPower: 1.2 }
  ];
  const keelMesh = new THREE.Mesh(
    createLoftedShellGeometry(keelStations, 32, true),
    mat.carbonGlossMat
  );
  keelMesh.name = 'venturi_central_keel';
  group.add(keelMesh);

  // 3. Twin Sculpted Underfloor Low-Pressure Venturi Throat Tunnels (z = ±0.38m)
  for (const side of [-1, 1]) {
    const zTunnel = side * 0.38;
    const tunnelStations = [
      { x: -2.15, yBottom: 0.115, yTop: 0.240, zCenter: zTunnel * 1.06, zHalfWidth: 0.22, topWidthRatio: 0.86, bottomWidthRatio: 1.0, crown: 0.022 },
      { x: -1.72, yBottom: 0.075, yTop: 0.185, zCenter: zTunnel * 1.03, zHalfWidth: 0.21, topWidthRatio: 0.88, bottomWidthRatio: 1.0, crown: 0.018 },
      { x: -1.35, yBottom: 0.036, yTop: 0.108, zCenter: zTunnel, zHalfWidth: 0.19, topWidthRatio: 0.84, bottomWidthRatio: 1.0, crown: 0.014 },
      { x: -0.45, yBottom: 0.024, yTop: 0.088, zCenter: zTunnel * 0.96, zHalfWidth: 0.17, topWidthRatio: 0.82, bottomWidthRatio: 1.0, crown: 0.012 },
      { x: 0.35, yBottom: 0.022, yTop: 0.095, zCenter: zTunnel, zHalfWidth: 0.19, topWidthRatio: 0.86, bottomWidthRatio: 1.0, crown: 0.014 },
      { x: 0.95, yBottom: 0.020, yTop: 0.118, zCenter: zTunnel * 1.08, zHalfWidth: 0.24, topWidthRatio: 0.90, bottomWidthRatio: 1.0, crown: 0.018 },
      { x: 1.15, yBottom: 0.022, yTop: 0.125, zCenter: zTunnel * 1.12, zHalfWidth: 0.25, topWidthRatio: 0.92, bottomWidthRatio: 1.0, crown: 0.018 }
    ];
    const tunnelMesh = new THREE.Mesh(
      createLoftedShellGeometry(tunnelStations, 32, true),
      mat.carbonFloorMat
    );
    tunnelMesh.name = `venturi_throat_tunnel_${side < 0 ? 'port' : 'starboard'}`;
    group.add(tunnelMesh);
  }

  // 4. 4 Pairs of Curved Venturi Inlet Fences (x = +0.65m .. +1.15m, z = ±0.28m, ±0.42m, ±0.56m, ±0.70m)
  const fenceBaseZs = [0.28, 0.42, 0.56, 0.70];
  for (const side of [-1, 1]) {
    fenceBaseZs.forEach((baseZ, idx) => {
      const fenceStations = [
        {
          x: 0.65,
          yBottom: 0.018,
          yTop: 0.088 - idx * 0.005,
          zCenter: side * (baseZ + 0.045),
          zHalfWidth: 0.0055,
          topWidthRatio: 0.7,
          bottomWidthRatio: 1.0
        },
        {
          x: 0.82,
          yBottom: 0.017,
          yTop: 0.098 - idx * 0.004,
          zCenter: side * (baseZ + 0.022),
          zHalfWidth: 0.006,
          topWidthRatio: 0.7,
          bottomWidthRatio: 1.0
        },
        {
          x: 0.99,
          yBottom: 0.016,
          yTop: 0.112 - idx * 0.004,
          zCenter: side * (baseZ + 0.006),
          zHalfWidth: 0.006,
          topWidthRatio: 0.7,
          bottomWidthRatio: 1.0
        },
        {
          x: 1.15,
          yBottom: 0.018,
          yTop: 0.118 - idx * 0.005,
          zCenter: side * baseZ,
          zHalfWidth: 0.0045,
          topWidthRatio: 0.65,
          bottomWidthRatio: 1.0
        }
      ];
      const fenceMesh = new THREE.Mesh(
        createLoftedShellGeometry(fenceStations, 16, true),
        mat.carbonGlossMat
      );
      fenceMesh.name = `venturi_inlet_fence_${side < 0 ? 'L' : 'R'}_${idx + 1}`;
      group.add(fenceMesh);
    });
  }

  // 5. Rising Rear Diffuser Expansion Ramp (x = -2.15m .. -1.35m, rising to y = 0.24m) + 6 Vertical Strakes
  const diffuserStrakeZs = [-0.58, -0.38, -0.18, 0.18, 0.38, 0.58];
  diffuserStrakeZs.forEach((zPos, idx) => {
    const sideSign = Math.sign(zPos);
    const strakeStations = [
      {
        x: -2.15,
        yBottom: 0.068,
        yTop: 0.236,
        zCenter: zPos * 1.04,
        zHalfWidth: 0.0055,
        topWidthRatio: 0.85,
        bottomWidthRatio: 0.65
      },
      {
        x: -1.85,
        yBottom: 0.052,
        yTop: 0.175,
        zCenter: zPos * 1.02,
        zHalfWidth: 0.006,
        topWidthRatio: 0.85,
        bottomWidthRatio: 0.70
      },
      {
        x: -1.58,
        yBottom: 0.036,
        yTop: 0.112,
        zCenter: zPos,
        zHalfWidth: 0.0055,
        topWidthRatio: 0.85,
        bottomWidthRatio: 0.75
      },
      {
        x: -1.35,
        yBottom: 0.028,
        yTop: 0.072,
        zCenter: zPos - sideSign * 0.015,
        zHalfWidth: 0.004,
        topWidthRatio: 0.80,
        bottomWidthRatio: 0.80
      }
    ];
    const strakeMesh = new THREE.Mesh(
      createLoftedShellGeometry(strakeStations, 16, true),
      mat.carbonGlossMat
    );
    strakeMesh.name = `diffuser_vertical_strake_${idx + 1}`;
    group.add(strakeMesh);
  });

  // Upper Gurney Lip along Rear Diffuser Exit (x = -2.15m, y = 0.232m .. 0.242m)
  for (const side of [-1, 1]) {
    const gurneyCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-2.15, 0.165, side * 0.09),
      new THREE.Vector3(-2.15, 0.235, side * 0.26),
      new THREE.Vector3(-2.15, 0.238, side * 0.48),
      new THREE.Vector3(-2.13, 0.185, side * 0.62)
    ]);
    const gurneyMesh = new THREE.Mesh(
      new THREE.TubeGeometry(gurneyCurve, 24, 0.007, 10, false),
      mat.carbonGlossMat
    );
    group.add(gurneyMesh);
  }

  // 6. Floor Edge Vortex Wing Scroll (z = ±0.80m) + Red Accent Trim Strip + Stay Brackets
  for (const side of [-1, 1]) {
    const scrollCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.32, 0.048, side * 0.755),
      new THREE.Vector3(-0.85, 0.056, side * 0.802),
      new THREE.Vector3(-0.25, 0.052, side * 0.812),
      new THREE.Vector3(0.32, 0.054, side * 0.800),
      new THREE.Vector3(0.75, 0.062, side * 0.778)
    ]);
    const scrollMesh = new THREE.Mesh(
      new THREE.TubeGeometry(scrollCurve, 40, 0.014, 12, false),
      mat.carbonGlossMat
    );
    scrollMesh.name = `floor_edge_vortex_scroll_${side < 0 ? 'port' : 'starboard'}`;
    group.add(scrollMesh);

    const trimCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.30, 0.042, side * 0.778),
      new THREE.Vector3(-0.75, 0.046, side * 0.816),
      new THREE.Vector3(-0.10, 0.042, side * 0.822),
      new THREE.Vector3(0.55, 0.045, side * 0.798),
      new THREE.Vector3(0.96, 0.052, side * 0.750)
    ]);
    const trimMesh = new THREE.Mesh(
      new THREE.TubeGeometry(trimCurve, 40, 0.0055, 8, false),
      mat.redAccentMat
    );
    trimMesh.name = `floor_edge_red_accent_${side < 0 ? 'port' : 'starboard'}`;
    group.add(trimMesh);

    // 3 metal floor-edge vortex wing tie-rod stays per side
    for (const stayX of [-0.95, -0.35, 0.25]) {
      const stayMesh = createAeroLinkMesh(
        new THREE.Vector3(stayX, 0.042, side * 0.73),
        new THREE.Vector3(stayX, 0.055, side * 0.80),
        0.008,
        0.004,
        mat.titaniumMat
      );
      group.add(stayMesh);
    }
  }

  // 7. Underside FIA Legal Plank & Titanium Skid Blocks (y = 0.015m)
  const plankGeo = new THREE.BoxGeometry(2.65, 0.008, 0.28);
  const plankMesh = new THREE.Mesh(plankGeo, mat.plankResinMat);
  plankMesh.position.set(-0.22, 0.019, 0);
  plankMesh.name = 'fia_underfloor_plank';
  group.add(plankMesh);

  const skidPositions = [
    { x: 0.92, z: 0.0, w: 0.24, d: 0.11 },
    { x: 0.28, z: 0.0, w: 0.30, d: 0.12 },
    { x: -0.45, z: -0.07, w: 0.28, d: 0.06 },
    { x: -0.45, z: 0.07, w: 0.28, d: 0.06 },
    { x: -1.18, z: 0.0, w: 0.32, d: 0.12 }
  ];
  skidPositions.forEach((skid, idx) => {
    const skidMesh = new THREE.Mesh(
      new THREE.BoxGeometry(skid.w, 0.006, skid.d),
      mat.skidTitaniumMat
    );
    skidMesh.position.set(skid.x, 0.015, skid.z);
    skidMesh.name = `titanium_skid_block_${idx + 1}`;
    group.add(skidMesh);
  });

  enableShadows(group);
  return group;
}

function buildPowerUnitGroup(mat) {
  const group = new THREE.Group();
  group.name = 'part_08_power_unit';

  const exhaustGlowMeshes = [];

  // Envelope Verification:
  // x in [-1.12, -0.06], y in [0.10, 0.57], |z| <= min(0.22, getEnvelopeBounds(x).internalMaxZ)
  const envFront = getEnvelopeBounds(-0.12);
  const envMid = getEnvelopeBounds(-0.58);
  const envRear = getEnvelopeBounds(-1.08);
  const maxAllowedZRear = Math.min(0.21, envRear.internalMaxZ - 0.008);

  // 1. High-Voltage Emerald Energy Store (ES) Lithium-Ion Pack at bottom of survival cavity (y = 0.10m .. 0.16m)
  const esPackStations = [
    { x: -0.92, yBottom: Math.max(0.105, envRear.yBottom + 0.03), yTop: 0.162, zHalfWidth: 0.125, topWidthRatio: 0.95, bottomWidthRatio: 0.92 },
    { x: -0.52, yBottom: Math.max(0.102, envMid.yBottom + 0.03), yTop: 0.162, zHalfWidth: 0.148, topWidthRatio: 0.96, bottomWidthRatio: 0.94 },
    { x: -0.08, yBottom: Math.max(0.100, envFront.yBottom + 0.03), yTop: 0.160, zHalfWidth: 0.152, topWidthRatio: 0.96, bottomWidthRatio: 0.94 }
  ];
  const esPackMesh = new THREE.Mesh(
    createLoftedShellGeometry(esPackStations, 24, true),
    mat.ersGreenMat
  );
  esPackMesh.name = 'ers_lithium_ion_energy_store';
  group.add(esPackMesh);

  // High-Voltage Orange Busbars routing from Energy Store to MGU-K and MGU-H
  for (const side of [-1, 1]) {
    const hvCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.14, 0.155, side * 0.09),
      new THREE.Vector3(-0.32, 0.185, side * 0.125),
      new THREE.Vector3(-0.62, 0.245, side * 0.095),
      new THREE.Vector3(-0.88, 0.320, side * 0.055)
    ]);
    const hvCable = new THREE.Mesh(
      new THREE.TubeGeometry(hvCurve, 20, 0.0085, 8, false),
      mat.hvOrangeMat
    );
    group.add(hvCable);
  }

  // 2. CNC Billet Aluminum-Silicon V6 Crankcase Block (x = -0.96m .. -0.22m, y = 0.16m .. 0.34m)
  const crankcaseStations = [
    { x: -0.96, yBottom: 0.162, yTop: 0.335, zHalfWidth: 0.108, topWidthRatio: 1.05, bottomWidthRatio: 0.82, shoulderPower: 1.2 },
    { x: -0.58, yBottom: 0.162, yTop: 0.340, zHalfWidth: 0.118, topWidthRatio: 1.08, bottomWidthRatio: 0.84, shoulderPower: 1.2 },
    { x: -0.22, yBottom: 0.160, yTop: 0.338, zHalfWidth: 0.115, topWidthRatio: 1.05, bottomWidthRatio: 0.82, shoulderPower: 1.2 }
  ];
  const crankcaseMesh = new THREE.Mesh(
    createLoftedShellGeometry(crankcaseStations, 28, true),
    mat.billetAluminumMat
  );
  crankcaseMesh.name = 'v6_cnc_crankcase_block';
  group.add(crankcaseMesh);

  // CNC Structural Webbing Ribs on Crankcase Flanks
  for (let i = 0; i < 5; i++) {
    const ribX = -0.88 + i * 0.15;
    const ribMesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.016, 0.155, 0.235),
      mat.titaniumMat
    );
    ribMesh.position.set(ribX, 0.245, 0);
    group.add(ribMesh);
  }

  // 3. 90-Degree V6 Cylinder Banks (±45 deg) + Anodized Crimson Cam Covers (camCoverRedMat) + Bolt Bosses & Coil Packs
  for (const side of [-1, 1]) {
    const bankGroup = new THREE.Group();
    bankGroup.position.set(-0.59, 0.305, side * 0.052);
    bankGroup.rotation.x = side * (Math.PI / 4);

    // Cylinder bank aluminum casting
    const bankBlock = new THREE.Mesh(
      new THREE.BoxGeometry(0.68, 0.115, 0.095),
      mat.billetAluminumMat
    );
    bankBlock.position.set(0, 0.045, 0);
    bankGroup.add(bankBlock);

    // Anodized crimson cylinder-head cam cover
    const camCover = new THREE.Mesh(
      new THREE.BoxGeometry(0.69, 0.042, 0.102),
      mat.camCoverRedMat
    );
    camCover.position.set(0, 0.118, 0);
    camCover.name = `v6_cam_cover_${side < 0 ? 'port' : 'starboard'}`;
    bankGroup.add(camCover);

    // 3 Ignition Coil Packs + 8 Machined Perimeter Bolt Bosses per bank
    for (let c = 0; c < 3; c++) {
      const cx = -0.21 + c * 0.21;
      const coilPack = new THREE.Mesh(
        new THREE.CylinderGeometry(0.018, 0.021, 0.036, 14),
        mat.carbonGlossMat
      );
      coilPack.position.set(cx, 0.145, 0);
      bankGroup.add(coilPack);
    }

    for (let b = 0; b < 4; b++) {
      const bx = -0.285 + b * 0.19;
      for (const bz of [-0.044, 0.044]) {
        const bolt = new THREE.Mesh(
          new THREE.CylinderGeometry(0.006, 0.006, 0.014, 8),
          mat.titaniumMat
        );
        bolt.position.set(bx, 0.138, bz);
        bankGroup.add(bolt);
      }
    }

    group.add(bankGroup);
  }

  // 4. Left-Side MGU-K Motor-Generator Unit (x = -0.35m, y = 0.18m, z = -0.14m)
  const mgukGroup = new THREE.Group();
  mgukGroup.position.set(-0.35, 0.18, -0.14);
  mgukGroup.name = 'mgu_k_unit';

  const mgukBody = new THREE.Mesh(
    new THREE.CylinderGeometry(0.046, 0.046, 0.22, 24),
    mat.ersGreenMat
  );
  mgukBody.rotation.z = Math.PI / 2;
  mgukGroup.add(mgukBody);

  for (let r = -0.08; r <= 0.08; r += 0.04) {
    const finRing = new THREE.Mesh(
      new THREE.CylinderGeometry(0.052, 0.052, 0.008, 24),
      mat.billetAluminumMat
    );
    finRing.rotation.z = Math.PI / 2;
    finRing.position.x = r;
    mgukGroup.add(finRing);
  }
  group.add(mgukGroup);

  // 5. Split-Turbocharger: Front Axial Compressor (x = -0.12m), Central MGU-H Shaft Housing (y = 0.36m, z = 0), Rear Radial Turbine (x = -1.04m)
  const mguhHousing = new THREE.Mesh(
    new THREE.CylinderGeometry(0.044, 0.044, 0.86, 24),
    mat.titaniumMat
  );
  mguhHousing.rotation.z = Math.PI / 2;
  mguhHousing.position.set(-0.58, 0.36, 0);
  mguhHousing.name = 'mgu_h_shaft_housing';
  group.add(mguhHousing);

  // Front Axial Compressor Volute Snail (x = -0.12m, y = 0.36m, z = 0)
  const compressorSnail = new THREE.Mesh(
    new THREE.TorusGeometry(0.058, 0.026, 16, 28),
    mat.billetAluminumMat
  );
  compressorSnail.rotation.y = Math.PI / 2;
  compressorSnail.position.set(-0.12, 0.36, 0);
  compressorSnail.name = 'turbo_compressor_volute';
  group.add(compressorSnail);

  // Rear Radial Turbine Snail Volute (x = -1.04m, y = 0.36m, z = 0)
  const turbineSnail = new THREE.Mesh(
    new THREE.TorusGeometry(0.062, 0.028, 16, 28),
    mat.inconelExhaustMat
  );
  turbineSnail.rotation.y = Math.PI / 2;
  turbineSnail.position.set(-1.04, 0.36, 0);
  turbineSnail.name = 'turbo_turbine_volute';
  group.add(turbineSnail);
  exhaustGlowMeshes.push(turbineSnail);

  // Rotating Turbo Rotor Impeller Assembly (exposed as group.userData.turboRotorMesh)
  const turboRotorGroup = new THREE.Group();
  turboRotorGroup.position.set(-0.12, 0.36, 0);
  turboRotorGroup.name = 'turbo_rotor_impeller';

  const rotorShaft = new THREE.Mesh(
    new THREE.CylinderGeometry(0.014, 0.014, 0.96, 16),
    mat.titaniumMat
  );
  rotorShaft.rotation.z = Math.PI / 2;
  rotorShaft.position.set(-0.46, 0, 0);
  turboRotorGroup.add(rotorShaft);

  const bladeCount = 10;
  for (let b = 0; b < bladeCount; b++) {
    const angle = (b / bladeCount) * Math.PI * 2;
    const compBlade = new THREE.Mesh(
      new THREE.BoxGeometry(0.024, 0.044, 0.003),
      mat.billetAluminumMat
    );
    compBlade.position.set(0.012, Math.cos(angle) * 0.022, Math.sin(angle) * 0.022);
    compBlade.rotation.x = angle;
    compBlade.rotation.y = 0.38;
    turboRotorGroup.add(compBlade);

    const turbBlade = new THREE.Mesh(
      new THREE.BoxGeometry(0.024, 0.046, 0.0035),
      mat.inconelExhaustMat
    );
    turbBlade.position.set(-0.92, Math.cos(angle) * 0.023, Math.sin(angle) * 0.023);
    turbBlade.rotation.x = angle;
    turbBlade.rotation.y = -0.38;
    turboRotorGroup.add(turbBlade);
  }
  group.add(turboRotorGroup);

  // 6. Central Carbon-Fiber Intake Plenum (y = 0.46m .. 0.56m) + 6 Curved Velocity Stack Trumpets
  const plenumStations = [
    { x: -0.94, yBottom: 0.455, yTop: 0.535, zHalfWidth: 0.072, topWidthRatio: 0.82, bottomWidthRatio: 0.92, crown: 0.014 },
    { x: -0.60, yBottom: 0.460, yTop: 0.558, zHalfWidth: 0.098, topWidthRatio: 0.86, bottomWidthRatio: 0.95, crown: 0.018 },
    { x: -0.24, yBottom: 0.458, yTop: 0.548, zHalfWidth: 0.086, topWidthRatio: 0.84, bottomWidthRatio: 0.92, crown: 0.015 },
    { x: -0.10, yBottom: 0.420, yTop: 0.495, zHalfWidth: 0.052, topWidthRatio: 0.88, bottomWidthRatio: 0.88, crown: 0.010 }
  ];
  const plenumMesh = new THREE.Mesh(
    createLoftedShellGeometry(plenumStations, 28, true),
    mat.carbonGlossMat
  );
  plenumMesh.name = 'carbon_intake_plenum';
  group.add(plenumMesh);

  // Charge-Air Feed Pipe from Front Compressor up into Plenum Throat
  const chargePipeCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-0.12, 0.39, 0.0),
    new THREE.Vector3(-0.08, 0.425, 0.0),
    new THREE.Vector3(-0.12, 0.465, 0.0)
  ]);
  const chargePipeMesh = new THREE.Mesh(
    new THREE.TubeGeometry(chargePipeCurve, 16, 0.022, 12, false),
    mat.carbonGlossMat
  );
  group.add(chargePipeMesh);

  // 6 Curved Velocity Stack Trumpets connecting Plenum down into V6 Cylinder Heads
  const cylXs = [-0.38, -0.59, -0.80];
  for (const side of [-1, 1]) {
    cylXs.forEach((cx, idx) => {
      const trumpetCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(cx, 0.515, side * 0.042),
        new THREE.Vector3(cx, 0.455, side * 0.068),
        new THREE.Vector3(cx, 0.395, side * 0.095)
      ]);
      const trumpetMesh = new THREE.Mesh(
        new THREE.TubeGeometry(trumpetCurve, 14, 0.018, 12, false),
        mat.titaniumMat
      );
      trumpetMesh.name = `velocity_stack_trumpet_${side < 0 ? 'L' : 'R'}_${idx + 1}`;
      group.add(trumpetMesh);
    });
  }

  // 7. Hydroformed Inconel 625 3-into-1 Exhaust Headers + Central Tailpipe (x = -1.98m, y = 0.45m, z = 0) + Twin Wastegate Pipes (z = ±0.07m)
  for (const side of [-1, 1]) {
    const collectorPoint = new THREE.Vector3(-0.95, 0.365, side * Math.min(0.115, maxAllowedZRear));

    cylXs.forEach((cx, idx) => {
      const portZ = side * 0.145;
      const archZ = side * Math.min(0.185, getEnvelopeBounds(cx).internalMaxZ - 0.015);
      const runnerCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(cx, 0.335, portZ),
        new THREE.Vector3(cx - 0.04, 0.365 + idx * 0.014, archZ),
        new THREE.Vector3(-0.86, 0.375 - idx * 0.010, side * 0.142),
        collectorPoint
      ]);
      const runnerMesh = new THREE.Mesh(
        new THREE.TubeGeometry(runnerCurve, 28, 0.0165, 12, false),
        mat.inconelExhaustMat
      );
      runnerMesh.name = `inconel_header_runner_${side < 0 ? 'L' : 'R'}_${idx + 1}`;
      group.add(runnerMesh);
      exhaustGlowMeshes.push(runnerMesh);
    });

    // 3-into-1 Collector Merge Pipe into Rear Turbine Volute
    const mergeCurve = new THREE.CatmullRomCurve3([
      collectorPoint,
      new THREE.Vector3(-1.01, 0.362, side * 0.072),
      new THREE.Vector3(-1.04, 0.360, side * 0.028)
    ]);
    const mergeMesh = new THREE.Mesh(
      new THREE.TubeGeometry(mergeCurve, 16, 0.022, 12, false),
      mat.inconelExhaustMat
    );
    group.add(mergeMesh);
    exhaustGlowMeshes.push(mergeMesh);

    // Twin Smaller Wastegate Pipes exiting at x = -1.98m, y = 0.43m, z = ±0.07m
    const wastegateCurve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.98, 0.345, side * 0.088),
      new THREE.Vector3(-1.32, 0.382, side * 0.078),
      new THREE.Vector3(-1.68, 0.415, side * 0.072),
      new THREE.Vector3(-1.98, 0.432, side * 0.070)
    ]);
    const wastegateMesh = new THREE.Mesh(
      new THREE.TubeGeometry(wastegateCurve, 28, 0.0115, 10, false),
      mat.inconelExhaustMat
    );
    wastegateMesh.name = `wastegate_tailpipe_${side < 0 ? 'port' : 'starboard'}`;
    group.add(wastegateMesh);
    exhaustGlowMeshes.push(wastegateMesh);
  }

  // Single Central Exhaust Tailpipe exiting at (x = -1.98m, y = 0.45m, z = 0)
  const mainTailpipeCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-1.04, 0.360, 0),
    new THREE.Vector3(-1.28, 0.405, 0),
    new THREE.Vector3(-1.64, 0.438, 0),
    new THREE.Vector3(-1.98, 0.450, 0)
  ]);
  const mainTailpipeMesh = new THREE.Mesh(
    new THREE.TubeGeometry(mainTailpipeCurve, 32, 0.036, 18, false),
    mat.inconelExhaustMat
  );
  mainTailpipeMesh.name = 'central_inconel_tailpipe';
  group.add(mainTailpipeMesh);
  exhaustGlowMeshes.push(mainTailpipeMesh);

  // Beveled Exhaust Exit Collar Ring at x = -1.98m
  const exitCollar = new THREE.Mesh(
    new THREE.TorusGeometry(0.037, 0.0045, 12, 24),
    mat.titaniumMat
  );
  exitCollar.rotation.y = Math.PI / 2;
  exitCollar.position.set(-1.98, 0.450, 0);
  group.add(exitCollar);

  group.userData.exhaustGlowMeshes = exhaustGlowMeshes;
  group.userData.turboRotorMesh = turboRotorGroup;

  enableShadows(group);
  return group;
}

function buildGearboxGroup(mat) {
  const group = new THREE.Group();
  group.name = 'part_09_gearbox';

  // Strictly contained inside x = -2.18m .. -1.12m, y = 0.13m .. 0.44m, z = -0.17m .. +0.17m
  // 1. Structural 8-Speed Woven Carbon Longitudinal Maincase
  const casingStations = [
    { x: -1.88, yBottom: 0.175, yTop: 0.375, zHalfWidth: 0.105, topWidthRatio: 0.86, bottomWidthRatio: 0.80, shoulderPower: 1.3 },
    { x: -1.68, yBottom: 0.158, yTop: 0.402, zHalfWidth: 0.135, topWidthRatio: 0.90, bottomWidthRatio: 0.84, shoulderPower: 1.3 },
    { x: -1.38, yBottom: 0.145, yTop: 0.418, zHalfWidth: 0.152, topWidthRatio: 0.92, bottomWidthRatio: 0.86, shoulderPower: 1.35 },
    { x: -1.12, yBottom: 0.138, yTop: 0.432, zHalfWidth: 0.165, topWidthRatio: 0.94, bottomWidthRatio: 0.88, shoulderPower: 1.35 }
  ];
  const maincaseMesh = new THREE.Mesh(
    createLoftedShellGeometry(casingStations, 32, true),
    mat.carbonGlossMat
  );
  maincaseMesh.name = 'gearbox_carbon_maincase';
  group.add(maincaseMesh);

  // 2. Investment-Cast Ti-6Al-4V Front Engine-Mount Flange & Rear Suspension Bulkhead
  const frontBulkhead = new THREE.Mesh(
    new THREE.BoxGeometry(0.032, 0.285, 0.325),
    mat.titaniumMat
  );
  frontBulkhead.position.set(-1.136, 0.285, 0);
  frontBulkhead.name = 'gearbox_ti_front_flange';
  group.add(frontBulkhead);

  const rearBulkhead = new THREE.Mesh(
    new THREE.BoxGeometry(0.085, 0.235, 0.275),
    mat.titaniumMat
  );
  rearBulkhead.position.set(-1.78, 0.280, 0);
  rearBulkhead.name = 'gearbox_ti_rear_bulkhead';
  group.add(rearBulkhead);

  // 3. Structural Diagonal Carbon Ribs along Gearbox Flanks
  for (const side of [-1, 1]) {
    const ribPairs = [
      [new THREE.Vector3(-1.16, 0.17, side * 0.155), new THREE.Vector3(-1.46, 0.39, side * 0.142)],
      [new THREE.Vector3(-1.44, 0.17, side * 0.142), new THREE.Vector3(-1.74, 0.37, side * 0.128)],
      [new THREE.Vector3(-1.18, 0.39, side * 0.155), new THREE.Vector3(-1.52, 0.18, side * 0.138)]
    ];
    ribPairs.forEach(([pA, pB]) => {
      const rib = createAeroLinkMesh(pA, pB, 0.018, 0.012, mat.titaniumMat);
      group.add(rib);
    });

    // Electronically Controlled Hydraulic Differential Output Flanges (x = -1.78m, y = 0.28m)
    const diffFlange = new THREE.Mesh(
      new THREE.CylinderGeometry(0.048, 0.052, 0.036, 20),
      mat.billetAluminumMat
    );
    diffFlange.rotation.z = Math.PI / 2;
    diffFlange.position.set(-1.78, 0.28, side * 0.148);
    group.add(diffFlange);
  }

  // 4. Hydraulic Seamless-Shift Manifold & Rotary Actuator Pod on Top Deck
  const manifoldBlock = new THREE.Mesh(
    new THREE.BoxGeometry(0.24, 0.042, 0.14),
    mat.billetAluminumMat
  );
  manifoldBlock.position.set(-1.38, 0.418, 0);
  manifoldBlock.name = 'hydraulic_shift_manifold';
  group.add(manifoldBlock);

  for (let s = -1; s <= 1; s++) {
    const solenoid = new THREE.Mesh(
      new THREE.CylinderGeometry(0.014, 0.014, 0.055, 14),
      mat.camCoverRedMat
    );
    solenoid.rotation.z = Math.PI / 2;
    solenoid.position.set(-1.38 + s * 0.065, 0.432, 0.055);
    group.add(solenoid);
  }

  // 5. Rear FIA Corrugated Crash Impact Attenuator Cone (x = -2.18m .. -1.88m)
  const crashConeStations = [
    { x: -2.18, yBottom: 0.205, yTop: 0.295, zHalfWidth: 0.048, topWidthRatio: 0.88, bottomWidthRatio: 0.85 },
    { x: -2.08, yBottom: 0.195, yTop: 0.315, zHalfWidth: 0.064, topWidthRatio: 0.90, bottomWidthRatio: 0.86 },
    { x: -1.98, yBottom: 0.185, yTop: 0.340, zHalfWidth: 0.082, topWidthRatio: 0.90, bottomWidthRatio: 0.86 },
    { x: -1.88, yBottom: 0.175, yTop: 0.368, zHalfWidth: 0.102, topWidthRatio: 0.90, bottomWidthRatio: 0.86 }
  ];
  const crashConeMesh = new THREE.Mesh(
    createLoftedShellGeometry(crashConeStations, 24, true),
    mat.carbonFloorMat
  );
  crashConeMesh.name = 'fia_rear_impact_attenuator_cone';
  group.add(crashConeMesh);

  // Corrugated Energy-Absorbing Crush Ribs along the Impact Cone
  for (let c = 0; c < 4; c++) {
    const rx = -2.13 + c * 0.068;
    const t = c / 3;
    const ribBox = new THREE.Mesh(
      new THREE.BoxGeometry(0.012, THREE.MathUtils.lerp(0.10, 0.17, t), THREE.MathUtils.lerp(0.105, 0.185, t)),
      mat.carbonGlossMat
    );
    ribBox.position.set(rx, THREE.MathUtils.lerp(0.25, 0.27, t), 0);
    group.add(ribBox);
  }

  // 6. Pulsing Red LED FIA Rain Light at (x = -2.19m, y = 0.24m, z = 0)
  const rainLightBezel = new THREE.Mesh(
    new THREE.BoxGeometry(0.022, 0.086, 0.044),
    mat.carbonGlossMat
  );
  rainLightBezel.position.set(-2.182, 0.24, 0);
  group.add(rainLightBezel);

  const rainLightMesh = new THREE.Mesh(
    new THREE.BoxGeometry(0.012, 0.072, 0.030),
    mat.rainLightLedMat
  );
  rainLightMesh.position.set(-2.19, 0.24, 0);
  rainLightMesh.name = 'fia_rain_light_led';
  group.add(rainLightMesh);

  group.userData.rainLightMesh = rainLightMesh;

  enableShadows(group);
  return group;
}

function buildCornerSuspensionAndBrake({
  axleX,
  isFront,
  sideSign,
  mat,
  brakeDiscMeshes
}) {
  const cornerGroup = new THREE.Group();
  cornerGroup.name = `suspension_corner_${isFront ? 'F' : 'R'}${sideSign < 0 ? 'L' : 'R'}`;

  const zInboard = sideSign * (isFront ? 0.23 : 0.155);
  const zUpright = sideSign * (isFront ? 0.725 : 0.675);
  const zDisc = sideSign * (isFront ? 0.755 : 0.705);
  const yHub = CAR_DIMENSIONS.wheelRadius; // 0.36m

  // 1. Upper Carbon Wishbone A-Arm (Fore & Aft Aero-Profiled Legs)
  const pUpperOut = new THREE.Vector3(axleX, yHub + 0.115, zUpright);
  const pUpperForeIn = new THREE.Vector3(
    axleX + (isFront ? 0.26 : 0.28),
    isFront ? 0.485 : 0.415,
    zInboard
  );
  const pUpperAftIn = new THREE.Vector3(
    axleX - (isFront ? 0.24 : 0.18),
    isFront ? 0.465 : 0.398,
    zInboard
  );
  cornerGroup.add(createAeroLinkMesh(pUpperForeIn, pUpperOut, 0.042, 0.011, mat.carbonGlossMat));
  cornerGroup.add(createAeroLinkMesh(pUpperAftIn, pUpperOut, 0.042, 0.011, mat.carbonGlossMat));

  // 2. Lower Carbon Wishbone A-Arm (Fore & Aft Aero-Profiled Legs)
  const pLowerOut = new THREE.Vector3(axleX, yHub - 0.118, zUpright);
  const pLowerForeIn = new THREE.Vector3(
    axleX + (isFront ? 0.24 : 0.26),
    isFront ? 0.215 : 0.195,
    zInboard
  );
  const pLowerAftIn = new THREE.Vector3(
    axleX - (isFront ? 0.22 : 0.18),
    isFront ? 0.205 : 0.185,
    zInboard
  );
  cornerGroup.add(createAeroLinkMesh(pLowerForeIn, pLowerOut, 0.048, 0.013, mat.carbonGlossMat));
  cornerGroup.add(createAeroLinkMesh(pLowerAftIn, pLowerOut, 0.048, 0.013, mat.carbonGlossMat));

  // 3. Diagonal Pullrod (Front: High Upright -> Low Monocoque) or Pushrod (Rear: Low Upright -> High Gearbox)
  const pRodIn = isFront
    ? new THREE.Vector3(axleX + 0.12, 0.195, zInboard * 0.92)
    : new THREE.Vector3(axleX + 0.22, 0.425, zInboard * 0.92);
  const pRodOut = isFront
    ? new THREE.Vector3(axleX + 0.02, yHub + 0.105, zUpright - sideSign * 0.02)
    : new THREE.Vector3(axleX + 0.02, yHub - 0.102, zUpright - sideSign * 0.02);
  const rodStrut = createAeroLinkMesh(pRodIn, pRodOut, 0.026, 0.014, mat.carbonGlossMat);
  rodStrut.name = isFront ? 'pullrod_strut' : 'pushrod_strut';
  cornerGroup.add(rodStrut);

  // 4. Steering / Toe Track Rod
  const pTrackIn = new THREE.Vector3(
    axleX + (isFront ? 0.09 : -0.11),
    yHub + (isFront ? 0.04 : -0.03),
    zInboard
  );
  const pTrackOut = new THREE.Vector3(
    axleX + (isFront ? 0.07 : -0.08),
    yHub + (isFront ? 0.02 : -0.02),
    zUpright
  );
  cornerGroup.add(createAeroLinkMesh(pTrackIn, pTrackOut, 0.024, 0.010, mat.titaniumMat));

  // 5. Rear Carbon Constant-Velocity Driveshaft & Boots (Rear Axle x = -1.80m only)
  if (!isFront) {
    const pDiff = new THREE.Vector3(axleX + 0.02, 0.28, sideSign * 0.155);
    const pHubCenter = new THREE.Vector3(axleX, yHub, zUpright);
    const driveshaft = createAeroLinkMesh(pDiff, pHubCenter, 0.036, 0.036, mat.carbonGlossMat);
    driveshaft.name = 'rear_carbon_driveshaft';
    cornerGroup.add(driveshaft);

    // Titanium CV Joint Boots
    for (const pt of [pDiff, pHubCenter]) {
      const cvBoot = new THREE.Mesh(
        new THREE.CylinderGeometry(0.032, 0.032, 0.045, 16),
        mat.titaniumMat
      );
      cvBoot.rotation.x = Math.PI / 2;
      cvBoot.position.copy(pt);
      cornerGroup.add(cvBoot);
    }
  }

  // 6. CNC Billet Aluminum Upright Carrier & Carbon Brake Cooling Scoop
  const uprightCarrier = new THREE.Mesh(
    new THREE.CylinderGeometry(0.082, 0.092, 0.245, 18),
    mat.billetAluminumMat
  );
  uprightCarrier.position.set(axleX, yHub, zUpright);
  uprightCarrier.scale.set(0.68, 1.0, 0.42);
  uprightCarrier.name = 'cnc_upright_carrier';
  cornerGroup.add(uprightCarrier);

  const brakeDuctScoop = new THREE.Mesh(
    new THREE.BoxGeometry(0.14, 0.19, 0.045),
    mat.carbonFloorMat
  );
  brakeDuctScoop.position.set(axleX + 0.06, yHub, zUpright - sideSign * 0.035);
  brakeDuctScoop.name = 'carbon_brake_cooling_scoop';
  cornerGroup.add(brakeDuctScoop);

  // 7. 328mm (r = 0.164m) Cross-Drilled Carbon-Ceramic Brake Disc Rotor (brakeDiscMat)
  const discGroup = new THREE.Group();
  discGroup.position.set(axleX, yHub, zDisc);
  discGroup.name = `brake_disc_rotor_${isFront ? 'F' : 'R'}${sideSign < 0 ? 'L' : 'R'}`;

  const rotorRing = new THREE.Mesh(
    new THREE.CylinderGeometry(0.164, 0.164, 0.032, 36),
    mat.brakeDiscMat
  );
  rotorRing.rotation.x = Math.PI / 2;
  discGroup.add(rotorRing);

  const rotorBellHat = new THREE.Mesh(
    new THREE.CylinderGeometry(0.092, 0.092, 0.040, 24),
    mat.titaniumMat
  );
  rotorBellHat.rotation.x = Math.PI / 2;
  discGroup.add(rotorBellHat);

  // Radial Cross-Drilled Ventilation Vanes
  for (let v = 0; v < 12; v++) {
    const angle = (v / 12) * Math.PI * 2;
    const vane = new THREE.Mesh(
      new THREE.BoxGeometry(0.008, 0.052, 0.034),
      mat.titaniumMat
    );
    vane.position.set(Math.cos(angle) * 0.128, Math.sin(angle) * 0.128, 0);
    vane.rotation.z = angle;
    discGroup.add(vane);
  }

  cornerGroup.add(discGroup);
  brakeDiscMeshes.push(rotorRing);

  // 8. 6-Piston Anodized Red Brembo Brake Caliper
  const caliperAngle = isFront ? -Math.PI * 0.18 : Math.PI * 0.18;
  const caliperGroup = new THREE.Group();
  caliperGroup.position.set(
    axleX + Math.cos(caliperAngle) * 0.125,
    yHub + Math.sin(caliperAngle) * 0.125,
    zDisc
  );
  caliperGroup.rotation.z = caliperAngle;
  caliperGroup.name = 'brembo_6piston_caliper';

  const caliperBody = new THREE.Mesh(
    new THREE.BoxGeometry(0.068, 0.135, 0.062),
    mat.bremboCaliperMat
  );
  caliperGroup.add(caliperBody);

  for (let p = -1; p <= 1; p++) {
    const pistonCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.015, 0.015, 0.066, 14),
      mat.titaniumMat
    );
    pistonCap.rotation.x = Math.PI / 2;
    pistonCap.position.set(0.008, p * 0.036, 0);
    caliperGroup.add(pistonCap);
  }

  cornerGroup.add(caliperGroup);
  return cornerGroup;
}

function buildSuspensionAndBrakesGroup(mat) {
  const group = new THREE.Group();
  group.name = 'part_10_suspension_brakes';

  const leftSideGroup = new THREE.Group();
  leftSideGroup.name = 'suspension_left';
  leftSideGroup.userData.sideSign = -1;

  const rightSideGroup = new THREE.Group();
  rightSideGroup.name = 'suspension_right';
  rightSideGroup.userData.sideSign = 1;

  const brakeDiscMeshes = [];

  // Port (-Z) Front & Rear Corners
  leftSideGroup.add(
    buildCornerSuspensionAndBrake({
      axleX: CAR_DIMENSIONS.frontAxleX,
      isFront: true,
      sideSign: -1,
      mat,
      brakeDiscMeshes
    })
  );
  leftSideGroup.add(
    buildCornerSuspensionAndBrake({
      axleX: CAR_DIMENSIONS.rearAxleX,
      isFront: false,
      sideSign: -1,
      mat,
      brakeDiscMeshes
    })
  );

  // Starboard (+Z) Front & Rear Corners
  rightSideGroup.add(
    buildCornerSuspensionAndBrake({
      axleX: CAR_DIMENSIONS.frontAxleX,
      isFront: true,
      sideSign: 1,
      mat,
      brakeDiscMeshes
    })
  );
  rightSideGroup.add(
    buildCornerSuspensionAndBrake({
      axleX: CAR_DIMENSIONS.rearAxleX,
      isFront: false,
      sideSign: 1,
      mat,
      brakeDiscMeshes
    })
  );

  group.add(leftSideGroup);
  group.add(rightSideGroup);
  group.userData.brakeDiscMeshes = brakeDiscMeshes;

  enableShadows(group);
  return group;
}

function createToroidalTireGeometry(outerRadius, rimRadius, width) {
  const halfW = width * 0.5;
  const shoulderW = width * 0.36;
  const beadW = width * 0.44;
  const profilePoints = [];

  // Inner bead to outer sidewall -> toroidal shoulder -> crowned tread -> opposite shoulder -> inner bead
  profilePoints.push(new THREE.Vector2(rimRadius, -beadW));
  profilePoints.push(new THREE.Vector2(rimRadius + 0.018, -halfW * 0.94));
  profilePoints.push(new THREE.Vector2(rimRadius + 0.055, -halfW));
  profilePoints.push(new THREE.Vector2(outerRadius - 0.048, -halfW * 0.98));
  profilePoints.push(new THREE.Vector2(outerRadius - 0.016, -shoulderW * 1.12));
  profilePoints.push(new THREE.Vector2(outerRadius - 0.003, -shoulderW * 0.72));
  profilePoints.push(new THREE.Vector2(outerRadius, 0.0));
  profilePoints.push(new THREE.Vector2(outerRadius - 0.003, shoulderW * 0.72));
  profilePoints.push(new THREE.Vector2(outerRadius - 0.016, shoulderW * 1.12));
  profilePoints.push(new THREE.Vector2(outerRadius - 0.048, halfW * 0.98));
  profilePoints.push(new THREE.Vector2(rimRadius + 0.055, halfW));
  profilePoints.push(new THREE.Vector2(rimRadius + 0.018, halfW * 0.94));
  profilePoints.push(new THREE.Vector2(rimRadius, beadW));

  const smoothCurve = new THREE.SplineCurve(profilePoints);
  const sampledPoints = smoothCurve.getPoints(36);
  const latheGeo = new THREE.LatheGeometry(sampledPoints, 56);
  // Rotate so the lathe axis (Y) aligns with the wheel axle (Z)
  latheGeo.rotateX(Math.PI / 2);
  latheGeo.computeVertexNormals();
  return latheGeo;
}

function buildSingleWheelSubGroup({
  id,
  x,
  y,
  z,
  tireWidth,
  sideSign,
  axleSign,
  mat,
  spinMeshes
}) {
  const wheelGroup = new THREE.Group();
  wheelGroup.name = `wheel_${id}`;
  wheelGroup.position.set(x, y, z);
  wheelGroup.userData.sideSign = sideSign;
  wheelGroup.userData.axleSign = axleSign;
  wheelGroup.userData.wheelId = id;

  const outerRadius = CAR_DIMENSIONS.wheelRadius; // 0.360m
  const rimRadius = 0.2286; // 18-inch rim radius (9 inches = 0.2286m)
  const halfWidth = tireWidth * 0.5;

  // Rotating Spin Sub-Group (Tire + BBS Rim + Aero Wheel Cover + Sidewall Rings + Center-Lock Nut)
  const spinGroup = new THREE.Group();
  spinGroup.name = `wheel_spin_${id}`;

  // 1. Custom LatheGeometry Toroidal-Shouldered Pirelli P Zero Slick Tire
  const tireGeo = createToroidalTireGeometry(outerRadius, rimRadius, tireWidth);
  const tireMesh = new THREE.Mesh(tireGeo, mat.tireRubberMat);
  tireMesh.name = `pirelli_slick_tire_${id}`;
  spinGroup.add(tireMesh);

  // 2. 18-Inch Forged Magnesium BBS Rim Barrel & Inner Spokes
  const barrelGeo = new THREE.CylinderGeometry(rimRadius, rimRadius, tireWidth * 0.86, 40, 1, true);
  barrelGeo.rotateX(Math.PI / 2);
  const barrelMesh = new THREE.Mesh(barrelGeo, mat.rimMagnesiumMat);
  spinGroup.add(barrelMesh);

  const outerRimLip = new THREE.Mesh(
    new THREE.TorusGeometry(rimRadius, 0.009, 14, 48),
    mat.billetAluminumMat
  );
  outerRimLip.position.z = sideSign * (halfWidth * 0.88);
  spinGroup.add(outerRimLip);

  // 3. Carbon Aerodynamic Wheel Cover Dish
  const aeroCoverGeo = new THREE.CylinderGeometry(rimRadius - 0.004, rimRadius * 0.38, 0.026, 40);
  aeroCoverGeo.rotateX(Math.PI / 2);
  const aeroCoverMesh = new THREE.Mesh(aeroCoverGeo, mat.carbonGlossMat);
  aeroCoverMesh.position.z = sideSign * (halfWidth * 0.86);
  aeroCoverMesh.name = `aero_wheel_cover_${id}`;
  spinGroup.add(aeroCoverMesh);

  // 4. Pirelli P Zero C5 Soft Compound Red/Amber Sidewall Rings (Outboard & Inboard)
  const sidewallMat = sideSign < 0 ? mat.pirelliSidewallLeftMat : mat.pirelliSidewallRightMat;

  const outerRingGeo = new THREE.RingGeometry(rimRadius + 0.036, rimRadius + 0.072, 48);
  if (sideSign < 0) {
    outerRingGeo.rotateY(Math.PI);
  }
  const outerRingMesh = new THREE.Mesh(outerRingGeo, sidewallMat);
  outerRingMesh.position.z = sideSign * (halfWidth * 0.992);
  spinGroup.add(outerRingMesh);

  const coverAccentRing = new THREE.Mesh(
    new THREE.TorusGeometry(rimRadius * 0.76, 0.0045, 10, 44),
    mat.redAccentMat
  );
  coverAccentRing.position.z = sideSign * (halfWidth * 0.895);
  spinGroup.add(coverAccentRing);

  // 5. Anodized Center-Lock Wheel Nut & Spindle Cone
  const nutMat = sideSign < 0 ? mat.centerNutPortMat : mat.centerNutStarboardMat;
  const centerNutGeo = new THREE.CylinderGeometry(0.038, 0.046, 0.036, 12);
  centerNutGeo.rotateX(Math.PI / 2);
  const centerNutMesh = new THREE.Mesh(centerNutGeo, nutMat);
  centerNutMesh.position.z = sideSign * (halfWidth * 0.90);
  centerNutMesh.name = `center_lock_nut_${id}`;
  spinGroup.add(centerNutMesh);

  const lockHubCap = new THREE.Mesh(
    new THREE.CylinderGeometry(0.022, 0.022, 0.044, 16).rotateX(Math.PI / 2),
    mat.titaniumMat
  );
  lockHubCap.position.z = sideSign * (halfWidth * 0.91);
  spinGroup.add(lockHubCap);

  wheelGroup.add(spinGroup);
  spinMeshes.push(spinGroup);

  // 6. Stationary Curved Over-Wheel Wake Control Winglet ("Hard Rock" Deflector above inner shoulder)
  // Attached to wheelGroup (OUTSIDE spinGroup) so it explodes with the wheel but never rotates when wheels spin
  const wakeWingletGroup = new THREE.Group();
  wakeWingletGroup.name = `over_wheel_wake_winglet_${id}`;

  const zInnerShoulder = -sideSign * (halfWidth * 0.82);
  const wakeArcPoints = [];
  const startAngle = axleSign > 0 ? Math.PI * 0.18 : Math.PI * 0.22;
  const endAngle = axleSign > 0 ? Math.PI * 0.72 : Math.PI * 0.68;
  const arcRadius = outerRadius + 0.034;

  for (let i = 0; i <= 10; i++) {
    const t = i / 10;
    const theta = THREE.MathUtils.lerp(startAngle, endAngle, t);
    const wx = Math.cos(theta) * arcRadius;
    const wy = Math.sin(theta) * arcRadius;
    const wz = zInnerShoulder + sideSign * Math.sin(t * Math.PI) * 0.055;
    wakeArcPoints.push(new THREE.Vector3(wx, wy, wz));
  }

  const wakeSpline = new THREE.CatmullRomCurve3(wakeArcPoints);
  const wakeWingMesh = new THREE.Mesh(
    new THREE.TubeGeometry(wakeSpline, 28, 0.015, 12, false),
    mat.carbonGlossMat
  );
  wakeWingletGroup.add(wakeWingMesh);

  // Upright Mounting Stanchion connecting Wake Winglet down toward Upright Carrier
  const stanchionCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.04 * axleSign, 0.08, -sideSign * (halfWidth * 0.55)),
    new THREE.Vector3(0.12 * axleSign, outerRadius * 0.68, zInnerShoulder),
    wakeArcPoints[2]
  ]);
  const stanchionMesh = new THREE.Mesh(
    new THREE.TubeGeometry(stanchionCurve, 16, 0.011, 8, false),
    mat.carbonGlossMat
  );
  wakeWingletGroup.add(stanchionMesh);

  wheelGroup.add(wakeWingletGroup);
  return wheelGroup;
}

function buildWheelsAndTiresGroup(mat) {
  const group = new THREE.Group();
  group.name = 'part_12_wheels_tires';

  const spinMeshes = [];
  const yCenter = CAR_DIMENSIONS.wheelRadius; // 0.360m -> bottom touches y = 0.000m

  const wheelSpecs = [
    {
      id: 'FL',
      x: CAR_DIMENSIONS.frontAxleX,
      y: yCenter,
      z: -CAR_DIMENSIONS.frontTrackHalfZ,
      tireWidth: CAR_DIMENSIONS.frontTireWidth,
      sideSign: -1,
      axleSign: 1
    },
    {
      id: 'FR',
      x: CAR_DIMENSIONS.frontAxleX,
      y: yCenter,
      z: CAR_DIMENSIONS.frontTrackHalfZ,
      tireWidth: CAR_DIMENSIONS.frontTireWidth,
      sideSign: 1,
      axleSign: 1
    },
    {
      id: 'RL',
      x: CAR_DIMENSIONS.rearAxleX,
      y: yCenter,
      z: -CAR_DIMENSIONS.rearTrackHalfZ,
      tireWidth: CAR_DIMENSIONS.rearTireWidth,
      sideSign: -1,
      axleSign: -1
    },
    {
      id: 'RR',
      x: CAR_DIMENSIONS.rearAxleX,
      y: yCenter,
      z: CAR_DIMENSIONS.rearTrackHalfZ,
      tireWidth: CAR_DIMENSIONS.rearTireWidth,
      sideSign: 1,
      axleSign: -1
    }
  ];

  wheelSpecs.forEach((spec) => {
    const wheelSubGroup = buildSingleWheelSubGroup({
      ...spec,
      mat,
      spinMeshes
    });
    group.add(wheelSubGroup);
  });

  group.userData.spinMeshes = spinMeshes;

  enableShadows(group);
  return group;
}

export function buildPowertrainAndDynamicsParts(materials = {}) {
  const mat = resolveMaterials(materials);

  const part_07_venturi_floor = buildVenturiFloorGroup(mat);
  const part_08_power_unit = buildPowerUnitGroup(mat);
  const part_09_gearbox = buildGearboxGroup(mat);
  const part_10_suspension_brakes = buildSuspensionAndBrakesGroup(mat);
  const part_12_wheels_tires = buildWheelsAndTiresGroup(mat);

  return {
    part_07_venturi_floor,
    part_08_power_unit,
    part_09_gearbox,
    part_10_suspension_brakes,
    part_12_wheels_tires
  };
}

export default buildPowertrainAndDynamicsParts;
