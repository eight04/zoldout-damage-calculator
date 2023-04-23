import allPassive from "./passive.mjs";

// NOTE: we use F++ instead of F
const WEAPON_MOD = {
  G: 0.6,
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
    atk, int, selfDef = 1000, selfMdef = 500,
    def, mdef,
    fireResist, waterResist, poisonResist, lightningResist,
    fire = false, freeze = false, poison = false,
    poisonTurns, stance = 0, maxTargets = 1,
    passive,
    buff = []
  }) {
    this.atk = atk;
    this.int = int;
    this.selfDef = selfDef;
    this.selfMdef = selfMdef;

    this.hp = hp;
    this.def = def;
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
    this.buff = buff.slice();
    this.targetBuff = [];
    this.targets = 0;
    this.collision = 0;

    this.poison = poison ? [{atk: 0, turn: 99}] : [];
    this.lightning = {};
    this.fire = fire;
    this.freeze = freeze;
  }
  clone(extra = {}) {
    const s = new State({});
    Object.assign(s, this, extra);
    return s;
  }
  getBuffedStat(prop, type = "stack") {
    if (type === "stack") {
      return (this[prop] || 0) + this.buff.reduce((output, b) => output + (b[prop] || 0), 0);
    }
    return (this[prop] || 1) * this.buff.reduce((output, b) => output * (1 + (b[prop] || 0) / 100), 1);
  }
  getDef(weapon) {
    return getDef(this, weapon);
  }
  _getResist(resistKey, bonusKey, injuryKey) {
    const value = this[resistKey] ? 
      this[resistKey] + this.targetBuff.reduce((output, b) => output + (b[resistKey] || 0), 0) :
      0;
    const bonus = this.buff.reduce((output, b) => output * (1 + (b[bonusKey] || 0) / 100), 1);
    const injury = this.targetBuff.reduce((output, b) => output * (1 + (b[injuryKey] || 0) / 100), 1);
    return (1 - value / 100) * bonus * injury;
  }
  getFireResist() {
    return this._getResist("fireResist", "fireBonus", "fireInjuryBonus");
  }
  getWaterResist() {
    return this._getResist("waterResist", "waterBonus", "waterInjuryBonus");
  }
  getPoisonResist() {
    return this._getResist("poisonResist", "poisonBonus", "poisonInjuryBonus");
  }
  getLightningResist() {
    return this._getResist("lightningResist", "lightningBonus", "lightningInjuryBonus");
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
  getFinalBonus() {
    return this.buff.reduce((output, b) => output * (1 + (b.finalBonus || 0) / 100), 1);
  }
  getTarget() {
    return {
      hp: this.hp,
      mdef: this.mdef,
      def: this.def,
      waterResist: this.waterResist,
      fireResist: this.fireResist,
      poisonResist: this.poisonResist,
      lightningResist: this.lightningResist,
      targetBuff: this.targetBuff,
    };
  }
  setTarget(props) {
    Object.assign(this, props);
  }
}

export function simulate({
  weapons, passiveIds, ...options
}) {
  const passive = allPassive.filter((_, i) => passiveIds.includes(i));
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
  if (atkType === "magic") {
    return state._getResist(null, "magicBonus", "magicInjuryBonus");
  }
  return state._getResist(null, "physicBonus", "physicInjuryBonus");
}

function getAtk({atk, int, buff}, {modType, modLv, atk: weaponAtk = 0, bonus = 0}) {
  const charAtk = modType === "int" ?
    int + buff.reduce((output, b) => output + (b.int || 0), 0) :
    atk + buff.reduce((output, b) => output + (b.atk || 0), 0);
  return (weaponAtk + (modLv ? charAtk * getWeaponMod(modLv) : 0))
    * (bonus + 100) / 100;
}

function getPoisonDamage(state) {
  let damage = 0;
  for (const p of state.poison) {
    if (!p.atk) continue;
    damage += p.atk * Math.min(p.turn, state.poisonTurns) / p.turn * state.getPoisonResist();
  }
  return damage * state.getFinalBonus();
}

function calculatePassive(state, weapon, key) {
  state.passive.forEach(p => p[key]?.(state, weapon));
  weapon?.[key]?.(state, weapon);
}

function processWeapon(state, weapon) {
  state.cost = weapon.casting || weapon.cost;
  state.hit = weapon.hit || (weapon.atk || weapon.modLv ? 1 : 0);
  state.damage = 0;
  state.targets = Math.min(state.maxTargets, weapon.targets || 1);
  state.collision = weapon.collision || 0;
  calculatePassive(state, weapon, "beforeWeapon");
  const def = getDef(state, weapon);
  const resist = getResist(state, weapon);
  for (let i = 0; i < state.hit; i++) {
    calculatePassive(state, weapon, "beforeHit");
    state.currentHit = i + 1;
    state.totalHit++;
    let atk = weapon.getAtk ? weapon.getAtk(state) : getAtk(state, weapon);
    atk *= state.buff.reduce((output, b) => output * (b.bonus ? (b.bonus + 100) / 100 : 1), 1);
    if (weapon.stance?.use === state.stance) {
      atk *= ((weapon.stance.bonus || 0) + 100) / 100;
    }
    atk *= state.getFinalBonus();
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
    const trapState = state.clone({passive: [], buff: state.buff.filter(b => b.finalBonus).map(b => ({...b}))});
    trapState.processWeapon(weapon.trap);
    state.damage += trapState.damage;
  }

  if (weapon.fire && (!weapon.fire.cond || weapon.fire.cond(state))) {
    state.damage += state.getFireAtk(weapon.fire) * state.getFireResist() * state.targets * state.getFinalBonus();
    if (weapon.fire.time) {
      state.fire = true;
    }
  }

  if (weapon.water && (!weapon.water.cond || weapon.water.cond(state))) {
    state.damage += state.getWaterAtk(weapon.water) * state.getWaterResist() * state.targets * state.getFinalBonus();
    if (weapon.water.time) {
      state.freeze = true;
    }
  }

  if (weapon.lightning && (!weapon.lightning.cond || weapon.lightning.cond(state))) {
    // FIXME: does lightning work with final bonus?
    const atk = state.getLightningAtk(weapon.lightning);
    state.damage += atk * state.getLightningResist() * state.targets * state.getFinalBonus();
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
