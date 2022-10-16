const weapons = [
  {
    name: "初等火焰法杖",
    cost: 7,
    casting: 3,
    grade: 1,
    atk: 210,
    modLv: "E0",
    fire: {
      atk: 150,
      time: 6
    }
  },
  {
    name: "木製法杖",
    cost: 5,
    grade: 1,
    atk: 100,
    modLv: "B",
  },
  {
    name: "初等暴風法杖",
    cost: 7,
    casting: 4,
    grade: 1,
    atk: 286,
    modLv: "F"
  },
  {
    name: "初等閃電法杖",
    cost: 6,
    casting: 5,
    grade: 1,
    atk: 480,
    modLv: "A"
  },
  {
    name: "初等冰霜法杖",
    cost: 7,
    casting: 6,
    grade: 1,
    atk: 214,
    modLv: "D",
    water: {
      atk: 450,
      time: 5
    }
  },
  {
    name: "驅散法杖",
    cost: 6,
    grade: 1,
    atk: 280,
    modLv: "B"
  },
  {
    name: "火焰法杖",
    cost: 5,
    casting: 4,
    grade: 2,
    atk: 178,
    modLv: "C",
    fire: {
      atk: 400,
      time: 5
    }
  },
  {
    name: "力量強化杖",
    cost: 3,
    casting: 3,
    grade: 2,
    buff: [{atk: 200, times: 99}]
  },
  {
    name: "初級魔法凝聚",
    cost: 3,
    grade: 2,
    buff: [{bonus: 10, times: 1}]
  },
  {
    name: "暴風法杖",
    cost: 8,
    casting: 4,
    grade: 3,
    atk: 200,
    modLv: "D",
  },
  {
    name: "冰霜法杖",
    cost: 7,
    casting: 6,
    grade: 2,
    atk: 221,
    modLv: "B",
    water: {
      atk: 760,
      time: 5
    }
  },
  {
    name: "橡木法杖",
    cost: 4,
    grade: 2,
    atk: 392,
    modLv: "D",
  },
  {
    name: "閃電法杖",
    cost: 7,
    casting: 5,
    grade: 2,
    atk: 860,
    modLv: "S",
    lightning: {
      atk: 150,
      time: 6
    }
  },
  {
    name: "超級力量強化杖",
    cost: 4,
    casting: 4,
    grade: 3,
    buff: [{atk: 350, times: 99}]
  },
  {
    name: "小雞閃光杖",
    cost: 3,
    casting: 1,
    grade: 2,
    atk: 100,
    modLv: "F",
  },
  {
    name: "骸蝶魅影",
    cost: 12,
    casting: 10,
    grade: 4,
    atk: 1340,
    modLv: "SSS"
  },
  {
    name: "暗影杖",
    cost: 9,
    casting: 7,
    grade: 2,
    atk: 450,
    modLv: "S",
    targetBuff: [{mdef: -150, times: 99}]
  },
  {
    name: "灼熱日冕",
    cost: 6,
    casting: 5,
    grade: 3,
    atk: 293,
    modLv: "A",
    fire: {
      atk: 700,
      time: 5
    }
  },
  {
    name: "碧空颶風",
    cost: 8,
    casting: 4,
    grade: 4,
    atk: 120,
    modLv: "C"
  },
  {
    name: "閃光法杖",
    cost: 4,
    casting: 2,
    grade: 3,
    atk: 150,
    modLv: "C",
  },
  {
    name: "高級魔法凝聚",
    cost: 5,
    grade: 4,
    buff: [{bonus: 25, times: 1}]
  },
  {
    name: "絕對零度",
    cost: 8,
    casting: 7,
    grade: 4,
    atk: 226,
    modLv: "S",
    water: {
      atk: 1500,
      time: 6
    }
  },
  {
    name: "破邪法杖",
    cost: 6,
    grade: 3,
    atk: 250,
    modLv: "A",
  },
  {
    name: "草莓刨冰",
    cost: 2,
    grade: 4,
    atk: 200,
    modLv: "F",
    buff: [{waterBonus: 15}] // FIXME: 原文是受擊增傷，跟增傷效果一樣嗎？能疊？
  },
  {
    name: "高效魔力轉換裝置",
    cost: 8,
    casting: 7,
    grade: 3,
    atk: 1650,
    modLv: "SS"
  },
  {
    name: "純白之權杖",
    cost: 7,
    casting: 5,
    grade: 3,
    atk: 300,
    modLv: "C",
    bonus: 80
  },
  {
    name: "邪龍煉獄黑王杖",
    cost: 7,
    casting: 6,
    atk: 200,
    modLv: "S",
    fire: {
      // FIXME: find the correct mod
      atk: 0,
      time: 6
    }
  },
  {
    name: "高壓閃電",
    cost: 8,
    casting: 5,
    grade: 4,
    atk: 1250,
    modLv: "SS",
    lightning: {
      atk: 250,
      time: 10
    }
  },
  {
    name: "流水法杖",
    cost: 6,
    casting: 4,
    grade: 3,
    water: {
      atk: 0,
      modLv: "B",
      modType: "int",
      time: 0
    }
  },
  {
    name: "尤里走路",
    cost: 2,
    grade: 1,
    atk: 900
  },
  {
    name: "奧義（莉伊）",
    cost: 10,
    casting: 10,
    atk: 952,
    modLv: "S0"
  },
  {
    name: "奧義（歌莉雅）",
    cost: 6,
    casting: 6,
    atk: 1045,
    modLv: "A0",
    fire: {
      atk: 1250,
      time: 5
    }
  },
  {
    name: "奧義（歌莉雅）（地型）",
    cost: 6,
    casting: 6,
    atk: 1045,
    modLv: "A0",
    fire: {
      atk: 1250 + 20 * 90,
      time: 20
    }
  },
  {
    name: "專武（西比拉）",
    cost: 7,
    casting: 7,
    atk: 1000,
    modLv: "SSS"
  }
];

weapons.forEach(w => {
  w.modType = "int";
  w.atkType = "magic";
});

export default weapons;
