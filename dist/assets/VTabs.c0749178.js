import{A as _,B as y,f as w,E as v,o as i,j as n,k as l,l as d,F as V,v as k,i as c,O as x,x as B,g as C,m as f,p as $,t as N,G as g,s as T,w as K,T as q,bT as E}from"./index.433ccf37.js";const F={class:"tabs-inner"},S=["onKeydown","onClick"],j={key:0,class:"tab-naver"},z={class:"tab-content is-active"},G=_({props:{tabs:null,selected:{default:void 0},type:{default:void 0},align:{default:void 0},slider:{type:Boolean},slow:{type:Boolean}},emits:["update:selected"],setup(u,{emit:m}){const e=u,a=y(e.selected),p=w(()=>{if(!e.slider)return"";if(e.type==="rounded")return e.tabs.length===3?"is-triple-slider":e.tabs.length===2?"is-slider":"";if(!e.type){if(e.tabs.length===3)return"is-squared is-triple-slider";if(e.tabs.length===2)return"is-squared is-slider"}return""});function o(s){a.value=s}return v(()=>e.selected,s=>{a.value=s}),v(a,s=>{m("update:selected",s)}),(s,A)=>{const h=E;return i(),n("div",{class:d(["tabs-wrapper",[g(p)]])},[l("div",F,[l("div",{class:d(["tabs mb-0",[e.align==="centered"&&"is-centered",e.align==="right"&&"is-right",e.type==="rounded"&&!e.slider&&"is-toggle is-toggle-rounded",e.type==="toggle"&&"is-toggle",e.type==="boxed"&&"is-boxed"]])},[l("ul",null,[(i(!0),n(V,null,k(u.tabs,(t,r)=>(i(),n("li",{key:r,class:d([a.value===t.value&&"is-active"])},[c(s.$slots,"tab-link",{activeValue:a.value,tab:t,index:r,toggle:o},()=>[l("a",{tabindex:"0",onKeydown:x(B(b=>o(t.value),["prevent"]),["space"]),onClick:b=>o(t.value)},[t.icon?(i(),C(h,{key:0,icon:t.icon},null,8,["icon"])):f("",!0),l("span",null,[c(s.$slots,"tab-link-label",{activeValue:a.value,tab:t,index:r},()=>[$(N(t.label),1)])])],40,S)])],2))),128)),g(p)?(i(),n("li",j)):f("",!0)])],2)]),l("div",z,[T(q,{name:e.slow?"fade-slow":"fade-fast",mode:"out-in"},{default:K(()=>[c(s.$slots,"tab",{activeValue:a.value})]),_:3},8,["name"])])],2)}}});export{G as _};
