import{Q as E,o as p,i as h,g as P,z as y,R as z,v as V,l as $,j as e,k,M as R,A as x,D as B,E as o,h as T,T as A,a as Y,e as N,p as I,q as t,w as n,m as f,t as m,f as C,P as O,U as ne,V as oe,u as J,W as K,N as ie,F as U,s as G,X as le,Y as ce,G as de,b as re,Z as ue,$ as pe,a0 as _e,a1 as ve,a2 as me,a3 as fe,a4 as he,a5 as ge,a6 as $e}from"./index.e9599081.js";import{u as Q}from"./viewWrapper.14b00cc4.js";import{u as X}from"./index.fc077572.js";import{_ as W}from"./VAvatar.vue_vue_type_style_index_0_lang.e4593a2c.js";import{L as ye}from"./LocalesDropdown.c292707f.js";import{_ as Z}from"./VModal.vue_vue_type_style_index_0_lang.4181f2de.js";import{_ as be}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.a9a6d9f8.js";import{_ as ke}from"./VDropdown.vue_vue_type_style_index_0_lang.3ca48e4a.js";import{_ as q,a as we}from"./VOption.vue_vue_type_style_index_0_lang.2152ea57.js";import{C as Ce,a as ze,e as Ve}from"./editor-data.9f30449a.js";import{f as Se}from"./index.32db3285.js";import{b as H}from"./route-block.3d2a9a4d.js";import"./VIcon.vue_vue_type_script_setup_true_lang.dbfb29ab.js";import"./vue.runtime.esm-bundler.64b36f7c.js";const xe={},De={class:"page-content"};function Le(d,a){return p(),h("div",De,[P(d.$slots,"default")])}const Me=E(xe,[["render",Le]]),je=y({props:{isOpen:{type:Boolean}},emits:["toggle"],setup(d,{emit:a}){const i=d;return(_,s)=>i.isOpen?(p(),h("div",{key:0,class:"mobile-overlay",tabindex:"0",onKeydown:s[0]||(s[0]=z(V(l=>a("toggle"),["prevent"]),["space"])),onClick:s[1]||(s[1]=l=>a("toggle"))},null,32)):$("",!0)}});const Te={class:"navbar mobile-navbar is-hidden-desktop is-hidden-tablet","aria-label":"main navigation"},Ie={class:"container"},Pe={class:"navbar-brand"},Re={class:"brand-start"},Ae=e("span",null,null,-1),Ne=e("span",null,null,-1),Be=e("span",null,null,-1),Ke=[Ae,Ne,Be],Ee=y({props:{isOpen:{type:Boolean}},emits:["toggle"],setup(d,{emit:a}){const i=d;return(_,s)=>(p(),h("nav",Te,[e("div",Ie,[e("div",Pe,[e("div",Re,[e("div",{class:k(["navbar-burger",[i.isOpen&&"is-active"]]),tabindex:"0",onKeydown:s[0]||(s[0]=z(V(l=>a("toggle"),["prevent"]),["space"])),onClick:s[1]||(s[1]=l=>a("toggle"))},Ke,34)]),P(_.$slots,"brand")])])]))}});const Oe=y({props:{open:{type:[Boolean,String],default:void 0},collapseId:{type:String,default:void 0}},emits:["update:open"],setup(d,{slots:a,emit:i}){const _=R(),s=x(!1),l=a.default?.()??[],u=_.name;l.forEach(v=>{v.props?.to?.name&&u===v.props.to.name&&(s.value=!0)});const c=x(Boolean(s.value||typeof d.collapseId=="string"&&d.open===d.collapseId||typeof d.collapseId>"u"&&d.open===!0));function r(){typeof d.collapseId=="string"?d.collapseId===d.open?i("update:open"):i("update:open",d.collapseId):c.value=!c.value}return B(()=>d.open,v=>{c.value=Boolean(typeof d.collapseId=="string"&&o(v)===d.collapseId||typeof d.collapseId>"u"&&o(v)===!0)}),()=>{const v=a.header?.(),g=(a.default?.()??[]).map(b=>T("li",{},b)),w=T("a",{tabindex:0,class:"parent-link",onClick:b=>{b.preventDefault(),r()},onKeydown(b){b.code==="Space"&&(b.preventDefault(),b.stopPropagation(),r())}},v),j=T("div",{class:"collapse-wrap"},w),M=c.value?T("ul",{},g):void 0;return T("li",{class:["collapse-links has-children",c.value&&"active"]},[j,T(A,{name:"collapse-links-transition",mode:"out-in",class:"collapse-content"},{default(){return M}})])}}});const Ue=E(Oe,[["__scopeId","data-v-949418fc"]]),We={class:"fa-ul"},Fe=e("span",{class:"fa-li"},[e("i",{class:"fas fa-home","aria-hidden":"true"})],-1),qe={key:0},He=e("span",{class:"fa-li"},[e("i",{class:"fas fa-user-friends","aria-hidden":"true"})],-1),Ye=e("span",{class:"fa-li"},[e("i",{class:"fas fa-file-alt","aria-hidden":"true"})],-1),Je={key:1},Ge=e("span",{class:"fa-li"},[e("i",{class:"fas fa-users","aria-hidden":"true"})],-1),Qe={key:2},Xe=e("span",{class:"fa-li"},[e("i",{class:"fas fa-user-shield","aria-hidden":"true"})],-1),Ze={key:3},es=e("span",{class:"fa-li"},[e("i",{class:"fas fa-layer-group","aria-hidden":"true"})],-1),ss={key:4},ts=e("span",{class:"fa-li"},[e("i",{class:"lnir lnir-grid-alt","aria-hidden":"true"})],-1),as={key:5},ns=e("span",{class:"fa-li"},[e("i",{class:"fas fa-file-contract","aria-hidden":"true"})],-1),os={key:6},is=e("span",{class:"fa-li"},[e("i",{class:"fas fa-briefcase","aria-hidden":"true"})],-1),ls=e("span",{class:"fa-li"},[e("i",{class:"fas fa-chart-pie","aria-hidden":"true"})],-1),cs={class:"is-size-6"},ds=e("span",{class:"fa-li"},[e("i",{class:"fas fa-book-open","aria-hidden":"true"})],-1),rs={class:"is-size-6"},us=e("span",{class:"fa-li"},[e("i",{class:"fas fa-exclamation","aria-hidden":"true"})],-1),ps=e("div",{class:"is-divider"},null,-1),_s={key:9},vs={class:"fa-li ml-3"},ms=e("i",{class:"fas fa-download","aria-hidden":"true"},null,-1),ee=y({setup(d){const a=R(),i=X(),_=Y(),s=N(()=>Number(_.user?.role_id));function l(){i.$patch({contractDownloadModalState:!0})}return(u,c)=>{const r=I("RouterLink"),v=I("VueIconify"),S=Ue,g=O;return p(),h("ul",We,[e("li",null,[t(r,{class:"is-size-6",to:{name:"app"}},{default:n(()=>[Fe,f(" "+m(u.$t("Dashboard")),1)]),_:1})]),[1,2,3].includes(o(s))?(p(),h("li",qe,[t(r,{class:"is-size-6",to:{name:"app-applicants"}},{default:n(()=>[He,f(" "+m(u.$t("Applicants")),1)]),_:1})])):$("",!0),e("li",null,[t(r,{class:"is-size-6",to:{name:"app-statements"}},{default:n(()=>[Ye,f(" "+m(u.$t("Statements")),1)]),_:1})]),[1,2].includes(o(s))?(p(),h("li",Je,[t(r,{class:"is-size-6",to:{name:"app-employees"}},{default:n(()=>[Ge,f(" "+m(u.$t("Employees")),1)]),_:1})])):$("",!0),[1,2].includes(o(s))?(p(),h("li",Qe,[t(r,{class:"is-size-6",to:{name:"app-roles"}},{default:n(()=>[Xe,f(" "+m(u.$t("Roles")),1)]),_:1})])):$("",!0),[1,2,3].includes(o(s))?(p(),h("li",Ze,[t(r,{class:"is-size-6",to:"/app/doc-categories"},{default:n(()=>[es,f(" "+m(u.$t("Doc_categories")),1)]),_:1})])):$("",!0),[1].includes(o(s))?(p(),h("li",ss,[t(r,{class:"is-size-6",to:{name:"app-departments"}},{default:n(()=>[ts,f(" "+m(u.$t("Departments")),1)]),_:1})])):$("",!0),[1,2,3,7].includes(o(s))?(p(),h("li",as,[t(r,{class:"is-size-6",to:{name:"app-contracts"}},{default:n(()=>[ns,f(" "+m(u.$t("Contracts")),1)]),_:1})])):$("",!0),[1,2,7].includes(o(s))?(p(),h("li",os,[t(r,{class:"is-size-6",to:{name:"app-contract-templates"}},{default:n(()=>[is,f(" "+m(u.$t("Contract_templates")),1)]),_:1})])):$("",!0),[1,2,3,5,7].includes(o(s))?(p(),C(S,{key:7},{header:n(()=>[ls,e("span",cs,m(u.$t("Reports")),1),t(v,{icon:"feather:chevron-right"})]),default:n(()=>[[1,2,3,5,7].includes(o(s))?(p(),C(r,{key:0,to:{name:"app-reports-payments"},class:"is-submenu is-size-6"},{default:n(()=>[t(v,{icon:"feather:circle"}),f(" "+m(u.$t("Payments")),1)]),_:1})):$("",!0),[1,2,3,5].includes(o(s))?(p(),C(r,{key:1,to:{name:"app-reports-applicants"},class:"is-submenu is-size-6"},{default:n(()=>[t(v,{icon:"feather:circle"}),f(" "+m(u.$t("Applicants")),1)]),_:1})):$("",!0),[1,2,3,5].includes(o(s))?(p(),C(r,{key:2,to:{name:"app-reports-statements"},class:"is-submenu is-size-6"},{default:n(()=>[t(v,{icon:"feather:circle"}),f(" "+m(u.$t("Statements")),1)]),_:1})):$("",!0),[1,2,3,5].includes(o(s))?(p(),C(r,{key:3,to:{name:"app-reports-certificates"},class:"is-submenu is-size-6"},{default:n(()=>[t(v,{icon:"feather:circle"}),f(" "+m(u.$t("Certificates")),1)]),_:1})):$("",!0)]),_:1})):$("",!0),[1,2].includes(o(s))?(p(),C(S,{key:8},{header:n(()=>[ds,e("span",rs,m(u.$t("Handbook")),1),t(v,{icon:"feather:chevron-right"})]),default:n(()=>[t(r,{to:{name:"app-handbooks-about"},class:"is-submenu is-size-6"},{default:n(()=>[t(v,{icon:"feather:circle"}),f(" "+m(u.$t("About")),1)]),_:1}),t(r,{to:{name:"app-handbooks-contacts"},class:"is-submenu is-size-6"},{default:n(()=>[t(v,{icon:"feather:circle"}),f(" "+m(u.$t("Contacts")),1)]),_:1}),t(r,{to:{name:"app-handbooks-articles"},class:k(["is-submenu is-size-6",{"router-link-exact-active":o(a).path.startsWith("/app/handbooks/articles")}])},{default:n(()=>[t(v,{icon:"feather:circle"}),f(" "+m(u.$t("Articles")),1)]),_:1},8,["class"]),t(r,{to:{name:"app-handbooks-faq"},class:"is-submenu is-size-6"},{default:n(()=>[t(v,{icon:"feather:circle"}),f(" "+m(u.$t("Faq")),1)]),_:1}),t(r,{to:{name:"app-handbooks-regulation"},class:"is-submenu is-size-6"},{default:n(()=>[t(v,{icon:"feather:circle"}),f(" "+m(u.$t("Regulation")),1)]),_:1})]),_:1})):$("",!0),e("li",null,[t(r,{class:"is-size-6",to:{name:"app-videos"}},{default:n(()=>[us,f(" "+m(u.$t("Instructions")),1)]),_:1})]),ps,[1,2,7].includes(o(s))?(p(),h("li",_s,[e("span",vs,[t(g,{color:"primary",outlined:"",class:"is-size-6",onClick:l},{default:n(()=>[ms,f(" "+m(u.$t("Download_contract_template")),1)]),_:1})])])):$("",!0)])}}});const fs={class:"sidebar-panel is-generic px-3"},hs={class:"subpanel-header mb-2"},gs={class:"sidebar-brand is-flex is-align-items-start"},$s=e("span",{class:"is-size-3 has-text-primary"}," Nefrit ",-1),ys=e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"},null,-1),bs=[ys],ks=e("div",{class:"is-divider"},null,-1),ws={class:"inner","data-simplebar":""},Cs=y({emits:["close"],setup(d,{emit:a}){return R(),(i,_)=>{const s=I("RouterLink");return p(),h("div",fs,[e("div",hs,[t(s,{to:{name:"app"}},{default:n(()=>[e("div",gs,[t(ne,{width:"36px",class:"mr-3"}),$s])]),_:1}),e("div",{class:"panel-close",tabindex:"0",onKeydown:_[0]||(_[0]=z(V(l=>a("close"),["prevent"]),["space"])),onClick:_[1]||(_[1]=l=>a("close"))},bs,32)]),ks,e("div",ws,[t(ee)])])}}});const zs={class:"mobile-subsidebar"},Vs={class:"inner"},Ss=y({setup(d){return(a,i)=>(p(),h("div",zs,[e("div",Vs,[t(ee,{class:"submenu"})])]))}}),xs=["value","max"],Ds=y({props:{value:{default:void 0},max:{default:100},size:{default:void 0},color:{default:"primary"}},setup(d){const a=d;return(i,_)=>(p(),h("progress",{class:k(["progress",[a.size&&`is-${a.size}`,a.color&&`is-${a.color}`]]),value:a.value,max:a.max},m(a.value?`${a.value/a.max*100}%`:""),11,xs))}});const Ls="/images/icons/logos/slicer.svg",Ms="/images/icons/logos/metamovies.svg",js="/images/icons/logos/fastpizza.svg",se=oe("panels",()=>{const d=J("active-panel","none");function a(_){d.value=_}function i(){d.value="none"}return{active:d,setActive:a,close:i}}),Ts={class:"right-panel"},Is={class:"right-panel-head"},Ps=e("h3",null,"Activity",-1),Rs=e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),As=[Rs],Ns={class:"tabs-wrapper is-triple-slider is-squared"},Bs={class:"tabs-inner"},Ks={class:"tabs"},Es=e("span",null,"Team",-1),Os=[Es],Us=e("span",null,"Projects",-1),Ws=[Us],Fs=e("span",null,"Schedule",-1),qs=[Fs],Hs=e("li",{class:"tab-naver"},null,-1),Ys={class:"right-panel-body"},Js={class:"team-card"},Gs=e("div",{class:"meta"},[e("span",null,"Joshua S."),e("span",null,[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"}),f(" Las Vegas, NV ")])],-1),Qs=e("a",{class:"link"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),Xs={class:"team-card"},Zs=e("div",{class:"meta"},[e("span",null,"Melany W."),e("span",null,[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"}),f(" San Jose, CA ")])],-1),et=e("a",{class:"link"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),st={class:"team-card"},tt=e("div",{class:"meta"},[e("span",null,"Esteban C."),e("span",null,[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"}),f(" Miami, FL ")])],-1),at=e("a",{class:"link"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),nt={class:"team-card"},ot=e("div",{class:"meta"},[e("span",null,"Tara S."),e("span",null,[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:map-pin"}),f(" New York, NY ")])],-1),it=e("a",{class:"link"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:arrow-right"})],-1),lt={class:"project-card"},ct=K('<div class="project-inner"><img class="project-avatar" src="'+Ls+'" alt=""><div class="meta"><span>The slicer project</span><span>getslicer.io</span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),dt={class:"project-foot"},rt={class:"foot-stats"},ut=e("span",null,"5 / 24",-1),pt={class:"avatar-stack"},_t={class:"project-card"},vt=K('<div class="project-inner"><img class="project-avatar" src="'+Ms+'" alt=""><div class="meta"><span>Metamovies reworked</span><span>metamovies.co</span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),mt={class:"project-foot"},ft={class:"foot-stats"},ht=e("span",null,"28 / 31",-1),gt={class:"avatar-stack"},$t={class:"project-card"},yt=K('<div class="project-inner"><img class="project-avatar" src="'+js+'" alt=""><div class="meta"><span>Fast Pizza redesign</span><span>fastpizza.com</span></div><a class="link"><i aria-hidden="true" class="iconify" data-icon="feather:arrow-right"></i></a></div>',1),bt={class:"project-foot"},kt={class:"foot-stats"},wt=e("span",null,"25 / 39",-1),Ct={class:"avatar-stack"},zt=K('<div class="icon-timeline"><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Danny at Colby&#39;s</p><span>Today - 11:30am</span></div></div><div class="timeline-item"><div class="timeline-icon"><img class="avatar" src="" alt=""></div><div class="timeline-content"><p>Meeting with Alice</p><span>Today - 01:00pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:message-circle"></i></div><div class="timeline-content"><p>Answer Annie&#39;s message</p><span>Today - 01:45pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:mail"></i></div><div class="timeline-content"><p>Send new campaign</p><span>Today - 02:30pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:smile"></i></div><div class="timeline-content"><p>Project review</p><span>Today - 03:30pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:phone-call"></i></div><div class="timeline-content"><p>Call Trisha Jackson</p><span>Today - 05:00pm</span></div></div><div class="timeline-item"><div class="timeline-icon"><i aria-hidden="true" class="iconify" data-icon="feather:feather"></i></div><div class="timeline-content"><p>Write proposal for Don</p><span>Today - 06:00pm</span></div></div></div>',1),Vt=[zt],St=y({setup(d){const a=se(),i=x("team");return(_,s)=>{const l=W,u=Ds;return p(),h("div",{id:"activity-panel",class:k([[o(a).active==="activity"&&"is-active"],"right-panel-wrapper is-activity"])},[e("div",{class:"panel-overlay",tabindex:"0",onKeydown:s[0]||(s[0]=z(V(c=>o(a).close(),["prevent"]),["space"])),onClick:s[1]||(s[1]=c=>o(a).close())},null,32),e("div",Ts,[e("div",Is,[Ps,e("a",{class:"close-panel",tabindex:"0",onKeydown:s[2]||(s[2]=z(V(c=>o(a).close(),["prevent"]),["space"])),onClick:s[3]||(s[3]=c=>o(a).close())},As,32)]),e("div",Ns,[e("div",Bs,[e("div",Ks,[e("ul",null,[e("li",{class:k([i.value==="team"&&"is-active"])},[e("a",{tabindex:"0",onKeydown:s[4]||(s[4]=z(V(c=>i.value="team",["prevent"]),["space"])),onClick:s[5]||(s[5]=c=>i.value="team")},Os,32)],2),e("li",{class:k([i.value==="projects"&&"is-active"])},[e("a",{tabindex:"0",onKeydown:s[6]||(s[6]=z(V(c=>i.value="projects",["prevent"]),["space"])),onClick:s[7]||(s[7]=c=>i.value="projects")},Ws,32)],2),e("li",{class:k([i.value==="schedule"&&"is-active"])},[e("a",{tabindex:"0",onKeydown:s[8]||(s[8]=z(V(c=>i.value="schedule",["prevent"]),["space"])),onClick:s[9]||(s[9]=c=>i.value="schedule")},qs,32)],2),Hs])])]),e("div",Ys,[e("div",{id:"team-side-tab",class:k(["tab-content",[i.value==="team"&&"is-active"]])},[e("div",Js,[t(l,{picture:"",badge:"/images/icons/flags/united-states-of-america.svg"}),Gs,Qs]),e("div",Xs,[t(l,{picture:"",badge:"/images/icons/flags/united-states-of-america.svg"}),Zs,et]),e("div",st,[t(l,{picture:"",badge:"/images/icons/flags/united-states-of-america.svg"}),tt,at]),e("div",nt,[t(l,{picture:"",badge:"/images/icons/flags/united-states-of-america.svg"}),ot,it])],2),e("div",{id:"projects-side-tab",class:k(["tab-content",[i.value==="projects"&&"is-active"]])},[e("div",lt,[ct,e("div",dt,[t(u,{size:"tiny",value:31}),e("div",rt,[ut,e("div",pt,[t(l,{size:"small",picture:""}),t(l,{size:"small",picture:""}),t(l,{size:"small",picture:"/images/avatars/svg/vuero-1.svg"})])])])]),e("div",_t,[vt,e("div",mt,[t(u,{size:"tiny",value:84}),e("div",ft,[ht,e("div",gt,[t(l,{size:"small",picture:""}),t(l,{size:"small",picture:""})])])])]),e("div",$t,[yt,e("div",bt,[t(u,{size:"tiny",value:60}),e("div",kt,[wt,e("div",Ct,[t(l,{size:"small",picture:""}),t(l,{size:"small",picture:""})])])])])],2),e("div",{id:"schedule-side-tab",class:k(["tab-content",[i.value==="schedule"&&"is-active"]])},Vt,2)])])])],2)}}});const xt={class:"right-panel"},Dt={class:"right-panel-head"},Lt=e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:chevron-right"},null,-1),Mt=[Lt],jt={class:"right-panel-body has-slimscroll"},Tt={class:"languages-boxes"},It={class:"language-option"},Pt=["value","checked"],Rt={class:"language-option-inner"},At=e("div",{class:"indicator"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})],-1),Nt=y({setup(d){const a=se(),{locale:i,t:_,availableLocales:s}=ie(),l=J("locale","uz");return B(i,()=>{l.value=i.value}),(u,c)=>{const r=W;return p(),h("div",{id:"languages-panel",class:k([[o(a).active==="languages"&&"is-active"],"right-panel-wrapper is-languages"])},[e("div",{class:"panel-overlay",tabindex:"0",onKeydown:c[0]||(c[0]=z(V(v=>o(a).close(),["prevent"]),["space"])),onClick:c[1]||(c[1]=v=>o(a).close())},null,32),e("div",xt,[e("div",Dt,[e("h3",null,m(o(_)("select-language")),1),e("a",{class:"close-panel",tabindex:"0",onKeydown:c[2]||(c[2]=z(V(v=>o(a).close(),["prevent"]),["space"])),onClick:c[3]||(c[3]=v=>o(a).close())},Mt,32)]),e("div",jt,[e("div",Tt,[(p(!0),h(U,null,G(o(s),v=>(p(),h("div",{key:v,class:"language-box"},[e("div",It,[le(e("input",{"onUpdate:modelValue":c[4]||(c[4]=S=>de(i)?i.value=S:null),type:"radio",name:"language_selection",value:v,checked:o(i)===o(l)},null,8,Pt),[[ce,o(i)]]),e("div",Rt,[t(r,{initials:v,size:"medium"},null,8,["initials"]),At])])]))),128))])])])],2)}}});const Bt=y({props:{topNav:{type:Boolean},full:{type:Boolean}},setup(d){const a=d,i=Q();return(_,s)=>(p(),h("div",{class:k(["view-wrapper",[a.topNav&&"has-top-nav",a.full&&"view-wrapper-full",o(i).isPushed&&"is-pushed-full",o(i).isPushedBlock&&"is-pushed-block"]])},[P(_.$slots,"default")],2))}});const F=d=>(pe("data-v-6c514f0e"),d=d(),_e(),d),Kt={class:"is-size-5 mt-3 mb-5"},Et=F(()=>e("div",{class:"icon"},[e("i",{class:"iconify","data-icon":"feather:user","aria-hidden":"true"})],-1)),Ot={class:"meta"},Ut=F(()=>e("hr",{class:"dropdown-divider"},null,-1)),Wt=F(()=>e("div",{class:"icon"},[e("i",{class:"iconify","data-icon":"feather:log-out","aria-hidden":"true"})],-1)),Ft={class:"meta"},qt=y({setup(d){const a=Y(),i=re(),_=ue(),s=x(!1),l=N(()=>a.user);function u(){console.log("in onLogout func"),s.value=!0}async function c(){try{await a.logoutUser(),_.push("/")}catch(r){i.error(r.message)}finally{}}return(r,v)=>{const S=I("RouterLink"),g=ke,w=be,j=O,M=Z;return p(),h(U,null,[t(g,{title:"Dropdown with icon",spaced:"",right:""},{button:n(({open:b,toggle:D})=>[t(W,{class:"user_avatar is-trigger",picture:o(l)?.avatar,onClick:D},null,8,["picture","onClick"])]),content:n(()=>[e("h1",Kt,m(o(l)?.username?.toUpperCase()),1),t(S,{to:"/app/profile/profile-edit",class:"dropdown-item is-media"},{default:n(()=>[Et,e("div",Ot,[e("span",null,m(r.$t("Go_to_profile")),1)])]),_:1}),Ut,e("a",{href:"javascript:;",class:"dropdown-item is-media",onClick:u},[Wt,e("div",Ft,[e("span",null,m(r.$t("Logout")),1)])])]),_:1}),t(M,{open:s.value,actions:"center",title:r.$t("Confirm_action"),noclose:!0,onClose:v[0]||(v[0]=b=>s.value=!1),"cancel-label":r.$t("No")},{content:n(()=>[t(w,{title:r.$t("Are_you_sure")},null,8,["title"])]),action:n(()=>[t(j,{type:"button",class:"is-justify-content-center",color:"primary",outlined:"",onClick:c},{default:n(()=>[f(m(r.$t("Yes")),1)]),_:1})]),_:1},8,["open","title","cancel-label"])],64)}}});const Ht=E(qt,[["__scopeId","data-v-6c514f0e"]]),Yt={class:"toolbar ml-auto"},Jt={class:"toolbar-link"},Gt=["checked"],Qt=e("span",null,null,-1),Xt=y({setup(d){const a=ve();return(i,_)=>(p(),h("div",Yt,[e("div",Jt,[e("label",{tabindex:"0",class:"dark-mode ml-auto",onKeydown:_[1]||(_[1]=z(V(s=>s.target.click(),["prevent"]),["space"]))},[e("input",{type:"checkbox",checked:!o(a).isDark,onChange:_[0]||(_[0]=(...s)=>o(a).onChange&&o(a).onChange(...s))},null,40,Gt),Qt],32)]),t(ye,{class:"mr-3"}),t(Ht),P(i.$slots,"default")]))}}),Zt={class:"columns is-multiline"},ea={class:"column is-12"},sa={class:"column is-12"},ta=y({setup(d){const a=X(),i=Ce.component,_=x(!1),s=N(()=>a.contractDownloadModalState),l=x([]),u=x(),c=N(()=>l.value.find(g=>g.id===u.value)||{name:"",body:"",payment_amount:""}),r=x("");B(()=>s.value,async()=>{if(s.value){const g=await Se();l.value=g,r.value="contract_template_"+Date.now()}});async function v(){u.value=void 0,r.value="",a.$patch({contractDownloadModalState:!1})}function S(){_.value=!0;let g="<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>",w="</body></html>",j=g+c.value?.body+w,M="data:application/vnd.ms-word;charset=utf-8,"+encodeURIComponent(j),b=r.value+".doc",D=document.createElement("a");document.body.appendChild(D),D.href=M,D.download=b,D.click(),document.body.removeChild(D),_.value=!1}return(g,w)=>{const j=we,M=me,b=fe,D=he,te=O,ae=Z;return p(),C(ae,{size:"big",open:o(s),actions:"center",title:g.$t("Download_contract_template"),onClose:v,"cancel-label":g.$t("Cancel")},{content:n(()=>[e("div",Zt,[e("div",ea,[t(b,{label:g.$t("Select_template")},{default:n(()=>[t(M,null,{default:n(()=>[t(j,{modelValue:u.value,"onUpdate:modelValue":w[0]||(w[0]=L=>u.value=L)},{default:n(()=>[t(q,{hidden:"",value:""},{default:n(()=>[f(m(g.$t("Select_template")),1)]),_:1}),(p(!0),h(U,null,G(l.value,(L,va)=>(p(),C(q,{value:L.id,textContent:m(L.name)},null,8,["value","textContent"]))),256))]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label"]),t(b,{label:g.$t("Set_file_name")},{default:n(()=>[t(M,null,{default:n(()=>[t(D,{modelValue:r.value,"onUpdate:modelValue":w[1]||(w[1]=L=>r.value=L)},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])]),e("div",sa,[t(o(i),{modelValue:o(c).body,"onUpdate:modelValue":w[2]||(w[2]=L=>o(c).body=L),editor:o(ze),config:o(Ve)},null,8,["modelValue","editor","config"])])])]),action:n(({close:L})=>[t(te,{loading:_.value,color:"primary",outlined:"",disabled:_.value,onClick:S},{default:n(()=>[f(m(g.$t("Download")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title","cancel-label"])}}});const aa={class:"sidebar-layout"},na=e("div",{class:"app-overlay"},null,-1),oa={class:"page-title has-text-centered"},ia={class:"menu-toggle has-chevron"},la=e("span",{class:"rotate"},[e("i",{"aria-hidden":"true",class:"icon-line-top"}),e("i",{"aria-hidden":"true",class:"icon-line-center"}),e("i",{"aria-hidden":"true",class:"icon-line-bottom"})],-1),ca=[la],da={class:"title-wrap"},ra={class:"title is-4"},ua=e("div",{class:"is-divider"},null,-1),pa=y({props:{theme:{default:"default"},defaultSidebar:{default:"dashboard"},closeOnChange:{type:Boolean},openOnMounted:{type:Boolean,default:!0},nowrap:{type:Boolean}},setup(d){const a=d,i=Q(),_=R(),s=x(!1),l=x(a.openOnMounted);return x(a.defaultSidebar),ge(()=>{i.setPushed(l.value??!1)}),B(()=>_.fullPath,()=>{s.value=!1,a.closeOnChange&&l.value&&(l.value=!1)}),(u,c)=>{const r=Ee,v=je,S=Me;return p(),h("div",aa,[na,t(r,{"is-open":s.value,onToggle:c[0]||(c[0]=g=>s.value=!s.value)},null,8,["is-open"]),t(v,{"is-open":s.value,onToggle:c[1]||(c[1]=g=>s.value=!s.value)},null,8,["is-open"]),t(A,{name:"slide-x"},{default:n(()=>[s.value?(p(),C(Ss,{key:0})):$("",!0)]),_:1}),t(A,{name:"slide-x"},{default:n(()=>[l.value?(p(),C(Cs,{key:0,onClose:c[2]||(c[2]=g=>l.value=!1)})):$("",!0)]),_:1}),t(Nt),t(St),t(Bt,null,{default:n(()=>[t(S,{class:"is-relative"},{default:n(()=>[e("div",oa,[e("div",{class:"vuero-hamburger nav-trigger push-resize",tabindex:"0",onKeydown:c[3]||(c[3]=z(V(g=>l.value=!l.value,["prevent"]),["space"])),onClick:c[4]||(c[4]=g=>l.value=!l.value)},[e("span",ia,[e("span",{class:k([[l.value&&"active"],"icon-box-toggle"])},ca,2)])],32),e("div",da,[e("h1",ra,m(o(i).pageTitle),1)]),t(Xt,{class:"desktop-toolbar"})]),ua,P(u.$slots,"default")]),_:3})]),_:3}),t(ta)])}}}),_a=y({setup(d){const a=R();return(i,_)=>{const s=I("RouterView"),l=pa;return p(),C(l,null,{default:n(()=>[t(s,null,{default:n(({Component:u})=>[t(A,{name:"fade-fast",mode:"out-in"},{default:n(()=>[(p(),C($e(u),{key:o(a).fullPath}))]),_:2},1024)]),_:1})]),_:1})}}});typeof H=="function"&&H(_a);export{_a as default};