import{a as B}from"./VPlaceholderSection.2f3a5682.js";import{A as I,W as S,B as f,r as U,C,E as N,o as A,g as M,w as a,k as i,s as e,G as o,t as V,x as j,p as q,a4 as D,a2 as E,a3 as F,Q as O}from"./index.433ccf37.js";import{_ as T}from"./VTextarea.61fe4cf8.js";import{_ as z}from"./CountrySelect.6c082996.js";import{a as G,b as L,u as P}from"./index.44bf4aef.js";const Q=["onSubmit"],W={class:"columns is-multiline"},H={class:"column is-12"},J={class:"column is-12"},K={class:"column is-6"},R={class:"column is-6"},X={class:"column is-6"},Y={class:"column is-6"},Z={class:"column is-6 is-align-self-flex-end"},ee=["checked"],le={for:"checkbox1",class:"checkbox"},te={class:"column is-12"},ue=I({props:{modelValue:Boolean,applicantId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(p,{emit:r}){const c=p,{t:b,locale:y}=S(),h=f(b("Edit")),l=U({}),v=f([]);C(async()=>{const s=await G(y.value);v.value=s}),N(()=>c.applicantId,async s=>{if(!s)Object.assign(l,{});else{const t=await L(Number(c.applicantId));Object.assign(l,t)}},{deep:!0,immediate:!0});async function $(s){try{c.applicantId&&await P(c.applicantId,l),r("update:list"),_()}catch(t){throw t}}function _(){r("update:modelValue",!1)}return(s,t)=>{const m=D,u=E,d=F,g=z,x=T,k=O,w=B;return A(),M(w,{open:p.modelValue,size:"large",title:h.value,actions:"right",onClose:_},{content:a(()=>[i("form",{id:"applicant-form",class:"modal-form",onSubmit:j($,["prevent"])},[i("div",W,[i("div",H,[e(d,{label:s.$t("Applicant_name"),required:""},{default:a(()=>[e(u,null,{default:a(()=>[e(m,{type:"text",modelValue:o(l).name,"onUpdate:modelValue":t[0]||(t[0]=n=>o(l).name=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])]),i("div",J,[e(d,{label:s.$t("Boss_name"),required:""},{default:a(()=>[e(u,null,{default:a(()=>[e(m,{type:"text",modelValue:o(l).boss_name,"onUpdate:modelValue":t[1]||(t[1]=n=>o(l).boss_name=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])]),i("div",K,[e(d,{label:s.$t("Phone_number")},{default:a(()=>[e(u,null,{default:a(()=>[e(m,{type:"text",modelValue:o(l).phone,"onUpdate:modelValue":t[2]||(t[2]=n=>o(l).phone=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])]),i("div",R,[e(d,{label:s.$t("Fax")},{default:a(()=>[e(u,null,{default:a(()=>[e(m,{type:"text",modelValue:o(l).fax,"onUpdate:modelValue":t[3]||(t[3]=n=>o(l).fax=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])]),i("div",X,[e(d,{label:s.$t("stir")},{default:a(()=>[e(u,null,{default:a(()=>[e(m,{type:"text",modelValue:o(l).inn,"onUpdate:modelValue":t[4]||(t[4]=n=>o(l).inn=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])]),i("div",Y,[e(g,{modelValue:o(l).country,"onUpdate:modelValue":t[5]||(t[5]=n=>o(l).country=n)},null,8,["modelValue"])]),i("div",Z,[i("input",{id:"checkbox1",type:"checkbox",checked:o(l).is_national},null,8,ee),i("label",le,V(s.$t("isNational")),1)]),i("div",te,[e(d,{label:s.$t("Address")},{default:a(()=>[e(u,null,{default:a(()=>[e(x,{rows:"2",modelValue:o(l).address,"onUpdate:modelValue":t[6]||(t[6]=n=>o(l).address=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])])])],40,Q)]),action:a(({close:n})=>[e(k,{type:"submit",color:"primary",outlined:"",form:"applicant-form"},{default:a(()=>[q(V(s.$t("Save_changes")),1)]),_:1})]),_:1},8,["open","title"])}}});export{ue as _};
