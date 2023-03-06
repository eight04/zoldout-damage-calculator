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
    cost: 4,
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
    name: "引燃火劍",
    cost: 3,
    grade: 2,
    atk: 140,
    modLv: "C",
    fire: {
      cond: state => state.fire,
      atk: 520
    }
  },
  {
    name: "致毒曲刀",
    cost: 4,
    grade: 2,
    atk: 300,
    modLv: "C",
    poison: {
      cond: state => state.poison.length,
      atk: 1100,
      turn: 2
    }
  },
  {
    name: "火羽骸蝶",
    cost: 4,
    grade: 4,
    atk: 510,
    modLv: "A",
    fire: {
      atk: 400,
      time: 5
    }
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
    name: "搗蛋南瓜君",
    cost: 3,
    grade: 3,
    atk: 305,
    modLv: "E",
    stance: {
      use: 1,
      gain: 2,
    },
    poison: {
      cond: state => state.stance === 1,
      atk: 750,
      turn: 1
    }
  },
  {
    name: "舞台禮劍",
    cost: 4,
    grade: 3,
    atk: 30,
    modLv: "A",
  },
  {
    name: "舞台禮劍（降攻）",
    cost: 4,
    grade: 3,
    atk: 30,
    modLv: "A",
    bonus: 50
  },
  {
    name: "星光蟹王輕劍",
    cost: 7,
    grade: 3,
    atk: 500,
    modLv: "A",
  },
  {
    name: "大馬達碧綠結他",
    cost: 3,
    grade: 3,
    atk: 500,
    stance: {
      gain: 1
    }
  },
  {
    name: "大馬達碧綠結他（一架）",
    cost: 1,
    grade: 3,
    atk: 500,
    stance: {
      gain: 1
    }
  },
  {
    name: "閃燃焰劍",
    cost: 4,
    grade: 3,
    atk: 330,
    modLv: "B",
    fire: {
      cond: state => state.fire,
      atk: 900
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
    name: "受祝福的聖樹樹枝",
    cost: 4,
    grade: 3,
    atk: 420,
    modLv: "B"
  },
  {
    name: "飛翼結晶劍",
    cost: 4,
    atk: 800,
    modLv: "C",
    stance: {
      gain: 1
    }
  },
  {
    name: "報紙卷+12",
    cost: 2,
    atk: 200,
    modLv: "D"
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
    beforeWeapon: state => {
      if (state.freeze) {
        state.buff.push({bonus: 25, times: 1});
        state.freeze = false;
      }
    }
  },
  {
    name: "猛毒曲刀",
    cost: 4,
    grade: 3,
    atk: 200,
    modLv: "B",
    poison: {
      cond: state => state.poison.length,
      atk: 1440,
      turn: 2
    }
  },
  {
    name: "巨型西瓜冰棒",
    cost: 4,
    grade: 4,
    atk: 50,
    modLv: "S",
  },
  {
    name: "巨型西瓜冰棒（凍結）",
    cost: 4,
    grade: 4,
    water: {
      atk: 50,
      modLv: "S",
      modType: "atk",
      bonus: 10
    }
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
    name: "閃電萬雷大軍刀",
    cost: 5,
    grade: 4,
    atk: 500,
    modLv: "B"
  },
  {
    name: "閃電萬雷大軍刀（觸電）",
    cost: 5,
    casting: 3,
    grade: 4,
    atk: 500,
    atkType: "lightning",
    modLv: "B",
  },
  {
    name: "狂熱之聲",
    cost: 2,
    grade: 4,
    atk: 300,
    modLv: "F",
    stance: {
      gain: 1
    }
  },
  {
    name: "狂熱之聲．第二樂章",
    cost: 3,
    grade: 4,
    atk: 380,
    modLv: "E",
    stance: {
      use: 1,
      gain: 2,
      bonus: 30
    }
  },
  {
    name: "狂熱之聲．最終樂章",
    cost: 4,
    grade: 4,
    atk: 450,
    modLv: "C",
    stance: {
      use: 2,
      bonus: 50
    }
  },
  {
    name: "爆燃殆盡",
    cost: 3,
    grade: 4,
    atk: 70,
    modLv: "C",
    fire: {
      cond: state => state.fire,
      atk: 880
    }
  },
  {
    name: "劇毒蟲皇",
    cost: 4,
    grade: 4,
    atk: 200,
    modLv: "B",
    poison: {
      cond: state => state.poison.length,
      atk: 1800,
      turn: 3
    }
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
  },
  {
    name: "暗殺者之劍（背）",
    cost: 3,
    grade: 3,
    atk: 660,
    modLv: "E",
    stance: {
      gain: 1
    },
    bonus: 50
  },
  {
    name: "海盜彎刀",
    cost: 3,
    grade: 3,
    atk: 460,
    modLv: "D",
    stance: {
      gain: 1
    }
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
  },
  {
    name: "破滅寒冰（凍結）",
    cost: 4,
    grade: 4,
    atk: 420,
    atkType: "water",
    modLv: "A"
  },
  {
    name: "巨鯨之息",
    cost: 5,
    grade: 3,
    atk: 233,
    atkType: "heal",
    modLv: "E",
    modType: "int"
  },
  {
    name: "巨鯨之息（一式）",
    cost: 4,
    grade: 3,
    atk: 233,
    atkType: "heal",
    modLv: "E",
    modType: "int",
    stance: {
      gain: 2
    }
  },
  {
    name: "重騎兵之劍",
    cost: 5,
    grade: 4,
    atk: 380,
    modLv: "S"
  },
  {
    name: "重騎兵之劍（防守）",
    cost: 5,
    grade: 4,
    atk: 380,
    modLv: "S",
    bonus: 40
  },
  {
    name: "海鯊大劍",
    cost: 7,
    grade: 4,
    atk: 777,
    modLv: "SS",
    stance: {
      use: 2,
      bonus: 50
    }
  },
  {
    name: "大商會特製杖中劍",
    cost: 2,
    grade: 3,
    atk: 262,
    modLv: "F",
    stance: {
      gain: 1
    }
  },
  {
    name: "奧義（夏洛蒂）",
    cost: 5,
    atk: 2022,
    modLv: "Ex0"
  },
  {
    name: "奧義（夏洛蒂氣球）",
    cost: 2,
    atk: 0,
    atkType: "magic",
    modLv: "C0",
    modType: "int",
    hit: 2
  },
  {
    name: "奧義（夏洛蒂圖騰）（單次）",
    cost: 0,
    atk: 700,
    // NOTE: this get buffed by bonus
    atkType: "fire"
  }
];
