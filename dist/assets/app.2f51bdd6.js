import{R as H,o as p,i as g,g as A,z as b,U as V,v as S,l as y,j as e,k as C,M as N,A as x,D as I,E as o,h as T,T as P,a as Y,e as B,p as R,q as s,w as n,m as f,t as m,f as z,P as U,V as ae,W as ne,u as J,X as K,N as ie,F as W,s as G,Y as oe,Z as le,G as ce,b as de,$ as re,a0 as ue,a1 as pe,a2 as _e,a3 as ve,a4 as me,a5 as fe}from"./index.1658e387.js";import{u as X}from"./viewWrapper.1ab7734d.js";import{u as Z}from"./index.4c020460.js";import{_ as Q}from"./VAvatar.vue_vue_type_style_index_0_lang.c03cd363.js";import{L as he}from"./LocalesDropdown.dc7d4d85.js";import{_ as ee}from"./VModal.vue_vue_type_style_index_0_lang.831bba00.js";import{_ as ge}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.8c9081fa.js";import{_ as $e}from"./VDropdown.vue_vue_type_style_index_0_lang.ca82b83f.js";import{_ as F,a as ye}from"./VOption.vue_vue_type_style_index_0_lang.3c6b7c37.js";import{C as be,a as ke,e as we}from"./editor-data.b7d86e52.js";import{f as Ce}from"./index.3b4c76c9.js";import{b as q}from"./route-block.3d2a9a4d.js";import"./via-placeholder.9af8280d.js";import"./VIcon.vue_vue_type_script_setup_true_lang.e3275797.js";import"./vue.runtime.esm-bundler.cda40297.js";const ze={},Ve={class:"page-content"};function Se(r,a){return p(),g("div",Ve,[A(r.$slots,"default")])}const xe=H(ze,[["render",Se]]),De=b({props:{isOpen:{type:Boolean}},emits:["toggle"],setup(r,{emit:a}){const i=r;return(u,t)=>i.isOpen?(p(),g("div",{key:0,class:"mobile-overlay",tabindex:"0",onKeydown:t[0]||(t[0]=V(S(c=>a("toggle"),["prevent"]),["space"])),onClick:t[1]||(t[1]=c=>a("toggle"))},null,32)):y("",!0)}});const Le={class:"navbar mobile-navbar is-hidden-desktop is-hidden-tablet","aria-label":"main navigation"},Me={class:"container"},je={class:"navbar-brand"},Te={class:"brand-start"},Re=e("span",null,null,-1),Ae=e("span",null,null,-1),Ne=e("span",null,null,-1),Pe=[Re,Ae,Ne],Be=b({props:{isOpen:{type:Boolean}},emits:["toggle"],setup(r,{emit:a}){const i=r;return(u,t)=>(p(),g("nav",Le,[e("div",Me,[e("div",je,[e("div",Te,[e("div",{class:C(["navbar-burger",[i.isOpen&&"is-active"]]),tabindex:"0",onKeydown:t[0]||(t[0]=V(S(c=>a("toggle"),["prevent"]),["space"])),onClick:t[1]||(t[1]=c=>a("toggle"))},Pe,34)]),A(u.$slots,"brand")])])]))}});const Ie=b({props:{open:{type:[Boolean,String],default:void 0},collapseId:{type:String,default:void 0}},emits:["update:open"],setup(r,{slots:a,emit:i}){const u=N(),t=x(!1),c=a.default?.()??[],d=u.name;c.forEach(_=>{_.props?.to?.name&&d===_.props.to.name&&(t.value=!0)});const l=x(Boolean(t.value||typeof r.collapseId=="string"&&r.open===r.collapseId||typeof r.collapseId>"u"&&r.open===!0));function v(){typeof r.collapseId=="string"?r.collapseId===r.open?i("update:open"):i("update:open",r.collapseId):l.value=!l.value}return I(()=>r.open,_=>{l.value=Boolean(typeof r.collapseId=="string"&&o(_)===r.collapseId||typeof r.collapseId>"u"&&o(_)===!0)}),()=>{const _=a.header?.(),h=(a.default?.()??[]).map(k=>T("li",{},k)),w=T("a",{tabindex:0,class:"parent-link",onClick:k=>{k.preventDefault(),v()},onKeydown(k){k.code==="Space"&&(k.preventDefault(),k.stopPropagation(),v())}},_),M=T("div",{class:"collapse-wrap"},w),j=l.value?T("ul",{},h):void 0;return T("li",{class:["collapse-links has-children",l.value&&"active"]},[M,T(P,{name:"collapse-links-transition",mode:"out-in",class:"collapse-content"},{default(){return j}})])}}});const Ke=H(Ie,[["__scopeId","data-v-949418fc"]]),Ee={class:"fa-ul"},Oe=e("span",{class:"fa-li"},[e("i",{class:"fas fa-home","aria-hidden":"true"})],-1),Ue={key:0},We=e("span",{class:"fa-li"},[e("i",{class:"fas fa-user-friends","aria-hidden":"true"})],-1),Fe=e("span",{class:"fa-li"},[e("i",{class:"fas fa-file-alt","aria-hidden":"true"})],-1),qe={key:1},He=e("span",{class:"fa-li"},[e("i",{class:"fas fa-users","aria-hidden":"true"})],-1),Ye={key:2},Je=e("span",{class:"fa-li"},[e("i",{class:"fas fa-user-shield","aria-hidden":"true"})],-1),Ge={key:3},Xe=e("span",{class:"fa-li"},[e("i",{class:"lnir lnir-grid-alt","aria-hidden":"true"})],-1),Ze={key:4},Qe=e("span",{class:"fa-li"},[e("i",{class:"lnir lnir-revenue","aria-hidden":"true"})],-1),es={key:5},ss=e("span",{class:"fa-li"},[e("i",{class:"lnil lnil-euro-down","aria-hidden":"true"})],-1),ts=e("span",{class:"fa-li"},[e("i",{class:"fas fa-file-invoice","aria-hidden":"true"})],-1),as={class:"is-size-6"},ns=e("span",{class:"fa-li"},[e("i",{class:"fas fa-book-open","aria-hidden":"true"})],-1),is={class:"is-size-6"},os=e("div",{class:"is-divider"},null,-1),ls={key:8},cs={class:"fa-li ml-3"},ds=e("i",{class:"fas fa-download","aria-hidden":"true"},null,-1),se=b({setup(r){const a=N(),i=Z(),u=Y();x(!1);const t=B(()=>Number(u.user?.role_id));function c(){i.$patch({contractDownloadModalState:!0})}return(d,l)=>{const v=R("RouterLink"),_=R("VueIconify"),$=Ke,h=U;return p(),g("ul",Ee,[e("li",null,[s(v,{class:"is-size-6",to:{name:"app"}},{default:n(()=>[Oe,f(" "+m(d.$t("Dashboard")),1)]),_:1})]),[1,2,3].includes(o(t))?(p(),g("li",Ue,[s(v,{class:"is-size-6",to:{name:"app-applicants"}},{default:n(()=>[We,f(" "+m(d.$t("Applicants")),1)]),_:1})])):y("",!0),e("li",null,[s(v,{class:"is-size-6",to:{name:"app-statements"}},{default:n(()=>[Fe,f(" "+m(d.$t("Statements")),1)]),_:1})]),[1,2].includes(o(t))?(p(),g("li",qe,[s(v,{class:"is-size-6",to:{name:"app-employees"}},{default:n(()=>[He,f(" "+m(d.$t("Employees")),1)]),_:1})])):y("",!0),[1,2].includes(o(t))?(p(),g("li",Ye,[s(v,{class:"is-size-6",to:{name:"app-roles"}},{default:n(()=>[Je,f(" "+m(d.$t("Roles")),1)]),_:1})])):y("",!0),[1].includes(o(t))?(p(),g("li",Ge,[s(v,{class:"is-size-6",to:{name:"app-departments"}},{default:n(()=>[Xe,f(" "+m(d.$t("Departments")),1)]),_:1})])):y("",!0),[1,2,3,7].includes(o(t))?(p(),g("li",Ze,[s(v,{class:"is-size-6",to:{name:"app-contracts"}},{default:n(()=>[Qe,f(" "+m(d.$t("Contracts")),1)]),_:1})])):y("",!0),[1,2,7].includes(o(t))?(p(),g("li",es,[s(v,{class:"is-size-6",to:{name:"app-contract-templates"}},{default:n(()=>[ss,f(" "+m(d.$t("Contract_templates")),1)]),_:1})])):y("",!0),[1,2,3,5,7].includes(o(t))?(p(),z($,{key:6},{header:n(()=>[ts,e("span",as,m(d.$t("Reports")),1),s(_,{icon:"feather:chevron-right"})]),default:n(()=>[[1,2,3,5,7].includes(o(t))?(p(),z(v,{key:0,to:{name:"app-reports-payments"},class:"is-submenu is-size-6"},{default:n(()=>[s(_,{icon:"feather:circle"}),f(" "+m(d.$t("Payments")),1)]),_:1})):y("",!0),[1,2,3,5].includes(o(t))?(p(),z(v,{key:1,to:{name:"app-reports-applicants"},class:"is-submenu is-size-6"},{default:n(()=>[s(_,{icon:"feather:circle"}),f(" "+m(d.$t("Applicants")),1)]),_:1})):y("",!0),[1,2,3,5].includes(o(t))?(p(),z(v,{key:2,to:{name:"app-reports-statements"},class:"is-submenu is-size-6"},{default:n(()=>[s(_,{icon:"feather:circle"}),f(" "+m(d.$t("Statements")),1)]),_:1})):y("",!0),[1,2,3,5].includes(o(t))?(p(),z(v,{key:3,to:{name:"app-reports-certificates"},class:"is-submenu is-size-6"},{default:n(()=>[s(_,{icon:"feather:circle"}),f(" "+m(d.$t("Certificates")),1)]),_:1})):y("",!0)]),_:1})):y("",!0),[1,2].includes(o(t))?(p(),z($,{key:7},{header:n(()=>[ns,e("span",is,m(d.$t("Handbook")),1),s(_,{icon:"feather:chevron-right"})]),default:n(()=>[s(v,{to:{name:"app-handbooks-about"},class:"is-submenu is-size-6"},{default:n(()=>[s(_,{icon:"feather:circle"}),f(" "+m(d.$t("About")),1)]),_:1}),s(v,{to:{name:"app-handbooks-contacts"},class:"is-submenu is-size-6"},{default:n(()=>[s(_,{icon:"feather:circle"}),f(" "+m(d.$t("Contacts")),1)]),_:1}),s(v,{to:{name:"app-handbooks-articles"},class:C(["is-submenu is-size-6",{"router-link-exact-active":o(a).path.startsWith("/app/handbooks/articles")}])},{default:n(()=>[s(_,{icon:"feather:circle"}),f(" "+m(d.$t("Articles")),1)]),_:1},8,["class"]),s(v,{to:{name:"app-handbooks-faq"},class:"is-submenu is-size-6"},{default:n(()=>[s(_,{icon:"feather:circle"}),f(" "+m(d.$t("Faq")),1)]),_:1}),s(v,{to:{name:"app-handbooks-regulation"},class:"is-submenu is-size-6"},{default:n(()=>[s(_,{icon:"feather:circle"}),f(" "+m(d.$t("Regulation")),1)]),_:1}),s(v,{to:{name:"app-handbooks-doc-categories"},class:"is-submenu is-size-6"},{default:n(()=>[s(_,{icon:"feather:circle"}),f(" "+m(d.$t("Doc_categories")),1)]),_:1})]),_:1})):y("",!0),os,[1,2,7].includes(o(t))?(p(),g("li",ls,[e("span",cs,[s(h,{color:"primary",outlined:"",class:"is-size-6",onClick:c},{default:n(()=>[ds,f(" "+m(d.$t("Download_contract_template")),1)]),_:1})])])):y("",!0)])}}});const rs={class:"sidebar-panel is-generic px-3"},us={class:"subpanel-header mb-2"},ps={class:"sidebar-brand is-flex is-align-items-start"},_s=e("span",{class:"is-size-3 has-text-primary"}," Nefrit ",-1),vs=e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1),ms=[vs],fs=e("p",{class:"ml-5"},"Menu",-1),hs=e("div",{class:"is-divider my-0"},null,-1),gs={class:"inner","data-simplebar":""},$s=b({emits:["close"],setup(r,{emit:a}){return N(),(i,u)=>{const t=R("RouterLink");return p(),g("div",rs,[e("div",us,[s(t,{to:{name:"index"}},{default:n(()=>[e("div",ps,[s(ae,{width:"36px",class:"mr-3"}),_s])]),_:1}),e("div",{class:"panel-close",tabindex:"0",onKeydown:u[0]||(u[0]=V(S(c=>a("close"),["prevent"]),["space"])),onClick:u[1]||(u[1]=c=>a("close"))},ms,32)]),fs,hs,e("div",gs,[s(se)])])}}});const ys={class:"mobile-subsidebar"},bs={class:"inner"},ks=b({setup(r){return(a,i)=>(p(),g("div",ys,[e("div",bs,[s(se,{class:"submenu"})])]))}}),ws=["value","max"],Cs=b({props:{value:{default:void 0},max:{default:100},size:{default:void 0},color:{default:"primary"}},setup(r){const a=r;return(i,u)=>(p(),g("progress",{class:C(["progress",[a.size&&`is-${a.size}`,a.color&&`is-${a.color}`]]),value:a.value,max:a.max},m(a.value?`${a.value/a.max*100}%`:""),11,ws))}});const zs="/images/icons/logos/slicer.svg",Vs="/images/icons/logos/metamovies.svg",Ss="/images/icons/logos/fastpizza.svg",te=ne("panels",()=>{const r=J("active-panel","none");function a(u){r.value=u}function i(){r.value="none"}return{active:r,setActive:a,close:i}}),xs={class:"right-panel"},Ds={class:"right-panel-head"},Ls=e("h3",null,"Activity",-1),Ms=e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),js=[Ms],Ts={class:"tabs-wrapper is-triple-slider is-squared"},Rs={class:"tabs-inner"},As={class:"tabs"},Ns=e("span",null,"Team",-1),Ps=[Ns],Bs=e("span",null,"Projects",-1),Is=[Bs],Ks=e("span",null,"Schedule",-1),Es=[Ks],Os=e("li",{class:"tab-naver"},null,-1),Us={class:"right-panel-body"},Ws={class:"team-card"},Fs=e("div",{class:"meta"},[e("span",null,"Joshua S."),e("span",null,[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"}),f(" Las Vegas, NV ")])],-1),qs=e("a",{class:"link"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),Hs={class:"team-card"},Ys=e("div",{class:"meta"},[e("span",null,"Melany W."),e("span",null,[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"}),f(" San Jose, CA ")])],-1),Js=e("a",{class:"link"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),Gs={class:"team-card"},Xs=e("div",{class:"meta"},[e("span",null,"Esteban C."),e("span",null,[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"}),f(" Miami, FL ")])],-1),Zs=e("a",{class:"link"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),Qs={class:"team-card"},et=e("div",{class:"meta"},[e("span",null,"Tara S."),e("span",null,[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"}),f(" New York, NY ")])],-1),st=e("a",{class:"link"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),tt={class:"project-card"},at=K('<div class="project-inner"><img class="project-avatar" src="'+zs+'" alt=""><div class="meta"><span>The slicer project</span><span>getslicer.io</span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),nt={class:"project-foot"},it={class:"foot-stats"},ot=e("span",null,"5 / 24",-1),lt={class:"avatar-stack"},ct={class:"project-card"},dt=K('<div class="project-inner"><img class="project-avatar" src="'+Vs+'" alt=""><div class="meta"><span>Metamovies reworked</span><span>metamovies.co</span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),rt={class:"project-foot"},ut={class:"foot-stats"},pt=e("span",null,"28 / 31",-1),_t={class:"avatar-stack"},vt={class:"project-card"},mt=K('<div class="project-inner"><img class="project-avatar" src="'+Ss+'" alt=""><div class="meta"><span>Fast Pizza redesign</span><span>fastpizza.com</span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),ft={class:"project-foot"},ht={class:"foot-stats"},gt=e("span",null,"25 / 39",-1),$t={class:"avatar-stack"},yt=K('<div class="icon-timeline"><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Danny at Colby&#39;s</p><span>Today - 11:30am</span></div></div><div class="timeline-item"><div class="timeline-icon"><img class="avatar" src="" alt=""></div><div class="timeline-content"><p>Meeting with Alice</p><span>Today - 01:00pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></div><div class="timeline-content"><p>Answer Annie&#39;s message</p><span>Today - 01:45pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></div><div class="timeline-content"><p>Send new campaign</p><span>Today - 02:30pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:smile"></i></div><div class="timeline-content"><p>Project review</p><span>Today - 03:30pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Trisha Jackson</p><span>Today - 05:00pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:feather"></i></div><div class="timeline-content"><p>Write proposal for Don</p><span>Today - 06:00pm</span></div></div></div>',1),bt=[yt],kt=b({setup(r){const a=te(),i=x("team");return(u,t)=>{const c=Q,d=Cs;return p(),g("div",{id:"activity-panel",class:C([[o(a).active==="activity"&&"is-active"],"right-panel-wrapper is-activity"])},[e("div",{class:"panel-overlay",tabindex:"0",onKeydown:t[0]||(t[0]=V(S(l=>o(a).close(),["prevent"]),["space"])),onClick:t[1]||(t[1]=l=>o(a).close())},null,32),e("div",xs,[e("div",Ds,[Ls,e("a",{class:"close-panel",tabindex:"0",onKeydown:t[2]||(t[2]=V(S(l=>o(a).close(),["prevent"]),["space"])),onClick:t[3]||(t[3]=l=>o(a).close())},js,32)]),e("div",Ts,[e("div",Rs,[e("div",As,[e("ul",null,[e("li",{class:C([i.value==="team"&&"is-active"])},[e("a",{tabindex:"0",onKeydown:t[4]||(t[4]=V(S(l=>i.value="team",["prevent"]),["space"])),onClick:t[5]||(t[5]=l=>i.value="team")},Ps,32)],2),e("li",{class:C([i.value==="projects"&&"is-active"])},[e("a",{tabindex:"0",onKeydown:t[6]||(t[6]=V(S(l=>i.value="projects",["prevent"]),["space"])),onClick:t[7]||(t[7]=l=>i.value="projects")},Is,32)],2),e("li",{class:C([i.value==="schedule"&&"is-active"])},[e("a",{tabindex:"0",onKeydown:t[8]||(t[8]=V(S(l=>i.value="schedule",["prevent"]),["space"])),onClick:t[9]||(t[9]=l=>i.value="schedule")},Es,32)],2),Os])])]),e("div",Us,[e("div",{id:"team-side-tab",class:C(["tab-content",[i.value==="team"&&"is-active"]])},[e("div",Ws,[s(c,{picture:"",badge:"/images/icons/flags/united-states-of-america.svg"}),Fs,qs]),e("div",Hs,[s(c,{picture:"",badge:"/images/icons/flags/united-states-of-america.svg"}),Ys,Js]),e("div",Gs,[s(c,{picture:"",badge:"/images/icons/flags/united-states-of-america.svg"}),Xs,Zs]),e("div",Qs,[s(c,{picture:"",badge:"/images/icons/flags/united-states-of-america.svg"}),et,st])],2),e("div",{id:"projects-side-tab",class:C(["tab-content",[i.value==="projects"&&"is-active"]])},[e("div",tt,[at,e("div",nt,[s(d,{size:"tiny",value:31}),e("div",it,[ot,e("div",lt,[s(c,{size:"small",picture:""}),s(c,{size:"small",picture:""}),s(c,{size:"small",picture:"/images/avatars/svg/vuero-1.svg"})])])])]),e("div",ct,[dt,e("div",rt,[s(d,{size:"tiny",value:84}),e("div",ut,[pt,e("div",_t,[s(c,{size:"small",picture:""}),s(c,{size:"small",picture:""})])])])]),e("div",vt,[mt,e("div",ft,[s(d,{size:"tiny",value:60}),e("div",ht,[gt,e("div",$t,[s(c,{size:"small",picture:""}),s(c,{size:"small",picture:""})])])])])],2),e("div",{id:"schedule-side-tab",class:C(["tab-content",[i.value==="schedule"&&"is-active"]])},bt,2)])])])],2)}}});const wt={class:"right-panel"},Ct={class:"right-panel-head"},zt=e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Vt=[zt],St={class:"right-panel-body has-slimscroll"},xt={class:"languages-boxes"},Dt={class:"language-option"},Lt=["value","checked"],Mt={class:"language-option-inner"},jt=e("div",{class:"indicator"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})],-1),Tt=b({setup(r){const a=te(),{locale:i,t:u,availableLocales:t}=ie(),c=J("locale","uz");return I(i,()=>{c.value=i.value}),(d,l)=>{const v=Q;return p(),g("div",{id:"languages-panel",class:C([[o(a).active==="languages"&&"is-active"],"right-panel-wrapper is-languages"])},[e("div",{class:"panel-overlay",tabindex:"0",onKeydown:l[0]||(l[0]=V(S(_=>o(a).close(),["prevent"]),["space"])),onClick:l[1]||(l[1]=_=>o(a).close())},null,32),e("div",wt,[e("div",Ct,[e("h3",null,m(o(u)("select-language")),1),e("a",{class:"close-panel",tabindex:"0",onKeydown:l[2]||(l[2]=V(S(_=>o(a).close(),["prevent"]),["space"])),onClick:l[3]||(l[3]=_=>o(a).close())},Vt,32)]),e("div",St,[e("div",xt,[(p(!0),g(W,null,G(o(t),_=>(p(),g("div",{key:_,class:"language-box"},[e("div",Dt,[oe(e("input",{"onUpdate:modelValue":l[4]||(l[4]=$=>ce(i)?i.value=$:null),type:"radio",name:"language_selection",value:_,checked:o(i)===o(c)},null,8,Lt),[[le,o(i)]]),e("div",Mt,[s(v,{initials:_,size:"medium"},null,8,["initials"]),jt])])]))),128))])])])],2)}}});const Rt=b({props:{topNav:{type:Boolean},full:{type:Boolean}},setup(r){const a=r,i=X();return(u,t)=>(p(),g("div",{class:C(["view-wrapper",[a.topNav&&"has-top-nav",a.full&&"view-wrapper-full",o(i).isPushed&&"is-pushed-full",o(i).isPushedBlock&&"is-pushed-block"]])},[A(u.$slots,"default")],2))}});const At=e("i",{class:"fas fa-user fa-lg has-text-primary","aria-hidden":"true"},null,-1),Nt={class:"dropdown-item is-size-4"},Pt=e("div",{class:"icon"},[e("i",{class:"iconify","data-icon":"feather:user","aria-hidden":"true"})],-1),Bt={class:"meta"},It=e("div",{class:"icon"},[e("i",{class:"iconify","data-icon":"feather:bell","aria-hidden":"true"})],-1),Kt={class:"meta"},Et=e("hr",{class:"dropdown-divider"},null,-1),Ot=e("div",{class:"icon"},[e("i",{class:"iconify","data-icon":"feather:log-out","aria-hidden":"true"})],-1),Ut={class:"meta"},Wt=b({setup(r){const{user:a,logoutUser:i,setLoading:u}=Y(),t=de(),c=re(),d=x(!1),l=B(()=>a);function v(){console.log("in onLogout func"),d.value=!0}async function _(){try{u(!0),await i(),c.push("/")}catch($){t.error($.message)}finally{u(!1)}}return($,h)=>{const w=U,M=R("RouterLink"),j=$e,k=ge,D=ee;return p(),g(W,null,[s(j,{title:"Dropdown with icon",spaced:"",right:""},{button:n(({open:E,toggle:O})=>[s(w,{class:"is-trigger",rounded:"",outlined:"",light:"",onClick:O},{default:n(()=>[At]),_:2},1032,["onClick"])]),content:n(()=>[e("h1",Nt,m(o(l)?.username?.toUpperCase()),1),s(M,{to:"/app/profile/profile-edit",class:"dropdown-item is-media"},{default:n(()=>[Pt,e("div",Bt,[e("span",null,m($.$t("Go_to_profile")),1)])]),_:1}),s(M,{to:"/app/profile/profile-notifications",class:"dropdown-item is-media"},{default:n(()=>[It,e("div",Kt,[e("span",null,m($.$t("Notifications")),1)])]),_:1}),Et,e("a",{href:"javascript:;",class:"dropdown-item is-media",onClick:v},[Ot,e("div",Ut,[e("span",null,m($.$t("Logout")),1)])])]),_:1}),s(D,{open:d.value,actions:"center",title:$.$t("Confirm_action"),noclose:!0,onClose:h[0]||(h[0]=E=>d.value=!1),"cancel-label":$.$t("No")},{content:n(()=>[s(k,{title:$.$t("Are_you_sure")},null,8,["title"])]),action:n(()=>[s(w,{type:"button",class:"is-justify-content-center",color:"primary",outlined:"",onClick:_},{default:n(()=>[f(m($.$t("Yes")),1)]),_:1})]),_:1},8,["open","title","cancel-label"])],64)}}}),Ft={class:"toolbar ml-auto"},qt={class:"toolbar-link"},Ht=["checked"],Yt=e("span",null,null,-1),Jt=b({setup(r){const a=ue();return(i,u)=>(p(),g("div",Ft,[e("div",qt,[e("label",{tabindex:"0",class:"dark-mode ml-auto",onKeydown:u[1]||(u[1]=V(S(t=>t.target.click(),["prevent"]),["space"]))},[e("input",{type:"checkbox",checked:!o(a).isDark,onChange:u[0]||(u[0]=(...t)=>o(a).onChange&&o(a).onChange(...t))},null,40,Ht),Yt],32)]),s(he,{class:"mr-3"}),s(Wt),A(i.$slots,"default")]))}}),Gt={class:"columns is-multiline"},Xt={class:"column is-12"},Zt={class:"column is-12"},Qt=b({setup(r){const a=Z(),i=be.component,u=x(!1),t=B(()=>a.contractDownloadModalState),c=x([]),d=x(),l=B(()=>c.value.find(h=>h.id===d.value)||{name:"",body:"",payment_amount:""}),v=x("");I(()=>t.value,async()=>{if(t.value){const h=await Ce();c.value=h,v.value="contract_template_"+Date.now()}});async function _(){d.value=void 0,v.value="",a.$patch({contractDownloadModalState:!1})}function $(){u.value=!0;let h="<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>",w="</body></html>",M=h+l.value?.body+w,j="data:application/vnd.ms-word;charset=utf-8,"+encodeURIComponent(M),k=v.value+".doc",D=document.createElement("a");document.body.appendChild(D),D.href=j,D.download=k,D.click(),document.body.removeChild(D),u.value=!1}return(h,w)=>{const M=ye,j=pe,k=_e,D=ve,E=U,O=ee;return p(),z(O,{size:"big",open:o(t),actions:"center",title:h.$t("Download_contract_template"),onClose:_,"cancel-label":h.$t("Cancel")},{content:n(()=>[e("div",Gt,[e("div",Xt,[s(k,{label:h.$t("Select_template")},{default:n(()=>[s(j,null,{default:n(()=>[s(M,{modelValue:d.value,"onUpdate:modelValue":w[0]||(w[0]=L=>d.value=L)},{default:n(()=>[s(F,{hidden:"",value:""},{default:n(()=>[f(m(h.$t("Select_template")),1)]),_:1}),(p(!0),g(W,null,G(c.value,(L,ua)=>(p(),z(F,{value:L.id,textContent:m(L.name)},null,8,["value","textContent"]))),256))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label"]),s(k,{label:h.$t("Set_file_name")},{default:n(()=>[s(j,null,{default:n(()=>[s(D,{modelValue:v.value,"onUpdate:modelValue":w[1]||(w[1]=L=>v.value=L)},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])]),e("div",Zt,[s(o(i),{modelValue:o(l).body,"onUpdate:modelValue":w[2]||(w[2]=L=>o(l).body=L),editor:o(ke),config:o(we)},null,8,["modelValue","editor","config"])])])]),action:n(({close:L})=>[s(E,{loading:u.value,color:"primary",outlined:"",disabled:u.value,onClick:$},{default:n(()=>[f(m(h.$t("Download")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title","cancel-label"])}}});const ea={class:"sidebar-layout"},sa=e("div",{class:"app-overlay"},null,-1),ta={class:"page-title has-text-centered"},aa={class:"menu-toggle has-chevron"},na=e("span",{class:"rotate"},[e("i",{"aria-hidden":"true",class:"icon-line-top"}),e("i",{"aria-hidden":"true",class:"icon-line-center"}),e("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1),ia=[na],oa={class:"title-wrap"},la={class:"title is-4"},ca=e("div",{class:"is-divider"},null,-1),da=b({props:{theme:{default:"default"},defaultSidebar:{default:"dashboard"},closeOnChange:{type:Boolean},openOnMounted:{type:Boolean,default:!0},nowrap:{type:Boolean}},setup(r){const a=r,i=X(),u=N(),t=x(!1),c=x(a.openOnMounted);return x(a.defaultSidebar),me(()=>{i.setPushed(c.value??!1)}),I(()=>u.fullPath,()=>{t.value=!1,a.closeOnChange&&c.value&&(c.value=!1)}),(d,l)=>{const v=Be,_=De,$=xe;return p(),g("div",ea,[sa,s(v,{"is-open":t.value,onToggle:l[0]||(l[0]=h=>t.value=!t.value)},null,8,["is-open"]),s(_,{"is-open":t.value,onToggle:l[1]||(l[1]=h=>t.value=!t.value)},null,8,["is-open"]),s(P,{name:"slide-x"},{default:n(()=>[t.value?(p(),z(ks,{key:0})):y("",!0)]),_:1}),s(P,{name:"slide-x"},{default:n(()=>[c.value?(p(),z($s,{key:0,onClose:l[2]||(l[2]=h=>c.value=!1)})):y("",!0)]),_:1}),s(Tt),s(kt),s(Rt,null,{default:n(()=>[s($,{class:"is-relative"},{default:n(()=>[e("div",ta,[e("div",{class:"vuero-hamburger nav-trigger push-resize",tabindex:"0",onKeydown:l[3]||(l[3]=V(S(h=>c.value=!c.value,["prevent"]),["space"])),onClick:l[4]||(l[4]=h=>c.value=!c.value)},[e("span",aa,[e("span",{class:C([[c.value&&"active"],"icon-box-toggle"])},ia,2)])],32),e("div",oa,[e("h1",la,m(o(i).pageTitle),1)]),s(Jt,{class:"desktop-toolbar"})]),ca,A(d.$slots,"default")]),_:3})]),_:3}),s(Qt)])}}}),ra=b({setup(r){const a=N();return(i,u)=>{const t=R("RouterView"),c=da;return p(),z(c,null,{default:n(()=>[s(t,null,{default:n(({Component:d})=>[s(P,{name:"fade-fast",mode:"out-in"},{default:n(()=>[(p(),z(fe(d),{key:o(a).fullPath}))]),_:2},1024)]),_:1})]),_:1})}}});typeof q=="function"&&q(ra);export{ra as default};
