import{F as d,s as E}from"./index.0cbaa7c3.js";const c=[];function p(e,t=d){let n;const o=new Set;function r(s){if(E(e,s)&&(e=s,n)){const u=!c.length;for(const a of o)a[1](),c.push(a,e);if(u){for(let a=0;a<c.length;a+=2)c[a][0](c[a+1]);c.length=0}}}function i(s){r(s(e))}function l(s,u=d){const a=[s,u];return o.add(a),o.size===1&&(n=t(r)||d),s(e),()=>{o.delete(a),o.size===0&&n&&(n(),n=null)}}return{set:r,update:i,subscribe:l}}var g;const m=((g=globalThis.__sveltekit_1xdk6ig)==null?void 0:g.base)??"";var k;const w=((k=globalThis.__sveltekit_1xdk6ig)==null?void 0:k.assets)??m,A="1681337240615",x="sveltekit:snapshot",I="sveltekit:scroll",y="sveltekit:index",_={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(e){let t=e.baseURI;if(!t){const n=e.getElementsByTagName("base");t=n.length?n[0].href:e.URL}return t}function U(){return{x:pageXOffset,y:pageYOffset}}function f(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const b={..._,"":_.hover};function v(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function L(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=v(e)}}function N(e,t){let n;try{n=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,r=!n||!!o||S(n,t)||(e.getAttribute("rel")||"").split(/\s+/).includes("external")||e.hasAttribute("download");return{url:n,external:r,target:o}}function V(e){let t=null,n=null,o=null,r=null,i=null,l=null,s=e;for(;s&&s!==document.documentElement;)o===null&&(o=f(s,"preload-code")),r===null&&(r=f(s,"preload-data")),t===null&&(t=f(s,"keepfocus")),n===null&&(n=f(s,"noscroll")),i===null&&(i=f(s,"reload")),l===null&&(l=f(s,"replacestate")),s=v(s);return{preload_code:b[o??"off"],preload_data:b[r??"off"],keep_focus:t==="off"?!1:t===""?!0:null,noscroll:n==="off"?!1:n===""?!0:null,reload:i==="off"?!1:i===""?!0:null,replace_state:l==="off"?!1:l===""?!0:null}}function h(e){const t=p(e);let n=!0;function o(){n=!0,t.update(l=>l)}function r(l){n=!1,t.set(l)}function i(l){let s;return t.subscribe(u=>{(s===void 0||n&&u!==s)&&l(s=u)})}return{notify:o,set:r,subscribe:i}}function R(){const{set:e,subscribe:t}=p(!1);let n;async function o(){clearTimeout(n);const r=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(r.ok){const l=(await r.json()).version!==A;return l&&(e(!0),clearTimeout(n)),l}else throw new Error(`Version check failed: ${r.status}`)}return{subscribe:t,check:o}}function S(e,t){return e.origin!==location.origin||!e.pathname.startsWith(t)}function P(e){e.client}const Y={url:h({}),page:h({}),navigating:p(null),updated:R()};export{y as I,_ as P,I as S,x as a,N as b,V as c,U as d,m as e,L as f,O as g,P as h,S as i,Y as s};
