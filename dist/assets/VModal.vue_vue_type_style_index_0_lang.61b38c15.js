import{A as b,O as p,B as w,f as B,a7 as k,J as $,o as h,g as x,k as o,U as i,x as r,t as v,l as t,i as u,s as g,w as C,p as L,G as V,a8 as z,Q as E}from"./index.bb4908f5.js";const K={class:"modal-content"},S={class:"modal-card"},N={class:"modal-card-head"},M=o("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1),O=[M],T={class:"inner-content"},A=b({props:{title:null,size:{default:void 0},actions:{default:void 0},open:{type:Boolean},rounded:{type:Boolean},noscroll:{type:Boolean},noclose:{type:Boolean},tabs:{type:Boolean},cancelLabel:{default:void 0}},emits:["close"],setup(s,{emit:l}){const n=s,{t:m}=p(),a=w(!1),f=B(()=>n.cancelLabel||m("cancel-label"));return k(()=>{n.noscroll&&n.open?(document.documentElement.classList.add("no-scroll"),a.value=!0):a.value&&n.noscroll&&!n.open&&(document.documentElement.classList.remove("no-scroll"),a.value=!1)}),$(()=>{document.documentElement.classList.remove("no-scroll")}),(c,e)=>{const y=E;return h(),x(z,{to:"body"},[o("div",{class:t([[s.open&&"is-active",s.size&&`is-${s.size}`],"modal v-modal"])},[o("div",{class:"modal-background v-modal-close",tabindex:"0",onKeydown:e[0]||(e[0]=i(r(()=>s.noclose===!1&&l("close"),["prevent"]),["space"])),onClick:e[1]||(e[1]=()=>s.noclose===!1&&l("close"))},null,32),o("div",K,[o("div",S,[o("header",N,[o("h3",null,v(s.title),1),o("button",{class:"v-modal-close ml-auto","aria-label":"close",tabindex:"0",onKeydown:e[2]||(e[2]=i(r(d=>l("close"),["prevent"]),["space"])),onClick:e[3]||(e[3]=d=>l("close"))},O,32)]),o("div",{class:t(["modal-card-body",[n.tabs&&"has-tabs"]])},[o("div",T,[u(c.$slots,"content")])],2),o("div",{class:t(["modal-card-foot",[s.actions==="center"&&"is-centered",s.actions==="right"&&"is-end"]])},[u(c.$slots,"cancel",{close:()=>l("close")},()=>[g(y,{tabindex:"0",outlined:"",color:"warning",class:t([s.rounded&&"is-rounded","is-justify-content-center"]),onKeydown:e[4]||(e[4]=i(r(d=>l("close"),["prevent"]),["space"])),onClick:e[5]||(e[5]=d=>l("close"))},{default:C(()=>[L(v(V(f)),1)]),_:1},8,["class"])]),u(c.$slots,"action",{close:()=>l("close")})],2)])])],2)])}}});export{A as _};
