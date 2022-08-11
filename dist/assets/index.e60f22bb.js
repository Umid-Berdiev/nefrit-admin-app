import{_ as se}from"./VModal.d53d6d9f.js";import{af as ke,z as j,V as Q,A as $,r as Z,o as u,f as E,w as t,j as n,q as e,t as r,E as l,v as P,m as R,a3 as X,a1 as K,a2 as G,P as ee,e as W,B as ie,i as k,l as I,G as te,s as re,F as ae,bS as oe,M as Ce,D as xe,N as ne,Z as Fe,bP as Ue,Y as Se,bw as Ie,W as Ee,bN as Be}from"./index.7d56daf3.js";import{_ as Ne}from"./ConfirmActionModal.13d479f4.js";import{_ as de,a as ue}from"./VOption.0af6a49b.js";import{f as Re}from"./index.cf535fdf.js";import{d as De}from"./index.78629f73.js";import{_ as Ae}from"./VAvatar.fc09b784.js";import{_ as Pe}from"./VIconButton.4753ee4d.js";import{_ as Te}from"./VFilePond.12728c25.js";import{b as qe,_ as Oe,a as Me}from"./VFlexTable.1438e9d1.js";import{_ as je}from"./VFlexPagination.6accec6d.js";import{_ as Le}from"./StatusTag.8024c057.js";import{u as ze,_ as We}from"./VPlaceholderSection.5c15bef1.js";import{_ as Ke,a as Ge}from"./TableActionsBlock.3b4fe815.js";import{_ as He}from"./VCard.29b85d02.js";import{_ as Ye}from"./VFlexItem.f3c00865.js";import{_ as Ze}from"./CountrySelect.4f7de03b.js";import{u as Je}from"./viewWrapper.780c4a53.js";import"./via-placeholder.9af8280d.js";import"./VTag.b5945bcc.js";import"./VButtons.2dc19305.js";const L=ke();async function Qe(d){try{const{data:s}=await L({url:`/api/admin/employee?page=${d}`});return s.data}catch(s){throw s}}async function Xe(d){try{const{data:s}=await L({url:`/api/admin/employee/${d}`});return s.data}catch(s){throw s}}async function et(d){try{const{data:s}=await L({url:"/api/admin/employee",method:"POST",data:d});return s.data}catch(s){throw s}}async function tt(d,s){try{const{data:p}=await L({url:`/api/admin/employee/${d}`,method:"POST",data:s})}catch(p){throw p}}async function at(d,s){try{const{data:p}=await L({url:`/api/admin/employee/${d}/pass`,method:"PUT",data:s})}catch(p){throw p}}async function ot(d){try{const{data:s}=await L({url:`/api/admin/employee/${d}`,method:"DELETE"})}catch(s){throw s}}const lt=["onSubmit"],nt={class:"columns is-multiline"},st={class:"column is-6"},it={class:"help has-text-danger"},rt={class:"column is-6"},dt={class:"help has-text-danger"},ut=j({props:{modelValue:Boolean,employeeId:{type:Number,default:null}},emits:["update:modelValue"],setup(d,{emit:s}){const p=d,{t:c}=Q(),f=$(!1),m=$(c("Update_password")),C=$(""),v=$(""),a=Z({password:[],password_confirmation:[]});async function y(b){try{f.value=!0,await at(p.employeeId,{password:C.value,password_confirmation:v.value}),U()}catch(x){S(),Object.assign(a,x.response?.data?.errors)}finally{f.value=!1}}function U(){S(),h(),s("update:modelValue",!1)}function S(){Object.assign(a,{password:[],password_confirmation:[]})}function h(){C.value="",v.value=""}return(b,x)=>{const T=X,D=K,V=G,o=ee,z=se;return u(),E(z,{open:d.modelValue,size:"large",title:m.value,actions:"right",onClose:U},{content:t(()=>[n("form",{id:"employee-password-form",class:"modal-form",onSubmit:P(y,["prevent"])},[n("div",nt,[n("div",st,[e(V,{label:b.$t("Password"),required:""},{default:t(()=>[e(D,null,{default:t(()=>[e(T,{type:"password",modelValue:C.value,"onUpdate:modelValue":x[0]||(x[0]=A=>C.value=A)},null,8,["modelValue"]),n("p",it,r(l(a).password[0]),1)]),_:1})]),_:1},8,["label"])]),n("div",rt,[e(V,{label:b.$t("Confirm_password"),required:""},{default:t(()=>[e(D,null,{default:t(()=>[e(T,{type:"password",modelValue:v.value,"onUpdate:modelValue":x[1]||(x[1]=A=>v.value=A)},null,8,["modelValue"]),n("p",dt,r(l(a).password_confirmation[0]),1)]),_:1})]),_:1},8,["label"])])])],40,lt)]),action:t(({close:A})=>[e(o,{loading:f.value,type:"submit",color:"primary",outlined:"",form:"employee-password-form"},{default:t(()=>[R(r(b.$t("Save")),1)]),_:1},8,["loading"])]),_:1},8,["open","title"])}}}),mt={key:0,class:"has-text-danger"},pt=j({props:{modelValue:{default:null},isRequired:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(d,{emit:s}){const p=d,c=$([]),f=W({get:()=>p.modelValue,set:async m=>{s("update:modelValue",m)}});return ie(async()=>{const m=await Re();c.value=m}),(m,C)=>{const v=oe,a=de,y=ue,U=K,S=G;return u(),E(S,null,{default:t(()=>[e(v,null,{default:t(()=>[R(r(m.$t("Roles"))+" ",1),d.isRequired?(u(),k("span",mt,"*")):I("",!0)]),_:1}),e(U,null,{default:t(()=>[e(y,{modelValue:l(f),"onUpdate:modelValue":C[0]||(C[0]=h=>te(f)?f.value=h:null)},{default:t(()=>[e(a,{disabled:"",hidden:"",value:""},{default:t(()=>[R(r(m.$t("Select"))+"...",1)]),_:1}),(u(!0),k(ae,null,re(c.value,h=>(u(),E(a,{key:h.id,value:h.id,textContent:r(h.name)},null,8,["value","textContent"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),ct={key:0,class:"has-text-danger"},_t=j({props:{modelValue:{default:null},isRequired:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(d,{emit:s}){const p=d,c=$([]),f=W({get:()=>p.modelValue,set:async m=>{s("update:modelValue",m)}});return ie(async()=>{const m=await De();c.value=m}),(m,C)=>{const v=oe,a=de,y=ue,U=K,S=G;return u(),E(S,null,{default:t(()=>[e(v,null,{default:t(()=>[R(r(m.$t("Department"))+" ",1),d.isRequired?(u(),k("span",ct,"*")):I("",!0)]),_:1}),e(U,null,{default:t(()=>[e(y,{modelValue:l(f),"onUpdate:modelValue":C[0]||(C[0]=h=>te(f)?f.value=h:null)},{default:t(()=>[e(a,{disabled:"",hidden:"",value:""},{default:t(()=>[R(r(m.$t("Select"))+"...",1)]),_:1}),(u(!0),k(ae,null,re(c.value,h=>(u(),E(a,{key:h.id,value:h.id,textContent:r(h.name)},null,8,["value","textContent"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}});const ft=["onSubmit"],vt={class:"columns is-multiline"},yt={class:"column is-12 has-text-centered fieldset"},Vt=["src"],ht={class:"help has-text-danger"},gt={class:"column is-6"},wt={class:"help has-text-danger"},$t={class:"column is-6"},bt={class:"help has-text-danger"},kt={class:"column is-6"},Ct={class:"help has-text-danger"},xt={class:"column is-6"},Ft={class:"help has-text-danger"},Ut={key:0,class:"column is-6"},St={class:"help has-text-danger"},It={key:1,class:"column is-6"},Et={class:"help has-text-danger"},Bt={class:"column is-6"},Nt={class:"help has-text-danger"},Rt={class:"column is-6"},Dt={class:"help has-text-danger"},At=j({props:{modelValue:Boolean,employeeId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(d,{emit:s}){const p=d,{t:c}=Q(),f=$(!1),m=$(!1),C=$(c("Add")),v=$(),a=Z({avatar:"",username:"",email:"",firstname:"",lastname:"",password:"",password_confirmation:"",department_id:null,role_id:null}),y=Z({avatar:[],username:[],email:[],firstname:[],lastname:[],password:[],password_confirmation:[],department_id:[],role_id:[]}),U=W(()=>a.avatar||"/images/avatars/svg/vuero-1.svg");xe(()=>p.employeeId,async V=>{if(!V)Object.assign(a,{});else{const o=await Xe(Number(p.employeeId));Object.assign(a,o)}},{deep:!0,immediate:!0});async function S(V){try{m.value=!0;const o=new FormData;o.append("avatar",v.value||""),o.append("username",a.username),o.append("email",a.email),o.append("firstname",a.firstname),o.append("lastname",a.lastname),o.append("password",a.password),o.append("password_confirmation",a.password_confirmation),o.append("department_id",a.department_id),o.append("role_id",a.role_id),p.employeeId?await tt(p.employeeId,o):await et(o),s("update:list"),x()}catch(o){Object.assign(y,o.response?.data?.errors)}finally{m.value=!1}}const h=V=>{v.value=V.target.files[0]},b=(V,o)=>{if(V){console.error(V);return}a.avatar=void 0};function x(){T(),D(),s("update:modelValue",!1)}function T(){Object.assign(y,{avatar:[],username:[],email:[],firstname:[],lastname:[],password:[],password_confirmation:[],department_id:[],role_id:[]})}function D(){Object.assign(a,{avatar:"",username:"",email:"",firstname:"",lastname:"",password:"",password_confirmation:"",department_id:null,role_id:null})}return(V,o)=>{const z=Te,A=Pe,w=Ae,i=X,B=K,N=G,q=_t,O=pt,M=ee,J=se;return u(),E(J,{open:d.modelValue,size:"large",title:C.value,actions:"right",onClose:x},{content:t(()=>[n("form",{id:"employee-form",class:"modal-form",onSubmit:P(S,["prevent"])},[n("div",vt,[n("div",yt,[e(w,{size:"xl",class:"profile-v-avatar"},{avatar:t(()=>[f.value?(u(),E(z,{key:1,class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom",onChange:h,onRemovefile:b})):(u(),k("img",{key:0,class:"avatar",src:l(U),alt:"Employee avatar"},null,8,Vt)),f.value?(u(),E(A,{key:3,icon:"feather:arrow-left",class:"edit-button is-back",circle:"",tabindex:"0",onKeydown:o[2]||(o[2]=ne(P(_=>f.value=!1,["prevent"]),["space"])),onClick:o[3]||(o[3]=_=>f.value=!1)})):(u(),E(A,{key:2,icon:"feather:edit-2",class:"edit-button is-edit",circle:"",tabindex:"0",onKeydown:o[0]||(o[0]=ne(P(_=>f.value=!0,["prevent"]),["space"])),onClick:o[1]||(o[1]=_=>f.value=!0)}))]),_:1}),n("p",ht,r(l(y).avatar[0]),1)]),n("div",gt,[e(N,{label:V.$t("Username"),required:""},{default:t(()=>[e(B,null,{default:t(()=>[e(i,{type:"text",modelValue:l(a).username,"onUpdate:modelValue":o[4]||(o[4]=_=>l(a).username=_)},null,8,["modelValue"]),n("p",wt,r(l(y).username[0]),1)]),_:1})]),_:1},8,["label"])]),n("div",$t,[e(N,{label:V.$t("Email"),required:""},{default:t(()=>[e(B,null,{default:t(()=>[e(i,{type:"text",modelValue:l(a).email,"onUpdate:modelValue":o[5]||(o[5]=_=>l(a).email=_)},null,8,["modelValue"]),n("p",bt,r(l(y).email[0]),1)]),_:1})]),_:1},8,["label"])]),n("div",kt,[e(N,{label:V.$t("First_name"),required:""},{default:t(()=>[e(B,null,{default:t(()=>[e(i,{type:"text",modelValue:l(a).firstname,"onUpdate:modelValue":o[6]||(o[6]=_=>l(a).firstname=_)},null,8,["modelValue"]),n("p",Ct,r(l(y).firstname[0]),1)]),_:1})]),_:1},8,["label"])]),n("div",xt,[e(N,{label:V.$t("Last_name")},{default:t(()=>[e(B,null,{default:t(()=>[e(i,{type:"text",modelValue:l(a).lastname,"onUpdate:modelValue":o[7]||(o[7]=_=>l(a).lastname=_)},null,8,["modelValue"]),n("p",Ft,r(l(y).lastname[0]),1)]),_:1})]),_:1},8,["label"])]),d.employeeId?I("",!0):(u(),k("div",Ut,[e(N,{label:V.$t("Password"),required:""},{default:t(()=>[e(B,null,{default:t(()=>[e(i,{type:"password",modelValue:l(a).password,"onUpdate:modelValue":o[8]||(o[8]=_=>l(a).password=_)},null,8,["modelValue"]),n("p",St,r(l(y).password[0]),1)]),_:1})]),_:1},8,["label"])])),d.employeeId?I("",!0):(u(),k("div",It,[e(N,{label:V.$t("Confirm_password"),required:""},{default:t(()=>[e(B,null,{default:t(()=>[e(i,{type:"password",modelValue:l(a).password_confirmation,"onUpdate:modelValue":o[9]||(o[9]=_=>l(a).password_confirmation=_)},null,8,["modelValue"]),n("p",Et,r(l(y).password_confirmation[0]),1)]),_:1})]),_:1},8,["label"])])),n("div",Bt,[e(q,{modelValue:l(a).department_id,"onUpdate:modelValue":o[10]||(o[10]=_=>l(a).department_id=_),"is-required":""},null,8,["modelValue"]),n("p",Nt,r(l(y).department_id[0]),1)]),n("div",Rt,[e(O,{modelValue:l(a).role_id,"onUpdate:modelValue":o[11]||(o[11]=_=>l(a).role_id=_),"is-required":""},null,8,["modelValue"]),n("p",Dt,r(l(y).role_id[0]),1)])])],40,ft)]),action:t(({close:_})=>[e(M,{loading:m.value,type:"submit",color:"primary",outlined:"",form:"employee-form"},{default:t(()=>[R(r(V.$t("Save")),1)]),_:1},8,["loading"])]),_:1},8,["open","title"])}}}),Pt=Ce(At,[["__scopeId","data-v-75b806ec"]]),Tt=["onClick"],qt=n("div",{class:"icon"},[n("i",{"aria-hidden":"true",class:"lnil lnil-pencil"})],-1),Ot={class:"meta"},Mt=["onClick"],jt=n("div",{class:"icon"},[n("i",{class:"lnir lnir-key","aria-hidden":"true"})],-1),Lt={class:"meta"},zt=n("hr",{class:"dropdown-divider"},null,-1),Wt=["onClick"],Kt=n("div",{class:"icon"},[n("i",{class:"lnir lnir-trash","aria-hidden":"true"})],-1),Gt={class:"meta"},Ht=j({emits:["edit","update:password","remove"],setup(d,{emit:s}){return(p,c)=>{const f=Fe;return u(),E(f,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:t(({close:m})=>[n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:P(()=>{s("edit"),m()},["prevent"])},[qt,n("div",Ot,[n("span",null,r(p.$t("Edit")),1)])],8,Tt),n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:P(()=>{s("update:password"),m()},["prevent"])},[jt,n("div",Lt,[n("span",null,r(p.$t("Change_password")),1)])],8,Mt),zt,n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:P(()=>{s("remove"),m()},["prevent"])},[Kt,n("div",Gt,[n("span",null,r(p.$t("Remove")),1)])],8,Wt)]),_:1})}}}),Yt={class:"applicant-list-wrapper"},Zt={class:"mb-5"},Jt={class:"title is-5 mb-2"},Qt={class:"columns is-desktop"},Xt=["textContent"],ea={key:0,class:"flex-list-inner"},ta={key:0,class:"is-capitalized"},aa={key:1,class:"is-capitalized"},oa={key:2},xa=j({async setup(d){let s,p;const{t:c,locale:f}=Q();Ue({title:c("Employees")+" - Nefrit"});const m=ze();Je().setPageTitle(c("Employees_List"));const v=Z({pagination:{current_page:1,per_page:10,total:10},result:[]}),a=$({applicantUser:"Abdullaev Baxrom"}),y=$(!1),U=$(!1),S=$(!1),h=$([]);W(()=>v.result.length===h.value.length),Se();const b=$(),x=W({get:()=>v.pagination.current_page,set:async w=>{await D(w)}}),T={orderNumber:{format:(w,i,B)=>`${B+1}`,cellClass:"is-flex-grow-0"},name:{label:c("Employee_name"),searchable:!0},department:{label:c("Department"),grow:!0,searchable:!0},role:{label:c("Role"),searchable:!0},actions:{label:c("Actions"),align:"center"}};[s,p]=Ie(()=>D()),await s,p();async function D(w=1){const i=await Qe(w);Object.assign(v,i)}function V(w){b.value=w,y.value=!0}async function o(w){b.value=w,m.$patch({confirmModalState:!0})}async function z(){await ot(b.value),D()}async function A(w){console.log({id:w}),b.value=w,U.value=!0}return(w,i)=>{const B=Ke,N=oe,q=X,O=K,M=G,J=Ze,_=ee,me=Ye,pe=qe,ce=He,_e=Ge,fe=We,ve=Le,ye=Ht,Ve=Oe,he=je,ge=Me,we=Pt,$e=Ne,be=ut;return u(),k("div",Yt,[e(B,{center:"",title:"","remove-disabled":!0,onAdd:i[0]||(i[0]=g=>V(null)),onFilter:i[1]||(i[1]=g=>S.value=!S.value)}),Ee(n("div",Zt,[e(ce,{radius:"small"},{default:t(()=>[n("h3",Jt,r(l(c)("Filter_form")),1),n("div",Qt,[e(M,{class:"column"},{default:t(()=>[e(N,null,{default:t(()=>[R(r(l(c)("Boss_name")),1)]),_:1}),e(O,null,{default:t(()=>[e(q,{modelValue:a.value.applicantBossName,"onUpdate:modelValue":i[2]||(i[2]=g=>a.value.applicantBossName=g),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),e(M,{class:"column"},{default:t(()=>[e(N,null,{default:t(()=>[R(r(l(c)("Applicant_name")),1)]),_:1}),e(O,null,{default:t(()=>[e(q,{modelValue:a.value.applicantName,"onUpdate:modelValue":i[3]||(i[3]=g=>a.value.applicantName=g),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),e(M,{class:"column"},{default:t(()=>[e(N,null,{default:t(()=>[R(r(l(c)("Status")),1)]),_:1}),e(O,null,{default:t(()=>[e(q,{modelValue:a.value.applicantStatus,"onUpdate:modelValue":i[4]||(i[4]=g=>a.value.applicantStatus=g),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),e(J,{modelValue:a.value.applicantsCountry,"onUpdate:modelValue":i[5]||(i[5]=g=>a.value.applicantsCountry=g),class:"column"},null,8,["modelValue"])]),e(pe,null,{default:t(()=>[e(me,{class:"ml-auto"},{default:t(()=>[e(_,{outlined:"",color:"warning",icon:"feather:filter"},{default:t(()=>[R(r(l(c)("Filter")),1)]),_:1})]),_:1})]),_:1})]),_:1})],512),[[Be,S.value]]),e(ge,{columns:l(T),data:l(v).result,limit:l(v).pagination.per_page,total:l(v).pagination.total},{default:t(g=>[e(_e,null,{left:t(()=>[e(M,null,{default:t(()=>[e(O,{icon:"feather:search"},{default:t(()=>[e(q,{modelValue:g.searchInput,"onUpdate:modelValue":F=>g.searchInput=F,class:"is-rounded",placeholder:l(c)("Search")+"..."},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(Ve,{rounded:""},{"header-column":t(({column:F})=>[F.key==="orderNumber"?(u(),k("span",{key:0,class:"is-flex-grow-0",textContent:r("#")},null,8,Xt)):I("",!0)]),body:t(()=>[l(v).result.length===0?(u(),k("div",ea,[e(fe,{title:w.$t("No_data"),subtitle:w.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):I("",!0)]),"body-cell":t(({row:F,column:H,value:Y,index:la})=>[H.key==="status"&&Y?(u(),E(ve,{key:0,status:Y},null,8,["status"])):I("",!0),H.key==="name"?(u(),k(ae,{key:1},[F.firstname?(u(),k("span",ta,r(F.firstname)+"\xA0",1)):I("",!0),F.lastname?(u(),k("span",aa,r(F.lastname),1)):I("",!0)],64)):I("",!0),H.key==="role"&&Y?(u(),k("span",oa,r(Y.name),1)):I("",!0),H.key==="actions"?(u(),E(ye,{key:3,onEdit:le=>V(F.id),"onUpdate:password":le=>A(F.id),onRemove:le=>o(F.id)},null,8,["onEdit","onUpdate:password","onRemove"])):I("",!0)]),_:1}),e(he,{"current-page":l(x),"onUpdate:current-page":i[6]||(i[6]=F=>te(x)?x.value=F:null),class:"mt-6","item-per-page":l(v).pagination.per_page,"total-items":l(v).pagination.total},null,8,["current-page","item-per-page","total-items"])]),_:1},8,["columns","data","limit","total"]),e(we,{modelValue:y.value,"onUpdate:modelValue":i[7]||(i[7]=g=>y.value=g),"employee-id":Number(b.value),"onUpdate:list":i[8]||(i[8]=()=>{D(),b.value=null}),onClose:i[9]||(i[9]=g=>b.value=null)},null,8,["modelValue","employee-id"]),e($e,{onConfirmAction:z}),e(be,{modelValue:U.value,"onUpdate:modelValue":i[10]||(i[10]=g=>U.value=g),"employee-id":Number(b.value)},null,8,["modelValue","employee-id"])])}}});export{xa as default};
