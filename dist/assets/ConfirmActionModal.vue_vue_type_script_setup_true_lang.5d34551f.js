import{_ as d}from"./VModal.vue_vue_type_style_index_0_lang.4181f2de.js";import{z as $,e as c,A as C,o as S,f as h,w as n,q as s,m as y,t as M,E as i,P as b}from"./index.e9599081.js";import{_ as g}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.a9a6d9f8.js";import{u as k}from"./index.fc077572.js";const O=$({emits:["confirmAction"],setup(B,{emit:r}){const o=k(),l=c(()=>o.confirmModalState),m=c(()=>o.confirmModalOkButtonColor),t=C(!1);async function a(){o.$patch({confirmModalState:!1}),o.$patch({confirmModalOkButtonColor:"danger"})}async function f(){t.value=!0,o.$patch({confirmState:!0}),await a(),r("confirmAction"),t.value=!1}return(e,V)=>{const u=g,_=b,p=d;return S(),h(p,{open:i(l),actions:"center",title:e.$t("Confirm_action"),noclose:!0,onClose:a,"cancel-label":e.$t("No")},{content:n(()=>[s(u,{title:e.$t("Are_you_sure")},null,8,["title"])]),action:n(()=>[s(_,{type:"button",class:"is-justify-content-center",color:i(m),outlined:"",onClick:f,disabled:t.value,loading:t.value},{default:n(()=>[y(M(e.$t("Yes")),1)]),_:1},8,["color","disabled","loading"])]),_:1},8,["open","title","cancel-label"])}}});export{O as _};