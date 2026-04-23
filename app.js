const ATTR_NAMES = [
  "Speed",
  "Acceleration",
  "Altitude",
  "Energy",
  "Handling",
  "Toughness",
  "Boost",
  "Training"
];

const MATERIAL_BASE_NAMES = [
  "Ingot",
  "Gem",
  "Plank",
  "Paper",
  "String",
  "Grains",
  "Oil",
  "Meat"
];

const MATERIAL_REAL_NAMES_BY_LEVEL = {
  1: ["Copper Ingot", "Copper Gem", "Oak Plank", "Oak Paper", "Wheat String", "Wheat Grains", "Gudgeon Oil", "Gudgeon Meat"],
  10: ["Granite Ingot", "Granite Gem", "Birch Plank", "Birch Paper", "Barley String", "Barley Grains", "Trout Oil", "Trout Meat"],
  20: ["Gold Ingot", "Gold Gem", "Willow Plank", "Willow Paper", "Oat String", "Oat Grains", "Salmon Oil", "Salmon Meat"],
  30: ["Sandstone Ingot", "Sandstone Gem", "Acacia Plank", "Acacia Paper", "Malt String", "Malt Grains", "Carp Oil", "Carp Meat"],
  40: ["Iron Ingot", "Iron Gem", "Spruce Plank", "Spruce Paper", "Hops String", "Hops Grains", "Icefish Oil", "Icefish Meat"],
  50: ["Silver Ingot", "Silver Gem", "Jungle Plank", "Jungle Paper", "Rye String", "Rye Grains", "Piranha Oil", "Piranha Meat"],
  60: ["Cobalt Ingot", "Cobalt Gem", "Dark Plank", "Dark Paper", "Millet String", "Millet Grains", "Koi Oil", "Koi Meat"],
  70: ["Kanderstone Ingot", "Kanderstone Gem", "Light Plank", "Light Paper", "Decay String", "Decay Grains", "Gylia Oil", "Gylia Meat"],
  80: ["Diamond Ingot", "Diamond Gem", "Pine Plank", "Pine Paper", "Rice String", "Rice Grains", "Bass Oil", "Bass Meat"],
  90: ["Molten Ingot", "Molten Gem", "Avo Plank", "Avo Paper", "Sorghum String", "Sorghum Grains", "Molten Oil", "Molten Meat"],
  100: ["Voidstone Ingot", "Voidstone Gem", "Sky Plank", "Sky Paper", "Hemp String", "Hemp Grains", "Starfish Oil", "Starfish Meat"],
  105: ["Dernic Ingot", "Dernic Gem", "Dernic Plank", "Dernic Paper", "Dernic String", "Dernic Grains", "Dernic Oil", "Dernic Meat"],
  110: ["Titanium Ingot", "Titanium Gem", "Maple Plank", "Maple Paper", "Jute String", "Jute Grains", "Sturgeon Oil", "Sturgeon Meat"],
  115: ["Cinnabar Ingot", "Cinnabar Gem", "Redwood Plank", "Redwood Paper", "Heather String", "Heather Grains", "Mahseer Oil", "Mahseer Meat"]
};

