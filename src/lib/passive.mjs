export default [
  {
    name: "傷害後攻擊增加（艾莉諾拉）",
    type: "bow",
    afterHit: state => {
      state.buff.push({atk: 5, times: 99});
      if (state.totalHit === 1) {
        state.buff.push({bonus: 0.3 * 1.7 + 0.7 * 1, times: 99});
      }
    }
  },
  {
    name: "使用武器後中毒（格蕾絲）",
    type: "bow",
    afterWeapon: (state) => {
      if (state.hit) {
        state.poison.push({
          atk: 300,
          turn: 2,
          bonus: 0
        });
      }
    }
  },
  {
    name: "使用火武器後加速（歌莉雅）",
    type: "wand",
    afterWeapon: (state, weapon) => {
      if (weapon.fire?.atk) {
        state.cost -= 2;
        if (state.targetBuff.every(b => !b.goriya)) {
          state.targetBuff.push({injuryBonus: 10, times: 99, goriya: true});
          state.targetBuff.push({fireResist: -10, times: 99, goriya: true});
        }
      }
    }
  },
  {
    name: "額外傷害（尤里+泳裝伊蓮）",
    type: "wand",
    afterWeapon: (state, weapon) => {
      if (weapon.water) {
        state.damage += (900 - state.getDef({atkType: "magic"})) * 2;
      }
    }
  },
  {
    name: "魔攻增加（西比拉）",
    type: "wand",
    beforeWeapon: (state, weapon) => {
      if (weapon.casting >= 6 && state.hit) {
        state.buff.push({bonus: 25, times: 1});
      }
    }
  },
  {
    name: "生命回復（塔尼亞）",
    type: "tome",
    afterWeapon: (state, weapon) => {
      if (!state.hit || weapon.atkType === "heal") {
        state.damage += 360;
      }
    }
  },
  {
    name: "加速（塔尼亞）",
    type: "tome",
    afterWeapon: (state, weapon) => {
      if (!state.hit || weapon.atkType === "heal") {
        state.cost--;
      }
    }
  }
];