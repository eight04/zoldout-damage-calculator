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
  poisonAfterWeapon,
  speedAfterFireWeapon
}) {
  const stages = [];
  let state = {
    atk,
    def,
    int,
    mdef,
    stance: 0,
    buff: [],
    targetBuff: [],

    poison: [],
    lightning: {},

    poisonTurns,

    poisonAfterWeapon,
    speedAfterFireWeapon,

    fireResist,
    waterResist,
    poisonResist,
    lightningResist
  };
  for (const weapon of weapons) {
    const result = calculateDamage(state, weapon);
    state = result.state;
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

function calculateDamage(state, weapon) {
  const newState = {
    ...state,
    buff: [],
    targetBuff: [],
    poison: [],
    cost: weapon.casting || weapon.cost
  };
  const hit = weapon.hit || (weapon.atk || weapon.modLv ? 1 : 0);
  let damage = 0;
  const def = getDef(state, weapon);
  if (hit) {
    let atk = getAtk(state, weapon);
    if (weapon.stance?.use === state.stance) {
      atk *= ((weapon.stance.bonus || 0) + 100) / 100;
    }
    // FIXME: is it possible to have negative def?
    damage = Math.max(atk - def, 1) * hit;
  }

  if (hit) {
    for (const b of state.buff) {
      if (b.times > 1) {
        newState.buff.push({...b, times: b.times - 1});
      }
    }
    for (const b of state.targetBuff) {
      if (b.times > 1) {
        newState.targetBuff.push({...b, times: b.times - 1});
      }
    }
  } else {
    newState.buff.push(...state.buff);
    newState.targetBuff.push(...state.targetBuff);
  }

  if (weapon.trap) {
    damage += Math.max(weapon.trap.atk - def, 1);
  }

  if (weapon.fire?.atk) {
    damage += weapon.fire.atk * (100 - state.fireResist) / 100;
    if (state.speedAfterFireWeapon) {
      newState.cost -= 2;
    }
  }

  if (weapon.water?.atk) {
    damage += weapon.water.atk * (100 - state.waterResist) / 100;
  }

  if (hit && state.lightning?.atk) {
    damage += state.lightning.atk * hit * (100 - state.lightningResist) / 100;
  }
  if (weapon.lightning?.atk) {
    damage += weapon.lightning.atk * (100 - state.lightningResist) / 100;
    if (!state.lightning?.atk || weapon.lightning.time > state.lightning.time) {
      newState.lightning = weapon.lightning;
    }
  }

  newState.poison.push(...state.poison);
  if (weapon.poison?.atk) {
    newState.poison.push({
      atk: weapon.poison.atk,
      turn: weapon.poison.turn,
      bonus: 0
    });
  }
  if (weapon.poison?.bonus) {
    for (const p of newState.poison) {
      p.bonus = (p.bonus + 100) * (weapon.poison.bonus + 100) / 100 - 100;
    }
  }
  if (hit && state.poisonAfterWeapon) {
    // 格蕾斯
    damage += 300 * Math.min(2, state.poisonTurns) / 2;
    newState.poison.push({
      atk: 300,
      turn: 2,
      bonus: 0
    });
  }
  damage += getPoisonDamage(newState) - getPoisonDamage(state);

  if (weapon.buff) {
    newState.buff.push(...weapon.buff);
  }
  if (weapon.targetBuff) {
    newState.targetBuff.push(...weapon.targetBuff);
  }

  if (weapon?.stance?.use === state.stance && weapon.stance.buff) {
    newState.buff.push(...weapon.stance.buff);
  }

  if (weapon?.stance?.gain != null) {
    newState.stance = weapon.stance.gain;
  }

  return {damage, state: newState, cost: newState.cost};
}
