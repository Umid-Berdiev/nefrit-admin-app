import{A as _,o as t,j as i,k as e,t as n,F as r,v as d}from"./index.433ccf37.js";const p={id:"file-js-example",class:"file w-auto is-warning"},m={class:"file-label"},h={class:"file-cta"},v=e("span",{class:"file-icon"},[e("i",{class:"fas fa-upload"})],-1),b={class:"file-label"},g={class:"help has-text-danger"},y={class:"is-flex is-flex-direction-column"},k=e("div",{class:"is-divider my-3"},null,-1),x={class:"mr-3"},C=["onClick"],w=e("span",{class:"iconify","data-icon":"feather:x"},null,-1),j=[w],F={class:"mr-3"},B=["onClick"],M=e("span",{class:"iconify","data-icon":"feather:x"},null,-1),$=[M],D=_({props:{files:null,remoteFiles:null,errorMessage:{default:""}},emits:["file-upload","file-remove","remote-file-remove"],setup(o,{emit:l}){return(u,c)=>(t(),i("div",null,[e("div",p,[e("label",m,[e("input",{class:"file-input",type:"file",onChange:c[0]||(c[0]=s=>l("file-upload",s))},null,32),e("span",h,[v,e("span",b,n(u.$t("Choose_a_file"))+"\u2026 ",1)])])]),e("p",g,n(o.errorMessage),1),e("div",y,[k,(t(!0),i(r,null,d(o.remoteFiles,(s,a)=>(t(),i("div",{key:a,class:"is-flex is-align-items-center mb-3 is-justify-content-space-between"},[e("span",x,n(s.name),1),e("button",{type:"button",class:"button is-warning is-outlined is-rounded p-3",onClick:f=>l("remote-file-remove",s.id)},j,8,C)]))),128)),(t(!0),i(r,null,d(o.files,(s,a)=>(t(),i("div",{key:a,class:"is-flex is-align-items-center mb-3 is-justify-content-space-between"},[e("span",F,n(s.name),1),e("button",{type:"button",class:"button is-warning is-outlined is-rounded p-3",onClick:f=>l("file-remove",s.lastModified)},$,8,B)]))),128))])]))}});export{D as _};
