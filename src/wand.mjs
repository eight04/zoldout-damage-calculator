/* eslint-env browser */

import App from "./lib/App.svelte";
import weapons from "./weapons/wand.mjs";
import {buff} from "./weapons/tome.mjs";

export default new App({
  target: document.body,
  props: {
    weapons: [...weapons, ...buff],
    storeKey: "wand"
  }
});
