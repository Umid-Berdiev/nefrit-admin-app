import{af as c}from"./index.1658e387.js";const n=c();async function e(t){try{const{data:a}=await n({url:`/api/admin/legal-entity?page=${t}`});return a.data}catch(a){throw a}}async function o(t){try{const{data:a}=await n({url:"/api/admin/excel-legal-entity",params:t,responseType:"blob"});return a}catch(a){throw a}}async function s(){try{const{data:t}=await n({url:"/api/admin/legal/entities"});return t.data}catch(t){throw t}}async function l(){try{const{data:t}=await n({url:"/api/admin/legal-entity/status"});return t.data}catch(t){throw t}}async function p(t){try{const{data:a}=await n({url:`/api/admin/legal/entities/${t}/applications`});return a.data}catch(a){throw a}}async function d(t){try{const{data:a}=await n({url:`/api/admin/legal-entity/${t}`});return a.data}catch(a){throw a}}async function u(t,a){try{const{data:r}=await n({url:`/api/admin/legal-entity/${t}/applications?page=${a}`});return r.data}catch(r){throw r}}async function y(t,a){try{const{data:r}=await n({url:`/api/admin/legal-entity/${t}`,method:"PUT",data:a});return r.data}catch(r){throw r}}async function h(t,a){try{const{data:r}=await n({url:`/api/admin/legal-entity/${t}/block`,method:"POST",data:a});return r.data}catch(r){throw r}}async function f(t){try{const{data:a}=await n({url:`/api/admin/legal-entity/${t}/unblock`,method:"POST"});return a.data}catch(a){throw a}}async function w(t){try{const{data:a}=await n({url:`/api/admin/legal-entity/${t}/verify`,method:"PUT"});return a.data}catch(a){throw a}}export{d as a,h as b,f as c,l as d,e,u as f,o as g,s as h,p as i,y as u,w as v};
