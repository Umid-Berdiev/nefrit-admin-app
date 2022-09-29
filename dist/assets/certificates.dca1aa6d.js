import{_ as E,a as L}from"./VFlexTable.vue_vue_type_style_index_0_lang.c051e93d.js";import{_ as O}from"./VFlexPagination.65c84f8f.js";import{_ as U}from"./VTag.vue_vue_type_style_index_0_lang.4aa10b1e.js";import{_ as G}from"./StatusTag.vue_vue_type_script_setup_true_lang.65f1d61d.js";import{_ as A}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.bf0704b9.js";import{a as J,_ as K}from"./index.8e3996f0.js";import{z as Q,V as X,bP as Z,r as Y,e as V,bO as D,B as ee,p as b,o as n,i as c,q as t,w as r,E as o,G as $,x as M,bm as P,l as f,j as w,t as p,f as g,m as te,a3 as ae,a1 as ne,P as oe,a2 as se}from"./index.47e107ef.js";import{l as re}from"./lodash.73e73cb6.js";import{u as ie}from"./viewWrapper.45a25a95.js";import"./VFlex.vue_vue_type_style_index_0_lang.99038368.js";const le={class:"applicant-list-wrapper"},_e=w("i",{class:"fas fa-angle-double-right","aria-hidden":"true"},null,-1),ce={key:0,class:"flex-list-inner"},pe=["href"],de={class:"mr-3"},me={key:2},ue={key:3},fe={key:4},ge={key:5},ye={key:7},Be=Q({setup(he){const{t:_,locale:C}=X();Z({title:_("Certificate_report")+" - Nefrit"}),ie().setPageTitle(_("Certificate_report"));const l=Y({pagination:{current_page:1,per_page:10,total:10},result:[]}),y=V({get:()=>l.pagination.current_page,set:async e=>{await h(e)}}),T=Y({type:"string",mask:"YYYY-MM-DD"}),m=V({get:()=>({start:D().subtract(1,"month").format("YYYY-MM-DD"),end:D().format("YYYY-MM-DD")}),set:async e=>{console.log({val:e}),re.exports.isEmpty(e)||await h(1,{date_start:e.start,date_end:e.end})}}),x={number:{label:_("Certificate_number")},application:{label:_("Statement")},drug:{label:_("drug_name")},drug_country:{label:_("Drug_country")},created_at:{label:_("Created_at")},validity_date:{label:_("Validity_date")}};ee(async()=>{await h(1,{date_start:m.value.start,date_end:m.value.end})});async function h(e=1,d={date_start:"",date_end:""}){const u=await J({page:e,...d});Object.assign(l,u)}return(e,d)=>{const u=ae,k=ne,N=oe,B=se,F=b("VDatePicker"),S=K,H=A,I=b("VueIconify"),R=b("RouterLink"),W=G,v=U,j=E,q=O,z=L;return n(),c("div",le,[t(z,{columns:o(x),data:o(l).result,limit:o(l).pagination.per_page,total:o(l).pagination.total},{default:r(be=>[t(S,null,{left:r(()=>[t(F,{locale:o(C),class:"ml-auto",modelValue:o(m),"onUpdate:modelValue":d[0]||(d[0]=s=>$(m)?m.value=s:null),"is-range":"",color:"green","trim-weeks":"","model-config":o(T)},{default:r(({inputValue:s,inputEvents:a})=>[t(B,{addons:""},{default:r(()=>[t(k,{expanded:"",icon:"feather:corner-down-right"},{default:r(()=>[t(u,M({value:s.start},P(a.start)),null,16,["value"])]),_:2},1024),t(k,null,{default:r(()=>[t(N,{static:""},{default:r(()=>[_e]),_:1})]),_:1}),t(k,{expanded:"",icon:"feather:corner-right-up",subcontrol:""},{default:r(()=>[t(u,M({value:s.end},P(a.end)),null,16,["value"])]),_:2},1024)]),_:2},1024)]),_:1},8,["locale","modelValue","model-config"])]),_:1}),t(j,{rounded:""},{body:r(()=>[o(l).result.length===0?(n(),c("div",ce,[t(H,{title:e.$t("No_data"),subtitle:e.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):f("",!0)]),"body-cell":r(({row:s,column:a,value:i,index:Ye})=>[a.key==="number"?(n(),c("a",{key:0,href:s.file,class:"has-text-primary is-pushed-mobile"},[w("span",de,p(i),1),t(I,{icon:"feather:link"})],8,pe)):f("",!0),a.key==="application"?(n(),g(R,{key:1,to:`/app/statements/${i.id}`},{default:r(()=>[te(p(i?.code),1)]),_:2},1032,["to"])):a.key==="drug"?(n(),c("span",me,p(i?.name),1)):a.key==="drug_country"?(n(),c("span",ue,p(s.drug?.country?.name),1)):a.key==="created_at"&&i?(n(),c("span",fe,p(e.$h.formatDate(i,"HH:mm DD.MM.YYYY")),1)):a.key==="validity_date"?(n(),c("span",ge,p(e.$h.formatDate(s.start_date,"DD.MM.YYYY")+" - "+e.$h.formatDate(s.end_date,"DD.MM.YYYY")),1)):a.key==="status"?(n(),g(W,{key:6,status:i},null,8,["status"])):a.key==="stage"?(n(),c("span",ye,p(i.name),1)):a.key==="is_paid"?(n(),g(v,{key:8,class:"is-size-6",color:i?"primary":"warning",rounded:"",label:i?e.$t("Paid"):e.$t("Not_Paid")},null,8,["color","label"])):f("",!0)]),_:1}),o(l).result.length?(n(),g(q,{key:0,class:"mt-6","current-page":o(y),"onUpdate:current-page":d[1]||(d[1]=s=>$(y)?y.value=s:null),"item-per-page":o(l).pagination.per_page,"total-items":o(l).pagination.total},null,8,["current-page","item-per-page","total-items"])):f("",!0)]),_:1},8,["columns","data","limit","total"])])}}});export{Be as default};
