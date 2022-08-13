import{_ as ce}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang.77b374d5.js";import{_ as de,u as me}from"./VModal.vue_vue_type_style_index_0_lang.da2dcaa5.js";import{z as O,V as G,A as S,r as E,D as pe,B as _e,p as fe,o as f,f as N,w as o,j as r,q as a,E as l,t as b,v as M,m as H,a1 as J,$ as K,a0 as Q,P as X,bP as ve,b as ge,e as W,bv as he,i as j,l as k,G as be,bT as Ve}from"./index.da6b4d71.js";import{f as $e,a as ye,u as Ce,c as we,b as ke,r as Ne}from"./index.bc1c0781.js";import{_ as Se,a as Ie}from"./VFlexTable.vue_vue_type_style_index_0_lang.58709948.js";import{_ as ze}from"./VFlexPagination.dce7e11f.js";import{_ as Fe}from"./VDropdown.vue_vue_type_style_index_0_lang.e8098296.js";import{_ as Le}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.cb0addfa.js";import{_ as Be}from"./VFlexTableToolbar.1dc9bd86.js";import{_ as Ae}from"./VFlex.vue_vue_type_style_index_0_lang.30a6d0f9.js";import{u as De}from"./viewWrapper.3f71f0f4.js";import"./VIcon.vue_vue_type_script_setup_true_lang.a86e10a8.js";const Me=["onSubmit"],Te={class:"columns is-multiline"},Ue={class:"column is-12"},xe={class:"help has-text-danger"},je={class:"column is-12"},Ee={class:"help has-text-danger"},Oe=O({props:{modelValue:Boolean,departmentId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(F,{emit:v}){const m=F,{t:c}=G(),V=S(c("Add")),_=S(!1),L=S([]),I=E({"name.uz":[],"name.en":[],"name.ru":[],stages:[]}),e=E({name:{uz:"",ru:"",en:""},stages:[]});pe(()=>m.departmentId,async s=>{if(s){V.value=c("Edit");const i=await $e(Number(m.departmentId));Object.assign(e,i),Object.assign(e.stages,i.stages.map(({id:h})=>h))}},{deep:!0,immediate:!0}),_e(async()=>{const s=await ye();L.value=s});async function z(s){try{_.value=!0,m.departmentId?await Ce(m.departmentId,e):await we(e),v("update:list"),u()}catch(i){Object.assign(I,i.response?.data?.errors)}finally{_.value=!1}}function u(){V.value=c("Add"),B(),g(),v("update:modelValue",!1)}function B(){Object.assign(e,{name:{uz:"",ru:"",en:""},stages:[]})}function g(){Object.assign(I,{"name.uz":[],"name.en":[],"name.ru":[],stages:[]})}return(s,i)=>{const h=J,$=K,y=Q,T=fe("Multiselect"),A=X,U=de;return f(),N(U,{open:F.modelValue,size:"large",actions:"right",title:V.value,onClose:i[4]||(i[4]=d=>u())},{content:o(()=>[r("form",{id:"department-form",class:"modal-form",onSubmit:M(z,["prevent"])},[r("div",Te,[r("div",Ue,[a(y,{label:s.$t("Name_uz"),required:""},{default:o(()=>[a($,null,{default:o(()=>[a(h,{name:"name_uz",placeholder:s.$t("Type_name_uz"),modelValue:l(e).name.uz,"onUpdate:modelValue":i[0]||(i[0]=d=>l(e).name.uz=d)},null,8,["placeholder","modelValue"]),r("p",xe,b(l(I)["name.uz"][0]),1)]),_:1})]),_:1},8,["label"]),a(y,{label:s.$t("Name_ru")},{default:o(()=>[a($,null,{default:o(()=>[a(h,{name:"name_ru",placeholder:s.$t("Type_name_ru"),modelValue:l(e).name.ru,"onUpdate:modelValue":i[1]||(i[1]=d=>l(e).name.ru=d)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),a(y,{label:s.$t("Name_en")},{default:o(()=>[a($,null,{default:o(()=>[a(h,{name:"name_en",placeholder:s.$t("Type_name_en"),modelValue:l(e).name.en,"onUpdate:modelValue":i[2]||(i[2]=d=>l(e).name.en=d)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])]),r("div",je,[a(y,{label:s.$t("Stages"),required:""},{default:o(()=>[a($,null,{default:o(()=>[a(T,{modelValue:l(e).stages,"onUpdate:modelValue":i[3]||(i[3]=d=>l(e).stages=d),searchable:!1,options:L.value,placeholder:s.$t("Select_stages"),valueProp:"id",label:"name",mode:"tags","close-on-select":!1},null,8,["modelValue","options","placeholder"]),r("p",Ee,b(l(I).stages[0]),1)]),_:1})]),_:1},8,["label"])])])],40,Me)]),action:o(({close:d})=>[a(A,{loading:_.value,color:"primary",outlined:"",type:"submit",form:"department-form",disabled:_.value},{default:o(()=>[H(b(s.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),Re=["onClick"],Pe=r("div",{class:"icon"},[r("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:edit"})],-1),qe={class:"meta"},We=r("hr",{class:"dropdown-divider"},null,-1),Ge=["onClick"],He=r("div",{class:"icon"},[r("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:trash"})],-1),Je={class:"meta"},Ke=O({emits:["edit","remove"],setup(F,{emit:v}){return(m,c)=>{const V=Fe;return f(),N(V,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:o(({close:_})=>[r("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:M(()=>{v("edit"),_()},["prevent"])},[Pe,r("div",qe,[r("span",null,b(m.$t("Edit")),1)])],8,Re),We,r("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:M(()=>{v("remove"),_()},["prevent"])},[He,r("div",Je,[r("span",null,b(m.$t("Remove")),1)])],8,Ge)]),_:1})}}}),Qe={class:"applicant-list-wrapper"},Xe=["textContent"],Ye={key:0,class:"flex-list-inner"},pt=O({async setup(F){let v,m;const{t:c,locale:V}=G();ve({title:c("Departments")+" - Nefrit"});const _=ge(),L=me();De().setPageTitle(c("Departments_List"));const e=E({pagination:{current_page:1,per_page:10,total:10},result:[]}),z=S(!1),u=S([]),B=W(()=>e.result.length===u.value.length),g=S(),s=W({get:()=>e.pagination.current_page,set:async t=>{await D(t)}}),i=({order:t,a:n,b:C})=>t==="asc"?n.location.localeCompare(C.location):t==="desc"?C.location.localeCompare(n.location):0,h=({searchTerm:t,row:n})=>t?n.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())||n.bio.toLocaleLowerCase().includes(t.toLocaleLowerCase()):!0,$={select:{label:"",cellClass:"is-flex-grow-0"},orderNumber:{format:(t,n,C)=>`${C+1}`,cellClass:"is-flex-grow-0"},name:{label:c("Name"),searchable:!0,sortable:!0,sort:i,filter:h},actions:{label:c("Actions"),align:"center"}};[v,m]=he(()=>D()),await v,m();function y(){B.value?u.value=[]:u.value=e.map(t=>t.id)}function T(t){u.value.includes(t.id)?u.value=u.value.filter(n=>n!==t.id):u.value=[...u.value,t.id]}function A(t){z.value=!0,g.value=t}async function U(t){g.value=t,L.$patch({confirmModalState:!0})}async function d(){await Ne(g.value),await D(),R()}async function D(t=1){const n=await ke(t);Object.assign(e,n)}function R(){_.success(c("Success"))}return(t,n)=>{const C=X,Y=Ae,Z=J,ee=K,te=Q,ae=Be,P=Ve,ne=Le,oe=Ke,le=Se,se=ze,ie=Ie,re=Oe,ue=ce;return f(),j("div",Qe,[a(Y,{"justify-content":"end",class:"mb-4"},{default:o(()=>[a(C,{outlined:"",rounded:"",color:"info",icon:"feather:plus",onClick:n[0]||(n[0]=M(w=>A(void 0),["prevent"]))},{default:o(()=>[H(b(t.$t("Add")),1)]),_:1})]),_:1}),a(ie,{columns:l($),data:l(e).result,limit:l(e).pagination.per_page,total:l(e).pagination.total},{default:o(w=>[a(ae,null,{left:o(()=>[a(te,null,{default:o(()=>[a(ee,{icon:"feather:search"},{default:o(()=>[a(Z,{modelValue:w.searchInput,"onUpdate:modelValue":p=>w.searchInput=p,class:"is-rounded",placeholder:l(c)("Search")+"..."},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1024)]),_:2},1024)]),_:2},1024),a(le,{rounded:""},{"header-column":o(({column:p})=>[p.key==="select"?(f(),N(P,{key:0,class:"ml-2 mr-3",checked:l(B),name:"all_selected",color:"primary",onClick:y},null,8,["checked"])):k("",!0),p.key==="orderNumber"?(f(),j("span",{key:1,class:"is-flex-grow-0",textContent:b("#")},null,8,Xe)):k("",!0)]),body:o(()=>[l(e).result.length===0?(f(),j("div",Ye,[a(ne,{title:t.$t("No_data"),subtitle:t.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):k("",!0)]),"body-cell":o(({row:p,column:q,value:Ze,index:et})=>[q.key==="select"?(f(),N(P,{key:0,modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=x=>u.value=x),value:p.id,name:"selection",onChange:T},null,8,["modelValue","value"])):k("",!0),q.key==="actions"?(f(),N(oe,{key:1,onEdit:x=>A(p.id),onRemove:x=>U(p.id)},null,8,["onEdit","onRemove"])):k("",!0)]),_:1}),l(e).result.length?(f(),N(se,{key:0,"current-page":l(s),"onUpdate:current-page":n[2]||(n[2]=p=>be(s)?s.value=p:null),class:"mt-6","item-per-page":l(e).pagination.per_page,"total-items":l(e).pagination.total},null,8,["current-page","item-per-page","total-items"])):k("",!0)]),_:1},8,["columns","data","limit","total"]),a(re,{modelValue:z.value,"onUpdate:modelValue":n[3]||(n[3]=w=>z.value=w),"department-id":g.value,"onUpdate:list":n[4]||(n[4]=()=>{D(),R(),g.value=void 0}),onClose:n[5]||(n[5]=w=>g.value=void 0)},null,8,["modelValue","department-id"]),a(ue,{onConfirmAction:d})])}}});export{pt as default};
