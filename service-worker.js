if(!self.define){let n,i={};const e=(e,l)=>(e=new URL(e+".js",l).href,i[e]||new Promise((i=>{if("document"in self){const n=document.createElement("script");n.src=e,n.onload=i,document.head.appendChild(n)}else n=e,importScripts(e),i()})).then((()=>{let n=i[e];if(!n)throw new Error(`Module ${e} didn’t register its module`);return n})));self.define=(l,r)=>{const u=n||("document"in self?document.currentScript.src:"")||location.href;if(i[u])return;let s={};const o=n=>e(n,u),g={module:{uri:u},exports:s,require:o};i[u]=Promise.all(l.map((n=>g[n]||o(n)))).then((n=>(r(...n),s)))}}define(["./workbox-5b385ed2"],(function(n){"use strict";n.setCacheNameDetails({prefix:"bmeailab_officialwebpage"}),self.addEventListener("message",(n=>{n.data&&"SKIP_WAITING"===n.data.type&&self.skipWaiting()})),n.precacheAndRoute([{url:"/css/app.8a9c3d1d.css",revision:null},{url:"/css/chunk-vendors.cda9eb49.css",revision:null},{url:"/img/FP-01.955f49fe.png",revision:null},{url:"/img/FP-02.acd06ea7.png",revision:null},{url:"/img/FP-04.f4661931.png",revision:null},{url:"/img/M-01.6ea4f461.png",revision:null},{url:"/img/M-02.27d91f91.png",revision:null},{url:"/img/M-03.31abafdf.png",revision:null},{url:"/img/M-04.af6c3d3c.png",revision:null},{url:"/img/M-05.bbbed750.png",revision:null},{url:"/img/M-06.5710cc24.png",revision:null},{url:"/img/M-bg.5eb96e9e.png",revision:null},{url:"/img/RI-bg.71851665.png",revision:null},{url:"/img/SR-01.367e5170.png",revision:null},{url:"/img/SR-02.ae7b334a.png",revision:null},{url:"/img/SR-03.a0a8d088.png",revision:null},{url:"/img/bg-01.4cff2f00.png",revision:null},{url:"/img/bg-03.dfbf02e9.png",revision:null},{url:"/img/bg02_intro.a8c8f7af.png",revision:null},{url:"/img/contact.4cb5d0cb.png",revision:null},{url:"/img/logo.605524e3.png",revision:null},{url:"/img/maintenence_v2.3fbd4997.jpeg",revision:null},{url:"/img/polyu-logo.5b1ad012.png",revision:null},{url:"/index.html",revision:"af1e7f1b76ba556eef742d74eea9dda1"},{url:"/js/app.57d3fa31.js",revision:null},{url:"/js/chunk-vendors.42c6dd39.js",revision:null},{url:"/manifest.json",revision:"d9a9c60f6e8878e11a4b3c4a226e0727"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
