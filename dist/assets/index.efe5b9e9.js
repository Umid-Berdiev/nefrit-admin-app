import{_ as K}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang.de416d48.js";import{_ as Q}from"./VModal.vue_vue_type_style_index_0_lang.a8a2f7de.js";import{z as j,N as E,A as w,r as T,D as X,B as Y,p as Z,o as h,f as D,w as n,j as l,q as t,E as a,t as b,v as M,m as O,a4 as ee,a2 as te,a3 as ae,P as U,O as ne,b as oe,e as se,bv as le,i as F,l as I,G as ie}from"./index.5591eac8.js";import{f as re,a as de,u as ue,c as me,b as ce,r as pe}from"./index.3a4b0f83.js";import{_ as _e,a as fe}from"./VFlexTable.vue_vue_type_style_index_0_lang.13c23291.js";import{_ as ve}from"./VFlexPagination.1b34d528.js";import{_ as ge}from"./VDropdown.vue_vue_type_style_index_0_lang.478faedb.js";import{_ as he}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.19b59443.js";import{_ as be}from"./VFlex.vue_vue_type_style_index_0_lang.c589aea0.js";import{u as $e}from"./viewWrapper.d586dd7e.js";import{u as ye}from"./index.19b21aaa.js";import"./VIcon.vue_vue_type_script_setup_true_lang.35379bba.js";const Ve=["onSubmit"],we={class:"columns is-multiline"},Ce={class:"column is-12"},Ne={class:"help has-text-danger"},ke={class:"column is-12"},Se={class:"help has-text-danger"},ze=j({props:{modelValue:Boolean,departmentId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(S,{emit:_}){const u=S,{t:m}=E(),$=w(m("Add")),c=w(!1),z=w([]),C=T({"name.uz":[],"name.en":[],"name.ru":[],stages:[]}),e=T({name:{uz:"",ru:"",en:""},stages:[]});X(()=>u.departmentId,async o=>{if(o){$.value=m("Edit");const s=await re(Number(u.departmentId));Object.assign(e,s),Object.assign(e.stages,s.stages.map(({id:v})=>v))}},{deep:!0,immediate:!0}),Y(async()=>{const o=await de();z.value=o});async function N(o){try{c.value=!0,u.departmentId?await ue(u.departmentId,e):await me(e),_("update:list"),y()}catch(s){Object.assign(C,s.response?.data?.errors)}finally{c.value=!1}}function y(){$.value=m("Add"),f(),A(),_("update:modelValue",!1)}function f(){Object.assign(e,{name:{uz:"",ru:"",en:""},stages:[]})}function A(){Object.assign(C,{"name.uz":[],"name.en":[],"name.ru":[],stages:[]})}return(o,s)=>{const v=ee,p=te,g=ae,r=Z("Multiselect"),i=U,k=Q;return h(),D(k,{open:S.modelValue,size:"large",actions:"right",title:$.value,onClose:s[4]||(s[4]=d=>y())},{content:n(()=>[l("form",{id:"department-form",class:"modal-form",onSubmit:M(N,["prevent"])},[l("div",we,[l("div",Ce,[t(g,{label:o.$t("Name_uz"),required:""},{default:n(()=>[t(p,null,{default:n(()=>[t(v,{modelValue:a(e).name.uz,"onUpdate:modelValue":s[0]||(s[0]=d=>a(e).name.uz=d),name:"name_uz",placeholder:o.$t("Type_name_uz")},null,8,["modelValue","placeholder"]),l("p",Ne,b(a(C)["name.uz"][0]),1)]),_:1})]),_:1},8,["label"]),t(g,{label:o.$t("Name_ru")},{default:n(()=>[t(p,null,{default:n(()=>[t(v,{modelValue:a(e).name.ru,"onUpdate:modelValue":s[1]||(s[1]=d=>a(e).name.ru=d),name:"name_ru",placeholder:o.$t("Type_name_ru")},null,8,["modelValue","placeholder"])]),_:1})]),_:1},8,["label"]),t(g,{label:o.$t("Name_en")},{default:n(()=>[t(p,null,{default:n(()=>[t(v,{name:"name_en",placeholder:o.$t("Type_name_en"),modelValue:a(e).name.en,"onUpdate:modelValue":s[2]||(s[2]=d=>a(e).name.en=d)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])]),l("div",ke,[t(g,{label:o.$t("Stages"),required:""},{default:n(()=>[t(p,null,{default:n(()=>[t(r,{modelValue:a(e).stages,"onUpdate:modelValue":s[3]||(s[3]=d=>a(e).stages=d),searchable:!1,options:z.value,placeholder:o.$t("Select_stages"),"value-prop":"id",label:"name",mode:"tags","close-on-select":!1},null,8,["modelValue","options","placeholder"]),l("p",Se,b(a(C).stages[0]),1)]),_:1})]),_:1},8,["label"])])])],40,Ve)]),action:n(({close:d})=>[t(i,{loading:c.value,color:"primary",outlined:"",type:"submit",form:"department-form",disabled:c.value},{default:n(()=>[O(b(o.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),Be=["onClick"],Ie=l("div",{class:"icon"},[l("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:edit"})],-1),De={class:"meta"},Me=l("hr",{class:"dropdown-divider"},null,-1),Ae=["onClick"],Fe=l("div",{class:"icon"},[l("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:trash"})],-1),Te={class:"meta"},je=j({emits:["edit","remove"],setup(S,{emit:_}){return(u,m)=>{const $=ge;return h(),D($,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:n(({close:c})=>[l("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:M(()=>{_("edit"),c()},["prevent"])},[Ie,l("div",De,[l("span",null,b(u.$t("Edit")),1)])],8,Be),Me,l("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:M(()=>{_("remove"),c()},["prevent"])},[Fe,l("div",Te,[l("span",null,b(u.$t("Remove")),1)])],8,Ae)]),_:1})}}}),Ee={class:"applicant-list-wrapper"},Oe=["textContent"],Ue={key:0,class:"flex-list-inner"},et=j({async setup(S){let _,u;const{t:m,locale:$}=E();ne({title:m("Departments")+" - Nefrit"});const c=oe(),z=ye();$e().setPageTitle(m("Departments_List"));const e=T({pagination:{current_page:1,per_page:10,total:10},result:[]}),N=se({get:()=>e.pagination.current_page,set:async r=>{await p(r)}}),y=w(!1);w([]);const f=w(),A={orderNumber:{format:(r,i,k)=>`${k+1}`,cellClass:"is-flex-grow-0"},name:{label:m("Name")},actions:{label:m("Actions"),align:"center"}};[_,u]=le(()=>p()),await _,u();function o(r=void 0){y.value=!0,f.value=r}async function s(r){f.value=r,z.$patch({confirmModalState:!0})}async function v(){await pe(f.value),await p(),g()}async function p(r=1){const i=await ce(r);Object.assign(e,i)}function g(){c.success(m("Success"))}return(r,i)=>{const k=U,d=be,x=he,R=je,P=_e,q=ve,L=fe,W=ze,G=K;return h(),F("div",Ee,[t(d,{"justify-content":"end",class:"mb-4"},{default:n(()=>[t(k,{outlined:"",rounded:"",color:"info",icon:"feather:plus",onClick:i[0]||(i[0]=M(B=>o(),["prevent"]))},{default:n(()=>[O(b(r.$t("Add")),1)]),_:1})]),_:1}),t(L,{columns:a(A),data:a(e).result,limit:a(e).pagination.per_page,total:a(e).pagination.total},{default:n(B=>[t(P,{rounded:""},{"header-column":n(({column:V})=>[V.key==="orderNumber"?(h(),F("span",{key:0,class:"is-flex-grow-0",textContent:b("#")},null,8,Oe)):I("",!0)]),body:n(()=>[a(e).result.length===0?(h(),F("div",Ue,[t(x,{title:r.$t("No_data"),subtitle:r.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):I("",!0)]),"body-cell":n(({row:V,column:H,value:xe,index:Re})=>[H.key==="actions"?(h(),D(R,{key:0,onEdit:J=>o(V.id),onRemove:J=>s(V.id)},null,8,["onEdit","onRemove"])):I("",!0)]),_:1}),a(e).result.length?(h(),D(q,{key:0,"current-page":a(N),"onUpdate:current-page":i[1]||(i[1]=V=>ie(N)?N.value=V:null),class:"mt-6","item-per-page":a(e).pagination.per_page,"total-items":a(e).pagination.total},null,8,["current-page","item-per-page","total-items"])):I("",!0)]),_:1},8,["columns","data","limit","total"]),t(W,{modelValue:y.value,"onUpdate:modelValue":i[2]||(i[2]=B=>y.value=B),"department-id":f.value,"onUpdate:list":i[3]||(i[3]=()=>{p(),g(),f.value=void 0}),onClose:i[4]||(i[4]=B=>f.value=void 0)},null,8,["modelValue","department-id"]),t(G,{onConfirmAction:v})])}}});export{et as default};