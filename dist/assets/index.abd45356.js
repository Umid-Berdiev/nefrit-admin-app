import{ad as e}from"./index.81fd6e18.js";const r=e();async function n(t){try{const{data:a}=await r({url:"/api/admin/report/application",params:t});return a.data}catch(a){throw a}}async function o(t){try{const{data:a}=await r({url:"/api/admin/report/certificate",params:t});return a.data}catch(a){throw a}}async function i(t){try{const{data:a}=await r({url:"/api/admin/report/payment",params:t});return a.data}catch(a){throw a}}async function p(t){try{const{data:a}=await r({url:"/api/admin/report/legal-entity",params:t});return a.data}catch(a){throw a}}export{o as a,i as b,n as c,p as f};