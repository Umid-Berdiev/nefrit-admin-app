import{_ as N}from"./VIconWrap.vue_vue_type_style_index_0_lang.2fb07788.js";import{z as W,A as x,b as K,bV as T,e as G,p as O,o as u,i as _,j as e,q as t,w as o,m as g,t as H,U as E,v as h,k as M,E as l,x as P,bp as S,F as U,P as j,a3 as R,a1 as q,a2 as L,O as Q,f as Y}from"./index.9d6b139f.js";import{_ as X}from"./VFilePond.vue_vue_type_script_lang.2c4d2172.js";import{s as Z}from"./sleep.2a252ff4.js";import{o as d}from"./via-placeholder.9af8280d.js";import{u as ee}from"./viewWrapper.8bdd3f7c.js";const c="/images/avatars/svg/vuero-3.svg",se={class:"account-box is-form is-footerless"},te={class:"form-head-inner"},ne=e("div",{class:"left"},[e("h3",null,"Work Experience"),e("p",null,"Edit your work experience info")],-1),oe={class:"right"},ae={class:"buttons"},ie=g(" Go Back "),le={class:"form-body"},re={class:"fieldset"},de={key:0,class:"fieldset-heading"},ce=e("h4",null,"Previous Experiences",-1),ue=e("p",null,"This will help others assess your experience",-1),pe=[ce,ue],_e={key:1,class:"fieldset-heading"},me={class:"setting-list"},ve=["onSubmit"],fe={class:"field-wrap"},he={class:"columns is-multiline"},ge={class:"column is-12"},ye=e("div",{class:"button"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),be={class:"column is-6"},ke={class:"column is-6"},we={class:"column is-12"},xe=g(" Add Work Experience "),Ee={class:"setting-item"},Ve=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"Airbnb HQ"),e("span",null,[e("span",null,"January 2018"),e("i",{"aria-hidden":"true",class:"fas fa-circle"}),e("span",null,"October 2020")]),e("span",null,"Product Manager")],-1),Oe={class:"end"},Pe={class:"setting-item"},Se=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"Facebook"),e("span",null,[e("span",null,"January 2018"),e("i",{"aria-hidden":"true",class:"fas fa-circle"}),e("span",null,"October 2020")]),e("span",null,"Product Manager")],-1),We={class:"end"},Ce={class:"setting-item"},$e=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"Atlassian"),e("span",null,[e("span",null,"January 2018"),e("i",{"aria-hidden":"true",class:"fas fa-circle"}),e("span",null,"October 2020")]),e("span",null,"Web Developer")],-1),De={class:"end"},Ae={class:"setting-item"},ze=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"Github"),e("span",null,[e("span",null,"January 2018"),e("i",{"aria-hidden":"true",class:"fas fa-circle"}),e("span",null,"October 2020")]),e("span",null,"Web Developer")],-1),Fe={class:"end"},Je={class:"setting-item"},Be=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"Slack"),e("span",null,[e("span",null,"January 2018"),e("i",{"aria-hidden":"true",class:"fas fa-circle"}),e("span",null,"October 2020")]),e("span",null,"Web Developer")],-1),Ie={class:"end"},Ne={class:"setting-item"},Ke=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"Gitlab"),e("span",null,[e("span",null,"January 2018"),e("i",{"aria-hidden":"true",class:"fas fa-circle"}),e("span",null,"October 2020")]),e("span",null,"Web Developer")],-1),Te={class:"end"},Ge={class:"setting-item is-create"},He=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"New Item"),e("span",null,"Add a new work experience item")],-1),Me={class:"end"},Ue=g(" Add "),je=W({setup(C){const a=x(!1),m=x(!1),y=x(),b=K(),{y:$}=T(),D=G(()=>$.value>30),A=(i,s)=>{if(i){console.error(i);return}console.log("file added",s)},z=(i,s)=>{if(i){console.error(i);return}console.log("file removed",s)},F=async()=>{a.value=!1,k()},k=async()=>{m.value=!0,await Z(),b.success("Your changes have been successfully saved!"),m.value=!1};return(i,s)=>{const v=j,J=X,f=R,p=q,w=L,B=O("VDatePicker"),r=O("EditSettingItemDropdown"),I=N;return u(),_("div",se,[e("div",{class:M(["form-head stuck-header",[l(D)&&"is-stuck"]])},[e("div",te,[ne,e("div",oe,[e("div",ae,[t(v,{to:{name:"app"},icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:o(()=>[ie]),_:1}),t(v,{color:"primary",raised:"",loading:m.value,tabindex:"0",onKeydown:E(h(k,["prevent"]),["space"]),onClick:k},{default:o(()=>[g(H(i.$t("Save_changes")),1)]),_:1},8,["loading","onKeydown"])])])])],2),e("div",le,[e("div",re,[a.value?(u(),_("div",_e,[e("a",{class:"action-link",tabindex:"0",onKeydown:s[0]||(s[0]=E(h(n=>a.value=!1,["prevent"]),["space"])),onClick:s[1]||(s[1]=n=>a.value=!1)}," Cancel ",32)])):(u(),_("div",de,pe)),e("div",me,[a.value?(u(),_("form",{key:0,class:"setting-form",onSubmit:h(F,["prevent"])},[t(J,{size:"tiny",class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom",onAddfile:A,onRemovefile:z}),e("div",fe,[e("div",he,[e("div",ge,[t(B,{locale:i.locale,modelValue:y.value,"onUpdate:modelValue":s[2]||(s[2]=n=>y.value=n),"is-range":"",color:"green","trim-weeks":""},{default:o(({inputValue:n,inputEvents:V})=>[t(w,{addons:"",class:"has-addons-fullwidth"},{default:o(()=>[t(p,null,{default:o(()=>[t(f,P({value:n.start},S(V.start)),null,16,["value"])]),_:2},1024),t(p,{nogrow:""},{default:o(()=>[ye]),_:1}),t(p,{subcontrol:""},{default:o(()=>[t(f,P({value:n.end},S(V.end)),null,16,["value"])]),_:2},1024)]),_:2},1024)]),_:1},8,["locale","modelValue"])]),e("div",be,[t(w,null,{default:o(()=>[t(p,{icon:"feather:box"},{default:o(()=>[t(f,{type:"text",placeholder:"Company Name",autocomplete:"organization"})]),_:1})]),_:1})]),e("div",ke,[t(w,null,{default:o(()=>[t(p,{icon:"feather:briefcase"},{default:o(()=>[t(f,{type:"text",placeholder:"Job Title",autocomplete:"organization-title"})]),_:1})]),_:1})]),e("div",we,[t(v,{type:"submit",color:"primary",raised:"",fullwidth:""},{default:o(()=>[xe]),_:1})])])])],40,ve)):(u(),_(U,{key:1},[e("div",Ee,[e("img",{src:c,alt:"",onErrorOnce:s[3]||(s[3]=n=>l(d)(n,"50x50"))},null,32),Ve,e("div",Oe,[t(r)])]),e("div",Pe,[e("img",{src:c,alt:"",onErrorOnce:s[4]||(s[4]=n=>l(d)(n,"50x50"))},null,32),Se,e("div",We,[t(r)])]),e("div",Ce,[e("img",{src:c,alt:"",onErrorOnce:s[5]||(s[5]=n=>l(d)(n,"50x50"))},null,32),$e,e("div",De,[t(r)])]),e("div",Ae,[e("img",{src:c,alt:"",onErrorOnce:s[6]||(s[6]=n=>l(d)(n,"50x50"))},null,32),ze,e("div",Fe,[t(r)])]),e("div",Je,[e("img",{src:c,alt:"",onErrorOnce:s[7]||(s[7]=n=>l(d)(n,"50x50"))},null,32),Be,e("div",Ie,[t(r)])]),e("div",Ne,[e("img",{src:c,alt:"",onErrorOnce:s[8]||(s[8]=n=>l(d)(n,"50x50"))},null,32),Ke,e("div",Te,[t(r)])]),e("div",Ge,[t(I,{icon:"lnil lnil-circle-plus"}),He,e("div",Me,[t(v,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",tabindex:"0",onKeydown:s[9]||(s[9]=E(h(n=>a.value=!0,["prevent"]),["space"])),onClick:s[10]||(s[10]=n=>a.value=!0)},{default:o(()=>[Ue]),_:1})])])],64))])])])])}}}),Ze=W({setup(C){return ee().setPageTitle("Profile Edit 2"),Q({title:"Profile Edit 2 - Sidebar - Vuero"}),(m,y)=>{const b=je;return u(),Y(b)}}});export{Ze as default};