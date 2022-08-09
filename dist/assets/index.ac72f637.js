import{_ as pe}from"./ConfirmActionModal.dc1a3c08.js";import{_ as _e,u as fe}from"./VModal.7c3df6a9.js";import{K as q,r as N,m as D,w as ve,p as h,q as U,s as a,y as n,f as t,x as R,M as e,D as y,B as S,H as T,C as he,V as be,U as ge,a0 as Ve,c as j,bI as ye,bp as $e,i as K}from"./index.f060b7c6.js";import{_ as we}from"./VTabs.c5221529.js";import{_ as ke}from"./VTextarea.61bc0f20.js";import{_ as G}from"./VField.17e54227.js";import{a as J,_ as X}from"./VControl.068ba628.js";import{u as Y}from"./vue-i18n.runtime.esm-bundler.1634ed66.js";import{a as Ce,u as ze,c as Se,s as Ne,b as Re,r as Ie,d as Ae}from"./index.5dcd36f7.js";import{_ as Te,a as Ue}from"./VFlexTable.4ba052d2.js";import{_ as xe}from"./VFlexPagination.b3a191bb.js";import{_ as Be}from"./VDropdown.a61ebde9.js";import{_ as Oe}from"./VPlaceholderSection.afc34ed0.js";import{_ as Fe}from"./VCheckbox.a095a4ed.js";import{_ as je,a as De}from"./TableActionsBlock.3e62a7b3.js";import{u as Me}from"./viewWrapper.7134460b.js";import{u as Ee}from"./useNotyf.14aeb83f.js";import"./VIcon.a5a02b18.js";import"./useDropdown.191976f8.js";import"./VButtons.eeafcbc5.js";const Pe=["onSubmit"],Le={key:0,class:"columns is-multiline pt-5"},qe={class:"column is-12"},We={class:"help has-text-danger"},He={class:"help has-text-danger"},Qe={key:1,class:"columns is-multiline pt-5"},Ke={class:"column is-12"},Ge={key:2,class:"columns is-multiline pt-5"},Je={class:"column is-12"},Xe=q({props:{modelValue:Boolean,roleId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(x,{emit:b}){const p=x,{t:_}=Y(),$=N(_("Add")),i=N(!1),f=D({uz:"",ru:"",en:""}),c=D({uz:"",ru:"",en:""}),r=D({"name.uz":[],"name.en":[],"name.ru":[],"description.uz":[],"description.en":[],"description.ru":[]});ve(()=>p.roleId,async u=>{if(u){$.value=_("Edit");const s=await Ce(Number(p.roleId));Object.assign(f,s.name),Object.assign(c,s.description)}},{deep:!0,immediate:!0});async function I(u){try{i.value=!0,p.roleId?await ze(p.roleId,{name:f,description:c}):await Se({name:f,description:c}),b("update:list"),d()}catch(s){Object.assign(r,s.response?.data?.errors)}finally{i.value=!1}}function d(){$.value=_("Add"),B(),g(),b("update:modelValue",!1)}function B(){Object.assign(f,{uz:"",ru:"",en:""}),Object.assign(c,{uz:"",ru:"",en:""})}function g(){Object.assign(r,{"name.uz":[],"name.en":[],"name.ru":[],"description.uz":[],"description.en":[],"description.ru":[]})}return(u,s)=>{const w=J,V=X,k=G,A=ke,M=we,O=be,E=_e;return h(),U(E,{open:x.modelValue,size:"large",title:$.value,actions:"right",onClose:d},{content:a(()=>[n("form",{id:"role-form",class:"modal-form",onSubmit:T(I,["prevent"])},[t(M,{type:"boxed",selected:"uz",tabs:[{label:u.$t("Uzbek"),value:"uz"},{label:u.$t("Russian"),value:"ru"},{label:u.$t("English"),value:"en"}]},{tab:a(({activeValue:C})=>[C==="uz"?(h(),R("div",Le,[n("div",qe,[t(k,{label:u.$t("Name_uz"),required:""},{default:a(()=>[t(V,null,{default:a(()=>[t(w,{name:"name_uz",type:"text",placeholder:e(_)("Type_name_uz"),modelValue:e(f).uz,"onUpdate:modelValue":s[0]||(s[0]=m=>e(f).uz=m)},null,8,["placeholder","modelValue"]),n("p",We,y(e(r)["name.uz"][0]),1)]),_:1})]),_:1},8,["label"]),t(k,{label:u.$t("Description_uz"),required:""},{default:a(()=>[t(V,null,{default:a(()=>[t(A,{name:"description_uz",placeholder:e(_)("Add_description_uz"),modelValue:e(c).uz,"onUpdate:modelValue":s[1]||(s[1]=m=>e(c).uz=m)},null,8,["placeholder","modelValue"]),n("p",He,y(e(r)["description.uz"][0]),1)]),_:1})]),_:1},8,["label"])])])):C==="ru"?(h(),R("div",Qe,[n("div",Ke,[t(k,{label:u.$t("Name_ru")},{default:a(()=>[t(V,null,{default:a(()=>[t(w,{name:"name_ru",type:"text",placeholder:e(_)("Type_name_ru"),modelValue:e(f).ru,"onUpdate:modelValue":s[2]||(s[2]=m=>e(f).ru=m)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),t(k,{label:u.$t("Description_ru")},{default:a(()=>[t(V,null,{default:a(()=>[t(A,{name:"description_ru",placeholder:e(_)("Add_description_ru"),modelValue:e(c).ru,"onUpdate:modelValue":s[3]||(s[3]=m=>e(c).ru=m)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])])])):C==="en"?(h(),R("div",Ge,[n("div",Je,[t(k,{label:u.$t("Name_en")},{default:a(()=>[t(V,null,{default:a(()=>[t(w,{name:"name_en",type:"text",placeholder:e(_)("Type_name_en"),modelValue:e(f).en,"onUpdate:modelValue":s[4]||(s[4]=m=>e(f).en=m)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),t(k,{label:u.$t("Description_en")},{default:a(()=>[t(V,null,{default:a(()=>[t(A,{name:"description_en",placeholder:e(_)("Add_description_en"),modelValue:e(c).en,"onUpdate:modelValue":s[5]||(s[5]=m=>e(c).en=m)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])])])):S("",!0)]),_:1},8,["tabs"])],40,Pe)]),action:a(({close:C})=>[t(O,{loading:i.value,color:"primary",outlined:"",type:"submit",form:"role-form",disabled:i.value},{default:a(()=>[he(y(u.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),Ye=["onClick"],Ze=n("div",{class:"icon"},[n("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),et={class:"meta"},tt=["onClick"],ot=n("div",{class:"icon"},[n("i",{"aria-hidden":"true",class:"lnil lnil-briefcase"})],-1),nt={class:"meta"},lt=["onClick"],at=n("div",{class:"icon"},[n("i",{"aria-hidden":"true",class:"lnil lnil-briefcase"})],-1),st={class:"meta"},it=n("hr",{class:"dropdown-divider"},null,-1),rt=["onClick"],ut=n("div",{class:"icon"},[n("i",{"aria-hidden":"true",class:"lnil lnil-trash-can-alt"})],-1),dt={class:"meta"},ct=q({emits:["view","edit","remove","permissions"],setup(x,{emit:b}){return(p,_)=>{const $=Be;return h(),U($,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:a(({close:i})=>[n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:T(()=>{b("view"),i()},["prevent"])},[Ze,n("div",et,[n("span",null,y(p.$t("View")),1)])],8,Ye),n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:T(()=>{b("edit"),i()},["prevent"])},[ot,n("div",nt,[n("span",null,y(p.$t("Edit")),1)])],8,tt),n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:T(()=>{b("permissions"),i()},["prevent"])},[at,n("div",st,[n("span",null,y(p.$t("Role_permissions")),1)])],8,lt),it,n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:T(()=>{b("remove"),i()},["prevent"])},[ut,n("div",dt,[n("span",null,y(p.$t("Remove")),1)])],8,rt)]),_:1})}}}),mt={class:"applicant-list-wrapper"},pt=["textContent"],_t={key:0,class:"flex-list-inner"},Ft=q({async setup(x){let b,p;const _=Ee();ge();const $=Ve(),{t:i,locale:f}=Y(),c=fe(),r=D({pagination:{current_page:1,per_page:10,total:10},result:[]}),I=N(!1),d=N([]),B=j(()=>r.result.length===d.value.length&&d.value.length!==0),g=N(),u=j({get(){return""},async set(o){await ee(o)}}),s=N(""),w=j({get:()=>s.value,async set(o){s.value=o??"",console.log({value:o}),await te(o)}}),V=j(()=>({select:{label:"",cellClass:"is-flex-grow-0"},orderNumber:{format:(o,l,L)=>`${L+1}`,cellClass:"is-flex-grow-0"},name:{label:i("Name"),searchable:!0},description:{label:i("Description")},actions:{label:i("Actions"),align:"center"}}));Me().setPageTitle(i("Roles_List")),ye({title:i("Roles")+" - Nefrit"}),[b,p]=$e(()=>P()),await b,p();function A(){B.value?d.value=[]:d.value=r.result.map(o=>o.id)}function M(o){d.value.includes(o.id)?d.value=d.value.filter(l=>l!==o.id):d.value=[...d.value,o.id]}function O(o){I.value=!0,g.value=o}function E(){d.value.length>0?c.$patch({confirmModalState:!0}):alert(i("No_row_selected"))}async function C(o){g.value=o,c.$patch({confirmModalState:!0})}function m(o){$.push(`/app/roles/${o}/permissions`)}async function Z(){await Ie(g.value),await P(),W()}async function P(o=1){const l=await Ae(o);Object.assign(r,l)}async function ee(o){const l=await Ne(o);Object.assign(r,l)}async function te(o){const l=await Re(o);Object.assign(r,l)}function W(){_.success(i("Success"))}return(o,l)=>{const L=je,oe=J,ne=X,le=G,ae=De,H=Fe,se=Oe,ie=ct,re=Te,ue=xe,de=Ue,ce=Xe,me=pe;return h(),R("div",mt,[t(L,{center:"",title:"",onAdd:l[0]||(l[0]=z=>O(null)),"filter-disabled":!0,"print-disabled":!0,onRemove:E}),t(de,{columns:e(V),data:e(r).result,limit:e(r).pagination.per_page,total:e(r).pagination.total,sort:e(w),"onUpdate:sort":l[4]||(l[4]=z=>K(w)?w.value=z:null)},{default:a(z=>[t(ae,null,{left:a(()=>[t(le,null,{default:a(()=>[t(ne,{icon:"feather:search"},{default:a(()=>[t(oe,{modelValue:e(u),"onUpdate:modelValue":l[1]||(l[1]=v=>K(u)?u.value=v:null),class:"is-rounded",placeholder:e(i)("Search")+"..."},null,8,["modelValue","placeholder"])]),_:1})]),_:1})]),_:1}),t(re,{rounded:""},{"header-column":a(({column:v})=>[v.key==="select"?(h(),U(H,{key:0,class:"ml-2 mr-3",checked:e(B),name:"all_selected",color:"primary",onClick:A},null,8,["checked"])):S("",!0),v.key==="orderNumber"?(h(),R("span",{key:1,class:"is-flex-grow-0",textContent:y("#")},null,8,pt)):S("",!0)]),body:a(()=>[e(r).result.length===0?(h(),R("div",_t,[t(se,{title:o.$t("No_matches"),subtitle:o.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):S("",!0)]),"body-cell":a(({row:v,column:Q,value:ft,index:vt})=>[Q.key==="select"?(h(),U(H,{key:0,modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=F=>d.value=F),value:v.id,name:"selection",onChange:M},null,8,["modelValue","value"])):S("",!0),Q.key==="actions"?(h(),U(ie,{key:1,onEdit:F=>O(v.id),onRemove:F=>C(v.id),onPermissions:F=>m(v.id)},null,8,["onEdit","onRemove","onPermissions"])):S("",!0)]),_:1}),t(ue,{"current-page":e(r).pagination.current_page,"onUpdate:current-page":l[3]||(l[3]=v=>e(r).pagination.current_page=v),class:"mt-6","item-per-page":e(r).pagination.per_page,"total-items":e(r).pagination.total},null,8,["current-page","item-per-page","total-items"])]),_:1},8,["columns","data","limit","total","sort"]),t(ce,{modelValue:I.value,"onUpdate:modelValue":l[5]||(l[5]=z=>I.value=z),"role-id":g.value,"onUpdate:list":l[6]||(l[6]=()=>{P(),W(),g.value=void 0}),onClose:l[7]||(l[7]=z=>g.value=void 0)},null,8,["modelValue","role-id"]),t(me,{onConfirmAction:Z})])}}});export{Ft as default};