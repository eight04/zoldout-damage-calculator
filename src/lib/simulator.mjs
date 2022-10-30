import allPassive from "./passive.mjs";

// NOTE: we use F++ instead of F
const WEAPON_MOD = {
  F: 0.85,
  E: 1.1,
  D: 1.35,
  C: 1.6,
  B: 1.85,
  A: 2.1,
  S: 2.35,
  SS: 2.6,
  SSS: 2.85,
  Ex: 3.1
};
for (const key in WEAPON_MOD) {
  WEAPON_MOD[`${key}0`] = WEAPON_MOD[key] - 0.1;
}

function getWeaponMod(lv) {
  if (typeof lv === "number") return lv;
  if (WEAPON_MOD[lv]) return WEAPON_MOD[lv];
  throw new Error(`unknown modLv: ${lv}`);
}

class State {
  constructor({
    hp,
    atk, def, int, mdef,
    fireResist, waterResist, poisonResist, lightningResist,
    fire = false, freeze = false, poison = false,
    poisonTurns, stance = 0, maxTargets = 1,
    passive
  }) {
    this.hp = hp;
    this.atk = atk;
    this.def = def;
    this.int = int;
    this.mdef = mdef;

    this.fireResist = fireResist;
    this.waterResist = waterResist;
    this.poisonResist = poisonResist;
    this.lightningResist = lightningResist;

    this.poisonTurns = poisonTurns;
    this.maxTargets = maxTargets;
    this.passive = passive;

    this.damage = 0;
    this.hit = 0;
    this.totalHit = 0;
    this.stance = stance;
    this.totalHit = 0;
    this.buff = [];
    this.targetBuff = [];
    this.targets = 0;

    this.poison = poison ? [{atk: 0, turn: 99}] : [];
    this.lightning = {};
    this.fire = fire;
    this.freeze = freeze;
  }
  getDef(weapon) {
    return getDef(this, weapon);
  }
  getResist(key) {
    const value = this[key] + this.targetBuff.reduce((output, b) => output + (b[key] || 0), 0);
    return (100 - value) / 100;
  }
  getFireResist() {
    return this.getResist("fireResist");
  }
  getWaterResist() {
    return this.getResist("waterResist");
  }
  getPoisonResist() {
    return this.getResist("poisonResist");
  }
  getLightningResist() {
    return this.getResist("lightningResist");
  }
  getInjuryBonus() {
    const bonus = this.targetBuff.reduce((output, b) => output + (b.injuryBonus || 0), 0);
    return (bonus + 100) / 100;
  }
  getWaterAtk(water) {
    return getAtk(this, water);
  }
  getFireAtk(options) {
    return getAtk(this, options);
  }
  getLightningAtk(options) {
    return getAtk(this, options);
  }
  getPoisonAtk(options) {
    return getAtk(this, options);
  }
  processWeapon(weapon) {
    return processWeapon(this, weapon);
  }
}

export function simulate({
  weapons, passiveIds, ...options
}) {
  const passive = allPassive.filter((p, i) => passiveIds.includes(i));
  const stages = [];
  const state = new State({...options, passive});
  calculatePassive(state, null, "beforeAll");
  for (const weapon of weapons) {
    const result = calculateDamage(state, weapon);
    stages.push(result);
  }
  const finalDamage = stages.reduce((o, s) => o + s.damage, 0);
  const finalCost = stages.reduce((o, s) => o + s.cost, 0);
  const executeCost = Math.ceil(state.hp / finalDamage) * finalCost;
  return {
    stages,
    summary: {
      damage: finalDamage,
      cost: finalCost,
      executeCost,
      cp: finalDamage / finalCost
    }
  };
}

function getDef({def, mdef, targetBuff: buff}, {atkType}) {
  if (atkType === "heal") return 0;
  if (atkType === "water" || atkType === "fire" || atkType === "poison" || atkType === "lightning") {
    return 0;
  }
  if (atkType === "magic") {
    return Math.max(mdef + buff.reduce((output, b) => output + (b.mdef || 0), 0), 0);
  }
  return Math.max(def + buff.reduce((output, b) => output + (b.def || 0), 0), 0);
}

function getResist(state, {atkType}) {
  if (atkType === "fire") {
    return state.getFireResist();
  }
  if (atkType === "water") {
    return state.getWaterResist();
  }
  if (atkType === "poison") {
    return state.getPoisonResist();
  }
  if (atkType === "lightning") {
    return state.getLightningResist();
  }
  return 1;
}

function getAtk({atk, int, buff}, {modType, modLv, atk: weaponAtk = 0, bonus = 0}) {
  const charAtk = modType === "int" ?
    int + buff.reduce((output, b) => output + (b.int || 0), 0) :
    atk + buff.reduce((output, b) => output + (b.atk || 0), 0);
  return (weaponAtk + (modLv ? charAtk * getWeaponMod(modLv) : 0))
    * (bonus + 100) / 100;
}

