if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,t)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}})).then(e=>{const r=t(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-c692813c"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"assets/images/avatar.svg",revision:"4d62f8e40ed31db2a19e9020a61cfa7d"},{url:"assets/stylesheets/style.css",revision:"bffb913645c8184f39760ec2f0f3cfdb"},{url:"favicon.ico",revision:"d1772da42bcd4578ced3f62cac2d8e78"},{url:"index.html",revision:"d5d3d6e4c604d6244f6cbee7bb222a1d"},{url:"ru-ru/index.html",revision:"71b3ecfca91aa31e379f45e45dd9f3d8"},{url:"uk-ua/index.html",revision:"3f558fa9d8cfefe4b346b521c9350217"}],{})}));
//# sourceMappingURL=sw.js.map
