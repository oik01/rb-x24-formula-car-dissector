import * as THREE from 'three';
import { PART_REGISTRY } from '../car/sharedContract.js';

const OUTER_AERO_IDS = new Set([
  'part_01_front_wing',
  'part_04_sidepod_left',
  'part_05_sidepod_right',
  'part_06_engine_cover',
  'part_11_rear_wing_drs'
]);

const POWERTRAIN_INTERNAL_IDS = new Set([
  'part_02_monocoque',
  'part_03_halo',
  'part_07_venturi_floor',
  'part_08_power_unit',
  'part_09_gearbox',
  'part_10_suspension_brakes',
  'part_12_wheels_tires'
]);

const MOVEMENT_SPECS = Object.freeze({
  m1_full_cad_explode: {
    id: 'm1_full_cad_explode',
    name: 'Full 12-Part Staggered CAD Explosion',
    durationSec: 2.6,
    windows: {
      t0_anticipation: [0.0, 0.18],
      t1_primary_drive: [0.18, 0.65],
      t2_apex_secondary: [0.65, 0.84],
      t3_overshoot_settle: [0.84, 1.0]
    },
    secondaryEffects: [
      '3D CAD datum leader lines & floating telemetry pins',
      'Pneumatic latch + servo frequency sweep Web Audio foley',
      'Dynamic studio floor pit recession'
    ]
  },
  m2_aero_strip_powertrain: {
    id: 'm2_aero_strip_powertrain',
    name: 'Aero Shell Strip & V6 Power Unit Cutaway',
    durationSec: 2.2,
    windows: {
      t0_anticipation: [0.0, 0.16],
      t1_primary_drive: [0.16, 0.64],
      t2_apex_secondary: [0.64, 0.82],
      t3_overshoot_settle: [0.82, 1.0]
    },
    secondaryEffects: [
      'Thermal Inconel exhaust header glow shader',
      'V6 Turbo Hybrid idle + MGU-H 3.2kHz whistle audio',
      'Drivetrain callout badges'
    ]
  },
  m3_drs_wind_tunnel: {
    id: 'm3_drs_wind_tunnel',
    name: 'Active DRS Flap Actuation & Wind-Tunnel CFD Flow',
    durationSec: 2.0,
    windows: {
      t0_anticipation: [0.0, 0.15],
      t1_primary_drive: [0.15, 0.60],
      t2_apex_secondary: [0.60, 0.85],
      t3_overshoot_settle: [0.85, 1.0]
    },
    secondaryEffects: [
      '720-particle / 18-ribbon 3D CFD pressure-mapped streamlines',
      'Speed-modulated wheel blur & brake disc thermal glow',
      'Wind-tunnel bandpass air rush foley'
    ]
  },
  m4_pitstop_reassembly: {
    id: 'm4_pitstop_reassembly',
    name: 'Pit-Stop Wheel Gun & Rapid Snap Reassembly',
    durationSec: 2.2,
    windows: {
      t0_anticipation: [0.0, 0.16],
      t1_primary_drive: [0.16, 0.65],
      t2_apex_secondary: [0.65, 0.84],
      t3_overshoot_settle: [0.84, 1.0]
    },
    secondaryEffects: [
      'Chassis landing suspension compression & rebound',
      'Pneumatic impact gun audio burst',
      'Zero-seam watertight body lock'
    ]
  }
});

function smoothstep01(x) {
  const t = Math.max(0, Math.min(1, x));
  return t * t * (3 - 2 * t);
}

function evaluateQuadraticBezierArc(s, arcOffset, endVector, outVec) {
  const sClamped = Math.max(0, Math.min(1, s));
  const oneMinusS = 1 - sClamped;
  const w1 = 2 * oneMinusS * sClamped;
  const w2 = sClamped * sClamped;
  const secondaryLiftY = 0.065 * sClamped * oneMinusS;

  let bx = w1 * arcOffset[0] + w2 * endVector[0];
  let by = w1 * arcOffset[1] + w2 * endVector[1] + secondaryLiftY;
  let bz = w1 * arcOffset[2] + w2 * endVector[2];

  if (s > 1) {
    const overshoot = s - 1;
    const tx = 2 * (endVector[0] - arcOffset[0]);
    const ty = 2 * (endVector[1] - arcOffset[1]);
    const tz = 2 * (endVector[2] - arcOffset[2]);
    bx += tx * overshoot * 0.5;
    by += ty * overshoot * 0.5;
    bz += tz * overshoot * 0.5;
  } else if (s < 0) {
    bx = endVector[0] * s * 0.25;
    by = endVector[1] * s * 0.25;
    bz = endVector[2] * s * 0.25;
  }

  outVec.set(bx, by, bz);
  return outVec;
}

