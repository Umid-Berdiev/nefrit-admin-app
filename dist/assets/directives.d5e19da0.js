import{d as c}from"./index.f060b7c6.js";const a=new WeakMap,s=new Set,l={getSSRProps(){return{}},created:e=>{const t=function(){const r=(e.href??"").split("#")[0];if(!r||s.has(r)){e.removeEventListener("mouseenter",t);return}const n=document.createElement("link");n.rel="prefetch",n.href=r,document.head.appendChild(n),s.add(r),e.removeEventListener("mouseenter",t)};a.set(e,t)},beforeMount(){const e=window.location.toString().split("#")[0];!e||s.has(e)||s.add(e)},mounted:e=>{e.addEventListener("mouseenter",a.get(e),{passive:!0})},unmounted:e=>{e.removeEventListener("mouseenter",a.get(e))}},f=(e,t)=>{const r=t.value;typeof r=="string"?e.dataset.hint=r:e.dataset.hint=""},u=(e,t)=>{const r=t.value;let n="top",o="",i="";t.modifiers.bottom&&(n="bottom"),t.modifiers.left?n+="-left":t.modifiers.right&&(n+="-right"),t.modifiers.light?o="hint--light":t.modifiers.primary?o="hint--primary":t.modifiers.info?o="hint--info":t.modifiers.success?o="hint--success":t.modifiers.warning?o="hint--warning":t.modifiers.error&&(o="hint--error"),t.modifiers.rounded?i="hint--rounded":t.modifiers.bubble&&(i="hint--bubble"),typeof r=="string"&&(e.dataset.hint=r,e.tabIndex=0,e.classList.add(`hint--${n}`),o&&e.classList.add(o),i&&e.classList.add(i))},m={getSSRProps(){return{}},updated:f,mounted:u},d=(e,t)=>{const r=t.value.src,n=t.value.placeholder;if(r){const o=new Image;n&&(o.onerror=()=>{o.onerror=null,e.style.backgroundImage=`url(${n})`}),o.onload=()=>{o.onload=null,e.style.backgroundImage=`url(${r})`},o.src=r}},h={getSSRProps(){return{}},updated:d,mounted:d},v=c(({app:e})=>{e.directive("preload-link",l),e.directive("tooltip",m),e.directive("background",h)});export{v as default};
