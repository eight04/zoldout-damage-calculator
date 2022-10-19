<script>
import SortButton from "./SortButton.svelte";
import Nav from "./Nav.svelte";

import {currentPage} from "./env.mjs";
import {getStore} from "./store.mjs";
import {simulate} from "./simulator.mjs";
import passive from "./passive.mjs";

export let weapons, storeKey;

weapons.unshift({
  name: "移動",
  cost: currentPage === "sword" ? 1 : 2
});

const NAME_TO_WEAPON = Object.fromEntries(weapons.map(w => [w.name, w]));

const atk = getStore(`${storeKey}/atk`, 700);
const def = getStore(`comm/def`, 200);
const int = getStore(`${storeKey}/int`, 700);
const mdef = getStore(`comm/mdef`, 200);
const hp = getStore(`comm/hp`, 2736);

const fireResist = getStore(`comm/fireResist`, 0);
const waterResist = getStore(`comm/waterResist`, 0);
const poisonResist = getStore(`comm/poisonResist`, 0);
const lightningResist = getStore(`comm/lightningResist`, 0);

const fire = getStore(`comm/fire`, false);
const freeze = getStore(`comm/freeze`, false);
const poison = getStore(`comm/poison`, false);
const lightning = getStore(`comm/lightning`, false);

const poisonTurns = getStore(`${storeKey}/poisonTurns`, 99);
const stance = getStore(`${storeKey}/stance`, 0);

const passiveIds = getStore(`${storeKey}/passiveIds`, []);

const compareList = getStore(`${storeKey}/compareList`, []);
const sortMethod = getStore(`${storeKey}/sortMethod`, {
  field: null,
  dir: 1
});

let combos = [weapons[0]];
let result = {
  stages: [],
  summary: {
    damage: 0,
    cost: 0,
    cp: 0
  }
};
let calcedCompareList = [];
let sortedCompareList = [];
let options = {};

$: {
  options = {
    hp: $hp,
    atk: $atk,
    def: $def,
    int: $int,
    mdef: $mdef,

    fire: $fire,
    freeze: $freeze,
    poison: $poison,
    lightning: $lightning,

    poisonTurns: $poisonTurns,
    stance: $stance,

    passiveIds: $passiveIds,

    fireResist: $fireResist,
    waterResist: $waterResist,
    poisonResist: $poisonResist,
    lightningResist: $lightningResist
  };
}

$: {
  result = simulate({
    ...options,
    weapons: combos,
  });
}

$: {
  calcedCompareList = $compareList.map((names, i) => {
    const weapons = names.map(n => NAME_TO_WEAPON[n]);
    const result = simulate({
      ...options,
      weapons,
    });
    return {
      name: names.join("+"),
      index: i,
      ...result.summary
    };
  });
}

$: {
  sortedCompareList = calcedCompareList.slice();
  if ($sortMethod.field) {
    sortedCompareList.sort((a, b) => {
      let result = a[$sortMethod.field] < b[$sortMethod.field] ? -1 :
        a[$sortMethod.field] > b[$sortMethod.field] ? 1 : 0;
      return result * $sortMethod.dir;
    });
  }
}

function addCombo(i) {
  combos.splice(i, 0, combos[i]);
  combos = combos;
}

function deleteCombo(i) {
  if (combos.length <= 1) return;
  combos.splice(i, 1);
  combos = combos;
}

function moveCombo(i, dir) {
  const t = combos[i];
  combos.splice(i, 1);
  combos.splice(i + dir, 0, t);
  combos = combos;
}

function addToCompare() {
  $compareList.push(combos.map(w => w.name));
  $compareList = $compareList;
}

function deleteCompare(i) {
  $compareList.splice(i, 1);
  $compareList = $compareList;
}

function addAllToCompare() {
  const set = new Set($compareList.map(c => c[0]));
  for (const weapon of weapons) {
    if (!set.has(weapon.name)) {
      $compareList.push([weapon.name]);
    }
  }
  $compareList = $compareList;
}
</script>

<h1>Zold:Out Damage Calculator</h1>

<Nav />

