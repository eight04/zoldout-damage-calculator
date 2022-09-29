/* eslint-env browser */

import App from "./lib/App.svelte";
import weapons from "./weapons/tome.mjs";

export default new App({
  target: document.body,
  props: {
    weapons,
    storeKey: "tome"
  }
});
