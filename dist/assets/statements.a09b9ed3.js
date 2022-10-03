import{_ as E,a as I}from"./VFlexTable.vue_vue_type_style_index_0_lang.b2a1aa66.js";import{_ as O}from"./VFlexPagination.b9e389fc.js";import{_ as U}from"./VIconButton.vue_vue_type_script_lang.1da2d1f0.js";import{_ as A}from"./VTag.vue_vue_type_script_setup_true_lang.c27e2f64.js";import{_ as G}from"./StatusTag.vue_vue_type_script_setup_true_lang.05c0dfe4.js";import{_ as Z}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.a9a6d9f8.js";import{c as J,_ as K}from"./index.f6400935.js";import{z as L,N as Q,O as X,r as b,Z as tt,e as V,bP as w,B as et,p as at,o as l,i as d,q as e,w as o,E as a,G as Y,x as $,bn as D,l as u,t as g,f,m as ot,v as nt,j as st,a4 as rt,a2 as lt,P as it,a3 as ct}from"./index.e9599081.js";import{l as _t}from"./lodash.adaa9811.js";import{u as pt}from"./viewWrapper.14b00cc4.js";import"./VFlex.vue_vue_type_style_index_0_lang.a39d8fdc.js";const dt={class:"applicant-list-wrapper"},mt=st("i",{class:"fas fa-angle-double-right","aria-hidden":"true"},null,-1),ut={key:0,class:"flex-list-inner"},gt={key:0},ft={key:1},yt={key:3},Bt=L({setup(ht){const{t:n,locale:P}=Q();X({title:n("Statement_report")+" - Nefrit"}),pt().setPageTitle(n("Statement_report"));const s=b({pagination:{current_page:1,per_page:10,total:10},result:[]}),M=tt(),y=V({get:()=>s.pagination.current_page,set:async t=>{await h(t)}}),S=b({type:"string",mask:"YYYY-MM-DD"}),p=V({get:()=>({start:w().subtract(1,"month").format("YYYY-MM-DD"),end:w().format("YYYY-MM-DD")}),set:async t=>{console.log({val:t}),_t.exports.isEmpty(t)||await h(1,{date_start:t.start,date_end:t.end})}}),T={code:{label:n("statement_code")},drug:{label:n("drug_name")},status:n("Status"),stage:{label:n("Stage")},is_paid:{label:n("Payment_status")},date:{label:n("applied_at")},actions:{label:n("Actions"),align:"center"}};et(async()=>{await h(1,{date_start:p.value.start,date_end:p.value.end})});async function h(t=1,_={date_start:"",date_end:""}){const m=await J({page:t,..._});Object.assign(s,m)}function x(t){console.log({rowId:t}),M.push("/app/statements/"+t)}return(t,_)=>{const m=rt,k=lt,C=it,N=ct,v=at("VDatePicker"),B=K,F=Z,H=G,W=A,R=U,j=E,q=O,z=I;return l(),d("div",dt,[e(z,{columns:a(T),data:a(s).result,limit:a(s).pagination.per_page,total:a(s).pagination.total},{default:o(bt=>[e(B,null,{left:o(()=>[e(v,{locale:a(P),class:"ml-auto",modelValue:a(p),"onUpdate:modelValue":_[0]||(_[0]=i=>Y(p)?p.value=i:null),"is-range":"",color:"green","trim-weeks":"","model-config":a(S)},{default:o(({inputValue:i,inputEvents:r})=>[e(N,{addons:""},{default:o(()=>[e(k,{expanded:"",icon:"feather:corner-down-right"},{default:o(()=>[e(m,$({value:i.start},D(r.start)),null,16,["value"])]),_:2},1024),e(k,null,{default:o(()=>[e(C,{static:""},{default:o(()=>[mt]),_:1})]),_:1}),e(k,{expanded:"",icon:"feather:corner-right-up",subcontrol:""},{default:o(()=>[e(m,$({value:i.end},D(r.end)),null,16,["value"])]),_:2},1024)]),_:2},1024)]),_:1},8,["locale","modelValue","model-config"])]),_:1}),e(j,{rounded:""},{body:o(()=>[a(s).result.length===0?(l(),d("div",ut,[e(F,{title:t.$t("No_data"),subtitle:t.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):u("",!0)]),"body-cell":o(({row:i,column:r,value:c,index:Vt})=>[r.key==="drug"?(l(),d("span",gt,g(c?.name),1)):r.key==="date"&&c?(l(),d("span",ft,g(t.$h.formatDate(c,"HH:mm DD.MM.YYYY")),1)):r.key==="status"?(l(),f(H,{key:2,status:c},null,8,["status"])):r.key==="stage"?(l(),d("span",yt,g(c.name),1)):r.key==="is_paid"?(l(),f(W,{key:4,class:"is-size-6",color:c?"primary":"warning",rounded:"",label:c?t.$t("Paid"):t.$t("Not_Paid")},null,8,["color","label"])):u("",!0),r.key==="actions"?(l(),f(R,{key:5,class:"p-4",outlined:"",circle:"",color:"info",icon:"feather:eye",onClick:nt(wt=>x(i.id),["prevent"])},{default:o(()=>[ot(g(t.$t("View")),1)]),_:2},1032,["onClick"])):u("",!0)]),_:1}),a(s).result.length?(l(),f(q,{key:0,class:"mt-6","current-page":a(y),"onUpdate:current-page":_[1]||(_[1]=i=>Y(y)?y.value=i:null),"item-per-page":a(s).pagination.per_page,"total-items":a(s).pagination.total},null,8,["current-page","item-per-page","total-items"])):u("",!0)]),_:1},8,["columns","data","limit","total"])])}}});export{Bt as default};