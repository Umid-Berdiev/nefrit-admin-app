import{b as I}from"./VFlexTable.284f6416.js";import{N as V,A as D,W as $,P as w,f as p,o as f,g as M,w as u,k as m,i as v,s as g,l as k,G as s,j as b,v as N,p as h,t as P,F as S,m as F,Q as R,bd as j,bb as Q}from"./index.433ccf37.js";const x=n=>(j("data-v-0133c1b8"),n=n(),Q(),n),z={class:"pagination-list"},A=h(" 1 "),E={key:0},G=x(()=>m("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-left"},null,-1)),K=x(()=>m("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1)),T=D({props:{itemPerPage:null,totalItems:null,currentPage:{default:1},maxLinksDisplayed:{default:4},noRouter:{type:Boolean},routerQueryKey:{default:"page"}},emits:["update:currentPage"],setup(n,{emit:y}){const r=n,{t:_}=$();w();const i=p(()=>Math.ceil(r.totalItems/r.itemPerPage)||1),c=p(()=>i.value>r.maxLinksDisplayed+2?r.maxLinksDisplayed+2:i.value),C=p(()=>{const o=[];let e=r.currentPage-Math.floor(c.value/2),a=e+(c.value-Math.ceil(c.value%2));e<1&&(e=1,a=e+(c.value-1)),a>i.value&&(a=i.value,e=a-(c.value-1));for(let l=e;l<=a;l+=1)l===e||l===a||o.push(l);return o}),B=p(()=>i.value>1),d=(o,e=1)=>{console.log("handleLinkClick: ",e);const a=Math.max(1,Math.min(e,i.value));if(y("update:currentPage",a),r.noRouter)return o.preventDefault(),o.stopPropagation(),!1};return(o,e)=>{const a=R,l=I;return f(),M(l,{role:"navigation",class:"flex-pagination pagination is-rounded","aria-label":"pagination","justify-content":"space-between"},{default:u(()=>[m("ul",z,[v(o.$slots,"before-pagination",{},void 0,!0),m("li",null,[g(a,{tabindex:"0",class:k(["pagination-link",[n.currentPage===1&&"is-current"]]),"aria-label":s(_)("goto-page-title",{page:1}),onClick:e[0]||(e[0]=t=>d(t))},{default:u(()=>[A]),_:1},8,["aria-label","class"])]),(f(!0),b(S,null,N(s(C),t=>(f(),b("li",{key:t},[g(a,{tabindex:"0",class:k(["pagination-link",[n.currentPage===t&&"is-current"]]),"aria-label":s(_)("goto-page-title",{page:t}),"aria-current":n.currentPage===t?"page":void 0,onClick:L=>d(L,t)},{default:u(()=>[h(P(t),1)]),_:2},1032,["aria-label","aria-current","class","onClick"])]))),128)),s(B)?(f(),b("li",E,[g(a,{tabindex:"0",class:k(["pagination-link",[n.currentPage===s(i)&&"is-current"]]),"aria-label":s(_)("goto-page-title",{page:s(i)}),onClick:e[1]||(e[1]=t=>d(t,s(i)))},{default:u(()=>[h(P(s(i)),1)]),_:1},8,["aria-label","class"])])):F("",!0),v(o.$slots,"after-pagination",{},void 0,!0)]),v(o.$slots,"before-navigation",{},void 0,!0),g(a,{tabindex:"0",class:"pagination-previous has-chevron",onClick:e[2]||(e[2]=t=>d(t,n.currentPage-1))},{default:u(()=>[G]),_:1}),g(a,{tabindex:"0",class:"pagination-next has-chevron",onClick:e[3]||(e[3]=t=>d(t,n.currentPage+1))},{default:u(()=>[K]),_:1}),v(o.$slots,"after-navigation",{},void 0,!0)]),_:3})}}}),H=V(T,[["__scopeId","data-v-0133c1b8"]]);export{H as _};