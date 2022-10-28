import{_ as E,a as H}from"./VFlexTable.vue_vue_type_style_index_0_lang.d0133d2a.js";import{_ as I}from"./VFlexPagination.4ad8009f.js";import{_ as O}from"./ApplicantFlexTableDropdown.vue_vue_type_script_setup_true_lang.56264d0c.js";import{_ as U}from"./StatusTag.vue_vue_type_script_setup_true_lang.bf23912b.js";import{_ as z}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.0e585ba4.js";import{f as G,_ as Q}from"./index.b93cb1cd.js";import{z as Z,N as J,Z as K,O as L,r as w,e as k,bQ as V,B as X,p as tt,o as l,i as d,q as e,w as n,E as a,G as x,x as Y,bn as D,t as b,l as p,f as h,j as et,a4 as at,a2 as nt,P as ot,a3 as st}from"./index.b7e98af4.js";import{l as rt}from"./lodash.80e51239.js";import{u as lt}from"./viewWrapper.d9abd62c.js";import"./VFlex.vue_vue_type_style_index_0_lang.74d0a329.js";import"./VDropdown.vue_vue_type_style_index_0_lang.03878fe4.js";import"./VIcon.vue_vue_type_script_setup_true_lang.fc7bb1c3.js";import"./VTag.vue_vue_type_script_setup_true_lang.ec4a8308.js";const it={class:"applicant-list-wrapper"},ct=et("i",{class:"fas fa-angle-double-right","aria-hidden":"true"},null,-1),pt=["textContent"],_t={key:0,class:"flex-list-inner"},ut={key:0,style:{"overflow-wrap":"break-word"}},mt={key:2},Tt=Z({setup(dt){const{t:r,locale:$}=J(),v=K();L({title:r("Applicant_report")+" - Nefrit"}),lt().setPageTitle(r("Applicant_report"));const s=w({pagination:{current_page:1,per_page:10,total:10},result:[]}),f=k({get:()=>s.pagination.current_page,set:async t=>{await g(t)}}),C=w({type:"string",mask:"YYYY-MM-DD"}),u=k({get:()=>({start:V().subtract(1,"month").format("YYYY-MM-DD"),end:V().format("YYYY-MM-DD")}),set:async t=>{rt.exports.isEmpty(t)||await g(1,{date_start:t.start,date_end:t.end})}}),P={orderNumber:{format:(t,i,_)=>`${_+1}`,cellClass:"is-flex-grow-0"},name:{label:r("Applicant_name"),grow:!0},boss_name:{label:r("Boss_name")},phone:{label:r("Phone_number")},status:{label:r("Status")},country:{label:r("Country")},actions:{label:r("Actions"),align:"center"}};X(async()=>{await g(1,{date_start:u.value.start,date_end:u.value.end})});async function g(t=1,i={date_start:"",date_end:""}){const _=await G({page:t,...i});Object.assign(s,_)}function M(t){v.push("/app/applicants/"+t)}return(t,i)=>{const _=at,y=nt,N=ot,T=st,B=tt("VDatePicker"),A=Q,F=z,S=U,W=O,R=E,j=I,q=H;return l(),d("div",it,[e(q,{columns:a(P),data:a(s).result,limit:a(s).pagination.per_page,total:a(s).pagination.total},{default:n(gt=>[e(A,null,{left:n(()=>[e(B,{locale:a($),class:"ml-auto",modelValue:a(u),"onUpdate:modelValue":i[0]||(i[0]=o=>x(u)?u.value=o:null),"is-range":"",color:"green","trim-weeks":"","model-config":a(C)},{default:n(({inputValue:o,inputEvents:c})=>[e(T,{addons:""},{default:n(()=>[e(y,{expanded:"",icon:"feather:corner-down-right"},{default:n(()=>[e(_,Y({value:o.start},D(c.start)),null,16,["value"])]),_:2},1024),e(y,null,{default:n(()=>[e(N,{static:""},{default:n(()=>[ct]),_:1})]),_:1}),e(y,{expanded:"",icon:"feather:corner-right-up",subcontrol:""},{default:n(()=>[e(_,Y({value:o.end},D(c.end)),null,16,["value"])]),_:2},1024)]),_:2},1024)]),_:1},8,["locale","modelValue","model-config"])]),_:1}),e(R,{rounded:""},{"header-column":n(({column:o})=>[o.key==="orderNumber"?(l(),d("span",{key:0,class:"is-flex-grow-0",textContent:b("#")},null,8,pt)):p("",!0)]),body:n(()=>[a(s).result.length===0?(l(),d("div",_t,[e(F,{title:t.$t("No_data"),subtitle:t.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):p("",!0)]),"body-cell":n(({row:o,column:c,value:m,index:yt})=>[c.key==="name"?(l(),d("p",ut,b(m),1)):p("",!0),c.key==="status"&&m?(l(),h(S,{key:1,status:m},null,8,["status"])):p("",!0),c.key==="country"&&m?(l(),d("span",mt,b(m.name),1)):p("",!0),c.key==="actions"?(l(),h(W,{key:3,onView:bt=>M(o.id)},null,8,["onView"])):p("",!0)]),_:1}),a(s).result.length?(l(),h(j,{key:0,class:"mt-6","current-page":a(f),"onUpdate:current-page":i[1]||(i[1]=o=>x(f)?f.value=o:null),"item-per-page":a(s).pagination.per_page,"total-items":a(s).pagination.total},null,8,["current-page","item-per-page","total-items"])):p("",!0)]),_:1},8,["columns","data","limit","total"])])}}});export{Tt as default};