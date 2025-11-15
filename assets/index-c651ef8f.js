function k0(e,t){for(var n=0;n<t.length;n++){const l=t[n];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(l,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function U0(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bf={exports:{}},hr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H0=Symbol.for("react.transitional.element"),B0=Symbol.for("react.fragment");function Yf(e,t,n){var l=null;if(n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:H0,type:e,key:l,ref:t!==void 0?t:null,props:n}}hr.Fragment=B0;hr.jsx=Yf;hr.jsxs=Yf;Bf.exports=hr;var s=Bf.exports,Lf={exports:{}},H={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jc=Symbol.for("react.transitional.element"),Y0=Symbol.for("react.portal"),L0=Symbol.for("react.fragment"),q0=Symbol.for("react.strict_mode"),G0=Symbol.for("react.profiler"),X0=Symbol.for("react.consumer"),V0=Symbol.for("react.context"),Q0=Symbol.for("react.forward_ref"),Z0=Symbol.for("react.suspense"),K0=Symbol.for("react.memo"),qf=Symbol.for("react.lazy"),J0=Symbol.for("react.activity"),qu=Symbol.iterator;function $0(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var Gf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xf=Object.assign,Vf={};function _l(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||Gf}_l.prototype.isReactComponent={};_l.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_l.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qf(){}Qf.prototype=_l.prototype;function Tc(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||Gf}var _c=Tc.prototype=new Qf;_c.constructor=Tc;Xf(_c,_l.prototype);_c.isPureReactComponent=!0;var Gu=Array.isArray;function Ao(){}var ae={H:null,A:null,T:null,S:null},Zf=Object.prototype.hasOwnProperty;function Cc(e,t,n){var l=n.ref;return{$$typeof:jc,type:e,key:t,ref:l!==void 0?l:null,props:n}}function W0(e,t){return Cc(e.type,t,e.props)}function Mc(e){return typeof e=="object"&&e!==null&&e.$$typeof===jc}function F0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xu=/\/+/g;function Hr(e,t){return typeof e=="object"&&e!==null&&e.key!=null?F0(""+e.key):t.toString(36)}function I0(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(Ao,Ao):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function $n(e,t,n,l,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(i){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case jc:case Y0:r=!0;break;case qf:return r=e._init,$n(r(e._payload),t,n,l,a)}}if(r)return a=a(e),r=l===""?"."+Hr(e,0):l,Gu(a)?(n="",r!=null&&(n=r.replace(Xu,"$&/")+"/"),$n(a,t,n,"",function(u){return u})):a!=null&&(Mc(a)&&(a=W0(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Xu,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=l===""?".":l+":";if(Gu(e))for(var c=0;c<e.length;c++)l=e[c],i=o+Hr(l,c),r+=$n(l,t,n,i,a);else if(c=$0(e),typeof c=="function")for(e=c.call(e),c=0;!(l=e.next()).done;)l=l.value,i=o+Hr(l,c++),r+=$n(l,t,n,i,a);else if(i==="object"){if(typeof e.then=="function")return $n(I0(e),t,n,l,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function Ja(e,t,n){if(e==null)return e;var l=[],a=0;return $n(e,l,"","",function(i){return t.call(n,i,a++)}),l}function P0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},eg={map:Ja,forEach:function(e,t,n){Ja(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Ja(e,function(){t++}),t},toArray:function(e){return Ja(e,function(t){return t})||[]},only:function(e){if(!Mc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Activity=J0;H.Children=eg;H.Component=_l;H.Fragment=L0;H.Profiler=G0;H.PureComponent=Tc;H.StrictMode=q0;H.Suspense=Z0;H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae;H.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ae.H.useMemoCache(e)}};H.cache=function(e){return function(){return e.apply(null,arguments)}};H.cacheSignal=function(){return null};H.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=Xf({},e.props),a=e.key;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)!Zf.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(l[i]=t[i]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var r=Array(i),o=0;o<i;o++)r[o]=arguments[o+2];l.children=r}return Cc(e.type,a,l)};H.createContext=function(e){return e={$$typeof:V0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:X0,_context:e},e};H.createElement=function(e,t,n){var l,a={},i=null;if(t!=null)for(l in t.key!==void 0&&(i=""+t.key),t)Zf.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(a[l]=t[l]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),c=0;c<r;c++)o[c]=arguments[c+2];a.children=o}if(e&&e.defaultProps)for(l in r=e.defaultProps,r)a[l]===void 0&&(a[l]=r[l]);return Cc(e,i,a)};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:Q0,render:e}};H.isValidElement=Mc;H.lazy=function(e){return{$$typeof:qf,_payload:{_status:-1,_result:e},_init:P0}};H.memo=function(e,t){return{$$typeof:K0,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=ae.T,n={};ae.T=n;try{var l=e(),a=ae.S;a!==null&&a(n,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(Ao,Vu)}catch(i){Vu(i)}finally{t!==null&&n.types!==null&&(t.types=n.types),ae.T=t}};H.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()};H.use=function(e){return ae.H.use(e)};H.useActionState=function(e,t,n){return ae.H.useActionState(e,t,n)};H.useCallback=function(e,t){return ae.H.useCallback(e,t)};H.useContext=function(e){return ae.H.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e,t){return ae.H.useDeferredValue(e,t)};H.useEffect=function(e,t){return ae.H.useEffect(e,t)};H.useEffectEvent=function(e){return ae.H.useEffectEvent(e)};H.useId=function(){return ae.H.useId()};H.useImperativeHandle=function(e,t,n){return ae.H.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return ae.H.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return ae.H.useLayoutEffect(e,t)};H.useMemo=function(e,t){return ae.H.useMemo(e,t)};H.useOptimistic=function(e,t){return ae.H.useOptimistic(e,t)};H.useReducer=function(e,t,n){return ae.H.useReducer(e,t,n)};H.useRef=function(e){return ae.H.useRef(e)};H.useState=function(e){return ae.H.useState(e)};H.useSyncExternalStore=function(e,t,n){return ae.H.useSyncExternalStore(e,t,n)};H.useTransition=function(){return ae.H.useTransition()};H.version="19.2.0";Lf.exports=H;var y=Lf.exports;const tg=U0(y),Kf=k0({__proto__:null,default:tg},[y]);var Jf={exports:{}},mr={},$f={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,D){var A=E.length;E.push(D);e:for(;0<A;){var I=A-1>>>1,oe=E[I];if(0<a(oe,D))E[I]=D,E[A]=oe,A=I;else break e}}function n(E){return E.length===0?null:E[0]}function l(E){if(E.length===0)return null;var D=E[0],A=E.pop();if(A!==D){E[0]=A;e:for(var I=0,oe=E.length,bn=oe>>>1;I<bn;){var qt=2*(I+1)-1,be=E[qt],fe=qt+1,xt=E[fe];if(0>a(be,A))fe<oe&&0>a(xt,be)?(E[I]=xt,E[fe]=A,I=fe):(E[I]=be,E[qt]=A,I=qt);else if(fe<oe&&0>a(xt,A))E[I]=xt,E[fe]=A,I=fe;else break e}}return D}function a(E,D){var A=E.sortIndex-D.sortIndex;return A!==0?A:E.id-D.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var c=[],u=[],d=1,h=null,f=3,v=!1,x=!1,S=!1,z=!1,g=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;function b(E){for(var D=n(u);D!==null;){if(D.callback===null)l(u);else if(D.startTime<=E)l(u),D.sortIndex=D.expirationTime,t(c,D);else break;D=n(u)}}function T(E){if(S=!1,b(E),!x)if(n(c)!==null)x=!0,O||(O=!0,k());else{var D=n(u);D!==null&&V(T,D.startTime-E)}}var O=!1,j=-1,N=5,_=-1;function R(){return z?!0:!(e.unstable_now()-_<N)}function te(){if(z=!1,O){var E=e.unstable_now();_=E;var D=!0;try{e:{x=!1,S&&(S=!1,m(j),j=-1),v=!0;var A=f;try{t:{for(b(E),h=n(c);h!==null&&!(h.expirationTime>E&&R());){var I=h.callback;if(typeof I=="function"){h.callback=null,f=h.priorityLevel;var oe=I(h.expirationTime<=E);if(E=e.unstable_now(),typeof oe=="function"){h.callback=oe,b(E),D=!0;break t}h===n(c)&&l(c),b(E)}else l(c);h=n(c)}if(h!==null)D=!0;else{var bn=n(u);bn!==null&&V(T,bn.startTime-E),D=!1}}break e}finally{h=null,f=A,v=!1}D=void 0}}finally{D?k():O=!1}}}var k;if(typeof p=="function")k=function(){p(te)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,re=Q.port2;Q.port1.onmessage=te,k=function(){re.postMessage(null)}}else k=function(){g(te,0)};function V(E,D){j=g(function(){E(e.unstable_now())},D)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(E){switch(f){case 1:case 2:case 3:var D=3;break;default:D=f}var A=f;f=D;try{return E()}finally{f=A}},e.unstable_requestPaint=function(){z=!0},e.unstable_runWithPriority=function(E,D){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var A=f;f=E;try{return D()}finally{f=A}},e.unstable_scheduleCallback=function(E,D,A){var I=e.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?I+A:I):A=I,E){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=A+oe,E={id:d++,callback:D,priorityLevel:E,startTime:A,expirationTime:oe,sortIndex:-1},A>I?(E.sortIndex=A,t(u,E),n(c)===null&&E===n(u)&&(S?(m(j),j=-1):S=!0,V(T,A-I))):(E.sortIndex=oe,t(c,E),x||v||(x=!0,O||(O=!0,k()))),E},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(E){var D=f;return function(){var A=f;f=D;try{return E.apply(this,arguments)}finally{f=A}}}})(Wf);$f.exports=Wf;var ng=$f.exports,Ff={exports:{}},ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg=y;function If(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Gt(){}var De={d:{f:Gt,r:function(){throw Error(If(522))},D:Gt,C:Gt,L:Gt,m:Gt,X:Gt,S:Gt,M:Gt},p:0,findDOMNode:null},ag=Symbol.for("react.portal");function ig(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ag,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}var Pl=lg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function gr(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=De;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(If(299));return ig(e,t,null,n)};ke.flushSync=function(e){var t=Pl.T,n=De.p;try{if(Pl.T=null,De.p=2,e)return e()}finally{Pl.T=t,De.p=n,De.d.f()}};ke.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,De.d.C(e,t))};ke.prefetchDNS=function(e){typeof e=="string"&&De.d.D(e)};ke.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,l=gr(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?De.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:a,fetchPriority:i}):n==="script"&&De.d.X(e,{crossOrigin:l,integrity:a,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};ke.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=gr(t.as,t.crossOrigin);De.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&De.d.M(e)};ke.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,l=gr(n,t.crossOrigin);De.d.L(e,n,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};ke.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=gr(t.as,t.crossOrigin);De.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else De.d.m(e)};ke.requestFormReset=function(e){De.d.r(e)};ke.unstable_batchedUpdates=function(e,t){return e(t)};ke.useFormState=function(e,t,n){return Pl.H.useFormState(e,t,n)};ke.useFormStatus=function(){return Pl.H.useHostTransitionStatus()};ke.version="19.2.0";function Pf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pf)}catch(e){console.error(e)}}Pf(),Ff.exports=ke;var rg=Ff.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se=ng,ed=y,og=rg;function w(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function td(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function _a(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ld(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qu(e){if(_a(e)!==e)throw Error(w(188))}function cg(e){var t=e.alternate;if(!t){if(t=_a(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Qu(a),e;if(i===l)return Qu(a),t;i=i.sibling}throw Error(w(188))}if(n.return!==l.return)n=a,l=i;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,l=i;break}if(o===l){r=!0,l=a,n=i;break}o=o.sibling}if(!r){for(o=i.child;o;){if(o===n){r=!0,n=i,l=a;break}if(o===l){r=!0,l=i,n=a;break}o=o.sibling}if(!r)throw Error(w(189))}}if(n.alternate!==l)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function ad(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ad(e),t!==null)return t;e=e.sibling}return null}var ie=Object.assign,ug=Symbol.for("react.element"),$a=Symbol.for("react.transitional.element"),Jl=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),jo=Symbol.for("react.profiler"),rd=Symbol.for("react.consumer"),_t=Symbol.for("react.context"),Oc=Symbol.for("react.forward_ref"),To=Symbol.for("react.suspense"),_o=Symbol.for("react.suspense_list"),Rc=Symbol.for("react.memo"),Vt=Symbol.for("react.lazy"),Co=Symbol.for("react.activity"),sg=Symbol.for("react.memo_cache_sentinel"),Zu=Symbol.iterator;function Ll(e){return e===null||typeof e!="object"?null:(e=Zu&&e[Zu]||e["@@iterator"],typeof e=="function"?e:null)}var fg=Symbol.for("react.client.reference");function Mo(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fg?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case jo:return"Profiler";case id:return"StrictMode";case To:return"Suspense";case _o:return"SuspenseList";case Co:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Jl:return"Portal";case _t:return e.displayName||"Context";case rd:return(e._context.displayName||"Context")+".Consumer";case Oc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Rc:return t=e.displayName||null,t!==null?t:Mo(e.type)||"Memo";case Vt:t=e._payload,e=e._init;try{return Mo(e(t))}catch{}}return null}var $l=Array.isArray,U=ed.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=og.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,jn={pending:!1,data:null,method:null,action:null},Oo=[],Pn=-1;function pt(e){return{current:e}}function Ae(e){0>Pn||(e.current=Oo[Pn],Oo[Pn]=null,Pn--)}function ee(e,t){Pn++,Oo[Pn]=e.current,e.current=t}var vt=pt(null),ha=pt(null),nn=pt(null),Ci=pt(null);function Mi(e,t){switch(ee(nn,t),ee(ha,e),ee(vt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Is(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Is(t),e=Am(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ae(vt),ee(vt,e)}function pl(){Ae(vt),Ae(ha),Ae(nn)}function Ro(e){e.memoizedState!==null&&ee(Ci,e);var t=vt.current,n=Am(t,e.type);t!==n&&(ee(ha,e),ee(vt,n))}function Oi(e){ha.current===e&&(Ae(vt),Ae(ha)),Ci.current===e&&(Ae(Ci),za._currentValue=jn)}var Br,Ku;function Sn(e){if(Br===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Br=t&&t[1]||"",Ku=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Br+e+Ku}var Yr=!1;function Lr(e,t){if(!e||Yr)return"";Yr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(v){var f=v}Reflect.construct(e,[],h)}else{try{h.call()}catch(v){f=v}e.call(h.prototype)}}else{try{throw Error()}catch(v){f=v}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(v){if(v&&f&&typeof v.stack=="string")return[v.stack,f.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],o=i[1];if(r&&o){var c=r.split(`
`),u=o.split(`
`);for(a=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(l===c.length||a===u.length)for(l=c.length-1,a=u.length-1;1<=l&&0<=a&&c[l]!==u[a];)a--;for(;1<=l&&0<=a;l--,a--)if(c[l]!==u[a]){if(l!==1||a!==1)do if(l--,a--,0>a||c[l]!==u[a]){var d=`
`+c[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=a);break}}}finally{Yr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Sn(n):""}function dg(e,t){switch(e.tag){case 26:case 27:case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return e.child!==t&&t!==null?Sn("Suspense Fallback"):Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 15:return Lr(e.type,!1);case 11:return Lr(e.type.render,!1);case 1:return Lr(e.type,!0);case 31:return Sn("Activity");default:return""}}function Ju(e){try{var t="",n=null;do t+=dg(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Do=Object.prototype.hasOwnProperty,Dc=Se.unstable_scheduleCallback,qr=Se.unstable_cancelCallback,hg=Se.unstable_shouldYield,mg=Se.unstable_requestPaint,Ke=Se.unstable_now,gg=Se.unstable_getCurrentPriorityLevel,od=Se.unstable_ImmediatePriority,cd=Se.unstable_UserBlockingPriority,Ri=Se.unstable_NormalPriority,vg=Se.unstable_LowPriority,ud=Se.unstable_IdlePriority,pg=Se.log,yg=Se.unstable_setDisableYieldValue,Ca=null,Je=null;function Wt(e){if(typeof pg=="function"&&yg(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(Ca,e)}catch{}}var $e=Math.clz32?Math.clz32:wg,bg=Math.log,xg=Math.LN2;function wg(e){return e>>>=0,e===0?32:31-(bg(e)/xg|0)|0}var Wa=256,Fa=262144,Ia=4194304;function En(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vr(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?a=En(l):(r&=o,r!==0?a=En(r):n||(n=o&~e,n!==0&&(a=En(n))))):(o=l&~i,o!==0?a=En(o):r!==0?a=En(r):n||(n=l&~e,n!==0&&(a=En(n)))),a===0?0:t!==0&&t!==a&&!(t&i)&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function Ma(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sd(){var e=Ia;return Ia<<=1,!(Ia&62914560)&&(Ia=4194304),e}function Gr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Oa(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Eg(e,t,n,l,a,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,c=e.expirationTimes,u=e.hiddenUpdates;for(n=r&~n;0<n;){var d=31-$e(n),h=1<<d;o[d]=0,c[d]=-1;var f=u[d];if(f!==null)for(u[d]=null,d=0;d<f.length;d++){var v=f[d];v!==null&&(v.lane&=-536870913)}n&=~h}l!==0&&fd(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function fd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-$e(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function dd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-$e(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function hd(e,t){var n=t&-t;return n=n&42?1:kc(n),n&(e.suspendedLanes|t)?0:n}function kc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Uc(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function md(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Hm(e.type))}function $u(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var pn=Math.random().toString(36).slice(2),Te="__reactFiber$"+pn,qe="__reactProps$"+pn,Cl="__reactContainer$"+pn,ko="__reactEvents$"+pn,zg="__reactListeners$"+pn,Ng="__reactHandles$"+pn,Wu="__reactResources$"+pn,Ra="__reactMarker$"+pn;function Hc(e){delete e[Te],delete e[qe],delete e[ko],delete e[zg],delete e[Ng]}function el(e){var t=e[Te];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cl]||n[Te]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lf(e);e!==null;){if(n=e[Te])return n;e=lf(e)}return t}e=n,n=e.parentNode}return null}function Ml(e){if(e=e[Te]||e[Cl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Wl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(w(33))}function sl(e){var t=e[Wu];return t||(t=e[Wu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ne(e){e[Ra]=!0}var gd=new Set,vd={};function Bn(e,t){yl(e,t),yl(e+"Capture",t)}function yl(e,t){for(vd[e]=t,e=0;e<t.length;e++)gd.add(t[e])}var Ag=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fu={},Iu={};function jg(e){return Do.call(Iu,e)?!0:Do.call(Fu,e)?!1:Ag.test(e)?Iu[e]=!0:(Fu[e]=!0,!1)}function mi(e,t,n){if(jg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function Pa(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function wt(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function et(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tg(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Uo(e){if(!e._valueTracker){var t=pd(e)?"checked":"value";e._valueTracker=Tg(e,t,""+e[t])}}function yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=pd(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function Di(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _g=/[\n"\\]/g;function lt(e){return e.replace(_g,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Ho(e,t,n,l,a,i,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+et(t)):e.value!==""+et(t)&&(e.value=""+et(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Bo(e,r,et(t)):n!=null?Bo(e,r,et(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+et(o):e.removeAttribute("name")}function bd(e,t,n,l,a,i,r,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Uo(e);return}n=n!=null?""+et(n):"",t=t!=null?""+et(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Uo(e)}function Bo(e,t,n){t==="number"&&Di(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function fl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+et(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function xd(e,t,n){if(t!=null&&(t=""+et(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+et(n):""}function wd(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(w(92));if($l(l)){if(1<l.length)throw Error(w(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=et(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Uo(e)}function bl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pu(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Cg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Sd(e,t,n){if(t!=null&&typeof t!="object")throw Error(w(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&Pu(e,a,l)}else for(var i in t)t.hasOwnProperty(i)&&Pu(e,i,t[i])}function Bc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Og=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function gi(e){return Og.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ct(){}var Yo=null;function Yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,dl=null;function es(e){var t=Ml(e);if(t&&(e=t.stateNode)){var n=e[qe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Ho(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+lt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[qe]||null;if(!a)throw Error(w(90));Ho(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&yd(l)}break e;case"textarea":xd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&fl(e,!!n.multiple,t,!1)}}}var Xr=!1;function Ed(e,t,n){if(Xr)return e(t,n);Xr=!0;try{var l=e(t);return l}finally{if(Xr=!1,(tl!==null||dl!==null)&&(Tr(),tl&&(t=tl,e=dl,dl=tl=null,es(t),e)))for(t=0;t<e.length;t++)es(e[t])}}function ma(e,t){var n=e.stateNode;if(n===null)return null;var l=n[qe]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var kt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lo=!1;if(kt)try{var ql={};Object.defineProperty(ql,"passive",{get:function(){Lo=!0}}),window.addEventListener("test",ql,ql),window.removeEventListener("test",ql,ql)}catch{Lo=!1}var Ft=null,Lc=null,vi=null;function zd(){if(vi)return vi;var e,t=Lc,n=t.length,l,a="value"in Ft?Ft.value:Ft.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===a[i-l];l++);return vi=a.slice(e,1<l?1-l:void 0)}function pi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ei(){return!0}function ts(){return!1}function Ge(e){function t(n,l,a,i,r){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ei:ts,this.isPropagationStopped=ts,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ei)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ei)},persist:function(){},isPersistent:ei}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pr=Ge(Yn),Da=ie({},Yn,{view:0,detail:0}),Rg=Ge(Da),Vr,Qr,Gl,yr=ie({},Da,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gl&&(Gl&&e.type==="mousemove"?(Vr=e.screenX-Gl.screenX,Qr=e.screenY-Gl.screenY):Qr=Vr=0,Gl=e),Vr)},movementY:function(e){return"movementY"in e?e.movementY:Qr}}),ns=Ge(yr),Dg=ie({},yr,{dataTransfer:0}),kg=Ge(Dg),Ug=ie({},Da,{relatedTarget:0}),Zr=Ge(Ug),Hg=ie({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bg=Ge(Hg),Yg=ie({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lg=Ge(Yg),qg=ie({},Yn,{data:0}),ls=Ge(qg),Gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vg[e])?!!t[e]:!1}function qc(){return Qg}var Zg=ie({},Da,{key:function(e){if(e.key){var t=Gg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=pi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(e){return e.type==="keypress"?pi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?pi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kg=Ge(Zg),Jg=ie({},yr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),as=Ge(Jg),$g=ie({},Da,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),Wg=Ge($g),Fg=ie({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=Ge(Fg),Pg=ie({},yr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ev=Ge(Pg),tv=ie({},Yn,{newState:0,oldState:0}),nv=Ge(tv),lv=[9,13,27,32],Gc=kt&&"CompositionEvent"in window,ea=null;kt&&"documentMode"in document&&(ea=document.documentMode);var av=kt&&"TextEvent"in window&&!ea,Nd=kt&&(!Gc||ea&&8<ea&&11>=ea),is=String.fromCharCode(32),rs=!1;function Ad(e,t){switch(e){case"keyup":return lv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nl=!1;function iv(e,t){switch(e){case"compositionend":return jd(t);case"keypress":return t.which!==32?null:(rs=!0,is);case"textInput":return e=t.data,e===is&&rs?null:e;default:return null}}function rv(e,t){if(nl)return e==="compositionend"||!Gc&&Ad(e,t)?(e=zd(),vi=Lc=Ft=null,nl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nd&&t.locale!=="ko"?null:t.data;default:return null}}var ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ov[e.type]:t==="textarea"}function Td(e,t,n,l){tl?dl?dl.push(l):dl=[l]:tl=l,t=Ii(t,"onChange"),0<t.length&&(n=new pr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var ta=null,ga=null;function cv(e){Em(e,0)}function br(e){var t=Wl(e);if(yd(t))return e}function cs(e,t){if(e==="change")return t}var _d=!1;if(kt){var Kr;if(kt){var Jr="oninput"in document;if(!Jr){var us=document.createElement("div");us.setAttribute("oninput","return;"),Jr=typeof us.oninput=="function"}Kr=Jr}else Kr=!1;_d=Kr&&(!document.documentMode||9<document.documentMode)}function ss(){ta&&(ta.detachEvent("onpropertychange",Cd),ga=ta=null)}function Cd(e){if(e.propertyName==="value"&&br(ga)){var t=[];Td(t,ga,e,Yc(e)),Ed(cv,t)}}function uv(e,t,n){e==="focusin"?(ss(),ta=t,ga=n,ta.attachEvent("onpropertychange",Cd)):e==="focusout"&&ss()}function sv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return br(ga)}function fv(e,t){if(e==="click")return br(t)}function dv(e,t){if(e==="input"||e==="change")return br(t)}function hv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:hv;function va(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!Do.call(t,a)||!Fe(e[a],t[a]))return!1}return!0}function fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ds(e,t){var n=fs(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fs(n)}}function Md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Od(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Di(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Di(e.document)}return t}function Xc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mv=kt&&"documentMode"in document&&11>=document.documentMode,ll=null,qo=null,na=null,Go=!1;function hs(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Go||ll==null||ll!==Di(l)||(l=ll,"selectionStart"in l&&Xc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),na&&va(na,l)||(na=l,l=Ii(qo,"onSelect"),0<l.length&&(t=new pr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=ll)))}function xn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var al={animationend:xn("Animation","AnimationEnd"),animationiteration:xn("Animation","AnimationIteration"),animationstart:xn("Animation","AnimationStart"),transitionrun:xn("Transition","TransitionRun"),transitionstart:xn("Transition","TransitionStart"),transitioncancel:xn("Transition","TransitionCancel"),transitionend:xn("Transition","TransitionEnd")},$r={},Rd={};kt&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function Ln(e){if($r[e])return $r[e];if(!al[e])return e;var t=al[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rd)return $r[e]=t[n];return e}var Dd=Ln("animationend"),kd=Ln("animationiteration"),Ud=Ln("animationstart"),gv=Ln("transitionrun"),vv=Ln("transitionstart"),pv=Ln("transitioncancel"),Hd=Ln("transitionend"),Bd=new Map,Xo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Xo.push("scrollEnd");function dt(e,t){Bd.set(e,t),Bn(t,[e])}var ki=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Pe=[],il=0,Vc=0;function xr(){for(var e=il,t=Vc=il=0;t<e;){var n=Pe[t];Pe[t++]=null;var l=Pe[t];Pe[t++]=null;var a=Pe[t];Pe[t++]=null;var i=Pe[t];if(Pe[t++]=null,l!==null&&a!==null){var r=l.pending;r===null?a.next=a:(a.next=r.next,r.next=a),l.pending=a}i!==0&&Yd(n,a,i)}}function wr(e,t,n,l){Pe[il++]=e,Pe[il++]=t,Pe[il++]=n,Pe[il++]=l,Vc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Qc(e,t,n,l){return wr(e,t,n,l),Ui(e)}function qn(e,t){return wr(e,null,null,t),Ui(e)}function Yd(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-$e(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function Ui(e){if(50<fa)throw fa=0,sc=null,Error(w(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var rl={};function yv(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,l){return new yv(e,t,n,l)}function Zc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ot(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ld(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function yi(e,t,n,l,a,i){var r=0;if(l=e,typeof e=="function")Zc(e)&&(r=1);else if(typeof e=="string")r=Ep(e,n,vt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Co:return e=Qe(31,n,t,a),e.elementType=Co,e.lanes=i,e;case In:return Tn(n.children,a,i,t);case id:r=8,a|=24;break;case jo:return e=Qe(12,n,t,a|2),e.elementType=jo,e.lanes=i,e;case To:return e=Qe(13,n,t,a),e.elementType=To,e.lanes=i,e;case _o:return e=Qe(19,n,t,a),e.elementType=_o,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _t:r=10;break e;case rd:r=9;break e;case Oc:r=11;break e;case Rc:r=14;break e;case Vt:r=16,l=null;break e}r=29,n=Error(w(130,e===null?"null":typeof e,"")),l=null}return t=Qe(r,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function Tn(e,t,n,l){return e=Qe(7,e,l,t),e.lanes=n,e}function Wr(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function qd(e){var t=Qe(18,null,null,0);return t.stateNode=e,t}function Fr(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ms=new WeakMap;function at(e,t){if(typeof e=="object"&&e!==null){var n=ms.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ju(t)},ms.set(e,t),t)}return{value:e,source:t,stack:Ju(t)}}var ol=[],cl=0,Hi=null,pa=0,tt=[],nt=0,hn=null,ht=1,mt="";function jt(e,t){ol[cl++]=pa,ol[cl++]=Hi,Hi=e,pa=t}function Gd(e,t,n){tt[nt++]=ht,tt[nt++]=mt,tt[nt++]=hn,hn=e;var l=ht;e=mt;var a=32-$e(l)-1;l&=~(1<<a),n+=1;var i=32-$e(t)+a;if(30<i){var r=a-a%5;i=(l&(1<<r)-1).toString(32),l>>=r,a-=r,ht=1<<32-$e(t)+a|n<<a|l,mt=i+e}else ht=1<<i|n<<a|l,mt=e}function Kc(e){e.return!==null&&(jt(e,1),Gd(e,1,0))}function Jc(e){for(;e===Hi;)Hi=ol[--cl],ol[cl]=null,pa=ol[--cl],ol[cl]=null;for(;e===hn;)hn=tt[--nt],tt[nt]=null,mt=tt[--nt],tt[nt]=null,ht=tt[--nt],tt[nt]=null}function Xd(e,t){tt[nt++]=ht,tt[nt++]=mt,tt[nt++]=hn,ht=t.id,mt=t.overflow,hn=e}var _e=null,le=null,X=!1,ln=null,it=!1,Vo=Error(w(519));function mn(e){var t=Error(w(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ya(at(t,e)),Vo}function gs(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[Te]=e,t[qe]=l,n){case"dialog":L("cancel",t),L("close",t);break;case"iframe":case"object":case"embed":L("load",t);break;case"video":case"audio":for(n=0;n<Sa.length;n++)L(Sa[n],t);break;case"source":L("error",t);break;case"img":case"image":case"link":L("error",t),L("load",t);break;case"details":L("toggle",t);break;case"input":L("invalid",t),bd(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":L("invalid",t);break;case"textarea":L("invalid",t),wd(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||Nm(t.textContent,n)?(l.popover!=null&&(L("beforetoggle",t),L("toggle",t)),l.onScroll!=null&&L("scroll",t),l.onScrollEnd!=null&&L("scrollend",t),l.onClick!=null&&(t.onclick=Ct),t=!0):t=!1,t||mn(e,!0)}function vs(e){for(_e=e.return;_e;)switch(_e.tag){case 5:case 31:case 13:it=!1;return;case 27:case 3:it=!0;return;default:_e=_e.return}}function Zn(e){if(e!==_e)return!1;if(!X)return vs(e),X=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||gc(e.type,e.memoizedProps)),n=!n),n&&le&&mn(e),vs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));le=nf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));le=nf(e)}else t===27?(t=le,yn(e.type)?(e=bc,bc=null,le=e):le=t):le=_e?ot(e.stateNode.nextSibling):null;return!0}function Rn(){le=_e=null,X=!1}function Ir(){var e=ln;return e!==null&&(Ye===null?Ye=e:Ye.push.apply(Ye,e),ln=null),e}function ya(e){ln===null?ln=[e]:ln.push(e)}var Qo=pt(null),Gn=null,Mt=null;function Zt(e,t,n){ee(Qo,t._currentValue),t._currentValue=n}function Rt(e){e._currentValue=Qo.current,Ae(Qo)}function Zo(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Ko(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var r=a.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=a;for(var c=0;c<t.length;c++)if(o.context===t[c]){i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),Zo(i.return,n,e),l||(r=null);break e}i=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(w(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),Zo(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Ol(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if(a.flags&524288)i=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(w(387));if(r=r.memoizedProps,r!==null){var o=a.type;Fe(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Ci.current){if(r=a.alternate,r===null)throw Error(w(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(za):e=[za])}a=a.return}e!==null&&Ko(t,e,n,l),t.flags|=262144}function Bi(e){for(e=e.firstContext;e!==null;){if(!Fe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Dn(e){Gn=e,Mt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ce(e){return Vd(Gn,e)}function ti(e,t){return Gn===null&&Dn(e),Vd(e,t)}function Vd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Mt===null){if(e===null)throw Error(w(308));Mt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Mt=Mt.next=t;return n}var bv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},xv=Se.unstable_scheduleCallback,wv=Se.unstable_NormalPriority,ve={$$typeof:_t,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $c(){return{controller:new bv,data:new Map,refCount:0}}function ka(e){e.refCount--,e.refCount===0&&xv(wv,function(){e.controller.abort()})}var la=null,Jo=0,xl=0,hl=null;function Sv(e,t){if(la===null){var n=la=[];Jo=0,xl=xu(),hl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Jo++,t.then(ps,ps),t}function ps(){if(--Jo===0&&la!==null){hl!==null&&(hl.status="fulfilled");var e=la;la=null,xl=0,hl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ev(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var ys=U.S;U.S=function(e,t){am=Ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sv(e,t),ys!==null&&ys(e,t)};var _n=pt(null);function Wc(){var e=_n.current;return e!==null?e:P.pooledCache}function bi(e,t){t===null?ee(_n,_n.current):ee(_n,t.pool)}function Qd(){var e=Wc();return e===null?null:{parent:ve._currentValue,pool:e}}var Rl=Error(w(460)),Fc=Error(w(474)),Sr=Error(w(542)),Yi={then:function(){}};function bs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ct,Ct),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ws(e),e;default:if(typeof t.status=="string")t.then(Ct,Ct);else{if(e=P,e!==null&&100<e.shellSuspendCounter)throw Error(w(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ws(e),e}throw Cn=t,Rl}}function zn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Cn=n,Rl):n}}var Cn=null;function xs(){if(Cn===null)throw Error(w(459));var e=Cn;return Cn=null,e}function ws(e){if(e===Rl||e===Sr)throw Error(w(483))}var ml=null,ba=0;function ni(e){var t=ba;return ba+=1,ml===null&&(ml=[]),Zd(ml,e,t)}function Xl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function li(e,t){throw t.$$typeof===ug?Error(w(525)):(e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Kd(e){function t(g,m){if(e){var p=g.deletions;p===null?(g.deletions=[m],g.flags|=16):p.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function l(g){for(var m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function a(g,m){return g=Ot(g,m),g.index=0,g.sibling=null,g}function i(g,m,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<m?(g.flags|=67108866,m):p):(g.flags|=67108866,m)):(g.flags|=1048576,m)}function r(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function o(g,m,p,b){return m===null||m.tag!==6?(m=Wr(p,g.mode,b),m.return=g,m):(m=a(m,p),m.return=g,m)}function c(g,m,p,b){var T=p.type;return T===In?d(g,m,p.props.children,b,p.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Vt&&zn(T)===m.type)?(m=a(m,p.props),Xl(m,p),m.return=g,m):(m=yi(p.type,p.key,p.props,null,g.mode,b),Xl(m,p),m.return=g,m)}function u(g,m,p,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Fr(p,g.mode,b),m.return=g,m):(m=a(m,p.children||[]),m.return=g,m)}function d(g,m,p,b,T){return m===null||m.tag!==7?(m=Tn(p,g.mode,b,T),m.return=g,m):(m=a(m,p),m.return=g,m)}function h(g,m,p){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Wr(""+m,g.mode,p),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case $a:return p=yi(m.type,m.key,m.props,null,g.mode,p),Xl(p,m),p.return=g,p;case Jl:return m=Fr(m,g.mode,p),m.return=g,m;case Vt:return m=zn(m),h(g,m,p)}if($l(m)||Ll(m))return m=Tn(m,g.mode,p,null),m.return=g,m;if(typeof m.then=="function")return h(g,ni(m),p);if(m.$$typeof===_t)return h(g,ti(g,m),p);li(g,m)}return null}function f(g,m,p,b){var T=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return T!==null?null:o(g,m,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case $a:return p.key===T?c(g,m,p,b):null;case Jl:return p.key===T?u(g,m,p,b):null;case Vt:return p=zn(p),f(g,m,p,b)}if($l(p)||Ll(p))return T!==null?null:d(g,m,p,b,null);if(typeof p.then=="function")return f(g,m,ni(p),b);if(p.$$typeof===_t)return f(g,m,ti(g,p),b);li(g,p)}return null}function v(g,m,p,b,T){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return g=g.get(p)||null,o(m,g,""+b,T);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case $a:return g=g.get(b.key===null?p:b.key)||null,c(m,g,b,T);case Jl:return g=g.get(b.key===null?p:b.key)||null,u(m,g,b,T);case Vt:return b=zn(b),v(g,m,p,b,T)}if($l(b)||Ll(b))return g=g.get(p)||null,d(m,g,b,T,null);if(typeof b.then=="function")return v(g,m,p,ni(b),T);if(b.$$typeof===_t)return v(g,m,p,ti(m,b),T);li(m,b)}return null}function x(g,m,p,b){for(var T=null,O=null,j=m,N=m=0,_=null;j!==null&&N<p.length;N++){j.index>N?(_=j,j=null):_=j.sibling;var R=f(g,j,p[N],b);if(R===null){j===null&&(j=_);break}e&&j&&R.alternate===null&&t(g,j),m=i(R,m,N),O===null?T=R:O.sibling=R,O=R,j=_}if(N===p.length)return n(g,j),X&&jt(g,N),T;if(j===null){for(;N<p.length;N++)j=h(g,p[N],b),j!==null&&(m=i(j,m,N),O===null?T=j:O.sibling=j,O=j);return X&&jt(g,N),T}for(j=l(j);N<p.length;N++)_=v(j,g,N,p[N],b),_!==null&&(e&&_.alternate!==null&&j.delete(_.key===null?N:_.key),m=i(_,m,N),O===null?T=_:O.sibling=_,O=_);return e&&j.forEach(function(te){return t(g,te)}),X&&jt(g,N),T}function S(g,m,p,b){if(p==null)throw Error(w(151));for(var T=null,O=null,j=m,N=m=0,_=null,R=p.next();j!==null&&!R.done;N++,R=p.next()){j.index>N?(_=j,j=null):_=j.sibling;var te=f(g,j,R.value,b);if(te===null){j===null&&(j=_);break}e&&j&&te.alternate===null&&t(g,j),m=i(te,m,N),O===null?T=te:O.sibling=te,O=te,j=_}if(R.done)return n(g,j),X&&jt(g,N),T;if(j===null){for(;!R.done;N++,R=p.next())R=h(g,R.value,b),R!==null&&(m=i(R,m,N),O===null?T=R:O.sibling=R,O=R);return X&&jt(g,N),T}for(j=l(j);!R.done;N++,R=p.next())R=v(j,g,N,R.value,b),R!==null&&(e&&R.alternate!==null&&j.delete(R.key===null?N:R.key),m=i(R,m,N),O===null?T=R:O.sibling=R,O=R);return e&&j.forEach(function(k){return t(g,k)}),X&&jt(g,N),T}function z(g,m,p,b){if(typeof p=="object"&&p!==null&&p.type===In&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case $a:e:{for(var T=p.key;m!==null;){if(m.key===T){if(T=p.type,T===In){if(m.tag===7){n(g,m.sibling),b=a(m,p.props.children),b.return=g,g=b;break e}}else if(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Vt&&zn(T)===m.type){n(g,m.sibling),b=a(m,p.props),Xl(b,p),b.return=g,g=b;break e}n(g,m);break}else t(g,m);m=m.sibling}p.type===In?(b=Tn(p.props.children,g.mode,b,p.key),b.return=g,g=b):(b=yi(p.type,p.key,p.props,null,g.mode,b),Xl(b,p),b.return=g,g=b)}return r(g);case Jl:e:{for(T=p.key;m!==null;){if(m.key===T)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(g,m.sibling),b=a(m,p.children||[]),b.return=g,g=b;break e}else{n(g,m);break}else t(g,m);m=m.sibling}b=Fr(p,g.mode,b),b.return=g,g=b}return r(g);case Vt:return p=zn(p),z(g,m,p,b)}if($l(p))return x(g,m,p,b);if(Ll(p)){if(T=Ll(p),typeof T!="function")throw Error(w(150));return p=T.call(p),S(g,m,p,b)}if(typeof p.then=="function")return z(g,m,ni(p),b);if(p.$$typeof===_t)return z(g,m,ti(g,p),b);li(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,m!==null&&m.tag===6?(n(g,m.sibling),b=a(m,p),b.return=g,g=b):(n(g,m),b=Wr(p,g.mode,b),b.return=g,g=b),r(g)):n(g,m)}return function(g,m,p,b){try{ba=0;var T=z(g,m,p,b);return ml=null,T}catch(j){if(j===Rl||j===Sr)throw j;var O=Qe(29,j,null,g.mode);return O.lanes=b,O.return=g,O}finally{}}}var kn=Kd(!0),Jd=Kd(!1),Qt=!1;function Ic(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $o(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function an(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function rn(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,Z&2){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Ui(e),Yd(e,null,n),t}return wr(e,l,t,n),Ui(e)}function aa(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,dd(e,n)}}function Pr(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Wo=!1;function ia(){if(Wo){var e=hl;if(e!==null)throw e}}function ra(e,t,n,l){Wo=!1;var a=e.updateQueue;Qt=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,u=c.next;c.next=null,r===null?i=u:r.next=u,r=c;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=c))}if(i!==null){var h=a.baseState;r=0,d=u=c=null,o=i;do{var f=o.lane&-536870913,v=f!==o.lane;if(v?(G&f)===f:(l&f)===f){f!==0&&f===xl&&(Wo=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var x=e,S=o;f=t;var z=n;switch(S.tag){case 1:if(x=S.payload,typeof x=="function"){h=x.call(z,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,f=typeof x=="function"?x.call(z,h,f):x,f==null)break e;h=ie({},h,f);break e;case 2:Qt=!0}}f=o.callback,f!==null&&(e.flags|=64,v&&(e.flags|=8192),v=a.callbacks,v===null?a.callbacks=[f]:v.push(f))}else v={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=v,c=h):d=d.next=v,r|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;v=o,o=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(1);d===null&&(c=h),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=d,i===null&&(a.shared.lanes=0),vn|=r,e.lanes=r,e.memoizedState=h}}function $d(e,t){if(typeof e!="function")throw Error(w(191,e));e.call(t)}function Wd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$d(n[e],t)}var wl=pt(null),Li=pt(0);function Ss(e,t){e=Yt,ee(Li,e),ee(wl,t),Yt=e|t.baseLanes}function Fo(){ee(Li,Yt),ee(wl,wl.current)}function Pc(){Yt=Li.current,Ae(wl),Ae(Li)}var Ie=pt(null),rt=null;function Kt(e){var t=e.alternate;ee(de,de.current&1),ee(Ie,e),rt===null&&(t===null||wl.current!==null||t.memoizedState!==null)&&(rt=e)}function Io(e){ee(de,de.current),ee(Ie,e),rt===null&&(rt=e)}function Fd(e){e.tag===22?(ee(de,de.current),ee(Ie,e),rt===null&&(rt=e)):Jt()}function Jt(){ee(de,de.current),ee(Ie,Ie.current)}function Ve(e){Ae(Ie),rt===e&&(rt=null),Ae(de)}var de=pt(0);function qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||pc(n)||yc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ut=0,B=null,F=null,me=null,Gi=!1,gl=!1,Un=!1,Xi=0,xa=0,vl=null,zv=0;function ue(){throw Error(w(321))}function eu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function tu(e,t,n,l,a,i){return Ut=i,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,U.H=e===null||e.memoizedState===null?Th:du,Un=!1,i=n(l,a),Un=!1,gl&&(i=Pd(t,n,l,a)),Id(e),i}function Id(e){U.H=wa;var t=F!==null&&F.next!==null;if(Ut=0,me=F=B=null,Gi=!1,xa=0,vl=null,t)throw Error(w(300));e===null||pe||(e=e.dependencies,e!==null&&Bi(e)&&(pe=!0))}function Pd(e,t,n,l){B=e;var a=0;do{if(gl&&(vl=null),xa=0,gl=!1,25<=a)throw Error(w(301));if(a+=1,me=F=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}U.H=_h,i=t(n,l)}while(gl);return i}function Nv(){var e=U.H,t=e.useState()[0];return t=typeof t.then=="function"?Ua(t):t,e=e.useState()[0],(F!==null?F.memoizedState:null)!==e&&(B.flags|=1024),t}function nu(){var e=Xi!==0;return Xi=0,e}function lu(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function au(e){if(Gi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Gi=!1}Ut=0,me=F=B=null,gl=!1,xa=Xi=0,vl=null}function Re(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?B.memoizedState=me=e:me=me.next=e,me}function he(){if(F===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=F.next;var t=me===null?B.memoizedState:me.next;if(t!==null)me=t,F=e;else{if(e===null)throw B.alternate===null?Error(w(467)):Error(w(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},me===null?B.memoizedState=me=e:me=me.next=e}return me}function Er(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ua(e){var t=xa;return xa+=1,vl===null&&(vl=[]),e=Zd(vl,e,t),t=B,(me===null?t.memoizedState:me.next)===null&&(t=t.alternate,U.H=t===null||t.memoizedState===null?Th:du),e}function zr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ua(e);if(e.$$typeof===_t)return Ce(e)}throw Error(w(438,String(e)))}function iu(e){var t=null,n=B.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=B.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Er(),B.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=sg;return t.index++,n}function Ht(e,t){return typeof t=="function"?t(e):t}function xi(e){var t=he();return ru(t,F,e)}function ru(e,t,n){var l=e.queue;if(l===null)throw Error(w(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var o=r=null,c=null,u=t,d=!1;do{var h=u.lane&-536870913;if(h!==u.lane?(G&h)===h:(Ut&h)===h){var f=u.revertLane;if(f===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===xl&&(d=!0);else if((Ut&f)===f){u=u.next,f===xl&&(d=!0);continue}else h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(o=c=h,r=i):c=c.next=h,B.lanes|=f,vn|=f;h=u.action,Un&&n(i,h),i=u.hasEagerState?u.eagerState:n(i,h)}else f={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(o=c=f,r=i):c=c.next=f,B.lanes|=h,vn|=h;u=u.next}while(u!==null&&u!==t);if(c===null?r=i:c.next=o,!Fe(i,e.memoizedState)&&(pe=!0,d&&(n=hl,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=c,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function eo(e){var t=he(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);Fe(i,t.memoizedState)||(pe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function eh(e,t,n){var l=B,a=he(),i=X;if(i){if(n===void 0)throw Error(w(407));n=n()}else n=t();var r=!Fe((F||a).memoizedState,n);if(r&&(a.memoizedState=n,pe=!0),a=a.queue,ou(lh.bind(null,l,a,e),[e]),a.getSnapshot!==t||r||me!==null&&me.memoizedState.tag&1){if(l.flags|=2048,Sl(9,{destroy:void 0},nh.bind(null,l,a,n,t),null),P===null)throw Error(w(349));i||Ut&127||th(l,t,n)}return n}function th(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t=Er(),B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nh(e,t,n,l){t.value=n,t.getSnapshot=l,ah(t)&&ih(e)}function lh(e,t,n){return n(function(){ah(t)&&ih(e)})}function ah(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function ih(e){var t=qn(e,2);t!==null&&Le(t,e,2)}function Po(e){var t=Re();if(typeof e=="function"){var n=e;if(e=n(),Un){Wt(!0);try{n()}finally{Wt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},t}function rh(e,t,n,l){return e.baseState=n,ru(e,F,typeof l=="function"?l:Ht)}function Av(e,t,n,l,a){if(Ar(e))throw Error(w(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};U.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,oh(t,i)):(i.next=n.next,t.pending=n.next=i)}}function oh(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=U.T,r={};U.T=r;try{var o=n(a,l),c=U.S;c!==null&&c(r,o),Es(e,t,o)}catch(u){ec(e,t,u)}finally{i!==null&&r.types!==null&&(i.types=r.types),U.T=i}}else try{i=n(a,l),Es(e,t,i)}catch(u){ec(e,t,u)}}function Es(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){zs(e,t,l)},function(l){return ec(e,t,l)}):zs(e,t,n)}function zs(e,t,n){t.status="fulfilled",t.value=n,ch(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,oh(e,n)))}function ec(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,ch(t),t=t.next;while(t!==l)}e.action=null}function ch(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function uh(e,t){return t}function Ns(e,t){if(X){var n=P.formState;if(n!==null){e:{var l=B;if(X){if(le){t:{for(var a=le,i=it;a.nodeType!==8;){if(!i){a=null;break t}if(a=ot(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){le=ot(a.nextSibling),l=a.data==="F!";break e}}mn(l)}l=!1}l&&(t=n[0])}}return n=Re(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uh,lastRenderedState:t},n.queue=l,n=Nh.bind(null,B,l),l.dispatch=n,l=Po(!1),i=fu.bind(null,B,!1,l.queue),l=Re(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=Av.bind(null,B,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function As(e){var t=he();return sh(t,F,e)}function sh(e,t,n){if(t=ru(e,t,uh)[0],e=xi(Ht)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Ua(t)}catch(r){throw r===Rl?Sr:r}else l=t;t=he();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(B.flags|=2048,Sl(9,{destroy:void 0},jv.bind(null,a,n),null)),[l,i,e]}function jv(e,t){e.action=t}function js(e){var t=he(),n=F;if(n!==null)return sh(t,n,e);he(),t=t.memoizedState,n=he();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Sl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=B.updateQueue,t===null&&(t=Er(),B.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function fh(){return he().memoizedState}function wi(e,t,n,l){var a=Re();B.flags|=e,a.memoizedState=Sl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Nr(e,t,n,l){var a=he();l=l===void 0?null:l;var i=a.memoizedState.inst;F!==null&&l!==null&&eu(l,F.memoizedState.deps)?a.memoizedState=Sl(t,i,n,l):(B.flags|=e,a.memoizedState=Sl(1|t,i,n,l))}function Ts(e,t){wi(8390656,8,e,t)}function ou(e,t){Nr(2048,8,e,t)}function Tv(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=Er(),B.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function dh(e){var t=he().memoizedState;return Tv({ref:t,nextImpl:e}),function(){if(Z&2)throw Error(w(440));return t.impl.apply(void 0,arguments)}}function hh(e,t){return Nr(4,2,e,t)}function mh(e,t){return Nr(4,4,e,t)}function gh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vh(e,t,n){n=n!=null?n.concat([e]):null,Nr(4,4,gh.bind(null,t,e),n)}function cu(){}function ph(e,t){var n=he();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&eu(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function yh(e,t){var n=he();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&eu(t,l[1]))return l[0];if(l=e(),Un){Wt(!0);try{e()}finally{Wt(!1)}}return n.memoizedState=[l,t],l}function uu(e,t,n){return n===void 0||Ut&1073741824&&!(G&261930)?e.memoizedState=t:(e.memoizedState=n,e=rm(),B.lanes|=e,vn|=e,n)}function bh(e,t,n,l){return Fe(n,t)?n:wl.current!==null?(e=uu(e,n,l),Fe(e,t)||(pe=!0),e):!(Ut&42)||Ut&1073741824&&!(G&261930)?(pe=!0,e.memoizedState=n):(e=rm(),B.lanes|=e,vn|=e,t)}function xh(e,t,n,l,a){var i=K.p;K.p=i!==0&&8>i?i:8;var r=U.T,o={};U.T=o,fu(e,!1,t,n);try{var c=a(),u=U.S;if(u!==null&&u(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=Ev(c,l);oa(e,t,d,We(e))}else oa(e,t,l,We(e))}catch(h){oa(e,t,{then:function(){},status:"rejected",reason:h},We())}finally{K.p=i,r!==null&&o.types!==null&&(r.types=o.types),U.T=r}}function _v(){}function tc(e,t,n,l){if(e.tag!==5)throw Error(w(476));var a=wh(e).queue;xh(e,a,t,jn,n===null?_v:function(){return Sh(e),n(l)})}function wh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:jn,baseState:jn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:jn},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Sh(e){var t=wh(e);t.next===null&&(t=e.alternate.memoizedState),oa(e,t.next.queue,{},We())}function su(){return Ce(za)}function Eh(){return he().memoizedState}function zh(){return he().memoizedState}function Cv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=We();e=an(n);var l=rn(t,e,n);l!==null&&(Le(l,t,n),aa(l,t,n)),t={cache:$c()},e.payload=t;return}t=t.return}}function Mv(e,t,n){var l=We();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ar(e)?Ah(t,n):(n=Qc(e,t,n,l),n!==null&&(Le(n,e,l),jh(n,t,l)))}function Nh(e,t,n){var l=We();oa(e,t,n,l)}function oa(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ar(e))Ah(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,o=i(r,n);if(a.hasEagerState=!0,a.eagerState=o,Fe(o,r))return wr(e,t,a,0),P===null&&xr(),!1}catch{}finally{}if(n=Qc(e,t,a,l),n!==null)return Le(n,e,l),jh(n,t,l),!0}return!1}function fu(e,t,n,l){if(l={lane:2,revertLane:xu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ar(e)){if(t)throw Error(w(479))}else t=Qc(e,n,l,2),t!==null&&Le(t,e,2)}function Ar(e){var t=e.alternate;return e===B||t!==null&&t===B}function Ah(e,t){gl=Gi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jh(e,t,n){if(n&4194048){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,dd(e,n)}}var wa={readContext:Ce,use:zr,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useLayoutEffect:ue,useInsertionEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useSyncExternalStore:ue,useId:ue,useHostTransitionStatus:ue,useFormState:ue,useActionState:ue,useOptimistic:ue,useMemoCache:ue,useCacheRefresh:ue};wa.useEffectEvent=ue;var Th={readContext:Ce,use:zr,useCallback:function(e,t){return Re().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Ts,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,wi(4194308,4,gh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return wi(4194308,4,e,t)},useInsertionEffect:function(e,t){wi(4,2,e,t)},useMemo:function(e,t){var n=Re();t=t===void 0?null:t;var l=e();if(Un){Wt(!0);try{e()}finally{Wt(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Re();if(n!==void 0){var a=n(t);if(Un){Wt(!0);try{n(t)}finally{Wt(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=Mv.bind(null,B,e),[l.memoizedState,e]},useRef:function(e){var t=Re();return e={current:e},t.memoizedState=e},useState:function(e){e=Po(e);var t=e.queue,n=Nh.bind(null,B,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:cu,useDeferredValue:function(e,t){var n=Re();return uu(n,e,t)},useTransition:function(){var e=Po(!1);return e=xh.bind(null,B,e.queue,!0,!1),Re().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=B,a=Re();if(X){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),P===null)throw Error(w(349));G&127||th(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ts(lh.bind(null,l,i,e),[e]),l.flags|=2048,Sl(9,{destroy:void 0},nh.bind(null,l,i,n,t),null),n},useId:function(){var e=Re(),t=P.identifierPrefix;if(X){var n=mt,l=ht;n=(l&~(1<<32-$e(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Xi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=zv++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:su,useFormState:Ns,useActionState:Ns,useOptimistic:function(e){var t=Re();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=fu.bind(null,B,!0,n),n.dispatch=t,[e,t]},useMemoCache:iu,useCacheRefresh:function(){return Re().memoizedState=Cv.bind(null,B)},useEffectEvent:function(e){var t=Re(),n={impl:e};return t.memoizedState=n,function(){if(Z&2)throw Error(w(440));return n.impl.apply(void 0,arguments)}}},du={readContext:Ce,use:zr,useCallback:ph,useContext:Ce,useEffect:ou,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:mh,useMemo:yh,useReducer:xi,useRef:fh,useState:function(){return xi(Ht)},useDebugValue:cu,useDeferredValue:function(e,t){var n=he();return bh(n,F.memoizedState,e,t)},useTransition:function(){var e=xi(Ht)[0],t=he().memoizedState;return[typeof e=="boolean"?e:Ua(e),t]},useSyncExternalStore:eh,useId:Eh,useHostTransitionStatus:su,useFormState:As,useActionState:As,useOptimistic:function(e,t){var n=he();return rh(n,F,e,t)},useMemoCache:iu,useCacheRefresh:zh};du.useEffectEvent=dh;var _h={readContext:Ce,use:zr,useCallback:ph,useContext:Ce,useEffect:ou,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:mh,useMemo:yh,useReducer:eo,useRef:fh,useState:function(){return eo(Ht)},useDebugValue:cu,useDeferredValue:function(e,t){var n=he();return F===null?uu(n,e,t):bh(n,F.memoizedState,e,t)},useTransition:function(){var e=eo(Ht)[0],t=he().memoizedState;return[typeof e=="boolean"?e:Ua(e),t]},useSyncExternalStore:eh,useId:Eh,useHostTransitionStatus:su,useFormState:js,useActionState:js,useOptimistic:function(e,t){var n=he();return F!==null?rh(n,F,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:iu,useCacheRefresh:zh};_h.useEffectEvent=dh;function to(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var nc={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=We(),a=an(l);a.payload=t,n!=null&&(a.callback=n),t=rn(e,a,l),t!==null&&(Le(t,e,l),aa(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=We(),a=an(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=rn(e,a,l),t!==null&&(Le(t,e,l),aa(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),l=an(n);l.tag=2,t!=null&&(l.callback=t),t=rn(e,l,n),t!==null&&(Le(t,e,n),aa(t,e,n))}};function _s(e,t,n,l,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!va(n,l)||!va(a,i):!0}function Cs(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&nc.enqueueReplaceState(t,t.state,null)}function Hn(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=ie({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Ch(e){ki(e)}function Mh(e){console.error(e)}function Oh(e){ki(e)}function Vi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ms(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function lc(e,t,n){return n=an(n),n.tag=3,n.payload={element:null},n.callback=function(){Vi(e,t)},n}function Rh(e){return e=an(e),e.tag=3,e}function Dh(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){Ms(t,n,l)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Ms(t,n,l),typeof a!="function"&&(on===null?on=new Set([this]):on.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Ov(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Ol(t,n,a,!0),n=Ie.current,n!==null){switch(n.tag){case 31:case 13:return rt===null?$i():n.alternate===null&&se===0&&(se=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Yi?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),ho(e,l,a)),!1;case 22:return n.flags|=65536,l===Yi?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),ho(e,l,a)),!1}throw Error(w(435,n.tag))}return ho(e,l,a),$i(),!1}if(X)return t=Ie.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==Vo&&(e=Error(w(422),{cause:l}),ya(at(e,n)))):(l!==Vo&&(t=Error(w(423),{cause:l}),ya(at(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=at(l,n),a=lc(e.stateNode,l,a),Pr(e,a),se!==4&&(se=2)),!1;var i=Error(w(520),{cause:l});if(i=at(i,n),sa===null?sa=[i]:sa.push(i),se!==4&&(se=2),t===null)return!0;l=at(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=lc(n.stateNode,l,e),Pr(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(on===null||!on.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Rh(a),Dh(a,e,n,l),Pr(n,a),!1}n=n.return}while(n!==null);return!1}var hu=Error(w(461)),pe=!1;function je(e,t,n,l){t.child=e===null?Jd(t,null,n,l):kn(t,e.child,n,l)}function Os(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var r={};for(var o in l)o!=="ref"&&(r[o]=l[o])}else r=l;return Dn(t),l=tu(e,t,n,r,i,a),o=nu(),e!==null&&!pe?(lu(e,t,a),Bt(e,t,a)):(X&&o&&Kc(t),t.flags|=1,je(e,t,l,a),t.child)}function Rs(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!Zc(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,kh(e,t,i,l,a)):(e=yi(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!mu(e,a)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:va,n(r,l)&&e.ref===t.ref)return Bt(e,t,a)}return t.flags|=1,e=Ot(i,l),e.ref=t.ref,e.return=t,t.child=e}function kh(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(va(i,l)&&e.ref===t.ref)if(pe=!1,t.pendingProps=l=i,mu(e,a))e.flags&131072&&(pe=!0);else return t.lanes=e.lanes,Bt(e,t,a)}return ac(e,t,n,l,a)}function Uh(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return Ds(e,t,i,n,l)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&bi(t,i!==null?i.cachePool:null),i!==null?Ss(t,i):Fo(),Fd(t);else return l=t.lanes=536870912,Ds(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(bi(t,i.cachePool),Ss(t,i),Jt(),t.memoizedState=null):(e!==null&&bi(t,null),Fo(),Jt());return je(e,t,a,n),t.child}function Fl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ds(e,t,n,l,a){var i=Wc();return i=i===null?null:{parent:ve._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&bi(t,null),Fo(),Fd(t),e!==null&&Ol(e,t,l,!0),t.childLanes=a,null}function Si(e,t){return t=Qi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ks(e,t,n){return kn(t,e.child,null,n),e=Si(t,t.pendingProps),e.flags|=2,Ve(t),t.memoizedState=null,e}function Rv(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(X){if(l.mode==="hidden")return e=Si(t,l),t.lanes=536870912,Fl(null,e);if(Io(t),(e=le)?(e=Tm(e,it),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hn!==null?{id:ht,overflow:mt}:null,retryLane:536870912,hydrationErrors:null},n=qd(e),n.return=t,t.child=n,_e=t,le=null)):e=null,e===null)throw mn(t);return t.lanes=536870912,null}return Si(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(Io(t),a)if(t.flags&256)t.flags&=-257,t=ks(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(w(558));else if(pe||Ol(e,t,n,!1),a=(n&e.childLanes)!==0,pe||a){if(l=P,l!==null&&(r=hd(l,n),r!==0&&r!==i.retryLane))throw i.retryLane=r,qn(e,r),Le(l,e,r),hu;$i(),t=ks(e,t,n)}else e=i.treeContext,le=ot(r.nextSibling),_e=t,X=!0,ln=null,it=!1,e!==null&&Xd(t,e),t=Si(t,l),t.flags|=4096;return t}return e=Ot(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ei(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(w(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ac(e,t,n,l,a){return Dn(t),n=tu(e,t,n,l,void 0,a),l=nu(),e!==null&&!pe?(lu(e,t,a),Bt(e,t,a)):(X&&l&&Kc(t),t.flags|=1,je(e,t,n,a),t.child)}function Us(e,t,n,l,a,i){return Dn(t),t.updateQueue=null,n=Pd(t,l,n,a),Id(e),l=nu(),e!==null&&!pe?(lu(e,t,i),Bt(e,t,i)):(X&&l&&Kc(t),t.flags|=1,je(e,t,n,i),t.child)}function Hs(e,t,n,l,a){if(Dn(t),t.stateNode===null){var i=rl,r=n.contextType;typeof r=="object"&&r!==null&&(i=Ce(r)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Ic(t),r=n.contextType,i.context=typeof r=="object"&&r!==null?Ce(r):rl,i.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(to(t,n,r,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&nc.enqueueReplaceState(i,i.state,null),ra(t,l,i,a),ia(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,c=Hn(n,o);i.props=c;var u=i.context,d=n.contextType;r=rl,typeof d=="object"&&d!==null&&(r=Ce(d));var h=n.getDerivedStateFromProps;d=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||u!==r)&&Cs(t,i,l,r),Qt=!1;var f=t.memoizedState;i.state=f,ra(t,l,i,a),ia(),u=t.memoizedState,o||f!==u||Qt?(typeof h=="function"&&(to(t,n,h,l),u=t.memoizedState),(c=Qt||_s(t,n,c,l,f,u,r))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=u),i.props=l,i.state=u,i.context=r,l=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,$o(e,t),r=t.memoizedProps,d=Hn(n,r),i.props=d,h=t.pendingProps,f=i.context,u=n.contextType,c=rl,typeof u=="object"&&u!==null&&(c=Ce(u)),o=n.getDerivedStateFromProps,(u=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==h||f!==c)&&Cs(t,i,l,c),Qt=!1,f=t.memoizedState,i.state=f,ra(t,l,i,a),ia();var v=t.memoizedState;r!==h||f!==v||Qt||e!==null&&e.dependencies!==null&&Bi(e.dependencies)?(typeof o=="function"&&(to(t,n,o,l),v=t.memoizedState),(d=Qt||_s(t,n,d,l,f,v,c)||e!==null&&e.dependencies!==null&&Bi(e.dependencies))?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,v,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,v,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),i.props=l,i.state=v,i.context=c,l=d):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,Ei(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=kn(t,e.child,null,a),t.child=kn(t,null,n,a)):je(e,t,n,a),t.memoizedState=i.state,e=t.child):e=Bt(e,t,a),e}function Bs(e,t,n,l){return Rn(),t.flags|=256,je(e,t,n,l),t.child}var no={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lo(e){return{baseLanes:e,cachePool:Qd()}}function ao(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ze),e}function Hh(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(de.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(X){if(a?Kt(t):Jt(),(e=le)?(e=Tm(e,it),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hn!==null?{id:ht,overflow:mt}:null,retryLane:536870912,hydrationErrors:null},n=qd(e),n.return=t,t.child=n,_e=t,le=null)):e=null,e===null)throw mn(t);return yc(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,a?(Jt(),a=t.mode,o=Qi({mode:"hidden",children:o},a),l=Tn(l,a,n,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=lo(n),l.childLanes=ao(e,r,n),t.memoizedState=no,Fl(null,l)):(Kt(t),ic(t,o))}var c=e.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(i)t.flags&256?(Kt(t),t.flags&=-257,t=io(e,t,n)):t.memoizedState!==null?(Jt(),t.child=e.child,t.flags|=128,t=null):(Jt(),o=l.fallback,a=t.mode,l=Qi({mode:"visible",children:l.children},a),o=Tn(o,a,n,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,kn(t,e.child,null,n),l=t.child,l.memoizedState=lo(n),l.childLanes=ao(e,r,n),t.memoizedState=no,t=Fl(null,l));else if(Kt(t),yc(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;r=u,l=Error(w(419)),l.stack="",l.digest=r,ya({value:l,source:null,stack:null}),t=io(e,t,n)}else if(pe||Ol(e,t,n,!1),r=(n&e.childLanes)!==0,pe||r){if(r=P,r!==null&&(l=hd(r,n),l!==0&&l!==c.retryLane))throw c.retryLane=l,qn(e,l),Le(r,e,l),hu;pc(o)||$i(),t=io(e,t,n)}else pc(o)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,le=ot(o.nextSibling),_e=t,X=!0,ln=null,it=!1,e!==null&&Xd(t,e),t=ic(t,l.children),t.flags|=4096);return t}return a?(Jt(),o=l.fallback,a=t.mode,c=e.child,u=c.sibling,l=Ot(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,u!==null?o=Ot(u,o):(o=Tn(o,a,n,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,Fl(null,l),l=t.child,o=e.child.memoizedState,o===null?o=lo(n):(a=o.cachePool,a!==null?(c=ve._currentValue,a=a.parent!==c?{parent:c,pool:c}:a):a=Qd(),o={baseLanes:o.baseLanes|n,cachePool:a}),l.memoizedState=o,l.childLanes=ao(e,r,n),t.memoizedState=no,Fl(e.child,l)):(Kt(t),n=e.child,e=n.sibling,n=Ot(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function ic(e,t){return t=Qi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Qi(e,t){return e=Qe(22,e,null,t),e.lanes=0,e}function io(e,t,n){return kn(t,e.child,null,n),e=ic(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ys(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Zo(e.return,t,n)}function ro(e,t,n,l,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a,r.treeForkCount=i)}function Bh(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var r=de.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ee(de,r),je(e,t,l,n),l=X?pa:0,!o&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ys(e,n,t);else if(e.tag===19)Ys(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&qi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),ro(t,!1,a,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&qi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}ro(t,!0,n,null,i,l);break;case"together":ro(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Bt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),vn|=t.lanes,!(n&t.childLanes))if(e!==null){if(Ol(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Ot(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ot(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function mu(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Bi(e)))}function Dv(e,t,n){switch(t.tag){case 3:Mi(t,t.stateNode.containerInfo),Zt(t,ve,e.memoizedState.cache),Rn();break;case 27:case 5:Ro(t);break;case 4:Mi(t,t.stateNode.containerInfo);break;case 10:Zt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Io(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Kt(t),t.flags|=128,null):n&t.child.childLanes?Hh(e,t,n):(Kt(t),e=Bt(e,t,n),e!==null?e.sibling:null);Kt(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Ol(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Bh(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ee(de,de.current),l)break;return null;case 22:return t.lanes=0,Uh(e,t,n,t.pendingProps);case 24:Zt(t,ve,e.memoizedState.cache)}return Bt(e,t,n)}function Yh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)pe=!0;else{if(!mu(e,n)&&!(t.flags&128))return pe=!1,Dv(e,t,n);pe=!!(e.flags&131072)}else pe=!1,X&&t.flags&1048576&&Gd(t,pa,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=zn(t.elementType),t.type=e,typeof e=="function")Zc(e)?(l=Hn(e,l),t.tag=1,t=Hs(null,t,e,l,n)):(t.tag=0,t=ac(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===Oc){t.tag=11,t=Os(null,t,e,l,n);break e}else if(a===Rc){t.tag=14,t=Rs(null,t,e,l,n);break e}}throw t=Mo(e)||e,Error(w(306,t,""))}}return t;case 0:return ac(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=Hn(l,t.pendingProps),Hs(e,t,l,a,n);case 3:e:{if(Mi(t,t.stateNode.containerInfo),e===null)throw Error(w(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,$o(e,t),ra(t,l,null,n);var r=t.memoizedState;if(l=r.cache,Zt(t,ve,l),l!==i.cache&&Ko(t,[ve],n,!0),ia(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Bs(e,t,l,n);break e}else if(l!==a){a=at(Error(w(424)),t),ya(a),t=Bs(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=ot(e.firstChild),_e=t,X=!0,ln=null,it=!0,n=Jd(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Rn(),l===a){t=Bt(e,t,n);break e}je(e,t,l,n)}t=t.child}return t;case 26:return Ei(e,t),e===null?(n=rf(t.type,null,t.pendingProps,null))?t.memoizedState=n:X||(n=t.type,e=t.pendingProps,l=Pi(nn.current).createElement(n),l[Te]=t,l[qe]=e,Me(l,n,e),Ne(l),t.stateNode=l):t.memoizedState=rf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Ro(t),e===null&&X&&(l=t.stateNode=_m(t.type,t.pendingProps,nn.current),_e=t,it=!0,a=le,yn(t.type)?(bc=a,le=ot(l.firstChild)):le=a),je(e,t,t.pendingProps.children,n),Ei(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&X&&((a=l=le)&&(l=sp(l,t.type,t.pendingProps,it),l!==null?(t.stateNode=l,_e=t,le=ot(l.firstChild),it=!1,a=!0):a=!1),a||mn(t)),Ro(t),a=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,gc(a,i)?l=null:r!==null&&gc(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=tu(e,t,Nv,null,null,n),za._currentValue=a),Ei(e,t),je(e,t,l,n),t.child;case 6:return e===null&&X&&((e=n=le)&&(n=fp(n,t.pendingProps,it),n!==null?(t.stateNode=n,_e=t,le=null,e=!0):e=!1),e||mn(t)),null;case 13:return Hh(e,t,n);case 4:return Mi(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=kn(t,null,l,n):je(e,t,l,n),t.child;case 11:return Os(e,t,t.type,t.pendingProps,n);case 7:return je(e,t,t.pendingProps,n),t.child;case 8:return je(e,t,t.pendingProps.children,n),t.child;case 12:return je(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Zt(t,t.type,l.value),je(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,Dn(t),a=Ce(a),l=l(a),t.flags|=1,je(e,t,l,n),t.child;case 14:return Rs(e,t,t.type,t.pendingProps,n);case 15:return kh(e,t,t.type,t.pendingProps,n);case 19:return Bh(e,t,n);case 31:return Rv(e,t,n);case 22:return Uh(e,t,n,t.pendingProps);case 24:return Dn(t),l=Ce(ve),e===null?(a=Wc(),a===null&&(a=P,i=$c(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},Ic(t),Zt(t,ve,a)):(e.lanes&n&&($o(e,t),ra(t,null,null,n),ia()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Zt(t,ve,l)):(l=i.cache,Zt(t,ve,l),l!==a.cache&&Ko(t,[ve],n,!0))),je(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(w(156,t.tag))}function St(e){e.flags|=4}function oo(e,t,n,l,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(um())e.flags|=8192;else throw Cn=Yi,Fc}else e.flags&=-16777217}function Ls(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Om(t))if(um())e.flags|=8192;else throw Cn=Yi,Fc}function ai(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?sd():536870912,e.lanes|=t,El|=t)}function Vl(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function kv(e,t,n){var l=t.pendingProps;switch(Jc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return ne(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),Rt(ve),pl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?St(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Ir())),ne(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(St(t),i!==null?(ne(t),Ls(t,i)):(ne(t),oo(t,a,null,l,n))):i?i!==e.memoizedState?(St(t),ne(t),Ls(t,i)):(ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&St(t),ne(t),oo(t,a,e,l,n)),null;case 27:if(Oi(t),n=nn.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&St(t);else{if(!l){if(t.stateNode===null)throw Error(w(166));return ne(t),null}e=vt.current,Zn(t)?gs(t):(e=_m(a,l,n),t.stateNode=e,St(t))}return ne(t),null;case 5:if(Oi(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&St(t);else{if(!l){if(t.stateNode===null)throw Error(w(166));return ne(t),null}if(i=vt.current,Zn(t))gs(t);else{var r=Pi(nn.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(a,{is:l.is}):r.createElement(a)}}i[Te]=t,i[qe]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(Me(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&St(t)}}return ne(t),oo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&St(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(w(166));if(e=nn.current,Zn(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=_e,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[Te]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||Nm(e.nodeValue,n)),e||mn(t,!0)}else e=Pi(e).createTextNode(l),e[Te]=t,t.stateNode=e}return ne(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=Zn(t),n!==null){if(e===null){if(!l)throw Error(w(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(557));e[Te]=t}else Rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),e=!1}else n=Ir(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ve(t),t):(Ve(t),null);if(t.flags&128)throw Error(w(558))}return ne(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Zn(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(w(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(w(317));a[Te]=t}else Rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),a=!1}else a=Ir(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ve(t),t):(Ve(t),null)}return Ve(t),t.flags&128?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ai(t,t.updateQueue),ne(t),null);case 4:return pl(),e===null&&wu(t.stateNode.containerInfo),ne(t),null;case 10:return Rt(t.type),ne(t),null;case 19:if(Ae(de),l=t.memoizedState,l===null)return ne(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)Vl(l,!1);else{if(se!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=qi(e),i!==null){for(t.flags|=128,Vl(l,!1),e=i.updateQueue,t.updateQueue=e,ai(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ld(n,e),n=n.sibling;return ee(de,de.current&1|2),X&&jt(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Ke()>Ki&&(t.flags|=128,a=!0,Vl(l,!1),t.lanes=4194304)}else{if(!a)if(e=qi(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ai(t,e),Vl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!X)return ne(t),null}else 2*Ke()-l.renderingStartTime>Ki&&n!==536870912&&(t.flags|=128,a=!0,Vl(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ke(),e.sibling=null,n=de.current,ee(de,a?n&1|2:n&1),X&&jt(t,l.treeForkCount),e):(ne(t),null);case 22:case 23:return Ve(t),Pc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?n&536870912&&!(t.flags&128)&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),n=t.updateQueue,n!==null&&ai(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Ae(_n),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Rt(ve),ne(t),null;case 25:return null;case 30:return null}throw Error(w(156,t.tag))}function Uv(e,t){switch(Jc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Rt(ve),pl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Oi(t),null;case 31:if(t.memoizedState!==null){if(Ve(t),t.alternate===null)throw Error(w(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ve(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ae(de),null;case 4:return pl(),null;case 10:return Rt(t.type),null;case 22:case 23:return Ve(t),Pc(),e!==null&&Ae(_n),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Rt(ve),null;case 25:return null;default:return null}}function Lh(e,t){switch(Jc(t),t.tag){case 3:Rt(ve),pl();break;case 26:case 27:case 5:Oi(t);break;case 4:pl();break;case 31:t.memoizedState!==null&&Ve(t);break;case 13:Ve(t);break;case 19:Ae(de);break;case 10:Rt(t.type);break;case 22:case 23:Ve(t),Pc(),e!==null&&Ae(_n);break;case 24:Rt(ve)}}function Ha(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,r=n.inst;l=i(),r.destroy=l}n=n.next}while(n!==a)}}catch(o){$(t,t.return,o)}}function gn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var r=l.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var c=n,u=o;try{u()}catch(d){$(a,c,d)}}}l=l.next}while(l!==i)}}catch(d){$(t,t.return,d)}}function qh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wd(t,n)}catch(l){$(e,e.return,l)}}}function Gh(e,t,n){n.props=Hn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){$(e,t,l)}}function ca(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){$(e,t,a)}}function gt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){$(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){$(e,t,a)}else n.current=null}function Xh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){$(e,e.return,a)}}function co(e,t,n){try{var l=e.stateNode;ap(l,e.type,n,t),l[qe]=t}catch(a){$(e,e.return,a)}}function Vh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&yn(e.type)||e.tag===4}function uo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&yn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function rc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ct));else if(l!==4&&(l===27&&yn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(rc(e,t,n),e=e.sibling;e!==null;)rc(e,t,n),e=e.sibling}function Zi(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&yn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Zi(e,t,n),e=e.sibling;e!==null;)Zi(e,t,n),e=e.sibling}function Qh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);Me(t,l,n),t[Te]=e,t[qe]=n}catch(i){$(e,e.return,i)}}var Tt=!1,ge=!1,so=!1,qs=typeof WeakSet=="function"?WeakSet:Set,ze=null;function Hv(e,t){if(e=e.containerInfo,hc=lr,e=Od(e),Xc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,o=-1,c=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var v;h!==n||a!==0&&h.nodeType!==3||(o=r+a),h!==i||l!==0&&h.nodeType!==3||(c=r+l),h.nodeType===3&&(r+=h.nodeValue.length),(v=h.firstChild)!==null;)f=h,h=v;for(;;){if(h===e)break t;if(f===n&&++u===a&&(o=r),f===i&&++d===l&&(c=r),(v=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=v}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(mc={focusedElem:e,selectionRange:n},lr=!1,ze=t;ze!==null;)if(t=ze,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ze=e;else for(;ze!==null;){switch(t=ze,i=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var x=Hn(n.type,a);e=l.getSnapshotBeforeUpdate(x,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(S){$(n,n.return,S)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)vc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":vc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(w(163))}if(e=t.sibling,e!==null){e.return=t.return,ze=e;break}ze=t.return}}function Zh(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:zt(e,n),l&4&&Ha(5,n);break;case 1:if(zt(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){$(n,n.return,r)}else{var a=Hn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){$(n,n.return,r)}}l&64&&qh(n),l&512&&ca(n,n.return);break;case 3:if(zt(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wd(e,t)}catch(r){$(n,n.return,r)}}break;case 27:t===null&&l&4&&Qh(n);case 26:case 5:zt(e,n),t===null&&l&4&&Xh(n),l&512&&ca(n,n.return);break;case 12:zt(e,n);break;case 31:zt(e,n),l&4&&$h(e,n);break;case 13:zt(e,n),l&4&&Wh(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zv.bind(null,n),dp(e,n))));break;case 22:if(l=n.memoizedState!==null||Tt,!l){t=t!==null&&t.memoizedState!==null||ge,a=Tt;var i=ge;Tt=l,(ge=t)&&!i?At(e,n,(n.subtreeFlags&8772)!==0):zt(e,n),Tt=a,ge=i}break;case 30:break;default:zt(e,n)}}function Kh(e){var t=e.alternate;t!==null&&(e.alternate=null,Kh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Hc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,Be=!1;function Et(e,t,n){for(n=n.child;n!==null;)Jh(e,t,n),n=n.sibling}function Jh(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Ca,n)}catch{}switch(n.tag){case 26:ge||gt(n,t),Et(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:ge||gt(n,t);var l=ce,a=Be;yn(n.type)&&(ce=n.stateNode,Be=!1),Et(e,t,n),da(n.stateNode),ce=l,Be=a;break;case 5:ge||gt(n,t);case 6:if(l=ce,a=Be,ce=null,Et(e,t,n),ce=l,Be=a,ce!==null)if(Be)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(n.stateNode)}catch(i){$(n,t,i)}else try{ce.removeChild(n.stateNode)}catch(i){$(n,t,i)}break;case 18:ce!==null&&(Be?(e=ce,ef(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),jl(e)):ef(ce,n.stateNode));break;case 4:l=ce,a=Be,ce=n.stateNode.containerInfo,Be=!0,Et(e,t,n),ce=l,Be=a;break;case 0:case 11:case 14:case 15:gn(2,n,t),ge||gn(4,n,t),Et(e,t,n);break;case 1:ge||(gt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Gh(n,t,l)),Et(e,t,n);break;case 21:Et(e,t,n);break;case 22:ge=(l=ge)||n.memoizedState!==null,Et(e,t,n),ge=l;break;default:Et(e,t,n)}}function $h(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{jl(e)}catch(n){$(t,t.return,n)}}}function Wh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jl(e)}catch(n){$(t,t.return,n)}}function Bv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new qs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new qs),t;default:throw Error(w(435,e.tag))}}function ii(e,t){var n=Bv(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=Kv.bind(null,e,l);l.then(a,a)}})}function Ue(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=e,r=t,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(yn(o.type)){ce=o.stateNode,Be=!1;break e}break;case 5:ce=o.stateNode,Be=!1;break e;case 3:case 4:ce=o.stateNode.containerInfo,Be=!0;break e}o=o.return}if(ce===null)throw Error(w(160));Jh(i,r,a),ce=null,Be=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fh(t,e),t=t.sibling}var ft=null;function Fh(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ue(t,e),He(e),l&4&&(gn(3,e,e.return),Ha(3,e),gn(5,e,e.return));break;case 1:Ue(t,e),He(e),l&512&&(ge||n===null||gt(n,n.return)),l&64&&Tt&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=ft;if(Ue(t,e),He(e),l&512&&(ge||n===null||gt(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Ra]||i[Te]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),Me(i,l,n),i[Te]=e,Ne(i),l=i;break e;case"link":var r=cf("link","href",a).get(l+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(i=r[o],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break t}}i=a.createElement(l),Me(i,l,n),a.head.appendChild(i);break;case"meta":if(r=cf("meta","content",a).get(l+(n.content||""))){for(o=0;o<r.length;o++)if(i=r[o],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break t}}i=a.createElement(l),Me(i,l,n),a.head.appendChild(i);break;default:throw Error(w(468,l))}i[Te]=e,Ne(i),l=i}e.stateNode=l}else uf(a,e.type,e.stateNode);else e.stateNode=of(a,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?uf(a,e.type,e.stateNode):of(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&co(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ue(t,e),He(e),l&512&&(ge||n===null||gt(n,n.return)),n!==null&&l&4&&co(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ue(t,e),He(e),l&512&&(ge||n===null||gt(n,n.return)),e.flags&32){a=e.stateNode;try{bl(a,"")}catch(x){$(e,e.return,x)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,co(e,a,n!==null?n.memoizedProps:a)),l&1024&&(so=!0);break;case 6:if(Ue(t,e),He(e),l&4){if(e.stateNode===null)throw Error(w(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(x){$(e,e.return,x)}}break;case 3:if(Ai=null,a=ft,ft=er(t.containerInfo),Ue(t,e),ft=a,He(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{jl(t.containerInfo)}catch(x){$(e,e.return,x)}so&&(so=!1,Ih(e));break;case 4:l=ft,ft=er(e.stateNode.containerInfo),Ue(t,e),He(e),ft=l;break;case 12:Ue(t,e),He(e);break;case 31:Ue(t,e),He(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ii(e,l)));break;case 13:Ue(t,e),He(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(jr=Ke()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ii(e,l)));break;case 22:a=e.memoizedState!==null;var c=n!==null&&n.memoizedState!==null,u=Tt,d=ge;if(Tt=u||a,ge=d||c,Ue(t,e),ge=d,Tt=u,He(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||c||Tt||ge||Nn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){c=n=t;try{if(i=c.stateNode,a)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=c.stateNode;var h=c.memoizedProps.style,f=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(x){$(c,c.return,x)}}}else if(t.tag===6){if(n===null){c=t;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(x){$(c,c.return,x)}}}else if(t.tag===18){if(n===null){c=t;try{var v=c.stateNode;a?tf(v,!0):tf(c.stateNode,!1)}catch(x){$(c,c.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,ii(e,n))));break;case 19:Ue(t,e),He(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ii(e,l)));break;case 30:break;case 21:break;default:Ue(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Vh(l)){n=l;break}l=l.return}if(n==null)throw Error(w(160));switch(n.tag){case 27:var a=n.stateNode,i=uo(e);Zi(e,i,a);break;case 5:var r=n.stateNode;n.flags&32&&(bl(r,""),n.flags&=-33);var o=uo(e);Zi(e,o,r);break;case 3:case 4:var c=n.stateNode.containerInfo,u=uo(e);rc(e,u,c);break;default:throw Error(w(161))}}catch(d){$(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ih(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ih(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function zt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zh(e,t.alternate,t),t=t.sibling}function Nn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:gn(4,t,t.return),Nn(t);break;case 1:gt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Gh(t,t.return,n),Nn(t);break;case 27:da(t.stateNode);case 26:case 5:gt(t,t.return),Nn(t);break;case 22:t.memoizedState===null&&Nn(t);break;case 30:Nn(t);break;default:Nn(t)}e=e.sibling}}function At(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:At(a,i,n),Ha(4,i);break;case 1:if(At(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(u){$(l,l.return,u)}if(l=i,a=l.updateQueue,a!==null){var o=l.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)$d(c[a],o)}catch(u){$(l,l.return,u)}}n&&r&64&&qh(i),ca(i,i.return);break;case 27:Qh(i);case 26:case 5:At(a,i,n),n&&l===null&&r&4&&Xh(i),ca(i,i.return);break;case 12:At(a,i,n);break;case 31:At(a,i,n),n&&r&4&&$h(a,i);break;case 13:At(a,i,n),n&&r&4&&Wh(a,i);break;case 22:i.memoizedState===null&&At(a,i,n),ca(i,i.return);break;case 30:break;default:At(a,i,n)}t=t.sibling}}function gu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&ka(n))}function vu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ka(e))}function st(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ph(e,t,n,l),t=t.sibling}function Ph(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:st(e,t,n,l),a&2048&&Ha(9,t);break;case 1:st(e,t,n,l);break;case 3:st(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&ka(e)));break;case 12:if(a&2048){st(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,o=i.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){$(t,t.return,c)}}else st(e,t,n,l);break;case 31:st(e,t,n,l);break;case 13:st(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?st(e,t,n,l):ua(e,t):i._visibility&2?st(e,t,n,l):(i._visibility|=2,Wn(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),a&2048&&gu(r,t);break;case 24:st(e,t,n,l),a&2048&&vu(t.alternate,t);break;default:st(e,t,n,l)}}function Wn(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,o=n,c=l,u=r.flags;switch(r.tag){case 0:case 11:case 15:Wn(i,r,o,c,a),Ha(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?Wn(i,r,o,c,a):ua(i,r):(d._visibility|=2,Wn(i,r,o,c,a)),a&&u&2048&&gu(r.alternate,r);break;case 24:Wn(i,r,o,c,a),a&&u&2048&&vu(r.alternate,r);break;default:Wn(i,r,o,c,a)}t=t.sibling}}function ua(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:ua(n,l),a&2048&&gu(l.alternate,l);break;case 24:ua(n,l),a&2048&&vu(l.alternate,l);break;default:ua(n,l)}t=t.sibling}}var Il=8192;function Kn(e,t,n){if(e.subtreeFlags&Il)for(e=e.child;e!==null;)em(e,t,n),e=e.sibling}function em(e,t,n){switch(e.tag){case 26:Kn(e,t,n),e.flags&Il&&e.memoizedState!==null&&zp(n,ft,e.memoizedState,e.memoizedProps);break;case 5:Kn(e,t,n);break;case 3:case 4:var l=ft;ft=er(e.stateNode.containerInfo),Kn(e,t,n),ft=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Il,Il=16777216,Kn(e,t,n),Il=l):Kn(e,t,n));break;default:Kn(e,t,n)}}function tm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Ql(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ze=l,lm(l,e)}tm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)nm(e),e=e.sibling}function nm(e){switch(e.tag){case 0:case 11:case 15:Ql(e),e.flags&2048&&gn(9,e,e.return);break;case 3:Ql(e);break;case 12:Ql(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,zi(e)):Ql(e);break;default:Ql(e)}}function zi(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];ze=l,lm(l,e)}tm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:gn(8,t,t.return),zi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,zi(t));break;default:zi(t)}e=e.sibling}}function lm(e,t){for(;ze!==null;){var n=ze;switch(n.tag){case 0:case 11:case 15:gn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:ka(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,ze=l;else e:for(n=e;ze!==null;){l=ze;var a=l.sibling,i=l.return;if(Kh(l),l===n){ze=null;break e}if(a!==null){a.return=i,ze=a;break e}ze=i}}}var Yv={getCacheForType:function(e){var t=Ce(ve),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Ce(ve).controller.signal}},Lv=typeof WeakMap=="function"?WeakMap:Map,Z=0,P=null,q=null,G=0,J=0,Xe=null,It=!1,Dl=!1,pu=!1,Yt=0,se=0,vn=0,Mn=0,yu=0,Ze=0,El=0,sa=null,Ye=null,oc=!1,jr=0,am=0,Ki=1/0,Ji=null,on=null,we=0,cn=null,zl=null,Dt=0,cc=0,uc=null,im=null,fa=0,sc=null;function We(){return Z&2&&G!==0?G&-G:U.T!==null?xu():md()}function rm(){if(Ze===0)if(!(G&536870912)||X){var e=Fa;Fa<<=1,!(Fa&3932160)&&(Fa=262144),Ze=e}else Ze=536870912;return e=Ie.current,e!==null&&(e.flags|=32),Ze}function Le(e,t,n){(e===P&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Nl(e,0),Pt(e,G,Ze,!1)),Oa(e,n),(!(Z&2)||e!==P)&&(e===P&&(!(Z&2)&&(Mn|=n),se===4&&Pt(e,G,Ze,!1)),yt(e))}function om(e,t,n){if(Z&6)throw Error(w(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ma(e,t),a=l?Xv(e,t):fo(e,t,!0),i=l;do{if(a===0){Dl&&!l&&Pt(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!qv(n)){a=fo(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var o=e;a=sa;var c=o.current.memoizedState.isDehydrated;if(c&&(Nl(o,r).flags|=256),r=fo(o,r,!1),r!==2){if(pu&&!c){o.errorRecoveryDisabledLanes|=i,Mn|=i,a=4;break e}i=Ye,Ye=a,i!==null&&(Ye===null?Ye=i:Ye.push.apply(Ye,i))}a=r}if(i=!1,a!==2)continue}}if(a===1){Nl(e,0),Pt(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(w(345));case 4:if((t&4194048)!==t)break;case 6:Pt(l,t,Ze,!It);break e;case 2:Ye=null;break;case 3:case 5:break;default:throw Error(w(329))}if((t&62914560)===t&&(a=jr+300-Ke(),10<a)){if(Pt(l,t,Ze,!It),vr(l,0,!0)!==0)break e;Dt=t,l.timeoutHandle=jm(Gs.bind(null,l,n,Ye,Ji,oc,t,Ze,Mn,El,It,i,"Throttled",-0,0),a);break e}Gs(l,n,Ye,Ji,oc,t,Ze,Mn,El,It,i,null,-0,0)}}break}while(1);yt(e)}function Gs(e,t,n,l,a,i,r,o,c,u,d,h,f,v){if(e.timeoutHandle=-1,h=t.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ct},em(t,i,h);var x=(i&62914560)===i?jr-Ke():(i&4194048)===i?am-Ke():0;if(x=Np(h,x),x!==null){Dt=i,e.cancelPendingCommit=x(Vs.bind(null,e,t,i,n,l,a,r,o,c,d,h,null,f,v)),Pt(e,i,r,!u);return}}Vs(e,t,i,n,l,a,r,o,c)}function qv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!Fe(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Pt(e,t,n,l){t&=~yu,t&=~Mn,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-$e(a),r=1<<i;l[i]=-1,a&=~r}n!==0&&fd(e,n,t)}function Tr(){return Z&6?!0:(Ba(0,!1),!1)}function bu(){if(q!==null){if(J===0)var e=q.return;else e=q,Mt=Gn=null,au(e),ml=null,ba=0,e=q;for(;e!==null;)Lh(e.alternate,e),e=e.return;q=null}}function Nl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,op(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Dt=0,bu(),P=e,q=n=Ot(e.current,null),G=t,J=0,Xe=null,It=!1,Dl=Ma(e,t),pu=!1,El=Ze=yu=Mn=vn=se=0,Ye=sa=null,oc=!1,t&8&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-$e(l),i=1<<a;t|=e[a],l&=~i}return Yt=t,xr(),n}function cm(e,t){B=null,U.H=wa,t===Rl||t===Sr?(t=xs(),J=3):t===Fc?(t=xs(),J=4):J=t===hu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Xe=t,q===null&&(se=1,Vi(e,at(t,e.current)))}function um(){var e=Ie.current;return e===null?!0:(G&4194048)===G?rt===null:(G&62914560)===G||G&536870912?e===rt:!1}function sm(){var e=U.H;return U.H=wa,e===null?wa:e}function fm(){var e=U.A;return U.A=Yv,e}function $i(){se=4,It||(G&4194048)!==G&&Ie.current!==null||(Dl=!0),!(vn&134217727)&&!(Mn&134217727)||P===null||Pt(P,G,Ze,!1)}function fo(e,t,n){var l=Z;Z|=2;var a=sm(),i=fm();(P!==e||G!==t)&&(Ji=null,Nl(e,t)),t=!1;var r=se;e:do try{if(J!==0&&q!==null){var o=q,c=Xe;switch(J){case 8:bu(),r=6;break e;case 3:case 2:case 9:case 6:Ie.current===null&&(t=!0);var u=J;if(J=0,Xe=null,ul(e,o,c,u),n&&Dl){r=0;break e}break;default:u=J,J=0,Xe=null,ul(e,o,c,u)}}Gv(),r=se;break}catch(d){cm(e,d)}while(1);return t&&e.shellSuspendCounter++,Mt=Gn=null,Z=l,U.H=a,U.A=i,q===null&&(P=null,G=0,xr()),r}function Gv(){for(;q!==null;)dm(q)}function Xv(e,t){var n=Z;Z|=2;var l=sm(),a=fm();P!==e||G!==t?(Ji=null,Ki=Ke()+500,Nl(e,t)):Dl=Ma(e,t);e:do try{if(J!==0&&q!==null){t=q;var i=Xe;t:switch(J){case 1:J=0,Xe=null,ul(e,t,i,1);break;case 2:case 9:if(bs(i)){J=0,Xe=null,Xs(t);break}t=function(){J!==2&&J!==9||P!==e||(J=7),yt(e)},i.then(t,t);break e;case 3:J=7;break e;case 4:J=5;break e;case 7:bs(i)?(J=0,Xe=null,Xs(t)):(J=0,Xe=null,ul(e,t,i,7));break;case 5:var r=null;switch(q.tag){case 26:r=q.memoizedState;case 5:case 27:var o=q;if(r?Om(r):o.stateNode.complete){J=0,Xe=null;var c=o.sibling;if(c!==null)q=c;else{var u=o.return;u!==null?(q=u,_r(u)):q=null}break t}}J=0,Xe=null,ul(e,t,i,5);break;case 6:J=0,Xe=null,ul(e,t,i,6);break;case 8:bu(),se=6;break e;default:throw Error(w(462))}}Vv();break}catch(d){cm(e,d)}while(1);return Mt=Gn=null,U.H=l,U.A=a,Z=n,q!==null?0:(P=null,G=0,xr(),se)}function Vv(){for(;q!==null&&!hg();)dm(q)}function dm(e){var t=Yh(e.alternate,e,Yt);e.memoizedProps=e.pendingProps,t===null?_r(e):q=t}function Xs(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Us(n,t,t.pendingProps,t.type,void 0,G);break;case 11:t=Us(n,t,t.pendingProps,t.type.render,t.ref,G);break;case 5:au(t);default:Lh(n,t),t=q=Ld(t,Yt),t=Yh(n,t,Yt)}e.memoizedProps=e.pendingProps,t===null?_r(e):q=t}function ul(e,t,n,l){Mt=Gn=null,au(t),ml=null,ba=0;var a=t.return;try{if(Ov(e,a,t,n,G)){se=1,Vi(e,at(n,e.current)),q=null;return}}catch(i){if(a!==null)throw q=a,i;se=1,Vi(e,at(n,e.current)),q=null;return}t.flags&32768?(X||l===1?e=!0:Dl||G&536870912?e=!1:(It=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ie.current,l!==null&&l.tag===13&&(l.flags|=16384))),hm(t,e)):_r(t)}function _r(e){var t=e;do{if(t.flags&32768){hm(t,It);return}e=t.return;var n=kv(t.alternate,t,Yt);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);se===0&&(se=5)}function hm(e,t){do{var n=Uv(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);se=6,q=null}function Vs(e,t,n,l,a,i,r,o,c){e.cancelPendingCommit=null;do Cr();while(we!==0);if(Z&6)throw Error(w(327));if(t!==null){if(t===e.current)throw Error(w(177));if(i=t.lanes|t.childLanes,i|=Vc,Eg(e,n,i,r,o,c),e===P&&(q=P=null,G=0),zl=t,cn=e,Dt=n,cc=i,uc=a,im=l,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Jv(Ri,function(){return ym(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,t.subtreeFlags&13878||l){l=U.T,U.T=null,a=K.p,K.p=2,r=Z,Z|=4;try{Hv(e,t,n)}finally{Z=r,K.p=a,U.T=l}}we=1,mm(),gm(),vm()}}function mm(){if(we===1){we=0;var e=cn,t=zl,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=U.T,U.T=null;var l=K.p;K.p=2;var a=Z;Z|=4;try{Fh(t,e);var i=mc,r=Od(e.containerInfo),o=i.focusedElem,c=i.selectionRange;if(r!==o&&o&&o.ownerDocument&&Md(o.ownerDocument.documentElement,o)){if(c!==null&&Xc(o)){var u=c.start,d=c.end;if(d===void 0&&(d=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(d,o.value.length);else{var h=o.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var v=f.getSelection(),x=o.textContent.length,S=Math.min(c.start,x),z=c.end===void 0?S:Math.min(c.end,x);!v.extend&&S>z&&(r=z,z=S,S=r);var g=ds(o,S),m=ds(o,z);if(g&&m&&(v.rangeCount!==1||v.anchorNode!==g.node||v.anchorOffset!==g.offset||v.focusNode!==m.node||v.focusOffset!==m.offset)){var p=h.createRange();p.setStart(g.node,g.offset),v.removeAllRanges(),S>z?(v.addRange(p),v.extend(m.node,m.offset)):(p.setEnd(m.node,m.offset),v.addRange(p))}}}}for(h=[],v=o;v=v.parentNode;)v.nodeType===1&&h.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var b=h[o];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}lr=!!hc,mc=hc=null}finally{Z=a,K.p=l,U.T=n}}e.current=t,we=2}}function gm(){if(we===2){we=0;var e=cn,t=zl,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=U.T,U.T=null;var l=K.p;K.p=2;var a=Z;Z|=4;try{Zh(e,t.alternate,t)}finally{Z=a,K.p=l,U.T=n}}we=3}}function vm(){if(we===4||we===3){we=0,mg();var e=cn,t=zl,n=Dt,l=im;t.subtreeFlags&10256||t.flags&10256?we=5:(we=0,zl=cn=null,pm(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(on=null),Uc(n),t=t.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Ca,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=U.T,a=K.p,K.p=2,U.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var o=l[r];i(o.value,{componentStack:o.stack})}}finally{U.T=t,K.p=a}}Dt&3&&Cr(),yt(e),a=e.pendingLanes,n&261930&&a&42?e===sc?fa++:(fa=0,sc=e):fa=0,Ba(0,!1)}}function pm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,ka(t)))}function Cr(){return mm(),gm(),vm(),ym()}function ym(){if(we!==5)return!1;var e=cn,t=cc;cc=0;var n=Uc(Dt),l=U.T,a=K.p;try{K.p=32>n?32:n,U.T=null,n=uc,uc=null;var i=cn,r=Dt;if(we=0,zl=cn=null,Dt=0,Z&6)throw Error(w(331));var o=Z;if(Z|=4,nm(i.current),Ph(i,i.current,r,n),Z=o,Ba(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Ca,i)}catch{}return!0}finally{K.p=a,U.T=l,pm(e,t)}}function Qs(e,t,n){t=at(n,t),t=lc(e.stateNode,t,2),e=rn(e,t,2),e!==null&&(Oa(e,2),yt(e))}function $(e,t,n){if(e.tag===3)Qs(e,e,n);else for(;t!==null;){if(t.tag===3){Qs(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(on===null||!on.has(l))){e=at(n,e),n=Rh(2),l=rn(t,n,2),l!==null&&(Dh(n,l,t,e),Oa(l,2),yt(l));break}}t=t.return}}function ho(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Lv;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(pu=!0,a.add(n),e=Qv.bind(null,e,t,n),t.then(e,e))}function Qv(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,P===e&&(G&n)===n&&(se===4||se===3&&(G&62914560)===G&&300>Ke()-jr?!(Z&2)&&Nl(e,0):yu|=n,El===G&&(El=0)),yt(e)}function bm(e,t){t===0&&(t=sd()),e=qn(e,t),e!==null&&(Oa(e,t),yt(e))}function Zv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bm(e,n)}function Kv(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(w(314))}l!==null&&l.delete(t),bm(e,n)}function Jv(e,t){return Dc(e,t)}var Wi=null,Fn=null,fc=!1,Fi=!1,mo=!1,en=0;function yt(e){e!==Fn&&e.next===null&&(Fn===null?Wi=Fn=e:Fn=Fn.next=e),Fi=!0,fc||(fc=!0,Wv())}function Ba(e,t){if(!mo&&Fi){mo=!0;do for(var n=!1,l=Wi;l!==null;){if(!t)if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var r=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-$e(42|e)+1)-1,i&=a&~(r&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Zs(l,i))}else i=G,i=vr(l,l===P?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),!(i&3)||Ma(l,i)||(n=!0,Zs(l,i));l=l.next}while(n);mo=!1}}function $v(){xm()}function xm(){Fi=fc=!1;var e=0;en!==0&&rp()&&(e=en);for(var t=Ke(),n=null,l=Wi;l!==null;){var a=l.next,i=wm(l,t);i===0?(l.next=null,n===null?Wi=a:n.next=a,a===null&&(Fn=n)):(n=l,(e!==0||i&3)&&(Fi=!0)),l=a}we!==0&&we!==5||Ba(e,!1),en!==0&&(en=0)}function wm(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-$e(i),o=1<<r,c=a[r];c===-1?(!(o&n)||o&l)&&(a[r]=Sg(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}if(t=P,n=G,n=vr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&qr(l),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Ma(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&qr(l),Uc(n)){case 2:case 8:n=cd;break;case 32:n=Ri;break;case 268435456:n=ud;break;default:n=Ri}return l=Sm.bind(null,e),n=Dc(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&qr(l),e.callbackPriority=2,e.callbackNode=null,2}function Sm(e,t){if(we!==0&&we!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Cr()&&e.callbackNode!==n)return null;var l=G;return l=vr(e,e===P?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(om(e,l,t),wm(e,Ke()),e.callbackNode!=null&&e.callbackNode===n?Sm.bind(null,e):null)}function Zs(e,t){if(Cr())return null;om(e,t,!0)}function Wv(){cp(function(){Z&6?Dc(od,$v):xm()})}function xu(){if(en===0){var e=xl;e===0&&(e=Wa,Wa<<=1,!(Wa&261888)&&(Wa=256)),en=e}return en}function Ks(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:gi(""+e)}function Js(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Fv(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Ks((a[qe]||null).action),r=l.submitter;r&&(t=(t=r[qe]||null)?Ks(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var o=new pr("action","action",null,l,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(en!==0){var c=r?Js(a,r):new FormData(a);tc(n,{pending:!0,data:c,method:a.method,action:i},null,c)}}else typeof i=="function"&&(o.preventDefault(),c=r?Js(a,r):new FormData(a),tc(n,{pending:!0,data:c,method:a.method,action:i},i,c))},currentTarget:a}]})}}for(var go=0;go<Xo.length;go++){var vo=Xo[go],Iv=vo.toLowerCase(),Pv=vo[0].toUpperCase()+vo.slice(1);dt(Iv,"on"+Pv)}dt(Dd,"onAnimationEnd");dt(kd,"onAnimationIteration");dt(Ud,"onAnimationStart");dt("dblclick","onDoubleClick");dt("focusin","onFocus");dt("focusout","onBlur");dt(gv,"onTransitionRun");dt(vv,"onTransitionStart");dt(pv,"onTransitionCancel");dt(Hd,"onTransitionEnd");yl("onMouseEnter",["mouseout","mouseover"]);yl("onMouseLeave",["mouseout","mouseover"]);yl("onPointerEnter",["pointerout","pointerover"]);yl("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Sa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ep=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Sa));function Em(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var o=l[r],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==i&&a.isPropagationStopped())break e;i=o,a.currentTarget=u;try{i(a)}catch(d){ki(d)}a.currentTarget=null,i=c}else for(r=0;r<l.length;r++){if(o=l[r],c=o.instance,u=o.currentTarget,o=o.listener,c!==i&&a.isPropagationStopped())break e;i=o,a.currentTarget=u;try{i(a)}catch(d){ki(d)}a.currentTarget=null,i=c}}}}function L(e,t){var n=t[ko];n===void 0&&(n=t[ko]=new Set);var l=e+"__bubble";n.has(l)||(zm(t,e,2,!1),n.add(l))}function po(e,t,n){var l=0;t&&(l|=4),zm(n,e,l,t)}var ri="_reactListening"+Math.random().toString(36).slice(2);function wu(e){if(!e[ri]){e[ri]=!0,gd.forEach(function(n){n!=="selectionchange"&&(ep.has(n)||po(n,!1,e),po(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ri]||(t[ri]=!0,po("selectionchange",!1,t))}}function zm(e,t,n,l){switch(Hm(t)){case 2:var a=Tp;break;case 8:a=_p;break;default:a=Nu}n=a.bind(null,t,n,e),a=void 0,!Lo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function yo(e,t,n,l,a){var i=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var o=l.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=l.return;r!==null;){var c=r.tag;if((c===3||c===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=el(o),r===null)return;if(c=r.tag,c===5||c===6||c===26||c===27){l=i=r;continue e}o=o.parentNode}}l=l.return}Ed(function(){var u=i,d=Yc(n),h=[];e:{var f=Bd.get(e);if(f!==void 0){var v=pr,x=e;switch(e){case"keypress":if(pi(n)===0)break e;case"keydown":case"keyup":v=Kg;break;case"focusin":x="focus",v=Zr;break;case"focusout":x="blur",v=Zr;break;case"beforeblur":case"afterblur":v=Zr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Wg;break;case Dd:case kd:case Ud:v=Bg;break;case Hd:v=Ig;break;case"scroll":case"scrollend":v=Rg;break;case"wheel":v=ev;break;case"copy":case"cut":case"paste":v=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=as;break;case"toggle":case"beforetoggle":v=nv}var S=(t&4)!==0,z=!S&&(e==="scroll"||e==="scrollend"),g=S?f!==null?f+"Capture":null:f;S=[];for(var m=u,p;m!==null;){var b=m;if(p=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||p===null||g===null||(b=ma(m,g),b!=null&&S.push(Ea(m,b,p))),z)break;m=m.return}0<S.length&&(f=new v(f,x,null,n,d),h.push({event:f,listeners:S}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==Yo&&(x=n.relatedTarget||n.fromElement)&&(el(x)||x[Cl]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?el(x):null,x!==null&&(z=_a(x),S=x.tag,x!==z||S!==5&&S!==27&&S!==6)&&(x=null)):(v=null,x=u),v!==x)){if(S=ns,b="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=as,b="onPointerLeave",g="onPointerEnter",m="pointer"),z=v==null?f:Wl(v),p=x==null?f:Wl(x),f=new S(b,m+"leave",v,n,d),f.target=z,f.relatedTarget=p,b=null,el(d)===u&&(S=new S(g,m+"enter",x,n,d),S.target=p,S.relatedTarget=z,b=S),z=b,v&&x)t:{for(S=tp,g=v,m=x,p=0,b=g;b;b=S(b))p++;b=0;for(var T=m;T;T=S(T))b++;for(;0<p-b;)g=S(g),p--;for(;0<b-p;)m=S(m),b--;for(;p--;){if(g===m||m!==null&&g===m.alternate){S=g;break t}g=S(g),m=S(m)}S=null}else S=null;v!==null&&$s(h,f,v,S,!1),x!==null&&z!==null&&$s(h,z,x,S,!0)}}e:{if(f=u?Wl(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var O=cs;else if(os(f))if(_d)O=dv;else{O=sv;var j=uv}else v=f.nodeName,!v||v.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?u&&Bc(u.elementType)&&(O=cs):O=fv;if(O&&(O=O(e,u))){Td(h,O,n,d);break e}j&&j(e,f,u),e==="focusout"&&u&&f.type==="number"&&u.memoizedProps.value!=null&&Bo(f,"number",f.value)}switch(j=u?Wl(u):window,e){case"focusin":(os(j)||j.contentEditable==="true")&&(ll=j,qo=u,na=null);break;case"focusout":na=qo=ll=null;break;case"mousedown":Go=!0;break;case"contextmenu":case"mouseup":case"dragend":Go=!1,hs(h,n,d);break;case"selectionchange":if(mv)break;case"keydown":case"keyup":hs(h,n,d)}var N;if(Gc)e:{switch(e){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else nl?Ad(e,n)&&(_="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(Nd&&n.locale!=="ko"&&(nl||_!=="onCompositionStart"?_==="onCompositionEnd"&&nl&&(N=zd()):(Ft=d,Lc="value"in Ft?Ft.value:Ft.textContent,nl=!0)),j=Ii(u,_),0<j.length&&(_=new ls(_,e,null,n,d),h.push({event:_,listeners:j}),N?_.data=N:(N=jd(n),N!==null&&(_.data=N)))),(N=av?iv(e,n):rv(e,n))&&(_=Ii(u,"onBeforeInput"),0<_.length&&(j=new ls("onBeforeInput","beforeinput",null,n,d),h.push({event:j,listeners:_}),j.data=N)),Fv(h,e,u,n,d)}Em(h,t)})}function Ea(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ii(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=ma(e,n),a!=null&&l.unshift(Ea(e,a,i)),a=ma(e,t),a!=null&&l.push(Ea(e,a,i))),e.tag===3)return l;e=e.return}return[]}function tp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $s(e,t,n,l,a){for(var i=t._reactName,r=[];n!==null&&n!==l;){var o=n,c=o.alternate,u=o.stateNode;if(o=o.tag,c!==null&&c===l)break;o!==5&&o!==26&&o!==27||u===null||(c=u,a?(u=ma(n,i),u!=null&&r.unshift(Ea(n,u,c))):a||(u=ma(n,i),u!=null&&r.push(Ea(n,u,c)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var np=/\r\n?/g,lp=/\u0000|\uFFFD/g;function Ws(e){return(typeof e=="string"?e:""+e).replace(np,`
`).replace(lp,"")}function Nm(e,t){return t=Ws(t),Ws(e)===t}function W(e,t,n,l,a,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||bl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&bl(e,""+l);break;case"className":Pa(e,"class",l);break;case"tabIndex":Pa(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":Pa(e,n,l);break;case"style":Sd(e,l,i);break;case"data":if(t!=="object"){Pa(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=gi(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&W(e,t,"name",a.name,a,null),W(e,t,"formEncType",a.formEncType,a,null),W(e,t,"formMethod",a.formMethod,a,null),W(e,t,"formTarget",a.formTarget,a,null)):(W(e,t,"encType",a.encType,a,null),W(e,t,"method",a.method,a,null),W(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=gi(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Ct);break;case"onScroll":l!=null&&L("scroll",e);break;case"onScrollEnd":l!=null&&L("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(w(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(w(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=gi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":L("beforetoggle",e),L("toggle",e),mi(e,"popover",l);break;case"xlinkActuate":wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":wt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":wt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":wt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":wt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":mi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Mg.get(n)||n,mi(e,n,l))}}function dc(e,t,n,l,a,i){switch(n){case"style":Sd(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(w(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(w(60));e.innerHTML=n}}break;case"children":typeof l=="string"?bl(e,l):(typeof l=="number"||typeof l=="bigint")&&bl(e,""+l);break;case"onScroll":l!=null&&L("scroll",e);break;case"onScrollEnd":l!=null&&L("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ct);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=e[qe]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):mi(e,n,l)}}}function Me(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":L("error",e),L("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(w(137,t));default:W(e,t,i,r,n,null)}}a&&W(e,t,"srcSet",n.srcSet,n,null),l&&W(e,t,"src",n.src,n,null);return;case"input":L("invalid",e);var o=i=r=a=null,c=null,u=null;for(l in n)if(n.hasOwnProperty(l)){var d=n[l];if(d!=null)switch(l){case"name":a=d;break;case"type":r=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":i=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(w(137,t));break;default:W(e,t,l,d,n,null)}}bd(e,i,o,c,u,r,a,!1);return;case"select":L("invalid",e),l=r=i=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":r=o;break;case"multiple":l=o;default:W(e,t,a,o,n,null)}t=i,n=r,e.multiple=!!l,t!=null?fl(e,!!l,t,!1):n!=null&&fl(e,!!l,n,!0);return;case"textarea":L("invalid",e),i=a=l=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":l=o;break;case"defaultValue":a=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(w(91));break;default:W(e,t,r,o,n,null)}wd(e,l,a,i);return;case"option":for(c in n)if(n.hasOwnProperty(c)&&(l=n[c],l!=null))switch(c){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:W(e,t,c,l,n,null)}return;case"dialog":L("beforetoggle",e),L("toggle",e),L("cancel",e),L("close",e);break;case"iframe":case"object":L("load",e);break;case"video":case"audio":for(l=0;l<Sa.length;l++)L(Sa[l],e);break;case"image":L("error",e),L("load",e);break;case"details":L("toggle",e);break;case"embed":case"source":case"link":L("error",e),L("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(l=n[u],l!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(w(137,t));default:W(e,t,u,l,n,null)}return;default:if(Bc(t)){for(d in n)n.hasOwnProperty(d)&&(l=n[d],l!==void 0&&dc(e,t,d,l,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(l=n[o],l!=null&&W(e,t,o,l,n,null))}function ap(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,r=null,o=null,c=null,u=null,d=null;for(v in n){var h=n[v];if(n.hasOwnProperty(v)&&h!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":c=h;default:l.hasOwnProperty(v)||W(e,t,v,null,l,h)}}for(var f in l){var v=l[f];if(h=n[f],l.hasOwnProperty(f)&&(v!=null||h!=null))switch(f){case"type":i=v;break;case"name":a=v;break;case"checked":u=v;break;case"defaultChecked":d=v;break;case"value":r=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(w(137,t));break;default:v!==h&&W(e,t,f,v,l,h)}}Ho(e,r,o,c,u,d,i,a);return;case"select":v=r=o=f=null;for(i in n)if(c=n[i],n.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":v=c;default:l.hasOwnProperty(i)||W(e,t,i,null,l,c)}for(a in l)if(i=l[a],c=n[a],l.hasOwnProperty(a)&&(i!=null||c!=null))switch(a){case"value":f=i;break;case"defaultValue":o=i;break;case"multiple":r=i;default:i!==c&&W(e,t,a,i,l,c)}t=o,n=r,l=v,f!=null?fl(e,!!n,f,!1):!!l!=!!n&&(t!=null?fl(e,!!n,t,!0):fl(e,!!n,n?[]:"",!1));return;case"textarea":v=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:W(e,t,o,null,l,a)}for(r in l)if(a=l[r],i=n[r],l.hasOwnProperty(r)&&(a!=null||i!=null))switch(r){case"value":f=a;break;case"defaultValue":v=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(w(91));break;default:a!==i&&W(e,t,r,a,l,i)}xd(e,f,v);return;case"option":for(var x in n)if(f=n[x],n.hasOwnProperty(x)&&f!=null&&!l.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:W(e,t,x,null,l,f)}for(c in l)if(f=l[c],v=n[c],l.hasOwnProperty(c)&&f!==v&&(f!=null||v!=null))switch(c){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:W(e,t,c,f,l,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)f=n[S],n.hasOwnProperty(S)&&f!=null&&!l.hasOwnProperty(S)&&W(e,t,S,null,l,f);for(u in l)if(f=l[u],v=n[u],l.hasOwnProperty(u)&&f!==v&&(f!=null||v!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(w(137,t));break;default:W(e,t,u,f,l,v)}return;default:if(Bc(t)){for(var z in n)f=n[z],n.hasOwnProperty(z)&&f!==void 0&&!l.hasOwnProperty(z)&&dc(e,t,z,void 0,l,f);for(d in l)f=l[d],v=n[d],!l.hasOwnProperty(d)||f===v||f===void 0&&v===void 0||dc(e,t,d,f,l,v);return}}for(var g in n)f=n[g],n.hasOwnProperty(g)&&f!=null&&!l.hasOwnProperty(g)&&W(e,t,g,null,l,f);for(h in l)f=l[h],v=n[h],!l.hasOwnProperty(h)||f===v||f==null&&v==null||W(e,t,h,f,l,v)}function Fs(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ip(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,r=a.initiatorType,o=a.duration;if(i&&o&&Fs(r)){for(r=0,o=a.responseEnd,l+=1;l<n.length;l++){var c=n[l],u=c.startTime;if(u>o)break;var d=c.transferSize,h=c.initiatorType;d&&Fs(h)&&(c=c.responseEnd,r+=d*(c<o?1:(o-u)/(c-u)))}if(--l,t+=8*(i+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var hc=null,mc=null;function Pi(e){return e.nodeType===9?e:e.ownerDocument}function Is(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Am(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function gc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var bo=null;function rp(){var e=window.event;return e&&e.type==="popstate"?e===bo?!1:(bo=e,!0):(bo=null,!1)}var jm=typeof setTimeout=="function"?setTimeout:void 0,op=typeof clearTimeout=="function"?clearTimeout:void 0,Ps=typeof Promise=="function"?Promise:void 0,cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ps<"u"?function(e){return Ps.resolve(null).then(e).catch(up)}:jm;function up(e){setTimeout(function(){throw e})}function yn(e){return e==="head"}function ef(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),jl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")da(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,da(n);for(var i=n.firstChild;i;){var r=i.nextSibling,o=i.nodeName;i[Ra]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=r}}else n==="body"&&da(e.ownerDocument.body);n=a}while(n);jl(t)}function tf(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function vc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":vc(n),Hc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function sp(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Ra])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ot(e.nextSibling),e===null)break}return null}function fp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ot(e.nextSibling),e===null))return null;return e}function Tm(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ot(e.nextSibling),e===null))return null;return e}function pc(e){return e.data==="$?"||e.data==="$~"}function yc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dp(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ot(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var bc=null;function nf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ot(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function lf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function _m(e,t,n){switch(t=Pi(n),e){case"html":if(e=t.documentElement,!e)throw Error(w(452));return e;case"head":if(e=t.head,!e)throw Error(w(453));return e;case"body":if(e=t.body,!e)throw Error(w(454));return e;default:throw Error(w(451))}}function da(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Hc(e)}var ct=new Map,af=new Set;function er(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Lt=K.d;K.d={f:hp,r:mp,D:gp,C:vp,L:pp,m:yp,X:xp,S:bp,M:wp};function hp(){var e=Lt.f(),t=Tr();return e||t}function mp(e){var t=Ml(e);t!==null&&t.tag===5&&t.type==="form"?Sh(t):Lt.r(e)}var kl=typeof document>"u"?null:document;function Cm(e,t,n){var l=kl;if(l&&typeof t=="string"&&t){var a=lt(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),af.has(a)||(af.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),Me(t,"link",e),Ne(t),l.head.appendChild(t)))}}function gp(e){Lt.D(e),Cm("dns-prefetch",e,null)}function vp(e,t){Lt.C(e,t),Cm("preconnect",e,t)}function pp(e,t,n){Lt.L(e,t,n);var l=kl;if(l&&e&&t){var a='link[rel="preload"][as="'+lt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+lt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+lt(n.imageSizes)+'"]')):a+='[href="'+lt(e)+'"]';var i=a;switch(t){case"style":i=Al(e);break;case"script":i=Ul(e)}ct.has(i)||(e=ie({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ct.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(Ya(i))||t==="script"&&l.querySelector(La(i))||(t=l.createElement("link"),Me(t,"link",e),Ne(t),l.head.appendChild(t)))}}function yp(e,t){Lt.m(e,t);var n=kl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+lt(l)+'"][href="'+lt(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ul(e)}if(!ct.has(i)&&(e=ie({rel:"modulepreload",href:e},t),ct.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(La(i)))return}l=n.createElement("link"),Me(l,"link",e),Ne(l),n.head.appendChild(l)}}}function bp(e,t,n){Lt.S(e,t,n);var l=kl;if(l&&e){var a=sl(l).hoistableStyles,i=Al(e);t=t||"default";var r=a.get(i);if(!r){var o={loading:0,preload:null};if(r=l.querySelector(Ya(i)))o.loading=5;else{e=ie({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ct.get(i))&&Su(e,n);var c=r=l.createElement("link");Ne(c),Me(c,"link",e),c._p=new Promise(function(u,d){c.onload=u,c.onerror=d}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ni(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(i,r)}}}function xp(e,t){Lt.X(e,t);var n=kl;if(n&&e){var l=sl(n).hoistableScripts,a=Ul(e),i=l.get(a);i||(i=n.querySelector(La(a)),i||(e=ie({src:e,async:!0},t),(t=ct.get(a))&&Eu(e,t),i=n.createElement("script"),Ne(i),Me(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function wp(e,t){Lt.M(e,t);var n=kl;if(n&&e){var l=sl(n).hoistableScripts,a=Ul(e),i=l.get(a);i||(i=n.querySelector(La(a)),i||(e=ie({src:e,async:!0,type:"module"},t),(t=ct.get(a))&&Eu(e,t),i=n.createElement("script"),Ne(i),Me(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function rf(e,t,n,l){var a=(a=nn.current)?er(a):null;if(!a)throw Error(w(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Al(n.href),n=sl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Al(n.href);var i=sl(a).hoistableStyles,r=i.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=a.querySelector(Ya(e)))&&!i._p&&(r.instance=i,r.state.loading=5),ct.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ct.set(e,n),i||Sp(a,e,n,r.state))),t&&l===null)throw Error(w(528,""));return r}if(t&&l!==null)throw Error(w(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ul(n),n=sl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(w(444,e))}}function Al(e){return'href="'+lt(e)+'"'}function Ya(e){return'link[rel="stylesheet"]['+e+"]"}function Mm(e){return ie({},e,{"data-precedence":e.precedence,precedence:null})}function Sp(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),Me(t,"link",n),Ne(t),e.head.appendChild(t))}function Ul(e){return'[src="'+lt(e)+'"]'}function La(e){return"script[async]"+e}function of(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+lt(n.href)+'"]');if(l)return t.instance=l,Ne(l),l;var a=ie({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Ne(l),Me(l,"style",a),Ni(l,n.precedence,e),t.instance=l;case"stylesheet":a=Al(n.href);var i=e.querySelector(Ya(a));if(i)return t.state.loading|=4,t.instance=i,Ne(i),i;l=Mm(n),(a=ct.get(a))&&Su(l,a),i=(e.ownerDocument||e).createElement("link"),Ne(i);var r=i;return r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),Me(i,"link",l),t.state.loading|=4,Ni(i,n.precedence,e),t.instance=i;case"script":return i=Ul(n.src),(a=e.querySelector(La(i)))?(t.instance=a,Ne(a),a):(l=n,(a=ct.get(i))&&(l=ie({},n),Eu(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),Ne(a),Me(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(w(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(l=t.instance,t.state.loading|=4,Ni(l,n.precedence,e));return t.instance}function Ni(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,r=0;r<l.length;r++){var o=l[r];if(o.dataset.precedence===t)i=o;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Su(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Eu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Ai=null;function cf(e,t,n){if(Ai===null){var l=new Map,a=Ai=new Map;a.set(n,l)}else a=Ai,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[Ra]||i[Te]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var o=l.get(r);o?o.push(i):l.set(r,[i])}}return l}function uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ep(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Om(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function zp(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Al(l.href),i=t.querySelector(Ya(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=tr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Ne(i);return}i=t.ownerDocument||t,l=Mm(l),(a=ct.get(a))&&Su(l,a),i=i.createElement("link"),Ne(i);var r=i;r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),Me(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=tr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var xo=0;function Np(e,t){return e.stylesheets&&e.count===0&&ji(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&ji(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&xo===0&&(xo=62500*ip());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ji(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>xo?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function tr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ji(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var nr=null;function ji(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,nr=new Map,t.forEach(Ap,e),nr=null,tr.call(e))}function Ap(e,t){if(!(t.state.loading&4)){var n=nr.get(e);if(n)var l=n.get(null);else{n=new Map,nr.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var r=a[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),l=r)}l&&n.set(null,l)}a=t.instance,r=a.getAttribute("data-precedence"),i=n.get(r)||l,i===l&&n.set(null,a),n.set(r,a),this.count++,l=tr.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var za={$$typeof:_t,Provider:null,Consumer:null,_currentValue:jn,_currentValue2:jn,_threadCount:0};function jp(e,t,n,l,a,i,r,o,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Gr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Gr(0),this.hiddenUpdates=Gr(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Rm(e,t,n,l,a,i,r,o,c,u,d,h){return e=new jp(e,t,n,r,c,u,d,h,o),t=1,i===!0&&(t|=24),i=Qe(3,null,null,t),e.current=i,i.stateNode=e,t=$c(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},Ic(i),e}function Dm(e){return e?(e=rl,e):rl}function km(e,t,n,l,a,i){a=Dm(a),l.context===null?l.context=a:l.pendingContext=a,l=an(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=rn(e,l,t),n!==null&&(Le(n,e,t),aa(n,e,t))}function sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function zu(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}function Um(e){if(e.tag===13||e.tag===31){var t=qn(e,67108864);t!==null&&Le(t,e,67108864),zu(e,67108864)}}function ff(e){if(e.tag===13||e.tag===31){var t=We();t=kc(t);var n=qn(e,t);n!==null&&Le(n,e,t),zu(e,t)}}var lr=!0;function Tp(e,t,n,l){var a=U.T;U.T=null;var i=K.p;try{K.p=2,Nu(e,t,n,l)}finally{K.p=i,U.T=a}}function _p(e,t,n,l){var a=U.T;U.T=null;var i=K.p;try{K.p=8,Nu(e,t,n,l)}finally{K.p=i,U.T=a}}function Nu(e,t,n,l){if(lr){var a=xc(l);if(a===null)yo(e,t,l,ar,n),df(e,l);else if(Mp(a,e,t,n,l))l.stopPropagation();else if(df(e,l),t&4&&-1<Cp.indexOf(e)){for(;a!==null;){var i=Ml(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=En(i.pendingLanes);if(r!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var c=1<<31-$e(r);o.entanglements[1]|=c,r&=~c}yt(i),!(Z&6)&&(Ki=Ke()+500,Ba(0,!1))}}break;case 31:case 13:o=qn(i,2),o!==null&&Le(o,i,2),Tr(),zu(i,2)}if(i=xc(l),i===null&&yo(e,t,l,ar,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else yo(e,t,l,null,n)}}function xc(e){return e=Yc(e),Au(e)}var ar=null;function Au(e){if(ar=null,e=el(e),e!==null){var t=_a(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=nd(t),e!==null)return e;e=null}else if(n===31){if(e=ld(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ar=e,null}function Hm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gg()){case od:return 2;case cd:return 8;case Ri:case vg:return 32;case ud:return 268435456;default:return 32}default:return 32}}var wc=!1,un=null,sn=null,fn=null,Na=new Map,Aa=new Map,$t=[],Cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function df(e,t){switch(e){case"focusin":case"focusout":un=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":fn=null;break;case"pointerover":case"pointerout":Na.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Aa.delete(t.pointerId)}}function Zl(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ml(t),t!==null&&Um(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Mp(e,t,n,l,a){switch(t){case"focusin":return un=Zl(un,e,t,n,l,a),!0;case"dragenter":return sn=Zl(sn,e,t,n,l,a),!0;case"mouseover":return fn=Zl(fn,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return Na.set(i,Zl(Na.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,Aa.set(i,Zl(Aa.get(i)||null,e,t,n,l,a)),!0}return!1}function Bm(e){var t=el(e.target);if(t!==null){var n=_a(t);if(n!==null){if(t=n.tag,t===13){if(t=nd(n),t!==null){e.blockedOn=t,$u(e.priority,function(){ff(n)});return}}else if(t===31){if(t=ld(n),t!==null){e.blockedOn=t,$u(e.priority,function(){ff(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ti(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=xc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Yo=l,n.target.dispatchEvent(l),Yo=null}else return t=Ml(n),t!==null&&Um(t),e.blockedOn=n,!1;t.shift()}return!0}function hf(e,t,n){Ti(e)&&n.delete(t)}function Op(){wc=!1,un!==null&&Ti(un)&&(un=null),sn!==null&&Ti(sn)&&(sn=null),fn!==null&&Ti(fn)&&(fn=null),Na.forEach(hf),Aa.forEach(hf)}function oi(e,t){e.blockedOn===t&&(e.blockedOn=null,wc||(wc=!0,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,Op)))}var ci=null;function mf(e){ci!==e&&(ci=e,Se.unstable_scheduleCallback(Se.unstable_NormalPriority,function(){ci===e&&(ci=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(Au(l||n)===null)continue;break}var i=Ml(n);i!==null&&(e.splice(t,3),t-=3,tc(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function jl(e){function t(c){return oi(c,e)}un!==null&&oi(un,e),sn!==null&&oi(sn,e),fn!==null&&oi(fn,e),Na.forEach(t),Aa.forEach(t);for(var n=0;n<$t.length;n++){var l=$t[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<$t.length&&(n=$t[0],n.blockedOn===null);)Bm(n),n.blockedOn===null&&$t.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],r=a[qe]||null;if(typeof i=="function")r||mf(n);else if(r){var o=null;if(i&&i.hasAttribute("formAction")){if(a=i,r=i[qe]||null)o=r.formAction;else if(Au(a)!==null)continue}else o=r.action;typeof o=="function"?n[l+1]=o:(n.splice(l,3),l-=3),mf(n)}}}function Ym(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function ju(e){this._internalRoot=e}Mr.prototype.render=ju.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));var n=t.current,l=We();km(n,l,e,t,null,null)};Mr.prototype.unmount=ju.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;km(e.current,2,null,e,null,null),Tr(),t[Cl]=null}};function Mr(e){this._internalRoot=e}Mr.prototype.unstable_scheduleHydration=function(e){if(e){var t=md();e={blockedOn:null,target:e,priority:t};for(var n=0;n<$t.length&&t!==0&&t<$t[n].priority;n++);$t.splice(n,0,e),n===0&&Bm(e)}};var gf=ed.version;if(gf!=="19.2.0")throw Error(w(527,gf,"19.2.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=cg(t),e=e!==null?ad(e):null,e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:U,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ui.isDisabled&&ui.supportsFiber)try{Ca=ui.inject(Rp),Je=ui}catch{}}mr.createRoot=function(e,t){if(!td(e))throw Error(w(299));var n=!1,l="",a=Ch,i=Mh,r=Oh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Rm(e,1,!1,null,null,n,l,null,a,i,r,Ym),e[Cl]=t.current,wu(e),new ju(t)};mr.hydrateRoot=function(e,t,n){if(!td(e))throw Error(w(299));var l=!1,a="",i=Ch,r=Mh,o=Oh,c=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),t=Rm(e,1,!0,t,n??null,l,a,c,i,r,o,Ym),t.context=Dm(null),n=t.current,l=We(),l=kc(l),a=an(l),a.callback=null,rn(n,a,l),n=l,t.current.lanes=n,Oa(t,n),yt(t),e[Cl]=t.current,wu(e),new Mr(t)};mr.version="19.2.0";function Lm(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lm)}catch(e){console.error(e)}}Lm(),Jf.exports=mr;var Dp=Jf.exports;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ja(){return ja=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},ja.apply(this,arguments)}var tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tn||(tn={}));const vf="popstate";function kp(e){e===void 0&&(e={});function t(l,a){let{pathname:i,search:r,hash:o}=l.location;return Sc("",{pathname:i,search:r,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(l,a){return typeof a=="string"?a:ir(a)}return Hp(t,n,null,e)}function ye(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Tu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Up(){return Math.random().toString(36).substr(2,8)}function pf(e,t){return{usr:e.state,key:e.key,idx:t}}function Sc(e,t,n,l){return n===void 0&&(n=null),ja({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hl(t):t,{state:n,key:t&&t.key||l||Up()})}function ir(e){let{pathname:t="/",search:n="",hash:l=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function Hl(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let l=e.indexOf("?");l>=0&&(t.search=e.substr(l),e=e.substr(0,l)),e&&(t.pathname=e)}return t}function Hp(e,t,n,l){l===void 0&&(l={});let{window:a=document.defaultView,v5Compat:i=!1}=l,r=a.history,o=tn.Pop,c=null,u=d();u==null&&(u=0,r.replaceState(ja({},r.state,{idx:u}),""));function d(){return(r.state||{idx:null}).idx}function h(){o=tn.Pop;let z=d(),g=z==null?null:z-u;u=z,c&&c({action:o,location:S.location,delta:g})}function f(z,g){o=tn.Push;let m=Sc(S.location,z,g);n&&n(m,z),u=d()+1;let p=pf(m,u),b=S.createHref(m);try{r.pushState(p,"",b)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;a.location.assign(b)}i&&c&&c({action:o,location:S.location,delta:1})}function v(z,g){o=tn.Replace;let m=Sc(S.location,z,g);n&&n(m,z),u=d();let p=pf(m,u),b=S.createHref(m);r.replaceState(p,"",b),i&&c&&c({action:o,location:S.location,delta:0})}function x(z){let g=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof z=="string"?z:ir(z);return m=m.replace(/ $/,"%20"),ye(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let S={get action(){return o},get location(){return e(a,r)},listen(z){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(vf,h),c=z,()=>{a.removeEventListener(vf,h),c=null}},createHref(z){return t(a,z)},createURL:x,encodeLocation(z){let g=x(z);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(z){return r.go(z)}};return S}var yf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(yf||(yf={}));function Bp(e,t,n){return n===void 0&&(n="/"),Yp(e,t,n,!1)}function Yp(e,t,n,l){let a=typeof t=="string"?Hl(t):t,i=_u(a.pathname||"/",n);if(i==null)return null;let r=qm(e);Lp(r);let o=null;for(let c=0;o==null&&c<r.length;++c){let u=Fp(i);o=$p(r[c],u,l)}return o}function qm(e,t,n,l){t===void 0&&(t=[]),n===void 0&&(n=[]),l===void 0&&(l="");let a=(i,r,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:r,route:i};c.relativePath.startsWith("/")&&(ye(c.relativePath.startsWith(l),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(l.length));let u=dn([l,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(ye(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),qm(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Kp(u,i.index),routesMeta:d})};return e.forEach((i,r)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))a(i,r);else for(let c of Gm(i.path))a(i,r,c)}),t}function Gm(e){let t=e.split("/");if(t.length===0)return[];let[n,...l]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(l.length===0)return a?[i,""]:[i];let r=Gm(l.join("/")),o=[];return o.push(...r.map(c=>c===""?i:[i,c].join("/"))),a&&o.push(...r),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function Lp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jp(t.routesMeta.map(l=>l.childrenIndex),n.routesMeta.map(l=>l.childrenIndex)))}const qp=/^:[\w-]+$/,Gp=3,Xp=2,Vp=1,Qp=10,Zp=-2,bf=e=>e==="*";function Kp(e,t){let n=e.split("/"),l=n.length;return n.some(bf)&&(l+=Zp),t&&(l+=Xp),n.filter(a=>!bf(a)).reduce((a,i)=>a+(qp.test(i)?Gp:i===""?Vp:Qp),l)}function Jp(e,t){return e.length===t.length&&e.slice(0,-1).every((l,a)=>l===t[a])?e[e.length-1]-t[t.length-1]:0}function $p(e,t,n){n===void 0&&(n=!1);let{routesMeta:l}=e,a={},i="/",r=[];for(let o=0;o<l.length;++o){let c=l[o],u=o===l.length-1,d=i==="/"?t:t.slice(i.length)||"/",h=xf({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!h&&u&&n&&!l[l.length-1].route.index&&(h=xf({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!h)return null;Object.assign(a,h.params),r.push({params:a,pathname:dn([i,h.pathname]),pathnameBase:ny(dn([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=dn([i,h.pathnameBase]))}return r}function xf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,l]=Wp(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],r=i.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:l.reduce((u,d,h)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let S=o[h]||"";r=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const x=o[h];return v&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:r,pattern:e}}function Wp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Tu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let l=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,o,c)=>(l.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(l.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),l]}function Fp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Tu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function _u(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,l=e.charAt(n);return l&&l!=="/"?null:e.slice(n)||"/"}const Ip=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pp=e=>Ip.test(e);function ey(e,t){t===void 0&&(t="/");let{pathname:n,search:l="",hash:a=""}=typeof e=="string"?Hl(e):e,i;if(n)if(Pp(n))i=n;else{if(n.includes("//")){let r=n;n=n.replace(/\/\/+/g,"/"),Tu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(r+" -> "+n))}n.startsWith("/")?i=wf(n.substring(1),"/"):i=wf(n,t)}else i=t;return{pathname:i,search:ly(l),hash:ay(a)}}function wf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function wo(e,t,n,l){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ty(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Xm(e,t){let n=ty(e);return t?n.map((l,a)=>a===n.length-1?l.pathname:l.pathnameBase):n.map(l=>l.pathnameBase)}function Vm(e,t,n,l){l===void 0&&(l=!1);let a;typeof e=="string"?a=Hl(e):(a=ja({},e),ye(!a.pathname||!a.pathname.includes("?"),wo("?","pathname","search",a)),ye(!a.pathname||!a.pathname.includes("#"),wo("#","pathname","hash",a)),ye(!a.search||!a.search.includes("#"),wo("#","search","hash",a)));let i=e===""||a.pathname==="",r=i?"/":a.pathname,o;if(r==null)o=n;else{let h=t.length-1;if(!l&&r.startsWith("..")){let f=r.split("/");for(;f[0]==="..";)f.shift(),h-=1;a.pathname=f.join("/")}o=h>=0?t[h]:"/"}let c=ey(a,o),u=r&&r!=="/"&&r.endsWith("/"),d=(i||r===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const dn=e=>e.join("/").replace(/\/\/+/g,"/"),ny=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ly=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ay=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function iy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Qm=["post","put","patch","delete"];new Set(Qm);const ry=["get",...Qm];new Set(ry);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Ta.apply(this,arguments)}const Cu=y.createContext(null),oy=y.createContext(null),Xn=y.createContext(null),Or=y.createContext(null),Vn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Zm=y.createContext(null);function cy(e,t){let{relative:n}=t===void 0?{}:t;qa()||ye(!1);let{basename:l,navigator:a}=y.useContext(Xn),{hash:i,pathname:r,search:o}=Jm(e,{relative:n}),c=r;return l!=="/"&&(c=r==="/"?l:dn([l,r])),a.createHref({pathname:c,search:o,hash:i})}function qa(){return y.useContext(Or)!=null}function Rr(){return qa()||ye(!1),y.useContext(Or).location}function Km(e){y.useContext(Xn).static||y.useLayoutEffect(e)}function uy(){let{isDataRoute:e}=y.useContext(Vn);return e?Sy():sy()}function sy(){qa()||ye(!1);let e=y.useContext(Cu),{basename:t,future:n,navigator:l}=y.useContext(Xn),{matches:a}=y.useContext(Vn),{pathname:i}=Rr(),r=JSON.stringify(Xm(a,n.v7_relativeSplatPath)),o=y.useRef(!1);return Km(()=>{o.current=!0}),y.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){l.go(u);return}let h=Vm(u,JSON.parse(r),i,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:dn([t,h.pathname])),(d.replace?l.replace:l.push)(h,d.state,d)},[t,l,r,i,e])}function Jm(e,t){let{relative:n}=t===void 0?{}:t,{future:l}=y.useContext(Xn),{matches:a}=y.useContext(Vn),{pathname:i}=Rr(),r=JSON.stringify(Xm(a,l.v7_relativeSplatPath));return y.useMemo(()=>Vm(e,JSON.parse(r),i,n==="path"),[e,r,i,n])}function fy(e,t){return dy(e,t)}function dy(e,t,n,l){qa()||ye(!1);let{navigator:a}=y.useContext(Xn),{matches:i}=y.useContext(Vn),r=i[i.length-1],o=r?r.params:{};r&&r.pathname;let c=r?r.pathnameBase:"/";r&&r.route;let u=Rr(),d;if(t){var h;let z=typeof t=="string"?Hl(t):t;c==="/"||(h=z.pathname)!=null&&h.startsWith(c)||ye(!1),d=z}else d=u;let f=d.pathname||"/",v=f;if(c!=="/"){let z=c.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(z.length).join("/")}let x=Bp(e,{pathname:v}),S=py(x&&x.map(z=>Object.assign({},z,{params:Object.assign({},o,z.params),pathname:dn([c,a.encodeLocation?a.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?c:dn([c,a.encodeLocation?a.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),i,n,l);return t&&S?y.createElement(Or.Provider,{value:{location:Ta({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:tn.Pop}},S):S}function hy(){let e=wy(),t=iy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:a},n):null,i)}const my=y.createElement(hy,null);class gy extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(Vn.Provider,{value:this.props.routeContext},y.createElement(Zm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vy(e){let{routeContext:t,match:n,children:l}=e,a=y.useContext(Cu);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Vn.Provider,{value:t},l)}function py(e,t,n,l){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),l===void 0&&(l=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=l)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let r=e,o=(a=n)==null?void 0:a.errors;if(o!=null){let d=r.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);d>=0||ye(!1),r=r.slice(0,Math.min(r.length,d+1))}let c=!1,u=-1;if(n&&l&&l.v7_partialHydration)for(let d=0;d<r.length;d++){let h=r[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:f,errors:v}=n,x=h.route.loader&&f[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||x){c=!0,u>=0?r=r.slice(0,u+1):r=[r[0]];break}}}return r.reduceRight((d,h,f)=>{let v,x=!1,S=null,z=null;n&&(v=o&&h.route.id?o[h.route.id]:void 0,S=h.route.errorElement||my,c&&(u<0&&f===0?(Ey("route-fallback",!1),x=!0,z=null):u===f&&(x=!0,z=h.route.hydrateFallbackElement||null)));let g=t.concat(r.slice(0,f+1)),m=()=>{let p;return v?p=S:x?p=z:h.route.Component?p=y.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=d,y.createElement(vy,{match:h,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?y.createElement(gy,{location:n.location,revalidation:n.revalidation,component:S,error:v,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var $m=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($m||{}),rr=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(rr||{});function yy(e){let t=y.useContext(Cu);return t||ye(!1),t}function by(e){let t=y.useContext(oy);return t||ye(!1),t}function xy(e){let t=y.useContext(Vn);return t||ye(!1),t}function Wm(e){let t=xy(),n=t.matches[t.matches.length-1];return n.route.id||ye(!1),n.route.id}function wy(){var e;let t=y.useContext(Zm),n=by(rr.UseRouteError),l=Wm(rr.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[l]}function Sy(){let{router:e}=yy($m.UseNavigateStable),t=Wm(rr.UseNavigateStable),n=y.useRef(!1);return Km(()=>{n.current=!0}),y.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,Ta({fromRouteId:t},i)))},[e,t])}const Sf={};function Ey(e,t,n){!t&&!Sf[e]&&(Sf[e]=!0)}function zy(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function _i(e){ye(!1)}function Ny(e){let{basename:t="/",children:n=null,location:l,navigationType:a=tn.Pop,navigator:i,static:r=!1,future:o}=e;qa()&&ye(!1);let c=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:i,static:r,future:Ta({v7_relativeSplatPath:!1},o)}),[c,o,i,r]);typeof l=="string"&&(l=Hl(l));let{pathname:d="/",search:h="",hash:f="",state:v=null,key:x="default"}=l,S=y.useMemo(()=>{let z=_u(d,c);return z==null?null:{location:{pathname:z,search:h,hash:f,state:v,key:x},navigationType:a}},[c,d,h,f,v,x,a]);return S==null?null:y.createElement(Xn.Provider,{value:u},y.createElement(Or.Provider,{children:n,value:S}))}function Ay(e){let{children:t,location:n}=e;return fy(Ec(t),n)}new Promise(()=>{});function Ec(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(l,a)=>{if(!y.isValidElement(l))return;let i=[...t,a];if(l.type===y.Fragment){n.push.apply(n,Ec(l.props.children,i));return}l.type!==_i&&ye(!1),!l.props.index||!l.props.children||ye(!1);let r={id:l.props.id||i.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(r.children=Ec(l.props.children,i)),n.push(r)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zc(){return zc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},zc.apply(this,arguments)}function jy(e,t){if(e==null)return{};var n={},l=Object.keys(e),a,i;for(i=0;i<l.length;i++)a=l[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ty(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _y(e,t){return e.button===0&&(!t||t==="_self")&&!Ty(e)}const Cy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],My="6";try{window.__reactRouterVersion=My}catch{}const Oy="startTransition",Ef=Kf[Oy];function Ry(e){let{basename:t,children:n,future:l,window:a}=e,i=y.useRef();i.current==null&&(i.current=kp({window:a,v5Compat:!0}));let r=i.current,[o,c]=y.useState({action:r.action,location:r.location}),{v7_startTransition:u}=l||{},d=y.useCallback(h=>{u&&Ef?Ef(()=>c(h)):c(h)},[c,u]);return y.useLayoutEffect(()=>r.listen(d),[r,d]),y.useEffect(()=>zy(l),[l]),y.createElement(Ny,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:r,future:l})}const Dy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ky=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Mu=y.forwardRef(function(t,n){let{onClick:l,relative:a,reloadDocument:i,replace:r,state:o,target:c,to:u,preventScrollReset:d,viewTransition:h}=t,f=jy(t,Cy),{basename:v}=y.useContext(Xn),x,S=!1;if(typeof u=="string"&&ky.test(u)&&(x=u,Dy))try{let p=new URL(window.location.href),b=u.startsWith("//")?new URL(p.protocol+u):new URL(u),T=_u(b.pathname,v);b.origin===p.origin&&T!=null?u=T+b.search+b.hash:S=!0}catch{}let z=cy(u,{relative:a}),g=Uy(u,{replace:r,state:o,target:c,preventScrollReset:d,relative:a,viewTransition:h});function m(p){l&&l(p),p.defaultPrevented||g(p)}return y.createElement("a",zc({},f,{href:x||z,onClick:S||i?l:m,ref:n,target:c}))});var zf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(zf||(zf={}));var Nf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nf||(Nf={}));function Uy(e,t){let{target:n,replace:l,state:a,preventScrollReset:i,relative:r,viewTransition:o}=t===void 0?{}:t,c=uy(),u=Rr(),d=Jm(e,{relative:r});return y.useCallback(h=>{if(_y(h,n)){h.preventDefault();let f=l!==void 0?l:ir(u)===ir(d);c(e,{replace:f,state:a,preventScrollReset:i,relative:r,viewTransition:o})}},[u,c,d,l,a,n,e,i,r,o])}function Af(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ou(...e){return t=>{let n=!1;const l=e.map(a=>{const i=Af(a,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let a=0;a<l.length;a++){const i=l[a];typeof i=="function"?i():Af(e[a],null)}}}}function Qn(...e){return y.useCallback(Ou(...e),e)}var Hy=Symbol.for("react.lazy"),or=Kf[" use ".trim().toString()];function By(e){return typeof e=="object"&&e!==null&&"then"in e}function Fm(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Hy&&"_payload"in e&&By(e._payload)}function Yy(e){const t=Ly(e),n=y.forwardRef((l,a)=>{let{children:i,...r}=l;Fm(i)&&typeof or=="function"&&(i=or(i._payload));const o=y.Children.toArray(i),c=o.find(Gy);if(c){const u=c.props.children,d=o.map(h=>h===c?y.Children.count(u)>1?y.Children.only(null):y.isValidElement(u)?u.props.children:null:h);return s.jsx(t,{...r,ref:a,children:y.isValidElement(u)?y.cloneElement(u,void 0,d):null})}return s.jsx(t,{...r,ref:a,children:i})});return n.displayName=`${e}.Slot`,n}var Im=Yy("Slot");function Ly(e){const t=y.forwardRef((n,l)=>{let{children:a,...i}=n;if(Fm(a)&&typeof or=="function"&&(a=or(a._payload)),y.isValidElement(a)){const r=Vy(a),o=Xy(i,a.props);return a.type!==y.Fragment&&(o.ref=l?Ou(l,r):r),y.cloneElement(a,o)}return y.Children.count(a)>1?y.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var qy=Symbol("radix.slottable");function Gy(e){return y.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===qy}function Xy(e,t){const n={...t};for(const l in t){const a=e[l],i=t[l];/^on[A-Z]/.test(l)?a&&i?n[l]=(...o)=>{const c=i(...o);return a(...o),c}:a&&(n[l]=a):l==="style"?n[l]={...a,...i}:l==="className"&&(n[l]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function Vy(e){var l,a;let t=(l=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:l.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Pm(e){var t,n,l="";if(typeof e=="string"||typeof e=="number")l+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=Pm(e[t]))&&(l&&(l+=" "),l+=n)}else for(n in e)e[n]&&(l&&(l+=" "),l+=n);return l}function Ru(){for(var e,t,n=0,l="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=Pm(e))&&(l&&(l+=" "),l+=t);return l}const jf=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Tf=Ru,e0=(e,t)=>n=>{var l;if((t==null?void 0:t.variants)==null)return Tf(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:i}=t,r=Object.keys(a).map(u=>{const d=n==null?void 0:n[u],h=i==null?void 0:i[u];if(d===null)return null;const f=jf(d)||jf(h);return a[u][f]}),o=n&&Object.entries(n).reduce((u,d)=>{let[h,f]=d;return f===void 0||(u[h]=f),u},{}),c=t==null||(l=t.compoundVariants)===null||l===void 0?void 0:l.reduce((u,d)=>{let{class:h,className:f,...v}=d;return Object.entries(v).every(x=>{let[S,z]=x;return Array.isArray(z)?z.includes({...i,...o}[S]):{...i,...o}[S]===z})?[...u,h,f]:u},[]);return Tf(e,r,c,n==null?void 0:n.class,n==null?void 0:n.className)},Qy=(e,t)=>{const n=new Array(e.length+t.length);for(let l=0;l<e.length;l++)n[l]=e[l];for(let l=0;l<t.length;l++)n[e.length+l]=t[l];return n},Zy=(e,t)=>({classGroupId:e,validator:t}),t0=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),cr="-",_f=[],Ky="arbitrary..",Jy=e=>{const t=Wy(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:l}=e;return{getClassGroupId:r=>{if(r.startsWith("[")&&r.endsWith("]"))return $y(r);const o=r.split(cr),c=o[0]===""&&o.length>1?1:0;return n0(o,c,t)},getConflictingClassGroupIds:(r,o)=>{if(o){const c=l[r],u=n[r];return c?u?Qy(u,c):c:u||_f}return n[r]||_f}}},n0=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const a=e[t],i=n.nextPart.get(a);if(i){const u=n0(e,t+1,i);if(u)return u}const r=n.validators;if(r===null)return;const o=t===0?e.join(cr):e.slice(t).join(cr),c=r.length;for(let u=0;u<c;u++){const d=r[u];if(d.validator(o))return d.classGroupId}},$y=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),l=t.slice(0,n);return l?Ky+l:void 0})(),Wy=e=>{const{theme:t,classGroups:n}=e;return Fy(n,t)},Fy=(e,t)=>{const n=t0();for(const l in e){const a=e[l];Du(a,n,l,t)}return n},Du=(e,t,n,l)=>{const a=e.length;for(let i=0;i<a;i++){const r=e[i];Iy(r,t,n,l)}},Iy=(e,t,n,l)=>{if(typeof e=="string"){Py(e,t,n);return}if(typeof e=="function"){eb(e,t,n,l);return}tb(e,t,n,l)},Py=(e,t,n)=>{const l=e===""?t:l0(t,e);l.classGroupId=n},eb=(e,t,n,l)=>{if(nb(e)){Du(e(l),t,n,l);return}t.validators===null&&(t.validators=[]),t.validators.push(Zy(n,e))},tb=(e,t,n,l)=>{const a=Object.entries(e),i=a.length;for(let r=0;r<i;r++){const[o,c]=a[r];Du(c,l0(t,o),n,l)}},l0=(e,t)=>{let n=e;const l=t.split(cr),a=l.length;for(let i=0;i<a;i++){const r=l[i];let o=n.nextPart.get(r);o||(o=t0(),n.nextPart.set(r,o)),n=o}return n},nb=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,lb=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),l=Object.create(null);const a=(i,r)=>{n[i]=r,t++,t>e&&(t=0,l=n,n=Object.create(null))};return{get(i){let r=n[i];if(r!==void 0)return r;if((r=l[i])!==void 0)return a(i,r),r},set(i,r){i in n?n[i]=r:a(i,r)}}},Nc="!",Cf=":",ab=[],Mf=(e,t,n,l,a)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:l,isExternal:a}),ib=e=>{const{prefix:t,experimentalParseClassName:n}=e;let l=a=>{const i=[];let r=0,o=0,c=0,u;const d=a.length;for(let S=0;S<d;S++){const z=a[S];if(r===0&&o===0){if(z===Cf){i.push(a.slice(c,S)),c=S+1;continue}if(z==="/"){u=S;continue}}z==="["?r++:z==="]"?r--:z==="("?o++:z===")"&&o--}const h=i.length===0?a:a.slice(c);let f=h,v=!1;h.endsWith(Nc)?(f=h.slice(0,-1),v=!0):h.startsWith(Nc)&&(f=h.slice(1),v=!0);const x=u&&u>c?u-c:void 0;return Mf(i,v,f,x)};if(t){const a=t+Cf,i=l;l=r=>r.startsWith(a)?i(r.slice(a.length)):Mf(ab,!1,r,void 0,!0)}if(n){const a=l;l=i=>n({className:i,parseClassName:a})}return l},rb=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,l)=>{t.set(n,1e6+l)}),n=>{const l=[];let a=[];for(let i=0;i<n.length;i++){const r=n[i],o=r[0]==="[",c=t.has(r);o||c?(a.length>0&&(a.sort(),l.push(...a),a=[]),l.push(r)):a.push(r)}return a.length>0&&(a.sort(),l.push(...a)),l}},ob=e=>({cache:lb(e.cacheSize),parseClassName:ib(e),sortModifiers:rb(e),...Jy(e)}),cb=/\s+/,ub=(e,t)=>{const{parseClassName:n,getClassGroupId:l,getConflictingClassGroupIds:a,sortModifiers:i}=t,r=[],o=e.trim().split(cb);let c="";for(let u=o.length-1;u>=0;u-=1){const d=o[u],{isExternal:h,modifiers:f,hasImportantModifier:v,baseClassName:x,maybePostfixModifierPosition:S}=n(d);if(h){c=d+(c.length>0?" "+c:c);continue}let z=!!S,g=l(z?x.substring(0,S):x);if(!g){if(!z){c=d+(c.length>0?" "+c:c);continue}if(g=l(x),!g){c=d+(c.length>0?" "+c:c);continue}z=!1}const m=f.length===0?"":f.length===1?f[0]:i(f).join(":"),p=v?m+Nc:m,b=p+g;if(r.indexOf(b)>-1)continue;r.push(b);const T=a(g,z);for(let O=0;O<T.length;++O){const j=T[O];r.push(p+j)}c=d+(c.length>0?" "+c:c)}return c},sb=(...e)=>{let t=0,n,l,a="";for(;t<e.length;)(n=e[t++])&&(l=a0(n))&&(a&&(a+=" "),a+=l);return a},a0=e=>{if(typeof e=="string")return e;let t,n="";for(let l=0;l<e.length;l++)e[l]&&(t=a0(e[l]))&&(n&&(n+=" "),n+=t);return n},fb=(e,...t)=>{let n,l,a,i;const r=c=>{const u=t.reduce((d,h)=>h(d),e());return n=ob(u),l=n.cache.get,a=n.cache.set,i=o,o(c)},o=c=>{const u=l(c);if(u)return u;const d=ub(c,n);return a(c,d),d};return i=r,(...c)=>i(sb(...c))},db=[],xe=e=>{const t=n=>n[e]||db;return t.isThemeGetter=!0,t},i0=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,r0=/^\((?:(\w[\w-]*):)?(.+)\)$/i,hb=/^\d+\/\d+$/,mb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,gb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,pb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,yb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Jn=e=>hb.test(e),Y=e=>!!e&&!Number.isNaN(Number(e)),Xt=e=>!!e&&Number.isInteger(Number(e)),So=e=>e.endsWith("%")&&Y(e.slice(0,-1)),Nt=e=>mb.test(e),bb=()=>!0,xb=e=>gb.test(e)&&!vb.test(e),o0=()=>!1,wb=e=>pb.test(e),Sb=e=>yb.test(e),Eb=e=>!C(e)&&!M(e),zb=e=>Bl(e,s0,o0),C=e=>i0.test(e),wn=e=>Bl(e,f0,xb),Eo=e=>Bl(e,_b,Y),Of=e=>Bl(e,c0,o0),Nb=e=>Bl(e,u0,Sb),si=e=>Bl(e,d0,wb),M=e=>r0.test(e),Kl=e=>Yl(e,f0),Ab=e=>Yl(e,Cb),Rf=e=>Yl(e,c0),jb=e=>Yl(e,s0),Tb=e=>Yl(e,u0),fi=e=>Yl(e,d0,!0),Bl=(e,t,n)=>{const l=i0.exec(e);return l?l[1]?t(l[1]):n(l[2]):!1},Yl=(e,t,n=!1)=>{const l=r0.exec(e);return l?l[1]?t(l[1]):n:!1},c0=e=>e==="position"||e==="percentage",u0=e=>e==="image"||e==="url",s0=e=>e==="length"||e==="size"||e==="bg-size",f0=e=>e==="length",_b=e=>e==="number",Cb=e=>e==="family-name",d0=e=>e==="shadow",Mb=()=>{const e=xe("color"),t=xe("font"),n=xe("text"),l=xe("font-weight"),a=xe("tracking"),i=xe("leading"),r=xe("breakpoint"),o=xe("container"),c=xe("spacing"),u=xe("radius"),d=xe("shadow"),h=xe("inset-shadow"),f=xe("text-shadow"),v=xe("drop-shadow"),x=xe("blur"),S=xe("perspective"),z=xe("aspect"),g=xe("ease"),m=xe("animate"),p=()=>["auto","avoid","all","avoid-page","page","left","right","column"],b=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],T=()=>[...b(),M,C],O=()=>["auto","hidden","clip","visible","scroll"],j=()=>["auto","contain","none"],N=()=>[M,C,c],_=()=>[Jn,"full","auto",...N()],R=()=>[Xt,"none","subgrid",M,C],te=()=>["auto",{span:["full",Xt,M,C]},Xt,M,C],k=()=>[Xt,"auto",M,C],Q=()=>["auto","min","max","fr",M,C],re=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],V=()=>["start","end","center","stretch","center-safe","end-safe"],E=()=>["auto",...N()],D=()=>[Jn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...N()],A=()=>[e,M,C],I=()=>[...b(),Rf,Of,{position:[M,C]}],oe=()=>["no-repeat",{repeat:["","x","y","space","round"]}],bn=()=>["auto","cover","contain",jb,zb,{size:[M,C]}],qt=()=>[So,Kl,wn],be=()=>["","none","full",u,M,C],fe=()=>["",Y,Kl,wn],xt=()=>["solid","dashed","dotted","double"],Yu=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Ee=()=>[Y,So,Rf,Of],Lu=()=>["","none",x,M,C],Qa=()=>["none",Y,M,C],Za=()=>["none",Y,M,C],Ur=()=>[Y,M,C],Ka=()=>[Jn,"full",...N()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Nt],breakpoint:[Nt],color:[bb],container:[Nt],"drop-shadow":[Nt],ease:["in","out","in-out"],font:[Eb],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Nt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Nt],shadow:[Nt],spacing:["px",Y],text:[Nt],"text-shadow":[Nt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Jn,C,M,z]}],container:["container"],columns:[{columns:[Y,C,M,o]}],"break-after":[{"break-after":p()}],"break-before":[{"break-before":p()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:T()}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:_()}],"inset-x":[{"inset-x":_()}],"inset-y":[{"inset-y":_()}],start:[{start:_()}],end:[{end:_()}],top:[{top:_()}],right:[{right:_()}],bottom:[{bottom:_()}],left:[{left:_()}],visibility:["visible","invisible","collapse"],z:[{z:[Xt,"auto",M,C]}],basis:[{basis:[Jn,"full","auto",o,...N()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Y,Jn,"auto","initial","none",C]}],grow:[{grow:["",Y,M,C]}],shrink:[{shrink:["",Y,M,C]}],order:[{order:[Xt,"first","last","none",M,C]}],"grid-cols":[{"grid-cols":R()}],"col-start-end":[{col:te()}],"col-start":[{"col-start":k()}],"col-end":[{"col-end":k()}],"grid-rows":[{"grid-rows":R()}],"row-start-end":[{row:te()}],"row-start":[{"row-start":k()}],"row-end":[{"row-end":k()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Q()}],"auto-rows":[{"auto-rows":Q()}],gap:[{gap:N()}],"gap-x":[{"gap-x":N()}],"gap-y":[{"gap-y":N()}],"justify-content":[{justify:[...re(),"normal"]}],"justify-items":[{"justify-items":[...V(),"normal"]}],"justify-self":[{"justify-self":["auto",...V()]}],"align-content":[{content:["normal",...re()]}],"align-items":[{items:[...V(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...V(),{baseline:["","last"]}]}],"place-content":[{"place-content":re()}],"place-items":[{"place-items":[...V(),"baseline"]}],"place-self":[{"place-self":["auto",...V()]}],p:[{p:N()}],px:[{px:N()}],py:[{py:N()}],ps:[{ps:N()}],pe:[{pe:N()}],pt:[{pt:N()}],pr:[{pr:N()}],pb:[{pb:N()}],pl:[{pl:N()}],m:[{m:E()}],mx:[{mx:E()}],my:[{my:E()}],ms:[{ms:E()}],me:[{me:E()}],mt:[{mt:E()}],mr:[{mr:E()}],mb:[{mb:E()}],ml:[{ml:E()}],"space-x":[{"space-x":N()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":N()}],"space-y-reverse":["space-y-reverse"],size:[{size:D()}],w:[{w:[o,"screen",...D()]}],"min-w":[{"min-w":[o,"screen","none",...D()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[r]},...D()]}],h:[{h:["screen","lh",...D()]}],"min-h":[{"min-h":["screen","lh","none",...D()]}],"max-h":[{"max-h":["screen","lh",...D()]}],"font-size":[{text:["base",n,Kl,wn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[l,M,Eo]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",So,C]}],"font-family":[{font:[Ab,C,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,M,C]}],"line-clamp":[{"line-clamp":[Y,"none",M,Eo]}],leading:[{leading:[i,...N()]}],"list-image":[{"list-image":["none",M,C]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",M,C]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:A()}],"text-color":[{text:A()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...xt(),"wavy"]}],"text-decoration-thickness":[{decoration:[Y,"from-font","auto",M,wn]}],"text-decoration-color":[{decoration:A()}],"underline-offset":[{"underline-offset":[Y,"auto",M,C]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",M,C]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",M,C]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:I()}],"bg-repeat":[{bg:oe()}],"bg-size":[{bg:bn()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Xt,M,C],radial:["",M,C],conic:[Xt,M,C]},Tb,Nb]}],"bg-color":[{bg:A()}],"gradient-from-pos":[{from:qt()}],"gradient-via-pos":[{via:qt()}],"gradient-to-pos":[{to:qt()}],"gradient-from":[{from:A()}],"gradient-via":[{via:A()}],"gradient-to":[{to:A()}],rounded:[{rounded:be()}],"rounded-s":[{"rounded-s":be()}],"rounded-e":[{"rounded-e":be()}],"rounded-t":[{"rounded-t":be()}],"rounded-r":[{"rounded-r":be()}],"rounded-b":[{"rounded-b":be()}],"rounded-l":[{"rounded-l":be()}],"rounded-ss":[{"rounded-ss":be()}],"rounded-se":[{"rounded-se":be()}],"rounded-ee":[{"rounded-ee":be()}],"rounded-es":[{"rounded-es":be()}],"rounded-tl":[{"rounded-tl":be()}],"rounded-tr":[{"rounded-tr":be()}],"rounded-br":[{"rounded-br":be()}],"rounded-bl":[{"rounded-bl":be()}],"border-w":[{border:fe()}],"border-w-x":[{"border-x":fe()}],"border-w-y":[{"border-y":fe()}],"border-w-s":[{"border-s":fe()}],"border-w-e":[{"border-e":fe()}],"border-w-t":[{"border-t":fe()}],"border-w-r":[{"border-r":fe()}],"border-w-b":[{"border-b":fe()}],"border-w-l":[{"border-l":fe()}],"divide-x":[{"divide-x":fe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":fe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...xt(),"hidden","none"]}],"divide-style":[{divide:[...xt(),"hidden","none"]}],"border-color":[{border:A()}],"border-color-x":[{"border-x":A()}],"border-color-y":[{"border-y":A()}],"border-color-s":[{"border-s":A()}],"border-color-e":[{"border-e":A()}],"border-color-t":[{"border-t":A()}],"border-color-r":[{"border-r":A()}],"border-color-b":[{"border-b":A()}],"border-color-l":[{"border-l":A()}],"divide-color":[{divide:A()}],"outline-style":[{outline:[...xt(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Y,M,C]}],"outline-w":[{outline:["",Y,Kl,wn]}],"outline-color":[{outline:A()}],shadow:[{shadow:["","none",d,fi,si]}],"shadow-color":[{shadow:A()}],"inset-shadow":[{"inset-shadow":["none",h,fi,si]}],"inset-shadow-color":[{"inset-shadow":A()}],"ring-w":[{ring:fe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:A()}],"ring-offset-w":[{"ring-offset":[Y,wn]}],"ring-offset-color":[{"ring-offset":A()}],"inset-ring-w":[{"inset-ring":fe()}],"inset-ring-color":[{"inset-ring":A()}],"text-shadow":[{"text-shadow":["none",f,fi,si]}],"text-shadow-color":[{"text-shadow":A()}],opacity:[{opacity:[Y,M,C]}],"mix-blend":[{"mix-blend":[...Yu(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Yu()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Y]}],"mask-image-linear-from-pos":[{"mask-linear-from":Ee()}],"mask-image-linear-to-pos":[{"mask-linear-to":Ee()}],"mask-image-linear-from-color":[{"mask-linear-from":A()}],"mask-image-linear-to-color":[{"mask-linear-to":A()}],"mask-image-t-from-pos":[{"mask-t-from":Ee()}],"mask-image-t-to-pos":[{"mask-t-to":Ee()}],"mask-image-t-from-color":[{"mask-t-from":A()}],"mask-image-t-to-color":[{"mask-t-to":A()}],"mask-image-r-from-pos":[{"mask-r-from":Ee()}],"mask-image-r-to-pos":[{"mask-r-to":Ee()}],"mask-image-r-from-color":[{"mask-r-from":A()}],"mask-image-r-to-color":[{"mask-r-to":A()}],"mask-image-b-from-pos":[{"mask-b-from":Ee()}],"mask-image-b-to-pos":[{"mask-b-to":Ee()}],"mask-image-b-from-color":[{"mask-b-from":A()}],"mask-image-b-to-color":[{"mask-b-to":A()}],"mask-image-l-from-pos":[{"mask-l-from":Ee()}],"mask-image-l-to-pos":[{"mask-l-to":Ee()}],"mask-image-l-from-color":[{"mask-l-from":A()}],"mask-image-l-to-color":[{"mask-l-to":A()}],"mask-image-x-from-pos":[{"mask-x-from":Ee()}],"mask-image-x-to-pos":[{"mask-x-to":Ee()}],"mask-image-x-from-color":[{"mask-x-from":A()}],"mask-image-x-to-color":[{"mask-x-to":A()}],"mask-image-y-from-pos":[{"mask-y-from":Ee()}],"mask-image-y-to-pos":[{"mask-y-to":Ee()}],"mask-image-y-from-color":[{"mask-y-from":A()}],"mask-image-y-to-color":[{"mask-y-to":A()}],"mask-image-radial":[{"mask-radial":[M,C]}],"mask-image-radial-from-pos":[{"mask-radial-from":Ee()}],"mask-image-radial-to-pos":[{"mask-radial-to":Ee()}],"mask-image-radial-from-color":[{"mask-radial-from":A()}],"mask-image-radial-to-color":[{"mask-radial-to":A()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[Y]}],"mask-image-conic-from-pos":[{"mask-conic-from":Ee()}],"mask-image-conic-to-pos":[{"mask-conic-to":Ee()}],"mask-image-conic-from-color":[{"mask-conic-from":A()}],"mask-image-conic-to-color":[{"mask-conic-to":A()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:I()}],"mask-repeat":[{mask:oe()}],"mask-size":[{mask:bn()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",M,C]}],filter:[{filter:["","none",M,C]}],blur:[{blur:Lu()}],brightness:[{brightness:[Y,M,C]}],contrast:[{contrast:[Y,M,C]}],"drop-shadow":[{"drop-shadow":["","none",v,fi,si]}],"drop-shadow-color":[{"drop-shadow":A()}],grayscale:[{grayscale:["",Y,M,C]}],"hue-rotate":[{"hue-rotate":[Y,M,C]}],invert:[{invert:["",Y,M,C]}],saturate:[{saturate:[Y,M,C]}],sepia:[{sepia:["",Y,M,C]}],"backdrop-filter":[{"backdrop-filter":["","none",M,C]}],"backdrop-blur":[{"backdrop-blur":Lu()}],"backdrop-brightness":[{"backdrop-brightness":[Y,M,C]}],"backdrop-contrast":[{"backdrop-contrast":[Y,M,C]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Y,M,C]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Y,M,C]}],"backdrop-invert":[{"backdrop-invert":["",Y,M,C]}],"backdrop-opacity":[{"backdrop-opacity":[Y,M,C]}],"backdrop-saturate":[{"backdrop-saturate":[Y,M,C]}],"backdrop-sepia":[{"backdrop-sepia":["",Y,M,C]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":N()}],"border-spacing-x":[{"border-spacing-x":N()}],"border-spacing-y":[{"border-spacing-y":N()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",M,C]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Y,"initial",M,C]}],ease:[{ease:["linear","initial",g,M,C]}],delay:[{delay:[Y,M,C]}],animate:[{animate:["none",m,M,C]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[S,M,C]}],"perspective-origin":[{"perspective-origin":T()}],rotate:[{rotate:Qa()}],"rotate-x":[{"rotate-x":Qa()}],"rotate-y":[{"rotate-y":Qa()}],"rotate-z":[{"rotate-z":Qa()}],scale:[{scale:Za()}],"scale-x":[{"scale-x":Za()}],"scale-y":[{"scale-y":Za()}],"scale-z":[{"scale-z":Za()}],"scale-3d":["scale-3d"],skew:[{skew:Ur()}],"skew-x":[{"skew-x":Ur()}],"skew-y":[{"skew-y":Ur()}],transform:[{transform:[M,C,"","none","gpu","cpu"]}],"transform-origin":[{origin:T()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ka()}],"translate-x":[{"translate-x":Ka()}],"translate-y":[{"translate-y":Ka()}],"translate-z":[{"translate-z":Ka()}],"translate-none":["translate-none"],accent:[{accent:A()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:A()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",M,C]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",M,C]}],fill:[{fill:["none",...A()]}],"stroke-w":[{stroke:[Y,Kl,wn,Eo]}],stroke:[{stroke:["none",...A()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},h0=fb(Mb);function Ga(...e){return h0(Ru(e))}const Ob=e0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function ur({className:e,variant:t,size:n,asChild:l=!1,...a}){const i=l?Im:"button";return s.jsx(i,{"data-slot":"button",className:Ga(Ob({variant:t,size:n,className:e})),...a})}function m0({className:e,...t}){return s.jsx("textarea",{"data-slot":"textarea",className:Ga("resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...t})}function ku({className:e,...t}){return s.jsx("div",{"data-slot":"card",className:Ga("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Db=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,l)=>l?l.toUpperCase():n.toLowerCase()),Df=e=>{const t=Db(e);return t.charAt(0).toUpperCase()+t.slice(1)},g0=(...e)=>e.filter((t,n,l)=>!!t&&t.trim()!==""&&l.indexOf(t)===n).join(" ").trim(),kb=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ub={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:l,className:a="",children:i,iconNode:r,...o},c)=>y.createElement("svg",{ref:c,...Ub,width:t,height:t,stroke:e,strokeWidth:l?Number(n)*24/Number(t):n,className:g0("lucide",a),...!i&&!kb(o)&&{"aria-hidden":"true"},...o},[...r.map(([u,d])=>y.createElement(u,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=(e,t)=>{const n=y.forwardRef(({className:l,...a},i)=>y.createElement(Hb,{ref:i,iconNode:t,className:g0(`lucide-${Rb(Df(e))}`,`lucide-${e}`,l),...a}));return n.displayName=Df(e),n};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],v0=Oe("activity",Bb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],p0=Oe("arrow-left",Yb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],qb=Oe("arrow-right",Lb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Xb=Oe("brain",Gb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Qb=Oe("circle-check-big",Vb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Kb=Oe("circle-check",Zb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],$b=Oe("clipboard-list",Jb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Fb=Oe("clock",Wb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Pb=Oe("message-circle",Ib);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],y0=Oe("message-square",e1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],n1=Oe("mic",t1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],a1=Oe("send",l1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],r1=Oe("star",i1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],b0=Oe("trending-up",o1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],u1=Oe("triangle-alert",c1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],f1=Oe("users",s1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],h1=Oe("workflow",d1);function m1(e){const t=g1(e),n=y.forwardRef((l,a)=>{const{children:i,...r}=l,o=y.Children.toArray(i),c=o.find(p1);if(c){const u=c.props.children,d=o.map(h=>h===c?y.Children.count(u)>1?y.Children.only(null):y.isValidElement(u)?u.props.children:null:h);return s.jsx(t,{...r,ref:a,children:y.isValidElement(u)?y.cloneElement(u,void 0,d):null})}return s.jsx(t,{...r,ref:a,children:i})});return n.displayName=`${e}.Slot`,n}function g1(e){const t=y.forwardRef((n,l)=>{const{children:a,...i}=n;if(y.isValidElement(a)){const r=b1(a),o=y1(i,a.props);return a.type!==y.Fragment&&(o.ref=l?Ou(l,r):r),y.cloneElement(a,o)}return y.Children.count(a)>1?y.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var v1=Symbol("radix.slottable");function p1(e){return y.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===v1}function y1(e,t){const n={...t};for(const l in t){const a=e[l],i=t[l];/^on[A-Z]/.test(l)?a&&i?n[l]=(...o)=>{const c=i(...o);return a(...o),c}:a&&(n[l]=a):l==="style"?n[l]={...a,...i}:l==="className"&&(n[l]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function b1(e){var l,a;let t=(l=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:l.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var x1=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Xa=x1.reduce((e,t)=>{const n=m1(`Primitive.${t}`),l=y.forwardRef((a,i)=>{const{asChild:r,...o}=a,c=r?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),s.jsx(c,{...o,ref:i})});return l.displayName=`Primitive.${t}`,{...e,[t]:l}},{}),Ac=globalThis!=null&&globalThis.document?y.useLayoutEffect:()=>{};function w1(e,t){return y.useReducer((n,l)=>t[n][l]??n,e)}var Va=e=>{const{present:t,children:n}=e,l=S1(t),a=typeof n=="function"?n({present:l.isPresent}):y.Children.only(n),i=Qn(l.ref,E1(a));return typeof n=="function"||l.isPresent?y.cloneElement(a,{ref:i}):null};Va.displayName="Presence";function S1(e){const[t,n]=y.useState(),l=y.useRef(null),a=y.useRef(e),i=y.useRef("none"),r=e?"mounted":"unmounted",[o,c]=w1(r,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.useEffect(()=>{const u=di(l.current);i.current=o==="mounted"?u:"none"},[o]),Ac(()=>{const u=l.current,d=a.current;if(d!==e){const f=i.current,v=di(u);e?c("MOUNT"):v==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(d&&f!==v?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,c]),Ac(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,h=v=>{const S=di(l.current).includes(CSS.escape(v.animationName));if(v.target===t&&S&&(c("ANIMATION_END"),!a.current)){const z=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=z)})}},f=v=>{v.target===t&&(i.current=di(l.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(o),ref:y.useCallback(u=>{l.current=u?getComputedStyle(u):null,n(u)},[])}}function di(e){return(e==null?void 0:e.animationName)||"none"}function E1(e){var l,a;let t=(l=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:l.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function z1(e,t=[]){let n=[];function l(i,r){const o=y.createContext(r),c=n.length;n=[...n,r];const u=h=>{var g;const{scope:f,children:v,...x}=h,S=((g=f==null?void 0:f[e])==null?void 0:g[c])||o,z=y.useMemo(()=>x,Object.values(x));return s.jsx(S.Provider,{value:z,children:v})};u.displayName=i+"Provider";function d(h,f){var S;const v=((S=f==null?void 0:f[e])==null?void 0:S[c])||o,x=y.useContext(v);if(x)return x;if(r!==void 0)return r;throw new Error(`\`${h}\` must be used within \`${i}\``)}return[u,d]}const a=()=>{const i=n.map(r=>y.createContext(r));return function(o){const c=(o==null?void 0:o[e])||i;return y.useMemo(()=>({[`__scope${e}`]:{...o,[e]:c}}),[o,c])}};return a.scopeName=e,[l,N1(a,...t)]}function N1(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const l=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const r=l.reduce((o,{useScope:c,scopeName:u})=>{const h=c(i)[`__scope${u}`];return{...o,...h}},{});return y.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}function An(e){const t=y.useRef(e);return y.useEffect(()=>{t.current=e}),y.useMemo(()=>(...n)=>{var l;return(l=t.current)==null?void 0:l.call(t,...n)},[])}var A1=y.createContext(void 0);function j1(e){const t=y.useContext(A1);return e||t||"ltr"}function T1(e,[t,n]){return Math.min(n,Math.max(t,e))}function On(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function _1(e,t){return y.useReducer((n,l)=>t[n][l]??n,e)}var Uu="ScrollArea",[x0,sx]=z1(Uu),[C1,ut]=x0(Uu),w0=y.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:l="hover",dir:a,scrollHideDelay:i=600,...r}=e,[o,c]=y.useState(null),[u,d]=y.useState(null),[h,f]=y.useState(null),[v,x]=y.useState(null),[S,z]=y.useState(null),[g,m]=y.useState(0),[p,b]=y.useState(0),[T,O]=y.useState(!1),[j,N]=y.useState(!1),_=Qn(t,te=>c(te)),R=j1(a);return s.jsx(C1,{scope:n,type:l,dir:R,scrollHideDelay:i,scrollArea:o,viewport:u,onViewportChange:d,content:h,onContentChange:f,scrollbarX:v,onScrollbarXChange:x,scrollbarXEnabled:T,onScrollbarXEnabledChange:O,scrollbarY:S,onScrollbarYChange:z,scrollbarYEnabled:j,onScrollbarYEnabledChange:N,onCornerWidthChange:m,onCornerHeightChange:b,children:s.jsx(Xa.div,{dir:R,...r,ref:_,style:{position:"relative","--radix-scroll-area-corner-width":g+"px","--radix-scroll-area-corner-height":p+"px",...e.style}})})});w0.displayName=Uu;var S0="ScrollAreaViewport",E0=y.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:l,nonce:a,...i}=e,r=ut(S0,n),o=y.useRef(null),c=Qn(t,o,r.onViewportChange);return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),s.jsx(Xa.div,{"data-radix-scroll-area-viewport":"",...i,ref:c,style:{overflowX:r.scrollbarXEnabled?"scroll":"hidden",overflowY:r.scrollbarYEnabled?"scroll":"hidden",...e.style},children:s.jsx("div",{ref:r.onContentChange,style:{minWidth:"100%",display:"table"},children:l})})]})});E0.displayName=S0;var bt="ScrollAreaScrollbar",z0=y.forwardRef((e,t)=>{const{forceMount:n,...l}=e,a=ut(bt,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:r}=a,o=e.orientation==="horizontal";return y.useEffect(()=>(o?i(!0):r(!0),()=>{o?i(!1):r(!1)}),[o,i,r]),a.type==="hover"?s.jsx(M1,{...l,ref:t,forceMount:n}):a.type==="scroll"?s.jsx(O1,{...l,ref:t,forceMount:n}):a.type==="auto"?s.jsx(N0,{...l,ref:t,forceMount:n}):a.type==="always"?s.jsx(Hu,{...l,ref:t}):null});z0.displayName=bt;var M1=y.forwardRef((e,t)=>{const{forceMount:n,...l}=e,a=ut(bt,e.__scopeScrollArea),[i,r]=y.useState(!1);return y.useEffect(()=>{const o=a.scrollArea;let c=0;if(o){const u=()=>{window.clearTimeout(c),r(!0)},d=()=>{c=window.setTimeout(()=>r(!1),a.scrollHideDelay)};return o.addEventListener("pointerenter",u),o.addEventListener("pointerleave",d),()=>{window.clearTimeout(c),o.removeEventListener("pointerenter",u),o.removeEventListener("pointerleave",d)}}},[a.scrollArea,a.scrollHideDelay]),s.jsx(Va,{present:n||i,children:s.jsx(N0,{"data-state":i?"visible":"hidden",...l,ref:t})})}),O1=y.forwardRef((e,t)=>{const{forceMount:n,...l}=e,a=ut(bt,e.__scopeScrollArea),i=e.orientation==="horizontal",r=kr(()=>c("SCROLL_END"),100),[o,c]=_1("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return y.useEffect(()=>{if(o==="idle"){const u=window.setTimeout(()=>c("HIDE"),a.scrollHideDelay);return()=>window.clearTimeout(u)}},[o,a.scrollHideDelay,c]),y.useEffect(()=>{const u=a.viewport,d=i?"scrollLeft":"scrollTop";if(u){let h=u[d];const f=()=>{const v=u[d];h!==v&&(c("SCROLL"),r()),h=v};return u.addEventListener("scroll",f),()=>u.removeEventListener("scroll",f)}},[a.viewport,i,c,r]),s.jsx(Va,{present:n||o!=="hidden",children:s.jsx(Hu,{"data-state":o==="hidden"?"hidden":"visible",...l,ref:t,onPointerEnter:On(e.onPointerEnter,()=>c("POINTER_ENTER")),onPointerLeave:On(e.onPointerLeave,()=>c("POINTER_LEAVE"))})})}),N0=y.forwardRef((e,t)=>{const n=ut(bt,e.__scopeScrollArea),{forceMount:l,...a}=e,[i,r]=y.useState(!1),o=e.orientation==="horizontal",c=kr(()=>{if(n.viewport){const u=n.viewport.offsetWidth<n.viewport.scrollWidth,d=n.viewport.offsetHeight<n.viewport.scrollHeight;r(o?u:d)}},10);return Tl(n.viewport,c),Tl(n.content,c),s.jsx(Va,{present:l||i,children:s.jsx(Hu,{"data-state":i?"visible":"hidden",...a,ref:t})})}),Hu=y.forwardRef((e,t)=>{const{orientation:n="vertical",...l}=e,a=ut(bt,e.__scopeScrollArea),i=y.useRef(null),r=y.useRef(0),[o,c]=y.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=C0(o.viewport,o.content),d={...l,sizes:o,onSizesChange:c,hasThumb:u>0&&u<1,onThumbChange:f=>i.current=f,onThumbPointerUp:()=>r.current=0,onThumbPointerDown:f=>r.current=f};function h(f,v){return B1(f,r.current,o,v)}return n==="horizontal"?s.jsx(R1,{...d,ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){const f=a.viewport.scrollLeft,v=kf(f,o,a.dir);i.current.style.transform=`translate3d(${v}px, 0, 0)`}},onWheelScroll:f=>{a.viewport&&(a.viewport.scrollLeft=f)},onDragScroll:f=>{a.viewport&&(a.viewport.scrollLeft=h(f,a.dir))}}):n==="vertical"?s.jsx(D1,{...d,ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){const f=a.viewport.scrollTop,v=kf(f,o);i.current.style.transform=`translate3d(0, ${v}px, 0)`}},onWheelScroll:f=>{a.viewport&&(a.viewport.scrollTop=f)},onDragScroll:f=>{a.viewport&&(a.viewport.scrollTop=h(f))}}):null}),R1=y.forwardRef((e,t)=>{const{sizes:n,onSizesChange:l,...a}=e,i=ut(bt,e.__scopeScrollArea),[r,o]=y.useState(),c=y.useRef(null),u=Qn(t,c,i.onScrollbarXChange);return y.useEffect(()=>{c.current&&o(getComputedStyle(c.current))},[c]),s.jsx(j0,{"data-orientation":"horizontal",...a,ref:u,sizes:n,style:{bottom:0,left:i.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:i.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Dr(n)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.x),onDragScroll:d=>e.onDragScroll(d.x),onWheelScroll:(d,h)=>{if(i.viewport){const f=i.viewport.scrollLeft+d.deltaX;e.onWheelScroll(f),O0(f,h)&&d.preventDefault()}},onResize:()=>{c.current&&i.viewport&&r&&l({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:fr(r.paddingLeft),paddingEnd:fr(r.paddingRight)}})}})}),D1=y.forwardRef((e,t)=>{const{sizes:n,onSizesChange:l,...a}=e,i=ut(bt,e.__scopeScrollArea),[r,o]=y.useState(),c=y.useRef(null),u=Qn(t,c,i.onScrollbarYChange);return y.useEffect(()=>{c.current&&o(getComputedStyle(c.current))},[c]),s.jsx(j0,{"data-orientation":"vertical",...a,ref:u,sizes:n,style:{top:0,right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Dr(n)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.y),onDragScroll:d=>e.onDragScroll(d.y),onWheelScroll:(d,h)=>{if(i.viewport){const f=i.viewport.scrollTop+d.deltaY;e.onWheelScroll(f),O0(f,h)&&d.preventDefault()}},onResize:()=>{c.current&&i.viewport&&r&&l({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:fr(r.paddingTop),paddingEnd:fr(r.paddingBottom)}})}})}),[k1,A0]=x0(bt),j0=y.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:l,hasThumb:a,onThumbChange:i,onThumbPointerUp:r,onThumbPointerDown:o,onThumbPositionChange:c,onDragScroll:u,onWheelScroll:d,onResize:h,...f}=e,v=ut(bt,n),[x,S]=y.useState(null),z=Qn(t,_=>S(_)),g=y.useRef(null),m=y.useRef(""),p=v.viewport,b=l.content-l.viewport,T=An(d),O=An(c),j=kr(h,10);function N(_){if(g.current){const R=_.clientX-g.current.left,te=_.clientY-g.current.top;u({x:R,y:te})}}return y.useEffect(()=>{const _=R=>{const te=R.target;(x==null?void 0:x.contains(te))&&T(R,b)};return document.addEventListener("wheel",_,{passive:!1}),()=>document.removeEventListener("wheel",_,{passive:!1})},[p,x,b,T]),y.useEffect(O,[l,O]),Tl(x,j),Tl(v.content,j),s.jsx(k1,{scope:n,scrollbar:x,hasThumb:a,onThumbChange:An(i),onThumbPointerUp:An(r),onThumbPositionChange:O,onThumbPointerDown:An(o),children:s.jsx(Xa.div,{...f,ref:z,style:{position:"absolute",...f.style},onPointerDown:On(e.onPointerDown,_=>{_.button===0&&(_.target.setPointerCapture(_.pointerId),g.current=x.getBoundingClientRect(),m.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",v.viewport&&(v.viewport.style.scrollBehavior="auto"),N(_))}),onPointerMove:On(e.onPointerMove,N),onPointerUp:On(e.onPointerUp,_=>{const R=_.target;R.hasPointerCapture(_.pointerId)&&R.releasePointerCapture(_.pointerId),document.body.style.webkitUserSelect=m.current,v.viewport&&(v.viewport.style.scrollBehavior=""),g.current=null})})})}),sr="ScrollAreaThumb",T0=y.forwardRef((e,t)=>{const{forceMount:n,...l}=e,a=A0(sr,e.__scopeScrollArea);return s.jsx(Va,{present:n||a.hasThumb,children:s.jsx(U1,{ref:t,...l})})}),U1=y.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:l,...a}=e,i=ut(sr,n),r=A0(sr,n),{onThumbPositionChange:o}=r,c=Qn(t,h=>r.onThumbChange(h)),u=y.useRef(void 0),d=kr(()=>{u.current&&(u.current(),u.current=void 0)},100);return y.useEffect(()=>{const h=i.viewport;if(h){const f=()=>{if(d(),!u.current){const v=Y1(h,o);u.current=v,o()}};return o(),h.addEventListener("scroll",f),()=>h.removeEventListener("scroll",f)}},[i.viewport,d,o]),s.jsx(Xa.div,{"data-state":r.hasThumb?"visible":"hidden",...a,ref:c,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:On(e.onPointerDownCapture,h=>{const v=h.target.getBoundingClientRect(),x=h.clientX-v.left,S=h.clientY-v.top;r.onThumbPointerDown({x,y:S})}),onPointerUp:On(e.onPointerUp,r.onThumbPointerUp)})});T0.displayName=sr;var Bu="ScrollAreaCorner",_0=y.forwardRef((e,t)=>{const n=ut(Bu,e.__scopeScrollArea),l=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&l?s.jsx(H1,{...e,ref:t}):null});_0.displayName=Bu;var H1=y.forwardRef((e,t)=>{const{__scopeScrollArea:n,...l}=e,a=ut(Bu,n),[i,r]=y.useState(0),[o,c]=y.useState(0),u=!!(i&&o);return Tl(a.scrollbarX,()=>{var h;const d=((h=a.scrollbarX)==null?void 0:h.offsetHeight)||0;a.onCornerHeightChange(d),c(d)}),Tl(a.scrollbarY,()=>{var h;const d=((h=a.scrollbarY)==null?void 0:h.offsetWidth)||0;a.onCornerWidthChange(d),r(d)}),u?s.jsx(Xa.div,{...l,ref:t,style:{width:i,height:o,position:"absolute",right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function fr(e){return e?parseInt(e,10):0}function C0(e,t){const n=e/t;return isNaN(n)?0:n}function Dr(e){const t=C0(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,l=(e.scrollbar.size-n)*t;return Math.max(l,18)}function B1(e,t,n,l="ltr"){const a=Dr(n),i=a/2,r=t||i,o=a-r,c=n.scrollbar.paddingStart+r,u=n.scrollbar.size-n.scrollbar.paddingEnd-o,d=n.content-n.viewport,h=l==="ltr"?[0,d]:[d*-1,0];return M0([c,u],h)(e)}function kf(e,t,n="ltr"){const l=Dr(t),a=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,i=t.scrollbar.size-a,r=t.content-t.viewport,o=i-l,c=n==="ltr"?[0,r]:[r*-1,0],u=T1(e,c);return M0([0,r],[0,o])(u)}function M0(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const l=(t[1]-t[0])/(e[1]-e[0]);return t[0]+l*(n-e[0])}}function O0(e,t){return e>0&&e<t}var Y1=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},l=0;return function a(){const i={left:e.scrollLeft,top:e.scrollTop},r=n.left!==i.left,o=n.top!==i.top;(r||o)&&t(),n=i,l=window.requestAnimationFrame(a)}(),()=>window.cancelAnimationFrame(l)};function kr(e,t){const n=An(e),l=y.useRef(0);return y.useEffect(()=>()=>window.clearTimeout(l.current),[]),y.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(n,t)},[n,t])}function Tl(e,t){const n=An(t);Ac(()=>{let l=0;if(e){const a=new ResizeObserver(()=>{cancelAnimationFrame(l),l=window.requestAnimationFrame(n)});return a.observe(e),()=>{window.cancelAnimationFrame(l),a.unobserve(e)}}},[e,n])}var L1=w0,q1=E0,G1=_0;function X1({className:e,children:t,...n}){return s.jsxs(L1,{"data-slot":"scroll-area",className:Ga("relative",e),...n,children:[s.jsx(q1,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:t}),s.jsx(V1,{}),s.jsx(G1,{})]})}function V1({className:e,orientation:t="vertical",...n}){return s.jsx(z0,{"data-slot":"scroll-area-scrollbar",orientation:t,className:Ga("flex touch-none p-px transition-colors select-none",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",e),...n,children:s.jsx(T0,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}const Q1=e=>`${e.title}: ${e.patientDetails} presenting with ${e.chiefComplaint}. Vitals: ${e.vitals}. Initial assessment: ${e.initialAssessment}.`;function Z1({caseInfo:e,onSubmit:t,onBack:n,error:l,isLoading:a}){const[i,r]=y.useState(()=>Q1(e)),o=()=>{i.trim()&&t(i)};return s.jsx("div",{className:"min-h-screen p-8",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsxs(ur,{variant:"ghost",onClick:n,className:"mb-6 text-blue-700 hover:text-blue-900 hover:bg-blue-50",children:[s.jsx(p0,{className:"w-4 h-4 mr-2"}),"Back to Mode Selection"]}),s.jsxs("div",{className:"mb-8",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center",children:s.jsx($b,{className:"w-6 h-6 text-blue-600"})}),s.jsx("h1",{className:"text-blue-900",children:"Nurse Case Presentation"})]}),s.jsx("p",{className:"text-blue-700/70",children:"As a nurse, you have a patient case to present. Share your clinical assessment and reasoning with the AI medical coach. This will be the starting point for your coaching session to enhance your triage and presentation skills."})]}),s.jsxs(ku,{className:"p-8 border-2 border-blue-100",children:[s.jsx("h3",{className:"text-blue-900 mb-4",children:"Your Clinical Presentation"}),s.jsx("p",{className:"text-blue-700/70 mb-4",children:"Present your case as you would to a physician or during handoff. Include your assessment, working diagnosis, clinical reasoning, and proposed plan."}),s.jsx(m0,{value:i,onChange:c=>r(c.target.value),placeholder:"Begin your presentation here... (e.g., 'I have a 45-year-old male presenting with chest pain. My assessment is...')",className:"min-h-[200px] mb-4 border-blue-200 focus:border-blue-400"}),l&&s.jsx("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm",children:l}),s.jsx(ur,{onClick:o,disabled:!i.trim()||a,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50",children:a?"Starting session...":"Continue to Coaching Session"})]})]})})}const K1={focusedInformation:"Focused, Relevant Information",workingDiagnosis:"Clear Working Diagnosis",clinicalReasoning:"Logical Organization + Reasoning",differentialDiagnosis:"Differential Diagnosis",conciseness:"Conciseness + Efficiency",diagnosticWorkup:"Diagnostic Workup Plan",managementPlan:"Management Plan + Disposition",hypothesisDriven:"Hypothesis-Driven Inquiry",synthesis:"Synthesis Ability"},J1={focusedInformation:"Only includes details supporting diagnosis, omits extraneous info",workingDiagnosis:"States hypothesis early, justifies with structured data",clinicalReasoning:"Explains symptom → reasoning → diagnosis connections",differentialDiagnosis:"Provides prioritized alternative diagnoses logically",conciseness:"Short, well-structured, purposeful delivery",diagnosticWorkup:"Identifies prioritized tests with clear rationale",managementPlan:"Ordered, justified management linked to diagnosis",hypothesisDriven:"Shows clear hypothesis, knows what information matters",synthesis:"Provides summary statements, distills key clues"};function $1({metrics:e}){const t=i=>i>=80?"text-green-600":i>=60?"text-yellow-600":"text-orange-600",n=i=>i>=80?"bg-green-500":i>=60?"bg-yellow-500":"bg-orange-500",l=Math.round(Object.values(e).reduce((i,r)=>i+r,0)/Object.keys(e).length),a=i=>i==="focusedInformation";return s.jsxs("div",{className:"w-96 bg-white border-l border-blue-100 p-6 overflow-y-auto",children:[s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(b0,{className:"w-5 h-5 text-blue-600"}),s.jsx("h3",{className:"text-blue-900",children:"Performance Metrics"})]}),s.jsx("p",{className:"text-blue-700/70",children:"Real-time assessment of your clinical presentation skills"})]}),s.jsxs(ku,{className:"p-4 mb-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",children:[s.jsx("p",{className:"text-blue-700 mb-2",children:"Overall Score"}),s.jsxs("div",{className:"flex items-end gap-2",children:[s.jsxs("span",{className:`text-blue-900 ${t(l)}`,children:[l,"%"]}),l>=80&&s.jsx(Kb,{className:"w-5 h-5 text-green-600 mb-1"})]})]}),s.jsx("div",{className:"space-y-5",children:Object.keys(e).map((i,r)=>s.jsxs("div",{className:a(i)?"p-3 bg-blue-50 rounded-lg border-2 border-blue-200":"",children:[s.jsxs("div",{className:"flex items-start justify-between mb-2 gap-2",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsxs("p",{className:"text-blue-900",children:[r+1,". ",K1[i]]}),a(i)&&s.jsx(r1,{className:"w-4 h-4 text-blue-600 fill-blue-600"})]}),s.jsx("p",{className:"text-blue-700/60",children:J1[i]})]}),s.jsxs("span",{className:`flex-shrink-0 ${t(e[i])}`,children:[e[i],"%"]})]}),s.jsx("div",{className:"relative h-2 bg-blue-100 rounded-full overflow-hidden",children:s.jsx("div",{className:`absolute top-0 left-0 h-full ${n(e[i])} transition-all duration-500 ease-out`,style:{width:`${e[i]}%`}})})]},i))}),s.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100",children:s.jsx("p",{className:"text-blue-800",children:"💡 Metrics update dynamically as the AI coach evaluates your responses"})})]})}const hi="https://attending-physician.onrender.com".replace(/\/$/,"")??"",zo="ap-chat-session",W1={title:"Emergency Department Presentation",patientDetails:"45-year-old male, John Smith",chiefComplaint:"Chest pain and shortness of breath for 2 hours",vitals:"BP: 145/92, HR: 105, RR: 22, Temp: 37.2°C, SpO2: 94% on room air",initialAssessment:"Patient appears anxious, diaphoretic, clutching chest"};function F1(){const e=!!hi,[t,n]=y.useState("case-presentation"),[l,a]=y.useState(()=>localStorage.getItem(zo)??""),[i,r]=y.useState([]),[o,c]=y.useState(""),[u,d]=y.useState(!1),[h,f]=y.useState(!1),[v,x]=y.useState(""),[S,z]=y.useState({focusedInformation:0,workingDiagnosis:0,clinicalReasoning:0,differentialDiagnosis:0,conciseness:0,diagnosticWorkup:0,managementPlan:0,hypothesisDriven:0,synthesis:0}),[g,m]=y.useState(!1),p=y.useRef(null),b=()=>{var k;(k=p.current)==null||k.scrollIntoView({behavior:"smooth"})};y.useEffect(()=>{b()},[i]),y.useEffect(()=>{!l||!e||T(l)},[l,e]);const T=async k=>{if(!(!e||!k)){d(!0);try{const Q=await fetch(`${hi}/api/chat/sessions/${k}`);if(!Q.ok){if(Q.status===404)throw te(),new Error("Session expired. Start a new one to continue.");const V=await Q.json().catch(()=>({}));throw new Error((V==null?void 0:V.detail)??"Unable to load session.")}const re=await Q.json();N(re),x("")}catch(Q){x(Q.message)}finally{d(!1)}}},O={focusedInformation:["focused_relevant_information","1"],workingDiagnosis:["clear_working_diagnosis","2"],clinicalReasoning:["logical_organization_reasoning","3"],differentialDiagnosis:["differential_diagnosis","4"],conciseness:["conciseness_efficiency","5"],diagnosticWorkup:["diagnostic_workup_plan","6"],managementPlan:["management_plan_disposition","7"],hypothesisDriven:["hypothesis_driven_inquiry","8"],synthesis:["synthesis_ability","9"]},j=(k,Q)=>{for(const re of Q){const V=k==null?void 0:k[re];if(V){if(typeof V=="number")return Math.round(V);if(typeof(V==null?void 0:V.confidence)=="number")return Math.round(V.confidence*100);if(typeof(V==null?void 0:V.score)=="number")return Math.round(V.score)}}return 0},N=k=>{const Q=k.state;if(!Q)return;const re=[];if(Q.initial_evaluation&&re.push({id:"initial-eval",role:"assistant",variant:"initial",content:Q.initial_evaluation.overall_assessment??"Let's explore your clinical reasoning.",timestamp:new Date,meta:{priorityGaps:Q.initial_evaluation.priority_gaps}}),(Q.conversation_history??[]).forEach((E,D)=>{var A,I,oe;re.push({id:`assistant-question-${D}`,role:"assistant",variant:"question",content:E.question,timestamp:new Date,meta:{metricTarget:(A=E.question_obj)==null?void 0:A.metric_target,followUpHint:(I=E.question_obj)==null?void 0:I.follow_up_hint,acceptableCriteria:(oe=E.question_obj)==null?void 0:oe.acceptable_criteria}}),E.answer&&re.push({id:`user-answer-${D}`,role:"user",variant:"answer",content:E.answer,timestamp:new Date}),E.evaluation&&re.push({id:`assistant-eval-${D}`,role:"assistant",variant:"evaluation",content:E.evaluation.feedback,timestamp:new Date,meta:{metricTarget:E.evaluation.metric,status:E.evaluation.status,strengths:E.evaluation.strengths,weaknesses:E.evaluation.weaknesses,nextAction:E.evaluation.next_action}})}),r(re),Q.metrics_status){const E=Q.metrics_status;z({focusedInformation:j(E,O.focusedInformation),workingDiagnosis:j(E,O.workingDiagnosis),clinicalReasoning:j(E,O.clinicalReasoning),differentialDiagnosis:j(E,O.differentialDiagnosis),conciseness:j(E,O.conciseness),diagnosticWorkup:j(E,O.diagnosticWorkup),managementPlan:j(E,O.managementPlan),hypothesisDriven:j(E,O.hypothesisDriven),synthesis:j(E,O.synthesis)})}m(k.status!=="active")},_=async k=>{if(!e){x("Set VITE_API_BASE_URL to your FastAPI deployment first.");return}if(!k.trim()){x("Please enter a case presentation.");return}if(k.trim().length<40){x("Please provide at least 40 characters so the coach can evaluate the case.");return}d(!0),x("");try{const Q=await fetch(`${hi}/api/chat/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({presentation:k})}),re=await Q.json().catch(()=>({}));if(!Q.ok)throw new Error((re==null?void 0:re.detail)??"Unable to start a session.");localStorage.setItem(zo,re.session_id),a(re.session_id),n("interaction")}catch(Q){x(Q.message??"Failed to reach the backend.")}finally{d(!1)}},R=async()=>{var Q,re;if(!l){x("Start a session first.");return}if(!o.trim()){x("Please enter your response.");return}const k={id:`user-${Date.now()}`,role:"user",content:o,timestamp:new Date};r(V=>[...V,k]),c(""),f(!0),x("");try{const V=await fetch(`${hi}/api/chat/sessions/${l}/messages`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:o})}),E=await V.json().catch(()=>({}));if(!V.ok)throw new Error((E==null?void 0:E.detail)??"Unable to process that answer.");await T(l),((re=(Q=E==null?void 0:E.response)==null?void 0:Q.data)==null?void 0:re.type)==="session_complete"&&m(!0)}catch(V){x(V.message??"Something went wrong.")}finally{f(!1)}},te=()=>{a(""),localStorage.removeItem(zo),r([]),c(""),z({focusedInformation:0,workingDiagnosis:0,clinicalReasoning:0,differentialDiagnosis:0,conciseness:0,diagnosticWorkup:0,managementPlan:0,hypothesisDriven:0,synthesis:0}),m(!1),n("case-presentation"),x("")};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50",children:[t==="case-presentation"&&s.jsx(Z1,{caseInfo:W1,onSubmit:_,onBack:()=>window.location.href="/",error:v,isLoading:u}),t==="interaction"&&s.jsxs("div",{className:"flex h-screen",children:[s.jsxs("div",{className:"flex-1 flex flex-col",children:[s.jsxs("div",{className:"bg-white border-b border-gray-200 p-4 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs(Mu,{to:"/",className:"text-blue-600 hover:text-blue-700 flex items-center gap-2",children:[s.jsx(p0,{size:20}),"Back to Home"]}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"AI Medical Coach"}),s.jsx("p",{className:"text-sm text-gray-600",children:"Interactive Training Session"})]})]}),s.jsx(ur,{variant:"outline",onClick:te,children:"Reset Session"})]}),s.jsx(X1,{className:"flex-1 p-6",children:s.jsxs("div",{className:"max-w-4xl mx-auto space-y-4",children:[u&&i.length===0&&s.jsx("div",{className:"text-center text-gray-500",children:"Loading session..."}),i.map(k=>{var Q;return s.jsx(ku,{className:`p-4 ${k.role==="user"?"bg-blue-50 ml-12":"bg-gray-50 mr-12"}`,children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${k.role==="user"?"bg-blue-600":"bg-gray-600"}`,children:k.role==="user"?"You":"AI"}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"font-semibold text-sm mb-1",children:[k.role==="user"?"You":"AI Coach",((Q=k.meta)==null?void 0:Q.metricTarget)&&s.jsx("span",{className:"ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:k.meta.metricTarget})]}),s.jsx("p",{className:"text-gray-800",children:k.content})]})]})},k.id)}),h&&s.jsxs("div",{className:"flex items-center gap-2 text-gray-500",children:[s.jsxs("div",{className:"flex gap-1",children:[s.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce"}),s.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"}),s.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"})]}),s.jsx("span",{className:"text-sm",children:"AI is thinking..."})]}),s.jsx("div",{ref:p})]})}),s.jsx("div",{className:"bg-white border-t border-gray-200 p-4",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[v&&s.jsx("div",{className:"mb-3 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm",children:v}),g?s.jsxs("div",{className:"text-center p-4 bg-green-50 border border-green-200 rounded",children:[s.jsx("p",{className:"text-green-800 font-semibold",children:"Session Complete!"}),s.jsx("p",{className:"text-sm text-green-700",children:'Check your metrics on the right. Click "Reset Session" to try another case.'})]}):s.jsxs(s.Fragment,{children:[s.jsx(m0,{value:o,onChange:k=>c(k.target.value),placeholder:"Type your response...",className:"min-h-[100px] resize-none",onKeyDown:k=>{k.key==="Enter"&&!k.shiftKey&&(k.preventDefault(),R())}}),s.jsxs("div",{className:"mt-3 flex justify-between items-center",children:[s.jsx("p",{className:"text-sm text-gray-500",children:"Press Enter to send, Shift+Enter for new line"}),s.jsxs(ur,{onClick:R,disabled:h||!o.trim(),children:[s.jsx(a1,{size:16,className:"mr-2"}),"Send"]})]})]})]})})]}),s.jsx("div",{className:"w-80 bg-white border-l border-gray-200 overflow-y-auto",children:s.jsx($1,{metrics:S})})]})]})}function R0(...e){return h0(Ru(e))}const I1=e0("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function dr({className:e,variant:t,size:n,asChild:l=!1,...a}){const i=l?Im:"button";return s.jsx(i,{"data-slot":"button",className:R0(I1({variant:t,size:n,className:e})),...a})}function P1(){return s.jsx("header",{className:"sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200",children:s.jsx("div",{className:"container mx-auto px-4",children:s.jsxs("div",{className:"flex items-center justify-between h-16",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center",children:s.jsx(v0,{className:"h-6 w-6 text-white"})}),s.jsx("span",{className:"text-xl text-gray-900",children:"TriageAI Coach"})]}),s.jsxs("nav",{className:"hidden md:flex items-center gap-8",children:[s.jsx("a",{href:"#features",className:"text-gray-600 hover:text-gray-900 transition-colors",children:"Features"}),s.jsx("a",{href:"#how-it-works",className:"text-gray-600 hover:text-gray-900 transition-colors",children:"How It Works"}),s.jsx("a",{href:"#statistics",className:"text-gray-600 hover:text-gray-900 transition-colors",children:"Why It Matters"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(dr,{variant:"ghost",className:"hidden sm:flex",children:"Sign In"}),s.jsx(dr,{className:"bg-blue-600 hover:bg-blue-700 text-white",children:"Get Started"})]})]})})})}const ex="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function D0(e){const[t,n]=y.useState(!1),l=()=>{n(!0)},{src:a,alt:i,style:r,className:o,...c}=e;return t?s.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${o??""}`,style:r,children:s.jsx("div",{className:"flex items-center justify-center w-full h-full",children:s.jsx("img",{src:ex,alt:"Error loading image",...c,"data-original-url":a})})}):s.jsx("img",{src:a,alt:i,className:o,style:r,...c,onError:l})}function tx(){return s.jsx("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden",children:s.jsx("div",{className:"container mx-auto px-4 py-20 lg:py-28",children:s.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full",children:[s.jsx("span",{className:"w-2 h-2 bg-blue-500 rounded-full animate-pulse"}),s.jsx("span",{children:"AI-Powered Medical Training"})]}),s.jsx("h1",{className:"text-5xl lg:text-6xl text-gray-900",children:"Master Triage Skills with AI Coaching"}),s.jsx("p",{className:"text-xl text-gray-600 leading-relaxed",children:"Train nurses to become confident triage professionals through realistic case scenarios and personalized AI feedback. Voice and text interactions available."}),s.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:s.jsx(dr,{size:"lg",className:"bg-blue-600 hover:bg-blue-700 text-white px-8 py-6",asChild:!0,children:s.jsxs(Mu,{to:"/chat",children:["Start Training",s.jsx(y0,{className:"ml-2 h-5 w-5"})]})})}),s.jsxs("div",{className:"flex items-center gap-8 pt-4",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-3xl text-blue-600",children:"1000+"}),s.jsx("div",{className:"text-gray-600",children:"Nurses Trained"})]}),s.jsx("div",{className:"h-12 w-px bg-gray-300"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-3xl text-blue-600",children:"50+"}),s.jsx("div",{className:"text-gray-600",children:"Case Scenarios"})]}),s.jsx("div",{className:"h-12 w-px bg-gray-300"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-3xl text-blue-600",children:"24/7"}),s.jsx("div",{className:"text-gray-600",children:"Available"})]})]})]}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-20 blur-2xl"}),s.jsx("div",{className:"relative rounded-2xl overflow-hidden shadow-2xl",children:s.jsx(D0,{src:"https://images.unsplash.com/photo-1517120026326-d87759a7b63b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbnVyc2UlMjBob3NwaXRhbHxlbnwxfHx8fDE3NjMyNDMxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",alt:"Medical professional using technology",className:"w-full h-auto object-cover"})})]})]})})})}function No({className:e,...t}){return s.jsx("div",{"data-slot":"card",className:R0("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}function nx(){return s.jsx("section",{className:"py-20 bg-gray-50",children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h2",{className:"text-4xl text-gray-900 mb-4",children:"The Healthcare Staffing Crisis"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Understaffing and lack of training contribute to critical issues in healthcare delivery. Our AI coaching platform helps address these challenges."})]}),s.jsxs("div",{className:"grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",children:[s.jsx(No,{className:"p-8 bg-white border-red-100 hover:border-red-200 transition-all hover:shadow-lg",children:s.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[s.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center",children:s.jsx(u1,{className:"h-8 w-8 text-red-600"})}),s.jsx("div",{className:"text-5xl text-red-600",children:"#3"}),s.jsx("h3",{className:"text-xl text-gray-900",children:"Leading Cause of Death"}),s.jsxs("p",{className:"text-gray-600",children:["Medical errors are the ",s.jsx("strong",{children:"third leading cause of death"})," in the United States, highlighting the critical need for better training."]})]})}),s.jsx(No,{className:"p-8 bg-white border-orange-100 hover:border-orange-200 transition-all hover:shadow-lg",children:s.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[s.jsx("div",{className:"w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center",children:s.jsx(f1,{className:"h-8 w-8 text-orange-600"})}),s.jsx("div",{className:"text-5xl text-orange-600",children:"~20%"}),s.jsx("h3",{className:"text-xl text-gray-900",children:"Hospitals Understaffed"}),s.jsxs("p",{className:"text-gray-600",children:["Approximately ",s.jsx("strong",{children:"one-fifth of hospitals"})," in the US are understaffed, putting immense pressure on existing healthcare workers."]})]})}),s.jsx(No,{className:"p-8 bg-white border-blue-100 hover:border-blue-200 transition-all hover:shadow-lg",children:s.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[s.jsx("div",{className:"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center",children:s.jsx(b0,{className:"h-8 w-8 text-blue-600"})}),s.jsx("div",{className:"text-5xl text-blue-600",children:"Solution"}),s.jsx("h3",{className:"text-xl text-gray-900",children:"AI-Powered Training"}),s.jsxs("p",{className:"text-gray-600",children:["Our platform provides ",s.jsx("strong",{children:"accessible, scalable training"})," to help nurses develop critical triage skills without adding to staffing burden."]})]})})]})]})})}function lx(){const e=[{icon:n1,title:"Voice-to-Voice Interaction",description:"Engage naturally with AI using voice commands, simulating real patient interactions.",color:"purple"},{icon:y0,title:"Text-Based Chat",description:"Prefer typing? Use our text interface for detailed case presentations and feedback.",color:"cyan"},{icon:Fb,title:"24/7 Availability",description:"Train anytime, anywhere. No scheduling conflicts or instructor availability issues.",color:"green"},{icon:Xb,title:"RAG-Powered Medical Knowledge",description:"Our chatbot uses Retrieval-Augmented Generation (RAG) grounded in verified medical sources and clinical guidelines.",color:"blue"},{icon:h1,title:"Agentic AI Model",description:"Powered by an agentic workflow with expert medical knowledge that dynamically reasons through complex scenarios and provides contextual feedback.",color:"orange"}],t={blue:"bg-blue-100 text-blue-600",purple:"bg-purple-100 text-purple-600",cyan:"bg-cyan-100 text-cyan-600",green:"bg-green-100 text-green-600",orange:"bg-orange-100 text-orange-600"};return s.jsx("section",{className:"py-20 bg-white",children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h2",{className:"text-4xl text-gray-900 mb-4",children:"How It Helps You Become a Triage Expert"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Our AI medical coach provides comprehensive training to help nurses develop the critical thinking and assessment skills needed for effective triage."})]}),s.jsxs("div",{className:"max-w-6xl mx-auto",children:[s.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8",children:e.slice(0,3).map((n,l)=>{const a=n.icon;return s.jsxs("div",{className:"flex flex-col space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-all",children:[s.jsx("div",{className:`w-12 h-12 rounded-lg ${t[n.color]} flex items-center justify-center`,children:s.jsx(a,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-xl text-gray-900",children:n.title}),s.jsx("p",{className:"text-gray-600",children:n.description})]},l)})}),s.jsx("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:e.slice(3).map((n,l)=>{const a=n.icon;return s.jsxs("div",{className:"flex flex-col space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-all",children:[s.jsx("div",{className:`w-12 h-12 rounded-lg ${t[n.color]} flex items-center justify-center`,children:s.jsx(a,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-xl text-gray-900",children:n.title}),s.jsx("p",{className:"text-gray-600",children:n.description})]},l+3)})})]})]})})}function ax(){const e=[{icon:Pb,title:"Present to AI Coach",description:"Use voice or text to present your assessment and triage decision to the AI medical coach.",step:"01"},{icon:Qb,title:"Get Expert Feedback",description:"Receive immediate, personalized feedback on your decision-making process and clinical reasoning.",step:"02"}];return s.jsx("section",{className:"py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white",children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h2",{className:"text-4xl mb-4",children:"How It Works"}),s.jsx("p",{className:"text-xl text-blue-100 max-w-3xl mx-auto",children:"Simple, effective training in two steps"})]}),s.jsx("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:e.map((t,n)=>{const l=t.icon;return s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full border border-white/20",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[s.jsx("div",{className:"text-5xl opacity-50",children:t.step}),s.jsx("div",{className:"w-12 h-12 bg-white rounded-lg flex items-center justify-center",children:s.jsx(l,{className:"h-6 w-6 text-blue-600"})})]}),s.jsx("h3",{className:"text-2xl mb-3",children:t.title}),s.jsx("p",{className:"text-blue-100",children:t.description})]}),n<e.length-1&&s.jsx("div",{className:"hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10",children:s.jsx("div",{className:"w-8 h-0.5 bg-white/40"})})]},n)})})]})})}function ix(){return s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"container mx-auto px-4",children:s.jsx("div",{className:"max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl overflow-hidden shadow-xl",children:s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 items-center",children:[s.jsxs("div",{className:"p-12 space-y-6",children:[s.jsx("h2",{className:"text-4xl text-gray-900",children:"Ready to Build Your Triage Skills?"}),s.jsx("p",{className:"text-xl text-gray-600",children:"Join hundreds of nurses who are improving their clinical decision-making and patient assessment skills with AI-powered coaching."}),s.jsx("div",{className:"flex flex-col sm:flex-row gap-4 pt-4",children:s.jsx(dr,{size:"lg",className:"bg-blue-600 hover:bg-blue-700 text-white px-8",asChild:!0,children:s.jsxs(Mu,{to:"/chat",children:["Launch Training Platform",s.jsx(qb,{className:"ml-2 h-5 w-5"})]})})}),s.jsxs("div",{className:"flex items-center gap-2 text-gray-600 pt-4",children:[s.jsx(Uf,{}),s.jsx("span",{children:"No credit card required"})]}),s.jsxs("div",{className:"flex items-center gap-2 text-gray-600",children:[s.jsx(Uf,{}),s.jsx("span",{children:"Start training immediately"})]})]}),s.jsx("div",{className:"relative h-full min-h-[400px] lg:min-h-[500px]",children:s.jsx(D0,{src:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMxNjE5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",alt:"Healthcare technology",className:"absolute inset-0 w-full h-full object-cover"})})]})})})})}function Uf(){return s.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}function rx(){return s.jsx("footer",{className:"bg-gray-900 text-gray-300 py-12",children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center",children:s.jsx(v0,{className:"h-6 w-6 text-white"})}),s.jsx("span",{className:"text-xl text-white",children:"TriageAI Coach"})]}),s.jsx("p",{className:"text-gray-400",children:"Empowering nurses with AI-powered training for critical triage skills."})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-white mb-4",children:"Product"}),s.jsxs("ul",{className:"space-y-2",children:[s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Features"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"How It Works"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Pricing"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"FAQ"})})]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-white mb-4",children:"Company"}),s.jsxs("ul",{className:"space-y-2",children:[s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"About Us"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Contact"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Privacy Policy"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Terms of Service"})})]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-white mb-4",children:"Resources"}),s.jsxs("ul",{className:"space-y-2",children:[s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Blog"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Case Studies"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Documentation"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Support"})})]})]})]}),s.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:s.jsx("p",{children:"© 2025 TriageAI Coach. All rights reserved. Not for collecting PII or securing sensitive medical data."})})]})})}function ox(){return s.jsxs("div",{className:"min-h-screen bg-white",children:[s.jsx(P1,{}),s.jsxs("main",{children:[s.jsx(tx,{}),s.jsx("div",{id:"statistics",children:s.jsx(nx,{})}),s.jsx("div",{id:"features",children:s.jsx(lx,{})}),s.jsx("div",{id:"how-it-works",children:s.jsx(ax,{})}),s.jsx(ix,{})]}),s.jsx(rx,{})]})}const cx=`/*! tailwindcss v4.1.3 | MIT License | https://tailwindcss.com */
@layer properties {
  @supports (((-webkit-hyphens: none)) and (not (margin-trim: inline))) or ((-moz-orient: inline) and (not (color: rgb(from red r g b)))) {
    *, :before, :after, ::backdrop {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-translate-z: 0;
      --tw-rotate-x: rotateX(0);
      --tw-rotate-y: rotateY(0);
      --tw-rotate-z: rotateZ(0);
      --tw-skew-x: skewX(0);
      --tw-skew-y: skewY(0);
      --tw-space-y-reverse: 0;
      --tw-border-style: solid;
      --tw-gradient-position: initial;
      --tw-gradient-from: #0000;
      --tw-gradient-via: #0000;
      --tw-gradient-to: #0000;
      --tw-gradient-stops: initial;
      --tw-gradient-via-stops: initial;
      --tw-gradient-from-position: 0%;
      --tw-gradient-via-position: 50%;
      --tw-gradient-to-position: 100%;
      --tw-leading: initial;
      --tw-font-weight: initial;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-color: initial;
      --tw-shadow-alpha: 100%;
      --tw-inset-shadow: 0 0 #0000;
      --tw-inset-shadow-color: initial;
      --tw-inset-shadow-alpha: 100%;
      --tw-ring-color: initial;
      --tw-ring-shadow: 0 0 #0000;
      --tw-inset-ring-color: initial;
      --tw-inset-ring-shadow: 0 0 #0000;
      --tw-ring-inset: initial;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-outline-style: solid;
      --tw-blur: initial;
      --tw-brightness: initial;
      --tw-contrast: initial;
      --tw-grayscale: initial;
      --tw-hue-rotate: initial;
      --tw-invert: initial;
      --tw-opacity: initial;
      --tw-saturate: initial;
      --tw-sepia: initial;
      --tw-drop-shadow: initial;
      --tw-drop-shadow-color: initial;
      --tw-drop-shadow-alpha: 100%;
      --tw-drop-shadow-size: initial;
      --tw-backdrop-blur: initial;
      --tw-backdrop-brightness: initial;
      --tw-backdrop-contrast: initial;
      --tw-backdrop-grayscale: initial;
      --tw-backdrop-hue-rotate: initial;
      --tw-backdrop-invert: initial;
      --tw-backdrop-opacity: initial;
      --tw-backdrop-saturate: initial;
      --tw-backdrop-sepia: initial;
    }
  }
}

@layer theme {
  :root, :host {
    --font-sans: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-mono: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --color-red-100: oklch(.936 .032 17.717);
    --color-red-200: oklch(.885 .062 18.334);
    --color-red-600: oklch(.577 .245 27.325);
    --color-orange-100: oklch(.954 .038 75.164);
    --color-orange-200: oklch(.901 .076 70.697);
    --color-orange-600: oklch(.646 .222 41.116);
    --color-green-100: oklch(.962 .044 156.743);
    --color-green-600: oklch(.627 .194 149.214);
    --color-cyan-50: oklch(.984 .019 200.873);
    --color-cyan-100: oklch(.956 .045 203.388);
    --color-cyan-400: oklch(.789 .154 211.53);
    --color-cyan-600: oklch(.609 .126 221.723);
    --color-blue-50: oklch(.97 .014 254.604);
    --color-blue-100: oklch(.932 .032 255.585);
    --color-blue-200: oklch(.882 .059 254.128);
    --color-blue-400: oklch(.707 .165 254.624);
    --color-blue-500: oklch(.623 .214 259.815);
    --color-blue-600: oklch(.546 .245 262.881);
    --color-blue-700: oklch(.488 .243 264.376);
    --color-purple-100: oklch(.946 .033 307.174);
    --color-purple-600: oklch(.558 .288 302.321);
    --color-gray-50: oklch(.985 .002 247.839);
    --color-gray-100: oklch(.967 .003 264.542);
    --color-gray-200: oklch(.928 .006 264.531);
    --color-gray-300: oklch(.872 .01 258.338);
    --color-gray-400: oklch(.707 .022 261.325);
    --color-gray-600: oklch(.446 .03 256.802);
    --color-gray-800: oklch(.278 .033 256.848);
    --color-gray-900: oklch(.21 .034 264.665);
    --color-white: #fff;
    --spacing: .25rem;
    --container-3xl: 48rem;
    --container-5xl: 64rem;
    --container-6xl: 72rem;
    --text-sm: .875rem;
    --text-sm--line-height: calc(1.25 / .875);
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --leading-relaxed: 1.625;
    --radius-2xl: 1rem;
    --radius-3xl: 1.5rem;
    --animate-pulse: pulse 2s cubic-bezier(.4, 0, .6, 1) infinite;
    --blur-sm: 8px;
    --blur-2xl: 40px;
    --default-transition-duration: .15s;
    --default-transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    --default-font-family: var(--font-sans);
    --default-font-feature-settings: var(--font-sans--font-feature-settings);
    --default-font-variation-settings: var(--font-sans--font-variation-settings);
    --default-mono-font-family: var(--font-mono);
    --default-mono-font-feature-settings: var(--font-mono--font-feature-settings);
    --default-mono-font-variation-settings: var(--font-mono--font-variation-settings);
  }
}

@layer base {
  *, :after, :before, ::backdrop {
    box-sizing: border-box;
    border: 0 solid;
    margin: 0;
    padding: 0;
  }

  ::file-selector-button {
    box-sizing: border-box;
    border: 0 solid;
    margin: 0;
    padding: 0;
  }

  html, :host {
    -webkit-text-size-adjust: 100%;
    tab-size: 4;
    line-height: 1.5;
    font-family: var(--default-font-family, ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
  }

  body {
    line-height: inherit;
  }

  hr {
    height: 0;
    color: inherit;
    border-top-width: 1px;
  }

  abbr:where([title]) {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    -webkit-text-decoration: inherit;
    -webkit-text-decoration: inherit;
    text-decoration: inherit;
  }

  b, strong {
    font-weight: bolder;
  }

  code, kbd, samp, pre {
    font-family: var(--default-mono-font-family, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);
    font-feature-settings: var(--default-mono-font-feature-settings, normal);
    font-variation-settings: var(--default-mono-font-variation-settings, normal);
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub, sup {
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
    position: relative;
  }

  sub {
    bottom: -.25em;
  }

  sup {
    top: -.5em;
  }

  table {
    text-indent: 0;
    border-color: inherit;
    border-collapse: collapse;
  }

  :-moz-focusring {
    outline: auto;
  }

  progress {
    vertical-align: baseline;
  }

  summary {
    display: list-item;
  }

  ol, ul, menu {
    list-style: none;
  }

  img, svg, video, canvas, audio, iframe, embed, object {
    vertical-align: middle;
    display: block;
  }

  img, video {
    max-width: 100%;
    height: auto;
  }

  button, input, select, optgroup, textarea {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    opacity: 1;
    background-color: #0000;
    border-radius: 0;
  }

  ::file-selector-button {
    font: inherit;
    font-feature-settings: inherit;
    font-variation-settings: inherit;
    letter-spacing: inherit;
    color: inherit;
    opacity: 1;
    background-color: #0000;
    border-radius: 0;
  }

  :where(select:is([multiple], [size])) optgroup {
    font-weight: bolder;
  }

  :where(select:is([multiple], [size])) optgroup option {
    padding-inline-start: 20px;
  }

  ::file-selector-button {
    margin-inline-end: 4px;
  }

  ::placeholder {
    opacity: 1;
    color: currentColor;
  }

  @supports (color: color-mix(in lab, red, red)) {
    ::placeholder {
      color: color-mix(in oklab, currentColor 50%, transparent);
    }
  }

  textarea {
    resize: vertical;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-date-and-time-value {
    min-height: 1lh;
    text-align: inherit;
  }

  ::-webkit-datetime-edit {
    display: inline-flex;
  }

  ::-webkit-datetime-edit-fields-wrapper {
    padding: 0;
  }

  ::-webkit-datetime-edit {
    padding-block: 0;
  }

  ::-webkit-datetime-edit-year-field {
    padding-block: 0;
  }

  ::-webkit-datetime-edit-month-field {
    padding-block: 0;
  }

  ::-webkit-datetime-edit-day-field {
    padding-block: 0;
  }

  ::-webkit-datetime-edit-hour-field {
    padding-block: 0;
  }

  ::-webkit-datetime-edit-minute-field {
    padding-block: 0;
  }

  ::-webkit-datetime-edit-second-field {
    padding-block: 0;
  }

  ::-webkit-datetime-edit-millisecond-field {
    padding-block: 0;
  }

  ::-webkit-datetime-edit-meridiem-field {
    padding-block: 0;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  button, input:where([type="button"], [type="reset"], [type="submit"]) {
    appearance: button;
  }

  ::file-selector-button {
    appearance: button;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  ::-webkit-outer-spin-button {
    height: auto;
  }

  [hidden]:where(:not([hidden="until-found"])) {
    display: none !important;
  }

  * {
    border-color: var(--border);
    outline-color: var(--ring);
  }

  @supports (color: color-mix(in lab, red, red)) {
    * {
      outline-color: color-mix(in oklab, var(--ring) 50%, transparent);
    }
  }

  * {
    border-color: var(--border);
    outline-color: var(--ring);
  }

  @supports (color: color-mix(in lab, red, red)) {
    * {
      outline-color: color-mix(in oklab, var(--ring) 50%, transparent);
    }
  }

  body {
    background-color: var(--background);
    color: var(--foreground);
  }

  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) h1 {
    font-size: var(--text-2xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) h2 {
    font-size: var(--text-xl);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) h3 {
    font-size: var(--text-lg);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) h4 {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) p {
    font-size: var(--text-base);
    font-weight: var(--font-weight-normal);
    line-height: 1.5;
  }

  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) label, :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) button {
    font-size: var(--text-base);
    font-weight: var(--font-weight-medium);
    line-height: 1.5;
  }

  :where(:not(:has([class*=" text-"]), :not(:has([class^="text-"])))) input {
    font-size: var(--text-base);
    font-weight: var(--font-weight-normal);
    line-height: 1.5;
  }
}

@layer utilities {
  .\\@container\\/card-header {
    container: card-header / inline-size;
  }

  .absolute {
    position: absolute;
  }

  .relative {
    position: relative;
  }

  .sticky {
    position: sticky;
  }

  .-inset-4 {
    inset: calc(var(--spacing) * -4);
  }

  .inset-0 {
    inset: calc(var(--spacing) * 0);
  }

  .top-0 {
    top: calc(var(--spacing) * 0);
  }

  .top-1\\/2 {
    top: 50%;
  }

  .-right-4 {
    right: calc(var(--spacing) * -4);
  }

  .z-10 {
    z-index: 10;
  }

  .z-50 {
    z-index: 50;
  }

  .col-start-2 {
    grid-column-start: 2;
  }

  .row-span-2 {
    grid-row: span 2 / span 2;
  }

  .row-start-1 {
    grid-row-start: 1;
  }

  .container {
    width: 100%;
  }

  @media (width >= 40rem) {
    .container {
      max-width: 40rem;
    }
  }

  @media (width >= 48rem) {
    .container {
      max-width: 48rem;
    }
  }

  @media (width >= 64rem) {
    .container {
      max-width: 64rem;
    }
  }

  @media (width >= 80rem) {
    .container {
      max-width: 80rem;
    }
  }

  @media (width >= 96rem) {
    .container {
      max-width: 96rem;
    }
  }

  .mx-auto {
    margin-inline: auto;
  }

  .mb-3 {
    margin-bottom: calc(var(--spacing) * 3);
  }

  .mb-4 {
    margin-bottom: calc(var(--spacing) * 4);
  }

  .mb-8 {
    margin-bottom: calc(var(--spacing) * 8);
  }

  .mb-16 {
    margin-bottom: calc(var(--spacing) * 16);
  }

  .ml-2 {
    margin-left: calc(var(--spacing) * 2);
  }

  .flex {
    display: flex;
  }

  .grid {
    display: grid;
  }

  .hidden {
    display: none;
  }

  .inline-block {
    display: inline-block;
  }

  .inline-flex {
    display: inline-flex;
  }

  .size-4 {
    width: calc(var(--spacing) * 4);
    height: calc(var(--spacing) * 4);
  }

  .size-9 {
    width: calc(var(--spacing) * 9);
    height: calc(var(--spacing) * 9);
  }

  .h-0\\.5 {
    height: calc(var(--spacing) * .5);
  }

  .h-2 {
    height: calc(var(--spacing) * 2);
  }

  .h-5 {
    height: calc(var(--spacing) * 5);
  }

  .h-6 {
    height: calc(var(--spacing) * 6);
  }

  .h-8 {
    height: calc(var(--spacing) * 8);
  }

  .h-9 {
    height: calc(var(--spacing) * 9);
  }

  .h-10 {
    height: calc(var(--spacing) * 10);
  }

  .h-12 {
    height: calc(var(--spacing) * 12);
  }

  .h-16 {
    height: calc(var(--spacing) * 16);
  }

  .h-auto {
    height: auto;
  }

  .h-full {
    height: 100%;
  }

  .min-h-\\[400px\\] {
    min-height: 400px;
  }

  .min-h-screen {
    min-height: 100vh;
  }

  .w-2 {
    width: calc(var(--spacing) * 2);
  }

  .w-5 {
    width: calc(var(--spacing) * 5);
  }

  .w-6 {
    width: calc(var(--spacing) * 6);
  }

  .w-8 {
    width: calc(var(--spacing) * 8);
  }

  .w-10 {
    width: calc(var(--spacing) * 10);
  }

  .w-12 {
    width: calc(var(--spacing) * 12);
  }

  .w-16 {
    width: calc(var(--spacing) * 16);
  }

  .w-full {
    width: 100%;
  }

  .w-px {
    width: 1px;
  }

  .max-w-3xl {
    max-width: var(--container-3xl);
  }

  .max-w-5xl {
    max-width: var(--container-5xl);
  }

  .max-w-6xl {
    max-width: var(--container-6xl);
  }

  .shrink-0 {
    flex-shrink: 0;
  }

  .-translate-y-1\\/2 {
    --tw-translate-y: calc(calc(1 / 2 * 100%) * -1);
    translate: var(--tw-translate-x) var(--tw-translate-y);
  }

  .transform {
    transform: var(--tw-rotate-x) var(--tw-rotate-y) var(--tw-rotate-z) var(--tw-skew-x) var(--tw-skew-y);
  }

  .animate-pulse {
    animation: var(--animate-pulse);
  }

  .auto-rows-min {
    grid-auto-rows: min-content;
  }

  .grid-rows-\\[auto_auto\\] {
    grid-template-rows: auto auto;
  }

  .flex-col {
    flex-direction: column;
  }

  .items-center {
    align-items: center;
  }

  .items-start {
    align-items: flex-start;
  }

  .justify-between {
    justify-content: space-between;
  }

  .justify-center {
    justify-content: center;
  }

  .gap-1\\.5 {
    gap: calc(var(--spacing) * 1.5);
  }

  .gap-2 {
    gap: calc(var(--spacing) * 2);
  }

  .gap-4 {
    gap: calc(var(--spacing) * 4);
  }

  .gap-6 {
    gap: calc(var(--spacing) * 6);
  }

  .gap-8 {
    gap: calc(var(--spacing) * 8);
  }

  .gap-12 {
    gap: calc(var(--spacing) * 12);
  }

  :where(.space-y-2 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)));
  }

  :where(.space-y-4 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 4) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 4) * calc(1 - var(--tw-space-y-reverse)));
  }

  :where(.space-y-6 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 6) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 6) * calc(1 - var(--tw-space-y-reverse)));
  }

  :where(.space-y-8 > :not(:last-child)) {
    --tw-space-y-reverse: 0;
    margin-block-start: calc(calc(var(--spacing) * 8) * var(--tw-space-y-reverse));
    margin-block-end: calc(calc(var(--spacing) * 8) * calc(1 - var(--tw-space-y-reverse)));
  }

  .self-start {
    align-self: flex-start;
  }

  .justify-self-end {
    justify-self: flex-end;
  }

  .overflow-hidden {
    overflow: hidden;
  }

  .rounded-2xl {
    border-radius: var(--radius-2xl);
  }

  .rounded-3xl {
    border-radius: var(--radius-3xl);
  }

  .rounded-full {
    border-radius: 3.40282e38px;
  }

  .rounded-lg {
    border-radius: var(--radius);
  }

  .rounded-md {
    border-radius: calc(var(--radius)  - 2px);
  }

  .rounded-xl {
    border-radius: calc(var(--radius)  + 4px);
  }

  .border {
    border-style: var(--tw-border-style);
    border-width: 1px;
  }

  .border-t {
    border-top-style: var(--tw-border-style);
    border-top-width: 1px;
  }

  .border-b {
    border-bottom-style: var(--tw-border-style);
    border-bottom-width: 1px;
  }

  .border-blue-100 {
    border-color: var(--color-blue-100);
  }

  .border-gray-200 {
    border-color: var(--color-gray-200);
  }

  .border-gray-800 {
    border-color: var(--color-gray-800);
  }

  .border-orange-100 {
    border-color: var(--color-orange-100);
  }

  .border-red-100 {
    border-color: var(--color-red-100);
  }

  .border-white\\/20 {
    border-color: #fff3;
  }

  @supports (color: color-mix(in lab, red, red)) {
    .border-white\\/20 {
      border-color: color-mix(in oklab, var(--color-white) 20%, transparent);
    }
  }

  .bg-background {
    background-color: var(--background);
  }

  .bg-blue-100 {
    background-color: var(--color-blue-100);
  }

  .bg-blue-500 {
    background-color: var(--color-blue-500);
  }

  .bg-blue-600 {
    background-color: var(--color-blue-600);
  }

  .bg-card {
    background-color: var(--card);
  }

  .bg-cyan-100 {
    background-color: var(--color-cyan-100);
  }

  .bg-destructive {
    background-color: var(--destructive);
  }

  .bg-gray-50 {
    background-color: var(--color-gray-50);
  }

  .bg-gray-100 {
    background-color: var(--color-gray-100);
  }

  .bg-gray-300 {
    background-color: var(--color-gray-300);
  }

  .bg-gray-900 {
    background-color: var(--color-gray-900);
  }

  .bg-green-100 {
    background-color: var(--color-green-100);
  }

  .bg-orange-100 {
    background-color: var(--color-orange-100);
  }

  .bg-primary {
    background-color: var(--primary);
  }

  .bg-purple-100 {
    background-color: var(--color-purple-100);
  }

  .bg-red-100 {
    background-color: var(--color-red-100);
  }

  .bg-secondary {
    background-color: var(--secondary);
  }

  .bg-white {
    background-color: var(--color-white);
  }

  .bg-white\\/10 {
    background-color: #ffffff1a;
  }

  @supports (color: color-mix(in lab, red, red)) {
    .bg-white\\/10 {
      background-color: color-mix(in oklab, var(--color-white) 10%, transparent);
    }
  }

  .bg-white\\/40 {
    background-color: #fff6;
  }

  @supports (color: color-mix(in lab, red, red)) {
    .bg-white\\/40 {
      background-color: color-mix(in oklab, var(--color-white) 40%, transparent);
    }
  }

  .bg-white\\/95 {
    background-color: #fffffff2;
  }

  @supports (color: color-mix(in lab, red, red)) {
    .bg-white\\/95 {
      background-color: color-mix(in oklab, var(--color-white) 95%, transparent);
    }
  }

  .bg-gradient-to-br {
    --tw-gradient-position: to bottom right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }

  .bg-gradient-to-r {
    --tw-gradient-position: to right in oklab;
    background-image: linear-gradient(var(--tw-gradient-stops));
  }

  .from-blue-50 {
    --tw-gradient-from: var(--color-blue-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }

  .from-blue-400 {
    --tw-gradient-from: var(--color-blue-400);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }

  .from-blue-600 {
    --tw-gradient-from: var(--color-blue-600);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }

  .via-white {
    --tw-gradient-via: var(--color-white);
    --tw-gradient-via-stops: var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-via) var(--tw-gradient-via-position), var(--tw-gradient-to) var(--tw-gradient-to-position);
    --tw-gradient-stops: var(--tw-gradient-via-stops);
  }

  .to-blue-50 {
    --tw-gradient-to: var(--color-blue-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }

  .to-cyan-50 {
    --tw-gradient-to: var(--color-cyan-50);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }

  .to-cyan-400 {
    --tw-gradient-to: var(--color-cyan-400);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }

  .to-cyan-600 {
    --tw-gradient-to: var(--color-cyan-600);
    --tw-gradient-stops: var(--tw-gradient-via-stops, var(--tw-gradient-position), var(--tw-gradient-from) var(--tw-gradient-from-position), var(--tw-gradient-to) var(--tw-gradient-to-position));
  }

  .object-cover {
    object-fit: cover;
  }

  .p-6 {
    padding: calc(var(--spacing) * 6);
  }

  .p-8 {
    padding: calc(var(--spacing) * 8);
  }

  .p-12 {
    padding: calc(var(--spacing) * 12);
  }

  .px-3 {
    padding-inline: calc(var(--spacing) * 3);
  }

  .px-4 {
    padding-inline: calc(var(--spacing) * 4);
  }

  .px-6 {
    padding-inline: calc(var(--spacing) * 6);
  }

  .px-8 {
    padding-inline: calc(var(--spacing) * 8);
  }

  .py-2 {
    padding-block: calc(var(--spacing) * 2);
  }

  .py-6 {
    padding-block: calc(var(--spacing) * 6);
  }

  .py-12 {
    padding-block: calc(var(--spacing) * 12);
  }

  .py-20 {
    padding-block: calc(var(--spacing) * 20);
  }

  .pt-4 {
    padding-top: calc(var(--spacing) * 4);
  }

  .pt-6 {
    padding-top: calc(var(--spacing) * 6);
  }

  .pt-8 {
    padding-top: calc(var(--spacing) * 8);
  }

  .pb-6 {
    padding-bottom: calc(var(--spacing) * 6);
  }

  .text-center {
    text-align: center;
  }

  .align-middle {
    vertical-align: middle;
  }

  .text-2xl {
    font-size: var(--text-2xl);
    line-height: var(--tw-leading, var(--text-2xl--line-height));
  }

  .text-3xl {
    font-size: var(--text-3xl);
    line-height: var(--tw-leading, var(--text-3xl--line-height));
  }

  .text-4xl {
    font-size: var(--text-4xl);
    line-height: var(--tw-leading, var(--text-4xl--line-height));
  }

  .text-5xl {
    font-size: var(--text-5xl);
    line-height: var(--tw-leading, var(--text-5xl--line-height));
  }

  .text-sm {
    font-size: var(--text-sm);
    line-height: var(--tw-leading, var(--text-sm--line-height));
  }

  .text-xl {
    font-size: var(--text-xl);
    line-height: var(--tw-leading, var(--text-xl--line-height));
  }

  .leading-none {
    --tw-leading: 1;
    line-height: 1;
  }

  .leading-relaxed {
    --tw-leading: var(--leading-relaxed);
    line-height: var(--leading-relaxed);
  }

  .font-medium {
    --tw-font-weight: var(--font-weight-medium);
    font-weight: var(--font-weight-medium);
  }

  .whitespace-nowrap {
    white-space: nowrap;
  }

  .text-blue-100 {
    color: var(--color-blue-100);
  }

  .text-blue-600 {
    color: var(--color-blue-600);
  }

  .text-blue-700 {
    color: var(--color-blue-700);
  }

  .text-card-foreground {
    color: var(--card-foreground);
  }

  .text-cyan-600 {
    color: var(--color-cyan-600);
  }

  .text-foreground {
    color: var(--foreground);
  }

  .text-gray-300 {
    color: var(--color-gray-300);
  }

  .text-gray-400 {
    color: var(--color-gray-400);
  }

  .text-gray-600 {
    color: var(--color-gray-600);
  }

  .text-gray-900 {
    color: var(--color-gray-900);
  }

  .text-green-600 {
    color: var(--color-green-600);
  }

  .text-muted-foreground {
    color: var(--muted-foreground);
  }

  .text-orange-600 {
    color: var(--color-orange-600);
  }

  .text-primary {
    color: var(--primary);
  }

  .text-primary-foreground {
    color: var(--primary-foreground);
  }

  .text-purple-600 {
    color: var(--color-purple-600);
  }

  .text-red-600 {
    color: var(--color-red-600);
  }

  .text-secondary-foreground {
    color: var(--secondary-foreground);
  }

  .text-white {
    color: var(--color-white);
  }

  .underline-offset-4 {
    text-underline-offset: 4px;
  }

  .opacity-20 {
    opacity: .2;
  }

  .opacity-50 {
    opacity: .5;
  }

  .shadow-2xl {
    --tw-shadow: 0 25px 50px -12px var(--tw-shadow-color, #00000040);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }

  .shadow-xl {
    --tw-shadow: 0 20px 25px -5px var(--tw-shadow-color, #0000001a), 0 8px 10px -6px var(--tw-shadow-color, #0000001a);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }

  .outline {
    outline-style: var(--tw-outline-style);
    outline-width: 1px;
  }

  .blur-2xl {
    --tw-blur: blur(var(--blur-2xl));
    filter: var(--tw-blur, ) var(--tw-brightness, ) var(--tw-contrast, ) var(--tw-grayscale, ) var(--tw-hue-rotate, ) var(--tw-invert, ) var(--tw-saturate, ) var(--tw-sepia, ) var(--tw-drop-shadow, );
  }

  .backdrop-blur-sm {
    --tw-backdrop-blur: blur(var(--blur-sm));
    -webkit-backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
    backdrop-filter: var(--tw-backdrop-blur, ) var(--tw-backdrop-brightness, ) var(--tw-backdrop-contrast, ) var(--tw-backdrop-grayscale, ) var(--tw-backdrop-hue-rotate, ) var(--tw-backdrop-invert, ) var(--tw-backdrop-opacity, ) var(--tw-backdrop-saturate, ) var(--tw-backdrop-sepia, );
  }

  .transition-all {
    transition-property: all;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }

  .transition-colors {
    transition-property: color, background-color, border-color, outline-color, text-decoration-color, fill, stroke, --tw-gradient-from, --tw-gradient-via, --tw-gradient-to;
    transition-timing-function: var(--tw-ease, var(--default-transition-timing-function));
    transition-duration: var(--tw-duration, var(--default-transition-duration));
  }

  .outline-none {
    --tw-outline-style: none;
    outline-style: none;
  }

  @media (hover: hover) {
    .hover\\:border-blue-200:hover {
      border-color: var(--color-blue-200);
    }
  }

  @media (hover: hover) {
    .hover\\:border-orange-200:hover {
      border-color: var(--color-orange-200);
    }
  }

  @media (hover: hover) {
    .hover\\:border-red-200:hover {
      border-color: var(--color-red-200);
    }
  }

  @media (hover: hover) {
    .hover\\:bg-accent:hover {
      background-color: var(--accent);
    }
  }

  @media (hover: hover) {
    .hover\\:bg-blue-700:hover {
      background-color: var(--color-blue-700);
    }
  }

  @media (hover: hover) {
    .hover\\:bg-destructive\\/90:hover {
      background-color: var(--destructive);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-destructive\\/90:hover {
        background-color: color-mix(in oklab, var(--destructive) 90%, transparent);
      }
    }
  }

  @media (hover: hover) {
    .hover\\:bg-gray-50:hover {
      background-color: var(--color-gray-50);
    }
  }

  @media (hover: hover) {
    .hover\\:bg-primary\\/90:hover {
      background-color: var(--primary);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-primary\\/90:hover {
        background-color: color-mix(in oklab, var(--primary) 90%, transparent);
      }
    }
  }

  @media (hover: hover) {
    .hover\\:bg-secondary\\/80:hover {
      background-color: var(--secondary);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .hover\\:bg-secondary\\/80:hover {
        background-color: color-mix(in oklab, var(--secondary) 80%, transparent);
      }
    }
  }

  @media (hover: hover) {
    .hover\\:text-accent-foreground:hover {
      color: var(--accent-foreground);
    }
  }

  @media (hover: hover) {
    .hover\\:text-gray-900:hover {
      color: var(--color-gray-900);
    }
  }

  @media (hover: hover) {
    .hover\\:text-white:hover {
      color: var(--color-white);
    }
  }

  @media (hover: hover) {
    .hover\\:underline:hover {
      text-decoration-line: underline;
    }
  }

  @media (hover: hover) {
    .hover\\:shadow-lg:hover {
      --tw-shadow: 0 10px 15px -3px var(--tw-shadow-color, #0000001a), 0 4px 6px -4px var(--tw-shadow-color, #0000001a);
      box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
    }
  }

  .focus-visible\\:border-ring:focus-visible {
    border-color: var(--ring);
  }

  .focus-visible\\:ring-\\[3px\\]:focus-visible {
    --tw-ring-shadow: var(--tw-ring-inset, ) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color, currentcolor);
    box-shadow: var(--tw-inset-shadow), var(--tw-inset-ring-shadow), var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow);
  }

  .focus-visible\\:ring-destructive\\/20:focus-visible {
    --tw-ring-color: var(--destructive);
  }

  @supports (color: color-mix(in lab, red, red)) {
    .focus-visible\\:ring-destructive\\/20:focus-visible {
      --tw-ring-color: color-mix(in oklab, var(--destructive) 20%, transparent);
    }
  }

  .focus-visible\\:ring-ring\\/50:focus-visible {
    --tw-ring-color: var(--ring);
  }

  @supports (color: color-mix(in lab, red, red)) {
    .focus-visible\\:ring-ring\\/50:focus-visible {
      --tw-ring-color: color-mix(in oklab, var(--ring) 50%, transparent);
    }
  }

  .disabled\\:pointer-events-none:disabled {
    pointer-events: none;
  }

  .disabled\\:opacity-50:disabled {
    opacity: .5;
  }

  .has-data-\\[slot\\=card-action\\]\\:grid-cols-\\[1fr_auto\\]:has([data-slot="card-action"]) {
    grid-template-columns: 1fr auto;
  }

  .has-\\[\\>svg\\]\\:px-2\\.5:has( > svg) {
    padding-inline: calc(var(--spacing) * 2.5);
  }

  .has-\\[\\>svg\\]\\:px-3:has( > svg) {
    padding-inline: calc(var(--spacing) * 3);
  }

  .has-\\[\\>svg\\]\\:px-4:has( > svg) {
    padding-inline: calc(var(--spacing) * 4);
  }

  .aria-invalid\\:border-destructive[aria-invalid="true"] {
    border-color: var(--destructive);
  }

  .aria-invalid\\:ring-destructive\\/20[aria-invalid="true"] {
    --tw-ring-color: var(--destructive);
  }

  @supports (color: color-mix(in lab, red, red)) {
    .aria-invalid\\:ring-destructive\\/20[aria-invalid="true"] {
      --tw-ring-color: color-mix(in oklab, var(--destructive) 20%, transparent);
    }
  }

  @media (width >= 40rem) {
    .sm\\:flex {
      display: flex;
    }
  }

  @media (width >= 40rem) {
    .sm\\:flex-row {
      flex-direction: row;
    }
  }

  @media (width >= 48rem) {
    .md\\:block {
      display: block;
    }
  }

  @media (width >= 48rem) {
    .md\\:flex {
      display: flex;
    }
  }

  @media (width >= 48rem) {
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (width >= 48rem) {
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (width >= 48rem) {
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  @media (width >= 64rem) {
    .lg\\:min-h-\\[500px\\] {
      min-height: 500px;
    }
  }

  @media (width >= 64rem) {
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (width >= 64rem) {
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (width >= 64rem) {
    .lg\\:py-28 {
      padding-block: calc(var(--spacing) * 28);
    }
  }

  @media (width >= 64rem) {
    .lg\\:text-6xl {
      font-size: var(--text-6xl);
      line-height: var(--tw-leading, var(--text-6xl--line-height));
    }
  }

  .dark\\:border-input:is(.dark *) {
    border-color: var(--input);
  }

  .dark\\:bg-destructive\\/60:is(.dark *) {
    background-color: var(--destructive);
  }

  @supports (color: color-mix(in lab, red, red)) {
    .dark\\:bg-destructive\\/60:is(.dark *) {
      background-color: color-mix(in oklab, var(--destructive) 60%, transparent);
    }
  }

  .dark\\:bg-input\\/30:is(.dark *) {
    background-color: var(--input);
  }

  @supports (color: color-mix(in lab, red, red)) {
    .dark\\:bg-input\\/30:is(.dark *) {
      background-color: color-mix(in oklab, var(--input) 30%, transparent);
    }
  }

  @media (hover: hover) {
    .dark\\:hover\\:bg-accent\\/50:is(.dark *):hover {
      background-color: var(--accent);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .dark\\:hover\\:bg-accent\\/50:is(.dark *):hover {
        background-color: color-mix(in oklab, var(--accent) 50%, transparent);
      }
    }
  }

  @media (hover: hover) {
    .dark\\:hover\\:bg-input\\/50:is(.dark *):hover {
      background-color: var(--input);
    }

    @supports (color: color-mix(in lab, red, red)) {
      .dark\\:hover\\:bg-input\\/50:is(.dark *):hover {
        background-color: color-mix(in oklab, var(--input) 50%, transparent);
      }
    }
  }

  .dark\\:focus-visible\\:ring-destructive\\/40:is(.dark *):focus-visible {
    --tw-ring-color: var(--destructive);
  }

  @supports (color: color-mix(in lab, red, red)) {
    .dark\\:focus-visible\\:ring-destructive\\/40:is(.dark *):focus-visible {
      --tw-ring-color: color-mix(in oklab, var(--destructive) 40%, transparent);
    }
  }

  .dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid="true"] {
    --tw-ring-color: var(--destructive);
  }

  @supports (color: color-mix(in lab, red, red)) {
    .dark\\:aria-invalid\\:ring-destructive\\/40:is(.dark *)[aria-invalid="true"] {
      --tw-ring-color: color-mix(in oklab, var(--destructive) 40%, transparent);
    }
  }

  .\\[\\&_svg\\]\\:pointer-events-none svg {
    pointer-events: none;
  }

  .\\[\\&_svg\\]\\:shrink-0 svg {
    flex-shrink: 0;
  }

  .\\[\\&_svg\\:not\\(\\[class\\*\\=\\'size-\\'\\]\\)\\]\\:size-4 svg:not([class*="size-"]) {
    width: calc(var(--spacing) * 4);
    height: calc(var(--spacing) * 4);
  }

  .\\[\\.border-b\\]\\:pb-6.border-b {
    padding-bottom: calc(var(--spacing) * 6);
  }

  .\\[\\.border-t\\]\\:pt-6.border-t {
    padding-top: calc(var(--spacing) * 6);
  }

  .\\[\\&\\:last-child\\]\\:pb-6:last-child {
    padding-bottom: calc(var(--spacing) * 6);
  }
}

:root {
  --font-size: 16px;
  --background: #fff;
  --foreground: oklch(.145 0 0);
  --card: #fff;
  --card-foreground: oklch(.145 0 0);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(.145 0 0);
  --primary: #030213;
  --primary-foreground: oklch(1 0 0);
  --secondary: oklch(.95 .0058 264.53);
  --secondary-foreground: #030213;
  --muted: #ececf0;
  --muted-foreground: #717182;
  --accent: #e9ebef;
  --accent-foreground: #030213;
  --destructive: #d4183d;
  --destructive-foreground: #fff;
  --border: #0000001a;
  --input: transparent;
  --input-background: #f3f3f5;
  --switch-background: #cbced4;
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --ring: oklch(.708 0 0);
  --chart-1: oklch(.646 .222 41.116);
  --chart-2: oklch(.6 .118 184.704);
  --chart-3: oklch(.398 .07 227.392);
  --chart-4: oklch(.828 .189 84.429);
  --chart-5: oklch(.769 .188 70.08);
  --radius: .625rem;
  --sidebar: oklch(.985 0 0);
  --sidebar-foreground: oklch(.145 0 0);
  --sidebar-primary: #030213;
  --sidebar-primary-foreground: oklch(.985 0 0);
  --sidebar-accent: oklch(.97 0 0);
  --sidebar-accent-foreground: oklch(.205 0 0);
  --sidebar-border: oklch(.922 0 0);
  --sidebar-ring: oklch(.708 0 0);
}

.dark {
  --background: oklch(.145 0 0);
  --foreground: oklch(.985 0 0);
  --card: oklch(.145 0 0);
  --card-foreground: oklch(.985 0 0);
  --popover: oklch(.145 0 0);
  --popover-foreground: oklch(.985 0 0);
  --primary: oklch(.985 0 0);
  --primary-foreground: oklch(.205 0 0);
  --secondary: oklch(.269 0 0);
  --secondary-foreground: oklch(.985 0 0);
  --muted: oklch(.269 0 0);
  --muted-foreground: oklch(.708 0 0);
  --accent: oklch(.269 0 0);
  --accent-foreground: oklch(.985 0 0);
  --destructive: oklch(.396 .141 25.723);
  --destructive-foreground: oklch(.637 .237 25.331);
  --border: oklch(.269 0 0);
  --input: oklch(.269 0 0);
  --ring: oklch(.439 0 0);
  --font-weight-medium: 500;
  --font-weight-normal: 400;
  --chart-1: oklch(.488 .243 264.376);
  --chart-2: oklch(.696 .17 162.48);
  --chart-3: oklch(.769 .188 70.08);
  --chart-4: oklch(.627 .265 303.9);
  --chart-5: oklch(.645 .246 16.439);
  --sidebar: oklch(.205 0 0);
  --sidebar-foreground: oklch(.985 0 0);
  --sidebar-primary: oklch(.488 .243 264.376);
  --sidebar-primary-foreground: oklch(.985 0 0);
  --sidebar-accent: oklch(.269 0 0);
  --sidebar-accent-foreground: oklch(.985 0 0);
  --sidebar-border: oklch(.269 0 0);
  --sidebar-ring: oklch(.439 0 0);
}

html {
  font-size: var(--font-size);
}

@property --tw-translate-x {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}

@property --tw-translate-y {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}

@property --tw-translate-z {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}

@property --tw-rotate-x {
  syntax: "*";
  inherits: false;
  initial-value: rotateX(0);
}

@property --tw-rotate-y {
  syntax: "*";
  inherits: false;
  initial-value: rotateY(0);
}

@property --tw-rotate-z {
  syntax: "*";
  inherits: false;
  initial-value: rotateZ(0);
}

@property --tw-skew-x {
  syntax: "*";
  inherits: false;
  initial-value: skewX(0);
}

@property --tw-skew-y {
  syntax: "*";
  inherits: false;
  initial-value: skewY(0);
}

@property --tw-space-y-reverse {
  syntax: "*";
  inherits: false;
  initial-value: 0;
}

@property --tw-border-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}

@property --tw-gradient-position {
  syntax: "*";
  inherits: false
}

@property --tw-gradient-from {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}

@property --tw-gradient-via {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}

@property --tw-gradient-to {
  syntax: "<color>";
  inherits: false;
  initial-value: #0000;
}

@property --tw-gradient-stops {
  syntax: "*";
  inherits: false
}

@property --tw-gradient-via-stops {
  syntax: "*";
  inherits: false
}

@property --tw-gradient-from-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 0%;
}

@property --tw-gradient-via-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 50%;
}

@property --tw-gradient-to-position {
  syntax: "<length-percentage>";
  inherits: false;
  initial-value: 100%;
}

@property --tw-leading {
  syntax: "*";
  inherits: false
}

@property --tw-font-weight {
  syntax: "*";
  inherits: false
}

@property --tw-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}

@property --tw-shadow-color {
  syntax: "*";
  inherits: false
}

@property --tw-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}

@property --tw-inset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}

@property --tw-inset-shadow-color {
  syntax: "*";
  inherits: false
}

@property --tw-inset-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}

@property --tw-ring-color {
  syntax: "*";
  inherits: false
}

@property --tw-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}

@property --tw-inset-ring-color {
  syntax: "*";
  inherits: false
}

@property --tw-inset-ring-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}

@property --tw-ring-inset {
  syntax: "*";
  inherits: false
}

@property --tw-ring-offset-width {
  syntax: "<length>";
  inherits: false;
  initial-value: 0;
}

@property --tw-ring-offset-color {
  syntax: "*";
  inherits: false;
  initial-value: #fff;
}

@property --tw-ring-offset-shadow {
  syntax: "*";
  inherits: false;
  initial-value: 0 0 #0000;
}

@property --tw-outline-style {
  syntax: "*";
  inherits: false;
  initial-value: solid;
}

@property --tw-blur {
  syntax: "*";
  inherits: false
}

@property --tw-brightness {
  syntax: "*";
  inherits: false
}

@property --tw-contrast {
  syntax: "*";
  inherits: false
}

@property --tw-grayscale {
  syntax: "*";
  inherits: false
}

@property --tw-hue-rotate {
  syntax: "*";
  inherits: false
}

@property --tw-invert {
  syntax: "*";
  inherits: false
}

@property --tw-opacity {
  syntax: "*";
  inherits: false
}

@property --tw-saturate {
  syntax: "*";
  inherits: false
}

@property --tw-sepia {
  syntax: "*";
  inherits: false
}

@property --tw-drop-shadow {
  syntax: "*";
  inherits: false
}

@property --tw-drop-shadow-color {
  syntax: "*";
  inherits: false
}

@property --tw-drop-shadow-alpha {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 100%;
}

@property --tw-drop-shadow-size {
  syntax: "*";
  inherits: false
}

@property --tw-backdrop-blur {
  syntax: "*";
  inherits: false
}

@property --tw-backdrop-brightness {
  syntax: "*";
  inherits: false
}

@property --tw-backdrop-contrast {
  syntax: "*";
  inherits: false
}

@property --tw-backdrop-grayscale {
  syntax: "*";
  inherits: false
}

@property --tw-backdrop-hue-rotate {
  syntax: "*";
  inherits: false
}

@property --tw-backdrop-invert {
  syntax: "*";
  inherits: false
}

@property --tw-backdrop-opacity {
  syntax: "*";
  inherits: false
}

@property --tw-backdrop-saturate {
  syntax: "*";
  inherits: false
}

@property --tw-backdrop-sepia {
  syntax: "*";
  inherits: false
}

@keyframes pulse {
  50% {
    opacity: .5;
  }
}
`;function Hf(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:cx}}),s.jsx(ox,{})]})}function ux(){return s.jsxs(Ay,{children:[s.jsx(_i,{path:"/",element:s.jsx(Hf,{})}),s.jsx(_i,{path:"/chat",element:s.jsx(F1,{})}),s.jsx(_i,{path:"*",element:s.jsx(Hf,{})})]})}Dp.createRoot(document.getElementById("root")).render(s.jsx(y.StrictMode,{children:s.jsx(Ry,{children:s.jsx(ux,{})})}));
