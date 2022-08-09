import{K as r,c as d,h as a,E as s}from"./index.f060b7c6.js";const f=r({props:{icon:{type:String,required:!0},to:{type:Object,default:void 0},href:{type:String,default:void 0},color:{type:String,default:void 0,validator:e=>[void 0,"primary","info","success","warning","danger","white"].indexOf(e)===-1?(console.warn(`VIconButton: invalid "${e}" color. Should be primary, info, success, warning, danger, white or undefined`),!1):!0},dark:{type:String,default:void 0,validator:e=>e&&["1","2","3","4","5","6"].indexOf(e)===-1?(console.warn(`VIconButton: invalid "${e}" dark. Should be 1, 2, 3, 4, 5, 6 or undefined`),!1):!0},circle:{type:Boolean,default:!1},bold:{type:Boolean,default:!1},light:{type:Boolean,default:!1},raised:{type:Boolean,default:!1},elevated:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},darkOutlined:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{attrs:i}){const l=d(()=>[...i?.class||[],e.disabled&&"is-disabled",e.circle&&"is-circle",e.bold&&"is-bold",e.outlined&&"is-outlined",e.raised&&"is-raised",e.dark&&`is-dark-bg-${e.dark}`,e.darkOutlined&&"is-dark-outlined",e.elevated&&"is-elevated",e.loading&&"is-loading",e.color&&`is-${e.color}`,e.light&&"is-light"]),o=d(()=>e.icon&&e.icon.indexOf(":")!==-1);return()=>{let t;o.value?t=a("i",{"aria-hidden":!0,class:"iconify","data-icon":e.icon}):t=a("i",{"aria-hidden":!0,class:e.icon});const n=a("span",{class:"icon"},t);return e.to?a(s("RouterLink"),{...i,to:e.to,class:["button",...l.value]},n):e.href?a("a",{...i,href:e.href,class:l.value},n):a("button",{type:"button",...i,disabled:e.disabled,class:["button",...l.value]},n)}}});export{f as _};
