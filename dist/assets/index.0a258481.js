import{_ as oe}from"./VModal.vue_vue_type_style_index_0_lang.bc609875.js";import{af as ue,z as O,V as Y,A as b,r as L,o as d,f as S,w as s,j as o,q as t,t as r,E as n,v as P,m as N,a3 as ne,a1 as z,a2 as W,P as se,e as K,B as le,i as V,l as x,G as Z,s as ie,F as ee,bS as re,D as pe,N as ae,M as ce,bP as _e,bu as fe}from"./index.47e107ef.js";import{_ as ve}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang.3597d534.js";import{_ as de,a as me}from"./VOption.vue_vue_type_style_index_0_lang.f4a20f33.js";import{f as ye}from"./index.9be0d9df.js";import{d as he}from"./index.7e963141.js";import{_ as ge}from"./VAvatar.vue_vue_type_style_index_0_lang.25ceb1a3.js";import{_ as we}from"./VIconButton.vue_vue_type_script_lang.436b8e7b.js";import{_ as Ve}from"./VFilePond.vue_vue_type_script_lang.2a9eab5d.js";import{_ as $e,a as be}from"./VFlexTable.vue_vue_type_style_index_0_lang.c051e93d.js";import{_ as ke}from"./VFlexPagination.65c84f8f.js";import{_ as Ce}from"./VDropdown.vue_vue_type_style_index_0_lang.f613d0d7.js";import{_ as xe}from"./StatusTag.vue_vue_type_script_setup_true_lang.65f1d61d.js";import{_ as Se}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.bf0704b9.js";import{_ as Ee}from"./TableActionsBlock.vue_vue_type_style_index_0_lang.6821dbde.js";import{u as Ue}from"./viewWrapper.45a25a95.js";import{u as Fe}from"./index.731bd9c9.js";import"./VFlex.vue_vue_type_style_index_0_lang.99038368.js";import"./VIcon.vue_vue_type_script_setup_true_lang.5076ccf0.js";import"./VTag.vue_vue_type_style_index_0_lang.4aa10b1e.js";import"./VButtons.vue_vue_type_script_setup_true_lang.218887f4.js";const T=ue();async function Ie(i){try{const{data:l}=await T({url:`/api/admin/employee?page=${i}`});return l.data}catch(l){throw l}}async function Re(i){try{const{data:l}=await T({url:`/api/admin/employee/${i}`});return l.data}catch(l){throw l}}async function Be(i){try{const{data:l}=await T({url:"/api/admin/employee",method:"POST",data:i});return l.data}catch(l){throw l}}async function De(i,l){try{const{data:u}=await T({url:`/api/admin/employee/${i}`,method:"POST",data:l})}catch(u){throw u}}async function Pe(i,l){try{const{data:u}=await T({url:`/api/admin/employee/${i}/password`,method:"PUT",data:l})}catch(u){throw u}}async function qe(i){try{const{data:l}=await T({url:`/api/admin/employee/${i}`,method:"DELETE"})}catch(l){throw l}}const Ae=["onSubmit"],Ne={class:"columns is-multiline"},Oe={class:"column is-6"},Te={class:"help has-text-danger"},Me={class:"column is-6"},je={class:"help has-text-danger"},Le=O({props:{modelValue:Boolean,employeeId:{type:Number,default:null}},emits:["update:modelValue"],setup(i,{emit:l}){const u=i,{t:h}=Y(),c=b(!1),m=b(h("Update_password")),$=b(""),_=b(""),a=L({password:[],password_confirmation:[]});async function p(E){try{c.value=!0,await Pe(u.employeeId,{password:$.value,password_confirmation:_.value}),g()}catch(C){k(),Object.assign(a,C.response?.data?.errors)}finally{c.value=!1}}function g(){k(),w(),l("update:modelValue",!1)}function k(){Object.assign(a,{password:[],password_confirmation:[]})}function w(){$.value="",_.value=""}return(E,C)=>{const D=ne,q=z,v=W,e=se,y=oe;return d(),S(y,{open:i.modelValue,size:"large",title:m.value,actions:"right",onClose:g},{content:s(()=>[o("form",{id:"employee-password-form",class:"modal-form",onSubmit:P(p,["prevent"])},[o("div",Ne,[o("div",Oe,[t(v,{label:E.$t("Password"),required:""},{default:s(()=>[t(q,null,{default:s(()=>[t(D,{type:"password",modelValue:$.value,"onUpdate:modelValue":C[0]||(C[0]=U=>$.value=U)},null,8,["modelValue"]),o("p",Te,r(n(a).password[0]),1)]),_:1})]),_:1},8,["label"])]),o("div",Me,[t(v,{label:E.$t("Confirm_password"),required:""},{default:s(()=>[t(q,null,{default:s(()=>[t(D,{type:"password",modelValue:_.value,"onUpdate:modelValue":C[1]||(C[1]=U=>_.value=U)},null,8,["modelValue"]),o("p",je,r(n(a).password_confirmation[0]),1)]),_:1})]),_:1},8,["label"])])])],40,Ae)]),action:s(({close:U})=>[t(e,{loading:c.value,type:"submit",color:"primary",outlined:"",form:"employee-password-form"},{default:s(()=>[N(r(E.$t("Save")),1)]),_:1},8,["loading"])]),_:1},8,["open","title"])}}}),ze={key:0,class:"has-text-danger"},We=O({props:{modelValue:{default:null},isRequired:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(i,{emit:l}){const u=i,h=b([]),c=K({get:()=>u.modelValue,set:async m=>{l("update:modelValue",m)}});return le(async()=>{const m=await ye();h.value=m}),(m,$)=>{const _=re,a=de,p=me,g=z,k=W;return d(),S(k,null,{default:s(()=>[t(_,null,{default:s(()=>[N(r(m.$t("Roles"))+" ",1),i.isRequired?(d(),V("span",ze,"*")):x("",!0)]),_:1}),t(g,null,{default:s(()=>[t(p,{modelValue:n(c),"onUpdate:modelValue":$[0]||($[0]=w=>Z(c)?c.value=w:null)},{default:s(()=>[t(a,{disabled:"",hidden:"",value:""},{default:s(()=>[N(r(m.$t("Select"))+"...",1)]),_:1}),(d(!0),V(ee,null,ie(h.value,w=>(d(),S(a,{key:w.id,value:w.id,textContent:r(w.name)},null,8,["value","textContent"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),Ke={key:0,class:"has-text-danger"},Ge=O({props:{modelValue:{default:null},isRequired:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(i,{emit:l}){const u=i,h=b([]),c=K({get:()=>u.modelValue,set:async m=>{l("update:modelValue",m)}});return le(async()=>{const m=await he();h.value=m}),(m,$)=>{const _=re,a=de,p=me,g=z,k=W;return d(),S(k,null,{default:s(()=>[t(_,null,{default:s(()=>[N(r(m.$t("Department"))+" ",1),i.isRequired?(d(),V("span",Ke,"*")):x("",!0)]),_:1}),t(g,null,{default:s(()=>[t(p,{modelValue:n(c),"onUpdate:modelValue":$[0]||($[0]=w=>Z(c)?c.value=w:null)},{default:s(()=>[t(a,{disabled:"",hidden:"",value:""},{default:s(()=>[N(r(m.$t("Select"))+"...",1)]),_:1}),(d(!0),V(ee,null,ie(h.value,w=>(d(),S(a,{key:w.id,value:w.id,textContent:r(w.name)},null,8,["value","textContent"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),He=["onSubmit"],Je={class:"columns is-multiline"},Qe={class:"column is-12 has-text-centered fieldset"},Xe=["src"],Ye={class:"help has-text-danger"},Ze={class:"column is-6"},et={class:"help has-text-danger"},tt={class:"column is-6"},at={class:"help has-text-danger"},ot={class:"column is-6"},nt={class:"help has-text-danger"},st={class:"column is-6"},lt={class:"help has-text-danger"},it={key:0,class:"column is-6"},rt={class:"help has-text-danger"},dt={key:1,class:"column is-6"},mt={class:"help has-text-danger"},ut={class:"column is-6"},pt={class:"help has-text-danger"},ct={class:"column is-6"},_t={class:"help has-text-danger"},ft=O({props:{modelValue:Boolean,employeeId:{type:Number,default:null}},emits:["update:modelValue","update:list"],setup(i,{emit:l}){const u=i,{t:h}=Y(),c=b(!1),m=b(!1),$=b(h("Add")),_=b(),a=L({avatar:"",username:"",email:"",firstname:"",lastname:"",password:"",password_confirmation:"",department_id:null,role_id:null}),p=L({avatar:[],username:[],email:[],firstname:[],lastname:[],password:[],password_confirmation:[],department_id:[],role_id:[]}),g=K(()=>a.avatar||"/images/avatars/svg/vuero-1.svg");pe(()=>u.employeeId,async v=>{if(!v)Object.assign(a,{});else{const e=await Re(Number(u.employeeId));Object.assign(a,e)}},{deep:!0,immediate:!0});async function k(v){try{D(),m.value=!0;const e=new FormData;e.append("avatar",_.value||""),e.append("username",a.username),e.append("email",a.email),e.append("firstname",a.firstname),e.append("lastname",a.lastname),e.append("department_id",a.department_id),e.append("role_id",a.role_id),u.employeeId||(e.append("password",a.password),e.append("password_confirmation",a.password_confirmation)),u.employeeId?await De(u.employeeId,e):await Be(e),l("update:list"),C()}catch(e){Object.assign(p,e.response?.data?.errors)}finally{m.value=!1}}const w=v=>{p.avatar?.length&&(p.avatar=[]),_.value=v.target.files[0]},E=(v,e)=>{if(v){console.error(v);return}_.value=void 0,a.avatar=""};function C(){D(),q(),_.value=void 0,c.value=!1,l("update:modelValue",!1)}function D(){Object.assign(p,{avatar:[],username:[],email:[],firstname:[],lastname:[],password:[],password_confirmation:[],department_id:[],role_id:[]})}function q(){Object.assign(a,{avatar:"",username:"",email:"",firstname:"",lastname:"",password:"",password_confirmation:"",department_id:null,role_id:null})}return(v,e)=>{const y=Ve,U=we,G=ge,I=ne,R=z,B=W,H=Ge,J=We,Q=se,X=oe;return d(),S(X,{open:i.modelValue,size:"large",title:$.value,actions:"right",onClose:C},{content:s(()=>[o("form",{id:"employee-form",class:"modal-form",onSubmit:P(k,["prevent"])},[o("div",Je,[o("div",Qe,[t(G,{size:"xl",class:"profile-v-avatar"},{avatar:s(()=>[c.value?(d(),S(y,{key:1,class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom",onChange:w,onRemovefile:E})):(d(),V("img",{key:0,class:"avatar",src:n(g),alt:"Employee avatar"},null,8,Xe)),c.value?(d(),S(U,{key:3,icon:"feather:arrow-left",class:"edit-button is-back",circle:"",tabindex:"0",onKeydown:e[2]||(e[2]=ae(P(f=>c.value=!1,["prevent"]),["space"])),onClick:e[3]||(e[3]=f=>c.value=!1)})):(d(),S(U,{key:2,icon:"feather:edit-2",class:"edit-button is-edit",circle:"",tabindex:"0",onKeydown:e[0]||(e[0]=ae(P(f=>c.value=!0,["prevent"]),["space"])),onClick:e[1]||(e[1]=f=>c.value=!0)}))]),_:1}),o("p",Ye,r(n(p).avatar[0]),1)]),o("div",Ze,[t(B,{label:v.$t("Username"),required:""},{default:s(()=>[t(R,null,{default:s(()=>[t(I,{type:"text",modelValue:n(a).username,"onUpdate:modelValue":e[4]||(e[4]=f=>n(a).username=f)},null,8,["modelValue"]),o("p",et,r(n(p).username[0]),1)]),_:1})]),_:1},8,["label"])]),o("div",tt,[t(B,{label:v.$t("Email"),required:""},{default:s(()=>[t(R,null,{default:s(()=>[t(I,{type:"text",modelValue:n(a).email,"onUpdate:modelValue":e[5]||(e[5]=f=>n(a).email=f)},null,8,["modelValue"]),o("p",at,r(n(p).email[0]),1)]),_:1})]),_:1},8,["label"])]),o("div",ot,[t(B,{label:v.$t("First_name"),required:""},{default:s(()=>[t(R,null,{default:s(()=>[t(I,{type:"text",modelValue:n(a).firstname,"onUpdate:modelValue":e[6]||(e[6]=f=>n(a).firstname=f)},null,8,["modelValue"]),o("p",nt,r(n(p).firstname[0]),1)]),_:1})]),_:1},8,["label"])]),o("div",st,[t(B,{label:v.$t("Last_name")},{default:s(()=>[t(R,null,{default:s(()=>[t(I,{type:"text",modelValue:n(a).lastname,"onUpdate:modelValue":e[7]||(e[7]=f=>n(a).lastname=f)},null,8,["modelValue"]),o("p",lt,r(n(p).lastname[0]),1)]),_:1})]),_:1},8,["label"])]),i.employeeId?x("",!0):(d(),V("div",it,[t(B,{label:v.$t("Password"),required:""},{default:s(()=>[t(R,null,{default:s(()=>[t(I,{type:"password",modelValue:n(a).password,"onUpdate:modelValue":e[8]||(e[8]=f=>n(a).password=f)},null,8,["modelValue"]),o("p",rt,r(n(p).password[0]),1)]),_:1})]),_:1},8,["label"])])),i.employeeId?x("",!0):(d(),V("div",dt,[t(B,{label:v.$t("Confirm_password"),required:""},{default:s(()=>[t(R,null,{default:s(()=>[t(I,{type:"password",modelValue:n(a).password_confirmation,"onUpdate:modelValue":e[9]||(e[9]=f=>n(a).password_confirmation=f)},null,8,["modelValue"]),o("p",mt,r(n(p).password_confirmation[0]),1)]),_:1})]),_:1},8,["label"])])),o("div",ut,[t(H,{modelValue:n(a).department_id,"onUpdate:modelValue":e[10]||(e[10]=f=>n(a).department_id=f),"is-required":""},null,8,["modelValue"]),o("p",pt,r(n(p).department_id[0]),1)]),o("div",ct,[t(J,{modelValue:n(a).role_id,"onUpdate:modelValue":e[11]||(e[11]=f=>n(a).role_id=f),"is-required":""},null,8,["modelValue"]),o("p",_t,r(n(p).role_id[0]),1)])])],40,He)]),action:s(({close:f})=>[t(Q,{loading:m.value,type:"submit",color:"primary",outlined:"",form:"employee-form"},{default:s(()=>[N(r(v.$t("Save")),1)]),_:1},8,["loading"])]),_:1},8,["open","title"])}}});const vt=ce(ft,[["__scopeId","data-v-5397a6d1"]]),yt=["onClick"],ht=o("div",{class:"icon"},[o("i",{"aria-hidden":"true",class:"lnil lnil-pencil"})],-1),gt={class:"meta"},wt=["onClick"],Vt=o("div",{class:"icon"},[o("i",{class:"lnir lnir-key","aria-hidden":"true"})],-1),$t={class:"meta"},bt=o("hr",{class:"dropdown-divider"},null,-1),kt=["onClick"],Ct=o("div",{class:"icon"},[o("i",{class:"lnir lnir-trash","aria-hidden":"true"})],-1),xt={class:"meta"},St=O({emits:["edit","update:password","remove"],setup(i,{emit:l}){return(u,h)=>{const c=Ce;return d(),S(c,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:s(({close:m})=>[o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:P(()=>{l("edit"),m()},["prevent"])},[ht,o("div",gt,[o("span",null,r(u.$t("Edit")),1)])],8,yt),o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:P(()=>{l("update:password"),m()},["prevent"])},[Vt,o("div",$t,[o("span",null,r(u.$t("Change_password")),1)])],8,wt),bt,o("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:P(()=>{l("remove"),m()},["prevent"])},[Ct,o("div",xt,[o("span",null,r(u.$t("Remove")),1)])],8,kt)]),_:1})}}}),Et={class:"applicant-list-wrapper"},Ut=["textContent"],Ft={key:0,class:"flex-list-inner"},It={key:0,class:"is-capitalized"},Rt={key:1,class:"is-capitalized"},Bt={key:2},aa=O({async setup(i){let l,u;const{t:h,locale:c}=Y();_e({title:h("Employees")+" - Nefrit"});const m=Fe();Ue().setPageTitle(h("Employees_List"));const _=L({pagination:{current_page:1,per_page:10,total:10},result:[]}),a=b(!1),p=b(!1),g=b(),k=K({get:()=>_.pagination.current_page,set:async e=>{await E(e)}}),w={orderNumber:{format:(e,y,U)=>`${U+1}`,cellClass:"is-flex-grow-0"},name:{label:h("Employee_name"),searchable:!0},department:{label:h("Department"),grow:!0,searchable:!0},role:{label:h("Role"),searchable:!0},actions:{label:h("Actions"),align:"center"}};[l,u]=fe(()=>E()),await l,u();async function E(e=1){const y=await Ie(e);Object.assign(_,y)}function C(e){g.value=e,a.value=!0}async function D(e){g.value=e,m.$patch({confirmModalState:!0})}async function q(){await qe(g.value),E()}async function v(e){g.value=e,p.value=!0}return(e,y)=>{const U=Ee,G=Se,I=xe,R=St,B=$e,H=ke,J=be,Q=vt,X=ve,f=Le;return d(),V("div",Et,[t(U,{center:"",title:"","remove-disabled":"","export-disabled":"","filter-disabled":"",onAdd:y[0]||(y[0]=A=>C(null))}),t(J,{columns:n(w),data:n(_).result,limit:n(_).pagination.per_page,total:n(_).pagination.total},{default:s(A=>[t(B,{rounded:""},{"header-column":s(({column:F})=>[F.key==="orderNumber"?(d(),V("span",{key:0,class:"is-flex-grow-0",textContent:r("#")},null,8,Ut)):x("",!0)]),body:s(()=>[n(_).result.length===0?(d(),V("div",Ft,[t(G,{title:e.$t("No_data"),subtitle:e.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):x("",!0)]),"body-cell":s(({row:F,column:M,value:j,index:Dt})=>[M.key==="status"&&j?(d(),S(I,{key:0,status:j},null,8,["status"])):x("",!0),M.key==="name"?(d(),V(ee,{key:1},[F.firstname?(d(),V("span",It,r(F.firstname)+"\xA0",1)):x("",!0),F.lastname?(d(),V("span",Rt,r(F.lastname),1)):x("",!0)],64)):x("",!0),M.key==="role"&&j?(d(),V("span",Bt,r(j.name),1)):x("",!0),M.key==="actions"?(d(),S(R,{key:3,onEdit:te=>C(F.id),"onUpdate:password":te=>v(F.id),onRemove:te=>D(F.id)},null,8,["onEdit","onUpdate:password","onRemove"])):x("",!0)]),_:1}),t(H,{"current-page":n(k),"onUpdate:current-page":y[1]||(y[1]=F=>Z(k)?k.value=F:null),class:"mt-6","item-per-page":n(_).pagination.per_page,"total-items":n(_).pagination.total},null,8,["current-page","item-per-page","total-items"])]),_:1},8,["columns","data","limit","total"]),t(Q,{modelValue:a.value,"onUpdate:modelValue":y[2]||(y[2]=A=>a.value=A),"employee-id":Number(g.value),"onUpdate:list":y[3]||(y[3]=()=>{E(),g.value=null}),onClose:y[4]||(y[4]=A=>g.value=null)},null,8,["modelValue","employee-id"]),t(X,{onConfirmAction:q}),t(f,{modelValue:p.value,"onUpdate:modelValue":y[5]||(y[5]=A=>p.value=A),"employee-id":Number(g.value)},null,8,["modelValue","employee-id"])])}}});export{aa as default};
