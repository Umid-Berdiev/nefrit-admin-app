import{z as B,O as X,e as d,h as $,bQ as z,A as x,bR as U,D as J,a4 as Z,r as Q,bb as ee,bI as te,o as y,i as g,g as w,E as C,k as S,aY as ae,H as le,aw as re,F as R,s as H,f as O,a3 as L,t as K,l as I,j as T,w as se,N as ne,v as oe}from"./index.81fd6e18.js";const M=B({props:{id:{type:String,required:!0},label:{type:String,default:void 0},modelValue:{type:String,default:void 0},noRouter:{type:Boolean,default:void 0},routerQueryKey:{type:String,default:"sort"}},emits:["update:modelValue"],setup(e,t){const r=X(),f=d(()=>e.modelValue??r.query[e.routerQueryKey]??""),v=d(()=>f.value===`${e.id}:asc`),o=d(()=>f.value===`${e.id}:desc`),b=d(()=>v.value?`${e.id}:desc`:o.value?void 0:`${e.id}:asc`),p=d(()=>{if(e.noRouter)return{};const i={...r.query};return e.routerQueryKey&&(i[e.routerQueryKey]=b.value),{name:r.name,params:r.params,query:i}}),k=i=>{if(t.emit("update:modelValue",b.value),e.noRouter)return i.preventDefault(),i.stopPropagation(),!1};return()=>{const i=t.slots?.default?.({isDesc:o.value,isAsc:v.value,nextSort:b.value,value:f.value}),a=$(z,{to:p.value,onClick:k,onKeydown(n){n.code==="Space"&&(n.preventDefault(),n.stopPropagation(),n.target instanceof HTMLAnchorElement&&n.target.dispatchEvent(new MouseEvent("click")))}},{default(){const n=$("span",{key:`${f.value}`,class:"is-inline"},$("span",{class:"ml-3 iconify is-inline","data-icon":v.value?"fa:sort-asc":o.value?"fa:sort-desc":"fa:sort"}));return[i??e.label,n]}});return $("span",{},a)}}}),q=Symbol(),P=e=>e,ue=({key:e,order:t,a:r,b:f})=>{const v=r[e],o=f[e];return typeof v=="string"?t==="asc"?v.localeCompare(o):o.localeCompare(v):v>o?t==="asc"?1:-1:v<o?t==="asc"?-1:1:0},be=B({props:{data:{type:[Array,Function],default:void 0},columns:{type:Object,default:void 0},sort:{type:String,default:void 0},searchTerm:{type:String,default:void 0},limit:{type:Number,default:void 0},page:{type:Number,default:void 0},total:{type:Number,default:void 0},debounceSearch:{type:Number,default:300}},emits:["update:sort","update:page","update:limit","update:searchTerm"],setup(e,t){const r=x(),f=x(!1),v=x(""),o=d({get:()=>e.sort??v.value,set(l){e.sort===void 0?v.value=l:t.emit("update:sort",l)}}),b=x(""),p=d({get:()=>e.searchTerm??b.value,set(l){e.searchTerm===void 0?b.value=l:t.emit("update:searchTerm",l)}}),k=x(1),i=d({get:()=>e.page??k.value,set(l){e.page===void 0?k.value=l:t.emit("update:page",l)}}),a=x(5),n=d({get:()=>Math.max(1,e.limit??a.value),set(l){e.limit===void 0?a.value=l:t.emit("update:limit",l)}}),s=d(()=>{const l=e.columns;if(!l)return l;const h={};return Object.keys(l).reduce((m,u)=>{const c=l[u];return typeof c=="string"?m[u]={format:P,label:c,key:u}:typeof c=="object"&&(m[u]={format:P,label:u,key:u,...c},c.sortable===!0&&(c.renderHeader?m[u].renderHeader=()=>$(M,{id:u,noRouter:!0,modelValue:o.value,"onUpdate:modelValue":_=>o.value=_},{default:c.renderHeader}):m[u].renderHeader=()=>$(M,{id:u,label:c.label??u,noRouter:!0,modelValue:o.value,"onUpdate:modelValue":_=>o.value=_})),c.searchable===!0&&!c.sort&&(m[u].sort=ue)),m},h),h}),G=d(()=>{let l=r.value;if(!l||typeof e.data=="function")return l;if(V.value){const h=s.value?Object.values(s.value).filter(m=>!m||typeof m=="string"?!1:m.searchable===!0):[];if(h.length){const m=new RegExp(V.value,"i");l=l.filter((u,c)=>h.some(_=>{if(!_.key)return!1;const j=u[_.key];return _.filter?_.filter({searchTerm:V.value,value:j,row:u,column:_,index:c}):typeof j=="string"?j.match(m):!1}))}}return l}),E=d(()=>{let l=G.value;if(!l||typeof e.data=="function")return l;if(o.value&&o.value.includes(":")){const[h,m]=o.value.split(":"),u=s.value?Object.values(s.value).find(c=>!c||typeof c=="string"?!1:c.sortable===!0&&c.key===h):null;if(u){const c=[...l];c.sort((_,j)=>!u.key||!u.sort?0:u.sort({order:m,column:u,key:u.key,a:_,b:j})),l=c}}return l}),W=d(()=>typeof e.data=="function"||!r.value?r.value:E.value?.slice(D.value,D.value+n.value)),V=U(p,e.debounceSearch),F=d(()=>e.total??E.value?.length??0),D=d(()=>(i.value-1)*n.value),Y=d(()=>F.value?Math.ceil(F.value/n.value):0);async function N(l){if(typeof e.data=="function"){f.value=!0;try{r.value=await e.data({searchTerm:V.value,start:D.value,limit:n.value,sort:o.value,controller:l})}finally{f.value=!1}}}J([V,n],()=>{i.value!==1&&(i.value=1)}),Z(async l=>{let h;typeof e.data=="function"?(h=new AbortController,await N(h)):r.value=e.data,l(()=>{h?.abort()})});const A=Q({data:W,columns:s,loading:f,searchInput:p,searchTerm:V,start:D,page:i,limit:n,sort:o,total:F,totalPages:Y,fetchData:N});return ee(q,A),()=>{const l=t.slots.default?.(A);return $("div",{class:"flex-table-wrapper"},l)}}});const ie={class:"v-flex"},ge=B({props:{inline:{type:Boolean},flexDirection:{default:"row"},flexWrap:{default:"nowrap"},justifyContent:{default:"normal"},alignItems:{default:"normal"},alignContent:{default:"normal"},rowGap:{default:"normal"},columnGap:{default:"normal"}},setup(e){const t=e;te(f=>({d87b96a2:C(r),"73de6ff5":t.flexDirection,"1b2b7614":t.flexWrap,fe95e58c:t.justifyContent,"79f809ac":t.alignItems,d29ee936:t.alignContent,"6b02850d":t.rowGap,"337a6b8f":t.columnGap}));const r=d(()=>t.inline?"inline-flex":"flex");return(f,v)=>(y(),g("div",ie,[w(f.$slots,"default")]))}});const ce=["data-th"],de=B({props:{column:{default:()=>({})}},setup(e){const t=e;return(r,f)=>(y(),g("div",{class:S(["flex-table-cell is-relative",[t.column.bold&&"is-bold",t.column.media&&"is-media",t.column.grow===!0&&"is-grow",t.column.grow==="lg"&&"is-grow-lg",t.column.grow==="xl"&&"is-grow-xl",t.column.scrollX&&!t.column.scrollY&&"has-slimscroll-x",!t.column.scrollX&&t.column.scrollY&&"has-slimscroll",t.column.scrollX&&t.column.scrollY&&"has-slimscroll-all",t.column.align==="end"&&"cell-end",t.column.align==="center"&&"cell-center",t.column.cellClass]]),"data-th":t.column.label||void 0},[w(r.$slots,"default")],10,ce))}});const fe={key:0,class:"flex-table-header"},ve=["tabindex","onKeydown","onClick"],pe={key:0},ye={class:"language-json py-4"},he=B({props:{data:{default:()=>[]},columns:{default:void 0},printObjects:{type:Boolean},reactive:{type:Boolean},compact:{type:Boolean},rounded:{type:Boolean},separators:{type:Boolean},clickable:{type:Boolean},subtable:{type:Boolean},noHeader:{type:Boolean}},emits:["rowClick"],setup(e,{emit:t}){const r=e,f=ae(q,null),v=d(()=>f?.data?f.data:r.reactive?le(r.data)?r.data:Q(r.data):re(r.data)),o=p=>p,b=d(()=>{const p=f?.columns??r.columns;let k=[];if(p)for(const[i,a]of Object.entries(p))typeof a=="string"?k.push({format:o,label:a,key:i}):k.push({format:o,label:i,key:i,...a});else if(v.value.length>0)for(const[i]of Object.entries(v.value[0]))k.push({format:o,label:i,key:i});return k});return(p,k)=>{const i=de;return y(),g("div",{class:S(["flex-table",[r.compact&&"is-compact",r.rounded&&"is-rounded",r.separators&&"with-separators",r.noHeader&&"no-header",r.clickable&&"is-table-clickable",r.subtable&&"sub-table"]])},[w(p.$slots,"header",{},()=>[r.noHeader?I("",!0):(y(),g("div",fe,[(y(!0),g(R,null,H(C(b),a=>w(p.$slots,"header-column",{key:"col"+a.key,column:a},()=>[a.renderHeader?(y(),O(L({render:a.renderHeader}),{key:0,class:S([a.grow===!0&&"is-grow",a.grow==="lg"&&"is-grow-lg",a.grow==="xl"&&"is-grow-xl",a.align==="end"&&"cell-end",a.align==="center"&&"cell-center"])},null,8,["class"])):(y(),g("span",{key:1,class:S([a.grow===!0&&"is-grow",a.grow==="lg"&&"is-grow-lg",a.grow==="xl"&&"is-grow-xl",a.align==="end"&&"cell-end",a.align==="center"&&"cell-center"])},K(a.label),3))])),128))]))]),w(p.$slots,"body",{},()=>[(y(!0),g(R,null,H(C(v),(a,n)=>(y(),g(R,{key:n},[w(p.$slots,"body-row-pre",{row:a,columns:C(b),index:n}),T("div",{class:S(["flex-table-item",[r.clickable&&"is-clickable"]]),tabindex:r.clickable?0:void 0,onKeydown:ne(oe(()=>{r.clickable&&t("rowClick",a,n)},["prevent"]),["space"]),onClick:()=>{r.clickable&&t("rowClick",a,n)}},[w(p.$slots,"body-row",{row:a,columns:C(b),index:n},()=>[(y(!0),g(R,null,H(C(b),s=>(y(),O(i,{key:"row"+s.key,column:s},{default:se(()=>[w(p.$slots,"body-cell",{row:a,column:s,index:n,value:s.format(a[s.key],a,n)},()=>[s.renderRow?(y(),O(L({render:()=>s.renderRow?.(a,s,n)}),{key:0})):typeof s.format(a[s.key],a,n)=="object"?(y(),g("span",{key:1,class:S([s.cellClass,s.inverted&&"dark-inverted",!s.inverted&&(s.bold?"dark-text":"")])},[e.printObjects?(y(),g("details",pe,[T("div",ye,[T("pre",null,[T("code",null,K(s.format(a[s.key],a,n)),1)])])])):I("",!0)],2)):(y(),g("span",{key:2,class:S([s.cellClass,s.inverted&&"dark-inverted",!s.inverted&&(s.bold?"dark-text":"")])},K(s.format(a[s.key],a,n)),3))])]),_:2},1032,["column"]))),128))])],42,ve),w(p.$slots,"body-row-post",{row:a,columns:C(b),index:n})],64))),128))])],2)}}});export{he as _,be as a,ge as b};