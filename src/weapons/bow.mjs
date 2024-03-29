export default [
  {
    name: "訓練用陷阱弓",
    cost: 5,
    grade: 1,
    trap: {
      atk: 1300,
    }
  },
  {
    name: "誘毒弓",
    cost: 3,
    grade: 2,
    atk: 80,
    modLv: "F",
    poison: {
      bonus: 20
    }
  },
  {
    name: "大弓",
    cost: 6,
    grade: 1,
    atk: 290,
    modLv: "D"
  },
  {
    name: "炸彈弓",
    cost: 4,
    grade: 2,
    atk: 100,
    modLv: "E",
    collision: 1
  },
  {
    name: "遊擊短弓",
    cost: 3,
    grade: 2,
    atk: 150,
    modLv: "C",
    collision: 1,
  },
  {
    name: "彈射陷阱弓",
    cost: 5,
    grade: 2,
    trap: {
      atk: 2250
    },
    collision: 1
  },
  {
    name: "連射弓",
    cost: 5,
    grade: 2,
    atk: 127,
    modLv: "F",
    hit: 3
  },
  {
    name: "反向彈射陷阱弓",
    cost: 4,
    grade: 2,
    trap: {
      atk: 1850
    },
    collision: 1,
  },
  {
    name: "楓木弓",
    cost: 2,
    grade: 2,
    atk: 150,
    modLv: "D"
  },
  {
    name: "蛇毒弓",
    cost: 3,
    grade: 2,
    atk: 260,
    modLv: "E",
    poison: {
      atk: 640,
      turn: 2
    }
  },
  {
    name: "樹藤弓",
    cost: 3,
    grade: 2,
    atk: 250,
    modLv: "E",
    collision: 1,
  },
  {
    name: "劇毒骸蝶",
    cost: 4,
    grade: 4,
    atk: 350,
    modLv: "C",
    poison: {
      atk: 1340,
      turn: 4
    }
  },
  {
    name: "狼牙弓",
    cost: 3,
    grade: 4,
    atk: 80,
    modLv: "B",
    collision: 1,
  },
  {
    name: "騷靈之弓",
    cost: 4,
    grade: 3,
    atk: 40,
    modLv: "F",
  },
  {
    name: "重型炸彈弓",
    cost: 5,
    grade: 3,
    atk: 80,
    modLv:"D",
    targetBuff: [{id: "heavyBomb", def: -100, times: 99}],
    collision: 1,
  },
  {
    name: "元素獵者",
    cost: 3,
    grade: 3,
    atk: 73,
    modLv: "D",
    targetBuff: [{elementResist: -10, times: 99}]
  },
  {
    name: "驚嚇小精靈",
    cost: 5,
    grade: 3,
    atk: 50,
    modLv: "C"
  },
  {
    name: "大商會特製獵弓",
    cost: 2,
    grade: 3,
    atk: 110,
    modLv: "E"
  },
  {
    name: "大商會特製獵弓（二次傷害）",
    cost: 2,
    grade: 3,
    atk: 110,
    modLv: "E",
    bonus: 40
  },
  {
    name: "開蛋器",
    cost: 3,
    grade: 3,
    atk: 220,
    modLv: "D"
  },
  {
    name: "碧海旋螺弓",
    cost: 3,
    grade: 3,
    atk: 370,
    modLv: "D"
  },
  {
    name: "魚叉射手",
    cost: 3,
    grade: 3,
    atk: 520,
    modLv: "D",
    collision: 1,
  },
  {
    name: "引蜂毒素",
    cost: 4,
    grade: 3,
    atk: 130,
    modLv: "F",
    poison: {
      bonus: 35
    }
  },
  {
    name: "眼鏡蛇弓",
    cost: 3,
    grade: 3,
    atk: 210,
    modLv: "D",
    poison: {
      atk: 870,
      turn: 3
    }
  },
  {
    name: "白夜禮物派送器",
    cost: 5,
    grade: 3,
    trap: {
      water: {
        atk: 2100,
        time: 6
      }
    }
  },
  {
    name: "射不準的玩具弓",
    cost: 2,
    grade: 3,
    targets: 2,
    atk: 120,
    modLv: "E"
  },
  {
    name: "射不準的玩具弓（兩倍）",
    cost: 2,
    grade: 3,
    atk: 120,
    modLv: "E",
    hit: 2
  },
  {
    name: "深沉之音",
    cost: 4,
    grade: 4,
    trap: {
      atk: 1300,
      modLv: "A",
      modType: "int"
    }
  },
  {
    name: "深沉之音．第二樂章",
    cost: 4,
    grade: 4,
    trap: {
      atk: 1350,
      modLv: "S",
      modType: "int"
    }
  },
  {
    name: "深沉之音．最終樂章",
    cost: 2,
    grade: 4,
    trap: {
      atk: 1400,
      modLv: "SS",
      modType: "int"
    }
  },
  {
    name: "街角獵手",
    cost: 5,
    grade: 3,
    trap: {
      atk: 1870,
      modLv: "SSS",
      modType: "int",
    },
    targetBuff: [{id: "streetHunter", def: -350, times: 999}]
  },
  {
    name: "徹甲旋殼弓",
    cost: 2,
    grade: 3,
    atk: 440,
    modLv: "G",
    targetBuff: [{id: "spiralShell", def: -100, times: 999}]
  },
  {
    name: "魔力水槍",
    cost: 2,
    grade: 4,
    atk: 200,
    atkType: "lightning",
    modLv: "E",
    modType: "int",
  },
  {
    name: "彈射陷阱弓MK2",
    cost: 5,
    grade: 3,
    trap: {
      atk: 1600,
      modLv: "S",
      modType: "int"
    },
    collision: 1,
  },
  {
    name: "精靈之森",
    cost: 3,
    grade: 3,
    atk: 165,
    modLv: "C",
    targetBuff: [{id: "elfForest", def: -100, times: 99}]
  },
  {
    name: "熱帶魚槍",
    cost: 3,
    grade: 4,
    atk: 220,
    modLv: "D",
    targetBuff: [{id: "tropicalFish", def: -150, times: 99}]
  },
  {
    name: "鐵輪鋼力弓",
    cost: 4,
    grade: 3,
    atk: 250,
    modLv: "E"
  },
  {
    name: "幽暗的長弓",
    cost: 4,
    grade: 3,
    atk: 500,
    modLv: "E",
    poison: {
      modLv: 1.3,
      modType: "int",
      turn: 3
    }
  },
  {
    name: "隼之狩",
    cost: 3,
    grade: 4,
    atk: 400,
    modLv: "A"
  },
  {
    name: "魔像結晶弓",
    cost: 4,
    grade: 4,
    atk: 120,
    modLv: "D"
  },
  {
    name: "魔像結晶弓（擊殺）",
    cost: 1,
    grade: 4,
    atk: 120,
    modLv: "D"
  },
  {
    name: "實驗炸彈彈射器",
    cost: 6,
    grade: 4,
    atk: 100,
    modLv: "D",
    collision: 1,
  },
  {
    name: "天之鎖鍊",
    cost: 4,
    grade: 4,
    atk: 350,
    modLv: "C",
    collision: 1,
  },
  {
    name: "阿波羅",
    cost: 6,
    grade: 4,
    atk: 150,
    modLv: "A"
  },
  {
    name: "超性能瞄準儀",
    cost: 3,
    grade: 4,
    atk: 300,
    modLv: "C"
  },
  {
    name: "超性能瞄準儀（毒、電）",
    cost: 3,
    grade: 4,
    atk: 300,
    modLv: "C",
    bonus: 30
  },
  {
    name: "反向彈射陷阱弓MK2",
    cost: 4,
    grade: 3,
    trap: {
      atk: 1200,
      modLv: "S",
      modType: "int"
    },
    collision: 1,
  },
  {
    name: "狂暴追獵",
    cost: 4,
    grade: 4,
    atk: 100,
    modLv: "F",
    hit: 3
  },
  {
    name: "哨兵獵弓",
    cost: 5,
    grade: 3,
    atk: 205,
    modLv: "D",
    trap: {
      atk: 2000,
      time: 20
    }
  },
  {
    name: "狂鯊獵弓",
    cost: 4,
    grade: 4,
    atk: 190,
    modLv: "C",
    targets: 99
  },
  {
    name: "專武（艾娜）",
    cost: 3,
    grade: 3,
    atk: 210,
    atkType: "fire",
    modLv: "D"
  },
  {
    name: "專武（艾莉諾拉）",
    cost: 3,
    grade: 3,
    atk: 82,
    modLv: "F",
    lightning: {
      atk: 70,
      time: 10
    },
    afterWeapon: (state, weapon) => {
      const {damage} = state;
      state.processWeapon({...weapon, lightning: null, afterWeapon: null});
      state.damage += damage;
    }
  },
  {
    name: "專武（格蕾絲）",
    cost: 5,
    grade: 3,
    atk: 231,
    modLv: "D",
    poison: {
      atk: 1000,
      turn: 2,
      bonus: 30
    }
  },
  {
    name: "專武（泳多莉）",
    cost: 3,
    grade: 3,
    atk: 10,
    atkType: "water",
    modLv: "F-",
    modType: "int",
    hit: 3
  },
  {
    name: "專武（聖誕赫利德）",
    cost: 3,
    grade: 3,
    atk: 200,
    modLv: "D",
    poison: {
      atk: 600,
      turn: 2
    },
    fire: {
      atk: 100,
      time: 6
    }
  },
  {
    name: "專武（亞歷克斯）",
    cost: 3,
    grade: 3,
    atk: 450,
    modLv: 1.45,
    collision: 1,
  },
  {
    name: "奧義（格蕾絲）",
    cost: 7,
    atk: 285,
    modLv: "B0",
    poison: {
      atk: 1440,
      turn: 3,
      extend: 2
    }
  },
  {
    name: "奧義（艾莉諾拉）",
    cost: 6,
    atk: 240,
    modLv: "E0",
    hit: 6
  }, 
  {
    name: "奧義（菲恩）",
    cost: 2,
    atk: 330,
    modLv: "C0",
    hit: 2,
    targetBuff: [{def: -150, times: 99}]
  },
  {
    name: "奧義（薇薇安）",
    cost: 4,
    trap: {
      atk: 100,
      modLv: "C0",
      hit: 4,
      bonus: 20,
      time: 15
    }
  },
  {
    name: "奧義（泳多莉）",
    cost: 4,
    atk: 160,
    atkType: "water",
    modLv: "E0",
    modType: "int",
    hit: 5,
    lightning: {
      atk: 100,
      time: 6
    }
  },
  {
    name: "奧義（艾娜）",
    cost: 5,
    atk: 579,
    modLv: "A0",
    fire: {
      atk: 1080,
      time: 6
    }
  },
  {
    name: "奧義（聖誕赫利德）",
    cost: 8,
    atk: 150,
    modLv: "B0",
    hit: 4,
    trap: {
      atk: 1400,
      time: 999
    }
  }
];
