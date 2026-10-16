import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { CAR_DIMENSIONS, PART_REGISTRY } from './car/sharedContract.js';
import { createCarMaterials } from './car/materialsAndLivery.js';
import { buildAeroAndChassisParts } from './car/buildAeroAndChassis.js';
import { buildPowertrainAndDynamicsParts } from './car/buildPowertrainAndDynamics.js';
import { createKinematicsEngine } from './kinematics/kinematicsEngine.js';
import { createWindTunnelSolver } from './aero/windTunnelSolver.js';
import { createMotorsportAudio } from './audio/motorsportAudio.js';
import { createHudController } from './ui/hudController.js';

/**
 * Generates a procedural studio light-box environment map via PMREMGenerator
 * so carbon fiber weave, Grade 5 titanium, CNC aluminum, and Inconel headers
 * exhibit crisp specular highlights without external HDR network dependencies.
 */
function createStudioEnvironment(renderer) {
  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  const envScene = new THREE.Scene();
  envScene.background = new THREE.Color(0x06080d);

  // Overhead main softbox strip (balanced neutral studio intensity)
  const topStrip = new THREE.Mesh(
    new THREE.PlaneGeometry(16, 4.2),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(1.45, 1.52, 1.68), side: THREE.DoubleSide })
  );
  topStrip.position.set(0, 8.0, 0);
  topStrip.rotation.x = Math.PI / 2;
  envScene.add(topStrip);

  // Port (-Z) cool telemetry cyan rim strip
  const portStrip = new THREE.Mesh(
    new THREE.PlaneGeometry(14, 1.8),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(0.35, 0.95, 1.45), side: THREE.DoubleSide })
  );
  portStrip.position.set(0, 3.4, -7.0);
  portStrip.lookAt(0, 0.5, 0);
  envScene.add(portStrip);

  // Starboard (+Z) neutral studio silver rim strip
  const starboardStrip = new THREE.Mesh(
    new THREE.PlaneGeometry(14, 1.8),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(1.05, 1.15, 1.32), side: THREE.DoubleSide })
  );
  starboardStrip.position.set(0, 3.4, 7.0);
  starboardStrip.lookAt(0, 0.5, 0);
  envScene.add(starboardStrip);

  // Front key reflector panel
  const frontStrip = new THREE.Mesh(
    new THREE.PlaneGeometry(7, 2.5),
    new THREE.MeshBasicMaterial({ color: new THREE.Color(1.1, 1.18, 1.32), side: THREE.DoubleSide })
  );
  frontStrip.position.set(8.0, 3.0, 0);
  frontStrip.lookAt(0, 0.4, 0);
  envScene.add(frontStrip);

  const envRT = pmremGenerator.fromScene(envScene, 0.04);
  pmremGenerator.dispose();
  return envRT.texture;
}

/**
 * Creates a radial soft contact shadow texture for the 4 wheels and underbody.
 */
function createContactShadowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  const grad = ctx.createRadialGradient(128, 128, 12, 128, 128, 120);
  grad.addColorStop(0.0, 'rgba(0, 0, 0, 0.85)');
  grad.addColorStop(0.45, 'rgba(0, 0, 0, 0.52)');
  grad.addColorStop(0.8, 'rgba(0, 0, 0, 0.14)');
  grad.addColorStop(1.0, 'rgba(0, 0, 0, 0.0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 256, 256);

  const tex = new THREE.CanvasTexture(canvas);
  tex.needsUpdate = true;
  return tex;
}

/**
 * Builds the Milton Keynes Factory Telemetry Bay studio floor, retractable
 * underfloor inspection pit receiver, metric CAD datum grid, and wheel contact shadows.
 */
