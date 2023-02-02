import{af as c}from"./index.bb4908f5.js";const n=c();async function o(a){try{const{data:t}=await n({url:"/api/admin/application",params:a});return t.data}catch(t){throw t}}async function e(a){try{const{data:t}=await n({url:"/api/admin/excel-application",params:a,responseType:"blob"});return t}catch(t){throw t}}async function s(a){try{const{data:t}=await n({url:`/api/admin/application/${a}`});return t.data}catch(t){throw t}}async function d(a,t){try{const{data:r}=await n({url:`/api/admin/application/${a}/cancel`,method:"POST",data:t});return r.data}catch(r){throw r}}async function u(a){try{const{data:t}=await n({url:`/api/admin/certificate/${a}/application`});return t.data}catch(t){throw t}}async function p(){try{const{data:a}=await n({url:"/api/admin/status?type=applications"});return a.data}catch(a){throw a}}async function h(a){try{const{data:t}=await n({url:`/api/admin/application/${a}/check/stage`});return t.data}catch(t){throw t}}async function m(a,t){try{const{data:r}=await n({url:`/api/admin/application/${a}/stage`,method:"PUT",data:t});return r.data}catch(r){throw r}}async function y(a){try{const{data:t}=await n({url:`/api/admin/application/${a}/chronologies`});return t.data}catch(t){throw t}}async function l(a,t){try{const{data:r}=await n({url:`/api/admin/application/${a}/notice?page=${t}`});return r.data}catch(r){throw r}}async function w(){try{const{data:a}=await n({url:"/api/admin/noticestatus"});return a.data}catch(a){throw a}}async function f(a){try{const{data:t}=await n({url:`/api/admin/application/notice/${a}`});return t.data}catch(t){throw t}}async function S(a,t){try{const{data:r}=await n({url:`/api/admin/application/notice/${a}`,method:"PUT",data:t});return r.data}catch(r){throw r}}async function $(a){try{const{data:t}=await n({url:`/api/admin/application/notice/${a}`,method:"DELETE"});return t.data}catch(t){throw t}}async function g(a){try{const{data:t}=await n({url:`/api/admin/application/${a.application_id}/notice`,method:"POST",data:a});return t.data}catch(t){throw t}}async function C(a,t){try{const{data:r}=await n({url:`/api/admin/application/${a}/conclusion?page=${t}`});return r.data}catch(r){throw r}}async function P(){try{const{data:a}=await n({url:"/api/admin/conclusionstatus"});return a.data}catch(a){throw a}}async function T(a){try{const{data:t}=await n({url:`/api/admin/application/conclusion/${a}`});return t.data}catch(t){throw t}}async function B(a,t){try{const{data:r}=await n({url:`/api/admin/application/conclusion/${a}`,method:"POST",data:t});return r.data}catch(r){throw r}}async function I(a){try{const{data:t}=await n({url:`/api/admin/application/conclusion/${a}`,method:"DELETE"});return t.data}catch(t){throw t}}async function E(a){try{const{data:t}=await n({url:`/api/admin/application/${a.get("application_id")}/conclusion`,method:"POST",data:a});return t.data}catch(t){throw t}}async function O(a){try{const{data:t}=await n({url:"/api/admin/certificate",method:"POST",data:a});return t.data}catch(t){throw t}}async function v(a){try{const{data:t}=await n({url:`/api/admin/application/${a}/vote`});return t.data}catch(t){throw t}}async function N(a){try{const{data:t}=await n({url:`/api/admin/application/${a}/vote/statistics`});return t.data}catch(t){throw t}}async function L(a,t){try{const{data:r}=await n({url:`/api/admin/application/${a}/vote`,method:"POST",data:t});return r.data}catch(r){throw r}}async function x(a){try{const{data:t}=await n({url:`/api/admin/application/${a}/document`});return t.data}catch(t){throw t}}async function D(a){try{const{data:t}=await n({url:`/api/admin/chat?application_id=${a}`});return t.data}catch(t){throw t}}async function _(a){try{const{data:t}=await n({url:"/api/admin/message",method:"POST",data:a});return t.data}catch(t){throw t}}async function b(a){try{const{data:t}=await n({url:"/api/admin/appcontract",params:a});return t.data}catch(t){throw t}}async function k(a){try{const{data:t}=await n({url:`/api/admin/appcontract/${a}`});return t.data}catch(t){throw t}}async function F(a){try{const{data:t}=await n({url:`/api/admin/appcontract/${a}/payments`});return t.data}catch(t){throw t}}async function M(a){try{const{data:t}=await n({url:"/api/admin/appcontract",method:"POST",data:a});return t.data}catch(t){throw t}}async function U(a,t){try{const{data:r}=await n({url:`/api/admin/appcontract/${a}`,method:"POST",data:t});return r.data}catch(r){throw r}}async function V(a){try{const{data:t}=await n({url:`/api/admin/appcontract/${a}`,method:"DELETE"});return t.data}catch(t){throw t}}async function A(a,t){try{const{data:r}=await n({url:`/api/admin/appcontract/${a}/application/${t}/cancel`,method:"PUT"});return r.data}catch(r){throw r}}async function G(a,t){try{const{data:r}=await n({url:`/api/admin/appcontract/${a}/file`,method:"POST",data:t});return r.data}catch(r){throw r}}async function j(a){try{const{data:t}=await n({url:"/api/admin/statistics/application/status",params:a});return t.data}catch(t){throw t}}async function q(a){try{const{data:t}=await n({url:`/api/admin/statistics/payment?year=${a}`});return t.data}catch(t){throw t}}async function z(a){try{const{data:t}=await n({url:"/api/admin/statistics/application/stage",params:a});return t.data}catch(t){throw t}}async function H(a,t=5){try{const{data:r}=await n({url:`/api/admin/statistics/application/new?page=${a}&per_page=${t}`});return r.data}catch(r){throw r}}async function J(a,t=5){try{const{data:r}=await n({url:`/api/admin/statistics/application/must-pay?page=${a}&per_page=${t}`});return r.data}catch(r){throw r}}async function K(){try{const{data:a}=await n({url:"/api/admin/statistics/application/general"});return a.data}catch(a){throw a}}export{m as A,d as B,h as C,u as D,O as E,f as F,w as G,S as H,g as I,T as J,P as K,B as L,E as M,p as N,o as O,e as P,z as a,q as b,j as c,J as d,K as e,H as f,F as g,G as h,k as i,A as j,y as k,x as l,M as m,b as n,_ as o,D as p,L as q,V as r,v as s,N as t,U as u,l as v,$ as w,C as x,I as y,s as z};