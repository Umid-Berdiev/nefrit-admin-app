import{_ as E,a as H}from"./VFlexTable.vue_vue_type_style_index_0_lang.bb558e54.js";import{_ as I}from"./VFlexPagination.febc5606.js";import{_ as O}from"./ApplicantFlexTableDropdown.vue_vue_type_script_setup_true_lang.657c3b1a.js";import{_ as U}from"./StatusTag.vue_vue_type_script_setup_true_lang.cc8fe858.js";import{_ as z}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.effc8231.js";import{f as G,_ as Z}from"./index.1d369ba9.js";import{z as J,N as K,Z as L,O as Q,r as w,e as k,bP as V,B as X,p as ee,o as l,i as d,q as t,w as n,E as a,G as x,x as Y,bn as D,t as b,l as p,f as h,j as te,a4 as ae,a2 as ne,P as oe,a3 as se}from"./index.da55e008.js";import{l as re}from"./lodash.3b2897bd.js";import{u as le}from"./viewWrapper.118394b0.js";import"./VFlex.vue_vue_type_style_index_0_lang.c3823f38.js";import"./VDropdown.vue_vue_type_style_index_0_lang.d1c6a190.js";import"./VIcon.vue_vue_type_script_setup_true_lang.b34d1321.js";import"./VTag.vue_vue_type_script_setup_true_lang.7b40064a.js";const ie={class:"applicant-list-wrapper"},ce=te("i",{class:"fas fa-angle-double-right","aria-hidden":"true"},null,-1),pe=["textContent"],_e={key:0,class:"flex-list-inner"},ue={key:0,style:{"overflow-wrap":"break-word"}},me={key:2},Te=J({setup(de){const{t:r,locale:P}=K(),$=L();Q({title:r("Applicant_report")+" - Nefrit"}),le().setPageTitle(r("Applicant_report"));const s=w({pagination:{current_page:1,per_page:10,total:10},result:[]}),f=k({get:()=>s.pagination.current_page,set:async e=>{await g(e)}}),C=w({type:"string",mask:"YYYY-MM-DD"}),u=k({get:()=>({start:V().subtract(1,"month").format("YYYY-MM-DD"),end:V().format("YYYY-MM-DD")}),set:async e=>{console.log({val:e}),re.exports.isEmpty(e)||await g(1,{date_start:e.start,date_end:e.end})}}),v={orderNumber:{format:(e,i,_)=>`${_+1}`,cellClass:"is-flex-grow-0"},name:{label:r("Applicant_name"),grow:!0},boss_name:{label:r("Boss_name")},phone:{label:r("Phone_number")},status:{label:r("Status")},country:{label:r("Country")},actions:{label:r("Actions"),align:"center"}};X(async()=>{await g(1,{date_start:u.value.start,date_end:u.value.end})});async function g(e=1,i={date_start:"",date_end:""}){const _=await G({page:e,...i});Object.assign(s,_)}function M(e){$.push("/app/applicants/"+e)}return(e,i)=>{const _=ae,y=ne,N=oe,T=se,B=ee("VDatePicker"),A=Z,F=z,S=U,W=O,R=E,j=I,q=H;return l(),d("div",ie,[t(q,{columns:a(v),data:a(s).result,limit:a(s).pagination.per_page,total:a(s).pagination.total},{default:n(ge=>[t(A,null,{left:n(()=>[t(B,{locale:a(P),class:"ml-auto",modelValue:a(u),"onUpdate:modelValue":i[0]||(i[0]=o=>x(u)?u.value=o:null),"is-range":"",color:"green","trim-weeks":"","model-config":a(C)},{default:n(({inputValue:o,inputEvents:c})=>[t(T,{addons:""},{default:n(()=>[t(y,{expanded:"",icon:"feather:corner-down-right"},{default:n(()=>[t(_,Y({value:o.start},D(c.start)),null,16,["value"])]),_:2},1024),t(y,null,{default:n(()=>[t(N,{static:""},{default:n(()=>[ce]),_:1})]),_:1}),t(y,{expanded:"",icon:"feather:corner-right-up",subcontrol:""},{default:n(()=>[t(_,Y({value:o.end},D(c.end)),null,16,["value"])]),_:2},1024)]),_:2},1024)]),_:1},8,["locale","modelValue","model-config"])]),_:1}),t(R,{rounded:""},{"header-column":n(({column:o})=>[o.key==="orderNumber"?(l(),d("span",{key:0,class:"is-flex-grow-0",textContent:b("#")},null,8,pe)):p("",!0)]),body:n(()=>[a(s).result.length===0?(l(),d("div",_e,[t(F,{title:e.$t("No_data"),subtitle:e.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):p("",!0)]),"body-cell":n(({row:o,column:c,value:m,index:ye})=>[c.key==="name"?(l(),d("p",ue,b(m),1)):p("",!0),c.key==="status"&&m?(l(),h(S,{key:1,status:m},null,8,["status"])):p("",!0),c.key==="country"&&m?(l(),d("span",me,b(m.name),1)):p("",!0),c.key==="actions"?(l(),h(W,{key:3,onView:be=>M(o.id)},null,8,["onView"])):p("",!0)]),_:1}),a(s).result.length?(l(),h(j,{key:0,class:"mt-6","current-page":a(f),"onUpdate:current-page":i[1]||(i[1]=o=>x(f)?f.value=o:null),"item-per-page":a(s).pagination.per_page,"total-items":a(s).pagination.total},null,8,["current-page","item-per-page","total-items"])):p("",!0)]),_:1},8,["columns","data","limit","total"])])}}});export{Te as default};
