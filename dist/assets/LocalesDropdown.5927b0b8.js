import{_ as x}from"./VDropdown.vue_vue_type_style_index_0_lang.478faedb.js";import{z as w,Z as C,N as L,u as k,D as y,e as l,o as a,f as z,w as n,q as B,m as D,t as i,E as c,j as r,i as u,s as V,F as N,P as b,Q as j}from"./index.5591eac8.js";const F=["onMouseleave"],S=["onClick"],E=["src","alt"],I=w({setup(M){const _=C(),{locale:o,availableLocales:p,t:U}=L(),d=k("locale","uz");y(o,()=>{d.value=o.value});const f=l(()=>p.filter(e=>e!==o.value)),g=l(()=>e=>{switch(e){case"en":return"/images/logos/flag_en.svg";case"ru":return"/images/logos/flag_ru.svg";case"uz":default:return"/images/logos/flag_uz.svg"}});function m(e){o.value=e,_.go(0)}return(e,$)=>{const v=b,h=x;return a(),z(h,{right:"",class:"locale-dropdown"},{button:n(({open:t,toggle:s})=>[B(v,{class:"is-trigger has-text-primary px-4",style:{border:"none"},rounded:"",outlined:"",light:"",onClick:s},{default:n(()=>[D(i(c(o).toUpperCase()),1)]),_:2},1032,["onClick"])]),content:n(({close:t})=>[r("div",{onMouseleave:t,class:"p-3"},[(a(!0),u(N,null,V(c(f),s=>(a(),u("a",{href:"javascript:;",class:"dropdown-item is-size-6 is-flex is-justify-content-flex-end",onClick:()=>{m(s),t()}},[r("img",{class:"mr-3",src:c(g)(s),alt:s+"flag"},null,8,E),r("span",null,i(s.toUpperCase()),1)],8,S))),256))],40,F)]),_:1})}}});const Q=j(I,[["__scopeId","data-v-e148c7f6"]]);export{Q as L};