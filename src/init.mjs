/* eslint-env browser */

import App from "./lib/App.svelte";
import {buff, lightningWeapons} from "./weapons/index.mjs";

export default function init(weapons, storeKey) {
  return new App({
    target: document.body,
    props: {
      weapons: [...new Set([...weapons, ...buff])],
      lightningWeapons,
      storeKey
    }
  });
}
