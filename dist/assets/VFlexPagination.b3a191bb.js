import{b as V}from"./VFlexTable.4ba052d2.js";import{Q as D,K as I,U as M,c as p,p as f,q as $,s as u,y as v,t as m,f as g,A as k,M as s,x as h,G as S,C as P,D as b,F as w,B as F,V as N,af as R,ag as K}from"./index.f060b7c6.js";import{u as Q}from"./vue-i18n.runtime.esm-bundler.1634ed66.js";const x=n=>(R("data-v-5dda634f"),n=n(),K(),n),j={class:"pagination-list"},q=P(" 1 "),z={key:0},A=x(()=>v("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1)),E=x(()=>v("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1)),G=I({props:{itemPerPage:null,totalItems:null,currentPage:{default:1},maxLinksDisplayed:{default:4},noRouter:{type:Boolean},routerQueryKey:{default:"page"}},emits:["update:currentPage"],setup(n,{emit:y}){const r=n,{t:_}=Q();M();const o=p(()=>Math.ceil(r.totalItems/r.itemPerPage)||1),c=p(()=>o.value>r.maxLinksDisplayed+2?r.maxLinksDisplayed+2:o.value),C=p(()=>{const i=[];let e=r.currentPage-Math.floor(c.value/2),a=e+(c.value-Math.ceil(c.value%2));e<1&&(e=1,a=e+(c.value-1)),a>o.value&&(a=o.value,e=a-(c.value-1));for(let l=e;l<=a;l+=1)l===e||l===a||i.push(l);return i}),B=p(()=>o.value>1),d=(i,e=1)=>{console.log("handleLinkClick: ",e);const a=Math.max(1,Math.min(e,o.value));if(y("update:currentPage",a),r.noRouter)return i.preventDefault(),i.stopPropagation(),!1};return(i,e)=>{const a=N,l=V;return f(),$(l,{role:"navigation",class:"flex-pagination pagination is-rounded","aria-label":"pagination","justify-content":"space-between"},{default:u(()=>[v("ul",j,[m(i.$slots,"before-pagination",{},void 0,!0),v("li",null,[g(a,{tabindex:"0",class:k(["pagination-link",[n.currentPage===1&&"is-current"]]),"aria-label":s(_)("goto-page-title",{page:1}),onClick:e[0]||(e[0]=t=>d(t))},{default:u(()=>[q]),_:1},8,["aria-label","class"])]),(f(!0),h(w,null,S(s(C),t=>(f(),h("li",{key:t},[g(a,{tabindex:"0",class:k(["pagination-link",[n.currentPage===t&&"is-current"]]),"aria-label":s(_)("goto-page-title",{page:t}),"aria-current":n.currentPage===t?"page":void 0,onClick:L=>d(L,t)},{default:u(()=>[P(b(t),1)]),_:2},1032,["aria-label","aria-current","class","onClick"])]))),128)),s(B)?(f(),h("li",z,[g(a,{tabindex:"0",class:k(["pagination-link",[n.currentPage===s(o)&&"is-current"]]),"aria-label":s(_)("goto-page-title",{page:s(o)}),onClick:e[1]||(e[1]=t=>d(t,s(o)))},{default:u(()=>[P(b(s(o)),1)]),_:1},8,["aria-label","class"])])):F("",!0),m(i.$slots,"after-pagination",{},void 0,!0)]),m(i.$slots,"before-navigation",{},void 0,!0),g(a,{tabindex:"0",class:"pagination-previous has-chevron",onClick:e[2]||(e[2]=t=>d(t,n.currentPage-1))},{default:u(()=>[A]),_:1}),g(a,{tabindex:"0",class:"pagination-next has-chevron",onClick:e[3]||(e[3]=t=>d(t,n.currentPage+1))},{default:u(()=>[E]),_:1}),m(i.$slots,"after-navigation",{},void 0,!0)]),_:3})}}}),J=D(G,[["__scopeId","data-v-5dda634f"]]);export{J as _};