function createStudioEnvironmentFloor(scene) {
  const studioGroup = new THREE.Group();
  studioGroup.name = 'studio_telemetry_bay';

  // 1. Retractable Opaque Studio Pit Floor Receiver (dynamically drops when Venturi floor explodes)
  const pitFloorGeo = new THREE.PlaneGeometry(44, 44);
  pitFloorGeo.rotateX(-Math.PI / 2);
  const pitFloorMat = new THREE.MeshStandardMaterial({
    color: 0x090c14,
    roughness: 0.92,
    metalness: 0.03,
    envMapIntensity: 0.12
  });
  const pitFloorMesh = new THREE.Mesh(pitFloorGeo, pitFloorMat);
  pitFloorMesh.position.y = -0.002;
  pitFloorMesh.receiveShadow = true;
  pitFloorMesh.name = 'pitFloorMesh';
  studioGroup.add(pitFloorMesh);

  // 2. Stationary Metric CAD Datum Grid at y = 0.0005m (never occludes descending underfloor)
  const gridHelper = new THREE.GridHelper(16, 32, 0x1e293b, 0x111827);
  gridHelper.position.y = 0.0005;
  gridHelper.renderOrder = 1;
  if (Array.isArray(gridHelper.material)) {
    gridHelper.material.forEach((m) => {
      m.transparent = true;
      m.opacity = 0.42;
      m.depthWrite = false;
    });
  } else {
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.42;
    gridHelper.material.depthWrite = false;
  }
  studioGroup.add(gridHelper);

  // 3. Front & Rear Axle Datum Reference Lines (x = +1.80m, x = -1.80m) + Centerline (z = 0)
  const datumLineMat = new THREE.LineBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.24,
    depthWrite: false
  });
  const axlePositions = new Float32Array([
    CAR_DIMENSIONS.frontAxleX, 0.001, -1.65,
    CAR_DIMENSIONS.frontAxleX, 0.001, 1.65,
    CAR_DIMENSIONS.rearAxleX, 0.001, -1.65,
    CAR_DIMENSIONS.rearAxleX, 0.001, 1.65,
    -3.4, 0.001, 0.0,
    3.4, 0.001, 0.0
  ]);
  const axleGeo = new THREE.BufferGeometry();
  axleGeo.setAttribute('position', new THREE.BufferAttribute(axlePositions, 3));
  const axleLines = new THREE.LineSegments(axleGeo, datumLineMat);
  axleLines.renderOrder = 1;
  studioGroup.add(axleLines);

  // 4. Soft Contact Shadow Pads under 4 Wheels & Central Underfloor
  const shadowTex = createContactShadowTexture();
  const wheelShadowPads = [];
  const wheelPadCoords = [
    { x: CAR_DIMENSIONS.frontAxleX, z: -CAR_DIMENSIONS.frontTrackHalfZ, w: 0.72, d: 0.52 },
    { x: CAR_DIMENSIONS.frontAxleX, z: CAR_DIMENSIONS.frontTrackHalfZ, w: 0.72, d: 0.52 },
    { x: CAR_DIMENSIONS.rearAxleX, z: -CAR_DIMENSIONS.rearTrackHalfZ, w: 0.76, d: 0.62 },
    { x: CAR_DIMENSIONS.rearAxleX, z: CAR_DIMENSIONS.rearTrackHalfZ, w: 0.76, d: 0.62 }
  ];

  wheelPadCoords.forEach((coord) => {
    const padGeo = new THREE.PlaneGeometry(coord.w, coord.d);
    padGeo.rotateX(-Math.PI / 2);
    const padMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.82,
      depthWrite: false
    });
    const padMesh = new THREE.Mesh(padGeo, padMat);
    padMesh.position.set(coord.x, 0.0012, coord.z);
    padMesh.renderOrder = 2;
    studioGroup.add(padMesh);
    wheelShadowPads.push(padMesh);
  });

  // Central chassis ambient occlusion contact pad
  const bodyShadowGeo = new THREE.PlaneGeometry(4.8, 1.85);
  bodyShadowGeo.rotateX(-Math.PI / 2);
  const bodyShadowMat = new THREE.MeshBasicMaterial({
    map: shadowTex,
    transparent: true,
    opacity: 0.58,
    depthWrite: false
  });
  const bodyShadowMesh = new THREE.Mesh(bodyShadowGeo, bodyShadowMat);
  bodyShadowMesh.position.set(-0.15, 0.0009, 0.0);
  bodyShadowMesh.renderOrder = 2;
  studioGroup.add(bodyShadowMesh);

  scene.add(studioGroup);

  return {
    studioGroup,
    pitFloorMesh,
    wheelShadowPads,
    bodyShadowMesh
  };
}

