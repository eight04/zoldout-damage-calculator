import {writeFile, readFile} from "fs/promises";
import gs from "google-spreadsheet";

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
      rate: stage.drops[item] / 20
    });
  }
}

for (const list of items.values()) {
  list.sort((a, b) => b.rate - a.rate);
}

const goodsInEvent = [...items.entries()].filter(([, list]) => /普通/.test(list[0].stage.name));
const goodsTable = goodsInEvent.map(([item, list]) => [item, list[0].stage.name, dropsToLine( list[0].stage.drops)]);
goodsTable.unshift(["素材", "關卡", "掉落"]);

await writeFile(new URL("README.md", import.meta.url), `
# Zold:Out Drop Table (主線[普通]體力減半)

<table>
${goodsInEvent.map(([item, list]) => 
  `<tr><td>${item}</td><td>
<details> <summary>[${list[0].rate.toFixed(2)}] [${list[0].stage.name}] ${dropsToLine(list[0].stage.drops)}</summary>
<table><tr><th>Rate</th> <th>Stage</th> <th>Drops</th> </tr>
${list.map(l => `
<tr>
<td>${l.rate.toFixed(2)}</td>
<td>${l.stage.name}</td>
<td>${dropsToLine(l.stage.drops)}</td>
</tr>`).join("\n")}
</table>
Used by: ${material[item] ? material[item].join("/") : "None"}

</details> </td></tr>`).join("\n")}
</table>
`);

function aToIndex(s) {
  s = s.toLowerCase();
  let index = 0;
  for (let i = 0; i < s.length; i++) {
    index = index * 26 + s.charCodeAt(i) - 96;
  }
  return index - 1;
}

function dropsToLine(drops) {
  return Object.entries(drops).map(([key, value]) => `${value}${key}`).join("/");
}

async function loadStages(doc) {
  try {
    const s = await readFile(new URL("stages.json", import.meta.url), "utf8");
    return JSON.parse(s);
  } catch (err) {
    // pass
  }
  const sheet = doc.sheetsByTitle["素材"];
  await sheet.loadCells("A4:C");

  const stages = [];

  for (let i = 4 - 1; i < sheet.rowCount; i++) {
    const stage = {
      name: "",
      drops: {}
    };
    const name = sheet.getCell(i, aToIndex("A"));
    console.log(name.value);
    stage.name = name.value;

    for (const s of ["B", "C"].map(key => sheet.getCell(i, aToIndex(key)).value)) {
      if (/null/i.test(s)) continue;
      for (const item of s.split("/").map(i => i.trim())) {
        let [, n, name] = item.match(/^(\d*)(.*)/);
        if (stage.drops[name]) {
          throw new Error(`duplicate item ${stage.name}, ${name}`);
        }
        stage.drops[name] = n ? Number(n) : 1;

        if (/普通/.test(stage.name)) {
          stage.drops[name] *= 2;
        }
      }
    }

    stages.push(stage);
  }
  await writeFile(new URL("stages.json", import.meta.url), JSON.stringify(stages, null, 2));

  return stages;
}

async function loadMaterial(doc) {
  const sheet = doc.sheetsByTitle["武器"];
  await sheet.loadCells("A2:B");

  const result = {};

  for (let i = 2 - 1; i < sheet.rowCount; i++) {
    const weapon = sheet.getCell(i, aToIndex("A")).value;
    for (const mat of sheet.getCell(i, aToIndex("B")).value.split("/").map(i => i.trim())) {
      if (!result[mat]) {
        result[mat] = [];
      }
      result[mat].push(weapon);
    }
  }
  await writeFile(new URL("material.json", import.meta.url), JSON.stringify(result, null, 2));

  return result;
}
