import{_ as H,a as M}from"./VFlexTable.vue_vue_type_style_index_0_lang.58709948.js";import{_ as O}from"./VFlexPagination.dce7e11f.js";import{_ as Y}from"./ApplicantFlexTableDropdown.vue_vue_type_script_setup_true_lang.d94a58f5.js";import{_ as J}from"./StatusTag.vue_vue_type_script_setup_true_lang.b8aad2f1.js";import{_ as K}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.cb0addfa.js";import{_ as Q}from"./VFlexTableToolbar.1dc9bd86.js";import{_ as X}from"./VCard.vue_vue_type_script_setup_true_lang.f4944967.js";import{_ as Z}from"./VFlex.vue_vue_type_style_index_0_lang.30a6d0f9.js";import{_ as ee}from"./VFlexItem.vue_vue_type_style_index_0_lang.67ecd9c5.js";import{z as te,V as ae,Y as oe,bP as ne,r as le,A as N,e as se,bv as re,o as c,i as d,q as e,W as ie,bM as pe,j as y,w as t,t as p,E as n,m as h,l as _,f as B,G as ue,bS as ce,a1 as _e,$ as me,a0 as de,P as fe}from"./index.da6b4d71.js";import{_ as be}from"./CountrySelect.vue_vue_type_script_setup_true_lang.2411cd7f.js";import{_ as Ve}from"./TableActionsBlock.vue_vue_type_style_index_0_lang.37a41856.js";import{u as ge}from"./viewWrapper.3f71f0f4.js";import{f as ye}from"./index.b555e611.js";import"./VDropdown.vue_vue_type_style_index_0_lang.e8098296.js";import"./VIcon.vue_vue_type_script_setup_true_lang.a86e10a8.js";import"./VTag.vue_vue_type_style_index_0_lang.9a9a7227.js";import"./VOption.vue_vue_type_style_index_0_lang.c64ac9de.js";import"./lodash.8df198fb.js";import"./VButtons.vue_vue_type_script_setup_true_lang.6b41365d.js";const he={class:"applicant-list-wrapper"},ve={class:"mb-5"},we={class:"title is-5 mb-2"},xe={class:"columns is-desktop"},$e={class:"column"},ke=["textContent"],Fe={key:0,class:"flex-list-inner"},Ce={key:0,style:{"overflow-wrap":"break-word"}},Ne={key:2},Ze=te({async setup(Be){let k,F;const{t:o}=ae(),A=oe();ne({title:o("Applicants")+" - Nefrit"}),ge().setPageTitle(o("Applicants_List"));const r=le({pagination:{current_page:1,per_page:10,total:10},result:[]}),i=N({applicantUser:"Abdullaev Baxrom"}),v=N(!1),w=se({get:()=>r.pagination.current_page,set:async s=>{await C(s)}}),S={orderNumber:{format:(s,a,x)=>`${x+1}`,cellClass:"is-flex-grow-0"},name:{label:o("Applicant_name"),grow:!0,searchable:!0},boss_name:{label:o("Boss_name"),searchable:!0},phone:{label:o("Phone_number"),searchable:!0},status:{label:o("Status"),searchable:!0},country:{label:o("Country")},actions:{label:o("Actions"),align:"center"}};[k,F]=re(()=>C()),await k,F();function T(s){A.push("/app/applicants/"+s)}async function C(s=1){const a=await ye(s);Object.assign(r,a)}return(s,a)=>{const x=Ve,$=ce,f=_e,b=me,V=de,U=be,P=fe,I=ee,W=Z,D=X,L=Q,j=K,q=J,E=Y,R=H,z=O,G=M;return c(),d("div",he,[e(x,{center:"",title:"","add-disabled":"","remove-disabled":"","print-disabled":"",onFilter:a[0]||(a[0]=l=>v.value=!v.value)}),ie(y("div",ve,[e(D,{radius:"small"},{default:t(()=>[y("h3",we,p(n(o)("Filter_form")),1),y("div",xe,[e(V,{class:"column"},{default:t(()=>[e($,null,{default:t(()=>[h(p(n(o)("Boss_name")),1)]),_:1}),e(b,null,{default:t(()=>[e(f,{modelValue:i.value.applicantBossName,"onUpdate:modelValue":a[1]||(a[1]=l=>i.value.applicantBossName=l),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),e(V,{class:"column"},{default:t(()=>[e($,null,{default:t(()=>[h(p(n(o)("Applicant_name")),1)]),_:1}),e(b,null,{default:t(()=>[e(f,{modelValue:i.value.applicantName,"onUpdate:modelValue":a[2]||(a[2]=l=>i.value.applicantName=l),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),e(V,{class:"column"},{default:t(()=>[e($,null,{default:t(()=>[h(p(n(o)("Status")),1)]),_:1}),e(b,null,{default:t(()=>[e(f,{modelValue:i.value.applicantStatus,"onUpdate:modelValue":a[3]||(a[3]=l=>i.value.applicantStatus=l),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),y("div",$e,[e(U,{modelValue:i.value.applicantsCountry,"onUpdate:modelValue":a[4]||(a[4]=l=>i.value.applicantsCountry=l)},null,8,["modelValue"])])]),e(W,null,{default:t(()=>[e(I,{class:"ml-auto"},{default:t(()=>[e(P,{outlined:"",color:"warning",icon:"feather:filter"},{default:t(()=>[h(p(n(o)("Filter")),1)]),_:1})]),_:1})]),_:1})]),_:1})],512),[[pe,v.value]]),e(G,{columns:n(S),data:n(r).result,limit:n(r).pagination.per_page,total:n(r).pagination.total},{default:t(l=>[e(L,null,{left:t(()=>[e(V,null,{default:t(()=>[e(b,{icon:"feather:search"},{default:t(()=>[e(f,{modelValue:l.searchInput,"onUpdate:modelValue":u=>l.searchInput=u,class:"is-rounded",placeholder:n(o)("Search")+"..."},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(R,{rounded:""},{"header-column":t(({column:u})=>[u.key==="orderNumber"?(c(),d("span",{key:0,class:"is-flex-grow-0",textContent:p("#")},null,8,ke)):_("",!0)]),body:t(()=>[n(r).result.length===0?(c(),d("div",Fe,[e(j,{title:s.$t("No_data"),subtitle:s.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):_("",!0)]),"body-cell":t(({row:u,column:g,value:m,index:Se})=>[g.key==="name"?(c(),d("p",Ce,p(m),1)):_("",!0),g.key==="status"&&m?(c(),B(q,{key:1,status:m},null,8,["status"])):_("",!0),g.key==="country"&&m?(c(),d("span",Ne,p(m.name),1)):_("",!0),g.key==="actions"?(c(),B(E,{key:3,onView:Te=>T(u.id)},null,8,["onView"])):_("",!0)]),_:1}),e(z,{"current-page":n(w),"onUpdate:current-page":a[5]||(a[5]=u=>ue(w)?w.value=u:null),class:"mt-6","item-per-page":n(r).pagination.per_page,"total-items":n(r).pagination.total},null,8,["current-page","item-per-page","total-items"])]),_:1},8,["columns","data","limit","total"])])}}});export{Ze as default};