export function createKinematicsEngine(sceneOrConfig, carRootGroupArg, partGroupsMapArg, studioFloorRefsArg) {
  const isConfigObj =
    sceneOrConfig &&
    typeof sceneOrConfig === 'object' &&
    !sceneOrConfig.isScene &&
    ('scene' in sceneOrConfig || 'carRootGroup' in sceneOrConfig);

  const scene = isConfigObj ? sceneOrConfig.scene : sceneOrConfig;
  const carRootGroup = isConfigObj ? sceneOrConfig.carRootGroup : carRootGroupArg;
  const partGroupsMap = isConfigObj ? sceneOrConfig.partGroupsMap : partGroupsMapArg;
  const studioFloorRefs = isConfigObj ? sceneOrConfig.studioFloorRefs : studioFloorRefsArg;

  const simState = {
    masterExplode: 0.0,
    layerWeights: {
      aero: 0.0,
      chassis: 0.0,
      powertrain: 0.0,
      chassis_dynamics: 0.0
    },
    activePreset: 'assembled',
    selectedPartId: null,
    isolatedPartId: null,
    drsOpen: 0.0,
    windTunnelActive: false,
    airspeedKmh: 0,
    wheelSpinRpm: 0,
    brakeTempC: 45,
    exhaustTempC: 320,
    cameraView: 'front_34'
  };

  if (typeof window !== 'undefined') {
    window.__SIM_STATE__ = simState;
  }

  const partStates = {};
  for (const meta of PART_REGISTRY) {
    partStates[meta.id] = {
      id: meta.id,
      code: meta.code,
      layer: meta.layer,
      s: 0.0,
      v: 0.0,
      targetS: 0.0,
      baseGoalS: 0.0,
      omegaN: meta.omegaN,
      zeta: meta.zeta,
      staggerWindow: meta.staggerWindow,
      assembledPivot: new THREE.Vector3(...meta.assembledPivot),
      currentWorldPivot: new THREE.Vector3(...meta.assembledPivot),
      displacement: new THREE.Vector3(),
      rotationOffset: new THREE.Euler(0, 0, 0)
    };
  }

  const bodyOscillators = {
    heaveY: { x: 0.0, v: 0.0, target: 0.0, omegaN: 18.5, zeta: 0.52 },
    pitchRad: { x: 0.0, v: 0.0, target: 0.0, omegaN: 16.8, zeta: 0.54 },
    rollRad: { x: 0.0, v: 0.0, target: 0.0, omegaN: 17.2, zeta: 0.58 },
    yawRad: { x: 0.0, v: 0.0, target: 0.0, omegaN: 15.0, zeta: 0.62 },
    drsNorm: { x: 0.0, v: 0.0, target: 0.0, omegaN: 19.5, zeta: 0.55 }
  };

  let wheelSpinAngle = 0.0;
  let activeChoreography = null;
  let autopilotState = {
    active: false,
    elapsed: 0.0,
    stepIndex: -1,
    onEventCallback: null
  };

  const telemetry = {
    activeMovementId: 'idle',
    currentPhase: 'settled',
    phaseProgress: 1.0,
    movementProgress: 1.0,
    velocity: 0.0,
    angularVelocity: 0.0,
    bodyPitchRollYaw: [0.0, 0.0, 0.0],
    chassisHeaveMm: 0.0,
    secondaryEffectsActive: [],
    partStates: {},
    frameHistory: []
  };

  if (typeof window !== 'undefined') {
    window.__MOTION_TELEMETRY__ = telemetry;
  }

  const datumLinesGroup = new THREE.Group();
  datumLinesGroup.name = 'cad_datum_leaders_group';
  datumLinesGroup.renderOrder = 3;
  if (scene && typeof scene.add === 'function') {
    scene.add(datumLinesGroup);
  }

  const datumEntries = new Map();
  for (const meta of PART_REGISTRY) {
    const isPowertrainOrFloor = meta.layer === 'powertrain' || meta.id === 'part_07_venturi_floor';
    const colorHex = isPowertrainOrFloor ? 0xf59e0b : 0x38bdf8;

    const lineGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(6);
    lineGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const lineMat = new THREE.LineDashedMaterial({
      color: colorHex,
      dashSize: 0.055,
      gapSize: 0.035,
      transparent: true,
      opacity: 0.0,
      depthWrite: false
    });

    const line = new THREE.Line(lineGeo, lineMat);
    line.computeLineDistances();
    line.visible = false;
    line.renderOrder = 3;
    datumLinesGroup.add(line);

    const anchorDotGeo = new THREE.SphereGeometry(0.014, 10, 10);
    const anchorDotMat = new THREE.MeshBasicMaterial({
      color: colorHex,
      transparent: true,
      opacity: 0.0,
      depthWrite: false
    });
    const originDot = new THREE.Mesh(anchorDotGeo, anchorDotMat);
    const targetDot = new THREE.Mesh(anchorDotGeo, anchorDotMat.clone());
    originDot.visible = false;
    targetDot.visible = false;
    datumLinesGroup.add(originDot);
    datumLinesGroup.add(targetDot);

    datumEntries.set(meta.id, {
      line,
      lineGeo,
      lineMat,
      originDot,
      targetDot
    });
  }

  function resolvePartGroup(partId) {
    if (!partGroupsMap) {
      return carRootGroup ? carRootGroup.getObjectByName(partId) : null;
    }
    if (partGroupsMap instanceof Map) {
      return partGroupsMap.get(partId) || (carRootGroup ? carRootGroup.getObjectByName(partId) : null);
    }
    return partGroupsMap[partId] || (carRootGroup ? carRootGroup.getObjectByName(partId) : null);
  }

  function computePartBaseGoal(meta) {
    if (simState.isolatedPartId) {
      return simState.isolatedPartId === meta.id ? 0.0 : 1.05;
    }
    const layerWeight = simState.layerWeights[meta.layer] ?? 0.0;
    return Math.max(0.0, Math.min(1.2, Math.max(simState.masterExplode, layerWeight)));
  }

  function determinePhaseWindow(normTime, windows) {
    if (normTime <= windows.t0_anticipation[1]) {
      const [a, b] = windows.t0_anticipation;
      return { phase: 't0_anticipation', phaseProgress: (normTime - a) / Math.max(0.001, b - a) };
    }
    if (normTime <= windows.t1_primary_drive[1]) {
      const [a, b] = windows.t1_primary_drive;
      return { phase: 't1_primary_drive', phaseProgress: (normTime - a) / Math.max(0.001, b - a) };
    }
    if (normTime <= windows.t2_apex_secondary[1]) {
      const [a, b] = windows.t2_apex_secondary;
      return { phase: 't2_apex_secondary', phaseProgress: (normTime - a) / Math.max(0.001, b - a) };
    }
    const [a, b] = windows.t3_overshoot_settle;
    return {
      phase: 't3_overshoot_settle',
      phaseProgress: Math.min(1.0, (normTime - a) / Math.max(0.001, b - a))
    };
  }

  function triggerMovement(movementId, options = {}) {
    const spec = MOVEMENT_SPECS[movementId];
    if (!spec) return;

    const startPartPositions = {};
    for (const meta of PART_REGISTRY) {
      startPartPositions[meta.id] = partStates[meta.id].s;
    }

    activeChoreography = {
      id: spec.id,
      spec,
      elapsedSec: 0.0,
      durationSec: options.durationSec || spec.durationSec,
      startPartPositions
    };

    if (movementId === 'm1_full_cad_explode') {
      simState.isolatedPartId = null;
      simState.activePreset = 'full_explode';
      simState.masterExplode = 1.0;
      simState.layerWeights.aero = 1.0;
      simState.layerWeights.chassis = 1.0;
      simState.layerWeights.powertrain = 1.0;
      simState.layerWeights.chassis_dynamics = 1.0;
    } else if (movementId === 'm2_aero_strip_powertrain') {
      simState.isolatedPartId = null;
      simState.activePreset = 'powertrain_cutaway';
      simState.masterExplode = 0.0;
      simState.layerWeights.aero = 1.0;
      simState.layerWeights.chassis = 0.0;
      simState.layerWeights.powertrain = 0.0;
      simState.layerWeights.chassis_dynamics = 0.0;
    } else if (movementId === 'm3_drs_wind_tunnel') {
      simState.isolatedPartId = null;
      simState.activePreset = 'wind_tunnel';
      simState.windTunnelActive = true;
      simState.drsOpen = 1.0;
      simState.airspeedKmh = 315;
      simState.wheelSpinRpm = 2400;
    } else if (movementId === 'm4_pitstop_reassembly') {
      simState.isolatedPartId = null;
      simState.activePreset = 'assembled';
      simState.masterExplode = 0.0;
      simState.layerWeights.aero = 0.0;
      simState.layerWeights.chassis = 0.0;
      simState.layerWeights.powertrain = 0.0;
      simState.layerWeights.chassis_dynamics = 0.0;
      simState.drsOpen = 0.0;
      simState.windTunnelActive = false;
      simState.airspeedKmh = 0;
      simState.wheelSpinRpm = 0;
    }
  }

  function evaluateChoreographyTargets(dt) {
    if (!activeChoreography) {
      bodyOscillators.heaveY.target = simState.windTunnelActive ? -0.014 * (simState.airspeedKmh / 315) : 0.0;
      bodyOscillators.pitchRad.target = simState.windTunnelActive ? -0.006 * (1 - simState.drsOpen * 0.4) : 0.0;
      bodyOscillators.rollRad.target = 0.0;
      bodyOscillators.yawRad.target = 0.0;
      bodyOscillators.drsNorm.target = simState.drsOpen;

      for (const meta of PART_REGISTRY) {
        const ps = partStates[meta.id];
        ps.baseGoalS = computePartBaseGoal(meta);
        ps.targetS = ps.baseGoalS;
      }

      telemetry.activeMovementId = simState.windTunnelActive ? 'm3_drs_wind_tunnel' : 'manual_scrub';
      telemetry.currentPhase = 'settled';
      telemetry.phaseProgress = 1.0;
      telemetry.movementProgress = 1.0;
      telemetry.secondaryEffectsActive = simState.windTunnelActive
        ? MOVEMENT_SPECS.m3_drs_wind_tunnel.secondaryEffects
        : [];
      return;
    }

    activeChoreography.elapsedSec += dt;
    const normT = Math.min(1.0, activeChoreography.elapsedSec / activeChoreography.durationSec);
    const { id, spec, startPartPositions } = activeChoreography;
    const { phase, phaseProgress } = determinePhaseWindow(normT, spec.windows);

    telemetry.activeMovementId = id;
    telemetry.currentPhase = phase;
    telemetry.phaseProgress = Number(phaseProgress.toFixed(4));
    telemetry.movementProgress = Number(normT.toFixed(4));
    telemetry.secondaryEffectsActive = spec.secondaryEffects;

    if (id === 'm1_full_cad_explode') {
      if (phase === 't0_anticipation') {
        const p = smoothstep01(phaseProgress);
        bodyOscillators.heaveY.target = -0.012 * p;
        bodyOscillators.pitchRad.target = -0.012 * p;
        bodyOscillators.rollRad.target = 0.003 * Math.sin(p * Math.PI);
        simState.brakeTempC = THREE.MathUtils.lerp(45, 685, p);
        simState.exhaustTempC = THREE.MathUtils.lerp(320, 740, p);
        for (const meta of PART_REGISTRY) {
          const isOuter = OUTER_AERO_IDS.has(meta.id) || meta.id === 'part_12_wheels_tires';
          partStates[meta.id].targetS = isOuter ? 0.03 * p : 0.008 * p;
        }
      } else if (phase === 't1_primary_drive') {
        bodyOscillators.heaveY.target = 0.005 * Math.sin(phaseProgress * Math.PI);
        bodyOscillators.pitchRad.target = 0.006 * (1 - phaseProgress);
        bodyOscillators.rollRad.target = 0.0;
        for (const meta of PART_REGISTRY) {
          const [wStart, wEnd] = meta.staggerWindow;
          const localNorm = (normT - 0.18) / Math.max(0.01, 0.65 - 0.18);
          const windowSpan = Math.max(0.15, wEnd - wStart);
          const partProgress = smoothstep01((localNorm - wStart * 0.85) / windowSpan);
          partStates[meta.id].targetS = 0.03 + 0.97 * partProgress;
        }
      } else if (phase === 't2_apex_secondary') {
        const apexPulse = Math.sin(phaseProgress * Math.PI);
        bodyOscillators.heaveY.target = 0.003 * apexPulse;
        bodyOscillators.pitchRad.target = 0.004 * apexPulse;
        for (const meta of PART_REGISTRY) {
          partStates[meta.id].targetS = 1.0 + 0.06 * apexPulse;
        }
      } else {
        bodyOscillators.heaveY.target = 0.0;
        bodyOscillators.pitchRad.target = 0.0;
        bodyOscillators.rollRad.target = 0.0;
        simState.brakeTempC = THREE.MathUtils.lerp(685, 310, phaseProgress);
        for (const meta of PART_REGISTRY) {
          partStates[meta.id].targetS = 1.0;
        }
      }
    } else if (id === 'm2_aero_strip_powertrain') {
      if (phase === 't0_anticipation') {
        const p = smoothstep01(phaseProgress);
        bodyOscillators.heaveY.target = -0.009 * p;
        bodyOscillators.pitchRad.target = -0.014 * p;
        simState.exhaustTempC = THREE.MathUtils.lerp(320, 810, p);
        for (const meta of PART_REGISTRY) {
          const s0 = startPartPositions[meta.id] ?? 0;
          const isAero = OUTER_AERO_IDS.has(meta.id);
          partStates[meta.id].targetS = isAero ? Math.max(s0, 0.035 * p) : s0 * (1 - 0.3 * p);
        }
      } else if (phase === 't1_primary_drive') {
        const p = smoothstep01(phaseProgress);
        bodyOscillators.heaveY.target = 0.003 * (1 - p);
        bodyOscillators.pitchRad.target = -0.004 * (1 - p);
        for (const meta of PART_REGISTRY) {
          const s0 = startPartPositions[meta.id] ?? 0;
          const isAero = OUTER_AERO_IDS.has(meta.id);
          const goal = isAero ? 1.0 : 0.0;
          partStates[meta.id].targetS = THREE.MathUtils.lerp(s0, goal, p);
        }
      } else if (phase === 't2_apex_secondary') {
        const pulse = Math.sin(phaseProgress * Math.PI);
        simState.exhaustTempC = 820 + 60 * pulse;
        simState.wheelSpinRpm = 420 * pulse;
        for (const meta of PART_REGISTRY) {
          const isAero = OUTER_AERO_IDS.has(meta.id);
          partStates[meta.id].targetS = isAero ? 1.0 + 0.055 * pulse : 0.0;
        }
      } else {
        bodyOscillators.heaveY.target = 0.0;
        bodyOscillators.pitchRad.target = 0.0;
        simState.exhaustTempC = 790;
        simState.wheelSpinRpm = 0;
        for (const meta of PART_REGISTRY) {
          const isAero = OUTER_AERO_IDS.has(meta.id);
          partStates[meta.id].targetS = isAero ? 1.0 : 0.0;
        }
      }
    } else if (id === 'm3_drs_wind_tunnel') {
      simState.windTunnelActive = true;
      if (phase === 't0_anticipation') {
        const p = smoothstep01(phaseProgress);
        bodyOscillators.heaveY.target = -0.018 * p;
        bodyOscillators.pitchRad.target = -0.009 * p;
        bodyOscillators.drsNorm.target = 0.08 * p;
        simState.airspeedKmh = Math.round(THREE.MathUtils.lerp(80, 260, p));
        simState.wheelSpinRpm = Math.round(THREE.MathUtils.lerp(600, 1950, p));
      } else if (phase === 't1_primary_drive') {
        const p = smoothstep01(phaseProgress);
        bodyOscillators.heaveY.target = -0.018 + 0.004 * p;
        bodyOscillators.pitchRad.target = -0.009 + 0.005 * p;
        bodyOscillators.drsNorm.target = 1.0;
        simState.drsOpen = p;
        simState.airspeedKmh = Math.round(THREE.MathUtils.lerp(260, 315, p));
        simState.wheelSpinRpm = Math.round(THREE.MathUtils.lerp(1950, 2400, p));
        simState.brakeTempC = Math.round(THREE.MathUtils.lerp(240, 620, p));
      } else if (phase === 't2_apex_secondary') {
        const pulse = Math.sin(phaseProgress * Math.PI);
        bodyOscillators.heaveY.target = -0.015 - 0.003 * pulse;
        bodyOscillators.drsNorm.target = 1.05;
        simState.drsOpen = 1.0;
        simState.airspeedKmh = 315;
        simState.wheelSpinRpm = 2400;
        simState.brakeTempC = 650;
      } else {
        const settleP = smoothstep01(phaseProgress);
        bodyOscillators.heaveY.target = -0.014 - 0.009 * Math.sin(settleP * Math.PI);
        bodyOscillators.pitchRad.target = 0.007 * Math.sin(settleP * Math.PI) - 0.004;
        bodyOscillators.drsNorm.target = 1.0;
        simState.drsOpen = 1.0;
      }
      for (const meta of PART_REGISTRY) {
        const s0 = startPartPositions[meta.id] ?? 0;
        partStates[meta.id].targetS = THREE.MathUtils.lerp(s0, 0.0, smoothstep01(Math.min(1, normT * 1.8)));
      }
    } else if (id === 'm4_pitstop_reassembly') {
      if (phase === 't0_anticipation') {
        const p = smoothstep01(phaseProgress);
        bodyOscillators.heaveY.target = 0.010 * p;
        bodyOscillators.pitchRad.target = 0.008 * p;
        simState.wheelSpinRpm = 680 * Math.sin(p * Math.PI);
        for (const meta of PART_REGISTRY) {
          const s0 = startPartPositions[meta.id] ?? 1.0;
          partStates[meta.id].targetS = s0 > 0.05 ? s0 + 0.035 * p : 0.0;
        }
      } else if (phase === 't1_primary_drive') {
        bodyOscillators.heaveY.target = 0.006 * (1 - phaseProgress);
        bodyOscillators.pitchRad.target = 0.0;
        for (const meta of PART_REGISTRY) {
          const s0 = startPartPositions[meta.id] ?? 1.0;
          const isInternal = POWERTRAIN_INTERNAL_IDS.has(meta.id) && meta.id !== 'part_12_wheels_tires';
          const windowOffset = isInternal ? 0.0 : 0.25;
          const localP = smoothstep01((phaseProgress - windowOffset) / (1 - windowOffset));
          partStates[meta.id].targetS = s0 * (1 - localP);
        }
      } else if (phase === 't2_apex_secondary') {
        const impactWave = Math.sin(phaseProgress * Math.PI);
        bodyOscillators.heaveY.target = -0.014 * impactWave;
        bodyOscillators.pitchRad.target = -0.011 * impactWave;
        bodyOscillators.rollRad.target = 0.004 * Math.sin(phaseProgress * Math.PI * 2);
        for (const meta of PART_REGISTRY) {
          partStates[meta.id].targetS = 0.0;
        }
      } else {
        bodyOscillators.heaveY.target = 0.0;
        bodyOscillators.pitchRad.target = 0.0;
        bodyOscillators.rollRad.target = 0.0;
        simState.brakeTempC = THREE.MathUtils.lerp(simState.brakeTempC, 55, phaseProgress);
        simState.exhaustTempC = THREE.MathUtils.lerp(simState.exhaustTempC, 340, phaseProgress);
        for (const meta of PART_REGISTRY) {
          partStates[meta.id].targetS = 0.0;
        }
      }
    }

    if (normT >= 1.0) {
      activeChoreography = null;
    }
  }

  function stepSpringDamper(osc, dt) {
    const force = -osc.omegaN * osc.omegaN * (osc.x - osc.target) - 2 * osc.zeta * osc.omegaN * osc.v;
    osc.v += force * dt;
    osc.x += osc.v * dt;
    if (!Number.isFinite(osc.x) || !Number.isFinite(osc.v)) {
      osc.x = osc.target;
      osc.v = 0.0;
    }
  }

  function applyBilateralSubGroupKinematics(group, meta, sVal, arcVec) {
    if (!group || !group.children) return;
    for (const child of group.children) {
      if (!child.userData.__restRecorded) {
        child.userData.__restPos = child.position.clone();
        child.userData.__restRot = child.rotation.clone();
        child.userData.__restRecorded = true;
      }

      const nameLower = (child.name || '').toLowerCase();
      let sideSign = child.userData.sideSign;
      if (sideSign === undefined) {
        if (nameLower.includes('fl') || nameLower.includes('rl') || nameLower.includes('left') || child.userData.__restPos.z < -0.05) {
          sideSign = -1;
        } else if (nameLower.includes('fr') || nameLower.includes('rr') || nameLower.includes('right') || child.userData.__restPos.z > 0.05) {
          sideSign = 1;
        } else {
          sideSign = 0;
        }
      }

      let axleSign = child.userData.axleSign;
      if (axleSign === undefined) {
        if (nameLower.includes('fl') || nameLower.includes('fr') || nameLower.includes('front') || child.userData.__restPos.x > 0.2) {
          axleSign = 1;
        } else if (nameLower.includes('rl') || nameLower.includes('rr') || nameLower.includes('rear') || child.userData.__restPos.x < -0.2) {
          axleSign = -1;
        } else {
          axleSign = 0;
        }
      }

      const restPos = child.userData.__restPos;
      const restRot = child.userData.__restRot;

      child.position.set(
        restPos.x + arcVec.x * axleSign,
        restPos.y + arcVec.y,
        restPos.z + arcVec.z * sideSign
      );

      child.rotation.set(
        restRot.x + meta.explodeRotation[0] * sVal * sideSign,
        restRot.y + meta.explodeRotation[1] * sVal * sideSign * axleSign,
        restRot.z + meta.explodeRotation[2] * sVal * axleSign
      );

      if (meta.id === 'part_12_wheels_tires') {
        child.traverse((sub) => {
          if (sub !== child && (sub.userData?.isRotatingWheel || sub.name?.toLowerCase().includes('rim') || sub.name?.toLowerCase().includes('tire') || sub.name?.toLowerCase().includes('spin'))) {
            sub.rotation.z = -wheelSpinAngle;
          }
        });
      }
    }
  }

  function applyDrsFlapAndThermalEffects(elapsed) {
    const rearWingGroup = resolvePartGroup('part_11_rear_wing_drs');
    const drsRad = THREE.MathUtils.degToRad(24.0) * Math.max(0, Math.min(1.15, bodyOscillators.drsNorm.x));
    if (rearWingGroup) {
      rearWingGroup.traverse((obj) => {
        if (obj.userData?.isDrsFlap || obj.name === 'drsFlapPivot' || obj.name === 'drs_flap') {
          if (obj.userData.__baseRotZ === undefined) {
            obj.userData.__baseRotZ = obj.rotation.z;
          }
          obj.rotation.z = obj.userData.__baseRotZ - drsRad;
        }
      });
    }

    const powerUnitGroup = resolvePartGroup('part_08_power_unit');
    const exhaustNorm = Math.max(0, Math.min(1, (simState.exhaustTempC - 300) / 550));
    if (powerUnitGroup) {
      powerUnitGroup.traverse((obj) => {
        if (obj.isMesh && obj.material && (obj.userData?.isExhaustHeader || obj.name?.toLowerCase().includes('exhaust') || obj.name?.toLowerCase().includes('header'))) {
          if (obj.material.emissive) {
            obj.material.emissive.setHex(0xff5500);
            obj.material.emissiveIntensity = exhaustNorm * (0.65 + 0.15 * Math.sin(elapsed * 8.0));
          }
        }
      });
    }

    const suspGroup = resolvePartGroup('part_10_suspension_brakes');
    const brakeNorm = Math.max(0, Math.min(1, (simState.brakeTempC - 80) / 620));
    if (suspGroup) {
      suspGroup.traverse((obj) => {
        if (obj.isMesh && obj.material && (obj.userData?.isBrakeDisc || obj.name?.toLowerCase().includes('disc') || obj.name?.toLowerCase().includes('rotor'))) {
          if (obj.material.emissive) {
            obj.material.emissive.setHex(0xff4500);
            obj.material.emissiveIntensity = brakeNorm * 0.85;
          }
        }
      });
    }
  }

  function updateDatumLeaderLines(meta, ps) {
    const entry = datumEntries.get(meta.id);
    if (!entry) return;

    const showAlpha = smoothstep01((ps.s - 0.12) / 0.22);
    const isSelected = simState.selectedPartId === meta.id;
    const targetOpacity = showAlpha * (isSelected ? 0.95 : 0.58);

    if (targetOpacity <= 0.01) {
      entry.line.visible = false;
      entry.originDot.visible = false;
      entry.targetDot.visible = false;
      return;
    }

    entry.line.visible = true;
    entry.originDot.visible = true;
    entry.targetDot.visible = true;

    const posAttr = entry.lineGeo.attributes.position;
    const p0 = ps.assembledPivot;
    const p1 = ps.currentWorldPivot;

    posAttr.setXYZ(0, p0.x, p0.y, p0.z);
    posAttr.setXYZ(1, p1.x, p1.y, p1.z);
    posAttr.needsUpdate = true;
    entry.line.computeLineDistances();

    entry.originDot.position.copy(p0);
    entry.targetDot.position.copy(p1);

    entry.lineMat.opacity = targetOpacity;
    entry.originDot.material.opacity = targetOpacity;
    entry.targetDot.material.opacity = targetOpacity;
  }

  function stepAutopilot(dt) {
    if (!autopilotState.active) return;
    autopilotState.elapsed += dt;
    const t = autopilotState.elapsed;

    if (t >= 0.0 && autopilotState.stepIndex < 0) {
      autopilotState.stepIndex = 0;
      triggerMovement('m1_full_cad_explode', { durationSec: 2.5 });
      autopilotState.onEventCallback?.('m1_full_cad_explode');
    } else if (t >= 2.6 && autopilotState.stepIndex < 1) {
      autopilotState.stepIndex = 1;
      triggerMovement('m2_aero_strip_powertrain', { durationSec: 2.2 });
      autopilotState.onEventCallback?.('m2_aero_strip_powertrain');
    } else if (t >= 4.9 && autopilotState.stepIndex < 2) {
      autopilotState.stepIndex = 2;
      triggerMovement('m3_drs_wind_tunnel', { durationSec: 2.2 });
      autopilotState.onEventCallback?.('m3_drs_wind_tunnel');
    } else if (t >= 7.2 && autopilotState.stepIndex < 3) {
      autopilotState.stepIndex = 3;
      triggerMovement('m4_pitstop_reassembly', { durationSec: 2.2 });
      autopilotState.onEventCallback?.('m4_pitstop_reassembly');
    } else if (t >= 9.8 && autopilotState.stepIndex === 3) {
      autopilotState.active = false;
      autopilotState.onEventCallback?.('complete');
    }
  }

  const tempArcVec = new THREE.Vector3();

  function update(rawDt, elapsed = 0.0) {
    const clampedDt = Math.max(0.0005, Math.min(0.033, Number.isFinite(rawDt) ? rawDt : 0.016));
    stepAutopilot(clampedDt);
    evaluateChoreographyTargets(clampedDt);

    const subDt = clampedDt * 0.5;
    for (let step = 0; step < 2; step++) {
      stepSpringDamper(bodyOscillators.heaveY, subDt);
      stepSpringDamper(bodyOscillators.pitchRad, subDt);
      stepSpringDamper(bodyOscillators.rollRad, subDt);
      stepSpringDamper(bodyOscillators.yawRad, subDt);
      stepSpringDamper(bodyOscillators.drsNorm, subDt);

      for (const meta of PART_REGISTRY) {
        const ps = partStates[meta.id];
        const accel =
          -ps.omegaN * ps.omegaN * (ps.s - ps.targetS) -
          2.0 * ps.zeta * ps.omegaN * ps.v;
        ps.v += accel * subDt;
        ps.s += ps.v * subDt;

        if (!Number.isFinite(ps.s) || !Number.isFinite(ps.v)) {
          ps.s = ps.targetS;
          ps.v = 0.0;
        }
      }
    }

    if (simState.windTunnelActive && simState.airspeedKmh > 1) {
      const linearSpeedMs = simState.airspeedKmh / 3.6;
      const wheelOmega = linearSpeedMs / 0.36;
      wheelSpinAngle = (wheelSpinAngle + wheelOmega * clampedDt) % (Math.PI * 200);
      simState.wheelSpinRpm = Math.round((wheelOmega * 60) / (Math.PI * 2));
    } else if (simState.wheelSpinRpm > 0) {
      const wheelOmega = (simState.wheelSpinRpm * Math.PI * 2) / 60;
      wheelSpinAngle = (wheelSpinAngle + wheelOmega * clampedDt) % (Math.PI * 200);
    }

    if (carRootGroup) {
      if (!carRootGroup.userData.__restRecorded) {
        carRootGroup.userData.__restPos = carRootGroup.position.clone();
        carRootGroup.userData.__restRot = carRootGroup.rotation.clone();
        carRootGroup.userData.__restRecorded = true;
      }
      carRootGroup.position.y = carRootGroup.userData.__restPos.y + bodyOscillators.heaveY.x;
      carRootGroup.rotation.z = carRootGroup.userData.__restRot.z + bodyOscillators.pitchRad.x;
      carRootGroup.rotation.x = carRootGroup.userData.__restRot.x + bodyOscillators.rollRad.x;
      carRootGroup.rotation.y = carRootGroup.userData.__restRot.y + bodyOscillators.yawRad.x;
    }

    let sumSpeed = 0.0;
    let sumAngSpeed = Math.abs(bodyOscillators.pitchRad.v) + Math.abs(bodyOscillators.rollRad.v);

    for (const meta of PART_REGISTRY) {
      const ps = partStates[meta.id];
      const group = resolvePartGroup(meta.id);
      evaluateQuadraticBezierArc(ps.s, meta.explodeArcOffset, meta.explodeVector, tempArcVec);
      ps.displacement.copy(tempArcVec);

      const rx = meta.explodeRotation[0] * ps.s;
      const ry = meta.explodeRotation[1] * ps.s;
      const rz = meta.explodeRotation[2] * ps.s;
      ps.rotationOffset.set(rx, ry, rz);

      if (meta.id === 'part_10_suspension_brakes' || meta.id === 'part_12_wheels_tires') {
        if (group) {
          group.position.set(0, 0, 0);
          group.rotation.set(0, 0, 0);
          applyBilateralSubGroupKinematics(group, meta, ps.s, tempArcVec);
        }
        ps.currentWorldPivot.set(
          ps.assembledPivot.x + tempArcVec.x,
          ps.assembledPivot.y + tempArcVec.y + bodyOscillators.heaveY.x,
          ps.assembledPivot.z + tempArcVec.z
        );
      } else {
        if (group) {
          if (!group.userData.__restRecorded) {
            group.userData.__restPos = group.position.clone();
            group.userData.__restRot = group.rotation.clone();
            group.userData.__restRecorded = true;
          }
          group.position.set(
            group.userData.__restPos.x + tempArcVec.x,
            group.userData.__restPos.y + tempArcVec.y,
            group.userData.__restPos.z + tempArcVec.z
          );
          group.rotation.set(
            group.userData.__restRot.x + rx,
            group.userData.__restRot.y + ry,
            group.userData.__restRot.z + rz
          );
        }
        ps.currentWorldPivot.set(
          ps.assembledPivot.x + tempArcVec.x,
          ps.assembledPivot.y + tempArcVec.y + bodyOscillators.heaveY.x,
          ps.assembledPivot.z + tempArcVec.z
        );
      }

      updateDatumLeaderLines(meta, ps);

      sumSpeed += Math.abs(ps.v);
      sumAngSpeed += Math.abs(ps.v) * (Math.abs(meta.explodeRotation[0]) + Math.abs(meta.explodeRotation[1]) + Math.abs(meta.explodeRotation[2]));

      telemetry.partStates[meta.id] = {
        s: Number(ps.s.toFixed(4)),
        v: Number(ps.v.toFixed(4)),
        targetS: Number(ps.targetS.toFixed(4)),
        worldPivot: [
          Number(ps.currentWorldPivot.x.toFixed(3)),
          Number(ps.currentWorldPivot.y.toFixed(3)),
          Number(ps.currentWorldPivot.z.toFixed(3))
        ]
      };
    }

    applyDrsFlapAndThermalEffects(elapsed);

    const floorPartS = Math.max(0, partStates.part_07_venturi_floor?.s ?? 0);
    const floorDropFactor = Math.max(floorPartS, simState.masterExplode);
    const targetFloorY = -0.002 - 0.68 * floorDropFactor;
    const pitFloorMesh =
      studioFloorRefs?.pitFloorMesh ||
      studioFloorRefs?.floorMesh ||
      (scene ? scene.getObjectByName('pitFloorMesh') : null);
    if (pitFloorMesh) {
      pitFloorMesh.position.y = targetFloorY;
    }

    telemetry.velocity = Number(sumSpeed.toFixed(4));
    telemetry.angularVelocity = Number(sumAngSpeed.toFixed(4));
    telemetry.bodyPitchRollYaw = [
      Number(bodyOscillators.pitchRad.x.toFixed(5)),
      Number(bodyOscillators.rollRad.x.toFixed(5)),
      Number(bodyOscillators.yawRad.x.toFixed(5))
    ];
    telemetry.chassisHeaveMm = Number((bodyOscillators.heaveY.x * 1000).toFixed(2));

    telemetry.frameHistory.push({
      t: Number(elapsed.toFixed(3)),
      movementId: telemetry.activeMovementId,
      phase: telemetry.currentPhase,
      phaseProgress: telemetry.phaseProgress,
      masterExplode: Number(simState.masterExplode.toFixed(3)),
      frontWingS: telemetry.partStates.part_01_front_wing?.s ?? 0,
      powerUnitS: telemetry.partStates.part_08_power_unit?.s ?? 0,
      floorS: telemetry.partStates.part_07_venturi_floor?.s ?? 0,
      drsOpen: Number(bodyOscillators.drsNorm.x.toFixed(3)),
      heaveMm: telemetry.chassisHeaveMm,
      pitchDeg: Number(THREE.MathUtils.radToDeg(bodyOscillators.pitchRad.x).toFixed(3)),
      velocity: telemetry.velocity
    });

    if (telemetry.frameHistory.length > 360) {
      telemetry.frameHistory.shift();
    }
  }

  function setMasterExplode(val, animateChoreography = false) {
    const clamped = Math.max(0.0, Math.min(1.0, Number(val) || 0.0));
    simState.masterExplode = clamped;
    simState.isolatedPartId = null;

    if (animateChoreography && clamped > 0.85) {
      triggerMovement('m1_full_cad_explode');
      return;
    }
    if (animateChoreography && clamped < 0.05) {
      triggerMovement('m4_pitstop_reassembly');
      return;
    }

    activeChoreography = null;
    simState.activePreset = clamped > 0.5 ? 'full_explode' : 'assembled';
    simState.layerWeights.aero = clamped;
    simState.layerWeights.chassis = clamped;
    simState.layerWeights.powertrain = clamped;
    simState.layerWeights.chassis_dynamics = clamped;
  }

  function setLayerWeight(layer, val) {
    if (!(layer in simState.layerWeights)) return;
    activeChoreography = null;
    simState.isolatedPartId = null;
    simState.layerWeights[layer] = Math.max(0.0, Math.min(1.0, Number(val) || 0.0));
    simState.activePreset = 'custom';
  }

  function applyPreset(presetName) {
    const key = String(presetName || '').toLowerCase();
    if (key === 'full_explode' || key === 'exploded' || key === 'm1_full_cad_explode') {
      triggerMovement('m1_full_cad_explode');
    } else if (key === 'powertrain' || key === 'powertrain_cutaway' || key === 'm2_aero_strip_powertrain') {
      triggerMovement('m2_aero_strip_powertrain');
    } else if (key === 'wind_tunnel' || key === 'aero' || key === 'aero_cfd' || key === 'm3_drs_wind_tunnel') {
      triggerMovement('m3_drs_wind_tunnel');
    } else if (key === 'assembled' || key === 'pitstop' || key === 'reassembly' || key === 'm4_pitstop_reassembly') {
      triggerMovement('m4_pitstop_reassembly');
    } else if (key === 'chassis' || key === 'chassis_dynamics') {
      activeChoreography = null;
      simState.isolatedPartId = null;
      simState.activePreset = 'chassis_dynamics';
      simState.masterExplode = 0.0;
      simState.layerWeights.aero = 0.85;
      simState.layerWeights.chassis = 0.35;
      simState.layerWeights.powertrain = 0.25;
      simState.layerWeights.chassis_dynamics = 1.0;
    }
  }

  function selectPart(partId) {
    simState.selectedPartId = partId || null;
  }

  function isolatePart(partId) {
    activeChoreography = null;
    simState.isolatedPartId = simState.isolatedPartId === partId ? null : partId;
    if (simState.isolatedPartId) {
      simState.selectedPartId = simState.isolatedPartId;
    }
  }

  function setDrsOpen(val) {
    const next = typeof val === 'boolean' ? (val ? 1.0 : 0.0) : Math.max(0.0, Math.min(1.0, Number(val) || 0.0));
    simState.drsOpen = next;
    bodyOscillators.drsNorm.target = next;
  }

  function setWindTunnel(active, airspeedKmh = 315) {
    simState.windTunnelActive = Boolean(active);
    simState.airspeedKmh = simState.windTunnelActive ? airspeedKmh : 0;
    simState.wheelSpinRpm = simState.windTunnelActive ? Math.round((airspeedKmh / 315) * 2400) : 0;
  }

  function startAutopilot(onEventCallback = null) {
    autopilotState = {
      active: true,
      elapsed: 0.0,
      stepIndex: -1,
      onEventCallback
    };
    return telemetry;
  }

  function stopAutopilot() {
    autopilotState.active = false;
  }

  if (typeof window !== 'undefined') {
    window.__START_AUTOPILOT__ = startAutopilot;
    window.__STOP_AUTOPILOT__ = stopAutopilot;
    window.__TRIGGER_MOVEMENT__ = triggerMovement;
  }

  function getPartWorldAnchor(partId) {
    const ps = partStates[partId];
    return ps ? ps.currentWorldPivot.clone() : new THREE.Vector3();
  }

  return {
    state: simState,
    simState,
    telemetry,
    partStates,
    datumLinesGroup,
    update,
    setMasterExplode,
    setLayerWeight,
    applyPreset,
    setPreset: applyPreset,
    triggerMovement,
    selectPart,
    setSelectedPart: selectPart,
    isolatePart,
    setIsolatedPart: isolatePart,
    setDrsOpen,
    toggleDrs: () => setDrsOpen(simState.drsOpen > 0.5 ? 0.0 : 1.0),
    setWindTunnel,
    toggleWindTunnel: () => setWindTunnel(!simState.windTunnelActive, 315),
    startAutopilot,
    stopAutopilot,
    getPartWorldAnchor,
    getPartState: (partId) => partStates[partId] || null
  };
}
