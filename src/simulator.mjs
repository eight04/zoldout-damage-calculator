// NOTE: we use F++ instead of F
const WEAPON_MOD = {
  F: 0.85,
  E: 1.1,
  D: 1.35,
  C: 1.6,
  B: 1.85,
  A: 2.1,
  S: 2.35,
  SS: 2.6
};

export function simulate({
  atk, def, weapons, poisonTurns = 99, poisonAfterWeapon
}) {
  const stages = [];
  let state = {
    atk,
    def,
    stance: 0,
    buff: [],
    targetBuff: [],
    poisonTurns,
    poison: [],
    poisonAfterWeapon
  };
  for (const weapon of weapons) {
    const result = calculateDamage(state, weapon);
    state = result.state;
    stages.push(result);
  }
  const finalDamage = stages.reduce((o, s) => o + s.damage, 0);
  const finalCost = weapons.reduce((o, w) => o + w.cost, 0);
  return {
    stages,
    summary: {
      damage: finalDamage,
      cost: finalCost,
      cp: finalDamage / finalCost
    }
  };
}

function calculateDamage(state, weapon) {
  const newState = {
    ...state,
    buff: [],
    targetBuff: [],
    poison: [],
  };
  let damage = 0;
  if (weapon.atk || weapon.modLv) {
    let atk = 0;
    if (weapon.modLv) {
      for (const b of state.buff) {
        atk += b.atk || 0;
      }
      atk = (atk + state.atk) * WEAPON_MOD[weapon.modLv];
    }  
    if (weapon.atk) {
      atk += weapon.atk;
    }
    let bonus = 0;
    if (weapon?.stance?.use === state.stance) {
      bonus += weapon.stance.bonus || 0;
    }
    let def = state.def;
    for (const b of state.targetBuff) {
      def += b.def || 0;
    }
    // FIXME: is it possible to have negative def?
    const hit = weapon.hit || 1;
    damage = (atk - def) * hit * (100 + bonus) / 100;
    damage = Math.max(damage, 1);
  }

  if (damage) {
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
    let def = state.def;
    for (const b of state.targetBuff) {
      def += b.def || 0;
    }
    damage += Math.max(weapon.trap.atk - def, 1);
  }

  newState.poison.push(...state.poison);
  if (weapon.poison?.atk) {
    damage += weapon.poison.atk * Math.min(state.poisonTurns, weapon.poison.turn) / weapon.poison.turn;
    newState.poison.push({
      atk: weapon.poison.atk,
      turn: weapon.poison.turn,
      bonus: 0
    });
  }

  if (weapon.poison?.bonus) {
    let poisonDamage = 0;
    for (let i = 0; i < newState.poison.length; i++) {
      const p = newState.poison[i];
      let newBonus = (p.bonus + 100) * (weapon.poison.bonus + 100) / 100 - 100;
      newBonus = Math.min(newBonus, 200);
      poisonDamage += p.atk * Math.min(state.poisonTurns, p.turn) / p.turn * (newBonus - p.bonus) / 100;
      newState.poison[i] = {...p, bonus: newBonus};
    }
    damage += poisonDamage;
  }

  if (state.poisonAfterWeapon) {
    // 格蕾斯
    damage += 300 * Math.min(2, state.poisonTurns) / 2;
    newState.poison.push({
      atk: 300,
      turn: 2,
      bonus: 0
    });
  }

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

  return {damage, state: newState};
}
