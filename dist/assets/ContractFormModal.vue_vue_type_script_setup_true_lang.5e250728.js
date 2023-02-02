import{_ as k}from"./VModal.vue_vue_type_style_index_0_lang.61b38c15.js";import{A as L,O as q,B as d,r as x,C as D,E as B,q as T,o as z,g as G,w as o,k as l,s as n,t as p,G as r,x as Q,p as R,a5 as H,a4 as J,a3 as K,Q as P}from"./index.bb4908f5.js";import{_ as W}from"./VFileInput.vue_vue_type_script_setup_true_lang.c63c47c0.js";import{i as X,u as Y,m as Z}from"./index.1a4077bb.js";import{h as ee,i as te}from"./index.5f8856fe.js";const ae=["onSubmit"],le={class:"columns is-multiline"},ne={class:"column is-12"},oe={class:"help has-text-danger"},se={class:"column is-12"},ie={class:"help has-text-danger"},ue={class:"column is-12"},de={class:"help has-text-danger"},me={class:"column is-12"},ce={class:"p-3"},pe={class:"help has-text-danger"},re={class:"column is-12"},ge=L({props:{modelValue:Boolean,itemId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(y,{emit:V}){const _=y,{t:h,locale:N}=q();let g=d(h("Add"));const m=d([]),I=d(),C=d(),a=d({legal_entity_id:null,name:"",payment_amount:0,template_file:"",applications:[]}),f=d([]),i=x({name:[],payment_amount:[],template_file:[],legal_entity_id:[],applications:[]}),v=d(!1);D(async()=>{const t=await ee(N.value);I.value=t}),B(()=>_.itemId,async(t,e)=>{if(t){g.value=h("Edit");const s=await X(Number(_.itemId));a.value=s,f.value=s.applications.map(c=>c.id)}},{deep:!0,immediate:!0}),B(()=>a.value.legal_entity_id,async(t,e)=>{if(a.value.applications=[],t){const s=await te(Number(t));C.value=s}},{deep:!0,immediate:!0});async function A(t){try{v.value=!0;const e=new FormData;e.append("name",a.value.name),e.append("payment_amount",a.value.payment_amount),e.append("template_file",m.value.length?m.value[0]:""),e.append("legal_entity_id",a.value.legal_entity_id),f.value.forEach(s=>{e.append("applications[]",s)}),_.itemId?await Y(_.itemId,e):await Z(e),V("update:list"),S()}catch(e){Object.assign(i,e.response?.data?.errors)}finally{v.value=!1}}function S(){_.itemId||(g.value=h("Add"),m.value=[],a.value={legal_entity_id:null,name:"",payment_amount:0,template_file:"",applications:[]},E()),V("update:modelValue",!1)}function E(){Object.keys(i).forEach(t=>{i[t]=[]})}function F(t){const e=t.target;m.value=e.files&&[e.files[0]]}function M(t){m.value=[]}return(t,e)=>{const s=H,c=J,$=T("Multiselect"),w=K,O=W,U=P,j=k;return z(),G(j,{open:y.modelValue,size:"large",title:r(g),actions:"right",onClose:S},{content:o(()=>[l("form",{id:"contract-form",class:"modal-form",onSubmit:Q(A,["prevent"])},[l("div",le,[l("div",ne,[n(c,{label:t.$t("Contract_name"),required:""},{default:o(()=>[n(s,{modelValue:a.value.name,"onUpdate:modelValue":e[0]||(e[0]=u=>a.value.name=u)},null,8,["modelValue"]),l("p",oe,p(r(i).name[0]),1)]),_:1},8,["label"])]),l("div",se,[n(c,{label:t.$t("Contract_amount"),required:""},{default:o(()=>[n(s,{modelValue:a.value.payment_amount,"onUpdate:modelValue":e[1]||(e[1]=u=>a.value.payment_amount=u),type:"number"},null,8,["modelValue"]),l("p",ie,p(r(i).payment_amount[0]),1)]),_:1},8,["label"])]),l("div",ue,[n(c,null,{default:o(({id:u})=>[n(w,null,{default:o(()=>[n($,{modelValue:a.value.legal_entity_id,"onUpdate:modelValue":e[2]||(e[2]=b=>a.value.legal_entity_id=b),attrs:{id:u},searchable:!0,options:I.value,placeholder:t.$t("Select_applicant"),"value-prop":"id",label:"name",disabled:Boolean(y.itemId)},null,8,["modelValue","attrs","options","placeholder","disabled"])]),_:2},1024)]),_:1}),l("p",de,p(r(i).legal_entity_id[0]),1)]),l("div",me,[n(c,null,{default:o(({id:u})=>[n(w,null,{default:o(()=>[n($,{modelValue:f.value,"onUpdate:modelValue":e[3]||(e[3]=b=>f.value=b),attrs:{id:u},searchable:!1,options:C.value,placeholder:t.$t("Select_statements"),"value-prop":"id",label:"uuid",mode:"tags","close-on-select":!1,disabled:!a.value.legal_entity_id},{nooptions:o(()=>[l("span",ce,p(t.$t("The_list_is_empty")),1)]),_:2},1032,["modelValue","attrs","options","placeholder","disabled"])]),_:2},1024)]),_:1}),l("p",pe,p(r(i).applications[0]),1)]),l("div",re,[n(O,{"error-message":r(i).template_file[0],files:m.value,"remote-files":[],onFileUpload:F,onFileRemove:M},null,8,["error-message","files"])])])],40,ae)]),action:o(()=>[n(U,{loading:v.value,color:"primary",outlined:"",type:"submit",form:"contract-form",disabled:v.value},{default:o(()=>[R(p(t.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}});export{ge as _};
