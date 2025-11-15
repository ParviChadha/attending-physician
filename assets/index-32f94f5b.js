function a0(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const l in a)if(l!=="default"&&!(l in e)){const i=Object.getOwnPropertyDescriptor(a,l);i&&Object.defineProperty(e,l,i.get?i:{enumerable:!0,get:()=>a[l]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))a(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(l){if(l.ep)return;l.ep=!0;const i=n(l);fetch(l.href,i)}})();function Md(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Od={exports:{}},jr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=Symbol.for("react.transitional.element"),i0=Symbol.for("react.fragment");function Rd(e,t,n){var a=null;if(n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),"key"in t){n={};for(var l in t)l!=="key"&&(n[l]=t[l])}else n=t;return t=n.ref,{$$typeof:l0,type:e,key:a,ref:t!==void 0?t:null,props:n}}jr.Fragment=i0;jr.jsx=Rd;jr.jsxs=Rd;Od.exports=jr;var u=Od.exports,Dd={exports:{}},U={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var as=Symbol.for("react.transitional.element"),r0=Symbol.for("react.portal"),o0=Symbol.for("react.fragment"),c0=Symbol.for("react.strict_mode"),s0=Symbol.for("react.profiler"),u0=Symbol.for("react.consumer"),f0=Symbol.for("react.context"),d0=Symbol.for("react.forward_ref"),h0=Symbol.for("react.suspense"),m0=Symbol.for("react.memo"),kd=Symbol.for("react.lazy"),v0=Symbol.for("react.activity"),xu=Symbol.iterator;function g0(e){return e===null||typeof e!="object"?null:(e=xu&&e[xu]||e["@@iterator"],typeof e=="function"?e:null)}var Ud={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hd=Object.assign,Bd={};function Ga(e,t,n){this.props=e,this.context=t,this.refs=Bd,this.updater=n||Ud}Ga.prototype.isReactComponent={};Ga.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ga.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Ld(){}Ld.prototype=Ga.prototype;function ls(e,t,n){this.props=e,this.context=t,this.refs=Bd,this.updater=n||Ud}var is=ls.prototype=new Ld;is.constructor=ls;Hd(is,Ga.prototype);is.isPureReactComponent=!0;var Su=Array.isArray;function tc(){}var ne={H:null,A:null,T:null,S:null},Yd=Object.prototype.hasOwnProperty;function rs(e,t,n){var a=n.ref;return{$$typeof:as,type:e,key:t,ref:a!==void 0?a:null,props:n}}function p0(e,t){return rs(e.type,t,e.props)}function os(e){return typeof e=="object"&&e!==null&&e.$$typeof===as}function y0(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var wu=/\/+/g;function lo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?y0(""+e.key):t.toString(36)}function b0(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(tc,tc):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function ia(e,t,n,a,l){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(i){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case as:case r0:r=!0;break;case kd:return r=e._init,ia(r(e._payload),t,n,a,l)}}if(r)return l=l(e),r=a===""?"."+lo(e,0):a,Su(l)?(n="",r!=null&&(n=r.replace(wu,"$&/")+"/"),ia(l,t,n,"",function(s){return s})):l!=null&&(os(l)&&(l=p0(l,n+(l.key==null||e&&e.key===l.key?"":(""+l.key).replace(wu,"$&/")+"/")+r)),t.push(l)),1;r=0;var o=a===""?".":a+":";if(Su(e))for(var c=0;c<e.length;c++)a=e[c],i=o+lo(a,c),r+=ia(a,t,n,i,l);else if(c=g0(e),typeof c=="function")for(e=c.call(e),c=0;!(a=e.next()).done;)a=a.value,i=o+lo(a,c++),r+=ia(a,t,n,i,l);else if(i==="object"){if(typeof e.then=="function")return ia(b0(e),t,n,a,l);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function li(e,t,n){if(e==null)return e;var a=[],l=0;return ia(e,a,"","",function(i){return t.call(n,i,l++)}),a}function x0(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Eu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},S0={map:li,forEach:function(e,t,n){li(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return li(e,function(){t++}),t},toArray:function(e){return li(e,function(t){return t})||[]},only:function(e){if(!os(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Activity=v0;U.Children=S0;U.Component=Ga;U.Fragment=o0;U.Profiler=s0;U.PureComponent=ls;U.StrictMode=c0;U.Suspense=h0;U.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ne;U.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ne.H.useMemoCache(e)}};U.cache=function(e){return function(){return e.apply(null,arguments)}};U.cacheSignal=function(){return null};U.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var a=Hd({},e.props),l=e.key;if(t!=null)for(i in t.key!==void 0&&(l=""+t.key),t)!Yd.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(a[i]=t[i]);var i=arguments.length-2;if(i===1)a.children=n;else if(1<i){for(var r=Array(i),o=0;o<i;o++)r[o]=arguments[o+2];a.children=r}return rs(e.type,l,a)};U.createContext=function(e){return e={$$typeof:f0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:u0,_context:e},e};U.createElement=function(e,t,n){var a,l={},i=null;if(t!=null)for(a in t.key!==void 0&&(i=""+t.key),t)Yd.call(t,a)&&a!=="key"&&a!=="__self"&&a!=="__source"&&(l[a]=t[a]);var r=arguments.length-2;if(r===1)l.children=n;else if(1<r){for(var o=Array(r),c=0;c<r;c++)o[c]=arguments[c+2];l.children=o}if(e&&e.defaultProps)for(a in r=e.defaultProps,r)l[a]===void 0&&(l[a]=r[a]);return rs(e,i,l)};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:d0,render:e}};U.isValidElement=os;U.lazy=function(e){return{$$typeof:kd,_payload:{_status:-1,_result:e},_init:x0}};U.memo=function(e,t){return{$$typeof:m0,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=ne.T,n={};ne.T=n;try{var a=e(),l=ne.S;l!==null&&l(n,a),typeof a=="object"&&a!==null&&typeof a.then=="function"&&a.then(tc,Eu)}catch(i){Eu(i)}finally{t!==null&&n.types!==null&&(t.types=n.types),ne.T=t}};U.unstable_useCacheRefresh=function(){return ne.H.useCacheRefresh()};U.use=function(e){return ne.H.use(e)};U.useActionState=function(e,t,n){return ne.H.useActionState(e,t,n)};U.useCallback=function(e,t){return ne.H.useCallback(e,t)};U.useContext=function(e){return ne.H.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e,t){return ne.H.useDeferredValue(e,t)};U.useEffect=function(e,t){return ne.H.useEffect(e,t)};U.useEffectEvent=function(e){return ne.H.useEffectEvent(e)};U.useId=function(){return ne.H.useId()};U.useImperativeHandle=function(e,t,n){return ne.H.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return ne.H.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return ne.H.useLayoutEffect(e,t)};U.useMemo=function(e,t){return ne.H.useMemo(e,t)};U.useOptimistic=function(e,t){return ne.H.useOptimistic(e,t)};U.useReducer=function(e,t,n){return ne.H.useReducer(e,t,n)};U.useRef=function(e){return ne.H.useRef(e)};U.useState=function(e){return ne.H.useState(e)};U.useSyncExternalStore=function(e,t,n){return ne.H.useSyncExternalStore(e,t,n)};U.useTransition=function(){return ne.H.useTransition()};U.version="19.2.0";Dd.exports=U;var m=Dd.exports;const w0=Md(m),_r=a0({__proto__:null,default:w0},[m]);var Gd={exports:{}},Mr={},qd={exports:{}},Xd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(z,_){var E=z.length;z.push(_);e:for(;0<E;){var K=E-1>>>1,ie=z[K];if(0<l(ie,_))z[K]=_,z[E]=ie,E=K;else break e}}function n(z){return z.length===0?null:z[0]}function a(z){if(z.length===0)return null;var _=z[0],E=z.pop();if(E!==_){z[0]=E;e:for(var K=0,ie=z.length,yt=ie>>>1;K<yt;){var ht=2*(K+1)-1,pe=z[ht],se=ht+1,Ct=z[se];if(0>l(pe,E))se<ie&&0>l(Ct,pe)?(z[K]=Ct,z[se]=E,K=se):(z[K]=pe,z[ht]=E,K=ht);else if(se<ie&&0>l(Ct,E))z[K]=Ct,z[se]=E,K=se;else break e}}return _}function l(z,_){var E=z.sortIndex-_.sortIndex;return E!==0?E:z.id-_.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var c=[],s=[],f=1,h=null,d=3,p=!1,S=!1,b=!1,w=!1,g=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;function x(z){for(var _=n(s);_!==null;){if(_.callback===null)a(s);else if(_.startTime<=z)a(s),_.sortIndex=_.expirationTime,t(c,_);else break;_=n(s)}}function C(z){if(b=!1,x(z),!S)if(n(c)!==null)S=!0,M||(M=!0,Te());else{var _=n(s);_!==null&&Y(C,_.startTime-z)}}var M=!1,T=-1,A=5,j=-1;function D(){return w?!0:!(e.unstable_now()-j<A)}function le(){if(w=!1,M){var z=e.unstable_now();j=z;var _=!0;try{e:{S=!1,b&&(b=!1,v(T),T=-1),p=!0;var E=d;try{t:{for(x(z),h=n(c);h!==null&&!(h.expirationTime>z&&D());){var K=h.callback;if(typeof K=="function"){h.callback=null,d=h.priorityLevel;var ie=K(h.expirationTime<=z);if(z=e.unstable_now(),typeof ie=="function"){h.callback=ie,x(z),_=!0;break t}h===n(c)&&a(c),x(z)}else a(c);h=n(c)}if(h!==null)_=!0;else{var yt=n(s);yt!==null&&Y(C,yt.startTime-z),_=!1}}break e}finally{h=null,d=E,p=!1}_=void 0}}finally{_?Te():M=!1}}}var Te;if(typeof y=="function")Te=function(){y(le)};else if(typeof MessageChannel<"u"){var Jt=new MessageChannel,B=Jt.port2;Jt.port1.onmessage=le,Te=function(){B.postMessage(null)}}else Te=function(){g(le,0)};function Y(z,_){T=g(function(){z(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(z){z.callback=null},e.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):A=0<z?Math.floor(1e3/z):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_next=function(z){switch(d){case 1:case 2:case 3:var _=3;break;default:_=d}var E=d;d=_;try{return z()}finally{d=E}},e.unstable_requestPaint=function(){w=!0},e.unstable_runWithPriority=function(z,_){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var E=d;d=z;try{return _()}finally{d=E}},e.unstable_scheduleCallback=function(z,_,E){var K=e.unstable_now();switch(typeof E=="object"&&E!==null?(E=E.delay,E=typeof E=="number"&&0<E?K+E:K):E=K,z){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=E+ie,z={id:f++,callback:_,priorityLevel:z,startTime:E,expirationTime:ie,sortIndex:-1},E>K?(z.sortIndex=E,t(s,z),n(c)===null&&z===n(s)&&(b?(v(T),T=-1):b=!0,Y(C,E-K))):(z.sortIndex=ie,t(c,z),S||p||(S=!0,M||(M=!0,Te()))),z},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(z){var _=d;return function(){var E=d;d=_;try{return z.apply(this,arguments)}finally{d=E}}}})(Xd);qd.exports=Xd;var E0=qd.exports,Vd={exports:{}},ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N0=m;function Qd(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Wt(){}var Re={d:{f:Wt,r:function(){throw Error(Qd(522))},D:Wt,C:Wt,L:Wt,m:Wt,X:Wt,S:Wt,M:Wt},p:0,findDOMNode:null},A0=Symbol.for("react.portal");function T0(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:A0,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}var fl=N0.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Or(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Re;ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(Qd(299));return T0(e,t,null,n)};ke.flushSync=function(e){var t=fl.T,n=Re.p;try{if(fl.T=null,Re.p=2,e)return e()}finally{fl.T=t,Re.p=n,Re.d.f()}};ke.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Re.d.C(e,t))};ke.prefetchDNS=function(e){typeof e=="string"&&Re.d.D(e)};ke.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,a=Or(n,t.crossOrigin),l=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Re.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:a,integrity:l,fetchPriority:i}):n==="script"&&Re.d.X(e,{crossOrigin:a,integrity:l,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};ke.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=Or(t.as,t.crossOrigin);Re.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Re.d.M(e)};ke.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,a=Or(n,t.crossOrigin);Re.d.L(e,n,{crossOrigin:a,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};ke.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=Or(t.as,t.crossOrigin);Re.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Re.d.m(e)};ke.requestFormReset=function(e){Re.d.r(e)};ke.unstable_batchedUpdates=function(e,t){return e(t)};ke.useFormState=function(e,t,n){return fl.H.useFormState(e,t,n)};ke.useFormStatus=function(){return fl.H.useHostTransitionStatus()};ke.version="19.2.0";function Zd(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zd)}catch(e){console.error(e)}}Zd(),Vd.exports=ke;var cs=Vd.exports;const C0=Md(cs);/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=E0,Kd=m,z0=cs;function N(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Jd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ql(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Wd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $d(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Nu(e){if(ql(e)!==e)throw Error(N(188))}function j0(e){var t=e.alternate;if(!t){if(t=ql(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,a=t;;){var l=n.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){n=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===n)return Nu(l),e;if(i===a)return Nu(l),t;i=i.sibling}throw Error(N(188))}if(n.return!==a.return)n=l,a=i;else{for(var r=!1,o=l.child;o;){if(o===n){r=!0,n=l,a=i;break}if(o===a){r=!0,a=l,n=i;break}o=o.sibling}if(!r){for(o=i.child;o;){if(o===n){r=!0,n=i,a=l;break}if(o===a){r=!0,a=i,n=l;break}o=o.sibling}if(!r)throw Error(N(189))}}if(n.alternate!==a)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Fd(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Fd(e),t!==null)return t;e=e.sibling}return null}var ae=Object.assign,_0=Symbol.for("react.element"),ii=Symbol.for("react.transitional.element"),rl=Symbol.for("react.portal"),ca=Symbol.for("react.fragment"),Pd=Symbol.for("react.strict_mode"),nc=Symbol.for("react.profiler"),Id=Symbol.for("react.consumer"),Ut=Symbol.for("react.context"),ss=Symbol.for("react.forward_ref"),ac=Symbol.for("react.suspense"),lc=Symbol.for("react.suspense_list"),us=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),ic=Symbol.for("react.activity"),M0=Symbol.for("react.memo_cache_sentinel"),Au=Symbol.iterator;function Pa(e){return e===null||typeof e!="object"?null:(e=Au&&e[Au]||e["@@iterator"],typeof e=="function"?e:null)}var O0=Symbol.for("react.client.reference");function rc(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===O0?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ca:return"Fragment";case nc:return"Profiler";case Pd:return"StrictMode";case ac:return"Suspense";case lc:return"SuspenseList";case ic:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case rl:return"Portal";case Ut:return e.displayName||"Context";case Id:return(e._context.displayName||"Context")+".Consumer";case ss:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case us:return t=e.displayName||null,t!==null?t:rc(e.type)||"Memo";case Pt:t=e._payload,e=e._init;try{return rc(e(t))}catch{}}return null}var ol=Array.isArray,k=Kd.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z=z0.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Dn={pending:!1,data:null,method:null,action:null},oc=[],sa=-1;function Nt(e){return{current:e}}function Ne(e){0>sa||(e.current=oc[sa],oc[sa]=null,sa--)}function I(e,t){sa++,oc[sa]=e.current,e.current=t}var Et=Nt(null),Tl=Nt(null),fn=Nt(null),Zi=Nt(null);function Ki(e,t){switch(I(fn,t),I(Tl,e),I(Et,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Of(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Of(t),e=bv(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ne(Et),I(Et,e)}function za(){Ne(Et),Ne(Tl),Ne(fn)}function cc(e){e.memoizedState!==null&&I(Zi,e);var t=Et.current,n=bv(t,e.type);t!==n&&(I(Tl,e),I(Et,n))}function Ji(e){Tl.current===e&&(Ne(Et),Ne(Tl)),Zi.current===e&&(Ne(Zi),Hl._currentValue=Dn)}var io,Tu;function _n(e){if(io===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);io=t&&t[1]||"",Tu=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+io+e+Tu}var ro=!1;function oo(e,t){if(!e||ro)return"";ro=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(p){var d=p}Reflect.construct(e,[],h)}else{try{h.call()}catch(p){d=p}e.call(h.prototype)}}else{try{throw Error()}catch(p){d=p}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(p){if(p&&d&&typeof p.stack=="string")return[p.stack,d.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),r=i[0],o=i[1];if(r&&o){var c=r.split(`
`),s=o.split(`
`);for(l=a=0;a<c.length&&!c[a].includes("DetermineComponentFrameRoot");)a++;for(;l<s.length&&!s[l].includes("DetermineComponentFrameRoot");)l++;if(a===c.length||l===s.length)for(a=c.length-1,l=s.length-1;1<=a&&0<=l&&c[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(c[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||c[a]!==s[l]){var f=`
`+c[a].replace(" at new "," at ");return e.displayName&&f.includes("<anonymous>")&&(f=f.replace("<anonymous>",e.displayName)),f}while(1<=a&&0<=l);break}}}finally{ro=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?_n(n):""}function R0(e,t){switch(e.tag){case 26:case 27:case 5:return _n(e.type);case 16:return _n("Lazy");case 13:return e.child!==t&&t!==null?_n("Suspense Fallback"):_n("Suspense");case 19:return _n("SuspenseList");case 0:case 15:return oo(e.type,!1);case 11:return oo(e.type.render,!1);case 1:return oo(e.type,!0);case 31:return _n("Activity");default:return""}}function Cu(e){try{var t="",n=null;do t+=R0(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var sc=Object.prototype.hasOwnProperty,fs=xe.unstable_scheduleCallback,co=xe.unstable_cancelCallback,D0=xe.unstable_shouldYield,k0=xe.unstable_requestPaint,Je=xe.unstable_now,U0=xe.unstable_getCurrentPriorityLevel,eh=xe.unstable_ImmediatePriority,th=xe.unstable_UserBlockingPriority,Wi=xe.unstable_NormalPriority,H0=xe.unstable_LowPriority,nh=xe.unstable_IdlePriority,B0=xe.log,L0=xe.unstable_setDisableYieldValue,Xl=null,We=null;function ln(e){if(typeof B0=="function"&&L0(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(Xl,e)}catch{}}var $e=Math.clz32?Math.clz32:q0,Y0=Math.log,G0=Math.LN2;function q0(e){return e>>>=0,e===0?32:31-(Y0(e)/G0|0)|0}var ri=256,oi=262144,ci=4194304;function Mn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Rr(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var l=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=a&134217727;return o!==0?(a=o&~i,a!==0?l=Mn(a):(r&=o,r!==0?l=Mn(r):n||(n=o&~e,n!==0&&(l=Mn(n))))):(o=a&~i,o!==0?l=Mn(o):r!==0?l=Mn(r):n||(n=a&~e,n!==0&&(l=Mn(n)))),l===0?0:t!==0&&t!==l&&!(t&i)&&(i=l&-l,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:l}function Vl(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function X0(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ah(){var e=ci;return ci<<=1,!(ci&62914560)&&(ci=4194304),e}function so(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ql(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function V0(e,t,n,a,l,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,c=e.expirationTimes,s=e.hiddenUpdates;for(n=r&~n;0<n;){var f=31-$e(n),h=1<<f;o[f]=0,c[f]=-1;var d=s[f];if(d!==null)for(s[f]=null,f=0;f<d.length;f++){var p=d[f];p!==null&&(p.lane&=-536870913)}n&=~h}a!==0&&lh(e,a,0),i!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function lh(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-$e(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function ih(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-$e(n),l=1<<a;l&t|e[a]&t&&(e[a]|=t),n&=~l}}function rh(e,t){var n=t&-t;return n=n&42?1:ds(n),n&(e.suspendedLanes|t)?0:n}function ds(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hs(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function oh(){var e=Z.p;return e!==0?e:(e=window.event,e===void 0?32:_v(e.type))}function zu(e,t){var n=Z.p;try{return Z.p=e,t()}finally{Z.p=n}}var An=Math.random().toString(36).slice(2),ze="__reactFiber$"+An,Ge="__reactProps$"+An,qa="__reactContainer$"+An,uc="__reactEvents$"+An,Q0="__reactListeners$"+An,Z0="__reactHandles$"+An,ju="__reactResources$"+An,Zl="__reactMarker$"+An;function ms(e){delete e[ze],delete e[Ge],delete e[uc],delete e[Q0],delete e[Z0]}function ua(e){var t=e[ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[qa]||n[ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Hf(e);e!==null;){if(n=e[ze])return n;e=Hf(e)}return t}e=n,n=e.parentNode}return null}function Xa(e){if(e=e[ze]||e[qa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function cl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(N(33))}function xa(e){var t=e[ju];return t||(t=e[ju]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ee(e){e[Zl]=!0}var ch=new Set,sh={};function Qn(e,t){ja(e,t),ja(e+"Capture",t)}function ja(e,t){for(sh[e]=t,e=0;e<t.length;e++)ch.add(t[e])}var K0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_u={},Mu={};function J0(e){return sc.call(Mu,e)?!0:sc.call(_u,e)?!1:K0.test(e)?Mu[e]=!0:(_u[e]=!0,!1)}function zi(e,t,n){if(J0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function si(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function zt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function nt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function uh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function W0(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var l=a.get,i=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(r){n=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function fc(e){if(!e._valueTracker){var t=uh(e)?"checked":"value";e._valueTracker=W0(e,t,""+e[t])}}function fh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=uh(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $0=/[\n"\\]/g;function it(e){return e.replace($0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function dc(e,t,n,a,l,i,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+nt(t)):e.value!==""+nt(t)&&(e.value=""+nt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?hc(e,r,nt(t)):n!=null?hc(e,r,nt(n)):a!=null&&e.removeAttribute("value"),l==null&&i!=null&&(e.defaultChecked=!!i),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+nt(o):e.removeAttribute("name")}function dh(e,t,n,a,l,i,r,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){fc(e);return}n=n!=null?""+nt(n):"",t=t!=null?""+nt(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=o?e.checked:!!a,e.defaultChecked=!!a,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),fc(e)}function hc(e,t,n){t==="number"&&$i(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Sa(e,t,n,a){if(e=e.options,t){t={};for(var l=0;l<n.length;l++)t["$"+n[l]]=!0;for(n=0;n<e.length;n++)l=t.hasOwnProperty("$"+e[n].value),e[n].selected!==l&&(e[n].selected=l),l&&a&&(e[n].defaultSelected=!0)}else{for(n=""+nt(n),t=null,l=0;l<e.length;l++){if(e[l].value===n){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function hh(e,t,n){if(t!=null&&(t=""+nt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+nt(n):""}function mh(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(N(92));if(ol(a)){if(1<a.length)throw Error(N(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=nt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),fc(e)}function _a(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var F0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ou(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||F0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function vh(e,t,n){if(t!=null&&typeof t!="object")throw Error(N(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var l in t)a=t[l],t.hasOwnProperty(l)&&n[l]!==a&&Ou(e,l,a)}else for(var i in t)t.hasOwnProperty(i)&&Ou(e,i,t[i])}function vs(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var P0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),I0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ji(e){return I0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ht(){}var mc=null;function gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fa=null,wa=null;function Ru(e){var t=Xa(e);if(t&&(e=t.stateNode)){var n=e[Ge]||null;e:switch(e=t.stateNode,t.type){case"input":if(dc(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+it(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var l=a[Ge]||null;if(!l)throw Error(N(90));dc(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&fh(a)}break e;case"textarea":hh(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Sa(e,!!n.multiple,t,!1)}}}var uo=!1;function gh(e,t,n){if(uo)return e(t,n);uo=!0;try{var a=e(t);return a}finally{if(uo=!1,(fa!==null||wa!==null)&&(Qr(),fa&&(t=fa,e=wa,wa=fa=null,Ru(t),e)))for(t=0;t<e.length;t++)Ru(e[t])}}function Cl(e,t){var n=e.stateNode;if(n===null)return null;var a=n[Ge]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vc=!1;if(qt)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){vc=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{vc=!1}var rn=null,ps=null,_i=null;function ph(){if(_i)return _i;var e,t=ps,n=t.length,a,l="value"in rn?rn.value:rn.textContent,i=l.length;for(e=0;e<n&&t[e]===l[e];e++);var r=n-e;for(a=1;a<=r&&t[n-a]===l[i-a];a++);return _i=l.slice(e,1<a?1-a:void 0)}function Mi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ui(){return!0}function Du(){return!1}function qe(e){function t(n,a,l,i,r){this._reactName=n,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ui:Du,this.isPropagationStopped=Du,this}return ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ui)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ui)},persist:function(){},isPersistent:ui}),t}var Zn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dr=qe(Zn),Kl=ae({},Zn,{view:0,detail:0}),ep=qe(Kl),fo,ho,el,kr=ae({},Kl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ys,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==el&&(el&&e.type==="mousemove"?(fo=e.screenX-el.screenX,ho=e.screenY-el.screenY):ho=fo=0,el=e),fo)},movementY:function(e){return"movementY"in e?e.movementY:ho}}),ku=qe(kr),tp=ae({},kr,{dataTransfer:0}),np=qe(tp),ap=ae({},Kl,{relatedTarget:0}),mo=qe(ap),lp=ae({},Zn,{animationName:0,elapsedTime:0,pseudoElement:0}),ip=qe(lp),rp=ae({},Zn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),op=qe(rp),cp=ae({},Zn,{data:0}),Uu=qe(cp),sp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},up={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=fp[e])?!!t[e]:!1}function ys(){return dp}var hp=ae({},Kl,{key:function(e){if(e.key){var t=sp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?up[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ys,charCode:function(e){return e.type==="keypress"?Mi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),mp=qe(hp),vp=ae({},kr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hu=qe(vp),gp=ae({},Kl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ys}),pp=qe(gp),yp=ae({},Zn,{propertyName:0,elapsedTime:0,pseudoElement:0}),bp=qe(yp),xp=ae({},kr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Sp=qe(xp),wp=ae({},Zn,{newState:0,oldState:0}),Ep=qe(wp),Np=[9,13,27,32],bs=qt&&"CompositionEvent"in window,dl=null;qt&&"documentMode"in document&&(dl=document.documentMode);var Ap=qt&&"TextEvent"in window&&!dl,yh=qt&&(!bs||dl&&8<dl&&11>=dl),Bu=String.fromCharCode(32),Lu=!1;function bh(e,t){switch(e){case"keyup":return Np.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var da=!1;function Tp(e,t){switch(e){case"compositionend":return xh(t);case"keypress":return t.which!==32?null:(Lu=!0,Bu);case"textInput":return e=t.data,e===Bu&&Lu?null:e;default:return null}}function Cp(e,t){if(da)return e==="compositionend"||!bs&&bh(e,t)?(e=ph(),_i=ps=rn=null,da=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return yh&&t.locale!=="ko"?null:t.data;default:return null}}var zp={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!zp[e.type]:t==="textarea"}function Sh(e,t,n,a){fa?wa?wa.push(a):wa=[a]:fa=a,t=mr(t,"onChange"),0<t.length&&(n=new Dr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var hl=null,zl=null;function jp(e){gv(e,0)}function Ur(e){var t=cl(e);if(fh(t))return e}function Gu(e,t){if(e==="change")return t}var wh=!1;if(qt){var vo;if(qt){var go="oninput"in document;if(!go){var qu=document.createElement("div");qu.setAttribute("oninput","return;"),go=typeof qu.oninput=="function"}vo=go}else vo=!1;wh=vo&&(!document.documentMode||9<document.documentMode)}function Xu(){hl&&(hl.detachEvent("onpropertychange",Eh),zl=hl=null)}function Eh(e){if(e.propertyName==="value"&&Ur(zl)){var t=[];Sh(t,zl,e,gs(e)),gh(jp,t)}}function _p(e,t,n){e==="focusin"?(Xu(),hl=t,zl=n,hl.attachEvent("onpropertychange",Eh)):e==="focusout"&&Xu()}function Mp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ur(zl)}function Op(e,t){if(e==="click")return Ur(t)}function Rp(e,t){if(e==="input"||e==="change")return Ur(t)}function Dp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pe=typeof Object.is=="function"?Object.is:Dp;function jl(e,t){if(Pe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var l=n[a];if(!sc.call(t,l)||!Pe(e[l],t[l]))return!1}return!0}function Vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qu(e,t){var n=Vu(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vu(n)}}function Nh(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nh(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ah(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=$i(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function xs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var kp=qt&&"documentMode"in document&&11>=document.documentMode,ha=null,gc=null,ml=null,pc=!1;function Zu(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;pc||ha==null||ha!==$i(a)||(a=ha,"selectionStart"in a&&xs(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ml&&jl(ml,a)||(ml=a,a=mr(gc,"onSelect"),0<a.length&&(t=new Dr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ha)))}function zn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ma={animationend:zn("Animation","AnimationEnd"),animationiteration:zn("Animation","AnimationIteration"),animationstart:zn("Animation","AnimationStart"),transitionrun:zn("Transition","TransitionRun"),transitionstart:zn("Transition","TransitionStart"),transitioncancel:zn("Transition","TransitionCancel"),transitionend:zn("Transition","TransitionEnd")},po={},Th={};qt&&(Th=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Kn(e){if(po[e])return po[e];if(!ma[e])return e;var t=ma[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Th)return po[e]=t[n];return e}var Ch=Kn("animationend"),zh=Kn("animationiteration"),jh=Kn("animationstart"),Up=Kn("transitionrun"),Hp=Kn("transitionstart"),Bp=Kn("transitioncancel"),_h=Kn("transitionend"),Mh=new Map,yc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yc.push("scrollEnd");function gt(e,t){Mh.set(e,t),Qn(t,[e])}var Fi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},tt=[],va=0,Ss=0;function Hr(){for(var e=va,t=Ss=va=0;t<e;){var n=tt[t];tt[t++]=null;var a=tt[t];tt[t++]=null;var l=tt[t];tt[t++]=null;var i=tt[t];if(tt[t++]=null,a!==null&&l!==null){var r=a.pending;r===null?l.next=l:(l.next=r.next,r.next=l),a.pending=l}i!==0&&Oh(n,l,i)}}function Br(e,t,n,a){tt[va++]=e,tt[va++]=t,tt[va++]=n,tt[va++]=a,Ss|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ws(e,t,n,a){return Br(e,t,n,a),Pi(e)}function Jn(e,t){return Br(e,null,null,t),Pi(e)}function Oh(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var l=!1,i=e.return;i!==null;)i.childLanes|=n,a=i.alternate,a!==null&&(a.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(l=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,l&&t!==null&&(l=31-$e(n),e=i.hiddenUpdates,a=e[l],a===null?e[l]=[t]:a.push(t),t.lane=n|536870912),i):null}function Pi(e){if(50<El)throw El=0,Lc=null,Error(N(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ga={};function Lp(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,a){return new Lp(e,t,n,a)}function Es(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Rh(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Oi(e,t,n,a,l,i){var r=0;if(a=e,typeof e=="function")Es(e)&&(r=1);else if(typeof e=="string")r=Vy(e,n,Et.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ic:return e=Ze(31,n,t,l),e.elementType=ic,e.lanes=i,e;case ca:return kn(n.children,l,i,t);case Pd:r=8,l|=24;break;case nc:return e=Ze(12,n,t,l|2),e.elementType=nc,e.lanes=i,e;case ac:return e=Ze(13,n,t,l),e.elementType=ac,e.lanes=i,e;case lc:return e=Ze(19,n,t,l),e.elementType=lc,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Ut:r=10;break e;case Id:r=9;break e;case ss:r=11;break e;case us:r=14;break e;case Pt:r=16,a=null;break e}r=29,n=Error(N(130,e===null?"null":typeof e,"")),a=null}return t=Ze(r,n,t,l),t.elementType=e,t.type=a,t.lanes=i,t}function kn(e,t,n,a){return e=Ze(7,e,a,t),e.lanes=n,e}function yo(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Dh(e){var t=Ze(18,null,null,0);return t.stateNode=e,t}function bo(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Ku=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var n=Ku.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Cu(t)},Ku.set(e,t),t)}return{value:e,source:t,stack:Cu(t)}}var pa=[],ya=0,Ii=null,_l=0,at=[],lt=0,Sn=null,xt=1,St="";function Dt(e,t){pa[ya++]=_l,pa[ya++]=Ii,Ii=e,_l=t}function kh(e,t,n){at[lt++]=xt,at[lt++]=St,at[lt++]=Sn,Sn=e;var a=xt;e=St;var l=32-$e(a)-1;a&=~(1<<l),n+=1;var i=32-$e(t)+l;if(30<i){var r=l-l%5;i=(a&(1<<r)-1).toString(32),a>>=r,l-=r,xt=1<<32-$e(t)+l|n<<l|a,St=i+e}else xt=1<<i|n<<l|a,St=e}function Ns(e){e.return!==null&&(Dt(e,1),kh(e,1,0))}function As(e){for(;e===Ii;)Ii=pa[--ya],pa[ya]=null,_l=pa[--ya],pa[ya]=null;for(;e===Sn;)Sn=at[--lt],at[lt]=null,St=at[--lt],at[lt]=null,xt=at[--lt],at[lt]=null}function Uh(e,t){at[lt++]=xt,at[lt++]=St,at[lt++]=Sn,xt=t.id,St=t.overflow,Sn=e}var je=null,te=null,V=!1,dn=null,ot=!1,bc=Error(N(519));function wn(e){var t=Error(N(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ml(rt(t,e)),bc}function Ju(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[ze]=e,t[Ge]=a,n){case"dialog":G("cancel",t),G("close",t);break;case"iframe":case"object":case"embed":G("load",t);break;case"video":case"audio":for(n=0;n<kl.length;n++)G(kl[n],t);break;case"source":G("error",t);break;case"img":case"image":case"link":G("error",t),G("load",t);break;case"details":G("toggle",t);break;case"input":G("invalid",t),dh(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":G("invalid",t);break;case"textarea":G("invalid",t),mh(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||yv(t.textContent,n)?(a.popover!=null&&(G("beforetoggle",t),G("toggle",t)),a.onScroll!=null&&G("scroll",t),a.onScrollEnd!=null&&G("scrollend",t),a.onClick!=null&&(t.onclick=Ht),t=!0):t=!1,t||wn(e,!0)}function Wu(e){for(je=e.return;je;)switch(je.tag){case 5:case 31:case 13:ot=!1;return;case 27:case 3:ot=!0;return;default:je=je.return}}function In(e){if(e!==je)return!1;if(!V)return Wu(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Vc(e.type,e.memoizedProps)),n=!n),n&&te&&wn(e),Wu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));te=Uf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));te=Uf(e)}else t===27?(t=te,Tn(e.type)?(e=Jc,Jc=null,te=e):te=t):te=je?ut(e.stateNode.nextSibling):null;return!0}function Ln(){te=je=null,V=!1}function xo(){var e=dn;return e!==null&&(Le===null?Le=e:Le.push.apply(Le,e),dn=null),e}function Ml(e){dn===null?dn=[e]:dn.push(e)}var xc=Nt(null),Wn=null,Bt=null;function en(e,t,n){I(xc,t._currentValue),t._currentValue=n}function Yt(e){e._currentValue=xc.current,Ne(xc)}function Sc(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function wc(e,t,n,a){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var i=l.dependencies;if(i!==null){var r=l.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=l;for(var c=0;c<t.length;c++)if(o.context===t[c]){i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),Sc(i.return,n,e),a||(r=null);break e}i=o.next}}else if(l.tag===18){if(r=l.return,r===null)throw Error(N(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),Sc(r,n,e),r=null}else r=l.child;if(r!==null)r.return=l;else for(r=l;r!==null;){if(r===e){r=null;break}if(l=r.sibling,l!==null){l.return=r.return,r=l;break}r=r.return}l=r}}function Va(e,t,n,a){e=null;for(var l=t,i=!1;l!==null;){if(!i){if(l.flags&524288)i=!0;else if(l.flags&262144)break}if(l.tag===10){var r=l.alternate;if(r===null)throw Error(N(387));if(r=r.memoizedProps,r!==null){var o=l.type;Pe(l.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(l===Zi.current){if(r=l.alternate,r===null)throw Error(N(387));r.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Hl):e=[Hl])}l=l.return}e!==null&&wc(t,e,n,a),t.flags|=262144}function er(e){for(e=e.firstContext;e!==null;){if(!Pe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Yn(e){Wn=e,Bt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function _e(e){return Hh(Wn,e)}function fi(e,t){return Wn===null&&Yn(e),Hh(e,t)}function Hh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Bt===null){if(e===null)throw Error(N(308));Bt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Bt=Bt.next=t;return n}var Yp=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Gp=xe.unstable_scheduleCallback,qp=xe.unstable_NormalPriority,me={$$typeof:Ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ts(){return{controller:new Yp,data:new Map,refCount:0}}function Jl(e){e.refCount--,e.refCount===0&&Gp(qp,function(){e.controller.abort()})}var vl=null,Ec=0,Ma=0,Ea=null;function Xp(e,t){if(vl===null){var n=vl=[];Ec=0,Ma=Fs(),Ea={status:"pending",value:void 0,then:function(a){n.push(a)}}}return Ec++,t.then($u,$u),t}function $u(){if(--Ec===0&&vl!==null){Ea!==null&&(Ea.status="fulfilled");var e=vl;vl=null,Ma=0,Ea=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Vp(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(l){n.push(l)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var l=0;l<n.length;l++)(0,n[l])(t)},function(l){for(a.status="rejected",a.reason=l,l=0;l<n.length;l++)(0,n[l])(void 0)}),a}var Fu=k.S;k.S=function(e,t){Fm=Je(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Xp(e,t),Fu!==null&&Fu(e,t)};var Un=Nt(null);function Cs(){var e=Un.current;return e!==null?e:P.pooledCache}function Ri(e,t){t===null?I(Un,Un.current):I(Un,t.pool)}function Bh(){var e=Cs();return e===null?null:{parent:me._currentValue,pool:e}}var Qa=Error(N(460)),zs=Error(N(474)),Lr=Error(N(542)),tr={then:function(){}};function Pu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lh(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ht,Ht),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ef(e),e;default:if(typeof t.status=="string")t.then(Ht,Ht);else{if(e=P,e!==null&&100<e.shellSuspendCounter)throw Error(N(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=a}},function(a){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ef(e),e}throw Hn=t,Qa}}function On(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Hn=n,Qa):n}}var Hn=null;function Iu(){if(Hn===null)throw Error(N(459));var e=Hn;return Hn=null,e}function ef(e){if(e===Qa||e===Lr)throw Error(N(483))}var Na=null,Ol=0;function di(e){var t=Ol;return Ol+=1,Na===null&&(Na=[]),Lh(Na,e,t)}function tl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function hi(e,t){throw t.$$typeof===_0?Error(N(525)):(e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Yh(e){function t(g,v){if(e){var y=g.deletions;y===null?(g.deletions=[v],g.flags|=16):y.push(v)}}function n(g,v){if(!e)return null;for(;v!==null;)t(g,v),v=v.sibling;return null}function a(g){for(var v=new Map;g!==null;)g.key!==null?v.set(g.key,g):v.set(g.index,g),g=g.sibling;return v}function l(g,v){return g=Lt(g,v),g.index=0,g.sibling=null,g}function i(g,v,y){return g.index=y,e?(y=g.alternate,y!==null?(y=y.index,y<v?(g.flags|=67108866,v):y):(g.flags|=67108866,v)):(g.flags|=1048576,v)}function r(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function o(g,v,y,x){return v===null||v.tag!==6?(v=yo(y,g.mode,x),v.return=g,v):(v=l(v,y),v.return=g,v)}function c(g,v,y,x){var C=y.type;return C===ca?f(g,v,y.props.children,x,y.key):v!==null&&(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Pt&&On(C)===v.type)?(v=l(v,y.props),tl(v,y),v.return=g,v):(v=Oi(y.type,y.key,y.props,null,g.mode,x),tl(v,y),v.return=g,v)}function s(g,v,y,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==y.containerInfo||v.stateNode.implementation!==y.implementation?(v=bo(y,g.mode,x),v.return=g,v):(v=l(v,y.children||[]),v.return=g,v)}function f(g,v,y,x,C){return v===null||v.tag!==7?(v=kn(y,g.mode,x,C),v.return=g,v):(v=l(v,y),v.return=g,v)}function h(g,v,y){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=yo(""+v,g.mode,y),v.return=g,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ii:return y=Oi(v.type,v.key,v.props,null,g.mode,y),tl(y,v),y.return=g,y;case rl:return v=bo(v,g.mode,y),v.return=g,v;case Pt:return v=On(v),h(g,v,y)}if(ol(v)||Pa(v))return v=kn(v,g.mode,y,null),v.return=g,v;if(typeof v.then=="function")return h(g,di(v),y);if(v.$$typeof===Ut)return h(g,fi(g,v),y);hi(g,v)}return null}function d(g,v,y,x){var C=v!==null?v.key:null;if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return C!==null?null:o(g,v,""+y,x);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case ii:return y.key===C?c(g,v,y,x):null;case rl:return y.key===C?s(g,v,y,x):null;case Pt:return y=On(y),d(g,v,y,x)}if(ol(y)||Pa(y))return C!==null?null:f(g,v,y,x,null);if(typeof y.then=="function")return d(g,v,di(y),x);if(y.$$typeof===Ut)return d(g,v,fi(g,y),x);hi(g,y)}return null}function p(g,v,y,x,C){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return g=g.get(y)||null,o(v,g,""+x,C);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ii:return g=g.get(x.key===null?y:x.key)||null,c(v,g,x,C);case rl:return g=g.get(x.key===null?y:x.key)||null,s(v,g,x,C);case Pt:return x=On(x),p(g,v,y,x,C)}if(ol(x)||Pa(x))return g=g.get(y)||null,f(v,g,x,C,null);if(typeof x.then=="function")return p(g,v,y,di(x),C);if(x.$$typeof===Ut)return p(g,v,y,fi(v,x),C);hi(v,x)}return null}function S(g,v,y,x){for(var C=null,M=null,T=v,A=v=0,j=null;T!==null&&A<y.length;A++){T.index>A?(j=T,T=null):j=T.sibling;var D=d(g,T,y[A],x);if(D===null){T===null&&(T=j);break}e&&T&&D.alternate===null&&t(g,T),v=i(D,v,A),M===null?C=D:M.sibling=D,M=D,T=j}if(A===y.length)return n(g,T),V&&Dt(g,A),C;if(T===null){for(;A<y.length;A++)T=h(g,y[A],x),T!==null&&(v=i(T,v,A),M===null?C=T:M.sibling=T,M=T);return V&&Dt(g,A),C}for(T=a(T);A<y.length;A++)j=p(T,g,A,y[A],x),j!==null&&(e&&j.alternate!==null&&T.delete(j.key===null?A:j.key),v=i(j,v,A),M===null?C=j:M.sibling=j,M=j);return e&&T.forEach(function(le){return t(g,le)}),V&&Dt(g,A),C}function b(g,v,y,x){if(y==null)throw Error(N(151));for(var C=null,M=null,T=v,A=v=0,j=null,D=y.next();T!==null&&!D.done;A++,D=y.next()){T.index>A?(j=T,T=null):j=T.sibling;var le=d(g,T,D.value,x);if(le===null){T===null&&(T=j);break}e&&T&&le.alternate===null&&t(g,T),v=i(le,v,A),M===null?C=le:M.sibling=le,M=le,T=j}if(D.done)return n(g,T),V&&Dt(g,A),C;if(T===null){for(;!D.done;A++,D=y.next())D=h(g,D.value,x),D!==null&&(v=i(D,v,A),M===null?C=D:M.sibling=D,M=D);return V&&Dt(g,A),C}for(T=a(T);!D.done;A++,D=y.next())D=p(T,g,A,D.value,x),D!==null&&(e&&D.alternate!==null&&T.delete(D.key===null?A:D.key),v=i(D,v,A),M===null?C=D:M.sibling=D,M=D);return e&&T.forEach(function(Te){return t(g,Te)}),V&&Dt(g,A),C}function w(g,v,y,x){if(typeof y=="object"&&y!==null&&y.type===ca&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case ii:e:{for(var C=y.key;v!==null;){if(v.key===C){if(C=y.type,C===ca){if(v.tag===7){n(g,v.sibling),x=l(v,y.props.children),x.return=g,g=x;break e}}else if(v.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Pt&&On(C)===v.type){n(g,v.sibling),x=l(v,y.props),tl(x,y),x.return=g,g=x;break e}n(g,v);break}else t(g,v);v=v.sibling}y.type===ca?(x=kn(y.props.children,g.mode,x,y.key),x.return=g,g=x):(x=Oi(y.type,y.key,y.props,null,g.mode,x),tl(x,y),x.return=g,g=x)}return r(g);case rl:e:{for(C=y.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===y.containerInfo&&v.stateNode.implementation===y.implementation){n(g,v.sibling),x=l(v,y.children||[]),x.return=g,g=x;break e}else{n(g,v);break}else t(g,v);v=v.sibling}x=bo(y,g.mode,x),x.return=g,g=x}return r(g);case Pt:return y=On(y),w(g,v,y,x)}if(ol(y))return S(g,v,y,x);if(Pa(y)){if(C=Pa(y),typeof C!="function")throw Error(N(150));return y=C.call(y),b(g,v,y,x)}if(typeof y.then=="function")return w(g,v,di(y),x);if(y.$$typeof===Ut)return w(g,v,fi(g,y),x);hi(g,y)}return typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint"?(y=""+y,v!==null&&v.tag===6?(n(g,v.sibling),x=l(v,y),x.return=g,g=x):(n(g,v),x=yo(y,g.mode,x),x.return=g,g=x),r(g)):n(g,v)}return function(g,v,y,x){try{Ol=0;var C=w(g,v,y,x);return Na=null,C}catch(T){if(T===Qa||T===Lr)throw T;var M=Ze(29,T,null,g.mode);return M.lanes=x,M.return=g,M}finally{}}}var Gn=Yh(!0),Gh=Yh(!1),It=!1;function js(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function hn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function mn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,Q&2){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,t=Pi(e),Oh(e,null,n),t}return Br(e,a,t,n),Pi(e)}function gl(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ih(e,n)}}function So(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var l=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?l=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?l=i=t:i=i.next=t}else l=i=t;n={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ac=!1;function pl(){if(Ac){var e=Ea;if(e!==null)throw e}}function yl(e,t,n,a){Ac=!1;var l=e.updateQueue;It=!1;var i=l.firstBaseUpdate,r=l.lastBaseUpdate,o=l.shared.pending;if(o!==null){l.shared.pending=null;var c=o,s=c.next;c.next=null,r===null?i=s:r.next=s,r=c;var f=e.alternate;f!==null&&(f=f.updateQueue,o=f.lastBaseUpdate,o!==r&&(o===null?f.firstBaseUpdate=s:o.next=s,f.lastBaseUpdate=c))}if(i!==null){var h=l.baseState;r=0,f=s=c=null,o=i;do{var d=o.lane&-536870913,p=d!==o.lane;if(p?(X&d)===d:(a&d)===d){d!==0&&d===Ma&&(Ac=!0),f!==null&&(f=f.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var S=e,b=o;d=t;var w=n;switch(b.tag){case 1:if(S=b.payload,typeof S=="function"){h=S.call(w,h,d);break e}h=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=b.payload,d=typeof S=="function"?S.call(w,h,d):S,d==null)break e;h=ae({},h,d);break e;case 2:It=!0}}d=o.callback,d!==null&&(e.flags|=64,p&&(e.flags|=8192),p=l.callbacks,p===null?l.callbacks=[d]:p.push(d))}else p={lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},f===null?(s=f=p,c=h):f=f.next=p,r|=d;if(o=o.next,o===null){if(o=l.shared.pending,o===null)break;p=o,o=p.next,p.next=null,l.lastBaseUpdate=p,l.shared.pending=null}}while(1);f===null&&(c=h),l.baseState=c,l.firstBaseUpdate=s,l.lastBaseUpdate=f,i===null&&(l.shared.lanes=0),Nn|=r,e.lanes=r,e.memoizedState=h}}function qh(e,t){if(typeof e!="function")throw Error(N(191,e));e.call(t)}function Xh(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)qh(n[e],t)}var Oa=Nt(null),nr=Nt(0);function tf(e,t){e=Zt,I(nr,e),I(Oa,t),Zt=e|t.baseLanes}function Tc(){I(nr,Zt),I(Oa,Oa.current)}function _s(){Zt=nr.current,Ne(Oa),Ne(nr)}var Ie=Nt(null),st=null;function tn(e){var t=e.alternate;I(ue,ue.current&1),I(Ie,e),st===null&&(t===null||Oa.current!==null||t.memoizedState!==null)&&(st=e)}function Cc(e){I(ue,ue.current),I(Ie,e),st===null&&(st=e)}function Vh(e){e.tag===22?(I(ue,ue.current),I(Ie,e),st===null&&(st=e)):nn()}function nn(){I(ue,ue.current),I(Ie,Ie.current)}function Qe(e){Ne(Ie),st===e&&(st=null),Ne(ue)}var ue=Nt(0);function ar(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Zc(n)||Kc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Xt=0,H=null,F=null,de=null,lr=!1,Aa=!1,qn=!1,ir=0,Rl=0,Ta=null,Qp=0;function oe(){throw Error(N(321))}function Ms(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pe(e[n],t[n]))return!1;return!0}function Os(e,t,n,a,l,i){return Xt=i,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,k.H=e===null||e.memoizedState===null?Sm:Xs,qn=!1,i=n(a,l),qn=!1,Aa&&(i=Zh(t,n,a,l)),Qh(e),i}function Qh(e){k.H=Dl;var t=F!==null&&F.next!==null;if(Xt=0,de=F=H=null,lr=!1,Rl=0,Ta=null,t)throw Error(N(300));e===null||ve||(e=e.dependencies,e!==null&&er(e)&&(ve=!0))}function Zh(e,t,n,a){H=e;var l=0;do{if(Aa&&(Ta=null),Rl=0,Aa=!1,25<=l)throw Error(N(301));if(l+=1,de=F=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}k.H=wm,i=t(n,a)}while(Aa);return i}function Zp(){var e=k.H,t=e.useState()[0];return t=typeof t.then=="function"?Wl(t):t,e=e.useState()[0],(F!==null?F.memoizedState:null)!==e&&(H.flags|=1024),t}function Rs(){var e=ir!==0;return ir=0,e}function Ds(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function ks(e){if(lr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}lr=!1}Xt=0,de=F=H=null,Aa=!1,Rl=ir=0,Ta=null}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return de===null?H.memoizedState=de=e:de=de.next=e,de}function fe(){if(F===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=F.next;var t=de===null?H.memoizedState:de.next;if(t!==null)de=t,F=e;else{if(e===null)throw H.alternate===null?Error(N(467)):Error(N(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},de===null?H.memoizedState=de=e:de=de.next=e}return de}function Yr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wl(e){var t=Rl;return Rl+=1,Ta===null&&(Ta=[]),e=Lh(Ta,e,t),t=H,(de===null?t.memoizedState:de.next)===null&&(t=t.alternate,k.H=t===null||t.memoizedState===null?Sm:Xs),e}function Gr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wl(e);if(e.$$typeof===Ut)return _e(e)}throw Error(N(438,String(e)))}function Us(e){var t=null,n=H.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=H.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Yr(),H.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=M0;return t.index++,n}function Vt(e,t){return typeof t=="function"?t(e):t}function Di(e){var t=fe();return Hs(t,F,e)}function Hs(e,t,n){var a=e.queue;if(a===null)throw Error(N(311));a.lastRenderedReducer=n;var l=e.baseQueue,i=a.pending;if(i!==null){if(l!==null){var r=l.next;l.next=i.next,i.next=r}t.baseQueue=l=i,a.pending=null}if(i=e.baseState,l===null)e.memoizedState=i;else{t=l.next;var o=r=null,c=null,s=t,f=!1;do{var h=s.lane&-536870913;if(h!==s.lane?(X&h)===h:(Xt&h)===h){var d=s.revertLane;if(d===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),h===Ma&&(f=!0);else if((Xt&d)===d){s=s.next,d===Ma&&(f=!0);continue}else h={lane:0,revertLane:s.revertLane,gesture:null,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},c===null?(o=c=h,r=i):c=c.next=h,H.lanes|=d,Nn|=d;h=s.action,qn&&n(i,h),i=s.hasEagerState?s.eagerState:n(i,h)}else d={lane:h,revertLane:s.revertLane,gesture:s.gesture,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null},c===null?(o=c=d,r=i):c=c.next=d,H.lanes|=h,Nn|=h;s=s.next}while(s!==null&&s!==t);if(c===null?r=i:c.next=o,!Pe(i,e.memoizedState)&&(ve=!0,f&&(n=Ea,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=c,a.lastRenderedState=i}return l===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function wo(e){var t=fe(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var a=n.dispatch,l=n.pending,i=t.memoizedState;if(l!==null){n.pending=null;var r=l=l.next;do i=e(i,r.action),r=r.next;while(r!==l);Pe(i,t.memoizedState)||(ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,a]}function Kh(e,t,n){var a=H,l=fe(),i=V;if(i){if(n===void 0)throw Error(N(407));n=n()}else n=t();var r=!Pe((F||l).memoizedState,n);if(r&&(l.memoizedState=n,ve=!0),l=l.queue,Bs($h.bind(null,a,l,e),[e]),l.getSnapshot!==t||r||de!==null&&de.memoizedState.tag&1){if(a.flags|=2048,Ra(9,{destroy:void 0},Wh.bind(null,a,l,n,t),null),P===null)throw Error(N(349));i||Xt&127||Jh(a,t,n)}return n}function Jh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=H.updateQueue,t===null?(t=Yr(),H.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wh(e,t,n,a){t.value=n,t.getSnapshot=a,Fh(t)&&Ph(e)}function $h(e,t,n){return n(function(){Fh(t)&&Ph(e)})}function Fh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pe(e,n)}catch{return!0}}function Ph(e){var t=Jn(e,2);t!==null&&Ye(t,e,2)}function zc(e){var t=Oe();if(typeof e=="function"){var n=e;if(e=n(),qn){ln(!0);try{n()}finally{ln(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:e},t}function Ih(e,t,n,a){return e.baseState=n,Hs(e,F,typeof a=="function"?a:Vt)}function Kp(e,t,n,a,l){if(Xr(e))throw Error(N(485));if(e=t.action,e!==null){var i={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};k.T!==null?n(!0):i.isTransition=!1,a(i),n=t.pending,n===null?(i.next=t.pending=i,em(t,i)):(i.next=n.next,t.pending=n.next=i)}}function em(e,t){var n=t.action,a=t.payload,l=e.state;if(t.isTransition){var i=k.T,r={};k.T=r;try{var o=n(l,a),c=k.S;c!==null&&c(r,o),nf(e,t,o)}catch(s){jc(e,t,s)}finally{i!==null&&r.types!==null&&(i.types=r.types),k.T=i}}else try{i=n(l,a),nf(e,t,i)}catch(s){jc(e,t,s)}}function nf(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){af(e,t,a)},function(a){return jc(e,t,a)}):af(e,t,n)}function af(e,t,n){t.status="fulfilled",t.value=n,tm(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,em(e,n)))}function jc(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,tm(t),t=t.next;while(t!==a)}e.action=null}function tm(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function nm(e,t){return t}function lf(e,t){if(V){var n=P.formState;if(n!==null){e:{var a=H;if(V){if(te){t:{for(var l=te,i=ot;l.nodeType!==8;){if(!i){l=null;break t}if(l=ut(l.nextSibling),l===null){l=null;break t}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){te=ut(l.nextSibling),a=l.data==="F!";break e}}wn(a)}a=!1}a&&(t=n[0])}}return n=Oe(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:nm,lastRenderedState:t},n.queue=a,n=ym.bind(null,H,a),a.dispatch=n,a=zc(!1),i=qs.bind(null,H,!1,a.queue),a=Oe(),l={state:t,dispatch:null,action:e,pending:null},a.queue=l,n=Kp.bind(null,H,l,i,n),l.dispatch=n,a.memoizedState=e,[t,n,!1]}function rf(e){var t=fe();return am(t,F,e)}function am(e,t,n){if(t=Hs(e,t,nm)[0],e=Di(Vt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=Wl(t)}catch(r){throw r===Qa?Lr:r}else a=t;t=fe();var l=t.queue,i=l.dispatch;return n!==t.memoizedState&&(H.flags|=2048,Ra(9,{destroy:void 0},Jp.bind(null,l,n),null)),[a,i,e]}function Jp(e,t){e.action=t}function of(e){var t=fe(),n=F;if(n!==null)return am(t,n,e);fe(),t=t.memoizedState,n=fe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Ra(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=H.updateQueue,t===null&&(t=Yr(),H.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function lm(){return fe().memoizedState}function ki(e,t,n,a){var l=Oe();H.flags|=e,l.memoizedState=Ra(1|t,{destroy:void 0},n,a===void 0?null:a)}function qr(e,t,n,a){var l=fe();a=a===void 0?null:a;var i=l.memoizedState.inst;F!==null&&a!==null&&Ms(a,F.memoizedState.deps)?l.memoizedState=Ra(t,i,n,a):(H.flags|=e,l.memoizedState=Ra(1|t,i,n,a))}function cf(e,t){ki(8390656,8,e,t)}function Bs(e,t){qr(2048,8,e,t)}function Wp(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=Yr(),H.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function im(e){var t=fe().memoizedState;return Wp({ref:t,nextImpl:e}),function(){if(Q&2)throw Error(N(440));return t.impl.apply(void 0,arguments)}}function rm(e,t){return qr(4,2,e,t)}function om(e,t){return qr(4,4,e,t)}function cm(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function sm(e,t,n){n=n!=null?n.concat([e]):null,qr(4,4,cm.bind(null,t,e),n)}function Ls(){}function um(e,t){var n=fe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&Ms(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function fm(e,t){var n=fe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&Ms(t,a[1]))return a[0];if(a=e(),qn){ln(!0);try{e()}finally{ln(!1)}}return n.memoizedState=[a,t],a}function Ys(e,t,n){return n===void 0||Xt&1073741824&&!(X&261930)?e.memoizedState=t:(e.memoizedState=n,e=Im(),H.lanes|=e,Nn|=e,n)}function dm(e,t,n,a){return Pe(n,t)?n:Oa.current!==null?(e=Ys(e,n,a),Pe(e,t)||(ve=!0),e):!(Xt&42)||Xt&1073741824&&!(X&261930)?(ve=!0,e.memoizedState=n):(e=Im(),H.lanes|=e,Nn|=e,t)}function hm(e,t,n,a,l){var i=Z.p;Z.p=i!==0&&8>i?i:8;var r=k.T,o={};k.T=o,qs(e,!1,t,n);try{var c=l(),s=k.S;if(s!==null&&s(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=Vp(c,a);bl(e,t,f,Fe(e))}else bl(e,t,a,Fe(e))}catch(h){bl(e,t,{then:function(){},status:"rejected",reason:h},Fe())}finally{Z.p=i,r!==null&&o.types!==null&&(r.types=o.types),k.T=r}}function $p(){}function _c(e,t,n,a){if(e.tag!==5)throw Error(N(476));var l=mm(e).queue;hm(e,l,t,Dn,n===null?$p:function(){return vm(e),n(a)})}function mm(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:Dn,baseState:Dn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:Dn},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function vm(e){var t=mm(e);t.next===null&&(t=e.alternate.memoizedState),bl(e,t.next.queue,{},Fe())}function Gs(){return _e(Hl)}function gm(){return fe().memoizedState}function pm(){return fe().memoizedState}function Fp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Fe();e=hn(n);var a=mn(t,e,n);a!==null&&(Ye(a,t,n),gl(a,t,n)),t={cache:Ts()},e.payload=t;return}t=t.return}}function Pp(e,t,n){var a=Fe();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Xr(e)?bm(t,n):(n=ws(e,t,n,a),n!==null&&(Ye(n,e,a),xm(n,t,a)))}function ym(e,t,n){var a=Fe();bl(e,t,n,a)}function bl(e,t,n,a){var l={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Xr(e))bm(t,l);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,o=i(r,n);if(l.hasEagerState=!0,l.eagerState=o,Pe(o,r))return Br(e,t,l,0),P===null&&Hr(),!1}catch{}finally{}if(n=ws(e,t,l,a),n!==null)return Ye(n,e,a),xm(n,t,a),!0}return!1}function qs(e,t,n,a){if(a={lane:2,revertLane:Fs(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Xr(e)){if(t)throw Error(N(479))}else t=ws(e,n,a,2),t!==null&&Ye(t,e,2)}function Xr(e){var t=e.alternate;return e===H||t!==null&&t===H}function bm(e,t){Aa=lr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function xm(e,t,n){if(n&4194048){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,ih(e,n)}}var Dl={readContext:_e,use:Gr,useCallback:oe,useContext:oe,useEffect:oe,useImperativeHandle:oe,useLayoutEffect:oe,useInsertionEffect:oe,useMemo:oe,useReducer:oe,useRef:oe,useState:oe,useDebugValue:oe,useDeferredValue:oe,useTransition:oe,useSyncExternalStore:oe,useId:oe,useHostTransitionStatus:oe,useFormState:oe,useActionState:oe,useOptimistic:oe,useMemoCache:oe,useCacheRefresh:oe};Dl.useEffectEvent=oe;var Sm={readContext:_e,use:Gr,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:_e,useEffect:cf,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,ki(4194308,4,cm.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ki(4194308,4,e,t)},useInsertionEffect:function(e,t){ki(4,2,e,t)},useMemo:function(e,t){var n=Oe();t=t===void 0?null:t;var a=e();if(qn){ln(!0);try{e()}finally{ln(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Oe();if(n!==void 0){var l=n(t);if(qn){ln(!0);try{n(t)}finally{ln(!1)}}}else l=t;return a.memoizedState=a.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},a.queue=e,e=e.dispatch=Pp.bind(null,H,e),[a.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:function(e){e=zc(e);var t=e.queue,n=ym.bind(null,H,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ls,useDeferredValue:function(e,t){var n=Oe();return Ys(n,e,t)},useTransition:function(){var e=zc(!1);return e=hm.bind(null,H,e.queue,!0,!1),Oe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=H,l=Oe();if(V){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),P===null)throw Error(N(349));X&127||Jh(a,t,n)}l.memoizedState=n;var i={value:n,getSnapshot:t};return l.queue=i,cf($h.bind(null,a,i,e),[e]),a.flags|=2048,Ra(9,{destroy:void 0},Wh.bind(null,a,i,n,t),null),n},useId:function(){var e=Oe(),t=P.identifierPrefix;if(V){var n=St,a=xt;n=(a&~(1<<32-$e(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=ir++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Qp++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Gs,useFormState:lf,useActionState:lf,useOptimistic:function(e){var t=Oe();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=qs.bind(null,H,!0,n),n.dispatch=t,[e,t]},useMemoCache:Us,useCacheRefresh:function(){return Oe().memoizedState=Fp.bind(null,H)},useEffectEvent:function(e){var t=Oe(),n={impl:e};return t.memoizedState=n,function(){if(Q&2)throw Error(N(440));return n.impl.apply(void 0,arguments)}}},Xs={readContext:_e,use:Gr,useCallback:um,useContext:_e,useEffect:Bs,useImperativeHandle:sm,useInsertionEffect:rm,useLayoutEffect:om,useMemo:fm,useReducer:Di,useRef:lm,useState:function(){return Di(Vt)},useDebugValue:Ls,useDeferredValue:function(e,t){var n=fe();return dm(n,F.memoizedState,e,t)},useTransition:function(){var e=Di(Vt)[0],t=fe().memoizedState;return[typeof e=="boolean"?e:Wl(e),t]},useSyncExternalStore:Kh,useId:gm,useHostTransitionStatus:Gs,useFormState:rf,useActionState:rf,useOptimistic:function(e,t){var n=fe();return Ih(n,F,e,t)},useMemoCache:Us,useCacheRefresh:pm};Xs.useEffectEvent=im;var wm={readContext:_e,use:Gr,useCallback:um,useContext:_e,useEffect:Bs,useImperativeHandle:sm,useInsertionEffect:rm,useLayoutEffect:om,useMemo:fm,useReducer:wo,useRef:lm,useState:function(){return wo(Vt)},useDebugValue:Ls,useDeferredValue:function(e,t){var n=fe();return F===null?Ys(n,e,t):dm(n,F.memoizedState,e,t)},useTransition:function(){var e=wo(Vt)[0],t=fe().memoizedState;return[typeof e=="boolean"?e:Wl(e),t]},useSyncExternalStore:Kh,useId:gm,useHostTransitionStatus:Gs,useFormState:of,useActionState:of,useOptimistic:function(e,t){var n=fe();return F!==null?Ih(n,F,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Us,useCacheRefresh:pm};wm.useEffectEvent=im;function Eo(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Mc={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=Fe(),l=hn(a);l.payload=t,n!=null&&(l.callback=n),t=mn(e,l,a),t!==null&&(Ye(t,e,a),gl(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=Fe(),l=hn(a);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=mn(e,l,a),t!==null&&(Ye(t,e,a),gl(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Fe(),a=hn(n);a.tag=2,t!=null&&(a.callback=t),t=mn(e,a,n),t!==null&&(Ye(t,e,n),gl(t,e,n))}};function sf(e,t,n,a,l,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,i,r):t.prototype&&t.prototype.isPureReactComponent?!jl(n,a)||!jl(l,i):!0}function uf(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Mc.enqueueReplaceState(t,t.state,null)}function Xn(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=ae({},n));for(var l in e)n[l]===void 0&&(n[l]=e[l])}return n}function Em(e){Fi(e)}function Nm(e){console.error(e)}function Am(e){Fi(e)}function rr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function ff(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Oc(e,t,n){return n=hn(n),n.tag=3,n.payload={element:null},n.callback=function(){rr(e,t)},n}function Tm(e){return e=hn(e),e.tag=3,e}function Cm(e,t,n,a){var l=n.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;e.payload=function(){return l(i)},e.callback=function(){ff(t,n,a)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){ff(t,n,a),typeof l!="function"&&(vn===null?vn=new Set([this]):vn.add(this));var o=a.stack;this.componentDidCatch(a.value,{componentStack:o!==null?o:""})})}function Ip(e,t,n,a,l){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Va(t,n,l,!0),n=Ie.current,n!==null){switch(n.tag){case 31:case 13:return st===null?fr():n.alternate===null&&ce===0&&(ce=3),n.flags&=-257,n.flags|=65536,n.lanes=l,a===tr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),Do(e,a,l)),!1;case 22:return n.flags|=65536,a===tr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),Do(e,a,l)),!1}throw Error(N(435,n.tag))}return Do(e,a,l),fr(),!1}if(V)return t=Ie.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=l,a!==bc&&(e=Error(N(422),{cause:a}),Ml(rt(e,n)))):(a!==bc&&(t=Error(N(423),{cause:a}),Ml(rt(t,n))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,a=rt(a,n),l=Oc(e.stateNode,a,l),So(e,l),ce!==4&&(ce=2)),!1;var i=Error(N(520),{cause:a});if(i=rt(i,n),wl===null?wl=[i]:wl.push(i),ce!==4&&(ce=2),t===null)return!0;a=rt(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=l&-l,n.lanes|=e,e=Oc(n.stateNode,a,e),So(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(vn===null||!vn.has(i))))return n.flags|=65536,l&=-l,n.lanes|=l,l=Tm(l),Cm(l,e,n,a),So(n,l),!1}n=n.return}while(n!==null);return!1}var Vs=Error(N(461)),ve=!1;function Ce(e,t,n,a){t.child=e===null?Gh(t,null,n,a):Gn(t,e.child,n,a)}function df(e,t,n,a,l){n=n.render;var i=t.ref;if("ref"in a){var r={};for(var o in a)o!=="ref"&&(r[o]=a[o])}else r=a;return Yn(t),a=Os(e,t,n,r,i,l),o=Rs(),e!==null&&!ve?(Ds(e,t,l),Qt(e,t,l)):(V&&o&&Ns(t),t.flags|=1,Ce(e,t,a,l),t.child)}function hf(e,t,n,a,l){if(e===null){var i=n.type;return typeof i=="function"&&!Es(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,zm(e,t,i,a,l)):(e=Oi(n.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!Qs(e,l)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:jl,n(r,a)&&e.ref===t.ref)return Qt(e,t,l)}return t.flags|=1,e=Lt(i,a),e.ref=t.ref,e.return=t,t.child=e}function zm(e,t,n,a,l){if(e!==null){var i=e.memoizedProps;if(jl(i,a)&&e.ref===t.ref)if(ve=!1,t.pendingProps=a=i,Qs(e,l))e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,Qt(e,t,l)}return Rc(e,t,n,a,l)}function jm(e,t,n,a){var l=a.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|n:n,e!==null){for(a=t.child=e.child,l=0;a!==null;)l=l|a.lanes|a.childLanes,a=a.sibling;a=l&~i}else a=0,t.child=null;return mf(e,t,i,n,a)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ri(t,i!==null?i.cachePool:null),i!==null?tf(t,i):Tc(),Vh(t);else return a=t.lanes=536870912,mf(e,t,i!==null?i.baseLanes|n:n,n,a)}else i!==null?(Ri(t,i.cachePool),tf(t,i),nn(),t.memoizedState=null):(e!==null&&Ri(t,null),Tc(),nn());return Ce(e,t,l,n),t.child}function sl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function mf(e,t,n,a,l){var i=Cs();return i=i===null?null:{parent:me._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&Ri(t,null),Tc(),Vh(t),e!==null&&Va(e,t,a,!0),t.childLanes=l,null}function Ui(e,t){return t=or({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function vf(e,t,n){return Gn(t,e.child,null,n),e=Ui(t,t.pendingProps),e.flags|=2,Qe(t),t.memoizedState=null,e}function ey(e,t,n){var a=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(V){if(a.mode==="hidden")return e=Ui(t,a),t.lanes=536870912,sl(null,e);if(Cc(t),(e=te)?(e=Sv(e,ot),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Sn!==null?{id:xt,overflow:St}:null,retryLane:536870912,hydrationErrors:null},n=Dh(e),n.return=t,t.child=n,je=t,te=null)):e=null,e===null)throw wn(t);return t.lanes=536870912,null}return Ui(t,a)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(Cc(t),l)if(t.flags&256)t.flags&=-257,t=vf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(N(558));else if(ve||Va(e,t,n,!1),l=(n&e.childLanes)!==0,ve||l){if(a=P,a!==null&&(r=rh(a,n),r!==0&&r!==i.retryLane))throw i.retryLane=r,Jn(e,r),Ye(a,e,r),Vs;fr(),t=vf(e,t,n)}else e=i.treeContext,te=ut(r.nextSibling),je=t,V=!0,dn=null,ot=!1,e!==null&&Uh(t,e),t=Ui(t,a),t.flags|=4096;return t}return e=Lt(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Hi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(N(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function Rc(e,t,n,a,l){return Yn(t),n=Os(e,t,n,a,void 0,l),a=Rs(),e!==null&&!ve?(Ds(e,t,l),Qt(e,t,l)):(V&&a&&Ns(t),t.flags|=1,Ce(e,t,n,l),t.child)}function gf(e,t,n,a,l,i){return Yn(t),t.updateQueue=null,n=Zh(t,a,n,l),Qh(e),a=Rs(),e!==null&&!ve?(Ds(e,t,i),Qt(e,t,i)):(V&&a&&Ns(t),t.flags|=1,Ce(e,t,n,i),t.child)}function pf(e,t,n,a,l){if(Yn(t),t.stateNode===null){var i=ga,r=n.contextType;typeof r=="object"&&r!==null&&(i=_e(r)),i=new n(a,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Mc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=a,i.state=t.memoizedState,i.refs={},js(t),r=n.contextType,i.context=typeof r=="object"&&r!==null?_e(r):ga,i.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(Eo(t,n,r,a),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&Mc.enqueueReplaceState(i,i.state,null),yl(t,a,i,l),pl(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,c=Xn(n,o);i.props=c;var s=i.context,f=n.contextType;r=ga,typeof f=="object"&&f!==null&&(r=_e(f));var h=n.getDerivedStateFromProps;f=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,f||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||s!==r)&&uf(t,i,a,r),It=!1;var d=t.memoizedState;i.state=d,yl(t,a,i,l),pl(),s=t.memoizedState,o||d!==s||It?(typeof h=="function"&&(Eo(t,n,h,a),s=t.memoizedState),(c=It||sf(t,n,c,a,d,s,r))?(f||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=s),i.props=a,i.state=s,i.context=r,a=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{i=t.stateNode,Nc(e,t),r=t.memoizedProps,f=Xn(n,r),i.props=f,h=t.pendingProps,d=i.context,s=n.contextType,c=ga,typeof s=="object"&&s!==null&&(c=_e(s)),o=n.getDerivedStateFromProps,(s=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==h||d!==c)&&uf(t,i,a,c),It=!1,d=t.memoizedState,i.state=d,yl(t,a,i,l),pl();var p=t.memoizedState;r!==h||d!==p||It||e!==null&&e.dependencies!==null&&er(e.dependencies)?(typeof o=="function"&&(Eo(t,n,o,a),p=t.memoizedState),(f=It||sf(t,n,f,a,d,p,c)||e!==null&&e.dependencies!==null&&er(e.dependencies))?(s||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,p,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,p,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=p),i.props=a,i.state=p,i.context=c,a=f):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),a=!1)}return i=a,Hi(e,t),a=(t.flags&128)!==0,i||a?(i=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&a?(t.child=Gn(t,e.child,null,l),t.child=Gn(t,null,n,l)):Ce(e,t,n,l),t.memoizedState=i.state,e=t.child):e=Qt(e,t,l),e}function yf(e,t,n,a){return Ln(),t.flags|=256,Ce(e,t,n,a),t.child}var No={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ao(e){return{baseLanes:e,cachePool:Bh()}}function To(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ke),e}function _m(e,t,n){var a=t.pendingProps,l=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(ue.current&2)!==0),r&&(l=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(V){if(l?tn(t):nn(),(e=te)?(e=Sv(e,ot),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Sn!==null?{id:xt,overflow:St}:null,retryLane:536870912,hydrationErrors:null},n=Dh(e),n.return=t,t.child=n,je=t,te=null)):e=null,e===null)throw wn(t);return Kc(e)?t.lanes=32:t.lanes=536870912,null}var o=a.children;return a=a.fallback,l?(nn(),l=t.mode,o=or({mode:"hidden",children:o},l),a=kn(a,l,n,null),o.return=t,a.return=t,o.sibling=a,t.child=o,a=t.child,a.memoizedState=Ao(n),a.childLanes=To(e,r,n),t.memoizedState=No,sl(null,a)):(tn(t),Dc(t,o))}var c=e.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(i)t.flags&256?(tn(t),t.flags&=-257,t=Co(e,t,n)):t.memoizedState!==null?(nn(),t.child=e.child,t.flags|=128,t=null):(nn(),o=a.fallback,l=t.mode,a=or({mode:"visible",children:a.children},l),o=kn(o,l,n,null),o.flags|=2,a.return=t,o.return=t,a.sibling=o,t.child=a,Gn(t,e.child,null,n),a=t.child,a.memoizedState=Ao(n),a.childLanes=To(e,r,n),t.memoizedState=No,t=sl(null,a));else if(tn(t),Kc(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;r=s,a=Error(N(419)),a.stack="",a.digest=r,Ml({value:a,source:null,stack:null}),t=Co(e,t,n)}else if(ve||Va(e,t,n,!1),r=(n&e.childLanes)!==0,ve||r){if(r=P,r!==null&&(a=rh(r,n),a!==0&&a!==c.retryLane))throw c.retryLane=a,Jn(e,a),Ye(r,e,a),Vs;Zc(o)||fr(),t=Co(e,t,n)}else Zc(o)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,te=ut(o.nextSibling),je=t,V=!0,dn=null,ot=!1,e!==null&&Uh(t,e),t=Dc(t,a.children),t.flags|=4096);return t}return l?(nn(),o=a.fallback,l=t.mode,c=e.child,s=c.sibling,a=Lt(c,{mode:"hidden",children:a.children}),a.subtreeFlags=c.subtreeFlags&65011712,s!==null?o=Lt(s,o):(o=kn(o,l,n,null),o.flags|=2),o.return=t,a.return=t,a.sibling=o,t.child=a,sl(null,a),a=t.child,o=e.child.memoizedState,o===null?o=Ao(n):(l=o.cachePool,l!==null?(c=me._currentValue,l=l.parent!==c?{parent:c,pool:c}:l):l=Bh(),o={baseLanes:o.baseLanes|n,cachePool:l}),a.memoizedState=o,a.childLanes=To(e,r,n),t.memoizedState=No,sl(e.child,a)):(tn(t),n=e.child,e=n.sibling,n=Lt(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Dc(e,t){return t=or({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function or(e,t){return e=Ze(22,e,null,t),e.lanes=0,e}function Co(e,t,n){return Gn(t,e.child,null,n),e=Dc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function bf(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Sc(e.return,t,n)}function zo(e,t,n,a,l,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:l,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=a,r.tail=n,r.tailMode=l,r.treeForkCount=i)}function Mm(e,t,n){var a=t.pendingProps,l=a.revealOrder,i=a.tail;a=a.children;var r=ue.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,I(ue,r),Ce(e,t,a,n),a=V?_l:0,!o&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bf(e,n,t);else if(e.tag===19)bf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(n=t.child,l=null;n!==null;)e=n.alternate,e!==null&&ar(e)===null&&(l=n),n=n.sibling;n=l,n===null?(l=t.child,t.child=null):(l=n.sibling,n.sibling=null),zo(t,!1,l,n,i,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ar(e)===null){t.child=l;break}e=l.sibling,l.sibling=n,n=l,l=e}zo(t,!0,n,null,i,a);break;case"together":zo(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Qt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Nn|=t.lanes,!(n&t.childLanes))if(e!==null){if(Va(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=Lt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Lt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Qs(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&er(e)))}function ty(e,t,n){switch(t.tag){case 3:Ki(t,t.stateNode.containerInfo),en(t,me,e.memoizedState.cache),Ln();break;case 27:case 5:cc(t);break;case 4:Ki(t,t.stateNode.containerInfo);break;case 10:en(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Cc(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(tn(t),t.flags|=128,null):n&t.child.childLanes?_m(e,t,n):(tn(t),e=Qt(e,t,n),e!==null?e.sibling:null);tn(t);break;case 19:var l=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Va(e,t,n,!1),a=(n&t.childLanes)!==0),l){if(a)return Mm(e,t,n);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),I(ue,ue.current),a)break;return null;case 22:return t.lanes=0,jm(e,t,n,t.pendingProps);case 24:en(t,me,e.memoizedState.cache)}return Qt(e,t,n)}function Om(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ve=!0;else{if(!Qs(e,n)&&!(t.flags&128))return ve=!1,ty(e,t,n);ve=!!(e.flags&131072)}else ve=!1,V&&t.flags&1048576&&kh(t,_l,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=On(t.elementType),t.type=e,typeof e=="function")Es(e)?(a=Xn(e,a),t.tag=1,t=pf(null,t,e,a,n)):(t.tag=0,t=Rc(null,t,e,a,n));else{if(e!=null){var l=e.$$typeof;if(l===ss){t.tag=11,t=df(null,t,e,a,n);break e}else if(l===us){t.tag=14,t=hf(null,t,e,a,n);break e}}throw t=rc(e)||e,Error(N(306,t,""))}}return t;case 0:return Rc(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,l=Xn(a,t.pendingProps),pf(e,t,a,l,n);case 3:e:{if(Ki(t,t.stateNode.containerInfo),e===null)throw Error(N(387));a=t.pendingProps;var i=t.memoizedState;l=i.element,Nc(e,t),yl(t,a,null,n);var r=t.memoizedState;if(a=r.cache,en(t,me,a),a!==i.cache&&wc(t,[me],n,!0),pl(),a=r.element,i.isDehydrated)if(i={element:a,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=yf(e,t,a,n);break e}else if(a!==l){l=rt(Error(N(424)),t),Ml(l),t=yf(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(te=ut(e.firstChild),je=t,V=!0,dn=null,ot=!0,n=Gh(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Ln(),a===l){t=Qt(e,t,n);break e}Ce(e,t,a,n)}t=t.child}return t;case 26:return Hi(e,t),e===null?(n=Lf(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,a=vr(fn.current).createElement(n),a[ze]=t,a[Ge]=e,Me(a,n,e),Ee(a),t.stateNode=a):t.memoizedState=Lf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return cc(t),e===null&&V&&(a=t.stateNode=wv(t.type,t.pendingProps,fn.current),je=t,ot=!0,l=te,Tn(t.type)?(Jc=l,te=ut(a.firstChild)):te=l),Ce(e,t,t.pendingProps.children,n),Hi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((l=a=te)&&(a=My(a,t.type,t.pendingProps,ot),a!==null?(t.stateNode=a,je=t,te=ut(a.firstChild),ot=!1,l=!0):l=!1),l||wn(t)),cc(t),l=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,a=i.children,Vc(l,i)?a=null:r!==null&&Vc(l,r)&&(t.flags|=32),t.memoizedState!==null&&(l=Os(e,t,Zp,null,null,n),Hl._currentValue=l),Hi(e,t),Ce(e,t,a,n),t.child;case 6:return e===null&&V&&((e=n=te)&&(n=Oy(n,t.pendingProps,ot),n!==null?(t.stateNode=n,je=t,te=null,e=!0):e=!1),e||wn(t)),null;case 13:return _m(e,t,n);case 4:return Ki(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Gn(t,null,a,n):Ce(e,t,a,n),t.child;case 11:return df(e,t,t.type,t.pendingProps,n);case 7:return Ce(e,t,t.pendingProps,n),t.child;case 8:return Ce(e,t,t.pendingProps.children,n),t.child;case 12:return Ce(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,en(t,t.type,a.value),Ce(e,t,a.children,n),t.child;case 9:return l=t.type._context,a=t.pendingProps.children,Yn(t),l=_e(l),a=a(l),t.flags|=1,Ce(e,t,a,n),t.child;case 14:return hf(e,t,t.type,t.pendingProps,n);case 15:return zm(e,t,t.type,t.pendingProps,n);case 19:return Mm(e,t,n);case 31:return ey(e,t,n);case 22:return jm(e,t,n,t.pendingProps);case 24:return Yn(t),a=_e(me),e===null?(l=Cs(),l===null&&(l=P,i=Ts(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=n),l=i),t.memoizedState={parent:a,cache:l},js(t),en(t,me,l)):(e.lanes&n&&(Nc(e,t),yl(t,null,null,n),pl()),l=e.memoizedState,i=t.memoizedState,l.parent!==a?(l={parent:a,cache:a},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),en(t,me,a)):(a=i.cache,en(t,me,a),a!==l.cache&&wc(t,[me],n,!0))),Ce(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(N(156,t.tag))}function jt(e){e.flags|=4}function jo(e,t,n,a,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(nv())e.flags|=8192;else throw Hn=tr,zs}else e.flags&=-16777217}function xf(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Av(t))if(nv())e.flags|=8192;else throw Hn=tr,zs}function mi(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ah():536870912,e.lanes|=t,Da|=t)}function nl(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags&65011712,a|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)n|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function ny(e,t,n){var a=t.pendingProps;switch(As(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ee(t),null;case 1:return ee(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Yt(me),za(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(In(t)?jt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xo())),ee(t),null;case 26:var l=t.type,i=t.memoizedState;return e===null?(jt(t),i!==null?(ee(t),xf(t,i)):(ee(t),jo(t,l,null,a,n))):i?i!==e.memoizedState?(jt(t),ee(t),xf(t,i)):(ee(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&jt(t),ee(t),jo(t,l,e,a,n)),null;case 27:if(Ji(t),n=fn.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&jt(t);else{if(!a){if(t.stateNode===null)throw Error(N(166));return ee(t),null}e=Et.current,In(t)?Ju(t):(e=wv(l,a,n),t.stateNode=e,jt(t))}return ee(t),null;case 5:if(Ji(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&jt(t);else{if(!a){if(t.stateNode===null)throw Error(N(166));return ee(t),null}if(i=Et.current,In(t))Ju(t);else{var r=vr(fn.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof a.is=="string"?r.createElement("select",{is:a.is}):r.createElement("select"),a.multiple?i.multiple=!0:a.size&&(i.size=a.size);break;default:i=typeof a.is=="string"?r.createElement(l,{is:a.is}):r.createElement(l)}}i[ze]=t,i[Ge]=a;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(Me(i,l,a),l){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&jt(t)}}return ee(t),jo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&jt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(N(166));if(e=fn.current,In(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,l=je,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}e[ze]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||yv(e.nodeValue,n)),e||wn(t,!0)}else e=vr(e).createTextNode(a),e[ze]=t,t.stateNode=e}return ee(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=In(t),n!==null){if(e===null){if(!a)throw Error(N(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(557));e[ze]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ee(t),e=!1}else n=xo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Qe(t),t):(Qe(t),null);if(t.flags&128)throw Error(N(558))}return ee(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=In(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(N(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(N(317));l[ze]=t}else Ln(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ee(t),l=!1}else l=xo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(Qe(t),t):(Qe(t),null)}return Qe(t),t.flags&128?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),mi(t,t.updateQueue),ee(t),null);case 4:return za(),e===null&&Ps(t.stateNode.containerInfo),ee(t),null;case 10:return Yt(t.type),ee(t),null;case 19:if(Ne(ue),a=t.memoizedState,a===null)return ee(t),null;if(l=(t.flags&128)!==0,i=a.rendering,i===null)if(l)nl(a,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=ar(e),i!==null){for(t.flags|=128,nl(a,!1),e=i.updateQueue,t.updateQueue=e,mi(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Rh(n,e),n=n.sibling;return I(ue,ue.current&1|2),V&&Dt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&Je()>sr&&(t.flags|=128,l=!0,nl(a,!1),t.lanes=4194304)}else{if(!l)if(e=ar(i),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,mi(t,e),nl(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!V)return ee(t),null}else 2*Je()-a.renderingStartTime>sr&&n!==536870912&&(t.flags|=128,l=!0,nl(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(e=a.last,e!==null?e.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=Je(),e.sibling=null,n=ue.current,I(ue,l?n&1|2:n&1),V&&Dt(t,a.treeForkCount),e):(ee(t),null);case 22:case 23:return Qe(t),_s(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?n&536870912&&!(t.flags&128)&&(ee(t),t.subtreeFlags&6&&(t.flags|=8192)):ee(t),n=t.updateQueue,n!==null&&mi(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&Ne(Un),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Yt(me),ee(t),null;case 25:return null;case 30:return null}throw Error(N(156,t.tag))}function ay(e,t){switch(As(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Yt(me),za(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ji(t),null;case 31:if(t.memoizedState!==null){if(Qe(t),t.alternate===null)throw Error(N(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Qe(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Ln()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ne(ue),null;case 4:return za(),null;case 10:return Yt(t.type),null;case 22:case 23:return Qe(t),_s(),e!==null&&Ne(Un),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Yt(me),null;case 25:return null;default:return null}}function Rm(e,t){switch(As(t),t.tag){case 3:Yt(me),za();break;case 26:case 27:case 5:Ji(t);break;case 4:za();break;case 31:t.memoizedState!==null&&Qe(t);break;case 13:Qe(t);break;case 19:Ne(ue);break;case 10:Yt(t.type);break;case 22:case 23:Qe(t),_s(),e!==null&&Ne(Un);break;case 24:Yt(me)}}function $l(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var l=a.next;n=l;do{if((n.tag&e)===e){a=void 0;var i=n.create,r=n.inst;a=i(),r.destroy=a}n=n.next}while(n!==l)}}catch(o){W(t,t.return,o)}}function En(e,t,n){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&e)===e){var r=a.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,l=t;var c=n,s=o;try{s()}catch(f){W(l,c,f)}}}a=a.next}while(a!==i)}}catch(f){W(t,t.return,f)}}function Dm(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Xh(t,n)}catch(a){W(e,e.return,a)}}}function km(e,t,n){n.props=Xn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){W(e,t,a)}}function xl(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(l){W(e,t,l)}}function wt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(l){W(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(l){W(e,t,l)}else n.current=null}function Um(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(l){W(e,e.return,l)}}function _o(e,t,n){try{var a=e.stateNode;Ay(a,e.type,n,t),a[Ge]=t}catch(l){W(e,e.return,l)}}function Hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tn(e.type)||e.tag===4}function Mo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kc(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ht));else if(a!==4&&(a===27&&Tn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}function cr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Tn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(cr(e,t,n),e=e.sibling;e!==null;)cr(e,t,n),e=e.sibling}function Bm(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);Me(t,a,n),t[ze]=e,t[Ge]=n}catch(i){W(e,e.return,i)}}var kt=!1,he=!1,Oo=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,we=null;function ly(e,t){if(e=e.containerInfo,qc=br,e=Ah(e),xs(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,o=-1,c=-1,s=0,f=0,h=e,d=null;t:for(;;){for(var p;h!==n||l!==0&&h.nodeType!==3||(o=r+l),h!==i||a!==0&&h.nodeType!==3||(c=r+a),h.nodeType===3&&(r+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===e)break t;if(d===n&&++s===l&&(o=r),d===i&&++f===a&&(c=r),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Xc={focusedElem:e,selectionRange:n},br=!1,we=t;we!==null;)if(t=we,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,we=e;else for(;we!==null;){switch(t=we,i=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)l=e[n],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,n=t,l=i.memoizedProps,i=i.memoizedState,a=n.stateNode;try{var S=Xn(n.type,l);e=a.getSnapshotBeforeUpdate(S,i),a.__reactInternalSnapshotBeforeUpdate=e}catch(b){W(n,n.return,b)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Qc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(N(163))}if(e=t.sibling,e!==null){e.return=t.return,we=e;break}we=t.return}}function Lm(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:Mt(e,n),a&4&&$l(5,n);break;case 1:if(Mt(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){W(n,n.return,r)}else{var l=Xn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){W(n,n.return,r)}}a&64&&Dm(n),a&512&&xl(n,n.return);break;case 3:if(Mt(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Xh(e,t)}catch(r){W(n,n.return,r)}}break;case 27:t===null&&a&4&&Bm(n);case 26:case 5:Mt(e,n),t===null&&a&4&&Um(n),a&512&&xl(n,n.return);break;case 12:Mt(e,n);break;case 31:Mt(e,n),a&4&&qm(e,n);break;case 13:Mt(e,n),a&4&&Xm(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=hy.bind(null,n),Ry(e,n))));break;case 22:if(a=n.memoizedState!==null||kt,!a){t=t!==null&&t.memoizedState!==null||he,l=kt;var i=he;kt=a,(he=t)&&!i?Rt(e,n,(n.subtreeFlags&8772)!==0):Mt(e,n),kt=l,he=i}break;case 30:break;default:Mt(e,n)}}function Ym(e){var t=e.alternate;t!==null&&(e.alternate=null,Ym(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ms(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,Be=!1;function _t(e,t,n){for(n=n.child;n!==null;)Gm(e,t,n),n=n.sibling}function Gm(e,t,n){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 26:he||wt(n,t),_t(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:he||wt(n,t);var a=re,l=Be;Tn(n.type)&&(re=n.stateNode,Be=!1),_t(e,t,n),Nl(n.stateNode),re=a,Be=l;break;case 5:he||wt(n,t);case 6:if(a=re,l=Be,re=null,_t(e,t,n),re=a,Be=l,re!==null)if(Be)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(n.stateNode)}catch(i){W(n,t,i)}else try{re.removeChild(n.stateNode)}catch(i){W(n,t,i)}break;case 18:re!==null&&(Be?(e=re,Df(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Ba(e)):Df(re,n.stateNode));break;case 4:a=re,l=Be,re=n.stateNode.containerInfo,Be=!0,_t(e,t,n),re=a,Be=l;break;case 0:case 11:case 14:case 15:En(2,n,t),he||En(4,n,t),_t(e,t,n);break;case 1:he||(wt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&km(n,t,a)),_t(e,t,n);break;case 21:_t(e,t,n);break;case 22:he=(a=he)||n.memoizedState!==null,_t(e,t,n),he=a;break;default:_t(e,t,n)}}function qm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ba(e)}catch(n){W(t,t.return,n)}}}function Xm(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ba(e)}catch(n){W(t,t.return,n)}}function iy(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Sf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Sf),t;default:throw Error(N(435,e.tag))}}function vi(e,t){var n=iy(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var l=my.bind(null,e,a);a.then(l,l)}})}function Ue(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var l=n[a],i=e,r=t,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(Tn(o.type)){re=o.stateNode,Be=!1;break e}break;case 5:re=o.stateNode,Be=!1;break e;case 3:case 4:re=o.stateNode.containerInfo,Be=!0;break e}o=o.return}if(re===null)throw Error(N(160));Gm(i,r,l),re=null,Be=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Vm(t,e),t=t.sibling}var vt=null;function Vm(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ue(t,e),He(e),a&4&&(En(3,e,e.return),$l(3,e),En(5,e,e.return));break;case 1:Ue(t,e),He(e),a&512&&(he||n===null||wt(n,n.return)),a&64&&kt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var l=vt;if(Ue(t,e),He(e),a&512&&(he||n===null||wt(n,n.return)),a&4){var i=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,l=l.ownerDocument||l;t:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Zl]||i[ze]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Me(i,a,n),i[ze]=e,Ee(i),a=i;break e;case"link":var r=Gf("link","href",l).get(a+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(i=r[o],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break t}}i=l.createElement(a),Me(i,a,n),l.head.appendChild(i);break;case"meta":if(r=Gf("meta","content",l).get(a+(n.content||""))){for(o=0;o<r.length;o++)if(i=r[o],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break t}}i=l.createElement(a),Me(i,a,n),l.head.appendChild(i);break;default:throw Error(N(468,a))}i[ze]=e,Ee(i),a=i}e.stateNode=a}else qf(l,e.type,e.stateNode);else e.stateNode=Yf(l,a,e.memoizedProps);else i!==a?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,a===null?qf(l,e.type,e.stateNode):Yf(l,a,e.memoizedProps)):a===null&&e.stateNode!==null&&_o(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ue(t,e),He(e),a&512&&(he||n===null||wt(n,n.return)),n!==null&&a&4&&_o(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ue(t,e),He(e),a&512&&(he||n===null||wt(n,n.return)),e.flags&32){l=e.stateNode;try{_a(l,"")}catch(S){W(e,e.return,S)}}a&4&&e.stateNode!=null&&(l=e.memoizedProps,_o(e,l,n!==null?n.memoizedProps:l)),a&1024&&(Oo=!0);break;case 6:if(Ue(t,e),He(e),a&4){if(e.stateNode===null)throw Error(N(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(S){W(e,e.return,S)}}break;case 3:if(Yi=null,l=vt,vt=gr(t.containerInfo),Ue(t,e),vt=l,He(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Ba(t.containerInfo)}catch(S){W(e,e.return,S)}Oo&&(Oo=!1,Qm(e));break;case 4:a=vt,vt=gr(e.stateNode.containerInfo),Ue(t,e),He(e),vt=a;break;case 12:Ue(t,e),He(e);break;case 31:Ue(t,e),He(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vi(e,a)));break;case 13:Ue(t,e),He(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Vr=Je()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vi(e,a)));break;case 22:l=e.memoizedState!==null;var c=n!==null&&n.memoizedState!==null,s=kt,f=he;if(kt=s||l,he=f||c,Ue(t,e),he=f,kt=s,He(e),a&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(n===null||c||kt||he||Rn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){c=n=t;try{if(i=c.stateNode,l)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=c.stateNode;var h=c.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=d==null||typeof d=="boolean"?"":(""+d).trim()}}catch(S){W(c,c.return,S)}}}else if(t.tag===6){if(n===null){c=t;try{c.stateNode.nodeValue=l?"":c.memoizedProps}catch(S){W(c,c.return,S)}}}else if(t.tag===18){if(n===null){c=t;try{var p=c.stateNode;l?kf(p,!0):kf(c.stateNode,!1)}catch(S){W(c,c.return,S)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,vi(e,n))));break;case 19:Ue(t,e),He(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,vi(e,a)));break;case 30:break;case 21:break;default:Ue(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Hm(a)){n=a;break}a=a.return}if(n==null)throw Error(N(160));switch(n.tag){case 27:var l=n.stateNode,i=Mo(e);cr(e,i,l);break;case 5:var r=n.stateNode;n.flags&32&&(_a(r,""),n.flags&=-33);var o=Mo(e);cr(e,o,r);break;case 3:case 4:var c=n.stateNode.containerInfo,s=Mo(e);kc(e,s,c);break;default:throw Error(N(161))}}catch(f){W(e,e.return,f)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Qm(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Mt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Lm(e,t.alternate,t),t=t.sibling}function Rn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:En(4,t,t.return),Rn(t);break;case 1:wt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&km(t,t.return,n),Rn(t);break;case 27:Nl(t.stateNode);case 26:case 5:wt(t,t.return),Rn(t);break;case 22:t.memoizedState===null&&Rn(t);break;case 30:Rn(t);break;default:Rn(t)}e=e.sibling}}function Rt(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,l=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:Rt(l,i,n),$l(4,i);break;case 1:if(Rt(l,i,n),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(s){W(a,a.return,s)}if(a=i,l=a.updateQueue,l!==null){var o=a.stateNode;try{var c=l.shared.hiddenCallbacks;if(c!==null)for(l.shared.hiddenCallbacks=null,l=0;l<c.length;l++)qh(c[l],o)}catch(s){W(a,a.return,s)}}n&&r&64&&Dm(i),xl(i,i.return);break;case 27:Bm(i);case 26:case 5:Rt(l,i,n),n&&a===null&&r&4&&Um(i),xl(i,i.return);break;case 12:Rt(l,i,n);break;case 31:Rt(l,i,n),n&&r&4&&qm(l,i);break;case 13:Rt(l,i,n),n&&r&4&&Xm(l,i);break;case 22:i.memoizedState===null&&Rt(l,i,n),xl(i,i.return);break;case 30:break;default:Rt(l,i,n)}t=t.sibling}}function Zs(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Jl(n))}function Ks(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e))}function mt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Zm(e,t,n,a),t=t.sibling}function Zm(e,t,n,a){var l=t.flags;switch(t.tag){case 0:case 11:case 15:mt(e,t,n,a),l&2048&&$l(9,t);break;case 1:mt(e,t,n,a);break;case 3:mt(e,t,n,a),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jl(e)));break;case 12:if(l&2048){mt(e,t,n,a),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,o=i.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){W(t,t.return,c)}}else mt(e,t,n,a);break;case 31:mt(e,t,n,a);break;case 13:mt(e,t,n,a);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?mt(e,t,n,a):Sl(e,t):i._visibility&2?mt(e,t,n,a):(i._visibility|=2,ra(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Zs(r,t);break;case 24:mt(e,t,n,a),l&2048&&Ks(t.alternate,t);break;default:mt(e,t,n,a)}}function ra(e,t,n,a,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,o=n,c=a,s=r.flags;switch(r.tag){case 0:case 11:case 15:ra(i,r,o,c,l),$l(8,r);break;case 23:break;case 22:var f=r.stateNode;r.memoizedState!==null?f._visibility&2?ra(i,r,o,c,l):Sl(i,r):(f._visibility|=2,ra(i,r,o,c,l)),l&&s&2048&&Zs(r.alternate,r);break;case 24:ra(i,r,o,c,l),l&&s&2048&&Ks(r.alternate,r);break;default:ra(i,r,o,c,l)}t=t.sibling}}function Sl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,l=a.flags;switch(a.tag){case 22:Sl(n,a),l&2048&&Zs(a.alternate,a);break;case 24:Sl(n,a),l&2048&&Ks(a.alternate,a);break;default:Sl(n,a)}t=t.sibling}}var ul=8192;function ea(e,t,n){if(e.subtreeFlags&ul)for(e=e.child;e!==null;)Km(e,t,n),e=e.sibling}function Km(e,t,n){switch(e.tag){case 26:ea(e,t,n),e.flags&ul&&e.memoizedState!==null&&Qy(n,vt,e.memoizedState,e.memoizedProps);break;case 5:ea(e,t,n);break;case 3:case 4:var a=vt;vt=gr(e.stateNode.containerInfo),ea(e,t,n),vt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=ul,ul=16777216,ea(e,t,n),ul=a):ea(e,t,n));break;default:ea(e,t,n)}}function Jm(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function al(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];we=a,$m(a,e)}Jm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Wm(e),e=e.sibling}function Wm(e){switch(e.tag){case 0:case 11:case 15:al(e),e.flags&2048&&En(9,e,e.return);break;case 3:al(e);break;case 12:al(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Bi(e)):al(e);break;default:al(e)}}function Bi(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];we=a,$m(a,e)}Jm(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:En(8,t,t.return),Bi(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Bi(t));break;default:Bi(t)}e=e.sibling}}function $m(e,t){for(;we!==null;){var n=we;switch(n.tag){case 0:case 11:case 15:En(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Jl(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,we=a;else e:for(n=e;we!==null;){a=we;var l=a.sibling,i=a.return;if(Ym(a),a===n){we=null;break e}if(l!==null){l.return=i,we=l;break e}we=i}}}var ry={getCacheForType:function(e){var t=_e(me),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return _e(me).controller.signal}},oy=typeof WeakMap=="function"?WeakMap:Map,Q=0,P=null,q=null,X=0,J=0,Ve=null,on=!1,Za=!1,Js=!1,Zt=0,ce=0,Nn=0,Bn=0,Ws=0,Ke=0,Da=0,wl=null,Le=null,Uc=!1,Vr=0,Fm=0,sr=1/0,ur=null,vn=null,be=0,gn=null,ka=null,Gt=0,Hc=0,Bc=null,Pm=null,El=0,Lc=null;function Fe(){return Q&2&&X!==0?X&-X:k.T!==null?Fs():oh()}function Im(){if(Ke===0)if(!(X&536870912)||V){var e=oi;oi<<=1,!(oi&3932160)&&(oi=262144),Ke=e}else Ke=536870912;return e=Ie.current,e!==null&&(e.flags|=32),Ke}function Ye(e,t,n){(e===P&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Ua(e,0),cn(e,X,Ke,!1)),Ql(e,n),(!(Q&2)||e!==P)&&(e===P&&(!(Q&2)&&(Bn|=n),ce===4&&cn(e,X,Ke,!1)),At(e))}function ev(e,t,n){if(Q&6)throw Error(N(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Vl(e,t),l=a?uy(e,t):Ro(e,t,!0),i=a;do{if(l===0){Za&&!a&&cn(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!cy(n)){l=Ro(e,t,!1),i=!1;continue}if(l===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var o=e;l=wl;var c=o.current.memoizedState.isDehydrated;if(c&&(Ua(o,r).flags|=256),r=Ro(o,r,!1),r!==2){if(Js&&!c){o.errorRecoveryDisabledLanes|=i,Bn|=i,l=4;break e}i=Le,Le=l,i!==null&&(Le===null?Le=i:Le.push.apply(Le,i))}l=r}if(i=!1,l!==2)continue}}if(l===1){Ua(e,0),cn(e,t,0,!0);break}e:{switch(a=e,i=l,i){case 0:case 1:throw Error(N(345));case 4:if((t&4194048)!==t)break;case 6:cn(a,t,Ke,!on);break e;case 2:Le=null;break;case 3:case 5:break;default:throw Error(N(329))}if((t&62914560)===t&&(l=Vr+300-Je(),10<l)){if(cn(a,t,Ke,!on),Rr(a,0,!0)!==0)break e;Gt=t,a.timeoutHandle=xv(wf.bind(null,a,n,Le,ur,Uc,t,Ke,Bn,Da,on,i,"Throttled",-0,0),l);break e}wf(a,n,Le,ur,Uc,t,Ke,Bn,Da,on,i,null,-0,0)}}break}while(1);At(e)}function wf(e,t,n,a,l,i,r,o,c,s,f,h,d,p){if(e.timeoutHandle=-1,h=t.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ht},Km(t,i,h);var S=(i&62914560)===i?Vr-Je():(i&4194048)===i?Fm-Je():0;if(S=Zy(h,S),S!==null){Gt=i,e.cancelPendingCommit=S(Nf.bind(null,e,t,i,n,a,l,r,o,c,f,h,null,d,p)),cn(e,i,r,!s);return}}Nf(e,t,i,n,a,l,r,o,c)}function cy(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var l=n[a],i=l.getSnapshot;l=l.value;try{if(!Pe(i(),l))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cn(e,t,n,a){t&=~Ws,t&=~Bn,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var l=t;0<l;){var i=31-$e(l),r=1<<i;a[i]=-1,l&=~r}n!==0&&lh(e,n,t)}function Qr(){return Q&6?!0:(Fl(0,!1),!1)}function $s(){if(q!==null){if(J===0)var e=q.return;else e=q,Bt=Wn=null,ks(e),Na=null,Ol=0,e=q;for(;e!==null;)Rm(e.alternate,e),e=e.return;q=null}}function Ua(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,zy(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Gt=0,$s(),P=e,q=n=Lt(e.current,null),X=t,J=0,Ve=null,on=!1,Za=Vl(e,t),Js=!1,Da=Ke=Ws=Bn=Nn=ce=0,Le=wl=null,Uc=!1,t&8&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var l=31-$e(a),i=1<<l;t|=e[l],a&=~i}return Zt=t,Hr(),n}function tv(e,t){H=null,k.H=Dl,t===Qa||t===Lr?(t=Iu(),J=3):t===zs?(t=Iu(),J=4):J=t===Vs?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Ve=t,q===null&&(ce=1,rr(e,rt(t,e.current)))}function nv(){var e=Ie.current;return e===null?!0:(X&4194048)===X?st===null:(X&62914560)===X||X&536870912?e===st:!1}function av(){var e=k.H;return k.H=Dl,e===null?Dl:e}function lv(){var e=k.A;return k.A=ry,e}function fr(){ce=4,on||(X&4194048)!==X&&Ie.current!==null||(Za=!0),!(Nn&134217727)&&!(Bn&134217727)||P===null||cn(P,X,Ke,!1)}function Ro(e,t,n){var a=Q;Q|=2;var l=av(),i=lv();(P!==e||X!==t)&&(ur=null,Ua(e,t)),t=!1;var r=ce;e:do try{if(J!==0&&q!==null){var o=q,c=Ve;switch(J){case 8:$s(),r=6;break e;case 3:case 2:case 9:case 6:Ie.current===null&&(t=!0);var s=J;if(J=0,Ve=null,ba(e,o,c,s),n&&Za){r=0;break e}break;default:s=J,J=0,Ve=null,ba(e,o,c,s)}}sy(),r=ce;break}catch(f){tv(e,f)}while(1);return t&&e.shellSuspendCounter++,Bt=Wn=null,Q=a,k.H=l,k.A=i,q===null&&(P=null,X=0,Hr()),r}function sy(){for(;q!==null;)iv(q)}function uy(e,t){var n=Q;Q|=2;var a=av(),l=lv();P!==e||X!==t?(ur=null,sr=Je()+500,Ua(e,t)):Za=Vl(e,t);e:do try{if(J!==0&&q!==null){t=q;var i=Ve;t:switch(J){case 1:J=0,Ve=null,ba(e,t,i,1);break;case 2:case 9:if(Pu(i)){J=0,Ve=null,Ef(t);break}t=function(){J!==2&&J!==9||P!==e||(J=7),At(e)},i.then(t,t);break e;case 3:J=7;break e;case 4:J=5;break e;case 7:Pu(i)?(J=0,Ve=null,Ef(t)):(J=0,Ve=null,ba(e,t,i,7));break;case 5:var r=null;switch(q.tag){case 26:r=q.memoizedState;case 5:case 27:var o=q;if(r?Av(r):o.stateNode.complete){J=0,Ve=null;var c=o.sibling;if(c!==null)q=c;else{var s=o.return;s!==null?(q=s,Zr(s)):q=null}break t}}J=0,Ve=null,ba(e,t,i,5);break;case 6:J=0,Ve=null,ba(e,t,i,6);break;case 8:$s(),ce=6;break e;default:throw Error(N(462))}}fy();break}catch(f){tv(e,f)}while(1);return Bt=Wn=null,k.H=a,k.A=l,Q=n,q!==null?0:(P=null,X=0,Hr(),ce)}function fy(){for(;q!==null&&!D0();)iv(q)}function iv(e){var t=Om(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?Zr(e):q=t}function Ef(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=gf(n,t,t.pendingProps,t.type,void 0,X);break;case 11:t=gf(n,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:ks(t);default:Rm(n,t),t=q=Rh(t,Zt),t=Om(n,t,Zt)}e.memoizedProps=e.pendingProps,t===null?Zr(e):q=t}function ba(e,t,n,a){Bt=Wn=null,ks(t),Na=null,Ol=0;var l=t.return;try{if(Ip(e,l,t,n,X)){ce=1,rr(e,rt(n,e.current)),q=null;return}}catch(i){if(l!==null)throw q=l,i;ce=1,rr(e,rt(n,e.current)),q=null;return}t.flags&32768?(V||a===1?e=!0:Za||X&536870912?e=!1:(on=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ie.current,a!==null&&a.tag===13&&(a.flags|=16384))),rv(t,e)):Zr(t)}function Zr(e){var t=e;do{if(t.flags&32768){rv(t,on);return}e=t.return;var n=ny(t.alternate,t,Zt);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);ce===0&&(ce=5)}function rv(e,t){do{var n=ay(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);ce=6,q=null}function Nf(e,t,n,a,l,i,r,o,c){e.cancelPendingCommit=null;do Kr();while(be!==0);if(Q&6)throw Error(N(327));if(t!==null){if(t===e.current)throw Error(N(177));if(i=t.lanes|t.childLanes,i|=Ss,V0(e,n,i,r,o,c),e===P&&(q=P=null,X=0),ka=t,gn=e,Gt=n,Hc=i,Bc=l,Pm=a,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,vy(Wi,function(){return fv(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,t.subtreeFlags&13878||a){a=k.T,k.T=null,l=Z.p,Z.p=2,r=Q,Q|=4;try{ly(e,t,n)}finally{Q=r,Z.p=l,k.T=a}}be=1,ov(),cv(),sv()}}function ov(){if(be===1){be=0;var e=gn,t=ka,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=k.T,k.T=null;var a=Z.p;Z.p=2;var l=Q;Q|=4;try{Vm(t,e);var i=Xc,r=Ah(e.containerInfo),o=i.focusedElem,c=i.selectionRange;if(r!==o&&o&&o.ownerDocument&&Nh(o.ownerDocument.documentElement,o)){if(c!==null&&xs(o)){var s=c.start,f=c.end;if(f===void 0&&(f=s),"selectionStart"in o)o.selectionStart=s,o.selectionEnd=Math.min(f,o.value.length);else{var h=o.ownerDocument||document,d=h&&h.defaultView||window;if(d.getSelection){var p=d.getSelection(),S=o.textContent.length,b=Math.min(c.start,S),w=c.end===void 0?b:Math.min(c.end,S);!p.extend&&b>w&&(r=w,w=b,b=r);var g=Qu(o,b),v=Qu(o,w);if(g&&v&&(p.rangeCount!==1||p.anchorNode!==g.node||p.anchorOffset!==g.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=h.createRange();y.setStart(g.node,g.offset),p.removeAllRanges(),b>w?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(h=[],p=o;p=p.parentNode;)p.nodeType===1&&h.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var x=h[o];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}br=!!qc,Xc=qc=null}finally{Q=l,Z.p=a,k.T=n}}e.current=t,be=2}}function cv(){if(be===2){be=0;var e=gn,t=ka,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=k.T,k.T=null;var a=Z.p;Z.p=2;var l=Q;Q|=4;try{Lm(e,t.alternate,t)}finally{Q=l,Z.p=a,k.T=n}}be=3}}function sv(){if(be===4||be===3){be=0,k0();var e=gn,t=ka,n=Gt,a=Pm;t.subtreeFlags&10256||t.flags&10256?be=5:(be=0,ka=gn=null,uv(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(vn=null),hs(n),t=t.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=k.T,l=Z.p,Z.p=2,k.T=null;try{for(var i=e.onRecoverableError,r=0;r<a.length;r++){var o=a[r];i(o.value,{componentStack:o.stack})}}finally{k.T=t,Z.p=l}}Gt&3&&Kr(),At(e),l=e.pendingLanes,n&261930&&l&42?e===Lc?El++:(El=0,Lc=e):El=0,Fl(0,!1)}}function uv(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jl(t)))}function Kr(){return ov(),cv(),sv(),fv()}function fv(){if(be!==5)return!1;var e=gn,t=Hc;Hc=0;var n=hs(Gt),a=k.T,l=Z.p;try{Z.p=32>n?32:n,k.T=null,n=Bc,Bc=null;var i=gn,r=Gt;if(be=0,ka=gn=null,Gt=0,Q&6)throw Error(N(331));var o=Q;if(Q|=4,Wm(i.current),Zm(i,i.current,r,n),Q=o,Fl(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(Xl,i)}catch{}return!0}finally{Z.p=l,k.T=a,uv(e,t)}}function Af(e,t,n){t=rt(n,t),t=Oc(e.stateNode,t,2),e=mn(e,t,2),e!==null&&(Ql(e,2),At(e))}function W(e,t,n){if(e.tag===3)Af(e,e,n);else for(;t!==null;){if(t.tag===3){Af(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(vn===null||!vn.has(a))){e=rt(n,e),n=Tm(2),a=mn(t,n,2),a!==null&&(Cm(n,a,t,e),Ql(a,2),At(a));break}}t=t.return}}function Do(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new oy;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(n)||(Js=!0,l.add(n),e=dy.bind(null,e,t,n),t.then(e,e))}function dy(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,P===e&&(X&n)===n&&(ce===4||ce===3&&(X&62914560)===X&&300>Je()-Vr?!(Q&2)&&Ua(e,0):Ws|=n,Da===X&&(Da=0)),At(e)}function dv(e,t){t===0&&(t=ah()),e=Jn(e,t),e!==null&&(Ql(e,t),At(e))}function hy(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),dv(e,n)}function my(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(n=l.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(N(314))}a!==null&&a.delete(t),dv(e,n)}function vy(e,t){return fs(e,t)}var dr=null,oa=null,Yc=!1,hr=!1,ko=!1,sn=0;function At(e){e!==oa&&e.next===null&&(oa===null?dr=oa=e:oa=oa.next=e),hr=!0,Yc||(Yc=!0,py())}function Fl(e,t){if(!ko&&hr){ko=!0;do for(var n=!1,a=dr;a!==null;){if(!t)if(e!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var r=a.suspendedLanes,o=a.pingedLanes;i=(1<<31-$e(42|e)+1)-1,i&=l&~(r&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Tf(a,i))}else i=X,i=Rr(a,a===P?i:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),!(i&3)||Vl(a,i)||(n=!0,Tf(a,i));a=a.next}while(n);ko=!1}}function gy(){hv()}function hv(){hr=Yc=!1;var e=0;sn!==0&&Cy()&&(e=sn);for(var t=Je(),n=null,a=dr;a!==null;){var l=a.next,i=mv(a,t);i===0?(a.next=null,n===null?dr=l:n.next=l,l===null&&(oa=n)):(n=a,(e!==0||i&3)&&(hr=!0)),a=l}be!==0&&be!==5||Fl(e,!1),sn!==0&&(sn=0)}function mv(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-$e(i),o=1<<r,c=l[r];c===-1?(!(o&n)||o&a)&&(l[r]=X0(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}if(t=P,n=X,n=Rr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&co(a),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Vl(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&co(a),hs(n)){case 2:case 8:n=th;break;case 32:n=Wi;break;case 268435456:n=nh;break;default:n=Wi}return a=vv.bind(null,e),n=fs(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&co(a),e.callbackPriority=2,e.callbackNode=null,2}function vv(e,t){if(be!==0&&be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Kr()&&e.callbackNode!==n)return null;var a=X;return a=Rr(e,e===P?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(ev(e,a,t),mv(e,Je()),e.callbackNode!=null&&e.callbackNode===n?vv.bind(null,e):null)}function Tf(e,t){if(Kr())return null;ev(e,t,!0)}function py(){jy(function(){Q&6?fs(eh,gy):hv()})}function Fs(){if(sn===0){var e=Ma;e===0&&(e=ri,ri<<=1,!(ri&261888)&&(ri=256)),sn=e}return sn}function Cf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ji(""+e)}function zf(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function yy(e,t,n,a,l){if(t==="submit"&&n&&n.stateNode===l){var i=Cf((l[Ge]||null).action),r=a.submitter;r&&(t=(t=r[Ge]||null)?Cf(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var o=new Dr("action","action",null,a,l);e.push({event:o,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(sn!==0){var c=r?zf(l,r):new FormData(l);_c(n,{pending:!0,data:c,method:l.method,action:i},null,c)}}else typeof i=="function"&&(o.preventDefault(),c=r?zf(l,r):new FormData(l),_c(n,{pending:!0,data:c,method:l.method,action:i},i,c))},currentTarget:l}]})}}for(var Uo=0;Uo<yc.length;Uo++){var Ho=yc[Uo],by=Ho.toLowerCase(),xy=Ho[0].toUpperCase()+Ho.slice(1);gt(by,"on"+xy)}gt(Ch,"onAnimationEnd");gt(zh,"onAnimationIteration");gt(jh,"onAnimationStart");gt("dblclick","onDoubleClick");gt("focusin","onFocus");gt("focusout","onBlur");gt(Up,"onTransitionRun");gt(Hp,"onTransitionStart");gt(Bp,"onTransitionCancel");gt(_h,"onTransitionEnd");ja("onMouseEnter",["mouseout","mouseover"]);ja("onMouseLeave",["mouseout","mouseover"]);ja("onPointerEnter",["pointerout","pointerover"]);ja("onPointerLeave",["pointerout","pointerover"]);Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var kl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(kl));function gv(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],l=a.event;a=a.listeners;e:{var i=void 0;if(t)for(var r=a.length-1;0<=r;r--){var o=a[r],c=o.instance,s=o.currentTarget;if(o=o.listener,c!==i&&l.isPropagationStopped())break e;i=o,l.currentTarget=s;try{i(l)}catch(f){Fi(f)}l.currentTarget=null,i=c}else for(r=0;r<a.length;r++){if(o=a[r],c=o.instance,s=o.currentTarget,o=o.listener,c!==i&&l.isPropagationStopped())break e;i=o,l.currentTarget=s;try{i(l)}catch(f){Fi(f)}l.currentTarget=null,i=c}}}}function G(e,t){var n=t[uc];n===void 0&&(n=t[uc]=new Set);var a=e+"__bubble";n.has(a)||(pv(t,e,2,!1),n.add(a))}function Bo(e,t,n){var a=0;t&&(a|=4),pv(n,e,a,t)}var gi="_reactListening"+Math.random().toString(36).slice(2);function Ps(e){if(!e[gi]){e[gi]=!0,ch.forEach(function(n){n!=="selectionchange"&&(Sy.has(n)||Bo(n,!1,e),Bo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,Bo("selectionchange",!1,t))}}function pv(e,t,n,a){switch(_v(t)){case 2:var l=Wy;break;case 8:l=$y;break;default:l=nu}n=l.bind(null,t,n,e),l=void 0,!vc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,n,{capture:!0,passive:l}):e.addEventListener(t,n,!0):l!==void 0?e.addEventListener(t,n,{passive:l}):e.addEventListener(t,n,!1)}function Lo(e,t,n,a,l){var i=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var r=a.tag;if(r===3||r===4){var o=a.stateNode.containerInfo;if(o===l)break;if(r===4)for(r=a.return;r!==null;){var c=r.tag;if((c===3||c===4)&&r.stateNode.containerInfo===l)return;r=r.return}for(;o!==null;){if(r=ua(o),r===null)return;if(c=r.tag,c===5||c===6||c===26||c===27){a=i=r;continue e}o=o.parentNode}}a=a.return}gh(function(){var s=i,f=gs(n),h=[];e:{var d=Mh.get(e);if(d!==void 0){var p=Dr,S=e;switch(e){case"keypress":if(Mi(n)===0)break e;case"keydown":case"keyup":p=mp;break;case"focusin":S="focus",p=mo;break;case"focusout":S="blur",p=mo;break;case"beforeblur":case"afterblur":p=mo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=ku;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=np;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=pp;break;case Ch:case zh:case jh:p=ip;break;case _h:p=bp;break;case"scroll":case"scrollend":p=ep;break;case"wheel":p=Sp;break;case"copy":case"cut":case"paste":p=op;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Hu;break;case"toggle":case"beforetoggle":p=Ep}var b=(t&4)!==0,w=!b&&(e==="scroll"||e==="scrollend"),g=b?d!==null?d+"Capture":null:d;b=[];for(var v=s,y;v!==null;){var x=v;if(y=x.stateNode,x=x.tag,x!==5&&x!==26&&x!==27||y===null||g===null||(x=Cl(v,g),x!=null&&b.push(Ul(v,x,y))),w)break;v=v.return}0<b.length&&(d=new p(d,S,null,n,f),h.push({event:d,listeners:b}))}}if(!(t&7)){e:{if(d=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",d&&n!==mc&&(S=n.relatedTarget||n.fromElement)&&(ua(S)||S[qa]))break e;if((p||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,p?(S=n.relatedTarget||n.toElement,p=s,S=S?ua(S):null,S!==null&&(w=ql(S),b=S.tag,S!==w||b!==5&&b!==27&&b!==6)&&(S=null)):(p=null,S=s),p!==S)){if(b=ku,x="onMouseLeave",g="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(b=Hu,x="onPointerLeave",g="onPointerEnter",v="pointer"),w=p==null?d:cl(p),y=S==null?d:cl(S),d=new b(x,v+"leave",p,n,f),d.target=w,d.relatedTarget=y,x=null,ua(f)===s&&(b=new b(g,v+"enter",S,n,f),b.target=y,b.relatedTarget=w,x=b),w=x,p&&S)t:{for(b=wy,g=p,v=S,y=0,x=g;x;x=b(x))y++;x=0;for(var C=v;C;C=b(C))x++;for(;0<y-x;)g=b(g),y--;for(;0<x-y;)v=b(v),x--;for(;y--;){if(g===v||v!==null&&g===v.alternate){b=g;break t}g=b(g),v=b(v)}b=null}else b=null;p!==null&&jf(h,d,p,b,!1),S!==null&&w!==null&&jf(h,w,S,b,!0)}}e:{if(d=s?cl(s):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var M=Gu;else if(Yu(d))if(wh)M=Rp;else{M=Mp;var T=_p}else p=d.nodeName,!p||p.toLowerCase()!=="input"||d.type!=="checkbox"&&d.type!=="radio"?s&&vs(s.elementType)&&(M=Gu):M=Op;if(M&&(M=M(e,s))){Sh(h,M,n,f);break e}T&&T(e,d,s),e==="focusout"&&s&&d.type==="number"&&s.memoizedProps.value!=null&&hc(d,"number",d.value)}switch(T=s?cl(s):window,e){case"focusin":(Yu(T)||T.contentEditable==="true")&&(ha=T,gc=s,ml=null);break;case"focusout":ml=gc=ha=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,Zu(h,n,f);break;case"selectionchange":if(kp)break;case"keydown":case"keyup":Zu(h,n,f)}var A;if(bs)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else da?bh(e,n)&&(j="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(yh&&n.locale!=="ko"&&(da||j!=="onCompositionStart"?j==="onCompositionEnd"&&da&&(A=ph()):(rn=f,ps="value"in rn?rn.value:rn.textContent,da=!0)),T=mr(s,j),0<T.length&&(j=new Uu(j,e,null,n,f),h.push({event:j,listeners:T}),A?j.data=A:(A=xh(n),A!==null&&(j.data=A)))),(A=Ap?Tp(e,n):Cp(e,n))&&(j=mr(s,"onBeforeInput"),0<j.length&&(T=new Uu("onBeforeInput","beforeinput",null,n,f),h.push({event:T,listeners:j}),T.data=A)),yy(h,e,s,n,f)}gv(h,t)})}function Ul(e,t,n){return{instance:e,listener:t,currentTarget:n}}function mr(e,t){for(var n=t+"Capture",a=[];e!==null;){var l=e,i=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Cl(e,n),l!=null&&a.unshift(Ul(e,l,i)),l=Cl(e,t),l!=null&&a.push(Ul(e,l,i))),e.tag===3)return a;e=e.return}return[]}function wy(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function jf(e,t,n,a,l){for(var i=t._reactName,r=[];n!==null&&n!==a;){var o=n,c=o.alternate,s=o.stateNode;if(o=o.tag,c!==null&&c===a)break;o!==5&&o!==26&&o!==27||s===null||(c=s,l?(s=Cl(n,i),s!=null&&r.unshift(Ul(n,s,c))):l||(s=Cl(n,i),s!=null&&r.push(Ul(n,s,c)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var Ey=/\r\n?/g,Ny=/\u0000|\uFFFD/g;function _f(e){return(typeof e=="string"?e:""+e).replace(Ey,`
`).replace(Ny,"")}function yv(e,t){return t=_f(t),_f(e)===t}function $(e,t,n,a,l,i){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||_a(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&_a(e,""+a);break;case"className":si(e,"class",a);break;case"tabIndex":si(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":si(e,n,a);break;case"style":vh(e,a,i);break;case"data":if(t!=="object"){si(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ji(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&$(e,t,"name",l.name,l,null),$(e,t,"formEncType",l.formEncType,l,null),$(e,t,"formMethod",l.formMethod,l,null),$(e,t,"formTarget",l.formTarget,l,null)):($(e,t,"encType",l.encType,l,null),$(e,t,"method",l.method,l,null),$(e,t,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ji(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=Ht);break;case"onScroll":a!=null&&G("scroll",e);break;case"onScrollEnd":a!=null&&G("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(N(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(N(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=ji(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":G("beforetoggle",e),G("toggle",e),zi(e,"popover",a);break;case"xlinkActuate":zt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":zt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":zt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":zt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":zt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":zt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":zt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":zt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":zt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":zi(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=P0.get(n)||n,zi(e,n,a))}}function Gc(e,t,n,a,l,i){switch(n){case"style":vh(e,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(N(61));if(n=a.__html,n!=null){if(l.children!=null)throw Error(N(60));e.innerHTML=n}}break;case"children":typeof a=="string"?_a(e,a):(typeof a=="number"||typeof a=="bigint")&&_a(e,""+a);break;case"onScroll":a!=null&&G("scroll",e);break;case"onScrollEnd":a!=null&&G("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Ht);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!sh.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(l=n.endsWith("Capture"),t=n.slice(2,l?n.length-7:void 0),i=e[Ge]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,l);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):zi(e,n,a)}}}function Me(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",e),G("load",e);var a=!1,l=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(N(137,t));default:$(e,t,i,r,n,null)}}l&&$(e,t,"srcSet",n.srcSet,n,null),a&&$(e,t,"src",n.src,n,null);return;case"input":G("invalid",e);var o=i=r=l=null,c=null,s=null;for(a in n)if(n.hasOwnProperty(a)){var f=n[a];if(f!=null)switch(a){case"name":l=f;break;case"type":r=f;break;case"checked":c=f;break;case"defaultChecked":s=f;break;case"value":i=f;break;case"defaultValue":o=f;break;case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(N(137,t));break;default:$(e,t,a,f,n,null)}}dh(e,i,o,c,s,r,l,!1);return;case"select":G("invalid",e),a=r=i=null;for(l in n)if(n.hasOwnProperty(l)&&(o=n[l],o!=null))switch(l){case"value":i=o;break;case"defaultValue":r=o;break;case"multiple":a=o;default:$(e,t,l,o,n,null)}t=i,n=r,e.multiple=!!a,t!=null?Sa(e,!!a,t,!1):n!=null&&Sa(e,!!a,n,!0);return;case"textarea":G("invalid",e),i=l=a=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":a=o;break;case"defaultValue":l=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(N(91));break;default:$(e,t,r,o,n,null)}mh(e,a,l,i);return;case"option":for(c in n)if(n.hasOwnProperty(c)&&(a=n[c],a!=null))switch(c){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:$(e,t,c,a,n,null)}return;case"dialog":G("beforetoggle",e),G("toggle",e),G("cancel",e),G("close",e);break;case"iframe":case"object":G("load",e);break;case"video":case"audio":for(a=0;a<kl.length;a++)G(kl[a],e);break;case"image":G("error",e),G("load",e);break;case"details":G("toggle",e);break;case"embed":case"source":case"link":G("error",e),G("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(s in n)if(n.hasOwnProperty(s)&&(a=n[s],a!=null))switch(s){case"children":case"dangerouslySetInnerHTML":throw Error(N(137,t));default:$(e,t,s,a,n,null)}return;default:if(vs(t)){for(f in n)n.hasOwnProperty(f)&&(a=n[f],a!==void 0&&Gc(e,t,f,a,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(a=n[o],a!=null&&$(e,t,o,a,n,null))}function Ay(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,r=null,o=null,c=null,s=null,f=null;for(p in n){var h=n[p];if(n.hasOwnProperty(p)&&h!=null)switch(p){case"checked":break;case"value":break;case"defaultValue":c=h;default:a.hasOwnProperty(p)||$(e,t,p,null,a,h)}}for(var d in a){var p=a[d];if(h=n[d],a.hasOwnProperty(d)&&(p!=null||h!=null))switch(d){case"type":i=p;break;case"name":l=p;break;case"checked":s=p;break;case"defaultChecked":f=p;break;case"value":r=p;break;case"defaultValue":o=p;break;case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(N(137,t));break;default:p!==h&&$(e,t,d,p,a,h)}}dc(e,r,o,c,s,f,i,l);return;case"select":p=r=o=d=null;for(i in n)if(c=n[i],n.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":p=c;default:a.hasOwnProperty(i)||$(e,t,i,null,a,c)}for(l in a)if(i=a[l],c=n[l],a.hasOwnProperty(l)&&(i!=null||c!=null))switch(l){case"value":d=i;break;case"defaultValue":o=i;break;case"multiple":r=i;default:i!==c&&$(e,t,l,i,a,c)}t=o,n=r,a=p,d!=null?Sa(e,!!n,d,!1):!!a!=!!n&&(t!=null?Sa(e,!!n,t,!0):Sa(e,!!n,n?[]:"",!1));return;case"textarea":p=d=null;for(o in n)if(l=n[o],n.hasOwnProperty(o)&&l!=null&&!a.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:$(e,t,o,null,a,l)}for(r in a)if(l=a[r],i=n[r],a.hasOwnProperty(r)&&(l!=null||i!=null))switch(r){case"value":d=l;break;case"defaultValue":p=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(N(91));break;default:l!==i&&$(e,t,r,l,a,i)}hh(e,d,p);return;case"option":for(var S in n)if(d=n[S],n.hasOwnProperty(S)&&d!=null&&!a.hasOwnProperty(S))switch(S){case"selected":e.selected=!1;break;default:$(e,t,S,null,a,d)}for(c in a)if(d=a[c],p=n[c],a.hasOwnProperty(c)&&d!==p&&(d!=null||p!=null))switch(c){case"selected":e.selected=d&&typeof d!="function"&&typeof d!="symbol";break;default:$(e,t,c,d,a,p)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var b in n)d=n[b],n.hasOwnProperty(b)&&d!=null&&!a.hasOwnProperty(b)&&$(e,t,b,null,a,d);for(s in a)if(d=a[s],p=n[s],a.hasOwnProperty(s)&&d!==p&&(d!=null||p!=null))switch(s){case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(N(137,t));break;default:$(e,t,s,d,a,p)}return;default:if(vs(t)){for(var w in n)d=n[w],n.hasOwnProperty(w)&&d!==void 0&&!a.hasOwnProperty(w)&&Gc(e,t,w,void 0,a,d);for(f in a)d=a[f],p=n[f],!a.hasOwnProperty(f)||d===p||d===void 0&&p===void 0||Gc(e,t,f,d,a,p);return}}for(var g in n)d=n[g],n.hasOwnProperty(g)&&d!=null&&!a.hasOwnProperty(g)&&$(e,t,g,null,a,d);for(h in a)d=a[h],p=n[h],!a.hasOwnProperty(h)||d===p||d==null&&p==null||$(e,t,h,d,a,p)}function Mf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ty(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var l=n[a],i=l.transferSize,r=l.initiatorType,o=l.duration;if(i&&o&&Mf(r)){for(r=0,o=l.responseEnd,a+=1;a<n.length;a++){var c=n[a],s=c.startTime;if(s>o)break;var f=c.transferSize,h=c.initiatorType;f&&Mf(h)&&(c=c.responseEnd,r+=f*(c<o?1:(o-s)/(c-s)))}if(--a,t+=8*(i+r)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qc=null,Xc=null;function vr(e){return e.nodeType===9?e:e.ownerDocument}function Of(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function bv(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Vc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Yo=null;function Cy(){var e=window.event;return e&&e.type==="popstate"?e===Yo?!1:(Yo=e,!0):(Yo=null,!1)}var xv=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,Rf=typeof Promise=="function"?Promise:void 0,jy=typeof queueMicrotask=="function"?queueMicrotask:typeof Rf<"u"?function(e){return Rf.resolve(null).then(e).catch(_y)}:xv;function _y(e){setTimeout(function(){throw e})}function Tn(e){return e==="head"}function Df(e,t){var n=t,a=0;do{var l=n.nextSibling;if(e.removeChild(n),l&&l.nodeType===8)if(n=l.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(l),Ba(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Nl(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Nl(n);for(var i=n.firstChild;i;){var r=i.nextSibling,o=i.nodeName;i[Zl]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=r}}else n==="body"&&Nl(e.ownerDocument.body);n=l}while(n);Ba(t)}function kf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Qc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Qc(n),ms(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function My(e,t,n,a){for(;e.nodeType===1;){var l=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Zl])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ut(e.nextSibling),e===null)break}return null}function Oy(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ut(e.nextSibling),e===null))return null;return e}function Sv(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ut(e.nextSibling),e===null))return null;return e}function Zc(e){return e.data==="$?"||e.data==="$~"}function Kc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ry(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function ut(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Jc=null;function Uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ut(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Hf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function wv(e,t,n){switch(t=vr(n),e){case"html":if(e=t.documentElement,!e)throw Error(N(452));return e;case"head":if(e=t.head,!e)throw Error(N(453));return e;case"body":if(e=t.body,!e)throw Error(N(454));return e;default:throw Error(N(451))}}function Nl(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ms(e)}var ft=new Map,Bf=new Set;function gr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=Z.d;Z.d={f:Dy,r:ky,D:Uy,C:Hy,L:By,m:Ly,X:Gy,S:Yy,M:qy};function Dy(){var e=Kt.f(),t=Qr();return e||t}function ky(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?vm(t):Kt.r(e)}var Ka=typeof document>"u"?null:document;function Ev(e,t,n){var a=Ka;if(a&&typeof t=="string"&&t){var l=it(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof n=="string"&&(l+='[crossorigin="'+n+'"]'),Bf.has(l)||(Bf.add(l),e={rel:e,crossOrigin:n,href:t},a.querySelector(l)===null&&(t=a.createElement("link"),Me(t,"link",e),Ee(t),a.head.appendChild(t)))}}function Uy(e){Kt.D(e),Ev("dns-prefetch",e,null)}function Hy(e,t){Kt.C(e,t),Ev("preconnect",e,t)}function By(e,t,n){Kt.L(e,t,n);var a=Ka;if(a&&e&&t){var l='link[rel="preload"][as="'+it(t)+'"]';t==="image"&&n&&n.imageSrcSet?(l+='[imagesrcset="'+it(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(l+='[imagesizes="'+it(n.imageSizes)+'"]')):l+='[href="'+it(e)+'"]';var i=l;switch(t){case"style":i=Ha(e);break;case"script":i=Ja(e)}ft.has(i)||(e=ae({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ft.set(i,e),a.querySelector(l)!==null||t==="style"&&a.querySelector(Pl(i))||t==="script"&&a.querySelector(Il(i))||(t=a.createElement("link"),Me(t,"link",e),Ee(t),a.head.appendChild(t)))}}function Ly(e,t){Kt.m(e,t);var n=Ka;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+it(a)+'"][href="'+it(e)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ja(e)}if(!ft.has(i)&&(e=ae({rel:"modulepreload",href:e},t),ft.set(i,e),n.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Il(i)))return}a=n.createElement("link"),Me(a,"link",e),Ee(a),n.head.appendChild(a)}}}function Yy(e,t,n){Kt.S(e,t,n);var a=Ka;if(a&&e){var l=xa(a).hoistableStyles,i=Ha(e);t=t||"default";var r=l.get(i);if(!r){var o={loading:0,preload:null};if(r=a.querySelector(Pl(i)))o.loading=5;else{e=ae({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ft.get(i))&&Is(e,n);var c=r=a.createElement("link");Ee(c),Me(c,"link",e),c._p=new Promise(function(s,f){c.onload=s,c.onerror=f}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Li(r,t,a)}r={type:"stylesheet",instance:r,count:1,state:o},l.set(i,r)}}}function Gy(e,t){Kt.X(e,t);var n=Ka;if(n&&e){var a=xa(n).hoistableScripts,l=Ja(e),i=a.get(l);i||(i=n.querySelector(Il(l)),i||(e=ae({src:e,async:!0},t),(t=ft.get(l))&&eu(e,t),i=n.createElement("script"),Ee(i),Me(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function qy(e,t){Kt.M(e,t);var n=Ka;if(n&&e){var a=xa(n).hoistableScripts,l=Ja(e),i=a.get(l);i||(i=n.querySelector(Il(l)),i||(e=ae({src:e,async:!0,type:"module"},t),(t=ft.get(l))&&eu(e,t),i=n.createElement("script"),Ee(i),Me(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Lf(e,t,n,a){var l=(l=fn.current)?gr(l):null;if(!l)throw Error(N(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Ha(n.href),n=xa(l).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Ha(n.href);var i=xa(l).hoistableStyles,r=i.get(e);if(r||(l=l.ownerDocument||l,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=l.querySelector(Pl(e)))&&!i._p&&(r.instance=i,r.state.loading=5),ft.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ft.set(e,n),i||Xy(l,e,n,r.state))),t&&a===null)throw Error(N(528,""));return r}if(t&&a!==null)throw Error(N(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ja(n),n=xa(l).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(N(444,e))}}function Ha(e){return'href="'+it(e)+'"'}function Pl(e){return'link[rel="stylesheet"]['+e+"]"}function Nv(e){return ae({},e,{"data-precedence":e.precedence,precedence:null})}function Xy(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Me(t,"link",n),Ee(t),e.head.appendChild(t))}function Ja(e){return'[src="'+it(e)+'"]'}function Il(e){return"script[async]"+e}function Yf(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+it(n.href)+'"]');if(a)return t.instance=a,Ee(a),a;var l=ae({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ee(a),Me(a,"style",l),Li(a,n.precedence,e),t.instance=a;case"stylesheet":l=Ha(n.href);var i=e.querySelector(Pl(l));if(i)return t.state.loading|=4,t.instance=i,Ee(i),i;a=Nv(n),(l=ft.get(l))&&Is(a,l),i=(e.ownerDocument||e).createElement("link"),Ee(i);var r=i;return r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),Me(i,"link",a),t.state.loading|=4,Li(i,n.precedence,e),t.instance=i;case"script":return i=Ja(n.src),(l=e.querySelector(Il(i)))?(t.instance=l,Ee(l),l):(a=n,(l=ft.get(i))&&(a=ae({},n),eu(a,l)),e=e.ownerDocument||e,l=e.createElement("script"),Ee(l),Me(l,"link",a),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(N(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(a=t.instance,t.state.loading|=4,Li(a,n.precedence,e));return t.instance}function Li(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,r=0;r<a.length;r++){var o=a[r];if(o.dataset.precedence===t)i=o;else if(i!==l)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Is(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function eu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Yi=null;function Gf(e,t,n){if(Yi===null){var a=new Map,l=Yi=new Map;l.set(n,a)}else l=Yi,a=l.get(n),a||(a=new Map,l.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),l=0;l<n.length;l++){var i=n[l];if(!(i[Zl]||i[ze]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var o=a.get(r);o?o.push(i):a.set(r,[i])}}return a}function qf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Vy(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Av(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function Qy(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var l=Ha(a.href),i=t.querySelector(Pl(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=pr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Ee(i);return}i=t.ownerDocument||t,a=Nv(a),(l=ft.get(l))&&Is(a,l),i=i.createElement("link"),Ee(i);var r=i;r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),Me(i,"link",a),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=pr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Go=0;function Zy(e,t){return e.stylesheets&&e.count===0&&Gi(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&Gi(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&Go===0&&(Go=62500*Ty());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Gi(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>Go?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(l)}}:null}function pr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Gi(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yr=null;function Gi(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yr=new Map,t.forEach(Ky,e),yr=null,pr.call(e))}function Ky(e,t){if(!(t.state.loading&4)){var n=yr.get(e);if(n)var a=n.get(null);else{n=new Map,yr.set(e,n);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var r=l[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),a=r)}a&&n.set(null,a)}l=t.instance,r=l.getAttribute("data-precedence"),i=n.get(r)||a,i===a&&n.set(null,l),n.set(r,l),this.count++,a=pr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Hl={$$typeof:Ut,Provider:null,Consumer:null,_currentValue:Dn,_currentValue2:Dn,_threadCount:0};function Jy(e,t,n,a,l,i,r,o,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=so(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=so(0),this.hiddenUpdates=so(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function Tv(e,t,n,a,l,i,r,o,c,s,f,h){return e=new Jy(e,t,n,r,c,s,f,h,o),t=1,i===!0&&(t|=24),i=Ze(3,null,null,t),e.current=i,i.stateNode=e,t=Ts(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:a,isDehydrated:n,cache:t},js(i),e}function Cv(e){return e?(e=ga,e):ga}function zv(e,t,n,a,l,i){l=Cv(l),a.context===null?a.context=l:a.pendingContext=l,a=hn(t),a.payload={element:n},i=i===void 0?null:i,i!==null&&(a.callback=i),n=mn(e,a,t),n!==null&&(Ye(n,e,t),gl(n,e,t))}function Xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function tu(e,t){Xf(e,t),(e=e.alternate)&&Xf(e,t)}function jv(e){if(e.tag===13||e.tag===31){var t=Jn(e,67108864);t!==null&&Ye(t,e,67108864),tu(e,67108864)}}function Vf(e){if(e.tag===13||e.tag===31){var t=Fe();t=ds(t);var n=Jn(e,t);n!==null&&Ye(n,e,t),tu(e,t)}}var br=!0;function Wy(e,t,n,a){var l=k.T;k.T=null;var i=Z.p;try{Z.p=2,nu(e,t,n,a)}finally{Z.p=i,k.T=l}}function $y(e,t,n,a){var l=k.T;k.T=null;var i=Z.p;try{Z.p=8,nu(e,t,n,a)}finally{Z.p=i,k.T=l}}function nu(e,t,n,a){if(br){var l=Wc(a);if(l===null)Lo(e,t,a,xr,n),Qf(e,a);else if(Py(l,e,t,n,a))a.stopPropagation();else if(Qf(e,a),t&4&&-1<Fy.indexOf(e)){for(;l!==null;){var i=Xa(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=Mn(i.pendingLanes);if(r!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var c=1<<31-$e(r);o.entanglements[1]|=c,r&=~c}At(i),!(Q&6)&&(sr=Je()+500,Fl(0,!1))}}break;case 31:case 13:o=Jn(i,2),o!==null&&Ye(o,i,2),Qr(),tu(i,2)}if(i=Wc(a),i===null&&Lo(e,t,a,xr,n),i===l)break;l=i}l!==null&&a.stopPropagation()}else Lo(e,t,a,null,n)}}function Wc(e){return e=gs(e),au(e)}var xr=null;function au(e){if(xr=null,e=ua(e),e!==null){var t=ql(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=Wd(t),e!==null)return e;e=null}else if(n===31){if(e=$d(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return xr=e,null}function _v(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(U0()){case eh:return 2;case th:return 8;case Wi:case H0:return 32;case nh:return 268435456;default:return 32}default:return 32}}var $c=!1,pn=null,yn=null,bn=null,Bl=new Map,Ll=new Map,an=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qf(e,t){switch(e){case"focusin":case"focusout":pn=null;break;case"dragenter":case"dragleave":yn=null;break;case"mouseover":case"mouseout":bn=null;break;case"pointerover":case"pointerout":Bl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ll.delete(t.pointerId)}}function ll(e,t,n,a,l,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},t!==null&&(t=Xa(t),t!==null&&jv(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function Py(e,t,n,a,l){switch(t){case"focusin":return pn=ll(pn,e,t,n,a,l),!0;case"dragenter":return yn=ll(yn,e,t,n,a,l),!0;case"mouseover":return bn=ll(bn,e,t,n,a,l),!0;case"pointerover":var i=l.pointerId;return Bl.set(i,ll(Bl.get(i)||null,e,t,n,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Ll.set(i,ll(Ll.get(i)||null,e,t,n,a,l)),!0}return!1}function Mv(e){var t=ua(e.target);if(t!==null){var n=ql(t);if(n!==null){if(t=n.tag,t===13){if(t=Wd(n),t!==null){e.blockedOn=t,zu(e.priority,function(){Vf(n)});return}}else if(t===31){if(t=$d(n),t!==null){e.blockedOn=t,zu(e.priority,function(){Vf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wc(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);mc=a,n.target.dispatchEvent(a),mc=null}else return t=Xa(n),t!==null&&jv(t),e.blockedOn=n,!1;t.shift()}return!0}function Zf(e,t,n){qi(e)&&n.delete(t)}function Iy(){$c=!1,pn!==null&&qi(pn)&&(pn=null),yn!==null&&qi(yn)&&(yn=null),bn!==null&&qi(bn)&&(bn=null),Bl.forEach(Zf),Ll.forEach(Zf)}function pi(e,t){e.blockedOn===t&&(e.blockedOn=null,$c||($c=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,Iy)))}var yi=null;function Kf(e){yi!==e&&(yi=e,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,function(){yi===e&&(yi=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],l=e[t+2];if(typeof a!="function"){if(au(a||n)===null)continue;break}var i=Xa(n);i!==null&&(e.splice(t,3),t-=3,_c(i,{pending:!0,data:l,method:n.method,action:a},a,l))}}))}function Ba(e){function t(c){return pi(c,e)}pn!==null&&pi(pn,e),yn!==null&&pi(yn,e),bn!==null&&pi(bn,e),Bl.forEach(t),Ll.forEach(t);for(var n=0;n<an.length;n++){var a=an[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<an.length&&(n=an[0],n.blockedOn===null);)Mv(n),n.blockedOn===null&&an.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var l=n[a],i=n[a+1],r=l[Ge]||null;if(typeof i=="function")r||Kf(n);else if(r){var o=null;if(i&&i.hasAttribute("formAction")){if(l=i,r=i[Ge]||null)o=r.formAction;else if(au(l)!==null)continue}else o=r.action;typeof o=="function"?n[a+1]=o:(n.splice(a,3),a-=3),Kf(n)}}}function Ov(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return l=r})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function lu(e){this._internalRoot=e}Jr.prototype.render=lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));var n=t.current,a=Fe();zv(n,a,e,t,null,null)};Jr.prototype.unmount=lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zv(e.current,2,null,e,null,null),Qr(),t[qa]=null}};function Jr(e){this._internalRoot=e}Jr.prototype.unstable_scheduleHydration=function(e){if(e){var t=oh();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&Mv(e)}};var Jf=Kd.version;if(Jf!=="19.2.0")throw Error(N(527,Jf,"19.2.0"));Z.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=j0(t),e=e!==null?Fd(e):null,e=e===null?null:e.stateNode,e};var eb={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:k,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bi.isDisabled&&bi.supportsFiber)try{Xl=bi.inject(eb),We=bi}catch{}}Mr.createRoot=function(e,t){if(!Jd(e))throw Error(N(299));var n=!1,a="",l=Em,i=Nm,r=Am;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=Tv(e,1,!1,null,null,n,a,null,l,i,r,Ov),e[qa]=t.current,Ps(e),new lu(t)};Mr.hydrateRoot=function(e,t,n){if(!Jd(e))throw Error(N(299));var a=!1,l="",i=Em,r=Nm,o=Am,c=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),t=Tv(e,1,!0,t,n??null,a,l,c,i,r,o,Ov),t.context=Cv(null),n=t.current,a=Fe(),a=ds(a),l=hn(a),l.callback=null,mn(n,l,a),n=a,t.current.lanes=n,Ql(t,n),At(t),e[qa]=t.current,Ps(e),new Jr(t)};Mr.version="19.2.0";function Rv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rv)}catch(e){console.error(e)}}Rv(),Gd.exports=Mr;var tb=Gd.exports;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yl(){return Yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Yl.apply(this,arguments)}var un;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(un||(un={}));const Wf="popstate";function nb(e){e===void 0&&(e={});function t(a,l){let{pathname:i,search:r,hash:o}=a.location;return Fc("",{pathname:i,search:r,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(a,l){return typeof l=="string"?l:Sr(l)}return lb(t,n,null,e)}function ge(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function iu(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function ab(){return Math.random().toString(36).substr(2,8)}function $f(e,t){return{usr:e.state,key:e.key,idx:t}}function Fc(e,t,n,a){return n===void 0&&(n=null),Yl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Wa(t):t,{state:n,key:t&&t.key||a||ab()})}function Sr(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Wa(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function lb(e,t,n,a){a===void 0&&(a={});let{window:l=document.defaultView,v5Compat:i=!1}=a,r=l.history,o=un.Pop,c=null,s=f();s==null&&(s=0,r.replaceState(Yl({},r.state,{idx:s}),""));function f(){return(r.state||{idx:null}).idx}function h(){o=un.Pop;let w=f(),g=w==null?null:w-s;s=w,c&&c({action:o,location:b.location,delta:g})}function d(w,g){o=un.Push;let v=Fc(b.location,w,g);n&&n(v,w),s=f()+1;let y=$f(v,s),x=b.createHref(v);try{r.pushState(y,"",x)}catch(C){if(C instanceof DOMException&&C.name==="DataCloneError")throw C;l.location.assign(x)}i&&c&&c({action:o,location:b.location,delta:1})}function p(w,g){o=un.Replace;let v=Fc(b.location,w,g);n&&n(v,w),s=f();let y=$f(v,s),x=b.createHref(v);r.replaceState(y,"",x),i&&c&&c({action:o,location:b.location,delta:0})}function S(w){let g=l.location.origin!=="null"?l.location.origin:l.location.href,v=typeof w=="string"?w:Sr(w);return v=v.replace(/ $/,"%20"),ge(g,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,g)}let b={get action(){return o},get location(){return e(l,r)},listen(w){if(c)throw new Error("A history only accepts one active listener");return l.addEventListener(Wf,h),c=w,()=>{l.removeEventListener(Wf,h),c=null}},createHref(w){return t(l,w)},createURL:S,encodeLocation(w){let g=S(w);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:d,replace:p,go(w){return r.go(w)}};return b}var Ff;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ff||(Ff={}));function ib(e,t,n){return n===void 0&&(n="/"),rb(e,t,n,!1)}function rb(e,t,n,a){let l=typeof t=="string"?Wa(t):t,i=ru(l.pathname||"/",n);if(i==null)return null;let r=Dv(e);ob(r);let o=null;for(let c=0;o==null&&c<r.length;++c){let s=yb(i);o=gb(r[c],s,a)}return o}function Dv(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let l=(i,r,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:r,route:i};c.relativePath.startsWith("/")&&(ge(c.relativePath.startsWith(a),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(a.length));let s=xn([a,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(ge(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+s+'".')),Dv(i.children,t,f,s)),!(i.path==null&&!i.index)&&t.push({path:s,score:mb(s,i.index),routesMeta:f})};return e.forEach((i,r)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))l(i,r);else for(let c of kv(i.path))l(i,r,c)}),t}function kv(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,l=n.endsWith("?"),i=n.replace(/\?$/,"");if(a.length===0)return l?[i,""]:[i];let r=kv(a.join("/")),o=[];return o.push(...r.map(c=>c===""?i:[i,c].join("/"))),l&&o.push(...r),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function ob(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:vb(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const cb=/^:[\w-]+$/,sb=3,ub=2,fb=1,db=10,hb=-2,Pf=e=>e==="*";function mb(e,t){let n=e.split("/"),a=n.length;return n.some(Pf)&&(a+=hb),t&&(a+=ub),n.filter(l=>!Pf(l)).reduce((l,i)=>l+(cb.test(i)?sb:i===""?fb:db),a)}function vb(e,t){return e.length===t.length&&e.slice(0,-1).every((a,l)=>a===t[l])?e[e.length-1]-t[t.length-1]:0}function gb(e,t,n){n===void 0&&(n=!1);let{routesMeta:a}=e,l={},i="/",r=[];for(let o=0;o<a.length;++o){let c=a[o],s=o===a.length-1,f=i==="/"?t:t.slice(i.length)||"/",h=If({path:c.relativePath,caseSensitive:c.caseSensitive,end:s},f),d=c.route;if(!h&&s&&n&&!a[a.length-1].route.index&&(h=If({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!h)return null;Object.assign(l,h.params),r.push({params:l,pathname:xn([i,h.pathname]),pathnameBase:Eb(xn([i,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(i=xn([i,h.pathnameBase]))}return r}function If(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=pb(e.path,e.caseSensitive,e.end),l=t.match(n);if(!l)return null;let i=l[0],r=i.replace(/(.)\/+$/,"$1"),o=l.slice(1);return{params:a.reduce((s,f,h)=>{let{paramName:d,isOptional:p}=f;if(d==="*"){let b=o[h]||"";r=i.slice(0,i.length-b.length).replace(/(.)\/+$/,"$1")}const S=o[h];return p&&!S?s[d]=void 0:s[d]=(S||"").replace(/%2F/g,"/"),s},{}),pathname:i,pathnameBase:r,pattern:e}}function pb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),iu(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],l="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,o,c)=>(a.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),l+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?l+="\\/*$":e!==""&&e!=="/"&&(l+="(?:(?=\\/|$))"),[new RegExp(l,t?void 0:"i"),a]}function yb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return iu(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function ru(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const bb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xb=e=>bb.test(e);function Sb(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:l=""}=typeof e=="string"?Wa(e):e,i;if(n)if(xb(n))i=n;else{if(n.includes("//")){let r=n;n=n.replace(/\/\/+/g,"/"),iu(!1,"Pathnames cannot have embedded double slashes - normalizing "+(r+" -> "+n))}n.startsWith("/")?i=ed(n.substring(1),"/"):i=ed(n,t)}else i=t;return{pathname:i,search:Nb(a),hash:Ab(l)}}function ed(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(l=>{l===".."?n.length>1&&n.pop():l!=="."&&n.push(l)}),n.length>1?n.join("/"):"/"}function qo(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function wb(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Uv(e,t){let n=wb(e);return t?n.map((a,l)=>l===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function Hv(e,t,n,a){a===void 0&&(a=!1);let l;typeof e=="string"?l=Wa(e):(l=Yl({},e),ge(!l.pathname||!l.pathname.includes("?"),qo("?","pathname","search",l)),ge(!l.pathname||!l.pathname.includes("#"),qo("#","pathname","hash",l)),ge(!l.search||!l.search.includes("#"),qo("#","search","hash",l)));let i=e===""||l.pathname==="",r=i?"/":l.pathname,o;if(r==null)o=n;else{let h=t.length-1;if(!a&&r.startsWith("..")){let d=r.split("/");for(;d[0]==="..";)d.shift(),h-=1;l.pathname=d.join("/")}o=h>=0?t[h]:"/"}let c=Sb(l,o),s=r&&r!=="/"&&r.endsWith("/"),f=(i||r===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(s||f)&&(c.pathname+="/"),c}const xn=e=>e.join("/").replace(/\/\/+/g,"/"),Eb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Nb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ab=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Tb(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Bv=["post","put","patch","delete"];new Set(Bv);const Cb=["get",...Bv];new Set(Cb);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Gl(){return Gl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Gl.apply(this,arguments)}const ou=m.createContext(null),zb=m.createContext(null),$n=m.createContext(null),Wr=m.createContext(null),Fn=m.createContext({outlet:null,matches:[],isDataRoute:!1}),Lv=m.createContext(null);function jb(e,t){let{relative:n}=t===void 0?{}:t;ei()||ge(!1);let{basename:a,navigator:l}=m.useContext($n),{hash:i,pathname:r,search:o}=Gv(e,{relative:n}),c=r;return a!=="/"&&(c=r==="/"?a:xn([a,r])),l.createHref({pathname:c,search:o,hash:i})}function ei(){return m.useContext(Wr)!=null}function $r(){return ei()||ge(!1),m.useContext(Wr).location}function Yv(e){m.useContext($n).static||m.useLayoutEffect(e)}function _b(){let{isDataRoute:e}=m.useContext(Fn);return e?Xb():Mb()}function Mb(){ei()||ge(!1);let e=m.useContext(ou),{basename:t,future:n,navigator:a}=m.useContext($n),{matches:l}=m.useContext(Fn),{pathname:i}=$r(),r=JSON.stringify(Uv(l,n.v7_relativeSplatPath)),o=m.useRef(!1);return Yv(()=>{o.current=!0}),m.useCallback(function(s,f){if(f===void 0&&(f={}),!o.current)return;if(typeof s=="number"){a.go(s);return}let h=Hv(s,JSON.parse(r),i,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:xn([t,h.pathname])),(f.replace?a.replace:a.push)(h,f.state,f)},[t,a,r,i,e])}function Gv(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=m.useContext($n),{matches:l}=m.useContext(Fn),{pathname:i}=$r(),r=JSON.stringify(Uv(l,a.v7_relativeSplatPath));return m.useMemo(()=>Hv(e,JSON.parse(r),i,n==="path"),[e,r,i,n])}function Ob(e,t){return Rb(e,t)}function Rb(e,t,n,a){ei()||ge(!1);let{navigator:l}=m.useContext($n),{matches:i}=m.useContext(Fn),r=i[i.length-1],o=r?r.params:{};r&&r.pathname;let c=r?r.pathnameBase:"/";r&&r.route;let s=$r(),f;if(t){var h;let w=typeof t=="string"?Wa(t):t;c==="/"||(h=w.pathname)!=null&&h.startsWith(c)||ge(!1),f=w}else f=s;let d=f.pathname||"/",p=d;if(c!=="/"){let w=c.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(w.length).join("/")}let S=ib(e,{pathname:p}),b=Bb(S&&S.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:xn([c,l.encodeLocation?l.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?c:xn([c,l.encodeLocation?l.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n,a);return t&&b?m.createElement(Wr.Provider,{value:{location:Gl({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:un.Pop}},b):b}function Db(){let e=qb(),t=Tb(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,l={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},t),n?m.createElement("pre",{style:l},n):null,i)}const kb=m.createElement(Db,null);class Ub extends m.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?m.createElement(Fn.Provider,{value:this.props.routeContext},m.createElement(Lv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hb(e){let{routeContext:t,match:n,children:a}=e,l=m.useContext(ou);return l&&l.static&&l.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=n.route.id),m.createElement(Fn.Provider,{value:t},a)}function Bb(e,t,n,a){var l;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=a)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let r=e,o=(l=n)==null?void 0:l.errors;if(o!=null){let f=r.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);f>=0||ge(!1),r=r.slice(0,Math.min(r.length,f+1))}let c=!1,s=-1;if(n&&a&&a.v7_partialHydration)for(let f=0;f<r.length;f++){let h=r[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(s=f),h.route.id){let{loaderData:d,errors:p}=n,S=h.route.loader&&d[h.route.id]===void 0&&(!p||p[h.route.id]===void 0);if(h.route.lazy||S){c=!0,s>=0?r=r.slice(0,s+1):r=[r[0]];break}}}return r.reduceRight((f,h,d)=>{let p,S=!1,b=null,w=null;n&&(p=o&&h.route.id?o[h.route.id]:void 0,b=h.route.errorElement||kb,c&&(s<0&&d===0?(Vb("route-fallback",!1),S=!0,w=null):s===d&&(S=!0,w=h.route.hydrateFallbackElement||null)));let g=t.concat(r.slice(0,d+1)),v=()=>{let y;return p?y=b:S?y=w:h.route.Component?y=m.createElement(h.route.Component,null):h.route.element?y=h.route.element:y=f,m.createElement(Hb,{match:h,routeContext:{outlet:f,matches:g,isDataRoute:n!=null},children:y})};return n&&(h.route.ErrorBoundary||h.route.errorElement||d===0)?m.createElement(Ub,{location:n.location,revalidation:n.revalidation,component:b,error:p,children:v(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):v()},null)}var qv=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(qv||{}),wr=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(wr||{});function Lb(e){let t=m.useContext(ou);return t||ge(!1),t}function Yb(e){let t=m.useContext(zb);return t||ge(!1),t}function Gb(e){let t=m.useContext(Fn);return t||ge(!1),t}function Xv(e){let t=Gb(),n=t.matches[t.matches.length-1];return n.route.id||ge(!1),n.route.id}function qb(){var e;let t=m.useContext(Lv),n=Yb(wr.UseRouteError),a=Xv(wr.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[a]}function Xb(){let{router:e}=Lb(qv.UseNavigateStable),t=Xv(wr.UseNavigateStable),n=m.useRef(!1);return Yv(()=>{n.current=!0}),m.useCallback(function(l,i){i===void 0&&(i={}),n.current&&(typeof l=="number"?e.navigate(l):e.navigate(l,Gl({fromRouteId:t},i)))},[e,t])}const td={};function Vb(e,t,n){!t&&!td[e]&&(td[e]=!0)}function Qb(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Xi(e){ge(!1)}function Zb(e){let{basename:t="/",children:n=null,location:a,navigationType:l=un.Pop,navigator:i,static:r=!1,future:o}=e;ei()&&ge(!1);let c=t.replace(/^\/*/,"/"),s=m.useMemo(()=>({basename:c,navigator:i,static:r,future:Gl({v7_relativeSplatPath:!1},o)}),[c,o,i,r]);typeof a=="string"&&(a=Wa(a));let{pathname:f="/",search:h="",hash:d="",state:p=null,key:S="default"}=a,b=m.useMemo(()=>{let w=ru(f,c);return w==null?null:{location:{pathname:w,search:h,hash:d,state:p,key:S},navigationType:l}},[c,f,h,d,p,S,l]);return b==null?null:m.createElement($n.Provider,{value:s},m.createElement(Wr.Provider,{children:n,value:b}))}function Kb(e){let{children:t,location:n}=e;return Ob(Pc(t),n)}new Promise(()=>{});function Pc(e,t){t===void 0&&(t=[]);let n=[];return m.Children.forEach(e,(a,l)=>{if(!m.isValidElement(a))return;let i=[...t,l];if(a.type===m.Fragment){n.push.apply(n,Pc(a.props.children,i));return}a.type!==Xi&&ge(!1),!a.props.index||!a.props.children||ge(!1);let r={id:a.props.id||i.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(r.children=Pc(a.props.children,i)),n.push(r)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ic(){return Ic=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Ic.apply(this,arguments)}function Jb(e,t){if(e==null)return{};var n={},a=Object.keys(e),l,i;for(i=0;i<a.length;i++)l=a[i],!(t.indexOf(l)>=0)&&(n[l]=e[l]);return n}function Wb(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function $b(e,t){return e.button===0&&(!t||t==="_self")&&!Wb(e)}const Fb=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Pb="6";try{window.__reactRouterVersion=Pb}catch{}const Ib="startTransition",nd=_r[Ib];function e1(e){let{basename:t,children:n,future:a,window:l}=e,i=m.useRef();i.current==null&&(i.current=nb({window:l,v5Compat:!0}));let r=i.current,[o,c]=m.useState({action:r.action,location:r.location}),{v7_startTransition:s}=a||{},f=m.useCallback(h=>{s&&nd?nd(()=>c(h)):c(h)},[c,s]);return m.useLayoutEffect(()=>r.listen(f),[r,f]),m.useEffect(()=>Qb(a),[a]),m.createElement(Zb,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:r,future:a})}const t1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",n1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cu=m.forwardRef(function(t,n){let{onClick:a,relative:l,reloadDocument:i,replace:r,state:o,target:c,to:s,preventScrollReset:f,viewTransition:h}=t,d=Jb(t,Fb),{basename:p}=m.useContext($n),S,b=!1;if(typeof s=="string"&&n1.test(s)&&(S=s,t1))try{let y=new URL(window.location.href),x=s.startsWith("//")?new URL(y.protocol+s):new URL(s),C=ru(x.pathname,p);x.origin===y.origin&&C!=null?s=C+x.search+x.hash:b=!0}catch{}let w=jb(s,{relative:l}),g=a1(s,{replace:r,state:o,target:c,preventScrollReset:f,relative:l,viewTransition:h});function v(y){a&&a(y),y.defaultPrevented||g(y)}return m.createElement("a",Ic({},d,{href:S||w,onClick:b||i?a:v,ref:n,target:c}))});var ad;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ad||(ad={}));var ld;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ld||(ld={}));function a1(e,t){let{target:n,replace:a,state:l,preventScrollReset:i,relative:r,viewTransition:o}=t===void 0?{}:t,c=_b(),s=$r(),f=Gv(e,{relative:r});return m.useCallback(h=>{if($b(h,n)){h.preventDefault();let d=a!==void 0?a:Sr(s)===Sr(f);c(e,{replace:d,state:l,preventScrollReset:i,relative:r,viewTransition:o})}},[s,c,f,a,l,n,e,i,r,o])}function id(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Fr(...e){return t=>{let n=!1;const a=e.map(l=>{const i=id(l,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let l=0;l<a.length;l++){const i=a[l];typeof i=="function"?i():id(e[l],null)}}}}function et(...e){return m.useCallback(Fr(...e),e)}var l1=Symbol.for("react.lazy"),Er=_r[" use ".trim().toString()];function i1(e){return typeof e=="object"&&e!==null&&"then"in e}function Vv(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===l1&&"_payload"in e&&i1(e._payload)}function r1(e){const t=o1(e),n=m.forwardRef((a,l)=>{let{children:i,...r}=a;Vv(i)&&typeof Er=="function"&&(i=Er(i._payload));const o=m.Children.toArray(i),c=o.find(s1);if(c){const s=c.props.children,f=o.map(h=>h===c?m.Children.count(s)>1?m.Children.only(null):m.isValidElement(s)?s.props.children:null:h);return u.jsx(t,{...r,ref:l,children:m.isValidElement(s)?m.cloneElement(s,void 0,f):null})}return u.jsx(t,{...r,ref:l,children:i})});return n.displayName=`${e}.Slot`,n}var Qv=r1("Slot");function o1(e){const t=m.forwardRef((n,a)=>{let{children:l,...i}=n;if(Vv(l)&&typeof Er=="function"&&(l=Er(l._payload)),m.isValidElement(l)){const r=f1(l),o=u1(i,l.props);return l.type!==m.Fragment&&(o.ref=a?Fr(a,r):r),m.cloneElement(l,o)}return m.Children.count(l)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var c1=Symbol("radix.slottable");function s1(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===c1}function u1(e,t){const n={...t};for(const a in t){const l=e[a],i=t[a];/^on[A-Z]/.test(a)?l&&i?n[a]=(...o)=>{const c=i(...o);return l(...o),c}:l&&(n[a]=l):a==="style"?n[a]={...l,...i}:a==="className"&&(n[a]=[l,i].filter(Boolean).join(" "))}return{...e,...n}}function f1(e){var a,l;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(l=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:l.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Zv(e){var t,n,a="";if(typeof e=="string"||typeof e=="number")a+=e;else if(typeof e=="object")if(Array.isArray(e)){var l=e.length;for(t=0;t<l;t++)e[t]&&(n=Zv(e[t]))&&(a&&(a+=" "),a+=n)}else for(n in e)e[n]&&(a&&(a+=" "),a+=n);return a}function Pr(){for(var e,t,n=0,a="",l=arguments.length;n<l;n++)(e=arguments[n])&&(t=Zv(e))&&(a&&(a+=" "),a+=t);return a}const rd=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,od=Pr,Kv=(e,t)=>n=>{var a;if((t==null?void 0:t.variants)==null)return od(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:l,defaultVariants:i}=t,r=Object.keys(l).map(s=>{const f=n==null?void 0:n[s],h=i==null?void 0:i[s];if(f===null)return null;const d=rd(f)||rd(h);return l[s][d]}),o=n&&Object.entries(n).reduce((s,f)=>{let[h,d]=f;return d===void 0||(s[h]=d),s},{}),c=t==null||(a=t.compoundVariants)===null||a===void 0?void 0:a.reduce((s,f)=>{let{class:h,className:d,...p}=f;return Object.entries(p).every(S=>{let[b,w]=S;return Array.isArray(w)?w.includes({...i,...o}[b]):{...i,...o}[b]===w})?[...s,h,d]:s},[]);return od(e,r,c,n==null?void 0:n.class,n==null?void 0:n.className)},d1=(e,t)=>{const n=new Array(e.length+t.length);for(let a=0;a<e.length;a++)n[a]=e[a];for(let a=0;a<t.length;a++)n[e.length+a]=t[a];return n},h1=(e,t)=>({classGroupId:e,validator:t}),Jv=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),Nr="-",cd=[],m1="arbitrary..",v1=e=>{const t=p1(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:a}=e;return{getClassGroupId:r=>{if(r.startsWith("[")&&r.endsWith("]"))return g1(r);const o=r.split(Nr),c=o[0]===""&&o.length>1?1:0;return Wv(o,c,t)},getConflictingClassGroupIds:(r,o)=>{if(o){const c=a[r],s=n[r];return c?s?d1(s,c):c:s||cd}return n[r]||cd}}},Wv=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const l=e[t],i=n.nextPart.get(l);if(i){const s=Wv(e,t+1,i);if(s)return s}const r=n.validators;if(r===null)return;const o=t===0?e.join(Nr):e.slice(t).join(Nr),c=r.length;for(let s=0;s<c;s++){const f=r[s];if(f.validator(o))return f.classGroupId}},g1=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),a=t.slice(0,n);return a?m1+a:void 0})(),p1=e=>{const{theme:t,classGroups:n}=e;return y1(n,t)},y1=(e,t)=>{const n=Jv();for(const a in e){const l=e[a];su(l,n,a,t)}return n},su=(e,t,n,a)=>{const l=e.length;for(let i=0;i<l;i++){const r=e[i];b1(r,t,n,a)}},b1=(e,t,n,a)=>{if(typeof e=="string"){x1(e,t,n);return}if(typeof e=="function"){S1(e,t,n,a);return}w1(e,t,n,a)},x1=(e,t,n)=>{const a=e===""?t:$v(t,e);a.classGroupId=n},S1=(e,t,n,a)=>{if(E1(e)){su(e(a),t,n,a);return}t.validators===null&&(t.validators=[]),t.validators.push(h1(n,e))},w1=(e,t,n,a)=>{const l=Object.entries(e),i=l.length;for(let r=0;r<i;r++){const[o,c]=l[r];su(c,$v(t,o),n,a)}},$v=(e,t)=>{let n=e;const a=t.split(Nr),l=a.length;for(let i=0;i<l;i++){const r=a[i];let o=n.nextPart.get(r);o||(o=Jv(),n.nextPart.set(r,o)),n=o}return n},E1=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,N1=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),a=Object.create(null);const l=(i,r)=>{n[i]=r,t++,t>e&&(t=0,a=n,n=Object.create(null))};return{get(i){let r=n[i];if(r!==void 0)return r;if((r=a[i])!==void 0)return l(i,r),r},set(i,r){i in n?n[i]=r:l(i,r)}}},es="!",sd=":",A1=[],ud=(e,t,n,a,l)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:a,isExternal:l}),T1=e=>{const{prefix:t,experimentalParseClassName:n}=e;let a=l=>{const i=[];let r=0,o=0,c=0,s;const f=l.length;for(let b=0;b<f;b++){const w=l[b];if(r===0&&o===0){if(w===sd){i.push(l.slice(c,b)),c=b+1;continue}if(w==="/"){s=b;continue}}w==="["?r++:w==="]"?r--:w==="("?o++:w===")"&&o--}const h=i.length===0?l:l.slice(c);let d=h,p=!1;h.endsWith(es)?(d=h.slice(0,-1),p=!0):h.startsWith(es)&&(d=h.slice(1),p=!0);const S=s&&s>c?s-c:void 0;return ud(i,p,d,S)};if(t){const l=t+sd,i=a;a=r=>r.startsWith(l)?i(r.slice(l.length)):ud(A1,!1,r,void 0,!0)}if(n){const l=a;a=i=>n({className:i,parseClassName:l})}return a},C1=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,a)=>{t.set(n,1e6+a)}),n=>{const a=[];let l=[];for(let i=0;i<n.length;i++){const r=n[i],o=r[0]==="[",c=t.has(r);o||c?(l.length>0&&(l.sort(),a.push(...l),l=[]),a.push(r)):l.push(r)}return l.length>0&&(l.sort(),a.push(...l)),a}},z1=e=>({cache:N1(e.cacheSize),parseClassName:T1(e),sortModifiers:C1(e),...v1(e)}),j1=/\s+/,_1=(e,t)=>{const{parseClassName:n,getClassGroupId:a,getConflictingClassGroupIds:l,sortModifiers:i}=t,r=[],o=e.trim().split(j1);let c="";for(let s=o.length-1;s>=0;s-=1){const f=o[s],{isExternal:h,modifiers:d,hasImportantModifier:p,baseClassName:S,maybePostfixModifierPosition:b}=n(f);if(h){c=f+(c.length>0?" "+c:c);continue}let w=!!b,g=a(w?S.substring(0,b):S);if(!g){if(!w){c=f+(c.length>0?" "+c:c);continue}if(g=a(S),!g){c=f+(c.length>0?" "+c:c);continue}w=!1}const v=d.length===0?"":d.length===1?d[0]:i(d).join(":"),y=p?v+es:v,x=y+g;if(r.indexOf(x)>-1)continue;r.push(x);const C=l(g,w);for(let M=0;M<C.length;++M){const T=C[M];r.push(y+T)}c=f+(c.length>0?" "+c:c)}return c},M1=(...e)=>{let t=0,n,a,l="";for(;t<e.length;)(n=e[t++])&&(a=Fv(n))&&(l&&(l+=" "),l+=a);return l},Fv=e=>{if(typeof e=="string")return e;let t,n="";for(let a=0;a<e.length;a++)e[a]&&(t=Fv(e[a]))&&(n&&(n+=" "),n+=t);return n},O1=(e,...t)=>{let n,a,l,i;const r=c=>{const s=t.reduce((f,h)=>h(f),e());return n=z1(s),a=n.cache.get,l=n.cache.set,i=o,o(c)},o=c=>{const s=a(c);if(s)return s;const f=_1(c,n);return l(c,f),f};return i=r,(...c)=>i(M1(...c))},R1=[],ye=e=>{const t=n=>n[e]||R1;return t.isThemeGetter=!0,t},Pv=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,Iv=/^\((?:(\w[\w-]*):)?(.+)\)$/i,D1=/^\d+\/\d+$/,k1=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,U1=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,H1=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,B1=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,L1=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,ta=e=>D1.test(e),L=e=>!!e&&!Number.isNaN(Number(e)),$t=e=>!!e&&Number.isInteger(Number(e)),Xo=e=>e.endsWith("%")&&L(e.slice(0,-1)),Ot=e=>k1.test(e),Y1=()=>!0,G1=e=>U1.test(e)&&!H1.test(e),eg=()=>!1,q1=e=>B1.test(e),X1=e=>L1.test(e),V1=e=>!O(e)&&!R(e),Q1=e=>$a(e,ag,eg),O=e=>Pv.test(e),jn=e=>$a(e,lg,G1),Vo=e=>$a(e,$1,L),fd=e=>$a(e,tg,eg),Z1=e=>$a(e,ng,X1),xi=e=>$a(e,ig,q1),R=e=>Iv.test(e),il=e=>Fa(e,lg),K1=e=>Fa(e,F1),dd=e=>Fa(e,tg),J1=e=>Fa(e,ag),W1=e=>Fa(e,ng),Si=e=>Fa(e,ig,!0),$a=(e,t,n)=>{const a=Pv.exec(e);return a?a[1]?t(a[1]):n(a[2]):!1},Fa=(e,t,n=!1)=>{const a=Iv.exec(e);return a?a[1]?t(a[1]):n:!1},tg=e=>e==="position"||e==="percentage",ng=e=>e==="image"||e==="url",ag=e=>e==="length"||e==="size"||e==="bg-size",lg=e=>e==="length",$1=e=>e==="number",F1=e=>e==="family-name",ig=e=>e==="shadow",P1=()=>{const e=ye("color"),t=ye("font"),n=ye("text"),a=ye("font-weight"),l=ye("tracking"),i=ye("leading"),r=ye("breakpoint"),o=ye("container"),c=ye("spacing"),s=ye("radius"),f=ye("shadow"),h=ye("inset-shadow"),d=ye("text-shadow"),p=ye("drop-shadow"),S=ye("blur"),b=ye("perspective"),w=ye("aspect"),g=ye("ease"),v=ye("animate"),y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],x=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],C=()=>[...x(),R,O],M=()=>["auto","hidden","clip","visible","scroll"],T=()=>["auto","contain","none"],A=()=>[R,O,c],j=()=>[ta,"full","auto",...A()],D=()=>[$t,"none","subgrid",R,O],le=()=>["auto",{span:["full",$t,R,O]},$t,R,O],Te=()=>[$t,"auto",R,O],Jt=()=>["auto","min","max","fr",R,O],B=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],Y=()=>["start","end","center","stretch","center-safe","end-safe"],z=()=>["auto",...A()],_=()=>[ta,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...A()],E=()=>[e,R,O],K=()=>[...x(),dd,fd,{position:[R,O]}],ie=()=>["no-repeat",{repeat:["","x","y","space","round"]}],yt=()=>["auto","cover","contain",J1,Q1,{size:[R,O]}],ht=()=>[Xo,il,jn],pe=()=>["","none","full",s,R,O],se=()=>["",L,il,jn],Ct=()=>["solid","dashed","dotted","double"],yu=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],Se=()=>[L,Xo,dd,fd],bu=()=>["","none",S,R,O],ti=()=>["none",L,R,O],ni=()=>["none",L,R,O],ao=()=>[L,R,O],ai=()=>[ta,"full",...A()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Ot],breakpoint:[Ot],color:[Y1],container:[Ot],"drop-shadow":[Ot],ease:["in","out","in-out"],font:[V1],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Ot],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Ot],shadow:[Ot],spacing:["px",L],text:[Ot],"text-shadow":[Ot],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",ta,O,R,w]}],container:["container"],columns:[{columns:[L,O,R,o]}],"break-after":[{"break-after":y()}],"break-before":[{"break-before":y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:C()}],overflow:[{overflow:M()}],"overflow-x":[{"overflow-x":M()}],"overflow-y":[{"overflow-y":M()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:j()}],"inset-x":[{"inset-x":j()}],"inset-y":[{"inset-y":j()}],start:[{start:j()}],end:[{end:j()}],top:[{top:j()}],right:[{right:j()}],bottom:[{bottom:j()}],left:[{left:j()}],visibility:["visible","invisible","collapse"],z:[{z:[$t,"auto",R,O]}],basis:[{basis:[ta,"full","auto",o,...A()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[L,ta,"auto","initial","none",O]}],grow:[{grow:["",L,R,O]}],shrink:[{shrink:["",L,R,O]}],order:[{order:[$t,"first","last","none",R,O]}],"grid-cols":[{"grid-cols":D()}],"col-start-end":[{col:le()}],"col-start":[{"col-start":Te()}],"col-end":[{"col-end":Te()}],"grid-rows":[{"grid-rows":D()}],"row-start-end":[{row:le()}],"row-start":[{"row-start":Te()}],"row-end":[{"row-end":Te()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":Jt()}],"auto-rows":[{"auto-rows":Jt()}],gap:[{gap:A()}],"gap-x":[{"gap-x":A()}],"gap-y":[{"gap-y":A()}],"justify-content":[{justify:[...B(),"normal"]}],"justify-items":[{"justify-items":[...Y(),"normal"]}],"justify-self":[{"justify-self":["auto",...Y()]}],"align-content":[{content:["normal",...B()]}],"align-items":[{items:[...Y(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...Y(),{baseline:["","last"]}]}],"place-content":[{"place-content":B()}],"place-items":[{"place-items":[...Y(),"baseline"]}],"place-self":[{"place-self":["auto",...Y()]}],p:[{p:A()}],px:[{px:A()}],py:[{py:A()}],ps:[{ps:A()}],pe:[{pe:A()}],pt:[{pt:A()}],pr:[{pr:A()}],pb:[{pb:A()}],pl:[{pl:A()}],m:[{m:z()}],mx:[{mx:z()}],my:[{my:z()}],ms:[{ms:z()}],me:[{me:z()}],mt:[{mt:z()}],mr:[{mr:z()}],mb:[{mb:z()}],ml:[{ml:z()}],"space-x":[{"space-x":A()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":A()}],"space-y-reverse":["space-y-reverse"],size:[{size:_()}],w:[{w:[o,"screen",..._()]}],"min-w":[{"min-w":[o,"screen","none",..._()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[r]},..._()]}],h:[{h:["screen","lh",..._()]}],"min-h":[{"min-h":["screen","lh","none",..._()]}],"max-h":[{"max-h":["screen","lh",..._()]}],"font-size":[{text:["base",n,il,jn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[a,R,Vo]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Xo,O]}],"font-family":[{font:[K1,O,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[l,R,O]}],"line-clamp":[{"line-clamp":[L,"none",R,Vo]}],leading:[{leading:[i,...A()]}],"list-image":[{"list-image":["none",R,O]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",R,O]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:E()}],"text-color":[{text:E()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ct(),"wavy"]}],"text-decoration-thickness":[{decoration:[L,"from-font","auto",R,jn]}],"text-decoration-color":[{decoration:E()}],"underline-offset":[{"underline-offset":[L,"auto",R,O]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:A()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",R,O]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",R,O]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:K()}],"bg-repeat":[{bg:ie()}],"bg-size":[{bg:yt()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},$t,R,O],radial:["",R,O],conic:[$t,R,O]},W1,Z1]}],"bg-color":[{bg:E()}],"gradient-from-pos":[{from:ht()}],"gradient-via-pos":[{via:ht()}],"gradient-to-pos":[{to:ht()}],"gradient-from":[{from:E()}],"gradient-via":[{via:E()}],"gradient-to":[{to:E()}],rounded:[{rounded:pe()}],"rounded-s":[{"rounded-s":pe()}],"rounded-e":[{"rounded-e":pe()}],"rounded-t":[{"rounded-t":pe()}],"rounded-r":[{"rounded-r":pe()}],"rounded-b":[{"rounded-b":pe()}],"rounded-l":[{"rounded-l":pe()}],"rounded-ss":[{"rounded-ss":pe()}],"rounded-se":[{"rounded-se":pe()}],"rounded-ee":[{"rounded-ee":pe()}],"rounded-es":[{"rounded-es":pe()}],"rounded-tl":[{"rounded-tl":pe()}],"rounded-tr":[{"rounded-tr":pe()}],"rounded-br":[{"rounded-br":pe()}],"rounded-bl":[{"rounded-bl":pe()}],"border-w":[{border:se()}],"border-w-x":[{"border-x":se()}],"border-w-y":[{"border-y":se()}],"border-w-s":[{"border-s":se()}],"border-w-e":[{"border-e":se()}],"border-w-t":[{"border-t":se()}],"border-w-r":[{"border-r":se()}],"border-w-b":[{"border-b":se()}],"border-w-l":[{"border-l":se()}],"divide-x":[{"divide-x":se()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":se()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ct(),"hidden","none"]}],"divide-style":[{divide:[...Ct(),"hidden","none"]}],"border-color":[{border:E()}],"border-color-x":[{"border-x":E()}],"border-color-y":[{"border-y":E()}],"border-color-s":[{"border-s":E()}],"border-color-e":[{"border-e":E()}],"border-color-t":[{"border-t":E()}],"border-color-r":[{"border-r":E()}],"border-color-b":[{"border-b":E()}],"border-color-l":[{"border-l":E()}],"divide-color":[{divide:E()}],"outline-style":[{outline:[...Ct(),"none","hidden"]}],"outline-offset":[{"outline-offset":[L,R,O]}],"outline-w":[{outline:["",L,il,jn]}],"outline-color":[{outline:E()}],shadow:[{shadow:["","none",f,Si,xi]}],"shadow-color":[{shadow:E()}],"inset-shadow":[{"inset-shadow":["none",h,Si,xi]}],"inset-shadow-color":[{"inset-shadow":E()}],"ring-w":[{ring:se()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:E()}],"ring-offset-w":[{"ring-offset":[L,jn]}],"ring-offset-color":[{"ring-offset":E()}],"inset-ring-w":[{"inset-ring":se()}],"inset-ring-color":[{"inset-ring":E()}],"text-shadow":[{"text-shadow":["none",d,Si,xi]}],"text-shadow-color":[{"text-shadow":E()}],opacity:[{opacity:[L,R,O]}],"mix-blend":[{"mix-blend":[...yu(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":yu()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[L]}],"mask-image-linear-from-pos":[{"mask-linear-from":Se()}],"mask-image-linear-to-pos":[{"mask-linear-to":Se()}],"mask-image-linear-from-color":[{"mask-linear-from":E()}],"mask-image-linear-to-color":[{"mask-linear-to":E()}],"mask-image-t-from-pos":[{"mask-t-from":Se()}],"mask-image-t-to-pos":[{"mask-t-to":Se()}],"mask-image-t-from-color":[{"mask-t-from":E()}],"mask-image-t-to-color":[{"mask-t-to":E()}],"mask-image-r-from-pos":[{"mask-r-from":Se()}],"mask-image-r-to-pos":[{"mask-r-to":Se()}],"mask-image-r-from-color":[{"mask-r-from":E()}],"mask-image-r-to-color":[{"mask-r-to":E()}],"mask-image-b-from-pos":[{"mask-b-from":Se()}],"mask-image-b-to-pos":[{"mask-b-to":Se()}],"mask-image-b-from-color":[{"mask-b-from":E()}],"mask-image-b-to-color":[{"mask-b-to":E()}],"mask-image-l-from-pos":[{"mask-l-from":Se()}],"mask-image-l-to-pos":[{"mask-l-to":Se()}],"mask-image-l-from-color":[{"mask-l-from":E()}],"mask-image-l-to-color":[{"mask-l-to":E()}],"mask-image-x-from-pos":[{"mask-x-from":Se()}],"mask-image-x-to-pos":[{"mask-x-to":Se()}],"mask-image-x-from-color":[{"mask-x-from":E()}],"mask-image-x-to-color":[{"mask-x-to":E()}],"mask-image-y-from-pos":[{"mask-y-from":Se()}],"mask-image-y-to-pos":[{"mask-y-to":Se()}],"mask-image-y-from-color":[{"mask-y-from":E()}],"mask-image-y-to-color":[{"mask-y-to":E()}],"mask-image-radial":[{"mask-radial":[R,O]}],"mask-image-radial-from-pos":[{"mask-radial-from":Se()}],"mask-image-radial-to-pos":[{"mask-radial-to":Se()}],"mask-image-radial-from-color":[{"mask-radial-from":E()}],"mask-image-radial-to-color":[{"mask-radial-to":E()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":x()}],"mask-image-conic-pos":[{"mask-conic":[L]}],"mask-image-conic-from-pos":[{"mask-conic-from":Se()}],"mask-image-conic-to-pos":[{"mask-conic-to":Se()}],"mask-image-conic-from-color":[{"mask-conic-from":E()}],"mask-image-conic-to-color":[{"mask-conic-to":E()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:K()}],"mask-repeat":[{mask:ie()}],"mask-size":[{mask:yt()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",R,O]}],filter:[{filter:["","none",R,O]}],blur:[{blur:bu()}],brightness:[{brightness:[L,R,O]}],contrast:[{contrast:[L,R,O]}],"drop-shadow":[{"drop-shadow":["","none",p,Si,xi]}],"drop-shadow-color":[{"drop-shadow":E()}],grayscale:[{grayscale:["",L,R,O]}],"hue-rotate":[{"hue-rotate":[L,R,O]}],invert:[{invert:["",L,R,O]}],saturate:[{saturate:[L,R,O]}],sepia:[{sepia:["",L,R,O]}],"backdrop-filter":[{"backdrop-filter":["","none",R,O]}],"backdrop-blur":[{"backdrop-blur":bu()}],"backdrop-brightness":[{"backdrop-brightness":[L,R,O]}],"backdrop-contrast":[{"backdrop-contrast":[L,R,O]}],"backdrop-grayscale":[{"backdrop-grayscale":["",L,R,O]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[L,R,O]}],"backdrop-invert":[{"backdrop-invert":["",L,R,O]}],"backdrop-opacity":[{"backdrop-opacity":[L,R,O]}],"backdrop-saturate":[{"backdrop-saturate":[L,R,O]}],"backdrop-sepia":[{"backdrop-sepia":["",L,R,O]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":A()}],"border-spacing-x":[{"border-spacing-x":A()}],"border-spacing-y":[{"border-spacing-y":A()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",R,O]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[L,"initial",R,O]}],ease:[{ease:["linear","initial",g,R,O]}],delay:[{delay:[L,R,O]}],animate:[{animate:["none",v,R,O]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[b,R,O]}],"perspective-origin":[{"perspective-origin":C()}],rotate:[{rotate:ti()}],"rotate-x":[{"rotate-x":ti()}],"rotate-y":[{"rotate-y":ti()}],"rotate-z":[{"rotate-z":ti()}],scale:[{scale:ni()}],"scale-x":[{"scale-x":ni()}],"scale-y":[{"scale-y":ni()}],"scale-z":[{"scale-z":ni()}],"scale-3d":["scale-3d"],skew:[{skew:ao()}],"skew-x":[{"skew-x":ao()}],"skew-y":[{"skew-y":ao()}],transform:[{transform:[R,O,"","none","gpu","cpu"]}],"transform-origin":[{origin:C()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:ai()}],"translate-x":[{"translate-x":ai()}],"translate-y":[{"translate-y":ai()}],"translate-z":[{"translate-z":ai()}],"translate-none":["translate-none"],accent:[{accent:E()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:E()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",R,O]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":A()}],"scroll-mx":[{"scroll-mx":A()}],"scroll-my":[{"scroll-my":A()}],"scroll-ms":[{"scroll-ms":A()}],"scroll-me":[{"scroll-me":A()}],"scroll-mt":[{"scroll-mt":A()}],"scroll-mr":[{"scroll-mr":A()}],"scroll-mb":[{"scroll-mb":A()}],"scroll-ml":[{"scroll-ml":A()}],"scroll-p":[{"scroll-p":A()}],"scroll-px":[{"scroll-px":A()}],"scroll-py":[{"scroll-py":A()}],"scroll-ps":[{"scroll-ps":A()}],"scroll-pe":[{"scroll-pe":A()}],"scroll-pt":[{"scroll-pt":A()}],"scroll-pr":[{"scroll-pr":A()}],"scroll-pb":[{"scroll-pb":A()}],"scroll-pl":[{"scroll-pl":A()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",R,O]}],fill:[{fill:["none",...E()]}],"stroke-w":[{stroke:[L,il,jn,Vo]}],stroke:[{stroke:["none",...E()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},uu=O1(P1);function Pn(...e){return uu(Pr(e))}const I1=Kv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function Al({className:e,variant:t,size:n,asChild:a=!1,...l}){const i=a?Qv:"button";return u.jsx(i,{"data-slot":"button",className:Pn(I1({variant:t,size:n,className:e})),...l})}function rg({className:e,...t}){return u.jsx("textarea",{"data-slot":"textarea",className:Pn("resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...t})}function fu({className:e,...t}){return u.jsx("div",{"data-slot":"card",className:Pn("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),tx=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,a)=>a?a.toUpperCase():n.toLowerCase()),hd=e=>{const t=tx(e);return t.charAt(0).toUpperCase()+t.slice(1)},og=(...e)=>e.filter((t,n,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===n).join(" ").trim(),nx=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ax={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lx=m.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:a,className:l="",children:i,iconNode:r,...o},c)=>m.createElement("svg",{ref:c,...ax,width:t,height:t,stroke:e,strokeWidth:a?Number(n)*24/Number(t):n,className:og("lucide",l),...!i&&!nx(o)&&{"aria-hidden":"true"},...o},[...r.map(([s,f])=>m.createElement(s,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=(e,t)=>{const n=m.forwardRef(({className:a,...l},i)=>m.createElement(lx,{ref:i,iconNode:t,className:og(`lucide-${ex(hd(e))}`,`lucide-${e}`,a),...l}));return n.displayName=hd(e),n};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],cg=Ae("activity",ix);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],sg=Ae("arrow-left",rx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],cx=Ae("arrow-right",ox);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],ux=Ae("brain",sx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],dx=Ae("circle-check-big",fx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mx=Ae("circle-check",hx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],gx=Ae("clipboard-list",vx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],yx=Ae("clock",px);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],xx=Ae("message-circle",bx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],ug=Ae("message-square",Sx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],Ex=Ae("mic",wx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Ax=Ae("send",Nx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Cx=Ae("star",Tx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zx=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],fg=Ae("trending-up",zx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],_x=Ae("triangle-alert",jx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],Ox=Ae("users",Mx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],Dx=Ae("workflow",Rx);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ux=Ae("x",kx);function Hx(e){const t=Bx(e),n=m.forwardRef((a,l)=>{const{children:i,...r}=a,o=m.Children.toArray(i),c=o.find(Yx);if(c){const s=c.props.children,f=o.map(h=>h===c?m.Children.count(s)>1?m.Children.only(null):m.isValidElement(s)?s.props.children:null:h);return u.jsx(t,{...r,ref:l,children:m.isValidElement(s)?m.cloneElement(s,void 0,f):null})}return u.jsx(t,{...r,ref:l,children:i})});return n.displayName=`${e}.Slot`,n}function Bx(e){const t=m.forwardRef((n,a)=>{const{children:l,...i}=n;if(m.isValidElement(l)){const r=qx(l),o=Gx(i,l.props);return l.type!==m.Fragment&&(o.ref=a?Fr(a,r):r),m.cloneElement(l,o)}return m.Children.count(l)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Lx=Symbol("radix.slottable");function Yx(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Lx}function Gx(e,t){const n={...t};for(const a in t){const l=e[a],i=t[a];/^on[A-Z]/.test(a)?l&&i?n[a]=(...o)=>{const c=i(...o);return l(...o),c}:l&&(n[a]=l):a==="style"?n[a]={...l,...i}:a==="className"&&(n[a]=[l,i].filter(Boolean).join(" "))}return{...e,...n}}function qx(e){var a,l;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(l=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:l.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var Xx=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Xe=Xx.reduce((e,t)=>{const n=Hx(`Primitive.${t}`),a=m.forwardRef((l,i)=>{const{asChild:r,...o}=l,c=r?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),u.jsx(c,{...o,ref:i})});return a.displayName=`Primitive.${t}`,{...e,[t]:a}},{});function Vx(e,t){e&&cs.flushSync(()=>e.dispatchEvent(t))}var La=globalThis!=null&&globalThis.document?m.useLayoutEffect:()=>{};function Qx(e,t){return m.useReducer((n,a)=>t[n][a]??n,e)}var Cn=e=>{const{present:t,children:n}=e,a=Zx(t),l=typeof n=="function"?n({present:a.isPresent}):m.Children.only(n),i=et(a.ref,Kx(l));return typeof n=="function"||a.isPresent?m.cloneElement(l,{ref:i}):null};Cn.displayName="Presence";function Zx(e){const[t,n]=m.useState(),a=m.useRef(null),l=m.useRef(e),i=m.useRef("none"),r=e?"mounted":"unmounted",[o,c]=Qx(r,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return m.useEffect(()=>{const s=wi(a.current);i.current=o==="mounted"?s:"none"},[o]),La(()=>{const s=a.current,f=l.current;if(f!==e){const d=i.current,p=wi(s);e?c("MOUNT"):p==="none"||(s==null?void 0:s.display)==="none"?c("UNMOUNT"):c(f&&d!==p?"ANIMATION_OUT":"UNMOUNT"),l.current=e}},[e,c]),La(()=>{if(t){let s;const f=t.ownerDocument.defaultView??window,h=p=>{const b=wi(a.current).includes(CSS.escape(p.animationName));if(p.target===t&&b&&(c("ANIMATION_END"),!l.current)){const w=t.style.animationFillMode;t.style.animationFillMode="forwards",s=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=w)})}},d=p=>{p.target===t&&(i.current=wi(a.current))};return t.addEventListener("animationstart",d),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{f.clearTimeout(s),t.removeEventListener("animationstart",d),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(o),ref:m.useCallback(s=>{a.current=s?getComputedStyle(s):null,n(s)},[])}}function wi(e){return(e==null?void 0:e.animationName)||"none"}function Kx(e){var a,l;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(l=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:l.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Jx(e,t){const n=m.createContext(t),a=i=>{const{children:r,...o}=i,c=m.useMemo(()=>o,Object.values(o));return u.jsx(n.Provider,{value:c,children:r})};a.displayName=e+"Provider";function l(i){const r=m.useContext(n);if(r)return r;if(t!==void 0)return t;throw new Error(`\`${i}\` must be used within \`${e}\``)}return[a,l]}function dg(e,t=[]){let n=[];function a(i,r){const o=m.createContext(r),c=n.length;n=[...n,r];const s=h=>{var g;const{scope:d,children:p,...S}=h,b=((g=d==null?void 0:d[e])==null?void 0:g[c])||o,w=m.useMemo(()=>S,Object.values(S));return u.jsx(b.Provider,{value:w,children:p})};s.displayName=i+"Provider";function f(h,d){var b;const p=((b=d==null?void 0:d[e])==null?void 0:b[c])||o,S=m.useContext(p);if(S)return S;if(r!==void 0)return r;throw new Error(`\`${h}\` must be used within \`${i}\``)}return[s,f]}const l=()=>{const i=n.map(r=>m.createContext(r));return function(o){const c=(o==null?void 0:o[e])||i;return m.useMemo(()=>({[`__scope${e}`]:{...o,[e]:c}}),[o,c])}};return l.scopeName=e,[a,Wx(l,...t)]}function Wx(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const a=e.map(l=>({useScope:l(),scopeName:l.scopeName}));return function(i){const r=a.reduce((o,{useScope:c,scopeName:s})=>{const h=c(i)[`__scope${s}`];return{...o,...h}},{});return m.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}function ct(e){const t=m.useRef(e);return m.useEffect(()=>{t.current=e}),m.useMemo(()=>(...n)=>{var a;return(a=t.current)==null?void 0:a.call(t,...n)},[])}var $x=m.createContext(void 0);function Fx(e){const t=m.useContext($x);return e||t||"ltr"}function Px(e,[t,n]){return Math.min(n,Math.max(t,e))}function De(e,t,{checkForDefaultPrevented:n=!0}={}){return function(l){if(e==null||e(l),n===!1||!l.defaultPrevented)return t==null?void 0:t(l)}}function Ix(e,t){return m.useReducer((n,a)=>t[n][a]??n,e)}var du="ScrollArea",[hg,yw]=dg(du),[e2,dt]=hg(du),mg=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:a="hover",dir:l,scrollHideDelay:i=600,...r}=e,[o,c]=m.useState(null),[s,f]=m.useState(null),[h,d]=m.useState(null),[p,S]=m.useState(null),[b,w]=m.useState(null),[g,v]=m.useState(0),[y,x]=m.useState(0),[C,M]=m.useState(!1),[T,A]=m.useState(!1),j=et(t,le=>c(le)),D=Fx(l);return u.jsx(e2,{scope:n,type:a,dir:D,scrollHideDelay:i,scrollArea:o,viewport:s,onViewportChange:f,content:h,onContentChange:d,scrollbarX:p,onScrollbarXChange:S,scrollbarXEnabled:C,onScrollbarXEnabledChange:M,scrollbarY:b,onScrollbarYChange:w,scrollbarYEnabled:T,onScrollbarYEnabledChange:A,onCornerWidthChange:v,onCornerHeightChange:x,children:u.jsx(Xe.div,{dir:D,...r,ref:j,style:{position:"relative","--radix-scroll-area-corner-width":g+"px","--radix-scroll-area-corner-height":y+"px",...e.style}})})});mg.displayName=du;var vg="ScrollAreaViewport",gg=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:a,nonce:l,...i}=e,r=dt(vg,n),o=m.useRef(null),c=et(t,o,r.onViewportChange);return u.jsxs(u.Fragment,{children:[u.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:l}),u.jsx(Xe.div,{"data-radix-scroll-area-viewport":"",...i,ref:c,style:{overflowX:r.scrollbarXEnabled?"scroll":"hidden",overflowY:r.scrollbarYEnabled?"scroll":"hidden",...e.style},children:u.jsx("div",{ref:r.onContentChange,style:{minWidth:"100%",display:"table"},children:a})})]})});gg.displayName=vg;var Tt="ScrollAreaScrollbar",pg=m.forwardRef((e,t)=>{const{forceMount:n,...a}=e,l=dt(Tt,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:r}=l,o=e.orientation==="horizontal";return m.useEffect(()=>(o?i(!0):r(!0),()=>{o?i(!1):r(!1)}),[o,i,r]),l.type==="hover"?u.jsx(t2,{...a,ref:t,forceMount:n}):l.type==="scroll"?u.jsx(n2,{...a,ref:t,forceMount:n}):l.type==="auto"?u.jsx(yg,{...a,ref:t,forceMount:n}):l.type==="always"?u.jsx(hu,{...a,ref:t}):null});pg.displayName=Tt;var t2=m.forwardRef((e,t)=>{const{forceMount:n,...a}=e,l=dt(Tt,e.__scopeScrollArea),[i,r]=m.useState(!1);return m.useEffect(()=>{const o=l.scrollArea;let c=0;if(o){const s=()=>{window.clearTimeout(c),r(!0)},f=()=>{c=window.setTimeout(()=>r(!1),l.scrollHideDelay)};return o.addEventListener("pointerenter",s),o.addEventListener("pointerleave",f),()=>{window.clearTimeout(c),o.removeEventListener("pointerenter",s),o.removeEventListener("pointerleave",f)}}},[l.scrollArea,l.scrollHideDelay]),u.jsx(Cn,{present:n||i,children:u.jsx(yg,{"data-state":i?"visible":"hidden",...a,ref:t})})}),n2=m.forwardRef((e,t)=>{const{forceMount:n,...a}=e,l=dt(Tt,e.__scopeScrollArea),i=e.orientation==="horizontal",r=eo(()=>c("SCROLL_END"),100),[o,c]=Ix("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return m.useEffect(()=>{if(o==="idle"){const s=window.setTimeout(()=>c("HIDE"),l.scrollHideDelay);return()=>window.clearTimeout(s)}},[o,l.scrollHideDelay,c]),m.useEffect(()=>{const s=l.viewport,f=i?"scrollLeft":"scrollTop";if(s){let h=s[f];const d=()=>{const p=s[f];h!==p&&(c("SCROLL"),r()),h=p};return s.addEventListener("scroll",d),()=>s.removeEventListener("scroll",d)}},[l.viewport,i,c,r]),u.jsx(Cn,{present:n||o!=="hidden",children:u.jsx(hu,{"data-state":o==="hidden"?"hidden":"visible",...a,ref:t,onPointerEnter:De(e.onPointerEnter,()=>c("POINTER_ENTER")),onPointerLeave:De(e.onPointerLeave,()=>c("POINTER_LEAVE"))})})}),yg=m.forwardRef((e,t)=>{const n=dt(Tt,e.__scopeScrollArea),{forceMount:a,...l}=e,[i,r]=m.useState(!1),o=e.orientation==="horizontal",c=eo(()=>{if(n.viewport){const s=n.viewport.offsetWidth<n.viewport.scrollWidth,f=n.viewport.offsetHeight<n.viewport.scrollHeight;r(o?s:f)}},10);return Ya(n.viewport,c),Ya(n.content,c),u.jsx(Cn,{present:a||i,children:u.jsx(hu,{"data-state":i?"visible":"hidden",...l,ref:t})})}),hu=m.forwardRef((e,t)=>{const{orientation:n="vertical",...a}=e,l=dt(Tt,e.__scopeScrollArea),i=m.useRef(null),r=m.useRef(0),[o,c]=m.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),s=Eg(o.viewport,o.content),f={...a,sizes:o,onSizesChange:c,hasThumb:s>0&&s<1,onThumbChange:d=>i.current=d,onThumbPointerUp:()=>r.current=0,onThumbPointerDown:d=>r.current=d};function h(d,p){return c2(d,r.current,o,p)}return n==="horizontal"?u.jsx(a2,{...f,ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){const d=l.viewport.scrollLeft,p=md(d,o,l.dir);i.current.style.transform=`translate3d(${p}px, 0, 0)`}},onWheelScroll:d=>{l.viewport&&(l.viewport.scrollLeft=d)},onDragScroll:d=>{l.viewport&&(l.viewport.scrollLeft=h(d,l.dir))}}):n==="vertical"?u.jsx(l2,{...f,ref:t,onThumbPositionChange:()=>{if(l.viewport&&i.current){const d=l.viewport.scrollTop,p=md(d,o);i.current.style.transform=`translate3d(0, ${p}px, 0)`}},onWheelScroll:d=>{l.viewport&&(l.viewport.scrollTop=d)},onDragScroll:d=>{l.viewport&&(l.viewport.scrollTop=h(d))}}):null}),a2=m.forwardRef((e,t)=>{const{sizes:n,onSizesChange:a,...l}=e,i=dt(Tt,e.__scopeScrollArea),[r,o]=m.useState(),c=m.useRef(null),s=et(t,c,i.onScrollbarXChange);return m.useEffect(()=>{c.current&&o(getComputedStyle(c.current))},[c]),u.jsx(xg,{"data-orientation":"horizontal",...l,ref:s,sizes:n,style:{bottom:0,left:i.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:i.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":Ir(n)+"px",...e.style},onThumbPointerDown:f=>e.onThumbPointerDown(f.x),onDragScroll:f=>e.onDragScroll(f.x),onWheelScroll:(f,h)=>{if(i.viewport){const d=i.viewport.scrollLeft+f.deltaX;e.onWheelScroll(d),Ag(d,h)&&f.preventDefault()}},onResize:()=>{c.current&&i.viewport&&r&&a({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:Tr(r.paddingLeft),paddingEnd:Tr(r.paddingRight)}})}})}),l2=m.forwardRef((e,t)=>{const{sizes:n,onSizesChange:a,...l}=e,i=dt(Tt,e.__scopeScrollArea),[r,o]=m.useState(),c=m.useRef(null),s=et(t,c,i.onScrollbarYChange);return m.useEffect(()=>{c.current&&o(getComputedStyle(c.current))},[c]),u.jsx(xg,{"data-orientation":"vertical",...l,ref:s,sizes:n,style:{top:0,right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":Ir(n)+"px",...e.style},onThumbPointerDown:f=>e.onThumbPointerDown(f.y),onDragScroll:f=>e.onDragScroll(f.y),onWheelScroll:(f,h)=>{if(i.viewport){const d=i.viewport.scrollTop+f.deltaY;e.onWheelScroll(d),Ag(d,h)&&f.preventDefault()}},onResize:()=>{c.current&&i.viewport&&r&&a({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:Tr(r.paddingTop),paddingEnd:Tr(r.paddingBottom)}})}})}),[i2,bg]=hg(Tt),xg=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:a,hasThumb:l,onThumbChange:i,onThumbPointerUp:r,onThumbPointerDown:o,onThumbPositionChange:c,onDragScroll:s,onWheelScroll:f,onResize:h,...d}=e,p=dt(Tt,n),[S,b]=m.useState(null),w=et(t,j=>b(j)),g=m.useRef(null),v=m.useRef(""),y=p.viewport,x=a.content-a.viewport,C=ct(f),M=ct(c),T=eo(h,10);function A(j){if(g.current){const D=j.clientX-g.current.left,le=j.clientY-g.current.top;s({x:D,y:le})}}return m.useEffect(()=>{const j=D=>{const le=D.target;(S==null?void 0:S.contains(le))&&C(D,x)};return document.addEventListener("wheel",j,{passive:!1}),()=>document.removeEventListener("wheel",j,{passive:!1})},[y,S,x,C]),m.useEffect(M,[a,M]),Ya(S,T),Ya(p.content,T),u.jsx(i2,{scope:n,scrollbar:S,hasThumb:l,onThumbChange:ct(i),onThumbPointerUp:ct(r),onThumbPositionChange:M,onThumbPointerDown:ct(o),children:u.jsx(Xe.div,{...d,ref:w,style:{position:"absolute",...d.style},onPointerDown:De(e.onPointerDown,j=>{j.button===0&&(j.target.setPointerCapture(j.pointerId),g.current=S.getBoundingClientRect(),v.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",p.viewport&&(p.viewport.style.scrollBehavior="auto"),A(j))}),onPointerMove:De(e.onPointerMove,A),onPointerUp:De(e.onPointerUp,j=>{const D=j.target;D.hasPointerCapture(j.pointerId)&&D.releasePointerCapture(j.pointerId),document.body.style.webkitUserSelect=v.current,p.viewport&&(p.viewport.style.scrollBehavior=""),g.current=null})})})}),Ar="ScrollAreaThumb",Sg=m.forwardRef((e,t)=>{const{forceMount:n,...a}=e,l=bg(Ar,e.__scopeScrollArea);return u.jsx(Cn,{present:n||l.hasThumb,children:u.jsx(r2,{ref:t,...a})})}),r2=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:a,...l}=e,i=dt(Ar,n),r=bg(Ar,n),{onThumbPositionChange:o}=r,c=et(t,h=>r.onThumbChange(h)),s=m.useRef(void 0),f=eo(()=>{s.current&&(s.current(),s.current=void 0)},100);return m.useEffect(()=>{const h=i.viewport;if(h){const d=()=>{if(f(),!s.current){const p=s2(h,o);s.current=p,o()}};return o(),h.addEventListener("scroll",d),()=>h.removeEventListener("scroll",d)}},[i.viewport,f,o]),u.jsx(Xe.div,{"data-state":r.hasThumb?"visible":"hidden",...l,ref:c,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:De(e.onPointerDownCapture,h=>{const p=h.target.getBoundingClientRect(),S=h.clientX-p.left,b=h.clientY-p.top;r.onThumbPointerDown({x:S,y:b})}),onPointerUp:De(e.onPointerUp,r.onThumbPointerUp)})});Sg.displayName=Ar;var mu="ScrollAreaCorner",wg=m.forwardRef((e,t)=>{const n=dt(mu,e.__scopeScrollArea),a=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&a?u.jsx(o2,{...e,ref:t}):null});wg.displayName=mu;var o2=m.forwardRef((e,t)=>{const{__scopeScrollArea:n,...a}=e,l=dt(mu,n),[i,r]=m.useState(0),[o,c]=m.useState(0),s=!!(i&&o);return Ya(l.scrollbarX,()=>{var h;const f=((h=l.scrollbarX)==null?void 0:h.offsetHeight)||0;l.onCornerHeightChange(f),c(f)}),Ya(l.scrollbarY,()=>{var h;const f=((h=l.scrollbarY)==null?void 0:h.offsetWidth)||0;l.onCornerWidthChange(f),r(f)}),s?u.jsx(Xe.div,{...a,ref:t,style:{width:i,height:o,position:"absolute",right:l.dir==="ltr"?0:void 0,left:l.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function Tr(e){return e?parseInt(e,10):0}function Eg(e,t){const n=e/t;return isNaN(n)?0:n}function Ir(e){const t=Eg(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,a=(e.scrollbar.size-n)*t;return Math.max(a,18)}function c2(e,t,n,a="ltr"){const l=Ir(n),i=l/2,r=t||i,o=l-r,c=n.scrollbar.paddingStart+r,s=n.scrollbar.size-n.scrollbar.paddingEnd-o,f=n.content-n.viewport,h=a==="ltr"?[0,f]:[f*-1,0];return Ng([c,s],h)(e)}function md(e,t,n="ltr"){const a=Ir(t),l=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,i=t.scrollbar.size-l,r=t.content-t.viewport,o=i-a,c=n==="ltr"?[0,r]:[r*-1,0],s=Px(e,c);return Ng([0,r],[0,o])(s)}function Ng(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const a=(t[1]-t[0])/(e[1]-e[0]);return t[0]+a*(n-e[0])}}function Ag(e,t){return e>0&&e<t}var s2=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},a=0;return function l(){const i={left:e.scrollLeft,top:e.scrollTop},r=n.left!==i.left,o=n.top!==i.top;(r||o)&&t(),n=i,a=window.requestAnimationFrame(l)}(),()=>window.cancelAnimationFrame(a)};function eo(e,t){const n=ct(e),a=m.useRef(0);return m.useEffect(()=>()=>window.clearTimeout(a.current),[]),m.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(n,t)},[n,t])}function Ya(e,t){const n=ct(t);La(()=>{let a=0;if(e){const l=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(n)});return l.observe(e),()=>{window.cancelAnimationFrame(a),l.unobserve(e)}}},[e,n])}var u2=mg,f2=gg,d2=wg;function h2({className:e,children:t,...n}){return u.jsxs(u2,{"data-slot":"scroll-area",className:Pn("relative",e),...n,children:[u.jsx(f2,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:t}),u.jsx(m2,{}),u.jsx(d2,{})]})}function m2({className:e,orientation:t="vertical",...n}){return u.jsx(pg,{"data-slot":"scroll-area-scrollbar",orientation:t,className:Pn("flex touch-none p-px transition-colors select-none",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",e),...n,children:u.jsx(Sg,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}const v2=e=>`${e.title}: ${e.patientDetails} presenting with ${e.chiefComplaint}. Vitals: ${e.vitals}. Initial assessment: ${e.initialAssessment}.`;function g2({caseInfo:e,onSubmit:t,onBack:n,error:a,isLoading:l}){const[i,r]=m.useState(()=>v2(e)),o=()=>{i.trim()&&t(i)};return u.jsx("div",{className:"min-h-screen p-8",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[u.jsxs(Al,{variant:"ghost",onClick:n,className:"mb-6 text-blue-700 hover:text-blue-900 hover:bg-blue-50",children:[u.jsx(sg,{className:"w-4 h-4 mr-2"}),"Back to Mode Selection"]}),u.jsxs("div",{className:"mb-8",children:[u.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[u.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center",children:u.jsx(gx,{className:"w-6 h-6 text-blue-600"})}),u.jsx("h1",{className:"text-blue-900",children:"Nurse Case Presentation"})]}),u.jsx("p",{className:"text-blue-700/70",children:"As a nurse, you have a patient case to present. Share your clinical assessment and reasoning with the AI medical coach. This will be the starting point for your coaching session to enhance your triage and presentation skills."})]}),u.jsxs(fu,{className:"p-8 border-2 border-blue-100",children:[u.jsx("h3",{className:"text-blue-900 mb-4",children:"Your Clinical Presentation"}),u.jsx("p",{className:"text-blue-700/70 mb-4",children:"Present your case as you would to a physician or during handoff. Include your assessment, working diagnosis, clinical reasoning, and proposed plan."}),u.jsx(rg,{value:i,onChange:c=>r(c.target.value),placeholder:"Begin your presentation here... (e.g., 'I have a 45-year-old male presenting with chest pain. My assessment is...')",className:"min-h-[200px] mb-4 border-blue-200 focus:border-blue-400"}),a&&u.jsx("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm",children:a}),u.jsx(Al,{onClick:o,disabled:!i.trim()||l,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50",children:l?"Starting session...":"Continue to Coaching Session"})]})]})})}function p2(...e){return uu(Pr(e))}const y2={focusedInformation:"Focused, Relevant Information",workingDiagnosis:"Clear Working Diagnosis",clinicalReasoning:"Logical Organization + Reasoning",differentialDiagnosis:"Differential Diagnosis",conciseness:"Conciseness + Efficiency",diagnosticWorkup:"Diagnostic Workup Plan",managementPlan:"Management Plan + Disposition",hypothesisDriven:"Hypothesis-Driven Inquiry",synthesis:"Synthesis Ability"},b2={focusedInformation:"Only includes details supporting diagnosis, omits extraneous info",workingDiagnosis:"States hypothesis early, justifies with structured data",clinicalReasoning:"Explains symptom → reasoning → diagnosis connections",differentialDiagnosis:"Provides prioritized alternative diagnoses logically",conciseness:"Short, well-structured, purposeful delivery",diagnosticWorkup:"Identifies prioritized tests with clear rationale",managementPlan:"Ordered, justified management linked to diagnosis",hypothesisDriven:"Shows clear hypothesis, knows what information matters",synthesis:"Provides summary statements, distills key clues"};function vd({metrics:e,className:t}){const n=r=>r>=80?"text-green-600":r>=60?"text-yellow-600":"text-orange-600",a=r=>r>=80?"bg-green-500":r>=60?"bg-yellow-500":"bg-orange-500",l=Math.round(Object.values(e).reduce((r,o)=>r+o,0)/Object.keys(e).length),i=r=>r==="focusedInformation";return u.jsxs("div",{className:p2("w-full bg-white p-6 overflow-y-auto",t),children:[u.jsxs("div",{className:"mb-6",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[u.jsx(fg,{className:"w-5 h-5 text-blue-600"}),u.jsx("h3",{className:"text-blue-900",children:"Performance Metrics"})]}),u.jsx("p",{className:"text-blue-700/70",children:"Real-time assessment of your clinical presentation skills"})]}),u.jsxs(fu,{className:"p-4 mb-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",children:[u.jsx("p",{className:"text-blue-700 mb-2",children:"Overall Score"}),u.jsxs("div",{className:"flex items-end gap-2",children:[u.jsxs("span",{className:`text-blue-900 ${n(l)}`,children:[l,"%"]}),l>=80&&u.jsx(mx,{className:"w-5 h-5 text-green-600 mb-1"})]})]}),u.jsx("div",{className:"space-y-5",children:Object.keys(e).map((r,o)=>u.jsxs("div",{className:i(r)?"p-3 bg-blue-50 rounded-lg border-2 border-blue-200":"",children:[u.jsxs("div",{className:"flex items-start justify-between mb-2 gap-2",children:[u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[u.jsxs("p",{className:"text-blue-900",children:[o+1,". ",y2[r]]}),i(r)&&u.jsx(Cx,{className:"w-4 h-4 text-blue-600 fill-blue-600"})]}),u.jsx("p",{className:"text-blue-700/60",children:b2[r]})]}),u.jsxs("span",{className:`flex-shrink-0 ${n(e[r])}`,children:[e[r],"%"]})]}),u.jsx("div",{className:"relative h-2 bg-blue-100 rounded-full overflow-hidden",children:u.jsx("div",{className:`absolute top-0 left-0 h-full ${a(e[r])} transition-all duration-500 ease-out`,style:{width:`${e[r]}%`}})})]},r))}),u.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100",children:u.jsx("p",{className:"text-blue-800",children:"💡 Metrics update dynamically as the AI coach evaluates your responses"})})]})}var x2=_r[" useId ".trim().toString()]||(()=>{}),S2=0;function Qo(e){const[t,n]=m.useState(x2());return La(()=>{e||n(a=>a??String(S2++))},[e]),e||(t?`radix-${t}`:"")}var w2=_r[" useInsertionEffect ".trim().toString()]||La;function E2({prop:e,defaultProp:t,onChange:n=()=>{},caller:a}){const[l,i,r]=N2({defaultProp:t,onChange:n}),o=e!==void 0,c=o?e:l;{const f=m.useRef(e!==void 0);m.useEffect(()=>{const h=f.current;h!==o&&console.warn(`${a} is changing from ${h?"controlled":"uncontrolled"} to ${o?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=o},[o,a])}const s=m.useCallback(f=>{var h;if(o){const d=A2(f)?f(e):f;d!==e&&((h=r.current)==null||h.call(r,d))}else i(f)},[o,e,i,r]);return[c,s]}function N2({defaultProp:e,onChange:t}){const[n,a]=m.useState(e),l=m.useRef(n),i=m.useRef(t);return w2(()=>{i.current=t},[t]),m.useEffect(()=>{var r;l.current!==n&&((r=i.current)==null||r.call(i,n),l.current=n)},[n,l]),[n,a,i]}function A2(e){return typeof e=="function"}function T2(e,t=globalThis==null?void 0:globalThis.document){const n=ct(e);m.useEffect(()=>{const a=l=>{l.key==="Escape"&&n(l)};return t.addEventListener("keydown",a,{capture:!0}),()=>t.removeEventListener("keydown",a,{capture:!0})},[n,t])}var C2="DismissableLayer",ts="dismissableLayer.update",z2="dismissableLayer.pointerDownOutside",j2="dismissableLayer.focusOutside",gd,Tg=m.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Cg=m.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:a,onPointerDownOutside:l,onFocusOutside:i,onInteractOutside:r,onDismiss:o,...c}=e,s=m.useContext(Tg),[f,h]=m.useState(null),d=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,p]=m.useState({}),S=et(t,T=>h(T)),b=Array.from(s.layers),[w]=[...s.layersWithOutsidePointerEventsDisabled].slice(-1),g=b.indexOf(w),v=f?b.indexOf(f):-1,y=s.layersWithOutsidePointerEventsDisabled.size>0,x=v>=g,C=O2(T=>{const A=T.target,j=[...s.branches].some(D=>D.contains(A));!x||j||(l==null||l(T),r==null||r(T),T.defaultPrevented||o==null||o())},d),M=R2(T=>{const A=T.target;[...s.branches].some(D=>D.contains(A))||(i==null||i(T),r==null||r(T),T.defaultPrevented||o==null||o())},d);return T2(T=>{v===s.layers.size-1&&(a==null||a(T),!T.defaultPrevented&&o&&(T.preventDefault(),o()))},d),m.useEffect(()=>{if(f)return n&&(s.layersWithOutsidePointerEventsDisabled.size===0&&(gd=d.body.style.pointerEvents,d.body.style.pointerEvents="none"),s.layersWithOutsidePointerEventsDisabled.add(f)),s.layers.add(f),pd(),()=>{n&&s.layersWithOutsidePointerEventsDisabled.size===1&&(d.body.style.pointerEvents=gd)}},[f,d,n,s]),m.useEffect(()=>()=>{f&&(s.layers.delete(f),s.layersWithOutsidePointerEventsDisabled.delete(f),pd())},[f,s]),m.useEffect(()=>{const T=()=>p({});return document.addEventListener(ts,T),()=>document.removeEventListener(ts,T)},[]),u.jsx(Xe.div,{...c,ref:S,style:{pointerEvents:y?x?"auto":"none":void 0,...e.style},onFocusCapture:De(e.onFocusCapture,M.onFocusCapture),onBlurCapture:De(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:De(e.onPointerDownCapture,C.onPointerDownCapture)})});Cg.displayName=C2;var _2="DismissableLayerBranch",M2=m.forwardRef((e,t)=>{const n=m.useContext(Tg),a=m.useRef(null),l=et(t,a);return m.useEffect(()=>{const i=a.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),u.jsx(Xe.div,{...e,ref:l})});M2.displayName=_2;function O2(e,t=globalThis==null?void 0:globalThis.document){const n=ct(e),a=m.useRef(!1),l=m.useRef(()=>{});return m.useEffect(()=>{const i=o=>{if(o.target&&!a.current){let c=function(){zg(z2,n,s,{discrete:!0})};const s={originalEvent:o};o.pointerType==="touch"?(t.removeEventListener("click",l.current),l.current=c,t.addEventListener("click",l.current,{once:!0})):c()}else t.removeEventListener("click",l.current);a.current=!1},r=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(r),t.removeEventListener("pointerdown",i),t.removeEventListener("click",l.current)}},[t,n]),{onPointerDownCapture:()=>a.current=!0}}function R2(e,t=globalThis==null?void 0:globalThis.document){const n=ct(e),a=m.useRef(!1);return m.useEffect(()=>{const l=i=>{i.target&&!a.current&&zg(j2,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",l),()=>t.removeEventListener("focusin",l)},[t,n]),{onFocusCapture:()=>a.current=!0,onBlurCapture:()=>a.current=!1}}function pd(){const e=new CustomEvent(ts);document.dispatchEvent(e)}function zg(e,t,n,{discrete:a}){const l=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&l.addEventListener(e,t,{once:!0}),a?Vx(l,i):l.dispatchEvent(i)}var Zo="focusScope.autoFocusOnMount",Ko="focusScope.autoFocusOnUnmount",yd={bubbles:!1,cancelable:!0},D2="FocusScope",jg=m.forwardRef((e,t)=>{const{loop:n=!1,trapped:a=!1,onMountAutoFocus:l,onUnmountAutoFocus:i,...r}=e,[o,c]=m.useState(null),s=ct(l),f=ct(i),h=m.useRef(null),d=et(t,b=>c(b)),p=m.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;m.useEffect(()=>{if(a){let b=function(y){if(p.paused||!o)return;const x=y.target;o.contains(x)?h.current=x:Ft(h.current,{select:!0})},w=function(y){if(p.paused||!o)return;const x=y.relatedTarget;x!==null&&(o.contains(x)||Ft(h.current,{select:!0}))},g=function(y){if(document.activeElement===document.body)for(const C of y)C.removedNodes.length>0&&Ft(o)};document.addEventListener("focusin",b),document.addEventListener("focusout",w);const v=new MutationObserver(g);return o&&v.observe(o,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",b),document.removeEventListener("focusout",w),v.disconnect()}}},[a,o,p.paused]),m.useEffect(()=>{if(o){xd.add(p);const b=document.activeElement;if(!o.contains(b)){const g=new CustomEvent(Zo,yd);o.addEventListener(Zo,s),o.dispatchEvent(g),g.defaultPrevented||(k2(Y2(_g(o)),{select:!0}),document.activeElement===b&&Ft(o))}return()=>{o.removeEventListener(Zo,s),setTimeout(()=>{const g=new CustomEvent(Ko,yd);o.addEventListener(Ko,f),o.dispatchEvent(g),g.defaultPrevented||Ft(b??document.body,{select:!0}),o.removeEventListener(Ko,f),xd.remove(p)},0)}}},[o,s,f,p]);const S=m.useCallback(b=>{if(!n&&!a||p.paused)return;const w=b.key==="Tab"&&!b.altKey&&!b.ctrlKey&&!b.metaKey,g=document.activeElement;if(w&&g){const v=b.currentTarget,[y,x]=U2(v);y&&x?!b.shiftKey&&g===x?(b.preventDefault(),n&&Ft(y,{select:!0})):b.shiftKey&&g===y&&(b.preventDefault(),n&&Ft(x,{select:!0})):g===v&&b.preventDefault()}},[n,a,p.paused]);return u.jsx(Xe.div,{tabIndex:-1,...r,ref:d,onKeyDown:S})});jg.displayName=D2;function k2(e,{select:t=!1}={}){const n=document.activeElement;for(const a of e)if(Ft(a,{select:t}),document.activeElement!==n)return}function U2(e){const t=_g(e),n=bd(t,e),a=bd(t.reverse(),e);return[n,a]}function _g(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:a=>{const l=a.tagName==="INPUT"&&a.type==="hidden";return a.disabled||a.hidden||l?NodeFilter.FILTER_SKIP:a.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function bd(e,t){for(const n of e)if(!H2(n,{upTo:t}))return n}function H2(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function B2(e){return e instanceof HTMLInputElement&&"select"in e}function Ft(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&B2(e)&&t&&e.select()}}var xd=L2();function L2(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Sd(e,t),e.unshift(t)},remove(t){var n;e=Sd(e,t),(n=e[0])==null||n.resume()}}}function Sd(e,t){const n=[...e],a=n.indexOf(t);return a!==-1&&n.splice(a,1),n}function Y2(e){return e.filter(t=>t.tagName!=="A")}var G2="Portal",Mg=m.forwardRef((e,t)=>{var o;const{container:n,...a}=e,[l,i]=m.useState(!1);La(()=>i(!0),[]);const r=n||l&&((o=globalThis==null?void 0:globalThis.document)==null?void 0:o.body);return r?C0.createPortal(u.jsx(Xe.div,{...a,ref:t}),r):null});Mg.displayName=G2;var Jo=0;function q2(){m.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??wd()),document.body.insertAdjacentElement("beforeend",e[1]??wd()),Jo++,()=>{Jo===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Jo--}},[])}function wd(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var bt=function(){return bt=Object.assign||function(t){for(var n,a=1,l=arguments.length;a<l;a++){n=arguments[a];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},bt.apply(this,arguments)};function Og(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var l=0,a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]]);return n}function X2(e,t,n){if(n||arguments.length===2)for(var a=0,l=t.length,i;a<l;a++)(i||!(a in t))&&(i||(i=Array.prototype.slice.call(t,0,a)),i[a]=t[a]);return e.concat(i||Array.prototype.slice.call(t))}var Vi="right-scroll-bar-position",Qi="width-before-scroll-bar",V2="with-scroll-bars-hidden",Q2="--removed-body-scroll-bar-size";function Wo(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function Z2(e,t){var n=m.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(a){var l=n.value;l!==a&&(n.value=a,n.callback(a,l))}}}})[0];return n.callback=t,n.facade}var K2=typeof window<"u"?m.useLayoutEffect:m.useEffect,Ed=new WeakMap;function J2(e,t){var n=Z2(t||null,function(a){return e.forEach(function(l){return Wo(l,a)})});return K2(function(){var a=Ed.get(n);if(a){var l=new Set(a),i=new Set(e),r=n.current;l.forEach(function(o){i.has(o)||Wo(o,null)}),i.forEach(function(o){l.has(o)||Wo(o,r)})}Ed.set(n,e)},[e]),n}function W2(e){return e}function $2(e,t){t===void 0&&(t=W2);var n=[],a=!1,l={read:function(){if(a)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var r=t(i,a);return n.push(r),function(){n=n.filter(function(o){return o!==r})}},assignSyncMedium:function(i){for(a=!0;n.length;){var r=n;n=[],r.forEach(i)}n={push:function(o){return i(o)},filter:function(){return n}}},assignMedium:function(i){a=!0;var r=[];if(n.length){var o=n;n=[],o.forEach(i),r=n}var c=function(){var f=r;r=[],f.forEach(i)},s=function(){return Promise.resolve().then(c)};s(),n={push:function(f){r.push(f),s()},filter:function(f){return r=r.filter(f),n}}}};return l}function F2(e){e===void 0&&(e={});var t=$2(null);return t.options=bt({async:!0,ssr:!1},e),t}var Rg=function(e){var t=e.sideCar,n=Og(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var a=t.read();if(!a)throw new Error("Sidecar medium not found");return m.createElement(a,bt({},n))};Rg.isSideCarExport=!0;function P2(e,t){return e.useMedium(t),Rg}var Dg=F2(),$o=function(){},to=m.forwardRef(function(e,t){var n=m.useRef(null),a=m.useState({onScrollCapture:$o,onWheelCapture:$o,onTouchMoveCapture:$o}),l=a[0],i=a[1],r=e.forwardProps,o=e.children,c=e.className,s=e.removeScrollBar,f=e.enabled,h=e.shards,d=e.sideCar,p=e.noRelative,S=e.noIsolation,b=e.inert,w=e.allowPinchZoom,g=e.as,v=g===void 0?"div":g,y=e.gapMode,x=Og(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),C=d,M=J2([n,t]),T=bt(bt({},x),l);return m.createElement(m.Fragment,null,f&&m.createElement(C,{sideCar:Dg,removeScrollBar:s,shards:h,noRelative:p,noIsolation:S,inert:b,setCallbacks:i,allowPinchZoom:!!w,lockRef:n,gapMode:y}),r?m.cloneElement(m.Children.only(o),bt(bt({},T),{ref:M})):m.createElement(v,bt({},T,{className:c,ref:M}),o))});to.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};to.classNames={fullWidth:Qi,zeroRight:Vi};var Nd,I2=function(){if(Nd)return Nd;if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function eS(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=I2();return t&&e.setAttribute("nonce",t),e}function tS(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function nS(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var aS=function(){var e=0,t=null;return{add:function(n){e==0&&(t=eS())&&(tS(t,n),nS(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},lS=function(){var e=aS();return function(t,n){m.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},kg=function(){var e=lS(),t=function(n){var a=n.styles,l=n.dynamic;return e(a,l),null};return t},iS={left:0,top:0,right:0,gap:0},Fo=function(e){return parseInt(e||"",10)||0},rS=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],a=t[e==="padding"?"paddingTop":"marginTop"],l=t[e==="padding"?"paddingRight":"marginRight"];return[Fo(n),Fo(a),Fo(l)]},oS=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return iS;var t=rS(e),n=document.documentElement.clientWidth,a=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,a-n+t[2]-t[0])}},cS=kg(),Ca="data-scroll-locked",sS=function(e,t,n,a){var l=e.left,i=e.top,r=e.right,o=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(V2,` {
   overflow: hidden `).concat(a,`;
   padding-right: `).concat(o,"px ").concat(a,`;
  }
  body[`).concat(Ca,`] {
    overflow: hidden `).concat(a,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(a,";"),n==="margin"&&`
    padding-left: `.concat(l,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(r,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(o,"px ").concat(a,`;
    `),n==="padding"&&"padding-right: ".concat(o,"px ").concat(a,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(Vi,` {
    right: `).concat(o,"px ").concat(a,`;
  }
  
  .`).concat(Qi,` {
    margin-right: `).concat(o,"px ").concat(a,`;
  }
  
  .`).concat(Vi," .").concat(Vi,` {
    right: 0 `).concat(a,`;
  }
  
  .`).concat(Qi," .").concat(Qi,` {
    margin-right: 0 `).concat(a,`;
  }
  
  body[`).concat(Ca,`] {
    `).concat(Q2,": ").concat(o,`px;
  }
`)},Ad=function(){var e=parseInt(document.body.getAttribute(Ca)||"0",10);return isFinite(e)?e:0},uS=function(){m.useEffect(function(){return document.body.setAttribute(Ca,(Ad()+1).toString()),function(){var e=Ad()-1;e<=0?document.body.removeAttribute(Ca):document.body.setAttribute(Ca,e.toString())}},[])},fS=function(e){var t=e.noRelative,n=e.noImportant,a=e.gapMode,l=a===void 0?"margin":a;uS();var i=m.useMemo(function(){return oS(l)},[l]);return m.createElement(cS,{styles:sS(i,!t,l,n?"":"!important")})},ns=!1;if(typeof window<"u")try{var Ei=Object.defineProperty({},"passive",{get:function(){return ns=!0,!0}});window.addEventListener("test",Ei,Ei),window.removeEventListener("test",Ei,Ei)}catch{ns=!1}var na=ns?{passive:!1}:!1,dS=function(e){return e.tagName==="TEXTAREA"},Ug=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!dS(e)&&n[t]==="visible")},hS=function(e){return Ug(e,"overflowY")},mS=function(e){return Ug(e,"overflowX")},Td=function(e,t){var n=t.ownerDocument,a=t;do{typeof ShadowRoot<"u"&&a instanceof ShadowRoot&&(a=a.host);var l=Hg(e,a);if(l){var i=Bg(e,a),r=i[1],o=i[2];if(r>o)return!0}a=a.parentNode}while(a&&a!==n.body);return!1},vS=function(e){var t=e.scrollTop,n=e.scrollHeight,a=e.clientHeight;return[t,n,a]},gS=function(e){var t=e.scrollLeft,n=e.scrollWidth,a=e.clientWidth;return[t,n,a]},Hg=function(e,t){return e==="v"?hS(t):mS(t)},Bg=function(e,t){return e==="v"?vS(t):gS(t)},pS=function(e,t){return e==="h"&&t==="rtl"?-1:1},yS=function(e,t,n,a,l){var i=pS(e,window.getComputedStyle(t).direction),r=i*a,o=n.target,c=t.contains(o),s=!1,f=r>0,h=0,d=0;do{if(!o)break;var p=Bg(e,o),S=p[0],b=p[1],w=p[2],g=b-w-i*S;(S||g)&&Hg(e,o)&&(h+=g,d+=S);var v=o.parentNode;o=v&&v.nodeType===Node.DOCUMENT_FRAGMENT_NODE?v.host:v}while(!c&&o!==document.body||c&&(t.contains(o)||t===o));return(f&&(l&&Math.abs(h)<1||!l&&r>h)||!f&&(l&&Math.abs(d)<1||!l&&-r>d))&&(s=!0),s},Ni=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Cd=function(e){return[e.deltaX,e.deltaY]},zd=function(e){return e&&"current"in e?e.current:e},bS=function(e,t){return e[0]===t[0]&&e[1]===t[1]},xS=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},SS=0,aa=[];function wS(e){var t=m.useRef([]),n=m.useRef([0,0]),a=m.useRef(),l=m.useState(SS++)[0],i=m.useState(kg)[0],r=m.useRef(e);m.useEffect(function(){r.current=e},[e]),m.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(l));var b=X2([e.lockRef.current],(e.shards||[]).map(zd),!0).filter(Boolean);return b.forEach(function(w){return w.classList.add("allow-interactivity-".concat(l))}),function(){document.body.classList.remove("block-interactivity-".concat(l)),b.forEach(function(w){return w.classList.remove("allow-interactivity-".concat(l))})}}},[e.inert,e.lockRef.current,e.shards]);var o=m.useCallback(function(b,w){if("touches"in b&&b.touches.length===2||b.type==="wheel"&&b.ctrlKey)return!r.current.allowPinchZoom;var g=Ni(b),v=n.current,y="deltaX"in b?b.deltaX:v[0]-g[0],x="deltaY"in b?b.deltaY:v[1]-g[1],C,M=b.target,T=Math.abs(y)>Math.abs(x)?"h":"v";if("touches"in b&&T==="h"&&M.type==="range")return!1;var A=Td(T,M);if(!A)return!0;if(A?C=T:(C=T==="v"?"h":"v",A=Td(T,M)),!A)return!1;if(!a.current&&"changedTouches"in b&&(y||x)&&(a.current=C),!C)return!0;var j=a.current||C;return yS(j,w,b,j==="h"?y:x,!0)},[]),c=m.useCallback(function(b){var w=b;if(!(!aa.length||aa[aa.length-1]!==i)){var g="deltaY"in w?Cd(w):Ni(w),v=t.current.filter(function(C){return C.name===w.type&&(C.target===w.target||w.target===C.shadowParent)&&bS(C.delta,g)})[0];if(v&&v.should){w.cancelable&&w.preventDefault();return}if(!v){var y=(r.current.shards||[]).map(zd).filter(Boolean).filter(function(C){return C.contains(w.target)}),x=y.length>0?o(w,y[0]):!r.current.noIsolation;x&&w.cancelable&&w.preventDefault()}}},[]),s=m.useCallback(function(b,w,g,v){var y={name:b,delta:w,target:g,should:v,shadowParent:ES(g)};t.current.push(y),setTimeout(function(){t.current=t.current.filter(function(x){return x!==y})},1)},[]),f=m.useCallback(function(b){n.current=Ni(b),a.current=void 0},[]),h=m.useCallback(function(b){s(b.type,Cd(b),b.target,o(b,e.lockRef.current))},[]),d=m.useCallback(function(b){s(b.type,Ni(b),b.target,o(b,e.lockRef.current))},[]);m.useEffect(function(){return aa.push(i),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:d}),document.addEventListener("wheel",c,na),document.addEventListener("touchmove",c,na),document.addEventListener("touchstart",f,na),function(){aa=aa.filter(function(b){return b!==i}),document.removeEventListener("wheel",c,na),document.removeEventListener("touchmove",c,na),document.removeEventListener("touchstart",f,na)}},[]);var p=e.removeScrollBar,S=e.inert;return m.createElement(m.Fragment,null,S?m.createElement(i,{styles:xS(l)}):null,p?m.createElement(fS,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function ES(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const NS=P2(Dg,wS);var Lg=m.forwardRef(function(e,t){return m.createElement(to,bt({},e,{ref:t,sideCar:NS}))});Lg.classNames=to.classNames;const AS=Lg;var TS=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},la=new WeakMap,Ai=new WeakMap,Ti={},Po=0,Yg=function(e){return e&&(e.host||Yg(e.parentNode))},CS=function(e,t){return t.map(function(n){if(e.contains(n))return n;var a=Yg(n);return a&&e.contains(a)?a:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},zS=function(e,t,n,a){var l=CS(t,Array.isArray(e)?e:[e]);Ti[n]||(Ti[n]=new WeakMap);var i=Ti[n],r=[],o=new Set,c=new Set(l),s=function(h){!h||o.has(h)||(o.add(h),s(h.parentNode))};l.forEach(s);var f=function(h){!h||c.has(h)||Array.prototype.forEach.call(h.children,function(d){if(o.has(d))f(d);else try{var p=d.getAttribute(a),S=p!==null&&p!=="false",b=(la.get(d)||0)+1,w=(i.get(d)||0)+1;la.set(d,b),i.set(d,w),r.push(d),b===1&&S&&Ai.set(d,!0),w===1&&d.setAttribute(n,"true"),S||d.setAttribute(a,"true")}catch(g){console.error("aria-hidden: cannot operate on ",d,g)}})};return f(t),o.clear(),Po++,function(){r.forEach(function(h){var d=la.get(h)-1,p=i.get(h)-1;la.set(h,d),i.set(h,p),d||(Ai.has(h)||h.removeAttribute(a),Ai.delete(h)),p||h.removeAttribute(n)}),Po--,Po||(la=new WeakMap,la=new WeakMap,Ai=new WeakMap,Ti={})}},jS=function(e,t,n){n===void 0&&(n="data-aria-hidden");var a=Array.from(Array.isArray(e)?e:[e]),l=t||TS(e);return l?(a.push.apply(a,Array.from(l.querySelectorAll("[aria-live], script"))),zS(a,l,n,"aria-hidden")):function(){return null}};function _S(e){const t=MS(e),n=m.forwardRef((a,l)=>{const{children:i,...r}=a,o=m.Children.toArray(i),c=o.find(RS);if(c){const s=c.props.children,f=o.map(h=>h===c?m.Children.count(s)>1?m.Children.only(null):m.isValidElement(s)?s.props.children:null:h);return u.jsx(t,{...r,ref:l,children:m.isValidElement(s)?m.cloneElement(s,void 0,f):null})}return u.jsx(t,{...r,ref:l,children:i})});return n.displayName=`${e}.Slot`,n}function MS(e){const t=m.forwardRef((n,a)=>{const{children:l,...i}=n;if(m.isValidElement(l)){const r=kS(l),o=DS(i,l.props);return l.type!==m.Fragment&&(o.ref=a?Fr(a,r):r),m.cloneElement(l,o)}return m.Children.count(l)>1?m.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var OS=Symbol("radix.slottable");function RS(e){return m.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===OS}function DS(e,t){const n={...t};for(const a in t){const l=e[a],i=t[a];/^on[A-Z]/.test(a)?l&&i?n[a]=(...o)=>{const c=i(...o);return l(...o),c}:l&&(n[a]=l):a==="style"?n[a]={...l,...i}:a==="className"&&(n[a]=[l,i].filter(Boolean).join(" "))}return{...e,...n}}function kS(e){var a,l;let t=(a=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(l=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:l.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var no="Dialog",[Gg,bw]=dg(no),[US,pt]=Gg(no),qg=e=>{const{__scopeDialog:t,children:n,open:a,defaultOpen:l,onOpenChange:i,modal:r=!0}=e,o=m.useRef(null),c=m.useRef(null),[s,f]=E2({prop:a,defaultProp:l??!1,onChange:i,caller:no});return u.jsx(US,{scope:t,triggerRef:o,contentRef:c,contentId:Qo(),titleId:Qo(),descriptionId:Qo(),open:s,onOpenChange:f,onOpenToggle:m.useCallback(()=>f(h=>!h),[f]),modal:r,children:n})};qg.displayName=no;var Xg="DialogTrigger",Vg=m.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,l=pt(Xg,n),i=et(t,l.triggerRef);return u.jsx(Xe.button,{type:"button","aria-haspopup":"dialog","aria-expanded":l.open,"aria-controls":l.contentId,"data-state":pu(l.open),...a,ref:i,onClick:De(e.onClick,l.onOpenToggle)})});Vg.displayName=Xg;var vu="DialogPortal",[HS,Qg]=Gg(vu,{forceMount:void 0}),Zg=e=>{const{__scopeDialog:t,forceMount:n,children:a,container:l}=e,i=pt(vu,t);return u.jsx(HS,{scope:t,forceMount:n,children:m.Children.map(a,r=>u.jsx(Cn,{present:n||i.open,children:u.jsx(Mg,{asChild:!0,container:l,children:r})}))})};Zg.displayName=vu;var Cr="DialogOverlay",Kg=m.forwardRef((e,t)=>{const n=Qg(Cr,e.__scopeDialog),{forceMount:a=n.forceMount,...l}=e,i=pt(Cr,e.__scopeDialog);return i.modal?u.jsx(Cn,{present:a||i.open,children:u.jsx(LS,{...l,ref:t})}):null});Kg.displayName=Cr;var BS=_S("DialogOverlay.RemoveScroll"),LS=m.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,l=pt(Cr,n);return u.jsx(AS,{as:BS,allowPinchZoom:!0,shards:[l.contentRef],children:u.jsx(Xe.div,{"data-state":pu(l.open),...a,ref:t,style:{pointerEvents:"auto",...a.style}})})}),Vn="DialogContent",Jg=m.forwardRef((e,t)=>{const n=Qg(Vn,e.__scopeDialog),{forceMount:a=n.forceMount,...l}=e,i=pt(Vn,e.__scopeDialog);return u.jsx(Cn,{present:a||i.open,children:i.modal?u.jsx(YS,{...l,ref:t}):u.jsx(GS,{...l,ref:t})})});Jg.displayName=Vn;var YS=m.forwardRef((e,t)=>{const n=pt(Vn,e.__scopeDialog),a=m.useRef(null),l=et(t,n.contentRef,a);return m.useEffect(()=>{const i=a.current;if(i)return jS(i)},[]),u.jsx(Wg,{...e,ref:l,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:De(e.onCloseAutoFocus,i=>{var r;i.preventDefault(),(r=n.triggerRef.current)==null||r.focus()}),onPointerDownOutside:De(e.onPointerDownOutside,i=>{const r=i.detail.originalEvent,o=r.button===0&&r.ctrlKey===!0;(r.button===2||o)&&i.preventDefault()}),onFocusOutside:De(e.onFocusOutside,i=>i.preventDefault())})}),GS=m.forwardRef((e,t)=>{const n=pt(Vn,e.__scopeDialog),a=m.useRef(!1),l=m.useRef(!1);return u.jsx(Wg,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var r,o;(r=e.onCloseAutoFocus)==null||r.call(e,i),i.defaultPrevented||(a.current||(o=n.triggerRef.current)==null||o.focus(),i.preventDefault()),a.current=!1,l.current=!1},onInteractOutside:i=>{var c,s;(c=e.onInteractOutside)==null||c.call(e,i),i.defaultPrevented||(a.current=!0,i.detail.originalEvent.type==="pointerdown"&&(l.current=!0));const r=i.target;((s=n.triggerRef.current)==null?void 0:s.contains(r))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&l.current&&i.preventDefault()}})}),Wg=m.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:a,onOpenAutoFocus:l,onCloseAutoFocus:i,...r}=e,o=pt(Vn,n),c=m.useRef(null),s=et(t,c);return q2(),u.jsxs(u.Fragment,{children:[u.jsx(jg,{asChild:!0,loop:!0,trapped:a,onMountAutoFocus:l,onUnmountAutoFocus:i,children:u.jsx(Cg,{role:"dialog",id:o.contentId,"aria-describedby":o.descriptionId,"aria-labelledby":o.titleId,"data-state":pu(o.open),...r,ref:s,onDismiss:()=>o.onOpenChange(!1)})}),u.jsxs(u.Fragment,{children:[u.jsx(VS,{titleId:o.titleId}),u.jsx(ZS,{contentRef:c,descriptionId:o.descriptionId})]})]})}),gu="DialogTitle",qS=m.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,l=pt(gu,n);return u.jsx(Xe.h2,{id:l.titleId,...a,ref:t})});qS.displayName=gu;var $g="DialogDescription",XS=m.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,l=pt($g,n);return u.jsx(Xe.p,{id:l.descriptionId,...a,ref:t})});XS.displayName=$g;var Fg="DialogClose",Pg=m.forwardRef((e,t)=>{const{__scopeDialog:n,...a}=e,l=pt(Fg,n);return u.jsx(Xe.button,{type:"button",...a,ref:t,onClick:De(e.onClick,()=>l.onOpenChange(!1))})});Pg.displayName=Fg;function pu(e){return e?"open":"closed"}var Ig="DialogTitleWarning",[xw,e0]=Jx(Ig,{contentName:Vn,titleName:gu,docsSlug:"dialog"}),VS=({titleId:e})=>{const t=e0(Ig),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return m.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},QS="DialogDescriptionWarning",ZS=({contentRef:e,descriptionId:t})=>{const a=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${e0(QS).contentName}}.`;return m.useEffect(()=>{var i;const l=(i=e.current)==null?void 0:i.getAttribute("aria-describedby");t&&l&&(document.getElementById(t)||console.warn(a))},[a,e,t]),null},KS=qg,JS=Vg,WS=Zg,$S=Kg,FS=Jg,PS=Pg;function IS({...e}){return u.jsx(KS,{"data-slot":"sheet",...e})}function ew({...e}){return u.jsx(JS,{"data-slot":"sheet-trigger",...e})}function tw({...e}){return u.jsx(WS,{"data-slot":"sheet-portal",...e})}function nw({className:e,...t}){return u.jsx($S,{"data-slot":"sheet-overlay",className:Pn("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",e),...t})}function aw({className:e,children:t,side:n="right",...a}){return u.jsxs(tw,{children:[u.jsx(nw,{}),u.jsxs(FS,{"data-slot":"sheet-content",className:Pn("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",n==="right"&&"data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",n==="left"&&"data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",n==="top"&&"data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b",n==="bottom"&&"data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t",e),...a,children:[t,u.jsxs(PS,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",children:[u.jsx(Ux,{className:"size-4"}),u.jsx("span",{className:"sr-only",children:"Close"})]})]})]})}const Ci="https://attending-physician.onrender.com".replace(/\/$/,"")??"",Io="ap-chat-session",lw={title:"Emergency Department Presentation",patientDetails:"45-year-old male, John Smith",chiefComplaint:"Chest pain and shortness of breath for 2 hours",vitals:"BP: 145/92, HR: 105, RR: 22, Temp: 37.2°C, SpO2: 94% on room air",initialAssessment:"Patient appears anxious, diaphoretic, clutching chest"};function iw(){const e=!!Ci,[t,n]=m.useState("case-presentation"),[a,l]=m.useState(()=>localStorage.getItem(Io)??""),[i,r]=m.useState([]),[o,c]=m.useState(""),[s,f]=m.useState(!1),[h,d]=m.useState(!1),[p,S]=m.useState(""),[b,w]=m.useState({focusedInformation:0,workingDiagnosis:0,clinicalReasoning:0,differentialDiagnosis:0,conciseness:0,diagnosticWorkup:0,managementPlan:0,hypothesisDriven:0,synthesis:0}),[g,v]=m.useState(!1),[y,x]=m.useState(!1),C=m.useRef(null),M=()=>{var B;(B=C.current)==null||B.scrollIntoView({behavior:"smooth"})};m.useEffect(()=>{M()},[i]),m.useEffect(()=>{!a||!e||T(a)},[a,e]);const T=async B=>{if(!(!e||!B)){f(!0);try{const Y=await fetch(`${Ci}/api/chat/sessions/${B}`);if(!Y.ok){if(Y.status===404)throw Jt(),new Error("Session expired. Start a new one to continue.");const _=await Y.json().catch(()=>({}));throw new Error((_==null?void 0:_.detail)??"Unable to load session.")}const z=await Y.json();D(z),S("")}catch(Y){S(Y.message)}finally{f(!1)}}},A={focusedInformation:["focused_relevant_information","1"],workingDiagnosis:["clear_working_diagnosis","2"],clinicalReasoning:["logical_organization_reasoning","3"],differentialDiagnosis:["differential_diagnosis","4"],conciseness:["conciseness_efficiency","5"],diagnosticWorkup:["diagnostic_workup_plan","6"],managementPlan:["management_plan_disposition","7"],hypothesisDriven:["hypothesis_driven_inquiry","8"],synthesis:["synthesis_ability","9"]},j=(B,Y)=>{for(const z of Y){const _=B==null?void 0:B[z];if(_){if(typeof _=="number")return Math.round(_);if(typeof(_==null?void 0:_.confidence)=="number")return Math.round(_.confidence*100);if(typeof(_==null?void 0:_.score)=="number")return Math.round(_.score)}}return 0},D=B=>{const Y=B.state;if(!Y)return;const z=[];if(Y.initial_evaluation&&z.push({id:"initial-eval",role:"assistant",variant:"initial",content:Y.initial_evaluation.overall_assessment??"Let's explore your clinical reasoning.",timestamp:new Date,meta:{priorityGaps:Y.initial_evaluation.priority_gaps}}),(Y.conversation_history??[]).forEach((E,K)=>{var ie,yt,ht;z.push({id:`assistant-question-${K}`,role:"assistant",variant:"question",content:E.question,timestamp:new Date,meta:{metricTarget:(ie=E.question_obj)==null?void 0:ie.metric_target,followUpHint:(yt=E.question_obj)==null?void 0:yt.follow_up_hint,acceptableCriteria:(ht=E.question_obj)==null?void 0:ht.acceptable_criteria}}),E.answer&&z.push({id:`user-answer-${K}`,role:"user",variant:"answer",content:E.answer,timestamp:new Date}),E.evaluation&&z.push({id:`assistant-eval-${K}`,role:"assistant",variant:"evaluation",content:E.evaluation.feedback,timestamp:new Date,meta:{metricTarget:E.evaluation.metric,status:E.evaluation.status,strengths:E.evaluation.strengths,weaknesses:E.evaluation.weaknesses,nextAction:E.evaluation.next_action}})}),r(z),Y.metrics_status){const E=Y.metrics_status;w({focusedInformation:j(E,A.focusedInformation),workingDiagnosis:j(E,A.workingDiagnosis),clinicalReasoning:j(E,A.clinicalReasoning),differentialDiagnosis:j(E,A.differentialDiagnosis),conciseness:j(E,A.conciseness),diagnosticWorkup:j(E,A.diagnosticWorkup),managementPlan:j(E,A.managementPlan),hypothesisDriven:j(E,A.hypothesisDriven),synthesis:j(E,A.synthesis)})}v(B.status!=="active")},le=async B=>{if(!e){S("Set VITE_API_BASE_URL to your FastAPI deployment first.");return}if(!B.trim()){S("Please enter a case presentation.");return}if(B.trim().length<40){S("Please provide at least 40 characters so the coach can evaluate the case.");return}f(!0),S("");try{const Y=await fetch(`${Ci}/api/chat/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({presentation:B})}),z=await Y.json().catch(()=>({}));if(!Y.ok)throw new Error((z==null?void 0:z.detail)??"Unable to start a session.");localStorage.setItem(Io,z.session_id),l(z.session_id),n("interaction")}catch(Y){S(Y.message??"Failed to reach the backend.")}finally{f(!1)}},Te=async()=>{var Y,z;if(!a){S("Start a session first.");return}if(!o.trim()){S("Please enter your response.");return}const B={id:`user-${Date.now()}`,role:"user",content:o,timestamp:new Date};r(_=>[..._,B]),c(""),d(!0),S("");try{const _=await fetch(`${Ci}/api/chat/sessions/${a}/messages`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:o})}),E=await _.json().catch(()=>({}));if(!_.ok)throw new Error((E==null?void 0:E.detail)??"Unable to process that answer.");await T(a),((z=(Y=E==null?void 0:E.response)==null?void 0:Y.data)==null?void 0:z.type)==="session_complete"&&v(!0)}catch(_){S(_.message??"Something went wrong.")}finally{d(!1)}},Jt=()=>{l(""),localStorage.removeItem(Io),r([]),c(""),w({focusedInformation:0,workingDiagnosis:0,clinicalReasoning:0,differentialDiagnosis:0,conciseness:0,diagnosticWorkup:0,managementPlan:0,hypothesisDriven:0,synthesis:0}),v(!1),n("case-presentation"),S("")};return u.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50",children:[t==="case-presentation"&&u.jsx(g2,{caseInfo:lw,onSubmit:le,onBack:()=>window.location.href="/",error:p,isLoading:s}),t==="interaction"&&u.jsxs("div",{className:"flex flex-col lg:flex-row lg:h-screen",children:[u.jsxs("div",{className:"flex-1 flex flex-col",children:[u.jsxs("div",{className:"bg-white border-b border-gray-200 p-4 flex items-center justify-between",children:[u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsxs(cu,{to:"/",className:"text-blue-600 hover:text-blue-700 flex items-center gap-2",children:[u.jsx(sg,{size:20}),"Back to Home"]}),u.jsxs("div",{children:[u.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"AI Medical Coach"}),u.jsx("p",{className:"text-sm text-gray-600",children:"Interactive Training Session"})]})]}),u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsxs(IS,{open:y,onOpenChange:x,children:[u.jsx(ew,{asChild:!0,children:u.jsx(Al,{variant:"outline",className:"lg:hidden",children:"View Metrics"})}),u.jsx(aw,{side:"right",className:"w-full sm:max-w-sm p-0",children:u.jsx(vd,{metrics:b,className:"h-full"})})]}),u.jsx(Al,{variant:"outline",onClick:Jt,children:"Reset Session"})]})]}),u.jsx(h2,{className:"flex-1 p-6",children:u.jsxs("div",{className:"max-w-4xl mx-auto space-y-4",children:[s&&i.length===0&&u.jsx("div",{className:"text-center text-gray-500",children:"Loading session..."}),i.map(B=>{var Y;return u.jsx(fu,{className:`p-4 ${B.role==="user"?"bg-blue-50 ml-12":"bg-gray-50 mr-12"}`,children:u.jsxs("div",{className:"flex items-start gap-3",children:[u.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${B.role==="user"?"bg-blue-600":"bg-gray-600"}`,children:B.role==="user"?"You":"AI"}),u.jsxs("div",{className:"flex-1",children:[u.jsxs("div",{className:"font-semibold text-sm mb-1",children:[B.role==="user"?"You":"AI Coach",((Y=B.meta)==null?void 0:Y.metricTarget)&&u.jsx("span",{className:"ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:B.meta.metricTarget})]}),u.jsx("p",{className:"text-gray-800",children:B.content})]})]})},B.id)}),h&&u.jsxs("div",{className:"flex items-center gap-2 text-gray-500",children:[u.jsxs("div",{className:"flex gap-1",children:[u.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce"}),u.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"}),u.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"})]}),u.jsx("span",{className:"text-sm",children:"AI is thinking..."})]}),u.jsx("div",{ref:C})]})}),u.jsx("div",{className:"bg-white border-t border-gray-200 p-4",children:u.jsxs("div",{className:"max-w-4xl mx-auto",children:[p&&u.jsx("div",{className:"mb-3 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm",children:p}),g?u.jsxs("div",{className:"text-center p-4 bg-green-50 border border-green-200 rounded",children:[u.jsx("p",{className:"text-green-800 font-semibold",children:"Session Complete!"}),u.jsx("p",{className:"text-sm text-green-700",children:'Check your metrics on the right. Click "Reset Session" to try another case.'})]}):u.jsxs(u.Fragment,{children:[u.jsx(rg,{value:o,onChange:B=>c(B.target.value),placeholder:"Type your response...",className:"min-h-[100px] resize-none",onKeyDown:B=>{B.key==="Enter"&&!B.shiftKey&&(B.preventDefault(),Te())}}),u.jsxs("div",{className:"mt-3 flex justify-between items-center",children:[u.jsx("p",{className:"text-sm text-gray-500",children:"Press Enter to send, Shift+Enter for new line"}),u.jsxs(Al,{onClick:Te,disabled:h||!o.trim(),children:[u.jsx(Ax,{size:16,className:"mr-2"}),"Send"]})]})]})]})})]}),u.jsx("div",{className:"hidden lg:block w-96 h-full",children:u.jsx(vd,{metrics:b,className:"h-full border-l border-blue-100"})})]})]})}function t0(...e){return uu(Pr(e))}const rw=Kv("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function zr({className:e,variant:t,size:n,asChild:a=!1,...l}){const i=a?Qv:"button";return u.jsx(i,{"data-slot":"button",className:t0(rw({variant:t,size:n,className:e})),...l})}function ow(){return u.jsx("header",{className:"sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200",children:u.jsx("div",{className:"container mx-auto px-4",children:u.jsxs("div",{className:"flex items-center justify-between h-16",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center",children:u.jsx(cg,{className:"h-6 w-6 text-white"})}),u.jsx("span",{className:"text-xl text-gray-900",children:"TriageAI Coach"})]}),u.jsxs("nav",{className:"hidden md:flex items-center gap-8",children:[u.jsx("a",{href:"#features",className:"text-gray-600 hover:text-gray-900 transition-colors",children:"Features"}),u.jsx("a",{href:"#how-it-works",className:"text-gray-600 hover:text-gray-900 transition-colors",children:"How It Works"}),u.jsx("a",{href:"#statistics",className:"text-gray-600 hover:text-gray-900 transition-colors",children:"Why It Matters"})]}),u.jsxs("div",{className:"flex items-center gap-4",children:[u.jsx(zr,{variant:"ghost",className:"hidden sm:flex",children:"Sign In"}),u.jsx(zr,{className:"bg-blue-600 hover:bg-blue-700 text-white",children:"Get Started"})]})]})})})}const cw="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function n0(e){const[t,n]=m.useState(!1),a=()=>{n(!0)},{src:l,alt:i,style:r,className:o,...c}=e;return t?u.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${o??""}`,style:r,children:u.jsx("div",{className:"flex items-center justify-center w-full h-full",children:u.jsx("img",{src:cw,alt:"Error loading image",...c,"data-original-url":l})})}):u.jsx("img",{src:l,alt:i,className:o,style:r,...c,onError:a})}function sw(){return u.jsx("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden",children:u.jsx("div",{className:"container mx-auto px-4 py-20 lg:py-28",children:u.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[u.jsxs("div",{className:"space-y-8",children:[u.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full",children:[u.jsx("span",{className:"w-2 h-2 bg-blue-500 rounded-full animate-pulse"}),u.jsx("span",{children:"AI-Powered Medical Training"})]}),u.jsx("h1",{className:"text-5xl lg:text-6xl text-gray-900",children:"Master Triage Skills with AI Coaching"}),u.jsx("p",{className:"text-xl text-gray-600 leading-relaxed",children:"Train nurses to become confident triage professionals through realistic case scenarios and personalized AI feedback. Voice and text interactions available."}),u.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:u.jsx(zr,{size:"lg",className:"bg-blue-600 hover:bg-blue-700 text-white px-8 py-6",asChild:!0,children:u.jsxs(cu,{to:"/chat",children:["Start Training",u.jsx(ug,{className:"ml-2 h-5 w-5"})]})})}),u.jsxs("div",{className:"flex items-center gap-8 pt-4",children:[u.jsxs("div",{children:[u.jsx("div",{className:"text-3xl text-blue-600",children:"1000+"}),u.jsx("div",{className:"text-gray-600",children:"Nurses Trained"})]}),u.jsx("div",{className:"h-12 w-px bg-gray-300"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-3xl text-blue-600",children:"50+"}),u.jsx("div",{className:"text-gray-600",children:"Case Scenarios"})]}),u.jsx("div",{className:"h-12 w-px bg-gray-300"}),u.jsxs("div",{children:[u.jsx("div",{className:"text-3xl text-blue-600",children:"24/7"}),u.jsx("div",{className:"text-gray-600",children:"Available"})]})]})]}),u.jsxs("div",{className:"relative",children:[u.jsx("div",{className:"absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-20 blur-2xl"}),u.jsx("div",{className:"relative rounded-2xl overflow-hidden shadow-2xl",children:u.jsx(n0,{src:"https://images.unsplash.com/photo-1517120026326-d87759a7b63b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbnVyc2UlMjBob3NwaXRhbHxlbnwxfHx8fDE3NjMyNDMxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",alt:"Medical professional using technology",className:"w-full h-auto object-cover"})})]})]})})})}function ec({className:e,...t}){return u.jsx("div",{"data-slot":"card",className:t0("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}function uw(){return u.jsx("section",{className:"py-20 bg-gray-50",children:u.jsxs("div",{className:"container mx-auto px-4",children:[u.jsxs("div",{className:"text-center mb-16",children:[u.jsx("h2",{className:"text-4xl text-gray-900 mb-4",children:"The Healthcare Staffing Crisis"}),u.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Understaffing and lack of training contribute to critical issues in healthcare delivery. Our AI coaching platform helps address these challenges."})]}),u.jsxs("div",{className:"grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",children:[u.jsx(ec,{className:"p-8 bg-white border-red-100 hover:border-red-200 transition-all hover:shadow-lg",children:u.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[u.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center",children:u.jsx(_x,{className:"h-8 w-8 text-red-600"})}),u.jsx("div",{className:"text-5xl text-red-600",children:"#3"}),u.jsx("h3",{className:"text-xl text-gray-900",children:"Leading Cause of Death"}),u.jsxs("p",{className:"text-gray-600",children:["Medical errors are the ",u.jsx("strong",{children:"third leading cause of death"})," in the United States, highlighting the critical need for better training."]})]})}),u.jsx(ec,{className:"p-8 bg-white border-orange-100 hover:border-orange-200 transition-all hover:shadow-lg",children:u.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[u.jsx("div",{className:"w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center",children:u.jsx(Ox,{className:"h-8 w-8 text-orange-600"})}),u.jsx("div",{className:"text-5xl text-orange-600",children:"~20%"}),u.jsx("h3",{className:"text-xl text-gray-900",children:"Hospitals Understaffed"}),u.jsxs("p",{className:"text-gray-600",children:["Approximately ",u.jsx("strong",{children:"one-fifth of hospitals"})," in the US are understaffed, putting immense pressure on existing healthcare workers."]})]})}),u.jsx(ec,{className:"p-8 bg-white border-blue-100 hover:border-blue-200 transition-all hover:shadow-lg",children:u.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[u.jsx("div",{className:"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center",children:u.jsx(fg,{className:"h-8 w-8 text-blue-600"})}),u.jsx("div",{className:"text-5xl text-blue-600",children:"Solution"}),u.jsx("h3",{className:"text-xl text-gray-900",children:"AI-Powered Training"}),u.jsxs("p",{className:"text-gray-600",children:["Our platform provides ",u.jsx("strong",{children:"accessible, scalable training"})," to help nurses develop critical triage skills without adding to staffing burden."]})]})})]})]})})}function fw(){const e=[{icon:Ex,title:"Voice-to-Voice Interaction",description:"Engage naturally with AI using voice commands, simulating real patient interactions.",color:"purple"},{icon:ug,title:"Text-Based Chat",description:"Prefer typing? Use our text interface for detailed case presentations and feedback.",color:"cyan"},{icon:yx,title:"24/7 Availability",description:"Train anytime, anywhere. No scheduling conflicts or instructor availability issues.",color:"green"},{icon:ux,title:"RAG-Powered Medical Knowledge",description:"Our chatbot uses Retrieval-Augmented Generation (RAG) grounded in verified medical sources and clinical guidelines.",color:"blue"},{icon:Dx,title:"Agentic AI Model",description:"Powered by an agentic workflow with expert medical knowledge that dynamically reasons through complex scenarios and provides contextual feedback.",color:"orange"}],t={blue:"bg-blue-100 text-blue-600",purple:"bg-purple-100 text-purple-600",cyan:"bg-cyan-100 text-cyan-600",green:"bg-green-100 text-green-600",orange:"bg-orange-100 text-orange-600"};return u.jsx("section",{className:"py-20 bg-white",children:u.jsxs("div",{className:"container mx-auto px-4",children:[u.jsxs("div",{className:"text-center mb-16",children:[u.jsx("h2",{className:"text-4xl text-gray-900 mb-4",children:"How It Helps You Become a Triage Expert"}),u.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Our AI medical coach provides comprehensive training to help nurses develop the critical thinking and assessment skills needed for effective triage."})]}),u.jsxs("div",{className:"max-w-6xl mx-auto",children:[u.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8",children:e.slice(0,3).map((n,a)=>{const l=n.icon;return u.jsxs("div",{className:"flex flex-col space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-all",children:[u.jsx("div",{className:`w-12 h-12 rounded-lg ${t[n.color]} flex items-center justify-center`,children:u.jsx(l,{className:"h-6 w-6"})}),u.jsx("h3",{className:"text-xl text-gray-900",children:n.title}),u.jsx("p",{className:"text-gray-600",children:n.description})]},a)})}),u.jsx("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:e.slice(3).map((n,a)=>{const l=n.icon;return u.jsxs("div",{className:"flex flex-col space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-all",children:[u.jsx("div",{className:`w-12 h-12 rounded-lg ${t[n.color]} flex items-center justify-center`,children:u.jsx(l,{className:"h-6 w-6"})}),u.jsx("h3",{className:"text-xl text-gray-900",children:n.title}),u.jsx("p",{className:"text-gray-600",children:n.description})]},a+3)})})]})]})})}function dw(){const e=[{icon:xx,title:"Present to AI Coach",description:"Use voice or text to present your assessment and triage decision to the AI medical coach.",step:"01"},{icon:dx,title:"Get Expert Feedback",description:"Receive immediate, personalized feedback on your decision-making process and clinical reasoning.",step:"02"}];return u.jsx("section",{className:"py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white",children:u.jsxs("div",{className:"container mx-auto px-4",children:[u.jsxs("div",{className:"text-center mb-16",children:[u.jsx("h2",{className:"text-4xl mb-4",children:"How It Works"}),u.jsx("p",{className:"text-xl text-blue-100 max-w-3xl mx-auto",children:"Simple, effective training in two steps"})]}),u.jsx("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:e.map((t,n)=>{const a=t.icon;return u.jsxs("div",{className:"relative",children:[u.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full border border-white/20",children:[u.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[u.jsx("div",{className:"text-5xl opacity-50",children:t.step}),u.jsx("div",{className:"w-12 h-12 bg-white rounded-lg flex items-center justify-center",children:u.jsx(a,{className:"h-6 w-6 text-blue-600"})})]}),u.jsx("h3",{className:"text-2xl mb-3",children:t.title}),u.jsx("p",{className:"text-blue-100",children:t.description})]}),n<e.length-1&&u.jsx("div",{className:"hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10",children:u.jsx("div",{className:"w-8 h-0.5 bg-white/40"})})]},n)})})]})})}function hw(){return u.jsx("section",{className:"py-20 bg-white",children:u.jsx("div",{className:"container mx-auto px-4",children:u.jsx("div",{className:"max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl overflow-hidden shadow-xl",children:u.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 items-center",children:[u.jsxs("div",{className:"p-12 space-y-6",children:[u.jsx("h2",{className:"text-4xl text-gray-900",children:"Ready to Build Your Triage Skills?"}),u.jsx("p",{className:"text-xl text-gray-600",children:"Join hundreds of nurses who are improving their clinical decision-making and patient assessment skills with AI-powered coaching."}),u.jsx("div",{className:"flex flex-col sm:flex-row gap-4 pt-4",children:u.jsx(zr,{size:"lg",className:"bg-blue-600 hover:bg-blue-700 text-white px-8",asChild:!0,children:u.jsxs(cu,{to:"/chat",children:["Launch Training Platform",u.jsx(cx,{className:"ml-2 h-5 w-5"})]})})}),u.jsxs("div",{className:"flex items-center gap-2 text-gray-600 pt-4",children:[u.jsx(jd,{}),u.jsx("span",{children:"No credit card required"})]}),u.jsxs("div",{className:"flex items-center gap-2 text-gray-600",children:[u.jsx(jd,{}),u.jsx("span",{children:"Start training immediately"})]})]}),u.jsx("div",{className:"relative h-full min-h-[400px] lg:min-h-[500px]",children:u.jsx(n0,{src:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMxNjE5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",alt:"Healthcare technology",className:"absolute inset-0 w-full h-full object-cover"})})]})})})})}function jd(){return u.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:u.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}function mw(){return u.jsx("footer",{className:"bg-gray-900 text-gray-300 py-12",children:u.jsxs("div",{className:"container mx-auto px-4",children:[u.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[u.jsxs("div",{className:"space-y-4",children:[u.jsxs("div",{className:"flex items-center gap-2",children:[u.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center",children:u.jsx(cg,{className:"h-6 w-6 text-white"})}),u.jsx("span",{className:"text-xl text-white",children:"TriageAI Coach"})]}),u.jsx("p",{className:"text-gray-400",children:"Empowering nurses with AI-powered training for critical triage skills."})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-white mb-4",children:"Product"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Features"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"How It Works"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Pricing"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"FAQ"})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-white mb-4",children:"Company"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"About Us"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Contact"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Privacy Policy"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Terms of Service"})})]})]}),u.jsxs("div",{children:[u.jsx("h4",{className:"text-white mb-4",children:"Resources"}),u.jsxs("ul",{className:"space-y-2",children:[u.jsx("li",{children:u.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Blog"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Case Studies"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Documentation"})}),u.jsx("li",{children:u.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Support"})})]})]})]}),u.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:u.jsx("p",{children:"© 2025 TriageAI Coach. All rights reserved. Not for collecting PII or securing sensitive medical data."})})]})})}function vw(){return u.jsxs("div",{className:"min-h-screen bg-white",children:[u.jsx(ow,{}),u.jsxs("main",{children:[u.jsx(sw,{}),u.jsx("div",{id:"statistics",children:u.jsx(uw,{})}),u.jsx("div",{id:"features",children:u.jsx(fw,{})}),u.jsx("div",{id:"how-it-works",children:u.jsx(dw,{})}),u.jsx(hw,{})]}),u.jsx(mw,{})]})}const gw=`/*! tailwindcss v4.1.3 | MIT License | https://tailwindcss.com */
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
`;function _d(){return u.jsxs(u.Fragment,{children:[u.jsx("style",{dangerouslySetInnerHTML:{__html:gw}}),u.jsx(vw,{})]})}function pw(){return u.jsxs(Kb,{children:[u.jsx(Xi,{path:"/",element:u.jsx(_d,{})}),u.jsx(Xi,{path:"/chat",element:u.jsx(iw,{})}),u.jsx(Xi,{path:"*",element:u.jsx(_d,{})})]})}tb.createRoot(document.getElementById("root")).render(u.jsx(m.StrictMode,{children:u.jsx(e1,{children:u.jsx(pw,{})})}));
