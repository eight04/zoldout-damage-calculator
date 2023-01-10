var wand=function(){"use strict";const a=[{name:"初等火焰法杖",cost:7,casting:3,grade:1,atk:210,modLv:"E0",fire:{atk:150,time:6},range:"middle"},{name:"木製法杖",cost:5,grade:1,atk:100,modLv:"B",range:"middle"},{name:"初等暴風法杖",cost:7,casting:4,grade:1,atk:286,modLv:"F",range:"large"},{name:"初等閃電法杖",cost:6,casting:5,grade:1,atk:480,modLv:"A",range:"small"},{name:"初等冰霜法杖",cost:7,casting:6,grade:1,atk:214,modLv:"D",water:{atk:450,time:5},range:"middle"},{name:"驅散法杖",cost:6,grade:1,atk:280,modLv:"B",range:"small"},{name:"火焰法杖",cost:5,casting:4,grade:2,atk:178,modLv:"C",fire:{atk:400,time:5},range:"middle"},{name:"力量強化杖",cost:3,casting:3,grade:2,buff:[{atk:200,times:99}],range:"nearSmall"},{name:"初級魔法凝聚",cost:3,grade:2,buff:[{bonus:10,times:1}],range:"single"},{name:"暴風法杖",cost:8,casting:4,grade:3,atk:200,modLv:"D",range:"large"},{name:"冰霜法杖",cost:7,casting:6,grade:2,atk:221,modLv:"B",water:{atk:760,time:5},range:"middle"},{name:"橡木法杖",cost:4,grade:2,atk:392,modLv:"D",range:"middle"},{name:"閃電法杖",cost:7,casting:5,grade:2,atk:860,modLv:"S",lightning:{atk:150,time:6},range:"small"},{name:"超級力量強化杖",cost:4,casting:4,grade:3,buff:[{atk:350,times:99}],range:"nearSmall"},{name:"小雞閃光杖",cost:3,casting:1,grade:2,atk:100,modLv:"F",range:"small"},{name:"骸蝶魅影",cost:12,casting:10,grade:4,atk:1340,modLv:"SSS",range:"middle"},{name:"暗影杖",cost:9,casting:7,grade:2,atk:450,modLv:"S",targetBuff:[{mdef:-150,times:99}],range:"middle"},{name:"灼熱日冕",cost:6,casting:5,grade:3,atk:293,modLv:"A",fire:{atk:700,time:5},range:"middle"},{name:"碧空颶風",cost:8,casting:4,grade:4,atk:120,modLv:"C",range:"large"},{name:"閃光法杖",cost:4,casting:2,grade:3,atk:150,modLv:"C",range:"small"},{name:"冰雕魔杖",cost:5,casting:4,grade:3,atk:65,modLv:"C",water:{atk:730,time:3},range:"middle"},{name:"高級魔法凝聚",cost:5,grade:4,buff:[{bonus:25,times:1}],range:"single"},{name:"絕對零度",cost:8,casting:7,grade:4,atk:226,modLv:"S",water:{atk:1500,time:6},range:"middle"},{name:"破邪法杖",cost:6,grade:3,atk:250,modLv:"A",range:"single"},{name:"草莓刨冰",cost:2,grade:4,atk:200,modLv:"F",targetBuff:[{waterInjuryBonus:15,times:999}],range:"single"},{name:"高效魔力轉換裝置",cost:8,casting:7,grade:3,atk:1650,modLv:"SS",range:"nearSmall"},{name:"純白之權杖",cost:7,casting:5,grade:3,atk:300,modLv:"C",bonus:80,range:"small"},{name:"邪龍煉獄黑王杖",cost:7,casting:6,atk:200,modLv:"S",fire:{modLv:1.6,modType:"int",time:6},range:"middle"},{name:"凍凍吉米杖",cost:7,casting:6,atk:0,modLv:"S",water:{modLv:"D0",modType:"int",time:5},range:"middle"},{name:"流水法杖",cost:6,casting:4,grade:3,atk:0,atkType:"water",modLv:"B",modType:"int",range:"small"},{name:"高壓閃電",cost:8,casting:5,grade:4,atk:1250,modLv:"SS",lightning:{atk:250,time:10},range:"small"},{name:"衛兵法杖",cost:10,casting:7,grade:4,atk:742,modLv:"A",range:"middle"},{name:"尤里走路",cost:2,grade:1,atk:900,range:"middle"},{name:"奧義（莉伊）",cost:10,casting:10,atk:952,modLv:"S0",range:"large"},{name:"奧義（奧蘿菈）",cost:7,casting:7,atk:500,modLv:"SS",range:"middle",water:{atk:4e3,time:6}},{name:"奧義（奧蘿菈）（冰）",cost:7,casting:7,atk:500,modLv:"SS",atkType:"water",range:"middle",water:{atk:4e3,time:6}},{name:"奧義（歌莉雅）",cost:6,casting:6,atk:1045,modLv:"A0",fire:{atk:1250,time:5},range:"large"},{name:"奧義（歌莉雅）（地型）",cost:6,casting:6,atk:1045,modLv:"A0",fire:{atk:3050,time:20}},{name:"奧義（新年莉伊）（煙花彈）",cost:10,casting:1,atk:600,modLv:"Ex0",range:"large",bonus:300},{name:"奧義（新年莉伊）",cost:10,casting:10,atk:600,modLv:"Ex0",range:"large"},{name:"奧義（西比拉）",cost:6,casting:6,atk:1450,modLv:"SS0",range:"middle"},{name:"專武（歌莉雅）",cost:5,atk:399,modLv:"D",range:"middle",fire:{atk:750,time:5}},{name:"專武（奧蘿菈）",cost:7,casting:7,atk:100,modLv:"B",range:"large",water:{atk:2800,time:7}},{name:"專武（聖誕梅米）",cost:8,casting:6,atk:300,modLv:"S",range:"large"},{name:"專武（新年莉伊）",cost:6,casting:6,atk:166,modLv:"SS",range:"large",bonus:30},{name:"專武（西比拉）",cost:7,casting:7,atk:1e3,modLv:"SSS",range:"large"}];return a.forEach((a=>{a.modType=a.modType||"int",a.atkType=a.atkType||"magic"})),new tome920Feaf9.A({target:document.body,props:{weapons:[...a,...tome920Feaf9.b],storeKey:"wand"}})}();
//# sourceMappingURL=wand.js.map
