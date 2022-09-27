<script>
import SortButton from "./SortButton.svelte";
import Nav from "./Nav.svelte";

import {getStore} from "./store.mjs";
import {simulate} from "./simulator.mjs";

export let weapons, storeKey;

const NAME_TO_WEAPON = Object.fromEntries(weapons.map(w => [w.name, w]));

const atk = getStore(`${storeKey}/atk`, 700);
const def = getStore(`${storeKey}/def`, 400);
const compareList = getStore(`${storeKey}/compareList`, weapons.map(w => [w.name]));
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

$: {
  result = simulate($atk, $def, combos);
}

$: {
  calcedCompareList = $compareList.map((names, i) => {
    const weapons = names.map(n => NAME_TO_WEAPON[n]);
    const result = simulate($atk, $def, weapons);
    return {
      name: names.join("+"),
      cost: result.summary.cost,
      damage: result.summary.damage,
      cp: result.summary.cp,
      index: i
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

</script>

<h1>Zold:Out Damage Calculator</h1>

<Nav />

<div class="base-info">
  <span>力量</span>
  <input type="number" bind:value={$atk}>
  <span>防禦</span>
  <input type="number" bind:value={$def}>
</div>

<h2>Combo</h2>

<div class="combo-table">
  <span class="chead">Weapon</span>
  <span class="chead">Cost</span>
  <span class="chead">Damage</span>
  <span class="chead">CP</span>
  <span></span>
  {#each combos as weapon, i}
    <select bind:value={weapon}>
      {#each weapons as w}
        <option value={w}>{w.name}</option>
      {/each}
    </select>
    <span>
      {weapon.cost}
    </span>
    <span>
      {result.stages[i]?.damage.toFixed(0)}
    </span>
    <span>
      {((result.stages[i]?.damage || 0) / weapon.cost).toFixed(0)}
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

<div class="compare-list">
  <SortButton field="name" text="Name" bind:method={$sortMethod} />
  <SortButton field="cost" text="Cost" bind:method={$sortMethod} />
  <SortButton field="damage" text="Damage" bind:method={$sortMethod} />
  <SortButton field="cp" text="CP" bind:method={$sortMethod} />
  <span></span>
  {#each sortedCompareList as row}
    <span>{row.name}</span>
    <span>{row.cost}</span>
    <span>{row.damage.toFixed(0)}</span>
    <span>{row.cp.toFixed(0)}</span>
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
}
:global(input), :global(button), :global(select) {
  font-size: .95em;
  font-family: inherit;
  padding: .3em .6em;
  vertical-align: middle;
}
.base-info {
  display: grid;
  grid-template-columns: max-content 1fr;
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
.combo-table > * {
  padding: .3em .6em;
}
.chead {
  background: #eee;
  font-weight: bold;
}
.compare-list {
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(5, auto);
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
