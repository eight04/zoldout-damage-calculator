export default [
  {
    name: "加護之劍",
    cost: 3,
    grade: 1,
    buff: [{atk: 250, times: 1}]
  },
  {
    name: "小曲刀",
    cost: 2,
    grade: 1,
    buff: [{atk: 50, times: 99}],
    stance: {
      gain: 1
    }
  },
  {
    name: "平衡劍",
    cost: 3,
    grade: 2,
    atk: 440,
    modLv: "D",
    stance: {
      gain: 1
    }
  },
  {
    name: "騎士長劍",
    cost: 4,
    grade: 2,
    atk: 250,
    modLv: "B",
    stance: {
      use: 1,
      gain: 2,
      bonus: 50
    }
  },
  {
    name: "盜賊短劍",
    cost: 2,
    grade: 2,
    atk: 300,
    modLv: "E",
    stance: {
      gain: 1
    }
  },
  {
    name: "突襲彎刀",
    grade: 2,
    atk: 570,
    modLv: "D"
  },
  {
    name: "神聖之劍",
    cost: 2,
    grade: 2,
    buff: [{atk: 280, times: 1}]
  },
  {
    name: "火羽骸蝶",
    cost: 4,
    grade: 4,
    atk: 510,
    modLv: "A"
  },
  {
    name: "重鐵",
    cost: 5,
    grade: 2,
    atk: 480,
    modLv: "A"
  },
  {
    name: "狼牙大劍",
    cost: 5,
    grade: 3,
    atk: 200,
    modLv: "S",
    stance: {
      use: 2,
      gain: 0,
      bonus: 60
    }
  },
  {
    name: "追擊彎刀",
    cost: 4,
    grade: 3,
    atk: 500,
    modLv: "C",
    stance: {
      use: 1,
      gain: 2,
      bonus: 40
    }
  },
  {
    name: "俠盜短劍",
    cost: 1,
    grade: 3,
    atk: 620,
    stance: {
      gain: 1
    }
  },
  {
    name: "教堂禮劍",
    cost: 3,
    grade: 3,
    buff: [{atk: 480, times: 1}],
    stance: {
      gain: 1
    }
  },
  {
    name: "破冰刀",
    cost: 6,
    grade: 3,
    atk: 450,
    modLv: "S",
    atkBonusOnFreeze: 25
  },
  {
    name: "巨型西瓜冰棒",
    cost: 4,
    grade: 4,
    atk: 50,
    modLv: "S",
    atkBonusOnFreeze: 10
  },
  {
    name: "動力能量劍",
    cost: 4,
    grade: 3,
    atk: 950,
    modLv: "D",
    stance: {
      use: 2,
      gain: 0,
      bonus: 80
    }
  },
  {
    name: "彩虹的指揮棒",
    cost: 2,
    grade: 3,
    atk: 100,
    modLv: "E",
    buff: [{atk: 300, times: 99}]
  },
  {
    name: "暗殺者之劍",
    cost: 3,
    grade: 3,
    atk: 660,
    modLv: "E",
    stance: {
      gain: 1
    },
    atkBonusOnBack: 50
  },
  {
    name: "結晶神聖劍",
    cost: 4,
    grade: 4,
    buff: [{atk: 400, times: 1}],
    stance: {
      use: 1,
      gain: 2,
      buff: [{atk: 300, times: 1}]
    }
  },
  {
    name: "破滅寒冰",
    cost: 4,
    grade: 4,
    atk: 420,
    modLv: "A"
  }
];
