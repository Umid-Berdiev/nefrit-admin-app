import{_ as X}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang.82e6fa1d.js";import{_ as Y,a as Z}from"./VFlexTable.vue_vue_type_style_index_0_lang.e91991ed.js";import{_ as ee}from"./VFlexPagination.6f519b0d.js";import{_ as te}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.fc527a37.js";import{_ as ae}from"./VFlex.vue_vue_type_style_index_0_lang.2810b5dd.js";import{af as ne,A as Q,O as x,B as T,r as U,E as oe,o as v,g as O,w as n,k as d,s as e,j as z,G as t,t as V,m as C,x as j,p as P,a3 as se,a4 as le,Q as M,q as ie,P as re,b as ue,f as de,bv as ce,l as me,H as pe}from"./index.bb4908f5.js";import{u as _e}from"./viewWrapper.337e6d03.js";import{u as fe}from"./index.2a55e875.js";import{_ as ve}from"./VModal.vue_vue_type_style_index_0_lang.61b38c15.js";import{_ as he}from"./VTabs.vue_vue_type_script_setup_true_lang.9d31ef9c.js";import{_ as be}from"./VTextarea.a25adf21.js";import{_ as ye}from"./VDropdown.vue_vue_type_style_index_0_lang.c6874a9c.js";import"./VIcon.vue_vue_type_script_setup_true_lang.654e5aba.js";const E=ne();async function we(c){try{const{data:a}=await E({url:`/api/admin/faqs?page=${c}`});return a.data}catch(a){throw a}}async function ge(c){try{const{data:a}=await E({url:`/api/admin/faqs/${c}`});return a.data}catch(a){throw a}}async function $e(c){try{const{data:a}=await E({url:"/api/admin/faqs",method:"POST",data:c});return a.data}catch(a){throw a}}async function Ve(c,a){try{const{data:m}=await E({url:`/api/admin/faqs/${c}`,method:"PUT",data:a});return m.data}catch(m){throw m}}async function qe(c){try{const{data:a}=await E({url:`/api/admin/faqs/${c}`,method:"DELETE"});return a.data}catch(a){throw a}}const ke=["onSubmit"],ze={key:0,class:"columns is-multiline pt-5"},Ae={class:"column is-12"},Ce={class:"help has-text-danger"},Ie={class:"help has-text-danger"},Te={key:1,class:"columns is-multiline pt-5"},Ee={class:"column is-12"},Ne={key:2,class:"columns is-multiline pt-5"},Se={class:"column is-12"},Be=Q({props:{modelValue:Boolean,faqId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(c,{emit:a}){const m=c,{t:l,locale:N}=x(),q=T(l("Add")),h=T(!1),_=U({uz:"",ru:"",en:""}),o=U({uz:"",ru:"",en:""}),y=U({"question.uz":[],"question.en":[],"question.ru":[],"answer.uz":[],"answer.en":[],"answer.ru":[]});oe(()=>m.faqId,async r=>{if(r){q.value=l("Edit");const s=await ge(Number(m.faqId));Object.assign(_,s.question),Object.assign(o,s.answer)}},{deep:!0,immediate:!0});async function I(r){try{h.value=!0,m.faqId?await Ve(m.faqId,{question:_,answer:o}):await $e({question:_,answer:o}),a("update:list"),b()}catch(s){Object.assign(y,s.response?.data?.errors)}finally{h.value=!1}}function b(){q.value=l("Add"),F(),A(),a("update:modelValue",!1)}function F(){Object.assign(_,{uz:"",ru:"",en:""}),Object.assign(o,{uz:"",ru:"",en:""})}function A(){Object.assign(y,{"question.uz":[],"question.en":[],"question.ru":[],"answer.uz":[],"answer.en":[],"answer.ru":[]})}return(r,s)=>{const w=be,g=se,f=le,S=he,i=M,u=ve;return v(),O(u,{open:c.modelValue,size:"large",title:q.value,actions:"right",onClose:b},{content:n(()=>[d("form",{id:"role-form",class:"modal-form",onSubmit:j(I,["prevent"])},[e(S,{type:"boxed",selected:"uz",tabs:[{label:r.$t("Uzbek"),value:"uz"},{label:r.$t("Russian"),value:"ru"},{label:r.$t("English"),value:"en"}]},{tab:n(({activeValue:$})=>[$==="uz"?(v(),z("div",ze,[d("div",Ae,[e(f,{label:r.$t("Question_uz"),required:""},{default:n(()=>[e(g,null,{default:n(()=>[e(w,{placeholder:t(l)("Type_Question_uz"),modelValue:t(_).uz,"onUpdate:modelValue":s[0]||(s[0]=p=>t(_).uz=p)},null,8,["placeholder","modelValue"]),d("p",Ce,V(t(y)["question.uz"][0]),1)]),_:1})]),_:1},8,["label"]),e(f,{label:r.$t("Answer_uz"),required:""},{default:n(()=>[e(g,null,{default:n(()=>[e(w,{placeholder:t(l)("Add_Answer_uz"),modelValue:t(o).uz,"onUpdate:modelValue":s[1]||(s[1]=p=>t(o).uz=p)},null,8,["placeholder","modelValue"]),d("p",Ie,V(t(y)["answer.uz"][0]),1)]),_:1})]),_:1},8,["label"])])])):$==="ru"?(v(),z("div",Te,[d("div",Ee,[e(f,{label:r.$t("Question_ru")},{default:n(()=>[e(g,null,{default:n(()=>[e(w,{placeholder:t(l)("Type_Question_ru"),modelValue:t(_).ru,"onUpdate:modelValue":s[2]||(s[2]=p=>t(_).ru=p)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),e(f,{label:r.$t("Answer_ru")},{default:n(()=>[e(g,null,{default:n(()=>[e(w,{placeholder:t(l)("Add_Answer_ru"),modelValue:t(o).ru,"onUpdate:modelValue":s[3]||(s[3]=p=>t(o).ru=p)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])])])):$==="en"?(v(),z("div",Ne,[d("div",Se,[e(f,{label:r.$t("Question_en")},{default:n(()=>[e(g,null,{default:n(()=>[e(w,{placeholder:t(l)("Type_Question_en"),modelValue:t(_).en,"onUpdate:modelValue":s[4]||(s[4]=p=>t(_).en=p)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),e(f,{label:r.$t("Answer_en")},{default:n(()=>[e(g,null,{default:n(()=>[e(w,{placeholder:t(l)("Add_Answer_en"),modelValue:t(o).en,"onUpdate:modelValue":s[5]||(s[5]=p=>t(o).en=p)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])])])):C("",!0)]),_:1},8,["tabs"])],40,ke)]),action:n(({close:$})=>[e(i,{loading:h.value,color:"primary",outlined:"",type:"submit",form:"role-form",disabled:h.value},{default:n(()=>[P(V(r.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),Ue=["onClick"],Oe={class:"icon"},je={class:"meta"},Fe=d("hr",{class:"dropdown-divider"},null,-1),Re=["onClick"],Qe={class:"icon"},xe={class:"meta"},Pe=Q({emits:["edit","remove"],setup(c,{emit:a}){return(m,l)=>{const N=ie("VueIconify"),q=ye;return v(),O(q,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:n(({close:h})=>[d("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:j(()=>{a("edit"),h()},["prevent"])},[d("div",Oe,[e(N,{icon:"feather:edit-2"})]),d("div",je,[d("span",null,V(m.$t("Edit")),1)])],8,Ue),Fe,d("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:j(()=>{a("remove"),h()},["prevent"])},[d("div",Qe,[e(N,{icon:"feather:trash"})]),d("div",xe,[d("span",null,V(m.$t("Remove")),1)])],8,Re)]),_:1})}}}),Me={class:"faq-list-wrapper"},De=["textContent"],Le={key:0,class:"flex-list-inner"},lt=Q({async setup(c){let a,m;const{t:l,locale:N}=x();re({title:l("Faq")+" - Nefrit"});const q=ue(),h=fe();_e().setPageTitle(l("Faq_List"));const o=U({pagination:{current_page:1,per_page:10,total:10},result:[]}),y=de({get:()=>o.pagination.current_page,set:async i=>{await f(i)}}),I=T(!1),b=T(),F={orderNumber:{format:(i,u,$)=>`${$+1}`,cellClass:"is-flex-grow-0"},question:{label:l("Question")},answer:{label:l("Answer")},actions:{label:l("Actions"),align:"center"}},A=T();[a,m]=ce(()=>f()),await a,m();function r(i){A.value===i.id?A.value=void 0:A.value=i.id}function s(i=void 0){I.value=!0,b.value=i}async function w(i){b.value=i,h.$patch({confirmModalState:!0})}async function g(){await qe(b.value),await f(),S()}async function f(i=1){const u=await we(i);Object.assign(o,u)}function S(){q.success(l("Success"))}return(i,u)=>{const $=M,p=ae,D=te,L=Y,W=ee,H=Z,G=X;return v(),z("div",Me,[e(p,{"justify-content":"end",class:"mb-4"},{default:n(()=>[e($,{outlined:"",rounded:"",color:"info",icon:"feather:plus",onClick:u[0]||(u[0]=j(B=>s(),["prevent"]))},{default:n(()=>[P(V(i.$t("Add")),1)]),_:1})]),_:1}),e(H,{columns:t(F),data:t(o).result,limit:t(o).pagination.per_page,total:t(o).pagination.total},{default:n(B=>[e(L,{rounded:"",clickable:"",onRowClick:r},{"header-column":n(({column:k})=>[k.key==="orderNumber"?(v(),z("span",{key:0,class:"is-flex-grow-0",textContent:V("#")},null,8,De)):C("",!0)]),body:n(()=>[t(o).result.length===0?(v(),z("div",Le,[e(D,{title:i.$t("No_data"),subtitle:i.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):C("",!0)]),"body-cell":n(({row:k,column:R,value:J,index:We})=>[R.key==="question"||R.key==="answer"?(v(),z("span",{key:0,class:me({truncated:A.value!==k.id})},V(J),3)):C("",!0),R.key==="actions"?(v(),O(Pe,{key:1,onEdit:K=>s(k.id),onRemove:K=>w(k.id)},null,8,["onEdit","onRemove"])):C("",!0)]),_:1}),t(o).result.length?(v(),O(W,{key:0,"current-page":t(y),"onUpdate:current-page":u[1]||(u[1]=k=>pe(y)?y.value=k:null),class:"mt-6","item-per-page":t(o).pagination.per_page,"total-items":t(o).pagination.total},null,8,["current-page","item-per-page","total-items"])):C("",!0)]),_:1},8,["columns","data","limit","total"]),e(Be,{modelValue:I.value,"onUpdate:modelValue":u[2]||(u[2]=B=>I.value=B),"faq-id":b.value,"onUpdate:list":u[3]||(u[3]=()=>{f(),S(),b.value=void 0}),onClose:u[4]||(u[4]=B=>b.value=void 0)},null,8,["modelValue","faq-id"]),e(G,{onConfirmAction:g})])}}});export{lt as default};
