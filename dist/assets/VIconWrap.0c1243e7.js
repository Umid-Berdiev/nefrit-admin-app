import{o as l}from"./via-placeholder.9af8280d.js";import{K as u,c as p,p as r,x as a,M as c,A as s,B as h,t as k}from"./index.f060b7c6.js";const m=["src"],B=["data-icon"],f=u({props:{icon:{default:void 0},picture:{default:void 0},color:{default:void 0},size:{default:void 0},dark:{default:"3"},hasLargeIcon:{type:Boolean},hasBackground:{type:Boolean},placeholder:{type:Boolean},darkPrimary:{type:Boolean},darkCardBordered:{type:Boolean}},setup(n){const o=n,t=p(()=>o.icon&&o.icon.indexOf(":")!==-1);return(d,e)=>(r(),a("div",{class:s(["icon-wrap",[o.color&&!o.hasBackground&&`has-text-${o.color}`,o.color&&o.hasBackground&&`has-background-${o.color}`,o.color&&o.color!=="white"&&o.hasBackground&&"has-text-white",o.color&&o.color==="white"&&o.hasBackground&&"has-text-black",o.size&&`is-${o.size}`,o.dark&&!o.hasBackground&&`is-dark-bg-${o.dark}`,o.darkPrimary&&"is-dark-primary",o.darkCardBordered&&"is-dark-card-bordered",o.hasLargeIcon&&"has-large-icon",o.picture&&"has-img",o.placeholder&&"is-placeholder"]])},[o.picture?(r(),a("img",{key:0,src:o.picture,alt:"",onErrorOnce:e[0]||(e[0]=i=>c(l)(i,"32x32"))},null,40,m)):c(t)?(r(),a("i",{key:1,"aria-hidden":"true",class:"iconify","data-icon":o.icon},null,8,B)):o.icon?(r(),a("i",{key:2,"aria-hidden":"true",class:s(o.icon)},null,2)):h("",!0),k(d.$slots,"after")],2))}});export{f as _};
