"use strict";(self["webpackChunkcute_owner"]=self["webpackChunkcute_owner"]||[]).push([[105],{8875:function(n,t,o){o.d(t,{H2:function(){return r},PA:function(){return c},TB:function(){return l},kS:function(){return d},um:function(){return u},xV:function(){return s}});var e=o(6943);const i="https://api.mausurabbit.xyz/auth",a={withCredentials:!0},r=n=>e.Z.post(`${i}/register/option`,{...n,rp_id:"immortalmice.github.io"},a),l=n=>e.Z.post(`${i}/register/verify`,n,a),s=n=>e.Z.post(`${i}/authentication/option`,{...n,rp_id:"immortalmice.github.io"},a),c=n=>e.Z.post(`${i}/authentication/verify`,n,a),u=()=>e.Z.get(`${i}/info`,a),d=()=>e.Z.post(`${i}/logout`,{},a)},7105:function(n,t,o){o.r(t),o.d(t,{default:function(){return m}});o(7658);var e=o(3396),i=o(7139),a=o(4870),r=o(8875),l=o(2483),s=o(487),c=o(3989),u=(0,e.aZ)({__name:"Dashboard",setup(n){const t={rabbit:"兔子大帝",owner:"主人",user:"兔粉"},o=(0,l.tv)(),u=(0,a.iH)(""),d=(0,a.iH)(""),p=(0,a.iH)([]),g=(0,a.Fl)((()=>p.value.map((n=>t[n]||"")).join(", ")));(0,e.bv)((async()=>{try{const{data:n}=await(0,r.um)();u.value=n.email,d.value=n.username,p.value=n.user_groups}catch(n){console.log(n),(0,s.NU)({message:"取得個人資訊失敗QQ",type:"primary"}),o.push("/auth/login")}}));const f=async()=>{try{await(0,r.kS)()}catch(n){}finally{o.push("/auth/login")}};return(n,t)=>{const o=(0,e.up)("RouterLink");return(0,e.wg)(),(0,e.iD)("div",{class:(0,i.C_)(["centralize-container",n.$style.container])},[(0,e._)("h2",null,(0,i.zw)(d.value),1),(0,e._)("p",null,"Email: "+(0,i.zw)(u.value),1),(0,e._)("p",null,"身分： "+(0,i.zw)((0,a.SU)(g)),1),(0,e.Wm)((0,a.SU)(c.zx),{class:(0,i.C_)(n.$style.btn),round:!0,size:"small",type:"primary",onClick:f},{default:(0,e.w5)((()=>[(0,e.Uk)(" 登出 ")])),_:1},8,["class"]),(0,e.Wm)(o,{to:"/rabbit-status"},{default:(0,e.w5)((()=>[(0,e.Uk)((0,i.zw)("<=")+" 去看看兔兔的狀態吧")])),_:1})],2)}}}),d={container:"Dashboard_container_fYpx_",btn:"Dashboard_btn_yYcEt"},p=o(89);const g={};g["$style"]=d;const f=(0,p.Z)(u,[["__cssModules",g]]);var m=f},3989:function(n,t,o){o.d(t,{zx:function(){return k}});var e=o(1404),i=o(3396),a=o(610),r=o(2220),l=o(5323),s=o(7936),c=o(5322),u=o(6014),d=o(316),p=o(6048);const[g,f]=(0,a["do"])("loading"),m=Array(12).fill(null).map(((n,t)=>(0,i.Wm)("i",{class:f("line",String(t+1))},null))),y=(0,i.Wm)("svg",{class:f("circular"),viewBox:"25 25 50 50"},[(0,i.Wm)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),b={size:l.Or,type:(0,l.SQ)("circular"),color:String,vertical:Boolean,textSize:l.Or,textColor:String};var v=(0,i.aZ)({name:g,props:b,setup(n,{slots:t}){const o=(0,i.Fl)((()=>(0,r.l7)({color:n.color},(0,p.Xn)(n.size)))),e=()=>{const e="spinner"===n.type?m:y;return(0,i.Wm)("span",{class:f("spinner",n.type),style:o.value},[t.icon?t.icon():e])},a=()=>{var o;if(t.default)return(0,i.Wm)("span",{class:f("text"),style:{fontSize:(0,p.Nn)(n.textSize),color:null!=(o=n.textColor)?o:n.color}},[t.default()])};return()=>{const{type:t,vertical:o}=n;return(0,i.Wm)("div",{class:f([t,{vertical:o}]),"aria-live":"polite","aria-busy":!0},[e(),a()])}}});const h=(0,e.n)(v);const[S,_]=(0,a["do"])("button"),x=(0,r.l7)({},u.g2,{tag:(0,l.SQ)("button"),text:String,icon:String,type:(0,l.SQ)("default"),size:(0,l.SQ)("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:(0,l.SQ)("button"),loadingSize:l.Or,loadingText:String,loadingType:String,iconPosition:(0,l.SQ)("left")});var z=(0,i.aZ)({name:S,props:x,emits:["click"],setup(n,{emit:t,slots:o}){const e=(0,u.yj)(),a=()=>o.loading?o.loading():(0,i.Wm)(h,{size:n.loadingSize,type:n.loadingType,class:_("loading")},null),r=()=>n.loading?a():o.icon?(0,i.Wm)("div",{class:_("icon")},[o.icon()]):n.icon?(0,i.Wm)(d.JO,{name:n.icon,class:_("icon"),classPrefix:n.iconPrefix},null):void 0,l=()=>{let t;if(t=n.loading?n.loadingText:o.default?o.default():n.text,t)return(0,i.Wm)("span",{class:_("text")},[t])},p=()=>{const{color:t,plain:o}=n;if(t){const n={color:o?t:"white"};return o||(n.background=t),t.includes("gradient")?n.border=0:n.borderColor=t,n}},g=o=>{n.loading?(0,s.PF)(o):n.disabled||(t("click",o),e())};return()=>{const{tag:t,type:o,size:e,block:a,round:s,plain:u,square:d,loading:f,disabled:m,hairline:y,nativeType:b,iconPosition:v}=n,h=[_([o,e,{plain:u,block:a,round:s,square:d,loading:f,disabled:m,hairline:y}]),{[c._K]:y}];return(0,i.Wm)(t,{type:b,class:h,style:p(),disabled:m,onClick:g},{default:()=>[(0,i.Wm)("div",{class:_("content")},["left"===v&&r(),l(),"right"===v&&r()])]})}}});const k=(0,e.n)(z)},6014:function(n,t,o){o.d(t,{g2:function(){return i},yj:function(){return r}});var e=o(3396);const i={to:[String,Object],url:String,replace:Boolean};function a({to:n,url:t,replace:o,$router:e}){n&&e?e[o?"replace":"push"](n):t&&(o?location.replace(t):location.href=t)}function r(){const n=(0,e.FN)().proxy;return()=>a(n)}}}]);
//# sourceMappingURL=105.63cd0595.js.map