function initApp() {
  const container = document.getElementById('viewport-container');
  if (!container) {
    throw new Error('Missing #viewport-container element in DOM');
  }

  const width = container.clientWidth || window.innerWidth || 1440;
  const height = container.clientHeight || window.innerHeight || 900;

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
    preserveDrawingBuffer: true
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.24;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x07090e);
  scene.fog = new THREE.FogExp2(0x07090e, 0.018);
  scene.environment = createStudioEnvironment(renderer);

  const camera = new THREE.PerspectiveCamera(36, width / height, 0.08, 80);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.065;
  controls.maxDistance = 16.0;
  controls.minDistance = 0.75;
  controls.maxPolarAngle = Math.PI * 0.52;

  // 5-Point Motorsport Engineering Bay Lighting Rig
  const hemiLight = new THREE.HemisphereLight(0xcbd5e1, 0x090d16, 0.78);
  scene.add(hemiLight);

  const keyLight = new THREE.DirectionalLight(0xf8fafc, 2.65);
  keyLight.position.set(4.5, 6.8, 3.8);
  keyLight.castShadow = true;
  keyLight.shadow.mapSize.width = 2048;
  keyLight.shadow.mapSize.height = 2048;
  keyLight.shadow.camera.near = 0.5;
  keyLight.shadow.camera.far = 18.0;
  keyLight.shadow.camera.left = -3.8;
  keyLight.shadow.camera.right = 3.8;
  keyLight.shadow.camera.top = 2.6;
  keyLight.shadow.camera.bottom = -1.6;
  keyLight.shadow.bias = -0.0004;
  scene.add(keyLight);

  const fillLight = new THREE.DirectionalLight(0x38bdf8, 1.15);
  fillLight.position.set(3.2, 2.4, -4.8);
  scene.add(fillLight);

  const rimLight = new THREE.DirectionalLight(0xe0f2fe, 1.35);
  rimLight.position.set(-5.2, 3.4, -3.2);
  scene.add(rimLight);

  const rearFillLight = new THREE.DirectionalLight(0xe2e8f0, 1.05);
  rearFillLight.position.set(-4.8, 2.2, 3.6);
  scene.add(rearFillLight);

  const underbodyInspectionLight = new THREE.PointLight(0x38bdf8, 1.2, 4.5, 1.5);
  underbodyInspectionLight.position.set(-0.35, 0.12, 0.0);
  scene.add(underbodyInspectionLight);

  // Build Studio Floor & Retractable Pit
  const studioFloorRefs = createStudioEnvironmentFloor(scene);

  // Build All 12 Formula 1 Sub-Assemblies
  const materials = createCarMaterials();
  const aeroAndChassisMap = buildAeroAndChassisParts(materials);
  const powertrainAndDynamicsMap = buildPowertrainAndDynamicsParts(materials);

  const carRootGroup = new THREE.Group();
  carRootGroup.name = 'rbx24_car_root';
  scene.add(carRootGroup);

  const partGroupsMap = new Map();
  const allPartsCombined = {
    ...aeroAndChassisMap,
    ...powertrainAndDynamicsMap
  };

  for (const meta of PART_REGISTRY) {
    const group = allPartsCombined[meta.id];
    if (!group) {
      throw new Error(`Missing sub-assembly group for ${meta.id}`);
    }
    group.name = meta.id;
    group.userData.partId = meta.id;
    group.userData.partMeta = meta;

    group.traverse((child) => {
      child.userData.partId = meta.id;
      // Avoid double-spinning child tire mesh inside wheel_spin_* group
      if (meta.id === 'part_12_wheels_tires' && child.name?.startsWith('pirelli_slick_tire_')) {
        child.name = child.name.replace('tire', 'tread');
      }
    });

    partGroupsMap.set(meta.id, group);
    carRootGroup.add(group);
  }

  // Instantiate Kinematics, Wind-Tunnel Solver, and Motorsport Audio
  const kinematics = createKinematicsEngine(scene, carRootGroup, partGroupsMap, studioFloorRefs);
  const windTunnel = createWindTunnelSolver(scene);
  const audio = createMotorsportAudio();

  // Compatibility shims between HUD Controller and Kinematics / WindTunnel / Audio
  const rawTriggerMovement = kinematics.triggerMovement;
  function normalizedTriggerMovement(presetOrMovementId, options) {
    const id = String(presetOrMovementId || '');
    let mapped = id;
    if (id === 'm4_pitstop_reassemble' || id === 'm4' || id === 'assembled') {
      mapped = 'm4_pitstop_reassembly';
    } else if (id === 'm2_aero_powertrain_strip' || id === 'm2' || id === 'powertrain_cutaway') {
      mapped = 'm2_aero_strip_powertrain';
    } else if (id === 'm1_full_cad_explode' || id === 'm1' || id === 'full_explode') {
      mapped = 'm1_full_cad_explode';
    } else if (id === 'm3_drs_wind_tunnel' || id === 'm3' || id === 'wind_tunnel') {
      mapped = 'm3_drs_wind_tunnel';
    }
    rawTriggerMovement(mapped, options);
  }
  kinematics.triggerMovement = normalizedTriggerMovement;
  kinematics.triggerPreset = undefined; // Let hudController invoke triggerMovement once

  windTunnel.setActive = (active) => {
    kinematics.setWindTunnel(active, 315);
    windTunnel.setVisible(active);
  };
  windTunnel.setEnabled = windTunnel.setActive;
  windTunnel.setDrsOpen = (open) => {
    kinematics.setDrsOpen(open ? 1.0 : 0.0);
  };

  audio.playClick = () => audio.triggerLatchImpulse('unlatch');
  audio.playLatchImpulse = () => audio.triggerLatchImpulse('unlatch');
  audio.playPneumaticWrench = () => audio.triggerWheelGunBurst();

  // Camera View Presets (for both HUD buttons and automated verification)
  const CAMERA_VIEWS = Object.freeze({
    front_34: {
      pos: [5.15, 1.98, 4.05],
      target: [0.15, 0.38, 0.0],
      fov: 35
    },
    side: {
      pos: [0.10, 0.48, 7.25],
      target: [0.10, 0.42, 0.0],
      fov: 31
    },
    front: {
      pos: [5.85, 0.56, 0.0],
      target: [0.0, 0.40, 0.0],
      fov: 30
    },
    top: {
      pos: [0.10, 7.45, 0.001],
      target: [0.10, 0.35, 0.0],
      fov: 32
    },
    rear_34: {
      pos: [-4.95, 1.92, -3.75],
      target: [-0.08, 0.42, 0.0],
      fov: 35
    },
    closeup: {
      pos: [-0.55, 1.24, 1.68],
      target: [-0.45, 0.38, 0.0],
      fov: 34
    },
    ground_check: {
      pos: [1.85, 0.22, 2.25],
      target: [1.15, 0.22, 0.0],
      fov: 32
    },
    exploded: {
      pos: [7.65, 3.55, 6.45],
      target: [0.25, 0.42, 0.0],
      fov: 36
    }
  });

  function setCameraView(viewName) {
    const spec = CAMERA_VIEWS[viewName] || CAMERA_VIEWS.front_34;
    camera.fov = spec.fov || 35;
    camera.position.set(...spec.pos);
    controls.target.set(...spec.target);
    camera.updateProjectionMatrix();
    controls.update();
    if (window.__SIM_STATE__) {
      window.__SIM_STATE__.cameraView = viewName;
    }
  }

  // Initialize default camera view
  setCameraView('front_34');

  // Initialize HUD Controller
  const hud = createHudController({
    camera,
    controls,
    renderer,
    scene,
    carRootGroup,
    partGroupsMap,
    kinematics,
    windTunnel,
    audio,
    setCameraView
  });

  // Geometry & Containment Verification Hook (`window.__AUDIT_GEOMETRY__`)
  function auditGeometry() {
    scene.updateMatrixWorld(true);

    const wheelsGroup = partGroupsMap.get('part_12_wheels_tires');
    const tireBox = new THREE.Box3();
    if (wheelsGroup) {
      wheelsGroup.traverse((obj) => {
        if (obj.isMesh && obj.name?.includes('pirelli_slick')) {
          const meshBox = new THREE.Box3().setFromObject(obj);
          tireBox.union(meshBox);
        }
      });
      if (tireBox.isEmpty()) {
        tireBox.setFromObject(wheelsGroup);
      }
    }

    const outerShellBox = new THREE.Box3();
    for (const outerId of [
      'part_02_monocoque',
      'part_04_sidepod_left',
      'part_05_sidepod_right',
      'part_06_engine_cover',
      'part_07_venturi_floor'
    ]) {
      const grp = partGroupsMap.get(outerId);
      if (grp) {
        outerShellBox.union(new THREE.Box3().setFromObject(grp));
      }
    }

    const puGroup = partGroupsMap.get('part_08_power_unit');
    const gbGroup = partGroupsMap.get('part_09_gearbox');
    const puBox = puGroup ? new THREE.Box3().setFromObject(puGroup) : new THREE.Box3();
    const gbBox = gbGroup ? new THREE.Box3().setFromObject(gbGroup) : new THREE.Box3();

    // Verify internal V6 block & gearbox sit within the outer bodywork lateral/vertical envelope at E=0
    const internalContained =
      puBox.max.y <= outerShellBox.max.y + 0.01 &&
      puBox.min.y >= outerShellBox.min.y - 0.01 &&
      Math.abs(puBox.max.z) <= 0.35 &&
      gbBox.max.y <= outerShellBox.max.y + 0.01;

    return {
      partCount: partGroupsMap.size,
      tireMinY: Number(tireBox.min.y.toFixed(4)),
      internalContained,
      outerBounds: {
        min: outerShellBox.min.toArray().map((n) => Number(n.toFixed(3))),
        max: outerShellBox.max.toArray().map((n) => Number(n.toFixed(3)))
      },
      powerUnitBounds: {
        min: puBox.min.toArray().map((n) => Number(n.toFixed(3))),
        max: puBox.max.toArray().map((n) => Number(n.toFixed(3)))
      }
    };
  }

  let simElapsedSec = 0.0;

  function stepSimulation(dtSec) {
    const clampedDt = Math.max(0.001, Math.min(0.033, dtSec));
    simElapsedSec += clampedDt;

    kinematics.update(clampedDt, simElapsedSec);

    // Keep masterExplode readout representative of aggregate part extension during choreographed presets
    const simState = window.__SIM_STATE__;
    if (simState) {
      let sumS = 0;
      for (const meta of PART_REGISTRY) {
        sumS += Math.max(0, Math.min(1, kinematics.partStates[meta.id]?.s ?? 0));
      }
      const avgS = sumS / PART_REGISTRY.length;
      if (kinematics.telemetry.currentPhase !== 'settled' || simState.activePreset === 'powertrain_cutaway') {
        simState.masterExplode = Number(avgS.toFixed(3));
      }

      // Modulate wheel & chassis contact shadow opacity based on wheel/floor displacement
      const wheelS = Math.max(0, Math.min(1, kinematics.partStates.part_12_wheels_tires?.s ?? 0));
      studioFloorRefs.wheelShadowPads.forEach((pad) => {
        pad.material.opacity = 0.82 * (1.0 - 0.72 * wheelS);
      });
      studioFloorRefs.bodyShadowMesh.material.opacity = 0.58 * (1.0 - 0.65 * avgS);
    }

    windTunnel.update(clampedDt, simElapsedSec, window.__SIM_STATE__);
    audio.updateAudio(window.__SIM_STATE__, kinematics.telemetry);
    controls.update();
    hud.update(clampedDt, simElapsedSec * 1000);
    renderer.render(scene, camera);
  }

  // Deterministic Time-Stepping Hook (`window.__STEP_TIME__(ms)`)
  function stepTimeMs(totalMs = 16.67) {
    const stepSec = 1 / 60;
    let remainingSec = Math.max(0.001, Number(totalMs) / 1000);
    while (remainingSec > 0.0001) {
      const dt = Math.min(stepSec, remainingSec);
      stepSimulation(dt);
      remainingSec -= dt;
    }
  }

  // Expose Global Verification & Telemetry Hooks
  window.__SET_CAMERA_VIEW__ = setCameraView;
  window.__STEP_TIME__ = stepTimeMs;
  window.__AUDIT_GEOMETRY__ = auditGeometry;

  // Handle Viewport Resizing
  window.addEventListener('resize', () => {
    const w = container.clientWidth || window.innerWidth;
    const h = container.clientHeight || window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    hud.update(0.001, performance.now());
  });

  // Initial settle frame
  stepTimeMs(32);

  // Main Animation Loop
  let lastFrameTime = performance.now();
  function animate(now) {
    const rawDt = (now - lastFrameTime) / 1000;
    lastFrameTime = now;
    if (rawDt > 0.0001) {
      stepSimulation(Math.min(0.033, rawDt));
    }
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

initApp();
