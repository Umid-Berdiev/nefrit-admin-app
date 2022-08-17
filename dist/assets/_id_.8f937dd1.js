import{_ as Ye}from"./VTabs.vue_vue_type_script_setup_true_lang.95c44c77.js";import{z as U,M as J,A as y,p as ce,o as s,i as _,j as e,q as a,w as d,P as G,Y as je,bN as Ae,U as _e,m as Y,t,R as oe,g as z,l as I,k as ne,N as H,r as te,bx as se,D as be,f as B,E as l,s as ae,F as T,v as E,a1 as me,a2 as pe,bB as Oe,e as re,b as fe,G as we,B as de,x as ve,bp as ge,bQ as $e,a3 as Te,be as Re,bc as Pe,O as Ee}from"./index.54471211.js";import{l as ze}from"./lodash.a186609f.js";import{o as ye,p as He,q as We,s as qe,t as Le,v as Ke,w as Ge,x as Qe,y as Je,z as Xe,A as Ze,B as et,C as tt,k as at,D as st,E as nt,l as ot}from"./index.d8323660.js";import{_ as le}from"./VModal.vue_vue_type_style_index_0_lang.61065232.js";import{_ as lt}from"./VTextarea.53745417.js";import{_ as it}from"./VRadio.vue_vue_type_style_index_0_lang.7c0c9152.js";import{_ as Ce}from"./VIcon.vue_vue_type_script_setup_true_lang.8ffe0265.js";import{_ as ke}from"./VAvatar.vue_vue_type_style_index_0_lang.61815048.js";import{_ as Ve}from"./ConfirmActionModal.vue_vue_type_script_setup_true_lang.3390d561.js";import{_ as ct,a as rt}from"./ConclusionFormModal.vue_vue_type_script_setup_true_lang.80af14f6.js";import{_ as Se,a as De}from"./VFlexTable.vue_vue_type_style_index_0_lang.cc32d678.js";import{_ as xe}from"./VFlexPagination.2909dff1.js";import{_ as Me}from"./VDropdown.vue_vue_type_style_index_0_lang.f096a086.js";import{_ as dt}from"./StatusTag.vue_vue_type_script_setup_true_lang.bf056089.js";import{_ as Ne}from"./VPlaceholderSection.vue_vue_type_style_index_0_lang.696c973e.js";import{_ as he}from"./VFlex.vue_vue_type_style_index_0_lang.96c8d1f7.js";import{_ as Ie}from"./VFlexItem.vue_vue_type_style_index_0_lang.73a7f7bb.js";import{u as Fe}from"./index.97d140ea.js";import{a as ut}from"./index.60d6c1ab.js";import{_ as _t}from"./VFileInput.vue_vue_type_script_setup_true_lang.0fc46e7e.js";import{_ as mt}from"./StatusSelect.vue_vue_type_script_setup_true_lang.0a7007db.js";import{_ as pt}from"./ListWidgetSingle.vue_vue_type_style_index_0_lang.8f573aa7.js";import{_ as Be}from"./VTag.vue_vue_type_style_index_0_lang.92fc6287.js";import{u as ft}from"./viewWrapper.ff650e59.js";import"./via-placeholder.9af8280d.js";import"./VOption.vue_vue_type_style_index_0_lang.0c1d2da9.js";const ht="/images/icons/misc/typing.gif",vt={class:"message-field-wrapper"},gt={class:"control"},$t={class:"add-file-content"},yt=["onKeyup"],bt={class:"send-message"},wt=e("div",{class:"typing-indicator"},[e("img",{src:ht,alt:""})],-1),Ct=U({emits:["update:data"],setup(i,{emit:m}){const f=J().params?.id??null,r=y(""),c=y(),v=y(!1);async function $(){if(v.value=!0,!ze.exports.isEmpty(r.value)){const b=r.value;r.value="";const u={application_id:Number(f),message:b,file:""};await ye(u),m("update:data")}v.value=!1}async function o(b){let u=b.target,h=u.files&&u.files[0];if(!h)return;if(h.size>5e6){alert("File should be smaller than 1MB");return}c.value=h;const p=new FormData;p.append("application_id",f),p.append("file",h),p.append("message",r.value),await ye(p),m("update:data")}return(b,u)=>{const h=ce("VueIconify");return s(),_("div",vt,[e("div",gt,[e("div",$t,[a(G,{class:"is-relative m-2"},{default:d(()=>[a(h,{icon:"feather:paperclip",class:"mt-2"}),e("input",{class:"is-absolute",type:"file",onChange:o},null,32)]),_:1})]),je(e("input",{id:"chat-input",class:"input is-rounded",type:"text","onUpdate:modelValue":u[0]||(u[0]=p=>r.value=p),onKeyup:_e($,["enter"]),"aria-label":"Write a message"},null,40,yt),[[Ae,r.value]]),e("div",bt,[a(G,{loading:v.value,disabled:v.value,color:"primary",raised:"",rounded:"",onClick:$},{default:d(()=>[Y(t(b.$t("Send")),1)]),_:1},8,["loading","disabled"])])]),wt])}}});const kt={},Vt={class:"chat-body-wrap"};function St(i,m){return s(),_("div",Vt,[z(i.$slots,"default")])}const Dt=oe(kt,[["render",St]]);const xt={},Mt={id:"chat-body",class:"chat-body"};function Nt(i,m){return s(),_("ol",Mt,[z(i.$slots,"default")])}const It=oe(xt,[["render",Nt]]);const Ft={},Bt={class:"chat-header"};function Ut(i,m){return s(),_("div",Bt,[z(i.$slots,"default")])}const Yt=oe(Ft,[["render",Ut]]),jt={class:"animated container"},At=U({setup(i){return(m,n)=>{const f=Yt,r=It,c=Dt,v=Ct;return s(),_("div",jt,[a(f,null,{default:d(()=>[z(m.$slots,"header")]),_:3}),a(c,null,{default:d(()=>[a(r,null,{default:d(()=>[z(m.$slots,"body")]),_:3}),z(m.$slots,"side")]),_:3}),a(v,{"onUpdate:data":n[0]||(n[0]=$=>m.$emit("update:data"))})])}}});const Ot={class:"avatar"},Tt=["src"],Rt={key:0,class:"msg"},Pt={class:"msg-inner"},Et={style:{"overflow-wrap":"break-word"}},zt={key:1,class:"msg is-image"},Ht={class:"image-container"},Wt={class:"image is-128x128"},qt=["src"],Lt=U({props:{message:null},setup(i){return(m,n)=>(s(),_("li",{class:ne([i.message.is_me&&"self",!i.message.is_me&&"other"])},[e("div",Ot,[i.message.user?.avatar?(s(),_("img",{key:0,src:i.message.user.avatar,draggable:"false",alt:""},null,8,Tt)):I("",!0)]),i.message.message?(s(),_("div",Rt,[e("div",Pt,[e("p",Et,t(i.message.message),1)]),e("time",null,t(m.$h.formatDate(i.message.created_at,"DD.MM.YYYY HH:mm")),1)])):I("",!0),i.message.file?(s(),_("div",zt,[e("div",Ht,[e("figure",Wt,[e("img",{src:i.message.file},null,8,qt)])])])):I("",!0)],2))}});const Kt={key:0,class:"no-messages"},Gt={class:"text"},Qt=U({async setup(i){let m,n;H();const r=J().params?.id??null,c=te([]);y(),[m,n]=se(()=>v()),await m,n(),be(()=>c,o=>{o&&$()},{deep:!0,immediate:!0});async function v(){const o=await He(Number(r));Object.assign(c,o)}async function $(){const o=document.getElementById("chat-body");console.log("chatBody.offsetHeight: ",o?.offsetHeight),o&&(o.scrollTop=o.offsetHeight+50)}return(o,b)=>{const u=Lt,h=At;return s(),B(h,{"onUpdate:data":v},{body:d(()=>[l(c).length===0?(s(),_("li",Kt,[e("div",Gt,[e("h3",null,t(o.$t("No_messages_yet")),1)])])):I("",!0),(s(!0),_(T,null,ae(l(c),p=>(s(),B(u,{key:p.id,message:p},null,8,["message"]))),128))]),_:1})}}});const Jt=["onSubmit"],Xt={class:"columns is-multiline"},Zt={class:"column is-12 is-flex is-justify-content-center"},ea={class:"column is-12"},ta={class:"help has-text-danger"},aa=U({props:{modelValue:{type:Boolean,default:!1},item:null,parentId:null},emits:["update:modelValue","update:list"],setup(i,{emit:m}){const n=i,{t:f}=H();let r=y(f("Add_vote"));const c=te({description:"",value:0}),v=te({description:"",vote:""});be(()=>n.item,u=>{u&&(c.description=u.description,c.value=u.value)},{deep:!0,immediate:!0});async function $(){try{const u={description:c.description,value:c.value};await We(n.parentId,u),m("update:list"),o()}catch(u){Object.assign(v,u.response?.data?.errors)}}function o(){Object.assign(v,{description:"",value:""}),m("update:modelValue",!1)}function b(u){v[u.target.name]=""}return(u,h)=>{const p=it,g=me,x=pe,D=lt,j=G,A=le;return s(),B(A,{open:i.modelValue,size:"large",title:l(r),actions:"right",onClose:o},{content:d(()=>[e("form",{id:"feedback-form",class:"modal-form",onSubmit:E($,["prevent"])},[e("div",Xt,[e("div",Zt,[a(x,{grouped:""},{default:d(()=>[a(g,null,{default:d(()=>[a(p,{modelValue:l(c).value,"onUpdate:modelValue":h[0]||(h[0]=w=>l(c).value=w),value:1,label:u.$t("Accept"),name:"outlined_radio",color:"primary"},null,8,["modelValue","label"])]),_:1})]),_:1}),a(x,{grouped:""},{default:d(()=>[a(g,null,{default:d(()=>[a(p,{modelValue:l(c).value,"onUpdate:modelValue":h[1]||(h[1]=w=>l(c).value=w),value:0,label:u.$t("Reject"),name:"outlined_radio",color:"warning"},null,8,["modelValue","label"])]),_:1})]),_:1})]),e("div",ea,[a(x,{label:u.$t("Comment"),required:""},{default:d(()=>[a(g,{"has-error":l(v).description[0]},{default:d(()=>[a(D,{name:"description",placeholder:u.$t("Add_comment"),modelValue:l(c).description,"onUpdate:modelValue":h[2]||(h[2]=w=>l(c).description=w),onInput:b},null,8,["placeholder","modelValue"]),e("p",ta,t(l(v).description[0]),1)]),_:1},8,["has-error"])]),_:1},8,["label"])])])],40,Jt)]),action:d(({close:w})=>[a(j,{color:"primary",outlined:"",type:"submit",form:"feedback-form"},{default:d(()=>[Y(t(u.$t("Save")),1)]),_:1})]),_:1},8,["open","title"])}}}),sa=["open"],na=["onKeydown","onClick"],oa={class:"collapse-icon"},la={class:"collapse-content"},ia=U({props:{items:{default:()=>[]},itemOpen:{default:void 0},withChevron:{type:Boolean}},setup(i){const n=y(i.itemOpen),f=r=>{if(n.value===r){n.value=void 0;return}n.value=r};return(r,c)=>{const v=Ce;return s(!0),_(T,null,ae(i.items,($,o)=>(s(),_("details",{key:o,class:ne([[i.withChevron&&"has-chevron",!i.withChevron&&"has-plus"],"collapse"]),open:n.value===o||void 0},[z(r.$slots,"collapse-item",{item:$,index:o,toggle:f},()=>[e("summary",{class:"collapse-header",tabindex:"0",onKeydown:_e(E(()=>f(o),["prevent"]),["space"]),onClick:E(()=>f(o),["prevent"])},[e("h3",null,[z(r.$slots,"collapse-item-summary",{item:$,index:o,toggle:f},()=>[Y(t($.title),1)])]),e("div",oa,[i.withChevron?(s(),B(v,{key:0,icon:"feather:chevron-down"})):i.withChevron?I("",!0):(s(),B(v,{key:1,icon:"feather:plus"}))])],40,na),e("div",la,[e("p",null,[z(r.$slots,"collapse-item-content",{item:$,index:o,toggle:f},()=>[Y(t($.content),1)])])])])],10,sa))),128)}}});const ca={class:"container"},ra={class:"company-header is-dark-card-bordered is-dark-bg-6"},da={class:"header-item is-dark-bordered-12"},ua={class:"item-inner"},_a={class:"dark-inverted"},ma={class:"header-item is-dark-bordered-12"},pa={class:"item-inner"},fa={class:"dark-inverted"},ha={class:"header-item is-dark-bordered-12"},va={class:"item-inner"},ga={class:"dark-inverted"},$a={class:"header-item is-dark-bordered-12"},ya={class:"item-inner"},ba={class:"dark-inverted"},wa={class:"user-grid user-grid-v1"},Ca={class:"dark-inverted"},ka={key:0,class:"is-grouped mt-5"},Va={class:"icon"},Sa=["data-icon"],Da=e("span",{class:"icon"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:edit-2"})],-1),xa=e("span",{class:"icon"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})],-1),Ma=e("span",{class:"icon"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"})],-1),Na={key:0,class:"is-grouped mt-5"},Ia={class:"icon"},Fa=["data-icon"],Ba={key:1,class:"is-grouped mt-5"},Ua=U({async setup(i){let m,n;const f=J();H();const r=f.params?.id??null;y([]);const c=y(!1),v=y(),$=y(),o=y();[m,n]=se(()=>u()),await m,n(),[m,n]=se(()=>h()),await m,n();function b(p){c.value=!0,v.value=p}async function u(){const p=await qe(Number(r));$.value=p}async function h(){const p=await Le(Number(r));o.value=p}return(p,g)=>{const x=ke,D=G,j=ia,A=aa;return s(),_("div",ca,[e("div",ra,[e("div",da,[e("div",ua,[e("span",_a,t(o.value?.voted),1),e("p",null,t(p.$t("Total_voted")),1)])]),e("div",ma,[e("div",pa,[e("span",fa,t(o.value?.agree),1),e("p",null,t(p.$t("Accepted")),1)])]),e("div",ha,[e("div",va,[e("span",ga,t(o.value?.disagre),1),e("p",null,t(p.$t("Rejected")),1)])]),e("div",$a,[e("div",ya,[e("span",ba,t(o.value?.didnt_vote),1),e("p",null,t(p.$t("Not_voted")),1)])])]),e("div",wa,[a(Oe,{name:"list",tag:"div",class:"columns is-multiline"},{default:d(()=>[(s(!0),_(T,null,ae($.value,(w,R)=>(s(),_("div",{key:R,class:"column is-4"},[e("div",{class:ne(["grid-item",{"is-active":w.is_me}])},[a(x,{picture:w.user?.avatar,size:"xl"},null,8,["picture"]),e("h3",Ca,t(w.user?.firstname+" "+w.user?.lastname),1),e("p",null,t(w.user?.department),1),w.is_me===!0?(s(),_("div",ka,[w.vote?(s(),_(T,{key:0},[a(D,{color:w.vote.value===1?"success":"danger",style:{width:"80%"},class:"is-justify-content-center mr-3"},{default:d(()=>[e("span",Va,[e("i",{"aria-hidden":"true",class:"iconify","data-icon":w.vote.value===1?"feather:check":"feather:x"},null,8,Sa)]),e("span",null,t(w.vote.value===1?p.$t("Accepted"):p.$t("Rejected")),1)]),_:2},1032,["color"]),a(D,{color:"warning",style:{width:"10%"},class:"is-justify-content-center",onClick:g[0]||(g[0]=F=>b(0))},{default:d(()=>[Da]),_:1}),a(j,{class:"mt-5",items:[{title:p.$t("Description"),content:w.vote.description}],"with-chevron":""},null,8,["items"])],64)):(s(),_(T,{key:1},[a(D,{color:"success",style:{width:"45%"},class:"is-justify-content-center mr-3",onClick:g[1]||(g[1]=F=>b(1))},{default:d(()=>[xa,e("span",null,t(p.$t("Accept")),1)]),_:1}),a(D,{color:"danger",style:{width:"45%"},class:"is-justify-content-center",onClick:g[2]||(g[2]=F=>b(0))},{default:d(()=>[Ma,e("span",null,t(p.$t("Reject")),1)]),_:1})],64))])):(s(),_(T,{key:1},[w.vote?(s(),_("div",Na,[a(D,{class:"is-fullwidth is-justify-content-center",color:w.vote.value===1?"success":"danger"},{default:d(()=>[e("span",Ia,[e("i",{"aria-hidden":"true",class:"iconify","data-icon":w.vote.value===1?"feather:check":"feather:x"},null,8,Fa)]),e("span",null,t(w.vote.value===1?p.$t("Accepted"):p.$t("Rejected")),1)]),_:2},1032,["color"]),a(j,{items:[{title:p.$t("Description"),content:w.vote.description}],"with-chevron":""},null,8,["items"])])):(s(),_("div",Ba,[a(D,{class:"is-fullwidth is-justify-content-center",static:""},{default:d(()=>[e("span",null,t(p.$t("Not_voted_yet")),1)]),_:1})]))],64))],2)]))),128))]),_:1})]),a(A,{modelValue:c.value,"onUpdate:modelValue":g[3]||(g[3]=w=>c.value=w),item:$.value?.find(w=>w.is_me)?.vote,"parent-id":Number(l(r)),"onUpdate:list":g[4]||(g[4]=()=>{u(),h()})},null,8,["modelValue","item","parent-id"])])}}});const Ya=["onClick"],ja=e("div",{class:"icon"},[e("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:edit"})],-1),Aa={class:"meta"},Oa=e("hr",{class:"dropdown-divider"},null,-1),Ta=["onClick"],Ra=e("div",{class:"icon"},[e("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:trash"})],-1),Pa={class:"meta"},Ea=U({emits:["edit","remove"],setup(i,{emit:m}){return(n,f)=>{const r=Me;return s(),B(r,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:d(({close:c})=>[e("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:E(()=>{m("edit"),c()},["prevent"])},[ja,e("div",Aa,[e("span",null,t(n.$t("Edit")),1)])],8,Ya),Oa,e("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:E(()=>{m("remove"),c()},["prevent"])},[Ra,e("div",Pa,[e("span",null,t(n.$t("Remove")),1)])],8,Ta)]),_:1})}}}),za={class:"applicant-list-wrapper"},Ha={class:"is-size-3 mb-3"},Wa=["textContent"],qa={key:0,class:"flex-list-inner"},La={key:0,style:{"white-space":"break-spaces"}},Ka=U({async setup(i){let m,n;const f=J(),r=Fe(),{t:c,locale:v}=H(),$=f.params?.id??null,o=te({pagination:{current_page:1,per_page:10,total:10},result:[]}),b=y(!1),u=y(),h=re({get:()=>o.pagination.current_page,set:async V=>{await D(V)}}),p=({order:V,a:S,b:k})=>V==="asc"?S.location.localeCompare(k.location):V==="desc"?k.location.localeCompare(S.location):0,g={orderNumber:{format:(V,S,k)=>`${k+1}`,cellClass:"is-flex-grow-0"},message:{label:c("Notice_message"),searchable:!0,sortable:!0,sort:p},text:{label:c("Notice_details")},read_at:{label:c("Read_at")},status:{label:c("Status")},actions:{label:c("Actions"),align:"center"}},x=fe();[m,n]=se(()=>D()),await m,n();async function D(V=1){const S=await Ke(Number($),V);Object.assign(o,S)}async function j(V){u.value=V,b.value=!0}async function A(V){u.value=V,r.$patch({confirmModalState:!0})}async function w(){await Ge(u.value),D()}function R(){x.success(c("Updated_successfully"))}function F(){u.value=void 0}return(V,S)=>{const k=Ie,C=G,N=he,W=Ne,q=dt,Q=Ea,X=Se,Z=xe,ee=De,M=ct,P=Ve;return s(),_("div",za,[a(N,{class:"mb-4","flex-wrap":"wrap"},{default:d(()=>[a(k,null,{default:d(()=>[e("h1",Ha,t(V.$t("Statement_notices")),1)]),_:1}),a(k,{class:"ml-auto"},{default:d(()=>[a(C,{outlined:"",rounded:"",color:"info",icon:"feather:plus",onClick:S[0]||(S[0]=E(L=>b.value=!0,["prevent"]))},{default:d(()=>[Y(t(V.$t("Add")),1)]),_:1})]),_:1})]),_:1}),a(ee,{columns:l(g),data:l(o).result,limit:l(o).pagination.per_page,total:l(o).pagination.total},{default:d(L=>[a(X,{rounded:""},{"header-column":d(({column:O})=>[O.key==="orderNumber"?(s(),_("span",{key:0,class:"is-flex-grow-0",textContent:t("#")},null,8,Wa)):I("",!0)]),body:d(()=>[l(o).result.length===0?(s(),_("div",qa,[a(W,{title:V.$t("No_data"),subtitle:V.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):I("",!0)]),"body-cell":d(({row:O,column:K,value:ie})=>[K.key==="text"?(s(),_("div",La,t(O.text),1)):K.key==="read_at"&&ie?(s(),_(T,{key:1},[Y(t(V.$h.formatDate(ie,"DD.MM.YYYY HH:mm")),1)],64)):K.key==="status"&&ie?(s(),B(q,{key:2,status:ie},null,8,["status"])):K.key==="actions"?(s(),B(Q,{key:3,onEdit:Ue=>j(O.id),onRemove:Ue=>A(O.id)},null,8,["onEdit","onRemove"])):I("",!0)]),_:1}),l(o).result.length?(s(),B(Z,{key:0,"current-page":l(h),"onUpdate:current-page":S[1]||(S[1]=O=>we(h)?h.value=O:null),class:"mt-6","item-per-page":l(o).pagination.per_page,"total-items":l(o).pagination.total},null,8,["current-page","item-per-page","total-items"])):I("",!0)]),_:1},8,["columns","data","limit","total"]),a(M,{modelValue:b.value,"onUpdate:modelValue":S[2]||(S[2]=L=>b.value=L),"item-id":u.value,"parent-id":Number(l($)),"onUpdate:list":S[3]||(S[3]=()=>{D(),R(),F()}),onClose:F},null,8,["modelValue","item-id","parent-id"]),a(P,{onConfirmAction:w})])}}}),Ga=["onClick"],Qa=e("div",{class:"icon"},[e("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:edit"})],-1),Ja={class:"meta"},Xa=e("hr",{class:"dropdown-divider"},null,-1),Za=["onClick"],es=e("div",{class:"icon"},[e("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:trash"})],-1),ts={class:"meta"},as=U({emits:["edit","remove"],setup(i,{emit:m}){return(n,f)=>{const r=Me;return s(),B(r,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:d(({close:c})=>[e("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:E(()=>{m("edit"),c()},["prevent"])},[Qa,e("div",Ja,[e("span",null,t(n.$t("Edit")),1)])],8,Ga),Xa,e("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:E(()=>{m("remove"),c()},["prevent"])},[es,e("div",ts,[e("span",null,t(n.$t("Remove")),1)])],8,Za)]),_:1})}}}),ss={class:"applicant-list-wrapper"},ns={class:"is-size-3 mb-3"},os=["textContent"],ls={key:0,class:"flex-list-inner"},is={key:1,style:{"white-space":"break-spaces"}},cs={key:2},rs={key:3},ds={class:"text-truncate"},us=["href"],_s=U({async setup(i){let m,n;const f=J(),r=Fe(),{t:c,locale:v}=H(),$=f.params?.id??null,o=te({pagination:{current_page:1,per_page:10,total:10},result:[]}),b=y(!1),u=y(),h=re({get:()=>o.pagination.current_page,set:async F=>{await x(F)}}),p={orderNumber:{format:(F,V,S)=>`${S+1}`,cellClass:"is-flex-grow-0"},user:{label:c("Created_by")},text:{label:c("Conclusion_desc"),grow:!0},department:{label:c("Department")},files:{label:c("Files"),grow:!0},actions:{label:c("Actions"),align:"center"}},g=fe();[m,n]=se(()=>x()),await m,n();async function x(F=1){const V=await Qe(Number($),F);Object.assign(o,V)}async function D(F){u.value=F,b.value=!0}async function j(F){u.value=F,r.$patch({confirmModalState:!0})}async function A(){await Je(u.value),x()}function w(){u.value=void 0}function R(){g.success(c("Updated_successfully"))}return(F,V)=>{const S=Ie,k=G,C=he,N=Ne,W=as,q=Se,Q=xe,X=De,Z=rt,ee=Ve;return s(),_("div",ss,[a(C,{class:"mb-4","flex-wrap":"wrap"},{default:d(()=>[a(S,null,{default:d(()=>[e("h1",ns,t(F.$t("Statement_conclusions")),1)]),_:1}),a(S,{class:"ml-auto"},{default:d(()=>[a(k,{outlined:"",rounded:"",color:"info",icon:"feather:plus",onClick:V[0]||(V[0]=E(M=>b.value=!0,["prevent"]))},{default:d(()=>[Y(t(F.$t("Add")),1)]),_:1})]),_:1})]),_:1}),a(X,{columns:l(p),data:l(o).result,limit:l(o).pagination.per_page,total:l(o).pagination.total},{default:d(M=>[a(q,{rounded:""},{"header-column":d(({column:P})=>[P.key==="orderNumber"?(s(),_("span",{key:0,class:"is-flex-grow-0",textContent:t("#")},null,8,os)):I("",!0)]),body:d(()=>[l(o).result.length===0?(s(),_("div",ls,[a(N,{title:F.$t("No_data"),subtitle:F.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):I("",!0)]),"body-cell":d(({row:P,column:L,value:O})=>[L.key==="user"?(s(),_(T,{key:0},[O.avatar?(s(),B(ke,{key:0,picture:O.avatar,class:"mr-5"},null,8,["picture"])):I("",!0),e("h1",null,t(O.firstname+" "+O.lastname),1)],64)):I("",!0),L.key==="text"?(s(),_("div",is,t(P.text),1)):I("",!0),L.key==="department"?(s(),_("span",cs,t(O.name),1)):I("",!0),L.key==="files"?(s(),_("ul",rs,[(s(!0),_(T,null,ae(O,K=>(s(),_("li",ds,[e("a",{href:K.file,class:"has-text-primary"},t(K.name),9,us)]))),256))])):L.key==="actions"?(s(),B(W,{key:4,onEdit:K=>D(P.id),onRemove:K=>j(P.id)},null,8,["onEdit","onRemove"])):I("",!0)]),_:1}),l(o).result.length?(s(),B(Q,{key:0,"current-page":l(h),"onUpdate:current-page":V[1]||(V[1]=P=>we(h)?h.value=P:null),class:"mt-6","item-per-page":l(o).pagination.per_page,"total-items":l(o).pagination.total},null,8,["current-page","item-per-page","total-items"])):I("",!0)]),_:1},8,["columns","data","limit","total"]),a(Z,{modelValue:b.value,"onUpdate:modelValue":V[2]||(V[2]=M=>b.value=M),"item-id":u.value,"parent-id":Number(l($)),"onUpdate:list":V[3]||(V[3]=()=>{x(),R(),w()}),onClose:w},null,8,["modelValue","item-id","parent-id"]),a(ee,{onConfirmAction:A})])}}});const ms=oe(_s,[["__scopeId","data-v-3026e1cc"]]),ps=["onSubmit"],fs={class:"columns is-multiline"},hs={class:"column is-12"},vs={class:"help has-text-danger"},gs=U({props:{modelValue:{type:Boolean,default:!1},statementId:null,statementStage:null},emits:["update:modelValue","update:stage","update:data"],setup(i,{emit:m}){const n=i,{t:f,locale:r}=H(),c=y([]),v=te({stage_id:""});let $=y(f("Change_statement_stage"));const o=y(),b=y(!1);de(async()=>{const p=await ut();o.value=n.statementStage,c.value=p});async function u(p){try{b.value=!0,await Xe(Number(n.statementId),{stage_id:o.value}),m("update:data"),h()}catch(g){Object.assign(v,g.response?.data?.errors)}finally{b.value=!1}}function h(){Object.assign(v,{stage_id:""}),m("update:modelValue",!1)}return(p,g)=>{const x=ce("Multiselect"),D=me,j=pe,A=G,w=le;return s(),B(w,{open:i.modelValue,size:"large",title:l($),actions:"right",onClose:h},{content:d(()=>[e("form",{id:"statement-stage-form",class:"modal-form",onSubmit:E(u,["prevent"]),style:{"min-height":"200px"}},[e("div",fs,[e("div",hs,[a(j,{label:p.$t("Stages")},{default:d(()=>[a(D,null,{default:d(()=>[a(x,{modelValue:o.value,"onUpdate:modelValue":g[0]||(g[0]=R=>o.value=R),options:c.value,placeholder:p.$t("Select_stages"),valueProp:"id",label:"name"},null,8,["modelValue","options","placeholder"]),e("p",vs,t(l(v).stage_id[0]),1)]),_:1})]),_:1},8,["label"])])])],40,ps)]),action:d(({close:R})=>[a(A,{loading:b.value,color:"primary",outlined:"",type:"submit",form:"statement-stage-form",disabled:b.value},{default:d(()=>[Y(t(p.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),$s=["onSubmit"],ys={class:"columns is-multiline"},bs={class:"column is-12"},ws={class:"help has-text-danger"},Cs={class:"column is-12"},ks={class:"help has-text-danger"},Vs={class:"help has-text-danger"},Ss={class:"column is-12"},Ds={class:"help has-text-danger"},xs={class:"column is-12"},Ms=U({props:{modelValue:{type:Boolean,default:!1},statementId:{default:""}},emits:["update:modelValue","update:list"],async setup(i,{emit:m}){let n,f;const r=i,{t:c,locale:v}=H(),$=y([]),o=y(""),b=y(""),u=y(""),h=y(""),p=([n,f]=se(()=>Ze()),n=await n,f(),n),g=y({input:"DD.MM.YYYY"}),x=y(!1),D=te({status_id:"",file:"",number:"",drug_name:"",start_date:"",end_date:"",manufacturer_name:""});let j=y(c("Add_certificate"));async function A(S){try{x.value=!0;const k={application_id:r.statementId,file:typeof $.value[0]=="object"?$.value[0]:"",number:o.value,start_date:b.value,end_date:u.value,status_id:h.value},C=new FormData;C.append("application_id",k.application_id),C.append("file",k.file),C.append("number",k.number),C.append("start_date",$e(k.start_date).format("YYYY-MM-DD")),C.append("end_date",$e(k.end_date).format("YYYY-MM-DD")),C.append("status_id",k.status_id),await et(C),w()}catch(k){Object.assign(D,k.response?.data?.errors)}finally{x.value=!1}}function w(){h.value="",$.value=[],o.value="",b.value="",u.value="",Object.assign(D,{status_id:"",file:"",number:"",start_date:"",end_date:""}),m("update:modelValue",!1)}function R(S){const k=S.target;D[k.name]=""}function F(S){const k=S.target;$.value=k.files&&[k.files[0]],D.file=""}function V(){$.value=[]}return(S,k)=>{const C=Te,N=me,W=pe,q=ce("VDatePicker"),Q=mt,X=_t,Z=G,ee=le;return s(),B(ee,{open:i.modelValue,size:"large",title:l(j),actions:"right",onClose:w},{content:d(()=>[e("form",{id:"certificate-form",class:"modal-form",onSubmit:E(A,["prevent"])},[e("div",ys,[e("div",bs,[a(W,{label:S.$t("Certificate_number"),required:""},{default:d(()=>[a(N,{"has-error":l(D).number[0]},{default:d(()=>[a(C,{name:"number",placeholder:S.$t("Add_certificate_number"),modelValue:o.value,"onUpdate:modelValue":k[0]||(k[0]=M=>o.value=M),onInput:R},null,8,["placeholder","modelValue"]),e("p",ws,t(l(D).number[0]),1)]),_:1},8,["has-error"])]),_:1},8,["label"])]),e("div",Cs,[a(he,{"column-gap":"1rem"},{default:d(()=>[a(q,{locale:l(v),masks:g.value,modelValue:b.value,"onUpdate:modelValue":k[1]||(k[1]=M=>b.value=M),color:"green","trim-weeks":""},{default:d(({inputValue:M,inputEvents:P})=>[a(W,{label:S.$t("Start_date"),required:""},{default:d(()=>[a(N,{icon:"feather:calendar"},{default:d(()=>[a(C,ve({value:M},ge(P)),null,16,["value"]),e("p",ks,t(l(D).start_date[0]),1)]),_:2},1024)]),_:2},1032,["label"])]),_:1},8,["locale","masks","modelValue"]),a(q,{locale:l(v),masks:g.value,modelValue:u.value,"onUpdate:modelValue":k[2]||(k[2]=M=>u.value=M),color:"green","trim-weeks":""},{default:d(({inputValue:M,inputEvents:P})=>[a(W,{label:S.$t("End_date"),required:""},{default:d(()=>[a(N,{icon:"feather:calendar"},{default:d(()=>[a(C,ve({value:M},ge(P)),null,16,["value"]),e("p",Vs,t(l(D).end_date[0]),1)]),_:2},1024)]),_:2},1032,["label"])]),_:1},8,["locale","masks","modelValue"])]),_:1})]),e("div",Ss,[a(Q,{name:"status_id",modelValue:h.value,"onUpdate:modelValue":k[3]||(k[3]=M=>h.value=M),list:l(p),"is-required":!0,onChange:R},null,8,["modelValue","list"]),e("p",Ds,t(l(D).status_id[0]),1)]),e("div",xs,[a(X,{files:$.value,onFileUpload:F,onFileRemove:V,"error-message":l(D).file[0],"remote-files":[]},null,8,["files","error-message"])])])],40,$s)]),action:d(({close:M})=>[a(Z,{loading:x.value,color:"primary",outlined:"",type:"submit",form:"certificate-form",disabled:x.value},{default:d(()=>[Y(t(S.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),Ns={class:"timeline is-centered"},Is={class:"timeline-header"},Fs={class:"tag is-medium is-primary"},Bs={class:"timeline-content"},Us={class:"has-text-primary has-text-bold is-size-5"},Ys={class:"heading"},js={class:""},As={class:"timeline-content"},Os={class:"has-text-primary has-text-bold is-size-5"},Ts={class:"heading"},Rs={class:""},Ps={class:"timeline-header"},Es={class:"tag is-medium is-info"},zs=U({props:{items:{default:()=>[]},squared:{type:Boolean},colored:{type:Boolean}},setup(i){const m=i;return(n,f)=>(s(),_("div",Ns,[e("header",Is,[e("span",Fs,t(n.$t("Start")),1)]),(s(!0),_(T,null,ae(m.items,(r,c)=>(s(),_("div",{key:r.id,class:"timeline-item"},[r.key==="stages"?(s(),_(T,{key:0},[e("div",{class:ne(["timeline-marker is-icon",[r.date&&"is-primary has-text-white"]])},t(r.stage_number),3),e("div",Bs,[e("span",null,t(r.date&&n.$h.formatDate(r.date,"DD.MM.YYYY")),1),e("p",Us,t(r.stage),1),e("p",Ys,t(r.department),1),e("p",js,t(r.message),1)])],64)):(s(),_(T,{key:1},[e("div",{class:ne(["timeline-marker has-text-dark",[r.date&&"is-primary has-text-white"]])},null,2),e("div",As,[e("span",null,t(r.date&&n.$h.formatDate(r.date,"DD.MM.YYYY")),1),e("p",Os,t(n.$t(r.key)),1),e("p",Ts,t(r.department),1),e("p",Rs,t(r.message),1)])],64))]))),128)),e("header",Ps,[e("span",Es,t(n.$t("End")),1)])]))}}),Hs={class:"table is-hoverable is-fullwidth is-bordered"},Ws={class:"has-text-weight-bold"},qs={class:"has-text-weight-bold"},Ls={class:"has-text-weight-bold"},Ks={class:"has-text-weight-bold"},Gs={class:"has-text-weight-bold"},Qs={class:"has-text-weight-bold"},Js={key:0},Xs={class:"has-text-weight-bold"},Zs=U({props:{modelValue:Boolean,id:Number,companyData:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(i,{emit:m}){const{t:n}=H(),f={name:{label:n("Company_name")},phone:{label:n("Phone_number")},bossName:{label:n("Boss_name")},website:n("Website"),stir:n("stir"),status:n("Status"),country:n("Country"),certificate:n("Certificate")};return(r,c)=>{const v=Be,$=le;return s(),B($,{open:i.modelValue,title:r.$t("Company_info"),actions:"right",onClose:c[0]||(c[0]=o=>m("update:modelValue",!1)),"cancel-label":r.$t("Close")},{content:d(()=>[e("table",Hs,[e("tbody",null,[e("tr",null,[e("td",Ws,t(l(f).name.label),1),e("td",null,t(i.companyData?.name),1)]),e("tr",null,[e("td",qs,t(l(f).phone.label),1),e("td",null,t(i.companyData?.phone),1)]),e("tr",null,[e("td",Ls,t(l(f).bossName.label),1),e("td",null,t(i.companyData?.boss_name),1)]),e("tr",null,[e("td",Ks,t(l(f).website),1),e("td",null,t(i.companyData?.website),1)]),e("tr",null,[e("td",Gs,t(l(f).stir),1),e("td",null,t(i.companyData?.inn),1)]),e("tr",null,[e("td",Qs,t(l(f).status),1),i.companyData?.status?(s(),_("td",Js,[a(v,{class:"is-size-7",rounded:"",color:i.companyData?.status?.color},{default:d(()=>[Y(t(i.companyData?.status?.name),1)]),_:1},8,["color"])])):I("",!0)]),e("tr",null,[e("td",Xs,t(l(f).country),1),e("td",null,t(i.companyData?.country?.name),1)])])])]),_:1},8,["open","title","cancel-label"])}}}),en={class:"table is-hoverable is-bordered is-fullwidth"},tn={class:"has-text-weight-bold"},an={class:"has-text-weight-bold"},sn={class:"has-text-weight-bold"},nn={class:"has-text-weight-bold"},on={class:"has-text-weight-bold"},ln={class:"has-text-weight-bold"},cn={class:"has-text-weight-bold"},rn={class:"has-text-weight-bold"},dn=U({props:{modelValue:Boolean,id:Number,drugData:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(i,{emit:m}){const{t:n}=H(),f={name:{label:n("Drug_name")},saleName:{label:n("Sale_name")},composition:{label:n("Composition")},drugForm:n("Drug_form"),patentNumber:n("Patent_number"),use:n("Use"),producer:n("Producer"),manufacturer:n("Manufacturer")};return(r,c)=>{const v=le;return s(),B(v,{open:i.modelValue,title:r.$t("Drug_details"),actions:"right",onClose:c[0]||(c[0]=$=>m("update:modelValue",!1)),"cancel-label":r.$t("Close")},{content:d(()=>[e("table",en,[e("tbody",null,[e("tr",null,[e("td",tn,t(l(f).name.label),1),e("td",null,t(i.drugData?.name),1)]),e("tr",null,[e("td",an,t(l(f).saleName.label),1),e("td",null,t(i.drugData?.trade_name),1)]),e("tr",null,[e("td",sn,t(l(f).composition.label),1),e("td",null,t(i.drugData?.structure),1)]),e("tr",null,[e("td",nn,t(l(f).drugForm),1),e("td",null,t(i.drugData?.drug_figure),1)]),e("tr",null,[e("td",on,t(l(f).patentNumber),1),e("td",null,t(i.drugData?.patent),1)]),e("tr",null,[e("td",ln,t(l(f).use),1),e("td",null,t(i.drugData?.usage),1)]),e("tr",null,[e("td",cn,t(l(f).producer),1),e("td",null,t(i.drugData?.preparer.name),1)]),e("tr",null,[e("td",rn,t(l(f).manufacturer),1),e("td",null,t(i.drugData?.manufacturer.name),1)])])])]),_:1},8,["open","title","cancel-label"])}}}),ue=i=>(Re("data-v-46a83168"),i=i(),Pe(),i),un={class:"columns mt-5"},_n={class:"column is-6"},mn={class:"table is-hoverable is-bordered is-fullwidth"},pn={class:"has-text-weight-bold"},fn=ue(()=>e("i",{class:"iconify","data-icon":"feather:link","aria-hidden":"true"},null,-1)),hn={class:"has-text-weight-bold"},vn=ue(()=>e("i",{class:"iconify","data-icon":"feather:link","aria-hidden":"true"},null,-1)),gn={class:"has-text-weight-bold"},$n={class:"has-text-weight-bold"},yn={class:"is-flex is-align-items-center"},bn={class:"mr-3"},wn={class:"has-text-weight-bold"},Cn={class:"has-text-weight-bold"},kn={class:"has-text-weight-bold"},Vn=["href"],Sn=ue(()=>e("i",{class:"iconify","data-icon":"feather:link","aria-hidden":"true"},null,-1)),Dn={key:1,class:"has-text-danger"},xn={class:"has-text-weight-bold"},Mn={class:"is-flex is-align-items-center"},Nn=["href"],In=ue(()=>e("i",{class:"iconify","data-icon":"feather:link","aria-hidden":"true"},null,-1)),Fn={key:1,class:"has-text-danger"},Bn={class:"column is-6"},Un=U({setup(i){const m=J(),{t:n,locale:f}=H(),r=fe(),c={company:{label:n("Applied_legal_entity")},drug:{label:n("Drug_name")},statementCreator:{label:n("Statement_creator")},stage:{label:n("Stage")},date:{label:n("applied_at")},paymentStatus:{label:n("Payment_status")},contract:{label:n("Contract")},certificate:{label:n("Certificate")}},v=y(),$=y(),o=y(!1),b=y(!1),u=y(!1),h=y(!1),p=m.params?.id??null,g=y(),x=re(()=>g.value?.stage.id),D=y(),j=y(!1),A=y(!1);de(async()=>{await F(),await V(),await k()});function w(C){v.value=C,o.value=!0}function R(C){$.value=C,b.value=!0}async function F(){const C=await tt(Number(p));g.value=C;const N=await at(Number(p));D.value=N}async function V(){const C=await st(Number(p));j.value=C.result}function S(){r.success(n("Success"))}async function k(){const C=await nt(p);A.value=C}return(C,N)=>{const W=G,q=Be,Q=pt,X=zs,Z=Ms,ee=gs;return s(),_("div",un,[e("div",_n,[a(Q,{title:C.$t("Statement_details"),straight:"",class:"list-widget-v3"},{default:d(()=>[e("table",mn,[e("tbody",null,[e("tr",null,[e("td",pn,t(l(c).company.label),1),e("td",null,[e("a",{href:"javascript:;",class:"has-text-primary",onClick:N[0]||(N[0]=M=>w(1))},[Y(t(g.value?.legal_entity?.name)+" ",1),fn])])]),e("tr",null,[e("td",hn,t(l(c).drug.label),1),e("td",null,[e("a",{href:"javascript:;",class:"has-text-primary",onClick:N[1]||(N[1]=M=>R(1))},[Y(t(g.value?.drug?.name)+" ",1),vn])])]),e("tr",null,[e("td",gn,t(l(c).statementCreator.label),1),e("td",null,t(g.value?.applicant),1)]),e("tr",null,[e("td",$n,t(l(c).stage.label),1),e("td",yn,[e("span",bn,t(g.value?.stage?.name),1),j.value?(s(),B(W,{key:0,class:"ml-auto",color:"primary",rounded:"",icon:"feather:edit-2",onClick:N[2]||(N[2]=M=>h.value=!0)},{default:d(()=>[Y(t(C.$t("Change_stage")),1)]),_:1})):I("",!0)])]),e("tr",null,[e("td",wn,t(l(c).date.label),1),e("td",null,t(g.value?.date&&C.$h.formatDate(g.value?.date,"HH:mm DD.MM.YYYY")),1)]),e("tr",null,[e("td",Cn,t(l(c).paymentStatus.label),1),e("td",null,[g.value?.is_paid?(s(),B(q,{key:0,color:"primary",label:C.$t("Paid"),outlined:"",rounded:""},null,8,["label"])):(s(),B(q,{key:1,color:"danger",label:C.$t("Not_Paid"),outlined:"",rounded:""},null,8,["label"]))])]),e("tr",null,[e("td",kn,t(l(c).contract.label),1),e("td",null,[g.value?.contract_id?(s(),_("a",{key:0,href:"/app/contract/"+g.value?.contract_id,class:"has-text-primary"},[Y(t(C.$t("Link_for_contract"))+" ",1),Sn],8,Vn)):(s(),_("span",Dn,t(C.$t("No_contract")),1))])]),e("tr",null,[e("td",xn,t(l(c).certificate.label),1),e("td",Mn,[g.value?.certificate?(s(),_("a",{key:0,href:g.value?.certificate?.file,class:"has-text-primary",download:""},[Y(t(g.value?.certificate?.number)+" ",1),In],8,Nn)):(s(),_("span",Fn,t(C.$t("No_certificate")),1)),A.value?(s(),B(W,{key:2,class:"ml-auto",color:"primary",rounded:"",icon:g.value?.certificate?"fas fa-sync":"fas fa-plus",onClick:N[3]||(N[3]=M=>u.value=!0)},{default:d(()=>[Y(t(g.value?.certificate?C.$t("Update"):C.$t("Upload")),1)]),_:1},8,["icon"])):I("",!0)])])])])]),_:1},8,["title"])]),e("div",Bn,[a(Q,{title:C.$t("Chronology"),straight:"",class:"list-widget-v3"},{default:d(()=>[a(X,{items:D.value},null,8,["items"])]),_:1},8,["title"])]),a(Zs,{modelValue:o.value,"onUpdate:modelValue":N[4]||(N[4]=M=>o.value=M),"company-data":g.value?.legal_entity},null,8,["modelValue","company-data"]),a(dn,{modelValue:b.value,"onUpdate:modelValue":N[5]||(N[5]=M=>b.value=M),"drug-data":g.value?.drug},null,8,["modelValue","drug-data"]),a(Z,{modelValue:u.value,"onUpdate:modelValue":N[6]||(N[6]=M=>u.value=M),"statement-id":l(p),onClose:F},null,8,["modelValue","statement-id"]),a(ee,{modelValue:h.value,"onUpdate:modelValue":N[7]||(N[7]=M=>h.value=M),"statement-id":Number(l(p)),"statement-stage":Number(l(x)),"onUpdate:data":N[8]||(N[8]=()=>{F(),S()})},null,8,["modelValue","statement-id","statement-stage"])])}}});const Yn=oe(Un,[["__scopeId","data-v-46a83168"]]),jn=["open"],An=["onKeydown","onClick"],On={class:"collapse-icon"},Tn={class:"collapse-content"},Rn={key:0},Pn=["href"],En={class:"ml-3"},zn={key:1},Hn=U({setup(i){const n=J().params?.id??null,f=y([]),r=v=>{f.value.includes(v)?f.value.splice(f.value.indexOf(v),1):f.value.push(v)},c=y();return de(async()=>{const v=await ot(Number(n));c.value=v,f.value=v.map(($,o)=>o)}),(v,$)=>{const o=Ce,b=ce("VueIconify");return s(!0),_(T,null,ae(c.value,(u,h)=>(s(),_("details",{key:h,class:"has-chevron collapse",open:f.value?.includes(h)??void 0},[z(v.$slots,"collapse-item",{item:u,index:h,toggle:r},()=>[e("summary",{class:"collapse-header",tabindex:"0",onKeydown:_e(E(()=>r(h),["prevent"]),["space"]),onClick:E(()=>r(h),["prevent"])},[e("h3",null,[z(v.$slots,"collapse-item-summary",{item:u,index:h,toggle:r},()=>[Y(t(h+1+". "+u.name),1)])]),e("div",On,[a(o,{icon:"feather:chevron-down"})])],40,An),e("div",Tn,[e("p",null,[z(v.$slots,"collapse-item-content",{item:u,index:h,toggle:r},()=>[u.files.length?(s(),_("ul",Rn,[(s(!0),_(T,null,ae(u.files,p=>(s(),_("li",null,[e("a",{href:p.file,class:"has-text-primary"},[a(b,{icon:"feather:file",height:"1rem"}),e("span",En,t(p.name),1)],8,Pn)]))),256))])):(s(),_("span",zn,t(v.$t("Docs_not_attached_yet")),1))])])])])],8,jn))),128)}}});const Wn={class:"statement-detail-wrapper"},qn={key:0},Ln={key:1,class:"mt-5"},Kn={key:2,class:"mt-5"},Gn={key:3,class:"mt-5"},Qn={key:4,class:"mt-5"},Jn={key:5,class:"mt-5"},So=U({setup(i){const{t:m}=H(),n=J(),f=y("details"),r=y([{label:m("Statement_details"),value:"details",icon:"lnil lnil-tap"},{label:m("Statement_docs"),value:"docs",icon:"lnil lnil-files"},{label:m("Statement_conclusions"),value:"conclusions",icon:"lnil lnil-euro-down"},{label:m("Statement_notices"),value:"notices",icon:"lnil lnil-euro-down"},{label:m("ITK"),value:"itk",icon:"feather:activity"},{label:m("Chat"),value:"chat",icon:"fas fa-comments"}]);return ft().setPageTitle(m("Statement_card")),Ee({title:re(()=>m("Statement_card"))}),de(()=>{n.hash&&(f.value=n.hash.slice(1))}),(v,$)=>{const o=Yn,b=ms,u=Ka,h=Ua,p=Qt,g=Ye;return s(),_("div",Wn,[a(g,{selected:f.value,"onUpdate:selected":$[0]||($[0]=x=>f.value=x),tabs:r.value},{tab:d(({activeValue:x})=>[x=="details"?(s(),_("div",qn,[a(o)])):I("",!0),x=="docs"?(s(),_("div",Ln,[a(Hn)])):I("",!0),x=="conclusions"?(s(),_("div",Kn,[a(b)])):I("",!0),x=="notices"?(s(),_("div",Gn,[a(u)])):I("",!0),x=="itk"?(s(),_("div",Qn,[a(h)])):I("",!0),x=="chat"?(s(),_("div",Jn,[a(p)])):I("",!0)]),_:1},8,["selected","tabs"])])}}});export{So as default};
