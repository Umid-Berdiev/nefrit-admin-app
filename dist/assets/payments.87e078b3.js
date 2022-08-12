import{_ as O,a as R}from"./VFlexTable.vue_vue_type_style_index_0_lang.ae997375.js";import{_ as U}from"./VFlexPagination.7e4e1d3c.js";import{_ as z}from"./StatusTag.vue_vue_type_script_setup_true_lang.b2d9327e.js";import{_ as G}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.bfc7e5bc.js";import{_ as L}from"./VFlexTableToolbar.da1ce4c9.js";import{z as J,V as K,bP as Q,r as w,e as D,bO as x,B as X,p as P,o as s,i as p,q as t,w as o,E as a,G as $,x as M,bn as C,t as d,l as c,j as V,F as b,m as k,f as N,a1 as Z,$ as ee,P as te,a0 as ae}from"./index.81fd6e18.js";import{l as oe}from"./lodash.56761ad6.js";import{b as ne}from"./index.abd45356.js";import{u as se}from"./viewWrapper.ffea188f.js";import"./VTag.vue_vue_type_style_index_0_lang.d53872a7.js";const re={class:"applicant-list-wrapper"},le=V("i",{class:"fas fa-angle-double-right","aria-hidden":"true"},null,-1),ie=["textContent"],ce={key:0,class:"flex-list-inner"},_e=["href"],pe={class:"mr-3"},me=["href"],ue={class:"mr-3"},$e=J({setup(de){const{t:_,locale:T}=K();Q({title:_("Payment_report")+" - Nefrit"}),se().setPageTitle(_("Payment_report"));const r=w({pagination:{current_page:1,per_page:10,total:10},result:[]}),g=D({get:()=>r.pagination.current_page,set:async e=>{await h(e)}}),F=w({type:"string",mask:"YYYY-MM-DD"}),f=D({get:()=>({start:x().subtract(1,"month").format("YYYY-MM-DD"),end:x().format("YYYY-MM-DD")}),set:async e=>{console.log({val:e}),oe.exports.isEmpty(e)||await h(1,{date_start:e.start,date_end:e.end})}}),v={orderNumber:{format:(e,m,u)=>`${u+1}`,cellClass:"is-flex-grow-0"},file:{label:_("Invoice")},amount:{label:_("Amount")},status:{label:_("Status")},application_contract:{label:_("Application_contract")},created_at:{label:_("Paid_date")},verified_at:{label:_("Verified_date")}};X(async()=>{await h(1,{date_start:f.value.start,date_end:f.value.end})});async function h(e=1,m={date_start:"",date_end:""}){const u=await ne({page:e,...m});Object.assign(r,u)}return(e,m)=>{const u=Z,y=ee,B=te,H=ae,S=P("VDatePicker"),I=L,W=G,Y=P("VueIconify"),j=z,q=O,A=U,E=R;return s(),p("div",re,[t(E,{columns:a(v),data:a(r).result,limit:a(r).pagination.per_page,total:a(r).pagination.total},{default:o(ge=>[t(I,null,{left:o(()=>[t(S,{locale:a(T),class:"ml-auto",modelValue:a(f),"onUpdate:modelValue":m[0]||(m[0]=n=>$(f)?f.value=n:null),"is-range":"",color:"green","trim-weeks":"","model-config":a(F)},{default:o(({inputValue:n,inputEvents:l})=>[t(H,{addons:""},{default:o(()=>[t(y,{expanded:"",icon:"feather:corner-down-right"},{default:o(()=>[t(u,M({value:n.start},C(l.start)),null,16,["value"])]),_:2},1024),t(y,null,{default:o(()=>[t(B,{static:""},{default:o(()=>[le]),_:1})]),_:1}),t(y,{expanded:"",icon:"feather:corner-right-up",subcontrol:""},{default:o(()=>[t(u,M({value:n.end},C(l.end)),null,16,["value"])]),_:2},1024)]),_:2},1024)]),_:1},8,["locale","modelValue","model-config"])]),_:1}),t(q,{rounded:""},{"header-column":o(({column:n})=>[n.key==="orderNumber"?(s(),p("span",{key:0,class:"is-flex-grow-0",textContent:d("#")},null,8,ie)):c("",!0)]),body:o(()=>[a(r).result.length===0?(s(),p("div",ce,[t(W,{title:e.$t("No_data"),subtitle:e.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):c("",!0)]),"body-cell":o(({row:n,column:l,value:i})=>[l.key==="file"?(s(),p("a",{key:0,href:n.file,class:"has-text-primary is-pushed-mobile"},[V("span",pe,d(e.$t("Download")),1),t(Y,{icon:"feather:link"})],8,_e)):c("",!0),l.key==="amount"?(s(),p(b,{key:1},[k(d(Number(i).toLocaleString()),1)],64)):c("",!0),l.key==="status"&&i?(s(),N(j,{key:2,status:i},null,8,["status"])):c("",!0),l.key==="application_contract"?(s(),p("a",{key:3,href:i.file,class:"has-text-primary is-pushed-mobile"},[V("span",ue,d(i.name),1),t(Y,{icon:"feather:link"})],8,me)):c("",!0),l.key==="created_at"&&i?(s(),p(b,{key:4},[k(d(e.$h.formatDate(i,"DD.MM.YYYY HH:mm")),1)],64)):c("",!0),l.key==="verified_at"&&i?(s(),p(b,{key:5},[k(d(e.$h.formatDate(i,"DD.MM.YYYY HH:mm")),1)],64)):c("",!0)]),_:1}),a(r).result.length?(s(),N(A,{key:0,class:"mt-6","current-page":a(g),"onUpdate:current-page":m[1]||(m[1]=n=>$(g)?g.value=n:null),"item-per-page":a(r).pagination.per_page,"total-items":a(r).pagination.total},null,8,["current-page","item-per-page","total-items"])):c("",!0)]),_:1},8,["columns","data","limit","total"])])}}});export{$e as default};
