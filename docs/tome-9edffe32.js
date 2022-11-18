var tome9Edffe32=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function r(t,e){t.appendChild(e)}function c(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function l(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function p(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t){return""===t?null:+t}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e){t.value=null==e?"":e}function v(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}t.selectedIndex=-1}function b(t,e,n){t.classList[n?"add":"remove"](e)}let $;function x(t){$=t}const w=[],T=[],C=[],_=[],R=Promise.resolve();let L=!1;function F(t){C.push(t)}function A(t){_.push(t)}const S=new Set;let E=0;function B(){const t=$;do{for(;E<w.length;){const t=w[E];E++,x(t),W(t.$$)}for(x(null),w.length=0,E=0;T.length;)T.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];S.has(e)||(S.add(e),e())}C.length=0}while(w.length);for(;_.length;)_.pop()();L=!1,S.clear(),x(t)}function W(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const H=new Set;function M(t,e){t&&t.i&&(H.delete(t),t.i(e))}function D(t,e,n,s){if(t&&t.o){if(H.has(t))return;H.add(t),undefined.c.push((()=>{H.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function O(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function j(t){t&&t.c()}function z(t,n,a,i){const{fragment:r,on_mount:c,on_destroy:u,after_update:l}=t.$$;r&&r.m(n,a),i||F((()=>{const n=c.map(e).filter(o);u?u.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(F)}function I(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function P(t,e){-1===t.$$.dirty[0]&&(w.push(t),L||(L=!0,R.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,o,a,i,r,c,l,f=[-1]){const d=$;x(e);const m=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};l&&l(m.root);let p=!1;if(m.ctx=a?a(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return m.ctx&&r(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),p&&P(e,t)),n})):[],m.update(),p=!0,s(m.before_update),m.fragment=!!i&&i(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();o.intro&&M(e.$$.fragment),z(e,o.target,o.anchor,o.customElement),B()}x(d)}class K{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(e){let n,s,o,a;return{c(){n=f("button"),s=d(e[2]),g(n,"class","svelte-19loasr"),b(n,"sorted",e[0].field===e[1]),b(n,"reversed",e[0].dir<0)},m(t,i){c(t,n,i),r(n,s),o||(a=p(n,"click",e[3]),o=!0)},p(t,[e]){4&e&&y(s,t[2]),3&e&&b(n,"sorted",t[0].field===t[1]),1&e&&b(n,"reversed",t[0].dir<0)},i:t,o:t,d(t){t&&u(n),o=!1,a()}}}function J(t,e,n){let{method:s,field:o,text:a}=e;return t.$$set=t=>{"method"in t&&n(0,s=t.method),"field"in t&&n(1,o=t.field),"text"in t&&n(2,a=t.text)},[s,o,a,function(){s.field!==o?(n(0,s.field=o,s),n(0,s.dir=1,s)):n(0,s.dir*=-1,s)}]}class Z extends K{constructor(t){super(),N(this,t,J,q,a,{method:0,field:1,text:2})}}const G=location.pathname.match(/([^/.]*)(\.html)?$/),Q=G[1]&&"index"!==G[1]?G[1]:"sword";function U(e){let n,s,o,a,i,l,d,p;return{c(){n=f("ul"),s=f("li"),s.innerHTML='<a href="." class="svelte-116mxxw">劍</a>',o=m(),a=f("li"),a.innerHTML='<a href="bow.html" class="svelte-116mxxw">弓</a>',i=m(),l=f("li"),l.innerHTML='<a href="wand.html" class="svelte-116mxxw">杖</a>',d=m(),p=f("li"),p.innerHTML='<a href="tome.html" class="svelte-116mxxw">書</a>',g(s,"class","svelte-116mxxw"),b(s,"active","sword"===Q),g(a,"class","svelte-116mxxw"),b(a,"active","bow"===Q),g(l,"class","svelte-116mxxw"),b(l,"active","wand"===Q),g(p,"class","svelte-116mxxw"),b(p,"active","tome"===Q),g(n,"class","svelte-116mxxw")},m(t,e){c(t,n,e),r(n,s),r(n,o),r(n,a),r(n,i),r(n,l),r(n,d),r(n,p)},p:t,i:t,o:t,d(t){t&&u(n)}}}class V extends K{constructor(t){super(),N(this,t,null,U,a,{})}}const X=[];const Y="zoldout-damage-calculator",tt=new Map;function et(e,n){if(tt.has(e))return tt.get(e);const s=function(e,n=t){let s;const o=new Set;function i(t){if(a(e,t)&&(e=t,s)){const t=!X.length;for(const t of o)t[1](),X.push(t,e);if(t){for(let t=0;t<X.length;t+=2)X[t][0](X[t+1]);X.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(a,r=t){const c=[a,r];return o.add(c),1===o.size&&(s=n(i)||t),a(e),()=>{o.delete(c),0===o.size&&(s(),s=null)}}}}(function(t){try{return JSON.parse(t)}catch{}}(localStorage.getItem(`${Y}/${e}`))??n);return s.subscribe((t=>localStorage.setItem(`${Y}/${e}`,JSON.stringify(t)))),tt.set(e,s),s}var nt=[{name:"攻擊力增加（維羅尼卡）",type:"sword",beforeAll:t=>{t.buff.push({bonus:20,times:99})}},{name:"攻擊力增加（夏洛蒂）",type:"sword",beforeAll:t=>{t.buff.push({bonus:45,times:99})}},{name:"傷害後攻擊增加（艾莉諾拉）",type:"bow",afterHit:t=>{t.buff.push({bonus:5,times:99})}},{name:"第2+次傷害攻擊機率增加（艾莉諾拉）",type:"bow",afterHit:t=>{1===t.totalHit&&t.buff.push({bonus:21,times:99})}},{name:"使用武器後中毒（格蕾絲）",type:"bow",afterWeapon:(t,e)=>{t.hit&&!e.name.includes("奧義")&&t.poison.push({atk:300,turn:2,bonus:0})}},{name:"製造虛影（菲恩）",type:"bow",beforeAll:t=>{t.moves=0,t.isShadow=!1},afterWeapon:(t,e)=>{if("移動"===e.name)return void t.moves++;if(t.isShadow)return;let{atk:n,buff:s,cost:o,damage:a}=t;t.isShadow=!0,t.atk=1047,t.buff=[];for(let n=0;n<t.moves;n++)t.processWeapon(e),a+=t.damage;t.atk=n,t.buff=s,t.cost=o,t.isShadow=!1,t.damage=a}},{name:"傷害後點燃或額外傷害（艾娜）",type:"bow",afterHit:t=>{t.fire?t.damage+=360*t.getFireResist():(t.fire=!0,t.damage+=540*t.getFireResist())}},{name:"使用火武器後加速（歌莉雅）",type:"wand",afterWeapon:(t,e)=>{e.fire?.atk&&(t.cost-=2)}},{name:"著火時增傷、減抗（歌莉雅）",type:"buff",beforeHit:t=>{let e=t.targetBuff.find((t=>"goriya1"===t.id));e||(e={id:"goriya1",times:99},t.targetBuff.push(e)),e.injuryBonus=t.fire?10:0,e.fireResist=t.fire?-10:0}},{name:"大範圍武器加速、攻擊增加（聖樹梅米）",type:"wand",beforeWeapon:(t,e)=>{"large"===e.range&&(t.cost-=1,t.hit&&t.buff.push({bonus:10,times:1}))}},{name:"額外傷害（尤里+泳裝伊蓮）",type:"wand",afterWeapon:(t,e)=>{e.water&&(t.damage+=2*(900-t.getDef({atkType:"magic"})))}},{name:"魔攻增加（西比拉）",type:"wand",beforeWeapon:(t,e)=>{e.casting>=6&&t.hit&&t.buff.push({bonus:25,times:1})}},{name:"生命回復（塔尼亞）",type:"tome",afterWeapon:(t,e)=>{t.hit&&"heal"!==e.atkType||(t.damage+=360)}},{name:"加速（塔尼亞）",type:"tome",afterWeapon:(t,e)=>{(!t.hit&&e.buff||"heal"===e.atkType)&&t.cost--}}];const st={F:.85,E:1.1,D:1.35,C:1.6,B:1.85,A:2.1,S:2.35,SS:2.6,SSS:2.85,Ex:3.1};for(const t in st)st[`${t}0`]=st[t]-.1;class ot{constructor({hp:t,atk:e,def:n,int:s,mdef:o,fireResist:a,waterResist:i,poisonResist:r,lightningResist:c,fire:u=!1,freeze:l=!1,poison:f=!1,poisonTurns:d,stance:m=0,maxTargets:p=1,passive:g}){this.hp=t,this.atk=e,this.def=n,this.int=s,this.mdef=o,this.fireResist=a,this.waterResist=i,this.poisonResist=r,this.lightningResist=c,this.poisonTurns=d,this.maxTargets=p,this.passive=g,this.damage=0,this.hit=0,this.totalHit=0,this.stance=m,this.totalHit=0,this.buff=[],this.targetBuff=[],this.targets=0,this.poison=f?[{atk:0,turn:99}]:[],this.lightning={},this.fire=u,this.freeze=l}clone(t={}){const e=new ot({});return Object.assign(e,this,t),e}getDef(t){return it(this,t)}getResist(t){return(100-(this[t]+this.targetBuff.reduce(((e,n)=>e+(n[t]||0)),0)))/100}getFireResist(){return this.getResist("fireResist")}getWaterResist(){return this.getResist("waterResist")}getPoisonResist(){return this.getResist("poisonResist")}getLightningResist(){return this.getResist("lightningResist")}getInjuryBonus(){return(this.targetBuff.reduce(((t,e)=>t+(e.injuryBonus||0)),0)+100)/100}getWaterAtk(t){return rt(this,t)}getFireAtk(t){return rt(this,t)}getLightningAtk(t){return rt(this,t)}getPoisonAtk(t){return rt(this,t)}processWeapon(t){return lt(this,t)}}function at({weapons:t,passiveIds:e,...n}){const s=nt.filter(((t,n)=>e.includes(n))),o=[],a=new ot({...n,passive:s});ut(a,null,"beforeAll");for(const e of t){const t=dt(a,e);o.push(t)}const i=o.reduce(((t,e)=>t+e.damage),0),r=o.reduce(((t,e)=>t+e.cost),0);return{stages:o,summary:{damage:i,cost:r,executeCost:Math.ceil(a.hp/i)*r,cp:i/r}}}function it({def:t,mdef:e,targetBuff:n},{atkType:s}){return"heal"===s||"water"===s||"fire"===s||"poison"===s||"lightning"===s?0:"magic"===s?Math.max(e+n.reduce(((t,e)=>t+(e.mdef||0)),0),0):Math.max(t+n.reduce(((t,e)=>t+(e.def||0)),0),0)}function rt({atk:t,int:e,buff:n},{modType:s,modLv:o,atk:a=0,bonus:i=0}){const r="int"===s?e+n.reduce(((t,e)=>t+(e.int||0)),0):t+n.reduce(((t,e)=>t+(e.atk||0)),0);return(a+(o?r*function(t){if("number"==typeof t)return t;if(st[t])return st[t];throw new Error(`unknown modLv: ${t}`)}(o):0))*(i+100)/100}function ct({poison:t,poisonTurns:e,poisonResist:n}){let s=0;for(const o of t)o.atk&&(s+=o.atk*Math.min(o.turn,e)/o.turn*(100-n)/100);return s}function ut(t,e,n){t.passive.forEach((s=>s[n]?.(t,e))),e?.[n]?.(t)}function lt(t,e){t.cost=e.casting||e.cost,t.hit=e.hit||(e.atk||e.modLv?1:0),t.damage=0,t.targets=Math.min(t.maxTargets,e.targets||1);const n=it(t,e),s=function(t,{atkType:e}){return"fire"===e?t.getFireResist():"water"===e?t.getWaterResist():"poison"===e?t.getPoisonResist():"lightning"===e?t.getLightningResist():1}(t,e);ut(t,e,"beforeWeapon");for(let o=0;o<t.hit;o++){ut(t,e,"beforeHit"),t.currentHit=o+1,t.totalHit++;let a=rt(t,e);a*=t.buff.reduce(((t,e)=>t*(e.bonus?(e.bonus+100)/100:1)),1),e.stance?.use===t.stance&&(a*=((e.stance.bonus||0)+100)/100),t.damage+=Math.max(a-n,1)*s*t.getInjuryBonus()*t.targets,t.lightning?.atk&&(t.damage+=t.lightning.atk*(100-t.lightningResist)/100*t.targets),ut(t,e,"afterHit")}if(t.hit&&(t.buff=t.buff.map((t=>({...t,times:t.times-1}))).filter((t=>t.times>0)),t.targetBuff=t.targetBuff.map((t=>({...t,times:t.times-1}))).filter((t=>t.times>0))),e.trap){const n=t.clone({passive:[],buff:[]});n.processWeapon(e.trap),t.damage+=n.damage}if(!e.fire||e.fire.cond&&!e.fire.cond(t)||(t.damage+=t.getFireAtk(e.fire)*t.getFireResist()*t.targets,e.fire.time&&(t.fire=!0)),!e.water||e.water.cond&&!e.water.cond(t)||(t.damage+=t.getWaterAtk(e.water)*(100-t.waterResist)/100*t.targets,e.water.time&&(t.freeze=!0)),e.lightning&&(!e.lightning.cond||e.lightning.cond(t))){const n=t.getLightningAtk(e.lightning);t.damage+=n*(100-t.lightningResist)/100*t.targets,(!t.lightning.atk||e.lightning.time>t.lightning.time)&&(t.lightning.atk=n,t.lightning.time=e.lightning.time)}if(e.poison&&(!e.poison.cond||e.poison.cond(t))){for(let n=0;n<t.targets;n++)t.poison.push({atk:t.getPoisonAtk(e.poison),turn:e.poison.turn,bonus:0});e.poison.bonus&&(t.poison=t.poison.map((t=>{const n=(t.bonus+100)*(e.poison.bonus+100)/100-100;return{...t,bonus:Math.min(n,200)}})))}e.buff&&ft(t.buff,e.buff),e.targetBuff&&ft(t.targetBuff,e.targetBuff),e.stance?.use===t.stance&&e.stance.buff&&ft(t.buff,e.stance.buff),null!=e.stance?.gain&&(t.stance=e.stance.gain),ut(t,e,"afterWeapon")}function ft(t,e){const n=new Map(t.map(((t,e)=>[t.id,e])));for(const s of e)s.id&&n.has(s.id)?t[n.get(s.id)]=s:t.push(s)}function dt(t,e){const n=ct(t);return lt(t,e),t.damage+=ct(t)-n,{damage:t.damage,cost:t.cost}}function mt(t,e,n){const s=t.slice();return s[78]=e[n],s}function pt(t,e,n){const s=t.slice();return s[81]=e[n],s[82]=e,s[83]=n,s}function gt(t,e,n){const s=t.slice();return s[84]=e[n],s}function ht(t,e,n){const s=t.slice();return s[87]=e[n],s[83]=n,s}function yt(t){let e,n=(Q===t[87].type||"buff"===t[87].type)&&function(t){let e,n,s,o,a,i,l,h,y=t[87].name+"";return{c(){e=f("label"),n=f("input"),s=m(),o=f("span"),a=d(y),i=m(),g(n,"type","checkbox"),n.__value=t[83],n.value=n.__value,t[65][0].push(n),g(e,"class","cspan svelte-k7rdoy")},m(u,f){c(u,e,f),r(e,n),n.checked=~t[9].indexOf(n.__value),r(e,s),r(e,o),r(o,a),r(e,i),l||(h=p(n,"change",t[64]),l=!0)},p(t,e){512&e[0]&&(n.checked=~t[9].indexOf(n.__value))},d(s){s&&u(e),t[65][0].splice(t[65][0].indexOf(n),1),l=!1,h()}}}(t);return{c(){n&&n.c(),e=d("")},m(t,s){n&&n.m(t,s),c(t,e,s)},p(t,e){Q!==t[87].type&&"buff"!==t[87].type||n.p(t,e)},d(t){n&&n.d(t),t&&u(e)}}}function kt(t){let e,n,s,o=t[84].name+"";return{c(){e=f("option"),n=d(o),e.__value=s=t[84],e.value=e.__value},m(t,s){c(t,e,s),r(e,n)},p(t,a){1&a[0]&&o!==(o=t[84].name+"")&&y(n,o),1&a[0]&&s!==(s=t[84])&&(e.__value=s,e.value=e.__value)},d(t){t&&u(e)}}}function vt(t){let e,n,o,a,i,h,k,b,$,x,w,T,C,_,R,L,A,S,E,B,W,H=t[2].stages[t[83]]?.cost+"",M=t[2].stages[t[83]]?.damage.toFixed(0)+"",D=((t[2].stages[t[83]]?.damage||0)/t[2].stages[t[83]]?.cost).toFixed(0)+"",O=t[0],j=[];for(let e=0;e<O.length;e+=1)j[e]=kt(gt(t,O,e));function z(){t[66].call(e,t[82],t[83])}function I(){return t[67](t[83])}function P(){return t[68](t[83])}function N(){return t[69](t[83])}function K(){return t[70](t[83])}return{c(){e=f("select");for(let t=0;t<j.length;t+=1)j[t].c();n=m(),o=f("span"),a=d(H),i=m(),h=f("span"),k=d(M),b=m(),$=f("span"),x=d(D),w=m(),T=f("div"),C=f("button"),C.textContent="↑",_=m(),R=f("button"),R.textContent="↓",L=m(),A=f("button"),A.textContent="⎘",S=m(),E=f("button"),E.textContent="x",g(e,"class","svelte-k7rdoy"),void 0===t[81]&&F(z),g(o,"class","svelte-k7rdoy"),g(h,"class","svelte-k7rdoy"),g($,"class","svelte-k7rdoy"),g(T,"class","operation svelte-k7rdoy")},m(s,u){c(s,e,u);for(let t=0;t<j.length;t+=1)j[t].m(e,null);v(e,t[81]),c(s,n,u),c(s,o,u),r(o,a),c(s,i,u),c(s,h,u),r(h,k),c(s,b,u),c(s,$,u),r($,x),c(s,w,u),c(s,T,u),r(T,C),r(T,_),r(T,R),r(T,L),r(T,A),r(T,S),r(T,E),B||(W=[p(e,"change",z),p(C,"click",I),p(R,"click",P),p(A,"click",N),p(E,"click",K)],B=!0)},p(n,s){if(t=n,1&s[0]){let n;for(O=t[0],n=0;n<O.length;n+=1){const o=gt(t,O,n);j[n]?j[n].p(o,s):(j[n]=kt(o),j[n].c(),j[n].m(e,null))}for(;n<j.length;n+=1)j[n].d(1);j.length=O.length}3&s[0]&&v(e,t[81]),4&s[0]&&H!==(H=t[2].stages[t[83]]?.cost+"")&&y(a,H),4&s[0]&&M!==(M=t[2].stages[t[83]]?.damage.toFixed(0)+"")&&y(k,M),4&s[0]&&D!==(D=((t[2].stages[t[83]]?.damage||0)/t[2].stages[t[83]]?.cost).toFixed(0)+"")&&y(x,D)},d(t){t&&u(e),l(j,t),t&&u(n),t&&u(o),t&&u(i),t&&u(h),t&&u(b),t&&u($),t&&u(w),t&&u(T),B=!1,s(W)}}}function bt(t){let e,n,s,o,a,i,l,h,k,v,b,$,x,w,T,C,_,R,L=t[78].name+"",F=t[78].cost+"",A=t[78].damage.toFixed(0)+"",S=t[78].cp.toFixed(0)+"",E=t[78].executeCost+"";function B(){return t[76](t[78])}return{c(){e=f("span"),n=d(L),s=m(),o=f("span"),a=d(F),i=m(),l=f("span"),h=d(A),k=m(),v=f("span"),b=d(S),$=m(),x=f("span"),w=d(E),T=m(),C=f("button"),C.textContent="x",g(e,"class","svelte-k7rdoy"),g(o,"class","svelte-k7rdoy"),g(l,"class","svelte-k7rdoy"),g(v,"class","svelte-k7rdoy"),g(x,"class","svelte-k7rdoy"),g(C,"class","svelte-k7rdoy")},m(t,u){c(t,e,u),r(e,n),c(t,s,u),c(t,o,u),r(o,a),c(t,i,u),c(t,l,u),r(l,h),c(t,k,u),c(t,v,u),r(v,b),c(t,$,u),c(t,x,u),r(x,w),c(t,T,u),c(t,C,u),_||(R=p(C,"click",B),_=!0)},p(e,s){t=e,8&s[0]&&L!==(L=t[78].name+"")&&y(n,L),8&s[0]&&F!==(F=t[78].cost+"")&&y(a,F),8&s[0]&&A!==(A=t[78].damage.toFixed(0)+"")&&y(h,A),8&s[0]&&S!==(S=t[78].cp.toFixed(0)+"")&&y(b,S),8&s[0]&&E!==(E=t[78].executeCost+"")&&y(w,E)},d(t){t&&u(e),t&&u(s),t&&u(o),t&&u(i),t&&u(l),t&&u(k),t&&u(v),t&&u($),t&&u(x),t&&u(T),t&&u(C),_=!1,R()}}}function $t(t){let e,n,o,a,i,v,b,$,x,w,C,_,R,L,F,S,E,B,W,H,P,N,K,q,J,G,Q,U,X,Y,tt,et,st,ot,at,it,rt,ct,ut,lt,ft,dt,gt,kt,$t,xt,wt,Tt,Ct,_t,Rt,Lt,Ft,At,St,Et,Bt,Wt,Ht,Mt,Dt,Ot,jt,zt,It,Pt,Nt,Kt,qt,Jt,Zt,Gt,Qt,Ut,Vt,Xt,Yt,te,ee,ne,se,oe,ae,ie,re,ce,ue,le,fe,de,me,pe,ge,he,ye,ke,ve,be,$e,xe,we,Te,Ce,_e,Re,Le,Fe,Ae,Se,Ee,Be,We,He,Me,De,Oe,je,ze,Ie,Pe,Ne,Ke,qe,Je,Ze=t[2].summary.cost+"",Ge=t[2].summary.damage.toFixed(0)+"",Qe=t[2].summary.cp.toFixed(0)+"";o=new V({});let Ue=nt,Ve=[];for(let e=0;e<Ue.length;e+=1)Ve[e]=yt(ht(t,Ue,e));let Xe=t[1],Ye=[];for(let e=0;e<Xe.length;e+=1)Ye[e]=vt(pt(t,Xe,e));function tn(e){t[71](e)}let en={field:"name",text:"Name"};function nn(e){t[72](e)}void 0!==t[4]&&(en.method=t[4]),Ce=new Z({props:en}),T.push((()=>O(Ce,"method",tn)));let sn={field:"cost",text:"Cost"};function on(e){t[73](e)}void 0!==t[4]&&(sn.method=t[4]),Le=new Z({props:sn}),T.push((()=>O(Le,"method",nn)));let an={field:"damage",text:"Damage"};function rn(e){t[74](e)}void 0!==t[4]&&(an.method=t[4]),Se=new Z({props:an}),T.push((()=>O(Se,"method",on)));let cn={field:"cp",text:"CP"};function un(e){t[75](e)}void 0!==t[4]&&(cn.method=t[4]),We=new Z({props:cn}),T.push((()=>O(We,"method",rn)));let ln={field:"executeCost",text:"斬殺Cost"};void 0!==t[4]&&(ln.method=t[4]),De=new Z({props:ln}),T.push((()=>O(De,"method",un)));let fn=t[3],dn=[];for(let e=0;e<fn.length;e+=1)dn[e]=bt(mt(t,fn,e));return{c(){e=f("h1"),e.textContent="Zold:Out Damage Calculator",n=m(),j(o.$$.fragment),a=m(),i=f("div"),v=f("span"),v.textContent="血量",b=m(),$=f("input"),x=m(),w=f("span"),w.textContent="力量",C=m(),_=f("input"),R=m(),L=f("span"),L.textContent="防禦",F=m(),S=f("input"),E=m(),B=f("span"),B.textContent="智力",W=m(),H=f("input"),P=m(),N=f("span"),N.textContent="魔防",K=m(),q=f("input"),J=m(),G=f("span"),G.textContent="火抗",Q=m(),U=f("input"),X=m(),Y=f("span"),Y.textContent="水抗",tt=m(),et=f("input"),st=m(),ot=f("span"),ot.textContent="毒抗",at=m(),it=f("input"),rt=m(),ct=f("span"),ct.textContent="雷抗",ut=m(),lt=f("input"),ft=m(),dt=f("label"),gt=f("input"),kt=m(),$t=f("span"),$t.textContent="敵人凍結",xt=m(),wt=f("label"),Tt=f("input"),Ct=m(),_t=f("span"),_t.textContent="敵人著火",Rt=m(),Lt=f("label"),Ft=f("input"),At=m(),St=f("span"),St.textContent="敵人中毒",Et=m(),Bt=f("label"),Wt=f("input"),Ht=m(),Mt=f("span"),Mt.textContent="敵人觸電",Dt=m(),Ot=f("span"),Ot.textContent="中毒發生次數",jt=m(),zt=f("input"),It=m(),Pt=f("span"),Pt.textContent="當前架勢",Nt=m(),Kt=f("input"),qt=m();for(let t=0;t<Ve.length;t+=1)Ve[t].c();Jt=m(),Zt=f("h2"),Zt.textContent="Combo",Gt=m(),Qt=f("div"),Ut=f("span"),Ut.textContent="Weapon",Vt=m(),Xt=f("span"),Xt.textContent="Cost",Yt=m(),te=f("span"),te.textContent="Damage",ee=m(),ne=f("span"),ne.textContent="CP",se=m(),oe=f("span"),ae=m();for(let t=0;t<Ye.length;t+=1)Ye[t].c();ie=m(),re=f("span"),re.textContent="Summary",ce=m(),ue=f("span"),le=d(Ze),fe=m(),de=f("span"),me=d(Ge),pe=m(),ge=f("span"),he=d(Qe),ye=m(),ke=f("button"),ke.textContent="Add to compare list",ve=m(),be=f("h2"),be.textContent="Compare",$e=m(),xe=f("button"),xe.textContent="Add all weapons",we=m(),Te=f("div"),j(Ce.$$.fragment),Re=m(),j(Le.$$.fragment),Ae=m(),j(Se.$$.fragment),Be=m(),j(We.$$.fragment),Me=m(),j(De.$$.fragment),je=m(),ze=f("span"),Ie=m();for(let t=0;t<dn.length;t+=1)dn[t].c();Pe=m(),Ne=f("footer"),Ne.innerHTML='<a href="https://github.com/eight04/zoldout-damage-calculator">zoldout-damage-calculator</a>',g($,"type","number"),g($,"class","cspan3 svelte-k7rdoy"),g(_,"type","number"),g(S,"type","number"),g(H,"type","number"),g(q,"type","number"),g(U,"type","number"),g(et,"type","number"),g(it,"type","number"),g(lt,"type","number"),g(gt,"type","checkbox"),g(dt,"class","cspan svelte-k7rdoy"),g(Tt,"type","checkbox"),g(wt,"class","cspan svelte-k7rdoy"),g(Ft,"type","checkbox"),g(Lt,"class","cspan svelte-k7rdoy"),g(Wt,"type","checkbox"),g(Bt,"class","cspan svelte-k7rdoy"),g(zt,"type","number"),g(Kt,"type","number"),g(i,"class","base-info svelte-k7rdoy"),g(Ut,"class","chead svelte-k7rdoy"),g(Xt,"class","chead svelte-k7rdoy"),g(te,"class","chead svelte-k7rdoy"),g(ne,"class","chead svelte-k7rdoy"),g(oe,"class","operation svelte-k7rdoy"),g(re,"class","chead svelte-k7rdoy"),g(ue,"class","svelte-k7rdoy"),g(de,"class","svelte-k7rdoy"),g(ge,"class","svelte-k7rdoy"),g(Qt,"class","combo-table svelte-k7rdoy"),g(ze,"class","svelte-k7rdoy"),g(Te,"class","compare-list svelte-k7rdoy"),g(Ne,"class","svelte-k7rdoy")},m(s,u){c(s,e,u),c(s,n,u),z(o,s,u),c(s,a,u),c(s,i,u),r(i,v),r(i,b),r(i,$),k($,t[20]),r(i,x),r(i,w),r(i,C),r(i,_),k(_,t[19]),r(i,R),r(i,L),r(i,F),r(i,S),k(S,t[18]),r(i,E),r(i,B),r(i,W),r(i,H),k(H,t[17]),r(i,P),r(i,N),r(i,K),r(i,q),k(q,t[16]),r(i,J),r(i,G),r(i,Q),r(i,U),k(U,t[8]),r(i,X),r(i,Y),r(i,tt),r(i,et),k(et,t[7]),r(i,st),r(i,ot),r(i,at),r(i,it),k(it,t[6]),r(i,rt),r(i,ct),r(i,ut),r(i,lt),k(lt,t[5]),r(i,ft),r(i,dt),r(dt,gt),gt.checked=t[14],r(dt,kt),r(dt,$t),r(i,xt),r(i,wt),r(wt,Tt),Tt.checked=t[15],r(wt,Ct),r(wt,_t),r(i,Rt),r(i,Lt),r(Lt,Ft),Ft.checked=t[13],r(Lt,At),r(Lt,St),r(i,Et),r(i,Bt),r(Bt,Wt),Wt.checked=t[12],r(Bt,Ht),r(Bt,Mt),r(i,Dt),r(i,Ot),r(i,jt),r(i,zt),k(zt,t[11]),r(i,It),r(i,Pt),r(i,Nt),r(i,Kt),k(Kt,t[10]),r(i,qt);for(let t=0;t<Ve.length;t+=1)Ve[t].m(i,null);c(s,Jt,u),c(s,Zt,u),c(s,Gt,u),c(s,Qt,u),r(Qt,Ut),r(Qt,Vt),r(Qt,Xt),r(Qt,Yt),r(Qt,te),r(Qt,ee),r(Qt,ne),r(Qt,se),r(Qt,oe),r(Qt,ae);for(let t=0;t<Ye.length;t+=1)Ye[t].m(Qt,null);r(Qt,ie),r(Qt,re),r(Qt,ce),r(Qt,ue),r(ue,le),r(Qt,fe),r(Qt,de),r(de,me),r(Qt,pe),r(Qt,ge),r(ge,he),c(s,ye,u),c(s,ke,u),c(s,ve,u),c(s,be,u),c(s,$e,u),c(s,xe,u),c(s,we,u),c(s,Te,u),z(Ce,Te,null),r(Te,Re),z(Le,Te,null),r(Te,Ae),z(Se,Te,null),r(Te,Be),z(We,Te,null),r(Te,Me),z(De,Te,null),r(Te,je),r(Te,ze),r(Te,Ie);for(let t=0;t<dn.length;t+=1)dn[t].m(Te,null);c(s,Pe,u),c(s,Ne,u),Ke=!0,qe||(Je=[p($,"input",t[49]),p(_,"input",t[50]),p(S,"input",t[51]),p(H,"input",t[52]),p(q,"input",t[53]),p(U,"input",t[54]),p(et,"input",t[55]),p(it,"input",t[56]),p(lt,"input",t[57]),p(gt,"change",t[58]),p(Tt,"change",t[59]),p(Ft,"change",t[60]),p(Wt,"change",t[61]),p(zt,"input",t[62]),p(Kt,"input",t[63]),p(ke,"click",t[42]),p(xe,"click",t[44])],qe=!0)},p(t,e){if(1048576&e[0]&&h($.value)!==t[20]&&k($,t[20]),524288&e[0]&&h(_.value)!==t[19]&&k(_,t[19]),262144&e[0]&&h(S.value)!==t[18]&&k(S,t[18]),131072&e[0]&&h(H.value)!==t[17]&&k(H,t[17]),65536&e[0]&&h(q.value)!==t[16]&&k(q,t[16]),256&e[0]&&h(U.value)!==t[8]&&k(U,t[8]),128&e[0]&&h(et.value)!==t[7]&&k(et,t[7]),64&e[0]&&h(it.value)!==t[6]&&k(it,t[6]),32&e[0]&&h(lt.value)!==t[5]&&k(lt,t[5]),16384&e[0]&&(gt.checked=t[14]),32768&e[0]&&(Tt.checked=t[15]),8192&e[0]&&(Ft.checked=t[13]),4096&e[0]&&(Wt.checked=t[12]),2048&e[0]&&h(zt.value)!==t[11]&&k(zt,t[11]),1024&e[0]&&h(Kt.value)!==t[10]&&k(Kt,t[10]),512&e[0]){let n;for(Ue=nt,n=0;n<Ue.length;n+=1){const s=ht(t,Ue,n);Ve[n]?Ve[n].p(s,e):(Ve[n]=yt(s),Ve[n].c(),Ve[n].m(i,null))}for(;n<Ve.length;n+=1)Ve[n].d(1);Ve.length=Ue.length}if(7&e[0]|1792&e[1]){let n;for(Xe=t[1],n=0;n<Xe.length;n+=1){const s=pt(t,Xe,n);Ye[n]?Ye[n].p(s,e):(Ye[n]=vt(s),Ye[n].c(),Ye[n].m(Qt,ie))}for(;n<Ye.length;n+=1)Ye[n].d(1);Ye.length=Xe.length}(!Ke||4&e[0])&&Ze!==(Ze=t[2].summary.cost+"")&&y(le,Ze),(!Ke||4&e[0])&&Ge!==(Ge=t[2].summary.damage.toFixed(0)+"")&&y(me,Ge),(!Ke||4&e[0])&&Qe!==(Qe=t[2].summary.cp.toFixed(0)+"")&&y(he,Qe);const n={};!_e&&16&e[0]&&(_e=!0,n.method=t[4],A((()=>_e=!1))),Ce.$set(n);const s={};!Fe&&16&e[0]&&(Fe=!0,s.method=t[4],A((()=>Fe=!1))),Le.$set(s);const o={};!Ee&&16&e[0]&&(Ee=!0,o.method=t[4],A((()=>Ee=!1))),Se.$set(o);const a={};!He&&16&e[0]&&(He=!0,a.method=t[4],A((()=>He=!1))),We.$set(a);const r={};if(!Oe&&16&e[0]&&(Oe=!0,r.method=t[4],A((()=>Oe=!1))),De.$set(r),8&e[0]|4096&e[1]){let n;for(fn=t[3],n=0;n<fn.length;n+=1){const s=mt(t,fn,n);dn[n]?dn[n].p(s,e):(dn[n]=bt(s),dn[n].c(),dn[n].m(Te,null))}for(;n<dn.length;n+=1)dn[n].d(1);dn.length=fn.length}},i(t){Ke||(M(o.$$.fragment,t),M(Ce.$$.fragment,t),M(Le.$$.fragment,t),M(Se.$$.fragment,t),M(We.$$.fragment,t),M(De.$$.fragment,t),Ke=!0)},o(t){D(o.$$.fragment,t),D(Ce.$$.fragment,t),D(Le.$$.fragment,t),D(Se.$$.fragment,t),D(We.$$.fragment,t),D(De.$$.fragment,t),Ke=!1},d(t){t&&u(e),t&&u(n),I(o,t),t&&u(a),t&&u(i),l(Ve,t),t&&u(Jt),t&&u(Zt),t&&u(Gt),t&&u(Qt),l(Ye,t),t&&u(ye),t&&u(ke),t&&u(ve),t&&u(be),t&&u($e),t&&u(xe),t&&u(we),t&&u(Te),I(Ce),I(Le),I(Se),I(We),I(De),l(dn,t),t&&u(Pe),t&&u(Ne),qe=!1,s(Je)}}}function xt(t,e,n){let s,o,a,r,c,u,l,f,d,m,p,g,y,k,v,b,$,x,{weapons:w,storeKey:T}=e;w.unshift({name:"移動",cost:"sword"===Q?1:2});const C=Object.fromEntries(w.map((t=>[t.name,t]))),_=et(`${T}/atk`,700);i(t,_,(t=>n(19,$=t)));const R=et("comm/def",200);i(t,R,(t=>n(18,b=t)));const L=et(`${T}/int`,700);i(t,L,(t=>n(17,v=t)));const F=et("comm/mdef",200);i(t,F,(t=>n(16,k=t)));const A=et("comm/hp",2736);i(t,A,(t=>n(20,x=t)));const S=et("comm/fireResist",0);i(t,S,(t=>n(8,u=t)));const E=et("comm/waterResist",0);i(t,E,(t=>n(7,c=t)));const B=et("comm/poisonResist",0);i(t,B,(t=>n(6,r=t)));const W=et("comm/lightningResist",0);i(t,W,(t=>n(5,a=t)));const H=et("comm/fire",!1);i(t,H,(t=>n(15,y=t)));const M=et("comm/freeze",!1);i(t,M,(t=>n(14,g=t)));const D=et("comm/poison",!1);i(t,D,(t=>n(13,p=t)));const O=et("comm/lightning",!1);i(t,O,(t=>n(12,m=t)));const j=et(`${T}/poisonTurns`,99);i(t,j,(t=>n(11,d=t)));const z=et(`${T}/stance`,0);i(t,z,(t=>n(10,f=t)));const I=et(`${T}/passiveIds`,[]);i(t,I,(t=>n(9,l=t)));const P=et(`${T}/compareList`,[]);i(t,P,(t=>n(48,s=t)));const N=et(`${T}/sortMethod`,{field:null,dir:1});i(t,N,(t=>n(4,o=t)));let K=[w[0]],q={stages:[],summary:{damage:0,cost:0,cp:0}},J=[],Z=[],G={};function U(t){K.splice(t,0,K[t]),n(1,K)}function V(t){K.length<=1||(K.splice(t,1),n(1,K))}function X(t,e){const s=K[t];K.splice(t,1),K.splice(t+e,0,s),n(1,K)}function Y(t){s.splice(t,1),P.set(s)}const tt=[[]];return t.$$set=t=>{"weapons"in t&&n(0,w=t.weapons),"storeKey"in t&&n(45,T=t.storeKey)},t.$$.update=()=>{2097120&t.$$.dirty[0]&&n(47,G={hp:x,atk:$,def:b,int:v,mdef:k,fire:y,freeze:g,poison:p,lightning:m,poisonTurns:d,stance:f,passiveIds:l,fireResist:u,waterResist:c,poisonResist:r,lightningResist:a}),2&t.$$.dirty[0]|65536&t.$$.dirty[1]&&n(2,q=at({...G,weapons:K})),196608&t.$$.dirty[1]&&n(46,J=s.map(((t,e)=>{const n=t.map((t=>C[t])),s=at({...G,weapons:n});return{name:t.join("+"),index:e,...s.summary}}))),24&t.$$.dirty[0]|32768&t.$$.dirty[1]&&(n(3,Z=J.slice()),o.field&&Z.sort(((t,e)=>(t[o.field]<e[o.field]?-1:t[o.field]>e[o.field]?1:0)*o.dir)))},[w,K,q,Z,o,a,r,c,u,l,f,d,m,p,g,y,k,v,b,$,x,_,R,L,F,A,S,E,B,W,H,M,D,O,j,z,I,P,N,U,V,X,function(){s.push(K.map((t=>t.name))),P.set(s)},Y,function(){const t=new Set(s.map((t=>t[0])));for(const e of w)t.has(e.name)||s.push([e.name]);P.set(s)},T,J,G,s,function(){x=h(this.value),A.set(x)},function(){$=h(this.value),_.set($)},function(){b=h(this.value),R.set(b)},function(){v=h(this.value),L.set(v)},function(){k=h(this.value),F.set(k)},function(){u=h(this.value),S.set(u)},function(){c=h(this.value),E.set(c)},function(){r=h(this.value),B.set(r)},function(){a=h(this.value),W.set(a)},function(){g=this.checked,M.set(g)},function(){y=this.checked,H.set(y)},function(){p=this.checked,D.set(p)},function(){m=this.checked,O.set(m)},function(){d=h(this.value),j.set(d)},function(){f=h(this.value),z.set(f)},function(){l=function(t,e,n){const s=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&s.add(t[e].__value);return n||s.delete(e),Array.from(s)}(tt[0],this.__value,this.checked),I.set(l)},tt,function(t,e){t[e]=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(1,K),n(0,w)},t=>X(t,-1),t=>X(t,1),t=>U(t),t=>V(t),function(t){o=t,N.set(o)},function(t){o=t,N.set(o)},function(t){o=t,N.set(o)},function(t){o=t,N.set(o)},function(t){o=t,N.set(o)},t=>Y(t.index)]}const wt=[{name:"閃耀之書",cost:4,grade:1,atk:230,atkType:"magic",modLv:"E",modType:"str"},{name:"憤怒之書",cost:2,grade:1,buff:[{bonus:15,times:1}]},{name:"大回復之書",cost:7,grade:1,atk:180,atkType:"heal",modLv:"D",modType:"int"},{name:"淨化之書",cost:3,grade:1,atk:30,atkType:"heal",modLv:"F",modType:"int"},{name:"燃燒之書",cost:4,grade:1,atk:150,atkType:"magic",modLv:"F",modType:"str",fire:{atk:220,time:4}},{name:"加速之書",cost:3,grade:1,atk:110,atkType:"heal",modLv:"F",modType:"int"},{name:"快速回復之書",cost:4,grade:2,atk:200,atkType:"heal",modLv:"D",modType:"int"},{name:"觸電之書",cost:3,grade:1,atk:50,atkType:"magic",modLv:"E",modType:"str",lightning:{atk:50,time:6}},{name:"聖光之書",cost:4,grade:2,atk:230,atkType:"magic",modLv:"D",modType:"str"},{name:"智慧之書",cost:4,grade:2,buff:[{int:200,times:99}]},{name:"高階回復之書",cost:7,grade:2,atk:100,atkType:"heal",modLv:"C",modType:"int"},{name:"自由火蝶",cost:4,grade:4,fire:{atk:720,time:4}},{name:"清淨如水",cost:6,grade:3,atk:155,atkType:"heal",modLv:"F",modType:"int",targets:99},{name:"雷電蜂",cost:4,grade:3,atk:100,atkType:"magic",modLv:"D",modType:"str",lightning:{atk:145,time:10}},{name:"猛炎之書",cost:5,grade:2,atk:330,atkType:"magic",modLv:"E",modType:"str",fire:{atk:480,time:4}},{name:"海魔獸歷史",cost:4,grade:3,atk:100,atkType:"heal",modLv:"E",modType:"int"},{name:"火焰之加護",cost:4,grade:4,atk:20,atkType:"heal",modLv:"D",modType:"int"},{name:"聖樹祭慶祝指南",cost:5,grade:3,atk:50,atkType:"heal",modLv:"C",modType:"int",buff:[{def:250,times:99}]},{name:"夏洛蒂自傳",cost:5,grade:3,atk:350,atkType:"magic",modLv:"C",modType:"str"},{name:"神怒之書",cost:4,grade:3,buff:[{bonus:35,times:1}]},{name:"航海指南",cost:4,atk:220,atkType:"heal",modLv:"C",modType:"int"},{name:"刨冰食用指南",cost:4,grade:4,water:{modLv:"C",modType:"int",time:2}},{name:"深紅的日記",cost:5,grade:3,atk:250,atkType:"magic",modLv:"E",modType:"str",fire:{modLv:1.31,modType:"int",time:5}},{name:"眾神之怒",cost:3,grade:4,buff:[{bonus:30,times:1}]},{name:"生命滿溢",cost:3,grade:4,atk:300,atkType:"heal",modLv:"C",modType:"int"},{name:"聖火護盾",cost:7,grade:4,atk:82,atkType:"heal",modLv:"B",modType:"int"},{name:"結晶智慧",cost:4,grade:2,buff:[{int:400,times:99}]},{name:"腥紅海鯊後援團守則",cost:7,grade:4,atk:280,atkType:"heal",modLv:"C",modType:"int",targets:99}],Tt=wt.filter((t=>t.buff&&!t.modLv&&!t.atk));return{A:class extends K{constructor(t){super(),N(this,t,xt,$t,a,{weapons:0,storeKey:45},null,[-1,-1,-1])}},b:Tt,w:wt}}();
//# sourceMappingURL=tome-9edffe32.js.map
