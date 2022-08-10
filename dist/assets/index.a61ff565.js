import{_ as pe}from"./ConfirmActionModal.97a9d993.js";import{a as _e,u as fe,_ as ve}from"./VPlaceholderSection.2f3a5682.js";import{A as W,W as Z,B as N,r as E,E as he,o as f,g as R,w as a,k as o,s as t,j as A,G as e,t as y,m as z,x as U,p as be,a4 as J,a2 as K,a3 as X,Q as ge,$ as Ve,b as ye,Z as $e,f as F,bP as we,bw as ke,H as G,bU as ze}from"./index.433ccf37.js";import{_ as Ce}from"./VTabs.c0749178.js";import{_ as Se}from"./VTextarea.61fe4cf8.js";import{a as Ne,u as Re,c as Ae,s as Ie,b as Te,r as Ue,d as xe}from"./index.890f4176.js";import{_ as Be,a as Oe}from"./VFlexTable.284f6416.js";import{_ as je}from"./VFlexPagination.763c2824.js";import{_ as Fe,a as Ee}from"./TableActionsBlock.a3d1e330.js";import{u as De}from"./viewWrapper.5bc32d10.js";import"./VButtons.56d3a59a.js";const Me=["onSubmit"],Pe={key:0,class:"columns is-multiline pt-5"},Le={class:"column is-12"},We={class:"help has-text-danger"},qe={class:"help has-text-danger"},Qe={key:1,class:"columns is-multiline pt-5"},He={class:"column is-12"},Ge={key:2,class:"columns is-multiline pt-5"},Ze={class:"column is-12"},Je=W({props:{modelValue:Boolean,roleId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(x,{emit:b}){const p=x,{t:_}=Z(),$=N(_("Add")),r=N(!1),v=E({uz:"",ru:"",en:""}),c=E({uz:"",ru:"",en:""}),i=E({"name.uz":[],"name.en":[],"name.ru":[],"description.uz":[],"description.en":[],"description.ru":[]});he(()=>p.roleId,async u=>{if(u){$.value=_("Edit");const s=await Ne(Number(p.roleId));Object.assign(v,s.name),Object.assign(c,s.description)}},{deep:!0,immediate:!0});async function I(u){try{r.value=!0,p.roleId?await Re(p.roleId,{name:v,description:c}):await Ae({name:v,description:c}),b("update:list"),d()}catch(s){Object.assign(i,s.response?.data?.errors)}finally{r.value=!1}}function d(){$.value=_("Add"),B(),g(),b("update:modelValue",!1)}function B(){Object.assign(v,{uz:"",ru:"",en:""}),Object.assign(c,{uz:"",ru:"",en:""})}function g(){Object.assign(i,{"name.uz":[],"name.en":[],"name.ru":[],"description.uz":[],"description.en":[],"description.ru":[]})}return(u,s)=>{const w=J,V=K,k=X,T=Se,D=Ce,O=ge,M=_e;return f(),R(M,{open:x.modelValue,size:"large",title:$.value,actions:"right",onClose:d},{content:a(()=>[o("form",{id:"role-form",class:"modal-form",onSubmit:U(I,["prevent"])},[t(D,{type:"boxed",selected:"uz",tabs:[{label:u.$t("Uzbek"),value:"uz"},{label:u.$t("Russian"),value:"ru"},{label:u.$t("English"),value:"en"}]},{tab:a(({activeValue:C})=>[C==="uz"?(f(),A("div",Pe,[o("div",Le,[t(k,{label:u.$t("Name_uz"),required:""},{default:a(()=>[t(V,null,{default:a(()=>[t(w,{name:"name_uz",type:"text",placeholder:e(_)("Type_name_uz"),modelValue:e(v).uz,"onUpdate:modelValue":s[0]||(s[0]=m=>e(v).uz=m)},null,8,["placeholder","modelValue"]),o("p",We,y(e(i)["name.uz"][0]),1)]),_:1})]),_:1},8,["label"]),t(k,{label:u.$t("Description_uz"),required:""},{default:a(()=>[t(V,null,{default:a(()=>[t(T,{name:"description_uz",placeholder:e(_)("Add_description_uz"),modelValue:e(c).uz,"onUpdate:modelValue":s[1]||(s[1]=m=>e(c).uz=m)},null,8,["placeholder","modelValue"]),o("p",qe,y(e(i)["description.uz"][0]),1)]),_:1})]),_:1},8,["label"])])])):C==="ru"?(f(),A("div",Qe,[o("div",He,[t(k,{label:u.$t("Name_ru")},{default:a(()=>[t(V,null,{default:a(()=>[t(w,{name:"name_ru",type:"text",placeholder:e(_)("Type_name_ru"),modelValue:e(v).ru,"onUpdate:modelValue":s[2]||(s[2]=m=>e(v).ru=m)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),t(k,{label:u.$t("Description_ru")},{default:a(()=>[t(V,null,{default:a(()=>[t(T,{name:"description_ru",placeholder:e(_)("Add_description_ru"),modelValue:e(c).ru,"onUpdate:modelValue":s[3]||(s[3]=m=>e(c).ru=m)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])])])):C==="en"?(f(),A("div",Ge,[o("div",Ze,[t(k,{label:u.$t("Name_en")},{default:a(()=>[t(V,null,{default:a(()=>[t(w,{name:"name_en",type:"text",placeholder:e(_)("Type_name_en"),modelValue:e(v).en,"onUpdate:modelValue":s[4]||(s[4]=m=>e(v).en=m)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),t(k,{label:u.$t("Description_en")},{default:a(()=>[t(V,null,{default:a(()=>[t(T,{name:"description_en",placeholder:e(_)("Add_description_en"),modelValue:e(c).en,"onUpdate:modelValue":s[5]||(s[5]=m=>e(c).en=m)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])])])):z("",!0)]),_:1},8,["tabs"])],40,Me)]),action:a(({close:C})=>[t(O,{loading:r.value,color:"primary",outlined:"",type:"submit",form:"role-form",disabled:r.value},{default:a(()=>[be(y(u.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),Ke=["onClick"],Xe=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),Ye={class:"meta"},et=["onClick"],tt=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-briefcase"})],-1),nt={class:"meta"},ot=["onClick"],lt=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-briefcase"})],-1),at={class:"meta"},st=o("hr",{class:"dropdown-divider"},null,-1),it=["onClick"],rt=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-trash-can-alt"})],-1),ut={class:"meta"},dt=W({emits:["view","edit","remove","permissions"],setup(x,{emit:b}){return(p,_)=>{const $=Ve;return f(),R($,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:a(({close:r})=>[o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:U(()=>{b("view"),r()},["prevent"])},[Xe,o("div",Ye,[o("span",null,y(p.$t("View")),1)])],8,Ke),o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:U(()=>{b("edit"),r()},["prevent"])},[tt,o("div",nt,[o("span",null,y(p.$t("Edit")),1)])],8,et),o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:U(()=>{b("permissions"),r()},["prevent"])},[lt,o("div",at,[o("span",null,y(p.$t("Role_permissions")),1)])],8,ot),st,o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:U(()=>{b("remove"),r()},["prevent"])},[rt,o("div",ut,[o("span",null,y(p.$t("Remove")),1)])],8,it)]),_:1})}}}),ct={class:"applicant-list-wrapper"},mt=["textContent"],pt={key:0,class:"flex-list-inner"},St=W({async setup(x){let b,p;const _=ye(),$=$e(),{t:r,locale:v}=Z(),c=fe(),i=E({pagination:{current_page:1,per_page:10,total:10},result:[]}),I=N(!1),d=N([]),B=F(()=>i.result.length===d.value.length&&d.value.length!==0),g=N(),u=F({get(){return""},async set(n){await ee(n)}}),s=N(""),w=F({get:()=>s.value,async set(n){s.value=n??"",console.log({value:n}),await te(n)}}),V=F(()=>({select:{label:"",cellClass:"is-flex-grow-0"},orderNumber:{format:(n,l,L)=>`${L+1}`,cellClass:"is-flex-grow-0"},name:{label:r("Name"),searchable:!0},description:{label:r("Description")},actions:{label:r("Actions"),align:"center"}}));De().setPageTitle(r("Roles_List")),we({title:r("Roles")+" - Nefrit"}),[b,p]=ke(()=>P()),await b,p();function T(){B.value?d.value=[]:d.value=i.result.map(n=>n.id)}function D(n){d.value.includes(n.id)?d.value=d.value.filter(l=>l!==n.id):d.value=[...d.value,n.id]}function O(n){I.value=!0,g.value=n}function M(){d.value.length>0?c.$patch({confirmModalState:!0}):alert(r("No_row_selected"))}async function C(n){g.value=n,c.$patch({confirmModalState:!0})}function m(n){$.push(`/app/roles/${n}/permissions`)}async function Y(){await Ue(g.value),await P(),q()}async function P(n=1){const l=await xe(n);Object.assign(i,l)}async function ee(n){const l=await Ie(n);Object.assign(i,l)}async function te(n){const l=await Te(n);Object.assign(i,l)}function q(){_.success(r("Success"))}return(n,l)=>{const L=Fe,ne=J,oe=K,le=X,ae=Ee,Q=ze,se=ve,ie=dt,re=Be,ue=je,de=Oe,ce=Je,me=pe;return f(),A("div",ct,[t(L,{center:"",title:"",onAdd:l[0]||(l[0]=S=>O(null)),"filter-disabled":!0,"print-disabled":!0,onRemove:M}),t(de,{columns:e(V),data:e(i).result,limit:e(i).pagination.per_page,total:e(i).pagination.total,sort:e(w),"onUpdate:sort":l[4]||(l[4]=S=>G(w)?w.value=S:null)},{default:a(S=>[t(ae,null,{left:a(()=>[t(le,null,{default:a(()=>[t(oe,{icon:"feather:search"},{default:a(()=>[t(ne,{modelValue:e(u),"onUpdate:modelValue":l[1]||(l[1]=h=>G(u)?u.value=h:null),class:"is-rounded",placeholder:e(r)("Search")+"..."},null,8,["modelValue","placeholder"])]),_:1})]),_:1})]),_:1}),t(re,{rounded:""},{"header-column":a(({column:h})=>[h.key==="select"?(f(),R(Q,{key:0,class:"ml-2 mr-3",checked:e(B),name:"all_selected",color:"primary",onClick:T},null,8,["checked"])):z("",!0),h.key==="orderNumber"?(f(),A("span",{key:1,class:"is-flex-grow-0",textContent:y("#")},null,8,mt)):z("",!0)]),body:a(()=>[e(i).result.length===0?(f(),A("div",pt,[t(se,{title:n.$t("No_matches"),subtitle:n.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):z("",!0)]),"body-cell":a(({row:h,column:H,value:_t,index:ft})=>[H.key==="select"?(f(),R(Q,{key:0,modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=j=>d.value=j),value:h.id,name:"selection",onChange:D},null,8,["modelValue","value"])):z("",!0),H.key==="actions"?(f(),R(ie,{key:1,onEdit:j=>O(h.id),onRemove:j=>C(h.id),onPermissions:j=>m(h.id)},null,8,["onEdit","onRemove","onPermissions"])):z("",!0)]),_:1}),e(i).result.length?(f(),R(ue,{key:0,"current-page":e(i).pagination.current_page,"onUpdate:current-page":l[3]||(l[3]=h=>e(i).pagination.current_page=h),class:"mt-6","item-per-page":e(i).pagination.per_page,"total-items":e(i).pagination.total},null,8,["current-page","item-per-page","total-items"])):z("",!0)]),_:1},8,["columns","data","limit","total","sort"]),t(ce,{modelValue:I.value,"onUpdate:modelValue":l[5]||(l[5]=S=>I.value=S),"role-id":g.value,"onUpdate:list":l[6]||(l[6]=()=>{P(),q(),g.value=void 0}),onClose:l[7]||(l[7]=S=>g.value=void 0)},null,8,["modelValue","role-id"]),t(me,{onConfirmAction:Y})])}}});export{St as default};
