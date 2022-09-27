<script>
import SortButton from "./SortButton.svelte";

import weapons from "./sword.mjs";
import {getStore} from "./store.mjs";
import {simulate} from "./simulator.mjs";

const NAME_TO_WEAPON = Object.fromEntries(weapons.map(w => [w.name, w]));

const atk = getStore("atk", 700);
const def = getStore("def", 400);
const compareList = getStore("compareList", []);
const sortMethod = getStore("sortMethod", {
  field: null,
  dir: 1
});

let combos = [];
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
  calcedCompareList = $compareList.map(names => {
    const weapons = names.map(n => NAME_TO_WEAPON[n]);
    const result = simulate($atk, $def, weapons);
    return {
      name: names.join("+"),
      cost: result.summary.cost,
      damage: result.summary.damage,
      cp: result.summary.cp
    };
  });
}

$: {
  sortedCompareList = calcedCompareList.slice();
  if (sortMethod.field) {
    sortedCompareList.sort((a, b) => {
      let result = a[sortMethod.field] < b[sortMethod.field] ? -1 :
        a[sortMethod.field] > b[sortMethod.field] ? 1 : 0;
      return result * sortMethod.dir;
    });
  }
}

function addCombo() {
  combos.push(weapons[0]);
  combos = combos;
}

function deleteCombo(i) {
  combos.splice(i, 1);
  combos = combos;
}

function addToCompare() {
  $compareList.push(combos.map(w => w.name));
}

</script>

<h1>Zold:Out Damage Calculator</h1>

<div class="base-info">
  <span>力量</span>
  <input type="number" bind:value={$atk}>
  <span>防禦</span>
  <input type="number" bind:value={$def}>
</div>

<button on:click={addCombo}>Add weapon</button>
<div class="combo-table">
  <span>Weapon</span>
  <span>Cost</span>
  <span>Damage</span>
  <span>CP</span>
  <span>Delete</span>
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
    <button on:click={() => deleteCombo(i)}>x</button>
  {/each}
  <span>Summary</span>
  <span>{result.summary.cost}</span>
  <span>{result.summary.damage.toFixed(0)}</span>
  <span>{result.summary.cp.toFixed(0)}</span>
</div>

<button on:click={addToCompare}>Add to compare list</button>

<div class="compare-list">
  <SortButton field="name" text="Name" bind:method={$sortMethod} />
  <SortButton field="cost" text="Cost" bind:method={$sortMethod} />
  <SortButton field="damage" text="Damage" bind:method={$sortMethod} />
  <SortButton field="cp" text="CP" bind:method={$sortMethod} />
  {#each sortedCompareList as row}
    <span>{row.name}</span>
    <span>{row.cost}</span>
    <span>{row.damage}</span>
    <span>{row.cp}</span>
  {/each}
</div>

<footer>
  <a href="https://github.com/eight04/zoldout-damage-calculator">zoldout-damage-calculator</a>
</footer>

<style>
:global(body) {
  font-size: 16px;
  font-family: sans-serif;
  margin: 2em;
}
:global(input), :global(button), :global(select) {
  font-size: .95em;
  font-family: inherit;
  padding: .3em .6em;
}
footer {
  text-align: right;
  margin: 1.2em;
}
</style>
