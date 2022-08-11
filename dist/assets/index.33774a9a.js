import{_ as re}from"./ConfirmActionModal.97a9d993.js";import{a as ue,u as ce,_ as de}from"./VPlaceholderSection.2f3a5682.js";import{A as O,W as H,B as N,r as R,E as me,C as pe,q as _e,o as f,g as k,w as l,k as r,s as n,G as o,t as S,x as E,p as fe,a4 as G,a2 as Q,a3 as J,Q as ve,$ as ge,bP as he,b as be,f as q,bw as Ve,j as D,m as w,H as $e,bU as ye}from"./index.433ccf37.js";import{f as Ce,a as we,u as ke,c as Ne,b as Se,r as Ie}from"./index.1b3a1c5a.js";import{_ as Ae,a as Le}from"./VFlexTable.284f6416.js";import{_ as ze}from"./VFlexPagination.763c2824.js";import{_ as Be,a as Fe}from"./TableActionsBlock.a3d1e330.js";import{u as Me}from"./viewWrapper.5bc32d10.js";import"./VButtons.56d3a59a.js";const Ue=["onSubmit"],xe={class:"columns is-multiline"},Te={class:"column is-12"},De={class:"help has-text-danger"},Re={class:"column is-12"},Ee={class:"help has-text-danger"},Oe=O({props:{modelValue:Boolean,departmentId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(z,{emit:v}){const m=z,{t:c}=H(),b=N(c("Add")),_=N(!1),I=N([]),A=R({"name.uz":[],"name.en":[],"name.ru":[],stages:[]}),e=R({name:{uz:"",ru:"",en:""},stages:[]});me(()=>m.departmentId,async s=>{if(s){b.value=c("Edit");const i=await Ce(Number(m.departmentId));Object.assign(e,i),Object.assign(e.stages,i.stages.map(({id:h})=>h))}},{deep:!0,immediate:!0}),pe(async()=>{const s=await we();I.value=s});async function L(s){try{_.value=!0,m.departmentId?await ke(m.departmentId,e):await Ne(e),v("update:list"),u()}catch(i){Object.assign(A,i.response?.data?.errors)}finally{_.value=!1}}function u(){b.value=c("Add"),B(),g(),v("update:modelValue",!1)}function B(){Object.assign(e,{name:{uz:"",ru:"",en:""},stages:[]})}function g(){Object.assign(A,{"name.uz":[],"name.en":[],"name.ru":[],stages:[]})}return(s,i)=>{const h=G,V=Q,$=J,U=_e("Multiselect"),F=ve,x=ue;return f(),k(x,{open:z.modelValue,size:"large",actions:"right",title:b.value,onClose:i[4]||(i[4]=d=>u())},{content:l(()=>[r("form",{id:"department-form",class:"modal-form",onSubmit:E(L,["prevent"])},[r("div",xe,[r("div",Te,[n($,{label:s.$t("Name_uz"),required:""},{default:l(()=>[n(V,null,{default:l(()=>[n(h,{name:"name_uz",placeholder:s.$t("Type_name_uz"),modelValue:o(e).name.uz,"onUpdate:modelValue":i[0]||(i[0]=d=>o(e).name.uz=d)},null,8,["placeholder","modelValue"]),r("p",De,S(o(A)["name.uz"][0]),1)]),_:1})]),_:1},8,["label"]),n($,{label:s.$t("Name_ru")},{default:l(()=>[n(V,null,{default:l(()=>[n(h,{name:"name_ru",placeholder:s.$t("Type_name_ru"),modelValue:o(e).name.ru,"onUpdate:modelValue":i[1]||(i[1]=d=>o(e).name.ru=d)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),n($,{label:s.$t("Name_en")},{default:l(()=>[n(V,null,{default:l(()=>[n(h,{name:"name_en",placeholder:s.$t("Type_name_en"),modelValue:o(e).name.en,"onUpdate:modelValue":i[2]||(i[2]=d=>o(e).name.en=d)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])]),r("div",Re,[n($,{label:s.$t("Stages"),required:""},{default:l(()=>[n(V,null,{default:l(()=>[n(U,{modelValue:o(e).stages,"onUpdate:modelValue":i[3]||(i[3]=d=>o(e).stages=d),searchable:!1,options:I.value,placeholder:s.$t("Select_stages"),valueProp:"id",label:"name",mode:"tags","close-on-select":!1},null,8,["modelValue","options","placeholder"]),r("p",Ee,S(o(A).stages[0]),1)]),_:1})]),_:1},8,["label"])])])],40,Ue)]),action:l(({close:d})=>[n(F,{loading:_.value,color:"primary",outlined:"",type:"submit",form:"department-form",disabled:_.value},{default:l(()=>[fe(S(s.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),je=["onClick"],Pe=r("div",{class:"icon"},[r("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:edit"})],-1),We={class:"meta"},qe=r("hr",{class:"dropdown-divider"},null,-1),He=["onClick"],Ge=r("div",{class:"icon"},[r("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:trash"})],-1),Qe={class:"meta"},Je=O({emits:["edit","remove"],setup(z,{emit:v}){return(m,c)=>{const b=ge;return f(),k(b,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:l(({close:_})=>[r("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:E(()=>{v("edit"),_()},["prevent"])},[Pe,r("div",We,[r("span",null,S(m.$t("Edit")),1)])],8,je),qe,r("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:E(()=>{v("remove"),_()},["prevent"])},[Ge,r("div",Qe,[r("span",null,S(m.$t("Remove")),1)])],8,He)]),_:1})}}}),Ke={class:"applicant-list-wrapper"},Xe=["textContent"],Ye={key:0,class:"flex-list-inner"},ct=O({async setup(z){let v,m;const{t:c,locale:b}=H();he({title:c("Departments")+" - Nefrit"});const _=be(),I=ce();Me().setPageTitle(c("Departments_List"));const e=R({pagination:{current_page:1,per_page:10,total:10},result:[]}),L=N(!1),u=N([]),B=q(()=>e.result.length===u.value.length),g=N(),s=q({get:()=>e.pagination.current_page,set:async t=>{await M(t)}}),i=({order:t,a,b:y})=>t==="asc"?a.location.localeCompare(y.location):t==="desc"?y.location.localeCompare(a.location):0,h=({searchTerm:t,row:a})=>t?a.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())||a.bio.toLocaleLowerCase().includes(t.toLocaleLowerCase()):!0,V={select:{label:"",cellClass:"is-flex-grow-0"},orderNumber:{format:(t,a,y)=>`${y+1}`,cellClass:"is-flex-grow-0"},name:{label:c("Name"),searchable:!0,sortable:!0,sort:i,filter:h},actions:{label:c("Actions"),align:"center"}};[v,m]=Ve(()=>M()),await v,m();function $(){B.value?u.value=[]:u.value=e.map(t=>t.id)}function U(t){u.value.includes(t.id)?u.value=u.value.filter(a=>a!==t.id):u.value=[...u.value,t.id]}function F(t){L.value=!0,g.value=t}function x(){u.value.length>0?I.$patch({confirmModalState:!0}):alert(c("No_row_selected"))}async function d(t){g.value=t,I.$patch({confirmModalState:!0})}async function K(){await Ie(g.value),await M(),j()}async function M(t=1){const a=await Se(t);Object.assign(e,a)}function j(){_.success(c("Success"))}return(t,a)=>{const y=Be,X=G,Y=Q,Z=J,ee=Fe,P=ye,te=de,ae=Je,ne=Ae,oe=ze,le=Le,se=Oe,ie=re;return f(),D("div",Ke,[n(y,{center:"",title:"",onAdd:a[0]||(a[0]=C=>F(null)),"filter-disabled":!0,onRemove:x}),n(le,{columns:o(V),data:o(e).result,limit:o(e).pagination.per_page,total:o(e).pagination.total},{default:l(C=>[n(ee,null,{left:l(()=>[n(Z,null,{default:l(()=>[n(Y,{icon:"feather:search"},{default:l(()=>[n(X,{modelValue:C.searchInput,"onUpdate:modelValue":p=>C.searchInput=p,class:"is-rounded",placeholder:o(c)("Search")+"..."},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1024)]),_:2},1024)]),_:2},1024),n(ne,{rounded:""},{"header-column":l(({column:p})=>[p.key==="select"?(f(),k(P,{key:0,class:"ml-2 mr-3",checked:o(B),name:"all_selected",color:"primary",onClick:$},null,8,["checked"])):w("",!0),p.key==="orderNumber"?(f(),D("span",{key:1,class:"is-flex-grow-0",textContent:S("#")},null,8,Xe)):w("",!0)]),body:l(()=>[o(e).result.length===0?(f(),D("div",Ye,[n(te,{title:t.$t("No_data"),subtitle:t.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):w("",!0)]),"body-cell":l(({row:p,column:W,value:Ze,index:et})=>[W.key==="select"?(f(),k(P,{key:0,modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=T=>u.value=T),value:p.id,name:"selection",onChange:U},null,8,["modelValue","value"])):w("",!0),W.key==="actions"?(f(),k(ae,{key:1,onEdit:T=>F(p.id),onRemove:T=>d(p.id)},null,8,["onEdit","onRemove"])):w("",!0)]),_:1}),o(e).result.length?(f(),k(oe,{key:0,"current-page":o(s),"onUpdate:current-page":a[2]||(a[2]=p=>$e(s)?s.value=p:null),class:"mt-6","item-per-page":o(e).pagination.per_page,"total-items":o(e).pagination.total},null,8,["current-page","item-per-page","total-items"])):w("",!0)]),_:1},8,["columns","data","limit","total"]),n(se,{modelValue:L.value,"onUpdate:modelValue":a[3]||(a[3]=C=>L.value=C),"department-id":g.value,"onUpdate:list":a[4]||(a[4]=()=>{M(),j(),g.value=void 0}),onClose:a[5]||(a[5]=C=>g.value=void 0)},null,8,["modelValue","department-id"]),n(ie,{onConfirmAction:K})])}}});export{ct as default};