import{d as t,a as o,b as u,S as c}from"./index.14f36682.js";const g=t(async({router:a,api:f,pinia:i})=>{a.beforeEach(async(e,n)=>{const r=o(i),s=u();if(n===c&&r.isLoggedIn)try{r.fetchProfile()}catch{if(r.logoutUser(),s.error("Your session is invalid"),e.meta.requiresAuth)return{name:"auth",query:{redirect:e.fullPath}}}else{if(e.meta.requiresAuth&&!r.isLoggedIn)return s.error({message:"Sorry, you should loggin to access this section",duration:5e3}),{name:"/",query:{redirect:e.fullPath}};if(e.path==="/"&&r.isLoggedIn)return{name:"app"}}})});export{g as default};
