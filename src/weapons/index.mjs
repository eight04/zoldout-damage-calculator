import tomes from "./tome.mjs";
import swords from "./sword.mjs";
import bows from "./bow.mjs";
import wands from "./wand.mjs";

const weapons = [...tomes, ...swords, ...bows, ...wands];

export const buff = weapons.filter(w => w.buff && (!w.modLv && !w.atk));
export const lightningWeapons = weapons.filter(w => w.lightning?.time);

