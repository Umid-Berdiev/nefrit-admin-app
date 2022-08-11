import{_ as pe}from"./ConfirmActionModal.13d479f4.js";import{_ as _e}from"./VModal.d53d6d9f.js";import{z as q,V as Y,A as N,r as D,D as fe,o as f,f as R,w as a,j as o,q as t,i as A,E as e,t as y,l as z,v as U,m as ve,a3 as Z,a1 as J,a2 as K,P as he,Z as be,b as ge,Y as Ve,e as F,bP as ye,bw as $e,G as H,bT as we}from"./index.7d56daf3.js";import{_ as ke}from"./VTabs.2ea0481a.js";import{_ as ze}from"./VTextarea.466a5d7c.js";import{a as Ce,u as Se,c as Ne,s as Re,b as Ae,r as Te,d as Ie}from"./index.cf535fdf.js";import{_ as Ue,a as xe}from"./VFlexTable.1438e9d1.js";import{_ as Oe}from"./VFlexPagination.6accec6d.js";import{u as je,_ as Be}from"./VPlaceholderSection.5c15bef1.js";import{_ as Fe,a as De}from"./TableActionsBlock.3b4fe815.js";import{u as Ee}from"./viewWrapper.780c4a53.js";import"./VButtons.2dc19305.js";const Me=["onSubmit"],Pe={key:0,class:"columns is-multiline pt-5"},Le={class:"column is-12"},qe={class:"help has-text-danger"},We={class:"help has-text-danger"},Qe={key:1,class:"columns is-multiline pt-5"},Ge={class:"column is-12"},He={key:2,class:"columns is-multiline pt-5"},Ye={class:"column is-12"},Ze=q({props:{modelValue:Boolean,roleId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(x,{emit:b}){const p=x,{t:_}=Y(),$=N(_("Add")),r=N(!1),v=D({uz:"",ru:"",en:""}),c=D({uz:"",ru:"",en:""}),i=D({"name.uz":[],"name.en":[],"name.ru":[],"description.uz":[],"description.en":[],"description.ru":[]});fe(()=>p.roleId,async u=>{if(u){$.value=_("Edit");const s=await Ce(Number(p.roleId));Object.assign(v,s.name),Object.assign(c,s.description)}},{deep:!0,immediate:!0});async function T(u){try{r.value=!0,p.roleId?await Se(p.roleId,{name:v,description:c}):await Ne({name:v,description:c}),b("update:list"),d()}catch(s){Object.assign(i,s.response?.data?.errors)}finally{r.value=!1}}function d(){$.value=_("Add"),O(),g(),b("update:modelValue",!1)}function O(){Object.assign(v,{uz:"",ru:"",en:""}),Object.assign(c,{uz:"",ru:"",en:""})}function g(){Object.assign(i,{"name.uz":[],"name.en":[],"name.ru":[],"description.uz":[],"description.en":[],"description.ru":[]})}return(u,s)=>{const w=Z,V=J,k=K,I=ze,E=ke,j=he,M=_e;return f(),R(M,{open:x.modelValue,size:"large",title:$.value,actions:"right",onClose:d},{content:a(()=>[o("form",{id:"role-form",class:"modal-form",onSubmit:U(T,["prevent"])},[t(E,{type:"boxed",selected:"uz",tabs:[{label:u.$t("Uzbek"),value:"uz"},{label:u.$t("Russian"),value:"ru"},{label:u.$t("English"),value:"en"}]},{tab:a(({activeValue:C})=>[C==="uz"?(f(),A("div",Pe,[o("div",Le,[t(k,{label:u.$t("Name_uz"),required:""},{default:a(()=>[t(V,null,{default:a(()=>[t(w,{name:"name_uz",type:"text",placeholder:e(_)("Type_name_uz"),modelValue:e(v).uz,"onUpdate:modelValue":s[0]||(s[0]=m=>e(v).uz=m)},null,8,["placeholder","modelValue"]),o("p",qe,y(e(i)["name.uz"][0]),1)]),_:1})]),_:1},8,["label"]),t(k,{label:u.$t("Description_uz"),required:""},{default:a(()=>[t(V,null,{default:a(()=>[t(I,{name:"description_uz",placeholder:e(_)("Add_description_uz"),modelValue:e(c).uz,"onUpdate:modelValue":s[1]||(s[1]=m=>e(c).uz=m)},null,8,["placeholder","modelValue"]),o("p",We,y(e(i)["description.uz"][0]),1)]),_:1})]),_:1},8,["label"])])])):C==="ru"?(f(),A("div",Qe,[o("div",Ge,[t(k,{label:u.$t("Name_ru")},{default:a(()=>[t(V,null,{default:a(()=>[t(w,{name:"name_ru",type:"text",placeholder:e(_)("Type_name_ru"),modelValue:e(v).ru,"onUpdate:modelValue":s[2]||(s[2]=m=>e(v).ru=m)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),t(k,{label:u.$t("Description_ru")},{default:a(()=>[t(V,null,{default:a(()=>[t(I,{name:"description_ru",placeholder:e(_)("Add_description_ru"),modelValue:e(c).ru,"onUpdate:modelValue":s[3]||(s[3]=m=>e(c).ru=m)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])])])):C==="en"?(f(),A("div",He,[o("div",Ye,[t(k,{label:u.$t("Name_en")},{default:a(()=>[t(V,null,{default:a(()=>[t(w,{name:"name_en",type:"text",placeholder:e(_)("Type_name_en"),modelValue:e(v).en,"onUpdate:modelValue":s[4]||(s[4]=m=>e(v).en=m)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),t(k,{label:u.$t("Description_en")},{default:a(()=>[t(V,null,{default:a(()=>[t(I,{name:"description_en",placeholder:e(_)("Add_description_en"),modelValue:e(c).en,"onUpdate:modelValue":s[5]||(s[5]=m=>e(c).en=m)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])])])):z("",!0)]),_:1},8,["tabs"])],40,Me)]),action:a(({close:C})=>[t(j,{loading:r.value,color:"primary",outlined:"",type:"submit",form:"role-form",disabled:r.value},{default:a(()=>[ve(y(u.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),Je=["onClick"],Ke=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),Xe={class:"meta"},et=["onClick"],tt=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-briefcase"})],-1),nt={class:"meta"},ot=["onClick"],lt=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-briefcase"})],-1),at={class:"meta"},st=o("hr",{class:"dropdown-divider"},null,-1),it=["onClick"],rt=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-trash-can-alt"})],-1),ut={class:"meta"},dt=q({emits:["view","edit","remove","permissions"],setup(x,{emit:b}){return(p,_)=>{const $=be;return f(),R($,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:a(({close:r})=>[o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:U(()=>{b("view"),r()},["prevent"])},[Ke,o("div",Xe,[o("span",null,y(p.$t("View")),1)])],8,Je),o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:U(()=>{b("edit"),r()},["prevent"])},[tt,o("div",nt,[o("span",null,y(p.$t("Edit")),1)])],8,et),o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:U(()=>{b("permissions"),r()},["prevent"])},[lt,o("div",at,[o("span",null,y(p.$t("Role_permissions")),1)])],8,ot),st,o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:U(()=>{b("remove"),r()},["prevent"])},[rt,o("div",ut,[o("span",null,y(p.$t("Remove")),1)])],8,it)]),_:1})}}}),ct={class:"applicant-list-wrapper"},mt=["textContent"],pt={key:0,class:"flex-list-inner"},Nt=q({async setup(x){let b,p;const _=ge(),$=Ve(),{t:r,locale:v}=Y(),c=je(),i=D({pagination:{current_page:1,per_page:10,total:10},result:[]}),T=N(!1),d=N([]),O=F(()=>i.result.length===d.value.length&&d.value.length!==0),g=N(),u=F({get(){return""},async set(n){await ee(n)}}),s=N(""),w=F({get:()=>s.value,async set(n){s.value=n??"",console.log({value:n}),await te(n)}}),V=F(()=>({select:{label:"",cellClass:"is-flex-grow-0"},orderNumber:{format:(n,l,L)=>`${L+1}`,cellClass:"is-flex-grow-0"},name:{label:r("Name"),searchable:!0},description:{label:r("Description")},actions:{label:r("Actions"),align:"center"}}));Ee().setPageTitle(r("Roles_List")),ye({title:r("Roles")+" - Nefrit"}),[b,p]=$e(()=>P()),await b,p();function I(){O.value?d.value=[]:d.value=i.result.map(n=>n.id)}function E(n){d.value.includes(n.id)?d.value=d.value.filter(l=>l!==n.id):d.value=[...d.value,n.id]}function j(n){T.value=!0,g.value=n}function M(){d.value.length>0?c.$patch({confirmModalState:!0}):alert(r("No_row_selected"))}async function C(n){g.value=n,c.$patch({confirmModalState:!0})}function m(n){$.push(`/app/roles/${n}/permissions`)}async function X(){await Te(g.value),await P(),W()}async function P(n=1){const l=await Ie(n);Object.assign(i,l)}async function ee(n){const l=await Re(n);Object.assign(i,l)}async function te(n){const l=await Ae(n);Object.assign(i,l)}function W(){_.success(r("Success"))}return(n,l)=>{const L=Fe,ne=Z,oe=J,le=K,ae=De,Q=we,se=Be,ie=dt,re=Ue,ue=Oe,de=xe,ce=Ze,me=pe;return f(),A("div",ct,[t(L,{center:"",title:"",onAdd:l[0]||(l[0]=S=>j(null)),"filter-disabled":!0,"print-disabled":!0,onRemove:M}),t(de,{columns:e(V),data:e(i).result,limit:e(i).pagination.per_page,total:e(i).pagination.total,sort:e(w),"onUpdate:sort":l[4]||(l[4]=S=>H(w)?w.value=S:null)},{default:a(S=>[t(ae,null,{left:a(()=>[t(le,null,{default:a(()=>[t(oe,{icon:"feather:search"},{default:a(()=>[t(ne,{modelValue:e(u),"onUpdate:modelValue":l[1]||(l[1]=h=>H(u)?u.value=h:null),class:"is-rounded",placeholder:e(r)("Search")+"..."},null,8,["modelValue","placeholder"])]),_:1})]),_:1})]),_:1}),t(re,{rounded:""},{"header-column":a(({column:h})=>[h.key==="select"?(f(),R(Q,{key:0,class:"ml-2 mr-3",checked:e(O),name:"all_selected",color:"primary",onClick:I},null,8,["checked"])):z("",!0),h.key==="orderNumber"?(f(),A("span",{key:1,class:"is-flex-grow-0",textContent:y("#")},null,8,mt)):z("",!0)]),body:a(()=>[e(i).result.length===0?(f(),A("div",pt,[t(se,{title:n.$t("No_matches"),subtitle:n.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):z("",!0)]),"body-cell":a(({row:h,column:G,value:_t,index:ft})=>[G.key==="select"?(f(),R(Q,{key:0,modelValue:d.value,"onUpdate:modelValue":l[2]||(l[2]=B=>d.value=B),value:h.id,name:"selection",onChange:E},null,8,["modelValue","value"])):z("",!0),G.key==="actions"?(f(),R(ie,{key:1,onEdit:B=>j(h.id),onRemove:B=>C(h.id),onPermissions:B=>m(h.id)},null,8,["onEdit","onRemove","onPermissions"])):z("",!0)]),_:1}),e(i).result.length?(f(),R(ue,{key:0,"current-page":e(i).pagination.current_page,"onUpdate:current-page":l[3]||(l[3]=h=>e(i).pagination.current_page=h),class:"mt-6","item-per-page":e(i).pagination.per_page,"total-items":e(i).pagination.total},null,8,["current-page","item-per-page","total-items"])):z("",!0)]),_:1},8,["columns","data","limit","total","sort"]),t(ce,{modelValue:T.value,"onUpdate:modelValue":l[5]||(l[5]=S=>T.value=S),"role-id":g.value,"onUpdate:list":l[6]||(l[6]=()=>{P(),W(),g.value=void 0}),onClose:l[7]||(l[7]=S=>g.value=void 0)},null,8,["modelValue","role-id"]),t(me,{onConfirmAction:X})])}}});export{Nt as default};