function getPoisonDamage({poison, poisonTurns, poisonResist}) {
  let damage = 0;
  for (const p of poison) {
    if (!p.atk) continue;
    damage += p.atk * Math.min(p.turn, poisonTurns) / p.turn * (100 - poisonResist) / 100;
  }
  return damage;
}

function calculatePassive(state, weapon, key) {
  state.passive.forEach(p => p[key]?.(state, weapon));
  weapon?.[key]?.(state);
}

function processWeapon(state, weapon) {
  state.cost = weapon.casting || weapon.cost;
  state.hit = weapon.hit || (weapon.atk || weapon.modLv ? 1 : 0);
  state.damage = 0;
  state.targets = Math.min(state.maxTargets, weapon.targets || 1);
  const def = getDef(state, weapon);
  const resist = getResist(state, weapon);
  calculatePassive(state, weapon, "beforeWeapon");
  for (let i = 0; i < state.hit; i++) {
    calculatePassive(state, weapon, "beforeHit");
    state.currentHit = i + 1;
    state.totalHit++;
    let atk = getAtk(state, weapon);
    atk *= state.buff.reduce((output, b) => output * (b.bonus ? (b.bonus + 100) / 100 : 1), 1);
    if (weapon.stance?.use === state.stance) {
      atk *= ((weapon.stance.bonus || 0) + 100) / 100;
    }
    state.damage += Math.max(atk - def, 1) * resist * state.getInjuryBonus() * state.targets;
    if (state.lightning?.atk) {
      state.damage += state.lightning.atk * (100 - state.lightningResist) / 100 * state.targets;
    }
    calculatePassive(state, weapon, "afterHit");
  }

  if (state.hit) {
    state.buff = state.buff.map(b => ({...b, times: b.times - 1})).filter(b => b.times > 0);
    state.targetBuff = state.targetBuff.map(b => ({...b, times: b.times - 1})).filter(b => b.times > 0);
  }

  if (weapon.trap) {
    state.damage += Math.max(weapon.trap.atk - def, 1);
  }

  if (weapon.fire && (!weapon.fire.cond || weapon.fire.cond(state))) {
    state.damage += state.getFireAtk(weapon.fire) * state.getFireResist() * state.targets;
    if (weapon.fire.time) {
      state.fire = true;
    }
  }

  if (weapon.water && (!weapon.water.cond || weapon.water.cond(state))) {
    state.damage += state.getWaterAtk(weapon.water) * (100 - state.waterResist) / 100 * state.targets;
    if (weapon.water.time) {
      state.freeze = true;
    }
  }

  if (weapon.lightning && (!weapon.lightning.cond || weapon.lightning.cond(state))) {
    const atk = state.getLightningAtk(weapon.lightning);
    state.damage += atk * (100 - state.lightningResist) / 100 * state.targets;
    if (!state.lightning.atk || weapon.lightning.time > state.lightning.time) {
      state.lightning.atk = atk;
      state.lightning.time = weapon.lightning.time;
    }
  }

  if (weapon.poison && (!weapon.poison.cond || weapon.poison.cond(state))) {
    // FIXME: this goes wrong when multiple targets get poisoned and get hit by a single target weapon with poison bonus
    for (let i = 0; i < state.targets; i++) {
      state.poison.push({
        atk: state.getPoisonAtk(weapon.poison),
        turn: weapon.poison.turn,
        bonus: 0
      });
    }
    if (weapon.poison.bonus) {
      state.poison = state.poison.map(p => {
        const newBonus = (p.bonus + 100) * (weapon.poison.bonus + 100) / 100 - 100;
        return {...p, bonus: Math.min(newBonus, 200)};
      });
    }
  }

  if (weapon.buff) {
    addBuff(state.buff, weapon.buff);
  }
  if (weapon.targetBuff) {
    addBuff(state.targetBuff, weapon.targetBuff);
  }

  if (weapon.stance?.use === state.stance && weapon.stance.buff) {
    addBuff(state.buff, weapon.stance.buff);
  }

  if (weapon.stance?.gain != null) {
    state.stance = weapon.stance.gain;
  }

  calculatePassive(state, weapon, "afterWeapon");
}

function addBuff(buffs, newBuffs) {
  const ids = new Map(buffs.map((b, i) => [b.id, i]));
  for (const b of newBuffs) {
    if (b.id && ids.has(b.id)) {
      buffs[ids.get(b.id)] = b;
    } else {
      buffs.push(b);
    }
  }
}

function calculateDamage(state, weapon) {
  const oldPoisonDamage = getPoisonDamage(state);
  processWeapon(state, weapon);
  state.damage += getPoisonDamage(state) - oldPoisonDamage;
  return {damage: state.damage, cost: state.cost};
}
