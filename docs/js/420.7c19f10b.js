"use strict";(self["webpackChunkcute_owner"]=self["webpackChunkcute_owner"]||[]).push([[420],{4420:function(l,e,a){a.r(e),a.d(e,{default:function(){return U}});var t=a(3396),s=a(7139),u=a(4870),n=a(3364),o=a(544),c=a(8304),d=a(5488),i=a(6073),v=a(9545);const r={class:"centralize-container"},m=(0,t._)("h1",null,"兔兔編輯物品",-1);var p=(0,t.aZ)({__name:"ItemEdit",setup(l){const e=(0,u.iH)(null),a=(0,t.Fl)((()=>e.value?.map((l=>({text:(0,c.Y)(l.name),value:l.id}))))),p=(0,u.iH)(null),_=(0,t.Fl)((()=>e.value?.find((l=>l.id===p.value?.value)))),y=(0,u.iH)(""),b=(0,u.iH)(""),w=async()=>{try{e.value=(await(0,n.p)()).data,y.value=_.value?.name||"",b.value=_.value?.description||""}catch(l){(0,d.l)("無法取得使用者名單或物品列表")}};(0,t.bv)(w),(0,t.m0)((async()=>{y.value=_.value?.name||"",b.value=_.value?.description||""}));const U=async()=>{try{if(!p.value)throw new Error;await(0,n.e)({id:p.value.value,name:y.value,description:b.value}),(0,d.l)("成功"),await w()}catch(l){(0,d.l)("失敗")}};return(l,e)=>((0,t.wg)(),(0,t.iD)("div",r,[m,(0,t.Wm)(o.Z,{value:p.value,"onUpdate:value":e[0]||(e[0]=l=>p.value=l),class:(0,s.C_)(l.$style.control),options:(0,u.SU)(a),label:"物品"},null,8,["value","class","options"]),(0,t.Wm)((0,u.SU)(i.gN),{modelValue:y.value,"onUpdate:modelValue":e[1]||(e[1]=l=>y.value=l),label:"名字",class:(0,s.C_)(l.$style.control),disabled:!0},null,8,["modelValue","class"]),(0,t.Wm)((0,u.SU)(i.gN),{modelValue:b.value,"onUpdate:modelValue":e[2]||(e[2]=l=>b.value=l),label:"描述",type:"textarea",class:(0,s.C_)([l.$style.control,l.$style.des]),disabled:!(0,u.SU)(_)},null,8,["modelValue","class","disabled"]),(0,t.Wm)((0,u.SU)(v.zx),{class:(0,s.C_)(l.$style.control),round:!0,type:"primary",disabled:!(0,u.SU)(_),onClick:U},{default:(0,t.w5)((()=>[(0,t.Uk)(" 發送 ")])),_:1},8,["class","disabled"])]))}}),_={control:"ItemEdit_control_RyWGh",des:"ItemEdit_des_Ys8lM"},y=a(89);const b={};b["$style"]=_;const w=(0,y.Z)(p,[["__cssModules",b]]);var U=w}}]);