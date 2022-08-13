import{_ as H}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang.77b374d5.js";import{_ as J,u as Q}from"./VModal.vue_vue_type_style_index_0_lang.da2dcaa5.js";import{z as M,V as j,A as E,r as F,D as X,o as f,f as I,w as l,j as n,q as s,E as e,t as v,m as O,a1 as Y,$ as Z,a0 as ee,P,v as S,bP as te,b as oe,e as ae,bv as ne,i as A,l as B,G as se}from"./index.da6b4d71.js";import{C as le,a as ie,e as re}from"./editor-data.f3ae8f20.js";import{a as ce,u as de,c as me,b as ue,r as pe}from"./index.f0f77841.js";import{_ as _e,a as fe}from"./VFlexTable.vue_vue_type_style_index_0_lang.58709948.js";import{_ as ve}from"./VFlexPagination.dce7e11f.js";import{_ as ye}from"./VDropdown.vue_vue_type_style_index_0_lang.e8098296.js";import{_ as ge}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.cb0addfa.js";import{_ as be}from"./VFlex.vue_vue_type_style_index_0_lang.30a6d0f9.js";import{u as he}from"./viewWrapper.3f71f0f4.js";import"./vue.runtime.esm-bundler.1698c9fb.js";import"./VIcon.vue_vue_type_script_setup_true_lang.a86e10a8.js";const $e={class:"columns is-multiline"},Ve={class:"column is-12"},Ce={class:"help has-text-danger"},we={class:"help has-text-danger"},ke=M({props:{modelValue:Boolean,templateId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(w,{emit:u}){const r=w,{t:c}=j(),h=le.component,_=E(c("Add")),$=E(!1),p=F({name:[],body:[],payment_amount:[]}),t=F({name:"",body:"",payment_amount:0});X(()=>r.templateId,async d=>{if(d){_.value=c("Edit");const m=await ce(Number(r.templateId));Object.assign(t,m)}},{deep:!0,immediate:!0});async function i(d){try{$.value=!0,r.templateId?await de(r.templateId,t):await me(t),u("update:list"),k()}catch(m){Object.assign(p,m.response?.data?.errors)}finally{$.value=!1}}function k(){_.value=c("Add"),V(),T(),u("update:modelValue",!1)}function V(){Object.assign(t,{name:"",body:"",payment_amount:0})}function T(){Object.assign(p,{name:[],body:[],payment_amount:[]})}return(d,m)=>{const y=Y,x=Z,o=ee,a=P,C=J;return f(),I(C,{open:w.modelValue,size:"big",actions:"right",title:d.$t("Add_contract_template"),onClose:k},{content:l(()=>[n("div",$e,[n("div",Ve,[s(o,{label:d.$t("Template_title"),required:""},{default:l(()=>[s(x,null,{default:l(()=>[s(y,{type:"text",placeholder:d.$t("Template_title"),modelValue:e(t).name,"onUpdate:modelValue":m[0]||(m[0]=g=>e(t).name=g)},null,8,["placeholder","modelValue"]),n("p",Ce,v(e(p).name[0]),1)]),_:1})]),_:1},8,["label"]),s(o,{label:d.$t("Body"),required:""},{default:l(()=>[s(e(h),{modelValue:e(t).body,"onUpdate:modelValue":m[1]||(m[1]=g=>e(t).body=g),editor:e(ie),config:e(re)},null,8,["modelValue","editor","config"]),n("p",we,v(e(p).body[0]),1)]),_:1},8,["label"])])])]),action:l(({close:g})=>[s(a,{loading:$.value,color:"primary",outlined:"",type:"button",disabled:$.value,onClick:i},{default:l(()=>[O(v(d.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}});const Te=["onClick"],xe=n("div",{class:"icon"},[n("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:edit"})],-1),Ne={class:"meta"},Be=n("hr",{class:"dropdown-divider"},null,-1),Ee=["onClick"],Ie=n("div",{class:"icon"},[n("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:trash"})],-1),Ae={class:"meta"},Fe=M({emits:["edit","remove"],setup(w,{emit:u}){return(r,c)=>{const h=ye;return f(),I(h,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:l(({close:_})=>[n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:S(()=>{u("edit"),_()},["prevent"])},[xe,n("div",Ne,[n("span",null,v(r.$t("Edit")),1)])],8,Te),Be,n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:S(()=>{u("remove"),_()},["prevent"])},[Ie,n("div",Ae,[n("span",null,v(r.$t("Remove")),1)])],8,Ee)]),_:1})}}}),Se={class:"applicant-list-wrapper"},Me=["textContent"],je={key:0,class:"flex-list-inner"},Ye=M({async setup(w){let u,r;const{t:c}=j();te({title:c("Contract_templates")+" - Nefrit"});const h=oe(),_=Q();he().setPageTitle(c("Contract_templates"));const p=E(!1),t=E(),i=F({pagination:{current_page:1,per_page:10,total:10},result:[]}),k={orderNumber:{format:(o,a,C)=>`${C+1}`,cellClass:"is-flex-grow-0"},name:{label:c("Template_title")},actions:{label:c("Actions"),align:"center"}},V=ae({get:()=>i.pagination.current_page,set:async o=>{await y(o)}});[u,r]=ne(()=>y()),await u,r();function T(o){t.value=o,p.value=!0}async function d(o){t.value=o,_.$patch({confirmModalState:!0})}async function m(){await pe(t.value),await y(),x()}async function y(o=1){const a=await ue(o);Object.assign(i,a)}function x(){h.success(c("Success"))}return(o,a)=>{const C=P,g=be,R=ge,D=Fe,U=_e,q=ve,W=fe,L=ke,z=H;return f(),A("div",Se,[s(g,{"justify-content":"end",class:"mb-4"},{default:l(()=>[s(C,{outlined:"",rounded:"",color:"info",icon:"feather:plus",onClick:a[0]||(a[0]=S(N=>T(void 0),["prevent"]))},{default:l(()=>[O(v(o.$t("Add")),1)]),_:1})]),_:1}),s(W,{columns:e(k),data:e(i).result,limit:e(i).pagination.per_page,total:e(i).pagination.total},{default:l(N=>[s(U,{rounded:""},{"header-column":l(({column:b})=>[b.key==="orderNumber"?(f(),A("span",{key:0,class:"is-flex-grow-0",textContent:v("#")},null,8,Me)):B("",!0)]),body:l(()=>[e(i).result.length===0?(f(),A("div",je,[s(R,{title:o.$t("No_data"),subtitle:o.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):B("",!0)]),"body-cell":l(({row:b,column:K,value:Oe,index:Pe})=>[K.key==="actions"?(f(),I(D,{key:0,onEdit:G=>T(b.id),onRemove:G=>d(b.id)},null,8,["onEdit","onRemove"])):B("",!0)]),_:1}),e(i).result.length?(f(),I(q,{key:0,"current-page":e(V),"onUpdate:current-page":a[1]||(a[1]=b=>se(V)?V.value=b:null),class:"mt-6","item-per-page":e(i).pagination.per_page,"total-items":e(i).pagination.total},null,8,["current-page","item-per-page","total-items"])):B("",!0)]),_:1},8,["columns","data","limit","total"]),s(L,{modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=N=>p.value=N),"template-id":t.value,"onUpdate:list":a[3]||(a[3]=()=>{y(),x(),t.value=void 0}),onClose:a[4]||(a[4]=N=>t.value=void 0)},null,8,["modelValue","template-id"]),s(z,{onConfirmAction:m})])}}});export{Ye as default};
