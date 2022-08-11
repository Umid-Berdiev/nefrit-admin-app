import{_ as Q}from"./ConfirmActionModal.97a9d993.js";import{a as J,u as X,_ as Y}from"./VPlaceholderSection.2f3a5682.js";import{A as S,W as j,B,r as A,E as Z,o as f,g as N,w as l,k as o,s,a2 as ee,G as t,t as v,a3 as M,p as O,a4 as te,Q as R,x as F,$ as ae,bP as oe,b as ne,f as se,bw as le,j as I,m as T,H as ie}from"./index.433ccf37.js";import{C as re,b as ce,a as de,e as ue,u as me,c as pe,d as _e,r as fe}from"./index.118b0b04.js";import{b as ve,_ as ye,a as ge}from"./VFlexTable.284f6416.js";import{_ as be}from"./VFlexPagination.763c2824.js";import{u as he}from"./viewWrapper.5bc32d10.js";import"./vue.runtime.esm-bundler.fde75113.js";const $e={class:"columns is-multiline"},Ve={class:"column is-12"},Ce={class:"help has-text-danger"},we={class:"help has-text-danger"},ke=S({props:{modelValue:Boolean,templateId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(V,{emit:m}){const r=V,{t:c}=j(),b=re.component,_=B(c("Add")),h=B(!1),p=A({name:[],body:[],payment_amount:[]}),a=A({name:"",body:"",payment_amount:0});Z(()=>r.templateId,async d=>{if(d){_.value=c("Edit");const u=await ce(Number(r.templateId));Object.assign(a,u)}},{deep:!0,immediate:!0});async function i(d){try{h.value=!0,r.templateId?await me(r.templateId,a):await pe(a),m("update:list"),C()}catch(u){Object.assign(p,u.response?.data?.errors)}finally{h.value=!1}}function C(){_.value=c("Add"),$(),w(),m("update:modelValue",!1)}function $(){Object.assign(a,{name:"",body:"",payment_amount:0})}function w(){Object.assign(p,{name:[],body:[],payment_amount:[]})}return(d,u)=>{const y=te,k=R,n=J;return f(),N(n,{open:V.modelValue,size:"big",actions:"right",title:d.$t("Add_contract_template"),onClose:C},{content:l(()=>[o("div",$e,[o("div",Ve,[s(M,{label:d.$t("Template_title"),required:""},{default:l(()=>[s(ee,null,{default:l(()=>[s(y,{type:"text",placeholder:d.$t("Template_title"),modelValue:t(a).name,"onUpdate:modelValue":u[0]||(u[0]=e=>t(a).name=e)},null,8,["placeholder","modelValue"]),o("p",Ce,v(t(p).name[0]),1)]),_:1})]),_:1},8,["label"]),s(M,{label:d.$t("Body"),required:""},{default:l(()=>[s(t(b),{modelValue:t(a).body,"onUpdate:modelValue":u[1]||(u[1]=e=>t(a).body=e),editor:t(de),config:t(ue)},null,8,["modelValue","editor","config"]),o("p",we,v(t(p).body[0]),1)]),_:1},8,["label"])])])]),action:l(({close:e})=>[s(k,{loading:h.value,color:"primary",outlined:"",type:"button",disabled:h.value,onClick:i},{default:l(()=>[O(v(d.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),xe=["onClick"],Te=o("div",{class:"icon"},[o("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:edit"})],-1),Be={class:"meta"},Ne=o("hr",{class:"dropdown-divider"},null,-1),Ee=["onClick"],Ie=o("div",{class:"icon"},[o("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:trash"})],-1),Ae={class:"meta"},Fe=S({emits:["edit","remove"],setup(V,{emit:m}){return(r,c)=>{const b=ae;return f(),N(b,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:l(({close:_})=>[o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:F(()=>{m("edit"),_()},["prevent"])},[Te,o("div",Be,[o("span",null,v(r.$t("Edit")),1)])],8,xe),Ne,o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:F(()=>{m("remove"),_()},["prevent"])},[Ie,o("div",Ae,[o("span",null,v(r.$t("Remove")),1)])],8,Ee)]),_:1})}}}),Se={class:"applicant-list-wrapper"},Me=["textContent"],je={key:0,class:"flex-list-inner"},ze=S({async setup(V){let m,r;const{t:c}=j();oe({title:c("Contract_templates")+" - Nefrit"});const b=ne(),_=X();he().setPageTitle(c("Contract_templates"));const p=B(!1),a=B(),i=A({pagination:{current_page:1,per_page:10,total:10},result:[]}),C={orderNumber:{format:(n,e,E)=>`${E+1}`,cellClass:"is-flex-grow-0"},name:{label:c("Template_title")},actions:{label:c("Actions"),align:"center"}},$=se({get:()=>i.pagination.current_page,set:async n=>{await y(n)}});[m,r]=le(()=>y()),await m,r();function w(n){a.value=n,p.value=!0}async function d(n){a.value=n,_.$patch({confirmModalState:!0})}async function u(){await fe(a.value),await y(),k()}async function y(n=1){const e=await _e(n);Object.assign(i,e)}function k(){b.success(c("Success"))}return(n,e)=>{const E=R,P=ve,U=Y,W=Fe,D=ye,q=be,L=ge,H=ke,K=Q;return f(),I("div",Se,[s(P,{"justify-content":"end",class:"mb-4"},{default:l(()=>[s(E,{outlined:"",rounded:"",color:"info",icon:"feather:plus",onClick:e[0]||(e[0]=F(x=>w(void 0),["prevent"]))},{default:l(()=>[O(v(n.$t("Add")),1)]),_:1})]),_:1}),s(L,{columns:t(C),data:t(i).result,limit:t(i).pagination.per_page,total:t(i).pagination.total},{default:l(x=>[s(D,{rounded:""},{"header-column":l(({column:g})=>[g.key==="orderNumber"?(f(),I("span",{key:0,class:"is-flex-grow-0",textContent:v("#")},null,8,Me)):T("",!0)]),body:l(()=>[t(i).result.length===0?(f(),I("div",je,[s(U,{title:n.$t("No_data"),subtitle:n.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):T("",!0)]),"body-cell":l(({row:g,column:z,value:Oe,index:Re})=>[z.key==="actions"?(f(),N(W,{key:0,onEdit:G=>w(g.id),onRemove:G=>d(g.id)},null,8,["onEdit","onRemove"])):T("",!0)]),_:1}),t(i).result.length?(f(),N(q,{key:0,"current-page":t($),"onUpdate:current-page":e[1]||(e[1]=g=>ie($)?$.value=g:null),class:"mt-6","item-per-page":t(i).pagination.per_page,"total-items":t(i).pagination.total},null,8,["current-page","item-per-page","total-items"])):T("",!0)]),_:1},8,["columns","data","limit","total"]),s(H,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=x=>p.value=x),"template-id":a.value,"onUpdate:list":e[3]||(e[3]=()=>{y(),k(),a.value=void 0}),onClose:e[4]||(e[4]=x=>a.value=void 0)},null,8,["modelValue","template-id"]),s(K,{onConfirmAction:u})])}}});export{ze as default};