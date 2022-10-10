import{a as Fe,_ as De}from"./ConclusionFormModal.vue_vue_type_script_setup_true_lang.93969cf3.js";import{_ as Me,a as Ne}from"./VFlexTable.vue_vue_type_style_index_0_lang.abf6ed8c.js";import{_ as xe}from"./VFlexPagination.d5220949.js";import{_ as Ue}from"./VDropdown.vue_vue_type_style_index_0_lang.392d6135.js";import{z as W,p as te,o as r,f as V,w as l,j as n,t as _,v as C,q as e,N as oe,A as b,e as ne,B as ae,m as B,E as o,i as Y,l as L,G as se,s as Pe,F as Te,bU as Le,a2 as le,a3 as ie,a as Be,O as Oe,b as Re,r as A,bQ as T,Z as je,bv as Ee,X as Ie,bM as Ae,x as J,bn as K,bP as We,a4 as qe,P as He}from"./index.5f12676e.js";import{_ as ze}from"./VTag.vue_vue_type_script_setup_true_lang.24da8097.js";import{_ as Ge}from"./StatusTag.vue_vue_type_script_setup_true_lang.e6986374.js";import{_ as Qe}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.49c4acc6.js";import{_ as Xe}from"./VCard.vue_vue_type_script_setup_true_lang.4a46d302.js";import{_ as Ze}from"./VFlex.vue_vue_type_style_index_0_lang.eb4ec446.js";import{_ as Je}from"./VFlexItem.vue_vue_type_style_index_0_lang.715add19.js";import{_ as Ke}from"./CountrySelect.vue_vue_type_style_index_0_lang.0d1671c5.js";import{_ as et,a as tt}from"./VOption.vue_vue_type_style_index_0_lang.dbe0b5db.js";import{a as ot}from"./index.b6a876f5.js";import{_ as nt}from"./StatusSelect.vue_vue_type_script_setup_true_lang.f678e129.js";import{_ as at}from"./TableActionsBlock.vue_vue_type_style_index_0_lang.5c97bd8f.js";import{u as st}from"./viewWrapper.599b7199.js";import{O as lt,P as ee,Q as it}from"./index.435422da.js";import"./VModal.vue_vue_type_style_index_0_lang.2d388967.js";import"./VTextarea.11bca739.js";import"./VFileInput.vue_vue_type_script_setup_true_lang.93612086.js";import"./VIcon.vue_vue_type_script_setup_true_lang.abb6dc1a.js";import"./lodash.a3fc526d.js";import"./VButtons.vue_vue_type_script_setup_true_lang.e52cfa16.js";const dt=["onClick"],ct=n("div",{class:"icon"},[n("i",{"aria-hidden":"true",class:"lnil lnil-eye"})],-1),rt={class:"meta"},ut=["onClick"],mt={class:"icon"},_t={class:"meta"},pt=["onClick"],ft={class:"icon"},gt={class:"meta"},vt=["onClick"],bt={class:"icon"},Vt={class:"meta"},yt=["onClick"],ht={class:"icon"},$t={class:"meta"},kt=W({emits:["view","conclusion:add","conclusion:list","notice:add","notice:list"],setup(D,{emit:f}){return(g,d)=>{const v=te("VueIconify"),y=Ue;return r(),V(y,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:l(({close:u})=>[n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:C(()=>{f("view"),u()},["prevent"])},[ct,n("div",rt,[n("span",null,_(g.$t("View")),1)])],8,dt),n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:C(()=>{f("conclusion:add"),u()},["prevent"])},[n("div",mt,[e(v,{icon:"feather:edit-2"})]),n("div",_t,[n("span",null,_(g.$t("Leave_feedback")),1)])],8,ut),n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:C(()=>{f("notice:add"),u()},["prevent"])},[n("div",ft,[e(v,{icon:"feather:edit-2"})]),n("div",gt,[n("span",null,_(g.$t("Make_notice")),1)])],8,pt),n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:C(()=>{f("conclusion:list"),u()},["prevent"])},[n("div",bt,[e(v,{icon:"feather:arrow-right"})]),n("div",Vt,[n("span",null,_(g.$t("Go_to_conclusions")),1)])],8,vt),n("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:C(()=>{f("notice:list"),u()},["prevent"])},[n("div",ht,[e(v,{icon:"feather:arrow-right"})]),n("div",$t,[n("span",null,_(g.$t("Go_to_notices_list")),1)])],8,yt)]),_:1})}}}),wt={key:0,class:"has-text-danger"},Ct=W({props:{modelValue:{default:""},isRequired:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(D,{emit:f}){const g=D,{t:d}=oe(),v=b([]),y=ne({get:()=>g.modelValue,set:async u=>{f("update:modelValue",u)}});return ae(async()=>{const u=await ot();v.value=u}),(u,O)=>{const m=Le,i=et,M=tt,N=le,S=ie;return r(),V(S,null,{default:l(()=>[e(m,null,{default:l(()=>[B(_(o(d)("Stage"))+" ",1),D.isRequired?(r(),Y("span",wt,"*")):L("",!0)]),_:1}),e(N,null,{default:l(()=>[e(M,{modelValue:o(y),"onUpdate:modelValue":O[0]||(O[0]=c=>se(y)?y.value=c:null)},{default:l(()=>[e(i,{disabled:"",hidden:"",value:""},{default:l(()=>[B(_(o(d)("Select"))+" ...",1)]),_:1}),(r(!0),Y(Te,null,Pe(v.value,c=>(r(),V(i,{key:c.id,value:c.id,textContent:_(c.name)},null,8,["value","textContent"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1})}}}),Yt={class:"applicant-list-wrapper"},St={class:"mb-5"},Ft={class:"title is-5 mb-2"},Dt=["onSubmit"],Mt={class:"columns is-desktop"},Nt={class:"column"},xt={class:"column"},Ut={class:"column"},Pt={class:"column"},Tt={class:"column"},Lt={class:"column"},Bt={class:"column"},Ot={key:0,class:"flex-list-inner"},Rt={key:0},jt={key:1},mo=W({async setup(D){let f,g;const{t:d,locale:v}=oe(),{userRoleID:y}=Be();Oe({title:d("Statements")+" - Nefrit"});const u=Re();st().setPageTitle(d("Statements"));const m=A({pagination:{current_page:1,per_page:10,total:10},result:[]}),i=A({uuid:"",applicant:"",status_id:"",stage_id:"",country_id:"",drug_name:"",date_start:T().subtract(1,"month").format("YYYY-MM-DD"),date_end:T().format("YYYY-MM-DD")}),M=A({type:"string",mask:"YYYY-MM-DD"}),N={input:"DD.MM.YYYY"},S=je(),c=b(!1);b(!1);const R=b(!1),j=b(!1),E=b(!1),$=b(),I=ne({get:()=>m.pagination.current_page,set:async a=>{await F(a)}}),q=b([]),de={uuid:{label:d("statement_code")},drug:{label:d("drug_name")},status:{label:d("Status"),grow:!0},stage:{label:d("Stage"),grow:!0},is_paid:{label:d("Payment_status")},date:{label:d("applied_at")},actions:{label:d("Actions"),align:"center"}};[f,g]=Ee(()=>F()),await f,g(),ae(async()=>{const a=await lt();q.value=a});function ce(a){const t=We.gotoStatementPage(a,y);S.push(t)}function re(a){S.push(`/app/statements/${a}#conclusions`)}function ue(a){S.push(`/app/statements/${a}#notices`)}async function F(a=1){const t=await ee({page:a,...i});Object.assign(m,t)}function H(){u.success(d("Success"))}async function me(){try{c.value=!0;const a=await ee({page:1,...i});Object.assign(m,a)}catch(a){u.error("Error while fetching filtered data: ",a.message)}finally{c.value=!1}}async function _e(){c.value=!0,Object.assign(i,{uuid:"",applicant:"",status_id:"",stage_id:"",country_id:"",drug_name:"",date_start:T().subtract(1,"month").format("YYYY-MM-DD"),date_end:T().format("YYYY-MM-DD")}),await F(),c.value=!1}async function pe(){try{c.value=!0;const a=await it(i),t=URL.createObjectURL(new Blob([a],{type:"application/vnd.ms-excel"})),k=document.createElement("a");k.href=t,k.setAttribute("download",`Worksheet_${Date.now()}.xlsx`),document.body.appendChild(k),k.click()}catch(a){console.log({error:a})}finally{c.value=!1}}return(a,t)=>{const k=at,x=qe,U=le,P=ie,fe=nt,ge=Ct,ve=Ke,z=te("VDatePicker"),G=He,Q=Je,be=Ze,Ve=Xe,ye=Qe,he=Ge,X=ze,$e=kt,ke=Me,we=xe,Ce=Ne,Ye=Fe,Se=De;return r(),Y("div",Yt,[e(k,{center:"",title:"","remove-disabled":"","add-disabled":"","export-disabled":!o(m).result.length,onFilter:t[0]||(t[0]=s=>E.value=!E.value),onExport:pe},null,8,["export-disabled"]),Ie(n("div",St,[e(Ve,{radius:"small"},{default:l(()=>[n("h3",Ft,_(o(d)("Filter_form")),1),n("form",{onSubmit:C(me,["prevent"])},[n("div",Mt,[n("div",Nt,[e(P,{label:a.$t("statement_code")},{default:l(()=>[e(U,null,{default:l(()=>[e(x,{modelValue:o(i).uuid,"onUpdate:modelValue":t[1]||(t[1]=s=>o(i).uuid=s),type:"text"},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])]),n("div",xt,[e(P,{label:a.$t("applied_legal_entity")},{default:l(()=>[e(U,null,{default:l(()=>[e(x,{modelValue:o(i).applicant,"onUpdate:modelValue":t[2]||(t[2]=s=>o(i).applicant=s),type:"text"},null,8,["modelValue"])]),_:1})]),_:1},8,["label"])]),n("div",Ut,[e(fe,{modelValue:o(i).status_id,"onUpdate:modelValue":t[3]||(t[3]=s=>o(i).status_id=s),list:q.value},null,8,["modelValue","list"])]),n("div",Pt,[e(ge,{modelValue:o(i).stage_id,"onUpdate:modelValue":t[4]||(t[4]=s=>o(i).stage_id=s)},null,8,["modelValue"])]),n("div",Tt,[e(ve,{modelValue:o(i).country_id,"onUpdate:modelValue":t[5]||(t[5]=s=>o(i).country_id=s)},null,8,["modelValue"])]),n("div",Lt,[e(z,{modelValue:o(i).date_start,"onUpdate:modelValue":t[6]||(t[6]=s=>o(i).date_start=s),locale:o(v),color:"green","trim-weeks":"",masks:N,"model-config":o(M)},{default:l(({inputValue:s,inputEvents:p})=>[e(P,{label:a.$t("From")},{default:l(()=>[e(U,{icon:"feather:calendar"},{default:l(()=>[e(x,J({value:s},K(p)),null,16,["value"])]),_:2},1024)]),_:2},1032,["label"])]),_:1},8,["modelValue","locale","model-config"])]),n("div",Bt,[e(z,{modelValue:o(i).date_end,"onUpdate:modelValue":t[7]||(t[7]=s=>o(i).date_end=s),locale:o(v),color:"green","trim-weeks":"",masks:N,"model-config":o(M)},{default:l(({inputValue:s,inputEvents:p})=>[e(P,{label:a.$t("To")},{default:l(()=>[e(U,{icon:"feather:calendar"},{default:l(()=>[e(x,J({value:s},K(p)),null,16,["value"])]),_:2},1024)]),_:2},1032,["label"])]),_:1},8,["modelValue","locale","model-config"])])]),e(be,{"justify-content":"end","column-gap":"1rem"},{default:l(()=>[e(Q,null,{default:l(()=>[e(G,{type:"button",disabled:c.value,outlined:"",color:"warning",icon:"feather:x",onClick:_e},{default:l(()=>[B(_(o(d)("Clear")),1)]),_:1},8,["disabled"])]),_:1}),e(Q,null,{default:l(()=>[e(G,{type:"submit",disabled:c.value,outlined:"",color:"success",icon:"feather:filter"},{default:l(()=>[B(_(o(d)("Filter")),1)]),_:1},8,["disabled"])]),_:1})]),_:1})],40,Dt)]),_:1})],512),[[Ae,E.value]]),e(Ce,{columns:o(de),data:o(m).result,limit:o(m).pagination.per_page,total:o(m).pagination.total},{default:l(s=>[e(ke,{rounded:""},{body:l(()=>[o(m).result.length===0?(r(),Y("div",Ot,[e(ye,{title:a.$t("No_data"),subtitle:a.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):L("",!0)]),"body-cell":l(({row:p,column:w,value:h})=>[w.key==="drug"?(r(),Y("span",Rt,_(h?.name),1)):w.key==="date"&&h?(r(),Y("span",jt,_(a.$h.formatDate(h,"HH:mm DD.MM.YYYY")),1)):w.key==="status"?(r(),V(he,{key:2,status:h},null,8,["status"])):w.key==="stage"?(r(),V(X,{key:3,class:"is-size-6 px-5",color:"info",rounded:"",label:h.name,style:{"white-space":"break-spaces",height:"fit-content"}},null,8,["label"])):w.key==="is_paid"?(r(),V(X,{key:4,class:"is-size-6",color:h?"primary":"warning",rounded:"",label:h?a.$t("Paid"):a.$t("Not_Paid")},null,8,["color","label"])):w.key==="actions"?(r(),V($e,{key:5,onView:Z=>ce(p.id),"onConclusion:add":()=>{R.value=!0,$.value=p.id},"onNotice:add":()=>{j.value=!0,$.value=p.id},"onConclusion:list":Z=>re(p.id),"onNotice:list":Z=>ue(p.id)},null,8,["onView","onConclusion:add","onNotice:add","onConclusion:list","onNotice:list"])):L("",!0)]),_:1}),o(m).result.length?(r(),V(we,{key:0,"current-page":o(I),"onUpdate:current-page":t[8]||(t[8]=p=>se(I)?I.value=p:null),class:"mt-6","item-per-page":o(m).pagination.per_page,"total-items":o(m).pagination.total},null,8,["current-page","item-per-page","total-items"])):L("",!0)]),_:1},8,["columns","data","limit","total"]),e(Ye,{modelValue:R.value,"onUpdate:modelValue":t[9]||(t[9]=s=>R.value=s),"item-id":void 0,"parent-id":Number($.value),"onUpdate:list":t[10]||(t[10]=()=>{F(),H()}),onClose:t[11]||(t[11]=s=>$.value=void 0)},null,8,["modelValue","parent-id"]),e(Se,{modelValue:j.value,"onUpdate:modelValue":t[12]||(t[12]=s=>j.value=s),"item-id":void 0,"parent-id":Number($.value),"onUpdate:list":t[13]||(t[13]=()=>{F(),H()}),onClose:t[14]||(t[14]=s=>$.value=void 0)},null,8,["modelValue","parent-id"])])}}});export{mo as default};