const MATERIAL_LEVEL_DATA = {
  1: [
    [0, 0, 0, 4, 0, 8, 0, 0],
    [4, 0, 0, 2, 0, 0, 0, 6],
    [2, 6, 0, 0, 0, 4, 0, 0],
    [0, 0, 8, 0, 0, 0, 4, 0],
    [0, 2, 0, 0, 4, 0, 6, 0],
    [8, 0, 4, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 6, 0, 0, 4],
    [0, 4, 0, 8, 0, 0, 0, 0]
  ],
  10: [
    [0, 0, 0, 5, 0, 10, 0, 0],
    [5, 0, 0, 2, 0, 0, 0, 8],
    [2, 8, 0, 0, 0, 5, 0, 0],
    [0, 0, 10, 0, 0, 0, 5, 0],
    [0, 2, 0, 0, 5, 0, 8, 0],
    [10, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 2, 0, 8, 0, 0, 5],
    [0, 5, 0, 10, 0, 0, 0, 0]
  ],
  20: [
    [0, 0, 0, 5, 0, 12, 0, 0],
    [6, 0, 0, 3, 0, 0, 0, 9],
    [3, 9, 0, 0, 0, 6, 0, 0],
    [0, 0, 12, 0, 0, 0, 5, 0],
    [0, 3, 0, 0, 6, 0, 9, 0],
    [12, 0, 5, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 9, 0, 0, 6],
    [0, 5, 0, 12, 0, 0, 0, 0]
  ],
  30: [
    [0, 0, 0, 6, 0, 14, 0, 0],
    [6, 0, 0, 3, 0, 0, 0, 11],
    [3, 11, 0, 0, 0, 6, 0, 0],
    [0, 0, 14, 0, 0, 0, 6, 0],
    [0, 3, 0, 0, 6, 0, 11, 0],
    [14, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 11, 0, 0, 6],
    [0, 6, 0, 14, 0, 0, 0, 0]
  ],
  40: [
    [0, 0, 0, 6, 0, 16, 0, 0],
    [7, 0, 0, 3, 0, 0, 0, 12],
    [3, 12, 0, 0, 0, 7, 0, 0],
    [0, 0, 16, 0, 0, 0, 6, 0],
    [0, 3, 0, 0, 7, 0, 12, 0],
    [16, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 3, 0, 12, 0, 0, 7],
    [0, 6, 0, 16, 0, 0, 0, 0]
  ],
  50: [
    [0, 0, 0, 7, 0, 18, 0, 0],
    [8, 0, 0, 4, 0, 0, 0, 14],
    [4, 14, 0, 0, 0, 8, 0, 0],
    [0, 0, 18, 0, 0, 0, 7, 0],
    [0, 4, 0, 0, 8, 0, 14, 0],
    [18, 0, 7, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 14, 0, 0, 8],
    [0, 7, 0, 18, 0, 0, 0, 0]
  ],
  60: [
    [0, 0, 0, 8, 0, 20, 0, 0],
    [9, 0, 0, 4, 0, 0, 0, 15],
    [4, 15, 0, 0, 0, 9, 0, 0],
    [0, 0, 20, 0, 0, 0, 8, 0],
    [0, 4, 0, 0, 9, 0, 15, 0],
    [20, 0, 8, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 15, 0, 0, 9],
    [0, 8, 0, 20, 0, 0, 0, 0]
  ],
  70: [
    [0, 0, 0, 8, 0, 22, 0, 0],
    [10, 0, 0, 4, 0, 0, 0, 17],
    [4, 17, 0, 0, 0, 10, 0, 0],
    [0, 0, 22, 0, 0, 0, 8, 0],
    [0, 4, 0, 0, 10, 0, 17, 0],
    [22, 0, 8, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 17, 0, 0, 10],
    [0, 8, 0, 22, 0, 0, 0, 0]
  ],
  80: [
    [0, 0, 0, 9, 0, 24, 0, 0],
    [10, 0, 0, 4, 0, 0, 0, 18],
    [4, 18, 0, 0, 0, 10, 0, 0],
    [0, 0, 24, 0, 0, 0, 9, 0],
    [0, 4, 0, 0, 10, 0, 18, 0],
    [24, 0, 9, 0, 0, 0, 0, 0],
    [0, 0, 4, 0, 18, 0, 0, 10],
    [0, 9, 0, 24, 0, 0, 0, 0]
  ],
  90: [
    [0, 0, 0, 9, 0, 26, 0, 0],
    [11, 0, 0, 5, 0, 0, 0, 20],
    [5, 20, 0, 0, 0, 11, 0, 0],
    [0, 0, 26, 0, 0, 0, 9, 0],
    [0, 5, 0, 0, 11, 0, 20, 0],
    [26, 0, 9, 0, 0, 0, 0, 0],
    [0, 0, 5, 0, 20, 0, 0, 11],
    [0, 9, 0, 26, 0, 0, 0, 0]
  ],
  100: [
    [0, 0, 0, 10, 0, 28, 0, 0],
    [12, 0, 0, 5, 0, 0, 0, 21],
    [5, 21, 0, 0, 0, 12, 0, 0],
    [0, 0, 28, 0, 0, 0, 10, 0],
    [0, 5, 0, 0, 12, 0, 21, 0],
    [28, 0, 10, 0, 0, 0, 0, 0],
    [0, 0, 5, 0, 21, 0, 0, 12],
    [0, 10, 0, 28, 0, 0, 0, 0]
  ],
  105: [
    [0, 0, 0, 10, 0, 29, 0, 0],
    [12, 0, 0, 5, 0, 0, 0, 22],
    [5, 22, 0, 0, 0, 12, 0, 0],
    [0, 0, 29, 0, 0, 0, 10, 0],
    [0, 5, 0, 0, 12, 0, 22, 0],
    [29, 0, 10, 0, 0, 0, 0, 0],
    [0, 0, 5, 0, 22, 0, 0, 12],
    [0, 10, 0, 29, 0, 0, 0, 0]
  ],
  110: [
    [0, 0, 0, 11, 0, 30, 0, 0],
    [13, 0, 0, 5, 0, 0, 0, 23],
    [5, 23, 0, 0, 0, 13, 0, 0],
    [0, 0, 30, 0, 0, 0, 11, 0],
    [0, 5, 0, 0, 13, 0, 23, 0],
    [30, 0, 11, 0, 0, 0, 0, 0],
    [0, 0, 5, 0, 23, 0, 0, 13],
    [0, 11, 0, 30, 0, 0, 0, 0]
  ],
  115: [
    [0, 0, 0, 11, 0, 31, 0, 0],
    [13, 0, 0, 5, 0, 0, 0, 23],
    [5, 23, 0, 0, 0, 13, 0, 0],
    [0, 0, 31, 0, 0, 0, 11, 0],
    [0, 5, 0, 0, 13, 0, 23, 0],
    [31, 0, 11, 0, 0, 0, 0, 0],
    [0, 0, 5, 0, 23, 0, 0, 13],
    [0, 11, 0, 31, 0, 0, 0, 0]
  ]
};

