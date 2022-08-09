import{_ as K}from"./VIconWrap.0c1243e7.js";import{_ as N}from"./VField.17e54227.js";import{a as M,_ as H}from"./VControl.068ba628.js";import{_ as T}from"./VFilePond.ae00fc62.js";import{K as S,r as x,bM as G,c as R,E as O,p as u,x as _,y as e,f as t,s as o,C as g,D as j,R as E,H as h,A as U,M as l,I as C,bj as P,F as q,V as L,bI as Q,q as Y}from"./index.f060b7c6.js";import{u as X}from"./useNotyf.14aeb83f.js";import{s as Z}from"./sleep.2a252ff4.js";import{o as d}from"./via-placeholder.9af8280d.js";import{u as ee}from"./viewWrapper.7134460b.js";const c="/images/avatars/svg/vuero-3.svg",se={class:"account-box is-form is-footerless"},te={class:"form-head-inner"},ne=e("div",{class:"left"},[e("h3",null,"Work Experience"),e("p",null,"Edit your work experience info")],-1),oe={class:"right"},ae={class:"buttons"},ie=g(" Go Back "),le={class:"form-body"},re={class:"fieldset"},de={key:0,class:"fieldset-heading"},ce=e("h4",null,"Previous Experiences",-1),ue=e("p",null,"This will help others assess your experience",-1),pe=[ce,ue],_e={key:1,class:"fieldset-heading"},me={class:"setting-list"},fe=["onSubmit"],ve={class:"field-wrap"},he={class:"columns is-multiline"},ge={class:"column is-12"},ye=e("div",{class:"button"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),be={class:"column is-6"},ke={class:"column is-6"},we={class:"column is-12"},xe=g(" Add Work Experience "),Ee={class:"setting-item"},Ve=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"Airbnb HQ"),e("span",null,[e("span",null,"January 2018"),e("i",{"aria-hidden":"true",class:"fas fa-circle"}),e("span",null,"October 2020")]),e("span",null,"Product Manager")],-1),Oe={class:"end"},Ce={class:"setting-item"},Pe=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"Facebook"),e("span",null,[e("span",null,"January 2018"),e("i",{"aria-hidden":"true",class:"fas fa-circle"}),e("span",null,"October 2020")]),e("span",null,"Product Manager")],-1),Se={class:"end"},We={class:"setting-item"},De=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"Atlassian"),e("span",null,[e("span",null,"January 2018"),e("i",{"aria-hidden":"true",class:"fas fa-circle"}),e("span",null,"October 2020")]),e("span",null,"Web Developer")],-1),$e={class:"end"},Ae={class:"setting-item"},Ie=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"Github"),e("span",null,[e("span",null,"January 2018"),e("i",{"aria-hidden":"true",class:"fas fa-circle"}),e("span",null,"October 2020")]),e("span",null,"Web Developer")],-1),Fe={class:"end"},Je={class:"setting-item"},ze=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"Slack"),e("span",null,[e("span",null,"January 2018"),e("i",{"aria-hidden":"true",class:"fas fa-circle"}),e("span",null,"October 2020")]),e("span",null,"Web Developer")],-1),Be={class:"end"},Ke={class:"setting-item"},Ne=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"Gitlab"),e("span",null,[e("span",null,"January 2018"),e("i",{"aria-hidden":"true",class:"fas fa-circle"}),e("span",null,"October 2020")]),e("span",null,"Web Developer")],-1),Me={class:"end"},He={class:"setting-item is-create"},Te=e("div",{class:"meta"},[e("span",{class:"dark-inverted"},"New Item"),e("span",null,"Add a new work experience item")],-1),Ge={class:"end"},Re=g(" Add "),je=S({setup(W){const a=x(!1),m=x(!1),y=x(),b=X(),{y:D}=G(),$=R(()=>D.value>30),A=(i,s)=>{if(i){console.error(i);return}console.log("file added",s)},I=(i,s)=>{if(i){console.error(i);return}console.log("file removed",s)},F=async()=>{a.value=!1,k()},k=async()=>{m.value=!0,await Z(),b.success("Your changes have been successfully saved!"),m.value=!1};return(i,s)=>{const f=L,J=T,v=M,p=H,w=N,z=O("VDatePicker"),r=O("EditSettingItemDropdown"),B=K;return u(),_("div",se,[e("div",{class:U(["form-head stuck-header",[l($)&&"is-stuck"]])},[e("div",te,[ne,e("div",oe,[e("div",ae,[t(f,{to:{name:"app"},icon:"lnir lnir-arrow-left rem-100",light:"","dark-outlined":""},{default:o(()=>[ie]),_:1}),t(f,{color:"primary",raised:"",loading:m.value,tabindex:"0",onKeydown:E(h(k,["prevent"]),["space"]),onClick:k},{default:o(()=>[g(j(i.$t("Save_changes")),1)]),_:1},8,["loading","onKeydown"])])])])],2),e("div",le,[e("div",re,[a.value?(u(),_("div",_e,[e("a",{class:"action-link",tabindex:"0",onKeydown:s[0]||(s[0]=E(h(n=>a.value=!1,["prevent"]),["space"])),onClick:s[1]||(s[1]=n=>a.value=!1)}," Cancel ",32)])):(u(),_("div",de,pe)),e("div",me,[a.value?(u(),_("form",{key:0,class:"setting-form",onSubmit:h(F,["prevent"])},[t(J,{size:"tiny",class:"profile-filepond",name:"profile_filepond","chunk-retry-delays":[500,1e3,3e3],"label-idle":"<i class='lnil lnil-cloud-upload'></i>","accepted-file-types":["image/png","image/jpeg","image/gif"],"image-preview-height":140,"image-resize-target-width":140,"image-resize-target-height":140,"image-crop-aspect-ratio":"1:1","style-panel-layout":"compact circle","style-load-indicator-position":"center bottom","style-progress-indicator-position":"right bottom","style-button-remove-item-position":"left bottom","style-button-process-item-position":"right bottom",onAddfile:A,onRemovefile:I}),e("div",ve,[e("div",he,[e("div",ge,[t(z,{locale:i.locale,modelValue:y.value,"onUpdate:modelValue":s[2]||(s[2]=n=>y.value=n),"is-range":"",color:"green","trim-weeks":""},{default:o(({inputValue:n,inputEvents:V})=>[t(w,{addons:"",class:"has-addons-fullwidth"},{default:o(()=>[t(p,null,{default:o(()=>[t(v,C({value:n.start},P(V.start)),null,16,["value"])]),_:2},1024),t(p,{nogrow:""},{default:o(()=>[ye]),_:1}),t(p,{subcontrol:""},{default:o(()=>[t(v,C({value:n.end},P(V.end)),null,16,["value"])]),_:2},1024)]),_:2},1024)]),_:1},8,["locale","modelValue"])]),e("div",be,[t(w,null,{default:o(()=>[t(p,{icon:"feather:box"},{default:o(()=>[t(v,{type:"text",placeholder:"Company Name",autocomplete:"organization"})]),_:1})]),_:1})]),e("div",ke,[t(w,null,{default:o(()=>[t(p,{icon:"feather:briefcase"},{default:o(()=>[t(v,{type:"text",placeholder:"Job Title",autocomplete:"organization-title"})]),_:1})]),_:1})]),e("div",we,[t(f,{type:"submit",color:"primary",raised:"",fullwidth:""},{default:o(()=>[xe]),_:1})])])])],40,fe)):(u(),_(q,{key:1},[e("div",Ee,[e("img",{src:c,alt:"",onErrorOnce:s[3]||(s[3]=n=>l(d)(n,"50x50"))},null,32),Ve,e("div",Oe,[t(r)])]),e("div",Ce,[e("img",{src:c,alt:"",onErrorOnce:s[4]||(s[4]=n=>l(d)(n,"50x50"))},null,32),Pe,e("div",Se,[t(r)])]),e("div",We,[e("img",{src:c,alt:"",onErrorOnce:s[5]||(s[5]=n=>l(d)(n,"50x50"))},null,32),De,e("div",$e,[t(r)])]),e("div",Ae,[e("img",{src:c,alt:"",onErrorOnce:s[6]||(s[6]=n=>l(d)(n,"50x50"))},null,32),Ie,e("div",Fe,[t(r)])]),e("div",Je,[e("img",{src:c,alt:"",onErrorOnce:s[7]||(s[7]=n=>l(d)(n,"50x50"))},null,32),ze,e("div",Be,[t(r)])]),e("div",Ke,[e("img",{src:c,alt:"",onErrorOnce:s[8]||(s[8]=n=>l(d)(n,"50x50"))},null,32),Ne,e("div",Me,[t(r)])]),e("div",He,[t(B,{icon:"lnil lnil-circle-plus"}),Te,e("div",Ge,[t(f,{raised:"","dark-outlined":"",icon:"fas fa-plus",class:"add-setting-item",tabindex:"0",onKeydown:s[9]||(s[9]=E(h(n=>a.value=!0,["prevent"]),["space"])),onClick:s[10]||(s[10]=n=>a.value=!0)},{default:o(()=>[Re]),_:1})])])],64))])])])])}}}),ts=S({setup(W){return ee().setPageTitle("Profile Edit 2"),Q({title:"Profile Edit 2 - Sidebar - Vuero"}),(m,y)=>{const b=je;return u(),Y(b)}}});export{ts as default};
