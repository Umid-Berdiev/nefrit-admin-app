import{_ as H}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang.dce3b8a4.js";import{_ as J}from"./VModal.vue_vue_type_style_index_0_lang.b79e53f5.js";import{z as M,N as j,A as E,r as F,D as Q,o as f,f as I,w as l,j as n,q as s,E as e,t as v,m as O,a4 as X,a2 as Y,a3 as Z,P as R,v as S,O as ee,b as te,e as oe,bv as ae,i as A,l as B,G as ne}from"./index.b7e98af4.js";import{C as se,a as le,e as ie}from"./editor-data.e1b3ec59.js";import{a as re,u as ce,c as de,b as me,r as ue}from"./index.7fad2902.js";import{_ as pe,a as _e}from"./VFlexTable.vue_vue_type_style_index_0_lang.d0133d2a.js";import{_ as fe}from"./VFlexPagination.4ad8009f.js";import{_ as ve}from"./VDropdown.vue_vue_type_style_index_0_lang.03878fe4.js";import{_ as ye}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.0e585ba4.js";import{_ as ge}from"./VFlex.vue_vue_type_style_index_0_lang.74d0a329.js";import{u as be}from"./viewWrapper.d9abd62c.js";import{u as he}from"./index.c559e891.js";import"./vue.runtime.esm-bundler.4fd7e3d8.js";import"./VIcon.vue_vue_type_script_setup_true_lang.fc7bb1c3.js";const $e={class:"columns is-multiline"},Ve={class:"column is-12"},Ce={class:"help has-text-danger"},we={class:"help has-text-danger"},ke=M({props:{modelValue:Boolean,templateId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(w,{emit:u}){const r=w,{t:c}=j(),h=se.component,_=E(c("Add")),$=E(!1),p=F({name:[],body:[],payment_amount:[]}),t=F({name:"",body:"",payment_amount:0});Q(()=>r.templateId,async d=>{if(d){_.value=c("Edit");const m=await re(Number(r.templateId));Object.assign(t,m)}},{deep:!0,immediate:!0});async function i(d){try{$.value=!0,r.templateId?await ce(r.templateId,t):await de(t),u("update:list"),k()}catch(m){Object.assign(p,m.response?.data?.errors)}finally{$.value=!1}}function k(){_.value=c("Add"),V(),N(),u("update:modelValue",!1)}function V(){Object.assign(t,{name:"",body:"",payment_amount:0})}function N(){Object.assign(p,{name:[],body:[],payment_amount:[]})}return(d,m)=>{const y=X,T=Y,o=Z,a=R,C=J;return f(),I(C,{open:w.modelValue,size:"big",actions:"right",title:d.$t("Add_contract_template"),onClose:k},{content:l(()=>[n("div",$e,[n("div",Ve,[s(o,{label:d.$t("Template_title"),required:""},{default:l(()=>[s(T,null,{default:l(()=>[s(y,{type:"text",placeholder:d.$t("Template_title"),modelValue:e(t).name,"onUpdate:modelValue":m[0]||(m[0]=g=>e(t).name=g)},null,8,["placeholder","modelValue"]),n("p",Ce,v(e(p).name[0]),1)]),_:1})]),_:1},8,["label"]),s(o,{label:d.$t("Body"),required:""},{default:l(()=>[s(e(h),{modelValue:e(t).body,"onUpdate:modelValue":m[1]||(m[1]=g=>e(t).body=g),editor:e(le),config:e(ie)},null,8,["modelValue","editor","config"]),n("p",we,v(e(p).body[0]),1)]),_:1},8,["label"])])])]),action:l(({close:g})=>[s(a,{loading:$.value,color:"primary",outlined:"",type:"button",disabled:$.value,onClick:i},{default:l(()=>[O(v(d.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}});const Ne=["onClick"],Te=n("div",{class:"icon"},[n("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:edit"})],-1),xe={class:"meta"},Be=n("hr",{class:"dropdown-divider"},null,-1),Ee=["onClick"],Ie=n("div",{class:"icon"},[n("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:trash"})],-1),Ae={class:"meta"},Fe=M({emits:["edit","remove"],setup(w,{emit:u}){return(r,c)=>{const h=ve;return f(),I(h,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:l(({close:_})=>[n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:S(()=>{u("edit"),_()},["prevent"])},[Te,n("div",xe,[n("span",null,v(r.$t("Edit")),1)])],8,Ne),Be,n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:S(()=>{u("remove"),_()},["prevent"])},[Ie,n("div",Ae,[n("span",null,v(r.$t("Remove")),1)])],8,Ee)]),_:1})}}}),Se={class:"applicant-list-wrapper"},Me=["textContent"],je={key:0,class:"flex-list-inner"},Ze=M({async setup(w){let u,r;const{t:c}=j();ee({title:c("Contract_templates")+" - Nefrit"});const h=te(),_=he();be().setPageTitle(c("Contract_templates"));const p=E(!1),t=E(),i=F({pagination:{current_page:1,per_page:10,total:10},result:[]}),k={orderNumber:{format:(o,a,C)=>`${C+1}`,cellClass:"is-flex-grow-0"},name:{label:c("Template_title")},actions:{label:c("Actions"),align:"center"}},V=oe({get:()=>i.pagination.current_page,set:async o=>{await y(o)}});[u,r]=ae(()=>y()),await u,r();function N(o){t.value=o,p.value=!0}async function d(o){t.value=o,_.$patch({confirmModalState:!0})}async function m(){await ue(t.value),await y(),T()}async function y(o=1){const a=await me(o);Object.assign(i,a)}function T(){h.success(c("Success"))}return(o,a)=>{const C=R,g=ge,D=ye,P=Fe,U=pe,q=fe,W=_e,L=ke,z=H;return f(),A("div",Se,[s(g,{"justify-content":"end",class:"mb-4"},{default:l(()=>[s(C,{outlined:"",rounded:"",color:"info",icon:"feather:plus",onClick:a[0]||(a[0]=S(x=>N(void 0),["prevent"]))},{default:l(()=>[O(v(o.$t("Add")),1)]),_:1})]),_:1}),s(W,{columns:e(k),data:e(i).result,limit:e(i).pagination.per_page,total:e(i).pagination.total},{default:l(x=>[s(U,{rounded:""},{"header-column":l(({column:b})=>[b.key==="orderNumber"?(f(),A("span",{key:0,class:"is-flex-grow-0",textContent:v("#")},null,8,Me)):B("",!0)]),body:l(()=>[e(i).result.length===0?(f(),A("div",je,[s(D,{title:o.$t("No_data"),subtitle:o.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):B("",!0)]),"body-cell":l(({row:b,column:K,value:Oe,index:Re})=>[K.key==="actions"?(f(),I(P,{key:0,onEdit:G=>N(b.id),onRemove:G=>d(b.id)},null,8,["onEdit","onRemove"])):B("",!0)]),_:1}),e(i).result.length?(f(),I(q,{key:0,"current-page":e(V),"onUpdate:current-page":a[1]||(a[1]=b=>ne(V)?V.value=b:null),class:"mt-6","item-per-page":e(i).pagination.per_page,"total-items":e(i).pagination.total},null,8,["current-page","item-per-page","total-items"])):B("",!0)]),_:1},8,["columns","data","limit","total"]),s(L,{modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=x=>p.value=x),"template-id":t.value,"onUpdate:list":a[3]||(a[3]=()=>{y(),T(),t.value=void 0}),onClose:a[4]||(a[4]=x=>t.value=void 0)},null,8,["modelValue","template-id"]),s(z,{onConfirmAction:m})])}}});export{Ze as default};