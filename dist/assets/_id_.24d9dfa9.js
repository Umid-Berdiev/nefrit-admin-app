import{z as O,N as P,b as I,M as S,O as B,e as R,A as $,r as z,bv as L,p as W,o as f,i as h,j as o,q as l,w as s,E as t,t as d,l as H,x as K,bn as G,m as J,v as Q,a4 as X,a2 as Z,a3 as ee,P as te}from"./index.b7e98af4.js";import{_ as le}from"./VFlex.vue_vue_type_style_index_0_lang.74d0a329.js";import{_ as ae}from"./VFlexItem.vue_vue_type_style_index_0_lang.397011dc.js";import{_ as se}from"./VTabs.vue_vue_type_script_setup_true_lang.51ffbe80.js";import{C as oe,a as C,e as U}from"./editor-data.e1b3ec59.js";import{u as ne}from"./viewWrapper.d9abd62c.js";import{h as ie,i as ue}from"./index.a6f7634c.js";import"./VIcon.vue_vue_type_script_setup_true_lang.fc7bb1c3.js";import"./vue.runtime.esm-bundler.4fd7e3d8.js";const de=["onSubmit"],re={class:"container is-fluid"},ce={class:"columns"},pe={class:"column is-8"},me={key:0,class:"columns is-multiline pt-5"},_e={class:"column is-12"},fe={class:"help has-text-danger"},he={class:"help has-text-danger"},ge={key:1,class:"columns is-multiline pt-5"},be={class:"column is-12"},Ve={class:"help has-text-danger"},ve={class:"help has-text-danger"},xe={key:2,class:"columns is-multiline pt-5"},ye={class:"column is-12"},$e={class:"help has-text-danger"},ze={class:"help has-text-danger"},Ce={class:"help has-text-danger"},Ue={class:"help has-text-danger"},we={class:"column is-4"},De={class:"file"},Te={class:"file-label"},ke={class:"file-cta"},qe=o("span",{class:"file-icon"},[o("i",{class:"fas fa-cloud-upload-alt"})],-1),Ee={class:"file-label"},Ye=["src"],We=O({async setup(Ae){let w,D;const{t:g}=P(),T=I(),k=S().params?.id??null;ne().setPageTitle(g("Articles")),B({title:R(()=>g("Articles"))});const b=oe.component,_=$(!1),a=z({author:"",date:"",image:"",text:{uz:"",ru:"",en:""},title:{uz:"",ru:"",en:""}}),u=z({author:[],date:[],image:[],["title.uz"]:[],["title.ru"]:[],["title.en"]:[],["text.uz"]:[],["text.ru"]:[],["text.en"]:[]}),V=$([]),v=$(""),q=z({type:"string",mask:"YYYY-MM-DD"});[w,D]=L(()=>Y()),await w,D();function E(){Object.assign(u,{author:[],date:[],image:[],["title.uz"]:[],["title.ru"]:[],["title.en"]:[],["text.uz"]:[],["text.ru"]:[],["text.en"]:[]})}async function Y(){const e=await ue(k);await Object.assign(a,e),v.value=e.image}async function A(){try{_.value=!0,E();const e=new FormData;e.append("author",a.author),e.append("date",a.date),e.append("image",V.value.length?V.value[0]:""),e.append("title[uz]",a.title.uz),e.append("title[ru]",a.title.ru),e.append("title[en]",a.title.en),e.append("text[uz]",a.text.uz),e.append("text[ru]",a.text.ru),e.append("text[en]",a.text.en);const n=await ie(k,e);Object.assign(a,n),T.success(`${g("Updated_successfully")}!`)}catch(e){Object.assign(u,e.response?.data?.errors),T.error(`Error while updating data: ${e.message}`)}finally{_.value=!1}}function M(e){const n=e.target;n.files?.length&&(v.value=URL.createObjectURL(n.files[0]),V.value=[n.files[0]])}return(e,n)=>{const m=X,p=Z,r=ee,j=se,x=ae,F=W("VDatePicker"),y=le,N=te;return f(),h("form",{id:"article-edit-form",class:"modal-form",onSubmit:Q(A,["prevent"])},[o("div",re,[o("div",ce,[o("div",pe,[l(j,{type:"boxed",selected:"uz",tabs:[{label:e.$t("Uzbek"),value:"uz"},{label:e.$t("Russian"),value:"ru"},{label:e.$t("English"),value:"en"}]},{tab:s(({activeValue:c})=>[c==="uz"?(f(),h("div",me,[o("div",_e,[l(r,{class:"mb-5",label:e.$t("Title"),required:""},{default:s(()=>[l(p,null,{default:s(()=>[l(m,{type:"text",placeholder:e.$t("Type_title_uz"),modelValue:t(a).title.uz,"onUpdate:modelValue":n[0]||(n[0]=i=>t(a).title.uz=i)},null,8,["placeholder","modelValue"]),o("p",fe,d(t(u)["title.uz"][0]),1)]),_:1})]),_:1},8,["label"]),l(r,{class:"mb-5",label:e.$t("Text"),required:""},{default:s(()=>[l(t(b),{modelValue:t(a).text.uz,"onUpdate:modelValue":n[1]||(n[1]=i=>t(a).text.uz=i),editor:t(C),config:t(U)},null,8,["modelValue","editor","config"]),o("p",he,d(t(u)["text.uz"][0]),1)]),_:1},8,["label"])])])):c==="ru"?(f(),h("div",ge,[o("div",be,[l(r,{class:"mb-5",label:e.$t("Title"),required:""},{default:s(()=>[l(p,null,{default:s(()=>[l(m,{type:"text",placeholder:e.$t("Type_title_ru"),modelValue:t(a).title.ru,"onUpdate:modelValue":n[2]||(n[2]=i=>t(a).title.ru=i)},null,8,["placeholder","modelValue"]),o("p",Ve,d(t(u)["title.ru"][0]),1)]),_:1})]),_:1},8,["label"]),l(r,{class:"mb-5",label:e.$t("Text"),required:""},{default:s(()=>[l(t(b),{modelValue:t(a).text.ru,"onUpdate:modelValue":n[3]||(n[3]=i=>t(a).text.ru=i),editor:t(C),config:t(U)},null,8,["modelValue","editor","config"]),o("p",ve,d(t(u)["text.ru"][0]),1)]),_:1},8,["label"])])])):c==="en"?(f(),h("div",xe,[o("div",ye,[l(r,{class:"mb-5",label:e.$t("Title"),required:""},{default:s(()=>[l(p,null,{default:s(()=>[l(m,{type:"text",placeholder:e.$t("Type_title_en"),modelValue:t(a).title.en,"onUpdate:modelValue":n[4]||(n[4]=i=>t(a).title.en=i)},null,8,["placeholder","modelValue"]),o("p",$e,d(t(u)["title.en"][0]),1)]),_:1})]),_:1},8,["label"]),l(r,{class:"mb-5",label:e.$t("Text"),required:""},{default:s(()=>[l(t(b),{modelValue:t(a).text.en,"onUpdate:modelValue":n[5]||(n[5]=i=>t(a).text.en=i),editor:t(C),config:t(U)},null,8,["modelValue","editor","config"]),o("p",ze,d(t(u)["text.en"][0]),1)]),_:1},8,["label"])])])):H("",!0)]),_:1},8,["tabs"]),l(y,{"column-gap":"1rem"},{default:s(()=>[l(x,null,{default:s(()=>[l(r,{label:e.$t("Author"),required:""},{default:s(()=>[l(p,null,{default:s(()=>[l(m,{type:"text",placeholder:e.$t("Type_author"),modelValue:t(a).author,"onUpdate:modelValue":n[6]||(n[6]=c=>t(a).author=c)},null,8,["placeholder","modelValue"]),o("p",Ce,d(t(u).author[0]),1)]),_:1})]),_:1},8,["label"])]),_:1}),l(x,null,{default:s(()=>[l(F,{modelValue:t(a).date,"onUpdate:modelValue":n[7]||(n[7]=c=>t(a).date=c),mode:"date","model-config":t(q),masks:{input:["DD.MM.YYYY"]}},{default:s(({inputValue:c,inputEvents:i})=>[l(r,{label:e.$t("Date")},{default:s(()=>[l(p,{icon:"feather:calendar"},{default:s(()=>[l(m,K({value:c},G(i)),null,16,["value"]),o("p",Ue,d(t(u).date[0]),1)]),_:2},1024)]),_:2},1032,["label"])]),_:1},8,["modelValue","model-config","masks"])]),_:1})]),_:1})]),o("div",we,[l(y,{"flex-direction":"column"},{default:s(()=>[l(x,{"align-self":"center"},{default:s(()=>[l(r,{grouped:""},{default:s(()=>[l(p,null,{default:s(()=>[o("div",De,[o("label",Te,[o("input",{class:"file-input",type:"file",name:"image",onChange:M},null,32),o("span",ke,[qe,o("span",Ee,d(e.$t("Choose_an_image")),1)])])])]),_:1})]),_:1}),o("img",{src:v.value,alt:""},null,8,Ye)]),_:1})]),_:1})])]),l(y,null,{default:s(()=>[l(N,{type:"submit",class:"ml-auto",color:"primary",outlined:"",loading:_.value,disabled:_.value},{default:s(()=>[J(d(e.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1})])],40,de)}}});export{We as default};