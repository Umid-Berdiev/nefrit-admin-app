import{A as b,P as I,W as D,B as y,bV as V,q as F,o,j as i,k as s,s as m,w as v,Q as H,X as N,bM as S,O as W,t as C,N as w,i as p,m as $,l as E,r as Y,bw as K,E as T,g as x,G as B,v as U,F as j}from"./index.433ccf37.js";import{l as z}from"./lodash.2d29e061.js";import{u as A}from"./VPlaceholderSection.2f3a5682.js";import{d as k,e as O}from"./index.bd8beb4a.js";const q="/images/icons/misc/typing.gif";const G={class:"message-field-wrapper"},L={class:"control"},P={class:"add-file-content"},Q=["onKeyup"],R={class:"send-message"},X=s("div",{class:"typing-indicator"},[s("img",{src:q,alt:""})],-1),J=b({emits:["update:data"],setup(e,{emit:t}){const r=I();A(),D();const g=r.params?.id??null,f=y();V(f);const a=y(""),d=y(),h=y(!1);async function n(){if(h.value=!0,!z.exports.isEmpty(a.value)){const _=a.value;a.value="";const c={application_id:Number(g),message:_,file:""};await k(c),t("update:data")}h.value=!1}async function M(_){let c=_.target,l=c.files&&c.files[0];if(!l)return;if(l.size>5e6){alert("File should be smaller than 1MB");return}d.value=l;const u=new FormData;u.append("application_id",g),u.append("file",l),u.append("message",a.value),await k(u),t("update:data")}return(_,c)=>{const l=F("VueIconify");return o(),i("div",G,[s("div",L,[s("div",P,[m(H,{class:"is-relative m-2"},{default:v(()=>[m(l,{icon:"feather:paperclip",class:"mt-2"}),s("input",{class:"is-absolute",type:"file",onChange:M},null,32)]),_:1})]),N(s("input",{id:"chat-input",class:"input is-rounded",type:"text","onUpdate:modelValue":c[0]||(c[0]=u=>a.value=u),onKeyup:W(n,["enter"]),"aria-label":"Write a message"},null,40,Q),[[S,a.value]]),s("div",R,[s("button",{class:"button v-button is-primary is-raised is-rounded",onClick:n},C(_.$t("Send")),1)])]),X])}}});const Z={},ee={class:"chat-body-wrap"};function se(e,t){return o(),i("div",ee,[p(e.$slots,"default")])}const te=w(Z,[["render",se]]);const ae={},ne={id:"chat-body",class:"chat-body"};function oe(e,t){return o(),i("ol",ne,[p(e.$slots,"default")])}const ie=w(ae,[["render",oe]]);const ce={},le={class:"chat-header"};function re(e,t){return o(),i("div",le,[p(e.$slots,"default")])}const _e=w(ce,[["render",re]]);const de={class:"animated container"},ue=b({setup(e){return(t,r)=>{const g=_e,f=ie,a=te,d=J;return o(),i("div",de,[m(g,null,{default:v(()=>[p(t.$slots,"header")]),_:3}),m(a,null,{default:v(()=>[m(f,null,{default:v(()=>[p(t.$slots,"body")]),_:3}),p(t.$slots,"side")]),_:3}),m(d,{"onUpdate:data":r[0]||(r[0]=h=>t.$emit("update:data"))})])}}});const me={class:"avatar"},pe=["src"],ge={key:0,class:"msg"},fe={class:"msg-inner"},he={style:{"overflow-wrap":"break-word"}},ye={key:1,class:"msg is-image"},ve={class:"image-container"},$e={class:"image is-128x128"},Ce=["src"],be=b({props:{message:null},setup(e){return(t,r)=>(o(),i("li",{class:E([e.message.is_me&&"self",!e.message.is_me&&"other"])},[s("div",me,[e.message.user?.avatar?(o(),i("img",{key:0,src:e.message.user.avatar,draggable:"false",alt:""},null,8,pe)):$("",!0)]),e.message.message?(o(),i("div",ge,[s("div",fe,[s("p",he,C(e.message.message),1)]),s("time",null,C(t.$h.formatDate(e.message.created_at,"DD.MM.YYYY HH:mm")),1)])):$("",!0),e.message.file?(o(),i("div",ye,[s("div",ve,[s("figure",$e,[s("img",{src:e.message.file},null,8,Ce)])])])):$("",!0)],2))}});const we={key:0,class:"no-messages"},Me={class:"text"},De=b({async setup(e){let t,r;D();const f=I().params?.id??null,a=Y([]);y(),[t,r]=K(()=>d()),await t,r(),T(()=>a,n=>{n&&h()},{deep:!0,immediate:!0});async function d(){const n=await O(Number(f));Object.assign(a,n)}async function h(){const n=document.getElementById("chat-body");console.log("chatBody.offsetHeight: ",n?.offsetHeight),n&&(n.scrollTop=n.offsetHeight+50)}return(n,M)=>{const _=be,c=ue;return o(),x(c,{"onUpdate:data":d},{body:v(()=>[B(a).length===0?(o(),i("li",we,[s("div",Me,[s("h3",null,C(n.$t("No_messages_yet")),1)])])):$("",!0),(o(!0),i(j,null,U(B(a),l=>(o(),x(_,{key:l.id,message:l},null,8,["message"]))),128))]),_:1})}}});export{De as _};
