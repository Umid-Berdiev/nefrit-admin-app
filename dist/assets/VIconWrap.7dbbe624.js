import{o as l}from"./via-placeholder.9af8280d.js";import{A as u,f as p,o as r,j as a,G as s,l as c,m as h,i as k}from"./index.433ccf37.js";const m=["src"],f=["data-icon"],B=u({props:{icon:{default:void 0},picture:{default:void 0},color:{default:void 0},size:{default:void 0},dark:{default:"3"},hasLargeIcon:{type:Boolean},hasBackground:{type:Boolean},placeholder:{type:Boolean},darkPrimary:{type:Boolean},darkCardBordered:{type:Boolean}},setup(n){const o=n,i=p(()=>o.icon&&o.icon.indexOf(":")!==-1);return(t,e)=>(r(),a("div",{class:c(["icon-wrap",[o.color&&!o.hasBackground&&`has-text-${o.color}`,o.color&&o.hasBackground&&`has-background-${o.color}`,o.color&&o.color!=="white"&&o.hasBackground&&"has-text-white",o.color&&o.color==="white"&&o.hasBackground&&"has-text-black",o.size&&`is-${o.size}`,o.dark&&!o.hasBackground&&`is-dark-bg-${o.dark}`,o.darkPrimary&&"is-dark-primary",o.darkCardBordered&&"is-dark-card-bordered",o.hasLargeIcon&&"has-large-icon",o.picture&&"has-img",o.placeholder&&"is-placeholder"]])},[o.picture?(r(),a("img",{key:0,src:o.picture,alt:"",onErrorOnce:e[0]||(e[0]=d=>s(l)(d,"32x32"))},null,40,m)):s(i)?(r(),a("i",{key:1,"aria-hidden":"true",class:"iconify","data-icon":o.icon},null,8,f)):o.icon?(r(),a("i",{key:2,"aria-hidden":"true",class:c(o.icon)},null,2)):h("",!0),k(t.$slots,"after")],2))}});export{B as _};
