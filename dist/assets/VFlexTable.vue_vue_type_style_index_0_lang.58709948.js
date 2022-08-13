import{z as F,O as U,e as d,h as S,bQ as W,A as V,bR as G,D as J,a4 as Z,r as q,bb as ee,o as m,i as k,g as w,k as C,aY as te,H as ae,aw as le,F as B,s as O,f as K,a3 as L,t as x,E as R,l as M,j as D,w as re,N as se,v as oe}from"./index.da6b4d71.js";const P=F({props:{id:{type:String,required:!0},label:{type:String,default:void 0},modelValue:{type:String,default:void 0},noRouter:{type:Boolean,default:void 0},routerQueryKey:{type:String,default:"sort"}},emits:["update:modelValue"],setup(e,r){const l=U(),y=d(()=>e.modelValue??l.query[e.routerQueryKey]??""),v=d(()=>y.value===`${e.id}:asc`),n=d(()=>y.value===`${e.id}:desc`),p=d(()=>v.value?`${e.id}:desc`:n.value?void 0:`${e.id}:asc`),f=d(()=>{if(e.noRouter)return{};const i={...l.query};return e.routerQueryKey&&(i[e.routerQueryKey]=p.value),{name:l.name,params:l.params,query:i}}),_=i=>{if(r.emit("update:modelValue",p.value),e.noRouter)return i.preventDefault(),i.stopPropagation(),!1};return()=>{const i=r.slots?.default?.({isDesc:n.value,isAsc:v.value,nextSort:p.value,value:y.value}),t=S(W,{to:f.value,onClick:_,onKeydown(o){o.code==="Space"&&(o.preventDefault(),o.stopPropagation(),o.target instanceof HTMLAnchorElement&&o.target.dispatchEvent(new MouseEvent("click")))}},{default(){const o=S("span",{key:`${y.value}`,class:"is-inline"},S("span",{class:"ml-3 iconify is-inline","data-icon":v.value?"fa:sort-asc":n.value?"fa:sort-desc":"fa:sort"}));return[i??e.label,o]}});return S("span",{},t)}}}),Y=Symbol(),Q=e=>e,ne=({key:e,order:r,a:l,b:y})=>{const v=l[e],n=y[e];return typeof v=="string"?r==="asc"?v.localeCompare(n):n.localeCompare(v):v>n?r==="asc"?1:-1:v<n?r==="asc"?-1:1:0},be=F({props:{data:{type:[Array,Function],default:void 0},columns:{type:Object,default:void 0},sort:{type:String,default:void 0},searchTerm:{type:String,default:void 0},limit:{type:Number,default:void 0},page:{type:Number,default:void 0},total:{type:Number,default:void 0},debounceSearch:{type:Number,default:300}},emits:["update:sort","update:page","update:limit","update:searchTerm"],setup(e,r){const l=V(),y=V(!1),v=V(""),n=d({get:()=>e.sort??v.value,set(a){e.sort===void 0?v.value=a:r.emit("update:sort",a)}}),p=V(""),f=d({get:()=>e.searchTerm??p.value,set(a){e.searchTerm===void 0?p.value=a:r.emit("update:searchTerm",a)}}),_=V(1),i=d({get:()=>e.page??_.value,set(a){e.page===void 0?_.value=a:r.emit("update:page",a)}}),t=V(5),o=d({get:()=>Math.max(1,e.limit??t.value),set(a){e.limit===void 0?t.value=a:r.emit("update:limit",a)}}),s=d(()=>{const a=e.columns;if(!a)return a;const g={};return Object.keys(a).reduce((b,u)=>{const c=a[u];return typeof c=="string"?b[u]={format:Q,label:c,key:u}:typeof c=="object"&&(b[u]={format:Q,label:u,key:u,...c},c.sortable===!0&&(c.renderHeader?b[u].renderHeader=()=>S(P,{id:u,noRouter:!0,modelValue:n.value,"onUpdate:modelValue":h=>n.value=h},{default:c.renderHeader}):b[u].renderHeader=()=>S(P,{id:u,label:c.label??u,noRouter:!0,modelValue:n.value,"onUpdate:modelValue":h=>n.value=h})),c.searchable===!0&&!c.sort&&(b[u].sort=ne)),b},g),g}),X=d(()=>{let a=l.value;if(!a||typeof e.data=="function")return a;if($.value){const g=s.value?Object.values(s.value).filter(b=>!b||typeof b=="string"?!1:b.searchable===!0):[];if(g.length){const b=new RegExp($.value,"i");a=a.filter((u,c)=>g.some(h=>{if(!h.key)return!1;const T=u[h.key];return h.filter?h.filter({searchTerm:$.value,value:T,row:u,column:h,index:c}):typeof T=="string"?T.match(b):!1}))}}return a}),E=d(()=>{let a=X.value;if(!a||typeof e.data=="function")return a;if(n.value&&n.value.includes(":")){const[g,b]=n.value.split(":"),u=s.value?Object.values(s.value).find(c=>!c||typeof c=="string"?!1:c.sortable===!0&&c.key===g):null;if(u){const c=[...a];c.sort((h,T)=>!u.key||!u.sort?0:u.sort({order:b,column:u,key:u.key,a:h,b:T})),a=c}}return a}),z=d(()=>typeof e.data=="function"||!l.value?l.value:E.value?.slice(j.value,j.value+o.value)),$=G(f,e.debounceSearch),H=d(()=>e.total??E.value?.length??0),j=d(()=>(i.value-1)*o.value),I=d(()=>H.value?Math.ceil(H.value/o.value):0);async function N(a){if(typeof e.data=="function"){y.value=!0;try{l.value=await e.data({searchTerm:$.value,start:j.value,limit:o.value,sort:n.value,controller:a})}finally{y.value=!1}}}J([$,o],()=>{i.value!==1&&(i.value=1)}),Z(async a=>{let g;typeof e.data=="function"?(g=new AbortController,await N(g)):l.value=e.data,a(()=>{g?.abort()})});const A=q({data:z,columns:s,loading:y,searchInput:f,searchTerm:$,start:j,page:i,limit:o,sort:n,total:H,totalPages:I,fetchData:N});return ee(Y,A),()=>{const a=r.slots.default?.(A);return S("div",{class:"flex-table-wrapper"},a)}}});const ue=["data-th"],ie=F({props:{column:{default:()=>({})}},setup(e){const r=e;return(l,y)=>(m(),k("div",{class:C(["flex-table-cell is-relative",[r.column.bold&&"is-bold",r.column.media&&"is-media",r.column.grow===!0&&"is-grow",r.column.grow==="lg"&&"is-grow-lg",r.column.grow==="xl"&&"is-grow-xl",r.column.scrollX&&!r.column.scrollY&&"has-slimscroll-x",!r.column.scrollX&&r.column.scrollY&&"has-slimscroll",r.column.scrollX&&r.column.scrollY&&"has-slimscroll-all",r.column.align==="end"&&"cell-end",r.column.align==="center"&&"cell-center",r.column.cellClass]]),"data-th":r.column.label||void 0},[w(l.$slots,"default")],10,ue))}});const ce={key:0,class:"flex-table-header"},de=["tabindex","onKeydown","onClick"],fe={key:0},ve={class:"language-json py-4"},me=F({props:{data:{default:()=>[]},columns:{default:void 0},printObjects:{type:Boolean},reactive:{type:Boolean},compact:{type:Boolean},rounded:{type:Boolean},separators:{type:Boolean},clickable:{type:Boolean},subtable:{type:Boolean},noHeader:{type:Boolean}},emits:["rowClick"],setup(e,{emit:r}){const l=e,y=te(Y,null),v=d(()=>y?.data?y.data:l.reactive?ae(l.data)?l.data:q(l.data):le(l.data)),n=f=>f,p=d(()=>{const f=y?.columns??l.columns;let _=[];if(f)for(const[i,t]of Object.entries(f))typeof t=="string"?_.push({format:n,label:t,key:i}):_.push({format:n,label:i,key:i,...t});else if(v.value.length>0)for(const[i]of Object.entries(v.value[0]))_.push({format:n,label:i,key:i});return _});return(f,_)=>{const i=ie;return m(),k("div",{class:C(["flex-table",[l.compact&&"is-compact",l.rounded&&"is-rounded",l.separators&&"with-separators",l.noHeader&&"no-header",l.clickable&&"is-table-clickable",l.subtable&&"sub-table"]])},[w(f.$slots,"header",{},()=>[l.noHeader?M("",!0):(m(),k("div",ce,[(m(!0),k(B,null,O(R(p),t=>w(f.$slots,"header-column",{key:"col"+t.key,column:t},()=>[t.renderHeader?(m(),K(L({render:t.renderHeader}),{key:0,class:C([t.grow===!0&&"is-grow",t.grow==="lg"&&"is-grow-lg",t.grow==="xl"&&"is-grow-xl",t.align==="end"&&"cell-end",t.align==="center"&&"cell-center"])},null,8,["class"])):(m(),k("span",{key:1,class:C([t.grow===!0&&"is-grow",t.grow==="lg"&&"is-grow-lg",t.grow==="xl"&&"is-grow-xl",t.align==="end"&&"cell-end",t.align==="center"&&"cell-center"])},x(t.label),3))])),128))]))]),w(f.$slots,"body",{},()=>[(m(!0),k(B,null,O(R(v),(t,o)=>(m(),k(B,{key:o},[w(f.$slots,"body-row-pre",{row:t,columns:R(p),index:o}),D("div",{class:C(["flex-table-item",[l.clickable&&"is-clickable"]]),tabindex:l.clickable?0:void 0,onKeydown:se(oe(()=>{l.clickable&&r("rowClick",t,o)},["prevent"]),["space"]),onClick:()=>{l.clickable&&r("rowClick",t,o)}},[w(f.$slots,"body-row",{row:t,columns:R(p),index:o},()=>[(m(!0),k(B,null,O(R(p),s=>(m(),K(i,{key:"row"+s.key,column:s},{default:re(()=>[w(f.$slots,"body-cell",{row:t,column:s,index:o,value:s.format(t[s.key],t,o)},()=>[s.renderRow?(m(),K(L({render:()=>s.renderRow?.(t,s,o)}),{key:0})):typeof s.format(t[s.key],t,o)=="object"?(m(),k("span",{key:1,class:C([s.cellClass,s.inverted&&"dark-inverted",!s.inverted&&(s.bold?"dark-text":"")])},[e.printObjects?(m(),k("details",fe,[D("div",ve,[D("pre",null,[D("code",null,x(s.format(t[s.key],t,o)),1)])])])):M("",!0)],2)):(m(),k("span",{key:2,class:C([s.cellClass,s.inverted&&"dark-inverted",!s.inverted&&(s.bold?"dark-text":"")])},x(s.format(t[s.key],t,o)),3))])]),_:2},1032,["column"]))),128))])],42,de),w(f.$slots,"body-row-post",{row:t,columns:R(p),index:o})],64))),128))])],2)}}});export{me as _,be as a};
