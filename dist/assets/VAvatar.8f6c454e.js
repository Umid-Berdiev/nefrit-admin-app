import{o as l}from"./via-placeholder.9af8280d.js";import{K as p,p as s,x as o,t as u,A as d,M as i,y as m,D as v,B as c}from"./index.f060b7c6.js";const f=["src"],g=["src"],k=["src"],x=p({props:{picture:{default:void 0},pictureDark:{default:void 0},placeholder:{default:"https://via.placeholder.com/50x50"},badge:{default:void 0},initials:{default:"?"},size:{default:void 0},color:{default:void 0},dotColor:{default:void 0},squared:{type:Boolean},dot:{type:Boolean}},setup(a){const e=a;return(n,t)=>(s(),o("div",{class:d(["v-avatar",[a.size&&`is-${e.size}`,a.dot&&"has-dot",a.dotColor&&`dot-${e.dotColor}`,a.squared&&a.dot&&"has-dot-squared"]])},[u(n.$slots,"avatar",{},()=>[e.picture?(s(),o("img",{key:0,class:d(["avatar",[e.squared&&"is-squared",e.pictureDark&&"light-image"]]),src:e.picture,alt:"",onErrorOnce:t[0]||(t[0]=r=>i(l)(r,"150x150"))},null,42,f)):(s(),o("span",{key:1,class:d(["avatar is-fake",[e.squared&&"is-squared",e.color&&`is-${e.color}`]])},[m("span",null,v(e.initials),1)],2)),e.picture&&e.pictureDark?(s(),o("img",{key:2,class:d(["avatar dark-image",[e.squared&&"is-squared"]]),src:e.pictureDark,alt:"",onErrorOnce:t[1]||(t[1]=r=>i(l)(r,"150x150"))},null,42,g)):c("",!0)]),u(n.$slots,"badge",{},()=>[e.badge?(s(),o("img",{key:0,class:"badge",src:e.badge,alt:"",onErrorOnce:t[2]||(t[2]=r=>i(l)(r,"150x150"))},null,40,k)):c("",!0)])],2))}});export{x as _};