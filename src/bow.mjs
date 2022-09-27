/* eslint-env browser */

import App from "./App.svelte";
import weapons from "./weapons/bow.mjs";

export default new App({
  target: document.body,
  props: {
    weapons,
    storeKey: "bow"
  }
});