const MATERIAL_LEVELS = Object.keys(MATERIAL_LEVEL_DATA)
  .map((v) => Number.parseInt(v, 10))
  .sort((a, b) => a - b);

const STORAGE_KEY = "wynn_mount_presets_v3";
const ACTIVE_PRESET_KEY = "wynn_mount_active_preset";
const MAX_PER_MATERIAL = 5;

function parseNonNegativeInt(value, fallback = 0) {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n) || n < 0) {
    return fallback;
  }
  return n;
}

function deepCopyPreset(preset) {
  return {
    name: preset.name,
    level: preset.level.slice(),
    limit: preset.limit.slice(),
    max: preset.max.slice(),
    mode: preset.mode,
    manualLevel: preset.manualLevel
  };
}

function defaultPreset() {
  return {
    name: "default",
    level: Array(8).fill(1),
    limit: Array(8).fill(10),
    max: Array(8).fill(30),
    mode: "auto",
    manualLevel: 10
  };
}

function normalizePreset(input) {
  const base = defaultPreset();
  const preset = {
    name: String(input?.name || base.name),
    level: Array.isArray(input?.level) ? input.level.slice(0, 8) : base.level.slice(),
    limit: Array.isArray(input?.limit) ? input.limit.slice(0, 8) : base.limit.slice(),
    max: Array.isArray(input?.max) ? input.max.slice(0, 8) : base.max.slice(),
    mode: input?.mode === "manual" ? "manual" : "auto",
    manualLevel: parseNonNegativeInt(input?.manualLevel, base.manualLevel)
  };

  while (preset.level.length < 8) preset.level.push(1);
  while (preset.limit.length < 8) preset.limit.push(10);
  while (preset.max.length < 8) preset.max.push(30);

  for (let i = 0; i < 8; i++) {
    preset.level[i] = parseNonNegativeInt(preset.level[i], 1);
    preset.limit[i] = parseNonNegativeInt(preset.limit[i], 10);
    preset.max[i] = parseNonNegativeInt(preset.max[i], 30);
    if (preset.level[i] > preset.limit[i]) {
      preset.limit[i] = preset.level[i];
    }
    if (preset.limit[i] > preset.max[i]) {
      preset.max[i] = preset.limit[i];
    }
  }

  if (!MATERIAL_LEVEL_DATA[preset.manualLevel]) {
    preset.manualLevel = 10;
  }

  return preset;
}

