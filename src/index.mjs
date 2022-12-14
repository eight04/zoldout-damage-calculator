/* eslint-env browser */

import App from "./lib/App.svelte";
import sword from "./weapons/sword.mjs";
import {buff} from "./weapons/tome.mjs";

export default new App({
  target: document.body,
  props: {
    weapons: [...sword, ...buff],
    storeKey: "sword"
  }
});
