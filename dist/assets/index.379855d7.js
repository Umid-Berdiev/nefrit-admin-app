import{_ as K}from"./VTextarea.61bc0f20.js";import{_ as G}from"./VField.17e54227.js";import{a as M,_ as D}from"./VControl.068ba628.js";import{_ as W}from"./VAvatar.8f6c454e.js";import{_ as Y}from"./VIconButton.e183282f.js";import{_ as O}from"./VFilePond.ae00fc62.js";import{K as P,r as c,bM as j,c as H,E as J,p as _,x as $,y as t,f as e,s as o,C as S,D as q,R as g,H as y,A as Q,M as E,q as v,V as X,bI as Z}from"./index.f060b7c6.js";import{u as ee}from"./useNotyf.14aeb83f.js";import{s as te}from"./sleep.2a252ff4.js";import{o as oe}from"./via-placeholder.9af8280d.js";import{u as le}from"./viewWrapper.7134460b.js";const se="/images/avatars/svg/vuero-1.svg",ae={class:"account-box is-form is-footerless"},ne={class:"form-head-inner"},ie=t("div",{class:"left"},[t("h3",null,"General Info"),t("p",null,"Edit your account's general information")],-1),re={class:"right"},de={class:"buttons"},ue=S(" Go Back "),ce={class:"form-body"},_e={class:"fieldset"},pe=t("div",{class:"fieldset-heading"},[t("h4",null,"Profile Picture"),t("p",null,"This is how others will recognize you")],-1),me={class:"fieldset"},fe=t("div",{class:"fieldset-heading"},[t("h4",null,"Personal Info"),t("p",null,"Others diserve to know you more")],-1),ve={class:"columns is-multiline"},he={class:"column is-6"},ge={class:"column is-6"},ye={class:"column is-12"},be={class:"column is-12"},Ve={class:"column is-12"},we={class:"fieldset"},xe=t("div",{class:"fieldset-heading"},[t("h4",null,"Professional Info"),t("p",null,"This can help you to win some opportunities")],-1),ke={class:"columns is-multiline"},Ue={class:"column is-6"},$e={class:"column is-6"},Ee={class:"column is-6"},Pe={class:"column is-6"},Se={class:"column is-12"},Ce={class:"fieldset"},Ie=t("div",{class:"fieldset-heading"},[t("h4",null,"Social Profiles"),t("p",null,"This can help others finding you on social media")],-1),Le={class:"columns is-multiline"},Ne={class:"column is-6"},Re={class:"column is-6"},Be={class:"column is-6"},Te={class:"column is-6"},ze={class:"column is-6"},Ae={class:"column is-6"},Fe=P({setup(C){const d=c(!1),m=c(!1),h=c(""),f=c(""),b=c(""),V=c(""),w=c(["software","saas","engineering"]),I=[{value:"software",label:"Software"},{value:"saas",label:"SaaS"},{value:"engineering",label:"Engineering"}],L=ee(),{y:N}=j(),R=H(()=>N.value>30),B=(u,l)=>{if(u){console.error(u);return}console.log("file added",l)},T=(u,l)=>{if(u){console.error(u);return}console.log("file removed",l)},x=async()=>{m.value=!0,await te(),L.success("Your changes have been successfully saved!"),m.value=!1};return(u,l)=>{const k=X,z=O,U=Y,A=W,i=M,s=D,a=G,F=K,p=J("Multiselect");return _(),$("div",ae,[t("div",{class:Q(["form-head stuck-header",[E(R)&&"is-stuck"]])},[t("div",ne,[ie,t("div",re,[t("div",de,[e(k,{to:{name:"app"},icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:o(()=>[ue]),_:1}),e(k,{color:"primary",raised:"",loading:m.value,tabindex:"0",onKeydown:g(y(x,["prevent"]),["space"]),onClick:x},{default:o(()=>[S(q(u.$t("Save_changes")),1)]),_:1},8,["loading","onKeydown"])])])])],2),t("div",ce,[t("div",_e,[pe,e(A,{size:"xl",class:"profile-v-avatar"},{avatar:o(()=>[d.value?(_(),v(z,{key:1,class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom",onAddfile:B,onRemovefile:T})):(_(),$("img",{key:0,class:"avatar",src:se,alt:"",onErrorOnce:l[0]||(l[0]=n=>E(oe)(n,"150x150"))},null,32)),d.value?(_(),v(U,{key:3,icon:"feather:arrow-left",class:"edit-button is-back",circle:"",tabindex:"0",onKeydown:l[3]||(l[3]=g(y(n=>d.value=!1,["prevent"]),["space"])),onClick:l[4]||(l[4]=n=>d.value=!1)})):(_(),v(U,{key:2,icon:"feather:edit-2",class:"edit-button is-edit",circle:"",tabindex:"0",onKeydown:l[1]||(l[1]=g(y(n=>d.value=!0,["prevent"]),["space"])),onClick:l[2]||(l[2]=n=>d.value=!0)}))]),_:1})]),t("div",me,[fe,t("div",ve,[t("div",he,[e(a,null,{default:o(()=>[e(s,{icon:"feather:user"},{default:o(()=>[e(i,{type:"text",placeholder:"First Name",autocomplete:"given-name"})]),_:1})]),_:1})]),t("div",ge,[e(a,null,{default:o(()=>[e(s,{icon:"feather:user"},{default:o(()=>[e(i,{type:"text",placeholder:"Last Name",autocomplete:"family-name"})]),_:1})]),_:1})]),t("div",ye,[e(a,null,{default:o(()=>[e(s,{icon:"feather:briefcase"},{default:o(()=>[e(i,{type:"text",placeholder:"Job Title",autocomplete:"organization-title"})]),_:1})]),_:1})]),t("div",be,[e(a,null,{default:o(()=>[e(s,{icon:"feather:map-pin"},{default:o(()=>[e(i,{type:"text",placeholder:"Location",autocomplete:"country-name"})]),_:1})]),_:1})]),t("div",Ve,[e(a,null,{default:o(()=>[e(s,null,{default:o(()=>[e(F,{rows:"4",placeholder:"About / Bio",autocomplete:"off",autocapitalize:"off",spellcheck:"true"})]),_:1})]),_:1})])])]),t("div",we,[xe,t("div",ke,[t("div",Ue,[e(a,null,{default:o(({id:n})=>[e(s,null,{default:o(()=>[e(p,{modelValue:h.value,"onUpdate:modelValue":l[5]||(l[5]=r=>h.value=r),attrs:{id:n},placeholder:"Experience",options:["0-2 years","2-5 years","5-10 years","10+ years"]},null,8,["modelValue","attrs"])]),_:2},1024)]),_:1})]),t("div",$e,[e(a,null,{default:o(({id:n})=>[e(s,null,{default:o(()=>[e(p,{modelValue:f.value,"onUpdate:modelValue":l[6]||(l[6]=r=>f.value=r),attrs:{id:n},placeholder:"Is this your first job?",options:["Yes","No"]},null,8,["modelValue","attrs"])]),_:2},1024)]),_:1})]),t("div",Ee,[e(a,null,{default:o(({id:n})=>[e(s,null,{default:o(()=>[e(p,{modelValue:b.value,"onUpdate:modelValue":l[7]||(l[7]=r=>b.value=r),attrs:{id:n},placeholder:"Are you flexible?",options:["Yes","No"]},null,8,["modelValue","attrs"])]),_:2},1024)]),_:1})]),t("div",Pe,[e(a,null,{default:o(({id:n})=>[e(s,null,{default:o(()=>[e(p,{modelValue:V.value,"onUpdate:modelValue":l[8]||(l[8]=r=>V.value=r),attrs:{id:n},placeholder:"Do you work remotely?",options:["Yes","No"]},null,8,["modelValue","attrs"])]),_:2},1024)]),_:1})]),t("div",Se,[e(a,null,{default:o(({id:n})=>[e(s,null,{default:o(()=>[e(p,{modelValue:w.value,"onUpdate:modelValue":l[9]||(l[9]=r=>w.value=r),attrs:{id:n},mode:"tags",searchable:!0,"create-tag":!0,options:I,placeholder:"Add tags"},null,8,["modelValue","attrs"])]),_:2},1024)]),_:1})])])]),t("div",Ce,[Ie,t("div",Le,[t("div",Ne,[e(a,null,{default:o(()=>[e(s,{icon:"fab fa-facebook-f"},{default:o(()=>[e(i,{type:"text",placeholder:"Facebook URL",inputmode:"url"})]),_:1})]),_:1})]),t("div",Re,[e(a,null,{default:o(()=>[e(s,{icon:"fab fa-twitter"},{default:o(()=>[e(i,{type:"text",placeholder:"Twitter URL",inputmode:"url"})]),_:1})]),_:1})]),t("div",Be,[e(a,null,{default:o(()=>[e(s,{icon:"fab fa-dribbble"},{default:o(()=>[e(i,{type:"text",placeholder:"Dribbble URL",inputmode:"url"})]),_:1})]),_:1})]),t("div",Te,[e(a,null,{default:o(()=>[e(s,{icon:"fab fa-instagram"},{default:o(()=>[e(i,{type:"text",placeholder:"Instagram URL",inputmode:"url"})]),_:1})]),_:1})]),t("div",ze,[e(a,null,{default:o(()=>[e(s,{icon:"fab fa-github"},{default:o(()=>[e(i,{type:"text",placeholder:"Github URL",inputmode:"url"})]),_:1})]),_:1})]),t("div",Ae,[e(a,null,{default:o(()=>[e(s,{icon:"fab fa-gitlab"},{default:o(()=>[e(i,{type:"text",placeholder:"Gitlab URL",inputmode:"url"})]),_:1})]),_:1})])])])])])}}}),Qe=P({setup(C){return le().setPageTitle("Profile Edit 1"),Z({title:"Profile Edit 1 - Sidebar - Vuero"}),(m,h)=>{const f=Fe;return _(),v(f)}}});export{Qe as default};
