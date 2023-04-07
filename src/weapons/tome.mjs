const weapons = [
  {
    name: "閃耀之書",
    cost: 4,
    grade: 1,
    atk: 230,
    atkType: "magic",
    modLv: "E",
    modType: "str",
  },
  {
    name: "憤怒之書",
    cost: 2,
    grade: 1,
    buff: [{bonus: 15, times: 1}]
  },
  {
    name: "大回復之書",
    cost: 7,
    grade: 1,
    atk: 180,
    atkType: "heal",
    modLv: "D",
    modType: "int"
  },
  {
    name: "淨化之書",
    cost: 3,
    grade: 1,
    atk: 30,
    atkType: "heal",
    modLv: "F",
    modType: "int"
  },
  {
    name: "燃燒之書",
    cost: 4,
    grade: 1,
    atk: 150,
    atkType: "magic",
    modLv: "F",
    modType: "str",
    fire: {
      atk: 220,
      time: 4
    }
  },
  {
    name: "加速之書",
    cost: 4 - 1,
    grade: 1,
    atk: 110,
    atkType: "heal",
    modLv: "F",
    modType: "int",
  },
  {
    name: "快速回復之書",
    cost: 4,
    grade: 2,
    atk: 200,
    atkType: "heal",
    modLv: "D",
    modType: "int",
  },
  {
    name: "觸電之書",
    cost: 3,
    grade: 1,
    atk: 50,
    atkType: "magic",
    modLv: "E",
    modType: "str",
    lightning: {
      atk: 50,
      time: 6
    }
  },
  {
    name: "聖光之書",
    cost: 4,
    grade: 2,
    atk: 230,
    atkType: "magic",
    modLv: "D",
    modType: "str",
    collision: 1,
  },
  {
    name: "智慧之書",
    cost: 4,
    grade: 2,
    buff: [{int: 200, times: 99}]
  },
  {
    name: "高階回復之書",
    cost: 7,
    grade: 2,
    atk: 100,
    atkType: "heal",
    modLv: "C",
    modType: "int",
  },
  {
    name: "自由火蝶",
    cost: 4,
    grade: 4,
    fire: {
      atk: 720,
      time: 4
    }
  },
  {
    name: "清淨如水",
    cost: 6,
    grade: 3,
    atk: 155,
    atkType: "heal",
    modLv: "F",
    modType: "int",
    targets: 99
  },
  {
    name: "雷電蜂",
    cost: 4,
    grade: 3,
    atk: 100,
    atkType: "magic",
    modLv: "D",
    modType: "str",
    lightning: {
      atk: 145,
      time: 10
    }
  },
  {
    name: "猛炎之書",
    cost: 5,
    grade: 2,
    atk: 330,
    atkType: "magic",
    modLv: "E",
    modType: "str",
    fire: {
      atk: 480,
      time: 4
    }
  },
  {
    name: "美味食譜100選",
    cost: 8,
    grade: 3,
    atk: 400,
    atkType: "heal",
    modLv: "SS",
    modType: "int",
  },
  {
    name: "海魔獸歷史",
    cost: 4,
    grade: 3,
    atk: 100,
    atkType: "heal",
    modLv: "E",
    modType: "int",
  },
  {
    name: "冰之凝視",
    cost: 5,
    grade: 3,
    atk: 150,
    atkType: "heal",
    modLv: "D",
    modType: "int",
  },
  {
    name: "大馬達的激情",
    cost: 4,
    grade: 3,
    atk: 250,
    atkType: "heal",
    modLv: "E",
    modType: "int",
    buff: [
      {atk: 250, times: 99, int: -700},
    ]
  },
  {
    name: "火焰之加護",
    cost: 4,
    grade: 4,
    atk: 20,
    atkType: "heal",
    modLv: "D",
    modType: "int",
  },
  {
    name: "聖樹祭慶祝指南",
    cost: 5,
    grade: 3,
    atk: 50,
    atkType: "heal",
    modLv: "C",
    modType: "int",
    buff: [{def: 250, times: 99}]
  },
  {
    name: "夏洛蒂自傳",
    cost: 5,
    grade: 3,
    atk: 350,
    atkType: "magic",
    modLv: "C",
    modType: "str"
  },
  {
    name: "摺疊式音箱",
    cost: 4,
    grade: 4,
    atk: 80,
    atkType: "heal",
    modLv: "E",
    modType: "int"
  },
  {
    name: "摺疊式音箱．第二樂章",
    cost: 4,
    grade: 4,
    atk: 80,
    atkType: "heal",
    modLv: "E",
    modType: "int"
  },
  {
    name: "摺疊式音箱．最終樂章",
    cost: 3,
    grade: 4,
    atk: 80,
    atkType: "heal",
    modLv: "D",
    modType: "int",
    targets: 99
  },
  {
    name: "神怒之書",
    cost: 4,
    grade: 3,
    buff: [{bonus: 35, times: 1}]
  },
  {
    name: "航海指南",
    cost: 4,
    atk: 220,
    atkType: "heal",
    modLv: "C",
    modType: "int"
  },
  {
    name: "刨冰食用指南",
    cost: 4,
    grade: 4,
    water: {
      modLv: "C",
      modType: "int",
      time: 2
    }
  },
  {
    name: "深紅的日記",
    cost: 5,
    grade: 3,
    atk: 250,
    atkType: "magic",
    modLv: "E",
    modType: "str",
    fire: {
      modLv: 1.31,
      modType: "int",
      time: 5
    }
  },
  {
    name: "眾神之怒",
    cost: 3,
    grade: 4,
    buff: [{bonus: 30, times: 1}]
  },
  {
    name: "生命滿溢",
    cost: 5 - 2,
    grade: 4,
    atk: 300,
    atkType: "heal",
    modLv: "C",
    modType: "int",
  },
  {
    name: "聖火護盾",
    cost: 7,
    grade: 4,
    atk: 82,
    atkType: "heal",
    modLv: "B",
    modType: "int",
  },
  {
    name: "結晶智慧",
    cost: 4,
    grade: 2,
    buff: [{int: 400, times: 99}]
  },
  {
    name: "腥紅海鯊後援團守則",
    cost: 7,
    grade: 4,
    atk: 280,
    atkType: "heal",
    modLv: "C",
    modType: "int",
    targets: 99
  },
  {
    name: "奧義（辛西婭）",
    cost: 6,
    grade: 4,
    atk: 110,
    atkType: "magic",
    modLv: "S",
    modType: "str",
    targets: 99,
  },
  {
    name: "奧義（辛西婭）（地型）",
    cost: 0,
    grade: 4,
    atk: 975,
    atkType: "magic",
    targets: 99,
    hit: 10,
  },
  {
    name: "專武（辛西婭）",
    cost: 5,
    grade: 4,
    atk: 280,
    atkType: "magic",
    modLv: "A",
    modType: "str",
    targets: 99,
    bonus: 30,
    collision: 1,
  },
  {
    name: "專武（兔子莎蓮娜）",
    cost: 2,
    grade: 4,
    atk: 30,
    atkType: "heal",
    modLv: "E",
    modType: "int",
    targets: 1,
    bonus: 30,
  },
];

export default weapons;

export const buff = weapons.filter(w => w.buff && (!w.modLv && !w.atk));