<div class="base-info">
  <span>血量</span>
  <input type="number" bind:value={$hp} class="cspan3">
  <span>力量</span>
  <input type="number" bind:value={$atk}>
  <span>防禦</span>
  <input type="number" bind:value={$def}>
  <span>智力</span>
  <input type="number" bind:value={$int}>
  <span>魔防</span>
  <input type="number" bind:value={$mdef}>
  <span>火抗</span>
  <input type="number" bind:value={$fireResist}>
  <span>水抗</span>
  <input type="number" bind:value={$waterResist}>
  <span>毒抗</span>
  <input type="number" bind:value={$poisonResist}>
  <span>雷抗</span>
  <input type="number" bind:value={$lightningResist}>
  <label class="cspan">
    <input type="checkbox" bind:checked={$freeze}>
    <span>敵人凍結</span>
  </label>
  <label class="cspan">
    <input type="checkbox" bind:checked={$fire}>
    <span>敵人著火</span>
  </label>
  <label class="cspan">
    <input type="checkbox" bind:checked={$poison}>
    <span>敵人中毒</span>
  </label>
  <label class="cspan">
    <input type="checkbox" bind:checked={$lightning}>
    <span>敵人觸電</span>
  </label>
  <span>中毒發生次數</span>
  <input type="number" bind:value={$poisonTurns}>
  <span>當前架勢</span>
  <input type="number" bind:value={$stance}>
  {#each passive as p, i}
    {#if currentPage === p.type || p.type === "buff"}
      <label class="cspan">
        <input type="checkbox" bind:group={$passiveIds} value={i}>
        <span>{p.name}</span>
      </label>
    {/if}
  {/each}
</div>

<h2>Combo</h2>

<div class="combo-table">
  <span class="chead">Weapon</span>
  <span class="chead">Cost</span>
  <span class="chead">Damage</span>
  <span class="chead">CP</span>
  <span class="operation"></span>
  {#each combos as weapon, i}
    <select bind:value={weapon}>
      {#each weapons as w}
        <option value={w}>{w.name}</option>
      {/each}
    </select>
    <span>
      {result.stages[i]?.cost}
    </span>
    <span>
      {result.stages[i]?.damage.toFixed(0)}
    </span>
    <span>
      {((result.stages[i]?.damage || 0) / result.stages[i]?.cost).toFixed(0)}
    </span>
    <div class="operation">
      <button on:click={() => moveCombo(i, -1)}>&uarr;</button>
      <button on:click={() => moveCombo(i, 1)}>&darr;</button>
      <button on:click={() => addCombo(i)}>&#x2398;</button>
      <button on:click={() => deleteCombo(i)}>x</button>
    </div>
  {/each}
  <span class="chead">Summary</span>
  <span>{result.summary.cost}</span>
  <span>{result.summary.damage.toFixed(0)}</span>
  <span>{result.summary.cp.toFixed(0)}</span>
</div>

<button on:click={addToCompare}>Add to compare list</button>

<h2>Compare</h2>

<button on:click={addAllToCompare}>Add all weapons</button>
<div class="compare-list">
  <SortButton field="name" text="Name" bind:method={$sortMethod} />
  <SortButton field="cost" text="Cost" bind:method={$sortMethod} />
  <SortButton field="damage" text="Damage" bind:method={$sortMethod} />
  <SortButton field="cp" text="CP" bind:method={$sortMethod} />
  <SortButton field="executeCost" text="斬殺Cost" bind:method={$sortMethod} />
  <span></span>
  {#each sortedCompareList as row}
    <span>{row.name}</span>
    <span>{row.cost}</span>
    <span>{row.damage.toFixed(0)}</span>
    <span>{row.cp.toFixed(0)}</span>
    <span>{row.executeCost}</span>
    <button on:click={() => deleteCompare(row.index)}>x</button>
  {/each}
</div>

<footer>
  <a href="https://github.com/eight04/zoldout-damage-calculator">zoldout-damage-calculator</a>
</footer>

<style>
:global(body) {
  font-size: 16px;
  font-family: sans-serif;
  margin: 2em auto;
  max-width: 600px;
  padding: 0 .6em;
}
:global(input), :global(button), :global(select) {
  font-size: .95em;
  font-family: inherit;
  padding: .3em .6em;
  vertical-align: middle;
}
:global(input[type=number]) {
  width: 100%;
  box-sizing: border-box;
}
.base-info {
  display: grid;
  grid-template-columns: max-content 1fr max-content 1fr;
  align-items: center;
  gap: 1em;
  margin: 1em 0;
}
.combo-table {
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(5, auto);
  align-items: center;
  gap: .2em;
  margin: 1em 0;
}
@media (max-width: 600px) {
  .combo-table {
    grid-template-columns: repeat(4, auto);
  }
  .operation {
    grid-column-end: span 4;
  }
}
.combo-table > * {
  padding: .3em .6em;
}
.chead {
  background: #eee;
  font-weight: bold;
}
.cspan {
  grid-column-end: span 2;
}
.cspan3 {
  grid-column-end: span 3;
}
.compare-list {
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(6, auto);
  align-items: center;
  gap: .2em;
  margin: 1em 0;
}
.compare-list > * {
  padding: .3em .6em;
}
footer {
  text-align: center;
  margin: 1.2em;
}
</style>
