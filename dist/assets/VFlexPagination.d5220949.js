import{_ as L}from"./VFlex.vue_vue_type_style_index_0_lang.eb4ec446.js";import{z as V,N as $,M as D,e as f,o as p,f as M,w as u,j as v,g as m,q as g,k as _,E as o,i as k,s as w,m as P,t as h,F as N,l as S,P as F,$ as R,a0 as j,Q as z}from"./index.5f12676e.js";const x=n=>(R("data-v-366562bf"),n=n(),j(),n),E={class:"pagination-list"},Q=P(" 1 "),q={key:0},K=x(()=>v("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1)),T=x(()=>v("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1)),A=V({props:{itemPerPage:null,totalItems:null,currentPage:{default:1},maxLinksDisplayed:{default:4},noRouter:{type:Boolean},routerQueryKey:{default:"page"}},emits:["update:currentPage"],setup(n,{emit:y}){const r=n,{t:b}=$();D();const i=f(()=>Math.ceil(r.totalItems/r.itemPerPage)||1),c=f(()=>i.value>r.maxLinksDisplayed+2?r.maxLinksDisplayed+2:i.value),C=f(()=>{const s=[];let e=r.currentPage-Math.floor(c.value/2),a=e+(c.value-Math.ceil(c.value%2));e<1&&(e=1,a=e+(c.value-1)),a>i.value&&(a=i.value,e=a-(c.value-1));for(let l=e;l<=a;l+=1)l===e||l===a||s.push(l);return s}),B=f(()=>i.value>1),d=(s,e=1)=>{const a=Math.max(1,Math.min(e,i.value));if(y("update:currentPage",a),r.noRouter)return s.preventDefault(),s.stopPropagation(),!1};return(s,e)=>{const a=F,l=L;return p(),M(l,{role:"navigation",class:"flex-pagination pagination is-rounded","aria-label":"pagination","justify-content":"space-between"},{default:u(()=>[v("ul",E,[m(s.$slots,"before-pagination",{},void 0,!0),v("li",null,[g(a,{tabindex:"0",class:_(["pagination-link",[n.currentPage===1&&"is-current"]]),"aria-label":o(b)("goto-page-title",{page:1}),onClick:e[0]||(e[0]=t=>d(t))},{default:u(()=>[Q]),_:1},8,["aria-label","class"])]),(p(!0),k(N,null,w(o(C),t=>(p(),k("li",{key:t},[g(a,{tabindex:"0",class:_(["pagination-link",[n.currentPage===t&&"is-current"]]),"aria-label":o(b)("goto-page-title",{page:t}),"aria-current":n.currentPage===t?"page":void 0,onClick:I=>d(I,t)},{default:u(()=>[P(h(t),1)]),_:2},1032,["aria-label","aria-current","class","onClick"])]))),128)),o(B)?(p(),k("li",q,[g(a,{tabindex:"0",class:_(["pagination-link",[n.currentPage===o(i)&&"is-current"]]),"aria-label":o(b)("goto-page-title",{page:o(i)}),onClick:e[1]||(e[1]=t=>d(t,o(i)))},{default:u(()=>[P(h(o(i)),1)]),_:1},8,["aria-label","class"])])):S("",!0),m(s.$slots,"after-pagination",{},void 0,!0)]),m(s.$slots,"before-navigation",{},void 0,!0),g(a,{disabled:n.currentPage===1,tabindex:"0",class:"pagination-previous has-chevron",onClick:e[2]||(e[2]=t=>d(t,n.currentPage-1))},{default:u(()=>[K]),_:1},8,["disabled"]),g(a,{disabled:n.currentPage===o(i),tabindex:"0",class:"pagination-next has-chevron",onClick:e[3]||(e[3]=t=>d(t,n.currentPage+1))},{default:u(()=>[T]),_:1},8,["disabled"]),m(s.$slots,"after-navigation",{},void 0,!0)]),_:3})}}});const J=z(A,[["__scopeId","data-v-366562bf"]]);export{J as _};
