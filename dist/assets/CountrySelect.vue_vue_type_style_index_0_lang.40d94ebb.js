import{A as h,af as $,b,B as w,a7 as x,f as k,o as l,g as i,w as a,s as n,p as _,t as r,y as B,G as E,H as S,j as F,v as N,F as A,bT as L,a3 as T,a4 as j}from"./index.bb4908f5.js";import{_ as D,a as G}from"./VOption.vue_vue_type_style_index_0_lang.98659e9a.js";import{l as H}from"./lodash.e3ec61d9.js";const U=h({props:{modelValue:{default:""}},emits:["update:modelValue"],setup(m,{emit:d}){const p=m,f=$(),V=b(),o=w([]);x(async()=>{if(H.exports.isEmpty(o.value))try{const e=await f({url:"/api/admin/country"});o.value=e.data?.data}catch(e){V.error(`Error while fetching countries: ${e.message}`)}});const s=k({get:()=>p.modelValue,set:async e=>{d("update:modelValue",e)}});return(e,u)=>{const y=L,c=D,g=G,v=T,C=j;return l(),i(C,null,{default:a(()=>[n(y,null,{default:a(()=>[_(r(e.$t("Country")),1)]),_:1}),n(v,{class:"has-icons-left select-icon",icon:"fas fa-globe"},{default:a(()=>[n(g,B({modelValue:E(s),"onUpdate:modelValue":u[0]||(u[0]=t=>S(s)?s.value=t:null)},e.$attrs),{default:a(()=>[n(c,{disabled:"",hidden:"",value:""},{default:a(()=>[_(r(e.$t("Select"))+"...",1)]),_:1}),(l(!0),F(A,null,N(o.value,t=>(l(),i(c,{key:t.id,value:t.id,textContent:r(t.name)},null,8,["value","textContent"]))),128))]),_:1},16,["modelValue"])]),_:1})]),_:1})}}});export{U as _};