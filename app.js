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

const MAX_PER_MATERIAL = 20;

function parseNonNegativeInt(value, fallback = 0) {
  const n = Number.parseInt(value, 10);
  if (!Number.isFinite(n) || n < 0) {
    return fallback;
  }
  return n;
}

function extractBracketMax(line) {
  const bracketMatch = line.match(/[\[\(]\s*(\d{1,4})\s*[\]\)]/);
  if (bracketMatch) {
    return parseNonNegativeInt(bracketMatch[1], 0);
  }
  return null;
}

function extractStatTripleFromLine(line) {
  const max = extractBracketMax(line);
  if (max === null) return null;

  const cleaned = line
    .replace(/\[.*?\]/g, '')
    .replace(/\(.*?\)/g, '')
    .replace(/[iIlL!?@%&©]/g, '')
    .replace(/\|/g, ' ')
    .replace(/,/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const digitStart = cleaned.search(/\d/);
  if (digitStart === -1) return { level: null, limit: null, max };

  let numStr = cleaned.substring(digitStart)
    .replace(/\*/g, ' ')
    .replace(/[^0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const tokens = numStr.match(/\d+/g);
  if (!tokens || tokens.length < 1) return { level: null, limit: null, max };

  const nums = tokens.map(Number);

  // Case 1: 3+ numbers → find level<=limit<=max
  if (nums.length >= 3) {
    for (let i = 0; i <= nums.length - 3; i++) {
      if (nums[i] <= nums[i + 1] && nums[i + 1] <= nums[i + 2]) {
        return { level: nums[i], limit: nums[i + 1], max: nums[i + 2] };
      }
    }
    if (nums[0] <= nums[1] && nums[1] <= max)
      return { level: nums[0], limit: nums[1], max };
    return { level: null, limit: null, max };
  }

  // Case 2: 2 numbers → level/limit
  if (nums.length === 2) {
    if (nums[0] <= max && nums[1] <= max) {
      return { level: nums[0], limit: nums[1], max };
    }
    return { level: null, limit: null, max };
  }

  // Case 3: 1 number → try splitting on 7 or 1
  if (nums.length === 1) {
    const s = tokens[0];
    const candidates = [];

    // double char 77/11 split
    for (let i = 1; i < s.length - 2; i++) {
      if ((s[i] === '7' || s[i] === '1') && (s[i + 1] === '7' || s[i + 1] === '1')) {
        const l = s.substring(0, i), r = s.substring(i + 2);
        if (l.length >= 2 && r.length >= 2) {
          const ln = parseInt(l), rn = parseInt(r);
          if (ln && rn && ln <= rn && rn <= max)
            candidates.push({ level: ln, limit: rn, max, prio: 2 });
        }
      }
    }

    // single char 7/1 split
    for (let i = 1; i < s.length - 1; i++) {
      if (s[i] === '7' || s[i] === '1') {
        const l = s.substring(0, i), r = s.substring(i + 1);
        if (l && r) {
          const ln = parseInt(l), rn = parseInt(r);
          if (ln && rn && ln <= rn && rn <= max)
            candidates.push({ level: ln, limit: rn, max, prio: 1 });
        }
      }
    }

    if (candidates.length > 0) {
      candidates.sort((a, b) => b.prio - a.prio || b.level - a.level);
      return { level: candidates[0].level, limit: candidates[0].limit, max: candidates[0].max };
    }
  }

  return { level: null, limit: null, max };
}

function parseMountOcrText(rawText) {
  if (!rawText || !rawText.trim()) {
    return { ok: false, message: "OCR 文本为空" };
  }

  const lines = rawText
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  const headerIndex = lines.findIndex((line) =>
    /level/i.test(line) && /limit/i.test(line)
  );
  if (headerIndex < 0) {
    return { ok: false, message: "未找到 Level/Limit 标题行" };
  }

  const dataLines = [];
  for (let i = headerIndex + 1; i < lines.length && dataLines.length < 8; i++) {
    const line = lines[i];
    if (/feeding|click|rename|combat|quest|table|level|limit|max/i.test(line)) continue;
    dataLines.push(line);
  }

  if (dataLines.length < 8) {
    return { ok: false, message: `标题行下只找到 ${dataLines.length} 行数据，需要8行` };
  }

  const result = [];
  for (let i = 0; i < 8; i++) {
    const triple = extractStatTripleFromLine(dataLines[i]);
    result.push({
      attr: ATTR_NAMES[i],
      level: triple ? triple.level : null,
      limit: triple ? triple.limit : null,
      max: triple ? triple.max : null
    });
  }

  const missingLevel = result.filter(r => r.level === null).map(r => r.attr);
  const missingLimit = result.filter(r => r.limit === null).map(r => r.attr);

  return {
    ok: true,
    rows: result,
    missingLevel,
    missingLimit
  };
}

/** 每个等级对应的材料短名称（去掉资源类型后缀） */
const MATERIAL_SHORT_NAMES = Object.fromEntries(
  Object.entries(MATERIAL_REAL_NAMES_BY_LEVEL).map(([lv, names]) => [
    lv,
    names.map(name => name.replace(/ (Ingot|Gem|Plank|Paper|String|Grains|Oil|Meat)$/, ""))
  ])
);

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

/**
 * 创建 Tesseract Worker — 固定使用 mc 模型（Legacy 引擎）
 */
async function createTesseractWorker(loggerCallback) {
  const lang = "mc";
  const langPath = "./";
  const corePath = "https://cdn.jsdelivr.net/npm/tesseract.js-core@5.1.1/tesseract-core-simd.wasm.js";
  const workerPath = "https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/worker.min.js";

  console.log("[OCR] 创建 Legacy Worker (OEM=2):", { lang, langPath });

  const worker = await window.Tesseract.createWorker(lang, 2, {
    corePath,
    workerPath,
    langPath,
    logger: loggerCallback
  });
  return worker;
}

function initNeedPage() {
  const form = document.getElementById("needForm");
  const resultCard = document.getElementById("resultCard");
  const bestCountEl = document.getElementById("bestCount");
  const usageBody = document.getElementById("usageBody");
  const overflowGrid = document.getElementById("overflowGrid");
  const selectedLevelEl = document.getElementById("selectedMaterialLevel");
  const timeEstimateEl = document.getElementById("timeEstimate");
  const modeHint = document.getElementById("modeHint");

  const ocrImageInput = document.getElementById("ocrImageInput");
  const ocrRecognizeBtn = document.getElementById("ocrRecognizeBtn");
  const ocrStatus = document.getElementById("ocrStatus");
  const ocrCard = document.getElementById("ocrCard");
  const showOriginalBtn = document.getElementById("showOriginalBtn");
  const showPreprocessedBtn = document.getElementById("showPreprocessedBtn");
  const preprocCanvas = document.getElementById("preprocCanvas");
  const preprocCanvasWrap = document.getElementById("preprocCanvasWrap");
  const originalCanvas = document.getElementById("originalCanvas");
  const originalCanvasWrap = document.getElementById("originalCanvasWrap");
  const preprocHint = document.getElementById("preprocHint");

  /** 粘贴方式传入的图片文件，用于显示原图/预处理按钮 */
  let pastedOcrFile = null;

  const solveBtn = document.getElementById("solveBtn");
  const resetBtn = document.getElementById("resetBtn");
  const copyLinkBtn = document.getElementById("copyLinkBtn");

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

  function setOcrStatus(message) {
    ocrStatus.textContent = message;
  }

  // OCR logger
  function makeOcrLogger(setStatusFn) {
    return (m) => {
      if (m.status === "recognizing text" && typeof m.progress === "number") {
        setStatusFn(`OCR 识别中... ${Math.round(m.progress * 100)}%`);
      }
    };
  }

  function loadImageFromFile(file) {
    return new Promise((resolve, reject) => {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve(img);
      };
      img.onerror = () => {
        URL.revokeObjectURL(url);
        reject(new Error("图片加载失败"));
      };
      img.src = url;
    });
  }

  async function buildOcrCanvas(file) {
    const img = await loadImageFromFile(file);
    const scale = 4;
    const canvas = document.createElement("canvas");

    const cropRightPercent = 0.0;
    const croppedWidth = Math.floor(img.width * (1 - cropRightPercent));

    canvas.width = Math.max(1, Math.floor(croppedWidth * scale));
    canvas.height = Math.max(1, Math.floor(img.height * scale));
    const ctx = canvas.getContext("2d");

    ctx.imageSmoothingEnabled = false;

    ctx.drawImage(
      img,
      0, 0, croppedWidth, img.height,
      0, 0, canvas.width, canvas.height
    );

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    for (let i = 0; i < data.length; i += 4) {
      const gray = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
      const binary = gray > 65 ? 0 : 255;
      data[i] = binary;
      data[i + 1] = binary;
      data[i + 2] = binary;
    }
    ctx.putImageData(imageData, 0, 0);

    return canvas;
  }

  async function recognizeAndApplyOcr(file) {
    if (!file) {
      alert("请先选择或粘贴截图文件");
      return;
    }

    if (!window.Tesseract || !window.Tesseract.createWorker) {
      alert("OCR 引擎未加载，请检查网络后重试。");
      return;
    }

    ocrRecognizeBtn.disabled = true;
    setOcrStatus("OCR 识别中...");

    let worker = null;
    try {
      const canvas = await buildOcrCanvas(file);

      console.log("[OCR] 创建 Worker (mc 模型)");
      worker = await createTesseractWorker(makeOcrLogger(setOcrStatus));

      console.log("[OCR] 开始识别...");
      const result = await worker.recognize(canvas);

      const rawText = result?.data?.text || "";
      console.log("[OCR] 识别完成, 文本长度:", rawText.length);

      // 自动应用识别结果到表格
      const parsed = parseMountOcrText(rawText);
      if (!parsed.ok) {
        setOcrStatus(`OCR 识别完成，但解析失败: ${parsed.message}`);
        alert(`OCR 识别完成但解析失败: ${parsed.message}\n\n识别文本:\n${rawText.slice(0, 500)}`);
        return;
      }

      parsed.rows.forEach((item, idx) => {
        if (item.max !== null) {
          rowInputs[idx].max.value = String(item.max);
        }
        if (item.level !== null) {
          rowInputs[idx].level.value = String(item.level);
        }
        if (item.limit !== null) {
          rowInputs[idx].limit.value = String(item.limit);
        }
      });

      syncModeHint(false);

      const missingBoth = parsed.missingLevel.filter(a => parsed.missingLimit.includes(a));
      const missingOnlyLevel = parsed.missingLevel.filter(a => !parsed.missingLimit.includes(a));
      const missingOnlyLimit = parsed.missingLimit.filter(a => !parsed.missingLevel.includes(a));

      const msgs = [];
      if (missingBoth.length) msgs.push(`缺失 Level 和 Limit: ${missingBoth.join(", ")}`);
      if (missingOnlyLevel.length) msgs.push(`缺失 Level: ${missingOnlyLevel.join(", ")}`);
      if (missingOnlyLimit.length) msgs.push(`缺失 Limit: ${missingOnlyLimit.join(", ")}`);

      if (msgs.length > 0) {
        setOcrStatus(`已识别并填充，但 ${msgs.join("；")}。请手动补全后计算。`);
        alert(`OCR 识别结果已部分填入表格。\n\n${msgs.join("\n")}\n\n请手动补全后点击计算。`);
      } else {
        setOcrStatus("OCR 识别并完美填充 8/8 项属性！");
      }
    } catch (err) {
      let errorMsg = "未知错误";
      if (err) {
        if (typeof err === "string") {
          errorMsg = err;
        } else if (err.message) {
          errorMsg = err.message;
        } else if (err.toString) {
          errorMsg = err.toString();
        }
        console.error("[OCR] 错误详情:", err);
        if (err.stack) console.error("[OCR] Stack:", err.stack);
      }
      setOcrStatus(`OCR 识别失败: ${errorMsg}`);
      alert(`OCR 识别失败: ${errorMsg}\n\n请查看控制台 (F12) 获取详细错误信息。`);
    } finally {
      if (worker) {
        try { await worker.terminate(); } catch (e) { /* ignore */ }
      }
      ocrRecognizeBtn.disabled = false;
    }
  }

  function renderManualLevelOptions(preferUsable) {
    const rows = collectRows();
    const usableLevels = getUsableLevels(rows.map((r) => r.level));
    const defaultValue = usableLevels.length ? usableLevels[usableLevels.length - 1] : MATERIAL_LEVELS[0];
    const currentVal = parseNonNegativeInt(manualLevelSelect.value, 10);

    manualLevelSelect.innerHTML = "";
    MATERIAL_LEVELS.forEach((lv) => {
      const option = document.createElement("option");
      option.value = String(lv);
      option.textContent = `Level ${lv}`;
      manualLevelSelect.appendChild(option);
    });

    if (preferUsable) {
      manualLevelSelect.value = String(defaultValue);
    } else if (MATERIAL_LEVELS.includes(currentVal)) {
      manualLevelSelect.value = String(currentVal);
    } else {
      manualLevelSelect.value = String(defaultValue);
    }
  }

  // --- 材料选择弹窗（每个单元格独立勾选） ---
  const materialModal = document.getElementById("materialModal");
  const materialTbody = document.getElementById("materialTbody");
  const selectAllCheck = document.getElementById("selectAllCheck");
  const modalConfirmBtn = document.getElementById("modalConfirmBtn");
  const modalCancelBtn = document.getElementById("modalCancelBtn");
  const modalClearBtn = document.getElementById("modalClearBtn");
  const pickRow = document.getElementById("pickRow");
  const manualRow = document.getElementById("manualRow");
  const pickMaterialBtn = document.getElementById("pickMaterialBtn");
  const pickStatus = document.getElementById("pickStatus");

  /** 材料类型名称（对应 8 种材料） */
  const MATERIAL_TYPE_KEYS = ["Ingot", "Gem", "Plank", "Paper", "String", "Grain", "Oil", "Meat"];

  /** 用户勾选的材料集合，格式: "level-typeIdx" e.g. "1-0" 表示 Lv.1 的 Ingot */
  let pickedMaterials = new Set();

  /** 构建弹窗表格，每个单元格内嵌复选框 */
  function buildModalTable() {
    materialTbody.innerHTML = "";
    const sortedLevels = MATERIAL_LEVELS.slice().sort((a, b) => a - b);
    sortedLevels.forEach((lv) => {
      const names = MATERIAL_SHORT_NAMES[lv] || MATERIAL_BASE_NAMES.map((_, i) => `Lv${lv}-${MATERIAL_BASE_NAMES[i]}`);
      const levelLabel = `Lv.${lv}`;
      const tr = document.createElement("tr");
      tr.dataset.level = lv;

      // 行复选框
      const rowAllChecked = names.every((_, idx) => pickedMaterials.has(`${lv}-${idx}`));
      const tdCheck = document.createElement("td");
      const rowCb = document.createElement("input");
      rowCb.type = "checkbox";
      rowCb.className = "row-check";
      rowCb.value = lv;
      rowCb.checked = rowAllChecked;
      tdCheck.appendChild(rowCb);

      // 等级
      const tdLevel = document.createElement("td");
      tdLevel.textContent = levelLabel;

      tr.appendChild(tdCheck);
      tr.appendChild(tdLevel);

      // 8 种材料单元格
      for (let i = 0; i < 8; i++) {
        const td = document.createElement("td");
        const cb = document.createElement("input");
        cb.type = "checkbox";
        cb.className = "cell-check";
        cb.dataset.level = lv;
        cb.dataset.idx = i;
        cb.checked = pickedMaterials.has(`${lv}-${i}`);
        td.appendChild(cb);
        td.appendChild(document.createTextNode(" " + names[i]));
        tr.appendChild(td);
      }

      if (rowAllChecked) tr.classList.add("selected");
      materialTbody.appendChild(tr);
    });
  }

  /** 同步全选复选框状态 */
  function syncSelectAll() {
    const allCbs = materialTbody.querySelectorAll(".cell-check");
    const checked = materialTbody.querySelectorAll(".cell-check:checked");
    selectAllCheck.checked = checked.length === allCbs.length;
    selectAllCheck.indeterminate = checked.length > 0 && checked.length < allCbs.length;
  }

  /** 从 DOM 同步 pickedMaterials */
  function syncPickedMaterials() {
    pickedMaterials.clear();
    materialTbody.querySelectorAll(".cell-check:checked").forEach((cb) => {
      pickedMaterials.add(`${cb.dataset.level}-${cb.dataset.idx}`);
    });
    // 同步行选中状态和行复选框
    materialTbody.querySelectorAll("tr").forEach((tr) => {
      const lv = tr.dataset.level;
      const cellCbs = tr.querySelectorAll(".cell-check");
      const rowCb = tr.querySelector(".row-check");
      const rowAll = Array.from(cellCbs).every(cb => cb.checked);
      if (rowCb) rowCb.checked = rowAll;
      tr.classList.toggle("selected", rowAll);
    });
    syncSelectAll();
  }

  // 全选
  selectAllCheck.addEventListener("change", () => {
    const checked = selectAllCheck.checked;
    materialTbody.querySelectorAll(".cell-check").forEach((cb) => {
      cb.checked = checked;
    });
    syncPickedMaterials();
  });

  // 行复选框 → 勾选/取消该行所有材料
  materialTbody.addEventListener("change", (e) => {
    if (e.target.classList.contains("row-check")) {
      const tr = e.target.closest("tr");
      const checked = e.target.checked;
      tr.querySelectorAll(".cell-check").forEach((cb) => {
        cb.checked = checked;
      });
      syncPickedMaterials();
    } else if (e.target.classList.contains("cell-check")) {
      syncPickedMaterials();
    }
  });

  modalConfirmBtn.addEventListener("click", () => {
    syncPickedMaterials();
    if (pickedMaterials.size === 0) {
      pickStatus.className = "hint";
      pickStatus.textContent = "未选择任何材料";
    } else {
      // 统计每个材料类型中被勾选的等级数
      const typeCounts = {};
      pickedMaterials.forEach((key) => {
        const idx = key.split("-")[1];
        typeCounts[idx] = (typeCounts[idx] || 0) + 1;
      });
      const parts = Object.entries(typeCounts)
        .sort((a, b) => Number(a[0]) - Number(b[0]))
        .map(([idx, count]) =>
          `<div class="mat-type-card"><span class="mat-card-label">${MATERIAL_TYPE_KEYS[idx]}</span><span class="mat-card-count">×${count}</span></div>`
        );
      pickStatus.className = "hint";
      pickStatus.innerHTML = `<div class="pick-header">已选 <strong>${pickedMaterials.size}</strong> 项材料</div><div class="pick-grid">${parts.join("")}</div>`;
    }
    materialModal.hidden = true;
  });

  modalCancelBtn.addEventListener("click", () => {
    materialModal.hidden = true;
  });

  modalClearBtn.addEventListener("click", () => {
    pickedMaterials.clear();
    // 清空后重新构建表格以反映清空状态
    buildModalTable();
    syncPickedMaterials();
  });

  pickMaterialBtn.addEventListener("click", () => {
    buildModalTable();
    materialModal.hidden = false;
  });

  function syncModeHint(preferUsable) {
    const rows = collectRows();
    const usableLevels = getUsableLevels(rows.map((r) => r.level));
    if (!usableLevels.length) {
      modeHint.textContent = "当前 Level 太低，无法使用任何已记录材料等级。";
    } else {
      const highest = usableLevels[usableLevels.length - 1];
      modeHint.innerHTML = `当前可用最高材料等级: <strong>Lv.${highest}</strong>`;
    }

    const isManual = modeSelect.value === "manual";
    manualLevelSelect.disabled = !isManual;
    renderManualLevelOptions(Boolean(preferUsable && isManual));
  }

  // --- 事件绑定 ---

  // 粘贴图片 → 保存文件 + 直接识别并应用
  ocrCard.addEventListener("paste", async (e) => {
    if (!e.clipboardData) return;
    const items = e.clipboardData.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.kind === "file" && item.type.startsWith("image/")) {
        e.preventDefault();
        const file = item.getAsFile();
        if (file) {
          pastedOcrFile = file;
          ocrImageInput.value = "";
          await recognizeAndApplyOcr(file);
        }
        break;
      }
    }
  });

  // 文件选择 → 直接识别并应用
  ocrImageInput.addEventListener("change", async () => {
    const file = ocrImageInput.files && ocrImageInput.files[0];
    if (file) {
      pastedOcrFile = null; // 文件选择器优先
      await recognizeAndApplyOcr(file);
    }
  });

  function syncModeVisibility() {
    const mode = modeSelect.value;
    manualRow.hidden = mode !== "manual";
    pickRow.hidden = mode !== "pick";
  }

  modeSelect.addEventListener("change", () => {
    syncModeVisibility();
    syncModeHint(true);
  });
  rowInputs.forEach((item) => {
    item.level.addEventListener("input", () => syncModeHint(false));
  });

  ocrRecognizeBtn.addEventListener("click", () => {
    ocrImageInput.click();
  });

  function hideOriginalView() {
    originalCanvasWrap.hidden = true;
    showOriginalBtn.textContent = "显示原图";
  }

  function hidePreprocView() {
    preprocCanvasWrap.hidden = true;
    showPreprocessedBtn.textContent = "显示预处理";
  }

  function getOcrSourceFile() {
    const fromInput = ocrImageInput.files && ocrImageInput.files[0];
    if (fromInput) return fromInput;
    if (pastedOcrFile) return pastedOcrFile;
    return null;
  }

  showOriginalBtn.addEventListener("click", async () => {
    const file = getOcrSourceFile();
    if (!file) {
      preprocHint.textContent = "请先选择或粘贴截图文件";
      return;
    }
    if (!originalCanvasWrap.hidden) {
      // 已显示 → 收起
      hideOriginalView();
      preprocHint.textContent = "";
      return;
    }
    try {
      const img = await loadImageFromFile(file);
      originalCanvas.width = img.width;
      originalCanvas.height = img.height;
      const ctx = originalCanvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      hidePreprocView();
      originalCanvasWrap.hidden = false;
      showOriginalBtn.textContent = "收起原图";
      originalCanvasWrap.scrollIntoView({ behavior: "smooth", block: "center" });
      preprocHint.textContent = `已显示原图 (${img.width}×${img.height})`;
    } catch (err) {
      preprocHint.textContent = `原图加载失败: ${err?.message || "未知错误"}`;
    }
  });

  showPreprocessedBtn.addEventListener("click", async () => {
    const file = getOcrSourceFile();
    if (!file) {
      preprocHint.textContent = "请先选择或粘贴截图文件";
      return;
    }
    if (!preprocCanvasWrap.hidden) {
      // 已显示 → 收起
      hidePreprocView();
      preprocHint.textContent = "";
      return;
    }
    try {
      const processed = await buildOcrCanvas(file);
      preprocCanvas.width = processed.width;
      preprocCanvas.height = processed.height;
      const ctx = preprocCanvas.getContext("2d");
      ctx.drawImage(processed, 0, 0);
      hideOriginalView();
      preprocCanvasWrap.hidden = false;
      showPreprocessedBtn.textContent = "收起预处理";
      preprocCanvasWrap.scrollIntoView({ behavior: "smooth", block: "center" });
      preprocHint.textContent = `已显示预处理图像 (${processed.width}×${processed.height})`;
    } catch (err) {
      preprocHint.textContent = `预处理失败: ${err?.message || "未知错误"}`;
    }
  });

  // ===== Toast 提示 =====
  function showToast(msg) {
    let el = document.getElementById("toastEl");
    if (!el) {
      el = document.createElement("div");
      el.id = "toastEl";
      el.className = "toast";
      document.body.appendChild(el);
    }
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(el._timer);
    el._timer = setTimeout(() => el.classList.remove("show"), 2500);
  }

  /** 从 pickedMaterials 更新 pickStatus 摘要 */
  function updatePickSummary() {
    if (pickedMaterials.size === 0) {
      pickStatus.className = "hint";
      pickStatus.textContent = "未选择任何材料";
      return;
    }
    const typeCounts = {};
    pickedMaterials.forEach((key) => {
      const idx = key.split("-")[1];
      typeCounts[idx] = (typeCounts[idx] || 0) + 1;
    });
    const parts = Object.entries(typeCounts)
      .sort((a, b) => Number(a[0]) - Number(b[0]))
      .map(([idx, count]) =>
        `<div class="mat-type-card"><span class="mat-card-label">${MATERIAL_TYPE_KEYS[idx]}</span><span class="mat-card-count">×${count}</span></div>`
      );
    pickStatus.className = "hint";
    pickStatus.innerHTML = `<div class="pick-header">已选 <strong>${pickedMaterials.size}</strong> 项材料</div><div class="pick-grid">${parts.join("")}</div>`;
  }

  // ===== 重置按钮 =====
  resetBtn.addEventListener("click", () => {
    rowInputs.forEach((item) => {
      item.level.value = "1";
      item.limit.value = "10";
      item.max.value = "30";
    });
    saveFormToStorage();
  });

  // ===== 复制链接按钮 =====
  copyLinkBtn.addEventListener("click", () => {
    const data = compressFormData();
    const url = `${location.protocol}//${location.host}${location.pathname}#${data}`;
    navigator.clipboard.writeText(url).then(() => {
      showToast("链接已复制到剪贴板");
    }).catch(() => {
      // fallback
      const inp = document.createElement("input");
      inp.value = url;
      document.body.appendChild(inp);
      inp.select();
      document.execCommand("copy");
      document.body.removeChild(inp);
      showToast("链接已复制到剪贴板");
    });
  });

  // ===== 表单数据存储 =====
  function saveFormToStorage() {
    const cells = rowInputs.map(item => ({
      level: item.level.value,
      limit: item.limit.value,
      max: item.max.value,
    }));
    try {
      localStorage.setItem("mount_form_data", JSON.stringify(cells));
    } catch (_) { /* ignore quota errors */ }
  }

  function loadFormFromStorage() {
    try {
      const raw = localStorage.getItem("mount_form_data");
      if (!raw) return false;
      const cells = JSON.parse(raw);
      if (!Array.isArray(cells) || cells.length !== 8) return false;
      cells.forEach((cell, i) => {
        rowInputs[i].level.value = cell.level ?? "1";
        rowInputs[i].limit.value = cell.limit ?? "10";
        rowInputs[i].max.value = cell.max ?? "30";
      });
      return true;
    } catch (_) { return false; }
  }

  // ===== 材料选择缓存 (localStorage) =====
  function savePickedMaterialsToStorage() {
    try {
      localStorage.setItem("mount_picked_materials", JSON.stringify([...pickedMaterials]));
    } catch (_) { /* ignore */ }
  }

  function loadPickedMaterialsFromStorage() {
    try {
      const raw = localStorage.getItem("mount_picked_materials");
      if (!raw) return;
      const arr = JSON.parse(raw);
      if (Array.isArray(arr)) {
        arr.forEach(k => pickedMaterials.add(String(k)));
        updatePickSummary();
      }
    } catch (_) { /* ignore */ }
  }

  // 拦截 pick 相关操作，保存到 storage
  const origPickSet = pickedMaterials.add.bind(pickedMaterials);
  pickedMaterials.add = function (val) {
    origPickSet(val);
    savePickedMaterialsToStorage();
  };
  const origPickDelete = pickedMaterials.delete.bind(pickedMaterials);
  pickedMaterials.delete = function (val) {
    origPickDelete(val);
    savePickedMaterialsToStorage();
  };
  const origPickClear = pickedMaterials.clear.bind(pickedMaterials);
  pickedMaterials.clear = function () {
    origPickClear();
    savePickedMaterialsToStorage();
  };

  // ===== URL hash 压缩 / 解压 =====
  /**
   * 使用纯 hex 编码（0-9a-f），完全避免字符编码问题。
   * 每个值 2 位 hex:
   *   Level: 1-115  → 01-73
   *   Limit: 0-99   → 00-63
   *   Max:   0-99   → 00-63
   * 8 × 3 × 2 = 48 hex 字符
   */
  function compressFormData() {
    const rows = collectRows();
    const parts = [];
    for (const r of rows) {
      parts.push(
        (r.level || 1).toString(16).padStart(2, "0"),
        (r.limit || 10).toString(16).padStart(2, "0"),
        (r.max || 30).toString(16).padStart(2, "0"),
      );
    }
    return parts.join("");
  }

  function decompressFormData(encoded) {
    try {
      // 需要至少 48 hex 字符（24 个字节）
      if (encoded.length < 48) return null;
      const rows = [];
      for (let i = 0; i < 48; i += 6) {
        rows.push({
          level: Math.max(1, Math.min(255, Number.parseInt(encoded.slice(i, i + 2), 16))),
          limit: Math.max(0, Math.min(255, Number.parseInt(encoded.slice(i + 2, i + 4), 16))),
          max:   Math.max(0, Math.min(255, Number.parseInt(encoded.slice(i + 4, i + 6), 16))),
        });
      }
      return rows;
    } catch (_) {
      return null;
    }
  }

  // ===== 从 URL hash 恢复数据 =====
  function restoreFromHashIfPresent() {
    const hash = location.hash.replace(/^#/, "");
    if (!hash) return false;
    const rows = decompressFormData(hash);
    if (!rows || rows.length !== 8) return false;
    rows.forEach((r, i) => {
      rowInputs[i].level.value = String(r.level);
      rowInputs[i].limit.value = String(r.limit);
      rowInputs[i].max.value = String(r.max);
    });
    // 清除 hash 避免刷新时重复加载
    history.replaceState(null, "", location.pathname + location.search);
    return true;
  }

  // ===== 自动保存表单改动到 storage =====
  rowInputs.forEach((item) => {
    [item.level, item.limit, item.max].forEach((el) => {
      el.addEventListener("change", saveFormToStorage);
    });
  });

  // ===== 加载数据 =====
  if (!restoreFromHashIfPresent()) {
    loadFormFromStorage();
  }
  loadPickedMaterialsFromStorage();

  solveBtn.addEventListener("click", () => {
    const rows = collectRows();
    const check = validateRows(rows);
    if (!check.ok) {
      alert(check.message);
      return;
    }

    const levels = rows.map((r) => r.level);
    const limits = rows.map((r) => r.limit);
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
    } else if (modeSelect.value === "pick") {
      if (pickedMaterials.size === 0) {
        alert("请先点击「选择材料」勾选可获取的材料。");
        return;
      }

      // 为每种材料类型选取最高可用等级
      // pickedMaterials 格式: "level-idx"，例如 "10-0" 表示 Lv.10 的 Ingot
      const bestLevelForType = {};
      pickedMaterials.forEach((key) => {
        const [lvStr, idxStr] = key.split("-");
        const lv = Number.parseInt(lvStr, 10);
        const idx = Number.parseInt(idxStr, 10);
        if (!usableLevels.includes(lv)) return;
        if (!bestLevelForType[idx] || lv > bestLevelForType[idx]) {
          bestLevelForType[idx] = lv;
        }
      });

      // 检查是否有属性对应的所有材料类型均未被勾选
      const typesPicked = Object.keys(bestLevelForType).map(Number);
      const missingAttrs = [];
      for (let j = 0; j < 8; j++) {
        // 属性 j 可由哪些材料类型提供？
        // 遍历所有材料类型 i, 若任一勾选类型的该属性值 >0 则 OK
        let canSupply = false;
        // 先看已勾选类型的最高等级是否能提供该属性
        for (const typeIdx of typesPicked) {
          const lv = bestLevelForType[typeIdx];
          const matrix = MATERIAL_LEVEL_DATA[lv];
          if (matrix && matrix[typeIdx] && matrix[typeIdx][j] > 0) {
            canSupply = true;
            break;
          }
        }
        if (!canSupply) {
          // 再检查是否还有任何等级的该类型材料被勾选（有勾选但属性0也正常）
          // 该属性完全无任何材料可提供
          missingAttrs.push(ATTR_NAMES[j]);
        }
      }

      if (missingAttrs.length === 8) {
        alert("未勾选任何可提供点数增益的材料，无法计算。");
        return;
      }

      if (missingAttrs.length > 0) {
        alert(`以下属性无任何已勾选的材料能提供点数: ${missingAttrs.join(", ")}\n请勾选对应材料后重试。`);
        return;
      }

      // 构造自定义矩阵：行 i 使用 bestLevelForType[i] 等级的数据
      const customMatrix = [];
      for (let i = 0; i < 8; i++) {
        const lv = bestLevelForType[i];
        if (lv !== undefined) {
          customMatrix.push(MATERIAL_LEVEL_DATA[lv][i]);
        } else {
          // 未勾选该类型 → 全零行
          customMatrix.push(Array(8).fill(0));
        }
      }

      result = solveMinimumWithinBounds(minNeed, maxNeed, customMatrix);
      if (result) {
        selectedLevel = null; // 混合等级，不显示单一等级
      }
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
      bestCountEl.textContent = "无可行解";
      selectedLevelEl.textContent = "无";
      timeEstimateEl.textContent = "无";
      return;
    }

    // 构建材料名称列表（pick 模式使用最佳等级的混合，否则使用单一等级）
    let materialNames;
    if (modeSelect.value === "pick") {
      const bft = {};
      pickedMaterials.forEach((key) => {
        const [lvStr, idxStr] = key.split("-");
        const lv = Number.parseInt(lvStr, 10);
        const idx = Number.parseInt(idxStr, 10);
        if (!usableLevels.includes(lv)) return;
        if (!bft[idx] || lv > bft[idx]) bft[idx] = lv;
      });
      materialNames = [];
      for (let i = 0; i < 8; i++) {
        if (bft[i] !== undefined) {
          const names = getMaterialNamesForLevel(bft[i]);
          materialNames.push(names[i]);
        } else {
          materialNames.push("（未选择）");
        }
      }
      const usedLevels = Object.values(bft).filter(Boolean);
      const levelStr = usedLevels.length ? [...new Set(usedLevels)].sort((a, b) => a - b).join("/") : "无";
      selectedLevelEl.textContent = `${levelStr} (混合)`;
    } else {
      materialNames = getMaterialNamesForLevel(selectedLevel);
      selectedLevelEl.textContent = `Level ${selectedLevel}`;
    }

    bestCountEl.textContent = `${result.bestCount}`;

    const timeEstimate = modeSelect.value === "pick" ? null : estimateFeedingTime(limits, selectedLevel, result.bestChoice);
    if (timeEstimate !== null) {
      timeEstimateEl.textContent = formatMinutes(timeEstimate);
    } else {
      timeEstimateEl.textContent = "无";
    }

    usageBody.innerHTML = "";
    materialNames.forEach((name, i) => {
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

    const overflows = rows.map((row, idx) => row.limit + result.finalAdd[idx] - row.max);
    overflowGrid.innerHTML = overflows.map((v, idx) => {
      let cls = "color-ok";
      if (v > 0 && v <= 5) cls = "color-warn";
      else if (v > 5) cls = "color-danger";
      return `<div class="overflow-badge ${cls}"><span class="badge-attr">${ATTR_NAMES[idx]}</span><span class="badge-val">${v > 0 ? "+" : ""}${v}</span></div>`;
    }).join("");
  });

  // 初始化材料等级下拉与模式可见性
  syncModeVisibility();
  renderManualLevelOptions(true);
  syncModeHint(false);
}

(function main() {
  initNeedPage();
})();