function readPresets() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const presets = [defaultPreset()];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
    localStorage.setItem(ACTIVE_PRESET_KEY, presets[0].name);
    return presets;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      throw new Error("invalid presets");
    }
    return parsed.map(normalizePreset);
  } catch (_) {
    const presets = [defaultPreset()];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(presets));
    localStorage.setItem(ACTIVE_PRESET_KEY, presets[0].name);
    return presets;
  }
}

function savePresets(presets) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(presets.map(normalizePreset)));
}

function getActivePresetName() {
  return localStorage.getItem(ACTIVE_PRESET_KEY) || "default";
}

function setActivePresetName(name) {
  localStorage.setItem(ACTIVE_PRESET_KEY, name);
}

function findPresetByName(presets, name) {
  return presets.find((p) => p.name === name);
}

function fillPresetSelect(selectEl, presets, activeName) {
  selectEl.innerHTML = "";
  presets.forEach((preset) => {
    const option = document.createElement("option");
    option.value = preset.name;
    option.textContent = preset.name;
    if (preset.name === activeName) {
      option.selected = true;
    }
    selectEl.appendChild(option);
  });
}

function getMaterialNamesForLevel(level) {
  const names = MATERIAL_REAL_NAMES_BY_LEVEL[level];
  if (Array.isArray(names) && names.length === MATERIAL_BASE_NAMES.length) {
    return names;
  }
  return MATERIAL_BASE_NAMES.map((name) => `L${level} ${name}`);
}

function feedingMinutesForAverageLimit(avgLimit) {
  if (avgLimit >= 20) return 360;
  if (avgLimit >= 19) return 300;
  if (avgLimit >= 18) return 240;
  if (avgLimit >= 17) return 180;
  if (avgLimit >= 16) return 120;
  if (avgLimit >= 15) return 60;
  if (avgLimit >= 14) return 30;
  if (avgLimit >= 13) return 15;
  if (avgLimit >= 12) return 5;
  return 1;
}

function formatMinutes(totalMinutes) {
  if (totalMinutes < 60) {
    return `${totalMinutes} 分钟`;
  }
  const h = Math.floor(totalMinutes / 60);
  const m = totalMinutes % 60;
  if (!m) {
    return `${h} 小时`;
  }
  return `${h} 小时 ${m} 分钟`;
}

function estimateFeedingTime(limits, selectedLevel, bestChoice) {
  const matrix = MATERIAL_LEVEL_DATA[selectedLevel];
  if (!matrix) {
    return null;
  }

  const pointAdds = [];
  for (let i = 0; i < bestChoice.length; i++) {
    const count = bestChoice[i];
    const rowTotal = matrix[i].reduce((sum, v) => sum + v, 0);
    for (let k = 0; k < count; k++) {
      pointAdds.push(rowTotal);
    }
  }

  // Feeding time is based on Average Limit, so use current limits as the start.
  const startTotal = limits.reduce((sum, v) => sum + v, 0);

  function simulate(order) {
    let total = startTotal;
    let minutes = 0;
    for (let i = 0; i < order.length; i++) {
      const avgLimit = Math.ceil(total / 8);
      minutes += feedingMinutesForAverageLimit(avgLimit);
      total += order[i];
    }
    return minutes;
  }

  return simulate(pointAdds.slice().sort((a, b) => a - b));
}

