(function(){"use strict";var e={8875:function(e,t,n){n.d(t,{H2:function(){return u},PA:function(){return c},TB:function(){return a},kS:function(){return f},um:function(){return l},xV:function(){return s}});var r=n(6943);const o="https://api.mausurabbit.xyz/auth",i={withCredentials:!0},u=e=>r.Z.post(`${o}/register/option`,{...e,rp_id:"immortalmice.github.io"},i),a=e=>r.Z.post(`${o}/register/verify`,e,i),s=e=>r.Z.post(`${o}/authentication/option`,{...e,rp_id:"immortalmice.github.io"},i),c=e=>r.Z.post(`${o}/authentication/verify`,e,i),l=()=>r.Z.get(`${o}/info`,i),f=()=>r.Z.post(`${o}/logout`,{},i)},2536:function(e,t,n){var r=n(9242),o=n(3396),i=(0,o.aZ)({__name:"App",setup(e){const t=()=>document.body.style.setProperty("--vh",window.innerHeight/100+"px");return(0,o.bv)(t),window.addEventListener("resize",t),(e,t)=>{const n=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(n)}}});const u=i;var a=u,s=n(2483),c=n(7139),l=n.p+"img/user.69f1de6f.svg",f=(n(7658),n(4870)),p=n.p+"img/close.45875a91.svg",d=n(8875),m=n(3989),h=n(2578);const v=()=>({user:null});var g=(0,h.Q_)("main",{state:v});function b(e,t){return t.filter((t=>e.includes(t)??!1)).length>0}var y=(0,o.aZ)({__name:"ShowWithUserGroup",props:{groups:null},setup(e){const t=e,n=g(),r=(0,f.Fl)((()=>{const e=n.user;return!!b(e?.userGroup||[],t.groups)}));return(e,t)=>(0,f.SU)(r)?(0,o.WI)(e.$slots,"default",{key:0}):(0,o.kq)("",!0)}});const _=y;var w=_;const k=(0,o._)("p",null,"兔兔系統發現你還沒登入呢 >.0",-1);var C=(0,o.aZ)({__name:"UserPanel",props:{show:{type:Boolean,default:!0}},emits:["update:show"],setup(e,{emit:t}){const n={rabbit:"兔子大帝",owner:"主人",user:"兔粉"},i=(0,s.tv)(),u=g(),{user:a}=(0,f.BK)(u),l=(0,f.Fl)((()=>a.value?.userGroup.map((e=>n[e]||"")).join(", ")||"")),h=async()=>{try{await(0,d.kS)()}catch(e){}finally{i.push("/auth/login")}};return(n,i)=>{const s=(0,o.up)("RouterLink");return(0,o.wy)(((0,o.wg)(),(0,o.iD)("div",{class:(0,c.C_)(["centralize-container",n.$style.container])},[(0,o._)("img",{class:(0,c.C_)(n.$style.close),src:p,onClick:i[0]||(i[0]=e=>t("update:show",!1))},null,2),(0,f.SU)(u).user?((0,o.wg)(),(0,o.iD)(o.HY,{key:0},[(0,o._)("h2",null,(0,c.zw)((0,f.SU)(a)?.username),1),(0,o._)("p",null,"Email: "+(0,c.zw)((0,f.SU)(a)?.email),1),(0,o._)("p",null,"身分： "+(0,c.zw)((0,f.SU)(l)),1),(0,o.Wm)((0,f.SU)(m.zx),{class:(0,c.C_)(n.$style.btn),round:!0,size:"small",type:"primary",onClick:h},{default:(0,o.w5)((()=>[(0,o.Uk)(" 登出 ")])),_:1},8,["class"]),(0,o.Wm)(w,{groups:["rabbit"]},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{to:"/rabbit-status/create"},{default:(0,o.w5)((()=>[(0,o.Uk)((0,c.zw)("<=")+" 大帝請更新狀態")])),_:1})])),_:1})],64)):((0,o.wg)(),(0,o.iD)(o.HY,{key:1},[k,(0,o.Wm)((0,f.SU)(m.zx),{class:(0,c.C_)(n.$style.btn),round:!0,size:"small",type:"primary",onClick:i[1]||(i[1]=e=>n.$router.push("/auth/login"))},{default:(0,o.w5)((()=>[(0,o.Uk)(" 登入 ")])),_:1},8,["class"])],64))],2)),[[r.F8,e.show]])}}}),S={container:"UserPanel_container_ICrIj",btn:"UserPanel_btn_Kk_M0",close:"UserPanel_close_ICNxt"},U=n(89);const x={};x["$style"]=S;const P=(0,U.Z)(C,[["__cssModules",x]]);var $=P,j=(0,o.aZ)({__name:"index",setup(e){const t=(0,f.iH)(!1);return(0,s.ao)((()=>{t.value=!1})),(e,n)=>{const r=(0,o.up)("RouterView");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(r),(0,o._)("img",{onClick:n[0]||(n[0]=e=>t.value=!0),class:(0,c.C_)(e.$style.user),src:l},null,2),(0,o.Wm)($,{show:t.value,"onUpdate:show":n[1]||(n[1]=e=>t.value=e),class:(0,c.C_)(e.$style.panel)},null,8,["show","class"])],64)}}}),E={user:"index_user_aGGnv",panel:"index_panel_I58X4"};const O={};O["$style"]=E;const Z=(0,U.Z)(j,[["__cssModules",O]]);var z=Z;const A=[{path:"/",redirect:"/rabbit-status"},{path:"/auth",redirect:"/auth/login"},{path:"/auth/register",component:()=>Promise.all([n.e(708),n.e(471)]).then(n.bind(n,1471))},{path:"/auth/login",component:()=>Promise.all([n.e(708),n.e(442)]).then(n.bind(n,4442))},{path:"/rabbit-status",component:z,children:[{path:"",component:()=>n.e(447).then(n.bind(n,9447))},{path:"create",component:()=>Promise.all([n.e(708),n.e(294)]).then(n.bind(n,6294)),meta:{permission:["rabbit"]}}]},{path:"/:pathMatch(.*)*",component:()=>n.e(54).then(n.bind(n,1054))}],N=(0,s.p7)({history:(0,s.r5)(),routes:A});var T=N,W=n(530),B=n.n(W),F=n(5488);B().configure({showSpinner:!1}),T.beforeEach((async(e,t,n)=>{B().start();const r=g();try{const{data:e}=await(0,d.um)();r.user={email:e.email,username:e.username,userGroup:e.user_groups}}catch(o){console.log("Info api failed"),r.user=null}e.meta.permission?b(r.user?.userGroup||[],e.meta.permission)?n():((0,F.l)("沒有權限"),n(!1)):n()})),T.afterEach((()=>B().done()));n(5110);(0,r.ri)(a).use((0,h.WB)()).use(T).mount("#app")},5488:function(e,t,n){n.d(t,{l:function(){return o}});var r=n(487);function o(e){(0,r.NU)({message:e,type:"primary"})}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var u=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||u>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(a=!1,i<u&&(u=i));if(a){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{54:"999d4daf",294:"715db75e",442:"1fb65d53",447:"3f520cf3",471:"cb9ae366",708:"ace26ed3"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{294:"9dac6d45",442:"f297a305",447:"a67e35b6",471:"652b6c1b"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="cute-owner:";n.l=function(r,o,i,u){if(e[r])e[r].push(o);else{var a,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==t+i){a=f;break}}a||(s=!0,a=document.createElement("script"),a.charset="utf-8",a.timeout=120,n.nc&&a.setAttribute("nonce",n.nc),a.setAttribute("data-webpack",t+i),a.src=r),e[r]=[o];var p=function(t,n){a.onerror=a.onload=null,clearTimeout(d);var o=e[r];if(delete e[r],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(p.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=p.bind(null,a.onerror),a.onload=p.bind(null,a.onload),s&&document.head.appendChild(a)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var u=function(n){if(i.onerror=i.onload=null,"load"===n.type)r();else{var u=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=u,s.request=a,i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=u,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){o=u[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var u=n.miniCssF(r),a=n.p+u;if(t(u,a))return o();e(r,a,null,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={294:1,442:1,447:1,471:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var u=n.p+n.u(t),a=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;a.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",a.name="ChunkLoadError",a.type=i,a.request=u,o[1](a)}};n.l(u,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,u=r[0],a=r[1],s=r[2],c=0;if(u.some((function(t){return 0!==e[t]}))){for(o in a)n.o(a,o)&&(n.m[o]=a[o]);if(s)var l=s(n)}for(t&&t(r);c<u.length;c++)i=u[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkcute_owner"]=self["webpackChunkcute_owner"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2536)}));r=n.O(r)})();
//# sourceMappingURL=app.d1614993.js.map