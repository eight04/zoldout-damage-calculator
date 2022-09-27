/* eslint-env browser */

import App from "./App.svelte";
import sword from "./weapons/sword.mjs";

export default new App({
  target: document.body,
  props: {
    weapons: sword,
    storeKey: "sword"
  }
});
