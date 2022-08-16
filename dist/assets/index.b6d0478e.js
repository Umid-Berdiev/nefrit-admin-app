import{_ as ce}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang.a7914451.js";import{_ as me,u as pe}from"./VModal.vue_vue_type_style_index_0_lang.59ac8feb.js";import{z as P,N as Q,A as k,r as x,D as _e,o as v,f as B,w as o,j as n,q as t,i as N,E as e,t as g,l as j,v as C,m as G,a3 as H,a1 as J,a2 as K,P as X,b as fe,$ as ve,e as O,O as he,bx as be,G as W}from"./index.9d6b139f.js";import{_ as ge}from"./VTabs.vue_vue_type_script_setup_true_lang.46858856.js";import{_ as Ve}from"./VTextarea.9c617097.js";import{a as $e,u as ye,c as we,s as ze,b as ke,r as Ce,d as Ne}from"./index.1abb5c1b.js";import{_ as Se,a as Ie}from"./VFlexTable.vue_vue_type_style_index_0_lang.a1fa270c.js";import{_ as Re}from"./VFlexPagination.b2c12be9.js";import{_ as Te}from"./VDropdown.vue_vue_type_style_index_0_lang.b210cf3e.js";import{_ as Ae}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.4771f6de.js";import{_ as Ue}from"./VFlexTableToolbar.43859773.js";import{_ as je}from"./VFlex.vue_vue_type_style_index_0_lang.c00db461.js";import{u as Fe}from"./viewWrapper.8bdd3f7c.js";import"./VIcon.vue_vue_type_script_setup_true_lang.647f7f20.js";const Oe=["onSubmit"],xe={key:0,class:"columns is-multiline pt-5"},Be={class:"column is-12"},De={class:"help has-text-danger"},Ee={class:"help has-text-danger"},Me={key:1,class:"columns is-multiline pt-5"},Pe={class:"column is-12"},Le={key:2,class:"columns is-multiline pt-5"},qe={class:"column is-12"},We=P({props:{modelValue:Boolean,roleId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(F,{emit:f}){const c=F,{t:m}=Q(),$=k(m("Add")),r=k(!1),_=x({uz:"",ru:"",en:""}),p=x({uz:"",ru:"",en:""}),i=x({"name.uz":[],"name.en":[],"name.ru":[],"description.uz":[],"description.en":[],"description.ru":[]});_e(()=>c.roleId,async u=>{if(u){$.value=m("Edit");const a=await $e(Number(c.roleId));Object.assign(_,a.name),Object.assign(p,a.description)}},{deep:!0,immediate:!0});async function S(u){try{r.value=!0,c.roleId?await ye(c.roleId,{name:_,description:p}):await we({name:_,description:p}),f("update:list"),I()}catch(a){Object.assign(i,a.response?.data?.errors)}finally{r.value=!1}}function I(){$.value=m("Add"),V(),R(),f("update:modelValue",!1)}function V(){Object.assign(_,{uz:"",ru:"",en:""}),Object.assign(p,{uz:"",ru:"",en:""})}function R(){Object.assign(i,{"name.uz":[],"name.en":[],"name.ru":[],"description.uz":[],"description.en":[],"description.ru":[]})}return(u,a)=>{const T=H,y=J,h=K,A=Ve,D=ge,E=X,U=me;return v(),B(U,{open:F.modelValue,size:"large",title:$.value,actions:"right",onClose:I},{content:o(()=>[n("form",{id:"role-form",class:"modal-form",onSubmit:C(S,["prevent"])},[t(D,{type:"boxed",selected:"uz",tabs:[{label:u.$t("Uzbek"),value:"uz"},{label:u.$t("Russian"),value:"ru"},{label:u.$t("English"),value:"en"}]},{tab:o(({activeValue:w})=>[w==="uz"?(v(),N("div",xe,[n("div",Be,[t(h,{label:u.$t("Name_uz"),required:""},{default:o(()=>[t(y,null,{default:o(()=>[t(T,{name:"name_uz",type:"text",placeholder:e(m)("Type_name_uz"),modelValue:e(_).uz,"onUpdate:modelValue":a[0]||(a[0]=d=>e(_).uz=d)},null,8,["placeholder","modelValue"]),n("p",De,g(e(i)["name.uz"][0]),1)]),_:1})]),_:1},8,["label"]),t(h,{label:u.$t("Description_uz"),required:""},{default:o(()=>[t(y,null,{default:o(()=>[t(A,{name:"description_uz",placeholder:e(m)("Add_description_uz"),modelValue:e(p).uz,"onUpdate:modelValue":a[1]||(a[1]=d=>e(p).uz=d)},null,8,["placeholder","modelValue"]),n("p",Ee,g(e(i)["description.uz"][0]),1)]),_:1})]),_:1},8,["label"])])])):w==="ru"?(v(),N("div",Me,[n("div",Pe,[t(h,{label:u.$t("Name_ru")},{default:o(()=>[t(y,null,{default:o(()=>[t(T,{name:"name_ru",type:"text",placeholder:e(m)("Type_name_ru"),modelValue:e(_).ru,"onUpdate:modelValue":a[2]||(a[2]=d=>e(_).ru=d)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),t(h,{label:u.$t("Description_ru")},{default:o(()=>[t(y,null,{default:o(()=>[t(A,{name:"description_ru",placeholder:e(m)("Add_description_ru"),modelValue:e(p).ru,"onUpdate:modelValue":a[3]||(a[3]=d=>e(p).ru=d)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])])])):w==="en"?(v(),N("div",Le,[n("div",qe,[t(h,{label:u.$t("Name_en")},{default:o(()=>[t(y,null,{default:o(()=>[t(T,{name:"name_en",type:"text",placeholder:e(m)("Type_name_en"),modelValue:e(_).en,"onUpdate:modelValue":a[4]||(a[4]=d=>e(_).en=d)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),t(h,{label:u.$t("Description_en")},{default:o(()=>[t(y,null,{default:o(()=>[t(A,{name:"description_en",placeholder:e(m)("Add_description_en"),modelValue:e(p).en,"onUpdate:modelValue":a[5]||(a[5]=d=>e(p).en=d)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])])])):j("",!0)]),_:1},8,["tabs"])],40,Oe)]),action:o(({close:w})=>[t(E,{loading:r.value,color:"primary",outlined:"",type:"submit",form:"role-form",disabled:r.value},{default:o(()=>[G(g(u.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),Qe=["onClick"],Ge=n("div",{class:"icon"},[n("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),He={class:"meta"},Je=["onClick"],Ke=n("div",{class:"icon"},[n("i",{"aria-hidden":"true",class:"lnil lnil-briefcase"})],-1),Xe={class:"meta"},Ye=["onClick"],Ze=n("div",{class:"icon"},[n("i",{"aria-hidden":"true",class:"lnil lnil-briefcase"})],-1),et={class:"meta"},tt=n("hr",{class:"dropdown-divider"},null,-1),nt=["onClick"],ot=n("div",{class:"icon"},[n("i",{"aria-hidden":"true",class:"lnil lnil-trash-can-alt"})],-1),st={class:"meta"},at=P({emits:["view","edit","remove","permissions"],setup(F,{emit:f}){return(c,m)=>{const $=Te;return v(),B($,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:o(({close:r})=>[n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:C(()=>{f("view"),r()},["prevent"])},[Ge,n("div",He,[n("span",null,g(c.$t("View")),1)])],8,Qe),n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:C(()=>{f("edit"),r()},["prevent"])},[Ke,n("div",Xe,[n("span",null,g(c.$t("Edit")),1)])],8,Je),n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:C(()=>{f("permissions"),r()},["prevent"])},[Ze,n("div",et,[n("span",null,g(c.$t("Role_permissions")),1)])],8,Ye),tt,n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:C(()=>{f("remove"),r()},["prevent"])},[ot,n("div",st,[n("span",null,g(c.$t("Remove")),1)])],8,nt)]),_:1})}}}),lt={class:"applicant-list-wrapper"},it=["textContent"],rt={key:0,class:"flex-list-inner"},kt=P({async setup(F){let f,c;const m=fe(),$=ve(),{t:r,locale:_}=Q(),p=pe(),i=x({pagination:{current_page:1,per_page:10,total:10},result:[]}),S=k(!1),I=k([]);O(()=>i.result.length===I.value.length&&I.value.length!==0);const V=k(),R=O({get(){return""},async set(s){await w(s)}}),u=k(""),a=O({get:()=>u.value,async set(s){u.value=s??"",console.log({value:s}),await d(s)}}),T=O(()=>({orderNumber:{format:(s,l,M)=>`${M+1}`,cellClass:"is-flex-grow-0"},name:{label:r("Name"),searchable:!0},description:{label:r("Description")},actions:{label:r("Actions"),align:"center"}}));Fe().setPageTitle(r("Roles_List")),he({title:r("Roles")+" - Nefrit"}),[f,c]=be(()=>U()),await f,c();function h(s){S.value=!0,V.value=s}async function A(s){V.value=s,p.$patch({confirmModalState:!0})}function D(s){$.push(`/app/roles/${s}/permissions`)}async function E(){await Ce(V.value),await U(),L()}async function U(s=1){const l=await Ne(s);Object.assign(i,l)}async function w(s){const l=await ze(s);Object.assign(i,l)}async function d(s){const l=await ke(s);Object.assign(i,l)}function L(){m.success(r("Success"))}return(s,l)=>{const M=X,Y=je,Z=H,ee=J,te=K,ne=Ue,oe=Ae,se=at,ae=Se,le=Re,ie=Ie,re=We,ue=ce;return v(),N("div",lt,[t(Y,{"justify-content":"end",class:"mb-4"},{default:o(()=>[t(M,{outlined:"",rounded:"",color:"info",icon:"feather:plus",onClick:l[0]||(l[0]=C(z=>h(void 0),["prevent"]))},{default:o(()=>[G(g(s.$t("Add")),1)]),_:1})]),_:1}),t(ie,{columns:e(T),data:e(i).result,limit:e(i).pagination.per_page,total:e(i).pagination.total,sort:e(a),"onUpdate:sort":l[3]||(l[3]=z=>W(a)?a.value=z:null)},{default:o(z=>[t(ne,null,{left:o(()=>[t(te,null,{default:o(()=>[t(ee,{icon:"feather:search"},{default:o(()=>[t(Z,{modelValue:e(R),"onUpdate:modelValue":l[1]||(l[1]=b=>W(R)?R.value=b:null),class:"is-rounded",placeholder:e(r)("Search")+"..."},null,8,["modelValue","placeholder"])]),_:1})]),_:1})]),_:1}),t(ae,{rounded:""},{"header-column":o(({column:b})=>[b.key==="orderNumber"?(v(),N("span",{key:0,class:"is-flex-grow-0",textContent:g("#")},null,8,it)):j("",!0)]),body:o(()=>[e(i).result.length===0?(v(),N("div",rt,[t(oe,{title:s.$t("No_matches"),subtitle:s.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):j("",!0)]),"body-cell":o(({row:b,column:de,value:ut,index:dt})=>[de.key==="actions"?(v(),B(se,{key:0,onEdit:q=>h(b.id),onRemove:q=>A(b.id),onPermissions:q=>D(b.id)},null,8,["onEdit","onRemove","onPermissions"])):j("",!0)]),_:1}),e(i).result.length?(v(),B(le,{key:0,"current-page":e(i).pagination.current_page,"onUpdate:current-page":l[2]||(l[2]=b=>e(i).pagination.current_page=b),class:"mt-6","item-per-page":e(i).pagination.per_page,"total-items":e(i).pagination.total},null,8,["current-page","item-per-page","total-items"])):j("",!0)]),_:1},8,["columns","data","limit","total","sort"]),t(re,{modelValue:S.value,"onUpdate:modelValue":l[4]||(l[4]=z=>S.value=z),"role-id":V.value,"onUpdate:list":l[5]||(l[5]=()=>{U(),L(),V.value=void 0}),onClose:l[6]||(l[6]=z=>V.value=void 0)},null,8,["modelValue","role-id"]),t(ue,{onConfirmAction:E})])}}});export{kt as default};