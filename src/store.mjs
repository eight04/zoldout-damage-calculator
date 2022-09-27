/* eslint-env browser */

import {writable} from "svelte/store";

const key = "zoldout-damage-calculator";
const cache = new Map;

export function getStore(name, default_) {
  if (cache.has(name)) return cache.get(name);
  
  const store = writable(
    parseJSON(localStorage.getItem(`${key}/${name}`)) ??
    default_
  );
  store.subscribe(value => 
    localStorage.setItem(`${key}/${name}`, JSON.stringify(value))
  );
  
  cache.set(name, store);
  return store;
}

function parseJSON(text) {
  try {
    return JSON.parse(text);
  } catch {
    // pass
  }
}
