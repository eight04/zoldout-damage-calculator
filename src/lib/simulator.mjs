import allPassive from "./passive.mjs";

// NOTE: we use F++ instead of F
const WEAPON_MOD = {
  F: 0.85,
  E0: 1, // 初始武器卡無法造出++
  E: 1.1,
  D: 1.35,
  C: 1.6,
  B: 1.85,
  A: 2.1,
  S: 2.35,
  SS: 2.6,
  SSS: 2.85, // FIXME: confirm this
};

export function simulate({
  atk, def, int, mdef, weapons, poisonTurns = 99, 
  fireResist, waterResist, poisonResist, lightningResist,
  passiveIds
}) {
  const passive = allPassive.filter((p, i) => passiveIds.includes(i));
  const stages = [];
  const state = {
    atk,
    def,
    int,
    mdef,
    stance: 0,
    totalHit: 0,
    buff: [],
    targetBuff: [],

    poison: [],
    lightning: {},

    poisonTurns,

    fireResist,
    waterResist,
    poisonResist,
    lightningResist,

    passive
  };
  for (const weapon of weapons) {
    const result = calculateDamage(state, weapon);
    stages.push(result);
  }
  const finalDamage = stages.reduce((o, s) => o + s.damage, 0);
  const finalCost = stages.reduce((o, s) => o + s.cost, 0);
  return {
    stages,
    summary: {
      damage: finalDamage,
      cost: finalCost,
      cp: finalDamage / finalCost
    }
  };
}

function getDef({def, mdef, targetBuff: buff}, {atkType}) {
  if (atkType === "heal") return 0;
  if (atkType === "magic") {
    return mdef + buff.reduce((output, b) => output + (b.mdef || 0), 0);
  }
  return def + buff.reduce((output, b) => output + (b.def || 0), 0);
}

function getAtk({atk, int, buff}, {modType, modLv, atk: weaponAtk = 0, bonus = 0}) {
  const charAtk = modType === "int" ?
    int + buff.reduce((output, b) => output + (b.int || 0), 0) :
    atk + buff.reduce((output, b) => output + (b.atk || 0), 0);
  return (weaponAtk + (modLv ? charAtk * WEAPON_MOD[modLv] : 0))
    * (bonus + 100) / 100
    * buff.reduce((output, b) => output * (b.bonus ? (b.bonus + 100) / 100 : 1), 1);
}

function getPoisonDamage({poison, poisonTurns, poisonResist}) {
  let damage = 0;
  for (const p of poison) {
    damage += p.atk * Math.min(p.turn, poisonTurns) / p.turn * (100 - poisonResist) / 100;
  }
  return damage;
}

function calculatePassive(state, weapon, key) {
  state.passive.forEach(p => p[key]?.(state, weapon));
}

function calculateDamage(state, weapon) {
  const oldPoisonDamage = getPoisonDamage(state);

  state.cost = weapon.casting || weapon.cost;
  state.hit = weapon.hit || (weapon.atk || weapon.modLv ? 1 : 0);
  
  let damage = 0;
  const def = getDef(state, weapon);
  for (let i = 0; i < state.hit; i++) {
    state.currentHit = i + 1;
    state.totalHit++;
    let atk = getAtk(state, weapon);
    if (weapon.stance?.use === state.stance) {
      atk *= ((weapon.stance.bonus || 0) + 100) / 100;
    }
    // FIXME: is it possible to have negative def?
    damage += Math.max(atk - def, 1);
    if (state.lightning?.atk) {
      damage += state.lightning.atk * (100 - state.lightningResist) / 100;
    }
    calculatePassive(state, weapon, "afterHit");
  }

  if (state.hit) {
    state.buff = state.buff.map(b => ({...b, times: b.times - 1})).filter(b => b.times > 0);
    state.targetBuff = state.targetBuff.map(b => ({...b, times: b.times - 1})).filter(b => b.times > 0);
  }

  if (weapon.trap) {
    damage += Math.max(weapon.trap.atk - def, 1);
  }

  if (weapon.fire?.atk) {
    damage += weapon.fire.atk * (100 - state.fireResist) / 100;
  }

  if (weapon.water?.atk) {
    damage += weapon.water.atk * (100 - state.waterResist) / 100;
  }

  if (weapon.lightning?.atk) {
    damage += weapon.lightning.atk * (100 - state.lightningResist) / 100;
    if (!state.lightning?.atk || weapon.lightning.time > state.lightning.time) {
      state.lightning = weapon.lightning;
    }
  }

  if (weapon.poison?.atk) {
    state.poison.push({
      atk: weapon.poison.atk,
      turn: weapon.poison.turn,
      bonus: 0
    });
  }
  if (weapon.poison?.bonus) {
    state.poison = state.poison.map(p => {
      const newBonus = (p.bonus + 100) * (weapon.poison.bonus + 100) / 100 - 100;
      return {...p, bonus: Math.min(newBonus, 200)};
    });
  }

  if (weapon.buff) {
    state.buff.push(...weapon.buff);
  }
  if (weapon.targetBuff) {
    state.targetBuff.push(...weapon.targetBuff);
  }

  if (weapon?.stance?.use === state.stance && weapon.stance.buff) {
    state.buff.push(...weapon.stance.buff);
  }

  if (weapon?.stance?.gain != null) {
    state.stance = weapon.stance.gain;
  }

  calculatePassive(state, weapon, "afterWeapon");

  damage += getPoisonDamage(state) - oldPoisonDamage;

  return {damage, cost: state.cost};
}