function solveMinimumWithinBounds(minNeed, maxNeed, matrix) {
  const materialCount = matrix.length;
  const attrCount = minNeed.length;
  let bestCount = Number.POSITIVE_INFINITY;
  let bestChoice = Array(materialCount).fill(0);
  const curChoice = Array(materialCount).fill(0);

  function optimistic(idx, curAttr) {
    for (let j = 0; j < attrCount; j++) {
      let maxAdd = 0;
      for (let i = idx; i < materialCount; i++) {
        maxAdd += MAX_PER_MATERIAL * matrix[i][j];
      }
      if (curAttr[j] + maxAdd < minNeed[j]) {
        return false;
      }
    }
    return true;
  }

  function dfs(idx, curCount, curAttr) {
    if (curCount >= bestCount) {
      return;
    }

    for (let j = 0; j < attrCount; j++) {
      if (curAttr[j] > maxNeed[j]) {
        return;
      }
    }

    if (idx === materialCount) {
      for (let j = 0; j < attrCount; j++) {
        if (curAttr[j] < minNeed[j] || curAttr[j] > maxNeed[j]) {
          return;
        }
      }
      bestCount = curCount;
      bestChoice = curChoice.slice();
      return;
    }

    if (!optimistic(idx, curAttr)) {
      return;
    }

    for (let num = 0; num <= MAX_PER_MATERIAL; num++) {
      curChoice[idx] = num;
      const nextAttr = curAttr.slice();
      for (let j = 0; j < attrCount; j++) {
        nextAttr[j] += num * matrix[idx][j];
      }
      dfs(idx + 1, curCount + num, nextAttr);
    }
    curChoice[idx] = 0;
  }

  dfs(0, 0, Array(attrCount).fill(0));

  if (!Number.isFinite(bestCount)) {
    return null;
  }

  const finalAdd = Array(attrCount).fill(0);
  for (let i = 0; i < materialCount; i++) {
    for (let j = 0; j < attrCount; j++) {
      finalAdd[j] += bestChoice[i] * matrix[i][j];
    }
  }

  return { bestCount, bestChoice, finalAdd };
}

function getUsableLevels(levelArray) {
  const cap = Math.max(...levelArray);
  return MATERIAL_LEVELS.filter((lv) => lv <= cap);
}

function validateRows(rows) {
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    if (row.level > row.limit || row.limit > row.max) {
      return {
        ok: false,
        message: `${ATTR_NAMES[i]} 需要满足 Level <= Limit <= Max`
      };
    }
  }
  return { ok: true };
}

