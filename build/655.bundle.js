/*! For license information please see 655.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkcryptique=self.webpackChunkcryptique||[]).push([[655],{655:(e,t,r)=>{r.d(t,{VK:()=>function(e){var{basename:e,children:t,future:r,window:n}=e,o=b.useRef();null==o.current&&(o.current=(0,C.lX)({window:n,v5Compat:!0}));let a=o.current,[u,l]=b.useState({action:a.action,location:a.location}),i=(r||{})["v7_startTransition"],s=b.useCallback(e=>{i&&c?c(()=>l(e)):l(e)},[l,i]);return b.useLayoutEffect(()=>a.listen(s),[a,s]),b.createElement(g.F0,{basename:e,children:t,location:u.location,navigationType:u.action,navigator:a,future:r})},rU:()=>o});var n,b=r(294),t=r(935),g=r(250),C=r(599);function E(){return(E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};for(var r,n={},o=Object.keys(e),a=0;a<o.length;a++)r=o[a],0<=t.indexOf(r)||(n[r]=e[r]);return n}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const R=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"];new Map;const c=(n=n||r.t(b,2)).startTransition;r.t(t,2).flushSync;(n=n||r.t(b,2)).useId;const _="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement,w=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,o=b.forwardRef(function(e,t){let{onClick:r,relative:n,reloadDocument:o,replace:a,state:u,target:l,to:i,preventScrollReset:s,unstable_viewTransition:c}=e,p=S(e,R);e=b.useContext(g.Us).basename;let f,d=!1;if("string"==typeof i&&w.test(i)&&(f=i,_))try{var h=new URL(window.location.href),v=i.startsWith("//")?new URL(h.protocol+i):new URL(i),m=(0,C.Zn)(v.pathname,e);v.origin===h.origin&&null!=m?i=m+v.search+v.hash:d=!0}catch(e){}e=(0,g.oQ)(i,{relative:n});let y=function(n,e){let{target:o,replace:a,state:u,preventScrollReset:l,relative:i,unstable_viewTransition:s}=void 0===e?{}:e,c=(0,g.s0)(),p=(0,g.TH)(),f=(0,g.WU)(n,{relative:i});return b.useCallback(e=>{var t,r;t=e,r=o,0!==t.button||r&&"_self"!==r||(r=t).metaKey||r.altKey||r.ctrlKey||r.shiftKey||(e.preventDefault(),t=void 0!==a?a:(0,C.Ep)(p)===(0,C.Ep)(f),c(n,{replace:t,state:u,preventScrollReset:l,relative:i,unstable_viewTransition:s}))},[p,c,f,a,u,o,n,l,i,s])}(i,{replace:a,state:u,target:l,preventScrollReset:s,relative:n,unstable_viewTransition:c});return b.createElement("a",E({},p,{href:f||e,onClick:d||o?r:function(e){r&&r(e),e.defaultPrevented||y(e)},ref:t,target:l}))});var a,u;(t=a=a||{}).UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState",(r=u=u||{}).UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"},250:(e,t,r)=>{r.d(t,{AW:()=>O,F0:()=>P,TH:()=>d,Us:()=>b,WU:()=>p,Z5:()=>function(e){var{children:e,location:t}=e;return function(e,t){return u(e,t)}(function n(e,o){void 0===o&&(o=[]);let a=[];v.Children.forEach(e,(r,e)=>{if(v.isValidElement(r)){let t=[...o,e];if(r.type===v.Fragment)a.push.apply(a,n(r.props.children,t));else{r.type!==O&&(0,m.J0)(!1),r.props.index&&r.props.children&&(0,m.J0)(!1);let e={id:r.props.id||t.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:null!=r.props.ErrorBoundary||null!=r.props.errorElement,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(e.children=n(r.props.children,t)),a.push(e)}}});return a}(e),t)},oQ:()=>function(e,t){let r=(void 0===t?{}:t)["relative"],{basename:n,navigator:o}=(C()||(0,m.J0)(!1),v.useContext(b)),{hash:a,pathname:u,search:l}=p(e,{relative:r}),i=u;"/"!==n&&(i="/"===u?n:(0,m.RQ)([n,u]));return o.createHref({pathname:i,search:l,hash:a})},s0:()=>a});var v=r(294),m=r(599);function y(){return(y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r,n=arguments[t];for(r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const s=v.createContext(null),n=v.createContext(null),b=v.createContext(null),g=v.createContext(null),f=v.createContext({outlet:null,matches:[],isDataRoute:!1}),o=v.createContext(null);function C(){return null!=v.useContext(g)}function d(){return C()||(0,m.J0)(!1),v.useContext(g).location}function c(e){v.useContext(b).static||v.useLayoutEffect(e)}function a(){var e=v.useContext(f)["isDataRoute"];return(e?function(){let r=w(i.UseNavigateStable)["router"],n=k(_.UseNavigateStable),o=v.useRef(!1),e=(c(()=>{o.current=!0}),v.useCallback(function(e,t){void 0===t&&(t={}),o.current&&("number"==typeof e?r.navigate(e):r.navigate(e,y({fromRouteId:n},t)))},[r,n]));return e}:function(){C()||(0,m.J0)(!1);let r=v.useContext(s),{basename:n,future:e,navigator:o}=v.useContext(b),t=v.useContext(f)["matches"],a=d()["pathname"],u=JSON.stringify((0,m.cm)(t,e.v7_relativeSplatPath)),l=v.useRef(!1),i=(c(()=>{l.current=!0}),v.useCallback(function(e,t){void 0===t&&(t={}),l.current&&("number"==typeof e?o.go(e):(e=(0,m.pC)(e,JSON.parse(u),a,"path"===t.relative),null==r&&"/"!==n&&(e.pathname="/"===e.pathname?n:(0,m.RQ)([n,e.pathname])),(t.replace?o.replace:o.push)(e,t.state,t)))},[n,o,u,a,r]));return i})()}function p(e,t){let r=(void 0===t?{}:t)["relative"];var t=v.useContext(b)["future"],n=v.useContext(f)["matches"];let o=d()["pathname"],a=JSON.stringify((0,m.cm)(n,t.v7_relativeSplatPath));return v.useMemo(()=>(0,m.pC)(e,JSON.parse(a),o,"path"===r),[e,a,o,r])}function u(e,t,r,n){C()||(0,m.J0)(!1);let o=v.useContext(b)["navigator"];var a=v.useContext(f)["matches"],u=a[a.length-1];let l=u?u.params:{};u&&u.pathname;let i=u?u.pathnameBase:"/";u&&u.route;u=d();let s;var c=(s=t?(p="string"==typeof t?(0,m.cP)(t):t,"/"===i||null!=(c=p.pathname)&&c.startsWith(i)||(0,m.J0)(!1),p):u).pathname||"/",p="/"===i?c:c.slice(i.length)||"/",u=(0,m.fp)(e,{pathname:p}),c=h(u&&u.map(e=>Object.assign({},e,{params:Object.assign({},l,e.params),pathname:(0,m.RQ)([i,(o.encodeLocation?o.encodeLocation(e.pathname):e).pathname]),pathnameBase:"/"===e.pathnameBase?i:(0,m.RQ)([i,o.encodeLocation?o.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,r,n);return t&&c?v.createElement(g.Provider,{value:{location:y({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:m.aU.Pop}},c):c}function l(){r=v.useContext(o),e=x(_.UseRouteError),t=k(_.UseRouteError);var e=void 0===r?null==(e=e.errors)?void 0:e[t]:r,t=(0,m.WK)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,e="rgba(200,200,200, 0.5)";return v.createElement(v.Fragment,null,v.createElement("h2",null,"Unexpected Application Error!"),v.createElement("h3",{style:{fontStyle:"italic"}},t),r?v.createElement("pre",{style:{padding:"0.5rem",backgroundColor:e}},r):null,null)}const E=v.createElement(l,null);class S extends v.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:(void 0!==e.error?e:t).error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?v.createElement(f.Provider,{value:this.props.routeContext},v.createElement(o.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function R(e){var{routeContext:e,match:t,children:r}=e,n=v.useContext(s);return n&&n.static&&n.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(n.staticContext._deepestRenderedBoundaryId=t.route.id),v.createElement(f.Provider,{value:e},r)}function h(e,s,c,t){if(void 0===s&&(s=[]),void 0===c&&(c=null),void 0===t&&(t=null),null==e){if(null==c||!c.errors)return null;e=c.matches}let p=e,f=null==c?void 0:c.errors,d=(null!=f&&(0<=(e=p.findIndex(e=>e.route.id&&(null==f?void 0:f[e.route.id])))||(0,m.J0)(!1),p=p.slice(0,Math.min(p.length,e+1))),!1),h=-1;if(c&&t&&t.v7_partialHydration)for(let e=0;e<p.length;e++){var r=p[e];if((r.route.HydrateFallback||r.route.hydrateFallbackElement)&&(h=e),r.route.id){var{loaderData:n,errors:o}=c,n=r.route.loader&&void 0===n[r.route.id]&&(!o||void 0===o[r.route.id]);if(r.route.lazy||n){d=!0,p=0<=h?p.slice(0,h+1):[p[0]];break}}}return p.reduceRight((t,r,e)=>{let n,o=!1,a=null,u=null;c&&(n=f&&r.route.id?f[r.route.id]:void 0,a=r.route.errorElement||E,d)&&(h<0&&0===e?((i="route-fallback")&&!U[i]&&(U[i]=!0),o=!0,u=null):h===e&&(o=!0,u=r.route.hydrateFallbackElement||null));let l=s.concat(p.slice(0,e+1));var i=()=>{let e;return e=n?a:o?u:r.route.Component?v.createElement(r.route.Component,null):r.route.element||t,v.createElement(R,{match:r,routeContext:{outlet:t,matches:l,isDataRoute:null!=c},children:e})};return c&&(r.route.ErrorBoundary||r.route.errorElement||0===e)?v.createElement(S,{location:c.location,revalidation:c.revalidation,component:a,error:n,children:i(),routeContext:{outlet:null,matches:l,isDataRoute:!0}}):i()},null)}var i=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(i||{}),_=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(_||{});function w(){var e=v.useContext(s);return e||(0,m.J0)(!1),e}function x(){var e=v.useContext(n);return e||(0,m.J0)(!1),e}function k(){(e=v.useContext(f))||(0,m.J0)(!1);var e=e.matches[e.matches.length-1];return e.route.id||(0,m.J0)(!1),e.route.id}const U={};r.t(v,2).startTransition;function O(e){(0,m.J0)(!1)}function P(e){let{basename:t="/",children:r=null,location:n,navigationType:o=m.aU.Pop,navigator:a,static:u=!1,future:l}=e,i=(C()&&(0,m.J0)(!1),t.replace(/^\/*/,"/"));e=v.useMemo(()=>({basename:i,navigator:a,static:u,future:y({v7_relativeSplatPath:!1},l)}),[i,l,a,u]);let{pathname:s="/",search:c="",hash:p="",state:f=null,key:d="default"}=n="string"==typeof n?(0,m.cP)(n):n;var h=v.useMemo(()=>{var e=(0,m.Zn)(s,i);return null==e?null:{location:{pathname:e,search:c,hash:p,state:f,key:d},navigationType:o}},[i,s,c,p,f,d,o]);return null==h?null:v.createElement(b.Provider,{value:e},v.createElement(g.Provider,{children:r,value:h}))}new Promise(()=>{});(class extends v.Component{})},408:(e,t)=>{var p=Symbol.for("react.element"),f=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),u=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),i=Symbol.for("react.suspense"),s=Symbol.for("react.memo"),c=Symbol.for("react.lazy"),d=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}function b(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=y.prototype;var C=g.prototype=new b,E=(C.constructor=g,v(C,y.prototype),C.isPureReactComponent=!0,Array.isArray),S=Object.prototype.hasOwnProperty,R={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function w(e,t,r){var n,o={},a=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(a=""+t.key),t)S.call(t,n)&&!_.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];o.children=i}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:p,type:e,key:a,ref:u,props:o,_owner:R.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===p}var k=/\/+/g;function U(e,t){return"object"==typeof e&&null!==e&&null!=e.key?(e=""+e.key,r={"=":"=0",":":"=2"},"$"+e.replace(/[=:]/g,function(e){return r[e]})):t.toString(36);var r}function O(e,t,r,n,o){var a,u,l=!1;if(null===(e="undefined"!==(s=typeof e)&&"boolean"!==s?e:null))l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case p:case f:l=!0}}if(l)return o=o(l=e),e=""===n?"."+U(l,0):n,E(o)?(r="",O(o,t,r=null!=e?e.replace(k,"$&/")+"/":r,"",function(e){return e})):null!=o&&(x(o)&&(u=r+(!(a=o).key||l&&l.key===o.key?"":(""+o.key).replace(k,"$&/")+"/")+e,o={$$typeof:p,type:a.type,key:u,ref:a.ref,props:a.props,_owner:a._owner}),t.push(o)),1;if(l=0,n=""===n?".":n+":",E(e))for(var i=0;i<e.length;i++){var s,c=n+U(s=e[i],i);l+=O(s,t,r,c,o)}else if("function"==typeof(c=null!==(u=e)&&"object"==typeof u&&"function"==typeof(u=d&&u[d]||u["@@iterator"])?u:null))for(e=c.call(e),i=0;!(s=e.next()).done;)l+=O(s=s.value,t,r,c=n+U(s,i++),o);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function P(e,t,r){var n;return null==e||(n=0,O(e,e=[],"","",function(e){return t.call(r,e,n++)})),e}function j(t){var e;if(-1===t._status&&((e=(e=t._result)()).then(function(e){0!==t._status&&-1!==t._status||(t._status=1,t._result=e)},function(e){0!==t._status&&-1!==t._status||(t._status=2,t._result=e)}),-1===t._status)&&(t._status=0,t._result=e),1===t._status)return t._result.default;throw t._result}var T={current:null},D={transition:null},C={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:D,ReactCurrentOwner:R};t.Children={map:P,forEach:function(e,t,r){P(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(x(e))return e;throw Error("React.Children.only expected to receive a single React element child.")}},t.Component=y,t.Fragment=r,t.Profiler=o,t.PureComponent=g,t.StrictMode=n,t.Suspense=i,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=v({},e.props),o=e.key,a=e.ref,u=e._owner;if(null!=t)for(l in void 0!==t.ref&&(a=t.ref,u=R.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps&&(i=e.type.defaultProps),t)S.call(t,l)&&!_.hasOwnProperty(l)&&(n[l]=(void 0===t[l]&&void 0!==i?i:t)[l]);var l=arguments.length-2;if(1===l)n.children=r;else if(1<l){for(var i=Array(l),s=0;s<l;s++)i[s]=arguments[s+2];n.children=i}return{$$typeof:p,type:e.type,key:o,ref:a,props:n,_owner:u}},t.createContext=function(e){return(e={$$typeof:u,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:a,_context:e},e.Consumer=e},t.createElement=w,t.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=x,t.lazy=function(e){return{$$typeof:c,_payload:{_status:-1,_result:e},_init:j}},t.memo=function(e,t){return{$$typeof:s,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=D.transition;D.transition={};try{e()}finally{D.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return T.current.useCallback(e,t)},t.useContext=function(e){return T.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return T.current.useDeferredValue(e)},t.useEffect=function(e,t){return T.current.useEffect(e,t)},t.useId=function(){return T.current.useId()},t.useImperativeHandle=function(e,t,r){return T.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return T.current.useMemo(e,t)},t.useReducer=function(e,t,r){return T.current.useReducer(e,t,r)},t.useRef=function(e){return T.current.useRef(e)},t.useState=function(e){return T.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return T.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return T.current.useTransition()},t.version="18.2.0"},294:(e,t,r)=>{e.exports=r(408)}}]);