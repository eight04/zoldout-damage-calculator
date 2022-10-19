export default [
  {
    name: "攻擊力增加（維羅尼卡）",
    type: "sword",
    beforeAll: state => {
      state.buff.push({bonus: 20, times: 99});
    }
  },
  {
    name: "傷害後攻擊增加（艾莉諾拉）",
    type: "bow",
    afterHit: state => {
      state.buff.push({bonus: 5, times: 99});
    }
  },
  {
    name: "第2+次傷害攻擊機率增加（艾莉諾拉）",
    type: "bow",
    afterHit: state => {
      if (state.totalHit === 1) {
        state.buff.push({bonus: 0.3 * 70 + 0.7 * 0, times: 99});
      }
    }
  },
  {
    name: "使用武器後中毒（格蕾絲）",
    type: "bow",
    afterWeapon: (state, weapon) => {
      if (state.hit && !weapon.name.includes("奧義")) {
        state.poison.push({
          atk: 300,
          turn: 2,
          bonus: 0
        });
      }
    }
  },
  {
    name: "傷害後點燃或額外傷害（艾娜）",
    type: "bow",
    afterHit: (state) => {
      if (state.fire) {
        state.damage += 360 * state.getFireResist();
      } else {
        state.fire = true;
        state.damage += 540 * state.getFireResist();
      }
    }
  },
  {
    name: "使用火武器後加速（歌莉雅）",
    type: "wand",
    afterWeapon: (state, weapon) => {
      if (weapon.fire?.atk) {
        state.cost -= 2;
      }
    }
  },
  {
    name: "著火時增傷、減抗（歌莉雅）",
    type: "buff",
    beforeHit: (state) => {
      let b = state.targetBuff.find(b => b.id === "goriya1");
      if (!b) {
        b = {
          id: "goriya1",
          times: 99,
        };
        state.targetBuff.push(b);
      }
      b.injuryBonus = state.fire ? 10 : 0;
      b.fireResist = state.fire ? -10 : 0;
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
      if (!state.hit && weapon.buff || weapon.atkType === "heal") {
        state.cost--;
      }
    }
  }
];