function initNeedPage() {
  const form = document.getElementById("needForm");
  const resultCard = document.getElementById("resultCard");
  const bestCountEl = document.getElementById("bestCount");
  const usageBody = document.getElementById("usageBody");
  const attrSummary = document.getElementById("attrSummary");
  const selectedLevelEl = document.getElementById("selectedMaterialLevel");
  const timeEstimateEl = document.getElementById("timeEstimate");
  const modeHint = document.getElementById("modeHint");

  const presetSelect = document.getElementById("presetSelect");
  const applyPresetBtn = document.getElementById("applyPresetBtn");
  const savePresetBtn = document.getElementById("savePresetBtn");
  const deletePresetBtn = document.getElementById("deletePresetBtn");
  const solveBtn = document.getElementById("solveBtn");

  const modeSelect = document.getElementById("materialMode");
  const manualLevelSelect = document.getElementById("manualMaterialLevel");

  const rowInputs = [];

  ATTR_NAMES.forEach((attr, idx) => {
    const row = document.createElement("div");
    row.className = "triple-row";
    row.innerHTML = `
      <div class="attr-name">${attr}</div>
      <input id="level_${idx}" type="number" min="0" step="1" value="1" />
      <input id="limit_${idx}" type="number" min="0" step="1" value="10" />
      <input id="max_${idx}" type="number" min="0" step="1" value="30" />
    `;
    form.appendChild(row);

    rowInputs.push({
      level: row.querySelector(`#level_${idx}`),
      limit: row.querySelector(`#limit_${idx}`),
      max: row.querySelector(`#max_${idx}`)
    });
  });

  function collectRows() {
    return rowInputs.map((item) => ({
      level: parseNonNegativeInt(item.level.value, 1),
      limit: parseNonNegativeInt(item.limit.value, 10),
      max: parseNonNegativeInt(item.max.value, 30)
    }));
  }

  function renderManualLevelOptions(rows, preferHighestUsable) {
    const usableLevels = getUsableLevels(rows.map((r) => r.level));
    const selected = parseNonNegativeInt(manualLevelSelect.value, 10);
    const defaultLevel = usableLevels.length ? usableLevels[usableLevels.length - 1] : MATERIAL_LEVELS[0];

    manualLevelSelect.innerHTML = "";
    MATERIAL_LEVELS.forEach((lv) => {
      const option = document.createElement("option");
      option.value = String(lv);
      option.textContent = `Level ${lv}`;
      manualLevelSelect.appendChild(option);
    });

    if (preferHighestUsable) {
      manualLevelSelect.value = String(defaultLevel);
      return;
    }

    if (MATERIAL_LEVELS.includes(selected)) {
      manualLevelSelect.value = String(selected);
    } else {
      manualLevelSelect.value = String(defaultLevel);
    }
  }

  function setRowsFromPreset(preset) {
    rowInputs.forEach((item, i) => {
      item.level.value = String(preset.level[i]);
      item.limit.value = String(preset.limit[i]);
      item.max.value = String(preset.max[i]);
    });
    modeSelect.value = preset.mode;
    renderManualLevelOptions(collectRows(), false);
    manualLevelSelect.value = String(preset.manualLevel);
    syncModeHint();
  }

  function refreshSelect() {
    const presets = readPresets();
    let activeName = getActivePresetName();
    if (!findPresetByName(presets, activeName)) {
      activeName = presets[0].name;
      setActivePresetName(activeName);
    }
    fillPresetSelect(presetSelect, presets, activeName);
    return { presets, activeName };
  }

  function syncModeHint(preferHighestOnManual) {
    const rows = collectRows();
    const usableLevels = getUsableLevels(rows.map((r) => r.level));
    if (!usableLevels.length) {
      modeHint.textContent = "当前 Level 太低，无法使用任何已记录材料等级。";
    } else {
      modeHint.textContent = `当前可用材料等级: ${usableLevels.join(", ")}`;
    }

    const isManual = modeSelect.value === "manual";
    manualLevelSelect.disabled = !isManual;

    renderManualLevelOptions(rows, Boolean(preferHighestOnManual && isManual));
  }

  const state = refreshSelect();
  const activePreset = findPresetByName(state.presets, state.activeName) || state.presets[0];
  setRowsFromPreset(activePreset);

  presetSelect.addEventListener("change", () => {
    setActivePresetName(presetSelect.value);
  });

  modeSelect.addEventListener("change", () => syncModeHint(true));
  rowInputs.forEach((item) => {
    item.level.addEventListener("input", () => syncModeHint(false));
  });

  applyPresetBtn.addEventListener("click", () => {
    const current = findPresetByName(readPresets(), presetSelect.value);
    if (!current) {
      alert("预设不存在");
      return;
    }
    setRowsFromPreset(current);
  });

  savePresetBtn.addEventListener("click", () => {
    const name = window.prompt("请输入预设名称", presetSelect.value || "新预设");
    if (!name) {
      return;
    }

    const rows = collectRows();
    const check = validateRows(rows);
    if (!check.ok) {
      alert(check.message);
      return;
    }

    const presetsNow = readPresets();
    const existing = findPresetByName(presetsNow, name);
    const base = existing ? deepCopyPreset(existing) : deepCopyPreset(defaultPreset());

    base.name = name;
    base.level = rows.map((r) => r.level);
    base.limit = rows.map((r) => r.limit);
    base.max = rows.map((r) => r.max);
    base.mode = modeSelect.value === "manual" ? "manual" : "auto";
    base.manualLevel = parseNonNegativeInt(manualLevelSelect.value, 10);

    if (existing) {
      const idx = presetsNow.findIndex((p) => p.name === name);
      presetsNow[idx] = base;
    } else {
      presetsNow.push(base);
    }

    savePresets(presetsNow);
    setActivePresetName(name);
    refreshSelect();
    alert("预设已保存");
  });

  deletePresetBtn.addEventListener("click", () => {
    const name = presetSelect.value;
    if (name === "default") {
      alert("默认预设不可删除");
      return;
    }

    const ok = window.confirm(`确认删除预设: ${name} ?`);
    if (!ok) {
      return;
    }

    const presetsNow = readPresets().filter((p) => p.name !== name);
    savePresets(presetsNow);
    const nextName = presetsNow[0]?.name || "default";
    setActivePresetName(nextName);
    const nextState = refreshSelect();
    const nextPreset = findPresetByName(nextState.presets, nextState.activeName) || defaultPreset();
    setRowsFromPreset(nextPreset);
  });

  solveBtn.addEventListener("click", () => {
    const rows = collectRows();
    const check = validateRows(rows);
    if (!check.ok) {
      alert(check.message);
      return;
    }

    const levels = rows.map((r) => r.level);
    const limits = rows.map((r) => r.limit);
    // Feeding increases limit stats, so target is the gap from Limit to Max.
    const minNeed = rows.map((r) => r.max - r.limit);
    const maxNeed = Array(8).fill(Number.POSITIVE_INFINITY);

    const usableLevels = getUsableLevels(levels);
    if (!usableLevels.length) {
      alert("没有可用材料等级，请提高至少一个属性的 Level。\n当前规则: 只能使用 <= 最高 Level 的材料。\n");
      return;
    }

    let selectedLevel = null;
    let result = null;

    if (modeSelect.value === "manual") {
      const manualLevel = parseNonNegativeInt(manualLevelSelect.value, 10);
      if (!usableLevels.includes(manualLevel)) {
        alert(`手动选择的 Level ${manualLevel} 材料当前不可用。可用等级: ${usableLevels.join(", ")}`);
        return;
      }
      selectedLevel = manualLevel;
      result = solveMinimumWithinBounds(minNeed, maxNeed, MATERIAL_LEVEL_DATA[selectedLevel]);
    } else {
      const candidates = usableLevels.slice().sort((a, b) => b - a);
      for (let i = 0; i < candidates.length; i++) {
        const lv = candidates[i];
        const candidateResult = solveMinimumWithinBounds(minNeed, maxNeed, MATERIAL_LEVEL_DATA[lv]);
        if (candidateResult) {
          selectedLevel = lv;
          result = candidateResult;
          break;
        }
      }
    }

    resultCard.hidden = false;

    if (!result) {
      bestCountEl.textContent = "在每种素材最多 5 个限制下，无可行解。";
      selectedLevelEl.textContent = "材料等级: 无";
      timeEstimateEl.textContent = "预计喂养时间: 无";
      usageBody.innerHTML = "";
      attrSummary.textContent = "请检查 Limit 到 Max 的差值是否可达，或改用更低材料等级。";
      return;
    }

    bestCountEl.textContent = `最少素材数量: ${result.bestCount}`;
    selectedLevelEl.textContent = `材料等级: Level ${selectedLevel}`;

    const timeEstimate = estimateFeedingTime(limits, selectedLevel, result.bestChoice);
    if (timeEstimate !== null) {
      timeEstimateEl.textContent = `预计喂养时间: ${formatMinutes(timeEstimate)}`;
    } else {
      timeEstimateEl.textContent = "预计喂养时间: 无";
    }

    usageBody.innerHTML = "";
    const names = getMaterialNamesForLevel(selectedLevel);
    names.forEach((name, i) => {
      if (result.bestChoice[i] <= 0) {
        return;
      }
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${name}</td><td>${result.bestChoice[i]}</td>`;
      usageBody.appendChild(tr);
    });

    if (!usageBody.children.length) {
      const tr = document.createElement("tr");
      tr.innerHTML = "<td>无</td><td>0</td>";
      usageBody.appendChild(tr);
    }

    const finalLimits = rows.map((row, idx) => row.limit + result.finalAdd[idx]);
    attrSummary.textContent = `最终Limit: ${finalLimits.map((v, idx) => `${ATTR_NAMES[idx]}=${v}`).join(" | ")}`;
  });
}

(function main() {
  initNeedPage();
})();