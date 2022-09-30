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
      }
    }
  }
];
