import{u as C,b as z}from"./VControl.068ba628.js";import{K as V,m as $,aj as q,c as i,p as t,x as l,M as a,F as f,y as h,t as n,f as y,s as b,C as B,D as _,B as g,ad as r,ae as d,I as F,A as N}from"./index.f060b7c6.js";const w={class:"field-label is-normal"},P={key:0,class:"has-text-danger"},S={class:"field-body"},D={key:0,class:"has-text-danger"},A=V({props:{id:{default:void 0},label:{default:void 0},required:{type:Boolean,default:!1},addons:{type:Boolean},textaddon:{type:Boolean},grouped:{type:Boolean},multiline:{type:Boolean},horizontal:{type:Boolean},subcontrol:{type:Boolean},raw:{type:Boolean}},setup(v,{expose:k}){const e=v,o=$(C({id:e.id,inherit:!e.subcontrol})),u=q(),c=i(()=>Boolean(u?.label?.()||e.label)),p=i(()=>Boolean(u?.required?.()||e.required)),x=i(()=>e.raw?[]:["field",e.addons&&"has-addons",e.textaddon&&"has-textarea-addon",e.grouped&&"is-grouped",e.grouped&&e.multiline&&"is-grouped-multiline",e.horizontal&&"is-horizontal"]);return k(o),(s,L)=>{const m=z;return t(),l("div",{class:N(a(x))},[a(c)&&e.horizontal?(t(),l(f,{key:0},[h("div",w,[n(s.$slots,"label",r(d(a(o))),()=>[y(m,null,{default:b(()=>[B(_(e.label),1)]),_:1}),a(p)?(t(),l("span",P,"*")):g("",!0)])]),h("div",S,[n(s.$slots,"default",r(d(a(o))))])],64)):a(c)?(t(),l(f,{key:1},[n(s.$slots,"label",r(d(a(o))),()=>[y(m,null,{default:b(()=>[B(_(e.label)+" ",1),a(p)?(t(),l("span",D,"*")):g("",!0)]),_:1})]),n(s.$slots,"default",r(d(a(o))))],64)):n(s.$slots,"default",r(F({key:2},a(o))))],2)}}});export{A as _};
