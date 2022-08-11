import{_ as X}from"./ConfirmActionModal.97a9d993.js";import{_ as ee}from"./ContractFormModal.15768956.js";import{_ as te,a as oe}from"./VFlexTable.284f6416.js";import{_ as ne}from"./VFlexPagination.763c2824.js";import{A as T,o as n,g as v,w as m,k as s,t as p,x as A,$ as ae,Z as se,W as re,b as ie,r as le,B as M,f as S,bP as ce,bw as _e,j as c,s as i,G as o,H as me,m as _,F as pe,v as ue,a4 as de,a2 as fe,a3 as ge}from"./index.433ccf37.js";import{_ as he}from"./VTag.9c6106fb.js";import{u as ve,_ as ye}from"./VPlaceholderSection.2f3a5682.js";import{_ as be,a as $e}from"./TableActionsBlock.a3d1e330.js";import{u as we}from"./viewWrapper.5bc32d10.js";import{r as ke,g as Ce}from"./index.bd8beb4a.js";import"./VFileInput.4f9e647b.js";import"./index.44bf4aef.js";import"./VButtons.56d3a59a.js";const Ve=["onClick"],Ne=s("div",{class:"icon"},[s("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),xe={class:"meta"},Fe=s("hr",{class:"dropdown-divider"},null,-1),Ae=["onClick"],Me=s("div",{class:"icon"},[s("i",{"aria-hidden":"true",class:"lnil lnil-trash-can-alt"})],-1),Se={class:"meta"},Te=T({emits:["view","remove"],setup(D,{emit:u}){return(d,N)=>{const t=ae;return n(),v(t,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:m(({close:y})=>[s("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:A(()=>{u("view"),y()},["prevent"])},[Ne,s("div",xe,[s("span",null,p(d.$t("View")),1)])],8,Ve),Fe,s("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:A(()=>{u("remove"),y()},["prevent"])},[Me,s("div",Se,[s("span",null,p(d.$t("Remove")),1)])],8,Ae)]),_:1})}}}),De={class:"applicant-list-wrapper"},Re=["textContent"],Be={key:0,class:"flex-list-inner"},Pe={key:0},Ue={key:1},We={key:3},et=T({async setup(D){let u,d;const N=se(),{t,locale:y}=re(),R=ve(),b=ie(),r=le({pagination:{current_page:1,per_page:10,total:10},result:[]}),$=M(!1),f=M(),w=S({get(){return""},async set(e){}}),B=S(()=>({orderNumber:{format:(e,a,C)=>`${C+1}`,cellClass:"is-flex-grow-0"},name:{label:t("Name"),searchable:!0,grow:!0},legal_entity:{label:t("Applicant"),grow:!0},applications:{label:t("Statements")},payment_amount:{label:t("Contract_amount")},verified_at:{label:t("Payment_status"),grow:!0},created_at:{label:t("Date")},actions:{label:t("Actions"),align:"center"}}));we().setPageTitle(t("Contracts_List")),ce({title:t("Contracts")+" - Nefrit"}),[u,d]=_e(()=>k()),await u,d();function P(){$.value=!0}function U(e){f.value=e,N.push(`/app/contracts/${e}`)}async function W(e){f.value=e,R.$patch({confirmModalState:!0})}async function I(){try{await ke(Number(f.value)),k(),b.success(t("Removed_successfully"))}catch(e){b.error(t(e.response?.data.error.message))}}async function k(e=1){const a=await Ce(e);Object.assign(r,a)}function x(){f.value=void 0}function Y(){b.success(t("Updated_successfully"))}return(e,a)=>{const C=be,j=de,E=fe,H=ge,L=$e,O=ye,q=he,z=Te,G=te,Z=ne,J=oe,K=ee,Q=X;return n(),c("div",De,[i(C,{center:"",title:"",onAdd:P,"filter-disabled":!0,"print-disabled":!0,"remove-disabled":!0}),i(J,{columns:o(B),data:o(r).result,limit:o(r).pagination.per_page,total:o(r).pagination.total},{default:m(F=>[i(L,null,{left:m(()=>[i(H,null,{default:m(()=>[i(E,{icon:"feather:search"},{default:m(()=>[i(j,{modelValue:o(w),"onUpdate:modelValue":a[0]||(a[0]=l=>me(w)?w.value=l:null),class:"is-rounded",placeholder:o(t)("Search")+"..."},null,8,["modelValue","placeholder"])]),_:1})]),_:1})]),_:1}),i(G,{rounded:""},{"header-column":m(({column:l})=>[l.key==="orderNumber"?(n(),c("span",{key:0,class:"is-flex-grow-0",textContent:p("#")},null,8,Re)):_("",!0)]),body:m(()=>[o(r).result.length===0?(n(),c("div",Be,[i(O,{title:e.$t("No_data"),subtitle:e.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):_("",!0)]),"body-cell":m(({row:l,column:g,value:h,index:Ye})=>[g.key==="legal_entity"?(n(),c("span",Pe,p(h.name),1)):_("",!0),g.key==="applications"?(n(),c("ul",Ue,[(n(!0),c(pe,null,ue(h,V=>(n(),c("li",null,p(V.code),1))),256))])):_("",!0),g.key==="verified_at"?(n(),v(q,{key:2,class:"is-size-6",color:h?"primary":"warning",rounded:"",label:h?e.$t("Paid"):e.$t("Not_Paid")},null,8,["color","label"])):_("",!0),g.key==="created_at"?(n(),c("span",We,p(e.$h.formatDate(h,"DD.MM.YYYY")),1)):_("",!0),g.key==="actions"?(n(),v(z,{key:4,onView:V=>U(l.id),onRemove:V=>W(l.id)},null,8,["onView","onRemove"])):_("",!0)]),_:1}),o(r).result.length?(n(),v(Z,{key:0,"current-page":o(r).pagination.current_page,"onUpdate:current-page":a[1]||(a[1]=l=>o(r).pagination.current_page=l),class:"mt-6","item-per-page":o(r).pagination.per_page,"total-items":o(r).pagination.total},null,8,["current-page","item-per-page","total-items"])):_("",!0)]),_:1},8,["columns","data","limit","total"]),i(K,{modelValue:$.value,"onUpdate:modelValue":a[2]||(a[2]=F=>$.value=F),"item-id":f.value,"onUpdate:list":a[3]||(a[3]=()=>{k(),Y(),x()}),onClose:x},null,8,["modelValue","item-id"]),i(Q,{onConfirmAction:I})])}}});export{et as default};