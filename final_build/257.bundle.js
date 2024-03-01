"use strict";(self.webpackChunkcryptique=self.webpackChunkcryptique||[]).push([[257],{257:(L,e,t)=>{t.d(e,{Z:()=>Be});var r,e={};function D(e,t){return function(){return e.apply(t,arguments)}}t.r(e),t.d(e,{hasBrowserEnv:()=>le,hasStandardBrowserEnv:()=>fe,hasStandardBrowserWebWorkerEnv:()=>de});const k=Object.prototype["toString"],c=Object["getPrototypeOf"],n=(r=Object.create(null),e=>{e=k.call(e);return r[e]||(r[e]=e.slice(8,-1).toLowerCase())});var t=t=>(t=t.toLowerCase(),e=>n(e)===t),o=t=>e=>typeof e===t;const u=Array["isArray"],i=o("undefined");const q=t("ArrayBuffer");var s=o("string");const a=o("function"),I=o("number"),l=e=>null!==e&&"object"==typeof e;const f=e=>{var t;return"object"===n(e)&&!(null!==(t=c(e))&&t!==Object.prototype&&null!==Object.getPrototypeOf(t)||Symbol.toStringTag in e||Symbol.iterator in e)};var o=t("Date"),d=t("File"),p=t("Blob"),z=t("FileList"),M=t("URLSearchParams");function h(t,r,{allOwnKeys:n=!1}={}){if(null!=t){let e;var o;if("object"!=typeof t&&(t=[t]),u(t))for(e=0,o=t.length;e<o;e++)r.call(null,t[e],e,t);else{var i,s=n?Object.getOwnPropertyNames(t):Object.keys(t),a=s.length;for(e=0;e<a;e++)i=s[e],r.call(null,t[i],i,t)}}}function H(e,t){t=t.toLowerCase();var r,n=Object.keys(e);let o=n.length;for(;0<o--;)if(t===(r=n[o]).toLowerCase())return r;return null}const J="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:global,W=e=>!i(e)&&e!==J;m="undefined"!=typeof Uint8Array&&c(Uint8Array);var m,K,V=e=>m&&e instanceof m,G=t("HTMLFormElement"),$=(K=[Object.prototype["hasOwnProperty"]][0],(e,t)=>K.call(e,t)),y=t("RegExp");const X=(n,o)=>{var e=Object.getOwnPropertyDescriptors(n);const i={};h(e,(e,t)=>{var r;!1!==(r=o(e,t,n))&&(i[t]=r||e)}),Object.defineProperties(n,i)};var g="abcdefghijklmnopqrstuvwxyz",b="0123456789";const Q={DIGIT:b,ALPHA:g,ALPHA_DIGIT:g+g.toUpperCase()+b};g=t("AsyncFunction");const w={isArray:u,isArrayBuffer:q,isBuffer:function(e){return null!==e&&!i(e)&&null!==e.constructor&&!i(e.constructor)&&a(e.constructor.isBuffer)&&e.constructor.isBuffer(e)},isFormData:e=>{var t;return e&&("function"==typeof FormData&&e instanceof FormData||a(e.append)&&("formdata"===(t=n(e))||"object"===t&&a(e.toString)&&"[object FormData]"===e.toString()))},isArrayBufferView:function(e){let t;return t="undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&q(e.buffer)},isString:s,isNumber:I,isBoolean:e=>!0===e||!1===e,isObject:l,isPlainObject:f,isUndefined:i,isDate:o,isFile:d,isBlob:p,isRegExp:y,isFunction:a,isStream:e=>l(e)&&a(e.pipe),isURLSearchParams:M,isTypedArray:V,isFileList:z,forEach:h,merge:function r(){const n=(W(this)&&this||{}).caseless,o={};var i=(e,t)=>{t=n&&H(o,t)||t,f(o[t])&&f(e)?o[t]=r(o[t],e):f(e)?o[t]=r({},e):u(e)?o[t]=e.slice():o[t]=e};for(let e=0,t=arguments.length;e<t;e++)arguments[e]&&h(arguments[e],i);return o},extend:(r,e,n,{allOwnKeys:t}={})=>(h(e,(e,t)=>{n&&a(e)?r[t]=D(e,n):r[t]=e},{allOwnKeys:t}),r),trim:e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),stripBOM:e=>e=65279===e.charCodeAt(0)?e.slice(1):e,inherits:(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},toFlatObject:(e,t,r,n)=>{var o,i;let s;var a={};if(t=t||{},null!=e)do{for(o=Object.getOwnPropertyNames(e),s=o.length;0<s--;)i=o[s],n&&!n(i,e,t)||a[i]||(t[i]=e[i],a[i]=!0)}while((e=!1!==r&&c(e))&&(!r||r(e,t))&&e!==Object.prototype);return t},kindOf:n,kindOfTest:t,endsWith:(e,t,r)=>{e=String(e),(void 0===r||r>e.length)&&(r=e.length),r-=t.length;e=e.indexOf(t,r);return-1!==e&&e===r},toArray:e=>{if(!e)return null;if(u(e))return e;let t=e.length;if(!I(t))return null;for(var r=new Array(t);0<t--;)r[t]=e[t];return r},forEachEntry:(e,t)=>{for(var r=(e&&e[Symbol.iterator]).call(e);(n=r.next())&&!n.done;){var n=n.value;t.call(e,n[0],n[1])}},matchAll:(e,t)=>{for(var r,n=[];null!==(r=e.exec(t));)n.push(r);return n},isHTMLForm:G,hasOwnProperty:$,hasOwnProp:$,reduceDescriptors:X,freezeMethods:n=>{X(n,(e,t)=>{if(a(n)&&-1!==["arguments","caller","callee"].indexOf(t))return!1;var r=n[t];a(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+t+"'")}))})},toObjectSet:(e,t)=>{const r={};var n=e=>{e.forEach(e=>{r[e]=!0})};return u(e)?n(e):n(String(e).split(t)),r},toCamelCase:e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(e,t,r){return t.toUpperCase()+r}),noop:()=>{},toFiniteNumber:(e,t)=>(e=+e,Number.isFinite(e)?e:t),findKey:H,global:J,isContextDefined:W,ALPHABET:Q,generateString:(e=16,t=Q.ALPHA_DIGIT)=>{let r="";for(var n=t["length"];e--;)r+=t[Math.random()*n|0];return r},isSpecCompliantForm:function(e){return!!(e&&a(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator])},toJSONObject:e=>{const t=new Array(10),o=(e,r)=>{if(l(e)){if(0<=t.indexOf(e))return;if(!("toJSON"in e)){t[r]=e;const n=u(e)?[]:{};return h(e,(e,t)=>{e=o(e,r+1);i(e)||(n[t]=e)}),t[r]=void 0,n}}return e};return o(e,0)},isAsyncFn:g,isThenable:e=>e&&(l(e)||a(e))&&a(e.then)&&a(e.catch)};function E(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o)}w.inherits(E,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:w.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Z=E.prototype,Y={},O=(["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Y[e]={value:e}}),Object.defineProperties(E,Y),Object.defineProperty(Z,"isAxiosError",{value:!0}),E.from=(e,t,r,n,o,i)=>{var s=Object.create(Z);return w.toFlatObject(e,s,function(e){return e!==Error.prototype},e=>"isAxiosError"!==e),E.call(s,e.message,t,r,n,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s},E);function v(e){return w.isPlainObject(e)||w.isArray(e)}function ee(e){return w.endsWith(e,"[]")?e.slice(0,-2):e}function te(e,t,r){return e?e.concat(t).map(function(e,t){return e=ee(e),!r&&t?"["+e+"]":e}).join(r?".":""):t}const re=w.toFlatObject(w,{},null,function(e){return/^is[A-Z]/.test(e)});const S=function(e,i,t){if(!w.isObject(e))throw new TypeError("target must be an object");i=i||new FormData;const s=(t=w.toFlatObject(t,{metaTokens:!0,dots:!1,indexes:!1},!1,function(e,t){return!w.isUndefined(t[e])})).metaTokens,o=t.visitor||n,a=t.dots,c=t.indexes,r=(t.Blob||"undefined"!=typeof Blob&&Blob)&&w.isSpecCompliantForm(i);if(!w.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(w.isDate(e))return e.toISOString();if(!r&&w.isBlob(e))throw new O("Blob is not supported. Use a Buffer instead.");return w.isArrayBuffer(e)||w.isTypedArray(e)?r&&"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}function n(e,r,t){let n=e;if(e&&!t&&"object"==typeof e)if(w.endsWith(r,"{}"))r=s?r:r.slice(0,-2),e=JSON.stringify(e);else if(w.isArray(e)&&(o=e,w.isArray(o))&&!o.some(v)||(w.isFileList(e)||w.endsWith(r,"[]"))&&(n=w.toArray(e)))return r=ee(r),n.forEach(function(e,t){w.isUndefined(e)||null===e||i.append(!0===c?te([r],t,a):null===c?r:r+"[]",u(e))}),!1;var o;return!!v(e)||(i.append(te(t,r,a),u(e)),!1)}const l=[],f=Object.assign(re,{defaultVisitor:n,convertValue:u,isVisitable:v});if(w.isObject(e))return function r(e,n){if(!w.isUndefined(e)){if(-1!==l.indexOf(e))throw Error("Circular reference detected in "+n.join("."));l.push(e),w.forEach(e,function(e,t){!0===(!(w.isUndefined(e)||null===e)&&o.call(i,e,w.isString(t)?t.trim():t,n,f))&&r(e,n?n.concat(t):[t])}),l.pop()}}(e),i;throw new TypeError("data must be an object")};function ne(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(e){return t[e]})}function oe(e,t){this._pairs=[],e&&S(e,this,t)}b=oe.prototype;b.append=function(e,t){this._pairs.push([e,t])},b.toString=function(t){const r=t?function(e){return t.call(this,e,ne)}:ne;return this._pairs.map(function(e){return r(e[0])+"="+r(e[1])},"").join("&")};const ie=oe;function se(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function ae(t,r,n){if(r){var o=n&&n.encode||se,i=n&&n.serialize;let e;(e=i?i(r,n):w.isURLSearchParams(r)?r.toString():new ie(r,n).toString(o))&&(-1!==(i=t.indexOf("#"))&&(t=t.slice(0,i)),t+=(-1===t.indexOf("?")?"?":"&")+e)}return t}const ce=class{constructor(){this.handlers=[]}use(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){w.forEach(this.handlers,function(e){null!==e&&t(e)})}},ue={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1};s={isBrowser:!0,classes:{URLSearchParams:"undefined"!=typeof URLSearchParams?URLSearchParams:ie,FormData:"undefined"!=typeof FormData?FormData:null,Blob:"undefined"!=typeof Blob?Blob:null},protocols:["http","https","file","blob","url","data"]};const le="undefined"!=typeof window&&"undefined"!=typeof document,fe=(o="undefined"!=typeof navigator&&navigator.product,le&&["ReactNative","NativeScript","NS"].indexOf(o)<0),de="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"==typeof self.importScripts,R={...e,...s};const pe=function(e){function a(e,t,r,n){var o,i,s;return"__proto__"===(s=e[n++])||(o=Number.isFinite(+s),i=n>=e.length,s=!s&&w.isArray(r)?r.length:s,i?w.hasOwnProp(r,s)?r[s]=[r[s],t]:r[s]=t:(r[s]&&w.isObject(r[s])||(r[s]=[]),a(e,t,r[s],n)&&w.isArray(r[s])&&(r[s]=function(e){var t={},r=Object.keys(e);let n;var o,i=r.length;for(n=0;n<i;n++)t[o=r[n]]=e[o];return t}(r[s]))),!o)}if(w.isFormData(e)&&w.isFunction(e.entries)){const r={};return w.forEachEntry(e,(e,t)=>{a((e=e,w.matchAll(/\w+|\[(\w*)]/g,e).map(e=>"[]"===e[0]?"":e[1]||e[0])),t,r,0)}),r}return null};const A={transitional:ue,adapter:["xhr","http"],transformRequest:[function(e,t){var r,n=t.getContentType()||"",o=-1<n.indexOf("application/json"),i=w.isObject(e),s=(i&&w.isHTMLForm(e)&&(e=new FormData(e)),w.isFormData(e));if(s)return o?JSON.stringify(pe(e)):e;if(!(w.isArrayBuffer(e)||w.isBuffer(e)||w.isStream(e)||w.isFile(e)||w.isBlob(e))){if(w.isArrayBufferView(e))return e.buffer;if(w.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();if(i){if(-1<n.indexOf("application/x-www-form-urlencoded"))return s=e,r=this.formSerializer,S(s,new R.classes.URLSearchParams,Object.assign({visitor:function(e,t,r,n){return R.isNode&&w.isBuffer(e)?(this.append(t,e.toString("base64")),!1):n.defaultVisitor.apply(this,arguments)}},r)).toString();if((s=w.isFileList(e))||-1<n.indexOf("multipart/form-data"))return r=this.env&&this.env.FormData,S(s?{"files[]":e}:e,r&&new r,this.formSerializer)}if(i||o){t.setContentType("application/json",!1);n=e,s=void 0,i=void 0;if(w.isString(n))try{return(s||JSON.parse)(n),w.trim(n)}catch(e){if("SyntaxError"!==e.name)throw e}return(i||JSON.stringify)(n)}}return e}],transformResponse:[function(e){var t=this.transitional||A.transitional,r=t&&t.forcedJSONParsing,n="json"===this.responseType;if(e&&w.isString(e)&&(r&&!this.responseType||n)){r=!(t&&t.silentJSONParsing)&&n;try{return JSON.parse(e)}catch(e){if(r){if("SyntaxError"===e.name)throw O.from(e,O.ERR_BAD_RESPONSE,this,null,this.response);throw e}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:R.classes.FormData,Blob:R.classes.Blob},validateStatus:function(e){return 200<=e&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}},T=(w.forEach(["delete","get","head","post","put","patch"],e=>{A.headers[e]={}}),A),he=w.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),me=Symbol("internals");function j(e){return e&&String(e).trim().toLowerCase()}function N(e){return!1===e||null==e?e:w.isArray(e)?e.map(N):String(e)}function ye(e,t,r,n,o){return w.isFunction(n)?n.call(this,t,r):(o&&(t=r),w.isString(t)&&(w.isString(n)?-1!==t.indexOf(n):w.isRegExp(n)&&n.test(t)))}class C{constructor(e){e&&this.set(e)}set(e,t,r){const o=this;function n(e,t,r){var n=j(t);if(!n)throw new Error("header name must be a non-empty string");n=w.findKey(o,n);n&&void 0!==o[n]&&!0!==r&&(void 0!==r||!1===o[n])||(o[n||t]=N(e))}var i=(e,r)=>w.forEach(e,(e,t)=>n(e,t,r));return w.isPlainObject(e)||e instanceof this.constructor?i(e,t):w.isString(e)&&(e=e.trim())&&!/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())?i((e=>{const t={};let r,n,o;return e&&e.split("\n").forEach(function(e){o=e.indexOf(":"),r=e.substring(0,o).trim().toLowerCase(),n=e.substring(o+1).trim(),!r||t[r]&&he[r]||("set-cookie"===r?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t})(e),t):null!=e&&n(t,e,r),this}get(e,t){if(e=j(e)){e=w.findKey(this,e);if(e){var r=this[e];if(!t)return r;if(!0===t){for(var n,o=r,i=Object.create(null),s=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;n=s.exec(o);)i[n[1]]=n[2];return i}if(w.isFunction(t))return t.call(this,r,e);if(w.isRegExp(t))return t.exec(r);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){return!!(e=j(e))&&!(!(e=w.findKey(this,e))||void 0===this[e]||t&&!ye(0,this[e],e,t))}delete(e,t){const r=this;let n=!1;function o(e){(e=j(e))&&(e=w.findKey(r,e))&&(!t||ye(r,r[e],e,t))&&(delete r[e],n=!0)}return w.isArray(e)?e.forEach(o):o(e),n}clear(e){var t=Object.keys(this);let r=t.length,n=!1;for(;r--;){var o=t[r];e&&!ye(0,this[o],o,e,!0)||(delete this[o],n=!0)}return n}normalize(n){const o=this,i={};return w.forEach(this,(e,t)=>{var r=w.findKey(i,t);r?(o[r]=N(e),delete o[t]):((r=n?t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,t,r)=>t.toUpperCase()+r):String(t).trim())!==t&&delete o[t],o[r]=N(e),i[r]=!0)}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(r){const n=Object.create(null);return w.forEach(this,(e,t)=>{null!=e&&!1!==e&&(n[t]=r&&w.isArray(e)?e.join(", "):e)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,t])=>e+": "+t).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const r=new this(e);return t.forEach(e=>r.set(e)),r}static accessor(e){const n=(this[me]=this[me]={accessors:{}}).accessors,s=this.prototype;function t(e){var t=j(e);if(!n[t]){{var r=s;var o=e;const i=w.toCamelCase(" "+o);["get","set","has"].forEach(n=>{Object.defineProperty(r,n+i,{value:function(e,t,r){return this[n].call(this,o,e,t,r)},configurable:!0})})}n[t]=!0}}return w.isArray(e)?e.forEach(t):t(e),this}}C.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),w.reduceDescriptors(C.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(e){this[r]=e}}}),w.freezeMethods(C);const x=C;function ge(e,t){const r=this||T;var n=t||r;const o=x.from(n.headers);let i=n.data;return w.forEach(e,function(e){i=e.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function be(e){return!(!e||!e.__CANCEL__)}function we(e,t,r){O.call(this,null==e?"canceled":e,O.ERR_CANCELED,t,r),this.name="CanceledError"}w.inherits(we,O,{__CANCEL__:!0});const P=we;const Ee=R.hasStandardBrowserEnv?{write(e,t,r,n,o,i){e=[e+"="+encodeURIComponent(t)];w.isNumber(r)&&e.push("expires="+new Date(r).toGMTString()),w.isString(n)&&e.push("path="+n),w.isString(o)&&e.push("domain="+o),!0===i&&e.push("secure"),document.cookie=e.join("; ")},read(e){e=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Oe(e,t){var r;return e&&!/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)?(e=e,(r=t)?e.replace(/\/?\/$/,"")+"/"+r.replace(/^\/+/,""):e):t}const ve=R.hasStandardBrowserEnv?function(){const r=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let t;function o(e){let t=e;return r&&(n.setAttribute("href",t),t=n.href),n.setAttribute("href",t),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=o(window.location.href),function(e){e=w.isString(e)?o(e):e;return e.protocol===t.protocol&&e.host===t.host}}():function(){return!0};const Se=function(i,s){i=i||10;const a=new Array(i),c=new Array(i);let u=0,l=0,f;return s=void 0!==s?s:1e3,function(e){var t=Date.now(),r=c[l];f=f||t,a[u]=e,c[u]=t;let n=l,o=0;for(;n!==u;)o+=a[n++],n%=i;return(u=(u+1)%i)===l&&(l=(l+1)%i),!(t-f<s)&&(e=r&&t-r)?Math.round(1e3*o/e):void 0}};function Re(s,a){let c=0;const u=Se(50,250);return e=>{var t=e.loaded,r=e.lengthComputable?e.total:void 0,n=t-c,o=u(n),i=t<=r,n={loaded:c=t,total:r,progress:r?t/r:void 0,bytes:n,rate:o||void 0,estimated:o&&r&&i?(r-t)/o:void 0,event:e};n[a?"download":"upload"]=!0,s(n)}}const Ae={http:null,xhr:"undefined"!=typeof XMLHttpRequest&&function(d){return new Promise(function(o,i){var e=d.data,t=x.from(d.headers).normalize();let{responseType:s,withXSRFToken:r}=d,n;function a(){d.cancelToken&&d.cancelToken.unsubscribe(n),d.signal&&d.signal.removeEventListener("abort",n)}w.isFormData(e)&&(R.hasStandardBrowserEnv||R.hasStandardBrowserWebWorkerEnv?t.setContentType(!1):!1!==(u=t.getContentType())&&([u,...f]=u?u.split(";").map(e=>e.trim()).filter(Boolean):[],t.setContentType([u||"multipart/form-data",...f].join("; "))));let c=new XMLHttpRequest;d.auth&&(u=d.auth.username||"",f=d.auth.password?unescape(encodeURIComponent(d.auth.password)):"",t.set("Authorization","Basic "+btoa(u+":"+f)));var u=Oe(d.baseURL,d.url);function l(){var e,t,r,n;c&&(r=x.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),r={data:s&&"text"!==s&&"json"!==s?c.response:c.responseText,status:c.status,statusText:c.statusText,headers:r,config:d,request:c},e=function(e){o(e),a()},t=function(e){i(e),a()},n=(r=r).config.validateStatus,r.status&&n&&!n(r.status)?t(new O("Request failed with status code "+r.status,[O.ERR_BAD_REQUEST,O.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):e(r),c=null)}c.open(d.method.toUpperCase(),ae(u,d.params,d.paramsSerializer),!0),c.timeout=d.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(i(new O("Request aborted",O.ECONNABORTED,d,c)),c=null)},c.onerror=function(){i(new O("Network Error",O.ERR_NETWORK,d,c)),c=null},c.ontimeout=function(){let e=d.timeout?"timeout of "+d.timeout+"ms exceeded":"timeout exceeded";var t=d.transitional||ue;d.timeoutErrorMessage&&(e=d.timeoutErrorMessage),i(new O(e,t.clarifyTimeoutError?O.ETIMEDOUT:O.ECONNABORTED,d,c)),c=null},R.hasStandardBrowserEnv&&((r=r&&w.isFunction(r)?r(d):r)||!1!==r&&ve(u))&&(f=d.xsrfHeaderName&&d.xsrfCookieName&&Ee.read(d.xsrfCookieName))&&t.set(d.xsrfHeaderName,f),void 0===e&&t.setContentType(null),"setRequestHeader"in c&&w.forEach(t.toJSON(),function(e,t){c.setRequestHeader(t,e)}),w.isUndefined(d.withCredentials)||(c.withCredentials=!!d.withCredentials),s&&"json"!==s&&(c.responseType=d.responseType),"function"==typeof d.onDownloadProgress&&c.addEventListener("progress",Re(d.onDownloadProgress,!0)),"function"==typeof d.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",Re(d.onUploadProgress)),(d.cancelToken||d.signal)&&(n=e=>{c&&(i(!e||e.type?new P(null,d,c):e),c.abort(),c=null)},d.cancelToken&&d.cancelToken.subscribe(n),d.signal)&&(d.signal.aborted?n():d.signal.addEventListener("abort",n));var f,t=(f=/^([-+\w]{1,25})(:?\/\/|:)/.exec(f=u))&&f[1]||"";t&&-1===R.protocols.indexOf(t)?i(new O("Unsupported protocol "+t+":",O.ERR_BAD_REQUEST,d)):c.send(e||null)})}},Te=(w.forEach(Ae,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(e){}Object.defineProperty(e,"adapterName",{value:t})}}),e=>"- "+e),je={getAdapter:r=>{var n,e=(r=w.isArray(r)?r:[r])["length"];let o;var i,t,s={};for(let t=0;t<e;t++){n=r[t];let e;if(o=n,i=n,!w.isFunction(i)&&null!==i&&!1!==i&&void 0===(o=Ae[(e=String(n)).toLowerCase()]))throw new O(`Unknown adapter '${e}'`);if(o)break;s[e||"#"+t]=o}if(o)return o;throw t=Object.entries(s).map(([e,t])=>`adapter ${e} `+(!1===t?"is not supported by the environment":"is not available in the build")),t=e?1<t.length?"since :\n"+t.map(Te).join("\n"):" "+Te(t[0]):"as no adapter specified",new O("There is no suitable adapter to dispatch the request "+t,"ERR_NOT_SUPPORT")},adapters:Ae};function Ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new P(null,e)}function Ce(t){return Ne(t),t.headers=x.from(t.headers),t.data=ge.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1),je.getAdapter(t.adapter||T.adapter)(t).then(function(e){return Ne(t),e.data=ge.call(t,t.transformResponse,e),e.headers=x.from(e.headers),e},function(e){return be(e)||(Ne(t),e&&e.response&&(e.response.data=ge.call(t,t.transformResponse,e.response),e.response.headers=x.from(e.response.headers))),Promise.reject(e)})}const xe=e=>e instanceof x?e.toJSON():e;function _(n,o){o=o||{};const i={};function s(e,t,r){return w.isPlainObject(e)&&w.isPlainObject(t)?w.merge.call({caseless:r},e,t):w.isPlainObject(t)?w.merge({},t):w.isArray(t)?t.slice():t}function a(e,t,r){return w.isUndefined(t)?w.isUndefined(e)?void 0:s(void 0,e,r):s(e,t,r)}function e(e,t){if(!w.isUndefined(t))return s(void 0,t)}function t(e,t){return w.isUndefined(t)?w.isUndefined(e)?void 0:s(void 0,e):s(void 0,t)}function c(e,t,r){return r in o?s(e,t):r in n?s(void 0,e):void 0}const u={url:e,method:e,data:e,baseURL:t,transformRequest:t,transformResponse:t,paramsSerializer:t,timeout:t,timeoutMessage:t,withCredentials:t,withXSRFToken:t,adapter:t,responseType:t,xsrfCookieName:t,xsrfHeaderName:t,onUploadProgress:t,onDownloadProgress:t,decompress:t,maxContentLength:t,maxBodyLength:t,beforeRedirect:t,transport:t,httpAgent:t,httpsAgent:t,cancelToken:t,socketPath:t,responseEncoding:t,validateStatus:c,headers:(e,t)=>a(xe(e),xe(t),!0)};return w.forEach(Object.keys(Object.assign({},n,o)),function(e){var t=u[e]||a,r=t(n[e],o[e],e);w.isUndefined(r)&&t!==c||(i[e]=r)}),i}const Pe={},_e=(["object","boolean","number","function","string","symbol"].forEach((t,r)=>{Pe[t]=function(e){return typeof e===t||"a"+(r<1?"n ":" ")+t}}),{});Pe.transitional=function(n,o,r){function i(e,t){return"[Axios v1.6.5] Transitional option '"+e+"'"+t+(r?". "+r:"")}return(e,t,r)=>{if(!1===n)throw new O(i(t," has been removed"+(o?" in "+o:"")),O.ERR_DEPRECATED);return o&&!_e[t]&&(_e[t]=!0,console.warn(i(t," has been deprecated since v"+o+" and will be removed in the near future"))),!n||n(e,t,r)}};const Fe={assertOptions:function(e,t,r){if("object"!=typeof e)throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);var n=Object.keys(e);let o=n.length;for(;0<o--;){var i=n[o],s=t[i];if(s){var a=e[i],s=void 0===a||s(a,i,e);if(!0!==s)throw new O("option "+i+" must be "+s,O.ERR_BAD_OPTION_VALUE)}else if(!0!==r)throw new O("Unknown option "+i,O.ERR_BAD_OPTION)}},validators:Pe},F=Fe.validators;class U{constructor(e){this.defaults=e,this.interceptors={request:new ce,response:new ce}}request(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{};const{transitional:r,paramsSerializer:n,headers:o}=t=_(this.defaults,t);void 0!==r&&Fe.assertOptions(r,{silentJSONParsing:F.transitional(F.boolean),forcedJSONParsing:F.transitional(F.boolean),clarifyTimeoutError:F.transitional(F.boolean)},!1),null!=n&&(w.isFunction(n)?t.paramsSerializer={serialize:n}:Fe.assertOptions(n,{encode:F.function,serialize:F.function},!0)),t.method=(t.method||this.defaults.method||"get").toLowerCase();e=o&&w.merge(o.common,o[t.method]);o&&w.forEach(["delete","get","head","post","put","patch","common"],e=>{delete o[e]}),t.headers=x.concat(e,o);const i=[];let s=!0;this.interceptors.request.forEach(function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(s=s&&e.synchronous,i.unshift(e.fulfilled,e.rejected))});const a=[];this.interceptors.response.forEach(function(e){a.push(e.fulfilled,e.rejected)});let c,u=0,l;if(s){l=i.length;let e=t;for(u=0;u<l;){var f=i[u++],d=i[u++];try{e=f(e)}catch(e){d.call(this,e);break}}try{c=Ce.call(this,e)}catch(e){return Promise.reject(e)}for(u=0,l=a.length;u<l;)c=c.then(a[u++],a[u++])}else{var p=[Ce.bind(this),void 0];for(p.unshift.apply(p,i),p.push.apply(p,a),l=p.length,c=Promise.resolve(t);u<l;)c=c.then(p[u++],p[u++])}return c}getUri(e){return ae(Oe((e=_(this.defaults,e)).baseURL,e.url),e.params,e.paramsSerializer)}}w.forEach(["delete","get","head","options"],function(r){U.prototype[r]=function(e,t){return this.request(_(t||{},{method:r,url:e,data:(t||{}).data}))}}),w.forEach(["post","put","patch"],function(o){function e(n){return function(e,t,r){return this.request(_(r||{},{method:o,headers:n?{"Content-Type":"multipart/form-data"}:{},url:e,data:t}))}}U.prototype[o]=e(),U.prototype[o+"Form"]=e(!0)});const B=U;d=class Le{constructor(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(e){n=e});const o=this;this.promise.then(t=>{if(o._listeners){let e=o._listeners.length;for(;0<e--;)o._listeners[e](t);o._listeners=null}}),this.promise.then=e=>{let t;return(e=new Promise(e=>{o.subscribe(e),t=e}).then(e)).cancel=function(){o.unsubscribe(t)},e},e(function(e,t,r){o.reason||(o.reason=new P(e,t,r),n(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){this._listeners&&-1!==(e=this._listeners.indexOf(e))&&this._listeners.splice(e,1)}static source(){let t;return{token:new Le(function(e){t=e}),cancel:t}}};const Ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ue).forEach(([e,t])=>{Ue[t]=e});p=Ue;y=function t(r){var e=new B(r),n=D(B.prototype.request,e);return w.extend(n,B.prototype,e,{allOwnKeys:!0}),w.extend(n,e,null,{allOwnKeys:!0}),n.create=function(e){return t(_(r,e))},n}(T);y.Axios=B,y.CanceledError=P,y.CancelToken=d,y.isCancel=be,y.VERSION="1.6.5",y.toFormData=S,y.AxiosError=O,y.Cancel=y.CanceledError,y.all=function(e){return Promise.all(e)},y.spread=function(t){return function(e){return t.apply(null,e)}},y.isAxiosError=function(e){return w.isObject(e)&&!0===e.isAxiosError},y.mergeConfig=_,y.AxiosHeaders=x,y.formToJSON=e=>pe(w.isHTMLForm(e)?new FormData(e):e),y.getAdapter=je.getAdapter,y.HttpStatusCode=p;const Be=y.default=y}}]);