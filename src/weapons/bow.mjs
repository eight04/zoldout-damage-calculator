export default [
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
    modLv: "E"
  },
  {
    name: "遊擊短弓",
    cost: 3,
    grade: 2,
    atk: 150,
    modLv: "C"
  },
  {
    name: "彈射陷阱弓",
    cost: 5,
    grade: 2,
    trap: {
      atk: 2250
    }
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
    }
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
    modLv: "E"
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
    modLv: "B"
  },
  {
    name: "重型炸彈弓",
    cost: 5,
    grade: 3,
    atk: 80,
    modLv:"D",
    targetBuff: [{id: "heavyBomb", def: -100, times: 99}],
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
    name: "碧海旋螺弓",
    cost: 3,
    grade: 3,
    atk: 370,
    modLv: "D"
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
    name: "射不準的玩具弓",
    cost: 2,
    grade: 3,
    targets: 2,
    atk: 120,
    modLv: "E"
  },
  {
    name: "彈射陷阱弓MK2",
    cost: 5,
    grade: 3,
    trap: {
      atk: 2900
    }
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
    name: "實驗炸彈彈射器",
    cost: 6,
    grade: 4,
    atk: 100,
    modLv: "D"
  },
  {
    name: "天之鎖鍊",
    cost: 4,
    grade: 4,
    atk: 350,
    modLv: "C"
  },
  {
    name: "阿波羅",
    cost: 6,
    grade: 4,
    atk: 150,
    modLv: "A"
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
    modLv: "C",
    hit: 2,
    targetBuff: [{def: -150, times: 99}]
  },
  {
    name: "奧義（艾娜）",
    cost: 5,
    atk: 579,
    modLv: "A",
    fire: {
      atk: 1080,
      time: 6
    }
  }
];
