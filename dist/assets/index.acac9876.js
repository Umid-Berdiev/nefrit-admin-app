import{bL as c}from"./index.f060b7c6.js";const r=c();async function e(a){try{const{data:t}=await r({url:`/api/admin/legal-entity?page=${a}`});return t.data}catch(t){throw t}}async function o(){try{const{data:a}=await r({url:"/api/admin/legal/entities"});return a.data}catch(a){throw a}}async function s(){try{const{data:a}=await r({url:"/api/admin/legal-entity/status"});return a.data}catch(a){throw a}}async function l(a){try{const{data:t}=await r({url:`/api/admin/legal/entities/${a}/applications`});return t.data}catch(t){throw t}}async function d(a){try{const{data:t}=await r({url:`/api/admin/legal-entity/${a}`});return t.data}catch(t){throw t}}async function p(a,t){try{const{data:n}=await r({url:`/api/admin/legal-entity/${a}/applications?page=${t}`});return n.data}catch(n){throw n}}async function u(a,t){try{const{data:n}=await r({url:`/api/admin/legal-entity/${a}`,method:"PUT",data:t});return n.data}catch(n){throw n}}async function h(a,t){try{const{data:n}=await r({url:`/api/admin/legal-entity/${a}/block`,method:"POST",data:t});return n.data}catch(n){throw n}}async function y(a){try{const{data:t}=await r({url:`/api/admin/legal-entity/${a}/unblock`,method:"POST"});return t.data}catch(t){throw t}}async function f(a){try{const{data:t}=await r({url:`/api/admin/legal-entity/${a}/verify`,method:"PUT"});return t.data}catch(t){throw t}}export{s as a,d as b,p as c,h as d,y as e,e as f,o as g,l as h,u,f as v};
