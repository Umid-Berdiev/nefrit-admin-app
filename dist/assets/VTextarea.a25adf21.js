import{A as i,r as p,a9 as f,B as m,E as o,f as _,Y as c,bL as v,o as x,j as V,G as a,l as B,R as C}from"./index.bb4908f5.js";const h=["id","name"],g=i({props:{raw:{type:Boolean},modelValue:{default:""}},emits:["update:modelValue"],setup(d,{emit:u}){const n=d,e=p(f({create:!1,help:"VTextarea"})),t=m(e?.field?.value??n.modelValue);o(t,()=>{u("update:modelValue",t.value)}),o(()=>n.modelValue,()=>{t.value=n.modelValue});const r=_(()=>n.raw?[]:["textarea"]);return(w,l)=>c((x(),V("textarea",{id:a(e).id,"onUpdate:modelValue":l[0]||(l[0]=s=>t.value=s),class:B(a(r)),name:a(e).id,onChange:l[1]||(l[1]=(...s)=>a(e).field?.handleChange&&a(e).field?.handleChange(...s)),onBlur:l[2]||(l[2]=(...s)=>a(e).field?.handleBlur&&a(e).field?.handleBlur(...s))},null,42,h)),[[v,t.value]])}});const y=C(g,[["__scopeId","data-v-cf1db1f4"]]);export{y as _};