import{_ as C}from"./VTabs.2ea0481a.js";import{M as I,z as T,V as M,O as F,A as _,bP as S,e as U,bw as h,o as d,i as p,q as i,w as m,j as t,t as f,F as z,s as A,a1 as E,a2 as W}from"./index.7d56daf3.js";import{_ as j}from"./VSwitchBlock.1465d9cc.js";import{l as q}from"./lodash.e1888808.js";import{u as D}from"./viewWrapper.780c4a53.js";import{a as H,e as y,g as L}from"./index.cf535fdf.js";const O={class:"permissions-detail-wrapper"},G={class:"active_tab_content p-5"},J={class:"is-size-5 mb-5"},K={class:"table is-striped is-fullwidth"},Q=T({async setup(X){let n,l;const{t:v,locale:V}=M(),g=D(),r=F().params?.id??"",b=_(),s=_([]),a=_();S({title:U(()=>v("Role_permissions"))}),[n,l]=h(()=>x()),await n,l(),[n,l]=h(()=>B()),await n,l(),g.setPageTitle(`${v("Role_permissions")}: ${b.value?.name[V.value]}`);async function x(){const e=await H(Number(r));b.value=await e}async function B(){const e=await y(Number(r));s.value=await e,q.exports.isEmpty(s.value)||(a.value=s.value[0])}function N(e){a.value=s.value?.find(o=>o.value===e)||s.value[0]}async function P(e,o){if(console.log({methodValue:e}),console.log({methodId:o}),(await L(o,Number(e))).status===200){const u=await y(Number(r));s.value=await u}}return(e,o)=>{const w=j,u=E,R=W,$=C;return d(),p("div",O,[i($,{selected:a.value?.value,tabs:s.value,type:"boxed",class:"boxed_tabs","onUpdate:selected":N},{tab:m(({activeValue:Z})=>[t("div",G,[t("h1",J,f(e.$t("Methods"))+": "+f(a.value?.label),1),t("table",K,[t("tbody",null,[(d(!0),p(z,null,A(a.value.methods,c=>(d(),p("tr",null,[t("td",null,f(c.method),1),t("td",null,[i(R,null,{default:m(()=>[i(u,null,{default:m(()=>[i(w,{name:c.id,color:"primary",checked:c.value===1,"onUpdate:modelValue":k=>P(k,c.id)},null,8,["name","checked","onUpdate:modelValue"])]),_:2},1024)]),_:2},1024)])]))),256))])])])]),_:1},8,["selected","tabs"])])}}}),le=I(Q,[["__scopeId","data-v-7e5cff29"]]);export{le as default};
