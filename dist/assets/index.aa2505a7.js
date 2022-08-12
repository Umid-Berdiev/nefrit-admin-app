import{b as H,_ as M,a as O}from"./VFlexTable.vue_vue_type_style_index_0_lang.ae997375.js";import{_ as Y}from"./VFlexPagination.7e4e1d3c.js";import{_ as J}from"./ApplicantFlexTableDropdown.vue_vue_type_script_setup_true_lang.8cb5a792.js";import{_ as K}from"./StatusTag.vue_vue_type_script_setup_true_lang.b2d9327e.js";import{_ as Q}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.bfc7e5bc.js";import{_ as X}from"./VFlexTableToolbar.da1ce4c9.js";import{_ as Z}from"./VCard.vue_vue_type_script_setup_true_lang.59797394.js";import{_ as ee}from"./VFlexItem.vue_vue_type_style_index_0_lang.5663d31d.js";import{z as te,V as ae,Y as oe,bP as ne,r as le,A as N,e as se,bv as re,o as c,i as d,q as e,W as ie,bM as ue,j as $,w as t,t as u,E as n,m as y,l as _,f as B,G as pe,bS as ce,a1 as _e,$ as me,a0 as de,P as fe}from"./index.81fd6e18.js";import{_ as be}from"./CountrySelect.vue_vue_type_script_setup_true_lang.760e7e77.js";import{_ as Ve}from"./TableActionsBlock.vue_vue_type_style_index_0_lang.e6bcf2f5.js";import{u as ge}from"./viewWrapper.ffea188f.js";import{f as ye}from"./index.705f6e9a.js";import"./VDropdown.vue_vue_type_style_index_0_lang.4e5cae4b.js";import"./VIcon.vue_vue_type_script_setup_true_lang.44ffddaa.js";import"./VTag.vue_vue_type_style_index_0_lang.d53872a7.js";import"./VOption.vue_vue_type_style_index_0_lang.c62bcddd.js";import"./VButtons.vue_vue_type_script_setup_true_lang.9da62dcb.js";const he={class:"applicant-list-wrapper"},ve={class:"mb-5"},we={class:"title is-5 mb-2"},xe={class:"columns is-desktop"},$e=["textContent"],ke={key:0,class:"flex-list-inner"},Fe={key:0,style:{"overflow-wrap":"break-word"}},Ce={key:2},Ke=te({async setup(Ne){let k,F;const{t:o}=ae(),A=oe();ne({title:o("Applicants")+" - Nefrit"}),ge().setPageTitle(o("Applicants_List"));const r=le({pagination:{current_page:1,per_page:10,total:10},result:[]}),i=N({applicantUser:"Abdullaev Baxrom"}),h=N(!1),v=se({get:()=>r.pagination.current_page,set:async s=>{await C(s)}}),S={orderNumber:{format:(s,a,w)=>`${w+1}`,cellClass:"is-flex-grow-0"},name:{label:o("Applicant_name"),grow:!0,searchable:!0},boss_name:{label:o("Boss_name"),searchable:!0},phone:{label:o("Phone_number"),searchable:!0},status:{label:o("Status"),searchable:!0},country:{label:o("Country")},actions:{label:o("Actions"),align:"center"}};[k,F]=re(()=>C()),await k,F();function T(s){A.push("/app/applicants/"+s)}async function C(s=1){const a=await ye(s);Object.assign(r,a)}return(s,a)=>{const w=Ve,x=ce,f=_e,b=me,V=de,U=be,P=fe,I=ee,W=H,D=Z,L=X,j=Q,q=K,E=J,R=M,z=Y,G=O;return c(),d("div",he,[e(w,{center:"",title:"","add-disabled":"","remove-disabled":"","print-disabled":"",onFilter:a[0]||(a[0]=l=>h.value=!h.value)}),ie($("div",ve,[e(D,{radius:"small"},{default:t(()=>[$("h3",we,u(n(o)("Filter_form")),1),$("div",xe,[e(V,{class:"column"},{default:t(()=>[e(x,null,{default:t(()=>[y(u(n(o)("Boss_name")),1)]),_:1}),e(b,null,{default:t(()=>[e(f,{modelValue:i.value.applicantBossName,"onUpdate:modelValue":a[1]||(a[1]=l=>i.value.applicantBossName=l),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),e(V,{class:"column"},{default:t(()=>[e(x,null,{default:t(()=>[y(u(n(o)("Applicant_name")),1)]),_:1}),e(b,null,{default:t(()=>[e(f,{modelValue:i.value.applicantName,"onUpdate:modelValue":a[2]||(a[2]=l=>i.value.applicantName=l),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),e(V,{class:"column"},{default:t(()=>[e(x,null,{default:t(()=>[y(u(n(o)("Status")),1)]),_:1}),e(b,null,{default:t(()=>[e(f,{modelValue:i.value.applicantStatus,"onUpdate:modelValue":a[3]||(a[3]=l=>i.value.applicantStatus=l),type:"text",placeholder:""},null,8,["modelValue"])]),_:1})]),_:1}),e(U,{modelValue:i.value.applicantsCountry,"onUpdate:modelValue":a[4]||(a[4]=l=>i.value.applicantsCountry=l),class:"column"},null,8,["modelValue"])]),e(W,null,{default:t(()=>[e(I,{class:"ml-auto"},{default:t(()=>[e(P,{outlined:"",color:"warning",icon:"feather:filter"},{default:t(()=>[y(u(n(o)("Filter")),1)]),_:1})]),_:1})]),_:1})]),_:1})],512),[[ue,h.value]]),e(G,{columns:n(S),data:n(r).result,limit:n(r).pagination.per_page,total:n(r).pagination.total},{default:t(l=>[e(L,null,{left:t(()=>[e(V,null,{default:t(()=>[e(b,{icon:"feather:search"},{default:t(()=>[e(f,{modelValue:l.searchInput,"onUpdate:modelValue":p=>l.searchInput=p,class:"is-rounded",placeholder:n(o)("Search")+"..."},null,8,["modelValue","onUpdate:modelValue","placeholder"])]),_:2},1024)]),_:2},1024)]),_:2},1024),e(R,{rounded:""},{"header-column":t(({column:p})=>[p.key==="orderNumber"?(c(),d("span",{key:0,class:"is-flex-grow-0",textContent:u("#")},null,8,$e)):_("",!0)]),body:t(()=>[n(r).result.length===0?(c(),d("div",ke,[e(j,{title:s.$t("No_data"),subtitle:s.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):_("",!0)]),"body-cell":t(({row:p,column:g,value:m,index:Ae})=>[g.key==="name"?(c(),d("p",Fe,u(m),1)):_("",!0),g.key==="status"&&m?(c(),B(q,{key:1,status:m},null,8,["status"])):_("",!0),g.key==="country"&&m?(c(),d("span",Ce,u(m.name),1)):_("",!0),g.key==="actions"?(c(),B(E,{key:3,onView:Se=>T(p.id)},null,8,["onView"])):_("",!0)]),_:1}),e(z,{"current-page":n(v),"onUpdate:current-page":a[5]||(a[5]=p=>pe(v)?v.value=p:null),class:"mt-6","item-per-page":n(r).pagination.per_page,"total-items":n(r).pagination.total},null,8,["current-page","item-per-page","total-items"])]),_:1},8,["columns","data","limit","total"])])}}});export{Ke as default};
