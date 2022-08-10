import{a as L}from"./VPlaceholderSection.2f3a5682.js";import{A as j,W as k,f as Y,o as N,g as A,w as o,s as a,p as E,t as h,G as m,k as u,l as Z,H as ee,j as te,v as ae,F as se,bS as le,a2 as D,a3 as O,B as _,bw as M,r as z,E as T,x as G,a4 as oe,Q as H}from"./index.433ccf37.js";import{_ as Q}from"./VTextarea.61fe4cf8.js";import{o as ne,p as ue,q as ie,s as de,t as ce,v as re,w as me,x as pe}from"./index.bd8beb4a.js";import{_ as _e}from"./VFileInput.4f9e647b.js";import{_ as fe,a as ve}from"./VOption.38efc069.js";const W=j({props:{modelValue:{default:""},isRequired:{type:Boolean,default:!1},list:null},emits:["update:modelValue"],setup(b,{emit:$}){const f=b,{t:y}=k(),i=Y({get:()=>f.modelValue,set:async V=>{$("update:modelValue",V)}});return(V,g)=>{const v=le,d=fe,r=ve,n=D,x=O;return N(),A(x,null,{default:o(()=>[a(v,null,{default:o(()=>[E(h(m(y)("Status"))+" ",1),u("span",{class:Z({"has-text-danger":b.isRequired})},"*",2)]),_:1}),a(n,null,{default:o(()=>[a(r,{modelValue:m(i),"onUpdate:modelValue":g[0]||(g[0]=s=>ee(i)?i.value=s:null)},{default:o(()=>[a(d,{disabled:"",hidden:"",value:""},{default:o(()=>[E(h(m(y)("Select"))+" ...",1)]),_:1}),(N(!0),te(se,null,ae(b.list,s=>(N(),A(d,{key:s.id,value:s.id,textContent:h(s.name)},null,8,["value","textContent"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),Ve=["onSubmit"],ge={class:"columns is-multiline"},he={class:"column is-12"},be={class:"help has-text-danger"},xe={class:"column is-12"},Se={class:"help has-text-danger"},ye={class:"column is-12"},Ie={class:"help has-text-danger"},De=j({props:{modelValue:Boolean,itemId:{type:Number,default:null},parentId:{type:Number,default:null}},emits:["update:modelValue","update:list"],async setup(b,{emit:$}){let f,y;const i=b,{t:V}=k();let g=_(V("Add"));const v=_(!1),d=_(""),r=_(""),n=_(),x=([f,y]=M(()=>ne()),f=await f,y(),f),s=z({message:"",text:"",status_id:""});T(()=>i.itemId,async p=>{if(!p)g.value=V("Add"),d.value="",r.value="",n.value="";else{g.value=V("Edit");const t=await ue(Number(i.itemId));d.value=t.message,r.value=t.text,n.value=t.status?.id}},{deep:!0,immediate:!0});async function U(p){try{v.value=!0;const t={message:d.value,text:r.value,application_id:i.parentId,status_id:n.value};i.itemId?await ie(i.itemId,t):await de(t),$("update:list"),S()}catch(t){Object.assign(s,t.response?.data?.errors)}finally{v.value=!1}}function S(){d.value="",r.value="",n.value="",Object.assign(s,{message:"",text:"",status_id:""}),$("update:modelValue",!1)}function w(p){s[p.target.name]=""}return(p,t)=>{const R=oe,B=D,F=O,l=Q,e=W,c=H,C=L;return N(),A(C,{open:b.modelValue,size:"large",title:m(g),actions:"right",onClose:S},{content:o(()=>[u("form",{id:"notice-form",class:"modal-form",onSubmit:G(U,["prevent"])},[u("div",ge,[u("div",he,[a(F,{label:p.$t("Notice_message"),required:""},{default:o(()=>[a(B,null,{default:o(()=>[a(R,{name:"message",modelValue:d.value,"onUpdate:modelValue":t[0]||(t[0]=I=>d.value=I),onInput:w},null,8,["modelValue"]),u("p",be,h(m(s).message[0]),1)]),_:1})]),_:1},8,["label"])]),u("div",xe,[a(F,{label:p.$t("Notice_details"),required:""},{default:o(()=>[a(B,null,{default:o(()=>[a(l,{name:"text",placeholder:p.$t("Add_text"),modelValue:r.value,"onUpdate:modelValue":t[1]||(t[1]=I=>r.value=I),onInput:w},null,8,["placeholder","modelValue"]),u("p",Se,h(m(s).text[0]),1)]),_:1})]),_:1},8,["label"])]),u("div",ye,[a(e,{name:"status_id",modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=I=>n.value=I),list:m(x),"is-required":!0,onChange:w},null,8,["modelValue","list"]),u("p",Ie,h(m(s).status_id[0]),1)])])],40,Ve)]),action:o(({close:I})=>[a(c,{loading:v.value,color:"primary",outlined:"",type:"submit",form:"notice-form",disabled:v.value},{default:o(()=>[E(h(p.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),$e=["onSubmit"],Ce={class:"columns is-multiline"},we={class:"column is-12"},Ne={class:"help has-text-danger"},Be={class:"column is-12"},Fe={class:"help has-text-danger"},qe={class:"column is-12"},Oe=j({props:{modelValue:Boolean,itemId:{type:Number,default:null},parentId:{type:Number,default:null}},emits:["update:modelValue","update:list"],async setup(b,{emit:$}){let f,y;const i=b,{t:V}=k();let g=_(V("Add"));const v=_(!1),d=_(""),r=_(),n=_([]),x=_([]),s=_([]),U=([f,y]=M(()=>ce()),f=await f,y(),f),S=z({text:"",status_id:""});T(()=>i.itemId,async(l,e)=>{if(l){g.value=V("Edit");const c=await re(Number(i.itemId));d.value=c.text,r.value=c.status?.id,x.value=c.files}},{deep:!0,immediate:!0});async function w(l){try{v.value=!0;const e={text:d.value,application_id:i.parentId,status_id:r.value,files:n.value,removed_files:s.value},c=new FormData;c.append("text",e.text),c.append("application_id",e.application_id),c.append("status_id",e.status_id),n.value.forEach(C=>{c.append("files[]",C)}),s.value.forEach(C=>{c.append("removes[]",C)}),i.itemId?await me(i.itemId,c):await pe(c),$("update:list"),p()}catch(e){Object.assign(S,e.response?.data?.errors)}finally{v.value=!1}}function p(){g.value=V("Add"),d.value="",r.value="",n.value=[],x.value=[],s.value=[],Object.assign(S,{text:"",status_id:""}),$("update:modelValue",!1)}function t(l){S[l.target.name]=""}function R(l){const e=l.target;console.log("files: ",e.files),e.files&&n.value?.push(e.files[0])}function B(l){n.value=n.value?.filter(e=>e.lastModified!==l)}function F(l){s.value.push(l),x.value=x.value?.filter(e=>e.id!==l)}return(l,e)=>{const c=Q,C=D,I=O,J=W,K=_e,P=H,X=L;return N(),A(X,{open:b.modelValue,size:"large",title:m(g),actions:"right",onClose:p},{content:o(()=>[u("form",{id:"conclusion-form",class:"modal-form",onSubmit:G(w,["prevent"])},[u("div",Ce,[u("div",we,[a(I,{label:l.$t("conclusion_in_details"),required:""},{default:o(()=>[a(C,{"has-error":m(S).text[0]},{default:o(()=>[a(c,{name:"text",placeholder:l.$t("Add_text"),modelValue:d.value,"onUpdate:modelValue":e[0]||(e[0]=q=>d.value=q),onInput:t},null,8,["placeholder","modelValue"]),u("p",Ne,h(m(S).text[0]),1)]),_:1},8,["has-error"])]),_:1},8,["label"])]),u("div",Be,[a(J,{name:"status_id",modelValue:r.value,"onUpdate:modelValue":e[1]||(e[1]=q=>r.value=q),list:m(U),"is-required":!0,onChange:t},null,8,["modelValue","list"]),u("p",Fe,h(m(S).status_id[0]),1)]),u("div",qe,[a(K,{files:n.value,"remote-files":x.value,onFileUpload:R,onFileRemove:B,onRemoteFileRemove:F,"error-message":""},null,8,["files","remote-files"])])])],40,$e)]),action:o(({close:q})=>[a(P,{loading:v.value,color:"primary",outlined:"",type:"submit",form:"conclusion-form",disabled:v.value},{default:o(()=>[E(h(l.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}});export{Oe as _,De as a,W as b};
