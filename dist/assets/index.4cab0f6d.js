import{_ as se,u as ke}from"./VModal.vue_vue_type_style_index_0_lang.59ac8feb.js";import{af as xe,z as j,N as X,A as $,r as J,o as u,f as E,w as t,j as n,q as e,t as r,E as l,v as T,m as N,a3 as Z,a1 as K,a2 as G,P as ee,e as W,B as ie,i as k,l as I,G as te,s as re,F as ae,bU as oe,D as Ce,U as ne,R as Ue,O as Fe,$ as Se,bx as Ie,Y as Ee,bO as Be}from"./index.9d6b139f.js";import{_ as Re}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang.a7914451.js";import{_ as de,a as ue}from"./VOption.vue_vue_type_style_index_0_lang.1a71d4e2.js";import{f as Ne}from"./index.1abb5c1b.js";import{d as De}from"./index.246f0dbf.js";import{_ as Ae}from"./VAvatar.vue_vue_type_style_index_0_lang.a1d9d6fe.js";import{_ as Oe}from"./VIconButton.vue_vue_type_script_lang.77cd00ee.js";import{_ as Te}from"./VFilePond.vue_vue_type_script_lang.2c4d2172.js";import{_ as qe,a as Pe}from"./VFlexTable.vue_vue_type_style_index_0_lang.a1fa270c.js";import{_ as Me}from"./VFlexPagination.b2c12be9.js";import{_ as je}from"./VDropdown.vue_vue_type_style_index_0_lang.b210cf3e.js";import{_ as Le}from"./StatusTag.vue_vue_type_script_setup_true_lang.b6a457fa.js";import{_ as ze}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.4771f6de.js";import{_ as We}from"./VFlexTableToolbar.43859773.js";import{_ as Ke}from"./VCard.vue_vue_type_script_setup_true_lang.57c0c4cc.js";import{_ as Ge}from"./VFlex.vue_vue_type_style_index_0_lang.c00db461.js";import{_ as He}from"./VFlexItem.vue_vue_type_style_index_0_lang.f670399a.js";import{_ as Ye}from"./CountrySelect.vue_vue_type_script_setup_true_lang.d5fb1a0b.js";import{_ as Je}from"./TableActionsBlock.vue_vue_type_style_index_0_lang.267809a9.js";import{u as Qe}from"./viewWrapper.8bdd3f7c.js";import"./via-placeholder.9af8280d.js";import"./VIcon.vue_vue_type_script_setup_true_lang.647f7f20.js";import"./VTag.vue_vue_type_style_index_0_lang.56d3d366.js";import"./lodash.a29c321e.js";import"./VButtons.vue_vue_type_script_setup_true_lang.a6a904b8.js";const L=xe();async function Xe(d){try{const{data:s}=await L({url:`/api/admin/employee?page=${d}`});return s.data}catch(s){throw s}}async function Ze(d){try{const{data:s}=await L({url:`/api/admin/employee/${d}`});return s.data}catch(s){throw s}}async function et(d){try{const{data:s}=await L({url:"/api/admin/employee",method:"POST",data:d});return s.data}catch(s){throw s}}async function tt(d,s){try{const{data:p}=await L({url:`/api/admin/employee/${d}`,method:"POST",data:s})}catch(p){throw p}}async function at(d,s){try{const{data:p}=await L({url:`/api/admin/employee/${d}/pass`,method:"PUT",data:s})}catch(p){throw p}}async function ot(d){try{const{data:s}=await L({url:`/api/admin/employee/${d}`,method:"DELETE"})}catch(s){throw s}}const lt=["onSubmit"],nt={class:"columns is-multiline"},st={class:"column is-6"},it={class:"help has-text-danger"},rt={class:"column is-6"},dt={class:"help has-text-danger"},ut=j({props:{modelValue:Boolean,employeeId:{type:Number,default:null}},emits:["update:modelValue"],setup(d,{emit:s}){const p=d,{t:c}=X(),v=$(!1),m=$(c("Update_password")),x=$(""),_=$(""),a=J({password:[],password_confirmation:[]});async function f(b){try{v.value=!0,await at(p.employeeId,{password:x.value,password_confirmation:_.value}),F()}catch(C){S(),Object.assign(a,C.response?.data?.errors)}finally{v.value=!1}}function F(){S(),h(),s("update:modelValue",!1)}function S(){Object.assign(a,{password:[],password_confirmation:[]})}function h(){x.value="",_.value=""}return(b,C)=>{const O=Z,D=K,V=G,o=ee,z=se;return u(),E(z,{open:d.modelValue,size:"large",title:m.value,actions:"right",onClose:F},{content:t(()=>[n("form",{id:"employee-password-form",class:"modal-form",onSubmit:T(f,["prevent"])},[n("div",nt,[n("div",st,[e(V,{label:b.$t("Password"),required:""},{default:t(()=>[e(D,null,{default:t(()=>[e(O,{type:"password",modelValue:x.value,"onUpdate:modelValue":C[0]||(C[0]=A=>x.value=A)},null,8,["modelValue"]),n("p",it,r(l(a).password[0]),1)]),_:1})]),_:1},8,["label"])]),n("div",rt,[e(V,{label:b.$t("Confirm_password"),required:""},{default:t(()=>[e(D,null,{default:t(()=>[e(O,{type:"password",modelValue:_.value,"onUpdate:modelValue":C[1]||(C[1]=A=>_.value=A)},null,8,["modelValue"]),n("p",dt,r(l(a).password_confirmation[0]),1)]),_:1})]),_:1},8,["label"])])])],40,lt)]),action:t(({close:A})=>[e(o,{loading:v.value,type:"submit",color:"primary",outlined:"",form:"employee-password-form"},{default:t(()=>[N(r(b.$t("Save")),1)]),_:1},8,["loading"])]),_:1},8,["open","title"])}}}),mt={key:0,class:"has-text-danger"},pt=j({props:{modelValue:{default:null},isRequired:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(d,{emit:s}){const p=d,c=$([]),v=W({get:()=>p.modelValue,set:async m=>{s("update:modelValue",m)}});return ie(async()=>{const m=await Ne();c.value=m}),(m,x)=>{const _=oe,a=de,f=ue,F=K,S=G;return u(),E(S,null,{default:t(()=>[e(_,null,{default:t(()=>[N(r(m.$t("Roles"))+" ",1),d.isRequired?(u(),k("span",mt,"*")):I("",!0)]),_:1}),e(F,null,{default:t(()=>[e(f,{modelValue:l(v),"onUpdate:modelValue":x[0]||(x[0]=h=>te(v)?v.value=h:null)},{default:t(()=>[e(a,{disabled:"",hidden:"",value:""},{default:t(()=>[N(r(m.$t("Select"))+"...",1)]),_:1}),(u(!0),k(ae,null,re(c.value,h=>(u(),E(a,{key:h.id,value:h.id,textContent:r(h.name)},null,8,["value","textContent"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),ct={key:0,class:"has-text-danger"},_t=j({props:{modelValue:{default:null},isRequired:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(d,{emit:s}){const p=d,c=$([]),v=W({get:()=>p.modelValue,set:async m=>{s("update:modelValue",m)}});return ie(async()=>{const m=await De();c.value=m}),(m,x)=>{const _=oe,a=de,f=ue,F=K,S=G;return u(),E(S,null,{default:t(()=>[e(_,null,{default:t(()=>[N(r(m.$t("Department"))+" ",1),d.isRequired?(u(),k("span",ct,"*")):I("",!0)]),_:1}),e(F,null,{default:t(()=>[e(f,{modelValue:l(v),"onUpdate:modelValue":x[0]||(x[0]=h=>te(v)?v.value=h:null)},{default:t(()=>[e(a,{disabled:"",hidden:"",value:""},{default:t(()=>[N(r(m.$t("Select"))+"...",1)]),_:1}),(u(!0),k(ae,null,re(c.value,h=>(u(),E(a,{key:h.id,value:h.id,textContent:r(h.name)},null,8,["value","textContent"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),ft=["onSubmit"],vt={class:"columns is-multiline"},yt={class:"column is-12 has-text-centered fieldset"},Vt=["src"],ht={class:"help has-text-danger"},gt={class:"column is-6"},wt={class:"help has-text-danger"},$t={class:"column is-6"},bt={class:"help has-text-danger"},kt={class:"column is-6"},xt={class:"help has-text-danger"},Ct={class:"column is-6"},Ut={class:"help has-text-danger"},Ft={key:0,class:"column is-6"},St={class:"help has-text-danger"},It={key:1,class:"column is-6"},Et={class:"help has-text-danger"},Bt={class:"column is-6"},Rt={class:"help has-text-danger"},Nt={class:"column is-6"},Dt={class:"help has-text-danger"},At=j({props:{modelValue:Boolean,employeeId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(d,{emit:s}){const p=d,{t:c}=X(),v=$(!1),m=$(!1),x=$(c("Add")),_=$(),a=J({avatar:"",username:"",email:"",firstname:"",lastname:"",password:"",password_confirmation:"",department_id:null,role_id:null}),f=J({avatar:[],username:[],email:[],firstname:[],lastname:[],password:[],password_confirmation:[],department_id:[],role_id:[]}),F=W(()=>a.avatar||"/images/avatars/svg/vuero-1.svg");Ce(()=>p.employeeId,async V=>{if(!V)Object.assign(a,{});else{const o=await Ze(Number(p.employeeId));Object.assign(a,o)}},{deep:!0,immediate:!0});async function S(V){try{O(),m.value=!0;const o=new FormData;o.append("avatar",_.value||""),o.append("username",a.username),o.append("email",a.email),o.append("firstname",a.firstname),o.append("lastname",a.lastname),o.append("password",a.password),o.append("password_confirmation",a.password_confirmation),o.append("department_id",a.department_id),o.append("role_id",a.role_id),p.employeeId?await tt(p.employeeId,o):await et(o),s("update:list"),C()}catch(o){Object.assign(f,o.response?.data?.errors)}finally{m.value=!1}}const h=V=>{f.avatar?.length&&(f.avatar=[]),_.value=V.target.files[0]},b=(V,o)=>{if(V){console.error(V);return}_.value=void 0,a.avatar=""};function C(){O(),D(),_.value=void 0,v.value=!1,s("update:modelValue",!1)}function O(){Object.assign(f,{avatar:[],username:[],email:[],firstname:[],lastname:[],password:[],password_confirmation:[],department_id:[],role_id:[]})}function D(){Object.assign(a,{avatar:"",username:"",email:"",firstname:"",lastname:"",password:"",password_confirmation:"",department_id:null,role_id:null})}return(V,o)=>{const z=Te,A=Oe,w=Ae,i=Z,B=K,R=G,q=_t,P=pt,M=ee,Q=se;return u(),E(Q,{open:d.modelValue,size:"large",title:x.value,actions:"right",onClose:C},{content:t(()=>[n("form",{id:"employee-form",class:"modal-form",onSubmit:T(S,["prevent"])},[n("div",vt,[n("div",yt,[e(w,{size:"xl",class:"profile-v-avatar"},{avatar:t(()=>[v.value?(u(),E(z,{key:1,class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom",onChange:h,onRemovefile:b})):(u(),k("img",{key:0,class:"avatar",src:l(F),alt:"Employee avatar"},null,8,Vt)),v.value?(u(),E(A,{key:3,icon:"feather:arrow-left",class:"edit-button is-back",circle:"",tabindex:"0",onKeydown:o[2]||(o[2]=ne(T(y=>v.value=!1,["prevent"]),["space"])),onClick:o[3]||(o[3]=y=>v.value=!1)})):(u(),E(A,{key:2,icon:"feather:edit-2",class:"edit-button is-edit",circle:"",tabindex:"0",onKeydown:o[0]||(o[0]=ne(T(y=>v.value=!0,["prevent"]),["space"])),onClick:o[1]||(o[1]=y=>v.value=!0)}))]),_:1}),n("p",ht,r(l(f).avatar[0]),1)]),n("div",gt,[e(R,{label:V.$t("Username"),required:""},{default:t(()=>[e(B,null,{default:t(()=>[e(i,{type:"text",modelValue:l(a).username,"onUpdate:modelValue":o[4]||(o[4]=y=>l(a).username=y)},null,8,["modelValue"]),n("p",wt,r(l(f).username[0]),1)]),_:1})]),_:1},8,["label"])]),n("div",$t,[e(R,{label:V.$t("Email"),required:""},{default:t(()=>[e(B,null,{default:t(()=>[e(i,{type:"text",modelValue:l(a).email,"onUpdate:modelValue":o[5]||(o[5]=y=>l(a).email=y)},null,8,["modelValue"]),n("p",bt,r(l(f).email[0]),1)]),_:1})]),_:1},8,["label"])]),n("div",kt,[e(R,{label:V.$t("First_name"),required:""},{default:t(()=>[e(B,null,{default:t(()=>[e(i,{type:"text",modelValue:l(a).firstname,"onUpdate:modelValue":o[6]||(o[6]=y=>l(a).firstname=y)},null,8,["modelValue"]),n("p",xt,r(l(f).firstname[0]),1)]),_:1})]),_:1},8,["label"])]),n("div",Ct,[e(R,{label:V.$t("Last_name")},{default:t(()=>[e(B,null,{default:t(()=>[e(i,{type:"text",modelValue:l(a).lastname,"onUpdate:modelValue":o[7]||(o[7]=y=>l(a).lastname=y)},null,8,["modelValue"]),n("p",Ut,r(l(f).lastname[0]),1)]),_:1})]),_:1},8,["label"])]),d.employeeId?I("",!0):(u(),k("div",Ft,[e(R,{label:V.$t("Password"),required:""},{default:t(()=>[e(B,null,{default:t(()=>[e(i,{type:"password",modelValue:l(a).password,"onUpdate:modelValue":o[8]||(o[8]=y=>l(a).password=y)},null,8,["modelValue"]),n("p",St,r(l(f).password[0]),1)]),_:1})]),_:1},8,["label"])])),d.employeeId?I("",!0):(u(),k("div",It,[e(R,{label:V.$t("Confirm_password"),required:""},{default:t(()=>[e(B,null,{default:t(()=>[e(i,{type:"password",modelValue:l(a).password_confirmation,"onUpdate:modelValue":o[9]||(o[9]=y=>l(a).password_confirmation=y)},null,8,["modelValue"]),n("p",Et,r(l(f).password_confirmation[0]),1)]),_:1})]),_:1},8,["label"])])),n("div",Bt,[e(q,{modelValue:l(a).department_id,"onUpdate:modelValue":o[10]||(o[10]=y=>l(a).department_id=y),"is-required":""},null,8,["modelValue"]),n("p",Rt,r(l(f).department_id[0]),1)]),n("div",Nt,[e(P,{modelValue:l(a).role_id,"onUpdate:modelValue":o[11]||(o[11]=y=>l(a).role_id=y),"is-required":""},null,8,["modelValue"]),n("p",Dt,r(l(f).role_id[0]),1)])])],40,ft)]),action:t(({close:y})=>[e(M,{loading:m.value,type:"submit",color:"primary",outlined:"",form:"employee-form"},{default:t(()=>[N(r(V.$t("Save")),1)]),_:1},8,["loading"])]),_:1},8,["open","title"])}}});const Ot=Ue(At,[["__scopeId","data-v-3c82dea7"]]),Tt=["onClick"],qt=n("div",{class:"icon"},[n("i",{"aria-hidden":"true",class:"lnil lnil-pencil"})],-1),Pt={class:"meta"},Mt=["onClick"],jt=n("div",{class:"icon"},[n("i",{class:"lnir lnir-key","aria-hidden":"true"})],-1),Lt={class:"meta"},zt=n("hr",{class:"dropdown-divider"},null,-1),Wt=["onClick"],Kt=n("div",{class:"icon"},[n("i",{class:"lnir lnir-trash","aria-hidden":"true"})],-1),Gt={class:"meta"},Ht=j({emits:["edit","update:password","remove"],setup(d,{emit:s}){return(p,c)=>{const v=je;return u(),E(v,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:t(({close:m})=>[n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:T(()=>{s("edit"),m()},["prevent"])},[qt,n("div",Pt,[n("span",null,r(p.$t("Edit")),1)])],8,Tt),n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:T(()=>{s("update:password"),m()},["prevent"])},[jt,n("div",Lt,[n("span",null,r(p.$t("Change_password")),1)])],8,Mt),zt,n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:T(()=>{s("remove"),m()},["prevent"])},[Kt,n("div",Gt,[n("span",null,r(p.$t("Remove")),1)])],8,Wt)]),_:1})}}}),Yt={class:"applicant-list-wrapper"},Jt={class:"mb-5"},Qt={class:"title is-5 mb-2"},Xt={class:"columns is-desktop"},Zt={class:"column"},ea=["textContent"],ta={key:0,class:"flex-list-inner"},aa={key:0,class:"is-capitalized"},oa={key:1,class:"is-capitalized"},la={key:2},Ba=j({async setup(d){let s,p;const{t:c,locale:v}=X();Fe({title:c("Employees")+" - Nefrit"});const m=ke();Qe().setPageTitle(c("Employees_List"));const _=J({pagination:{current_page:1,per_page:10,total:10},result:[]}),a=$({applicantUser:"Abdullaev Baxrom"}),f=$(!1),F=$(!1),S=$(!1),h=$([]);W(()=>_.result.length===h.value.length),Se();const b=$(),C=W({get:()=>_.pagination.current_page,set:async w=>{await D(w)}}),O={orderNumber:{format:(w,i,B)=>`${B+1}`,cellClass:"is-flex-grow-0"},name:{label:c("Employee_name"),searchable:!0},department:{label:c("Department"),grow:!0,searchable:!0},role:{label:c("Role"),searchable:!0},actions:{label:c("Actions"),align:"center"}};[s,p]=Ie(()=>D()),await s,p();async function D(w=1){const i=await Xe(w);Object.assign(_,i)}function V(w){b.value=w,f.value=!0}async function o(w){b.value=w,m.$patch({confirmModalState:!0})}async function z(){await ot(b.value),D()}async function A(w){console.log({id:w}),b.value=w,F.value=!0}return(w,i)=>{const B=Je,R=oe,q=Z,P=K,M=G,Q=Ye,y=ee,me=He,pe=Ge,ce=Ke,_e=We,fe=ze,ve=Le,ye=Ht,Ve=qe,he=Me,ge=Pe,we=Ot,$e=Re,be=ut;return u(),k("div",Yt,[e(B,{center:"",title:"","remove-disabled":"","print-disabled":"",onAdd:i[0]||(i[0]=g=>V(null)),onFilter:i[1]||(i[1]=g=>S.value=!S.value)}),Ee(n("div",Jt,[e(ce,{radius:"small"},{default:t(()=>[n("h3",Qt,r(l(c)("Filter_form")),1),n("div",Xt,[e(M,{class:"column"},{default:t(()=>[e(R,null,{default:t(()=>[N(r(l(c)("Boss_name")),1)]),_:1}),e(P,null,{default:t(()=>[e(q,{modelValue:a.value.applicantBossName,"onUpdate:modelValue":i[2]||(i[2]=g=>a.value.applicantBossName=g),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),e(M,{class:"column"},{default:t(()=>[e(R,null,{default:t(()=>[N(r(l(c)("Applicant_name")),1)]),_:1}),e(P,null,{default:t(()=>[e(q,{modelValue:a.value.applicantName,"onUpdate:modelValue":i[3]||(i[3]=g=>a.value.applicantName=g),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),e(M,{class:"column"},{default:t(()=>[e(R,null,{default:t(()=>[N(r(l(c)("Status")),1)]),_:1}),e(P,null,{default:t(()=>[e(q,{modelValue:a.value.applicantStatus,"onUpdate:modelValue":i[4]||(i[4]=g=>a.value.applicantStatus=g),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),n("div",Zt,[e(Q,{modelValue:a.value.applicantsCountry,"onUpdate:modelValue":i[5]||(i[5]=g=>a.value.applicantsCountry=g)},null,8,["modelValue"])])]),e(pe,null,{default:t(()=>[e(me,{class:"ml-auto"},{default:t(()=>[e(y,{outlined:"",color:"warning",icon:"feather:filter"},{default:t(()=>[N(r(l(c)("Filter")),1)]),_:1})]),_:1})]),_:1})]),_:1})],512),[[Be,S.value]]),e(ge,{columns:l(O),data:l(_).result,limit:l(_).pagination.per_page,total:l(_).pagination.total},{default:t(g=>[e(_e,null,{left:t(()=>[e(M,null,{default:t(()=>[e(P,{icon:"feather:search"},{default:t(()=>[e(q,{modelValue:g.searchInput,"onUpdate:modelValue":U=>g.searchInput=U,class:"is-rounded",placeholder:l(c)("Search")+"..."},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(Ve,{rounded:""},{"header-column":t(({column:U})=>[U.key==="orderNumber"?(u(),k("span",{key:0,class:"is-flex-grow-0",textContent:r("#")},null,8,ea)):I("",!0)]),body:t(()=>[l(_).result.length===0?(u(),k("div",ta,[e(fe,{title:w.$t("No_data"),subtitle:w.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):I("",!0)]),"body-cell":t(({row:U,column:H,value:Y,index:na})=>[H.key==="status"&&Y?(u(),E(ve,{key:0,status:Y},null,8,["status"])):I("",!0),H.key==="name"?(u(),k(ae,{key:1},[U.firstname?(u(),k("span",aa,r(U.firstname)+"\xA0",1)):I("",!0),U.lastname?(u(),k("span",oa,r(U.lastname),1)):I("",!0)],64)):I("",!0),H.key==="role"&&Y?(u(),k("span",la,r(Y.name),1)):I("",!0),H.key==="actions"?(u(),E(ye,{key:3,onEdit:le=>V(U.id),"onUpdate:password":le=>A(U.id),onRemove:le=>o(U.id)},null,8,["onEdit","onUpdate:password","onRemove"])):I("",!0)]),_:1}),e(he,{"current-page":l(C),"onUpdate:current-page":i[6]||(i[6]=U=>te(C)?C.value=U:null),class:"mt-6","item-per-page":l(_).pagination.per_page,"total-items":l(_).pagination.total},null,8,["current-page","item-per-page","total-items"])]),_:1},8,["columns","data","limit","total"]),e(we,{modelValue:f.value,"onUpdate:modelValue":i[7]||(i[7]=g=>f.value=g),"employee-id":Number(b.value),"onUpdate:list":i[8]||(i[8]=()=>{D(),b.value=null}),onClose:i[9]||(i[9]=g=>b.value=null)},null,8,["modelValue","employee-id"]),e($e,{onConfirmAction:z}),e(be,{modelValue:F.value,"onUpdate:modelValue":i[10]||(i[10]=g=>F.value=g),"employee-id":Number(b.value)},null,8,["modelValue","employee-id"])])}}});export{Ba as default};