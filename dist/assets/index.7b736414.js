import{ae as n}from"./index.49148b3c.js";const r=n();async function e(){try{const{data:a}=await r({url:"/api/admin/about"});return a.data}catch(a){throw a}}async function i(a){try{const{data:t}=await r({url:"/api/admin/about",method:"POST",data:a});return t.data}catch(t){throw t}}async function d(){try{const{data:a}=await r({url:"/api/admin/contact"});return a.data}catch(a){throw a}}async function u(a){try{const{data:t}=await r({url:`/api/admin/contact/${a}`});return t.data}catch(t){throw t}}async function s(a){try{const{data:t}=await r({url:"/api/admin/contact",method:"POST",data:a});return t.data}catch(t){throw t}}async function h(a,t){try{const{data:c}=await r({url:`/api/admin/contact/${a}`,method:"POST",data:t});return c.data}catch(c){throw c}}async function m(a){try{const{data:t}=await r({url:`/api/admin/contact/${a}`,method:"DELETE"});return t.data}catch(t){throw t}}async function w(a){try{const{data:t}=await r({url:`/api/admin/article?page=${a}`});return t.data}catch(t){throw t}}async function y(a){try{const{data:t}=await r({url:`/api/admin/article/${a}`});return t.data}catch(t){throw t}}async function l(a){try{const{data:t}=await r({url:"/api/admin/article",method:"POST",data:a});return t.data}catch(t){throw t}}async function p(a,t){try{const{data:c}=await r({url:`/api/admin/article/${a}`,method:"POST",data:t});return c.data}catch(c){throw c}}async function f(a){try{const{data:t}=await r({url:`/api/admin/article/${a}`,method:"DELETE"});return t.data}catch(t){throw t}}export{u as a,h as b,s as c,d,p as e,e as f,y as g,l as h,w as i,f as j,m as r,i as u};
