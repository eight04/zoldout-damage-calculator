import {writeFile, readFile} from "fs/promises";
import gs from "google-spreadsheet";

const STAMINA = {
  "普通": {
    "1-1": 12,
    "1-6": 14,
    "1-11": 16,
    "2-4": 17,
    "2-14": 18,
    "3-8": 19,
    "3-15": 20
  },
  "困難": {
    "1-1": 18,
    "1-9": 19,
    "2-2": 20,
  },
};

const DIFFICULTY = {
  n: "普通",
  easy: "普通",
  h: "困難",
  hard: "困難",
  nm: "惡夢",
  nightmare: "惡夢"
};

const doc = new gs.GoogleSpreadsheet("1CeTO-Bae2xNGrAtTo1zAb81joirxu4CGnrdVieXQbfU");
doc.useApiKey("AIzaSyBmF9PBdznx-Dpxa2YOWWK6gcThwPFpLDM");
await doc.loadInfo();

const stages = await loadStages(doc);

const material = await loadMaterial(doc);

const items = new Map;

for (const stage of stages) {
  for (const item in stage.drops) {
    if (!items.has(item)) {
      items.set(item, []);
    }
    items.get(item).push({
      stage,
      rate: stage.drops[item] / getStageStamina(stage)
    });
  }
}

for (const list of items.values()) {
  list.sort((a, b) => b.rate - a.rate);
}

const sortedItems = [...items.entries()]
  .map(([name, list]) => ({name, list}))
  .sort((a, b) => getDifficulty(a.list[0].stage.name) - getDifficulty(b.list[0].stage.name));

await writeFile(new URL("README.md", import.meta.url), `
# Zold:Out Drop Table

${drawTable(sortedItems)}
`);

function getStageStamina(stage) {
  const difficulty = stage.name.slice(0, 2);
  const index = stage.name.slice(2);
  if (difficulty == "惡夢") return 20;
  const map = STAMINA[difficulty];
  let result;
  for (const key in map) {
    if (key.localeCompare(index, undefined, {numeric: true}) > 0) break;
    result = map[key];
  }
  if (difficulty === "普通") {
    result = Math.floor(result / 2);
  }
  return result;
}

function getDifficulty(s) {
  if (/普通/.test(s)) {
    return 0;
  }
  if (/困難/.test(s)) {
    return 1;
  }
  return 2;
}

function drawTable(items) {
  return `<table>
${items.map(({name, list}) => 
  `<tr><td>${name}</td><td>
<details> <summary>[${list[0].rate.toFixed(2)}] [${list[0].stage.name}] ${dropsToLine(list[0].stage.drops)}</summary>
<table><tr><th>Rate</th> <th>Stage</th> <th>Drops</th> </tr>
${list.map(l => `
<tr>
<td>${l.rate.toFixed(2)}</td>
<td>${l.stage.name}</td>
<td>${dropsToLine(l.stage.drops)}</td>
</tr>`).join("\n")}
</table>
Used by: ${material[name] ? material[name].join("/") : "None"}

</details> </td></tr>`).join("\n")}
</table>`;
}

function aToIndex(s) {
  s = s.toLowerCase();
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    index = index * 26 + s.charCodeAt(i) - 96;
  }
  return index - 1;
}

function dropsToLine(drops) {
  return Object.entries(drops).map(([key, value]) => `${value.toFixed(1)}${key}`).join("/");
}

function formatName(s) {
  const [, d, m] = s.match(/^(n|h|NM|easy|hard|nightmare)-(.*)/i);
  return `${DIFFICULTY[d.toLowerCase()]}${m}`;
}

async function loadStagesFromSilverWind() {
  const sheet = objectGet(doc.sheetsByTitle, /^素材/);
  await sheet.loadCells("A4:E");

  const stages = [];

  for (let i = 4 - 1; i < sheet.rowCount; i++) {
    const stage = {
      name: "",
      drops: {}
    };
    const name = sheet.getCell(i, aToIndex("A"));
    stage.name = formatName(name.value);

    for (const s of ["B", "E"].map(key => sheet.getCell(i, aToIndex(key)).value)) {
      if (/null/i.test(s)) continue;
      for (const item of s.split("/").map(i => i.trim())) {
        let [, n, name] = item.match(/^(\d*)(.*)/);
        if (stage.drops[name]) {
          throw new Error(`duplicate item ${stage.name}, ${name}`);
        }
        stage.drops[name] = n ? Number(n) : 1;
      }
    }

    stages.push(stage);
  }

  return stages;
}

async function loadStagesFromEight(stages) {
  const doc = new gs.GoogleSpreadsheet("12CqUiGojYOfVL-CZBvMgq4EAGumMHsbmYmgagBWAdMk");
  doc.useApiKey("AIzaSyBmF9PBdznx-Dpxa2YOWWK6gcThwPFpLDM");
  await doc.loadInfo();
  for (const stage of stages) {
    let sheet;
    const [, lab, sup] = /^(\D+)(.+)/.exec(stage.name);
    const keys = [sup + lab, lab === "普通" ? sup : undefined].filter(Boolean);
    for (const key of keys) {
      if (doc.sheetsByTitle[key]) {
        sheet = doc.sheetsByTitle[key];
        break;
      }
    }
    if (!sheet) continue;

    console.log(stage.name);
    await handle429(() => sheet.loadCells("A1:2"));
    const map = new Map;
    const rMap = new Map;
    for (let i = 0; i < sheet.columnCount; i++) {
      const key = sheet.getCell(0, i).value;
      const value = sheet.getCell(1, i).value;
      map.set(key, value);
      rMap.set(value, key);
    }
    console.log(rMap);
    const ap = map.get("體力");

    for (const key in stage.drops) {
      if (rMap.has(key)) {
        stage.drops[key] = rMap.get(key) * ap;
      }
    }
  }
}

// handle axios 429 error
async function handle429(callback) {
  for (;;) {
    try {
      return await callback();
    } catch (e) {
      if (e.response?.status === 429) {
        console.log("429, retrying...");
        await new Promise(resolve => setTimeout(resolve, 60 * 1000));
      } else {
        throw e;
      }
    }
  }
}

async function loadStages() {
  try {
    const s = await readFile(new URL("stages.json", import.meta.url), "utf8");
    return JSON.parse(s);
  } catch (err) {
    // pass
  }
  const stages = await loadStagesFromSilverWind();
  await loadStagesFromEight(stages);
  await writeFile(new URL("stages.json", import.meta.url), JSON.stringify(stages, null, 2));
  return stages;
}

async function loadMaterial(doc) {
  const sheet = objectGet(doc.sheetsByTitle, /^武器/);
  await sheet.loadCells("A2:D");

  const result = {};

  for (let i = 2 - 1; i < sheet.rowCount; i++) {
    const weapon = sheet.getCell(i, aToIndex("A")).value;
    for (const mat of sheet.getCell(i, aToIndex("D")).value.split("/").map(i => i.trim())) {
      if (!result[mat]) {
        result[mat] = [];
      }
      result[mat].push(weapon);
    }
  }
  await writeFile(new URL("material.json", import.meta.url), JSON.stringify(result, null, 2));

  return result;
}

function objectGet(obj, s) {
  for (const key in obj) {
    if (s.test(key)) return obj[key];
  }
}
