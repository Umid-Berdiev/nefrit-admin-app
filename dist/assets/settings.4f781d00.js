import{z as h,b as $,bV as N,N as w,a as S,A as E,r as x,e as B,o as v,i as C,j as s,t as r,q as e,w as a,m as O,k as j,E as l,v as W,P as U,a4 as z,a2 as D,a3 as F,O as I,f as T}from"./index.5f12676e.js";import{u as q}from"./viewWrapper.599b7199.js";const A={class:"account-box is-form is-footerless"},H={class:"form-head-inner"},L={class:"left"},M={class:"right"},R={class:"buttons"},G=["onSubmit"],J={class:"fieldset"},K=s("div",{class:"fieldset-heading"},null,-1),Q={class:"columns is-multiline"},X={class:"column is-12"},Y={class:"help has-text-danger"},Z={class:"column is-12"},ss={class:"help has-text-danger"},es={class:"column is-12"},os={class:"help has-text-danger"},as=h({setup(g){const t=$(),{y:m}=N(),{t:d,locale:y}=w(),{updateProfilePassword:i}=S(),_=E(!1),n=x({old_password:[],password:[],password_confirmation:[]}),b=B(()=>m.value>30);async function k(o){try{_.value=!0,P();const c=Object.fromEntries(new FormData(o.target));await i(c),t.success(d("Updated_successfully"))}catch(c){t.error(d("Error_while_updating_data")),Object.assign(n,c.response?.data?.errors)}finally{_.value=!1}}function P(){Object.assign(n,{old_password:[],password:[],password_confirmation:[]})}return(o,c)=>{const V=U,p=z,u=D,f=F;return v(),C("div",A,[s("div",{class:j(["form-head stuck-header",[l(b)&&"is-stuck"]])},[s("div",H,[s("div",L,[s("h3",null,r(o.$t("Change_password")),1)]),s("div",M,[s("div",R,[e(V,{type:"submit",color:"primary",raised:"",loading:_.value,tabindex:"0",form:"pwd-update-form"},{default:a(()=>[O(r(o.$t("Save_changes")),1)]),_:1},8,["loading"])])])])],2),s("form",{id:"pwd-update-form",class:"form-body",onSubmit:W(k,["prevent"])},[s("div",J,[K,s("div",Q,[s("div",X,[e(f,null,{default:a(()=>[e(u,{icon:"feather:unlock"},{default:a(()=>[e(p,{type:"password",placeholder:o.$t("Old_Password"),name:"old_password"},null,8,["placeholder"]),s("p",Y,r(l(n).old_password[0]),1)]),_:1})]),_:1})]),s("div",Z,[e(f,null,{default:a(()=>[e(u,{icon:"feather:lock"},{default:a(()=>[e(p,{type:"password",placeholder:o.$t("New_Password"),name:"password"},null,8,["placeholder"]),s("p",ss,r(l(n).password[0]),1)]),_:1})]),_:1})]),s("div",es,[e(f,null,{default:a(()=>[e(u,{icon:"feather:lock"},{default:a(()=>[e(p,{type:"password",placeholder:o.$t("Repeat_New_Password"),name:"password_confirmation"},null,8,["placeholder"]),s("p",os,r(l(n).password_confirmation[0]),1)]),_:1})]),_:1})])])])],40,G)])}}}),rs=h({setup(g){const{t}=w();return q().setPageTitle(t("Edit_profile_pwd")),I({title:`${t("Edit_profile_pwd")} - Nefrit`}),(d,y)=>{const i=as;return v(),T(i)}}});export{rs as default};
