import{d as a,j as u,S as n}from"./index.f060b7c6.js";import{u as f}from"./useNotyf.14aeb83f.js";const g=a(({router:i,api:c,pinia:o})=>{i.beforeEach(async(e,t)=>{const r=u(o),s=f();if(t===n&&r.isLoggedIn)try{r.fetchProfile()}catch{if(r.logoutUser(),s.error("Your session is invalid"),e.meta.requiresAuth)return{name:"auth",query:{redirect:e.fullPath}}}else if(e.meta.requiresAuth&&!r.isLoggedIn)return s.error({message:"Sorry, you should loggin to access this section",duration:5e3}),{name:"auth",query:{redirect:e.fullPath}}})});export{g as default};