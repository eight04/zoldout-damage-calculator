var tome4Fb3F458=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function s(t){t.forEach(e)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(e,n,s){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const s=e.subscribe(...n);return s.unsubscribe?()=>s.unsubscribe():s}(n,s))}function c(t,e){t.appendChild(e)}function r(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function l(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function m(){return d(" ")}function p(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function g(t){return""===t?null:+t}function y(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function k(t,e){t.value=null==e?"":e}function v(t,e){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e)return void(s.selected=!0)}t.selectedIndex=-1}function $(t,e,n){t.classList[n?"add":"remove"](e)}let b;function x(t){b=t}const w=[],T=[],C=[],_=[],L=Promise.resolve();let R=!1;function F(t){C.push(t)}function B(t){_.push(t)}const S=new Set;let E=0;function A(){const t=b;do{for(;E<w.length;){const t=w[E];E++,x(t),H(t.$$)}for(x(null),w.length=0,E=0;T.length;)T.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];S.has(e)||(S.add(e),e())}C.length=0}while(w.length);for(;_.length;)_.pop()();R=!1,S.clear(),x(t)}function H(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(F)}}const M=new Set;function D(t,e){t&&t.i&&(M.delete(t),t.i(e))}function W(t,e,n,s){if(t&&t.o){if(M.has(t))return;M.add(t),undefined.c.push((()=>{M.delete(t),s&&(n&&t.d(1),s())})),t.o(e)}else s&&s()}function z(t,e,n){const s=t.$$.props[e];void 0!==s&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function O(t){t&&t.c()}function j(t,n,a,i){const{fragment:c,on_mount:r,on_destroy:u,after_update:l}=t.$$;c&&c.m(n,a),i||F((()=>{const n=r.map(e).filter(o);u?u.push(...n):s(n),t.$$.on_mount=[]})),l.forEach(F)}function I(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function N(t,e){-1===t.$$.dirty[0]&&(w.push(t),R||(R=!0,L.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function K(e,o,a,i,c,r,l,f=[-1]){const d=b;x(e);const m=e.$$={fragment:null,ctx:null,props:r,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:f,skip_bound:!1,root:o.target||d.$$.root};l&&l(m.root);let p=!1;if(m.ctx=a?a(e,o.props||{},((t,n,...s)=>{const o=s.length?s[0]:n;return m.ctx&&c(m.ctx[t],m.ctx[t]=o)&&(!m.skip_bound&&m.bound[t]&&m.bound[t](o),p&&N(e,t)),n})):[],m.update(),p=!0,s(m.before_update),m.fragment=!!i&&i(m.ctx),o.target){if(o.hydrate){const t=function(t){return Array.from(t.childNodes)}(o.target);m.fragment&&m.fragment.l(t),t.forEach(u)}else m.fragment&&m.fragment.c();o.intro&&D(e.$$.fragment),j(e,o.target,o.anchor,o.customElement),A()}x(d)}class P{$destroy(){I(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(e){let n,s,o,a;return{c(){n=f("button"),s=d(e[2]),h(n,"class","svelte-19loasr"),$(n,"sorted",e[0].field===e[1]),$(n,"reversed",e[0].dir<0)},m(t,i){r(t,n,i),c(n,s),o||(a=p(n,"click",e[3]),o=!0)},p(t,[e]){4&e&&y(s,t[2]),3&e&&$(n,"sorted",t[0].field===t[1]),1&e&&$(n,"reversed",t[0].dir<0)},i:t,o:t,d(t){t&&u(n),o=!1,a()}}}function J(t,e,n){let{method:s,field:o,text:a}=e;return t.$$set=t=>{"method"in t&&n(0,s=t.method),"field"in t&&n(1,o=t.field),"text"in t&&n(2,a=t.text)},[s,o,a,function(){s.field!==o?(n(0,s.field=o,s),n(0,s.dir=1,s)):n(0,s.dir*=-1,s)}]}class Z extends P{constructor(t){super(),K(this,t,J,q,a,{method:0,field:1,text:2})}}const G=location.pathname.match(/([^/.]*)(\.html)?$/),Q=G[1]&&"index"!==G[1]?G[1]:"sword";function U(e){let n,s,o,a,i,l,d,p;return{c(){n=f("ul"),s=f("li"),s.innerHTML='<a href="." class="svelte-116mxxw">劍</a>',o=m(),a=f("li"),a.innerHTML='<a href="bow.html" class="svelte-116mxxw">弓</a>',i=m(),l=f("li"),l.innerHTML='<a href="wand.html" class="svelte-116mxxw">杖</a>',d=m(),p=f("li"),p.innerHTML='<a href="tome.html" class="svelte-116mxxw">書</a>',h(s,"class","svelte-116mxxw"),$(s,"active","sword"===Q),h(a,"class","svelte-116mxxw"),$(a,"active","bow"===Q),h(l,"class","svelte-116mxxw"),$(l,"active","wand"===Q),h(p,"class","svelte-116mxxw"),$(p,"active","tome"===Q),h(n,"class","svelte-116mxxw")},m(t,e){r(t,n,e),c(n,s),c(n,o),c(n,a),c(n,i),c(n,l),c(n,d),c(n,p)},p:t,i:t,o:t,d(t){t&&u(n)}}}class V extends P{constructor(t){super(),K(this,t,null,U,a,{})}}const X=[];const Y="zoldout-damage-calculator",tt=new Map;function et(e,n){if(tt.has(e))return tt.get(e);const s=function(e,n=t){let s;const o=new Set;function i(t){if(a(e,t)&&(e=t,s)){const t=!X.length;for(const t of o)t[1](),X.push(t,e);if(t){for(let t=0;t<X.length;t+=2)X[t][0](X[t+1]);X.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(a,c=t){const r=[a,c];return o.add(r),1===o.size&&(s=n(i)||t),a(e),()=>{o.delete(r),0===o.size&&(s(),s=null)}}}}(function(t){try{return JSON.parse(t)}catch{}}(localStorage.getItem(`${Y}/${e}`))??n);return s.subscribe((t=>localStorage.setItem(`${Y}/${e}`,JSON.stringify(t)))),tt.set(e,s),s}var nt=[{name:"攻擊力增加（維羅尼卡）",type:"sword",beforeAll:t=>{t.buff.push({bonus:20,times:99})}},{name:"傷害後攻擊增加（艾莉諾拉）",type:"bow",afterHit:t=>{t.buff.push({atk:5,times:99}),1===t.totalHit&&t.buff.push({bonus:1.21,times:99})}},{name:"使用武器後中毒（格蕾絲）",type:"bow",afterWeapon:t=>{t.hit&&t.poison.push({atk:300,turn:2,bonus:0})}},{name:"傷害後點燃或額外傷害（艾娜）",type:"bow",afterHit:t=>{t.fire?t.damage+=360*(100-t.getFireResist())/100:(t.fire=!0,t.damage+=540*(100-t.getFireResist())/100)}},{name:"使用火武器後加速（歌莉雅）",type:"wand",afterWeapon:(t,e)=>{e.fire?.atk&&(t.cost-=2)}},{name:"著火時增傷、減抗（歌莉雅）",type:"buff",beforeHit:t=>{let e=t.targetBuff.find((t=>"goriya1"===t.id));e||(e={id:"goriya1",times:99},t.targetBuff.push(e)),e.injuryBonus=t.fire?10:0,e.fireResist=t.fire?-10:0}},{name:"額外傷害（尤里+泳裝伊蓮）",type:"wand",afterWeapon:(t,e)=>{e.water&&(t.damage+=2*(900-t.getDef({atkType:"magic"})))}},{name:"魔攻增加（西比拉）",type:"wand",beforeWeapon:(t,e)=>{e.casting>=6&&t.hit&&t.buff.push({bonus:25,times:1})}},{name:"生命回復（塔尼亞）",type:"tome",afterWeapon:(t,e)=>{t.hit&&"heal"!==e.atkType||(t.damage+=360)}},{name:"加速（塔尼亞）",type:"tome",afterWeapon:(t,e)=>{t.hit&&"heal"!==e.atkType||t.cost--}}];const st={F:.85,E:1.1,D:1.35,C:1.6,B:1.85,A:2.1,S:2.35,SS:2.6,SSS:2.85};for(const t in st)st[`${t}0`]=st[t]-.1;class ot{constructor({hp:t,atk:e,def:n,int:s,mdef:o,fireResist:a,waterResist:i,poisonResist:c,lightningResist:r,fire:u=!1,freeze:l=!1,poison:f=!1,poisonTurns:d,stance:m=0,passive:p}){this.hp=t,this.atk=e,this.def=n,this.int=s,this.mdef=o,this.fireResist=a,this.waterResist=i,this.poisonResist=c,this.lightningResist=r,this.poisonTurns=d,this.passive=p,this.damage=0,this.hit=0,this.totalHit=0,this.stance=m,this.totalHit=0,this.buff=[],this.targetBuff=[],this.poison=f?[{atk:0,turn:99}]:[],this.lightning={},this.fire=u,this.freeze=l}getDef(t){return it(this,t)}getFireResist(){return this.fireResist+this.targetBuff.reduce(((t,e)=>t+(e.fireResist||0)),0)}getInjuryBonus(){return(this.targetBuff.reduce(((t,e)=>t+(e.injuryBonus||0)),0)+100)/100}getWaterAtk(t){return ct(this,t)}getFireAtk(t){return ct(this,t)}}function at({weapons:t,passiveIds:e,...n}){const s=nt.filter(((t,n)=>e.includes(n))),o=[],a=new ot({...n,passive:s});ut(a,null,"beforeAll");for(const e of t){const t=lt(a,e);o.push(t)}const i=o.reduce(((t,e)=>t+e.damage),0),c=o.reduce(((t,e)=>t+e.cost),0);return{stages:o,summary:{damage:i,cost:c,executeCost:Math.ceil(a.hp/i)*c,cp:i/c}}}function it({def:t,mdef:e,targetBuff:n},{atkType:s}){return"heal"===s?0:"magic"===s?e+n.reduce(((t,e)=>t+(e.mdef||0)),0):t+n.reduce(((t,e)=>t+(e.def||0)),0)}function ct({atk:t,int:e,buff:n},{modType:s,modLv:o,atk:a=0,bonus:i=0}){const c="int"===s?e+n.reduce(((t,e)=>t+(e.int||0)),0):t+n.reduce(((t,e)=>t+(e.atk||0)),0);return(a+(o?c*st[o]:0))*(i+100)/100}function rt({poison:t,poisonTurns:e,poisonResist:n}){let s=0;for(const o of t)o.atk&&(s+=o.atk*Math.min(o.turn,e)/o.turn*(100-n)/100);return s}function ut(t,e,n){t.passive.forEach((s=>s[n]?.(t,e)))}function lt(t,e){const n=rt(t);t.cost=e.casting||e.cost,t.hit=e.hit||(e.atk||e.modLv?1:0),t.damage=0;const s=it(t,e);e.passive?.(t),ut(t,e,"beforeWeapon");for(let n=0;n<t.hit;n++){ut(t,e,"beforeHit"),t.currentHit=n+1,t.totalHit++;let o=ct(t,e);o*=t.buff.reduce(((t,e)=>t*(e.bonus?(e.bonus+100)/100:1)),1),e.stance?.use===t.stance&&(o*=((e.stance.bonus||0)+100)/100),t.damage+=Math.max(o-s,1)*t.getInjuryBonus(),t.lightning?.atk&&(t.damage+=t.lightning.atk*(100-t.lightningResist)/100),ut(t,e,"afterHit")}return t.hit&&(t.buff=t.buff.map((t=>({...t,times:t.times-1}))).filter((t=>t.times>0)),t.targetBuff=t.targetBuff.map((t=>({...t,times:t.times-1}))).filter((t=>t.times>0))),e.trap&&(t.damage+=Math.max(e.trap.atk-s,1)),!e.fire||e.fire.cond&&!e.fire.cond(t)||(t.damage+=t.getFireAtk(e.fire)*(100-t.getFireResist())/100,e.fire.time&&(t.fire=!0)),!e.water||e.water.cond&&!e.water.cond(t)||(t.damage+=t.getWaterAtk(e.water)*(100-t.waterResist)/100,e.water.time&&(t.freeze=!0)),!e.lightning||e.lightning.cond&&!e.lightning.cond(t)||(t.damage+=e.lightning.atk*(100-t.lightningResist)/100,(!t.lightning?.atk||e.lightning.time>t.lightning.time)&&(t.lightning=e.lightning)),!e.poison||e.poison.cond&&!e.poison.cond(t)||(t.poison.push({atk:e.poison.atk,turn:e.poison.turn,bonus:0}),e.poison.bonus&&(t.poison=t.poison.map((t=>{const n=(t.bonus+100)*(e.poison.bonus+100)/100-100;return{...t,bonus:Math.min(n,200)}})))),e.buff&&t.buff.push(...e.buff),e.targetBuff&&t.targetBuff.push(...e.targetBuff),e.stance?.use===t.stance&&e.stance.buff&&t.buff.push(...e.stance.buff),null!=e.stance?.gain&&(t.stance=e.stance.gain),ut(t,e,"afterWeapon"),t.damage+=rt(t)-n,{damage:t.damage,cost:t.cost}}function ft(t,e,n){const s=t.slice();return s[78]=e[n],s}function dt(t,e,n){const s=t.slice();return s[81]=e[n],s[82]=e,s[83]=n,s}function mt(t,e,n){const s=t.slice();return s[84]=e[n],s}function pt(t,e,n){const s=t.slice();return s[87]=e[n],s[83]=n,s}function ht(t){let e,n=(Q===t[87].type||"buff"===t[87].type)&&function(t){let e,n,s,o,a,i,l,g,y=t[87].name+"";return{c(){e=f("label"),n=f("input"),s=m(),o=f("span"),a=d(y),i=m(),h(n,"type","checkbox"),n.__value=t[83],n.value=n.__value,t[65][0].push(n),h(e,"class","cspan svelte-k7rdoy")},m(u,f){r(u,e,f),c(e,n),n.checked=~t[9].indexOf(n.__value),c(e,s),c(e,o),c(o,a),c(e,i),l||(g=p(n,"change",t[64]),l=!0)},p(t,e){512&e[0]&&(n.checked=~t[9].indexOf(n.__value))},d(s){s&&u(e),t[65][0].splice(t[65][0].indexOf(n),1),l=!1,g()}}}(t);return{c(){n&&n.c(),e=d("")},m(t,s){n&&n.m(t,s),r(t,e,s)},p(t,e){Q!==t[87].type&&"buff"!==t[87].type||n.p(t,e)},d(t){n&&n.d(t),t&&u(e)}}}function gt(t){let e,n,s,o=t[84].name+"";return{c(){e=f("option"),n=d(o),e.__value=s=t[84],e.value=e.__value},m(t,s){r(t,e,s),c(e,n)},p(t,a){1&a[0]&&o!==(o=t[84].name+"")&&y(n,o),1&a[0]&&s!==(s=t[84])&&(e.__value=s,e.value=e.__value)},d(t){t&&u(e)}}}function yt(t){let e,n,o,a,i,g,k,$,b,x,w,T,C,_,L,R,B,S,E,A,H,M=t[2].stages[t[83]]?.cost+"",D=t[2].stages[t[83]]?.damage.toFixed(0)+"",W=((t[2].stages[t[83]]?.damage||0)/t[2].stages[t[83]]?.cost).toFixed(0)+"",z=t[0],O=[];for(let e=0;e<z.length;e+=1)O[e]=gt(mt(t,z,e));function j(){t[66].call(e,t[82],t[83])}function I(){return t[67](t[83])}function N(){return t[68](t[83])}function K(){return t[69](t[83])}function P(){return t[70](t[83])}return{c(){e=f("select");for(let t=0;t<O.length;t+=1)O[t].c();n=m(),o=f("span"),a=d(M),i=m(),g=f("span"),k=d(D),$=m(),b=f("span"),x=d(W),w=m(),T=f("div"),C=f("button"),C.textContent="↑",_=m(),L=f("button"),L.textContent="↓",R=m(),B=f("button"),B.textContent="⎘",S=m(),E=f("button"),E.textContent="x",h(e,"class","svelte-k7rdoy"),void 0===t[81]&&F(j),h(o,"class","svelte-k7rdoy"),h(g,"class","svelte-k7rdoy"),h(b,"class","svelte-k7rdoy"),h(T,"class","operation svelte-k7rdoy")},m(s,u){r(s,e,u);for(let t=0;t<O.length;t+=1)O[t].m(e,null);v(e,t[81]),r(s,n,u),r(s,o,u),c(o,a),r(s,i,u),r(s,g,u),c(g,k),r(s,$,u),r(s,b,u),c(b,x),r(s,w,u),r(s,T,u),c(T,C),c(T,_),c(T,L),c(T,R),c(T,B),c(T,S),c(T,E),A||(H=[p(e,"change",j),p(C,"click",I),p(L,"click",N),p(B,"click",K),p(E,"click",P)],A=!0)},p(n,s){if(t=n,1&s[0]){let n;for(z=t[0],n=0;n<z.length;n+=1){const o=mt(t,z,n);O[n]?O[n].p(o,s):(O[n]=gt(o),O[n].c(),O[n].m(e,null))}for(;n<O.length;n+=1)O[n].d(1);O.length=z.length}3&s[0]&&v(e,t[81]),4&s[0]&&M!==(M=t[2].stages[t[83]]?.cost+"")&&y(a,M),4&s[0]&&D!==(D=t[2].stages[t[83]]?.damage.toFixed(0)+"")&&y(k,D),4&s[0]&&W!==(W=((t[2].stages[t[83]]?.damage||0)/t[2].stages[t[83]]?.cost).toFixed(0)+"")&&y(x,W)},d(t){t&&u(e),l(O,t),t&&u(n),t&&u(o),t&&u(i),t&&u(g),t&&u($),t&&u(b),t&&u(w),t&&u(T),A=!1,s(H)}}}function kt(t){let e,n,s,o,a,i,l,g,k,v,$,b,x,w,T,C,_,L,R=t[78].name+"",F=t[78].cost+"",B=t[78].damage.toFixed(0)+"",S=t[78].cp.toFixed(0)+"",E=t[78].executeCost+"";function A(){return t[76](t[78])}return{c(){e=f("span"),n=d(R),s=m(),o=f("span"),a=d(F),i=m(),l=f("span"),g=d(B),k=m(),v=f("span"),$=d(S),b=m(),x=f("span"),w=d(E),T=m(),C=f("button"),C.textContent="x",h(e,"class","svelte-k7rdoy"),h(o,"class","svelte-k7rdoy"),h(l,"class","svelte-k7rdoy"),h(v,"class","svelte-k7rdoy"),h(x,"class","svelte-k7rdoy"),h(C,"class","svelte-k7rdoy")},m(t,u){r(t,e,u),c(e,n),r(t,s,u),r(t,o,u),c(o,a),r(t,i,u),r(t,l,u),c(l,g),r(t,k,u),r(t,v,u),c(v,$),r(t,b,u),r(t,x,u),c(x,w),r(t,T,u),r(t,C,u),_||(L=p(C,"click",A),_=!0)},p(e,s){t=e,8&s[0]&&R!==(R=t[78].name+"")&&y(n,R),8&s[0]&&F!==(F=t[78].cost+"")&&y(a,F),8&s[0]&&B!==(B=t[78].damage.toFixed(0)+"")&&y(g,B),8&s[0]&&S!==(S=t[78].cp.toFixed(0)+"")&&y($,S),8&s[0]&&E!==(E=t[78].executeCost+"")&&y(w,E)},d(t){t&&u(e),t&&u(s),t&&u(o),t&&u(i),t&&u(l),t&&u(k),t&&u(v),t&&u(b),t&&u(x),t&&u(T),t&&u(C),_=!1,L()}}}function vt(t){let e,n,o,a,i,v,$,b,x,w,C,_,L,R,F,S,E,A,H,M,N,K,P,q,J,G,Q,U,X,Y,tt,et,st,ot,at,it,ct,rt,ut,lt,mt,gt,vt,$t,bt,xt,wt,Tt,Ct,_t,Lt,Rt,Ft,Bt,St,Et,At,Ht,Mt,Dt,Wt,zt,Ot,jt,It,Nt,Kt,Pt,qt,Jt,Zt,Gt,Qt,Ut,Vt,Xt,Yt,te,ee,ne,se,oe,ae,ie,ce,re,ue,le,fe,de,me,pe,he,ge,ye,ke,ve,$e,be,xe,we,Te,Ce,_e,Le,Re,Fe,Be,Se,Ee,Ae,He,Me,De,We,ze,Oe,je,Ie,Ne,Ke,Pe,qe,Je,Ze=t[2].summary.cost+"",Ge=t[2].summary.damage.toFixed(0)+"",Qe=t[2].summary.cp.toFixed(0)+"";o=new V({});let Ue=nt,Ve=[];for(let e=0;e<Ue.length;e+=1)Ve[e]=ht(pt(t,Ue,e));let Xe=t[1],Ye=[];for(let e=0;e<Xe.length;e+=1)Ye[e]=yt(dt(t,Xe,e));function tn(e){t[71](e)}let en={field:"name",text:"Name"};function nn(e){t[72](e)}void 0!==t[4]&&(en.method=t[4]),Ce=new Z({props:en}),T.push((()=>z(Ce,"method",tn)));let sn={field:"cost",text:"Cost"};function on(e){t[73](e)}void 0!==t[4]&&(sn.method=t[4]),Re=new Z({props:sn}),T.push((()=>z(Re,"method",nn)));let an={field:"damage",text:"Damage"};function cn(e){t[74](e)}void 0!==t[4]&&(an.method=t[4]),Se=new Z({props:an}),T.push((()=>z(Se,"method",on)));let rn={field:"cp",text:"CP"};function un(e){t[75](e)}void 0!==t[4]&&(rn.method=t[4]),He=new Z({props:rn}),T.push((()=>z(He,"method",cn)));let ln={field:"executeCost",text:"斬殺Cost"};void 0!==t[4]&&(ln.method=t[4]),We=new Z({props:ln}),T.push((()=>z(We,"method",un)));let fn=t[3],dn=[];for(let e=0;e<fn.length;e+=1)dn[e]=kt(ft(t,fn,e));return{c(){e=f("h1"),e.textContent="Zold:Out Damage Calculator",n=m(),O(o.$$.fragment),a=m(),i=f("div"),v=f("span"),v.textContent="血量",$=m(),b=f("input"),x=m(),w=f("span"),w.textContent="力量",C=m(),_=f("input"),L=m(),R=f("span"),R.textContent="防禦",F=m(),S=f("input"),E=m(),A=f("span"),A.textContent="智力",H=m(),M=f("input"),N=m(),K=f("span"),K.textContent="魔防",P=m(),q=f("input"),J=m(),G=f("span"),G.textContent="火抗",Q=m(),U=f("input"),X=m(),Y=f("span"),Y.textContent="水抗",tt=m(),et=f("input"),st=m(),ot=f("span"),ot.textContent="毒抗",at=m(),it=f("input"),ct=m(),rt=f("span"),rt.textContent="雷抗",ut=m(),lt=f("input"),mt=m(),gt=f("label"),vt=f("input"),$t=m(),bt=f("span"),bt.textContent="敵人凍結",xt=m(),wt=f("label"),Tt=f("input"),Ct=m(),_t=f("span"),_t.textContent="敵人著火",Lt=m(),Rt=f("label"),Ft=f("input"),Bt=m(),St=f("span"),St.textContent="敵人中毒",Et=m(),At=f("label"),Ht=f("input"),Mt=m(),Dt=f("span"),Dt.textContent="敵人觸電",Wt=m(),zt=f("span"),zt.textContent="中毒發生次數",Ot=m(),jt=f("input"),It=m(),Nt=f("span"),Nt.textContent="當前架勢",Kt=m(),Pt=f("input"),qt=m();for(let t=0;t<Ve.length;t+=1)Ve[t].c();Jt=m(),Zt=f("h2"),Zt.textContent="Combo",Gt=m(),Qt=f("div"),Ut=f("span"),Ut.textContent="Weapon",Vt=m(),Xt=f("span"),Xt.textContent="Cost",Yt=m(),te=f("span"),te.textContent="Damage",ee=m(),ne=f("span"),ne.textContent="CP",se=m(),oe=f("span"),ae=m();for(let t=0;t<Ye.length;t+=1)Ye[t].c();ie=m(),ce=f("span"),ce.textContent="Summary",re=m(),ue=f("span"),le=d(Ze),fe=m(),de=f("span"),me=d(Ge),pe=m(),he=f("span"),ge=d(Qe),ye=m(),ke=f("button"),ke.textContent="Add to compare list",ve=m(),$e=f("h2"),$e.textContent="Compare",be=m(),xe=f("button"),xe.textContent="Add all weapons",we=m(),Te=f("div"),O(Ce.$$.fragment),Le=m(),O(Re.$$.fragment),Be=m(),O(Se.$$.fragment),Ae=m(),O(He.$$.fragment),De=m(),O(We.$$.fragment),Oe=m(),je=f("span"),Ie=m();for(let t=0;t<dn.length;t+=1)dn[t].c();Ne=m(),Ke=f("footer"),Ke.innerHTML='<a href="https://github.com/eight04/zoldout-damage-calculator">zoldout-damage-calculator</a>',h(b,"type","number"),h(b,"class","cspan3 svelte-k7rdoy"),h(_,"type","number"),h(S,"type","number"),h(M,"type","number"),h(q,"type","number"),h(U,"type","number"),h(et,"type","number"),h(it,"type","number"),h(lt,"type","number"),h(vt,"type","checkbox"),h(gt,"class","cspan svelte-k7rdoy"),h(Tt,"type","checkbox"),h(wt,"class","cspan svelte-k7rdoy"),h(Ft,"type","checkbox"),h(Rt,"class","cspan svelte-k7rdoy"),h(Ht,"type","checkbox"),h(At,"class","cspan svelte-k7rdoy"),h(jt,"type","number"),h(Pt,"type","number"),h(i,"class","base-info svelte-k7rdoy"),h(Ut,"class","chead svelte-k7rdoy"),h(Xt,"class","chead svelte-k7rdoy"),h(te,"class","chead svelte-k7rdoy"),h(ne,"class","chead svelte-k7rdoy"),h(oe,"class","operation svelte-k7rdoy"),h(ce,"class","chead svelte-k7rdoy"),h(ue,"class","svelte-k7rdoy"),h(de,"class","svelte-k7rdoy"),h(he,"class","svelte-k7rdoy"),h(Qt,"class","combo-table svelte-k7rdoy"),h(je,"class","svelte-k7rdoy"),h(Te,"class","compare-list svelte-k7rdoy"),h(Ke,"class","svelte-k7rdoy")},m(s,u){r(s,e,u),r(s,n,u),j(o,s,u),r(s,a,u),r(s,i,u),c(i,v),c(i,$),c(i,b),k(b,t[20]),c(i,x),c(i,w),c(i,C),c(i,_),k(_,t[19]),c(i,L),c(i,R),c(i,F),c(i,S),k(S,t[18]),c(i,E),c(i,A),c(i,H),c(i,M),k(M,t[17]),c(i,N),c(i,K),c(i,P),c(i,q),k(q,t[16]),c(i,J),c(i,G),c(i,Q),c(i,U),k(U,t[8]),c(i,X),c(i,Y),c(i,tt),c(i,et),k(et,t[7]),c(i,st),c(i,ot),c(i,at),c(i,it),k(it,t[6]),c(i,ct),c(i,rt),c(i,ut),c(i,lt),k(lt,t[5]),c(i,mt),c(i,gt),c(gt,vt),vt.checked=t[14],c(gt,$t),c(gt,bt),c(i,xt),c(i,wt),c(wt,Tt),Tt.checked=t[15],c(wt,Ct),c(wt,_t),c(i,Lt),c(i,Rt),c(Rt,Ft),Ft.checked=t[13],c(Rt,Bt),c(Rt,St),c(i,Et),c(i,At),c(At,Ht),Ht.checked=t[12],c(At,Mt),c(At,Dt),c(i,Wt),c(i,zt),c(i,Ot),c(i,jt),k(jt,t[11]),c(i,It),c(i,Nt),c(i,Kt),c(i,Pt),k(Pt,t[10]),c(i,qt);for(let t=0;t<Ve.length;t+=1)Ve[t].m(i,null);r(s,Jt,u),r(s,Zt,u),r(s,Gt,u),r(s,Qt,u),c(Qt,Ut),c(Qt,Vt),c(Qt,Xt),c(Qt,Yt),c(Qt,te),c(Qt,ee),c(Qt,ne),c(Qt,se),c(Qt,oe),c(Qt,ae);for(let t=0;t<Ye.length;t+=1)Ye[t].m(Qt,null);c(Qt,ie),c(Qt,ce),c(Qt,re),c(Qt,ue),c(ue,le),c(Qt,fe),c(Qt,de),c(de,me),c(Qt,pe),c(Qt,he),c(he,ge),r(s,ye,u),r(s,ke,u),r(s,ve,u),r(s,$e,u),r(s,be,u),r(s,xe,u),r(s,we,u),r(s,Te,u),j(Ce,Te,null),c(Te,Le),j(Re,Te,null),c(Te,Be),j(Se,Te,null),c(Te,Ae),j(He,Te,null),c(Te,De),j(We,Te,null),c(Te,Oe),c(Te,je),c(Te,Ie);for(let t=0;t<dn.length;t+=1)dn[t].m(Te,null);r(s,Ne,u),r(s,Ke,u),Pe=!0,qe||(Je=[p(b,"input",t[49]),p(_,"input",t[50]),p(S,"input",t[51]),p(M,"input",t[52]),p(q,"input",t[53]),p(U,"input",t[54]),p(et,"input",t[55]),p(it,"input",t[56]),p(lt,"input",t[57]),p(vt,"change",t[58]),p(Tt,"change",t[59]),p(Ft,"change",t[60]),p(Ht,"change",t[61]),p(jt,"input",t[62]),p(Pt,"input",t[63]),p(ke,"click",t[42]),p(xe,"click",t[44])],qe=!0)},p(t,e){if(1048576&e[0]&&g(b.value)!==t[20]&&k(b,t[20]),524288&e[0]&&g(_.value)!==t[19]&&k(_,t[19]),262144&e[0]&&g(S.value)!==t[18]&&k(S,t[18]),131072&e[0]&&g(M.value)!==t[17]&&k(M,t[17]),65536&e[0]&&g(q.value)!==t[16]&&k(q,t[16]),256&e[0]&&g(U.value)!==t[8]&&k(U,t[8]),128&e[0]&&g(et.value)!==t[7]&&k(et,t[7]),64&e[0]&&g(it.value)!==t[6]&&k(it,t[6]),32&e[0]&&g(lt.value)!==t[5]&&k(lt,t[5]),16384&e[0]&&(vt.checked=t[14]),32768&e[0]&&(Tt.checked=t[15]),8192&e[0]&&(Ft.checked=t[13]),4096&e[0]&&(Ht.checked=t[12]),2048&e[0]&&g(jt.value)!==t[11]&&k(jt,t[11]),1024&e[0]&&g(Pt.value)!==t[10]&&k(Pt,t[10]),512&e[0]){let n;for(Ue=nt,n=0;n<Ue.length;n+=1){const s=pt(t,Ue,n);Ve[n]?Ve[n].p(s,e):(Ve[n]=ht(s),Ve[n].c(),Ve[n].m(i,null))}for(;n<Ve.length;n+=1)Ve[n].d(1);Ve.length=Ue.length}if(7&e[0]|1792&e[1]){let n;for(Xe=t[1],n=0;n<Xe.length;n+=1){const s=dt(t,Xe,n);Ye[n]?Ye[n].p(s,e):(Ye[n]=yt(s),Ye[n].c(),Ye[n].m(Qt,ie))}for(;n<Ye.length;n+=1)Ye[n].d(1);Ye.length=Xe.length}(!Pe||4&e[0])&&Ze!==(Ze=t[2].summary.cost+"")&&y(le,Ze),(!Pe||4&e[0])&&Ge!==(Ge=t[2].summary.damage.toFixed(0)+"")&&y(me,Ge),(!Pe||4&e[0])&&Qe!==(Qe=t[2].summary.cp.toFixed(0)+"")&&y(ge,Qe);const n={};!_e&&16&e[0]&&(_e=!0,n.method=t[4],B((()=>_e=!1))),Ce.$set(n);const s={};!Fe&&16&e[0]&&(Fe=!0,s.method=t[4],B((()=>Fe=!1))),Re.$set(s);const o={};!Ee&&16&e[0]&&(Ee=!0,o.method=t[4],B((()=>Ee=!1))),Se.$set(o);const a={};!Me&&16&e[0]&&(Me=!0,a.method=t[4],B((()=>Me=!1))),He.$set(a);const c={};if(!ze&&16&e[0]&&(ze=!0,c.method=t[4],B((()=>ze=!1))),We.$set(c),8&e[0]|4096&e[1]){let n;for(fn=t[3],n=0;n<fn.length;n+=1){const s=ft(t,fn,n);dn[n]?dn[n].p(s,e):(dn[n]=kt(s),dn[n].c(),dn[n].m(Te,null))}for(;n<dn.length;n+=1)dn[n].d(1);dn.length=fn.length}},i(t){Pe||(D(o.$$.fragment,t),D(Ce.$$.fragment,t),D(Re.$$.fragment,t),D(Se.$$.fragment,t),D(He.$$.fragment,t),D(We.$$.fragment,t),Pe=!0)},o(t){W(o.$$.fragment,t),W(Ce.$$.fragment,t),W(Re.$$.fragment,t),W(Se.$$.fragment,t),W(He.$$.fragment,t),W(We.$$.fragment,t),Pe=!1},d(t){t&&u(e),t&&u(n),I(o,t),t&&u(a),t&&u(i),l(Ve,t),t&&u(Jt),t&&u(Zt),t&&u(Gt),t&&u(Qt),l(Ye,t),t&&u(ye),t&&u(ke),t&&u(ve),t&&u($e),t&&u(be),t&&u(xe),t&&u(we),t&&u(Te),I(Ce),I(Re),I(Se),I(He),I(We),l(dn,t),t&&u(Ne),t&&u(Ke),qe=!1,s(Je)}}}function $t(t,e,n){let s,o,a,c,r,u,l,f,d,m,p,h,y,k,v,$,b,x,{weapons:w,storeKey:T}=e;const C=Object.fromEntries(w.map((t=>[t.name,t]))),_=et(`${T}/atk`,700);i(t,_,(t=>n(19,b=t)));const L=et("comm/def",200);i(t,L,(t=>n(18,$=t)));const R=et(`${T}/int`,700);i(t,R,(t=>n(17,v=t)));const F=et("comm/mdef",200);i(t,F,(t=>n(16,k=t)));const B=et("comm/hp",2736);i(t,B,(t=>n(20,x=t)));const S=et("comm/fireResist",0);i(t,S,(t=>n(8,u=t)));const E=et("comm/waterResist",0);i(t,E,(t=>n(7,r=t)));const A=et("comm/poisonResist",0);i(t,A,(t=>n(6,c=t)));const H=et("comm/lightningResist",0);i(t,H,(t=>n(5,a=t)));const M=et("comm/fire",!1);i(t,M,(t=>n(15,y=t)));const D=et("comm/freeze",!1);i(t,D,(t=>n(14,h=t)));const W=et("comm/poison",!1);i(t,W,(t=>n(13,p=t)));const z=et("comm/lightning",!1);i(t,z,(t=>n(12,m=t)));const O=et(`${T}/poisonTurns`,99);i(t,O,(t=>n(11,d=t)));const j=et(`${T}/stance`,0);i(t,j,(t=>n(10,f=t)));const I=et(`${T}/passiveIds`,[]);i(t,I,(t=>n(9,l=t)));const N=et(`${T}/compareList`,[]);i(t,N,(t=>n(48,s=t)));const K=et(`${T}/sortMethod`,{field:null,dir:1});i(t,K,(t=>n(4,o=t)));let P=[w[0]],q={stages:[],summary:{damage:0,cost:0,cp:0}},J=[],Z=[],G={};function Q(t){P.splice(t,0,P[t]),n(1,P)}function U(t){P.length<=1||(P.splice(t,1),n(1,P))}function V(t,e){const s=P[t];P.splice(t,1),P.splice(t+e,0,s),n(1,P)}function X(t){s.splice(t,1),N.set(s)}const Y=[[]];return t.$$set=t=>{"weapons"in t&&n(0,w=t.weapons),"storeKey"in t&&n(45,T=t.storeKey)},t.$$.update=()=>{2097120&t.$$.dirty[0]&&n(47,G={hp:x,atk:b,def:$,int:v,mdef:k,fire:y,freeze:h,poison:p,lightning:m,poisonTurns:d,stance:f,passiveIds:l,fireResist:u,waterResist:r,poisonResist:c,lightningResist:a}),2&t.$$.dirty[0]|65536&t.$$.dirty[1]&&n(2,q=at({...G,weapons:P})),196608&t.$$.dirty[1]&&n(46,J=s.map(((t,e)=>{const n=t.map((t=>C[t])),s=at({...G,weapons:n});return{name:t.join("+"),index:e,...s.summary}}))),24&t.$$.dirty[0]|32768&t.$$.dirty[1]&&(n(3,Z=J.slice()),o.field&&Z.sort(((t,e)=>(t[o.field]<e[o.field]?-1:t[o.field]>e[o.field]?1:0)*o.dir)))},[w,P,q,Z,o,a,c,r,u,l,f,d,m,p,h,y,k,v,$,b,x,_,L,R,F,B,S,E,A,H,M,D,W,z,O,j,I,N,K,Q,U,V,function(){s.push(P.map((t=>t.name))),N.set(s)},X,function(){const t=new Set(s.map((t=>t[0])));for(const e of w)t.has(e.name)||s.push([e.name]);N.set(s)},T,J,G,s,function(){x=g(this.value),B.set(x)},function(){b=g(this.value),_.set(b)},function(){$=g(this.value),L.set($)},function(){v=g(this.value),R.set(v)},function(){k=g(this.value),F.set(k)},function(){u=g(this.value),S.set(u)},function(){r=g(this.value),E.set(r)},function(){c=g(this.value),A.set(c)},function(){a=g(this.value),H.set(a)},function(){h=this.checked,D.set(h)},function(){y=this.checked,M.set(y)},function(){p=this.checked,W.set(p)},function(){m=this.checked,z.set(m)},function(){d=g(this.value),O.set(d)},function(){f=g(this.value),j.set(f)},function(){l=function(t,e,n){const s=new Set;for(let e=0;e<t.length;e+=1)t[e].checked&&s.add(t[e].__value);return n||s.delete(e),Array.from(s)}(Y[0],this.__value,this.checked),I.set(l)},Y,function(t,e){t[e]=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),n(1,P),n(0,w)},t=>V(t,-1),t=>V(t,1),t=>Q(t),t=>U(t),function(t){o=t,K.set(o)},function(t){o=t,K.set(o)},function(t){o=t,K.set(o)},function(t){o=t,K.set(o)},function(t){o=t,K.set(o)},t=>X(t.index)]}const bt=[{name:"閃耀之書",cost:4,grade:1,atk:230,atkType:"magic",modLv:"E",modType:"str"},{name:"憤怒之書",cost:2,grade:1,buff:[{bonus:15,times:1}]},{name:"大回復之書",cost:7,grade:1,atk:180,atkType:"heal",modLv:"D",modType:"int"},{name:"淨化之書",cost:3,grade:1,atk:30,atkType:"heal",modLv:"F",modType:"int"},{name:"燃燒之書",cost:4,grade:1,atk:150,atkType:"magic",modLv:"F",modType:"str",fire:{atk:220,time:4}},{name:"加速之書",cost:3,grade:1,atk:110,atkType:"heal",modLv:"F",modType:"int"},{name:"快速回復之書",cost:4,grade:2,atk:200,atkType:"heal",modLv:"D",modType:"int"},{name:"觸電之書",cost:3,grade:1,atk:50,atkType:"magic",modLv:"E",modType:"str",lightning:{atk:50,time:6}},{name:"聖光之書",cost:4,grade:2,atk:230,atkType:"magic",modLv:"D",modType:"str"},{name:"智慧之書",cost:4,grade:2,buff:[{int:200,times:99}]},{name:"高階回復之書",cost:7,grade:2,atk:100,atkType:"heal",modLv:"C",modType:"int"},{name:"自由火蝶",cost:4,grade:4,fire:{atk:720,time:4}},{name:"清淨如水",cost:6,grade:3,atk:155,atkType:"heal",modLv:"F",modType:"int"},{name:"雷電蜂",cost:4,grade:3,atk:100,atkType:"magic",modLv:"D",modType:"str",lightning:{atk:145,time:10}},{name:"猛炎之書",cost:5,grade:2,atk:330,atkType:"magic",modLv:"E",modType:"str",fire:{atk:480,time:4}},{name:"海魔獸歷史",cost:4,grade:3,atk:100,atkType:"heal",modLv:"E",modType:"int"},{name:"火焰之加護",cost:4,grade:4,atk:20,atkType:"heal",modLv:"D",modType:"int"},{name:"神怒之書",cost:4,grade:3,buff:[{bonus:35,times:1}]},{name:"刨冰食用指南",cost:4,grade:4,water:{modLv:"C",modType:"int",time:2}},{name:"深紅的日記",cost:5,grade:3,atk:250,atkType:"magic",modLv:"E",modType:"str"},{name:"生命滿溢",cost:3,grade:4,atk:300,atkType:"heal",modLv:"C",modType:"int"},{name:"聖火護盾",cost:7,grade:4,atk:82,atkType:"heal",modLv:"B",modType:"int"},{name:"結晶智慧",cost:4,grade:2,buff:[{int:400,times:99}]}],xt=bt.filter((t=>t.buff&&!t.modLv&&!t.atk));return{A:class extends P{constructor(t){super(),K(this,t,$t,vt,a,{weapons:0,storeKey:45},null,[-1,-1,-1])}},b:xt,w:bt}}();
//# sourceMappingURL=tome-4fb3f458.js.map
