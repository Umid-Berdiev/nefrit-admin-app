import{z as _,A as y,e as w,D as v,o as i,i as n,j as l,k as d,F as V,s as k,g as c,N as C,v as x,f as B,l as f,m as $,t as N,E as g,q,w as K,T,bU as z}from"./index.7d56daf3.js";const D={class:"tabs-inner"},E=["onKeydown","onClick"],F={key:0,class:"tab-naver"},S={class:"tab-content is-active"},I=_({props:{tabs:null,selected:{default:void 0},type:{default:void 0},align:{default:void 0},slider:{type:Boolean},slow:{type:Boolean}},emits:["update:selected"],setup(u,{emit:m}){const e=u,a=y(e.selected),p=w(()=>{if(!e.slider)return"";if(e.type==="rounded")return e.tabs.length===3?"is-triple-slider":e.tabs.length===2?"is-slider":"";if(!e.type){if(e.tabs.length===3)return"is-squared is-triple-slider";if(e.tabs.length===2)return"is-squared is-slider"}return""});function o(s){a.value=s}return v(()=>e.selected,s=>{a.value=s}),v(a,s=>{m("update:selected",s)}),(s,j)=>{const h=z;return i(),n("div",{class:d(["tabs-wrapper",[g(p)]])},[l("div",D,[l("div",{class:d(["tabs mb-0",[e.align==="centered"&&"is-centered",e.align==="right"&&"is-right",e.type==="rounded"&&!e.slider&&"is-toggle is-toggle-rounded",e.type==="toggle"&&"is-toggle",e.type==="boxed"&&"is-boxed"]])},[l("ul",null,[(i(!0),n(V,null,k(u.tabs,(t,r)=>(i(),n("li",{key:r,class:d([a.value===t.value&&"is-active"])},[c(s.$slots,"tab-link",{activeValue:a.value,tab:t,index:r,toggle:o},()=>[l("a",{tabindex:"0",onKeydown:C(x(b=>o(t.value),["prevent"]),["space"]),onClick:b=>o(t.value)},[t.icon?(i(),B(h,{key:0,icon:t.icon},null,8,["icon"])):f("",!0),l("span",null,[c(s.$slots,"tab-link-label",{activeValue:a.value,tab:t,index:r},()=>[$(N(t.label),1)])])],40,E)])],2))),128)),g(p)?(i(),n("li",F)):f("",!0)])],2)]),l("div",S,[q(T,{name:e.slow?"fade-slow":"fade-fast",mode:"out-in"},{default:K(()=>[c(s.$slots,"tab",{activeValue:a.value})]),_:3},8,["name"])])],2)}}});export{I as _};
