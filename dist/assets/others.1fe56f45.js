import{_ as C,a as N}from"./VFlexTable.4ba052d2.js";import{_ as z}from"./VFlexPagination.b3a191bb.js";import{_ as D}from"./VIconButton.e183282f.js";import{_ as q}from"./VCard.fd01a720.js";import{K as b,a0 as F,m as T,p as n,x as r,y as e,f as i,s as c,D as o,M as d,F as g,G as W,C as y,q as w,H as j,B as A,bI as H}from"./index.f060b7c6.js";import{u as v}from"./vue-i18n.runtime.esm-bundler.1634ed66.js";import{u as I}from"./usersMockData.83c167ed.js";import{u as M}from"./viewWrapper.7134460b.js";const O={class:"business-dashboard company-dashboard"},P={class:"columns"},U={class:"column"},E=e("i",{class:"iconify","data-icon":"feather:activity","data-height":"32","aria-hidden":"true",size:"5"},null,-1),G={class:"is-size-1"},K={class:"title is-5 mb-2"},L={class:"column"},R=e("i",{class:"iconify","data-icon":"feather:activity","data-height":"32","aria-hidden":"true",size:"5"},null,-1),J={class:"is-size-1"},Q={class:"title is-5 mb-2"},S={class:"columns is-multiline"},X={class:"column is-12"},Y={class:"dashboard-card is-base-chart"},Z={class:"content-box is-flex"},ee={class:"is-size-4"},te={class:"my-auto p-5"},ae=b({setup(k){const{t}=v(),u=F(),_=T({total:102,color:"primary",data:[{id:1,name:"yaratilgan",description:"Bu yaratilgan holat",amount:23,color:"info"},{id:2,name:"jarayonda",description:"Bu jarayon holati",amount:21,color:"warning"},{id:3,name:"bekor qilingan",description:"Bu bekor qilingan holati",amount:18,color:"secondary"},{id:4,name:"noto'g'ri",description:"Bu noto'g'ri holati",amount:35,color:"danger"},{id:5,name:"yakunlandi",description:"Bu yakunlandi holati",amount:5,color:"success"}]}),p={orderNumber:{label:"Ariza qabul raqami"},company:{label:t("applied_legal_entity")},drug:{label:t("drug_name")},date:{label:t("applied_at")},actions:{label:t("Actions"),align:"center"}};function m(a){console.log({rowId:a}),u.push("/app/statement/"+a)}return(a,oe)=>{const h=q,x=D,V=C,B=z,$=N;return n(),r("div",O,[e("div",P,[e("div",U,[i(h,{radius:"small",class:"has-text-centered"},{default:c(()=>[E,e("h1",G,o(d(_).total),1),e("h3",K,o(a.$t("Total")),1)]),_:1})]),(n(!0),r(g,null,W(d(_).data,s=>(n(),r("div",L,[i(h,{radius:"small",class:"has-text-centered"},{default:c(()=>[R,e("h1",J,o(s.amount),1),e("h3",Q,o(a.$t(s.name)),1)]),_:2},1024)]))),256))]),e("div",S,[e("div",X,[e("div",Y,[e("div",Z,[e("h1",ee,o(a.$t("Statement_latest")),1)]),e("div",te,[i($,{columns:d(p),data:d(I)},{default:c(s=>[i(V,{rounded:""},{"body-cell":c(({row:l,column:f,value:ne,index:ie})=>[f.key==="orderNumber"?(n(),r(g,{key:0},[y(o("00000"+(l.id+1)),1)],64)):f.key==="actions"?(n(),w(x,{key:1,class:"mr-2 p-4",outlined:"",circle:"",color:"info",icon:"feather:eye",onClick:j(ce=>m(l.id),["prevent"])},{default:c(()=>[y(o(a.$t("View")),1)]),_:2},1032,["onClick"])):A("",!0)]),_:1}),i(B,{"current-page":s.page,"onUpdate:current-page":l=>s.page=l,class:"mt-6","item-per-page":s.limit,"total-items":s.total,"max-links-displayed":5,"no-router":""},null,8,["current-page","onUpdate:current-page","item-per-page","total-items"])]),_:1},8,["columns","data"])])])])])])}}}),se={class:"page-content-inner"},fe=b({setup(k){const{t}=v();return M().setPageTitle(t("Dashboard")),H({title:t("Dashboard")+" - Nefrit"}),(_,p)=>{const m=ae;return n(),r("div",se,[i(m)])}}});export{fe as default};