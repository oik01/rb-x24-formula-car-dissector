import * as THREE from 'three';
import { PART_REGISTRY } from '../car/sharedContract.js';

const SHORT_CALLOUT_NAMES = Object.freeze({
  part_01_front_wing: 'FRONT WING',
  part_02_monocoque: 'MONOCOQUE',
  part_03_halo: 'TI HALO',
  part_04_sidepod_left: 'L SIDEPOD',
  part_05_sidepod_right: 'R SIDEPOD',
  part_06_engine_cover: 'ENGINE COVER',
  part_07_venturi_floor: 'VENTURI FLOOR',
  part_08_power_unit: 'V6 HYBRID PU',
  part_09_gearbox: '8-SPD GEARBOX',
  part_10_suspension_brakes: 'SUSP & BRAKES',
  part_11_rear_wing_drs: 'DRS REAR WING',
  part_12_wheels_tires: '18" PIRELLI'
});

export function createHudController({
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
}) {
  const simState = (window.__SIM_STATE__ = window.__SIM_STATE__ || {
    masterExplode: 0,
    layerWeights: {
      aero: 0,
      chassis: 0,
      powertrain: 0,
      chassis_dynamics: 0
    },
    activePreset: 'm4_pitstop_reassemble',
    selectedPartId: 'part_08_power_unit',
    isolatedPartId: null,
    HoveredPartId: null,
    drsOpen: false,
    windTunnelActive: false,
    calloutMode: 'auto',
    wheelSpinRpm: 320,
    brakeTempC: 340,
    cameraView: 'front_34'
  });

  // Resolve a sub-assembly Object3D from partGroupsMap (Map or Object) or scene traversal
  function getPartGroup(partId) {
    if (!partGroupsMap) {
      return carRootGroup?.getObjectByName(partId) || scene?.getObjectByName(partId) || null;
    }
    if (typeof partGroupsMap.get === 'function') {
      return partGroupsMap.get(partId) || null;
    }
    return partGroupsMap[partId] || null;
  }

  // Cache original material states for clean restoration after Isolate (X-Ray) mode
  const originalMaterialState = new WeakMap();
  function cacheMaterialsForGroup(group) {
    if (!group) return;
    group.traverse((obj) => {
      if (!obj.isMesh || !obj.material) return;
      const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
      mats.forEach((mat) => {
        if (!originalMaterialState.has(mat)) {
          originalMaterialState.set(mat, {
            transparent: mat.transparent,
            opacity: mat.opacity,
            depthWrite: mat.depthWrite,
            wireframe: Boolean(mat.wireframe),
            emissiveHex: mat.emissive ? mat.emissive.getHex() : 0x000000,
            emissiveIntensity: mat.emissiveIntensity ?? 0
          });
        }
      });
    });
  }

  PART_REGISTRY.forEach((part) => {
    cacheMaterialsForGroup(getPartGroup(part.id));
  });

  // DOM Elements
  const elPhasePill = document.getElementById('hud-phase-pill');
  const elTelExplode = document.getElementById('tel-explode');
  const elTelDownforce = document.getElementById('tel-downforce');
  const elTelRpm = document.getElementById('tel-rpm');
  const elTelExhaust = document.getElementById('tel-exhaust');
  const elTelDrs = document.getElementById('tel-drs');
  const elTelParts = document.getElementById('tel-parts');

  const sliderMaster = document.getElementById('slider-master-explode');
  const valMaster = document.getElementById('val-master-explode');
  const layerSliders = Array.from(document.querySelectorAll('.layer-slider'));
  const presetButtons = Array.from(document.querySelectorAll('.preset-btn'));
  const camButtons = Array.from(document.querySelectorAll('.cam-btn'));
  const segCalloutButtons = Array.from(document.querySelectorAll('.seg-btn[data-callout-mode]'));

  const toggleWindTunnel = document.getElementById('toggle-wind-tunnel');
  const toggleDrsFlap = document.getElementById('toggle-drs-flap');
  const btnAutopilot = document.getElementById('btn-autopilot');
  const btnAudio = document.getElementById('btn-audio');

  const manifestList = document.getElementById('part-manifest-list');
  const manifestSelectionTag = document.getElementById('manifest-selection-tag');
  const specCode = document.getElementById('spec-code');
  const specLayer = document.getElementById('spec-layer');
  const specName = document.getElementById('spec-name');
  const specDesc = document.getElementById('spec-desc');
  const specMass = document.getElementById('spec-mass');
  const specFia = document.getElementById('spec-fia');
  const specMaterial = document.getElementById('spec-material');
  const specTelemetry = document.getElementById('spec-telemetry');
  const specVector = document.getElementById('spec-vector');
  const btnIsolate = document.getElementById('btn-isolate-part');
  const btnResetView = document.getElementById('btn-reset-view');

  const leftDock = document.getElementById('left-dock');
  const rightDock = document.getElementById('right-dock');
  const btnToggleLeftDock = document.getElementById('btn-toggle-left-dock');
  const btnToggleRightDock = document.getElementById('btn-toggle-right-dock');

  const calloutSvg = document.getElementById('callout-svg');
  const calloutPinsContainer = document.getElementById('callout-pins');

  // Build 12-Part Manifest Chips & 2D Screen-Space Callout DOM Nodes
  const manifestChipsMap = new Map();
  const calloutDomMap = new Map();

  if (manifestList) {
    manifestList.innerHTML = '';
  }
  if (calloutSvg) {
    calloutSvg.innerHTML = '';
  }
  if (calloutPinsContainer) {
    calloutPinsContainer.innerHTML = '';
  }

  PART_REGISTRY.forEach((part) => {
    if (manifestList) {
      const chip = document.createElement('button');
      chip.type = 'button';
      chip.className = 'manifest-chip';
      chip.dataset.partId = part.id;
      chip.setAttribute('role', 'option');
      chip.innerHTML = `
        <span class="chip-left">
          <span class="chip-code">${part.code}</span>
          <span class="chip-name">${part.name}</span>
        </span>
        <span class="chip-mass">${part.massKg.toFixed(1)} kg</span>
      `;
      chip.addEventListener('click', () => {
        audio?.playClick?.();
        selectPart(part.id, { focusCamera: true });
      });
      manifestList.appendChild(chip);
      manifestChipsMap.set(part.id, chip);
    }

    if (calloutSvg && calloutPinsContainer) {
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('class', 'callout-leader-line');
      calloutSvg.appendChild(line);

      const dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('class', 'callout-anchor-dot');
      dot.setAttribute('r', '2.5');
      calloutSvg.appendChild(dot);

      const badge = document.createElement('button');
      badge.type = 'button';
      badge.className = 'callout-badge';
      badge.dataset.partId = part.id;
      const shortLabel = SHORT_CALLOUT_NAMES[part.id] || part.name.toUpperCase();
      badge.innerHTML = `<span class="badge-code">${part.code}</span><span class="badge-name">${shortLabel}</span>`;
      badge.addEventListener('click', (ev) => {
        ev.stopPropagation();
        audio?.playClick?.();
        selectPart(part.id, { focusCamera: true });
      });

      calloutPinsContainer.appendChild(badge);
      calloutDomMap.set(part.id, { badge, line, dot });
    }
  });

  // Apply Isolate (X-Ray) & Selection Highlight Materials
  function applyIsolationAndHighlightState() {
    const isolatedId = simState.isolatedPartId;
    const selectedId = simState.selectedPartId;
    const hoveredId = simState.hoveredPartId;

    PART_REGISTRY.forEach((part) => {
      const group = getPartGroup(part.id);
      if (!group) return;
      cacheMaterialsForGroup(group);

      const isIsolatedTarget = isolatedId === part.id;
      const isGhosted = Boolean(isolatedId && !isIsolatedTarget);
      const isHighlighted = part.id === hoveredId || part.id === selectedId;

      group.traverse((obj) => {
        if (!obj.isMesh || !obj.material) return;
        obj.renderOrder = isGhosted ? 3 : 0;

        const mats = Array.isArray(obj.material) ? obj.material : [obj.material];
        mats.forEach((mat) => {
          const orig = originalMaterialState.get(mat);
          if (!orig) return;

          if (isGhosted) {
            mat.transparent = true;
            mat.opacity = 0.12;
            mat.depthWrite = false;
          } else {
            mat.transparent = orig.transparent;
            mat.opacity = orig.opacity;
            mat.depthWrite = orig.depthWrite;
          }

          if (mat.emissive) {
            if (isHighlighted && !isGhosted) {
              mat.emissive.setHex(part.id === hoveredId ? 0xffb800 : 0x664400);
              mat.emissiveIntensity = part.id === hoveredId ? 0.35 : 0.18;
            } else {
              mat.emissive.setHex(orig.emissiveHex);
              mat.emissiveIntensity = orig.emissiveIntensity;
            }
          }
          mat.needsUpdate = true;
        });
      });
    });

    // Update Manifest Chips & Isolate Button UI
    manifestChipsMap.forEach((chip, id) => {
      chip.classList.toggle('selected', id === selectedId);
      chip.classList.toggle('isolated', id === isolatedId);
    });

    if (btnIsolate) {
      const isIso = Boolean(isolatedId && isolatedId === selectedId);
      btnIsolate.classList.toggle('active', isIso);
      btnIsolate.setAttribute('aria-pressed', String(isIso));
      btnIsolate.textContent = isIso ? 'Exit X-ray isolate' : 'Isolate part (X-ray)';
    }

    if (manifestSelectionTag) {
      if (isolatedId) {
        const isoPart = PART_REGISTRY.find((p) => p.id === isolatedId);
        manifestSelectionTag.textContent = `SOLO: ${isoPart ? isoPart.code : '1/12'}`;
      } else {
        const selPart = PART_REGISTRY.find((p) => p.id === selectedId);
        manifestSelectionTag.textContent = selPart ? `${selPart.code} SELECTED` : 'ALL ACTIVE';
      }
    }

    if (elTelParts) {
      elTelParts.textContent = isolatedId ? '1/12 (SOLO)' : '12/12';
    }
  }

  // Update Right Dock Engineering Spec Card
  function updateInspectorCard(partId) {
    const part = PART_REGISTRY.find((p) => p.id === partId) || PART_REGISTRY[7];
    if (!part) return;

    if (specCode) specCode.textContent = part.code;
    if (specLayer) specLayer.textContent = part.layer.replace('_', ' ').toUpperCase();
    if (specName) specName.textContent = part.name;
    if (specDesc) specDesc.textContent = part.description;
    if (specMass) specMass.textContent = `${part.massKg.toFixed(1)} kg`;
    if (specFia) specFia.textContent = part.fiaArticle;
    if (specMaterial) specMaterial.textContent = part.materialSpec;
    if (specTelemetry) {
      const { loadN, tempC, aeroCoeff } = part.telemetryMetrics;
      specTelemetry.textContent = `${loadN.toLocaleString()} N // ${tempC} °C // ${aeroCoeff}`;
    }
    if (specVector) {
      const [dx, dy, dz] = part.explodeVector;
      const fmt = (n) => `${n >= 0 ? '+' : ''}${n.toFixed(2)}`;
      specVector.textContent = `(${fmt(dx)}, ${fmt(dy)}, ${fmt(dz)} m)`;
    }
  }

  // Smoothly focus camera onto a selected part's world bounding box
  const focusBox = new THREE.Box3();
  const focusCenter = new THREE.Vector3();
  const focusSphere = new THREE.Sphere();
  let activeCameraTween = null;

  function focusCameraOnPart(partId) {
    if (!camera || !controls) return;
    const group = getPartGroup(partId);
    const partMeta = PART_REGISTRY.find((p) => p.id === partId);
    if (!group && !partMeta) return;

    if (group) {
      focusBox.setFromObject(group);
    }
    if (group && !focusBox.isEmpty()) {
      focusBox.getCenter(focusCenter);
      focusBox.getBoundingSphere(focusSphere);
    } else if (partMeta) {
      focusCenter.set(...partMeta.assembledPivot);
      focusSphere.radius = 0.65;
    }

    const radius = Math.max(0.55, Math.min(2.2, focusSphere.radius * 2.1));
    const currentDir = camera.position.clone().sub(controls.target).normalize();
    if (currentDir.lengthSq() < 0.001) {
      currentDir.set(0.65, 0.38, 0.65).normalize();
    }
    const endTarget = focusCenter.clone();
    const endPos = endTarget.clone().addScaledVector(currentDir, radius * 2.15);
    endPos.y = Math.max(0.28, endPos.y);

    activeCameraTween = {
      startPos: camera.position.clone(),
      endPos,
      startTarget: controls.target.clone(),
      endTarget,
      elapsed: 0,
      duration: 0.48
    };
  }

  function selectPart(partId, { focusCamera = false } = {}) {
    if (!partId) return;
    simState.selectedPartId = partId;
    updateInspectorCard(partId);
    applyIsolationAndHighlightState();
    if (focusCamera) {
      focusCameraOnPart(partId);
    }
  }

  function toggleIsolatePart(partId = simState.selectedPartId) {
    if (!partId) return;
    if (simState.isolatedPartId === partId) {
      simState.isolatedPartId = null;
    } else {
      simState.isolatedPartId = partId;
      simState.selectedPartId = partId;
    }
    updateInspectorCard(simState.selectedPartId);
    applyIsolationAndHighlightState();
  }

  // Sync Sliders UI from current simState
  function syncSlidersFromState() {
    const masterPct = Math.round((simState.masterExplode || 0) * 100);
    if (sliderMaster) sliderMaster.value = String(masterPct);
    if (valMaster) valMaster.textContent = `${masterPct}%`;

    layerSliders.forEach((slider) => {
      const layer = slider.dataset.layer;
      const weight = simState.layerWeights?.[layer] ?? simState.masterExplode ?? 0;
      const pct = Math.round(weight * 100);
      slider.value = String(pct);
      const labelEl = document.getElementById(`val-layer-${layer}`);
      if (labelEl) labelEl.textContent = `${pct}%`;
    });
  }

  // Master Disassembly Slider Listener
  if (sliderMaster) {
    sliderMaster.addEventListener('input', (e) => {
      const norm = Math.max(0, Math.min(1, Number(e.target.value) / 100));
      simState.masterExplode = norm;
      simState.layerWeights = {
        aero: norm,
        chassis: norm,
        powertrain: norm,
        chassis_dynamics: norm
      };
      kinematics?.setMasterExplode?.(norm);
      kinematics?.setTargetExplode?.(norm);
      syncSlidersFromState();
    });
  }

  // 4 Layer-Selective Disassembly Sliders
  layerSliders.forEach((slider) => {
    slider.addEventListener('input', (e) => {
      const layer = slider.dataset.layer;
      const norm = Math.max(0, Math.min(1, Number(e.target.value) / 100));
      if (!simState.layerWeights) simState.layerWeights = {};
      simState.layerWeights[layer] = norm;

      const labelEl = document.getElementById(`val-layer-${layer}`);
      if (labelEl) labelEl.textContent = `${Math.round(norm * 100)}%`;

      kinematics?.setLayerWeight?.(layer, norm);
      kinematics?.setLayerExplode?.(layer, norm);

      const weights = Object.values(simState.layerWeights);
      if (weights.length > 0) {
        const avg = weights.reduce((a, b) => a + b, 0) / weights.length;
        simState.masterExplode = avg;
        if (sliderMaster) sliderMaster.value = String(Math.round(avg * 100));
        if (valMaster) valMaster.textContent = `${Math.round(avg * 100)}%`;
      }
    });
  });

  // 4 Choreographed Mode Preset Triggers
  function activatePreset(presetId) {
    simState.activePreset = presetId;
    presetButtons.forEach((btn) => {
      btn.classList.toggle('active', btn.dataset.preset === presetId);
    });

    if (presetId === 'm1_full_cad_explode' || presetId === 'm1') {
      simState.masterExplode = 1.0;
      simState.layerWeights = { aero: 1.0, chassis: 1.0, powertrain: 1.0, chassis_dynamics: 1.0 };
      audio?.playPneumaticWrench?.();
    } else if (presetId === 'm2_aero_powertrain_strip' || presetId === 'm2') {
      simState.masterExplode = 0.65;
      simState.layerWeights = { aero: 1.0, chassis: 0.25, powertrain: 0.85, chassis_dynamics: 0.35 };
      audio?.playLatchImpulse?.();
    } else if (presetId === 'm3_drs_wind_tunnel' || presetId === 'm3') {
      simState.masterExplode = 0.0;
      simState.layerWeights = { aero: 0.0, chassis: 0.0, powertrain: 0.0, chassis_dynamics: 0.0 };
      simState.windTunnelActive = true;
      simState.drsOpen = true;
      if (toggleWindTunnel) toggleWindTunnel.checked = true;
      if (toggleDrsFlap) toggleDrsFlap.checked = true;
      windTunnel?.setActive?.(true);
      windTunnel?.setEnabled?.(true);
      windTunnel?.setDrsOpen?.(true);
      kinematics?.setDrsOpen?.(true);
    } else {
      // m4_pitstop_reassemble
      simState.masterExplode = 0.0;
      simState.layerWeights = { aero: 0.0, chassis: 0.0, powertrain: 0.0, chassis_dynamics: 0.0 };
      audio?.playPneumaticWrench?.();
    }

    kinematics?.triggerPreset?.(presetId);
    kinematics?.triggerMovement?.(presetId);
    syncSlidersFromState();
  }

  presetButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      audio?.playClick?.();
      activatePreset(btn.dataset.preset);
    });
  });

  // Camera Switcher Buttons
  camButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const viewName = btn.dataset.cam;
      camButtons.forEach((b) => b.classList.toggle('active', b === btn));
      activeCameraTween = null;
      simState.cameraView = viewName;
      if (typeof setCameraView === 'function') {
        setCameraView(viewName);
      } else if (typeof window.__SET_CAMERA_VIEW__ === 'function') {
        window.__SET_CAMERA_VIEW__(viewName);
      }
    });
  });

  // Wind-Tunnel & DRS Toggles
  if (toggleWindTunnel) {
    toggleWindTunnel.addEventListener('change', (e) => {
      const active = Boolean(e.target.checked);
      simState.windTunnelActive = active;
      windTunnel?.setActive?.(active);
      windTunnel?.setEnabled?.(active);
      windTunnel?.setVisible?.(active);
    });
  }

  if (toggleDrsFlap) {
    toggleDrsFlap.addEventListener('change', (e) => {
      const open = Boolean(e.target.checked);
      simState.drsOpen = open;
      windTunnel?.setDrsOpen?.(open);
      kinematics?.setDrsOpen?.(open);
      audio?.playLatchImpulse?.();
    });
  }

  // Callout Mode Segmented Control
  segCalloutButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      simState.calloutMode = btn.dataset.calloutMode || 'auto';
      segCalloutButtons.forEach((b) => b.classList.toggle('active', b === btn));
    });
  });

  // Autopilot & Audio Buttons
  if (btnAutopilot) {
    btnAutopilot.addEventListener('click', () => {
      btnAutopilot.classList.toggle('active');
      if (typeof window.__START_AUTOPILOT__ === 'function') {
        window.__START_AUTOPILOT__();
      } else {
        kinematics?.startAutopilot?.();
      }
    });
  }

  let isAudioActive = false;
  if (btnAudio) {
    btnAudio.addEventListener('click', () => {
      if (audio?.toggleMute) {
        const muted = audio.toggleMute();
        isAudioActive = !muted;
      } else {
        isAudioActive = !isAudioActive;
        audio?.setMuted?.(!isAudioActive);
        if (isAudioActive) audio?.resume?.();
      }
      btnAudio.classList.toggle('active', isAudioActive);
      btnAudio.setAttribute('aria-pressed', String(isAudioActive));
      btnAudio.textContent = isAudioActive ? 'Audio: Live' : 'Audio: Mute';
    });
  }

  // Inspector Card Action Buttons
  if (btnIsolate) {
    btnIsolate.addEventListener('click', () => {
      audio?.playClick?.();
      toggleIsolatePart(simState.selectedPartId);
    });
  }

  if (btnResetView) {
    btnResetView.addEventListener('click', () => {
      audio?.playClick?.();
      simState.isolatedPartId = null;
      activeCameraTween = null;
      applyIsolationAndHighlightState();
      if (typeof setCameraView === 'function') {
        setCameraView('front_34');
      } else if (typeof window.__SET_CAMERA_VIEW__ === 'function') {
        window.__SET_CAMERA_VIEW__('front_34');
      }
    });
  }

  // Mobile Drawer Toggles
  if (btnToggleLeftDock && leftDock) {
    btnToggleLeftDock.addEventListener('click', () => {
      const open = leftDock.classList.toggle('mobile-open');
      btnToggleLeftDock.classList.toggle('active', open);
      if (open && rightDock) {
        rightDock.classList.remove('mobile-open');
        btnToggleRightDock?.classList.remove('active');
      }
    });
  }

  if (btnToggleRightDock && rightDock) {
    btnToggleRightDock.addEventListener('click', () => {
      const open = rightDock.classList.toggle('mobile-open');
      btnToggleRightDock.classList.toggle('active', open);
      if (open && leftDock) {
        leftDock.classList.remove('mobile-open');
        btnToggleLeftDock?.classList.remove('active');
      }
    });
  }

  // Raycast Pointer Hover & Click Picking on the 3D Canvas (ignoring drags > 5px)
  const raycaster = new THREE.Raycaster();
  const pointerNdc = new THREE.Vector2();
  let pointerDownPos = { x: 0, y: 0 };
  let isPointerDragging = false;

  function findPartIdFromObject(obj) {
    let curr = obj;
    while (curr) {
      if (curr.userData?.partId) return curr.userData.partId;
      if (curr.name && PART_REGISTRY.some((p) => p.id === curr.name)) {
        return curr.name;
      }
      for (const part of PART_REGISTRY) {
        if (getPartGroup(part.id) === curr) {
          return part.id;
        }
      }
      curr = curr.parent;
    }
    return null;
  }

  function performRaycast(clientX, clientY) {
    const domElem = renderer?.domElement;
    if (!domElem || !camera) return null;
    const rect = domElem.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return null;

    pointerNdc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointerNdc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointerNdc, camera);

    const pickTargets = [];
    PART_REGISTRY.forEach((p) => {
      const grp = getPartGroup(p.id);
      if (grp) pickTargets.push(grp);
    });
    if (pickTargets.length === 0 && carRootGroup) {
      pickTargets.push(carRootGroup);
    }

    const hits = raycaster.intersectObjects(pickTargets, true);
    for (const hit of hits) {
      const partId = findPartIdFromObject(hit.object);
      if (partId) return partId;
    }
    return null;
  }

  const canvasEl = renderer?.domElement;
  if (canvasEl) {
    canvasEl.addEventListener('pointerdown', (e) => {
      pointerDownPos.x = e.clientX;
      pointerDownPos.y = e.clientY;
      isPointerDragging = false;
    });

    canvasEl.addEventListener('pointermove', (e) => {
      const dx = e.clientX - pointerDownPos.x;
      const dy = e.clientY - pointerDownPos.y;
      if (Math.hypot(dx, dy) > 5) {
        isPointerDragging = true;
      }
      const hoveredId = performRaycast(e.clientX, e.clientY);
      if (hoveredId !== simState.hoveredPartId) {
        simState.hoveredPartId = hoveredId;
        canvasEl.style.cursor = hoveredId ? 'pointer' : 'grab';
        applyIsolationAndHighlightState();
      }
    });

    canvasEl.addEventListener('pointerup', (e) => {
      const dragDist = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (dragDist > 5 || isPointerDragging) return;

      const hitPartId = performRaycast(e.clientX, e.clientY);
      if (hitPartId) {
        audio?.playClick?.();
        selectPart(hitPartId, { focusCamera: true });
      } else if (simState.isolatedPartId) {
        // Clicking empty background exits Isolate Mode and restores all 12 sub-assemblies
        simState.isolatedPartId = null;
        applyIsolationAndHighlightState();
      }
    });
  }

  // Progressive Callout Disclosure & 4-Iteration Screen-Space Bounding-Box Repulsion
  const tempBox = new THREE.Box3();
  const tempWorldPos = new THREE.Vector3();
  const tempProjected = new THREE.Vector3();

  function updateCalloutsAndTelemetry(dt = 0.016) {
    // Advance active camera focus tween if running
    if (activeCameraTween && camera && controls) {
      activeCameraTween.elapsed += dt;
      const t = Math.min(1, activeCameraTween.elapsed / activeCameraTween.duration);
      const ease = 1 - Math.pow(1 - t, 3);
      camera.position.lerpVectors(activeCameraTween.startPos, activeCameraTween.endPos, ease);
      controls.target.lerpVectors(activeCameraTween.startTarget, activeCameraTween.endTarget, ease);
      controls.update?.();
      if (t >= 1) activeCameraTween = null;
    }

    const masterE = simState.masterExplode ?? 0;
    const motionTel = window.__MOTION_TELEMETRY__ || {};
    const phaseName = (motionTel.currentPhase || (masterE < 0.05 ? 'ASSEMBLED' : 'EXPLODED')).toUpperCase();

    if (elPhasePill) {
      elPhasePill.textContent = `PHASE: ${phaseName}`;
    }

    const pct = Math.round(masterE * 100);
    if (elTelExplode) {
      elTelExplode.textContent = `${pct}%`;
      elTelExplode.classList.toggle('highlight-amber', pct > 5);
    }

    const drsOpen = Boolean(simState.drsOpen);
    const downforceKgf = Math.round((drsOpen ? -1410 : -1850) * (1 - 0.35 * masterE));
    if (elTelDownforce) {
      elTelDownforce.textContent = `${downforceKgf.toLocaleString()} kgf`;
    }

    const rpm = Math.round(11400 + (drsOpen ? 1850 : 0) + Math.sin(performance.now() * 0.006) * 65);
    if (elTelRpm) {
      elTelRpm.textContent = `${rpm.toLocaleString()} RPM`;
    }

    const exhaustC = Math.round(790 + (drsOpen ? 38 : 0) - masterE * 85);
    if (elTelExhaust) {
      elTelExhaust.textContent = `${exhaustC} °C`;
    }

    if (elTelDrs) {
      elTelDrs.textContent = drsOpen ? 'OPEN (24°)' : 'CLOSED (0°)';
      elTelDrs.classList.toggle('highlight-amber', drsOpen);
    }

    // Progressive Callout Disclosure
    const mode = simState.calloutMode || 'auto';
    const vw = window.innerWidth || 1440;
    const vh = window.innerHeight || 900;
    const isDesktop = vw > 1024;
    const minX = isDesktop ? 368 : 85;
    const maxX = isDesktop ? Math.max(minX + 60, vw - 375) : Math.max(85, vw - 85);
    const minY = 68;
    const maxY = Math.max(minY + 60, vh - 44);

    const activeCallouts = [];

    PART_REGISTRY.forEach((part) => {
      const dom = calloutDomMap.get(part.id);
      if (!dom) return;

      const isSelectedOrHovered =
        part.id === simState.selectedPartId ||
        part.id === simState.hoveredPartId ||
        part.id === simState.isolatedPartId;

      let shouldShow = false;
      if (mode === 'hidden') {
        shouldShow = false;
      } else if (mode === 'all') {
        shouldShow = true;
      } else {
        // mode === 'auto': hide when masterExplode < 0.15 except hovered/selected part
        shouldShow = masterE >= 0.15 ? true : isSelectedOrHovered;
      }

      if (simState.isolatedPartId && simState.isolatedPartId !== part.id) {
        shouldShow = false;
      }

      if (!shouldShow || !camera) {
        dom.badge.style.display = 'none';
        dom.line.style.display = 'none';
        dom.dot.style.display = 'none';
        return;
      }

      // Compute world centroid of sub-assembly
      const group = getPartGroup(part.id);
      if (group) {
        tempBox.setFromObject(group);
        if (!tempBox.isEmpty()) {
          tempBox.getCenter(tempWorldPos);
        } else {
          tempWorldPos.set(...part.assembledPivot);
        }
      } else {
        tempWorldPos.set(
          part.assembledPivot[0] + part.explodeVector[0] * masterE,
          part.assembledPivot[1] + part.explodeVector[1] * masterE,
          part.assembledPivot[2] + part.explodeVector[2] * masterE
        );
      }

      tempProjected.copy(tempWorldPos).project(camera);
      if (tempProjected.z > 1.0 || tempProjected.z < -1.0) {
        dom.badge.style.display = 'none';
        dom.line.style.display = 'none';
        dom.dot.style.display = 'none';
        return;
      }

      const anchorX = (tempProjected.x * 0.5 + 0.5) * vw;
      const anchorY = (-tempProjected.y * 0.5 + 0.5) * vh;

      // Initial radial outward offset from screen center so leader lines fan cleanly
      const dirX = anchorX - vw * 0.5;
      const dirY = anchorY - vh * 0.5;
      const len = Math.hypot(dirX, dirY) || 1;
      const initX = Math.max(minX, Math.min(maxX, anchorX + (dirX / len) * 42));
      const initY = Math.max(minY, Math.min(maxY, anchorY + (dirY / len) * 34 - 16));

      activeCallouts.push({
        id: part.id,
        dom,
        anchorX,
        anchorY,
        x: initX,
        y: initY,
        w: 132,
        h: 26,
        selected: part.id === simState.selectedPartId
      });
    });

    // 4 Iterations of Vertical/Horizontal Bounding-Box Repulsion + Safe-Margin Clamping
    for (let iter = 0; iter < 4; iter++) {
      for (let i = 0; i < activeCallouts.length; i++) {
        for (let j = i + 1; j < activeCallouts.length; j++) {
          const a = activeCallouts[i];
          const b = activeCallouts[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const minSepX = (a.w + b.w) * 0.5 + 8;
          const minSepY = (a.h + b.h) * 0.5 + 6;

          if (Math.abs(dx) < minSepX && Math.abs(dy) < minSepY) {
            const overlapX = minSepX - Math.abs(dx);
            const overlapY = minSepY - Math.abs(dy);

            if (overlapY <= overlapX * 1.2) {
              const signY = dy >= 0 ? 1 : -1;
              const pushY = overlapY * 0.55 * signY;
              a.y -= pushY;
              b.y += pushY;
            } else {
              const signX = dx >= 0 ? 1 : -1;
              const pushX = overlapX * 0.55 * signX;
              a.x -= pushX;
              b.x += pushX;
            }
          }
        }
      }

      // Clamp to safe viewport margins ([300, width-310], [64, height-40])
      for (let i = 0; i < activeCallouts.length; i++) {
        const c = activeCallouts[i];
        c.x = Math.max(minX, Math.min(maxX, c.x));
        c.y = Math.max(minY, Math.min(maxY, c.y));
      }
    }

    // Commit Positioned Badges and SVG Leader Lines
    for (const c of activeCallouts) {
      const { badge, line, dot } = c.dom;
      badge.style.display = 'inline-flex';
      badge.style.left = `${c.x.toFixed(1)}px`;
      badge.style.top = `${c.y.toFixed(1)}px`;
      badge.classList.toggle('selected', c.selected);

      line.style.display = 'block';
      line.setAttribute('x1', c.anchorX.toFixed(1));
      line.setAttribute('y1', c.anchorY.toFixed(1));
      line.setAttribute('x2', c.x.toFixed(1));
      line.setAttribute('y2', c.y.toFixed(1));

      dot.style.display = 'block';
      dot.setAttribute('cx', c.anchorX.toFixed(1));
      dot.setAttribute('cy', c.anchorY.toFixed(1));
    }
  }

  // Initialize default selection (`part_08_power_unit`)
  selectPart(simState.selectedPartId || 'part_08_power_unit', { focusCamera: false });
  syncSlidersFromState();

  let lastFrameTick = -1;
  function update(dt = 0.016, frameId = performance.now()) {
    lastFrameTick = frameId;
    syncSlidersFromState();
    updateCalloutsAndTelemetry(dt);
  }

  // Fallback self-tick if main loop doesn't invoke hud.update() directly
  function rafLoop(now) {
    if (now - lastFrameTick > 24) {
      update(0.016, now);
    }
    requestAnimationFrame(rafLoop);
  }
  requestAnimationFrame(rafLoop);

  return {
    update,
    selectPart,
    toggleIsolatePart,
    activatePreset,
    syncSlidersFromState,
    applyIsolationAndHighlightState
  };
}
