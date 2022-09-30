import{_ as Q,a as Y}from"./VFlexTable.vue_vue_type_style_index_0_lang.bb558e54.js";import{_ as ee}from"./VFlexPagination.febc5606.js";import{_ as te}from"./ApplicantFlexTableDropdown.vue_vue_type_script_setup_true_lang.657c3b1a.js";import{_ as ae}from"./StatusTag.vue_vue_type_script_setup_true_lang.cc8fe858.js";import{_ as oe}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.effc8231.js";import{_ as se}from"./VCard.vue_vue_type_script_setup_true_lang.550a0b80.js";import{_ as ne}from"./VFlex.vue_vue_type_style_index_0_lang.c3823f38.js";import{_ as le}from"./VFlexItem.vue_vue_type_style_index_0_lang.d636f6c0.js";import{z as ie,N as re,Z as ce,O as ue,b as _e,r as T,A as V,e as me,bv as pe,B as de,o as _,i as y,q as a,X as fe,bM as be,j as m,w as s,t as d,E as t,v as ye,m as E,l as p,f as x,G as ge,a4 as he,a2 as we,a3 as ve,P as Ve}from"./index.da55e008.js";import{_ as xe}from"./CountrySelect.vue_vue_type_style_index_0_lang.d3ee9551.js";import{_ as ke}from"./StatusSelect.vue_vue_type_script_setup_true_lang.ea019d28.js";import{_ as $e}from"./TableActionsBlock.vue_vue_type_style_index_0_lang.e6f1cc5d.js";import{u as Fe}from"./viewWrapper.118394b0.js";import{d as Ce,e as U,g as Se}from"./index.2e7e3d8a.js";import"./VDropdown.vue_vue_type_style_index_0_lang.d1c6a190.js";import"./VIcon.vue_vue_type_script_setup_true_lang.b34d1321.js";import"./VTag.vue_vue_type_script_setup_true_lang.7b40064a.js";import"./VOption.vue_vue_type_style_index_0_lang.69ee8589.js";import"./lodash.3b2897bd.js";import"./VButtons.vue_vue_type_script_setup_true_lang.eacd915e.js";const Ae={class:"applicant-list-wrapper"},Ne={class:"mb-5"},Be={class:"title is-5 mb-2"},Te=["onSubmit"],Ee={class:"columns is-desktop"},Ue={class:"column"},je={class:"column"},Le={class:"column"},Pe={class:"column"},De=["textContent"],Oe={key:0,class:"flex-list-inner"},We={key:0,style:{"overflow-wrap":"break-word"}},Re={key:2},pt=ie({async setup(Ie){let k,$;const{t:l,locale:Me}=re(),j=ce();ue({title:l("Applicants")+" - Nefrit"});const L=_e();Fe().setPageTitle(l("Applicants_List"));const i=T({pagination:{current_page:1,per_page:10,total:10},result:[]}),n=T({name:"",boss_name:"",country_id:"",status_id:""}),c=V(!1),h=V(!1),w=me({get:()=>i.pagination.current_page,set:async e=>{await v(e)}}),F=V([]),P={orderNumber:{format:(e,o,u)=>`${u+1}`,cellClass:"is-flex-grow-0"},name:{label:l("Applicant_name"),grow:!0,searchable:!0},boss_name:{label:l("Boss_name"),searchable:!0},phone:{label:l("Phone_number"),searchable:!0},status:{label:l("Status"),searchable:!0},country:{label:l("Country")},actions:{label:l("Actions"),align:"center"}};[k,$]=pe(()=>v()),await k,$(),de(async()=>{const e=await Ce();F.value=e});function D(e){j.push("/app/applicants/"+e)}async function v(e=1){const o=await U({page:e,...n});Object.assign(i,o)}async function O(){try{c.value=!0;const e=await U({page:1,...n});Object.assign(i,e)}catch(e){L.error("Error while fetching filtered data: ",e.message)}finally{c.value=!1}}async function W(){c.value=!0,Object.assign(n,{name:"",boss_name:"",country_id:"",status_id:""}),await v(),c.value=!1}async function R(){try{c.value=!0;const e=await Se(n),o=URL.createObjectURL(new Blob([e],{type:"application/vnd.ms-excel"})),u=document.createElement("a");u.href=o,u.setAttribute("download",`Worksheet_${Date.now()}.xlsx`),document.body.appendChild(u),u.click()}catch(e){console.log({error:e})}finally{c.value=!1}}return(e,o)=>{const u=$e,C=he,S=we,A=ve,I=ke,M=xe,N=Ve,B=le,q=ne,z=se,G=oe,H=ae,X=te,Z=Q,J=ee,K=Y;return _(),y("div",Ae,[a(u,{center:"",title:"","add-disabled":"","remove-disabled":"",onFilter:o[0]||(o[0]=r=>h.value=!h.value),onExport:R}),fe(m("div",Ne,[a(z,{radius:"small"},{default:s(()=>[m("h3",Be,d(t(l)("Filter_form")),1),m("form",{onSubmit:ye(O,["prevent"])},[m("div",Ee,[m("div",Ue,[a(A,{label:e.$t("Name")},{default:s(()=>[a(S,null,{default:s(()=>[a(C,{modelValue:t(n).name,"onUpdate:modelValue":o[1]||(o[1]=r=>t(n).name=r),type:"text"},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])]),m("div",je,[a(A,{label:e.$t("Boss_name")},{default:s(()=>[a(S,null,{default:s(()=>[a(C,{modelValue:t(n).boss_name,"onUpdate:modelValue":o[2]||(o[2]=r=>t(n).boss_name=r),type:"text"},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])]),m("div",Le,[a(I,{modelValue:t(n).status_id,"onUpdate:modelValue":o[3]||(o[3]=r=>t(n).status_id=r),list:F.value},null,8,["modelValue","list"])]),m("div",Pe,[a(M,{modelValue:t(n).country_id,"onUpdate:modelValue":o[4]||(o[4]=r=>t(n).country_id=r)},null,8,["modelValue"])])]),a(q,{"justify-content":"end","column-gap":"1rem"},{default:s(()=>[a(B,null,{default:s(()=>[a(N,{type:"button",disabled:c.value,outlined:"",color:"warning",icon:"feather:x",onClick:W},{default:s(()=>[E(d(t(l)("Clear")),1)]),_:1},8,["disabled"])]),_:1}),a(B,null,{default:s(()=>[a(N,{type:"submit",disabled:c.value,outlined:"",color:"success",icon:"feather:filter"},{default:s(()=>[E(d(t(l)("Filter")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})],40,Te)]),_:1})],512),[[be,h.value]]),a(K,{columns:t(P),data:t(i).result,limit:t(i).pagination.per_page,total:t(i).pagination.total},{default:s(r=>[a(Z,{rounded:""},{"header-column":s(({column:f})=>[f.key==="orderNumber"?(_(),y("span",{key:0,class:"is-flex-grow-0",textContent:d("#")},null,8,De)):p("",!0)]),body:s(()=>[t(i).result.length===0?(_(),y("div",Oe,[a(G,{title:e.$t("No_data"),subtitle:e.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):p("",!0)]),"body-cell":s(({row:f,column:g,value:b,index:ze})=>[g.key==="name"?(_(),y("p",We,d(b),1)):p("",!0),g.key==="status"&&b?(_(),x(H,{key:1,status:b},null,8,["status"])):p("",!0),g.key==="country"&&b?(_(),y("span",Re,d(b.name),1)):p("",!0),g.key==="actions"?(_(),x(X,{key:3,onView:Ge=>D(f.id)},null,8,["onView"])):p("",!0)]),_:1}),t(i).result.length?(_(),x(J,{key:0,"current-page":t(w),"onUpdate:current-page":o[5]||(o[5]=f=>ge(w)?w.value=f:null),class:"mt-6","item-per-page":t(i).pagination.per_page,"total-items":t(i).pagination.total},null,8,["current-page","item-per-page","total-items"])):p("",!0)]),_:1},8,["columns","data","limit","total"])])}}});export{pt as default};
