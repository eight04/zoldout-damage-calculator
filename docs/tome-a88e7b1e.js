var tomeA88E7B1E=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function r(t,e,n){return t.set(n),e}function c(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode.removeChild(t)}function f(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function m(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function d(){return p(" ")}function g(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function y(t){return""===t?null:+t}function k(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function v(t,e){t.value=null==e?"":e}function b(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}t.selectedIndex=-1}function $(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function x(t,e,n){t.classList[n?"add":"remove"](e)}let w;function T(t){w=t}const R=[],C=[],_=[],L=[],q=Promise.resolve();let B=!1;function A(t){_.push(t)}function F(t){L.push(t)}const E=new Set;let W=0;function S(){const t=w;do{for(;W<R.length;){const t=R[W];W++,T(t),I(t.$$)}for(T(null),R.length=0,W=0;C.length;)C.pop()();for(let t=0;t<_.length;t+=1){const e=_[t];E.has(e)||(E.add(e),e())}_.length=0}while(R.length);for(;L.length;)L.pop()();B=!1,E.clear(),T(t)}function I(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(A)}}const j=new Set;function H(t,e){t&&t.i&&(j.delete(t),t.i(e))}function M(t,e,n,s){if(t&&t.o){if(j.has(t))return;j.add(t),undefined.c.push((()=>{j.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function z(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function D(t){t&&t.c()}function O(t,n,i,a){const{fragment:r,on_mount:c,on_destroy:u,after_update:l}=t.$$;r&&r.m(n,i),a||A((()=>{const n=c.map(e).filter(o);u?u.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(A)}function P(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(R.push(t),B||(B=!0,q.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,o,i,a,r,c,u,f=[-1]){const m=w;T(e);const p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:r,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(m?m.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||m.$$.root};u&&u(p.root);let d=!1;if(p.ctx=i?i(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return p.ctx&&r(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),d&&N(e,t)),n})):[],p.update(),d=!0,s(p.before_update),p.fragment=!!a&&a(p.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);p.fragment&&p.fragment.l(t),t.forEach(l)}else p.fragment&&p.fragment.c();o.intro&&H(e.$$.fragment),O(e,o.target,o.anchor,o.customElement),S()}T(m)}class J{$destroy(){P(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Z(e){let n,s,o,i;return{c(){n=m("button"),s=p(e[2]),h(n,"class","svelte-19loasr"),x(n,"sorted",e[0].field===e[1]),x(n,"reversed",e[0].dir<0)},m(t,a){u(t,n,a),c(n,s),o||(i=g(n,"click",e[3]),o=!0)},p(t,[e]){4&e&&k(s,t[2]),3&e&&x(n,"sorted",t[0].field===t[1]),1&e&&x(n,"reversed",t[0].dir<0)},i:t,o:t,d(t){t&&l(n),o=!1,i()}}}function G(t,e,n){let{method:s,field:o,text:i}=e;return t.$$set=t=>{"method"in t&&n(0,s=t.method),"field"in t&&n(1,o=t.field),"text"in t&&n(2,i=t.text)},[s,o,i,function(){s.field!==o?(n(0,s.field=o,s),n(0,s.dir=1,s)):n(0,s.dir*=-1,s)}]}class Q extends J{constructor(t){super(),K(this,t,G,Z,i,{method:0,field:1,text:2})}}const U=location.pathname.match(/([^/.]*)(\.html)?$/),V=U[1]&&"index"!==U[1]?U[1]:"sword";function X(e){let n,s,o,i,a,r,f,p;return{c(){n=m("ul"),s=m("li"),s.innerHTML='<a href="." class="svelte-116mxxw">劍</a>',o=d(),i=m("li"),i.innerHTML='<a href="bow.html" class="svelte-116mxxw">弓</a>',a=d(),r=m("li"),r.innerHTML='<a href="wand.html" class="svelte-116mxxw">杖</a>',f=d(),p=m("li"),p.innerHTML='<a href="tome.html" class="svelte-116mxxw">書</a>',h(s,"class","svelte-116mxxw"),x(s,"active","sword"===V),h(i,"class","svelte-116mxxw"),x(i,"active","bow"===V),h(r,"class","svelte-116mxxw"),x(r,"active","wand"===V),h(p,"class","svelte-116mxxw"),x(p,"active","tome"===V),h(n,"class","svelte-116mxxw")},m(t,e){u(t,n,e),c(n,s),c(n,o),c(n,i),c(n,a),c(n,r),c(n,f),c(n,p)},p:t,i:t,o:t,d(t){t&&l(n)}}}class Y extends J{constructor(t){super(),K(this,t,null,X,i,{})}}const tt=[];const et="zoldout-damage-calculator",nt=new Map;function st(e,n){if(nt.has(e))return nt.get(e);const s=function(e,n=t){let s;const o=new Set;function a(t){if(i(e,t)&&(e=t,s)){const t=!tt.length;for(const t of o)t[1](),tt.push(t,e);if(t){for(let t=0;t<tt.length;t+=2)tt[t][0](tt[t+1]);tt.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(i,r=t){const c=[i,r];return o.add(c),1===o.size&&(s=n(a)||t),i(e),()=>{o.delete(c),0===o.size&&(s(),s=null)}}}}(function(t){try{return JSON.parse(t)}catch{}}(localStorage.getItem(`${et}/${e}`))??n);return s.subscribe((t=>localStorage.setItem(`${et}/${e}`,JSON.stringify(t)))),nt.set(e,s),s}var ot=[{name:"攻擊力增加（維羅尼卡）",type:"sword",beforeAll:t=>{t.buff.push({bonus:20,times:99})}},{name:"攻擊力增加（夏洛蒂）",type:"sword",beforeAll:t=>{t.buff.push({bonus:45,times:99})}},{name:"傷害後攻擊增加（艾莉諾拉）",type:"bow",afterHit:t=>{t.buff.push({bonus:5,times:99})}},{name:"第2+次傷害攻擊機率增加（艾莉諾拉）",type:"bow",afterHit:t=>{1===t.totalHit&&t.buff.push({bonus:21,times:99})}},{name:"使用武器後中毒（格蕾絲）",type:"bow",afterWeapon:(t,e)=>{t.hit&&!e.name.includes("奧義")&&t.poison.push({atk:300,turn:2,bonus:0})}},{name:"製造虛影（菲恩）",type:"bow",beforeAll:t=>{t.moves=0,t.isShadow=!1},afterWeapon:(t,e)=>{if("移動"===e.name)return void t.moves++;if(t.isShadow)return;let{atk:n,buff:s,cost:o,damage:i}=t;t.isShadow=!0,t.atk=1047,t.buff=[];for(let n=0;n<t.moves;n++)t.processWeapon(e),i+=t.damage;t.atk=n,t.buff=s,t.cost=o,t.isShadow=!1,t.damage=i}},{name:"傷害後點燃或額外傷害（艾娜）",type:"bow",afterHit:t=>{t.fire?t.damage+=360*t.getFireResist():(t.fire=!0,t.damage+=540*t.getFireResist())}},{name:"凍結時增加水傷（奧蘿菈）",type:"buff",beforeWeapon:t=>{let e=t.targetBuff.find((t=>"arora"===t.id));e||(e={id:"arora",times:999},t.targetBuff.push(e)),e.waterInjuryBonus=t.freeze?30:0}},{name:"使用火武器後加速（歌莉雅）",type:"wand",afterWeapon:(t,e)=>{e.fire?.atk&&(t.cost-=2)}},{name:"著火時增傷、減抗（歌莉雅）",type:"buff",beforeHit:t=>{let e=t.targetBuff.find((t=>"goriya1"===t.id));e||(e={id:"goriya1",times:99},t.targetBuff.push(e)),e.injuryBonus=t.fire?10:0,e.fireResist=t.fire?-10:0}},{name:"大範圍武器加速、攻擊增加（聖樹梅米）",type:"wand",beforeWeapon:(t,e)=>{"large"===e.range&&(t.cost-=1,t.hit&&t.buff.push({bonus:10,times:1}))}},{name:"額外傷害（尤里+泳裝伊蓮）",type:"wand",afterWeapon:(t,e)=>{e.water&&(t.damage+=2*(900-t.getDef({atkType:"magic"})))}},{name:"魔攻增加（西比拉）",type:"wand",beforeWeapon:(t,e)=>{e.casting>=6&&t.hit&&t.buff.push({bonus:25,times:1})}},{name:"水武器智力增加（泳裝伊蓮）",type:"buff",beforeWeapon:(t,e)=>{(e.water||"water"===e.atkType)&&t.buff.push({int:300,times:1,id:"swimElinInt"})},afterWeapon:t=>{const e=t.buff.findIndex((t=>"swimElinInt"===t.id));e>=0&&t.buff.splice(e,1)}},{name:"水傷增加（泳裝伊蓮奧義）",type:"buff",beforeAll:t=>{t.targetBuff.push({id:"swimElin",waterInjuryBonus:40,times:99})}},{name:"生命回復（塔尼亞）",type:"tome",afterWeapon:(t,e)=>{t.hit&&"heal"!==e.atkType||(t.damage+=360)}},{name:"加速（塔尼亞）",type:"tome",afterWeapon:(t,e)=>{(!t.hit&&e.buff||"heal"===e.atkType)&&t.cost--}}];const it={F:.85,E:1.1,D:1.35,C:1.6,B:1.85,A:2.1,S:2.35,SS:2.6,SSS:2.85,Ex:3.1};for(const t in it)it[`${t}0`]=it[t]-.1;class at{constructor({hp:t,atk:e,def:n,int:s,mdef:o,fireResist:i,waterResist:a,poisonResist:r,lightningResist:c,fire:u=!1,freeze:l=!1,poison:f=!1,poisonTurns:m,stance:p=0,maxTargets:d=1,passive:g}){this.hp=t,this.atk=e,this.def=n,this.int=s,this.mdef=o,this.fireResist=i,this.waterResist=a,this.poisonResist=r,this.lightningResist=c,this.poisonTurns=m,this.maxTargets=d,this.passive=g,this.damage=0,this.hit=0,this.totalHit=0,this.stance=p,this.totalHit=0,this.buff=[],this.targetBuff=[],this.targets=0,this.poison=f?[{atk:0,turn:99}]:[],this.lightning={},this.fire=u,this.freeze=l}clone(t={}){const e=new at({});return Object.assign(e,this,t),e}getDef(t){return ct(this,t)}_getResist(t,e,n){return(1-(this[t]+this.targetBuff.reduce(((e,n)=>e+(n[t]||0)),0))/100)*this.buff.reduce(((t,n)=>t*(1+(n[e]||0)/100)),1)*this.targetBuff.reduce(((t,e)=>t*(1+(e[n]||0)/100)),1)}getFireResist(){return this._getResist("fireResist","fireBonus","fireInjuryBonus")}getWaterResist(){return this._getResist("waterResist","waterBonus","waterInjuryBonus")}getPoisonResist(){return this._getResist("poisonResist","poisonBonus","poisonInjuryBonus")}getLightningResist(){return this._getResist("lightningResist","lightningBonus","lightningInjuryBonus")}getInjuryBonus(){return(this.targetBuff.reduce(((t,e)=>t+(e.injuryBonus||0)),0)+100)/100}getWaterAtk(t){return ut(this,t)}getFireAtk(t){return ut(this,t)}getLightningAtk(t){return ut(this,t)}getPoisonAtk(t){return ut(this,t)}processWeapon(t){return mt(this,t)}}function rt({weapons:t,passiveIds:e,...n}){const s=ot.filter(((t,n)=>e.includes(n))),o=[],i=new at({...n,passive:s});ft(i,null,"beforeAll");for(const e of t){const t=dt(i,e);o.push(t)}const a=o.reduce(((t,e)=>t+e.damage),0),r=o.reduce(((t,e)=>t+e.cost),0);return{stages:o,summary:{damage:a,cost:r,executeCost:Math.ceil(i.hp/a)*r,cp:a/r}}}function ct({def:t,mdef:e,targetBuff:n},{atkType:s}){return"heal"===s||"water"===s||"fire"===s||"poison"===s||"lightning"===s?0:"magic"===s?Math.max(e+n.reduce(((t,e)=>t+(e.mdef||0)),0),0):Math.max(t+n.reduce(((t,e)=>t+(e.def||0)),0),0)}function ut({atk:t,int:e,buff:n},{modType:s,modLv:o,atk:i=0,bonus:a=0}){const r="int"===s?e+n.reduce(((t,e)=>t+(e.int||0)),0):t+n.reduce(((t,e)=>t+(e.atk||0)),0);return(i+(o?r*function(t){if("number"==typeof t)return t;if(it[t])return it[t];throw new Error(`unknown modLv: ${t}`)}(o):0))*(a+100)/100}function lt({poison:t,poisonTurns:e,poisonResist:n}){let s=0;for(const o of t)o.atk&&(s+=o.atk*Math.min(o.turn,e)/o.turn*(100-n)/100);return s}function ft(t,e,n){t.passive.forEach((s=>s[n]?.(t,e))),e?.[n]?.(t,e)}function mt(t,e){t.cost=e.casting||e.cost,t.hit=e.hit||(e.atk||e.modLv?1:0),t.damage=0,t.targets=Math.min(t.maxTargets,e.targets||1),ft(t,e,"beforeWeapon");const n=ct(t,e),s=function(t,{atkType:e}){return"fire"===e?t.getFireResist():"water"===e?t.getWaterResist():"poison"===e?t.getPoisonResist():"lightning"===e?t.getLightningResist():1}(t,e);for(let o=0;o<t.hit;o++){ft(t,e,"beforeHit"),t.currentHit=o+1,t.totalHit++;let i=ut(t,e);i*=t.buff.reduce(((t,e)=>t*(e.bonus?(e.bonus+100)/100:1)),1),e.stance?.use===t.stance&&(i*=((e.stance.bonus||0)+100)/100),t.damage+=Math.max(i-n,1)*s*t.getInjuryBonus()*t.targets,t.lightning?.atk&&(t.damage+=t.lightning.atk*(100-t.lightningResist)/100*t.targets),ft(t,e,"afterHit")}if(t.hit&&(t.buff=t.buff.map((t=>({...t,times:t.times-1}))).filter((t=>t.times>0)),t.targetBuff=t.targetBuff.map((t=>({...t,times:t.times-1}))).filter((t=>t.times>0))),e.trap){const n=t.clone({passive:[],buff:[]});n.processWeapon(e.trap),t.damage+=n.damage}if(!e.fire||e.fire.cond&&!e.fire.cond(t)||(t.damage+=t.getFireAtk(e.fire)*t.getFireResist()*t.targets,e.fire.time&&(t.fire=!0)),!e.water||e.water.cond&&!e.water.cond(t)||(t.damage+=t.getWaterAtk(e.water)*t.getWaterResist()*t.targets,e.water.time&&(t.freeze=!0)),e.lightning&&(!e.lightning.cond||e.lightning.cond(t))){const n=t.getLightningAtk(e.lightning);t.damage+=n*(100-t.lightningResist)/100*t.targets,(!t.lightning.atk||e.lightning.time>t.lightning.time)&&(t.lightning.atk=n,t.lightning.time=e.lightning.time)}if(e.poison&&(!e.poison.cond||e.poison.cond(t))){for(let n=0;n<t.targets;n++)t.poison.push({atk:t.getPoisonAtk(e.poison),turn:e.poison.turn,bonus:0});e.poison.bonus&&(t.poison=t.poison.map((t=>{const n=(t.bonus+100)*(e.poison.bonus+100)/100-100;return{...t,bonus:Math.min(n,200)}})))}e.buff&&pt(t.buff,e.buff),e.targetBuff&&pt(t.targetBuff,e.targetBuff),e.stance?.use===t.stance&&e.stance.buff&&pt(t.buff,e.stance.buff),null!=e.stance?.gain&&(t.stance=e.stance.gain),ft(t,e,"afterWeapon")}function pt(t,e){const n=new Map(t.map(((t,e)=>[t.id,e])));for(const s of e)s.id&&n.has(s.id)?t[n.get(s.id)]=s:t.push(s)}function dt(t,e){const n=lt(t);return mt(t,e),t.damage+=lt(t)-n,{damage:t.damage,cost:t.cost}}var gt=[{name:"星光帝王蟹",def:999999,mdef:999999,fireResist:-100,waterResist:99,poisonResist:99,lightningResist:-100},{name:"利文",def:197,mdef:355,fireResist:50,waterResist:30,poisonResist:60,lightningResist:70},{name:"腐朽魔像",def:431,mdef:180,fireResist:50,waterResist:80,poisonResist:99,lightningResist:-40},{name:"雪人王",def:319,mdef:319,hp:68886,fireResist:-30,waterResist:0,poisonResist:-42,lightningResist:50}];function ht(t,e,n){const s=t.slice();return s[81]=e[n],s}function yt(t,e,n){const s=t.slice();return s[84]=e[n],s[85]=e,s[86]=n,s}function kt(t,e,n){const s=t.slice();return s[87]=e[n],s}function vt(t,e,n){const s=t.slice();return s[90]=e[n],s[86]=n,s}function bt(t,e,n){const s=t.slice();return s[92]=e[n],s}function $t(e){let n,s,o=e[92].name+"";return{c(){n=m("option"),s=p(o),n.__value=e[92],n.value=n.__value},m(t,e){u(t,n,e),c(n,s)},p:t,d(t){t&&l(n)}}}function xt(t){let e,n=(V===t[90].type||"buff"===t[90].type)&&function(t){let e,n,s,o,i,a,r,f,y=t[90].name+"";return{c(){e=m("label"),n=m("input"),s=d(),o=m("span"),i=p(y),a=d(),h(n,"type","checkbox"),n.__value=t[86],n.value=n.__value,t[68][0].push(n),h(e,"class","cspan svelte-yq4ypk")},m(l,m){u(l,e,m),c(e,n),n.checked=~t[12].indexOf(n.__value),c(e,s),c(e,o),c(o,i),c(e,a),r||(f=g(n,"change",t[67]),r=!0)},p(t,e){4096&e[0]&&(n.checked=~t[12].indexOf(n.__value))},d(s){s&&l(e),t[68][0].splice(t[68][0].indexOf(n),1),r=!1,f()}}}(t);return{c(){n&&n.c(),e=p("")},m(t,s){n&&n.m(t,s),u(t,e,s)},p(t,e){V!==t[90].type&&"buff"!==t[90].type||n.p(t,e)},d(t){n&&n.d(t),t&&l(e)}}}function wt(t){let e,n,s,o=t[87].name+"";return{c(){e=m("option"),n=p(o),e.__value=s=t[87],e.value=e.__value},m(t,s){u(t,e,s),c(e,n)},p(t,i){1&i[0]&&o!==(o=t[87].name+"")&&k(n,o),1&i[0]&&s!==(s=t[87])&&(e.__value=s,e.value=e.__value)},d(t){t&&l(e)}}}function Tt(t){let e,n,o,i,a,r,y,v,$,x,w,T,R,C,_,L,q,B,F,E,W,S=t[2].stages[t[86]]?.cost+"",I=t[2].stages[t[86]]?.damage.toFixed(0)+"",j=((t[2].stages[t[86]]?.damage||0)/t[2].stages[t[86]]?.cost).toFixed(0)+"",H=t[0],M=[];for(let e=0;e<H.length;e+=1)M[e]=wt(kt(t,H,e));function z(){t[69].call(e,t[85],t[86])}function D(){return t[70](t[86])}function O(){return t[71](t[86])}function P(){return t[72](t[86])}function N(){return t[73](t[86])}return{c(){e=m("select");for(let t=0;t<M.length;t+=1)M[t].c();n=d(),o=m("span"),i=p(S),a=d(),r=m("span"),y=p(I),v=d(),$=m("span"),x=p(j),w=d(),T=m("div"),R=m("button"),R.textContent="↑",C=d(),_=m("button"),_.textContent="↓",L=d(),q=m("button"),q.textContent="⎘",B=d(),F=m("button"),F.textContent="x",h(e,"class","svelte-yq4ypk"),void 0===t[84]&&A(z),h(o,"class","svelte-yq4ypk"),h(r,"class","svelte-yq4ypk"),h($,"class","svelte-yq4ypk"),h(T,"class","operation svelte-yq4ypk")},m(s,l){u(s,e,l);for(let t=0;t<M.length;t+=1)M[t].m(e,null);b(e,t[84]),u(s,n,l),u(s,o,l),c(o,i),u(s,a,l),u(s,r,l),c(r,y),u(s,v,l),u(s,$,l),c($,x),u(s,w,l),u(s,T,l),c(T,R),c(T,C),c(T,_),c(T,L),c(T,q),c(T,B),c(T,F),E||(W=[g(e,"change",z),g(R,"click",D),g(_,"click",O),g(q,"click",P),g(F,"click",N)],E=!0)},p(n,s){if(t=n,1&s[0]){let n;for(H=t[0],n=0;n<H.length;n+=1){const o=kt(t,H,n);M[n]?M[n].p(o,s):(M[n]=wt(o),M[n].c(),M[n].m(e,null))}for(;n<M.length;n+=1)M[n].d(1);M.length=H.length}3&s[0]&&b(e,t[84]),4&s[0]&&S!==(S=t[2].stages[t[86]]?.cost+"")&&k(i,S),4&s[0]&&I!==(I=t[2].stages[t[86]]?.damage.toFixed(0)+"")&&k(y,I),4&s[0]&&j!==(j=((t[2].stages[t[86]]?.damage||0)/t[2].stages[t[86]]?.cost).toFixed(0)+"")&&k(x,j)},d(t){t&&l(e),f(M,t),t&&l(n),t&&l(o),t&&l(a),t&&l(r),t&&l(v),t&&l($),t&&l(w),t&&l(T),E=!1,s(W)}}}function Rt(t){let e,n,s,o,i,a,r,f,y,v,b,$,x,w,T,R,C,_,L=t[81].name+"",q=t[81].cost+"",B=t[81].damage.toFixed(0)+"",A=t[81].cp.toFixed(0)+"",F=t[81].executeCost+"";function E(){return t[79](t[81])}return{c(){e=m("span"),n=p(L),s=d(),o=m("span"),i=p(q),a=d(),r=m("span"),f=p(B),y=d(),v=m("span"),b=p(A),$=d(),x=m("span"),w=p(F),T=d(),R=m("button"),R.textContent="x",h(e,"class","svelte-yq4ypk"),h(o,"class","svelte-yq4ypk"),h(r,"class","svelte-yq4ypk"),h(v,"class","svelte-yq4ypk"),h(x,"class","svelte-yq4ypk"),h(R,"class","svelte-yq4ypk")},m(t,l){u(t,e,l),c(e,n),u(t,s,l),u(t,o,l),c(o,i),u(t,a,l),u(t,r,l),c(r,f),u(t,y,l),u(t,v,l),c(v,b),u(t,$,l),u(t,x,l),c(x,w),u(t,T,l),u(t,R,l),C||(_=g(R,"click",E),C=!0)},p(e,s){t=e,8&s[0]&&L!==(L=t[81].name+"")&&k(n,L),8&s[0]&&q!==(q=t[81].cost+"")&&k(i,q),8&s[0]&&B!==(B=t[81].damage.toFixed(0)+"")&&k(f,B),8&s[0]&&A!==(A=t[81].cp.toFixed(0)+"")&&k(b,A),8&s[0]&&F!==(F=t[81].executeCost+"")&&k(w,F)},d(t){t&&l(e),t&&l(s),t&&l(o),t&&l(a),t&&l(r),t&&l(y),t&&l(v),t&&l($),t&&l(x),t&&l(T),t&&l(R),C=!1,_()}}}function Ct(t){let e,n,o,i,a,r,$,x,w,T,R,_,L,q,B,E,W,S,I,j,N,K,J,Z,G,U,V,X,tt,et,nt,st,it,at,rt,ct,ut,lt,ft,mt,pt,dt,kt,wt,Ct,_t,Lt,qt,Bt,At,Ft,Et,Wt,St,It,jt,Ht,Mt,zt,Dt,Ot,Pt,Nt,Kt,Jt,Zt,Gt,Qt,Ut,Vt,Xt,Yt,te,ee,ne,se,oe,ie,ae,re,ce,ue,le,fe,me,pe,de,ge,he,ye,ke,ve,be,$e,xe,we,Te,Re,Ce,_e,Le,qe,Be,Ae,Fe,Ee,We,Se,Ie,je,He,Me,ze,De,Oe,Pe,Ne,Ke,Je,Ze,Ge,Qe,Ue,Ve,Xe,Ye,tn,en,nn,sn,on,an=t[2].summary.cost+"",rn=t[2].summary.damage.toFixed(0)+"",cn=t[2].summary.cp.toFixed(0)+"";o=new Y({});let un=gt,ln=[];for(let e=0;e<un.length;e+=1)ln[e]=$t(bt(t,un,e));let fn=ot,mn=[];for(let e=0;e<fn.length;e+=1)mn[e]=xt(vt(t,fn,e));let pn=t[1],dn=[];for(let e=0;e<pn.length;e+=1)dn[e]=Tt(yt(t,pn,e));function gn(e){t[74](e)}let hn={field:"name",text:"Name"};function yn(e){t[75](e)}void 0!==t[11]&&(hn.method=t[11]),je=new Q({props:hn}),C.push((()=>z(je,"method",gn)));let kn={field:"cost",text:"Cost"};function vn(e){t[76](e)}void 0!==t[11]&&(kn.method=t[11]),ze=new Q({props:kn}),C.push((()=>z(ze,"method",yn)));let bn={field:"damage",text:"Damage"};function $n(e){t[77](e)}void 0!==t[11]&&(bn.method=t[11]),Pe=new Q({props:bn}),C.push((()=>z(Pe,"method",vn)));let xn={field:"cp",text:"CP"};function wn(e){t[78](e)}void 0!==t[11]&&(xn.method=t[11]),Je=new Q({props:xn}),C.push((()=>z(Je,"method",$n)));let Tn={field:"executeCost",text:"斬殺Cost"};void 0!==t[11]&&(Tn.method=t[11]),Qe=new Q({props:Tn}),C.push((()=>z(Qe,"method",wn)));let Rn=t[3],Cn=[];for(let e=0;e<Rn.length;e+=1)Cn[e]=Rt(ht(t,Rn,e));return{c(){e=m("h1"),e.textContent="Zold:Out Damage Calculator",n=d(),D(o.$$.fragment),i=d(),a=m("div"),r=m("span"),r.textContent="載入預設敵人",$=d(),x=m("select");for(let t=0;t<ln.length;t+=1)ln[t].c();w=d(),T=m("button"),T.textContent="Apply",R=d(),_=m("div"),L=m("span"),L.textContent="血量",q=d(),B=m("input"),E=d(),W=m("span"),W.textContent="力量",S=d(),I=m("input"),j=d(),N=m("span"),N.textContent="防禦",K=d(),J=m("input"),Z=d(),G=m("span"),G.textContent="智力",U=d(),V=m("input"),X=d(),tt=m("span"),tt.textContent="魔防",et=d(),nt=m("input"),st=d(),it=m("span"),it.textContent="火抗",at=d(),rt=m("input"),ct=d(),ut=m("span"),ut.textContent="水抗",lt=d(),ft=m("input"),mt=d(),pt=m("span"),pt.textContent="毒抗",dt=d(),kt=m("input"),wt=d(),Ct=m("span"),Ct.textContent="雷抗",_t=d(),Lt=m("input"),qt=d(),Bt=m("label"),At=m("input"),Ft=d(),Et=m("span"),Et.textContent="敵人凍結",Wt=d(),St=m("label"),It=m("input"),jt=d(),Ht=m("span"),Ht.textContent="敵人著火",Mt=d(),zt=m("label"),Dt=m("input"),Ot=d(),Pt=m("span"),Pt.textContent="敵人中毒",Nt=d(),Kt=m("label"),Jt=m("input"),Zt=d(),Gt=m("span"),Gt.textContent="敵人觸電",Qt=d(),Ut=m("span"),Ut.textContent="中毒發生次數",Vt=d(),Xt=m("input"),Yt=d(),te=m("span"),te.textContent="當前架勢",ee=d(),ne=m("input"),se=d();for(let t=0;t<mn.length;t+=1)mn[t].c();oe=d(),ie=m("h2"),ie.textContent="Combo",ae=d(),re=m("div"),ce=m("span"),ce.textContent="Weapon",ue=d(),le=m("span"),le.textContent="Cost",fe=d(),me=m("span"),me.textContent="Damage",pe=d(),de=m("span"),de.textContent="CP",ge=d(),he=m("span"),ye=d();for(let t=0;t<dn.length;t+=1)dn[t].c();ke=d(),ve=m("span"),ve.textContent="Summary",be=d(),$e=m("span"),xe=p(an),we=d(),Te=m("span"),Re=p(rn),Ce=d(),_e=m("span"),Le=p(cn),qe=d(),Be=m("button"),Be.textContent="Add to compare list",Ae=d(),Fe=m("h2"),Fe.textContent="Compare",Ee=d(),We=m("button"),We.textContent="Add all weapons",Se=d(),Ie=m("div"),D(je.$$.fragment),Me=d(),D(ze.$$.fragment),Oe=d(),D(Pe.$$.fragment),Ke=d(),D(Je.$$.fragment),Ge=d(),D(Qe.$$.fragment),Ve=d(),Xe=m("span"),Ye=d();for(let t=0;t<Cn.length;t+=1)Cn[t].c();tn=d(),en=m("footer"),en.innerHTML='<a href="https://github.com/eight04/zoldout-damage-calculator">zoldout-damage-calculator</a>',void 0===t[21]&&A((()=>t[51].call(x))),h(a,"class","enemy-preset svelte-yq4ypk"),h(B,"type","number"),h(B,"class","cspan3 svelte-yq4ypk"),h(I,"type","number"),h(J,"type","number"),h(V,"type","number"),h(nt,"type","number"),h(rt,"type","number"),h(ft,"type","number"),h(kt,"type","number"),h(Lt,"type","number"),h(At,"type","checkbox"),h(Bt,"class","cspan svelte-yq4ypk"),h(It,"type","checkbox"),h(St,"class","cspan svelte-yq4ypk"),h(Dt,"type","checkbox"),h(zt,"class","cspan svelte-yq4ypk"),h(Jt,"type","checkbox"),h(Kt,"class","cspan svelte-yq4ypk"),h(Xt,"type","number"),h(ne,"type","number"),h(_,"class","base-info svelte-yq4ypk"),h(ce,"class","chead svelte-yq4ypk"),h(le,"class","chead svelte-yq4ypk"),h(me,"class","chead svelte-yq4ypk"),h(de,"class","chead svelte-yq4ypk"),h(he,"class","operation svelte-yq4ypk"),h(ve,"class","chead svelte-yq4ypk"),h($e,"class","svelte-yq4ypk"),h(Te,"class","svelte-yq4ypk"),h(_e,"class","svelte-yq4ypk"),h(re,"class","combo-table svelte-yq4ypk"),h(Xe,"class","svelte-yq4ypk"),h(Ie,"class","compare-list svelte-yq4ypk"),h(en,"class","svelte-yq4ypk")},m(s,l){u(s,e,l),u(s,n,l),O(o,s,l),u(s,i,l),u(s,a,l),c(a,r),c(a,$),c(a,x);for(let t=0;t<ln.length;t+=1)ln[t].m(x,null);b(x,t[21]),c(a,w),c(a,T),u(s,R,l),u(s,_,l),c(_,L),c(_,q),c(_,B),v(B,t[10]),c(_,E),c(_,W),c(_,S),c(_,I),v(I,t[20]),c(_,j),c(_,N),c(_,K),c(_,J),v(J,t[9]),c(_,Z),c(_,G),c(_,U),c(_,V),v(V,t[19]),c(_,X),c(_,tt),c(_,et),c(_,nt),v(nt,t[8]),c(_,st),c(_,it),c(_,at),c(_,rt),v(rt,t[7]),c(_,ct),c(_,ut),c(_,lt),c(_,ft),v(ft,t[6]),c(_,mt),c(_,pt),c(_,dt),c(_,kt),v(kt,t[5]),c(_,wt),c(_,Ct),c(_,_t),c(_,Lt),v(Lt,t[4]),c(_,qt),c(_,Bt),c(Bt,At),At.checked=t[17],c(Bt,Ft),c(Bt,Et),c(_,Wt),c(_,St),c(St,It),It.checked=t[18],c(St,jt),c(St,Ht),c(_,Mt),c(_,zt),c(zt,Dt),Dt.checked=t[16],c(zt,Ot),c(zt,Pt),c(_,Nt),c(_,Kt),c(Kt,Jt),Jt.checked=t[15],c(Kt,Zt),c(Kt,Gt),c(_,Qt),c(_,Ut),c(_,Vt),c(_,Xt),v(Xt,t[14]),c(_,Yt),c(_,te),c(_,ee),c(_,ne),v(ne,t[13]),c(_,se);for(let t=0;t<mn.length;t+=1)mn[t].m(_,null);u(s,oe,l),u(s,ie,l),u(s,ae,l),u(s,re,l),c(re,ce),c(re,ue),c(re,le),c(re,fe),c(re,me),c(re,pe),c(re,de),c(re,ge),c(re,he),c(re,ye);for(let t=0;t<dn.length;t+=1)dn[t].m(re,null);c(re,ke),c(re,ve),c(re,be),c(re,$e),c($e,xe),c(re,we),c(re,Te),c(Te,Re),c(re,Ce),c(re,_e),c(_e,Le),u(s,qe,l),u(s,Be,l),u(s,Ae,l),u(s,Fe,l),u(s,Ee,l),u(s,We,l),u(s,Se,l),u(s,Ie,l),O(je,Ie,null),c(Ie,Me),O(ze,Ie,null),c(Ie,Oe),O(Pe,Ie,null),c(Ie,Ke),O(Je,Ie,null),c(Ie,Ge),O(Qe,Ie,null),c(Ie,Ve),c(Ie,Xe),c(Ie,Ye);for(let t=0;t<Cn.length;t+=1)Cn[t].m(Ie,null);u(s,tn,l),u(s,en,l),nn=!0,sn||(on=[g(x,"change",t[51]),g(T,"click",t[40]),g(B,"input",t[52]),g(I,"input",t[53]),g(J,"input",t[54]),g(V,"input",t[55]),g(nt,"input",t[56]),g(rt,"input",t[57]),g(ft,"input",t[58]),g(kt,"input",t[59]),g(Lt,"input",t[60]),g(At,"change",t[61]),g(It,"change",t[62]),g(Dt,"change",t[63]),g(Jt,"change",t[64]),g(Xt,"input",t[65]),g(ne,"input",t[66]),g(Be,"click",t[44]),g(We,"click",t[46])],sn=!0)},p(t,e){if(0&e){let n;for(un=gt,n=0;n<un.length;n+=1){const s=bt(t,un,n);ln[n]?ln[n].p(s,e):(ln[n]=$t(s),ln[n].c(),ln[n].m(x,null))}for(;n<ln.length;n+=1)ln[n].d(1);ln.length=un.length}if(2097152&e[0]&&b(x,t[21]),1024&e[0]&&y(B.value)!==t[10]&&v(B,t[10]),1048576&e[0]&&y(I.value)!==t[20]&&v(I,t[20]),512&e[0]&&y(J.value)!==t[9]&&v(J,t[9]),524288&e[0]&&y(V.value)!==t[19]&&v(V,t[19]),256&e[0]&&y(nt.value)!==t[8]&&v(nt,t[8]),128&e[0]&&y(rt.value)!==t[7]&&v(rt,t[7]),64&e[0]&&y(ft.value)!==t[6]&&v(ft,t[6]),32&e[0]&&y(kt.value)!==t[5]&&v(kt,t[5]),16&e[0]&&y(Lt.value)!==t[4]&&v(Lt,t[4]),131072&e[0]&&(At.checked=t[17]),262144&e[0]&&(It.checked=t[18]),65536&e[0]&&(Dt.checked=t[16]),32768&e[0]&&(Jt.checked=t[15]),16384&e[0]&&y(Xt.value)!==t[14]&&v(Xt,t[14]),8192&e[0]&&y(ne.value)!==t[13]&&v(ne,t[13]),4096&e[0]){let n;for(fn=ot,n=0;n<fn.length;n+=1){const s=vt(t,fn,n);mn[n]?mn[n].p(s,e):(mn[n]=xt(s),mn[n].c(),mn[n].m(_,null))}for(;n<mn.length;n+=1)mn[n].d(1);mn.length=fn.length}if(7&e[0]|7168&e[1]){let n;for(pn=t[1],n=0;n<pn.length;n+=1){const s=yt(t,pn,n);dn[n]?dn[n].p(s,e):(dn[n]=Tt(s),dn[n].c(),dn[n].m(re,ke))}for(;n<dn.length;n+=1)dn[n].d(1);dn.length=pn.length}(!nn||4&e[0])&&an!==(an=t[2].summary.cost+"")&&k(xe,an),(!nn||4&e[0])&&rn!==(rn=t[2].summary.damage.toFixed(0)+"")&&k(Re,rn),(!nn||4&e[0])&&cn!==(cn=t[2].summary.cp.toFixed(0)+"")&&k(Le,cn);const n={};!He&&2048&e[0]&&(He=!0,n.method=t[11],F((()=>He=!1))),je.$set(n);const s={};!De&&2048&e[0]&&(De=!0,s.method=t[11],F((()=>De=!1))),ze.$set(s);const o={};!Ne&&2048&e[0]&&(Ne=!0,o.method=t[11],F((()=>Ne=!1))),Pe.$set(o);const i={};!Ze&&2048&e[0]&&(Ze=!0,i.method=t[11],F((()=>Ze=!1))),Je.$set(i);const a={};if(!Ue&&2048&e[0]&&(Ue=!0,a.method=t[11],F((()=>Ue=!1))),Qe.$set(a),8&e[0]|16384&e[1]){let n;for(Rn=t[3],n=0;n<Rn.length;n+=1){const s=ht(t,Rn,n);Cn[n]?Cn[n].p(s,e):(Cn[n]=Rt(s),Cn[n].c(),Cn[n].m(Ie,null))}for(;n<Cn.length;n+=1)Cn[n].d(1);Cn.length=Rn.length}},i(t){nn||(H(o.$$.fragment,t),H(je.$$.fragment,t),H(ze.$$.fragment,t),H(Pe.$$.fragment,t),H(Je.$$.fragment,t),H(Qe.$$.fragment,t),nn=!0)},o(t){M(o.$$.fragment,t),M(je.$$.fragment,t),M(ze.$$.fragment,t),M(Pe.$$.fragment,t),M(Je.$$.fragment,t),M(Qe.$$.fragment,t),nn=!1},d(t){t&&l(e),t&&l(n),P(o,t),t&&l(i),t&&l(a),f(ln,t),t&&l(R),t&&l(_),f(mn,t),t&&l(oe),t&&l(ie),t&&l(ae),t&&l(re),f(dn,t),t&&l(qe),t&&l(Be),t&&l(Ae),t&&l(Fe),t&&l(Ee),t&&l(We),t&&l(Se),t&&l(Ie),P(je),P(ze),P(Pe),P(Je),P(Qe),f(Cn,t),t&&l(tn),t&&l(en),sn=!1,s(on)}}}function _t(t,e,n){let s,o,i,c,u,l,f,m,p,d,g,h,k,v,b,x,w,T,{weapons:R,storeKey:C}=e;R.unshift({name:"移動",cost:"sword"===V?1:2});const _=Object.fromEntries(R.map((t=>[t.name,t]))),L=st(`${C}/atk`,700);a(t,L,(t=>n(20,T=t)));const q=st("comm/def",200);a(t,q,(t=>n(9,f=t)));const B=st(`${C}/int`,700);a(t,B,(t=>n(19,w=t)));const A=st("comm/mdef",200);a(t,A,(t=>n(8,l=t)));const F=st("comm/hp",2736);a(t,F,(t=>n(10,m=t)));const E=st("comm/fireResist",0);a(t,E,(t=>n(7,u=t)));const W=st("comm/waterResist",0);a(t,W,(t=>n(6,c=t)));const S=st("comm/poisonResist",0);a(t,S,(t=>n(5,i=t)));const I=st("comm/lightningResist",0);a(t,I,(t=>n(4,o=t)));const j=st("comm/fire",!1);a(t,j,(t=>n(18,x=t)));const H=st("comm/freeze",!1);a(t,H,(t=>n(17,b=t)));const M=st("comm/poison",!1);a(t,M,(t=>n(16,v=t)));const z=st("comm/lightning",!1);a(t,z,(t=>n(15,k=t)));const D=st(`${C}/poisonTurns`,99);a(t,D,(t=>n(14,h=t)));const O=st(`${C}/stance`,0);a(t,O,(t=>n(13,g=t)));const P=st(`${C}/passiveIds`,[]);a(t,P,(t=>n(12,d=t)));const N=st(`${C}/compareList`,[]);a(t,N,(t=>n(50,s=t)));const K=st(`${C}/sortMethod`,{field:null,dir:1});let J;a(t,K,(t=>n(11,p=t)));let Z=[R[0]],G={stages:[],summary:{damage:0,cost:0,cp:0}},Q=[],U=[],X={};function Y(t){Z.splice(t,0,Z[t]),n(1,Z)}function tt(t){Z.length<=1||(Z.splice(t,1),n(1,Z))}function et(t,e){const s=Z[t];Z.splice(t,1),Z.splice(t+e,0,s),n(1,Z)}function nt(t){s.splice(t,1),N.set(s)}const ot=[[]];return t.$$set=t=>{"weapons"in t&&n(0,R=t.weapons),"storeKey"in t&&n(47,C=t.storeKey)},t.$$.update=()=>{2095088&t.$$.dirty[0]&&n(49,X={hp:m,atk:T,def:f,int:w,mdef:l,fire:x,freeze:b,poison:v,lightning:k,poisonTurns:h,stance:g,passiveIds:d,fireResist:u,waterResist:c,poisonResist:i,lightningResist:o}),2&t.$$.dirty[0]|262144&t.$$.dirty[1]&&n(2,G=rt({...X,weapons:Z})),786432&t.$$.dirty[1]&&n(48,Q=s.map(((t,e)=>{const n=t.map((t=>_[t])),s=rt({...X,weapons:n});return{name:t.join("+"),index:e,...s.summary}}))),2056&t.$$.dirty[0]|131072&t.$$.dirty[1]&&(n(3,U=Q.slice()),p.field&&U.sort(((t,e)=>(t[p.field]<e[p.field]?-1:t[p.field]>e[p.field]?1:0)*p.dir)))},[R,Z,G,U,o,i,c,u,l,f,m,p,d,g,h,k,v,b,x,w,T,J,L,q,B,A,F,E,W,S,I,j,H,M,z,D,O,P,N,K,function(){r(F,m=J.hp||0,m),r(q,f=J.def||0,f),r(A,l=J.mdef||0,l),r(E,u=J.fireResist||0,u),r(W,c=J.waterResist||0,c),r(S,i=J.poisonResist||0,i),r(I,o=J.lightningResist||0,o)},Y,tt,et,function(){s.push(Z.map((t=>t.name))),N.set(s)},nt,function(){const t=new Set(s.map((t=>t[0])));for(const e of R)t.has(e.name)||s.push([e.name]);N.set(s)},C,Q,X,s,function(){J=$(this),n(21,J)},function(){m=y(this.value),F.set(m)},function(){T=y(this.value),L.set(T)},function(){f=y(this.value),q.set(f)},function(){w=y(this.value),B.set(w)},function(){l=y(this.value),A.set(l)},function(){u=y(this.value),E.set(u)},function(){c=y(this.value),W.set(c)},function(){i=y(this.value),S.set(i)},function(){o=y(this.value),I.set(o)},function(){b=this.checked,H.set(b)},function(){x=this.checked,j.set(x)},function(){v=this.checked,M.set(v)},function(){k=this.checked,z.set(k)},function(){h=y(this.value),D.set(h)},function(){g=y(this.value),O.set(g)},function(){d=function(t,e,n){const s=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&s.add(t[e].__value);return n||s.delete(e),Array.from(s)}(ot[0],this.__value,this.checked),P.set(d)},ot,function(t,e){t[e]=$(this),n(1,Z),n(0,R)},t=>et(t,-1),t=>et(t,1),t=>Y(t),t=>tt(t),function(t){p=t,K.set(p)},function(t){p=t,K.set(p)},function(t){p=t,K.set(p)},function(t){p=t,K.set(p)},function(t){p=t,K.set(p)},t=>nt(t.index)]}const Lt=[{name:"閃耀之書",cost:4,grade:1,atk:230,atkType:"magic",modLv:"E",modType:"str"},{name:"憤怒之書",cost:2,grade:1,buff:[{bonus:15,times:1}]},{name:"大回復之書",cost:7,grade:1,atk:180,atkType:"heal",modLv:"D",modType:"int"},{name:"淨化之書",cost:3,grade:1,atk:30,atkType:"heal",modLv:"F",modType:"int"},{name:"燃燒之書",cost:4,grade:1,atk:150,atkType:"magic",modLv:"F",modType:"str",fire:{atk:220,time:4}},{name:"加速之書",cost:3,grade:1,atk:110,atkType:"heal",modLv:"F",modType:"int"},{name:"快速回復之書",cost:4,grade:2,atk:200,atkType:"heal",modLv:"D",modType:"int"},{name:"觸電之書",cost:3,grade:1,atk:50,atkType:"magic",modLv:"E",modType:"str",lightning:{atk:50,time:6}},{name:"聖光之書",cost:4,grade:2,atk:230,atkType:"magic",modLv:"D",modType:"str"},{name:"智慧之書",cost:4,grade:2,buff:[{int:200,times:99}]},{name:"高階回復之書",cost:7,grade:2,atk:100,atkType:"heal",modLv:"C",modType:"int"},{name:"自由火蝶",cost:4,grade:4,fire:{atk:720,time:4}},{name:"清淨如水",cost:6,grade:3,atk:155,atkType:"heal",modLv:"F",modType:"int",targets:99},{name:"雷電蜂",cost:4,grade:3,atk:100,atkType:"magic",modLv:"D",modType:"str",lightning:{atk:145,time:10}},{name:"猛炎之書",cost:5,grade:2,atk:330,atkType:"magic",modLv:"E",modType:"str",fire:{atk:480,time:4}},{name:"海魔獸歷史",cost:4,grade:3,atk:100,atkType:"heal",modLv:"E",modType:"int"},{name:"火焰之加護",cost:4,grade:4,atk:20,atkType:"heal",modLv:"D",modType:"int"},{name:"聖樹祭慶祝指南",cost:5,grade:3,atk:50,atkType:"heal",modLv:"C",modType:"int",buff:[{def:250,times:99}]},{name:"夏洛蒂自傳",cost:5,grade:3,atk:350,atkType:"magic",modLv:"C",modType:"str"},{name:"神怒之書",cost:4,grade:3,buff:[{bonus:35,times:1}]},{name:"航海指南",cost:4,atk:220,atkType:"heal",modLv:"C",modType:"int"},{name:"刨冰食用指南",cost:4,grade:4,water:{modLv:"C",modType:"int",time:2}},{name:"深紅的日記",cost:5,grade:3,atk:250,atkType:"magic",modLv:"E",modType:"str",fire:{modLv:1.31,modType:"int",time:5}},{name:"眾神之怒",cost:3,grade:4,buff:[{bonus:30,times:1}]},{name:"生命滿溢",cost:3,grade:4,atk:300,atkType:"heal",modLv:"C",modType:"int"},{name:"聖火護盾",cost:7,grade:4,atk:82,atkType:"heal",modLv:"B",modType:"int"},{name:"結晶智慧",cost:4,grade:2,buff:[{int:400,times:99}]},{name:"腥紅海鯊後援團守則",cost:7,grade:4,atk:280,atkType:"heal",modLv:"C",modType:"int",targets:99}],qt=Lt.filter((t=>t.buff&&!t.modLv&&!t.atk));return{A:class extends J{constructor(t){super(),K(this,t,_t,Ct,i,{weapons:0,storeKey:47},null,[-1,-1,-1,-1])}},b:qt,w:Lt}}();
//# sourceMappingURL=tome-a88e7b1e.js.map
