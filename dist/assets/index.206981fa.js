import{_ as re}from"./ConfirmActionModal.13d479f4.js";import{_ as ue}from"./VModal.d53d6d9f.js";import{z as O,V as G,A as N,r as R,D as ce,B as de,p as me,o as f,f as k,w as l,j as r,q as n,E as o,t as S,v as E,m as pe,a3 as H,a1 as Z,a2 as J,P as _e,Z as fe,bP as ve,b as ge,e as W,bw as he,i as x,l as C,G as be,bT as Ve}from"./index.7d56daf3.js";import{f as $e,a as ye,u as we,c as Ce,b as ke,r as Ne}from"./index.78629f73.js";import{_ as Se,a as Ie}from"./VFlexTable.1438e9d1.js";import{_ as ze}from"./VFlexPagination.6accec6d.js";import{u as Ae,_ as Le}from"./VPlaceholderSection.5c15bef1.js";import{_ as Be,a as Fe}from"./TableActionsBlock.3b4fe815.js";import{u as Me}from"./viewWrapper.780c4a53.js";import"./VButtons.2dc19305.js";const Te=["onSubmit"],De={class:"columns is-multiline"},Ue={class:"column is-12"},xe={class:"help has-text-danger"},Re={class:"column is-12"},Ee={class:"help has-text-danger"},Oe=O({props:{modelValue:Boolean,departmentId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(L,{emit:v}){const m=L,{t:c}=G(),b=N(c("Add")),_=N(!1),I=N([]),z=R({"name.uz":[],"name.en":[],"name.ru":[],stages:[]}),e=R({name:{uz:"",ru:"",en:""},stages:[]});ce(()=>m.departmentId,async s=>{if(s){b.value=c("Edit");const i=await $e(Number(m.departmentId));Object.assign(e,i),Object.assign(e.stages,i.stages.map(({id:h})=>h))}},{deep:!0,immediate:!0}),de(async()=>{const s=await ye();I.value=s});async function A(s){try{_.value=!0,m.departmentId?await we(m.departmentId,e):await Ce(e),v("update:list"),u()}catch(i){Object.assign(z,i.response?.data?.errors)}finally{_.value=!1}}function u(){b.value=c("Add"),B(),g(),v("update:modelValue",!1)}function B(){Object.assign(e,{name:{uz:"",ru:"",en:""},stages:[]})}function g(){Object.assign(z,{"name.uz":[],"name.en":[],"name.ru":[],stages:[]})}return(s,i)=>{const h=H,V=Z,$=J,T=me("Multiselect"),F=_e,D=ue;return f(),k(D,{open:L.modelValue,size:"large",actions:"right",title:b.value,onClose:i[4]||(i[4]=d=>u())},{content:l(()=>[r("form",{id:"department-form",class:"modal-form",onSubmit:E(A,["prevent"])},[r("div",De,[r("div",Ue,[n($,{label:s.$t("Name_uz"),required:""},{default:l(()=>[n(V,null,{default:l(()=>[n(h,{name:"name_uz",placeholder:s.$t("Type_name_uz"),modelValue:o(e).name.uz,"onUpdate:modelValue":i[0]||(i[0]=d=>o(e).name.uz=d)},null,8,["placeholder","modelValue"]),r("p",xe,S(o(z)["name.uz"][0]),1)]),_:1})]),_:1},8,["label"]),n($,{label:s.$t("Name_ru")},{default:l(()=>[n(V,null,{default:l(()=>[n(h,{name:"name_ru",placeholder:s.$t("Type_name_ru"),modelValue:o(e).name.ru,"onUpdate:modelValue":i[1]||(i[1]=d=>o(e).name.ru=d)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"]),n($,{label:s.$t("Name_en")},{default:l(()=>[n(V,null,{default:l(()=>[n(h,{name:"name_en",placeholder:s.$t("Type_name_en"),modelValue:o(e).name.en,"onUpdate:modelValue":i[2]||(i[2]=d=>o(e).name.en=d)},null,8,["placeholder","modelValue"])]),_:1})]),_:1},8,["label"])]),r("div",Re,[n($,{label:s.$t("Stages"),required:""},{default:l(()=>[n(V,null,{default:l(()=>[n(T,{modelValue:o(e).stages,"onUpdate:modelValue":i[3]||(i[3]=d=>o(e).stages=d),searchable:!1,options:I.value,placeholder:s.$t("Select_stages"),valueProp:"id",label:"name",mode:"tags","close-on-select":!1},null,8,["modelValue","options","placeholder"]),r("p",Ee,S(o(z).stages[0]),1)]),_:1})]),_:1},8,["label"])])])],40,Te)]),action:l(({close:d})=>[n(F,{loading:_.value,color:"primary",outlined:"",type:"submit",form:"department-form",disabled:_.value},{default:l(()=>[pe(S(s.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),je=["onClick"],Pe=r("div",{class:"icon"},[r("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:edit"})],-1),qe={class:"meta"},We=r("hr",{class:"dropdown-divider"},null,-1),Ge=["onClick"],He=r("div",{class:"icon"},[r("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:trash"})],-1),Ze={class:"meta"},Je=O({emits:["edit","remove"],setup(L,{emit:v}){return(m,c)=>{const b=fe;return f(),k(b,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:l(({close:_})=>[r("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:E(()=>{v("edit"),_()},["prevent"])},[Pe,r("div",qe,[r("span",null,S(m.$t("Edit")),1)])],8,je),We,r("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:E(()=>{v("remove"),_()},["prevent"])},[He,r("div",Ze,[r("span",null,S(m.$t("Remove")),1)])],8,Ge)]),_:1})}}}),Ke={class:"applicant-list-wrapper"},Qe=["textContent"],Xe={key:0,class:"flex-list-inner"},dt=O({async setup(L){let v,m;const{t:c,locale:b}=G();ve({title:c("Departments")+" - Nefrit"});const _=ge(),I=Ae();Me().setPageTitle(c("Departments_List"));const e=R({pagination:{current_page:1,per_page:10,total:10},result:[]}),A=N(!1),u=N([]),B=W(()=>e.result.length===u.value.length),g=N(),s=W({get:()=>e.pagination.current_page,set:async t=>{await M(t)}}),i=({order:t,a,b:y})=>t==="asc"?a.location.localeCompare(y.location):t==="desc"?y.location.localeCompare(a.location):0,h=({searchTerm:t,row:a})=>t?a.name.toLocaleLowerCase().includes(t.toLocaleLowerCase())||a.bio.toLocaleLowerCase().includes(t.toLocaleLowerCase()):!0,V={select:{label:"",cellClass:"is-flex-grow-0"},orderNumber:{format:(t,a,y)=>`${y+1}`,cellClass:"is-flex-grow-0"},name:{label:c("Name"),searchable:!0,sortable:!0,sort:i,filter:h},actions:{label:c("Actions"),align:"center"}};[v,m]=he(()=>M()),await v,m();function $(){B.value?u.value=[]:u.value=e.map(t=>t.id)}function T(t){u.value.includes(t.id)?u.value=u.value.filter(a=>a!==t.id):u.value=[...u.value,t.id]}function F(t){A.value=!0,g.value=t}function D(){u.value.length>0?I.$patch({confirmModalState:!0}):alert(c("No_row_selected"))}async function d(t){g.value=t,I.$patch({confirmModalState:!0})}async function K(){await Ne(g.value),await M(),j()}async function M(t=1){const a=await ke(t);Object.assign(e,a)}function j(){_.success(c("Success"))}return(t,a)=>{const y=Be,Q=H,X=Z,Y=J,ee=Fe,P=Ve,te=Le,ae=Je,ne=Se,oe=ze,le=Ie,se=Oe,ie=re;return f(),x("div",Ke,[n(y,{center:"",title:"",onAdd:a[0]||(a[0]=w=>F(null)),"filter-disabled":!0,onRemove:D}),n(le,{columns:o(V),data:o(e).result,limit:o(e).pagination.per_page,total:o(e).pagination.total},{default:l(w=>[n(ee,null,{left:l(()=>[n(Y,null,{default:l(()=>[n(X,{icon:"feather:search"},{default:l(()=>[n(Q,{modelValue:w.searchInput,"onUpdate:modelValue":p=>w.searchInput=p,class:"is-rounded",placeholder:o(c)("Search")+"..."},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1024)]),_:2},1024)]),_:2},1024),n(ne,{rounded:""},{"header-column":l(({column:p})=>[p.key==="select"?(f(),k(P,{key:0,class:"ml-2 mr-3",checked:o(B),name:"all_selected",color:"primary",onClick:$},null,8,["checked"])):C("",!0),p.key==="orderNumber"?(f(),x("span",{key:1,class:"is-flex-grow-0",textContent:S("#")},null,8,Qe)):C("",!0)]),body:l(()=>[o(e).result.length===0?(f(),x("div",Xe,[n(te,{title:t.$t("No_data"),subtitle:t.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):C("",!0)]),"body-cell":l(({row:p,column:q,value:Ye,index:et})=>[q.key==="select"?(f(),k(P,{key:0,modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=U=>u.value=U),value:p.id,name:"selection",onChange:T},null,8,["modelValue","value"])):C("",!0),q.key==="actions"?(f(),k(ae,{key:1,onEdit:U=>F(p.id),onRemove:U=>d(p.id)},null,8,["onEdit","onRemove"])):C("",!0)]),_:1}),o(e).result.length?(f(),k(oe,{key:0,"current-page":o(s),"onUpdate:current-page":a[2]||(a[2]=p=>be(s)?s.value=p:null),class:"mt-6","item-per-page":o(e).pagination.per_page,"total-items":o(e).pagination.total},null,8,["current-page","item-per-page","total-items"])):C("",!0)]),_:1},8,["columns","data","limit","total"]),n(se,{modelValue:A.value,"onUpdate:modelValue":a[3]||(a[3]=w=>A.value=w),"department-id":g.value,"onUpdate:list":a[4]||(a[4]=()=>{M(),j(),g.value=void 0}),onClose:a[5]||(a[5]=w=>g.value=void 0)},null,8,["modelValue","department-id"]),n(ie,{onConfirmAction:K})])}}});export{dt as default};
