import{_ as Ae}from"./VTabs.2ea0481a.js";import{z as N,O as Z,V as W,A as y,bW as Ye,p as ce,o as n,i as m,j as e,q as a,w as r,P as K,W as Ve,bM as Oe,N as _e,t,M as le,g as E,l as I,k as te,r as J,bw as se,D as oe,f as M,E as l,s as ee,F as P,a8 as Te,X as Re,x as ue,m as j,ab as Pe,ac as Ee,bS as ze,v as z,a1 as me,a2 as pe,bU as Ce,bA as We,Z as ke,e as de,b as he,G as Se,B as fe,bo as be,bX as ye,a3 as qe,bd as He,bb as Le,bP as Ke}from"./index.7d56daf3.js";import{l as Ge}from"./lodash.e1888808.js";import{u as ve,_ as De}from"./VPlaceholderSection.5c15bef1.js";import{z as we,A as Xe,B as Je,C as Ze,D as Qe,E as et,F as tt,G as st,H as at,I as nt,J as ot,K as lt,L as it,m as ct,M as dt,n as rt}from"./index.61560d82.js";import{_ as ie}from"./VModal.d53d6d9f.js";import{_ as ut}from"./VTextarea.466a5d7c.js";import{_ as xe}from"./VAvatar.fc09b784.js";import{_ as Me}from"./ConfirmActionModal.13d479f4.js";import{a as _t,_ as mt,b as pt}from"./ConclusionFormModal.bf0c3f9a.js";import{b as ge,_ as Ie,a as Ne}from"./VFlexTable.1438e9d1.js";import{_ as Fe}from"./VFlexPagination.6accec6d.js";import{_ as ht}from"./StatusTag.8024c057.js";import{_ as Be}from"./VFlexItem.f3c00865.js";import{a as ft}from"./index.78629f73.js";import{_ as vt}from"./VFileInput.24b07aa9.js";import{_ as gt}from"./ListWidgetSingle.4a364042.js";import{_ as Ue}from"./VTag.b5945bcc.js";import{u as $t}from"./viewWrapper.780c4a53.js";import"./via-placeholder.9af8280d.js";import"./VOption.0af6a49b.js";const bt="/images/icons/misc/typing.gif";const yt={class:"message-field-wrapper"},wt={class:"control"},Vt={class:"add-file-content"},Ct=["onKeyup"],kt={class:"send-message"},St=e("div",{class:"typing-indicator"},[e("img",{src:bt,alt:""})],-1),Dt=N({emits:["update:data"],setup(c,{emit:u}){const s=Z();ve(),W();const p=s.params?.id??null,d=y();Ye(d);const o=y(""),$=y(),w=y(!1);async function i(){if(w.value=!0,!Ge.exports.isEmpty(o.value)){const _=o.value;o.value="";const g={application_id:Number(p),message:_,file:""};await we(g),u("update:data")}w.value=!1}async function C(_){let g=_.target,h=g.files&&g.files[0];if(!h)return;if(h.size>5e6){alert("File should be smaller than 1MB");return}$.value=h;const v=new FormData;v.append("application_id",p),v.append("file",h),v.append("message",o.value),await we(v),u("update:data")}return(_,g)=>{const h=ce("VueIconify");return n(),m("div",yt,[e("div",wt,[e("div",Vt,[a(K,{class:"is-relative m-2"},{default:r(()=>[a(h,{icon:"feather:paperclip",class:"mt-2"}),e("input",{class:"is-absolute",type:"file",onChange:C},null,32)]),_:1})]),Ve(e("input",{id:"chat-input",class:"input is-rounded",type:"text","onUpdate:modelValue":g[0]||(g[0]=v=>o.value=v),onKeyup:_e(i,["enter"]),"aria-label":"Write a message"},null,40,Ct),[[Oe,o.value]]),e("div",kt,[e("button",{class:"button v-button is-primary is-raised is-rounded",onClick:i},t(_.$t("Send")),1)])]),St])}}});const xt={},Mt={class:"chat-body-wrap"};function It(c,u){return n(),m("div",Mt,[E(c.$slots,"default")])}const Nt=le(xt,[["render",It]]);const Ft={},Bt={id:"chat-body",class:"chat-body"};function Ut(c,u){return n(),m("ol",Bt,[E(c.$slots,"default")])}const jt=le(Ft,[["render",Ut]]);const At={},Yt={class:"chat-header"};function Ot(c,u){return n(),m("div",Yt,[E(c.$slots,"default")])}const Tt=le(At,[["render",Ot]]);const Rt={class:"animated container"},Pt=N({setup(c){return(u,s)=>{const p=Tt,d=jt,o=Nt,$=Dt;return n(),m("div",Rt,[a(p,null,{default:r(()=>[E(u.$slots,"header")]),_:3}),a(o,null,{default:r(()=>[a(d,null,{default:r(()=>[E(u.$slots,"body")]),_:3}),E(u.$slots,"side")]),_:3}),a($,{"onUpdate:data":s[0]||(s[0]=w=>u.$emit("update:data"))})])}}});const Et={class:"avatar"},zt=["src"],Wt={key:0,class:"msg"},qt={class:"msg-inner"},Ht={style:{"overflow-wrap":"break-word"}},Lt={key:1,class:"msg is-image"},Kt={class:"image-container"},Gt={class:"image is-128x128"},Xt=["src"],Jt=N({props:{message:null},setup(c){return(u,s)=>(n(),m("li",{class:te([c.message.is_me&&"self",!c.message.is_me&&"other"])},[e("div",Et,[c.message.user?.avatar?(n(),m("img",{key:0,src:c.message.user.avatar,draggable:"false",alt:""},null,8,zt)):I("",!0)]),c.message.message?(n(),m("div",Wt,[e("div",qt,[e("p",Ht,t(c.message.message),1)]),e("time",null,t(u.$h.formatDate(c.message.created_at,"DD.MM.YYYY HH:mm")),1)])):I("",!0),c.message.file?(n(),m("div",Lt,[e("div",Kt,[e("figure",Gt,[e("img",{src:c.message.file},null,8,Xt)])])])):I("",!0)],2))}});const Zt={key:0,class:"no-messages"},Qt={class:"text"},es=N({async setup(c){let u,s;W();const d=Z().params?.id??null,o=J([]);y(),[u,s]=se(()=>$()),await u,s(),oe(()=>o,i=>{i&&w()},{deep:!0,immediate:!0});async function $(){const i=await Xe(Number(d));Object.assign(o,i)}async function w(){const i=document.getElementById("chat-body");console.log("chatBody.offsetHeight: ",i?.offsetHeight),i&&(i.scrollTop=i.offsetHeight+50)}return(i,C)=>{const _=Jt,g=Pt;return n(),M(g,{"onUpdate:data":$},{body:r(()=>[l(o).length===0?(n(),m("li",Zt,[e("div",Qt,[e("h3",null,t(i.$t("No_messages_yet")),1)])])):I("",!0),(n(!0),m(P,null,ee(l(o),h=>(n(),M(_,{key:h.id,message:h},null,8,["message"]))),128))]),_:1})}}});const ts=["id","value","name"],ss=e("span",null,null,-1),as=N({props:{id:{default:void 0},value:null,modelValue:{default:void 0},name:{default:void 0},label:{default:void 0},color:{default:void 0},square:{type:Boolean},solid:{type:Boolean},paddingless:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(c,{emit:u}){const s=c,p=J(Te({id:s.id,inherit:!1})),d=y(p?.field?.value??s.modelValue);return oe(d,()=>{u("update:modelValue",d.value)}),oe(()=>s.modelValue,()=>{d.value=s.modelValue}),(o,$)=>{const w=ze;return n(),M(w,{raw:"",class:te(["radio",[s.solid?"is-solid":"is-outlined",s.square&&"is-square",s.color&&`is-${s.color}`,s.paddingless&&"is-paddingless"]])},{default:r(()=>[Ve(e("input",ue({id:l(p).id,"onUpdate:modelValue":$[0]||($[0]=i=>d.value=i),type:"radio",value:s.value,name:s.name},o.$attrs),null,16,ts),[[Re,d.value]]),ss,E(o.$slots,"default",Pe(Ee(l(p))),()=>[j(t(s.label),1)])]),_:3},8,["class"])}}}),ns=["onSubmit"],os={class:"columns is-multiline"},ls={class:"column is-12 is-flex is-justify-content-center"},is={class:"column is-12"},cs={class:"help has-text-danger"},ds=N({props:{modelValue:{type:Boolean},item:null,selectedAnswer:{default:0},parentId:null},emits:["update:modelValue","update:list"],setup(c,{emit:u}){const s=c,{t:p}=W();let d=y(p("Add_vote"));const o=J({description:"",value:0}),$=J({description:"",vote:""});oe(()=>s.selectedAnswer,_=>{o.value=_},{deep:!0,immediate:!0}),oe(()=>s.item,_=>{_&&(o.description=_.description,o.value=_.value)},{deep:!0,immediate:!0});async function w(){try{const _={description:o.description,value:o.value};await Je(s.parentId,_),u("update:list"),i()}catch(_){Object.assign($,_.response?.data?.errors)}}function i(){Object.assign($,{description:"",value:""}),u("update:modelValue",!1)}function C(_){$[_.target.name]=""}return(_,g)=>{const h=as,v=me,D=pe,S=ut,A=K,T=ie;return n(),M(T,{open:c.modelValue,size:"large",title:l(d),actions:"right",onClose:i},{content:r(()=>[e("form",{id:"feedback-form",class:"modal-form",onSubmit:z(w,["prevent"])},[e("div",os,[e("div",ls,[a(D,{grouped:""},{default:r(()=>[a(v,null,{default:r(()=>[a(h,{modelValue:l(o).value,"onUpdate:modelValue":g[0]||(g[0]=V=>l(o).value=V),value:1,label:_.$t("Accept"),name:"outlined_radio",color:"primary"},null,8,["modelValue","label"])]),_:1})]),_:1}),a(D,{grouped:""},{default:r(()=>[a(v,null,{default:r(()=>[a(h,{modelValue:l(o).value,"onUpdate:modelValue":g[1]||(g[1]=V=>l(o).value=V),value:0,label:_.$t("Reject"),name:"outlined_radio",color:"warning"},null,8,["modelValue","label"])]),_:1})]),_:1})]),e("div",is,[a(D,{label:_.$t("Comment"),required:""},{default:r(()=>[a(v,{"has-error":l($).description[0]},{default:r(()=>[a(S,{name:"description",placeholder:_.$t("Add_comment"),modelValue:l(o).description,"onUpdate:modelValue":g[2]||(g[2]=V=>l(o).description=V),onInput:C},null,8,["placeholder","modelValue"]),e("p",cs,t(l($).description[0]),1)]),_:1},8,["has-error"])]),_:1},8,["label"])])])],40,ns)]),action:r(({close:V})=>[a(A,{color:"primary",outlined:"",type:"submit",form:"feedback-form"},{default:r(()=>[j(t(_.$t("Save")),1)]),_:1})]),_:1},8,["open","title"])}}});const rs=["open"],us=["onKeydown","onClick"],_s={class:"collapse-icon"},ms={class:"collapse-content"},ps=N({props:{items:{default:()=>[]},itemOpen:{default:void 0},withChevron:{type:Boolean}},setup(c){const s=y(c.itemOpen),p=d=>{if(s.value===d){s.value=void 0;return}s.value=d};return(d,o)=>{const $=Ce;return n(!0),m(P,null,ee(c.items,(w,i)=>(n(),m("details",{key:i,class:te([[c.withChevron&&"has-chevron",!c.withChevron&&"has-plus"],"collapse"]),open:s.value===i||void 0},[E(d.$slots,"collapse-item",{item:w,index:i,toggle:p},()=>[e("summary",{class:"collapse-header",tabindex:"0",onKeydown:_e(z(()=>p(i),["prevent"]),["space"]),onClick:z(()=>p(i),["prevent"])},[e("h3",null,[E(d.$slots,"collapse-item-summary",{item:w,index:i,toggle:p},()=>[j(t(w.title),1)])]),e("div",_s,[c.withChevron?(n(),M($,{key:0,icon:"feather:chevron-down"})):c.withChevron?I("",!0):(n(),M($,{key:1,icon:"feather:plus"}))])],40,us),e("div",ms,[e("p",null,[E(d.$slots,"collapse-item-content",{item:w,index:i,toggle:p},()=>[j(t(w.content),1)])])])])],10,rs))),128)}}});const hs={class:"container"},fs={class:"company-header is-dark-card-bordered is-dark-bg-6"},vs={class:"header-item is-dark-bordered-12"},gs={class:"item-inner"},$s={class:"dark-inverted"},bs={class:"header-item is-dark-bordered-12"},ys={class:"item-inner"},ws={class:"dark-inverted"},Vs={class:"header-item is-dark-bordered-12"},Cs={class:"item-inner"},ks={class:"dark-inverted"},Ss={class:"header-item is-dark-bordered-12"},Ds={class:"item-inner"},xs={class:"dark-inverted"},Ms={class:"user-grid user-grid-v1"},Is={class:"dark-inverted"},Ns={key:0,class:"is-grouped mt-5"},Fs={class:"icon"},Bs=["data-icon"],Us=e("span",{class:"icon"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:edit-2"})],-1),js=e("span",{class:"icon"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:check"})],-1),As=e("span",{class:"icon"},[e("i",{"aria-hidden":"true",class:"iconify","data-icon":"feather:x"})],-1),Ys={key:0,class:"is-grouped mt-5"},Os={class:"icon"},Ts=["data-icon"],Rs={key:1,class:"is-grouped mt-5"},Ps=N({async setup(c){let u,s;const p=Z();W();const d=p.params?.id??null;y([]);const o=y(!1),$=y(),w=y(),i=y();[u,s]=se(()=>_()),await u,s(),[u,s]=se(()=>g()),await u,s();function C(h){o.value=!0,$.value=h}async function _(){const h=await Ze(Number(d));w.value=h}async function g(){const h=await Qe(Number(d));i.value=h}return(h,v)=>{const D=xe,S=K,A=ps,T=ds;return n(),m("div",hs,[e("div",fs,[e("div",vs,[e("div",gs,[e("span",$s,t(i.value?.voted),1),e("p",null,t(h.$t("Total_voted")),1)])]),e("div",bs,[e("div",ys,[e("span",ws,t(i.value?.agree),1),e("p",null,t(h.$t("Accepted")),1)])]),e("div",Vs,[e("div",Cs,[e("span",ks,t(i.value?.disagre),1),e("p",null,t(h.$t("Rejected")),1)])]),e("div",Ss,[e("div",Ds,[e("span",xs,t(i.value?.didnt_vote),1),e("p",null,t(h.$t("Not_voted")),1)])])]),e("div",Ms,[a(We,{name:"list",tag:"div",class:"columns is-multiline"},{default:r(()=>[(n(!0),m(P,null,ee(w.value,(V,Y)=>(n(),m("div",{key:Y,class:"column is-4"},[e("div",{class:te(["grid-item",{"is-active":V.is_me}])},[a(D,{picture:V.user?.avatar,size:"xl"},null,8,["picture"]),e("h3",Is,t(V.user?.firstname+" "+V.user?.lastname),1),e("p",null,t(V.user?.department),1),V.is_me===!0?(n(),m("div",Ns,[V.vote?(n(),m(P,{key:0},[a(S,{color:V.vote.value===1?"success":"danger",style:{width:"80%"},class:"is-justify-content-center mr-3"},{default:r(()=>[e("span",Fs,[e("i",{"aria-hidden":"true",class:"iconify","data-icon":V.vote.value===1?"feather:check":"feather:x"},null,8,Bs)]),e("span",null,t(V.vote.value===1?h.$t("Accepted"):h.$t("Rejected")),1)]),_:2},1032,["color"]),a(S,{color:"warning",style:{width:"10%"},class:"is-justify-content-center",onClick:v[0]||(v[0]=x=>C(0))},{default:r(()=>[Us]),_:1}),a(A,{class:"mt-5",items:[{title:h.$t("Description"),content:V.vote.description}],"with-chevron":""},null,8,["items"])],64)):(n(),m(P,{key:1},[a(S,{color:"success",style:{width:"45%"},class:"is-justify-content-center mr-3",onClick:v[1]||(v[1]=x=>C(1))},{default:r(()=>[js,e("span",null,t(h.$t("Accept")),1)]),_:1}),a(S,{color:"danger",style:{width:"45%"},class:"is-justify-content-center",onClick:v[2]||(v[2]=x=>C(0))},{default:r(()=>[As,e("span",null,t(h.$t("Reject")),1)]),_:1})],64))])):(n(),m(P,{key:1},[V.vote?(n(),m("div",Ys,[a(S,{class:"is-fullwidth is-justify-content-center",color:V.vote.value===1?"success":"danger"},{default:r(()=>[e("span",Os,[e("i",{"aria-hidden":"true",class:"iconify","data-icon":V.vote.value===1?"feather:check":"feather:x"},null,8,Ts)]),e("span",null,t(V.vote.value===1?h.$t("Accepted"):h.$t("Rejected")),1)]),_:2},1032,["color"]),a(A,{items:[{title:h.$t("Description"),content:V.vote.description}],"with-chevron":""},null,8,["items"])])):(n(),m("div",Rs,[a(S,{class:"is-fullwidth is-justify-content-center",static:""},{default:r(()=>[e("span",null,t(h.$t("Not_voted_yet")),1)]),_:1})]))],64))],2)]))),128))]),_:1})]),a(T,{modelValue:o.value,"onUpdate:modelValue":v[3]||(v[3]=V=>o.value=V),item:w.value?.find(V=>V.is_me)?.vote,"selected-answer":$.value,"parent-id":Number(l(d)),"onUpdate:list":v[4]||(v[4]=()=>{_(),g()})},null,8,["modelValue","item","selected-answer","parent-id"])])}}}),Es=["onClick"],zs=e("div",{class:"icon"},[e("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:edit"})],-1),Ws={class:"meta"},qs=e("hr",{class:"dropdown-divider"},null,-1),Hs=["onClick"],Ls=e("div",{class:"icon"},[e("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:trash"})],-1),Ks={class:"meta"},Gs=N({emits:["edit","remove"],setup(c,{emit:u}){return(s,p)=>{const d=ke;return n(),M(d,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:r(({close:o})=>[e("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:z(()=>{u("edit"),o()},["prevent"])},[zs,e("div",Ws,[e("span",null,t(s.$t("Edit")),1)])],8,Es),qs,e("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:z(()=>{u("remove"),o()},["prevent"])},[Ls,e("div",Ks,[e("span",null,t(s.$t("Remove")),1)])],8,Hs)]),_:1})}}}),Xs={class:"applicant-list-wrapper"},Js={class:"is-size-3 mb-3"},Zs=["textContent"],Qs={key:0,class:"flex-list-inner"},ea={key:0,style:{"white-space":"break-spaces"}},ta=N({async setup(c){let u,s;const p=Z(),d=ve(),{t:o,locale:$}=W(),w=p.params?.id??null,i=J({pagination:{current_page:1,per_page:10,total:10},result:[]}),C=y(!1),_=y(),g=de({get:()=>i.pagination.current_page,set:async k=>{await S(k)}}),h=({order:k,a:b,b:f})=>k==="asc"?b.location.localeCompare(f.location):k==="desc"?f.location.localeCompare(b.location):0,v={orderNumber:{format:(k,b,f)=>`${f+1}`,cellClass:"is-flex-grow-0"},message:{label:o("Notice_message"),searchable:!0,sortable:!0,sort:h},text:{label:o("Notice_details")},status:{label:o("Status")},actions:{label:o("Actions"),align:"center"}},D=he();[u,s]=se(()=>S()),await u,s();async function S(k=1){const b=await et(Number(w),k);Object.assign(i,b)}async function A(k){_.value=k,C.value=!0}async function T(k){_.value=k,d.$patch({confirmModalState:!0})}async function V(){await tt(_.value),S()}function Y(){D.success(o("Updated_successfully"))}function x(){_.value=void 0}return(k,b)=>{const f=Be,F=K,q=ge,H=De,G=ht,Q=Gs,U=Ie,ae=Fe,ne=Ne,B=_t,R=Me;return n(),m("div",Xs,[a(q,{class:"mb-4","flex-wrap":"wrap"},{default:r(()=>[a(f,null,{default:r(()=>[e("h1",Js,t(k.$t("Statement_notices")),1)]),_:1}),a(f,{class:"ml-auto"},{default:r(()=>[a(F,{outlined:"",rounded:"",color:"info",icon:"feather:plus",onClick:b[0]||(b[0]=z(L=>C.value=!0,["prevent"]))},{default:r(()=>[j(t(k.$t("Add")),1)]),_:1})]),_:1})]),_:1}),a(ne,{columns:l(v),data:l(i).result,limit:l(i).pagination.per_page,total:l(i).pagination.total},{default:r(L=>[a(U,{rounded:""},{"header-column":r(({column:O})=>[O.key==="orderNumber"?(n(),m("span",{key:0,class:"is-flex-grow-0",textContent:t("#")},null,8,Zs)):I("",!0)]),body:r(()=>[l(i).result.length===0?(n(),m("div",Qs,[a(H,{title:k.$t("No_data"),subtitle:k.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):I("",!0)]),"body-cell":r(({row:O,column:X,value:$e})=>[X.key==="text"?(n(),m("div",ea,t(O.text),1)):X.key==="status"&&$e?(n(),M(G,{key:1,status:$e},null,8,["status"])):X.key==="actions"?(n(),M(Q,{key:2,onEdit:je=>A(O.id),onRemove:je=>T(O.id)},null,8,["onEdit","onRemove"])):I("",!0)]),_:1}),l(i).result.length?(n(),M(ae,{key:0,"current-page":l(g),"onUpdate:current-page":b[1]||(b[1]=O=>Se(g)?g.value=O:null),class:"mt-6","item-per-page":l(i).pagination.per_page,"total-items":l(i).pagination.total},null,8,["current-page","item-per-page","total-items"])):I("",!0)]),_:1},8,["columns","data","limit","total"]),a(B,{modelValue:C.value,"onUpdate:modelValue":b[2]||(b[2]=L=>C.value=L),"item-id":_.value,"parent-id":Number(l(w)),"onUpdate:list":b[3]||(b[3]=()=>{S(),Y(),x()}),onClose:x},null,8,["modelValue","item-id","parent-id"]),a(R,{onConfirmAction:V})])}}}),sa=["onClick"],aa=e("div",{class:"icon"},[e("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:edit"})],-1),na={class:"meta"},oa=e("hr",{class:"dropdown-divider"},null,-1),la=["onClick"],ia=e("div",{class:"icon"},[e("i",{class:"iconify","aria-hidden":"true","data-icon":"feather:trash"})],-1),ca={class:"meta"},da=N({emits:["edit","remove"],setup(c,{emit:u}){return(s,p)=>{const d=ke;return n(),M(d,{icon:"feather:more-vertical",class:"is-pushed-mobile",spaced:"",right:""},{content:r(({close:o})=>[e("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:z(()=>{u("edit"),o()},["prevent"])},[aa,e("div",na,[e("span",null,t(s.$t("Edit")),1)])],8,sa),oa,e("a",{role:"menuitem",href:"#",class:"dropdown-item is-media",onClick:z(()=>{u("remove"),o()},["prevent"])},[ia,e("div",ca,[e("span",null,t(s.$t("Remove")),1)])],8,la)]),_:1})}}});const ra={class:"applicant-list-wrapper"},ua={class:"is-size-3 mb-3"},_a=["textContent"],ma={key:0,class:"flex-list-inner"},pa={key:1,style:{"white-space":"break-spaces"}},ha={key:2},fa={key:3},va={class:"text-truncate"},ga=["href"],$a=N({async setup(c){let u,s;const p=Z(),d=ve(),{t:o,locale:$}=W(),w=p.params?.id??null,i=J({pagination:{current_page:1,per_page:10,total:10},result:[]}),C=y(!1),_=y(),g=de({get:()=>i.pagination.current_page,set:async x=>{await D(x)}}),h={orderNumber:{format:(x,k,b)=>`${b+1}`,cellClass:"is-flex-grow-0"},user:{label:o("Created_by")},text:{label:o("Conclusion_desc"),grow:!0},department:{label:o("Department")},files:{label:o("Files"),grow:!0},actions:{label:o("Actions"),align:"center"}},v=he();[u,s]=se(()=>D()),await u,s();async function D(x=1){const k=await st(Number(w),x);Object.assign(i,k)}async function S(x){_.value=x,C.value=!0}async function A(x){_.value=x,d.$patch({confirmModalState:!0})}async function T(){await at(_.value),D()}function V(){_.value=void 0}function Y(){v.success(o("Updated_successfully"))}return(x,k)=>{const b=Be,f=K,F=ge,q=De,H=da,G=Ie,Q=Fe,U=Ne,ae=mt,ne=Me;return n(),m("div",ra,[a(F,{class:"mb-4","flex-wrap":"wrap"},{default:r(()=>[a(b,null,{default:r(()=>[e("h1",ua,t(x.$t("Statement_conclusions")),1)]),_:1}),a(b,{class:"ml-auto"},{default:r(()=>[a(f,{outlined:"",rounded:"",color:"info",icon:"feather:plus",onClick:k[0]||(k[0]=z(B=>C.value=!0,["prevent"]))},{default:r(()=>[j(t(x.$t("Add")),1)]),_:1})]),_:1})]),_:1}),a(U,{columns:l(h),data:l(i).result,limit:l(i).pagination.per_page,total:l(i).pagination.total},{default:r(B=>[a(G,{rounded:""},{"header-column":r(({column:R})=>[R.key==="orderNumber"?(n(),m("span",{key:0,class:"is-flex-grow-0",textContent:t("#")},null,8,_a)):I("",!0)]),body:r(()=>[l(i).result.length===0?(n(),m("div",ma,[a(q,{title:x.$t("No_data"),subtitle:x.$t("There_is_no_data_that_match_your_query"),class:"my-6"},null,8,["title","subtitle"])])):I("",!0)]),"body-cell":r(({row:R,column:L,value:O})=>[L.key==="user"?(n(),m(P,{key:0},[O.avatar?(n(),M(xe,{key:0,picture:O.avatar,class:"mr-5"},null,8,["picture"])):I("",!0),e("h1",null,t(O.firstname+" "+O.lastname),1)],64)):I("",!0),L.key==="text"?(n(),m("div",pa,t(R.text),1)):I("",!0),L.key==="department"?(n(),m("span",ha,t(O.name),1)):I("",!0),L.key==="files"?(n(),m("ul",fa,[(n(!0),m(P,null,ee(O,X=>(n(),m("li",va,[e("a",{href:X.file,class:"has-text-primary"},t(X.name),9,ga)]))),256))])):L.key==="actions"?(n(),M(H,{key:4,onEdit:X=>S(R.id),onRemove:X=>A(R.id)},null,8,["onEdit","onRemove"])):I("",!0)]),_:1}),l(i).result.length?(n(),M(Q,{key:0,"current-page":l(g),"onUpdate:current-page":k[1]||(k[1]=R=>Se(g)?g.value=R:null),class:"mt-6","item-per-page":l(i).pagination.per_page,"total-items":l(i).pagination.total},null,8,["current-page","item-per-page","total-items"])):I("",!0)]),_:1},8,["columns","data","limit","total"]),a(ae,{modelValue:C.value,"onUpdate:modelValue":k[2]||(k[2]=B=>C.value=B),"item-id":_.value,"parent-id":Number(l(w)),"onUpdate:list":k[3]||(k[3]=()=>{D(),Y(),V()}),onClose:V},null,8,["modelValue","item-id","parent-id"]),a(ne,{onConfirmAction:T})])}}}),ba=le($a,[["__scopeId","data-v-2250186c"]]),ya=["onSubmit"],wa={class:"columns is-multiline"},Va={class:"column is-12"},Ca={class:"help has-text-danger"},ka=N({props:{modelValue:{type:Boolean,default:!1},statementId:null,statementStage:null},emits:["update:modelValue","update:stage","update:data"],setup(c,{emit:u}){const s=c,{t:p,locale:d}=W(),o=y([]),$=J({stage_id:""});let w=y(p("Change_statement_stage"));const i=y(),C=y(!1);fe(async()=>{const h=await ft();i.value=s.statementStage,o.value=h});async function _(h){try{C.value=!0,await nt(Number(s.statementId),{stage_id:i.value}),u("update:data"),g()}catch(v){Object.assign($,v.response?.data?.errors)}finally{C.value=!1}}function g(){Object.assign($,{stage_id:""}),u("update:modelValue",!1)}return(h,v)=>{const D=ce("Multiselect"),S=me,A=pe,T=K,V=ie;return n(),M(V,{open:c.modelValue,size:"large",title:l(w),actions:"right",onClose:g},{content:r(()=>[e("form",{id:"statement-stage-form",class:"modal-form",onSubmit:z(_,["prevent"]),style:{"min-height":"200px"}},[e("div",wa,[e("div",Va,[a(A,{label:h.$t("Stages")},{default:r(()=>[a(S,null,{default:r(()=>[a(D,{modelValue:i.value,"onUpdate:modelValue":v[0]||(v[0]=Y=>i.value=Y),options:o.value,placeholder:h.$t("Select_stages"),valueProp:"id",label:"name"},null,8,["modelValue","options","placeholder"]),e("p",Ca,t(l($).stage_id[0]),1)]),_:1})]),_:1},8,["label"])])])],40,ya)]),action:r(({close:Y})=>[a(T,{loading:C.value,color:"primary",outlined:"",type:"submit",form:"statement-stage-form",disabled:C.value},{default:r(()=>[j(t(h.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),Sa=["onSubmit"],Da={class:"columns is-multiline"},xa={class:"column is-12"},Ma={class:"help has-text-danger"},Ia={class:"column is-12"},Na={class:"help has-text-danger"},Fa={class:"help has-text-danger"},Ba={class:"column is-12"},Ua={class:"help has-text-danger"},ja={class:"column is-12"},Aa=N({props:{modelValue:{type:Boolean,default:!1},statementId:{default:""}},emits:["update:modelValue","update:list"],async setup(c,{emit:u}){let s,p;const d=c,{t:o,locale:$}=W(),w=y([]),i=y(""),C=y(""),_=y(""),g=y(""),h=([s,p]=se(()=>ot()),s=await s,p(),s),v=y({input:"DD.MM.YYYY"}),D=y(!1),S=J({status_id:"",file:"",number:"",drug_name:"",start_date:"",end_date:"",manufacturer_name:""});let A=y(o("Add_certificate"));async function T(b){try{D.value=!0;const f={application_id:d.statementId,file:typeof w.value[0]=="object"?w.value[0]:"",number:i.value,start_date:C.value,end_date:_.value,status_id:g.value},F=new FormData;F.append("application_id",f.application_id),F.append("file",f.file),F.append("number",f.number),F.append("start_date",ye(f.start_date).format("YYYY-MM-DD")),F.append("end_date",ye(f.end_date).format("YYYY-MM-DD")),F.append("status_id",f.status_id),await lt(F),V()}catch(f){Object.assign(S,f.response?.data?.errors)}finally{D.value=!1}}function V(){g.value="",w.value=[],i.value="",C.value="",_.value="",Object.assign(S,{status_id:"",file:"",number:"",start_date:"",end_date:""}),u("update:modelValue",!1)}function Y(b){const f=b.target;S[f.name]=""}function x(b){const f=b.target;w.value=f.files&&[f.files[0]],S.file=""}function k(){w.value=[]}return(b,f)=>{const F=qe,q=me,H=pe,G=ce("VDatePicker"),Q=pt,U=vt,ae=K,ne=ie;return n(),M(ne,{open:c.modelValue,size:"large",title:l(A),actions:"right",onClose:V},{content:r(()=>[e("form",{id:"certificate-form",class:"modal-form",onSubmit:z(T,["prevent"])},[e("div",Da,[e("div",xa,[a(H,{label:b.$t("Certificate_number"),required:""},{default:r(()=>[a(q,{"has-error":l(S).number[0]},{default:r(()=>[a(F,{type:"number",min:0,max:1e8,name:"number",placeholder:b.$t("Add_certificate_number"),modelValue:i.value,"onUpdate:modelValue":f[0]||(f[0]=B=>i.value=B),onInput:Y},null,8,["placeholder","modelValue"]),e("p",Ma,t(l(S).number[0]),1)]),_:1},8,["has-error"])]),_:1},8,["label"])]),e("div",Ia,[a(ge,{"column-gap":"1rem"},{default:r(()=>[a(G,{locale:l($),masks:v.value,modelValue:C.value,"onUpdate:modelValue":f[1]||(f[1]=B=>C.value=B),color:"green","trim-weeks":""},{default:r(({inputValue:B,inputEvents:R})=>[a(H,{label:b.$t("Start_date"),required:""},{default:r(()=>[a(q,{icon:"feather:calendar"},{default:r(()=>[a(F,ue({value:B},be(R)),null,16,["value"]),e("p",Na,t(l(S).start_date[0]),1)]),_:2},1024)]),_:2},1032,["label"])]),_:1},8,["locale","masks","modelValue"]),a(G,{locale:l($),masks:v.value,modelValue:_.value,"onUpdate:modelValue":f[2]||(f[2]=B=>_.value=B),color:"green","trim-weeks":""},{default:r(({inputValue:B,inputEvents:R})=>[a(H,{label:b.$t("End_date"),required:""},{default:r(()=>[a(q,{icon:"feather:calendar"},{default:r(()=>[a(F,ue({value:B},be(R)),null,16,["value"]),e("p",Fa,t(l(S).end_date[0]),1)]),_:2},1024)]),_:2},1032,["label"])]),_:1},8,["locale","masks","modelValue"])]),_:1})]),e("div",Ba,[a(Q,{name:"status_id",modelValue:g.value,"onUpdate:modelValue":f[3]||(f[3]=B=>g.value=B),list:l(h),"is-required":!0,onChange:Y},null,8,["modelValue","list"]),e("p",Ua,t(l(S).status_id[0]),1)]),e("div",ja,[a(U,{files:w.value,onFileUpload:x,onFileRemove:k,"error-message":l(S).file[0],"remote-files":[]},null,8,["files","error-message"])])])],40,Sa)]),action:r(({close:B})=>[a(ae,{loading:D.value,color:"primary",outlined:"",type:"submit",form:"certificate-form",disabled:D.value},{default:r(()=>[j(t(b.$t("Save")),1)]),_:1},8,["loading","disabled"])]),_:1},8,["open","title"])}}}),Ya={class:"timeline is-centered"},Oa={class:"timeline-header"},Ta={class:"tag is-medium is-primary"},Ra={class:"timeline-content"},Pa={class:"has-text-primary has-text-bold is-size-5"},Ea={class:"heading"},za={class:""},Wa={class:"timeline-content"},qa={class:"has-text-primary has-text-bold is-size-5"},Ha={class:"heading"},La={class:""},Ka={class:"timeline-header"},Ga={class:"tag is-medium is-info"},Xa=N({props:{items:{default:()=>[]},squared:{type:Boolean},colored:{type:Boolean}},setup(c){const u=c;return(s,p)=>(n(),m("div",Ya,[e("header",Oa,[e("span",Ta,t(s.$t("Start")),1)]),(n(!0),m(P,null,ee(u.items,(d,o)=>(n(),m("div",{key:d.id,class:"timeline-item"},[d.key==="stages"?(n(),m(P,{key:0},[e("div",{class:te(["timeline-marker is-icon",[d.date&&"is-primary has-text-white"]])},t(d.stage_number),3),e("div",Ra,[e("span",null,t(d.date&&s.$h.formatDate(d.date,"DD.MM.YYYY")),1),e("p",Pa,t(d.stage),1),e("p",Ea,t(d.department),1),e("p",za,t(d.message),1)])],64)):(n(),m(P,{key:1},[e("div",{class:te(["timeline-marker has-text-dark",[d.date&&"is-primary has-text-white"]])},null,2),e("div",Wa,[e("span",null,t(d.date&&s.$h.formatDate(d.date,"DD.MM.YYYY")),1),e("p",qa,t(s.$t(d.key)),1),e("p",Ha,t(d.department),1),e("p",La,t(d.message),1)])],64))]))),128)),e("header",Ka,[e("span",Ga,t(s.$t("End")),1)])]))}}),Ja={class:"table is-hoverable is-fullwidth is-bordered"},Za={class:"has-text-weight-bold"},Qa={class:"has-text-weight-bold"},en={class:"has-text-weight-bold"},tn={class:"has-text-weight-bold"},sn={class:"has-text-weight-bold"},an={class:"has-text-weight-bold"},nn={key:0},on={class:"has-text-weight-bold"},ln=N({props:{modelValue:Boolean,id:Number,companyData:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(c,{emit:u}){const{t:s}=W(),p={name:{label:s("Company_name")},phone:{label:s("Phone_number")},bossName:{label:s("Boss_name")},website:s("Website"),stir:s("stir"),status:s("Status"),country:s("Country"),certificate:s("Certificate")};return(d,o)=>{const $=ie;return n(),M($,{open:c.modelValue,title:d.$t("Company_info"),actions:"right",onClose:o[0]||(o[0]=w=>u("update:modelValue",!1)),"cancel-label":d.$t("Close")},{content:r(()=>[e("table",Ja,[e("tbody",null,[e("tr",null,[e("td",Za,t(l(p).name.label),1),e("td",null,t(c.companyData?.name),1)]),e("tr",null,[e("td",Qa,t(l(p).phone.label),1),e("td",null,t(c.companyData?.phone),1)]),e("tr",null,[e("td",en,t(l(p).bossName.label),1),e("td",null,t(c.companyData?.boss_name),1)]),e("tr",null,[e("td",tn,t(l(p).website),1),e("td",null,t(c.companyData?.website),1)]),e("tr",null,[e("td",sn,t(l(p).stir),1),e("td",null,t(c.companyData?.inn),1)]),e("tr",null,[e("td",an,t(l(p).status),1),c.companyData?.status?(n(),m("td",nn,[a(Ue,{class:"is-size-7",rounded:"",color:c.companyData?.status?.color},{default:r(()=>[j(t(c.companyData?.status?.name),1)]),_:1},8,["color"])])):I("",!0)]),e("tr",null,[e("td",on,t(l(p).country),1),e("td",null,t(c.companyData?.country),1)])])])]),_:1},8,["open","title","cancel-label"])}}}),cn={class:"table is-hoverable is-bordered is-fullwidth"},dn={class:"has-text-weight-bold"},rn={class:"has-text-weight-bold"},un={class:"has-text-weight-bold"},_n={class:"has-text-weight-bold"},mn={class:"has-text-weight-bold"},pn={class:"has-text-weight-bold"},hn={class:"has-text-weight-bold"},fn={class:"has-text-weight-bold"},vn=N({props:{modelValue:Boolean,id:Number,drugData:{type:Object,default:()=>{}}},emits:["update:modelValue"],setup(c,{emit:u}){const{t:s}=W(),p={name:{label:s("Drug_name")},saleName:{label:s("Sale_name")},composition:{label:s("Composition")},drugForm:s("Drug_form"),patentNumber:s("Patent_number"),use:s("Use"),producer:s("Producer"),manufacturer:s("Manufacturer")};return(d,o)=>{const $=ie;return n(),M($,{open:c.modelValue,title:d.$t("Drug_details"),actions:"right",onClose:o[0]||(o[0]=w=>u("update:modelValue",!1)),"cancel-label":d.$t("Close")},{content:r(()=>[e("table",cn,[e("tbody",null,[e("tr",null,[e("td",dn,t(l(p).name.label),1),e("td",null,t(c.drugData?.name),1)]),e("tr",null,[e("td",rn,t(l(p).saleName.label),1),e("td",null,t(c.drugData?.trade_name),1)]),e("tr",null,[e("td",un,t(l(p).composition.label),1),e("td",null,t(c.drugData?.structure),1)]),e("tr",null,[e("td",_n,t(l(p).drugForm),1),e("td",null,t(c.drugData?.drug_figure),1)]),e("tr",null,[e("td",mn,t(l(p).patentNumber),1),e("td",null,t(c.drugData?.patent),1)]),e("tr",null,[e("td",pn,t(l(p).use),1),e("td",null,t(c.drugData?.usage),1)]),e("tr",null,[e("td",hn,t(l(p).producer),1),e("td",null,t(c.drugData?.preparer.name),1)]),e("tr",null,[e("td",fn,t(l(p).manufacturer),1),e("td",null,t(c.drugData?.manufacturer.name),1)])])])]),_:1},8,["open","title","cancel-label"])}}});const re=c=>(He("data-v-79907fa6"),c=c(),Le(),c),gn={class:"columns mt-5"},$n={class:"column is-6"},bn={class:"table is-hoverable is-bordered is-fullwidth"},yn={class:"has-text-weight-bold"},wn=re(()=>e("i",{class:"iconify","data-icon":"feather:link","aria-hidden":"true"},null,-1)),Vn={class:"has-text-weight-bold"},Cn=re(()=>e("i",{class:"iconify","data-icon":"feather:link","aria-hidden":"true"},null,-1)),kn={class:"has-text-weight-bold"},Sn={class:"has-text-weight-bold"},Dn={class:"is-flex is-align-items-center"},xn={class:"mr-3"},Mn={class:"has-text-weight-bold"},In={class:"has-text-weight-bold"},Nn={class:"has-text-weight-bold"},Fn=["href"],Bn=re(()=>e("i",{class:"iconify","data-icon":"feather:link","aria-hidden":"true"},null,-1)),Un={key:1,class:"has-text-danger"},jn={class:"has-text-weight-bold"},An={class:"is-flex is-align-items-center"},Yn=["href"],On=re(()=>e("i",{class:"iconify","data-icon":"feather:link","aria-hidden":"true"},null,-1)),Tn={key:1,class:"has-text-danger"},Rn={class:"column is-6"},Pn=N({setup(c){const u=Z(),{t:s,locale:p}=W(),d=he(),o={company:{label:s("Applied_legal_entity")},drug:{label:s("Drug_name")},statementCreator:{label:s("Statement_creator")},stage:{label:s("Stage")},date:{label:s("applied_at")},paymentStatus:{label:s("Payment_status")},contract:{label:s("Contract")},certificate:{label:s("Certificate")}};y(!1);const $=y(),w=y(),i=y(!1),C=y(!1),_=y(!1),g=y(!1),h=u.params?.id??null,v=y(),D=de(()=>v.value?.stage.id),S=y(),A=y(!1);fe(async()=>{await Y(),await x()});function T(b){$.value=b,i.value=!0}function V(b){w.value=b,C.value=!0}async function Y(){const b=await it(Number(h));v.value=b;const f=await ct(Number(h));S.value=f}async function x(){const b=await dt(Number(h));A.value=b.result}function k(){d.success(s("Success"))}return(b,f)=>{const F=Ue,q=gt,H=Xa,G=Aa,Q=ka;return n(),m("div",gn,[e("div",$n,[a(q,{title:b.$t("Statement_details"),straight:"",class:"list-widget-v3"},{default:r(()=>[e("table",bn,[e("tbody",null,[e("tr",null,[e("td",yn,t(l(o).company.label),1),e("td",null,[e("a",{href:"javascript:;",class:"has-text-primary",onClick:f[0]||(f[0]=U=>T(1))},[j(t(v.value?.legal_entity?.name)+" ",1),wn])])]),e("tr",null,[e("td",Vn,t(l(o).drug.label),1),e("td",null,[e("a",{href:"javascript:;",class:"has-text-primary",onClick:f[1]||(f[1]=U=>V(1))},[j(t(v.value?.drug?.name)+" ",1),Cn])])]),e("tr",null,[e("td",kn,t(l(o).statementCreator.label),1),e("td",null,t(v.value?.applicant),1)]),e("tr",null,[e("td",Sn,t(l(o).stage.label),1),e("td",Dn,[e("span",xn,t(v.value?.stage?.name),1),A.value?(n(),M(K,{key:0,class:"ml-auto",color:"primary",rounded:"",icon:"feather:edit-2",onClick:f[2]||(f[2]=U=>g.value=!0)},{default:r(()=>[j(t(b.$t("Change_stage")),1)]),_:1})):I("",!0)])]),e("tr",null,[e("td",Mn,t(l(o).date.label),1),e("td",null,t(v.value?.date&&b.$h.formatDate(v.value?.date,"HH:mm DD.MM.YYYY")),1)]),e("tr",null,[e("td",In,t(l(o).paymentStatus.label),1),e("td",null,[v.value?.is_paid?(n(),M(F,{key:0,color:"primary",label:b.$t("Paid"),outlined:"",rounded:""},null,8,["label"])):(n(),M(F,{key:1,color:"danger",label:b.$t("Not_Paid"),outlined:"",rounded:""},null,8,["label"]))])]),e("tr",null,[e("td",Nn,t(l(o).contract.label),1),e("td",null,[v.value?.contract_id?(n(),m("a",{key:0,href:"/app/contract/"+v.value?.contract_id,class:"has-text-primary"},[j(t(b.$t("Link_for_contract"))+" ",1),Bn],8,Fn)):(n(),m("span",Un,t(b.$t("No_contract")),1))])]),e("tr",null,[e("td",jn,t(l(o).certificate.label),1),e("td",An,[v.value?.certificate?(n(),m("a",{key:0,href:v.value?.certificate?.file,class:"has-text-primary",download:""},[j(t(v.value?.certificate?.number)+" ",1),On],8,Yn)):(n(),m("span",Tn,t(b.$t("No_certificate")),1)),a(K,{class:"ml-auto",color:"primary",rounded:"",icon:"fas fa-plus",onClick:f[3]||(f[3]=U=>_.value=!0)},{default:r(()=>[j(t(b.$t("Upload")),1)]),_:1})])])])])]),_:1},8,["title"])]),e("div",Rn,[a(q,{title:b.$t("Chronology"),straight:"",class:"list-widget-v3"},{default:r(()=>[a(H,{items:S.value},null,8,["items"])]),_:1},8,["title"])]),a(ln,{modelValue:i.value,"onUpdate:modelValue":f[4]||(f[4]=U=>i.value=U),"company-data":v.value?.legal_entity},null,8,["modelValue","company-data"]),a(vn,{modelValue:C.value,"onUpdate:modelValue":f[5]||(f[5]=U=>C.value=U),"drug-data":v.value?.drug},null,8,["modelValue","drug-data"]),a(G,{modelValue:_.value,"onUpdate:modelValue":f[6]||(f[6]=U=>_.value=U),"statement-id":l(h),onClose:Y},null,8,["modelValue","statement-id"]),a(Q,{modelValue:g.value,"onUpdate:modelValue":f[7]||(f[7]=U=>g.value=U),"statement-id":Number(l(h)),"statement-stage":Number(l(D)),"onUpdate:data":f[8]||(f[8]=()=>{Y(),k()})},null,8,["modelValue","statement-id","statement-stage"])])}}}),En=le(Pn,[["__scopeId","data-v-79907fa6"]]);const zn=["open"],Wn=["onKeydown","onClick"],qn={class:"collapse-icon"},Hn={class:"collapse-content"},Ln={key:0},Kn=["href"],Gn={class:"ml-3"},Xn={key:1},Jn=N({setup(c){const s=Z().params?.id??null,p=y([]),d=$=>{p.value.includes($)?p.value.splice(p.value.indexOf($),1):p.value.push($)},o=y();return fe(async()=>{const $=await rt(Number(s));o.value=$,p.value=$.map((w,i)=>i)}),($,w)=>{const i=Ce,C=ce("VueIconify");return n(!0),m(P,null,ee(o.value,(_,g)=>(n(),m("details",{key:g,class:"has-chevron collapse",open:p.value?.includes(g)??void 0},[E($.$slots,"collapse-item",{item:_,index:g,toggle:d},()=>[e("summary",{class:"collapse-header",tabindex:"0",onKeydown:_e(z(()=>d(g),["prevent"]),["space"]),onClick:z(()=>d(g),["prevent"])},[e("h3",null,[E($.$slots,"collapse-item-summary",{item:_,index:g,toggle:d},()=>[j(t(g+1+". "+_.name),1)])]),e("div",qn,[a(i,{icon:"feather:chevron-down"})])],40,Wn),e("div",Hn,[e("p",null,[E($.$slots,"collapse-item-content",{item:_,index:g,toggle:d},()=>[_.files.length?(n(),m("ul",Ln,[(n(!0),m(P,null,ee(_.files,h=>(n(),m("li",null,[e("a",{href:h.file,class:"has-text-primary"},[a(C,{icon:"feather:file",height:"1rem"}),e("span",Gn,t(h.name),1)],8,Kn)]))),256))])):(n(),m("span",Xn,t($.$t("Docs_not_attached_yet")),1))])])])])],8,zn))),128)}}}),Zn={class:"statement-detail-wrapper"},Qn={key:0},eo={key:1,class:"mt-5"},to={key:2,class:"mt-5"},so={key:3,class:"mt-5"},ao={key:4,class:"mt-5"},no={key:5,class:"mt-5"},Do=N({setup(c){const{t:u}=W(),s=Z(),p=y(s.hash.slice(1)||"details"),d=y([{label:u("Statement_details"),value:"details",icon:"lnil lnil-tap"},{label:u("Statement_docs"),value:"docs",icon:"lnil lnil-files"},{label:u("Statement_conclusions"),value:"conclusions",icon:"lnil lnil-euro-down"},{label:u("Statement_notices"),value:"notices",icon:"lnil lnil-euro-down"},{label:u("ITK"),value:"itk",icon:"feather:activity"},{label:u("Chat"),value:"chat",icon:"fas fa-comments"}]);return $t().setPageTitle(u("Statement_card")),Ke({title:de(()=>u("Statement_card"))}),($,w)=>{const i=En,C=ba,_=ta,g=Ps,h=es,v=Ae;return n(),m("div",Zn,[a(v,{selected:p.value,tabs:d.value},{tab:r(({activeValue:D})=>[D==="details"?(n(),m("div",Qn,[a(i)])):D==="docs"?(n(),m("div",eo,[a(Jn)])):D==="conclusions"||l(s).hash=="#conclusions"?(n(),m("div",to,[a(C)])):D==="notices"||l(s).hash=="#notices"?(n(),m("div",so,[a(_)])):D==="itk"?(n(),m("div",ao,[a(g)])):D==="chat"?(n(),m("div",no,[a(h)])):I("",!0)]),_:1},8,["selected","tabs"])])}}});export{Do as default};
