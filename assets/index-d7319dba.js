function km(e,t){for(var n=0;n<t.length;n++){const l=t[n];if(typeof l!="string"&&!Array.isArray(l)){for(const a in l)if(a!=="default"&&!(a in e)){const i=Object.getOwnPropertyDescriptor(l,a);i&&Object.defineProperty(e,a,i.get?i:{enumerable:!0,get:()=>l[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Um(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Bf={exports:{}},mr={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm=Symbol.for("react.transitional.element"),Bm=Symbol.for("react.fragment");function Yf(e,t,n){var l=null;if(n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),"key"in t){n={};for(var a in t)a!=="key"&&(n[a]=t[a])}else n=t;return t=n.ref,{$$typeof:Hm,type:e,key:l,ref:t!==void 0?t:null,props:n}}mr.Fragment=Bm;mr.jsx=Yf;mr.jsxs=Yf;Bf.exports=mr;var s=Bf.exports,Lf={exports:{}},B={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tc=Symbol.for("react.transitional.element"),Ym=Symbol.for("react.portal"),Lm=Symbol.for("react.fragment"),qm=Symbol.for("react.strict_mode"),Gm=Symbol.for("react.profiler"),Xm=Symbol.for("react.consumer"),Vm=Symbol.for("react.context"),Qm=Symbol.for("react.forward_ref"),Zm=Symbol.for("react.suspense"),Km=Symbol.for("react.memo"),qf=Symbol.for("react.lazy"),Jm=Symbol.for("react.activity"),qu=Symbol.iterator;function $m(e){return e===null||typeof e!="object"?null:(e=qu&&e[qu]||e["@@iterator"],typeof e=="function"?e:null)}var Gf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xf=Object.assign,Vf={};function _l(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||Gf}_l.prototype.isReactComponent={};_l.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};_l.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Qf(){}Qf.prototype=_l.prototype;function _c(e,t,n){this.props=e,this.context=t,this.refs=Vf,this.updater=n||Gf}var Cc=_c.prototype=new Qf;Cc.constructor=_c;Xf(Cc,_l.prototype);Cc.isPureReactComponent=!0;var Gu=Array.isArray;function jo(){}var ae={H:null,A:null,T:null,S:null},Zf=Object.prototype.hasOwnProperty;function Mc(e,t,n){var l=n.ref;return{$$typeof:Tc,type:e,key:t,ref:l!==void 0?l:null,props:n}}function Wm(e,t){return Mc(e.type,t,e.props)}function Oc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Tc}function Fm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Xu=/\/+/g;function Br(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Fm(""+e.key):t.toString(36)}function Im(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch(typeof e.status=="string"?e.then(jo,jo):(e.status="pending",e.then(function(t){e.status==="pending"&&(e.status="fulfilled",e.value=t)},function(t){e.status==="pending"&&(e.status="rejected",e.reason=t)})),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}function $n(e,t,n,l,a){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var r=!1;if(e===null)r=!0;else switch(i){case"bigint":case"string":case"number":r=!0;break;case"object":switch(e.$$typeof){case Tc:case Ym:r=!0;break;case qf:return r=e._init,$n(r(e._payload),t,n,l,a)}}if(r)return a=a(e),r=l===""?"."+Br(e,0):l,Gu(a)?(n="",r!=null&&(n=r.replace(Xu,"$&/")+"/"),$n(a,t,n,"",function(u){return u})):a!=null&&(Oc(a)&&(a=Wm(a,n+(a.key==null||e&&e.key===a.key?"":(""+a.key).replace(Xu,"$&/")+"/")+r)),t.push(a)),1;r=0;var o=l===""?".":l+":";if(Gu(e))for(var c=0;c<e.length;c++)l=e[c],i=o+Br(l,c),r+=$n(l,t,n,i,a);else if(c=$m(e),typeof c=="function")for(e=c.call(e),c=0;!(l=e.next()).done;)l=l.value,i=o+Br(l,c++),r+=$n(l,t,n,i,a);else if(i==="object"){if(typeof e.then=="function")return $n(Im(e),t,n,l,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return r}function $a(e,t,n){if(e==null)return e;var l=[],a=0;return $n(e,l,"","",function(i){return t.call(n,i,a++)}),l}function Pm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Vu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},eg={map:$a,forEach:function(e,t,n){$a(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return $a(e,function(){t++}),t},toArray:function(e){return $a(e,function(t){return t})||[]},only:function(e){if(!Oc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};B.Activity=Jm;B.Children=eg;B.Component=_l;B.Fragment=Lm;B.Profiler=Gm;B.PureComponent=_c;B.StrictMode=qm;B.Suspense=Zm;B.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae;B.__COMPILER_RUNTIME={__proto__:null,c:function(e){return ae.H.useMemoCache(e)}};B.cache=function(e){return function(){return e.apply(null,arguments)}};B.cacheSignal=function(){return null};B.cloneElement=function(e,t,n){if(e==null)throw Error("The argument must be a React element, but you passed "+e+".");var l=Xf({},e.props),a=e.key;if(t!=null)for(i in t.key!==void 0&&(a=""+t.key),t)!Zf.call(t,i)||i==="key"||i==="__self"||i==="__source"||i==="ref"&&t.ref===void 0||(l[i]=t[i]);var i=arguments.length-2;if(i===1)l.children=n;else if(1<i){for(var r=Array(i),o=0;o<i;o++)r[o]=arguments[o+2];l.children=r}return Mc(e.type,a,l)};B.createContext=function(e){return e={$$typeof:Vm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:Xm,_context:e},e};B.createElement=function(e,t,n){var l,a={},i=null;if(t!=null)for(l in t.key!==void 0&&(i=""+t.key),t)Zf.call(t,l)&&l!=="key"&&l!=="__self"&&l!=="__source"&&(a[l]=t[l]);var r=arguments.length-2;if(r===1)a.children=n;else if(1<r){for(var o=Array(r),c=0;c<r;c++)o[c]=arguments[c+2];a.children=o}if(e&&e.defaultProps)for(l in r=e.defaultProps,r)a[l]===void 0&&(a[l]=r[l]);return Mc(e,i,a)};B.createRef=function(){return{current:null}};B.forwardRef=function(e){return{$$typeof:Qm,render:e}};B.isValidElement=Oc;B.lazy=function(e){return{$$typeof:qf,_payload:{_status:-1,_result:e},_init:Pm}};B.memo=function(e,t){return{$$typeof:Km,type:e,compare:t===void 0?null:t}};B.startTransition=function(e){var t=ae.T,n={};ae.T=n;try{var l=e(),a=ae.S;a!==null&&a(n,l),typeof l=="object"&&l!==null&&typeof l.then=="function"&&l.then(jo,Vu)}catch(i){Vu(i)}finally{t!==null&&n.types!==null&&(t.types=n.types),ae.T=t}};B.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()};B.use=function(e){return ae.H.use(e)};B.useActionState=function(e,t,n){return ae.H.useActionState(e,t,n)};B.useCallback=function(e,t){return ae.H.useCallback(e,t)};B.useContext=function(e){return ae.H.useContext(e)};B.useDebugValue=function(){};B.useDeferredValue=function(e,t){return ae.H.useDeferredValue(e,t)};B.useEffect=function(e,t){return ae.H.useEffect(e,t)};B.useEffectEvent=function(e){return ae.H.useEffectEvent(e)};B.useId=function(){return ae.H.useId()};B.useImperativeHandle=function(e,t,n){return ae.H.useImperativeHandle(e,t,n)};B.useInsertionEffect=function(e,t){return ae.H.useInsertionEffect(e,t)};B.useLayoutEffect=function(e,t){return ae.H.useLayoutEffect(e,t)};B.useMemo=function(e,t){return ae.H.useMemo(e,t)};B.useOptimistic=function(e,t){return ae.H.useOptimistic(e,t)};B.useReducer=function(e,t,n){return ae.H.useReducer(e,t,n)};B.useRef=function(e){return ae.H.useRef(e)};B.useState=function(e){return ae.H.useState(e)};B.useSyncExternalStore=function(e,t,n){return ae.H.useSyncExternalStore(e,t,n)};B.useTransition=function(){return ae.H.useTransition()};B.version="19.2.0";Lf.exports=B;var y=Lf.exports;const tg=Um(y),Kf=km({__proto__:null,default:tg},[y]);var Jf={exports:{}},gr={},$f={exports:{}},Wf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,U){var N=_.length;_.push(U);e:for(;0<N;){var I=N-1>>>1,re=_[I];if(0<a(re,U))_[I]=U,_[N]=re,N=I;else break e}}function n(_){return _.length===0?null:_[0]}function l(_){if(_.length===0)return null;var U=_[0],N=_.pop();if(N!==U){_[0]=N;e:for(var I=0,re=_.length,gt=re>>>1;I<gt;){var ft=2*(I+1)-1,D=_[ft],te=ft+1,Pe=_[te];if(0>a(D,N))te<re&&0>a(Pe,D)?(_[I]=Pe,_[te]=N,I=te):(_[I]=D,_[ft]=N,I=ft);else if(te<re&&0>a(Pe,N))_[I]=Pe,_[te]=N,I=te;else break e}}return U}function a(_,U){var N=_.sortIndex-U.sortIndex;return N!==0?N:_.id-U.id}if(e.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var r=Date,o=r.now();e.unstable_now=function(){return r.now()-o}}var c=[],u=[],d=1,h=null,f=3,v=!1,x=!1,S=!1,E=!1,g=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;function b(_){for(var U=n(u);U!==null;){if(U.callback===null)l(u);else if(U.startTime<=_)l(u),U.sortIndex=U.expirationTime,t(c,U);else break;U=n(u)}}function A(_){if(S=!1,b(_),!x)if(n(c)!==null)x=!0,R||(R=!0,Q());else{var U=n(u);U!==null&&ke(A,U.startTime-_)}}var R=!1,j=-1,z=5,C=-1;function T(){return E?!0:!(e.unstable_now()-C<z)}function k(){if(E=!1,R){var _=e.unstable_now();C=_;var U=!0;try{e:{x=!1,S&&(S=!1,m(j),j=-1),v=!0;var N=f;try{t:{for(b(_),h=n(c);h!==null&&!(h.expirationTime>_&&T());){var I=h.callback;if(typeof I=="function"){h.callback=null,f=h.priorityLevel;var re=I(h.expirationTime<=_);if(_=e.unstable_now(),typeof re=="function"){h.callback=re,b(_),U=!0;break t}h===n(c)&&l(c),b(_)}else l(c);h=n(c)}if(h!==null)U=!0;else{var gt=n(u);gt!==null&&ke(A,gt.startTime-_),U=!1}}break e}finally{h=null,f=N,v=!1}U=void 0}}finally{U?Q():R=!1}}}var Q;if(typeof p=="function")Q=function(){p(k)};else if(typeof MessageChannel<"u"){var ze=new MessageChannel,Me=ze.port2;ze.port1.onmessage=k,Q=function(){Me.postMessage(null)}}else Q=function(){g(k,0)};function ke(_,U){j=g(function(){_(e.unstable_now())},U)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(_){switch(f){case 1:case 2:case 3:var U=3;break;default:U=f}var N=f;f=U;try{return _()}finally{f=N}},e.unstable_requestPaint=function(){E=!0},e.unstable_runWithPriority=function(_,U){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var N=f;f=_;try{return U()}finally{f=N}},e.unstable_scheduleCallback=function(_,U,N){var I=e.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?I+N:I):N=I,_){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=N+re,_={id:d++,callback:U,priorityLevel:_,startTime:N,expirationTime:re,sortIndex:-1},N>I?(_.sortIndex=N,t(u,_),n(c)===null&&_===n(u)&&(S?(m(j),j=-1):S=!0,ke(A,N-I))):(_.sortIndex=re,t(c,_),x||v||(x=!0,R||(R=!0,Q()))),_},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(_){var U=f;return function(){var N=f;f=U;try{return _.apply(this,arguments)}finally{f=N}}}})(Wf);$f.exports=Wf;var ng=$f.exports,Ff={exports:{}},De={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg=y;function If(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Xt(){}var Re={d:{f:Xt,r:function(){throw Error(If(522))},D:Xt,C:Xt,L:Xt,m:Xt,X:Xt,S:Xt,M:Xt},p:0,findDOMNode:null},ag=Symbol.for("react.portal");function ig(e,t,n){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ag,key:l==null?null:""+l,children:e,containerInfo:t,implementation:n}}var ea=lg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function vr(e,t){if(e==="font")return"";if(typeof t=="string")return t==="use-credentials"?t:""}De.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Re;De.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(If(299));return ig(e,t,null,n)};De.flushSync=function(e){var t=ea.T,n=Re.p;try{if(ea.T=null,Re.p=2,e)return e()}finally{ea.T=t,Re.p=n,Re.d.f()}};De.preconnect=function(e,t){typeof e=="string"&&(t?(t=t.crossOrigin,t=typeof t=="string"?t==="use-credentials"?t:"":void 0):t=null,Re.d.C(e,t))};De.prefetchDNS=function(e){typeof e=="string"&&Re.d.D(e)};De.preinit=function(e,t){if(typeof e=="string"&&t&&typeof t.as=="string"){var n=t.as,l=vr(n,t.crossOrigin),a=typeof t.integrity=="string"?t.integrity:void 0,i=typeof t.fetchPriority=="string"?t.fetchPriority:void 0;n==="style"?Re.d.S(e,typeof t.precedence=="string"?t.precedence:void 0,{crossOrigin:l,integrity:a,fetchPriority:i}):n==="script"&&Re.d.X(e,{crossOrigin:l,integrity:a,fetchPriority:i,nonce:typeof t.nonce=="string"?t.nonce:void 0})}};De.preinitModule=function(e,t){if(typeof e=="string")if(typeof t=="object"&&t!==null){if(t.as==null||t.as==="script"){var n=vr(t.as,t.crossOrigin);Re.d.M(e,{crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0})}}else t==null&&Re.d.M(e)};De.preload=function(e,t){if(typeof e=="string"&&typeof t=="object"&&t!==null&&typeof t.as=="string"){var n=t.as,l=vr(n,t.crossOrigin);Re.d.L(e,n,{crossOrigin:l,integrity:typeof t.integrity=="string"?t.integrity:void 0,nonce:typeof t.nonce=="string"?t.nonce:void 0,type:typeof t.type=="string"?t.type:void 0,fetchPriority:typeof t.fetchPriority=="string"?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy=="string"?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet=="string"?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes=="string"?t.imageSizes:void 0,media:typeof t.media=="string"?t.media:void 0})}};De.preloadModule=function(e,t){if(typeof e=="string")if(t){var n=vr(t.as,t.crossOrigin);Re.d.m(e,{as:typeof t.as=="string"&&t.as!=="script"?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity=="string"?t.integrity:void 0})}else Re.d.m(e)};De.requestFormReset=function(e){Re.d.r(e)};De.unstable_batchedUpdates=function(e,t){return e(t)};De.useFormState=function(e,t,n){return ea.H.useFormState(e,t,n)};De.useFormStatus=function(){return ea.H.useHostTransitionStatus()};De.version="19.2.0";function Pf(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Pf)}catch(e){console.error(e)}}Pf(),Ff.exports=De;var rg=Ff.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=ng,ed=y,og=rg;function w(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function td(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ca(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function nd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ld(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Qu(e){if(Ca(e)!==e)throw Error(w(188))}function cg(e){var t=e.alternate;if(!t){if(t=Ca(e),t===null)throw Error(w(188));return t!==e?null:e}for(var n=e,l=t;;){var a=n.return;if(a===null)break;var i=a.alternate;if(i===null){if(l=a.return,l!==null){n=l;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return Qu(a),e;if(i===l)return Qu(a),t;i=i.sibling}throw Error(w(188))}if(n.return!==l.return)n=a,l=i;else{for(var r=!1,o=a.child;o;){if(o===n){r=!0,n=a,l=i;break}if(o===l){r=!0,l=a,n=i;break}o=o.sibling}if(!r){for(o=i.child;o;){if(o===n){r=!0,n=i,l=a;break}if(o===l){r=!0,l=i,n=a;break}o=o.sibling}if(!r)throw Error(w(189))}}if(n.alternate!==l)throw Error(w(190))}if(n.tag!==3)throw Error(w(188));return n.stateNode.current===n?e:t}function ad(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=ad(e),t!==null)return t;e=e.sibling}return null}var ie=Object.assign,ug=Symbol.for("react.element"),Wa=Symbol.for("react.transitional.element"),$l=Symbol.for("react.portal"),In=Symbol.for("react.fragment"),id=Symbol.for("react.strict_mode"),To=Symbol.for("react.profiler"),rd=Symbol.for("react.consumer"),Mt=Symbol.for("react.context"),Rc=Symbol.for("react.forward_ref"),_o=Symbol.for("react.suspense"),Co=Symbol.for("react.suspense_list"),Dc=Symbol.for("react.memo"),Qt=Symbol.for("react.lazy"),Mo=Symbol.for("react.activity"),sg=Symbol.for("react.memo_cache_sentinel"),Zu=Symbol.iterator;function ql(e){return e===null||typeof e!="object"?null:(e=Zu&&e[Zu]||e["@@iterator"],typeof e=="function"?e:null)}var fg=Symbol.for("react.client.reference");function Oo(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===fg?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case In:return"Fragment";case To:return"Profiler";case id:return"StrictMode";case _o:return"Suspense";case Co:return"SuspenseList";case Mo:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case $l:return"Portal";case Mt:return e.displayName||"Context";case rd:return(e._context.displayName||"Context")+".Consumer";case Rc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Dc:return t=e.displayName||null,t!==null?t:Oo(e.type)||"Memo";case Qt:t=e._payload,e=e._init;try{return Oo(e(t))}catch{}}return null}var Wl=Array.isArray,H=ed.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=og.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,jn={pending:!1,data:null,method:null,action:null},Ro=[],Pn=-1;function xt(e){return{current:e}}function Ee(e){0>Pn||(e.current=Ro[Pn],Ro[Pn]=null,Pn--)}function ee(e,t){Pn++,Ro[Pn]=e.current,e.current=t}var bt=xt(null),ma=xt(null),ln=xt(null),Mi=xt(null);function Oi(e,t){switch(ee(ln,t),ee(ma,e),ee(bt,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Is(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Is(t),e=A0(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Ee(bt),ee(bt,e)}function pl(){Ee(bt),Ee(ma),Ee(ln)}function Do(e){e.memoizedState!==null&&ee(Mi,e);var t=bt.current,n=A0(t,e.type);t!==n&&(ee(ma,e),ee(bt,n))}function Ri(e){ma.current===e&&(Ee(bt),Ee(ma)),Mi.current===e&&(Ee(Mi),Na._currentValue=jn)}var Yr,Ku;function Sn(e){if(Yr===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yr=t&&t[1]||"",Ku=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yr+e+Ku}var Lr=!1;function qr(e,t){if(!e||Lr)return"";Lr=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var h=function(){throw Error()};if(Object.defineProperty(h.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(h,[])}catch(v){var f=v}Reflect.construct(e,[],h)}else{try{h.call()}catch(v){f=v}e.call(h.prototype)}}else{try{throw Error()}catch(v){f=v}(h=e())&&typeof h.catch=="function"&&h.catch(function(){})}}catch(v){if(v&&f&&typeof v.stack=="string")return[v.stack,f.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var a=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");a&&a.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=l.DetermineComponentFrameRoot(),r=i[0],o=i[1];if(r&&o){var c=r.split(`
`),u=o.split(`
`);for(a=l=0;l<c.length&&!c[l].includes("DetermineComponentFrameRoot");)l++;for(;a<u.length&&!u[a].includes("DetermineComponentFrameRoot");)a++;if(l===c.length||a===u.length)for(l=c.length-1,a=u.length-1;1<=l&&0<=a&&c[l]!==u[a];)a--;for(;1<=l&&0<=a;l--,a--)if(c[l]!==u[a]){if(l!==1||a!==1)do if(l--,a--,0>a||c[l]!==u[a]){var d=`
`+c[l].replace(" at new "," at ");return e.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",e.displayName)),d}while(1<=l&&0<=a);break}}}finally{Lr=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Sn(n):""}function dg(e,t){switch(e.tag){case 26:case 27:case 5:return Sn(e.type);case 16:return Sn("Lazy");case 13:return e.child!==t&&t!==null?Sn("Suspense Fallback"):Sn("Suspense");case 19:return Sn("SuspenseList");case 0:case 15:return qr(e.type,!1);case 11:return qr(e.type.render,!1);case 1:return qr(e.type,!0);case 31:return Sn("Activity");default:return""}}function Ju(e){try{var t="",n=null;do t+=dg(e,n),n=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ko=Object.prototype.hasOwnProperty,kc=xe.unstable_scheduleCallback,Gr=xe.unstable_cancelCallback,hg=xe.unstable_shouldYield,mg=xe.unstable_requestPaint,Ke=xe.unstable_now,gg=xe.unstable_getCurrentPriorityLevel,od=xe.unstable_ImmediatePriority,cd=xe.unstable_UserBlockingPriority,Di=xe.unstable_NormalPriority,vg=xe.unstable_LowPriority,ud=xe.unstable_IdlePriority,pg=xe.log,yg=xe.unstable_setDisableYieldValue,Ma=null,Je=null;function Ft(e){if(typeof pg=="function"&&yg(e),Je&&typeof Je.setStrictMode=="function")try{Je.setStrictMode(Ma,e)}catch{}}var $e=Math.clz32?Math.clz32:wg,bg=Math.log,xg=Math.LN2;function wg(e){return e>>>=0,e===0?32:31-(bg(e)/xg|0)|0}var Fa=256,Ia=262144,Pa=4194304;function En(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function pr(e,t,n){var l=e.pendingLanes;if(l===0)return 0;var a=0,i=e.suspendedLanes,r=e.pingedLanes;e=e.warmLanes;var o=l&134217727;return o!==0?(l=o&~i,l!==0?a=En(l):(r&=o,r!==0?a=En(r):n||(n=o&~e,n!==0&&(a=En(n))))):(o=l&~i,o!==0?a=En(o):r!==0?a=En(r):n||(n=l&~e,n!==0&&(a=En(n)))),a===0?0:t!==0&&t!==a&&!(t&i)&&(i=a&-a,n=t&-t,i>=n||i===32&&(n&4194048)!==0)?t:a}function Oa(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Sg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sd(){var e=Pa;return Pa<<=1,!(Pa&62914560)&&(Pa=4194304),e}function Xr(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ra(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Eg(e,t,n,l,a,i){var r=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var o=e.entanglements,c=e.expirationTimes,u=e.hiddenUpdates;for(n=r&~n;0<n;){var d=31-$e(n),h=1<<d;o[d]=0,c[d]=-1;var f=u[d];if(f!==null)for(u[d]=null,d=0;d<f.length;d++){var v=f[d];v!==null&&(v.lane&=-536870913)}n&=~h}l!==0&&fd(e,l,0),i!==0&&a===0&&e.tag!==0&&(e.suspendedLanes|=i&~(r&~t))}function fd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-$e(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function dd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var l=31-$e(n),a=1<<l;a&t|e[l]&t&&(e[l]|=t),n&=~a}}function hd(e,t){var n=t&-t;return n=n&42?1:Uc(n),n&(e.suspendedLanes|t)?0:n}function Uc(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Hc(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function md(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:H0(e.type))}function $u(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var yn=Math.random().toString(36).slice(2),Ae="__reactFiber$"+yn,qe="__reactProps$"+yn,Cl="__reactContainer$"+yn,Uo="__reactEvents$"+yn,zg="__reactListeners$"+yn,Ng="__reactHandles$"+yn,Wu="__reactResources$"+yn,Da="__reactMarker$"+yn;function Bc(e){delete e[Ae],delete e[qe],delete e[Uo],delete e[zg],delete e[Ng]}function el(e){var t=e[Ae];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Cl]||n[Ae]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=lf(e);e!==null;){if(n=e[Ae])return n;e=lf(e)}return t}e=n,n=e.parentNode}return null}function Ml(e){if(e=e[Ae]||e[Cl]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Fl(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(w(33))}function sl(e){var t=e[Wu];return t||(t=e[Wu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Se(e){e[Da]=!0}var gd=new Set,vd={};function Bn(e,t){yl(e,t),yl(e+"Capture",t)}function yl(e,t){for(vd[e]=t,e=0;e<t.length;e++)gd.add(t[e])}var Ag=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Fu={},Iu={};function jg(e){return ko.call(Iu,e)?!0:ko.call(Fu,e)?!1:Ag.test(e)?Iu[e]=!0:(Fu[e]=!0,!1)}function gi(e,t,n){if(jg(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function ei(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Et(e,t,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+l)}}function tt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Tg(e,t,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var a=l.get,i=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(r){n=""+r,i.call(this,r)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(r){n=""+r},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ho(e){if(!e._valueTracker){var t=pd(e)?"checked":"value";e._valueTracker=Tg(e,t,""+e[t])}}function yd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),l="";return e&&(l=pd(e)?e.checked?"true":"false":e.value),e=l,e!==n?(t.setValue(e),!0):!1}function ki(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var _g=/[\n"\\]/g;function at(e){return e.replace(_g,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Bo(e,t,n,l,a,i,r,o){e.name="",r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"?e.type=r:e.removeAttribute("type"),t!=null?r==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+tt(t)):e.value!==""+tt(t)&&(e.value=""+tt(t)):r!=="submit"&&r!=="reset"||e.removeAttribute("value"),t!=null?Yo(e,r,tt(t)):n!=null?Yo(e,r,tt(n)):l!=null&&e.removeAttribute("value"),a==null&&i!=null&&(e.defaultChecked=!!i),a!=null&&(e.checked=a&&typeof a!="function"&&typeof a!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+tt(o):e.removeAttribute("name")}function bd(e,t,n,l,a,i,r,o){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(e.type=i),t!=null||n!=null){if(!(i!=="submit"&&i!=="reset"||t!=null)){Ho(e);return}n=n!=null?""+tt(n):"",t=t!=null?""+tt(t):n,o||t===e.value||(e.value=t),e.defaultValue=t}l=l??a,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=o?e.checked:!!l,e.defaultChecked=!!l,r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.name=r),Ho(e)}function Yo(e,t,n){t==="number"&&ki(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function fl(e,t,n,l){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&l&&(e[n].defaultSelected=!0)}else{for(n=""+tt(n),t=null,a=0;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,l&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function xd(e,t,n){if(t!=null&&(t=""+tt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+tt(n):""}function wd(e,t,n,l){if(t==null){if(l!=null){if(n!=null)throw Error(w(92));if(Wl(l)){if(1<l.length)throw Error(w(93));l=l[0]}n=l}n==null&&(n=""),t=n}n=tt(t),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Ho(e)}function bl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Cg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pu(e,t,n){var l=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,n):typeof n!="number"||n===0||Cg.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Sd(e,t,n){if(t!=null&&typeof t!="object")throw Error(w(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var a in t)l=t[a],t.hasOwnProperty(a)&&n[a]!==l&&Pu(e,a,l)}else for(var i in t)t.hasOwnProperty(i)&&Pu(e,i,t[i])}function Yc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Og=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function vi(e){return Og.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ot(){}var Lo=null;function Lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tl=null,dl=null;function es(e){var t=Ml(e);if(t&&(e=t.stateNode)){var n=e[qe]||null;e:switch(e=t.stateNode,t.type){case"input":if(Bo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+at(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var l=n[t];if(l!==e&&l.form===e.form){var a=l[qe]||null;if(!a)throw Error(w(90));Bo(l,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)l=n[t],l.form===e.form&&yd(l)}break e;case"textarea":xd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&fl(e,!!n.multiple,t,!1)}}}var Vr=!1;function Ed(e,t,n){if(Vr)return e(t,n);Vr=!0;try{var l=e(t);return l}finally{if(Vr=!1,(tl!==null||dl!==null)&&(_r(),tl&&(t=tl,e=dl,dl=tl=null,es(t),e)))for(t=0;t<e.length;t++)es(e[t])}}function ga(e,t){var n=e.stateNode;if(n===null)return null;var l=n[qe]||null;if(l===null)return null;n=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(w(231,t,typeof n));return n}var Ht=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qo=!1;if(Ht)try{var Gl={};Object.defineProperty(Gl,"passive",{get:function(){qo=!0}}),window.addEventListener("test",Gl,Gl),window.removeEventListener("test",Gl,Gl)}catch{qo=!1}var It=null,qc=null,pi=null;function zd(){if(pi)return pi;var e,t=qc,n=t.length,l,a="value"in It?It.value:It.textContent,i=a.length;for(e=0;e<n&&t[e]===a[e];e++);var r=n-e;for(l=1;l<=r&&t[n-l]===a[i-l];l++);return pi=a.slice(e,1<l?1-l:void 0)}function yi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ti(){return!0}function ts(){return!1}function Ge(e){function t(n,l,a,i,r){this._reactName=n,this._targetInst=a,this.type=l,this.nativeEvent=i,this.target=r,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(n=e[o],this[o]=n?n(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ti:ts,this.isPropagationStopped=ts,this}return ie(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ti)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ti)},persist:function(){},isPersistent:ti}),t}var Yn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yr=Ge(Yn),ka=ie({},Yn,{view:0,detail:0}),Rg=Ge(ka),Qr,Zr,Xl,br=ie({},ka,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Xl&&(Xl&&e.type==="mousemove"?(Qr=e.screenX-Xl.screenX,Zr=e.screenY-Xl.screenY):Zr=Qr=0,Xl=e),Qr)},movementY:function(e){return"movementY"in e?e.movementY:Zr}}),ns=Ge(br),Dg=ie({},br,{dataTransfer:0}),kg=Ge(Dg),Ug=ie({},ka,{relatedTarget:0}),Kr=Ge(Ug),Hg=ie({},Yn,{animationName:0,elapsedTime:0,pseudoElement:0}),Bg=Ge(Hg),Yg=ie({},Yn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Lg=Ge(Yg),qg=ie({},Yn,{data:0}),ls=Ge(qg),Gg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vg[e])?!!t[e]:!1}function Gc(){return Qg}var Zg=ie({},ka,{key:function(e){if(e.key){var t=Gg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(e){return e.type==="keypress"?yi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kg=Ge(Zg),Jg=ie({},br,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),as=Ge(Jg),$g=ie({},ka,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),Wg=Ge($g),Fg=ie({},Yn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=Ge(Fg),Pg=ie({},br,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ev=Ge(Pg),tv=ie({},Yn,{newState:0,oldState:0}),nv=Ge(tv),lv=[9,13,27,32],Xc=Ht&&"CompositionEvent"in window,ta=null;Ht&&"documentMode"in document&&(ta=document.documentMode);var av=Ht&&"TextEvent"in window&&!ta,Nd=Ht&&(!Xc||ta&&8<ta&&11>=ta),is=String.fromCharCode(32),rs=!1;function Ad(e,t){switch(e){case"keyup":return lv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var nl=!1;function iv(e,t){switch(e){case"compositionend":return jd(t);case"keypress":return t.which!==32?null:(rs=!0,is);case"textInput":return e=t.data,e===is&&rs?null:e;default:return null}}function rv(e,t){if(nl)return e==="compositionend"||!Xc&&Ad(e,t)?(e=zd(),pi=qc=It=null,nl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Nd&&t.locale!=="ko"?null:t.data;default:return null}}var ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function os(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!ov[e.type]:t==="textarea"}function Td(e,t,n,l){tl?dl?dl.push(l):dl=[l]:tl=l,t=Pi(t,"onChange"),0<t.length&&(n=new yr("onChange","change",null,n,l),e.push({event:n,listeners:t}))}var na=null,va=null;function cv(e){E0(e,0)}function xr(e){var t=Fl(e);if(yd(t))return e}function cs(e,t){if(e==="change")return t}var _d=!1;if(Ht){var Jr;if(Ht){var $r="oninput"in document;if(!$r){var us=document.createElement("div");us.setAttribute("oninput","return;"),$r=typeof us.oninput=="function"}Jr=$r}else Jr=!1;_d=Jr&&(!document.documentMode||9<document.documentMode)}function ss(){na&&(na.detachEvent("onpropertychange",Cd),va=na=null)}function Cd(e){if(e.propertyName==="value"&&xr(va)){var t=[];Td(t,va,e,Lc(e)),Ed(cv,t)}}function uv(e,t,n){e==="focusin"?(ss(),na=t,va=n,na.attachEvent("onpropertychange",Cd)):e==="focusout"&&ss()}function sv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xr(va)}function fv(e,t){if(e==="click")return xr(t)}function dv(e,t){if(e==="input"||e==="change")return xr(t)}function hv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Fe=typeof Object.is=="function"?Object.is:hv;function pa(e,t){if(Fe(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),l=Object.keys(t);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var a=n[l];if(!ko.call(t,a)||!Fe(e[a],t[a]))return!1}return!0}function fs(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ds(e,t){var n=fs(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=t&&l>=t)return{node:n,offset:t-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fs(n)}}function Md(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Md(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Od(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ki(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ki(e.document)}return t}function Vc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var mv=Ht&&"documentMode"in document&&11>=document.documentMode,ll=null,Go=null,la=null,Xo=!1;function hs(e,t,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xo||ll==null||ll!==ki(l)||(l=ll,"selectionStart"in l&&Vc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),la&&pa(la,l)||(la=l,l=Pi(Go,"onSelect"),0<l.length&&(t=new yr("onSelect","select",null,t,n),e.push({event:t,listeners:l}),t.target=ll)))}function xn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var al={animationend:xn("Animation","AnimationEnd"),animationiteration:xn("Animation","AnimationIteration"),animationstart:xn("Animation","AnimationStart"),transitionrun:xn("Transition","TransitionRun"),transitionstart:xn("Transition","TransitionStart"),transitioncancel:xn("Transition","TransitionCancel"),transitionend:xn("Transition","TransitionEnd")},Wr={},Rd={};Ht&&(Rd=document.createElement("div").style,"AnimationEvent"in window||(delete al.animationend.animation,delete al.animationiteration.animation,delete al.animationstart.animation),"TransitionEvent"in window||delete al.transitionend.transition);function Ln(e){if(Wr[e])return Wr[e];if(!al[e])return e;var t=al[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rd)return Wr[e]=t[n];return e}var Dd=Ln("animationend"),kd=Ln("animationiteration"),Ud=Ln("animationstart"),gv=Ln("transitionrun"),vv=Ln("transitionstart"),pv=Ln("transitioncancel"),Hd=Ln("transitionend"),Bd=new Map,Vo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vo.push("scrollEnd");function mt(e,t){Bd.set(e,t),Bn(t,[e])}var Ui=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},et=[],il=0,Qc=0;function wr(){for(var e=il,t=Qc=il=0;t<e;){var n=et[t];et[t++]=null;var l=et[t];et[t++]=null;var a=et[t];et[t++]=null;var i=et[t];if(et[t++]=null,l!==null&&a!==null){var r=l.pending;r===null?a.next=a:(a.next=r.next,r.next=a),l.pending=a}i!==0&&Yd(n,a,i)}}function Sr(e,t,n,l){et[il++]=e,et[il++]=t,et[il++]=n,et[il++]=l,Qc|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Zc(e,t,n,l){return Sr(e,t,n,l),Hi(e)}function qn(e,t){return Sr(e,null,null,t),Hi(e)}function Yd(e,t,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var a=!1,i=e.return;i!==null;)i.childLanes|=n,l=i.alternate,l!==null&&(l.childLanes|=n),i.tag===22&&(e=i.stateNode,e===null||e._visibility&1||(a=!0)),e=i,i=i.return;return e.tag===3?(i=e.stateNode,a&&t!==null&&(a=31-$e(n),e=i.hiddenUpdates,l=e[a],l===null?e[a]=[t]:l.push(t),t.lane=n|536870912),i):null}function Hi(e){if(50<da)throw da=0,fc=null,Error(w(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var rl={};function yv(e,t,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qe(e,t,n,l){return new yv(e,t,n,l)}function Kc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Dt(e,t){var n=e.alternate;return n===null?(n=Qe(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ld(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function bi(e,t,n,l,a,i){var r=0;if(l=e,typeof e=="function")Kc(e)&&(r=1);else if(typeof e=="string")r=Ep(e,n,bt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Mo:return e=Qe(31,n,t,a),e.elementType=Mo,e.lanes=i,e;case In:return Tn(n.children,a,i,t);case id:r=8,a|=24;break;case To:return e=Qe(12,n,t,a|2),e.elementType=To,e.lanes=i,e;case _o:return e=Qe(13,n,t,a),e.elementType=_o,e.lanes=i,e;case Co:return e=Qe(19,n,t,a),e.elementType=Co,e.lanes=i,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Mt:r=10;break e;case rd:r=9;break e;case Rc:r=11;break e;case Dc:r=14;break e;case Qt:r=16,l=null;break e}r=29,n=Error(w(130,e===null?"null":typeof e,"")),l=null}return t=Qe(r,n,t,a),t.elementType=e,t.type=l,t.lanes=i,t}function Tn(e,t,n,l){return e=Qe(7,e,l,t),e.lanes=n,e}function Fr(e,t,n){return e=Qe(6,e,null,t),e.lanes=n,e}function qd(e){var t=Qe(18,null,null,0);return t.stateNode=e,t}function Ir(e,t,n){return t=Qe(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ms=new WeakMap;function it(e,t){if(typeof e=="object"&&e!==null){var n=ms.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Ju(t)},ms.set(e,t),t)}return{value:e,source:t,stack:Ju(t)}}var ol=[],cl=0,Bi=null,ya=0,nt=[],lt=0,mn=null,vt=1,pt="";function _t(e,t){ol[cl++]=ya,ol[cl++]=Bi,Bi=e,ya=t}function Gd(e,t,n){nt[lt++]=vt,nt[lt++]=pt,nt[lt++]=mn,mn=e;var l=vt;e=pt;var a=32-$e(l)-1;l&=~(1<<a),n+=1;var i=32-$e(t)+a;if(30<i){var r=a-a%5;i=(l&(1<<r)-1).toString(32),l>>=r,a-=r,vt=1<<32-$e(t)+a|n<<a|l,pt=i+e}else vt=1<<i|n<<a|l,pt=e}function Jc(e){e.return!==null&&(_t(e,1),Gd(e,1,0))}function $c(e){for(;e===Bi;)Bi=ol[--cl],ol[cl]=null,ya=ol[--cl],ol[cl]=null;for(;e===mn;)mn=nt[--lt],nt[lt]=null,pt=nt[--lt],nt[lt]=null,vt=nt[--lt],nt[lt]=null}function Xd(e,t){nt[lt++]=vt,nt[lt++]=pt,nt[lt++]=mn,vt=t.id,pt=t.overflow,mn=e}var je=null,le=null,V=!1,an=null,rt=!1,Qo=Error(w(519));function gn(e){var t=Error(w(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ba(it(t,e)),Qo}function gs(e){var t=e.stateNode,n=e.type,l=e.memoizedProps;switch(t[Ae]=e,t[qe]=l,n){case"dialog":q("cancel",t),q("close",t);break;case"iframe":case"object":case"embed":q("load",t);break;case"video":case"audio":for(n=0;n<Ea.length;n++)q(Ea[n],t);break;case"source":q("error",t);break;case"img":case"image":case"link":q("error",t),q("load",t);break;case"details":q("toggle",t);break;case"input":q("invalid",t),bd(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":q("invalid",t);break;case"textarea":q("invalid",t),wd(t,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||l.suppressHydrationWarning===!0||N0(t.textContent,n)?(l.popover!=null&&(q("beforetoggle",t),q("toggle",t)),l.onScroll!=null&&q("scroll",t),l.onScrollEnd!=null&&q("scrollend",t),l.onClick!=null&&(t.onclick=Ot),t=!0):t=!1,t||gn(e,!0)}function vs(e){for(je=e.return;je;)switch(je.tag){case 5:case 31:case 13:rt=!1;return;case 27:case 3:rt=!0;return;default:je=je.return}}function Zn(e){if(e!==je)return!1;if(!V)return vs(e),V=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||vc(e.type,e.memoizedProps)),n=!n),n&&le&&gn(e),vs(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));le=nf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(317));le=nf(e)}else t===27?(t=le,bn(e.type)?(e=xc,xc=null,le=e):le=t):le=je?ct(e.stateNode.nextSibling):null;return!0}function Rn(){le=je=null,V=!1}function Pr(){var e=an;return e!==null&&(Ye===null?Ye=e:Ye.push.apply(Ye,e),an=null),e}function ba(e){an===null?an=[e]:an.push(e)}var Zo=xt(null),Gn=null,Rt=null;function Kt(e,t,n){ee(Zo,t._currentValue),t._currentValue=n}function kt(e){e._currentValue=Zo.current,Ee(Zo)}function Ko(e,t,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===n)break;e=e.return}}function Jo(e,t,n,l){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var i=a.dependencies;if(i!==null){var r=a.child;i=i.firstContext;e:for(;i!==null;){var o=i;i=a;for(var c=0;c<t.length;c++)if(o.context===t[c]){i.lanes|=n,o=i.alternate,o!==null&&(o.lanes|=n),Ko(i.return,n,e),l||(r=null);break e}i=o.next}}else if(a.tag===18){if(r=a.return,r===null)throw Error(w(341));r.lanes|=n,i=r.alternate,i!==null&&(i.lanes|=n),Ko(r,n,e),r=null}else r=a.child;if(r!==null)r.return=a;else for(r=a;r!==null;){if(r===e){r=null;break}if(a=r.sibling,a!==null){a.return=r.return,r=a;break}r=r.return}a=r}}function Ol(e,t,n,l){e=null;for(var a=t,i=!1;a!==null;){if(!i){if(a.flags&524288)i=!0;else if(a.flags&262144)break}if(a.tag===10){var r=a.alternate;if(r===null)throw Error(w(387));if(r=r.memoizedProps,r!==null){var o=a.type;Fe(a.pendingProps.value,r.value)||(e!==null?e.push(o):e=[o])}}else if(a===Mi.current){if(r=a.alternate,r===null)throw Error(w(387));r.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e!==null?e.push(Na):e=[Na])}a=a.return}e!==null&&Jo(t,e,n,l),t.flags|=262144}function Yi(e){for(e=e.firstContext;e!==null;){if(!Fe(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Dn(e){Gn=e,Rt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Te(e){return Vd(Gn,e)}function ni(e,t){return Gn===null&&Dn(e),Vd(e,t)}function Vd(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Rt===null){if(e===null)throw Error(w(308));Rt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Rt=Rt.next=t;return n}var bv=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},xv=xe.unstable_scheduleCallback,wv=xe.unstable_NormalPriority,ge={$$typeof:Mt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wc(){return{controller:new bv,data:new Map,refCount:0}}function Ua(e){e.refCount--,e.refCount===0&&xv(wv,function(){e.controller.abort()})}var aa=null,$o=0,xl=0,hl=null;function Sv(e,t){if(aa===null){var n=aa=[];$o=0,xl=wu(),hl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return $o++,t.then(ps,ps),t}function ps(){if(--$o===0&&aa!==null){hl!==null&&(hl.status="fulfilled");var e=aa;aa=null,xl=0,hl=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Ev(e,t){var n=[],l={status:"pending",value:null,reason:null,then:function(a){n.push(a)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var a=0;a<n.length;a++)(0,n[a])(t)},function(a){for(l.status="rejected",l.reason=a,a=0;a<n.length;a++)(0,n[a])(void 0)}),l}var ys=H.S;H.S=function(e,t){a0=Ke(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Sv(e,t),ys!==null&&ys(e,t)};var _n=xt(null);function Fc(){var e=_n.current;return e!==null?e:P.pooledCache}function xi(e,t){t===null?ee(_n,_n.current):ee(_n,t.pool)}function Qd(){var e=Fc();return e===null?null:{parent:ge._currentValue,pool:e}}var Rl=Error(w(460)),Ic=Error(w(474)),Er=Error(w(542)),Li={then:function(){}};function bs(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zd(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(Ot,Ot),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ws(e),e;default:if(typeof t.status=="string")t.then(Ot,Ot);else{if(e=P,e!==null&&100<e.shellSuspendCounter)throw Error(w(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var a=t;a.status="fulfilled",a.value=l}},function(l){if(t.status==="pending"){var a=t;a.status="rejected",a.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,ws(e),e}throw Cn=t,Rl}}function zn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Cn=n,Rl):n}}var Cn=null;function xs(){if(Cn===null)throw Error(w(459));var e=Cn;return Cn=null,e}function ws(e){if(e===Rl||e===Er)throw Error(w(483))}var ml=null,xa=0;function li(e){var t=xa;return xa+=1,ml===null&&(ml=[]),Zd(ml,e,t)}function Vl(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function ai(e,t){throw t.$$typeof===ug?Error(w(525)):(e=Object.prototype.toString.call(t),Error(w(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Kd(e){function t(g,m){if(e){var p=g.deletions;p===null?(g.deletions=[m],g.flags|=16):p.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function l(g){for(var m=new Map;g!==null;)g.key!==null?m.set(g.key,g):m.set(g.index,g),g=g.sibling;return m}function a(g,m){return g=Dt(g,m),g.index=0,g.sibling=null,g}function i(g,m,p){return g.index=p,e?(p=g.alternate,p!==null?(p=p.index,p<m?(g.flags|=67108866,m):p):(g.flags|=67108866,m)):(g.flags|=1048576,m)}function r(g){return e&&g.alternate===null&&(g.flags|=67108866),g}function o(g,m,p,b){return m===null||m.tag!==6?(m=Fr(p,g.mode,b),m.return=g,m):(m=a(m,p),m.return=g,m)}function c(g,m,p,b){var A=p.type;return A===In?d(g,m,p.props.children,b,p.key):m!==null&&(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Qt&&zn(A)===m.type)?(m=a(m,p.props),Vl(m,p),m.return=g,m):(m=bi(p.type,p.key,p.props,null,g.mode,b),Vl(m,p),m.return=g,m)}function u(g,m,p,b){return m===null||m.tag!==4||m.stateNode.containerInfo!==p.containerInfo||m.stateNode.implementation!==p.implementation?(m=Ir(p,g.mode,b),m.return=g,m):(m=a(m,p.children||[]),m.return=g,m)}function d(g,m,p,b,A){return m===null||m.tag!==7?(m=Tn(p,g.mode,b,A),m.return=g,m):(m=a(m,p),m.return=g,m)}function h(g,m,p){if(typeof m=="string"&&m!==""||typeof m=="number"||typeof m=="bigint")return m=Fr(""+m,g.mode,p),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Wa:return p=bi(m.type,m.key,m.props,null,g.mode,p),Vl(p,m),p.return=g,p;case $l:return m=Ir(m,g.mode,p),m.return=g,m;case Qt:return m=zn(m),h(g,m,p)}if(Wl(m)||ql(m))return m=Tn(m,g.mode,p,null),m.return=g,m;if(typeof m.then=="function")return h(g,li(m),p);if(m.$$typeof===Mt)return h(g,ni(g,m),p);ai(g,m)}return null}function f(g,m,p,b){var A=m!==null?m.key:null;if(typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint")return A!==null?null:o(g,m,""+p,b);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Wa:return p.key===A?c(g,m,p,b):null;case $l:return p.key===A?u(g,m,p,b):null;case Qt:return p=zn(p),f(g,m,p,b)}if(Wl(p)||ql(p))return A!==null?null:d(g,m,p,b,null);if(typeof p.then=="function")return f(g,m,li(p),b);if(p.$$typeof===Mt)return f(g,m,ni(g,p),b);ai(g,p)}return null}function v(g,m,p,b,A){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return g=g.get(p)||null,o(m,g,""+b,A);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Wa:return g=g.get(b.key===null?p:b.key)||null,c(m,g,b,A);case $l:return g=g.get(b.key===null?p:b.key)||null,u(m,g,b,A);case Qt:return b=zn(b),v(g,m,p,b,A)}if(Wl(b)||ql(b))return g=g.get(p)||null,d(m,g,b,A,null);if(typeof b.then=="function")return v(g,m,p,li(b),A);if(b.$$typeof===Mt)return v(g,m,p,ni(m,b),A);ai(m,b)}return null}function x(g,m,p,b){for(var A=null,R=null,j=m,z=m=0,C=null;j!==null&&z<p.length;z++){j.index>z?(C=j,j=null):C=j.sibling;var T=f(g,j,p[z],b);if(T===null){j===null&&(j=C);break}e&&j&&T.alternate===null&&t(g,j),m=i(T,m,z),R===null?A=T:R.sibling=T,R=T,j=C}if(z===p.length)return n(g,j),V&&_t(g,z),A;if(j===null){for(;z<p.length;z++)j=h(g,p[z],b),j!==null&&(m=i(j,m,z),R===null?A=j:R.sibling=j,R=j);return V&&_t(g,z),A}for(j=l(j);z<p.length;z++)C=v(j,g,z,p[z],b),C!==null&&(e&&C.alternate!==null&&j.delete(C.key===null?z:C.key),m=i(C,m,z),R===null?A=C:R.sibling=C,R=C);return e&&j.forEach(function(k){return t(g,k)}),V&&_t(g,z),A}function S(g,m,p,b){if(p==null)throw Error(w(151));for(var A=null,R=null,j=m,z=m=0,C=null,T=p.next();j!==null&&!T.done;z++,T=p.next()){j.index>z?(C=j,j=null):C=j.sibling;var k=f(g,j,T.value,b);if(k===null){j===null&&(j=C);break}e&&j&&k.alternate===null&&t(g,j),m=i(k,m,z),R===null?A=k:R.sibling=k,R=k,j=C}if(T.done)return n(g,j),V&&_t(g,z),A;if(j===null){for(;!T.done;z++,T=p.next())T=h(g,T.value,b),T!==null&&(m=i(T,m,z),R===null?A=T:R.sibling=T,R=T);return V&&_t(g,z),A}for(j=l(j);!T.done;z++,T=p.next())T=v(j,g,z,T.value,b),T!==null&&(e&&T.alternate!==null&&j.delete(T.key===null?z:T.key),m=i(T,m,z),R===null?A=T:R.sibling=T,R=T);return e&&j.forEach(function(Q){return t(g,Q)}),V&&_t(g,z),A}function E(g,m,p,b){if(typeof p=="object"&&p!==null&&p.type===In&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Wa:e:{for(var A=p.key;m!==null;){if(m.key===A){if(A=p.type,A===In){if(m.tag===7){n(g,m.sibling),b=a(m,p.props.children),b.return=g,g=b;break e}}else if(m.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===Qt&&zn(A)===m.type){n(g,m.sibling),b=a(m,p.props),Vl(b,p),b.return=g,g=b;break e}n(g,m);break}else t(g,m);m=m.sibling}p.type===In?(b=Tn(p.props.children,g.mode,b,p.key),b.return=g,g=b):(b=bi(p.type,p.key,p.props,null,g.mode,b),Vl(b,p),b.return=g,g=b)}return r(g);case $l:e:{for(A=p.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===p.containerInfo&&m.stateNode.implementation===p.implementation){n(g,m.sibling),b=a(m,p.children||[]),b.return=g,g=b;break e}else{n(g,m);break}else t(g,m);m=m.sibling}b=Ir(p,g.mode,b),b.return=g,g=b}return r(g);case Qt:return p=zn(p),E(g,m,p,b)}if(Wl(p))return x(g,m,p,b);if(ql(p)){if(A=ql(p),typeof A!="function")throw Error(w(150));return p=A.call(p),S(g,m,p,b)}if(typeof p.then=="function")return E(g,m,li(p),b);if(p.$$typeof===Mt)return E(g,m,ni(g,p),b);ai(g,p)}return typeof p=="string"&&p!==""||typeof p=="number"||typeof p=="bigint"?(p=""+p,m!==null&&m.tag===6?(n(g,m.sibling),b=a(m,p),b.return=g,g=b):(n(g,m),b=Fr(p,g.mode,b),b.return=g,g=b),r(g)):n(g,m)}return function(g,m,p,b){try{xa=0;var A=E(g,m,p,b);return ml=null,A}catch(j){if(j===Rl||j===Er)throw j;var R=Qe(29,j,null,g.mode);return R.lanes=b,R.return=g,R}finally{}}}var kn=Kd(!0),Jd=Kd(!1),Zt=!1;function Pc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wo(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function rn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function on(e,t,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,Z&2){var a=l.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),l.pending=t,t=Hi(e),Yd(e,null,n),t}return Sr(e,l,t,n),Hi(e)}function ia(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,dd(e,n)}}function eo(e,t){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var a=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var r={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};i===null?a=i=r:i=i.next=r,n=n.next}while(n!==null);i===null?a=i=t:i=i.next=t}else a=i=t;n={baseState:l.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Fo=!1;function ra(){if(Fo){var e=hl;if(e!==null)throw e}}function oa(e,t,n,l){Fo=!1;var a=e.updateQueue;Zt=!1;var i=a.firstBaseUpdate,r=a.lastBaseUpdate,o=a.shared.pending;if(o!==null){a.shared.pending=null;var c=o,u=c.next;c.next=null,r===null?i=u:r.next=u,r=c;var d=e.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==r&&(o===null?d.firstBaseUpdate=u:o.next=u,d.lastBaseUpdate=c))}if(i!==null){var h=a.baseState;r=0,d=u=c=null,o=i;do{var f=o.lane&-536870913,v=f!==o.lane;if(v?(X&f)===f:(l&f)===f){f!==0&&f===xl&&(Fo=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var x=e,S=o;f=t;var E=n;switch(S.tag){case 1:if(x=S.payload,typeof x=="function"){h=x.call(E,h,f);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=S.payload,f=typeof x=="function"?x.call(E,h,f):x,f==null)break e;h=ie({},h,f);break e;case 2:Zt=!0}}f=o.callback,f!==null&&(e.flags|=64,v&&(e.flags|=8192),v=a.callbacks,v===null?a.callbacks=[f]:v.push(f))}else v={lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(u=d=v,c=h):d=d.next=v,r|=f;if(o=o.next,o===null){if(o=a.shared.pending,o===null)break;v=o,o=v.next,v.next=null,a.lastBaseUpdate=v,a.shared.pending=null}}while(1);d===null&&(c=h),a.baseState=c,a.firstBaseUpdate=u,a.lastBaseUpdate=d,i===null&&(a.shared.lanes=0),pn|=r,e.lanes=r,e.memoizedState=h}}function $d(e,t){if(typeof e!="function")throw Error(w(191,e));e.call(t)}function Wd(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)$d(n[e],t)}var wl=xt(null),qi=xt(0);function Ss(e,t){e=qt,ee(qi,e),ee(wl,t),qt=e|t.baseLanes}function Io(){ee(qi,qt),ee(wl,wl.current)}function eu(){qt=qi.current,Ee(wl),Ee(qi)}var Ie=xt(null),ot=null;function Jt(e){var t=e.alternate;ee(fe,fe.current&1),ee(Ie,e),ot===null&&(t===null||wl.current!==null||t.memoizedState!==null)&&(ot=e)}function Po(e){ee(fe,fe.current),ee(Ie,e),ot===null&&(ot=e)}function Fd(e){e.tag===22?(ee(fe,fe.current),ee(Ie,e),ot===null&&(ot=e)):$t()}function $t(){ee(fe,fe.current),ee(Ie,Ie.current)}function Ve(e){Ee(Ie),ot===e&&(ot=null),Ee(fe)}var fe=xt(0);function Gi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||yc(n)||bc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bt=0,Y=null,F=null,he=null,Xi=!1,gl=!1,Un=!1,Vi=0,wa=0,vl=null,zv=0;function ce(){throw Error(w(321))}function tu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Fe(e[n],t[n]))return!1;return!0}function nu(e,t,n,l,a,i){return Bt=i,Y=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,H.H=e===null||e.memoizedState===null?Th:hu,Un=!1,i=n(l,a),Un=!1,gl&&(i=Pd(t,n,l,a)),Id(e),i}function Id(e){H.H=Sa;var t=F!==null&&F.next!==null;if(Bt=0,he=F=Y=null,Xi=!1,wa=0,vl=null,t)throw Error(w(300));e===null||ve||(e=e.dependencies,e!==null&&Yi(e)&&(ve=!0))}function Pd(e,t,n,l){Y=e;var a=0;do{if(gl&&(vl=null),wa=0,gl=!1,25<=a)throw Error(w(301));if(a+=1,he=F=null,e.updateQueue!=null){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}H.H=_h,i=t(n,l)}while(gl);return i}function Nv(){var e=H.H,t=e.useState()[0];return t=typeof t.then=="function"?Ha(t):t,e=e.useState()[0],(F!==null?F.memoizedState:null)!==e&&(Y.flags|=1024),t}function lu(){var e=Vi!==0;return Vi=0,e}function au(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function iu(e){if(Xi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Xi=!1}Bt=0,he=F=Y=null,gl=!1,wa=Vi=0,vl=null}function Oe(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?Y.memoizedState=he=e:he=he.next=e,he}function de(){if(F===null){var e=Y.alternate;e=e!==null?e.memoizedState:null}else e=F.next;var t=he===null?Y.memoizedState:he.next;if(t!==null)he=t,F=e;else{if(e===null)throw Y.alternate===null?Error(w(467)):Error(w(310));F=e,e={memoizedState:F.memoizedState,baseState:F.baseState,baseQueue:F.baseQueue,queue:F.queue,next:null},he===null?Y.memoizedState=he=e:he=he.next=e}return he}function zr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ha(e){var t=wa;return wa+=1,vl===null&&(vl=[]),e=Zd(vl,e,t),t=Y,(he===null?t.memoizedState:he.next)===null&&(t=t.alternate,H.H=t===null||t.memoizedState===null?Th:hu),e}function Nr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ha(e);if(e.$$typeof===Mt)return Te(e)}throw Error(w(438,String(e)))}function ru(e){var t=null,n=Y.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var l=Y.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(a){return a.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=zr(),Y.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),l=0;l<e;l++)n[l]=sg;return t.index++,n}function Yt(e,t){return typeof t=="function"?t(e):t}function wi(e){var t=de();return ou(t,F,e)}function ou(e,t,n){var l=e.queue;if(l===null)throw Error(w(311));l.lastRenderedReducer=n;var a=e.baseQueue,i=l.pending;if(i!==null){if(a!==null){var r=a.next;a.next=i.next,i.next=r}t.baseQueue=a=i,l.pending=null}if(i=e.baseState,a===null)e.memoizedState=i;else{t=a.next;var o=r=null,c=null,u=t,d=!1;do{var h=u.lane&-536870913;if(h!==u.lane?(X&h)===h:(Bt&h)===h){var f=u.revertLane;if(f===0)c!==null&&(c=c.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),h===xl&&(d=!0);else if((Bt&f)===f){u=u.next,f===xl&&(d=!0);continue}else h={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(o=c=h,r=i):c=c.next=h,Y.lanes|=f,pn|=f;h=u.action,Un&&n(i,h),i=u.hasEagerState?u.eagerState:n(i,h)}else f={lane:h,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},c===null?(o=c=f,r=i):c=c.next=f,Y.lanes|=h,pn|=h;u=u.next}while(u!==null&&u!==t);if(c===null?r=i:c.next=o,!Fe(i,e.memoizedState)&&(ve=!0,d&&(n=hl,n!==null)))throw n;e.memoizedState=i,e.baseState=r,e.baseQueue=c,l.lastRenderedState=i}return a===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function to(e){var t=de(),n=t.queue;if(n===null)throw Error(w(311));n.lastRenderedReducer=e;var l=n.dispatch,a=n.pending,i=t.memoizedState;if(a!==null){n.pending=null;var r=a=a.next;do i=e(i,r.action),r=r.next;while(r!==a);Fe(i,t.memoizedState)||(ve=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,l]}function eh(e,t,n){var l=Y,a=de(),i=V;if(i){if(n===void 0)throw Error(w(407));n=n()}else n=t();var r=!Fe((F||a).memoizedState,n);if(r&&(a.memoizedState=n,ve=!0),a=a.queue,cu(lh.bind(null,l,a,e),[e]),a.getSnapshot!==t||r||he!==null&&he.memoizedState.tag&1){if(l.flags|=2048,Sl(9,{destroy:void 0},nh.bind(null,l,a,n,t),null),P===null)throw Error(w(349));i||Bt&127||th(l,t,n)}return n}function th(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Y.updateQueue,t===null?(t=zr(),Y.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function nh(e,t,n,l){t.value=n,t.getSnapshot=l,ah(t)&&ih(e)}function lh(e,t,n){return n(function(){ah(t)&&ih(e)})}function ah(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Fe(e,n)}catch{return!0}}function ih(e){var t=qn(e,2);t!==null&&Le(t,e,2)}function ec(e){var t=Oe();if(typeof e=="function"){var n=e;if(e=n(),Un){Ft(!0);try{n()}finally{Ft(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:e},t}function rh(e,t,n,l){return e.baseState=n,ou(e,F,typeof l=="function"?l:Yt)}function Av(e,t,n,l,a){if(jr(e))throw Error(w(485));if(e=t.action,e!==null){var i={payload:a,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(r){i.listeners.push(r)}};H.T!==null?n(!0):i.isTransition=!1,l(i),n=t.pending,n===null?(i.next=t.pending=i,oh(t,i)):(i.next=n.next,t.pending=n.next=i)}}function oh(e,t){var n=t.action,l=t.payload,a=e.state;if(t.isTransition){var i=H.T,r={};H.T=r;try{var o=n(a,l),c=H.S;c!==null&&c(r,o),Es(e,t,o)}catch(u){tc(e,t,u)}finally{i!==null&&r.types!==null&&(i.types=r.types),H.T=i}}else try{i=n(a,l),Es(e,t,i)}catch(u){tc(e,t,u)}}function Es(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){zs(e,t,l)},function(l){return tc(e,t,l)}):zs(e,t,n)}function zs(e,t,n){t.status="fulfilled",t.value=n,ch(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,oh(e,n)))}function tc(e,t,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=n,ch(t),t=t.next;while(t!==l)}e.action=null}function ch(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function uh(e,t){return t}function Ns(e,t){if(V){var n=P.formState;if(n!==null){e:{var l=Y;if(V){if(le){t:{for(var a=le,i=rt;a.nodeType!==8;){if(!i){a=null;break t}if(a=ct(a.nextSibling),a===null){a=null;break t}}i=a.data,a=i==="F!"||i==="F"?a:null}if(a){le=ct(a.nextSibling),l=a.data==="F!";break e}}gn(l)}l=!1}l&&(t=n[0])}}return n=Oe(),n.memoizedState=n.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uh,lastRenderedState:t},n.queue=l,n=Nh.bind(null,Y,l),l.dispatch=n,l=ec(!1),i=du.bind(null,Y,!1,l.queue),l=Oe(),a={state:t,dispatch:null,action:e,pending:null},l.queue=a,n=Av.bind(null,Y,a,i,n),a.dispatch=n,l.memoizedState=e,[t,n,!1]}function As(e){var t=de();return sh(t,F,e)}function sh(e,t,n){if(t=ou(e,t,uh)[0],e=wi(Yt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=Ha(t)}catch(r){throw r===Rl?Er:r}else l=t;t=de();var a=t.queue,i=a.dispatch;return n!==t.memoizedState&&(Y.flags|=2048,Sl(9,{destroy:void 0},jv.bind(null,a,n),null)),[l,i,e]}function jv(e,t){e.action=t}function js(e){var t=de(),n=F;if(n!==null)return sh(t,n,e);de(),t=t.memoizedState,n=de();var l=n.queue.dispatch;return n.memoizedState=e,[t,l,!1]}function Sl(e,t,n,l){return e={tag:e,create:n,deps:l,inst:t,next:null},t=Y.updateQueue,t===null&&(t=zr(),Y.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,t.lastEffect=e),e}function fh(){return de().memoizedState}function Si(e,t,n,l){var a=Oe();Y.flags|=e,a.memoizedState=Sl(1|t,{destroy:void 0},n,l===void 0?null:l)}function Ar(e,t,n,l){var a=de();l=l===void 0?null:l;var i=a.memoizedState.inst;F!==null&&l!==null&&tu(l,F.memoizedState.deps)?a.memoizedState=Sl(t,i,n,l):(Y.flags|=e,a.memoizedState=Sl(1|t,i,n,l))}function Ts(e,t){Si(8390656,8,e,t)}function cu(e,t){Ar(2048,8,e,t)}function Tv(e){Y.flags|=4;var t=Y.updateQueue;if(t===null)t=zr(),Y.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function dh(e){var t=de().memoizedState;return Tv({ref:t,nextImpl:e}),function(){if(Z&2)throw Error(w(440));return t.impl.apply(void 0,arguments)}}function hh(e,t){return Ar(4,2,e,t)}function mh(e,t){return Ar(4,4,e,t)}function gh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vh(e,t,n){n=n!=null?n.concat([e]):null,Ar(4,4,gh.bind(null,t,e),n)}function uu(){}function ph(e,t){var n=de();t=t===void 0?null:t;var l=n.memoizedState;return t!==null&&tu(t,l[1])?l[0]:(n.memoizedState=[e,t],e)}function yh(e,t){var n=de();t=t===void 0?null:t;var l=n.memoizedState;if(t!==null&&tu(t,l[1]))return l[0];if(l=e(),Un){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[l,t],l}function su(e,t,n){return n===void 0||Bt&1073741824&&!(X&261930)?e.memoizedState=t:(e.memoizedState=n,e=r0(),Y.lanes|=e,pn|=e,n)}function bh(e,t,n,l){return Fe(n,t)?n:wl.current!==null?(e=su(e,n,l),Fe(e,t)||(ve=!0),e):!(Bt&42)||Bt&1073741824&&!(X&261930)?(ve=!0,e.memoizedState=n):(e=r0(),Y.lanes|=e,pn|=e,t)}function xh(e,t,n,l,a){var i=K.p;K.p=i!==0&&8>i?i:8;var r=H.T,o={};H.T=o,du(e,!1,t,n);try{var c=a(),u=H.S;if(u!==null&&u(o,c),c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=Ev(c,l);ca(e,t,d,We(e))}else ca(e,t,l,We(e))}catch(h){ca(e,t,{then:function(){},status:"rejected",reason:h},We())}finally{K.p=i,r!==null&&o.types!==null&&(r.types=o.types),H.T=r}}function _v(){}function nc(e,t,n,l){if(e.tag!==5)throw Error(w(476));var a=wh(e).queue;xh(e,a,t,jn,n===null?_v:function(){return Sh(e),n(l)})}function wh(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:jn,baseState:jn,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:jn},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Sh(e){var t=wh(e);t.next===null&&(t=e.alternate.memoizedState),ca(e,t.next.queue,{},We())}function fu(){return Te(Na)}function Eh(){return de().memoizedState}function zh(){return de().memoizedState}function Cv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=We();e=rn(n);var l=on(t,e,n);l!==null&&(Le(l,t,n),ia(l,t,n)),t={cache:Wc()},e.payload=t;return}t=t.return}}function Mv(e,t,n){var l=We();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},jr(e)?Ah(t,n):(n=Zc(e,t,n,l),n!==null&&(Le(n,e,l),jh(n,t,l)))}function Nh(e,t,n){var l=We();ca(e,t,n,l)}function ca(e,t,n,l){var a={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(jr(e))Ah(t,a);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var r=t.lastRenderedState,o=i(r,n);if(a.hasEagerState=!0,a.eagerState=o,Fe(o,r))return Sr(e,t,a,0),P===null&&wr(),!1}catch{}finally{}if(n=Zc(e,t,a,l),n!==null)return Le(n,e,l),jh(n,t,l),!0}return!1}function du(e,t,n,l){if(l={lane:2,revertLane:wu(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},jr(e)){if(t)throw Error(w(479))}else t=Zc(e,n,l,2),t!==null&&Le(t,e,2)}function jr(e){var t=e.alternate;return e===Y||t!==null&&t===Y}function Ah(e,t){gl=Xi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jh(e,t,n){if(n&4194048){var l=t.lanes;l&=e.pendingLanes,n|=l,t.lanes=n,dd(e,n)}}var Sa={readContext:Te,use:Nr,useCallback:ce,useContext:ce,useEffect:ce,useImperativeHandle:ce,useLayoutEffect:ce,useInsertionEffect:ce,useMemo:ce,useReducer:ce,useRef:ce,useState:ce,useDebugValue:ce,useDeferredValue:ce,useTransition:ce,useSyncExternalStore:ce,useId:ce,useHostTransitionStatus:ce,useFormState:ce,useActionState:ce,useOptimistic:ce,useMemoCache:ce,useCacheRefresh:ce};Sa.useEffectEvent=ce;var Th={readContext:Te,use:Nr,useCallback:function(e,t){return Oe().memoizedState=[e,t===void 0?null:t],e},useContext:Te,useEffect:Ts,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Si(4194308,4,gh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Si(4194308,4,e,t)},useInsertionEffect:function(e,t){Si(4,2,e,t)},useMemo:function(e,t){var n=Oe();t=t===void 0?null:t;var l=e();if(Un){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[l,t],l},useReducer:function(e,t,n){var l=Oe();if(n!==void 0){var a=n(t);if(Un){Ft(!0);try{n(t)}finally{Ft(!1)}}}else a=t;return l.memoizedState=l.baseState=a,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:a},l.queue=e,e=e.dispatch=Mv.bind(null,Y,e),[l.memoizedState,e]},useRef:function(e){var t=Oe();return e={current:e},t.memoizedState=e},useState:function(e){e=ec(e);var t=e.queue,n=Nh.bind(null,Y,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:uu,useDeferredValue:function(e,t){var n=Oe();return su(n,e,t)},useTransition:function(){var e=ec(!1);return e=xh.bind(null,Y,e.queue,!0,!1),Oe().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var l=Y,a=Oe();if(V){if(n===void 0)throw Error(w(407));n=n()}else{if(n=t(),P===null)throw Error(w(349));X&127||th(l,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Ts(lh.bind(null,l,i,e),[e]),l.flags|=2048,Sl(9,{destroy:void 0},nh.bind(null,l,i,n,t),null),n},useId:function(){var e=Oe(),t=P.identifierPrefix;if(V){var n=pt,l=vt;n=(l&~(1<<32-$e(l)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Vi++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=zv++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:fu,useFormState:Ns,useActionState:Ns,useOptimistic:function(e){var t=Oe();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=du.bind(null,Y,!0,n),n.dispatch=t,[e,t]},useMemoCache:ru,useCacheRefresh:function(){return Oe().memoizedState=Cv.bind(null,Y)},useEffectEvent:function(e){var t=Oe(),n={impl:e};return t.memoizedState=n,function(){if(Z&2)throw Error(w(440));return n.impl.apply(void 0,arguments)}}},hu={readContext:Te,use:Nr,useCallback:ph,useContext:Te,useEffect:cu,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:mh,useMemo:yh,useReducer:wi,useRef:fh,useState:function(){return wi(Yt)},useDebugValue:uu,useDeferredValue:function(e,t){var n=de();return bh(n,F.memoizedState,e,t)},useTransition:function(){var e=wi(Yt)[0],t=de().memoizedState;return[typeof e=="boolean"?e:Ha(e),t]},useSyncExternalStore:eh,useId:Eh,useHostTransitionStatus:fu,useFormState:As,useActionState:As,useOptimistic:function(e,t){var n=de();return rh(n,F,e,t)},useMemoCache:ru,useCacheRefresh:zh};hu.useEffectEvent=dh;var _h={readContext:Te,use:Nr,useCallback:ph,useContext:Te,useEffect:cu,useImperativeHandle:vh,useInsertionEffect:hh,useLayoutEffect:mh,useMemo:yh,useReducer:to,useRef:fh,useState:function(){return to(Yt)},useDebugValue:uu,useDeferredValue:function(e,t){var n=de();return F===null?su(n,e,t):bh(n,F.memoizedState,e,t)},useTransition:function(){var e=to(Yt)[0],t=de().memoizedState;return[typeof e=="boolean"?e:Ha(e),t]},useSyncExternalStore:eh,useId:Eh,useHostTransitionStatus:fu,useFormState:js,useActionState:js,useOptimistic:function(e,t){var n=de();return F!==null?rh(n,F,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:ru,useCacheRefresh:zh};_h.useEffectEvent=dh;function no(e,t,n,l){t=e.memoizedState,n=n(l,t),n=n==null?t:ie({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var lc={enqueueSetState:function(e,t,n){e=e._reactInternals;var l=We(),a=rn(l);a.payload=t,n!=null&&(a.callback=n),t=on(e,a,l),t!==null&&(Le(t,e,l),ia(t,e,l))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var l=We(),a=rn(l);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=on(e,a,l),t!==null&&(Le(t,e,l),ia(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),l=rn(n);l.tag=2,t!=null&&(l.callback=t),t=on(e,l,n),t!==null&&(Le(t,e,n),ia(t,e,n))}};function _s(e,t,n,l,a,i,r){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,i,r):t.prototype&&t.prototype.isPureReactComponent?!pa(n,l)||!pa(a,i):!0}function Cs(e,t,n,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,l),t.state!==e&&lc.enqueueReplaceState(t,t.state,null)}function Hn(e,t){var n=t;if("ref"in t){n={};for(var l in t)l!=="ref"&&(n[l]=t[l])}if(e=e.defaultProps){n===t&&(n=ie({},n));for(var a in e)n[a]===void 0&&(n[a]=e[a])}return n}function Ch(e){Ui(e)}function Mh(e){console.error(e)}function Oh(e){Ui(e)}function Qi(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function Ms(e,t,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(a){setTimeout(function(){throw a})}}function ac(e,t,n){return n=rn(n),n.tag=3,n.payload={element:null},n.callback=function(){Qi(e,t)},n}function Rh(e){return e=rn(e),e.tag=3,e}function Dh(e,t,n,l){var a=n.type.getDerivedStateFromError;if(typeof a=="function"){var i=l.value;e.payload=function(){return a(i)},e.callback=function(){Ms(t,n,l)}}var r=n.stateNode;r!==null&&typeof r.componentDidCatch=="function"&&(e.callback=function(){Ms(t,n,l),typeof a!="function"&&(cn===null?cn=new Set([this]):cn.add(this));var o=l.stack;this.componentDidCatch(l.value,{componentStack:o!==null?o:""})})}function Ov(e,t,n,l,a){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=n.alternate,t!==null&&Ol(t,n,a,!0),n=Ie.current,n!==null){switch(n.tag){case 31:case 13:return ot===null?Wi():n.alternate===null&&ue===0&&(ue=3),n.flags&=-257,n.flags|=65536,n.lanes=a,l===Li?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([l]):t.add(l),mo(e,l,a)),!1;case 22:return n.flags|=65536,l===Li?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([l]):n.add(l)),mo(e,l,a)),!1}throw Error(w(435,n.tag))}return mo(e,l,a),Wi(),!1}if(V)return t=Ie.current,t!==null?(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,l!==Qo&&(e=Error(w(422),{cause:l}),ba(it(e,n)))):(l!==Qo&&(t=Error(w(423),{cause:l}),ba(it(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,l=it(l,n),a=ac(e.stateNode,l,a),eo(e,a),ue!==4&&(ue=2)),!1;var i=Error(w(520),{cause:l});if(i=it(i,n),fa===null?fa=[i]:fa.push(i),ue!==4&&(ue=2),t===null)return!0;l=it(l,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=ac(n.stateNode,l,e),eo(n,e),!1;case 1:if(t=n.type,i=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(cn===null||!cn.has(i))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Rh(a),Dh(a,e,n,l),eo(n,a),!1}n=n.return}while(n!==null);return!1}var mu=Error(w(461)),ve=!1;function Ne(e,t,n,l){t.child=e===null?Jd(t,null,n,l):kn(t,e.child,n,l)}function Os(e,t,n,l,a){n=n.render;var i=t.ref;if("ref"in l){var r={};for(var o in l)o!=="ref"&&(r[o]=l[o])}else r=l;return Dn(t),l=nu(e,t,n,r,i,a),o=lu(),e!==null&&!ve?(au(e,t,a),Lt(e,t,a)):(V&&o&&Jc(t),t.flags|=1,Ne(e,t,l,a),t.child)}function Rs(e,t,n,l,a){if(e===null){var i=n.type;return typeof i=="function"&&!Kc(i)&&i.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=i,kh(e,t,i,l,a)):(e=bi(n.type,null,l,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!gu(e,a)){var r=i.memoizedProps;if(n=n.compare,n=n!==null?n:pa,n(r,l)&&e.ref===t.ref)return Lt(e,t,a)}return t.flags|=1,e=Dt(i,l),e.ref=t.ref,e.return=t,t.child=e}function kh(e,t,n,l,a){if(e!==null){var i=e.memoizedProps;if(pa(i,l)&&e.ref===t.ref)if(ve=!1,t.pendingProps=l=i,gu(e,a))e.flags&131072&&(ve=!0);else return t.lanes=e.lanes,Lt(e,t,a)}return ic(e,t,n,l,a)}function Uh(e,t,n,l){var a=l.children,i=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if(t.flags&128){if(i=i!==null?i.baseLanes|n:n,e!==null){for(l=t.child=e.child,a=0;l!==null;)a=a|l.lanes|l.childLanes,l=l.sibling;l=a&~i}else l=0,t.child=null;return Ds(e,t,i,n,l)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&xi(t,i!==null?i.cachePool:null),i!==null?Ss(t,i):Io(),Fd(t);else return l=t.lanes=536870912,Ds(e,t,i!==null?i.baseLanes|n:n,n,l)}else i!==null?(xi(t,i.cachePool),Ss(t,i),$t(),t.memoizedState=null):(e!==null&&xi(t,null),Io(),$t());return Ne(e,t,a,n),t.child}function Il(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ds(e,t,n,l,a){var i=Fc();return i=i===null?null:{parent:ge._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},e!==null&&xi(t,null),Io(),Fd(t),e!==null&&Ol(e,t,l,!0),t.childLanes=a,null}function Ei(e,t){return t=Zi({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function ks(e,t,n){return kn(t,e.child,null,n),e=Ei(t,t.pendingProps),e.flags|=2,Ve(t),t.memoizedState=null,e}function Rv(e,t,n){var l=t.pendingProps,a=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(V){if(l.mode==="hidden")return e=Ei(t,l),t.lanes=536870912,Il(null,e);if(Po(t),(e=le)?(e=T0(e,rt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:mn!==null?{id:vt,overflow:pt}:null,retryLane:536870912,hydrationErrors:null},n=qd(e),n.return=t,t.child=n,je=t,le=null)):e=null,e===null)throw gn(t);return t.lanes=536870912,null}return Ei(t,l)}var i=e.memoizedState;if(i!==null){var r=i.dehydrated;if(Po(t),a)if(t.flags&256)t.flags&=-257,t=ks(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(w(558));else if(ve||Ol(e,t,n,!1),a=(n&e.childLanes)!==0,ve||a){if(l=P,l!==null&&(r=hd(l,n),r!==0&&r!==i.retryLane))throw i.retryLane=r,qn(e,r),Le(l,e,r),mu;Wi(),t=ks(e,t,n)}else e=i.treeContext,le=ct(r.nextSibling),je=t,V=!0,an=null,rt=!1,e!==null&&Xd(t,e),t=Ei(t,l),t.flags|=4096;return t}return e=Dt(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function zi(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(w(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function ic(e,t,n,l,a){return Dn(t),n=nu(e,t,n,l,void 0,a),l=lu(),e!==null&&!ve?(au(e,t,a),Lt(e,t,a)):(V&&l&&Jc(t),t.flags|=1,Ne(e,t,n,a),t.child)}function Us(e,t,n,l,a,i){return Dn(t),t.updateQueue=null,n=Pd(t,l,n,a),Id(e),l=lu(),e!==null&&!ve?(au(e,t,i),Lt(e,t,i)):(V&&l&&Jc(t),t.flags|=1,Ne(e,t,n,i),t.child)}function Hs(e,t,n,l,a){if(Dn(t),t.stateNode===null){var i=rl,r=n.contextType;typeof r=="object"&&r!==null&&(i=Te(r)),i=new n(l,i),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=lc,t.stateNode=i,i._reactInternals=t,i=t.stateNode,i.props=l,i.state=t.memoizedState,i.refs={},Pc(t),r=n.contextType,i.context=typeof r=="object"&&r!==null?Te(r):rl,i.state=t.memoizedState,r=n.getDerivedStateFromProps,typeof r=="function"&&(no(t,n,r,l),i.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(r=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),r!==i.state&&lc.enqueueReplaceState(i,i.state,null),oa(t,l,i,a),ra(),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){i=t.stateNode;var o=t.memoizedProps,c=Hn(n,o);i.props=c;var u=i.context,d=n.contextType;r=rl,typeof d=="object"&&d!==null&&(r=Te(d));var h=n.getDerivedStateFromProps;d=typeof h=="function"||typeof i.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(o||u!==r)&&Cs(t,i,l,r),Zt=!1;var f=t.memoizedState;i.state=f,oa(t,l,i,a),ra(),u=t.memoizedState,o||f!==u||Zt?(typeof h=="function"&&(no(t,n,h,l),u=t.memoizedState),(c=Zt||_s(t,n,c,l,f,u,r))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=u),i.props=l,i.state=u,i.context=r,l=c):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{i=t.stateNode,Wo(e,t),r=t.memoizedProps,d=Hn(n,r),i.props=d,h=t.pendingProps,f=i.context,u=n.contextType,c=rl,typeof u=="object"&&u!==null&&(c=Te(u)),o=n.getDerivedStateFromProps,(u=typeof o=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(r!==h||f!==c)&&Cs(t,i,l,c),Zt=!1,f=t.memoizedState,i.state=f,oa(t,l,i,a),ra();var v=t.memoizedState;r!==h||f!==v||Zt||e!==null&&e.dependencies!==null&&Yi(e.dependencies)?(typeof o=="function"&&(no(t,n,o,l),v=t.memoizedState),(d=Zt||_s(t,n,d,l,f,v,c)||e!==null&&e.dependencies!==null&&Yi(e.dependencies))?(u||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(l,v,c),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(l,v,c)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=v),i.props=l,i.state=v,i.context=c,l=d):(typeof i.componentDidUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),l=!1)}return i=l,zi(e,t),l=(t.flags&128)!==0,i||l?(i=t.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:i.render(),t.flags|=1,e!==null&&l?(t.child=kn(t,e.child,null,a),t.child=kn(t,null,n,a)):Ne(e,t,n,a),t.memoizedState=i.state,e=t.child):e=Lt(e,t,a),e}function Bs(e,t,n,l){return Rn(),t.flags|=256,Ne(e,t,n,l),t.child}var lo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ao(e){return{baseLanes:e,cachePool:Qd()}}function io(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=Ze),e}function Hh(e,t,n){var l=t.pendingProps,a=!1,i=(t.flags&128)!==0,r;if((r=i)||(r=e!==null&&e.memoizedState===null?!1:(fe.current&2)!==0),r&&(a=!0,t.flags&=-129),r=(t.flags&32)!==0,t.flags&=-33,e===null){if(V){if(a?Jt(t):$t(),(e=le)?(e=T0(e,rt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:mn!==null?{id:vt,overflow:pt}:null,retryLane:536870912,hydrationErrors:null},n=qd(e),n.return=t,t.child=n,je=t,le=null)):e=null,e===null)throw gn(t);return bc(e)?t.lanes=32:t.lanes=536870912,null}var o=l.children;return l=l.fallback,a?($t(),a=t.mode,o=Zi({mode:"hidden",children:o},a),l=Tn(l,a,n,null),o.return=t,l.return=t,o.sibling=l,t.child=o,l=t.child,l.memoizedState=ao(n),l.childLanes=io(e,r,n),t.memoizedState=lo,Il(null,l)):(Jt(t),rc(t,o))}var c=e.memoizedState;if(c!==null&&(o=c.dehydrated,o!==null)){if(i)t.flags&256?(Jt(t),t.flags&=-257,t=ro(e,t,n)):t.memoizedState!==null?($t(),t.child=e.child,t.flags|=128,t=null):($t(),o=l.fallback,a=t.mode,l=Zi({mode:"visible",children:l.children},a),o=Tn(o,a,n,null),o.flags|=2,l.return=t,o.return=t,l.sibling=o,t.child=l,kn(t,e.child,null,n),l=t.child,l.memoizedState=ao(n),l.childLanes=io(e,r,n),t.memoizedState=lo,t=Il(null,l));else if(Jt(t),bc(o)){if(r=o.nextSibling&&o.nextSibling.dataset,r)var u=r.dgst;r=u,l=Error(w(419)),l.stack="",l.digest=r,ba({value:l,source:null,stack:null}),t=ro(e,t,n)}else if(ve||Ol(e,t,n,!1),r=(n&e.childLanes)!==0,ve||r){if(r=P,r!==null&&(l=hd(r,n),l!==0&&l!==c.retryLane))throw c.retryLane=l,qn(e,l),Le(r,e,l),mu;yc(o)||Wi(),t=ro(e,t,n)}else yc(o)?(t.flags|=192,t.child=e.child,t=null):(e=c.treeContext,le=ct(o.nextSibling),je=t,V=!0,an=null,rt=!1,e!==null&&Xd(t,e),t=rc(t,l.children),t.flags|=4096);return t}return a?($t(),o=l.fallback,a=t.mode,c=e.child,u=c.sibling,l=Dt(c,{mode:"hidden",children:l.children}),l.subtreeFlags=c.subtreeFlags&65011712,u!==null?o=Dt(u,o):(o=Tn(o,a,n,null),o.flags|=2),o.return=t,l.return=t,l.sibling=o,t.child=l,Il(null,l),l=t.child,o=e.child.memoizedState,o===null?o=ao(n):(a=o.cachePool,a!==null?(c=ge._currentValue,a=a.parent!==c?{parent:c,pool:c}:a):a=Qd(),o={baseLanes:o.baseLanes|n,cachePool:a}),l.memoizedState=o,l.childLanes=io(e,r,n),t.memoizedState=lo,Il(e.child,l)):(Jt(t),n=e.child,e=n.sibling,n=Dt(n,{mode:"visible",children:l.children}),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function rc(e,t){return t=Zi({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Zi(e,t){return e=Qe(22,e,null,t),e.lanes=0,e}function ro(e,t,n){return kn(t,e.child,null,n),e=rc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ys(e,t,n){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Ko(e.return,t,n)}function oo(e,t,n,l,a,i){var r=e.memoizedState;r===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:a,treeForkCount:i}:(r.isBackwards=t,r.rendering=null,r.renderingStartTime=0,r.last=l,r.tail=n,r.tailMode=a,r.treeForkCount=i)}function Bh(e,t,n){var l=t.pendingProps,a=l.revealOrder,i=l.tail;l=l.children;var r=fe.current,o=(r&2)!==0;if(o?(r=r&1|2,t.flags|=128):r&=1,ee(fe,r),Ne(e,t,l,n),l=V?ya:0,!o&&e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ys(e,n,t);else if(e.tag===19)Ys(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(a){case"forwards":for(n=t.child,a=null;n!==null;)e=n.alternate,e!==null&&Gi(e)===null&&(a=n),n=n.sibling;n=a,n===null?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),oo(t,!1,a,n,i,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Gi(e)===null){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}oo(t,!0,n,null,i,l);break;case"together":oo(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,!(n&t.childLanes))if(e!==null){if(Ol(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(w(153));if(t.child!==null){for(e=t.child,n=Dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function gu(e,t){return e.lanes&t?!0:(e=e.dependencies,!!(e!==null&&Yi(e)))}function Dv(e,t,n){switch(t.tag){case 3:Oi(t,t.stateNode.containerInfo),Kt(t,ge,e.memoizedState.cache),Rn();break;case 27:case 5:Do(t);break;case 4:Oi(t,t.stateNode.containerInfo);break;case 10:Kt(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Po(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Jt(t),t.flags|=128,null):n&t.child.childLanes?Hh(e,t,n):(Jt(t),e=Lt(e,t,n),e!==null?e.sibling:null);Jt(t);break;case 19:var a=(e.flags&128)!==0;if(l=(n&t.childLanes)!==0,l||(Ol(e,t,n,!1),l=(n&t.childLanes)!==0),a){if(l)return Bh(e,t,n);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),ee(fe,fe.current),l)break;return null;case 22:return t.lanes=0,Uh(e,t,n,t.pendingProps);case 24:Kt(t,ge,e.memoizedState.cache)}return Lt(e,t,n)}function Yh(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ve=!0;else{if(!gu(e,n)&&!(t.flags&128))return ve=!1,Dv(e,t,n);ve=!!(e.flags&131072)}else ve=!1,V&&t.flags&1048576&&Gd(t,ya,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=zn(t.elementType),t.type=e,typeof e=="function")Kc(e)?(l=Hn(e,l),t.tag=1,t=Hs(null,t,e,l,n)):(t.tag=0,t=ic(null,t,e,l,n));else{if(e!=null){var a=e.$$typeof;if(a===Rc){t.tag=11,t=Os(null,t,e,l,n);break e}else if(a===Dc){t.tag=14,t=Rs(null,t,e,l,n);break e}}throw t=Oo(e)||e,Error(w(306,t,""))}}return t;case 0:return ic(e,t,t.type,t.pendingProps,n);case 1:return l=t.type,a=Hn(l,t.pendingProps),Hs(e,t,l,a,n);case 3:e:{if(Oi(t,t.stateNode.containerInfo),e===null)throw Error(w(387));l=t.pendingProps;var i=t.memoizedState;a=i.element,Wo(e,t),oa(t,l,null,n);var r=t.memoizedState;if(l=r.cache,Kt(t,ge,l),l!==i.cache&&Jo(t,[ge],n,!0),ra(),l=r.element,i.isDehydrated)if(i={element:l,isDehydrated:!1,cache:r.cache},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){t=Bs(e,t,l,n);break e}else if(l!==a){a=it(Error(w(424)),t),ba(a),t=Bs(e,t,l,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(le=ct(e.firstChild),je=t,V=!0,an=null,rt=!0,n=Jd(t,null,l,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Rn(),l===a){t=Lt(e,t,n);break e}Ne(e,t,l,n)}t=t.child}return t;case 26:return zi(e,t),e===null?(n=rf(t.type,null,t.pendingProps,null))?t.memoizedState=n:V||(n=t.type,e=t.pendingProps,l=er(ln.current).createElement(n),l[Ae]=t,l[qe]=e,_e(l,n,e),Se(l),t.stateNode=l):t.memoizedState=rf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Do(t),e===null&&V&&(l=t.stateNode=_0(t.type,t.pendingProps,ln.current),je=t,rt=!0,a=le,bn(t.type)?(xc=a,le=ct(l.firstChild)):le=a),Ne(e,t,t.pendingProps.children,n),zi(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&V&&((a=l=le)&&(l=sp(l,t.type,t.pendingProps,rt),l!==null?(t.stateNode=l,je=t,le=ct(l.firstChild),rt=!1,a=!0):a=!1),a||gn(t)),Do(t),a=t.type,i=t.pendingProps,r=e!==null?e.memoizedProps:null,l=i.children,vc(a,i)?l=null:r!==null&&vc(a,r)&&(t.flags|=32),t.memoizedState!==null&&(a=nu(e,t,Nv,null,null,n),Na._currentValue=a),zi(e,t),Ne(e,t,l,n),t.child;case 6:return e===null&&V&&((e=n=le)&&(n=fp(n,t.pendingProps,rt),n!==null?(t.stateNode=n,je=t,le=null,e=!0):e=!1),e||gn(t)),null;case 13:return Hh(e,t,n);case 4:return Oi(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=kn(t,null,l,n):Ne(e,t,l,n),t.child;case 11:return Os(e,t,t.type,t.pendingProps,n);case 7:return Ne(e,t,t.pendingProps,n),t.child;case 8:return Ne(e,t,t.pendingProps.children,n),t.child;case 12:return Ne(e,t,t.pendingProps.children,n),t.child;case 10:return l=t.pendingProps,Kt(t,t.type,l.value),Ne(e,t,l.children,n),t.child;case 9:return a=t.type._context,l=t.pendingProps.children,Dn(t),a=Te(a),l=l(a),t.flags|=1,Ne(e,t,l,n),t.child;case 14:return Rs(e,t,t.type,t.pendingProps,n);case 15:return kh(e,t,t.type,t.pendingProps,n);case 19:return Bh(e,t,n);case 31:return Rv(e,t,n);case 22:return Uh(e,t,n,t.pendingProps);case 24:return Dn(t),l=Te(ge),e===null?(a=Fc(),a===null&&(a=P,i=Wc(),a.pooledCache=i,i.refCount++,i!==null&&(a.pooledCacheLanes|=n),a=i),t.memoizedState={parent:l,cache:a},Pc(t),Kt(t,ge,a)):(e.lanes&n&&(Wo(e,t),oa(t,null,null,n),ra()),a=e.memoizedState,i=t.memoizedState,a.parent!==l?(a={parent:l,cache:l},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Kt(t,ge,l)):(l=i.cache,Kt(t,ge,l),l!==a.cache&&Jo(t,[ge],n,!0))),Ne(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(w(156,t.tag))}function zt(e){e.flags|=4}function co(e,t,n,l,a){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(a&335544128)===a)if(e.stateNode.complete)e.flags|=8192;else if(u0())e.flags|=8192;else throw Cn=Li,Ic}else e.flags&=-16777217}function Ls(e,t){if(t.type!=="stylesheet"||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!O0(t))if(u0())e.flags|=8192;else throw Cn=Li,Ic}function ii(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?sd():536870912,e.lanes|=t,El|=t)}function Ql(e,t){if(!V)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ne(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(t)for(var a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags&65011712,l|=a.flags&65011712,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)n|=a.lanes|a.childLanes,l|=a.subtreeFlags,l|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=l,e.childLanes=n,t}function kv(e,t,n){var l=t.pendingProps;switch($c(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(t),null;case 1:return ne(t),null;case 3:return n=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),kt(ge),pl(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Zn(t)?zt(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pr())),ne(t),null;case 26:var a=t.type,i=t.memoizedState;return e===null?(zt(t),i!==null?(ne(t),Ls(t,i)):(ne(t),co(t,a,null,l,n))):i?i!==e.memoizedState?(zt(t),ne(t),Ls(t,i)):(ne(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&zt(t),ne(t),co(t,a,e,l,n)),null;case 27:if(Ri(t),n=ln.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&zt(t);else{if(!l){if(t.stateNode===null)throw Error(w(166));return ne(t),null}e=bt.current,Zn(t)?gs(t):(e=_0(a,l,n),t.stateNode=e,zt(t))}return ne(t),null;case 5:if(Ri(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&zt(t);else{if(!l){if(t.stateNode===null)throw Error(w(166));return ne(t),null}if(i=bt.current,Zn(t))gs(t);else{var r=er(ln.current);switch(i){case 1:i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":i=r.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":i=r.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":i=r.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof l.is=="string"?r.createElement("select",{is:l.is}):r.createElement("select"),l.multiple?i.multiple=!0:l.size&&(i.size=l.size);break;default:i=typeof l.is=="string"?r.createElement(a,{is:l.is}):r.createElement(a)}}i[Ae]=t,i[qe]=l;e:for(r=t.child;r!==null;){if(r.tag===5||r.tag===6)i.appendChild(r.stateNode);else if(r.tag!==4&&r.tag!==27&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break e;for(;r.sibling===null;){if(r.return===null||r.return===t)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}t.stateNode=i;e:switch(_e(i,a,l),a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&zt(t)}}return ne(t),co(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&zt(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(w(166));if(e=ln.current,Zn(t)){if(e=t.stateNode,n=t.memoizedProps,l=null,a=je,a!==null)switch(a.tag){case 27:case 5:l=a.memoizedProps}e[Ae]=t,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||N0(e.nodeValue,n)),e||gn(t,!0)}else e=er(e).createTextNode(l),e[Ae]=t,t.stateNode=e}return ne(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(l=Zn(t),n!==null){if(e===null){if(!l)throw Error(w(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(w(557));e[Ae]=t}else Rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),e=!1}else n=Pr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Ve(t),t):(Ve(t),null);if(t.flags&128)throw Error(w(558))}return ne(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Zn(t),l!==null&&l.dehydrated!==null){if(e===null){if(!a)throw Error(w(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(w(317));a[Ae]=t}else Rn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ne(t),a=!1}else a=Pr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(Ve(t),t):(Ve(t),null)}return Ve(t),t.flags&128?(t.lanes=n,t):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=t.child,a=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(a=l.alternate.memoizedState.cachePool.pool),i=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(i=l.memoizedState.cachePool.pool),i!==a&&(l.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),ii(t,t.updateQueue),ne(t),null);case 4:return pl(),e===null&&Su(t.stateNode.containerInfo),ne(t),null;case 10:return kt(t.type),ne(t),null;case 19:if(Ee(fe),l=t.memoizedState,l===null)return ne(t),null;if(a=(t.flags&128)!==0,i=l.rendering,i===null)if(a)Ql(l,!1);else{if(ue!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=Gi(e),i!==null){for(t.flags|=128,Ql(l,!1),e=i.updateQueue,t.updateQueue=e,ii(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Ld(n,e),n=n.sibling;return ee(fe,fe.current&1|2),V&&_t(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Ke()>Ji&&(t.flags|=128,a=!0,Ql(l,!1),t.lanes=4194304)}else{if(!a)if(e=Gi(i),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,ii(t,e),Ql(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!V)return ne(t),null}else 2*Ke()-l.renderingStartTime>Ji&&n!==536870912&&(t.flags|=128,a=!0,Ql(l,!1),t.lanes=4194304);l.isBackwards?(i.sibling=t.child,t.child=i):(e=l.last,e!==null?e.sibling=i:t.child=i,l.last=i)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ke(),e.sibling=null,n=fe.current,ee(fe,a?n&1|2:n&1),V&&_t(t,l.treeForkCount),e):(ne(t),null);case 22:case 23:return Ve(t),eu(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?n&536870912&&!(t.flags&128)&&(ne(t),t.subtreeFlags&6&&(t.flags|=8192)):ne(t),n=t.updateQueue,n!==null&&ii(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==n&&(t.flags|=2048),e!==null&&Ee(_n),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),kt(ge),ne(t),null;case 25:return null;case 30:return null}throw Error(w(156,t.tag))}function Uv(e,t){switch($c(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return kt(ge),pl(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ri(t),null;case 31:if(t.memoizedState!==null){if(Ve(t),t.alternate===null)throw Error(w(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Ve(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(w(340));Rn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ee(fe),null;case 4:return pl(),null;case 10:return kt(t.type),null;case 22:case 23:return Ve(t),eu(),e!==null&&Ee(_n),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return kt(ge),null;case 25:return null;default:return null}}function Lh(e,t){switch($c(t),t.tag){case 3:kt(ge),pl();break;case 26:case 27:case 5:Ri(t);break;case 4:pl();break;case 31:t.memoizedState!==null&&Ve(t);break;case 13:Ve(t);break;case 19:Ee(fe);break;case 10:kt(t.type);break;case 22:case 23:Ve(t),eu(),e!==null&&Ee(_n);break;case 24:kt(ge)}}function Ba(e,t){try{var n=t.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var a=l.next;n=a;do{if((n.tag&e)===e){l=void 0;var i=n.create,r=n.inst;l=i(),r.destroy=l}n=n.next}while(n!==a)}}catch(o){$(t,t.return,o)}}function vn(e,t,n){try{var l=t.updateQueue,a=l!==null?l.lastEffect:null;if(a!==null){var i=a.next;l=i;do{if((l.tag&e)===e){var r=l.inst,o=r.destroy;if(o!==void 0){r.destroy=void 0,a=t;var c=n,u=o;try{u()}catch(d){$(a,c,d)}}}l=l.next}while(l!==i)}}catch(d){$(t,t.return,d)}}function qh(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Wd(t,n)}catch(l){$(e,e.return,l)}}}function Gh(e,t,n){n.props=Hn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){$(e,t,l)}}function ua(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(a){$(e,t,a)}}function yt(e,t){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(a){$(e,t,a)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(a){$(e,t,a)}else n.current=null}function Xh(e){var t=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(a){$(e,e.return,a)}}function uo(e,t,n){try{var l=e.stateNode;ap(l,e.type,n,t),l[qe]=t}catch(a){$(e,e.return,a)}}function Vh(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&bn(e.type)||e.tag===4}function so(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Vh(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&bn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oc(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ot));else if(l!==4&&(l===27&&bn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(oc(e,t,n),e=e.sibling;e!==null;)oc(e,t,n),e=e.sibling}function Ki(e,t,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(l!==4&&(l===27&&bn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Ki(e,t,n),e=e.sibling;e!==null;)Ki(e,t,n),e=e.sibling}function Qh(e){var t=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,a=t.attributes;a.length;)t.removeAttributeNode(a[0]);_e(t,l,n),t[Ae]=e,t[qe]=n}catch(i){$(e,e.return,i)}}var Ct=!1,me=!1,fo=!1,qs=typeof WeakSet=="function"?WeakSet:Set,we=null;function Hv(e,t){if(e=e.containerInfo,mc=ar,e=Od(e),Vc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var a=l.anchorOffset,i=l.focusNode;l=l.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var r=0,o=-1,c=-1,u=0,d=0,h=e,f=null;t:for(;;){for(var v;h!==n||a!==0&&h.nodeType!==3||(o=r+a),h!==i||l!==0&&h.nodeType!==3||(c=r+l),h.nodeType===3&&(r+=h.nodeValue.length),(v=h.firstChild)!==null;)f=h,h=v;for(;;){if(h===e)break t;if(f===n&&++u===a&&(o=r),f===i&&++d===l&&(c=r),(v=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=v}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(gc={focusedElem:e,selectionRange:n},ar=!1,we=t;we!==null;)if(t=we,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,we=e;else for(;we!==null;){switch(t=we,i=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&i!==null){e=void 0,n=t,a=i.memoizedProps,i=i.memoizedState,l=n.stateNode;try{var x=Hn(n.type,a);e=l.getSnapshotBeforeUpdate(x,i),l.__reactInternalSnapshotBeforeUpdate=e}catch(S){$(n,n.return,S)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)pc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":pc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(w(163))}if(e=t.sibling,e!==null){e.return=t.return,we=e;break}we=t.return}}function Zh(e,t,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:At(e,n),l&4&&Ba(5,n);break;case 1:if(At(e,n),l&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(r){$(n,n.return,r)}else{var a=Hn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(a,t,e.__reactInternalSnapshotBeforeUpdate)}catch(r){$(n,n.return,r)}}l&64&&qh(n),l&512&&ua(n,n.return);break;case 3:if(At(e,n),l&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Wd(e,t)}catch(r){$(n,n.return,r)}}break;case 27:t===null&&l&4&&Qh(n);case 26:case 5:At(e,n),t===null&&l&4&&Xh(n),l&512&&ua(n,n.return);break;case 12:At(e,n);break;case 31:At(e,n),l&4&&$h(e,n);break;case 13:At(e,n),l&4&&Wh(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Zv.bind(null,n),dp(e,n))));break;case 22:if(l=n.memoizedState!==null||Ct,!l){t=t!==null&&t.memoizedState!==null||me,a=Ct;var i=me;Ct=l,(me=t)&&!i?Tt(e,n,(n.subtreeFlags&8772)!==0):At(e,n),Ct=a,me=i}break;case 30:break;default:At(e,n)}}function Kh(e){var t=e.alternate;t!==null&&(e.alternate=null,Kh(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Bc(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var oe=null,Be=!1;function Nt(e,t,n){for(n=n.child;n!==null;)Jh(e,t,n),n=n.sibling}function Jh(e,t,n){if(Je&&typeof Je.onCommitFiberUnmount=="function")try{Je.onCommitFiberUnmount(Ma,n)}catch{}switch(n.tag){case 26:me||yt(n,t),Nt(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:me||yt(n,t);var l=oe,a=Be;bn(n.type)&&(oe=n.stateNode,Be=!1),Nt(e,t,n),ha(n.stateNode),oe=l,Be=a;break;case 5:me||yt(n,t);case 6:if(l=oe,a=Be,oe=null,Nt(e,t,n),oe=l,Be=a,oe!==null)if(Be)try{(oe.nodeType===9?oe.body:oe.nodeName==="HTML"?oe.ownerDocument.body:oe).removeChild(n.stateNode)}catch(i){$(n,t,i)}else try{oe.removeChild(n.stateNode)}catch(i){$(n,t,i)}break;case 18:oe!==null&&(Be?(e=oe,ef(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),jl(e)):ef(oe,n.stateNode));break;case 4:l=oe,a=Be,oe=n.stateNode.containerInfo,Be=!0,Nt(e,t,n),oe=l,Be=a;break;case 0:case 11:case 14:case 15:vn(2,n,t),me||vn(4,n,t),Nt(e,t,n);break;case 1:me||(yt(n,t),l=n.stateNode,typeof l.componentWillUnmount=="function"&&Gh(n,t,l)),Nt(e,t,n);break;case 21:Nt(e,t,n);break;case 22:me=(l=me)||n.memoizedState!==null,Nt(e,t,n),me=l;break;default:Nt(e,t,n)}}function $h(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{jl(e)}catch(n){$(t,t.return,n)}}}function Wh(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{jl(e)}catch(n){$(t,t.return,n)}}function Bv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new qs),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new qs),t;default:throw Error(w(435,e.tag))}}function ri(e,t){var n=Bv(e);t.forEach(function(l){if(!n.has(l)){n.add(l);var a=Kv.bind(null,e,l);l.then(a,a)}})}function Ue(e,t){var n=t.deletions;if(n!==null)for(var l=0;l<n.length;l++){var a=n[l],i=e,r=t,o=r;e:for(;o!==null;){switch(o.tag){case 27:if(bn(o.type)){oe=o.stateNode,Be=!1;break e}break;case 5:oe=o.stateNode,Be=!1;break e;case 3:case 4:oe=o.stateNode.containerInfo,Be=!0;break e}o=o.return}if(oe===null)throw Error(w(160));Jh(i,r,a),oe=null,Be=!1,i=a.alternate,i!==null&&(i.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fh(t,e),t=t.sibling}var ht=null;function Fh(e,t){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ue(t,e),He(e),l&4&&(vn(3,e,e.return),Ba(3,e),vn(5,e,e.return));break;case 1:Ue(t,e),He(e),l&512&&(me||n===null||yt(n,n.return)),l&64&&Ct&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var a=ht;if(Ue(t,e),He(e),l&512&&(me||n===null||yt(n,n.return)),l&4){var i=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,a=a.ownerDocument||a;t:switch(l){case"title":i=a.getElementsByTagName("title")[0],(!i||i[Da]||i[Ae]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=a.createElement(l),a.head.insertBefore(i,a.querySelector("head > title"))),_e(i,l,n),i[Ae]=e,Se(i),l=i;break e;case"link":var r=cf("link","href",a).get(l+(n.href||""));if(r){for(var o=0;o<r.length;o++)if(i=r[o],i.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&i.getAttribute("rel")===(n.rel==null?null:n.rel)&&i.getAttribute("title")===(n.title==null?null:n.title)&&i.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){r.splice(o,1);break t}}i=a.createElement(l),_e(i,l,n),a.head.appendChild(i);break;case"meta":if(r=cf("meta","content",a).get(l+(n.content||""))){for(o=0;o<r.length;o++)if(i=r[o],i.getAttribute("content")===(n.content==null?null:""+n.content)&&i.getAttribute("name")===(n.name==null?null:n.name)&&i.getAttribute("property")===(n.property==null?null:n.property)&&i.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&i.getAttribute("charset")===(n.charSet==null?null:n.charSet)){r.splice(o,1);break t}}i=a.createElement(l),_e(i,l,n),a.head.appendChild(i);break;default:throw Error(w(468,l))}i[Ae]=e,Se(i),l=i}e.stateNode=l}else uf(a,e.type,e.stateNode);else e.stateNode=of(a,l,e.memoizedProps);else i!==l?(i===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):i.count--,l===null?uf(a,e.type,e.stateNode):of(a,l,e.memoizedProps)):l===null&&e.stateNode!==null&&uo(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ue(t,e),He(e),l&512&&(me||n===null||yt(n,n.return)),n!==null&&l&4&&uo(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ue(t,e),He(e),l&512&&(me||n===null||yt(n,n.return)),e.flags&32){a=e.stateNode;try{bl(a,"")}catch(x){$(e,e.return,x)}}l&4&&e.stateNode!=null&&(a=e.memoizedProps,uo(e,a,n!==null?n.memoizedProps:a)),l&1024&&(fo=!0);break;case 6:if(Ue(t,e),He(e),l&4){if(e.stateNode===null)throw Error(w(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(x){$(e,e.return,x)}}break;case 3:if(ji=null,a=ht,ht=tr(t.containerInfo),Ue(t,e),ht=a,He(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{jl(t.containerInfo)}catch(x){$(e,e.return,x)}fo&&(fo=!1,Ih(e));break;case 4:l=ht,ht=tr(e.stateNode.containerInfo),Ue(t,e),He(e),ht=l;break;case 12:Ue(t,e),He(e);break;case 31:Ue(t,e),He(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ri(e,l)));break;case 13:Ue(t,e),He(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Tr=Ke()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ri(e,l)));break;case 22:a=e.memoizedState!==null;var c=n!==null&&n.memoizedState!==null,u=Ct,d=me;if(Ct=u||a,me=d||c,Ue(t,e),me=d,Ct=u,He(e),l&8192)e:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||c||Ct||me||Nn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){c=n=t;try{if(i=c.stateNode,a)r=i.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{o=c.stateNode;var h=c.memoizedProps.style,f=h!=null&&h.hasOwnProperty("display")?h.display:null;o.style.display=f==null||typeof f=="boolean"?"":(""+f).trim()}}catch(x){$(c,c.return,x)}}}else if(t.tag===6){if(n===null){c=t;try{c.stateNode.nodeValue=a?"":c.memoizedProps}catch(x){$(c,c.return,x)}}}else if(t.tag===18){if(n===null){c=t;try{var v=c.stateNode;a?tf(v,!0):tf(c.stateNode,!1)}catch(x){$(c,c.return,x)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,ri(e,n))));break;case 19:Ue(t,e),He(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ri(e,l)));break;case 30:break;case 21:break;default:Ue(t,e),He(e)}}function He(e){var t=e.flags;if(t&2){try{for(var n,l=e.return;l!==null;){if(Vh(l)){n=l;break}l=l.return}if(n==null)throw Error(w(160));switch(n.tag){case 27:var a=n.stateNode,i=so(e);Ki(e,i,a);break;case 5:var r=n.stateNode;n.flags&32&&(bl(r,""),n.flags&=-33);var o=so(e);Ki(e,o,r);break;case 3:case 4:var c=n.stateNode.containerInfo,u=so(e);oc(e,u,c);break;default:throw Error(w(161))}}catch(d){$(e,e.return,d)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ih(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Ih(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function At(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zh(e,t.alternate,t),t=t.sibling}function Nn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:vn(4,t,t.return),Nn(t);break;case 1:yt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Gh(t,t.return,n),Nn(t);break;case 27:ha(t.stateNode);case 26:case 5:yt(t,t.return),Nn(t);break;case 22:t.memoizedState===null&&Nn(t);break;case 30:Nn(t);break;default:Nn(t)}e=e.sibling}}function Tt(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,a=e,i=t,r=i.flags;switch(i.tag){case 0:case 11:case 15:Tt(a,i,n),Ba(4,i);break;case 1:if(Tt(a,i,n),l=i,a=l.stateNode,typeof a.componentDidMount=="function")try{a.componentDidMount()}catch(u){$(l,l.return,u)}if(l=i,a=l.updateQueue,a!==null){var o=l.stateNode;try{var c=a.shared.hiddenCallbacks;if(c!==null)for(a.shared.hiddenCallbacks=null,a=0;a<c.length;a++)$d(c[a],o)}catch(u){$(l,l.return,u)}}n&&r&64&&qh(i),ua(i,i.return);break;case 27:Qh(i);case 26:case 5:Tt(a,i,n),n&&l===null&&r&4&&Xh(i),ua(i,i.return);break;case 12:Tt(a,i,n);break;case 31:Tt(a,i,n),n&&r&4&&$h(a,i);break;case 13:Tt(a,i,n),n&&r&4&&Wh(a,i);break;case 22:i.memoizedState===null&&Tt(a,i,n),ua(i,i.return);break;case 30:break;default:Tt(a,i,n)}t=t.sibling}}function vu(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Ua(n))}function pu(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ua(e))}function dt(e,t,n,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ph(e,t,n,l),t=t.sibling}function Ph(e,t,n,l){var a=t.flags;switch(t.tag){case 0:case 11:case 15:dt(e,t,n,l),a&2048&&Ba(9,t);break;case 1:dt(e,t,n,l);break;case 3:dt(e,t,n,l),a&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Ua(e)));break;case 12:if(a&2048){dt(e,t,n,l),e=t.stateNode;try{var i=t.memoizedProps,r=i.id,o=i.onPostCommit;typeof o=="function"&&o(r,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(c){$(t,t.return,c)}}else dt(e,t,n,l);break;case 31:dt(e,t,n,l);break;case 13:dt(e,t,n,l);break;case 23:break;case 22:i=t.stateNode,r=t.alternate,t.memoizedState!==null?i._visibility&2?dt(e,t,n,l):sa(e,t):i._visibility&2?dt(e,t,n,l):(i._visibility|=2,Wn(e,t,n,l,(t.subtreeFlags&10256)!==0||!1)),a&2048&&vu(r,t);break;case 24:dt(e,t,n,l),a&2048&&pu(t.alternate,t);break;default:dt(e,t,n,l)}}function Wn(e,t,n,l,a){for(a=a&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var i=e,r=t,o=n,c=l,u=r.flags;switch(r.tag){case 0:case 11:case 15:Wn(i,r,o,c,a),Ba(8,r);break;case 23:break;case 22:var d=r.stateNode;r.memoizedState!==null?d._visibility&2?Wn(i,r,o,c,a):sa(i,r):(d._visibility|=2,Wn(i,r,o,c,a)),a&&u&2048&&vu(r.alternate,r);break;case 24:Wn(i,r,o,c,a),a&&u&2048&&pu(r.alternate,r);break;default:Wn(i,r,o,c,a)}t=t.sibling}}function sa(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,l=t,a=l.flags;switch(l.tag){case 22:sa(n,l),a&2048&&vu(l.alternate,l);break;case 24:sa(n,l),a&2048&&pu(l.alternate,l);break;default:sa(n,l)}t=t.sibling}}var Pl=8192;function Kn(e,t,n){if(e.subtreeFlags&Pl)for(e=e.child;e!==null;)e0(e,t,n),e=e.sibling}function e0(e,t,n){switch(e.tag){case 26:Kn(e,t,n),e.flags&Pl&&e.memoizedState!==null&&zp(n,ht,e.memoizedState,e.memoizedProps);break;case 5:Kn(e,t,n);break;case 3:case 4:var l=ht;ht=tr(e.stateNode.containerInfo),Kn(e,t,n),ht=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Pl,Pl=16777216,Kn(e,t,n),Pl=l):Kn(e,t,n));break;default:Kn(e,t,n)}}function t0(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Zl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];we=l,l0(l,e)}t0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)n0(e),e=e.sibling}function n0(e){switch(e.tag){case 0:case 11:case 15:Zl(e),e.flags&2048&&vn(9,e,e.return);break;case 3:Zl(e);break;case 12:Zl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Ni(e)):Zl(e);break;default:Zl(e)}}function Ni(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var l=t[n];we=l,l0(l,e)}t0(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:vn(8,t,t.return),Ni(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Ni(t));break;default:Ni(t)}e=e.sibling}}function l0(e,t){for(;we!==null;){var n=we;switch(n.tag){case 0:case 11:case 15:vn(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ua(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,we=l;else e:for(n=e;we!==null;){l=we;var a=l.sibling,i=l.return;if(Kh(l),l===n){we=null;break e}if(a!==null){a.return=i,we=a;break e}we=i}}}var Yv={getCacheForType:function(e){var t=Te(ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return Te(ge).controller.signal}},Lv=typeof WeakMap=="function"?WeakMap:Map,Z=0,P=null,G=null,X=0,J=0,Xe=null,Pt=!1,Dl=!1,yu=!1,qt=0,ue=0,pn=0,Mn=0,bu=0,Ze=0,El=0,fa=null,Ye=null,cc=!1,Tr=0,a0=0,Ji=1/0,$i=null,cn=null,be=0,un=null,zl=null,Ut=0,uc=0,sc=null,i0=null,da=0,fc=null;function We(){return Z&2&&X!==0?X&-X:H.T!==null?wu():md()}function r0(){if(Ze===0)if(!(X&536870912)||V){var e=Ia;Ia<<=1,!(Ia&3932160)&&(Ia=262144),Ze=e}else Ze=536870912;return e=Ie.current,e!==null&&(e.flags|=32),Ze}function Le(e,t,n){(e===P&&(J===2||J===9)||e.cancelPendingCommit!==null)&&(Nl(e,0),en(e,X,Ze,!1)),Ra(e,n),(!(Z&2)||e!==P)&&(e===P&&(!(Z&2)&&(Mn|=n),ue===4&&en(e,X,Ze,!1)),wt(e))}function o0(e,t,n){if(Z&6)throw Error(w(327));var l=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Oa(e,t),a=l?Xv(e,t):ho(e,t,!0),i=l;do{if(a===0){Dl&&!l&&en(e,t,0,!1);break}else{if(n=e.current.alternate,i&&!qv(n)){a=ho(e,t,!1),i=!1;continue}if(a===2){if(i=t,e.errorRecoveryDisabledLanes&i)var r=0;else r=e.pendingLanes&-536870913,r=r!==0?r:r&536870912?536870912:0;if(r!==0){t=r;e:{var o=e;a=fa;var c=o.current.memoizedState.isDehydrated;if(c&&(Nl(o,r).flags|=256),r=ho(o,r,!1),r!==2){if(yu&&!c){o.errorRecoveryDisabledLanes|=i,Mn|=i,a=4;break e}i=Ye,Ye=a,i!==null&&(Ye===null?Ye=i:Ye.push.apply(Ye,i))}a=r}if(i=!1,a!==2)continue}}if(a===1){Nl(e,0),en(e,t,0,!0);break}e:{switch(l=e,i=a,i){case 0:case 1:throw Error(w(345));case 4:if((t&4194048)!==t)break;case 6:en(l,t,Ze,!Pt);break e;case 2:Ye=null;break;case 3:case 5:break;default:throw Error(w(329))}if((t&62914560)===t&&(a=Tr+300-Ke(),10<a)){if(en(l,t,Ze,!Pt),pr(l,0,!0)!==0)break e;Ut=t,l.timeoutHandle=j0(Gs.bind(null,l,n,Ye,$i,cc,t,Ze,Mn,El,Pt,i,"Throttled",-0,0),a);break e}Gs(l,n,Ye,$i,cc,t,Ze,Mn,El,Pt,i,null,-0,0)}}break}while(1);wt(e)}function Gs(e,t,n,l,a,i,r,o,c,u,d,h,f,v){if(e.timeoutHandle=-1,h=t.subtreeFlags,h&8192||(h&16785408)===16785408){h={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ot},e0(t,i,h);var x=(i&62914560)===i?Tr-Ke():(i&4194048)===i?a0-Ke():0;if(x=Np(h,x),x!==null){Ut=i,e.cancelPendingCommit=x(Vs.bind(null,e,t,i,n,l,a,r,o,c,d,h,null,f,v)),en(e,i,r,!u);return}}Vs(e,t,i,n,l,a,r,o,c)}function qv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var a=n[l],i=a.getSnapshot;a=a.value;try{if(!Fe(i(),a))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function en(e,t,n,l){t&=~bu,t&=~Mn,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var a=t;0<a;){var i=31-$e(a),r=1<<i;l[i]=-1,a&=~r}n!==0&&fd(e,n,t)}function _r(){return Z&6?!0:(Ya(0,!1),!1)}function xu(){if(G!==null){if(J===0)var e=G.return;else e=G,Rt=Gn=null,iu(e),ml=null,xa=0,e=G;for(;e!==null;)Lh(e.alternate,e),e=e.return;G=null}}function Nl(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,op(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ut=0,xu(),P=e,G=n=Dt(e.current,null),X=t,J=0,Xe=null,Pt=!1,Dl=Oa(e,t),yu=!1,El=Ze=bu=Mn=pn=ue=0,Ye=fa=null,cc=!1,t&8&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var a=31-$e(l),i=1<<a;t|=e[a],l&=~i}return qt=t,wr(),n}function c0(e,t){Y=null,H.H=Sa,t===Rl||t===Er?(t=xs(),J=3):t===Ic?(t=xs(),J=4):J=t===mu?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Xe=t,G===null&&(ue=1,Qi(e,it(t,e.current)))}function u0(){var e=Ie.current;return e===null?!0:(X&4194048)===X?ot===null:(X&62914560)===X||X&536870912?e===ot:!1}function s0(){var e=H.H;return H.H=Sa,e===null?Sa:e}function f0(){var e=H.A;return H.A=Yv,e}function Wi(){ue=4,Pt||(X&4194048)!==X&&Ie.current!==null||(Dl=!0),!(pn&134217727)&&!(Mn&134217727)||P===null||en(P,X,Ze,!1)}function ho(e,t,n){var l=Z;Z|=2;var a=s0(),i=f0();(P!==e||X!==t)&&($i=null,Nl(e,t)),t=!1;var r=ue;e:do try{if(J!==0&&G!==null){var o=G,c=Xe;switch(J){case 8:xu(),r=6;break e;case 3:case 2:case 9:case 6:Ie.current===null&&(t=!0);var u=J;if(J=0,Xe=null,ul(e,o,c,u),n&&Dl){r=0;break e}break;default:u=J,J=0,Xe=null,ul(e,o,c,u)}}Gv(),r=ue;break}catch(d){c0(e,d)}while(1);return t&&e.shellSuspendCounter++,Rt=Gn=null,Z=l,H.H=a,H.A=i,G===null&&(P=null,X=0,wr()),r}function Gv(){for(;G!==null;)d0(G)}function Xv(e,t){var n=Z;Z|=2;var l=s0(),a=f0();P!==e||X!==t?($i=null,Ji=Ke()+500,Nl(e,t)):Dl=Oa(e,t);e:do try{if(J!==0&&G!==null){t=G;var i=Xe;t:switch(J){case 1:J=0,Xe=null,ul(e,t,i,1);break;case 2:case 9:if(bs(i)){J=0,Xe=null,Xs(t);break}t=function(){J!==2&&J!==9||P!==e||(J=7),wt(e)},i.then(t,t);break e;case 3:J=7;break e;case 4:J=5;break e;case 7:bs(i)?(J=0,Xe=null,Xs(t)):(J=0,Xe=null,ul(e,t,i,7));break;case 5:var r=null;switch(G.tag){case 26:r=G.memoizedState;case 5:case 27:var o=G;if(r?O0(r):o.stateNode.complete){J=0,Xe=null;var c=o.sibling;if(c!==null)G=c;else{var u=o.return;u!==null?(G=u,Cr(u)):G=null}break t}}J=0,Xe=null,ul(e,t,i,5);break;case 6:J=0,Xe=null,ul(e,t,i,6);break;case 8:xu(),ue=6;break e;default:throw Error(w(462))}}Vv();break}catch(d){c0(e,d)}while(1);return Rt=Gn=null,H.H=l,H.A=a,Z=n,G!==null?0:(P=null,X=0,wr(),ue)}function Vv(){for(;G!==null&&!hg();)d0(G)}function d0(e){var t=Yh(e.alternate,e,qt);e.memoizedProps=e.pendingProps,t===null?Cr(e):G=t}function Xs(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Us(n,t,t.pendingProps,t.type,void 0,X);break;case 11:t=Us(n,t,t.pendingProps,t.type.render,t.ref,X);break;case 5:iu(t);default:Lh(n,t),t=G=Ld(t,qt),t=Yh(n,t,qt)}e.memoizedProps=e.pendingProps,t===null?Cr(e):G=t}function ul(e,t,n,l){Rt=Gn=null,iu(t),ml=null,xa=0;var a=t.return;try{if(Ov(e,a,t,n,X)){ue=1,Qi(e,it(n,e.current)),G=null;return}}catch(i){if(a!==null)throw G=a,i;ue=1,Qi(e,it(n,e.current)),G=null;return}t.flags&32768?(V||l===1?e=!0:Dl||X&536870912?e=!1:(Pt=e=!0,(l===2||l===9||l===3||l===6)&&(l=Ie.current,l!==null&&l.tag===13&&(l.flags|=16384))),h0(t,e)):Cr(t)}function Cr(e){var t=e;do{if(t.flags&32768){h0(t,Pt);return}e=t.return;var n=kv(t.alternate,t,qt);if(n!==null){G=n;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);ue===0&&(ue=5)}function h0(e,t){do{var n=Uv(e.alternate,e);if(n!==null){n.flags&=32767,G=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=n}while(e!==null);ue=6,G=null}function Vs(e,t,n,l,a,i,r,o,c){e.cancelPendingCommit=null;do Mr();while(be!==0);if(Z&6)throw Error(w(327));if(t!==null){if(t===e.current)throw Error(w(177));if(i=t.lanes|t.childLanes,i|=Qc,Eg(e,n,i,r,o,c),e===P&&(G=P=null,X=0),zl=t,un=e,Ut=n,uc=i,sc=a,i0=l,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Jv(Di,function(){return y0(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,t.subtreeFlags&13878||l){l=H.T,H.T=null,a=K.p,K.p=2,r=Z,Z|=4;try{Hv(e,t,n)}finally{Z=r,K.p=a,H.T=l}}be=1,m0(),g0(),v0()}}function m0(){if(be===1){be=0;var e=un,t=zl,n=(t.flags&13878)!==0;if(t.subtreeFlags&13878||n){n=H.T,H.T=null;var l=K.p;K.p=2;var a=Z;Z|=4;try{Fh(t,e);var i=gc,r=Od(e.containerInfo),o=i.focusedElem,c=i.selectionRange;if(r!==o&&o&&o.ownerDocument&&Md(o.ownerDocument.documentElement,o)){if(c!==null&&Vc(o)){var u=c.start,d=c.end;if(d===void 0&&(d=u),"selectionStart"in o)o.selectionStart=u,o.selectionEnd=Math.min(d,o.value.length);else{var h=o.ownerDocument||document,f=h&&h.defaultView||window;if(f.getSelection){var v=f.getSelection(),x=o.textContent.length,S=Math.min(c.start,x),E=c.end===void 0?S:Math.min(c.end,x);!v.extend&&S>E&&(r=E,E=S,S=r);var g=ds(o,S),m=ds(o,E);if(g&&m&&(v.rangeCount!==1||v.anchorNode!==g.node||v.anchorOffset!==g.offset||v.focusNode!==m.node||v.focusOffset!==m.offset)){var p=h.createRange();p.setStart(g.node,g.offset),v.removeAllRanges(),S>E?(v.addRange(p),v.extend(m.node,m.offset)):(p.setEnd(m.node,m.offset),v.addRange(p))}}}}for(h=[],v=o;v=v.parentNode;)v.nodeType===1&&h.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<h.length;o++){var b=h[o];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}ar=!!mc,gc=mc=null}finally{Z=a,K.p=l,H.T=n}}e.current=t,be=2}}function g0(){if(be===2){be=0;var e=un,t=zl,n=(t.flags&8772)!==0;if(t.subtreeFlags&8772||n){n=H.T,H.T=null;var l=K.p;K.p=2;var a=Z;Z|=4;try{Zh(e,t.alternate,t)}finally{Z=a,K.p=l,H.T=n}}be=3}}function v0(){if(be===4||be===3){be=0,mg();var e=un,t=zl,n=Ut,l=i0;t.subtreeFlags&10256||t.flags&10256?be=5:(be=0,zl=un=null,p0(e,e.pendingLanes));var a=e.pendingLanes;if(a===0&&(cn=null),Hc(n),t=t.stateNode,Je&&typeof Je.onCommitFiberRoot=="function")try{Je.onCommitFiberRoot(Ma,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=H.T,a=K.p,K.p=2,H.T=null;try{for(var i=e.onRecoverableError,r=0;r<l.length;r++){var o=l[r];i(o.value,{componentStack:o.stack})}}finally{H.T=t,K.p=a}}Ut&3&&Mr(),wt(e),a=e.pendingLanes,n&261930&&a&42?e===fc?da++:(da=0,fc=e):da=0,Ya(0,!1)}}function p0(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Ua(t)))}function Mr(){return m0(),g0(),v0(),y0()}function y0(){if(be!==5)return!1;var e=un,t=uc;uc=0;var n=Hc(Ut),l=H.T,a=K.p;try{K.p=32>n?32:n,H.T=null,n=sc,sc=null;var i=un,r=Ut;if(be=0,zl=un=null,Ut=0,Z&6)throw Error(w(331));var o=Z;if(Z|=4,n0(i.current),Ph(i,i.current,r,n),Z=o,Ya(0,!1),Je&&typeof Je.onPostCommitFiberRoot=="function")try{Je.onPostCommitFiberRoot(Ma,i)}catch{}return!0}finally{K.p=a,H.T=l,p0(e,t)}}function Qs(e,t,n){t=it(n,t),t=ac(e.stateNode,t,2),e=on(e,t,2),e!==null&&(Ra(e,2),wt(e))}function $(e,t,n){if(e.tag===3)Qs(e,e,n);else for(;t!==null;){if(t.tag===3){Qs(t,e,n);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(cn===null||!cn.has(l))){e=it(n,e),n=Rh(2),l=on(t,n,2),l!==null&&(Dh(n,l,t,e),Ra(l,2),wt(l));break}}t=t.return}}function mo(e,t,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Lv;var a=new Set;l.set(t,a)}else a=l.get(t),a===void 0&&(a=new Set,l.set(t,a));a.has(n)||(yu=!0,a.add(n),e=Qv.bind(null,e,t,n),t.then(e,e))}function Qv(e,t,n){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,P===e&&(X&n)===n&&(ue===4||ue===3&&(X&62914560)===X&&300>Ke()-Tr?!(Z&2)&&Nl(e,0):bu|=n,El===X&&(El=0)),wt(e)}function b0(e,t){t===0&&(t=sd()),e=qn(e,t),e!==null&&(Ra(e,t),wt(e))}function Zv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),b0(e,n)}function Kv(e,t){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(w(314))}l!==null&&l.delete(t),b0(e,n)}function Jv(e,t){return kc(e,t)}var Fi=null,Fn=null,dc=!1,Ii=!1,go=!1,tn=0;function wt(e){e!==Fn&&e.next===null&&(Fn===null?Fi=Fn=e:Fn=Fn.next=e),Ii=!0,dc||(dc=!0,Wv())}function Ya(e,t){if(!go&&Ii){go=!0;do for(var n=!1,l=Fi;l!==null;){if(!t)if(e!==0){var a=l.pendingLanes;if(a===0)var i=0;else{var r=l.suspendedLanes,o=l.pingedLanes;i=(1<<31-$e(42|e)+1)-1,i&=a&~(r&~o),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(n=!0,Zs(l,i))}else i=X,i=pr(l,l===P?i:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),!(i&3)||Oa(l,i)||(n=!0,Zs(l,i));l=l.next}while(n);go=!1}}function $v(){x0()}function x0(){Ii=dc=!1;var e=0;tn!==0&&rp()&&(e=tn);for(var t=Ke(),n=null,l=Fi;l!==null;){var a=l.next,i=w0(l,t);i===0?(l.next=null,n===null?Fi=a:n.next=a,a===null&&(Fn=n)):(n=l,(e!==0||i&3)&&(Ii=!0)),l=a}be!==0&&be!==5||Ya(e,!1),tn!==0&&(tn=0)}function w0(e,t){for(var n=e.suspendedLanes,l=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes&-62914561;0<i;){var r=31-$e(i),o=1<<r,c=a[r];c===-1?(!(o&n)||o&l)&&(a[r]=Sg(o,t)):c<=t&&(e.expiredLanes|=o),i&=~o}if(t=P,n=X,n=pr(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===t&&(J===2||J===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Gr(l),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||Oa(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(l!==null&&Gr(l),Hc(n)){case 2:case 8:n=cd;break;case 32:n=Di;break;case 268435456:n=ud;break;default:n=Di}return l=S0.bind(null,e),n=kc(n,l),e.callbackPriority=t,e.callbackNode=n,t}return l!==null&&l!==null&&Gr(l),e.callbackPriority=2,e.callbackNode=null,2}function S0(e,t){if(be!==0&&be!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Mr()&&e.callbackNode!==n)return null;var l=X;return l=pr(e,e===P?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(o0(e,l,t),w0(e,Ke()),e.callbackNode!=null&&e.callbackNode===n?S0.bind(null,e):null)}function Zs(e,t){if(Mr())return null;o0(e,t,!0)}function Wv(){cp(function(){Z&6?kc(od,$v):x0()})}function wu(){if(tn===0){var e=xl;e===0&&(e=Fa,Fa<<=1,!(Fa&261888)&&(Fa=256)),tn=e}return tn}function Ks(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:vi(""+e)}function Js(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Fv(e,t,n,l,a){if(t==="submit"&&n&&n.stateNode===a){var i=Ks((a[qe]||null).action),r=l.submitter;r&&(t=(t=r[qe]||null)?Ks(t.formAction):r.getAttribute("formAction"),t!==null&&(i=t,r=null));var o=new yr("action","action",null,l,a);e.push({event:o,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(tn!==0){var c=r?Js(a,r):new FormData(a);nc(n,{pending:!0,data:c,method:a.method,action:i},null,c)}}else typeof i=="function"&&(o.preventDefault(),c=r?Js(a,r):new FormData(a),nc(n,{pending:!0,data:c,method:a.method,action:i},i,c))},currentTarget:a}]})}}for(var vo=0;vo<Vo.length;vo++){var po=Vo[vo],Iv=po.toLowerCase(),Pv=po[0].toUpperCase()+po.slice(1);mt(Iv,"on"+Pv)}mt(Dd,"onAnimationEnd");mt(kd,"onAnimationIteration");mt(Ud,"onAnimationStart");mt("dblclick","onDoubleClick");mt("focusin","onFocus");mt("focusout","onBlur");mt(gv,"onTransitionRun");mt(vv,"onTransitionStart");mt(pv,"onTransitionCancel");mt(Hd,"onTransitionEnd");yl("onMouseEnter",["mouseout","mouseover"]);yl("onMouseLeave",["mouseout","mouseover"]);yl("onPointerEnter",["pointerout","pointerover"]);yl("onPointerLeave",["pointerout","pointerover"]);Bn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ea="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ep=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ea));function E0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],a=l.event;l=l.listeners;e:{var i=void 0;if(t)for(var r=l.length-1;0<=r;r--){var o=l[r],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==i&&a.isPropagationStopped())break e;i=o,a.currentTarget=u;try{i(a)}catch(d){Ui(d)}a.currentTarget=null,i=c}else for(r=0;r<l.length;r++){if(o=l[r],c=o.instance,u=o.currentTarget,o=o.listener,c!==i&&a.isPropagationStopped())break e;i=o,a.currentTarget=u;try{i(a)}catch(d){Ui(d)}a.currentTarget=null,i=c}}}}function q(e,t){var n=t[Uo];n===void 0&&(n=t[Uo]=new Set);var l=e+"__bubble";n.has(l)||(z0(t,e,2,!1),n.add(l))}function yo(e,t,n){var l=0;t&&(l|=4),z0(n,e,l,t)}var oi="_reactListening"+Math.random().toString(36).slice(2);function Su(e){if(!e[oi]){e[oi]=!0,gd.forEach(function(n){n!=="selectionchange"&&(ep.has(n)||yo(n,!1,e),yo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[oi]||(t[oi]=!0,yo("selectionchange",!1,t))}}function z0(e,t,n,l){switch(H0(t)){case 2:var a=Tp;break;case 8:a=_p;break;default:a=Au}n=a.bind(null,t,n,e),a=void 0,!qo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),l?a!==void 0?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):a!==void 0?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function bo(e,t,n,l,a){var i=l;if(!(t&1)&&!(t&2)&&l!==null)e:for(;;){if(l===null)return;var r=l.tag;if(r===3||r===4){var o=l.stateNode.containerInfo;if(o===a)break;if(r===4)for(r=l.return;r!==null;){var c=r.tag;if((c===3||c===4)&&r.stateNode.containerInfo===a)return;r=r.return}for(;o!==null;){if(r=el(o),r===null)return;if(c=r.tag,c===5||c===6||c===26||c===27){l=i=r;continue e}o=o.parentNode}}l=l.return}Ed(function(){var u=i,d=Lc(n),h=[];e:{var f=Bd.get(e);if(f!==void 0){var v=yr,x=e;switch(e){case"keypress":if(yi(n)===0)break e;case"keydown":case"keyup":v=Kg;break;case"focusin":x="focus",v=Kr;break;case"focusout":x="blur",v=Kr;break;case"beforeblur":case"afterblur":v=Kr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=ns;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=kg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Wg;break;case Dd:case kd:case Ud:v=Bg;break;case Hd:v=Ig;break;case"scroll":case"scrollend":v=Rg;break;case"wheel":v=ev;break;case"copy":case"cut":case"paste":v=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=as;break;case"toggle":case"beforetoggle":v=nv}var S=(t&4)!==0,E=!S&&(e==="scroll"||e==="scrollend"),g=S?f!==null?f+"Capture":null:f;S=[];for(var m=u,p;m!==null;){var b=m;if(p=b.stateNode,b=b.tag,b!==5&&b!==26&&b!==27||p===null||g===null||(b=ga(m,g),b!=null&&S.push(za(m,b,p))),E)break;m=m.return}0<S.length&&(f=new v(f,x,null,n,d),h.push({event:f,listeners:S}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",f&&n!==Lo&&(x=n.relatedTarget||n.fromElement)&&(el(x)||x[Cl]))break e;if((v||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,v?(x=n.relatedTarget||n.toElement,v=u,x=x?el(x):null,x!==null&&(E=Ca(x),S=x.tag,x!==E||S!==5&&S!==27&&S!==6)&&(x=null)):(v=null,x=u),v!==x)){if(S=ns,b="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(S=as,b="onPointerLeave",g="onPointerEnter",m="pointer"),E=v==null?f:Fl(v),p=x==null?f:Fl(x),f=new S(b,m+"leave",v,n,d),f.target=E,f.relatedTarget=p,b=null,el(d)===u&&(S=new S(g,m+"enter",x,n,d),S.target=p,S.relatedTarget=E,b=S),E=b,v&&x)t:{for(S=tp,g=v,m=x,p=0,b=g;b;b=S(b))p++;b=0;for(var A=m;A;A=S(A))b++;for(;0<p-b;)g=S(g),p--;for(;0<b-p;)m=S(m),b--;for(;p--;){if(g===m||m!==null&&g===m.alternate){S=g;break t}g=S(g),m=S(m)}S=null}else S=null;v!==null&&$s(h,f,v,S,!1),x!==null&&E!==null&&$s(h,E,x,S,!0)}}e:{if(f=u?Fl(u):window,v=f.nodeName&&f.nodeName.toLowerCase(),v==="select"||v==="input"&&f.type==="file")var R=cs;else if(os(f))if(_d)R=dv;else{R=sv;var j=uv}else v=f.nodeName,!v||v.toLowerCase()!=="input"||f.type!=="checkbox"&&f.type!=="radio"?u&&Yc(u.elementType)&&(R=cs):R=fv;if(R&&(R=R(e,u))){Td(h,R,n,d);break e}j&&j(e,f,u),e==="focusout"&&u&&f.type==="number"&&u.memoizedProps.value!=null&&Yo(f,"number",f.value)}switch(j=u?Fl(u):window,e){case"focusin":(os(j)||j.contentEditable==="true")&&(ll=j,Go=u,la=null);break;case"focusout":la=Go=ll=null;break;case"mousedown":Xo=!0;break;case"contextmenu":case"mouseup":case"dragend":Xo=!1,hs(h,n,d);break;case"selectionchange":if(mv)break;case"keydown":case"keyup":hs(h,n,d)}var z;if(Xc)e:{switch(e){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else nl?Ad(e,n)&&(C="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(C="onCompositionStart");C&&(Nd&&n.locale!=="ko"&&(nl||C!=="onCompositionStart"?C==="onCompositionEnd"&&nl&&(z=zd()):(It=d,qc="value"in It?It.value:It.textContent,nl=!0)),j=Pi(u,C),0<j.length&&(C=new ls(C,e,null,n,d),h.push({event:C,listeners:j}),z?C.data=z:(z=jd(n),z!==null&&(C.data=z)))),(z=av?iv(e,n):rv(e,n))&&(C=Pi(u,"onBeforeInput"),0<C.length&&(j=new ls("onBeforeInput","beforeinput",null,n,d),h.push({event:j,listeners:C}),j.data=z)),Fv(h,e,u,n,d)}E0(h,t)})}function za(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Pi(e,t){for(var n=t+"Capture",l=[];e!==null;){var a=e,i=a.stateNode;if(a=a.tag,a!==5&&a!==26&&a!==27||i===null||(a=ga(e,n),a!=null&&l.unshift(za(e,a,i)),a=ga(e,t),a!=null&&l.push(za(e,a,i))),e.tag===3)return l;e=e.return}return[]}function tp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function $s(e,t,n,l,a){for(var i=t._reactName,r=[];n!==null&&n!==l;){var o=n,c=o.alternate,u=o.stateNode;if(o=o.tag,c!==null&&c===l)break;o!==5&&o!==26&&o!==27||u===null||(c=u,a?(u=ga(n,i),u!=null&&r.unshift(za(n,u,c))):a||(u=ga(n,i),u!=null&&r.push(za(n,u,c)))),n=n.return}r.length!==0&&e.push({event:t,listeners:r})}var np=/\r\n?/g,lp=/\u0000|\uFFFD/g;function Ws(e){return(typeof e=="string"?e:""+e).replace(np,`
`).replace(lp,"")}function N0(e,t){return t=Ws(t),Ws(e)===t}function W(e,t,n,l,a,i){switch(n){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||bl(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&bl(e,""+l);break;case"className":ei(e,"class",l);break;case"tabIndex":ei(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ei(e,n,l);break;case"style":Sd(e,l,i);break;case"data":if(t!=="object"){ei(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=vi(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(n==="formAction"?(t!=="input"&&W(e,t,"name",a.name,a,null),W(e,t,"formEncType",a.formEncType,a,null),W(e,t,"formMethod",a.formMethod,a,null),W(e,t,"formTarget",a.formTarget,a,null)):(W(e,t,"encType",a.encType,a,null),W(e,t,"method",a.method,a,null),W(e,t,"target",a.target,a,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=vi(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Ot);break;case"onScroll":l!=null&&q("scroll",e);break;case"onScrollEnd":l!=null&&q("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(w(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(w(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=vi(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":q("beforetoggle",e),q("toggle",e),gi(e,"popover",l);break;case"xlinkActuate":Et(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Et(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Et(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Et(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Et(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Et(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Et(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Et(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Et(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":gi(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Mg.get(n)||n,gi(e,n,l))}}function hc(e,t,n,l,a,i){switch(n){case"style":Sd(e,l,i);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(w(61));if(n=l.__html,n!=null){if(a.children!=null)throw Error(w(60));e.innerHTML=n}}break;case"children":typeof l=="string"?bl(e,l):(typeof l=="number"||typeof l=="bigint")&&bl(e,""+l);break;case"onScroll":l!=null&&q("scroll",e);break;case"onScrollEnd":l!=null&&q("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Ot);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!vd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(a=n.endsWith("Capture"),t=n.slice(2,a?n.length-7:void 0),i=e[qe]||null,i=i!=null?i[n]:null,typeof i=="function"&&e.removeEventListener(t,i,a),typeof l=="function")){typeof i!="function"&&i!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,l,a);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):gi(e,n,l)}}}function _e(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":q("error",e),q("load",e);var l=!1,a=!1,i;for(i in n)if(n.hasOwnProperty(i)){var r=n[i];if(r!=null)switch(i){case"src":l=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(w(137,t));default:W(e,t,i,r,n,null)}}a&&W(e,t,"srcSet",n.srcSet,n,null),l&&W(e,t,"src",n.src,n,null);return;case"input":q("invalid",e);var o=i=r=a=null,c=null,u=null;for(l in n)if(n.hasOwnProperty(l)){var d=n[l];if(d!=null)switch(l){case"name":a=d;break;case"type":r=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":i=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(w(137,t));break;default:W(e,t,l,d,n,null)}}bd(e,i,o,c,u,r,a,!1);return;case"select":q("invalid",e),l=r=i=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":r=o;break;case"multiple":l=o;default:W(e,t,a,o,n,null)}t=i,n=r,e.multiple=!!l,t!=null?fl(e,!!l,t,!1):n!=null&&fl(e,!!l,n,!0);return;case"textarea":q("invalid",e),i=a=l=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":l=o;break;case"defaultValue":a=o;break;case"children":i=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(w(91));break;default:W(e,t,r,o,n,null)}wd(e,l,a,i);return;case"option":for(c in n)if(n.hasOwnProperty(c)&&(l=n[c],l!=null))switch(c){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:W(e,t,c,l,n,null)}return;case"dialog":q("beforetoggle",e),q("toggle",e),q("cancel",e),q("close",e);break;case"iframe":case"object":q("load",e);break;case"video":case"audio":for(l=0;l<Ea.length;l++)q(Ea[l],e);break;case"image":q("error",e),q("load",e);break;case"details":q("toggle",e);break;case"embed":case"source":case"link":q("error",e),q("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&(l=n[u],l!=null))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(w(137,t));default:W(e,t,u,l,n,null)}return;default:if(Yc(t)){for(d in n)n.hasOwnProperty(d)&&(l=n[d],l!==void 0&&hc(e,t,d,l,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(l=n[o],l!=null&&W(e,t,o,l,n,null))}function ap(e,t,n,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var a=null,i=null,r=null,o=null,c=null,u=null,d=null;for(v in n){var h=n[v];if(n.hasOwnProperty(v)&&h!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":c=h;default:l.hasOwnProperty(v)||W(e,t,v,null,l,h)}}for(var f in l){var v=l[f];if(h=n[f],l.hasOwnProperty(f)&&(v!=null||h!=null))switch(f){case"type":i=v;break;case"name":a=v;break;case"checked":u=v;break;case"defaultChecked":d=v;break;case"value":r=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(w(137,t));break;default:v!==h&&W(e,t,f,v,l,h)}}Bo(e,r,o,c,u,d,i,a);return;case"select":v=r=o=f=null;for(i in n)if(c=n[i],n.hasOwnProperty(i)&&c!=null)switch(i){case"value":break;case"multiple":v=c;default:l.hasOwnProperty(i)||W(e,t,i,null,l,c)}for(a in l)if(i=l[a],c=n[a],l.hasOwnProperty(a)&&(i!=null||c!=null))switch(a){case"value":f=i;break;case"defaultValue":o=i;break;case"multiple":r=i;default:i!==c&&W(e,t,a,i,l,c)}t=o,n=r,l=v,f!=null?fl(e,!!n,f,!1):!!l!=!!n&&(t!=null?fl(e,!!n,t,!0):fl(e,!!n,n?[]:"",!1));return;case"textarea":v=f=null;for(o in n)if(a=n[o],n.hasOwnProperty(o)&&a!=null&&!l.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:W(e,t,o,null,l,a)}for(r in l)if(a=l[r],i=n[r],l.hasOwnProperty(r)&&(a!=null||i!=null))switch(r){case"value":f=a;break;case"defaultValue":v=a;break;case"children":break;case"dangerouslySetInnerHTML":if(a!=null)throw Error(w(91));break;default:a!==i&&W(e,t,r,a,l,i)}xd(e,f,v);return;case"option":for(var x in n)if(f=n[x],n.hasOwnProperty(x)&&f!=null&&!l.hasOwnProperty(x))switch(x){case"selected":e.selected=!1;break;default:W(e,t,x,null,l,f)}for(c in l)if(f=l[c],v=n[c],l.hasOwnProperty(c)&&f!==v&&(f!=null||v!=null))switch(c){case"selected":e.selected=f&&typeof f!="function"&&typeof f!="symbol";break;default:W(e,t,c,f,l,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var S in n)f=n[S],n.hasOwnProperty(S)&&f!=null&&!l.hasOwnProperty(S)&&W(e,t,S,null,l,f);for(u in l)if(f=l[u],v=n[u],l.hasOwnProperty(u)&&f!==v&&(f!=null||v!=null))switch(u){case"children":case"dangerouslySetInnerHTML":if(f!=null)throw Error(w(137,t));break;default:W(e,t,u,f,l,v)}return;default:if(Yc(t)){for(var E in n)f=n[E],n.hasOwnProperty(E)&&f!==void 0&&!l.hasOwnProperty(E)&&hc(e,t,E,void 0,l,f);for(d in l)f=l[d],v=n[d],!l.hasOwnProperty(d)||f===v||f===void 0&&v===void 0||hc(e,t,d,f,l,v);return}}for(var g in n)f=n[g],n.hasOwnProperty(g)&&f!=null&&!l.hasOwnProperty(g)&&W(e,t,g,null,l,f);for(h in l)f=l[h],v=n[h],!l.hasOwnProperty(h)||f===v||f==null&&v==null||W(e,t,h,f,l,v)}function Fs(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function ip(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var a=n[l],i=a.transferSize,r=a.initiatorType,o=a.duration;if(i&&o&&Fs(r)){for(r=0,o=a.responseEnd,l+=1;l<n.length;l++){var c=n[l],u=c.startTime;if(u>o)break;var d=c.transferSize,h=c.initiatorType;d&&Fs(h)&&(c=c.responseEnd,r+=d*(c<o?1:(o-u)/(c-u)))}if(--l,t+=8*(i+r)/(a.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var mc=null,gc=null;function er(e){return e.nodeType===9?e:e.ownerDocument}function Is(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function A0(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function vc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var xo=null;function rp(){var e=window.event;return e&&e.type==="popstate"?e===xo?!1:(xo=e,!0):(xo=null,!1)}var j0=typeof setTimeout=="function"?setTimeout:void 0,op=typeof clearTimeout=="function"?clearTimeout:void 0,Ps=typeof Promise=="function"?Promise:void 0,cp=typeof queueMicrotask=="function"?queueMicrotask:typeof Ps<"u"?function(e){return Ps.resolve(null).then(e).catch(up)}:j0;function up(e){setTimeout(function(){throw e})}function bn(e){return e==="head"}function ef(e,t){var n=t,l=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&a.nodeType===8)if(n=a.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(a),jl(t);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")ha(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,ha(n);for(var i=n.firstChild;i;){var r=i.nextSibling,o=i.nodeName;i[Da]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&i.rel.toLowerCase()==="stylesheet"||n.removeChild(i),i=r}}else n==="body"&&ha(e.ownerDocument.body);n=a}while(n);jl(t)}function tf(e,t){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function pc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":pc(n),Bc(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function sp(e,t,n,l){for(;e.nodeType===1;){var a=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Da])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(i=e.getAttribute("rel"),i==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(i!==a.rel||e.getAttribute("href")!==(a.href==null||a.href===""?null:a.href)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin)||e.getAttribute("title")!==(a.title==null?null:a.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(i=e.getAttribute("src"),(i!==(a.src==null?null:a.src)||e.getAttribute("type")!==(a.type==null?null:a.type)||e.getAttribute("crossorigin")!==(a.crossOrigin==null?null:a.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var i=a.name==null?null:""+a.name;if(a.type==="hidden"&&e.getAttribute("name")===i)return e}else return e;if(e=ct(e.nextSibling),e===null)break}return null}function fp(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=ct(e.nextSibling),e===null))return null;return e}function T0(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ct(e.nextSibling),e===null))return null;return e}function yc(e){return e.data==="$?"||e.data==="$~"}function bc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function dp(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var l=function(){t(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function ct(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var xc=null;function nf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return ct(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function lf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function _0(e,t,n){switch(t=er(n),e){case"html":if(e=t.documentElement,!e)throw Error(w(452));return e;case"head":if(e=t.head,!e)throw Error(w(453));return e;case"body":if(e=t.body,!e)throw Error(w(454));return e;default:throw Error(w(451))}}function ha(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Bc(e)}var ut=new Map,af=new Set;function tr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gt=K.d;K.d={f:hp,r:mp,D:gp,C:vp,L:pp,m:yp,X:xp,S:bp,M:wp};function hp(){var e=Gt.f(),t=_r();return e||t}function mp(e){var t=Ml(e);t!==null&&t.tag===5&&t.type==="form"?Sh(t):Gt.r(e)}var kl=typeof document>"u"?null:document;function C0(e,t,n){var l=kl;if(l&&typeof t=="string"&&t){var a=at(t);a='link[rel="'+e+'"][href="'+a+'"]',typeof n=="string"&&(a+='[crossorigin="'+n+'"]'),af.has(a)||(af.add(a),e={rel:e,crossOrigin:n,href:t},l.querySelector(a)===null&&(t=l.createElement("link"),_e(t,"link",e),Se(t),l.head.appendChild(t)))}}function gp(e){Gt.D(e),C0("dns-prefetch",e,null)}function vp(e,t){Gt.C(e,t),C0("preconnect",e,t)}function pp(e,t,n){Gt.L(e,t,n);var l=kl;if(l&&e&&t){var a='link[rel="preload"][as="'+at(t)+'"]';t==="image"&&n&&n.imageSrcSet?(a+='[imagesrcset="'+at(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(a+='[imagesizes="'+at(n.imageSizes)+'"]')):a+='[href="'+at(e)+'"]';var i=a;switch(t){case"style":i=Al(e);break;case"script":i=Ul(e)}ut.has(i)||(e=ie({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),ut.set(i,e),l.querySelector(a)!==null||t==="style"&&l.querySelector(La(i))||t==="script"&&l.querySelector(qa(i))||(t=l.createElement("link"),_e(t,"link",e),Se(t),l.head.appendChild(t)))}}function yp(e,t){Gt.m(e,t);var n=kl;if(n&&e){var l=t&&typeof t.as=="string"?t.as:"script",a='link[rel="modulepreload"][as="'+at(l)+'"][href="'+at(e)+'"]',i=a;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Ul(e)}if(!ut.has(i)&&(e=ie({rel:"modulepreload",href:e},t),ut.set(i,e),n.querySelector(a)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(qa(i)))return}l=n.createElement("link"),_e(l,"link",e),Se(l),n.head.appendChild(l)}}}function bp(e,t,n){Gt.S(e,t,n);var l=kl;if(l&&e){var a=sl(l).hoistableStyles,i=Al(e);t=t||"default";var r=a.get(i);if(!r){var o={loading:0,preload:null};if(r=l.querySelector(La(i)))o.loading=5;else{e=ie({rel:"stylesheet",href:e,"data-precedence":t},n),(n=ut.get(i))&&Eu(e,n);var c=r=l.createElement("link");Se(c),_e(c,"link",e),c._p=new Promise(function(u,d){c.onload=u,c.onerror=d}),c.addEventListener("load",function(){o.loading|=1}),c.addEventListener("error",function(){o.loading|=2}),o.loading|=4,Ai(r,t,l)}r={type:"stylesheet",instance:r,count:1,state:o},a.set(i,r)}}}function xp(e,t){Gt.X(e,t);var n=kl;if(n&&e){var l=sl(n).hoistableScripts,a=Ul(e),i=l.get(a);i||(i=n.querySelector(qa(a)),i||(e=ie({src:e,async:!0},t),(t=ut.get(a))&&zu(e,t),i=n.createElement("script"),Se(i),_e(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function wp(e,t){Gt.M(e,t);var n=kl;if(n&&e){var l=sl(n).hoistableScripts,a=Ul(e),i=l.get(a);i||(i=n.querySelector(qa(a)),i||(e=ie({src:e,async:!0,type:"module"},t),(t=ut.get(a))&&zu(e,t),i=n.createElement("script"),Se(i),_e(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},l.set(a,i))}}function rf(e,t,n,l){var a=(a=ln.current)?tr(a):null;if(!a)throw Error(w(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Al(n.href),n=sl(a).hoistableStyles,l=n.get(t),l||(l={type:"style",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Al(n.href);var i=sl(a).hoistableStyles,r=i.get(e);if(r||(a=a.ownerDocument||a,r={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(e,r),(i=a.querySelector(La(e)))&&!i._p&&(r.instance=i,r.state.loading=5),ut.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},ut.set(e,n),i||Sp(a,e,n,r.state))),t&&l===null)throw Error(w(528,""));return r}if(t&&l!==null)throw Error(w(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ul(n),n=sl(a).hoistableScripts,l=n.get(t),l||(l={type:"script",instance:null,count:0,state:null},n.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(w(444,e))}}function Al(e){return'href="'+at(e)+'"'}function La(e){return'link[rel="stylesheet"]['+e+"]"}function M0(e){return ie({},e,{"data-precedence":e.precedence,precedence:null})}function Sp(e,t,n,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),_e(t,"link",n),Se(t),e.head.appendChild(t))}function Ul(e){return'[src="'+at(e)+'"]'}function qa(e){return"script[async]"+e}function of(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+at(n.href)+'"]');if(l)return t.instance=l,Se(l),l;var a=ie({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Se(l),_e(l,"style",a),Ai(l,n.precedence,e),t.instance=l;case"stylesheet":a=Al(n.href);var i=e.querySelector(La(a));if(i)return t.state.loading|=4,t.instance=i,Se(i),i;l=M0(n),(a=ut.get(a))&&Eu(l,a),i=(e.ownerDocument||e).createElement("link"),Se(i);var r=i;return r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),_e(i,"link",l),t.state.loading|=4,Ai(i,n.precedence,e),t.instance=i;case"script":return i=Ul(n.src),(a=e.querySelector(qa(i)))?(t.instance=a,Se(a),a):(l=n,(a=ut.get(i))&&(l=ie({},n),zu(l,a)),e=e.ownerDocument||e,a=e.createElement("script"),Se(a),_e(a,"link",l),e.head.appendChild(a),t.instance=a);case"void":return null;default:throw Error(w(443,t.type))}else t.type==="stylesheet"&&!(t.state.loading&4)&&(l=t.instance,t.state.loading|=4,Ai(l,n.precedence,e));return t.instance}function Ai(e,t,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),a=l.length?l[l.length-1]:null,i=a,r=0;r<l.length;r++){var o=l[r];if(o.dataset.precedence===t)i=o;else if(i!==a)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Eu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function zu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var ji=null;function cf(e,t,n){if(ji===null){var l=new Map,a=ji=new Map;a.set(n,l)}else a=ji,l=a.get(n),l||(l=new Map,a.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),a=0;a<n.length;a++){var i=n[a];if(!(i[Da]||i[Ae]||e==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var r=i.getAttribute(t)||"";r=e+r;var o=l.get(r);o?o.push(i):l.set(r,[i])}}return l}function uf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Ep(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function O0(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}function zp(e,t,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var a=Al(l.href),i=t.querySelector(La(a));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=nr.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=i,Se(i);return}i=t.ownerDocument||t,l=M0(l),(a=ut.get(a))&&Eu(l,a),i=i.createElement("link"),Se(i);var r=i;r._p=new Promise(function(o,c){r.onload=o,r.onerror=c}),_e(i,"link",l),n.instance=i}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=nr.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var wo=0;function Np(e,t){return e.stylesheets&&e.count===0&&Ti(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&Ti(e,e.stylesheets),e.unsuspend){var i=e.unsuspend;e.unsuspend=null,i()}},6e4+t);0<e.imgBytes&&wo===0&&(wo=62500*ip());var a=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ti(e,e.stylesheets),e.unsuspend)){var i=e.unsuspend;e.unsuspend=null,i()}},(e.imgBytes>wo?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(a)}}:null}function nr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ti(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lr=null;function Ti(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lr=new Map,t.forEach(Ap,e),lr=null,nr.call(e))}function Ap(e,t){if(!(t.state.loading&4)){var n=lr.get(e);if(n)var l=n.get(null);else{n=new Map,lr.set(e,n);for(var a=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<a.length;i++){var r=a[i];(r.nodeName==="LINK"||r.getAttribute("media")!=="not all")&&(n.set(r.dataset.precedence,r),l=r)}l&&n.set(null,l)}a=t.instance,r=a.getAttribute("data-precedence"),i=n.get(r)||l,i===l&&n.set(null,a),n.set(r,a),this.count++,l=nr.bind(this),a.addEventListener("load",l),a.addEventListener("error",l),i?i.parentNode.insertBefore(a,i.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(a,e.firstChild)),t.state.loading|=4}}var Na={$$typeof:Mt,Provider:null,Consumer:null,_currentValue:jn,_currentValue2:jn,_threadCount:0};function jp(e,t,n,l,a,i,r,o,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xr(0),this.hiddenUpdates=Xr(null),this.identifierPrefix=l,this.onUncaughtError=a,this.onCaughtError=i,this.onRecoverableError=r,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function R0(e,t,n,l,a,i,r,o,c,u,d,h){return e=new jp(e,t,n,r,c,u,d,h,o),t=1,i===!0&&(t|=24),i=Qe(3,null,null,t),e.current=i,i.stateNode=e,t=Wc(),t.refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:l,isDehydrated:n,cache:t},Pc(i),e}function D0(e){return e?(e=rl,e):rl}function k0(e,t,n,l,a,i){a=D0(a),l.context===null?l.context=a:l.pendingContext=a,l=rn(t),l.payload={element:n},i=i===void 0?null:i,i!==null&&(l.callback=i),n=on(e,l,t),n!==null&&(Le(n,e,t),ia(n,e,t))}function sf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Nu(e,t){sf(e,t),(e=e.alternate)&&sf(e,t)}function U0(e){if(e.tag===13||e.tag===31){var t=qn(e,67108864);t!==null&&Le(t,e,67108864),Nu(e,67108864)}}function ff(e){if(e.tag===13||e.tag===31){var t=We();t=Uc(t);var n=qn(e,t);n!==null&&Le(n,e,t),Nu(e,t)}}var ar=!0;function Tp(e,t,n,l){var a=H.T;H.T=null;var i=K.p;try{K.p=2,Au(e,t,n,l)}finally{K.p=i,H.T=a}}function _p(e,t,n,l){var a=H.T;H.T=null;var i=K.p;try{K.p=8,Au(e,t,n,l)}finally{K.p=i,H.T=a}}function Au(e,t,n,l){if(ar){var a=wc(l);if(a===null)bo(e,t,l,ir,n),df(e,l);else if(Mp(a,e,t,n,l))l.stopPropagation();else if(df(e,l),t&4&&-1<Cp.indexOf(e)){for(;a!==null;){var i=Ml(a);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var r=En(i.pendingLanes);if(r!==0){var o=i;for(o.pendingLanes|=2,o.entangledLanes|=2;r;){var c=1<<31-$e(r);o.entanglements[1]|=c,r&=~c}wt(i),!(Z&6)&&(Ji=Ke()+500,Ya(0,!1))}}break;case 31:case 13:o=qn(i,2),o!==null&&Le(o,i,2),_r(),Nu(i,2)}if(i=wc(l),i===null&&bo(e,t,l,ir,n),i===a)break;a=i}a!==null&&l.stopPropagation()}else bo(e,t,l,null,n)}}function wc(e){return e=Lc(e),ju(e)}var ir=null;function ju(e){if(ir=null,e=el(e),e!==null){var t=Ca(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=nd(t),e!==null)return e;e=null}else if(n===31){if(e=ld(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ir=e,null}function H0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gg()){case od:return 2;case cd:return 8;case Di:case vg:return 32;case ud:return 268435456;default:return 32}default:return 32}}var Sc=!1,sn=null,fn=null,dn=null,Aa=new Map,ja=new Map,Wt=[],Cp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function df(e,t){switch(e){case"focusin":case"focusout":sn=null;break;case"dragenter":case"dragleave":fn=null;break;case"mouseover":case"mouseout":dn=null;break;case"pointerover":case"pointerout":Aa.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ja.delete(t.pointerId)}}function Kl(e,t,n,l,a,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:l,nativeEvent:i,targetContainers:[a]},t!==null&&(t=Ml(t),t!==null&&U0(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Mp(e,t,n,l,a){switch(t){case"focusin":return sn=Kl(sn,e,t,n,l,a),!0;case"dragenter":return fn=Kl(fn,e,t,n,l,a),!0;case"mouseover":return dn=Kl(dn,e,t,n,l,a),!0;case"pointerover":var i=a.pointerId;return Aa.set(i,Kl(Aa.get(i)||null,e,t,n,l,a)),!0;case"gotpointercapture":return i=a.pointerId,ja.set(i,Kl(ja.get(i)||null,e,t,n,l,a)),!0}return!1}function B0(e){var t=el(e.target);if(t!==null){var n=Ca(t);if(n!==null){if(t=n.tag,t===13){if(t=nd(n),t!==null){e.blockedOn=t,$u(e.priority,function(){ff(n)});return}}else if(t===31){if(t=ld(n),t!==null){e.blockedOn=t,$u(e.priority,function(){ff(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _i(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=wc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Lo=l,n.target.dispatchEvent(l),Lo=null}else return t=Ml(n),t!==null&&U0(t),e.blockedOn=n,!1;t.shift()}return!0}function hf(e,t,n){_i(e)&&n.delete(t)}function Op(){Sc=!1,sn!==null&&_i(sn)&&(sn=null),fn!==null&&_i(fn)&&(fn=null),dn!==null&&_i(dn)&&(dn=null),Aa.forEach(hf),ja.forEach(hf)}function ci(e,t){e.blockedOn===t&&(e.blockedOn=null,Sc||(Sc=!0,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,Op)))}var ui=null;function mf(e){ui!==e&&(ui=e,xe.unstable_scheduleCallback(xe.unstable_NormalPriority,function(){ui===e&&(ui=null);for(var t=0;t<e.length;t+=3){var n=e[t],l=e[t+1],a=e[t+2];if(typeof l!="function"){if(ju(l||n)===null)continue;break}var i=Ml(n);i!==null&&(e.splice(t,3),t-=3,nc(i,{pending:!0,data:a,method:n.method,action:l},l,a))}}))}function jl(e){function t(c){return ci(c,e)}sn!==null&&ci(sn,e),fn!==null&&ci(fn,e),dn!==null&&ci(dn,e),Aa.forEach(t),ja.forEach(t);for(var n=0;n<Wt.length;n++){var l=Wt[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Wt.length&&(n=Wt[0],n.blockedOn===null);)B0(n),n.blockedOn===null&&Wt.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var a=n[l],i=n[l+1],r=a[qe]||null;if(typeof i=="function")r||mf(n);else if(r){var o=null;if(i&&i.hasAttribute("formAction")){if(a=i,r=i[qe]||null)o=r.formAction;else if(ju(a)!==null)continue}else o=r.action;typeof o=="function"?n[l+1]=o:(n.splice(l,3),l-=3),mf(n)}}}function Y0(){function e(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(r){return a=r})},focusReset:"manual",scroll:"manual"})}function t(){a!==null&&(a(),a=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,a=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),a!==null&&(a(),a=null)}}}function Tu(e){this._internalRoot=e}Or.prototype.render=Tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(w(409));var n=t.current,l=We();k0(n,l,e,t,null,null)};Or.prototype.unmount=Tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;k0(e.current,2,null,e,null,null),_r(),t[Cl]=null}};function Or(e){this._internalRoot=e}Or.prototype.unstable_scheduleHydration=function(e){if(e){var t=md();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Wt.length&&t!==0&&t<Wt[n].priority;n++);Wt.splice(n,0,e),n===0&&B0(e)}};var gf=ed.version;if(gf!=="19.2.0")throw Error(w(527,gf,"19.2.0"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(w(188)):(e=Object.keys(e).join(","),Error(w(268,e)));return e=cg(t),e=e!==null?ad(e):null,e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var si=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!si.isDisabled&&si.supportsFiber)try{Ma=si.inject(Rp),Je=si}catch{}}gr.createRoot=function(e,t){if(!td(e))throw Error(w(299));var n=!1,l="",a=Ch,i=Mh,r=Oh;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(a=t.onUncaughtError),t.onCaughtError!==void 0&&(i=t.onCaughtError),t.onRecoverableError!==void 0&&(r=t.onRecoverableError)),t=R0(e,1,!1,null,null,n,l,null,a,i,r,Y0),e[Cl]=t.current,Su(e),new Tu(t)};gr.hydrateRoot=function(e,t,n){if(!td(e))throw Error(w(299));var l=!1,a="",i=Ch,r=Mh,o=Oh,c=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(r=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(c=n.formState)),t=R0(e,1,!0,t,n??null,l,a,c,i,r,o,Y0),t.context=D0(null),n=t.current,l=We(),l=Uc(l),a=rn(l),a.callback=null,on(n,a,l),n=l,t.current.lanes=n,Ra(t,n),wt(t),e[Cl]=t.current,Su(e),new Or(t)};gr.version="19.2.0";function L0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L0)}catch(e){console.error(e)}}L0(),Jf.exports=gr;var Dp=Jf.exports;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Ta.apply(this,arguments)}var nn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(nn||(nn={}));const vf="popstate";function kp(e){e===void 0&&(e={});function t(l,a){let{pathname:i,search:r,hash:o}=l.location;return Ec("",{pathname:i,search:r,hash:o},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(l,a){return typeof a=="string"?a:rr(a)}return Hp(t,n,null,e)}function pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _u(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Up(){return Math.random().toString(36).substr(2,8)}function pf(e,t){return{usr:e.state,key:e.key,idx:t}}function Ec(e,t,n,l){return n===void 0&&(n=null),Ta({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Hl(t):t,{state:n,key:t&&t.key||l||Up()})}function rr(e){let{pathname:t="/",search:n="",hash:l=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),l&&l!=="#"&&(t+=l.charAt(0)==="#"?l:"#"+l),t}function Hl(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let l=e.indexOf("?");l>=0&&(t.search=e.substr(l),e=e.substr(0,l)),e&&(t.pathname=e)}return t}function Hp(e,t,n,l){l===void 0&&(l={});let{window:a=document.defaultView,v5Compat:i=!1}=l,r=a.history,o=nn.Pop,c=null,u=d();u==null&&(u=0,r.replaceState(Ta({},r.state,{idx:u}),""));function d(){return(r.state||{idx:null}).idx}function h(){o=nn.Pop;let E=d(),g=E==null?null:E-u;u=E,c&&c({action:o,location:S.location,delta:g})}function f(E,g){o=nn.Push;let m=Ec(S.location,E,g);n&&n(m,E),u=d()+1;let p=pf(m,u),b=S.createHref(m);try{r.pushState(p,"",b)}catch(A){if(A instanceof DOMException&&A.name==="DataCloneError")throw A;a.location.assign(b)}i&&c&&c({action:o,location:S.location,delta:1})}function v(E,g){o=nn.Replace;let m=Ec(S.location,E,g);n&&n(m,E),u=d();let p=pf(m,u),b=S.createHref(m);r.replaceState(p,"",b),i&&c&&c({action:o,location:S.location,delta:0})}function x(E){let g=a.location.origin!=="null"?a.location.origin:a.location.href,m=typeof E=="string"?E:rr(E);return m=m.replace(/ $/,"%20"),pe(g,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,g)}let S={get action(){return o},get location(){return e(a,r)},listen(E){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(vf,h),c=E,()=>{a.removeEventListener(vf,h),c=null}},createHref(E){return t(a,E)},createURL:x,encodeLocation(E){let g=x(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:v,go(E){return r.go(E)}};return S}var yf;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(yf||(yf={}));function Bp(e,t,n){return n===void 0&&(n="/"),Yp(e,t,n,!1)}function Yp(e,t,n,l){let a=typeof t=="string"?Hl(t):t,i=Cu(a.pathname||"/",n);if(i==null)return null;let r=q0(e);Lp(r);let o=null;for(let c=0;o==null&&c<r.length;++c){let u=Fp(i);o=$p(r[c],u,l)}return o}function q0(e,t,n,l){t===void 0&&(t=[]),n===void 0&&(n=[]),l===void 0&&(l="");let a=(i,r,o)=>{let c={relativePath:o===void 0?i.path||"":o,caseSensitive:i.caseSensitive===!0,childrenIndex:r,route:i};c.relativePath.startsWith("/")&&(pe(c.relativePath.startsWith(l),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+l+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(l.length));let u=hn([l,c.relativePath]),d=n.concat(c);i.children&&i.children.length>0&&(pe(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),q0(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Kp(u,i.index),routesMeta:d})};return e.forEach((i,r)=>{var o;if(i.path===""||!((o=i.path)!=null&&o.includes("?")))a(i,r);else for(let c of G0(i.path))a(i,r,c)}),t}function G0(e){let t=e.split("/");if(t.length===0)return[];let[n,...l]=t,a=n.endsWith("?"),i=n.replace(/\?$/,"");if(l.length===0)return a?[i,""]:[i];let r=G0(l.join("/")),o=[];return o.push(...r.map(c=>c===""?i:[i,c].join("/"))),a&&o.push(...r),o.map(c=>e.startsWith("/")&&c===""?"/":c)}function Lp(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Jp(t.routesMeta.map(l=>l.childrenIndex),n.routesMeta.map(l=>l.childrenIndex)))}const qp=/^:[\w-]+$/,Gp=3,Xp=2,Vp=1,Qp=10,Zp=-2,bf=e=>e==="*";function Kp(e,t){let n=e.split("/"),l=n.length;return n.some(bf)&&(l+=Zp),t&&(l+=Xp),n.filter(a=>!bf(a)).reduce((a,i)=>a+(qp.test(i)?Gp:i===""?Vp:Qp),l)}function Jp(e,t){return e.length===t.length&&e.slice(0,-1).every((l,a)=>l===t[a])?e[e.length-1]-t[t.length-1]:0}function $p(e,t,n){n===void 0&&(n=!1);let{routesMeta:l}=e,a={},i="/",r=[];for(let o=0;o<l.length;++o){let c=l[o],u=o===l.length-1,d=i==="/"?t:t.slice(i.length)||"/",h=xf({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),f=c.route;if(!h&&u&&n&&!l[l.length-1].route.index&&(h=xf({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!h)return null;Object.assign(a,h.params),r.push({params:a,pathname:hn([i,h.pathname]),pathnameBase:ny(hn([i,h.pathnameBase])),route:f}),h.pathnameBase!=="/"&&(i=hn([i,h.pathnameBase]))}return r}function xf(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,l]=Wp(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let i=a[0],r=i.replace(/(.)\/+$/,"$1"),o=a.slice(1);return{params:l.reduce((u,d,h)=>{let{paramName:f,isOptional:v}=d;if(f==="*"){let S=o[h]||"";r=i.slice(0,i.length-S.length).replace(/(.)\/+$/,"$1")}const x=o[h];return v&&!x?u[f]=void 0:u[f]=(x||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:r,pattern:e}}function Wp(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),_u(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let l=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(r,o,c)=>(l.push({paramName:o,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(l.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),l]}function Fp(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return _u(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Cu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,l=e.charAt(n);return l&&l!=="/"?null:e.slice(n)||"/"}const Ip=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pp=e=>Ip.test(e);function ey(e,t){t===void 0&&(t="/");let{pathname:n,search:l="",hash:a=""}=typeof e=="string"?Hl(e):e,i;if(n)if(Pp(n))i=n;else{if(n.includes("//")){let r=n;n=n.replace(/\/\/+/g,"/"),_u(!1,"Pathnames cannot have embedded double slashes - normalizing "+(r+" -> "+n))}n.startsWith("/")?i=wf(n.substring(1),"/"):i=wf(n,t)}else i=t;return{pathname:i,search:ly(l),hash:ay(a)}}function wf(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function So(e,t,n,l){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(l)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ty(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function X0(e,t){let n=ty(e);return t?n.map((l,a)=>a===n.length-1?l.pathname:l.pathnameBase):n.map(l=>l.pathnameBase)}function V0(e,t,n,l){l===void 0&&(l=!1);let a;typeof e=="string"?a=Hl(e):(a=Ta({},e),pe(!a.pathname||!a.pathname.includes("?"),So("?","pathname","search",a)),pe(!a.pathname||!a.pathname.includes("#"),So("#","pathname","hash",a)),pe(!a.search||!a.search.includes("#"),So("#","search","hash",a)));let i=e===""||a.pathname==="",r=i?"/":a.pathname,o;if(r==null)o=n;else{let h=t.length-1;if(!l&&r.startsWith("..")){let f=r.split("/");for(;f[0]==="..";)f.shift(),h-=1;a.pathname=f.join("/")}o=h>=0?t[h]:"/"}let c=ey(a,o),u=r&&r!=="/"&&r.endsWith("/"),d=(i||r===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const hn=e=>e.join("/").replace(/\/\/+/g,"/"),ny=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),ly=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,ay=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function iy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const Q0=["post","put","patch","delete"];new Set(Q0);const ry=["get",...Q0];new Set(ry);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _a(){return _a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},_a.apply(this,arguments)}const Mu=y.createContext(null),oy=y.createContext(null),Xn=y.createContext(null),Rr=y.createContext(null),Vn=y.createContext({outlet:null,matches:[],isDataRoute:!1}),Z0=y.createContext(null);function cy(e,t){let{relative:n}=t===void 0?{}:t;Ga()||pe(!1);let{basename:l,navigator:a}=y.useContext(Xn),{hash:i,pathname:r,search:o}=J0(e,{relative:n}),c=r;return l!=="/"&&(c=r==="/"?l:hn([l,r])),a.createHref({pathname:c,search:o,hash:i})}function Ga(){return y.useContext(Rr)!=null}function Dr(){return Ga()||pe(!1),y.useContext(Rr).location}function K0(e){y.useContext(Xn).static||y.useLayoutEffect(e)}function uy(){let{isDataRoute:e}=y.useContext(Vn);return e?Sy():sy()}function sy(){Ga()||pe(!1);let e=y.useContext(Mu),{basename:t,future:n,navigator:l}=y.useContext(Xn),{matches:a}=y.useContext(Vn),{pathname:i}=Dr(),r=JSON.stringify(X0(a,n.v7_relativeSplatPath)),o=y.useRef(!1);return K0(()=>{o.current=!0}),y.useCallback(function(u,d){if(d===void 0&&(d={}),!o.current)return;if(typeof u=="number"){l.go(u);return}let h=V0(u,JSON.parse(r),i,d.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:hn([t,h.pathname])),(d.replace?l.replace:l.push)(h,d.state,d)},[t,l,r,i,e])}function J0(e,t){let{relative:n}=t===void 0?{}:t,{future:l}=y.useContext(Xn),{matches:a}=y.useContext(Vn),{pathname:i}=Dr(),r=JSON.stringify(X0(a,l.v7_relativeSplatPath));return y.useMemo(()=>V0(e,JSON.parse(r),i,n==="path"),[e,r,i,n])}function fy(e,t){return dy(e,t)}function dy(e,t,n,l){Ga()||pe(!1);let{navigator:a}=y.useContext(Xn),{matches:i}=y.useContext(Vn),r=i[i.length-1],o=r?r.params:{};r&&r.pathname;let c=r?r.pathnameBase:"/";r&&r.route;let u=Dr(),d;if(t){var h;let E=typeof t=="string"?Hl(t):t;c==="/"||(h=E.pathname)!=null&&h.startsWith(c)||pe(!1),d=E}else d=u;let f=d.pathname||"/",v=f;if(c!=="/"){let E=c.replace(/^\//,"").split("/");v="/"+f.replace(/^\//,"").split("/").slice(E.length).join("/")}let x=Bp(e,{pathname:v}),S=py(x&&x.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:hn([c,a.encodeLocation?a.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?c:hn([c,a.encodeLocation?a.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n,l);return t&&S?y.createElement(Rr.Provider,{value:{location:_a({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:nn.Pop}},S):S}function hy(){let e=wy(),t=iy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},i=null;return y.createElement(y.Fragment,null,y.createElement("h2",null,"Unexpected Application Error!"),y.createElement("h3",{style:{fontStyle:"italic"}},t),n?y.createElement("pre",{style:a},n):null,i)}const my=y.createElement(hy,null);class gy extends y.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?y.createElement(Vn.Provider,{value:this.props.routeContext},y.createElement(Z0.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function vy(e){let{routeContext:t,match:n,children:l}=e,a=y.useContext(Mu);return a&&a.static&&a.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=n.route.id),y.createElement(Vn.Provider,{value:t},l)}function py(e,t,n,l){var a;if(t===void 0&&(t=[]),n===void 0&&(n=null),l===void 0&&(l=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=l)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let r=e,o=(a=n)==null?void 0:a.errors;if(o!=null){let d=r.findIndex(h=>h.route.id&&(o==null?void 0:o[h.route.id])!==void 0);d>=0||pe(!1),r=r.slice(0,Math.min(r.length,d+1))}let c=!1,u=-1;if(n&&l&&l.v7_partialHydration)for(let d=0;d<r.length;d++){let h=r[d];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=d),h.route.id){let{loaderData:f,errors:v}=n,x=h.route.loader&&f[h.route.id]===void 0&&(!v||v[h.route.id]===void 0);if(h.route.lazy||x){c=!0,u>=0?r=r.slice(0,u+1):r=[r[0]];break}}}return r.reduceRight((d,h,f)=>{let v,x=!1,S=null,E=null;n&&(v=o&&h.route.id?o[h.route.id]:void 0,S=h.route.errorElement||my,c&&(u<0&&f===0?(Ey("route-fallback",!1),x=!0,E=null):u===f&&(x=!0,E=h.route.hydrateFallbackElement||null)));let g=t.concat(r.slice(0,f+1)),m=()=>{let p;return v?p=S:x?p=E:h.route.Component?p=y.createElement(h.route.Component,null):h.route.element?p=h.route.element:p=d,y.createElement(vy,{match:h,routeContext:{outlet:d,matches:g,isDataRoute:n!=null},children:p})};return n&&(h.route.ErrorBoundary||h.route.errorElement||f===0)?y.createElement(gy,{location:n.location,revalidation:n.revalidation,component:S,error:v,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()},null)}var $0=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}($0||{}),or=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(or||{});function yy(e){let t=y.useContext(Mu);return t||pe(!1),t}function by(e){let t=y.useContext(oy);return t||pe(!1),t}function xy(e){let t=y.useContext(Vn);return t||pe(!1),t}function W0(e){let t=xy(),n=t.matches[t.matches.length-1];return n.route.id||pe(!1),n.route.id}function wy(){var e;let t=y.useContext(Z0),n=by(or.UseRouteError),l=W0(or.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[l]}function Sy(){let{router:e}=yy($0.UseNavigateStable),t=W0(or.UseNavigateStable),n=y.useRef(!1);return K0(()=>{n.current=!0}),y.useCallback(function(a,i){i===void 0&&(i={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,_a({fromRouteId:t},i)))},[e,t])}const Sf={};function Ey(e,t,n){!t&&!Sf[e]&&(Sf[e]=!0)}function zy(e,t){e==null||e.v7_startTransition,(e==null?void 0:e.v7_relativeSplatPath)===void 0&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}function Ci(e){pe(!1)}function Ny(e){let{basename:t="/",children:n=null,location:l,navigationType:a=nn.Pop,navigator:i,static:r=!1,future:o}=e;Ga()&&pe(!1);let c=t.replace(/^\/*/,"/"),u=y.useMemo(()=>({basename:c,navigator:i,static:r,future:_a({v7_relativeSplatPath:!1},o)}),[c,o,i,r]);typeof l=="string"&&(l=Hl(l));let{pathname:d="/",search:h="",hash:f="",state:v=null,key:x="default"}=l,S=y.useMemo(()=>{let E=Cu(d,c);return E==null?null:{location:{pathname:E,search:h,hash:f,state:v,key:x},navigationType:a}},[c,d,h,f,v,x,a]);return S==null?null:y.createElement(Xn.Provider,{value:u},y.createElement(Rr.Provider,{children:n,value:S}))}function Ay(e){let{children:t,location:n}=e;return fy(zc(t),n)}new Promise(()=>{});function zc(e,t){t===void 0&&(t=[]);let n=[];return y.Children.forEach(e,(l,a)=>{if(!y.isValidElement(l))return;let i=[...t,a];if(l.type===y.Fragment){n.push.apply(n,zc(l.props.children,i));return}l.type!==Ci&&pe(!1),!l.props.index||!l.props.children||pe(!1);let r={id:l.props.id||i.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,loader:l.props.loader,action:l.props.action,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(r.children=zc(l.props.children,i)),n.push(r)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nc(){return Nc=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Nc.apply(this,arguments)}function jy(e,t){if(e==null)return{};var n={},l=Object.keys(e),a,i;for(i=0;i<l.length;i++)a=l[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ty(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function _y(e,t){return e.button===0&&(!t||t==="_self")&&!Ty(e)}const Cy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],My="6";try{window.__reactRouterVersion=My}catch{}const Oy="startTransition",Ef=Kf[Oy];function Ry(e){let{basename:t,children:n,future:l,window:a}=e,i=y.useRef();i.current==null&&(i.current=kp({window:a,v5Compat:!0}));let r=i.current,[o,c]=y.useState({action:r.action,location:r.location}),{v7_startTransition:u}=l||{},d=y.useCallback(h=>{u&&Ef?Ef(()=>c(h)):c(h)},[c,u]);return y.useLayoutEffect(()=>r.listen(d),[r,d]),y.useEffect(()=>zy(l),[l]),y.createElement(Ny,{basename:t,children:n,location:o.location,navigationType:o.action,navigator:r,future:l})}const Dy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",ky=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ou=y.forwardRef(function(t,n){let{onClick:l,relative:a,reloadDocument:i,replace:r,state:o,target:c,to:u,preventScrollReset:d,viewTransition:h}=t,f=jy(t,Cy),{basename:v}=y.useContext(Xn),x,S=!1;if(typeof u=="string"&&ky.test(u)&&(x=u,Dy))try{let p=new URL(window.location.href),b=u.startsWith("//")?new URL(p.protocol+u):new URL(u),A=Cu(b.pathname,v);b.origin===p.origin&&A!=null?u=A+b.search+b.hash:S=!0}catch{}let E=cy(u,{relative:a}),g=Uy(u,{replace:r,state:o,target:c,preventScrollReset:d,relative:a,viewTransition:h});function m(p){l&&l(p),p.defaultPrevented||g(p)}return y.createElement("a",Nc({},f,{href:x||E,onClick:S||i?l:m,ref:n,target:c}))});var zf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(zf||(zf={}));var Nf;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Nf||(Nf={}));function Uy(e,t){let{target:n,replace:l,state:a,preventScrollReset:i,relative:r,viewTransition:o}=t===void 0?{}:t,c=uy(),u=Dr(),d=J0(e,{relative:r});return y.useCallback(h=>{if(_y(h,n)){h.preventDefault();let f=l!==void 0?l:rr(u)===rr(d);c(e,{replace:f,state:a,preventScrollReset:i,relative:r,viewTransition:o})}},[u,c,d,l,a,n,e,i,r,o])}function Af(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Ru(...e){return t=>{let n=!1;const l=e.map(a=>{const i=Af(a,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let a=0;a<l.length;a++){const i=l[a];typeof i=="function"?i():Af(e[a],null)}}}}function Qn(...e){return y.useCallback(Ru(...e),e)}var Hy=Symbol.for("react.lazy"),cr=Kf[" use ".trim().toString()];function By(e){return typeof e=="object"&&e!==null&&"then"in e}function F0(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===Hy&&"_payload"in e&&By(e._payload)}function Yy(e){const t=Ly(e),n=y.forwardRef((l,a)=>{let{children:i,...r}=l;F0(i)&&typeof cr=="function"&&(i=cr(i._payload));const o=y.Children.toArray(i),c=o.find(Gy);if(c){const u=c.props.children,d=o.map(h=>h===c?y.Children.count(u)>1?y.Children.only(null):y.isValidElement(u)?u.props.children:null:h);return s.jsx(t,{...r,ref:a,children:y.isValidElement(u)?y.cloneElement(u,void 0,d):null})}return s.jsx(t,{...r,ref:a,children:i})});return n.displayName=`${e}.Slot`,n}var I0=Yy("Slot");function Ly(e){const t=y.forwardRef((n,l)=>{let{children:a,...i}=n;if(F0(a)&&typeof cr=="function"&&(a=cr(a._payload)),y.isValidElement(a)){const r=Vy(a),o=Xy(i,a.props);return a.type!==y.Fragment&&(o.ref=l?Ru(l,r):r),y.cloneElement(a,o)}return y.Children.count(a)>1?y.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var qy=Symbol("radix.slottable");function Gy(e){return y.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===qy}function Xy(e,t){const n={...t};for(const l in t){const a=e[l],i=t[l];/^on[A-Z]/.test(l)?a&&i?n[l]=(...o)=>{const c=i(...o);return a(...o),c}:a&&(n[l]=a):l==="style"?n[l]={...a,...i}:l==="className"&&(n[l]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function Vy(e){var l,a;let t=(l=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:l.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function P0(e){var t,n,l="";if(typeof e=="string"||typeof e=="number")l+=e;else if(typeof e=="object")if(Array.isArray(e)){var a=e.length;for(t=0;t<a;t++)e[t]&&(n=P0(e[t]))&&(l&&(l+=" "),l+=n)}else for(n in e)e[n]&&(l&&(l+=" "),l+=n);return l}function Du(){for(var e,t,n=0,l="",a=arguments.length;n<a;n++)(e=arguments[n])&&(t=P0(e))&&(l&&(l+=" "),l+=t);return l}const jf=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,Tf=Du,em=(e,t)=>n=>{var l;if((t==null?void 0:t.variants)==null)return Tf(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:a,defaultVariants:i}=t,r=Object.keys(a).map(u=>{const d=n==null?void 0:n[u],h=i==null?void 0:i[u];if(d===null)return null;const f=jf(d)||jf(h);return a[u][f]}),o=n&&Object.entries(n).reduce((u,d)=>{let[h,f]=d;return f===void 0||(u[h]=f),u},{}),c=t==null||(l=t.compoundVariants)===null||l===void 0?void 0:l.reduce((u,d)=>{let{class:h,className:f,...v}=d;return Object.entries(v).every(x=>{let[S,E]=x;return Array.isArray(E)?E.includes({...i,...o}[S]):{...i,...o}[S]===E})?[...u,h,f]:u},[]);return Tf(e,r,c,n==null?void 0:n.class,n==null?void 0:n.className)},Qy=(e,t)=>{const n=new Array(e.length+t.length);for(let l=0;l<e.length;l++)n[l]=e[l];for(let l=0;l<t.length;l++)n[e.length+l]=t[l];return n},Zy=(e,t)=>({classGroupId:e,validator:t}),tm=(e=new Map,t=null,n)=>({nextPart:e,validators:t,classGroupId:n}),ur="-",_f=[],Ky="arbitrary..",Jy=e=>{const t=Wy(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:l}=e;return{getClassGroupId:r=>{if(r.startsWith("[")&&r.endsWith("]"))return $y(r);const o=r.split(ur),c=o[0]===""&&o.length>1?1:0;return nm(o,c,t)},getConflictingClassGroupIds:(r,o)=>{if(o){const c=l[r],u=n[r];return c?u?Qy(u,c):c:u||_f}return n[r]||_f}}},nm=(e,t,n)=>{if(e.length-t===0)return n.classGroupId;const a=e[t],i=n.nextPart.get(a);if(i){const u=nm(e,t+1,i);if(u)return u}const r=n.validators;if(r===null)return;const o=t===0?e.join(ur):e.slice(t).join(ur),c=r.length;for(let u=0;u<c;u++){const d=r[u];if(d.validator(o))return d.classGroupId}},$y=e=>e.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const t=e.slice(1,-1),n=t.indexOf(":"),l=t.slice(0,n);return l?Ky+l:void 0})(),Wy=e=>{const{theme:t,classGroups:n}=e;return Fy(n,t)},Fy=(e,t)=>{const n=tm();for(const l in e){const a=e[l];ku(a,n,l,t)}return n},ku=(e,t,n,l)=>{const a=e.length;for(let i=0;i<a;i++){const r=e[i];Iy(r,t,n,l)}},Iy=(e,t,n,l)=>{if(typeof e=="string"){Py(e,t,n);return}if(typeof e=="function"){eb(e,t,n,l);return}tb(e,t,n,l)},Py=(e,t,n)=>{const l=e===""?t:lm(t,e);l.classGroupId=n},eb=(e,t,n,l)=>{if(nb(e)){ku(e(l),t,n,l);return}t.validators===null&&(t.validators=[]),t.validators.push(Zy(n,e))},tb=(e,t,n,l)=>{const a=Object.entries(e),i=a.length;for(let r=0;r<i;r++){const[o,c]=a[r];ku(c,lm(t,o),n,l)}},lm=(e,t)=>{let n=e;const l=t.split(ur),a=l.length;for(let i=0;i<a;i++){const r=l[i];let o=n.nextPart.get(r);o||(o=tm(),n.nextPart.set(r,o)),n=o}return n},nb=e=>"isThemeGetter"in e&&e.isThemeGetter===!0,lb=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=Object.create(null),l=Object.create(null);const a=(i,r)=>{n[i]=r,t++,t>e&&(t=0,l=n,n=Object.create(null))};return{get(i){let r=n[i];if(r!==void 0)return r;if((r=l[i])!==void 0)return a(i,r),r},set(i,r){i in n?n[i]=r:a(i,r)}}},Ac="!",Cf=":",ab=[],Mf=(e,t,n,l,a)=>({modifiers:e,hasImportantModifier:t,baseClassName:n,maybePostfixModifierPosition:l,isExternal:a}),ib=e=>{const{prefix:t,experimentalParseClassName:n}=e;let l=a=>{const i=[];let r=0,o=0,c=0,u;const d=a.length;for(let S=0;S<d;S++){const E=a[S];if(r===0&&o===0){if(E===Cf){i.push(a.slice(c,S)),c=S+1;continue}if(E==="/"){u=S;continue}}E==="["?r++:E==="]"?r--:E==="("?o++:E===")"&&o--}const h=i.length===0?a:a.slice(c);let f=h,v=!1;h.endsWith(Ac)?(f=h.slice(0,-1),v=!0):h.startsWith(Ac)&&(f=h.slice(1),v=!0);const x=u&&u>c?u-c:void 0;return Mf(i,v,f,x)};if(t){const a=t+Cf,i=l;l=r=>r.startsWith(a)?i(r.slice(a.length)):Mf(ab,!1,r,void 0,!0)}if(n){const a=l;l=i=>n({className:i,parseClassName:a})}return l},rb=e=>{const t=new Map;return e.orderSensitiveModifiers.forEach((n,l)=>{t.set(n,1e6+l)}),n=>{const l=[];let a=[];for(let i=0;i<n.length;i++){const r=n[i],o=r[0]==="[",c=t.has(r);o||c?(a.length>0&&(a.sort(),l.push(...a),a=[]),l.push(r)):a.push(r)}return a.length>0&&(a.sort(),l.push(...a)),l}},ob=e=>({cache:lb(e.cacheSize),parseClassName:ib(e),sortModifiers:rb(e),...Jy(e)}),cb=/\s+/,ub=(e,t)=>{const{parseClassName:n,getClassGroupId:l,getConflictingClassGroupIds:a,sortModifiers:i}=t,r=[],o=e.trim().split(cb);let c="";for(let u=o.length-1;u>=0;u-=1){const d=o[u],{isExternal:h,modifiers:f,hasImportantModifier:v,baseClassName:x,maybePostfixModifierPosition:S}=n(d);if(h){c=d+(c.length>0?" "+c:c);continue}let E=!!S,g=l(E?x.substring(0,S):x);if(!g){if(!E){c=d+(c.length>0?" "+c:c);continue}if(g=l(x),!g){c=d+(c.length>0?" "+c:c);continue}E=!1}const m=f.length===0?"":f.length===1?f[0]:i(f).join(":"),p=v?m+Ac:m,b=p+g;if(r.indexOf(b)>-1)continue;r.push(b);const A=a(g,E);for(let R=0;R<A.length;++R){const j=A[R];r.push(p+j)}c=d+(c.length>0?" "+c:c)}return c},sb=(...e)=>{let t=0,n,l,a="";for(;t<e.length;)(n=e[t++])&&(l=am(n))&&(a&&(a+=" "),a+=l);return a},am=e=>{if(typeof e=="string")return e;let t,n="";for(let l=0;l<e.length;l++)e[l]&&(t=am(e[l]))&&(n&&(n+=" "),n+=t);return n},fb=(e,...t)=>{let n,l,a,i;const r=c=>{const u=t.reduce((d,h)=>h(d),e());return n=ob(u),l=n.cache.get,a=n.cache.set,i=o,o(c)},o=c=>{const u=l(c);if(u)return u;const d=ub(c,n);return a(c,d),d};return i=r,(...c)=>i(sb(...c))},db=[],ye=e=>{const t=n=>n[e]||db;return t.isThemeGetter=!0,t},im=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,rm=/^\((?:(\w[\w-]*):)?(.+)\)$/i,hb=/^\d+\/\d+$/,mb=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,gb=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,vb=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,pb=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,yb=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Jn=e=>hb.test(e),L=e=>!!e&&!Number.isNaN(Number(e)),Vt=e=>!!e&&Number.isInteger(Number(e)),Eo=e=>e.endsWith("%")&&L(e.slice(0,-1)),jt=e=>mb.test(e),bb=()=>!0,xb=e=>gb.test(e)&&!vb.test(e),om=()=>!1,wb=e=>pb.test(e),Sb=e=>yb.test(e),Eb=e=>!M(e)&&!O(e),zb=e=>Bl(e,sm,om),M=e=>im.test(e),wn=e=>Bl(e,fm,xb),zo=e=>Bl(e,_b,L),Of=e=>Bl(e,cm,om),Nb=e=>Bl(e,um,Sb),fi=e=>Bl(e,dm,wb),O=e=>rm.test(e),Jl=e=>Yl(e,fm),Ab=e=>Yl(e,Cb),Rf=e=>Yl(e,cm),jb=e=>Yl(e,sm),Tb=e=>Yl(e,um),di=e=>Yl(e,dm,!0),Bl=(e,t,n)=>{const l=im.exec(e);return l?l[1]?t(l[1]):n(l[2]):!1},Yl=(e,t,n=!1)=>{const l=rm.exec(e);return l?l[1]?t(l[1]):n:!1},cm=e=>e==="position"||e==="percentage",um=e=>e==="image"||e==="url",sm=e=>e==="length"||e==="size"||e==="bg-size",fm=e=>e==="length",_b=e=>e==="number",Cb=e=>e==="family-name",dm=e=>e==="shadow",Mb=()=>{const e=ye("color"),t=ye("font"),n=ye("text"),l=ye("font-weight"),a=ye("tracking"),i=ye("leading"),r=ye("breakpoint"),o=ye("container"),c=ye("spacing"),u=ye("radius"),d=ye("shadow"),h=ye("inset-shadow"),f=ye("text-shadow"),v=ye("drop-shadow"),x=ye("blur"),S=ye("perspective"),E=ye("aspect"),g=ye("ease"),m=ye("animate"),p=()=>["auto","avoid","all","avoid-page","page","left","right","column"],b=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],A=()=>[...b(),O,M],R=()=>["auto","hidden","clip","visible","scroll"],j=()=>["auto","contain","none"],z=()=>[O,M,c],C=()=>[Jn,"full","auto",...z()],T=()=>[Vt,"none","subgrid",O,M],k=()=>["auto",{span:["full",Vt,O,M]},Vt,O,M],Q=()=>[Vt,"auto",O,M],ze=()=>["auto","min","max","fr",O,M],Me=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],ke=()=>["start","end","center","stretch","center-safe","end-safe"],_=()=>["auto",...z()],U=()=>[Jn,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...z()],N=()=>[e,O,M],I=()=>[...b(),Rf,Of,{position:[O,M]}],re=()=>["no-repeat",{repeat:["","x","y","space","round"]}],gt=()=>["auto","cover","contain",jb,zb,{size:[O,M]}],ft=()=>[Eo,Jl,wn],D=()=>["","none","full",u,O,M],te=()=>["",L,Jl,wn],Pe=()=>["solid","dashed","dotted","double"],Ll=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],se=()=>[L,Eo,Rf,Of],Lu=()=>["","none",x,O,M],Za=()=>["none",L,O,M],Ka=()=>["none",L,O,M],Hr=()=>[L,O,M],Ja=()=>[Jn,"full",...z()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[jt],breakpoint:[jt],color:[bb],container:[jt],"drop-shadow":[jt],ease:["in","out","in-out"],font:[Eb],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[jt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[jt],shadow:[jt],spacing:["px",L],text:[jt],"text-shadow":[jt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Jn,M,O,E]}],container:["container"],columns:[{columns:[L,M,O,o]}],"break-after":[{"break-after":p()}],"break-before":[{"break-before":p()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:A()}],overflow:[{overflow:R()}],"overflow-x":[{"overflow-x":R()}],"overflow-y":[{"overflow-y":R()}],overscroll:[{overscroll:j()}],"overscroll-x":[{"overscroll-x":j()}],"overscroll-y":[{"overscroll-y":j()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:C()}],"inset-x":[{"inset-x":C()}],"inset-y":[{"inset-y":C()}],start:[{start:C()}],end:[{end:C()}],top:[{top:C()}],right:[{right:C()}],bottom:[{bottom:C()}],left:[{left:C()}],visibility:["visible","invisible","collapse"],z:[{z:[Vt,"auto",O,M]}],basis:[{basis:[Jn,"full","auto",o,...z()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[L,Jn,"auto","initial","none",M]}],grow:[{grow:["",L,O,M]}],shrink:[{shrink:["",L,O,M]}],order:[{order:[Vt,"first","last","none",O,M]}],"grid-cols":[{"grid-cols":T()}],"col-start-end":[{col:k()}],"col-start":[{"col-start":Q()}],"col-end":[{"col-end":Q()}],"grid-rows":[{"grid-rows":T()}],"row-start-end":[{row:k()}],"row-start":[{"row-start":Q()}],"row-end":[{"row-end":Q()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":ze()}],"auto-rows":[{"auto-rows":ze()}],gap:[{gap:z()}],"gap-x":[{"gap-x":z()}],"gap-y":[{"gap-y":z()}],"justify-content":[{justify:[...Me(),"normal"]}],"justify-items":[{"justify-items":[...ke(),"normal"]}],"justify-self":[{"justify-self":["auto",...ke()]}],"align-content":[{content:["normal",...Me()]}],"align-items":[{items:[...ke(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...ke(),{baseline:["","last"]}]}],"place-content":[{"place-content":Me()}],"place-items":[{"place-items":[...ke(),"baseline"]}],"place-self":[{"place-self":["auto",...ke()]}],p:[{p:z()}],px:[{px:z()}],py:[{py:z()}],ps:[{ps:z()}],pe:[{pe:z()}],pt:[{pt:z()}],pr:[{pr:z()}],pb:[{pb:z()}],pl:[{pl:z()}],m:[{m:_()}],mx:[{mx:_()}],my:[{my:_()}],ms:[{ms:_()}],me:[{me:_()}],mt:[{mt:_()}],mr:[{mr:_()}],mb:[{mb:_()}],ml:[{ml:_()}],"space-x":[{"space-x":z()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":z()}],"space-y-reverse":["space-y-reverse"],size:[{size:U()}],w:[{w:[o,"screen",...U()]}],"min-w":[{"min-w":[o,"screen","none",...U()]}],"max-w":[{"max-w":[o,"screen","none","prose",{screen:[r]},...U()]}],h:[{h:["screen","lh",...U()]}],"min-h":[{"min-h":["screen","lh","none",...U()]}],"max-h":[{"max-h":["screen","lh",...U()]}],"font-size":[{text:["base",n,Jl,wn]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[l,O,zo]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Eo,M]}],"font-family":[{font:[Ab,M,t]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[a,O,M]}],"line-clamp":[{"line-clamp":[L,"none",O,zo]}],leading:[{leading:[i,...z()]}],"list-image":[{"list-image":["none",O,M]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",O,M]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:N()}],"text-color":[{text:N()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Pe(),"wavy"]}],"text-decoration-thickness":[{decoration:[L,"from-font","auto",O,wn]}],"text-decoration-color":[{decoration:N()}],"underline-offset":[{"underline-offset":[L,"auto",O,M]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:z()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",O,M]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",O,M]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:I()}],"bg-repeat":[{bg:re()}],"bg-size":[{bg:gt()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},Vt,O,M],radial:["",O,M],conic:[Vt,O,M]},Tb,Nb]}],"bg-color":[{bg:N()}],"gradient-from-pos":[{from:ft()}],"gradient-via-pos":[{via:ft()}],"gradient-to-pos":[{to:ft()}],"gradient-from":[{from:N()}],"gradient-via":[{via:N()}],"gradient-to":[{to:N()}],rounded:[{rounded:D()}],"rounded-s":[{"rounded-s":D()}],"rounded-e":[{"rounded-e":D()}],"rounded-t":[{"rounded-t":D()}],"rounded-r":[{"rounded-r":D()}],"rounded-b":[{"rounded-b":D()}],"rounded-l":[{"rounded-l":D()}],"rounded-ss":[{"rounded-ss":D()}],"rounded-se":[{"rounded-se":D()}],"rounded-ee":[{"rounded-ee":D()}],"rounded-es":[{"rounded-es":D()}],"rounded-tl":[{"rounded-tl":D()}],"rounded-tr":[{"rounded-tr":D()}],"rounded-br":[{"rounded-br":D()}],"rounded-bl":[{"rounded-bl":D()}],"border-w":[{border:te()}],"border-w-x":[{"border-x":te()}],"border-w-y":[{"border-y":te()}],"border-w-s":[{"border-s":te()}],"border-w-e":[{"border-e":te()}],"border-w-t":[{"border-t":te()}],"border-w-r":[{"border-r":te()}],"border-w-b":[{"border-b":te()}],"border-w-l":[{"border-l":te()}],"divide-x":[{"divide-x":te()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":te()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Pe(),"hidden","none"]}],"divide-style":[{divide:[...Pe(),"hidden","none"]}],"border-color":[{border:N()}],"border-color-x":[{"border-x":N()}],"border-color-y":[{"border-y":N()}],"border-color-s":[{"border-s":N()}],"border-color-e":[{"border-e":N()}],"border-color-t":[{"border-t":N()}],"border-color-r":[{"border-r":N()}],"border-color-b":[{"border-b":N()}],"border-color-l":[{"border-l":N()}],"divide-color":[{divide:N()}],"outline-style":[{outline:[...Pe(),"none","hidden"]}],"outline-offset":[{"outline-offset":[L,O,M]}],"outline-w":[{outline:["",L,Jl,wn]}],"outline-color":[{outline:N()}],shadow:[{shadow:["","none",d,di,fi]}],"shadow-color":[{shadow:N()}],"inset-shadow":[{"inset-shadow":["none",h,di,fi]}],"inset-shadow-color":[{"inset-shadow":N()}],"ring-w":[{ring:te()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:N()}],"ring-offset-w":[{"ring-offset":[L,wn]}],"ring-offset-color":[{"ring-offset":N()}],"inset-ring-w":[{"inset-ring":te()}],"inset-ring-color":[{"inset-ring":N()}],"text-shadow":[{"text-shadow":["none",f,di,fi]}],"text-shadow-color":[{"text-shadow":N()}],opacity:[{opacity:[L,O,M]}],"mix-blend":[{"mix-blend":[...Ll(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Ll()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[L]}],"mask-image-linear-from-pos":[{"mask-linear-from":se()}],"mask-image-linear-to-pos":[{"mask-linear-to":se()}],"mask-image-linear-from-color":[{"mask-linear-from":N()}],"mask-image-linear-to-color":[{"mask-linear-to":N()}],"mask-image-t-from-pos":[{"mask-t-from":se()}],"mask-image-t-to-pos":[{"mask-t-to":se()}],"mask-image-t-from-color":[{"mask-t-from":N()}],"mask-image-t-to-color":[{"mask-t-to":N()}],"mask-image-r-from-pos":[{"mask-r-from":se()}],"mask-image-r-to-pos":[{"mask-r-to":se()}],"mask-image-r-from-color":[{"mask-r-from":N()}],"mask-image-r-to-color":[{"mask-r-to":N()}],"mask-image-b-from-pos":[{"mask-b-from":se()}],"mask-image-b-to-pos":[{"mask-b-to":se()}],"mask-image-b-from-color":[{"mask-b-from":N()}],"mask-image-b-to-color":[{"mask-b-to":N()}],"mask-image-l-from-pos":[{"mask-l-from":se()}],"mask-image-l-to-pos":[{"mask-l-to":se()}],"mask-image-l-from-color":[{"mask-l-from":N()}],"mask-image-l-to-color":[{"mask-l-to":N()}],"mask-image-x-from-pos":[{"mask-x-from":se()}],"mask-image-x-to-pos":[{"mask-x-to":se()}],"mask-image-x-from-color":[{"mask-x-from":N()}],"mask-image-x-to-color":[{"mask-x-to":N()}],"mask-image-y-from-pos":[{"mask-y-from":se()}],"mask-image-y-to-pos":[{"mask-y-to":se()}],"mask-image-y-from-color":[{"mask-y-from":N()}],"mask-image-y-to-color":[{"mask-y-to":N()}],"mask-image-radial":[{"mask-radial":[O,M]}],"mask-image-radial-from-pos":[{"mask-radial-from":se()}],"mask-image-radial-to-pos":[{"mask-radial-to":se()}],"mask-image-radial-from-color":[{"mask-radial-from":N()}],"mask-image-radial-to-color":[{"mask-radial-to":N()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":b()}],"mask-image-conic-pos":[{"mask-conic":[L]}],"mask-image-conic-from-pos":[{"mask-conic-from":se()}],"mask-image-conic-to-pos":[{"mask-conic-to":se()}],"mask-image-conic-from-color":[{"mask-conic-from":N()}],"mask-image-conic-to-color":[{"mask-conic-to":N()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:I()}],"mask-repeat":[{mask:re()}],"mask-size":[{mask:gt()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",O,M]}],filter:[{filter:["","none",O,M]}],blur:[{blur:Lu()}],brightness:[{brightness:[L,O,M]}],contrast:[{contrast:[L,O,M]}],"drop-shadow":[{"drop-shadow":["","none",v,di,fi]}],"drop-shadow-color":[{"drop-shadow":N()}],grayscale:[{grayscale:["",L,O,M]}],"hue-rotate":[{"hue-rotate":[L,O,M]}],invert:[{invert:["",L,O,M]}],saturate:[{saturate:[L,O,M]}],sepia:[{sepia:["",L,O,M]}],"backdrop-filter":[{"backdrop-filter":["","none",O,M]}],"backdrop-blur":[{"backdrop-blur":Lu()}],"backdrop-brightness":[{"backdrop-brightness":[L,O,M]}],"backdrop-contrast":[{"backdrop-contrast":[L,O,M]}],"backdrop-grayscale":[{"backdrop-grayscale":["",L,O,M]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[L,O,M]}],"backdrop-invert":[{"backdrop-invert":["",L,O,M]}],"backdrop-opacity":[{"backdrop-opacity":[L,O,M]}],"backdrop-saturate":[{"backdrop-saturate":[L,O,M]}],"backdrop-sepia":[{"backdrop-sepia":["",L,O,M]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":z()}],"border-spacing-x":[{"border-spacing-x":z()}],"border-spacing-y":[{"border-spacing-y":z()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",O,M]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[L,"initial",O,M]}],ease:[{ease:["linear","initial",g,O,M]}],delay:[{delay:[L,O,M]}],animate:[{animate:["none",m,O,M]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[S,O,M]}],"perspective-origin":[{"perspective-origin":A()}],rotate:[{rotate:Za()}],"rotate-x":[{"rotate-x":Za()}],"rotate-y":[{"rotate-y":Za()}],"rotate-z":[{"rotate-z":Za()}],scale:[{scale:Ka()}],"scale-x":[{"scale-x":Ka()}],"scale-y":[{"scale-y":Ka()}],"scale-z":[{"scale-z":Ka()}],"scale-3d":["scale-3d"],skew:[{skew:Hr()}],"skew-x":[{"skew-x":Hr()}],"skew-y":[{"skew-y":Hr()}],transform:[{transform:[O,M,"","none","gpu","cpu"]}],"transform-origin":[{origin:A()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:Ja()}],"translate-x":[{"translate-x":Ja()}],"translate-y":[{"translate-y":Ja()}],"translate-z":[{"translate-z":Ja()}],"translate-none":["translate-none"],accent:[{accent:N()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:N()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",O,M]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":z()}],"scroll-mx":[{"scroll-mx":z()}],"scroll-my":[{"scroll-my":z()}],"scroll-ms":[{"scroll-ms":z()}],"scroll-me":[{"scroll-me":z()}],"scroll-mt":[{"scroll-mt":z()}],"scroll-mr":[{"scroll-mr":z()}],"scroll-mb":[{"scroll-mb":z()}],"scroll-ml":[{"scroll-ml":z()}],"scroll-p":[{"scroll-p":z()}],"scroll-px":[{"scroll-px":z()}],"scroll-py":[{"scroll-py":z()}],"scroll-ps":[{"scroll-ps":z()}],"scroll-pe":[{"scroll-pe":z()}],"scroll-pt":[{"scroll-pt":z()}],"scroll-pr":[{"scroll-pr":z()}],"scroll-pb":[{"scroll-pb":z()}],"scroll-pl":[{"scroll-pl":z()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",O,M]}],fill:[{fill:["none",...N()]}],"stroke-w":[{stroke:[L,Jl,wn,zo]}],stroke:[{stroke:["none",...N()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},hm=fb(Mb);function Xa(...e){return hm(Du(e))}const Ob=em("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function sr({className:e,variant:t,size:n,asChild:l=!1,...a}){const i=l?I0:"button";return s.jsx(i,{"data-slot":"button",className:Xa(Ob({variant:t,size:n,className:e})),...a})}function mm({className:e,...t}){return s.jsx("textarea",{"data-slot":"textarea",className:Xa("resize-none border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-input-background px-3 py-2 text-base transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),...t})}function Uu({className:e,...t}){return s.jsx("div",{"data-slot":"card",className:Xa("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Db=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,l)=>l?l.toUpperCase():n.toLowerCase()),Df=e=>{const t=Db(e);return t.charAt(0).toUpperCase()+t.slice(1)},gm=(...e)=>e.filter((t,n,l)=>!!t&&t.trim()!==""&&l.indexOf(t)===n).join(" ").trim(),kb=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ub={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=y.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:l,className:a="",children:i,iconNode:r,...o},c)=>y.createElement("svg",{ref:c,...Ub,width:t,height:t,stroke:e,strokeWidth:l?Number(n)*24/Number(t):n,className:gm("lucide",a),...!i&&!kb(o)&&{"aria-hidden":"true"},...o},[...r.map(([u,d])=>y.createElement(u,d)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=(e,t)=>{const n=y.forwardRef(({className:l,...a},i)=>y.createElement(Hb,{ref:i,iconNode:t,className:gm(`lucide-${Rb(Df(e))}`,`lucide-${e}`,l),...a}));return n.displayName=Df(e),n};/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],vm=Ce("activity",Bb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],pm=Ce("arrow-left",Yb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],qb=Ce("arrow-right",Lb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]],Xb=Ce("brain",Gb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Qb=Ce("circle-check-big",Vb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zb=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Kb=Ce("circle-check",Zb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jb=[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]],$b=Ce("clipboard-list",Jb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Fb=Ce("clock",Wb);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=[["path",{d:"M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",key:"1sd12s"}]],Pb=Ce("message-circle",Ib);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],ym=Ce("message-square",e1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=[["path",{d:"M12 19v3",key:"npa21l"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["rect",{x:"9",y:"2",width:"6",height:"13",rx:"3",key:"s6n7sd"}]],n1=Ce("mic",t1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],a1=Ce("send",l1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],r1=Ce("star",i1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]],bm=Ce("trending-up",o1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],u1=Ce("triangle-alert",c1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],f1=Ce("users",s1);/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]],h1=Ce("workflow",d1);function m1(e){const t=g1(e),n=y.forwardRef((l,a)=>{const{children:i,...r}=l,o=y.Children.toArray(i),c=o.find(p1);if(c){const u=c.props.children,d=o.map(h=>h===c?y.Children.count(u)>1?y.Children.only(null):y.isValidElement(u)?u.props.children:null:h);return s.jsx(t,{...r,ref:a,children:y.isValidElement(u)?y.cloneElement(u,void 0,d):null})}return s.jsx(t,{...r,ref:a,children:i})});return n.displayName=`${e}.Slot`,n}function g1(e){const t=y.forwardRef((n,l)=>{const{children:a,...i}=n;if(y.isValidElement(a)){const r=b1(a),o=y1(i,a.props);return a.type!==y.Fragment&&(o.ref=l?Ru(l,r):r),y.cloneElement(a,o)}return y.Children.count(a)>1?y.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var v1=Symbol("radix.slottable");function p1(e){return y.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===v1}function y1(e,t){const n={...t};for(const l in t){const a=e[l],i=t[l];/^on[A-Z]/.test(l)?a&&i?n[l]=(...o)=>{const c=i(...o);return a(...o),c}:a&&(n[l]=a):l==="style"?n[l]={...a,...i}:l==="className"&&(n[l]=[a,i].filter(Boolean).join(" "))}return{...e,...n}}function b1(e){var l,a;let t=(l=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:l.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var x1=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Va=x1.reduce((e,t)=>{const n=m1(`Primitive.${t}`),l=y.forwardRef((a,i)=>{const{asChild:r,...o}=a,c=r?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),s.jsx(c,{...o,ref:i})});return l.displayName=`Primitive.${t}`,{...e,[t]:l}},{}),jc=globalThis!=null&&globalThis.document?y.useLayoutEffect:()=>{};function w1(e,t){return y.useReducer((n,l)=>t[n][l]??n,e)}var Qa=e=>{const{present:t,children:n}=e,l=S1(t),a=typeof n=="function"?n({present:l.isPresent}):y.Children.only(n),i=Qn(l.ref,E1(a));return typeof n=="function"||l.isPresent?y.cloneElement(a,{ref:i}):null};Qa.displayName="Presence";function S1(e){const[t,n]=y.useState(),l=y.useRef(null),a=y.useRef(e),i=y.useRef("none"),r=e?"mounted":"unmounted",[o,c]=w1(r,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return y.useEffect(()=>{const u=hi(l.current);i.current=o==="mounted"?u:"none"},[o]),jc(()=>{const u=l.current,d=a.current;if(d!==e){const f=i.current,v=hi(u);e?c("MOUNT"):v==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(d&&f!==v?"ANIMATION_OUT":"UNMOUNT"),a.current=e}},[e,c]),jc(()=>{if(t){let u;const d=t.ownerDocument.defaultView??window,h=v=>{const S=hi(l.current).includes(CSS.escape(v.animationName));if(v.target===t&&S&&(c("ANIMATION_END"),!a.current)){const E=t.style.animationFillMode;t.style.animationFillMode="forwards",u=d.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=E)})}},f=v=>{v.target===t&&(i.current=hi(l.current))};return t.addEventListener("animationstart",f),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{d.clearTimeout(u),t.removeEventListener("animationstart",f),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(o),ref:y.useCallback(u=>{l.current=u?getComputedStyle(u):null,n(u)},[])}}function hi(e){return(e==null?void 0:e.animationName)||"none"}function E1(e){var l,a;let t=(l=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:l.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(a=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:a.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function z1(e,t=[]){let n=[];function l(i,r){const o=y.createContext(r),c=n.length;n=[...n,r];const u=h=>{var g;const{scope:f,children:v,...x}=h,S=((g=f==null?void 0:f[e])==null?void 0:g[c])||o,E=y.useMemo(()=>x,Object.values(x));return s.jsx(S.Provider,{value:E,children:v})};u.displayName=i+"Provider";function d(h,f){var S;const v=((S=f==null?void 0:f[e])==null?void 0:S[c])||o,x=y.useContext(v);if(x)return x;if(r!==void 0)return r;throw new Error(`\`${h}\` must be used within \`${i}\``)}return[u,d]}const a=()=>{const i=n.map(r=>y.createContext(r));return function(o){const c=(o==null?void 0:o[e])||i;return y.useMemo(()=>({[`__scope${e}`]:{...o,[e]:c}}),[o,c])}};return a.scopeName=e,[l,N1(a,...t)]}function N1(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const l=e.map(a=>({useScope:a(),scopeName:a.scopeName}));return function(i){const r=l.reduce((o,{useScope:c,scopeName:u})=>{const h=c(i)[`__scope${u}`];return{...o,...h}},{});return y.useMemo(()=>({[`__scope${t.scopeName}`]:r}),[r])}};return n.scopeName=t.scopeName,n}function An(e){const t=y.useRef(e);return y.useEffect(()=>{t.current=e}),y.useMemo(()=>(...n)=>{var l;return(l=t.current)==null?void 0:l.call(t,...n)},[])}var A1=y.createContext(void 0);function j1(e){const t=y.useContext(A1);return e||t||"ltr"}function T1(e,[t,n]){return Math.min(n,Math.max(t,e))}function On(e,t,{checkForDefaultPrevented:n=!0}={}){return function(a){if(e==null||e(a),n===!1||!a.defaultPrevented)return t==null?void 0:t(a)}}function _1(e,t){return y.useReducer((n,l)=>t[n][l]??n,e)}var Hu="ScrollArea",[xm,sx]=z1(Hu),[C1,st]=xm(Hu),wm=y.forwardRef((e,t)=>{const{__scopeScrollArea:n,type:l="hover",dir:a,scrollHideDelay:i=600,...r}=e,[o,c]=y.useState(null),[u,d]=y.useState(null),[h,f]=y.useState(null),[v,x]=y.useState(null),[S,E]=y.useState(null),[g,m]=y.useState(0),[p,b]=y.useState(0),[A,R]=y.useState(!1),[j,z]=y.useState(!1),C=Qn(t,k=>c(k)),T=j1(a);return s.jsx(C1,{scope:n,type:l,dir:T,scrollHideDelay:i,scrollArea:o,viewport:u,onViewportChange:d,content:h,onContentChange:f,scrollbarX:v,onScrollbarXChange:x,scrollbarXEnabled:A,onScrollbarXEnabledChange:R,scrollbarY:S,onScrollbarYChange:E,scrollbarYEnabled:j,onScrollbarYEnabledChange:z,onCornerWidthChange:m,onCornerHeightChange:b,children:s.jsx(Va.div,{dir:T,...r,ref:C,style:{position:"relative","--radix-scroll-area-corner-width":g+"px","--radix-scroll-area-corner-height":p+"px",...e.style}})})});wm.displayName=Hu;var Sm="ScrollAreaViewport",Em=y.forwardRef((e,t)=>{const{__scopeScrollArea:n,children:l,nonce:a,...i}=e,r=st(Sm,n),o=y.useRef(null),c=Qn(t,o,r.onViewportChange);return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:a}),s.jsx(Va.div,{"data-radix-scroll-area-viewport":"",...i,ref:c,style:{overflowX:r.scrollbarXEnabled?"scroll":"hidden",overflowY:r.scrollbarYEnabled?"scroll":"hidden",...e.style},children:s.jsx("div",{ref:r.onContentChange,style:{minWidth:"100%",display:"table"},children:l})})]})});Em.displayName=Sm;var St="ScrollAreaScrollbar",zm=y.forwardRef((e,t)=>{const{forceMount:n,...l}=e,a=st(St,e.__scopeScrollArea),{onScrollbarXEnabledChange:i,onScrollbarYEnabledChange:r}=a,o=e.orientation==="horizontal";return y.useEffect(()=>(o?i(!0):r(!0),()=>{o?i(!1):r(!1)}),[o,i,r]),a.type==="hover"?s.jsx(M1,{...l,ref:t,forceMount:n}):a.type==="scroll"?s.jsx(O1,{...l,ref:t,forceMount:n}):a.type==="auto"?s.jsx(Nm,{...l,ref:t,forceMount:n}):a.type==="always"?s.jsx(Bu,{...l,ref:t}):null});zm.displayName=St;var M1=y.forwardRef((e,t)=>{const{forceMount:n,...l}=e,a=st(St,e.__scopeScrollArea),[i,r]=y.useState(!1);return y.useEffect(()=>{const o=a.scrollArea;let c=0;if(o){const u=()=>{window.clearTimeout(c),r(!0)},d=()=>{c=window.setTimeout(()=>r(!1),a.scrollHideDelay)};return o.addEventListener("pointerenter",u),o.addEventListener("pointerleave",d),()=>{window.clearTimeout(c),o.removeEventListener("pointerenter",u),o.removeEventListener("pointerleave",d)}}},[a.scrollArea,a.scrollHideDelay]),s.jsx(Qa,{present:n||i,children:s.jsx(Nm,{"data-state":i?"visible":"hidden",...l,ref:t})})}),O1=y.forwardRef((e,t)=>{const{forceMount:n,...l}=e,a=st(St,e.__scopeScrollArea),i=e.orientation==="horizontal",r=Ur(()=>c("SCROLL_END"),100),[o,c]=_1("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return y.useEffect(()=>{if(o==="idle"){const u=window.setTimeout(()=>c("HIDE"),a.scrollHideDelay);return()=>window.clearTimeout(u)}},[o,a.scrollHideDelay,c]),y.useEffect(()=>{const u=a.viewport,d=i?"scrollLeft":"scrollTop";if(u){let h=u[d];const f=()=>{const v=u[d];h!==v&&(c("SCROLL"),r()),h=v};return u.addEventListener("scroll",f),()=>u.removeEventListener("scroll",f)}},[a.viewport,i,c,r]),s.jsx(Qa,{present:n||o!=="hidden",children:s.jsx(Bu,{"data-state":o==="hidden"?"hidden":"visible",...l,ref:t,onPointerEnter:On(e.onPointerEnter,()=>c("POINTER_ENTER")),onPointerLeave:On(e.onPointerLeave,()=>c("POINTER_LEAVE"))})})}),Nm=y.forwardRef((e,t)=>{const n=st(St,e.__scopeScrollArea),{forceMount:l,...a}=e,[i,r]=y.useState(!1),o=e.orientation==="horizontal",c=Ur(()=>{if(n.viewport){const u=n.viewport.offsetWidth<n.viewport.scrollWidth,d=n.viewport.offsetHeight<n.viewport.scrollHeight;r(o?u:d)}},10);return Tl(n.viewport,c),Tl(n.content,c),s.jsx(Qa,{present:l||i,children:s.jsx(Bu,{"data-state":i?"visible":"hidden",...a,ref:t})})}),Bu=y.forwardRef((e,t)=>{const{orientation:n="vertical",...l}=e,a=st(St,e.__scopeScrollArea),i=y.useRef(null),r=y.useRef(0),[o,c]=y.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),u=Cm(o.viewport,o.content),d={...l,sizes:o,onSizesChange:c,hasThumb:u>0&&u<1,onThumbChange:f=>i.current=f,onThumbPointerUp:()=>r.current=0,onThumbPointerDown:f=>r.current=f};function h(f,v){return B1(f,r.current,o,v)}return n==="horizontal"?s.jsx(R1,{...d,ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){const f=a.viewport.scrollLeft,v=kf(f,o,a.dir);i.current.style.transform=`translate3d(${v}px, 0, 0)`}},onWheelScroll:f=>{a.viewport&&(a.viewport.scrollLeft=f)},onDragScroll:f=>{a.viewport&&(a.viewport.scrollLeft=h(f,a.dir))}}):n==="vertical"?s.jsx(D1,{...d,ref:t,onThumbPositionChange:()=>{if(a.viewport&&i.current){const f=a.viewport.scrollTop,v=kf(f,o);i.current.style.transform=`translate3d(0, ${v}px, 0)`}},onWheelScroll:f=>{a.viewport&&(a.viewport.scrollTop=f)},onDragScroll:f=>{a.viewport&&(a.viewport.scrollTop=h(f))}}):null}),R1=y.forwardRef((e,t)=>{const{sizes:n,onSizesChange:l,...a}=e,i=st(St,e.__scopeScrollArea),[r,o]=y.useState(),c=y.useRef(null),u=Qn(t,c,i.onScrollbarXChange);return y.useEffect(()=>{c.current&&o(getComputedStyle(c.current))},[c]),s.jsx(jm,{"data-orientation":"horizontal",...a,ref:u,sizes:n,style:{bottom:0,left:i.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:i.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":kr(n)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.x),onDragScroll:d=>e.onDragScroll(d.x),onWheelScroll:(d,h)=>{if(i.viewport){const f=i.viewport.scrollLeft+d.deltaX;e.onWheelScroll(f),Om(f,h)&&d.preventDefault()}},onResize:()=>{c.current&&i.viewport&&r&&l({content:i.viewport.scrollWidth,viewport:i.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:dr(r.paddingLeft),paddingEnd:dr(r.paddingRight)}})}})}),D1=y.forwardRef((e,t)=>{const{sizes:n,onSizesChange:l,...a}=e,i=st(St,e.__scopeScrollArea),[r,o]=y.useState(),c=y.useRef(null),u=Qn(t,c,i.onScrollbarYChange);return y.useEffect(()=>{c.current&&o(getComputedStyle(c.current))},[c]),s.jsx(jm,{"data-orientation":"vertical",...a,ref:u,sizes:n,style:{top:0,right:i.dir==="ltr"?0:void 0,left:i.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":kr(n)+"px",...e.style},onThumbPointerDown:d=>e.onThumbPointerDown(d.y),onDragScroll:d=>e.onDragScroll(d.y),onWheelScroll:(d,h)=>{if(i.viewport){const f=i.viewport.scrollTop+d.deltaY;e.onWheelScroll(f),Om(f,h)&&d.preventDefault()}},onResize:()=>{c.current&&i.viewport&&r&&l({content:i.viewport.scrollHeight,viewport:i.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:dr(r.paddingTop),paddingEnd:dr(r.paddingBottom)}})}})}),[k1,Am]=xm(St),jm=y.forwardRef((e,t)=>{const{__scopeScrollArea:n,sizes:l,hasThumb:a,onThumbChange:i,onThumbPointerUp:r,onThumbPointerDown:o,onThumbPositionChange:c,onDragScroll:u,onWheelScroll:d,onResize:h,...f}=e,v=st(St,n),[x,S]=y.useState(null),E=Qn(t,C=>S(C)),g=y.useRef(null),m=y.useRef(""),p=v.viewport,b=l.content-l.viewport,A=An(d),R=An(c),j=Ur(h,10);function z(C){if(g.current){const T=C.clientX-g.current.left,k=C.clientY-g.current.top;u({x:T,y:k})}}return y.useEffect(()=>{const C=T=>{const k=T.target;(x==null?void 0:x.contains(k))&&A(T,b)};return document.addEventListener("wheel",C,{passive:!1}),()=>document.removeEventListener("wheel",C,{passive:!1})},[p,x,b,A]),y.useEffect(R,[l,R]),Tl(x,j),Tl(v.content,j),s.jsx(k1,{scope:n,scrollbar:x,hasThumb:a,onThumbChange:An(i),onThumbPointerUp:An(r),onThumbPositionChange:R,onThumbPointerDown:An(o),children:s.jsx(Va.div,{...f,ref:E,style:{position:"absolute",...f.style},onPointerDown:On(e.onPointerDown,C=>{C.button===0&&(C.target.setPointerCapture(C.pointerId),g.current=x.getBoundingClientRect(),m.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",v.viewport&&(v.viewport.style.scrollBehavior="auto"),z(C))}),onPointerMove:On(e.onPointerMove,z),onPointerUp:On(e.onPointerUp,C=>{const T=C.target;T.hasPointerCapture(C.pointerId)&&T.releasePointerCapture(C.pointerId),document.body.style.webkitUserSelect=m.current,v.viewport&&(v.viewport.style.scrollBehavior=""),g.current=null})})})}),fr="ScrollAreaThumb",Tm=y.forwardRef((e,t)=>{const{forceMount:n,...l}=e,a=Am(fr,e.__scopeScrollArea);return s.jsx(Qa,{present:n||a.hasThumb,children:s.jsx(U1,{ref:t,...l})})}),U1=y.forwardRef((e,t)=>{const{__scopeScrollArea:n,style:l,...a}=e,i=st(fr,n),r=Am(fr,n),{onThumbPositionChange:o}=r,c=Qn(t,h=>r.onThumbChange(h)),u=y.useRef(void 0),d=Ur(()=>{u.current&&(u.current(),u.current=void 0)},100);return y.useEffect(()=>{const h=i.viewport;if(h){const f=()=>{if(d(),!u.current){const v=Y1(h,o);u.current=v,o()}};return o(),h.addEventListener("scroll",f),()=>h.removeEventListener("scroll",f)}},[i.viewport,d,o]),s.jsx(Va.div,{"data-state":r.hasThumb?"visible":"hidden",...a,ref:c,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...l},onPointerDownCapture:On(e.onPointerDownCapture,h=>{const v=h.target.getBoundingClientRect(),x=h.clientX-v.left,S=h.clientY-v.top;r.onThumbPointerDown({x,y:S})}),onPointerUp:On(e.onPointerUp,r.onThumbPointerUp)})});Tm.displayName=fr;var Yu="ScrollAreaCorner",_m=y.forwardRef((e,t)=>{const n=st(Yu,e.__scopeScrollArea),l=!!(n.scrollbarX&&n.scrollbarY);return n.type!=="scroll"&&l?s.jsx(H1,{...e,ref:t}):null});_m.displayName=Yu;var H1=y.forwardRef((e,t)=>{const{__scopeScrollArea:n,...l}=e,a=st(Yu,n),[i,r]=y.useState(0),[o,c]=y.useState(0),u=!!(i&&o);return Tl(a.scrollbarX,()=>{var h;const d=((h=a.scrollbarX)==null?void 0:h.offsetHeight)||0;a.onCornerHeightChange(d),c(d)}),Tl(a.scrollbarY,()=>{var h;const d=((h=a.scrollbarY)==null?void 0:h.offsetWidth)||0;a.onCornerWidthChange(d),r(d)}),u?s.jsx(Va.div,{...l,ref:t,style:{width:i,height:o,position:"absolute",right:a.dir==="ltr"?0:void 0,left:a.dir==="rtl"?0:void 0,bottom:0,...e.style}}):null});function dr(e){return e?parseInt(e,10):0}function Cm(e,t){const n=e/t;return isNaN(n)?0:n}function kr(e){const t=Cm(e.viewport,e.content),n=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,l=(e.scrollbar.size-n)*t;return Math.max(l,18)}function B1(e,t,n,l="ltr"){const a=kr(n),i=a/2,r=t||i,o=a-r,c=n.scrollbar.paddingStart+r,u=n.scrollbar.size-n.scrollbar.paddingEnd-o,d=n.content-n.viewport,h=l==="ltr"?[0,d]:[d*-1,0];return Mm([c,u],h)(e)}function kf(e,t,n="ltr"){const l=kr(t),a=t.scrollbar.paddingStart+t.scrollbar.paddingEnd,i=t.scrollbar.size-a,r=t.content-t.viewport,o=i-l,c=n==="ltr"?[0,r]:[r*-1,0],u=T1(e,c);return Mm([0,r],[0,o])(u)}function Mm(e,t){return n=>{if(e[0]===e[1]||t[0]===t[1])return t[0];const l=(t[1]-t[0])/(e[1]-e[0]);return t[0]+l*(n-e[0])}}function Om(e,t){return e>0&&e<t}var Y1=(e,t=()=>{})=>{let n={left:e.scrollLeft,top:e.scrollTop},l=0;return function a(){const i={left:e.scrollLeft,top:e.scrollTop},r=n.left!==i.left,o=n.top!==i.top;(r||o)&&t(),n=i,l=window.requestAnimationFrame(a)}(),()=>window.cancelAnimationFrame(l)};function Ur(e,t){const n=An(e),l=y.useRef(0);return y.useEffect(()=>()=>window.clearTimeout(l.current),[]),y.useCallback(()=>{window.clearTimeout(l.current),l.current=window.setTimeout(n,t)},[n,t])}function Tl(e,t){const n=An(t);jc(()=>{let l=0;if(e){const a=new ResizeObserver(()=>{cancelAnimationFrame(l),l=window.requestAnimationFrame(n)});return a.observe(e),()=>{window.cancelAnimationFrame(l),a.unobserve(e)}}},[e,n])}var L1=wm,q1=Em,G1=_m;function X1({className:e,children:t,...n}){return s.jsxs(L1,{"data-slot":"scroll-area",className:Xa("relative",e),...n,children:[s.jsx(q1,{"data-slot":"scroll-area-viewport",className:"focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1",children:t}),s.jsx(V1,{}),s.jsx(G1,{})]})}function V1({className:e,orientation:t="vertical",...n}){return s.jsx(zm,{"data-slot":"scroll-area-scrollbar",orientation:t,className:Xa("flex touch-none p-px transition-colors select-none",t==="vertical"&&"h-full w-2.5 border-l border-l-transparent",t==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent",e),...n,children:s.jsx(Tm,{"data-slot":"scroll-area-thumb",className:"bg-border relative flex-1 rounded-full"})})}const Q1=e=>`${e.title}: ${e.patientDetails} presenting with ${e.chiefComplaint}. Vitals: ${e.vitals}. Initial assessment: ${e.initialAssessment}.`;function Z1({caseInfo:e,onSubmit:t,onBack:n,error:l,isLoading:a}){const[i,r]=y.useState(()=>Q1(e)),o=()=>{i.trim()&&t(i)};return s.jsx("div",{className:"min-h-screen p-8",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsxs(sr,{variant:"ghost",onClick:n,className:"mb-6 text-blue-700 hover:text-blue-900 hover:bg-blue-50",children:[s.jsx(pm,{className:"w-4 h-4 mr-2"}),"Back to Mode Selection"]}),s.jsxs("div",{className:"mb-8",children:[s.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[s.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center",children:s.jsx($b,{className:"w-6 h-6 text-blue-600"})}),s.jsx("h1",{className:"text-blue-900",children:"Nurse Case Presentation"})]}),s.jsx("p",{className:"text-blue-700/70",children:"As a nurse, you have a patient case to present. Share your clinical assessment and reasoning with the AI medical coach. This will be the starting point for your coaching session to enhance your triage and presentation skills."})]}),s.jsxs(Uu,{className:"p-8 border-2 border-blue-100",children:[s.jsx("h3",{className:"text-blue-900 mb-4",children:"Your Clinical Presentation"}),s.jsx("p",{className:"text-blue-700/70 mb-4",children:"Present your case as you would to a physician or during handoff. Include your assessment, working diagnosis, clinical reasoning, and proposed plan."}),s.jsx(mm,{value:i,onChange:c=>r(c.target.value),placeholder:"Begin your presentation here... (e.g., 'I have a 45-year-old male presenting with chest pain. My assessment is...')",className:"min-h-[200px] mb-4 border-blue-200 focus:border-blue-400"}),l&&s.jsx("div",{className:"mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm",children:l}),s.jsx(sr,{onClick:o,disabled:!i.trim()||a,className:"w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50",children:a?"Starting session...":"Continue to Coaching Session"})]})]})})}const K1={focusedInformation:"Focused, Relevant Information",workingDiagnosis:"Clear Working Diagnosis",clinicalReasoning:"Logical Organization + Reasoning",differentialDiagnosis:"Differential Diagnosis",conciseness:"Conciseness + Efficiency",diagnosticWorkup:"Diagnostic Workup Plan",managementPlan:"Management Plan + Disposition",hypothesisDriven:"Hypothesis-Driven Inquiry",synthesis:"Synthesis Ability"},J1={focusedInformation:"Only includes details supporting diagnosis, omits extraneous info",workingDiagnosis:"States hypothesis early, justifies with structured data",clinicalReasoning:"Explains symptom → reasoning → diagnosis connections",differentialDiagnosis:"Provides prioritized alternative diagnoses logically",conciseness:"Short, well-structured, purposeful delivery",diagnosticWorkup:"Identifies prioritized tests with clear rationale",managementPlan:"Ordered, justified management linked to diagnosis",hypothesisDriven:"Shows clear hypothesis, knows what information matters",synthesis:"Provides summary statements, distills key clues"};function $1({metrics:e}){const t=i=>i>=80?"text-green-600":i>=60?"text-yellow-600":"text-orange-600",n=i=>i>=80?"bg-green-500":i>=60?"bg-yellow-500":"bg-orange-500",l=Math.round(Object.values(e).reduce((i,r)=>i+r,0)/Object.keys(e).length),a=i=>i==="focusedInformation";return s.jsxs("div",{className:"w-96 bg-white border-l border-blue-100 p-6 overflow-y-auto",children:[s.jsxs("div",{className:"mb-6",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[s.jsx(bm,{className:"w-5 h-5 text-blue-600"}),s.jsx("h3",{className:"text-blue-900",children:"Performance Metrics"})]}),s.jsx("p",{className:"text-blue-700/70",children:"Real-time assessment of your clinical presentation skills"})]}),s.jsxs(Uu,{className:"p-4 mb-6 bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200",children:[s.jsx("p",{className:"text-blue-700 mb-2",children:"Overall Score"}),s.jsxs("div",{className:"flex items-end gap-2",children:[s.jsxs("span",{className:`text-blue-900 ${t(l)}`,children:[l,"%"]}),l>=80&&s.jsx(Kb,{className:"w-5 h-5 text-green-600 mb-1"})]})]}),s.jsx("div",{className:"space-y-5",children:Object.keys(e).map((i,r)=>s.jsxs("div",{className:a(i)?"p-3 bg-blue-50 rounded-lg border-2 border-blue-200":"",children:[s.jsxs("div",{className:"flex items-start justify-between mb-2 gap-2",children:[s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[s.jsxs("p",{className:"text-blue-900",children:[r+1,". ",K1[i]]}),a(i)&&s.jsx(r1,{className:"w-4 h-4 text-blue-600 fill-blue-600"})]}),s.jsx("p",{className:"text-blue-700/60",children:J1[i]})]}),s.jsxs("span",{className:`flex-shrink-0 ${t(e[i])}`,children:[e[i],"%"]})]}),s.jsx("div",{className:"relative h-2 bg-blue-100 rounded-full overflow-hidden",children:s.jsx("div",{className:`absolute top-0 left-0 h-full ${n(e[i])} transition-all duration-500 ease-out`,style:{width:`${e[i]}%`}})})]},i))}),s.jsx("div",{className:"mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100",children:s.jsx("p",{className:"text-blue-800",children:"💡 Metrics update dynamically as the AI coach evaluates your responses"})})]})}const mi="https://attending-physician.onrender.com".replace(/\/$/,"")??"",No="ap-chat-session",W1={title:"Emergency Department Presentation",patientDetails:"45-year-old male, John Smith",chiefComplaint:"Chest pain and shortness of breath for 2 hours",vitals:"BP: 145/92, HR: 105, RR: 22, Temp: 37.2°C, SpO2: 94% on room air",initialAssessment:"Patient appears anxious, diaphoretic, clutching chest"};function F1(){const e=!!mi,[t,n]=y.useState("case-presentation"),[l,a]=y.useState(()=>localStorage.getItem(No)??""),[i,r]=y.useState([]),[o,c]=y.useState(""),[u,d]=y.useState(!1),[h,f]=y.useState(!1),[v,x]=y.useState(""),[S,E]=y.useState({focusedInformation:0,workingDiagnosis:0,clinicalReasoning:0,differentialDiagnosis:0,conciseness:0,diagnosticWorkup:0,managementPlan:0,hypothesisDriven:0,synthesis:0}),[g,m]=y.useState(!1),p=y.useRef(null),b=()=>{var T;(T=p.current)==null||T.scrollIntoView({behavior:"smooth"})};y.useEffect(()=>{b()},[i]),y.useEffect(()=>{!l||!e||A(l)},[l,e]);const A=async T=>{if(!(!e||!T)){d(!0);try{const k=await fetch(`${mi}/api/chat/sessions/${T}`);if(!k.ok){if(k.status===404)throw C(),new Error("Session expired. Start a new one to continue.");const ze=await k.json().catch(()=>({}));throw new Error((ze==null?void 0:ze.detail)??"Unable to load session.")}const Q=await k.json();R(Q),x("")}catch(k){x(k.message)}finally{d(!1)}}},R=T=>{var Me,ke,_,U,N,I,re,gt,ft;const k=T.state;if(!k)return;const Q=[];if(k.initial_evaluation&&Q.push({id:"initial-eval",role:"assistant",variant:"initial",content:k.initial_evaluation.overall_assessment??"Let's explore your clinical reasoning.",timestamp:new Date,meta:{priorityGaps:k.initial_evaluation.priority_gaps}}),(k.conversation_history??[]).forEach((D,te)=>{var Pe,Ll,se;Q.push({id:`assistant-question-${te}`,role:"assistant",variant:"question",content:D.question,timestamp:new Date,meta:{metricTarget:(Pe=D.question_obj)==null?void 0:Pe.metric_target,followUpHint:(Ll=D.question_obj)==null?void 0:Ll.follow_up_hint,acceptableCriteria:(se=D.question_obj)==null?void 0:se.acceptable_criteria}}),D.answer&&Q.push({id:`user-answer-${te}`,role:"user",variant:"answer",content:D.answer,timestamp:new Date}),D.evaluation&&Q.push({id:`assistant-eval-${te}`,role:"assistant",variant:"evaluation",content:D.evaluation.feedback,timestamp:new Date,meta:{metricTarget:D.evaluation.metric,status:D.evaluation.status,strengths:D.evaluation.strengths,weaknesses:D.evaluation.weaknesses,nextAction:D.evaluation.next_action}})}),r(Q),k.metrics_status){const D=k.metrics_status;E({focusedInformation:(Me=D.focused_relevant_information)!=null&&Me.confidence?D.focused_relevant_information.confidence*100:0,workingDiagnosis:(ke=D.clear_working_diagnosis)!=null&&ke.confidence?D.clear_working_diagnosis.confidence*100:0,clinicalReasoning:(_=D.logical_organization_reasoning)!=null&&_.confidence?D.logical_organization_reasoning.confidence*100:0,differentialDiagnosis:(U=D.differential_diagnosis)!=null&&U.confidence?D.differential_diagnosis.confidence*100:0,conciseness:(N=D.conciseness_efficiency)!=null&&N.confidence?D.conciseness_efficiency.confidence*100:0,diagnosticWorkup:(I=D.diagnostic_workup_plan)!=null&&I.confidence?D.diagnostic_workup_plan.confidence*100:0,managementPlan:(re=D.management_plan_disposition)!=null&&re.confidence?D.management_plan_disposition.confidence*100:0,hypothesisDriven:(gt=D.hypothesis_driven_inquiry)!=null&&gt.confidence?D.hypothesis_driven_inquiry.confidence*100:0,synthesis:(ft=D.synthesis_ability)!=null&&ft.confidence?D.synthesis_ability.confidence*100:0})}m(T.status!=="active")},j=async T=>{if(!e){x("Set VITE_API_BASE_URL to your FastAPI deployment first.");return}if(!T.trim()){x("Please enter a case presentation.");return}if(T.trim().length<40){x("Please provide at least 40 characters so the coach can evaluate the case.");return}d(!0),x("");try{const k=await fetch(`${mi}/api/chat/sessions`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({presentation:T})}),Q=await k.json().catch(()=>({}));if(!k.ok)throw new Error((Q==null?void 0:Q.detail)??"Unable to start a session.");localStorage.setItem(No,Q.session_id),a(Q.session_id),n("interaction")}catch(k){x(k.message??"Failed to reach the backend.")}finally{d(!1)}},z=async()=>{var k,Q;if(!l){x("Start a session first.");return}if(!o.trim()){x("Please enter your response.");return}const T={id:`user-${Date.now()}`,role:"user",content:o,timestamp:new Date};r(ze=>[...ze,T]),c(""),f(!0),x("");try{const ze=await fetch(`${mi}/api/chat/sessions/${l}/messages`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({answer:o})}),Me=await ze.json().catch(()=>({}));if(!ze.ok)throw new Error((Me==null?void 0:Me.detail)??"Unable to process that answer.");await A(l),((Q=(k=Me==null?void 0:Me.response)==null?void 0:k.data)==null?void 0:Q.type)==="session_complete"&&m(!0)}catch(ze){x(ze.message??"Something went wrong.")}finally{f(!1)}},C=()=>{a(""),localStorage.removeItem(No),r([]),c(""),E({focusedInformation:0,workingDiagnosis:0,clinicalReasoning:0,differentialDiagnosis:0,conciseness:0,diagnosticWorkup:0,managementPlan:0,hypothesisDriven:0,synthesis:0}),m(!1),n("case-presentation"),x("")};return s.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50",children:[t==="case-presentation"&&s.jsx(Z1,{caseInfo:W1,onSubmit:j,onBack:()=>window.location.href="/",error:v,isLoading:u}),t==="interaction"&&s.jsxs("div",{className:"flex h-screen",children:[s.jsxs("div",{className:"flex-1 flex flex-col",children:[s.jsxs("div",{className:"bg-white border-b border-gray-200 p-4 flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsxs(Ou,{to:"/",className:"text-blue-600 hover:text-blue-700 flex items-center gap-2",children:[s.jsx(pm,{size:20}),"Back to Home"]}),s.jsxs("div",{children:[s.jsx("h1",{className:"text-xl font-semibold text-gray-900",children:"AI Medical Coach"}),s.jsx("p",{className:"text-sm text-gray-600",children:"Interactive Training Session"})]})]}),s.jsx(sr,{variant:"outline",onClick:C,children:"Reset Session"})]}),s.jsx(X1,{className:"flex-1 p-6",children:s.jsxs("div",{className:"max-w-4xl mx-auto space-y-4",children:[u&&i.length===0&&s.jsx("div",{className:"text-center text-gray-500",children:"Loading session..."}),i.map(T=>{var k;return s.jsx(Uu,{className:`p-4 ${T.role==="user"?"bg-blue-50 ml-12":"bg-gray-50 mr-12"}`,children:s.jsxs("div",{className:"flex items-start gap-3",children:[s.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold ${T.role==="user"?"bg-blue-600":"bg-gray-600"}`,children:T.role==="user"?"You":"AI"}),s.jsxs("div",{className:"flex-1",children:[s.jsxs("div",{className:"font-semibold text-sm mb-1",children:[T.role==="user"?"You":"AI Coach",((k=T.meta)==null?void 0:k.metricTarget)&&s.jsx("span",{className:"ml-2 text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded",children:T.meta.metricTarget})]}),s.jsx("p",{className:"text-gray-800",children:T.content})]})]})},T.id)}),h&&s.jsxs("div",{className:"flex items-center gap-2 text-gray-500",children:[s.jsxs("div",{className:"flex gap-1",children:[s.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce"}),s.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"}),s.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"})]}),s.jsx("span",{className:"text-sm",children:"AI is thinking..."})]}),s.jsx("div",{ref:p})]})}),s.jsx("div",{className:"bg-white border-t border-gray-200 p-4",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[v&&s.jsx("div",{className:"mb-3 p-3 bg-red-50 border border-red-200 rounded text-red-800 text-sm",children:v}),g?s.jsxs("div",{className:"text-center p-4 bg-green-50 border border-green-200 rounded",children:[s.jsx("p",{className:"text-green-800 font-semibold",children:"Session Complete!"}),s.jsx("p",{className:"text-sm text-green-700",children:'Check your metrics on the right. Click "Reset Session" to try another case.'})]}):s.jsxs(s.Fragment,{children:[s.jsx(mm,{value:o,onChange:T=>c(T.target.value),placeholder:"Type your response...",className:"min-h-[100px] resize-none",onKeyDown:T=>{T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),z())}}),s.jsxs("div",{className:"mt-3 flex justify-between items-center",children:[s.jsx("p",{className:"text-sm text-gray-500",children:"Press Enter to send, Shift+Enter for new line"}),s.jsxs(sr,{onClick:z,disabled:h||!o.trim(),children:[s.jsx(a1,{size:16,className:"mr-2"}),"Send"]})]})]})]})})]}),s.jsx("div",{className:"w-80 bg-white border-l border-gray-200 overflow-y-auto",children:s.jsx($1,{metrics:S})})]})]})}function Rm(...e){return hm(Du(e))}const I1=em("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9 rounded-md"}},defaultVariants:{variant:"default",size:"default"}});function hr({className:e,variant:t,size:n,asChild:l=!1,...a}){const i=l?I0:"button";return s.jsx(i,{"data-slot":"button",className:Rm(I1({variant:t,size:n,className:e})),...a})}function P1(){return s.jsx("header",{className:"sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200",children:s.jsx("div",{className:"container mx-auto px-4",children:s.jsxs("div",{className:"flex items-center justify-between h-16",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center",children:s.jsx(vm,{className:"h-6 w-6 text-white"})}),s.jsx("span",{className:"text-xl text-gray-900",children:"TriageAI Coach"})]}),s.jsxs("nav",{className:"hidden md:flex items-center gap-8",children:[s.jsx("a",{href:"#features",className:"text-gray-600 hover:text-gray-900 transition-colors",children:"Features"}),s.jsx("a",{href:"#how-it-works",className:"text-gray-600 hover:text-gray-900 transition-colors",children:"How It Works"}),s.jsx("a",{href:"#statistics",className:"text-gray-600 hover:text-gray-900 transition-colors",children:"Why It Matters"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(hr,{variant:"ghost",className:"hidden sm:flex",children:"Sign In"}),s.jsx(hr,{className:"bg-blue-600 hover:bg-blue-700 text-white",children:"Get Started"})]})]})})})}const ex="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg==";function Dm(e){const[t,n]=y.useState(!1),l=()=>{n(!0)},{src:a,alt:i,style:r,className:o,...c}=e;return t?s.jsx("div",{className:`inline-block bg-gray-100 text-center align-middle ${o??""}`,style:r,children:s.jsx("div",{className:"flex items-center justify-center w-full h-full",children:s.jsx("img",{src:ex,alt:"Error loading image",...c,"data-original-url":a})})}):s.jsx("img",{src:a,alt:i,className:o,style:r,...c,onError:l})}function tx(){return s.jsx("section",{className:"relative bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden",children:s.jsx("div",{className:"container mx-auto px-4 py-20 lg:py-28",children:s.jsxs("div",{className:"grid lg:grid-cols-2 gap-12 items-center",children:[s.jsxs("div",{className:"space-y-8",children:[s.jsxs("div",{className:"inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full",children:[s.jsx("span",{className:"w-2 h-2 bg-blue-500 rounded-full animate-pulse"}),s.jsx("span",{children:"AI-Powered Medical Training"})]}),s.jsx("h1",{className:"text-5xl lg:text-6xl text-gray-900",children:"Master Triage Skills with AI Coaching"}),s.jsx("p",{className:"text-xl text-gray-600 leading-relaxed",children:"Train nurses to become confident triage professionals through realistic case scenarios and personalized AI feedback. Voice and text interactions available."}),s.jsx("div",{className:"flex flex-col sm:flex-row gap-4",children:s.jsx(hr,{size:"lg",className:"bg-blue-600 hover:bg-blue-700 text-white px-8 py-6",asChild:!0,children:s.jsxs(Ou,{to:"/chat",children:["Start Training",s.jsx(ym,{className:"ml-2 h-5 w-5"})]})})}),s.jsxs("div",{className:"flex items-center gap-8 pt-4",children:[s.jsxs("div",{children:[s.jsx("div",{className:"text-3xl text-blue-600",children:"1000+"}),s.jsx("div",{className:"text-gray-600",children:"Nurses Trained"})]}),s.jsx("div",{className:"h-12 w-px bg-gray-300"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-3xl text-blue-600",children:"50+"}),s.jsx("div",{className:"text-gray-600",children:"Case Scenarios"})]}),s.jsx("div",{className:"h-12 w-px bg-gray-300"}),s.jsxs("div",{children:[s.jsx("div",{className:"text-3xl text-blue-600",children:"24/7"}),s.jsx("div",{className:"text-gray-600",children:"Available"})]})]})]}),s.jsxs("div",{className:"relative",children:[s.jsx("div",{className:"absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl opacity-20 blur-2xl"}),s.jsx("div",{className:"relative rounded-2xl overflow-hidden shadow-2xl",children:s.jsx(Dm,{src:"https://images.unsplash.com/photo-1517120026326-d87759a7b63b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwbnVyc2UlMjBob3NwaXRhbHxlbnwxfHx8fDE3NjMyNDMxNzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",alt:"Medical professional using technology",className:"w-full h-auto object-cover"})})]})]})})})}function Ao({className:e,...t}){return s.jsx("div",{"data-slot":"card",className:Rm("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",e),...t})}function nx(){return s.jsx("section",{className:"py-20 bg-gray-50",children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h2",{className:"text-4xl text-gray-900 mb-4",children:"The Healthcare Staffing Crisis"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Understaffing and lack of training contribute to critical issues in healthcare delivery. Our AI coaching platform helps address these challenges."})]}),s.jsxs("div",{className:"grid md:grid-cols-3 gap-8 max-w-6xl mx-auto",children:[s.jsx(Ao,{className:"p-8 bg-white border-red-100 hover:border-red-200 transition-all hover:shadow-lg",children:s.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[s.jsx("div",{className:"w-16 h-16 bg-red-100 rounded-full flex items-center justify-center",children:s.jsx(u1,{className:"h-8 w-8 text-red-600"})}),s.jsx("div",{className:"text-5xl text-red-600",children:"#3"}),s.jsx("h3",{className:"text-xl text-gray-900",children:"Leading Cause of Death"}),s.jsxs("p",{className:"text-gray-600",children:["Medical errors are the ",s.jsx("strong",{children:"third leading cause of death"})," in the United States, highlighting the critical need for better training."]})]})}),s.jsx(Ao,{className:"p-8 bg-white border-orange-100 hover:border-orange-200 transition-all hover:shadow-lg",children:s.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[s.jsx("div",{className:"w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center",children:s.jsx(f1,{className:"h-8 w-8 text-orange-600"})}),s.jsx("div",{className:"text-5xl text-orange-600",children:"~20%"}),s.jsx("h3",{className:"text-xl text-gray-900",children:"Hospitals Understaffed"}),s.jsxs("p",{className:"text-gray-600",children:["Approximately ",s.jsx("strong",{children:"one-fifth of hospitals"})," in the US are understaffed, putting immense pressure on existing healthcare workers."]})]})}),s.jsx(Ao,{className:"p-8 bg-white border-blue-100 hover:border-blue-200 transition-all hover:shadow-lg",children:s.jsxs("div",{className:"flex flex-col items-center text-center space-y-4",children:[s.jsx("div",{className:"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center",children:s.jsx(bm,{className:"h-8 w-8 text-blue-600"})}),s.jsx("div",{className:"text-5xl text-blue-600",children:"Solution"}),s.jsx("h3",{className:"text-xl text-gray-900",children:"AI-Powered Training"}),s.jsxs("p",{className:"text-gray-600",children:["Our platform provides ",s.jsx("strong",{children:"accessible, scalable training"})," to help nurses develop critical triage skills without adding to staffing burden."]})]})})]})]})})}function lx(){const e=[{icon:n1,title:"Voice-to-Voice Interaction",description:"Engage naturally with AI using voice commands, simulating real patient interactions.",color:"purple"},{icon:ym,title:"Text-Based Chat",description:"Prefer typing? Use our text interface for detailed case presentations and feedback.",color:"cyan"},{icon:Fb,title:"24/7 Availability",description:"Train anytime, anywhere. No scheduling conflicts or instructor availability issues.",color:"green"},{icon:Xb,title:"RAG-Powered Medical Knowledge",description:"Our chatbot uses Retrieval-Augmented Generation (RAG) grounded in verified medical sources and clinical guidelines.",color:"blue"},{icon:h1,title:"Agentic AI Model",description:"Powered by an agentic workflow with expert medical knowledge that dynamically reasons through complex scenarios and provides contextual feedback.",color:"orange"}],t={blue:"bg-blue-100 text-blue-600",purple:"bg-purple-100 text-purple-600",cyan:"bg-cyan-100 text-cyan-600",green:"bg-green-100 text-green-600",orange:"bg-orange-100 text-orange-600"};return s.jsx("section",{className:"py-20 bg-white",children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h2",{className:"text-4xl text-gray-900 mb-4",children:"How It Helps You Become a Triage Expert"}),s.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"Our AI medical coach provides comprehensive training to help nurses develop the critical thinking and assessment skills needed for effective triage."})]}),s.jsxs("div",{className:"max-w-6xl mx-auto",children:[s.jsx("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8",children:e.slice(0,3).map((n,l)=>{const a=n.icon;return s.jsxs("div",{className:"flex flex-col space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-all",children:[s.jsx("div",{className:`w-12 h-12 rounded-lg ${t[n.color]} flex items-center justify-center`,children:s.jsx(a,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-xl text-gray-900",children:n.title}),s.jsx("p",{className:"text-gray-600",children:n.description})]},l)})}),s.jsx("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:e.slice(3).map((n,l)=>{const a=n.icon;return s.jsxs("div",{className:"flex flex-col space-y-4 p-6 rounded-xl hover:bg-gray-50 transition-all",children:[s.jsx("div",{className:`w-12 h-12 rounded-lg ${t[n.color]} flex items-center justify-center`,children:s.jsx(a,{className:"h-6 w-6"})}),s.jsx("h3",{className:"text-xl text-gray-900",children:n.title}),s.jsx("p",{className:"text-gray-600",children:n.description})]},l+3)})})]})]})})}function ax(){const e=[{icon:Pb,title:"Present to AI Coach",description:"Use voice or text to present your assessment and triage decision to the AI medical coach.",step:"01"},{icon:Qb,title:"Get Expert Feedback",description:"Receive immediate, personalized feedback on your decision-making process and clinical reasoning.",step:"02"}];return s.jsx("section",{className:"py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white",children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"text-center mb-16",children:[s.jsx("h2",{className:"text-4xl mb-4",children:"How It Works"}),s.jsx("p",{className:"text-xl text-blue-100 max-w-3xl mx-auto",children:"Simple, effective training in two steps"})]}),s.jsx("div",{className:"grid md:grid-cols-2 gap-8 max-w-4xl mx-auto",children:e.map((t,n)=>{const l=t.icon;return s.jsxs("div",{className:"relative",children:[s.jsxs("div",{className:"bg-white/10 backdrop-blur-sm rounded-xl p-8 h-full border border-white/20",children:[s.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[s.jsx("div",{className:"text-5xl opacity-50",children:t.step}),s.jsx("div",{className:"w-12 h-12 bg-white rounded-lg flex items-center justify-center",children:s.jsx(l,{className:"h-6 w-6 text-blue-600"})})]}),s.jsx("h3",{className:"text-2xl mb-3",children:t.title}),s.jsx("p",{className:"text-blue-100",children:t.description})]}),n<e.length-1&&s.jsx("div",{className:"hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10",children:s.jsx("div",{className:"w-8 h-0.5 bg-white/40"})})]},n)})})]})})}function ix(){return s.jsx("section",{className:"py-20 bg-white",children:s.jsx("div",{className:"container mx-auto px-4",children:s.jsx("div",{className:"max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl overflow-hidden shadow-xl",children:s.jsxs("div",{className:"grid lg:grid-cols-2 gap-8 items-center",children:[s.jsxs("div",{className:"p-12 space-y-6",children:[s.jsx("h2",{className:"text-4xl text-gray-900",children:"Ready to Build Your Triage Skills?"}),s.jsx("p",{className:"text-xl text-gray-600",children:"Join hundreds of nurses who are improving their clinical decision-making and patient assessment skills with AI-powered coaching."}),s.jsx("div",{className:"flex flex-col sm:flex-row gap-4 pt-4",children:s.jsx(hr,{size:"lg",className:"bg-blue-600 hover:bg-blue-700 text-white px-8",asChild:!0,children:s.jsxs(Ou,{to:"/chat",children:["Launch Training Platform",s.jsx(qb,{className:"ml-2 h-5 w-5"})]})})}),s.jsxs("div",{className:"flex items-center gap-2 text-gray-600 pt-4",children:[s.jsx(Uf,{}),s.jsx("span",{children:"No credit card required"})]}),s.jsxs("div",{className:"flex items-center gap-2 text-gray-600",children:[s.jsx(Uf,{}),s.jsx("span",{children:"Start training immediately"})]})]}),s.jsx("div",{className:"relative h-full min-h-[400px] lg:min-h-[500px]",children:s.jsx(Dm,{src:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjMxNjE5MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",alt:"Healthcare technology",className:"absolute inset-0 w-full h-full object-cover"})})]})})})})}function Uf(){return s.jsx("svg",{className:"w-5 h-5 text-green-600",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5 13l4 4L19 7"})})}function rx(){return s.jsx("footer",{className:"bg-gray-900 text-gray-300 py-12",children:s.jsxs("div",{className:"container mx-auto px-4",children:[s.jsxs("div",{className:"grid md:grid-cols-4 gap-8 mb-8",children:[s.jsxs("div",{className:"space-y-4",children:[s.jsxs("div",{className:"flex items-center gap-2",children:[s.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center",children:s.jsx(vm,{className:"h-6 w-6 text-white"})}),s.jsx("span",{className:"text-xl text-white",children:"TriageAI Coach"})]}),s.jsx("p",{className:"text-gray-400",children:"Empowering nurses with AI-powered training for critical triage skills."})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-white mb-4",children:"Product"}),s.jsxs("ul",{className:"space-y-2",children:[s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Features"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"How It Works"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Pricing"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"FAQ"})})]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-white mb-4",children:"Company"}),s.jsxs("ul",{className:"space-y-2",children:[s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"About Us"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Contact"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Privacy Policy"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Terms of Service"})})]})]}),s.jsxs("div",{children:[s.jsx("h4",{className:"text-white mb-4",children:"Resources"}),s.jsxs("ul",{className:"space-y-2",children:[s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Blog"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Case Studies"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Documentation"})}),s.jsx("li",{children:s.jsx("a",{href:"#",className:"hover:text-white transition-colors",children:"Support"})})]})]})]}),s.jsx("div",{className:"border-t border-gray-800 pt-8 text-center text-gray-400",children:s.jsx("p",{children:"© 2025 TriageAI Coach. All rights reserved. Not for collecting PII or securing sensitive medical data."})})]})})}function ox(){return s.jsxs("div",{className:"min-h-screen bg-white",children:[s.jsx(P1,{}),s.jsxs("main",{children:[s.jsx(tx,{}),s.jsx("div",{id:"statistics",children:s.jsx(nx,{})}),s.jsx("div",{id:"features",children:s.jsx(lx,{})}),s.jsx("div",{id:"how-it-works",children:s.jsx(ax,{})}),s.jsx(ix,{})]}),s.jsx(rx,{})]})}const cx=`/*! tailwindcss v4.1.3 | MIT License | https://tailwindcss.com */
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
`;function Hf(){return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:cx}}),s.jsx(ox,{})]})}function ux(){return s.jsxs(Ay,{children:[s.jsx(Ci,{path:"/",element:s.jsx(Hf,{})}),s.jsx(Ci,{path:"/chat",element:s.jsx(F1,{})}),s.jsx(Ci,{path:"*",element:s.jsx(Hf,{})})]})}Dp.createRoot(document.getElementById("root")).render(s.jsx(y.StrictMode,{children:s.jsx(Ry,{children:s.jsx(ux,{})})}));
