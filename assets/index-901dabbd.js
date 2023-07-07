function Lh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function $h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ti={},Mh={get exports(){return ti},set exports(e){ti=e}},sa={},C={},Fh={get exports(){return C},set exports(e){C=e}},Y={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pi=Symbol.for("react.element"),Dh=Symbol.for("react.portal"),jh=Symbol.for("react.fragment"),Uh=Symbol.for("react.strict_mode"),Bh=Symbol.for("react.profiler"),Wh=Symbol.for("react.provider"),Hh=Symbol.for("react.context"),Vh=Symbol.for("react.forward_ref"),Yh=Symbol.for("react.suspense"),Qh=Symbol.for("react.memo"),Gh=Symbol.for("react.lazy"),kc=Symbol.iterator;function Xh(e){return e===null||typeof e!="object"?null:(e=kc&&e[kc]||e["@@iterator"],typeof e=="function"?e:null)}var Cd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bd=Object.assign,Ed={};function Cr(e,t,n){this.props=e,this.context=t,this.refs=Ed,this.updater=n||Cd}Cr.prototype.isReactComponent={};Cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Pd(){}Pd.prototype=Cr.prototype;function nu(e,t,n){this.props=e,this.context=t,this.refs=Ed,this.updater=n||Cd}var ru=nu.prototype=new Pd;ru.constructor=nu;bd(ru,Cr.prototype);ru.isPureReactComponent=!0;var Sc=Array.isArray,_d=Object.prototype.hasOwnProperty,iu={current:null},Nd={key:!0,ref:!0,__self:!0,__source:!0};function Od(e,t,n){var r,i={},o=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(o=""+t.key),t)_d.call(t,r)&&!Nd.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];i.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Pi,type:e,key:o,ref:a,props:i,_owner:iu.current}}function Kh(e,t){return{$$typeof:Pi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ou(e){return typeof e=="object"&&e!==null&&e.$$typeof===Pi}function Zh(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Cc=/\/+/g;function el(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Zh(""+e.key):t.toString(36)}function mo(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(o){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Pi:case Dh:a=!0}}if(a)return a=e,i=i(a),e=r===""?"."+el(a,0):r,Sc(i)?(n="",e!=null&&(n=e.replace(Cc,"$&/")+"/"),mo(i,t,n,"",function(u){return u})):i!=null&&(ou(i)&&(i=Kh(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Cc,"$&/")+"/")+e)),t.push(i)),1;if(a=0,r=r===""?".":r+":",Sc(e))for(var l=0;l<e.length;l++){o=e[l];var s=r+el(o,l);a+=mo(o,t,n,s,i)}else if(s=Xh(e),typeof s=="function")for(e=s.call(e),l=0;!(o=e.next()).done;)o=o.value,s=r+el(o,l++),a+=mo(o,t,n,s,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function Di(e,t,n){if(e==null)return e;var r=[],i=0;return mo(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Jh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},ho={transition:null},qh={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:ho,ReactCurrentOwner:iu};Y.Children={map:Di,forEach:function(e,t,n){Di(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Di(e,function(){t++}),t},toArray:function(e){return Di(e,function(t){return t})||[]},only:function(e){if(!ou(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Y.Component=Cr;Y.Fragment=jh;Y.Profiler=Bh;Y.PureComponent=nu;Y.StrictMode=Uh;Y.Suspense=Yh;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qh;Y.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=bd({},e.props),i=e.key,o=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,a=iu.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)_d.call(t,s)&&!Nd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Pi,type:e.type,key:i,ref:o,props:r,_owner:a}};Y.createContext=function(e){return e={$$typeof:Hh,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Wh,_context:e},e.Consumer=e};Y.createElement=Od;Y.createFactory=function(e){var t=Od.bind(null,e);return t.type=e,t};Y.createRef=function(){return{current:null}};Y.forwardRef=function(e){return{$$typeof:Vh,render:e}};Y.isValidElement=ou;Y.lazy=function(e){return{$$typeof:Gh,_payload:{_status:-1,_result:e},_init:Jh}};Y.memo=function(e,t){return{$$typeof:Qh,type:e,compare:t===void 0?null:t}};Y.startTransition=function(e){var t=ho.transition;ho.transition={};try{e()}finally{ho.transition=t}};Y.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Y.useCallback=function(e,t){return He.current.useCallback(e,t)};Y.useContext=function(e){return He.current.useContext(e)};Y.useDebugValue=function(){};Y.useDeferredValue=function(e){return He.current.useDeferredValue(e)};Y.useEffect=function(e,t){return He.current.useEffect(e,t)};Y.useId=function(){return He.current.useId()};Y.useImperativeHandle=function(e,t,n){return He.current.useImperativeHandle(e,t,n)};Y.useInsertionEffect=function(e,t){return He.current.useInsertionEffect(e,t)};Y.useLayoutEffect=function(e,t){return He.current.useLayoutEffect(e,t)};Y.useMemo=function(e,t){return He.current.useMemo(e,t)};Y.useReducer=function(e,t,n){return He.current.useReducer(e,t,n)};Y.useRef=function(e){return He.current.useRef(e)};Y.useState=function(e){return He.current.useState(e)};Y.useSyncExternalStore=function(e,t,n){return He.current.useSyncExternalStore(e,t,n)};Y.useTransition=function(){return He.current.useTransition()};Y.version="18.2.0";(function(e){e.exports=Y})(Fh);const xn=$h(C),Ll=Lh({__proto__:null,default:xn},[C]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev=C,tv=Symbol.for("react.element"),nv=Symbol.for("react.fragment"),rv=Object.prototype.hasOwnProperty,iv=ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ov={key:!0,ref:!0,__self:!0,__source:!0};function Ad(e,t,n){var r,i={},o=null,a=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)rv.call(t,r)&&!ov.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:tv,type:e,key:o,ref:a,props:i,_owner:iv.current}}sa.Fragment=nv;sa.jsx=Ad;sa.jsxs=Ad;(function(e){e.exports=sa})(Mh);const av=ti.Fragment,O=ti.jsx,ne=ti.jsxs;var $l={},Ml={},lv={get exports(){return Ml},set exports(e){Ml=e}},it={},Fl={},sv={get exports(){return Fl},set exports(e){Fl=e}},Td={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(E,F){var j=E.length;E.push(F);e:for(;0<j;){var re=j-1>>>1,_=E[re];if(0<i(_,F))E[re]=F,E[j]=_,j=re;else break e}}function n(E){return E.length===0?null:E[0]}function r(E){if(E.length===0)return null;var F=E[0],j=E.pop();if(j!==F){E[0]=j;e:for(var re=0,_=E.length,z=_>>>1;re<z;){var R=2*(re+1)-1,U=E[R],y=R+1,Q=E[y];if(0>i(U,j))y<_&&0>i(Q,U)?(E[re]=Q,E[y]=j,re=y):(E[re]=U,E[R]=j,re=R);else if(y<_&&0>i(Q,j))E[re]=Q,E[y]=j,re=y;else break e}}return F}function i(E,F){var j=E.sortIndex-F.sortIndex;return j!==0?j:E.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var s=[],u=[],f=1,d=null,h=3,x=!1,w=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(E){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=E)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function g(E){if(v=!1,m(E),!w)if(n(s)!==null)w=!0,At(S);else{var F=n(u);F!==null&&Ue(g,F.startTime-E)}}function S(E,F){w=!1,v&&(v=!1,p(T),T=-1),x=!0;var j=h;try{for(m(F),d=n(s);d!==null&&(!(d.expirationTime>F)||E&&!be());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var _=re(d.expirationTime<=F);F=e.unstable_now(),typeof _=="function"?d.callback=_:d===n(s)&&r(s),m(F)}else r(s);d=n(s)}if(d!==null)var z=!0;else{var R=n(u);R!==null&&Ue(g,R.startTime-F),z=!1}return z}finally{d=null,h=j,x=!1}}var N=!1,A=null,T=-1,W=5,D=-1;function be(){return!(e.unstable_now()-D<W)}function xe(){if(A!==null){var E=e.unstable_now();D=E;var F=!0;try{F=A(!0,E)}finally{F?Ne():(N=!1,A=null)}}else N=!1}var Ne;if(typeof c=="function")Ne=function(){c(xe)};else if(typeof MessageChannel<"u"){var Je=new MessageChannel,Le=Je.port2;Je.port1.onmessage=xe,Ne=function(){Le.postMessage(null)}}else Ne=function(){k(xe,0)};function At(E){A=E,N||(N=!0,Ne())}function Ue(E,F){T=k(function(){E(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(E){E.callback=null},e.unstable_continueExecution=function(){w||x||(w=!0,At(S))},e.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<E?Math.floor(1e3/E):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(E){switch(h){case 1:case 2:case 3:var F=3;break;default:F=h}var j=h;h=F;try{return E()}finally{h=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(E,F){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var j=h;h=E;try{return F()}finally{h=j}},e.unstable_scheduleCallback=function(E,F,j){var re=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?re+j:re):j=re,E){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=j+_,E={id:f++,callback:F,priorityLevel:E,startTime:j,expirationTime:_,sortIndex:-1},j>re?(E.sortIndex=j,t(u,E),n(s)===null&&E===n(u)&&(v?(p(T),T=-1):v=!0,Ue(g,j-re))):(E.sortIndex=_,t(s,E),w||x||(w=!0,At(S))),E},e.unstable_shouldYield=be,e.unstable_wrapCallback=function(E){var F=h;return function(){var j=h;h=F;try{return E.apply(this,arguments)}finally{h=j}}}})(Td);(function(e){e.exports=Td})(sv);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd=C,rt=Fl;function b(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Id=new Set,ni={};function Dn(e,t){pr(e,t),pr(e+"Capture",t)}function pr(e,t){for(ni[e]=t,e=0;e<t.length;e++)Id.add(t[e])}var Mt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Dl=Object.prototype.hasOwnProperty,uv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,bc={},Ec={};function cv(e){return Dl.call(Ec,e)?!0:Dl.call(bc,e)?!1:uv.test(e)?Ec[e]=!0:(bc[e]=!0,!1)}function fv(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dv(e,t,n,r){if(t===null||typeof t>"u"||fv(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ve(e,t,n,r,i,o,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=a}var Re={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Re[e]=new Ve(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Re[t]=new Ve(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Re[e]=new Ve(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Re[e]=new Ve(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Re[e]=new Ve(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Re[e]=new Ve(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Re[e]=new Ve(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Re[e]=new Ve(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Re[e]=new Ve(e,5,!1,e.toLowerCase(),null,!1,!1)});var au=/[\-:]([a-z])/g;function lu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(au,lu);Re[t]=new Ve(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(au,lu);Re[t]=new Ve(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(au,lu);Re[t]=new Ve(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Re[e]=new Ve(e,1,!1,e.toLowerCase(),null,!1,!1)});Re.xlinkHref=new Ve("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Re[e]=new Ve(e,1,!1,e.toLowerCase(),null,!0,!0)});function su(e,t,n,r){var i=Re.hasOwnProperty(t)?Re[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dv(t,n,i,r)&&(n=null),r||i===null?cv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Ht=zd.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ji=Symbol.for("react.element"),Hn=Symbol.for("react.portal"),Vn=Symbol.for("react.fragment"),uu=Symbol.for("react.strict_mode"),jl=Symbol.for("react.profiler"),Rd=Symbol.for("react.provider"),Ld=Symbol.for("react.context"),cu=Symbol.for("react.forward_ref"),Ul=Symbol.for("react.suspense"),Bl=Symbol.for("react.suspense_list"),fu=Symbol.for("react.memo"),Xt=Symbol.for("react.lazy"),$d=Symbol.for("react.offscreen"),Pc=Symbol.iterator;function Ar(e){return e===null||typeof e!="object"?null:(e=Pc&&e[Pc]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,tl;function Fr(e){if(tl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);tl=t&&t[1]||""}return`
`+tl+e}var nl=!1;function rl(e,t){if(!e||nl)return"";nl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),a=i.length-1,l=o.length-1;1<=a&&0<=l&&i[a]!==o[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==o[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==o[l]){var s=`
`+i[a].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=a&&0<=l);break}}}finally{nl=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Fr(e):""}function pv(e){switch(e.tag){case 5:return Fr(e.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return e=rl(e.type,!1),e;case 11:return e=rl(e.type.render,!1),e;case 1:return e=rl(e.type,!0),e;default:return""}}function Wl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Vn:return"Fragment";case Hn:return"Portal";case jl:return"Profiler";case uu:return"StrictMode";case Ul:return"Suspense";case Bl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ld:return(e.displayName||"Context")+".Consumer";case Rd:return(e._context.displayName||"Context")+".Provider";case cu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case fu:return t=e.displayName||null,t!==null?t:Wl(e.type)||"Memo";case Xt:t=e._payload,e=e._init;try{return Wl(e(t))}catch{}}return null}function mv(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wl(t);case 8:return t===uu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function mn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Md(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function hv(e){var t=Md(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,o.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ui(e){e._valueTracker||(e._valueTracker=hv(e))}function Fd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Md(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Oo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Hl(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function _c(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=mn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Dd(e,t){t=t.checked,t!=null&&su(e,"checked",t,!1)}function Vl(e,t){Dd(e,t);var n=mn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yl(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yl(e,t.type,mn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nc(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yl(e,t,n){(t!=="number"||Oo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Dr=Array.isArray;function ar(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+mn(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Ql(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(b(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oc(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(b(92));if(Dr(n)){if(1<n.length)throw Error(b(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:mn(n)}}function jd(e,t){var n=mn(t.value),r=mn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ac(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Ud(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Ud(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Bi,Bd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Bi=Bi||document.createElement("div"),Bi.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Bi.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ri(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vv=["Webkit","ms","Moz","O"];Object.keys(Wr).forEach(function(e){vv.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Wr[t]=Wr[e]})});function Wd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Wr.hasOwnProperty(e)&&Wr[e]?(""+t).trim():t+"px"}function Hd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Wd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var gv=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Xl(e,t){if(t){if(gv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(b(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(b(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(b(61))}if(t.style!=null&&typeof t.style!="object")throw Error(b(62))}}function Kl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zl=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Jl=null,lr=null,sr=null;function Tc(e){if(e=Oi(e)){if(typeof Jl!="function")throw Error(b(280));var t=e.stateNode;t&&(t=pa(t),Jl(e.stateNode,e.type,t))}}function Vd(e){lr?sr?sr.push(e):sr=[e]:lr=e}function Yd(){if(lr){var e=lr,t=sr;if(sr=lr=null,Tc(e),t)for(e=0;e<t.length;e++)Tc(t[e])}}function Qd(e,t){return e(t)}function Gd(){}var il=!1;function Xd(e,t,n){if(il)return e(t,n);il=!0;try{return Qd(e,t,n)}finally{il=!1,(lr!==null||sr!==null)&&(Gd(),Yd())}}function ii(e,t){var n=e.stateNode;if(n===null)return null;var r=pa(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(b(231,t,typeof n));return n}var ql=!1;if(Mt)try{var Tr={};Object.defineProperty(Tr,"passive",{get:function(){ql=!0}}),window.addEventListener("test",Tr,Tr),window.removeEventListener("test",Tr,Tr)}catch{ql=!1}function yv(e,t,n,r,i,o,a,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Hr=!1,Ao=null,To=!1,es=null,xv={onError:function(e){Hr=!0,Ao=e}};function wv(e,t,n,r,i,o,a,l,s){Hr=!1,Ao=null,yv.apply(xv,arguments)}function kv(e,t,n,r,i,o,a,l,s){if(wv.apply(this,arguments),Hr){if(Hr){var u=Ao;Hr=!1,Ao=null}else throw Error(b(198));To||(To=!0,es=u)}}function jn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Kd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zc(e){if(jn(e)!==e)throw Error(b(188))}function Sv(e){var t=e.alternate;if(!t){if(t=jn(e),t===null)throw Error(b(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zc(i),e;if(o===r)return zc(i),t;o=o.sibling}throw Error(b(188))}if(n.return!==r.return)n=i,r=o;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=o;break}if(l===r){a=!0,r=i,n=o;break}l=l.sibling}if(!a){for(l=o.child;l;){if(l===n){a=!0,n=o,r=i;break}if(l===r){a=!0,r=o,n=i;break}l=l.sibling}if(!a)throw Error(b(189))}}if(n.alternate!==r)throw Error(b(190))}if(n.tag!==3)throw Error(b(188));return n.stateNode.current===n?e:t}function Zd(e){return e=Sv(e),e!==null?Jd(e):null}function Jd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Jd(e);if(t!==null)return t;e=e.sibling}return null}var qd=rt.unstable_scheduleCallback,Ic=rt.unstable_cancelCallback,Cv=rt.unstable_shouldYield,bv=rt.unstable_requestPaint,ge=rt.unstable_now,Ev=rt.unstable_getCurrentPriorityLevel,pu=rt.unstable_ImmediatePriority,ep=rt.unstable_UserBlockingPriority,zo=rt.unstable_NormalPriority,Pv=rt.unstable_LowPriority,tp=rt.unstable_IdlePriority,ua=null,Nt=null;function _v(e){if(Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(ua,e,void 0,(e.current.flags&128)===128)}catch{}}var kt=Math.clz32?Math.clz32:Av,Nv=Math.log,Ov=Math.LN2;function Av(e){return e>>>=0,e===0?32:31-(Nv(e)/Ov|0)|0}var Wi=64,Hi=4194304;function jr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Io(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=jr(l):(o&=a,o!==0&&(r=jr(o)))}else a=n&~i,a!==0?r=jr(a):o!==0&&(r=jr(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kt(t),i=1<<n,r|=e[n],t&=~i;return r}function Tv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var a=31-kt(o),l=1<<a,s=i[a];s===-1?(!(l&n)||l&r)&&(i[a]=Tv(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}function ts(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function np(){var e=Wi;return Wi<<=1,!(Wi&4194240)&&(Wi=64),e}function ol(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function _i(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kt(t),e[t]=n}function Iv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function mu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var q=0;function rp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var ip,hu,op,ap,lp,ns=!1,Vi=[],rn=null,on=null,an=null,oi=new Map,ai=new Map,Zt=[],Rv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rc(e,t){switch(e){case"focusin":case"focusout":rn=null;break;case"dragenter":case"dragleave":on=null;break;case"mouseover":case"mouseout":an=null;break;case"pointerover":case"pointerout":oi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(t.pointerId)}}function zr(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Oi(t),t!==null&&hu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Lv(e,t,n,r,i){switch(t){case"focusin":return rn=zr(rn,e,t,n,r,i),!0;case"dragenter":return on=zr(on,e,t,n,r,i),!0;case"mouseover":return an=zr(an,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return oi.set(o,zr(oi.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ai.set(o,zr(ai.get(o)||null,e,t,n,r,i)),!0}return!1}function sp(e){var t=En(e.target);if(t!==null){var n=jn(t);if(n!==null){if(t=n.tag,t===13){if(t=Kd(n),t!==null){e.blockedOn=t,lp(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=rs(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zl=r,n.target.dispatchEvent(r),Zl=null}else return t=Oi(n),t!==null&&hu(t),e.blockedOn=n,!1;t.shift()}return!0}function Lc(e,t,n){vo(e)&&n.delete(t)}function $v(){ns=!1,rn!==null&&vo(rn)&&(rn=null),on!==null&&vo(on)&&(on=null),an!==null&&vo(an)&&(an=null),oi.forEach(Lc),ai.forEach(Lc)}function Ir(e,t){e.blockedOn===t&&(e.blockedOn=null,ns||(ns=!0,rt.unstable_scheduleCallback(rt.unstable_NormalPriority,$v)))}function li(e){function t(i){return Ir(i,e)}if(0<Vi.length){Ir(Vi[0],e);for(var n=1;n<Vi.length;n++){var r=Vi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&Ir(rn,e),on!==null&&Ir(on,e),an!==null&&Ir(an,e),oi.forEach(t),ai.forEach(t),n=0;n<Zt.length;n++)r=Zt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zt.length&&(n=Zt[0],n.blockedOn===null);)sp(n),n.blockedOn===null&&Zt.shift()}var ur=Ht.ReactCurrentBatchConfig,Ro=!0;function Mv(e,t,n,r){var i=q,o=ur.transition;ur.transition=null;try{q=1,vu(e,t,n,r)}finally{q=i,ur.transition=o}}function Fv(e,t,n,r){var i=q,o=ur.transition;ur.transition=null;try{q=4,vu(e,t,n,r)}finally{q=i,ur.transition=o}}function vu(e,t,n,r){if(Ro){var i=rs(e,t,n,r);if(i===null)hl(e,t,r,Lo,n),Rc(e,r);else if(Lv(i,e,t,n,r))r.stopPropagation();else if(Rc(e,r),t&4&&-1<Rv.indexOf(e)){for(;i!==null;){var o=Oi(i);if(o!==null&&ip(o),o=rs(e,t,n,r),o===null&&hl(e,t,r,Lo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else hl(e,t,r,null,n)}}var Lo=null;function rs(e,t,n,r){if(Lo=null,e=du(r),e=En(e),e!==null)if(t=jn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Kd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Lo=e,null}function up(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ev()){case pu:return 1;case ep:return 4;case zo:case Pv:return 16;case tp:return 536870912;default:return 16}default:return 16}}var qt=null,gu=null,go=null;function cp(){if(go)return go;var e,t=gu,n=t.length,r,i="value"in qt?qt.value:qt.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===i[o-r];r++);return go=i.slice(e,1<r?1-r:void 0)}function yo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Yi(){return!0}function $c(){return!1}function ot(e){function t(n,r,i,o,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yi:$c,this.isPropagationStopped=$c,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),t}var br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yu=ot(br),Ni=de({},br,{view:0,detail:0}),Dv=ot(Ni),al,ll,Rr,ca=de({},Ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rr&&(Rr&&e.type==="mousemove"?(al=e.screenX-Rr.screenX,ll=e.screenY-Rr.screenY):ll=al=0,Rr=e),al)},movementY:function(e){return"movementY"in e?e.movementY:ll}}),Mc=ot(ca),jv=de({},ca,{dataTransfer:0}),Uv=ot(jv),Bv=de({},Ni,{relatedTarget:0}),sl=ot(Bv),Wv=de({},br,{animationName:0,elapsedTime:0,pseudoElement:0}),Hv=ot(Wv),Vv=de({},br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yv=ot(Vv),Qv=de({},br,{data:0}),Fc=ot(Qv),Gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zv(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Kv[e])?!!t[e]:!1}function xu(){return Zv}var Jv=de({},Ni,{key:function(e){if(e.key){var t=Gv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xu,charCode:function(e){return e.type==="keypress"?yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),qv=ot(Jv),eg=de({},ca,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dc=ot(eg),tg=de({},Ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xu}),ng=ot(tg),rg=de({},br,{propertyName:0,elapsedTime:0,pseudoElement:0}),ig=ot(rg),og=de({},ca,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ag=ot(og),lg=[9,13,27,32],wu=Mt&&"CompositionEvent"in window,Vr=null;Mt&&"documentMode"in document&&(Vr=document.documentMode);var sg=Mt&&"TextEvent"in window&&!Vr,fp=Mt&&(!wu||Vr&&8<Vr&&11>=Vr),jc=String.fromCharCode(32),Uc=!1;function dp(e,t){switch(e){case"keyup":return lg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Yn=!1;function ug(e,t){switch(e){case"compositionend":return pp(t);case"keypress":return t.which!==32?null:(Uc=!0,jc);case"textInput":return e=t.data,e===jc&&Uc?null:e;default:return null}}function cg(e,t){if(Yn)return e==="compositionend"||!wu&&dp(e,t)?(e=cp(),go=gu=qt=null,Yn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return fp&&t.locale!=="ko"?null:t.data;default:return null}}var fg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fg[e.type]:t==="textarea"}function mp(e,t,n,r){Vd(r),t=$o(t,"onChange"),0<t.length&&(n=new yu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Yr=null,si=null;function dg(e){Ep(e,0)}function fa(e){var t=Xn(e);if(Fd(t))return e}function pg(e,t){if(e==="change")return t}var hp=!1;if(Mt){var ul;if(Mt){var cl="oninput"in document;if(!cl){var Wc=document.createElement("div");Wc.setAttribute("oninput","return;"),cl=typeof Wc.oninput=="function"}ul=cl}else ul=!1;hp=ul&&(!document.documentMode||9<document.documentMode)}function Hc(){Yr&&(Yr.detachEvent("onpropertychange",vp),si=Yr=null)}function vp(e){if(e.propertyName==="value"&&fa(si)){var t=[];mp(t,si,e,du(e)),Xd(dg,t)}}function mg(e,t,n){e==="focusin"?(Hc(),Yr=t,si=n,Yr.attachEvent("onpropertychange",vp)):e==="focusout"&&Hc()}function hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fa(si)}function vg(e,t){if(e==="click")return fa(t)}function gg(e,t){if(e==="input"||e==="change")return fa(t)}function yg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ct=typeof Object.is=="function"?Object.is:yg;function ui(e,t){if(Ct(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Dl.call(t,i)||!Ct(e[i],t[i]))return!1}return!0}function Vc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Yc(e,t){var n=Vc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Vc(n)}}function gp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?gp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function yp(){for(var e=window,t=Oo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Oo(e.document)}return t}function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function xg(e){var t=yp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&gp(n.ownerDocument.documentElement,n)){if(r!==null&&ku(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Yc(n,o);var a=Yc(n,r);i&&a&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var wg=Mt&&"documentMode"in document&&11>=document.documentMode,Qn=null,is=null,Qr=null,os=!1;function Qc(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;os||Qn==null||Qn!==Oo(r)||(r=Qn,"selectionStart"in r&&ku(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Qr&&ui(Qr,r)||(Qr=r,r=$o(is,"onSelect"),0<r.length&&(t=new yu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Qn)))}function Qi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Gn={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},fl={},xp={};Mt&&(xp=document.createElement("div").style,"AnimationEvent"in window||(delete Gn.animationend.animation,delete Gn.animationiteration.animation,delete Gn.animationstart.animation),"TransitionEvent"in window||delete Gn.transitionend.transition);function da(e){if(fl[e])return fl[e];if(!Gn[e])return e;var t=Gn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in xp)return fl[e]=t[n];return e}var wp=da("animationend"),kp=da("animationiteration"),Sp=da("animationstart"),Cp=da("transitionend"),bp=new Map,Gc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wn(e,t){bp.set(e,t),Dn(t,[e])}for(var dl=0;dl<Gc.length;dl++){var pl=Gc[dl],kg=pl.toLowerCase(),Sg=pl[0].toUpperCase()+pl.slice(1);wn(kg,"on"+Sg)}wn(wp,"onAnimationEnd");wn(kp,"onAnimationIteration");wn(Sp,"onAnimationStart");wn("dblclick","onDoubleClick");wn("focusin","onFocus");wn("focusout","onBlur");wn(Cp,"onTransitionEnd");pr("onMouseEnter",["mouseout","mouseover"]);pr("onMouseLeave",["mouseout","mouseover"]);pr("onPointerEnter",["pointerout","pointerover"]);pr("onPointerLeave",["pointerout","pointerover"]);Dn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ur="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cg=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ur));function Xc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,kv(r,t,void 0,e),e.currentTarget=null}function Ep(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&i.isPropagationStopped())break e;Xc(i,l,u),o=s}else for(a=0;a<r.length;a++){if(l=r[a],s=l.instance,u=l.currentTarget,l=l.listener,s!==o&&i.isPropagationStopped())break e;Xc(i,l,u),o=s}}}if(To)throw e=es,To=!1,es=null,e}function oe(e,t){var n=t[cs];n===void 0&&(n=t[cs]=new Set);var r=e+"__bubble";n.has(r)||(Pp(t,e,2,!1),n.add(r))}function ml(e,t,n){var r=0;t&&(r|=4),Pp(n,e,r,t)}var Gi="_reactListening"+Math.random().toString(36).slice(2);function ci(e){if(!e[Gi]){e[Gi]=!0,Id.forEach(function(n){n!=="selectionchange"&&(Cg.has(n)||ml(n,!1,e),ml(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Gi]||(t[Gi]=!0,ml("selectionchange",!1,t))}}function Pp(e,t,n,r){switch(up(t)){case 1:var i=Mv;break;case 4:i=Fv;break;default:i=vu}n=i.bind(null,t,n,e),i=void 0,!ql||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function hl(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var s=a.tag;if((s===3||s===4)&&(s=a.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;a=a.return}for(;l!==null;){if(a=En(l),a===null)return;if(s=a.tag,s===5||s===6){r=o=a;continue e}l=l.parentNode}}r=r.return}Xd(function(){var u=o,f=du(n),d=[];e:{var h=bp.get(e);if(h!==void 0){var x=yu,w=e;switch(e){case"keypress":if(yo(n)===0)break e;case"keydown":case"keyup":x=qv;break;case"focusin":w="focus",x=sl;break;case"focusout":w="blur",x=sl;break;case"beforeblur":case"afterblur":x=sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Mc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=Uv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=ng;break;case wp:case kp:case Sp:x=Hv;break;case Cp:x=ig;break;case"scroll":x=Dv;break;case"wheel":x=ag;break;case"copy":case"cut":case"paste":x=Yv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Dc}var v=(t&4)!==0,k=!v&&e==="scroll",p=v?h!==null?h+"Capture":null:h;v=[];for(var c=u,m;c!==null;){m=c;var g=m.stateNode;if(m.tag===5&&g!==null&&(m=g,p!==null&&(g=ii(c,p),g!=null&&v.push(fi(c,g,m)))),k)break;c=c.return}0<v.length&&(h=new x(h,w,null,n,f),d.push({event:h,listeners:v}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==Zl&&(w=n.relatedTarget||n.fromElement)&&(En(w)||w[Ft]))break e;if((x||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=u,w=w?En(w):null,w!==null&&(k=jn(w),w!==k||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=u),x!==w)){if(v=Mc,g="onMouseLeave",p="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(v=Dc,g="onPointerLeave",p="onPointerEnter",c="pointer"),k=x==null?h:Xn(x),m=w==null?h:Xn(w),h=new v(g,c+"leave",x,n,f),h.target=k,h.relatedTarget=m,g=null,En(f)===u&&(v=new v(p,c+"enter",w,n,f),v.target=m,v.relatedTarget=k,g=v),k=g,x&&w)t:{for(v=x,p=w,c=0,m=v;m;m=Wn(m))c++;for(m=0,g=p;g;g=Wn(g))m++;for(;0<c-m;)v=Wn(v),c--;for(;0<m-c;)p=Wn(p),m--;for(;c--;){if(v===p||p!==null&&v===p.alternate)break t;v=Wn(v),p=Wn(p)}v=null}else v=null;x!==null&&Kc(d,h,x,v,!1),w!==null&&k!==null&&Kc(d,k,w,v,!0)}}e:{if(h=u?Xn(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var S=pg;else if(Bc(h))if(hp)S=gg;else{S=hg;var N=mg}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=vg);if(S&&(S=S(e,u))){mp(d,S,n,f);break e}N&&N(e,h,u),e==="focusout"&&(N=h._wrapperState)&&N.controlled&&h.type==="number"&&Yl(h,"number",h.value)}switch(N=u?Xn(u):window,e){case"focusin":(Bc(N)||N.contentEditable==="true")&&(Qn=N,is=u,Qr=null);break;case"focusout":Qr=is=Qn=null;break;case"mousedown":os=!0;break;case"contextmenu":case"mouseup":case"dragend":os=!1,Qc(d,n,f);break;case"selectionchange":if(wg)break;case"keydown":case"keyup":Qc(d,n,f)}var A;if(wu)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else Yn?dp(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(fp&&n.locale!=="ko"&&(Yn||T!=="onCompositionStart"?T==="onCompositionEnd"&&Yn&&(A=cp()):(qt=f,gu="value"in qt?qt.value:qt.textContent,Yn=!0)),N=$o(u,T),0<N.length&&(T=new Fc(T,e,null,n,f),d.push({event:T,listeners:N}),A?T.data=A:(A=pp(n),A!==null&&(T.data=A)))),(A=sg?ug(e,n):cg(e,n))&&(u=$o(u,"onBeforeInput"),0<u.length&&(f=new Fc("onBeforeInput","beforeinput",null,n,f),d.push({event:f,listeners:u}),f.data=A))}Ep(d,t)})}function fi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function $o(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ii(e,n),o!=null&&r.unshift(fi(e,o,i)),o=ii(e,t),o!=null&&r.push(fi(e,o,i))),e=e.return}return r}function Wn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Kc(e,t,n,r,i){for(var o=t._reactName,a=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,i?(s=ii(n,o),s!=null&&a.unshift(fi(n,s,l))):i||(s=ii(n,o),s!=null&&a.push(fi(n,s,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var bg=/\r\n?/g,Eg=/\u0000|\uFFFD/g;function Zc(e){return(typeof e=="string"?e:""+e).replace(bg,`
`).replace(Eg,"")}function Xi(e,t,n){if(t=Zc(t),Zc(e)!==t&&n)throw Error(b(425))}function Mo(){}var as=null,ls=null;function ss(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var us=typeof setTimeout=="function"?setTimeout:void 0,Pg=typeof clearTimeout=="function"?clearTimeout:void 0,Jc=typeof Promise=="function"?Promise:void 0,_g=typeof queueMicrotask=="function"?queueMicrotask:typeof Jc<"u"?function(e){return Jc.resolve(null).then(e).catch(Ng)}:us;function Ng(e){setTimeout(function(){throw e})}function vl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),li(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);li(t)}function ln(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function qc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Er=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Er,di="__reactProps$"+Er,Ft="__reactContainer$"+Er,cs="__reactEvents$"+Er,Og="__reactListeners$"+Er,Ag="__reactHandles$"+Er;function En(e){var t=e[Pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ft]||n[Pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=qc(e);e!==null;){if(n=e[Pt])return n;e=qc(e)}return t}e=n,n=e.parentNode}return null}function Oi(e){return e=e[Pt]||e[Ft],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Xn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(b(33))}function pa(e){return e[di]||null}var fs=[],Kn=-1;function kn(e){return{current:e}}function le(e){0>Kn||(e.current=fs[Kn],fs[Kn]=null,Kn--)}function ie(e,t){Kn++,fs[Kn]=e.current,e.current=t}var hn={},je=kn(hn),Xe=kn(!1),zn=hn;function mr(e,t){var n=e.type.contextTypes;if(!n)return hn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(e){return e=e.childContextTypes,e!=null}function Fo(){le(Xe),le(je)}function ef(e,t,n){if(je.current!==hn)throw Error(b(168));ie(je,t),ie(Xe,n)}function _p(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(b(108,mv(e)||"Unknown",i));return de({},n,r)}function Do(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||hn,zn=je.current,ie(je,e),ie(Xe,Xe.current),!0}function tf(e,t,n){var r=e.stateNode;if(!r)throw Error(b(169));n?(e=_p(e,t,zn),r.__reactInternalMemoizedMergedChildContext=e,le(Xe),le(je),ie(je,e)):le(Xe),ie(Xe,n)}var zt=null,ma=!1,gl=!1;function Np(e){zt===null?zt=[e]:zt.push(e)}function Tg(e){ma=!0,Np(e)}function Sn(){if(!gl&&zt!==null){gl=!0;var e=0,t=q;try{var n=zt;for(q=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,ma=!1}catch(i){throw zt!==null&&(zt=zt.slice(e+1)),qd(pu,Sn),i}finally{q=t,gl=!1}}return null}var Zn=[],Jn=0,jo=null,Uo=0,st=[],ut=0,In=null,It=1,Rt="";function Cn(e,t){Zn[Jn++]=Uo,Zn[Jn++]=jo,jo=e,Uo=t}function Op(e,t,n){st[ut++]=It,st[ut++]=Rt,st[ut++]=In,In=e;var r=It;e=Rt;var i=32-kt(r)-1;r&=~(1<<i),n+=1;var o=32-kt(t)+i;if(30<o){var a=i-i%5;o=(r&(1<<a)-1).toString(32),r>>=a,i-=a,It=1<<32-kt(t)+i|n<<i|r,Rt=o+e}else It=1<<o|n<<i|r,Rt=e}function Su(e){e.return!==null&&(Cn(e,1),Op(e,1,0))}function Cu(e){for(;e===jo;)jo=Zn[--Jn],Zn[Jn]=null,Uo=Zn[--Jn],Zn[Jn]=null;for(;e===In;)In=st[--ut],st[ut]=null,Rt=st[--ut],st[ut]=null,It=st[--ut],st[ut]=null}var tt=null,et=null,ue=!1,xt=null;function Ap(e,t){var n=ct(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function nf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,tt=e,et=ln(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,tt=e,et=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=In!==null?{id:It,overflow:Rt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ct(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,tt=e,et=null,!0):!1;default:return!1}}function ds(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ps(e){if(ue){var t=et;if(t){var n=t;if(!nf(e,t)){if(ds(e))throw Error(b(418));t=ln(n.nextSibling);var r=tt;t&&nf(e,t)?Ap(r,n):(e.flags=e.flags&-4097|2,ue=!1,tt=e)}}else{if(ds(e))throw Error(b(418));e.flags=e.flags&-4097|2,ue=!1,tt=e}}}function rf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;tt=e}function Ki(e){if(e!==tt)return!1;if(!ue)return rf(e),ue=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!ss(e.type,e.memoizedProps)),t&&(t=et)){if(ds(e))throw Tp(),Error(b(418));for(;t;)Ap(e,t),t=ln(t.nextSibling)}if(rf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(b(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){et=ln(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}et=null}}else et=tt?ln(e.stateNode.nextSibling):null;return!0}function Tp(){for(var e=et;e;)e=ln(e.nextSibling)}function hr(){et=tt=null,ue=!1}function bu(e){xt===null?xt=[e]:xt.push(e)}var zg=Ht.ReactCurrentBatchConfig;function gt(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Bo=kn(null),Wo=null,qn=null,Eu=null;function Pu(){Eu=qn=Wo=null}function _u(e){var t=Bo.current;le(Bo),e._currentValue=t}function ms(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function cr(e,t){Wo=e,Eu=qn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ge=!0),e.firstContext=null)}function dt(e){var t=e._currentValue;if(Eu!==e)if(e={context:e,memoizedValue:t,next:null},qn===null){if(Wo===null)throw Error(b(308));qn=e,Wo.dependencies={lanes:0,firstContext:e}}else qn=qn.next=e;return t}var Pn=null;function Nu(e){Pn===null?Pn=[e]:Pn.push(e)}function zp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Nu(t)):(n.next=i.next,i.next=n),t.interleaved=n,Dt(e,r)}function Dt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Kt=!1;function Ou(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function $t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function sn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Dt(e,n)}return i=r.interleaved,i===null?(t.next=t,Nu(r)):(t.next=i.next,i.next=t),r.interleaved=t,Dt(e,n)}function xo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mu(e,n)}}function of(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=a:o=o.next=a,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ho(e,t,n,r){var i=e.updateQueue;Kt=!1;var o=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var s=l,u=s.next;s.next=null,a===null?o=u:a.next=u,a=s;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=s))}if(o!==null){var d=i.baseState;a=0,f=u=s=null,l=o;do{var h=l.lane,x=l.eventTime;if((r&h)===h){f!==null&&(f=f.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var w=e,v=l;switch(h=t,x=n,v.tag){case 1:if(w=v.payload,typeof w=="function"){d=w.call(x,d,h);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=v.payload,h=typeof w=="function"?w.call(x,d,h):w,h==null)break e;d=de({},d,h);break e;case 2:Kt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=x,s=d):f=f.next=x,a|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(f===null&&(s=d),i.baseState=s,i.firstBaseUpdate=u,i.lastBaseUpdate=f,t=i.shared.interleaved,t!==null){i=t;do a|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Ln|=a,e.lanes=a,e.memoizedState=d}}function af(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(b(191,i));i.call(r)}}}var Rp=new zd.Component().refs;function hs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ha={isMounted:function(e){return(e=e._reactInternals)?jn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=We(),i=cn(e),o=$t(r,i);o.payload=t,n!=null&&(o.callback=n),t=sn(e,o,i),t!==null&&(St(t,e,i,r),xo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=We(),i=cn(e),o=$t(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=sn(e,o,i),t!==null&&(St(t,e,i,r),xo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=We(),r=cn(e),i=$t(n,r);i.tag=2,t!=null&&(i.callback=t),t=sn(e,i,r),t!==null&&(St(t,e,r,n),xo(t,e,r))}};function lf(e,t,n,r,i,o,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,a):t.prototype&&t.prototype.isPureReactComponent?!ui(n,r)||!ui(i,o):!0}function Lp(e,t,n){var r=!1,i=hn,o=t.contextType;return typeof o=="object"&&o!==null?o=dt(o):(i=Ke(t)?zn:je.current,r=t.contextTypes,o=(r=r!=null)?mr(e,i):hn),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ha,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function sf(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ha.enqueueReplaceState(t,t.state,null)}function vs(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Rp,Ou(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=dt(o):(o=Ke(t)?zn:je.current,i.context=mr(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(hs(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ha.enqueueReplaceState(i,i.state,null),Ho(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Lr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(b(309));var r=n.stateNode}if(!r)throw Error(b(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(a){var l=i.refs;l===Rp&&(l=i.refs={}),a===null?delete l[o]:l[o]=a},t._stringRef=o,t)}if(typeof e!="string")throw Error(b(284));if(!n._owner)throw Error(b(290,e))}return e}function Zi(e,t){throw e=Object.prototype.toString.call(t),Error(b(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function uf(e){var t=e._init;return t(e._payload)}function $p(e){function t(p,c){if(e){var m=p.deletions;m===null?(p.deletions=[c],p.flags|=16):m.push(c)}}function n(p,c){if(!e)return null;for(;c!==null;)t(p,c),c=c.sibling;return null}function r(p,c){for(p=new Map;c!==null;)c.key!==null?p.set(c.key,c):p.set(c.index,c),c=c.sibling;return p}function i(p,c){return p=fn(p,c),p.index=0,p.sibling=null,p}function o(p,c,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<c?(p.flags|=2,c):m):(p.flags|=2,c)):(p.flags|=1048576,c)}function a(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,c,m,g){return c===null||c.tag!==6?(c=bl(m,p.mode,g),c.return=p,c):(c=i(c,m),c.return=p,c)}function s(p,c,m,g){var S=m.type;return S===Vn?f(p,c,m.props.children,g,m.key):c!==null&&(c.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xt&&uf(S)===c.type)?(g=i(c,m.props),g.ref=Lr(p,c,m),g.return=p,g):(g=Eo(m.type,m.key,m.props,null,p.mode,g),g.ref=Lr(p,c,m),g.return=p,g)}function u(p,c,m,g){return c===null||c.tag!==4||c.stateNode.containerInfo!==m.containerInfo||c.stateNode.implementation!==m.implementation?(c=El(m,p.mode,g),c.return=p,c):(c=i(c,m.children||[]),c.return=p,c)}function f(p,c,m,g,S){return c===null||c.tag!==7?(c=Tn(m,p.mode,g,S),c.return=p,c):(c=i(c,m),c.return=p,c)}function d(p,c,m){if(typeof c=="string"&&c!==""||typeof c=="number")return c=bl(""+c,p.mode,m),c.return=p,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case ji:return m=Eo(c.type,c.key,c.props,null,p.mode,m),m.ref=Lr(p,null,c),m.return=p,m;case Hn:return c=El(c,p.mode,m),c.return=p,c;case Xt:var g=c._init;return d(p,g(c._payload),m)}if(Dr(c)||Ar(c))return c=Tn(c,p.mode,m,null),c.return=p,c;Zi(p,c)}return null}function h(p,c,m,g){var S=c!==null?c.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return S!==null?null:l(p,c,""+m,g);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ji:return m.key===S?s(p,c,m,g):null;case Hn:return m.key===S?u(p,c,m,g):null;case Xt:return S=m._init,h(p,c,S(m._payload),g)}if(Dr(m)||Ar(m))return S!==null?null:f(p,c,m,g,null);Zi(p,m)}return null}function x(p,c,m,g,S){if(typeof g=="string"&&g!==""||typeof g=="number")return p=p.get(m)||null,l(c,p,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ji:return p=p.get(g.key===null?m:g.key)||null,s(c,p,g,S);case Hn:return p=p.get(g.key===null?m:g.key)||null,u(c,p,g,S);case Xt:var N=g._init;return x(p,c,m,N(g._payload),S)}if(Dr(g)||Ar(g))return p=p.get(m)||null,f(c,p,g,S,null);Zi(c,g)}return null}function w(p,c,m,g){for(var S=null,N=null,A=c,T=c=0,W=null;A!==null&&T<m.length;T++){A.index>T?(W=A,A=null):W=A.sibling;var D=h(p,A,m[T],g);if(D===null){A===null&&(A=W);break}e&&A&&D.alternate===null&&t(p,A),c=o(D,c,T),N===null?S=D:N.sibling=D,N=D,A=W}if(T===m.length)return n(p,A),ue&&Cn(p,T),S;if(A===null){for(;T<m.length;T++)A=d(p,m[T],g),A!==null&&(c=o(A,c,T),N===null?S=A:N.sibling=A,N=A);return ue&&Cn(p,T),S}for(A=r(p,A);T<m.length;T++)W=x(A,p,T,m[T],g),W!==null&&(e&&W.alternate!==null&&A.delete(W.key===null?T:W.key),c=o(W,c,T),N===null?S=W:N.sibling=W,N=W);return e&&A.forEach(function(be){return t(p,be)}),ue&&Cn(p,T),S}function v(p,c,m,g){var S=Ar(m);if(typeof S!="function")throw Error(b(150));if(m=S.call(m),m==null)throw Error(b(151));for(var N=S=null,A=c,T=c=0,W=null,D=m.next();A!==null&&!D.done;T++,D=m.next()){A.index>T?(W=A,A=null):W=A.sibling;var be=h(p,A,D.value,g);if(be===null){A===null&&(A=W);break}e&&A&&be.alternate===null&&t(p,A),c=o(be,c,T),N===null?S=be:N.sibling=be,N=be,A=W}if(D.done)return n(p,A),ue&&Cn(p,T),S;if(A===null){for(;!D.done;T++,D=m.next())D=d(p,D.value,g),D!==null&&(c=o(D,c,T),N===null?S=D:N.sibling=D,N=D);return ue&&Cn(p,T),S}for(A=r(p,A);!D.done;T++,D=m.next())D=x(A,p,T,D.value,g),D!==null&&(e&&D.alternate!==null&&A.delete(D.key===null?T:D.key),c=o(D,c,T),N===null?S=D:N.sibling=D,N=D);return e&&A.forEach(function(xe){return t(p,xe)}),ue&&Cn(p,T),S}function k(p,c,m,g){if(typeof m=="object"&&m!==null&&m.type===Vn&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ji:e:{for(var S=m.key,N=c;N!==null;){if(N.key===S){if(S=m.type,S===Vn){if(N.tag===7){n(p,N.sibling),c=i(N,m.props.children),c.return=p,p=c;break e}}else if(N.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===Xt&&uf(S)===N.type){n(p,N.sibling),c=i(N,m.props),c.ref=Lr(p,N,m),c.return=p,p=c;break e}n(p,N);break}else t(p,N);N=N.sibling}m.type===Vn?(c=Tn(m.props.children,p.mode,g,m.key),c.return=p,p=c):(g=Eo(m.type,m.key,m.props,null,p.mode,g),g.ref=Lr(p,c,m),g.return=p,p=g)}return a(p);case Hn:e:{for(N=m.key;c!==null;){if(c.key===N)if(c.tag===4&&c.stateNode.containerInfo===m.containerInfo&&c.stateNode.implementation===m.implementation){n(p,c.sibling),c=i(c,m.children||[]),c.return=p,p=c;break e}else{n(p,c);break}else t(p,c);c=c.sibling}c=El(m,p.mode,g),c.return=p,p=c}return a(p);case Xt:return N=m._init,k(p,c,N(m._payload),g)}if(Dr(m))return w(p,c,m,g);if(Ar(m))return v(p,c,m,g);Zi(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,c!==null&&c.tag===6?(n(p,c.sibling),c=i(c,m),c.return=p,p=c):(n(p,c),c=bl(m,p.mode,g),c.return=p,p=c),a(p)):n(p,c)}return k}var vr=$p(!0),Mp=$p(!1),Ai={},Ot=kn(Ai),pi=kn(Ai),mi=kn(Ai);function _n(e){if(e===Ai)throw Error(b(174));return e}function Au(e,t){switch(ie(mi,t),ie(pi,e),ie(Ot,Ai),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Gl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Gl(t,e)}le(Ot),ie(Ot,t)}function gr(){le(Ot),le(pi),le(mi)}function Fp(e){_n(mi.current);var t=_n(Ot.current),n=Gl(t,e.type);t!==n&&(ie(pi,e),ie(Ot,n))}function Tu(e){pi.current===e&&(le(Ot),le(pi))}var ce=kn(0);function Vo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var yl=[];function zu(){for(var e=0;e<yl.length;e++)yl[e]._workInProgressVersionPrimary=null;yl.length=0}var wo=Ht.ReactCurrentDispatcher,xl=Ht.ReactCurrentBatchConfig,Rn=0,fe=null,we=null,Ee=null,Yo=!1,Gr=!1,hi=0,Ig=0;function Me(){throw Error(b(321))}function Iu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ct(e[n],t[n]))return!1;return!0}function Ru(e,t,n,r,i,o){if(Rn=o,fe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wo.current=e===null||e.memoizedState===null?Mg:Fg,e=n(r,i),Gr){o=0;do{if(Gr=!1,hi=0,25<=o)throw Error(b(301));o+=1,Ee=we=null,t.updateQueue=null,wo.current=Dg,e=n(r,i)}while(Gr)}if(wo.current=Qo,t=we!==null&&we.next!==null,Rn=0,Ee=we=fe=null,Yo=!1,t)throw Error(b(300));return e}function Lu(){var e=hi!==0;return hi=0,e}function Et(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?fe.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function pt(){if(we===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ee===null?fe.memoizedState:Ee.next;if(t!==null)Ee=t,we=e;else{if(e===null)throw Error(b(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ee===null?fe.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function vi(e,t){return typeof t=="function"?t(e):t}function wl(e){var t=pt(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=we,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var a=i.next;i.next=o.next,o.next=a}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=a=null,s=null,u=o;do{var f=u.lane;if((Rn&f)===f)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,a=r):s=s.next=d,fe.lanes|=f,Ln|=f}u=u.next}while(u!==null&&u!==o);s===null?a=r:s.next=l,Ct(r,t.memoizedState)||(Ge=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,fe.lanes|=o,Ln|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function kl(e){var t=pt(),n=t.queue;if(n===null)throw Error(b(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do o=e(o,a.action),a=a.next;while(a!==i);Ct(o,t.memoizedState)||(Ge=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Dp(){}function jp(e,t){var n=fe,r=pt(),i=t(),o=!Ct(r.memoizedState,i);if(o&&(r.memoizedState=i,Ge=!0),r=r.queue,$u(Wp.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,gi(9,Bp.bind(null,n,r,i,t),void 0,null),Pe===null)throw Error(b(349));Rn&30||Up(n,t,i)}return i}function Up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bp(e,t,n,r){t.value=n,t.getSnapshot=r,Hp(t)&&Vp(e)}function Wp(e,t,n){return n(function(){Hp(t)&&Vp(e)})}function Hp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ct(e,n)}catch{return!0}}function Vp(e){var t=Dt(e,1);t!==null&&St(t,e,1,-1)}function cf(e){var t=Et();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vi,lastRenderedState:e},t.queue=e,e=e.dispatch=$g.bind(null,fe,e),[t.memoizedState,e]}function gi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=fe.updateQueue,t===null?(t={lastEffect:null,stores:null},fe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Yp(){return pt().memoizedState}function ko(e,t,n,r){var i=Et();fe.flags|=e,i.memoizedState=gi(1|t,n,void 0,r===void 0?null:r)}function va(e,t,n,r){var i=pt();r=r===void 0?null:r;var o=void 0;if(we!==null){var a=we.memoizedState;if(o=a.destroy,r!==null&&Iu(r,a.deps)){i.memoizedState=gi(t,n,o,r);return}}fe.flags|=e,i.memoizedState=gi(1|t,n,o,r)}function ff(e,t){return ko(8390656,8,e,t)}function $u(e,t){return va(2048,8,e,t)}function Qp(e,t){return va(4,2,e,t)}function Gp(e,t){return va(4,4,e,t)}function Xp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Kp(e,t,n){return n=n!=null?n.concat([e]):null,va(4,4,Xp.bind(null,t,e),n)}function Mu(){}function Zp(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Jp(e,t){var n=pt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Iu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function qp(e,t,n){return Rn&21?(Ct(n,t)||(n=np(),fe.lanes|=n,Ln|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ge=!0),e.memoizedState=n)}function Rg(e,t){var n=q;q=n!==0&&4>n?n:4,e(!0);var r=xl.transition;xl.transition={};try{e(!1),t()}finally{q=n,xl.transition=r}}function em(){return pt().memoizedState}function Lg(e,t,n){var r=cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},tm(e))nm(t,n);else if(n=zp(e,t,n,r),n!==null){var i=We();St(n,e,r,i),rm(n,t,r)}}function $g(e,t,n){var r=cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(tm(e))nm(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var a=t.lastRenderedState,l=o(a,n);if(i.hasEagerState=!0,i.eagerState=l,Ct(l,a)){var s=t.interleaved;s===null?(i.next=i,Nu(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=zp(e,t,i,r),n!==null&&(i=We(),St(n,e,r,i),rm(n,t,r))}}function tm(e){var t=e.alternate;return e===fe||t!==null&&t===fe}function nm(e,t){Gr=Yo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function rm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,mu(e,n)}}var Qo={readContext:dt,useCallback:Me,useContext:Me,useEffect:Me,useImperativeHandle:Me,useInsertionEffect:Me,useLayoutEffect:Me,useMemo:Me,useReducer:Me,useRef:Me,useState:Me,useDebugValue:Me,useDeferredValue:Me,useTransition:Me,useMutableSource:Me,useSyncExternalStore:Me,useId:Me,unstable_isNewReconciler:!1},Mg={readContext:dt,useCallback:function(e,t){return Et().memoizedState=[e,t===void 0?null:t],e},useContext:dt,useEffect:ff,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ko(4194308,4,Xp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ko(4194308,4,e,t)},useInsertionEffect:function(e,t){return ko(4,2,e,t)},useMemo:function(e,t){var n=Et();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Et();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Lg.bind(null,fe,e),[r.memoizedState,e]},useRef:function(e){var t=Et();return e={current:e},t.memoizedState=e},useState:cf,useDebugValue:Mu,useDeferredValue:function(e){return Et().memoizedState=e},useTransition:function(){var e=cf(!1),t=e[0];return e=Rg.bind(null,e[1]),Et().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=fe,i=Et();if(ue){if(n===void 0)throw Error(b(407));n=n()}else{if(n=t(),Pe===null)throw Error(b(349));Rn&30||Up(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,ff(Wp.bind(null,r,o,e),[e]),r.flags|=2048,gi(9,Bp.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=Et(),t=Pe.identifierPrefix;if(ue){var n=Rt,r=It;n=(r&~(1<<32-kt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=hi++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Ig++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Fg={readContext:dt,useCallback:Zp,useContext:dt,useEffect:$u,useImperativeHandle:Kp,useInsertionEffect:Qp,useLayoutEffect:Gp,useMemo:Jp,useReducer:wl,useRef:Yp,useState:function(){return wl(vi)},useDebugValue:Mu,useDeferredValue:function(e){var t=pt();return qp(t,we.memoizedState,e)},useTransition:function(){var e=wl(vi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:Dp,useSyncExternalStore:jp,useId:em,unstable_isNewReconciler:!1},Dg={readContext:dt,useCallback:Zp,useContext:dt,useEffect:$u,useImperativeHandle:Kp,useInsertionEffect:Qp,useLayoutEffect:Gp,useMemo:Jp,useReducer:kl,useRef:Yp,useState:function(){return kl(vi)},useDebugValue:Mu,useDeferredValue:function(e){var t=pt();return we===null?t.memoizedState=e:qp(t,we.memoizedState,e)},useTransition:function(){var e=kl(vi)[0],t=pt().memoizedState;return[e,t]},useMutableSource:Dp,useSyncExternalStore:jp,useId:em,unstable_isNewReconciler:!1};function yr(e,t){try{var n="",r=t;do n+=pv(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function Sl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function gs(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var jg=typeof WeakMap=="function"?WeakMap:Map;function im(e,t,n){n=$t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xo||(Xo=!0,_s=r),gs(e,t)},n}function om(e,t,n){n=$t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){gs(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){gs(e,t),typeof r!="function"&&(un===null?un=new Set([this]):un.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function df(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new jg;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=e0.bind(null,e,t,n),t.then(e,e))}function pf(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=$t(-1,1),t.tag=2,sn(n,t,1))),n.lanes|=1),e)}var Ug=Ht.ReactCurrentOwner,Ge=!1;function Be(e,t,n,r){t.child=e===null?Mp(t,null,n,r):vr(t,e.child,n,r)}function hf(e,t,n,r,i){n=n.render;var o=t.ref;return cr(t,i),r=Ru(e,t,n,r,o,i),n=Lu(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(ue&&n&&Su(t),t.flags|=1,Be(e,t,r,i),t.child)}function vf(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Vu(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,am(e,t,o,r,i)):(e=Eo(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var a=o.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(a,r)&&e.ref===t.ref)return jt(e,t,i)}return t.flags|=1,e=fn(o,r),e.ref=t.ref,e.return=t,t.child=e}function am(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(ui(o,r)&&e.ref===t.ref)if(Ge=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(Ge=!0);else return t.lanes=e.lanes,jt(e,t,i)}return ys(e,t,n,r,i)}function lm(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(tr,qe),qe|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(tr,qe),qe|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,ie(tr,qe),qe|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,ie(tr,qe),qe|=r;return Be(e,t,i,n),t.child}function sm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function ys(e,t,n,r,i){var o=Ke(n)?zn:je.current;return o=mr(t,o),cr(t,i),n=Ru(e,t,n,r,o,i),r=Lu(),e!==null&&!Ge?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,jt(e,t,i)):(ue&&r&&Su(t),t.flags|=1,Be(e,t,n,i),t.child)}function gf(e,t,n,r,i){if(Ke(n)){var o=!0;Do(t)}else o=!1;if(cr(t,i),t.stateNode===null)So(e,t),Lp(t,n,r),vs(t,n,r,i),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var s=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=dt(u):(u=Ke(n)?zn:je.current,u=mr(t,u));var f=n.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||s!==u)&&sf(t,a,r,u),Kt=!1;var h=t.memoizedState;a.state=h,Ho(t,r,a,i),s=t.memoizedState,l!==r||h!==s||Xe.current||Kt?(typeof f=="function"&&(hs(t,n,f,r),s=t.memoizedState),(l=Kt||lf(t,n,l,r,h,s,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),a.props=r,a.state=s,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ip(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:gt(t.type,l),a.props=u,d=t.pendingProps,h=a.context,s=n.contextType,typeof s=="object"&&s!==null?s=dt(s):(s=Ke(n)?zn:je.current,s=mr(t,s));var x=n.getDerivedStateFromProps;(f=typeof x=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==d||h!==s)&&sf(t,a,r,s),Kt=!1,h=t.memoizedState,a.state=h,Ho(t,r,a,i);var w=t.memoizedState;l!==d||h!==w||Xe.current||Kt?(typeof x=="function"&&(hs(t,n,x,r),w=t.memoizedState),(u=Kt||lf(t,n,u,r,h,w,s)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,w,s),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,w,s)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=w),a.props=r,a.state=w,a.context=s,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return xs(e,t,n,r,o,i)}function xs(e,t,n,r,i,o){sm(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return i&&tf(t,n,!1),jt(e,t,o);r=t.stateNode,Ug.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=vr(t,e.child,null,o),t.child=vr(t,null,l,o)):Be(e,t,l,o),t.memoizedState=r.state,i&&tf(t,n,!0),t.child}function um(e){var t=e.stateNode;t.pendingContext?ef(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ef(e,t.context,!1),Au(e,t.containerInfo)}function yf(e,t,n,r,i){return hr(),bu(i),t.flags|=256,Be(e,t,n,r),t.child}var ws={dehydrated:null,treeContext:null,retryLane:0};function ks(e){return{baseLanes:e,cachePool:null,transitions:null}}function cm(e,t,n){var r=t.pendingProps,i=ce.current,o=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ie(ce,i&1),e===null)return ps(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,o?(r=t.mode,o=t.child,a={mode:"hidden",children:a},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=a):o=xa(a,r,0,null),e=Tn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=ks(n),t.memoizedState=ws,e):Fu(t,a));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return Bg(e,t,a,r,l,i,n);if(o){o=r.fallback,a=t.mode,i=e.child,l=i.sibling;var s={mode:"hidden",children:r.children};return!(a&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=fn(i,s),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=fn(l,o):(o=Tn(o,a,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,a=e.child.memoizedState,a=a===null?ks(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},o.memoizedState=a,o.childLanes=e.childLanes&~n,t.memoizedState=ws,r}return o=e.child,e=o.sibling,r=fn(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Fu(e,t){return t=xa({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ji(e,t,n,r){return r!==null&&bu(r),vr(t,e.child,null,n),e=Fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bg(e,t,n,r,i,o,a){if(n)return t.flags&256?(t.flags&=-257,r=Sl(Error(b(422))),Ji(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=xa({mode:"visible",children:r.children},i,0,null),o=Tn(o,i,a,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&vr(t,e.child,null,a),t.child.memoizedState=ks(a),t.memoizedState=ws,o);if(!(t.mode&1))return Ji(e,t,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(b(419)),r=Sl(o,r,void 0),Ji(e,t,a,r)}if(l=(a&e.childLanes)!==0,Ge||l){if(r=Pe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Dt(e,i),St(r,e,i,-1))}return Hu(),r=Sl(Error(b(421))),Ji(e,t,a,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=t0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,et=ln(i.nextSibling),tt=t,ue=!0,xt=null,e!==null&&(st[ut++]=It,st[ut++]=Rt,st[ut++]=In,It=e.id,Rt=e.overflow,In=t),t=Fu(t,r.children),t.flags|=4096,t)}function xf(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),ms(e.return,t,n)}function Cl(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function fm(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(Be(e,t,r.children,n),r=ce.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&xf(e,n,t);else if(e.tag===19)xf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(ce,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Vo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Cl(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Cl(t,!0,n,null,o);break;case"together":Cl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function So(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ln|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(b(153));if(t.child!==null){for(e=t.child,n=fn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Wg(e,t,n){switch(t.tag){case 3:um(t),hr();break;case 5:Fp(t);break;case 1:Ke(t.type)&&Do(t);break;case 4:Au(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ie(Bo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(ce,ce.current&1),t.flags|=128,null):n&t.child.childLanes?cm(e,t,n):(ie(ce,ce.current&1),e=jt(e,t,n),e!==null?e.sibling:null);ie(ce,ce.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return fm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ie(ce,ce.current),r)break;return null;case 22:case 23:return t.lanes=0,lm(e,t,n)}return jt(e,t,n)}var dm,Ss,pm,mm;dm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ss=function(){};pm=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,_n(Ot.current);var o=null;switch(n){case"input":i=Hl(e,i),r=Hl(e,r),o=[];break;case"select":i=de({},i,{value:void 0}),r=de({},r,{value:void 0}),o=[];break;case"textarea":i=Ql(e,i),r=Ql(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Mo)}Xl(n,r);var a;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ni.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var s=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||s&&s.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in s)s.hasOwnProperty(a)&&l[a]!==s[a]&&(n||(n={}),n[a]=s[a])}else n||(o||(o=[]),o.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(o=o||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(o=o||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ni.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&oe("scroll",e),o||l===s||(o=[])):(o=o||[]).push(u,s))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};mm=function(e,t,n,r){n!==r&&(t.flags|=4)};function $r(e,t){if(!ue)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Fe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Hg(e,t,n){var r=t.pendingProps;switch(Cu(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Fe(t),null;case 1:return Ke(t.type)&&Fo(),Fe(t),null;case 3:return r=t.stateNode,gr(),le(Xe),le(je),zu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Ki(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,xt!==null&&(As(xt),xt=null))),Ss(e,t),Fe(t),null;case 5:Tu(t);var i=_n(mi.current);if(n=t.type,e!==null&&t.stateNode!=null)pm(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(b(166));return Fe(t),null}if(e=_n(Ot.current),Ki(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Pt]=t,r[di]=o,e=(t.mode&1)!==0,n){case"dialog":oe("cancel",r),oe("close",r);break;case"iframe":case"object":case"embed":oe("load",r);break;case"video":case"audio":for(i=0;i<Ur.length;i++)oe(Ur[i],r);break;case"source":oe("error",r);break;case"img":case"image":case"link":oe("error",r),oe("load",r);break;case"details":oe("toggle",r);break;case"input":_c(r,o),oe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},oe("invalid",r);break;case"textarea":Oc(r,o),oe("invalid",r)}Xl(n,o),i=null;for(var a in o)if(o.hasOwnProperty(a)){var l=o[a];a==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Xi(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Xi(r.textContent,l,e),i=["children",""+l]):ni.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&oe("scroll",r)}switch(n){case"input":Ui(r),Nc(r,o,!0);break;case"textarea":Ui(r),Ac(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Mo)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Ud(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[Pt]=t,e[di]=r,dm(e,t,!1,!1),t.stateNode=e;e:{switch(a=Kl(n,r),n){case"dialog":oe("cancel",e),oe("close",e),i=r;break;case"iframe":case"object":case"embed":oe("load",e),i=r;break;case"video":case"audio":for(i=0;i<Ur.length;i++)oe(Ur[i],e);i=r;break;case"source":oe("error",e),i=r;break;case"img":case"image":case"link":oe("error",e),oe("load",e),i=r;break;case"details":oe("toggle",e),i=r;break;case"input":_c(e,r),i=Hl(e,r),oe("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=de({},r,{value:void 0}),oe("invalid",e);break;case"textarea":Oc(e,r),i=Ql(e,r),oe("invalid",e);break;default:i=r}Xl(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var s=l[o];o==="style"?Hd(e,s):o==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Bd(e,s)):o==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&ri(e,s):typeof s=="number"&&ri(e,""+s):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ni.hasOwnProperty(o)?s!=null&&o==="onScroll"&&oe("scroll",e):s!=null&&su(e,o,s,a))}switch(n){case"input":Ui(e),Nc(e,r,!1);break;case"textarea":Ui(e),Ac(e);break;case"option":r.value!=null&&e.setAttribute("value",""+mn(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?ar(e,!!r.multiple,o,!1):r.defaultValue!=null&&ar(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Mo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Fe(t),null;case 6:if(e&&t.stateNode!=null)mm(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(b(166));if(n=_n(mi.current),_n(Ot.current),Ki(t)){if(r=t.stateNode,n=t.memoizedProps,r[Pt]=t,(o=r.nodeValue!==n)&&(e=tt,e!==null))switch(e.tag){case 3:Xi(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Xi(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Pt]=t,t.stateNode=r}return Fe(t),null;case 13:if(le(ce),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ue&&et!==null&&t.mode&1&&!(t.flags&128))Tp(),hr(),t.flags|=98560,o=!1;else if(o=Ki(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(b(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(b(317));o[Pt]=t}else hr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Fe(t),o=!1}else xt!==null&&(As(xt),xt=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||ce.current&1?ke===0&&(ke=3):Hu())),t.updateQueue!==null&&(t.flags|=4),Fe(t),null);case 4:return gr(),Ss(e,t),e===null&&ci(t.stateNode.containerInfo),Fe(t),null;case 10:return _u(t.type._context),Fe(t),null;case 17:return Ke(t.type)&&Fo(),Fe(t),null;case 19:if(le(ce),o=t.memoizedState,o===null)return Fe(t),null;if(r=(t.flags&128)!==0,a=o.rendering,a===null)if(r)$r(o,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Vo(e),a!==null){for(t.flags|=128,$r(o,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,a=o.alternate,a===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=a.childLanes,o.lanes=a.lanes,o.child=a.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=a.memoizedProps,o.memoizedState=a.memoizedState,o.updateQueue=a.updateQueue,o.type=a.type,e=a.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(ce,ce.current&1|2),t.child}e=e.sibling}o.tail!==null&&ge()>xr&&(t.flags|=128,r=!0,$r(o,!1),t.lanes=4194304)}else{if(!r)if(e=Vo(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),$r(o,!0),o.tail===null&&o.tailMode==="hidden"&&!a.alternate&&!ue)return Fe(t),null}else 2*ge()-o.renderingStartTime>xr&&n!==1073741824&&(t.flags|=128,r=!0,$r(o,!1),t.lanes=4194304);o.isBackwards?(a.sibling=t.child,t.child=a):(n=o.last,n!==null?n.sibling=a:t.child=a,o.last=a)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=ge(),t.sibling=null,n=ce.current,ie(ce,r?n&1|2:n&1),t):(Fe(t),null);case 22:case 23:return Wu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?qe&1073741824&&(Fe(t),t.subtreeFlags&6&&(t.flags|=8192)):Fe(t),null;case 24:return null;case 25:return null}throw Error(b(156,t.tag))}function Vg(e,t){switch(Cu(t),t.tag){case 1:return Ke(t.type)&&Fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return gr(),le(Xe),le(je),zu(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tu(t),null;case 13:if(le(ce),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(b(340));hr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(ce),null;case 4:return gr(),null;case 10:return _u(t.type._context),null;case 22:case 23:return Wu(),null;case 24:return null;default:return null}}var qi=!1,De=!1,Yg=typeof WeakSet=="function"?WeakSet:Set,L=null;function er(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){me(e,t,r)}else n.current=null}function Cs(e,t,n){try{n()}catch(r){me(e,t,r)}}var wf=!1;function Qg(e,t){if(as=Ro,e=yp(),ku(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var a=0,l=-1,s=-1,u=0,f=0,d=e,h=null;t:for(;;){for(var x;d!==n||i!==0&&d.nodeType!==3||(l=a+i),d!==o||r!==0&&d.nodeType!==3||(s=a+r),d.nodeType===3&&(a+=d.nodeValue.length),(x=d.firstChild)!==null;)h=d,d=x;for(;;){if(d===e)break t;if(h===n&&++u===i&&(l=a),h===o&&++f===r&&(s=a),(x=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=x}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(ls={focusedElem:e,selectionRange:n},Ro=!1,L=t;L!==null;)if(t=L,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,L=e;else for(;L!==null;){t=L;try{var w=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var v=w.memoizedProps,k=w.memoizedState,p=t.stateNode,c=p.getSnapshotBeforeUpdate(t.elementType===t.type?v:gt(t.type,v),k);p.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(b(163))}}catch(g){me(t,t.return,g)}if(e=t.sibling,e!==null){e.return=t.return,L=e;break}L=t.return}return w=wf,wf=!1,w}function Xr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Cs(t,n,o)}i=i.next}while(i!==r)}}function ga(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function bs(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function hm(e){var t=e.alternate;t!==null&&(e.alternate=null,hm(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Pt],delete t[di],delete t[cs],delete t[Og],delete t[Ag])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function vm(e){return e.tag===5||e.tag===3||e.tag===4}function kf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||vm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Es(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Mo));else if(r!==4&&(e=e.child,e!==null))for(Es(e,t,n),e=e.sibling;e!==null;)Es(e,t,n),e=e.sibling}function Ps(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ps(e,t,n),e=e.sibling;e!==null;)Ps(e,t,n),e=e.sibling}var ze=null,yt=!1;function Qt(e,t,n){for(n=n.child;n!==null;)gm(e,t,n),n=n.sibling}function gm(e,t,n){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(ua,n)}catch{}switch(n.tag){case 5:De||er(n,t);case 6:var r=ze,i=yt;ze=null,Qt(e,t,n),ze=r,yt=i,ze!==null&&(yt?(e=ze,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ze.removeChild(n.stateNode));break;case 18:ze!==null&&(yt?(e=ze,n=n.stateNode,e.nodeType===8?vl(e.parentNode,n):e.nodeType===1&&vl(e,n),li(e)):vl(ze,n.stateNode));break;case 4:r=ze,i=yt,ze=n.stateNode.containerInfo,yt=!0,Qt(e,t,n),ze=r,yt=i;break;case 0:case 11:case 14:case 15:if(!De&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,a=o.destroy;o=o.tag,a!==void 0&&(o&2||o&4)&&Cs(n,t,a),i=i.next}while(i!==r)}Qt(e,t,n);break;case 1:if(!De&&(er(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){me(n,t,l)}Qt(e,t,n);break;case 21:Qt(e,t,n);break;case 22:n.mode&1?(De=(r=De)||n.memoizedState!==null,Qt(e,t,n),De=r):Qt(e,t,n);break;default:Qt(e,t,n)}}function Sf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Yg),t.forEach(function(r){var i=n0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function vt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:ze=l.stateNode,yt=!1;break e;case 3:ze=l.stateNode.containerInfo,yt=!0;break e;case 4:ze=l.stateNode.containerInfo,yt=!0;break e}l=l.return}if(ze===null)throw Error(b(160));gm(o,a,i),ze=null,yt=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(u){me(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ym(t,e),t=t.sibling}function ym(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(vt(t,e),bt(e),r&4){try{Xr(3,e,e.return),ga(3,e)}catch(v){me(e,e.return,v)}try{Xr(5,e,e.return)}catch(v){me(e,e.return,v)}}break;case 1:vt(t,e),bt(e),r&512&&n!==null&&er(n,n.return);break;case 5:if(vt(t,e),bt(e),r&512&&n!==null&&er(n,n.return),e.flags&32){var i=e.stateNode;try{ri(i,"")}catch(v){me(e,e.return,v)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,a=n!==null?n.memoizedProps:o,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&Dd(i,o),Kl(l,a);var u=Kl(l,o);for(a=0;a<s.length;a+=2){var f=s[a],d=s[a+1];f==="style"?Hd(i,d):f==="dangerouslySetInnerHTML"?Bd(i,d):f==="children"?ri(i,d):su(i,f,d,u)}switch(l){case"input":Vl(i,o);break;case"textarea":jd(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?ar(i,!!o.multiple,x,!1):h!==!!o.multiple&&(o.defaultValue!=null?ar(i,!!o.multiple,o.defaultValue,!0):ar(i,!!o.multiple,o.multiple?[]:"",!1))}i[di]=o}catch(v){me(e,e.return,v)}}break;case 6:if(vt(t,e),bt(e),r&4){if(e.stateNode===null)throw Error(b(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(v){me(e,e.return,v)}}break;case 3:if(vt(t,e),bt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{li(t.containerInfo)}catch(v){me(e,e.return,v)}break;case 4:vt(t,e),bt(e);break;case 13:vt(t,e),bt(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Uu=ge())),r&4&&Sf(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(De=(u=De)||f,vt(t,e),De=u):vt(t,e),bt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(L=e,f=e.child;f!==null;){for(d=L=f;L!==null;){switch(h=L,x=h.child,h.tag){case 0:case 11:case 14:case 15:Xr(4,h,h.return);break;case 1:er(h,h.return);var w=h.stateNode;if(typeof w.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,w.props=t.memoizedProps,w.state=t.memoizedState,w.componentWillUnmount()}catch(v){me(r,n,v)}}break;case 5:er(h,h.return);break;case 22:if(h.memoizedState!==null){bf(d);continue}}x!==null?(x.return=h,L=x):bf(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{i=d.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=d.stateNode,s=d.memoizedProps.style,a=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=Wd("display",a))}catch(v){me(e,e.return,v)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){me(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:vt(t,e),bt(e),r&4&&Sf(e);break;case 21:break;default:vt(t,e),bt(e)}}function bt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(vm(n)){var r=n;break e}n=n.return}throw Error(b(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ri(i,""),r.flags&=-33);var o=kf(e);Ps(e,o,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=kf(e);Es(e,l,a);break;default:throw Error(b(161))}}catch(s){me(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Gg(e,t,n){L=e,xm(e)}function xm(e,t,n){for(var r=(e.mode&1)!==0;L!==null;){var i=L,o=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||qi;if(!a){var l=i.alternate,s=l!==null&&l.memoizedState!==null||De;l=qi;var u=De;if(qi=a,(De=s)&&!u)for(L=i;L!==null;)a=L,s=a.child,a.tag===22&&a.memoizedState!==null?Ef(i):s!==null?(s.return=a,L=s):Ef(i);for(;o!==null;)L=o,xm(o),o=o.sibling;L=i,qi=l,De=u}Cf(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,L=o):Cf(e)}}function Cf(e){for(;L!==null;){var t=L;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:De||ga(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!De)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:gt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&af(t,o,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}af(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&li(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(b(163))}De||t.flags&512&&bs(t)}catch(h){me(t,t.return,h)}}if(t===e){L=null;break}if(n=t.sibling,n!==null){n.return=t.return,L=n;break}L=t.return}}function bf(e){for(;L!==null;){var t=L;if(t===e){L=null;break}var n=t.sibling;if(n!==null){n.return=t.return,L=n;break}L=t.return}}function Ef(e){for(;L!==null;){var t=L;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ga(4,t)}catch(s){me(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(s){me(t,i,s)}}var o=t.return;try{bs(t)}catch(s){me(t,o,s)}break;case 5:var a=t.return;try{bs(t)}catch(s){me(t,a,s)}}}catch(s){me(t,t.return,s)}if(t===e){L=null;break}var l=t.sibling;if(l!==null){l.return=t.return,L=l;break}L=t.return}}var Xg=Math.ceil,Go=Ht.ReactCurrentDispatcher,Du=Ht.ReactCurrentOwner,ft=Ht.ReactCurrentBatchConfig,G=0,Pe=null,ye=null,Ie=0,qe=0,tr=kn(0),ke=0,yi=null,Ln=0,ya=0,ju=0,Kr=null,Qe=null,Uu=0,xr=1/0,Tt=null,Xo=!1,_s=null,un=null,eo=!1,en=null,Ko=0,Zr=0,Ns=null,Co=-1,bo=0;function We(){return G&6?ge():Co!==-1?Co:Co=ge()}function cn(e){return e.mode&1?G&2&&Ie!==0?Ie&-Ie:zg.transition!==null?(bo===0&&(bo=np()),bo):(e=q,e!==0||(e=window.event,e=e===void 0?16:up(e.type)),e):1}function St(e,t,n,r){if(50<Zr)throw Zr=0,Ns=null,Error(b(185));_i(e,n,r),(!(G&2)||e!==Pe)&&(e===Pe&&(!(G&2)&&(ya|=n),ke===4&&Jt(e,Ie)),Ze(e,r),n===1&&G===0&&!(t.mode&1)&&(xr=ge()+500,ma&&Sn()))}function Ze(e,t){var n=e.callbackNode;zv(e,t);var r=Io(e,e===Pe?Ie:0);if(r===0)n!==null&&Ic(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ic(n),t===1)e.tag===0?Tg(Pf.bind(null,e)):Np(Pf.bind(null,e)),_g(function(){!(G&6)&&Sn()}),n=null;else{switch(rp(r)){case 1:n=pu;break;case 4:n=ep;break;case 16:n=zo;break;case 536870912:n=tp;break;default:n=zo}n=_m(n,wm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function wm(e,t){if(Co=-1,bo=0,G&6)throw Error(b(327));var n=e.callbackNode;if(fr()&&e.callbackNode!==n)return null;var r=Io(e,e===Pe?Ie:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Zo(e,r);else{t=r;var i=G;G|=2;var o=Sm();(Pe!==e||Ie!==t)&&(Tt=null,xr=ge()+500,An(e,t));do try{Jg();break}catch(l){km(e,l)}while(1);Pu(),Go.current=o,G=i,ye!==null?t=0:(Pe=null,Ie=0,t=ke)}if(t!==0){if(t===2&&(i=ts(e),i!==0&&(r=i,t=Os(e,i))),t===1)throw n=yi,An(e,0),Jt(e,r),Ze(e,ge()),n;if(t===6)Jt(e,r);else{if(i=e.current.alternate,!(r&30)&&!Kg(i)&&(t=Zo(e,r),t===2&&(o=ts(e),o!==0&&(r=o,t=Os(e,o))),t===1))throw n=yi,An(e,0),Jt(e,r),Ze(e,ge()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(b(345));case 2:bn(e,Qe,Tt);break;case 3:if(Jt(e,r),(r&130023424)===r&&(t=Uu+500-ge(),10<t)){if(Io(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){We(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=us(bn.bind(null,e,Qe,Tt),t);break}bn(e,Qe,Tt);break;case 4:if(Jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-kt(r);o=1<<a,a=t[a],a>i&&(i=a),r&=~o}if(r=i,r=ge()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Xg(r/1960))-r,10<r){e.timeoutHandle=us(bn.bind(null,e,Qe,Tt),r);break}bn(e,Qe,Tt);break;case 5:bn(e,Qe,Tt);break;default:throw Error(b(329))}}}return Ze(e,ge()),e.callbackNode===n?wm.bind(null,e):null}function Os(e,t){var n=Kr;return e.current.memoizedState.isDehydrated&&(An(e,t).flags|=256),e=Zo(e,t),e!==2&&(t=Qe,Qe=n,t!==null&&As(t)),e}function As(e){Qe===null?Qe=e:Qe.push.apply(Qe,e)}function Kg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ct(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Jt(e,t){for(t&=~ju,t&=~ya,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kt(t),r=1<<n;e[n]=-1,t&=~r}}function Pf(e){if(G&6)throw Error(b(327));fr();var t=Io(e,0);if(!(t&1))return Ze(e,ge()),null;var n=Zo(e,t);if(e.tag!==0&&n===2){var r=ts(e);r!==0&&(t=r,n=Os(e,r))}if(n===1)throw n=yi,An(e,0),Jt(e,t),Ze(e,ge()),n;if(n===6)throw Error(b(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bn(e,Qe,Tt),Ze(e,ge()),null}function Bu(e,t){var n=G;G|=1;try{return e(t)}finally{G=n,G===0&&(xr=ge()+500,ma&&Sn())}}function $n(e){en!==null&&en.tag===0&&!(G&6)&&fr();var t=G;G|=1;var n=ft.transition,r=q;try{if(ft.transition=null,q=1,e)return e()}finally{q=r,ft.transition=n,G=t,!(G&6)&&Sn()}}function Wu(){qe=tr.current,le(tr)}function An(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Pg(n)),ye!==null)for(n=ye.return;n!==null;){var r=n;switch(Cu(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fo();break;case 3:gr(),le(Xe),le(je),zu();break;case 5:Tu(r);break;case 4:gr();break;case 13:le(ce);break;case 19:le(ce);break;case 10:_u(r.type._context);break;case 22:case 23:Wu()}n=n.return}if(Pe=e,ye=e=fn(e.current,null),Ie=qe=t,ke=0,yi=null,ju=ya=Ln=0,Qe=Kr=null,Pn!==null){for(t=0;t<Pn.length;t++)if(n=Pn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var a=o.next;o.next=i,r.next=a}n.pending=r}Pn=null}return e}function km(e,t){do{var n=ye;try{if(Pu(),wo.current=Qo,Yo){for(var r=fe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Yo=!1}if(Rn=0,Ee=we=fe=null,Gr=!1,hi=0,Du.current=null,n===null||n.return===null){ke=1,yi=t,ye=null;break}e:{var o=e,a=n.return,l=n,s=t;if(t=Ie,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,f=l,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var x=pf(a);if(x!==null){x.flags&=-257,mf(x,a,l,o,t),x.mode&1&&df(o,u,t),t=x,s=u;var w=t.updateQueue;if(w===null){var v=new Set;v.add(s),t.updateQueue=v}else w.add(s);break e}else{if(!(t&1)){df(o,u,t),Hu();break e}s=Error(b(426))}}else if(ue&&l.mode&1){var k=pf(a);if(k!==null){!(k.flags&65536)&&(k.flags|=256),mf(k,a,l,o,t),bu(yr(s,l));break e}}o=s=yr(s,l),ke!==4&&(ke=2),Kr===null?Kr=[o]:Kr.push(o),o=a;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var p=im(o,s,t);of(o,p);break e;case 1:l=s;var c=o.type,m=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(un===null||!un.has(m)))){o.flags|=65536,t&=-t,o.lanes|=t;var g=om(o,l,t);of(o,g);break e}}o=o.return}while(o!==null)}bm(n)}catch(S){t=S,ye===n&&n!==null&&(ye=n=n.return);continue}break}while(1)}function Sm(){var e=Go.current;return Go.current=Qo,e===null?Qo:e}function Hu(){(ke===0||ke===3||ke===2)&&(ke=4),Pe===null||!(Ln&268435455)&&!(ya&268435455)||Jt(Pe,Ie)}function Zo(e,t){var n=G;G|=2;var r=Sm();(Pe!==e||Ie!==t)&&(Tt=null,An(e,t));do try{Zg();break}catch(i){km(e,i)}while(1);if(Pu(),G=n,Go.current=r,ye!==null)throw Error(b(261));return Pe=null,Ie=0,ke}function Zg(){for(;ye!==null;)Cm(ye)}function Jg(){for(;ye!==null&&!Cv();)Cm(ye)}function Cm(e){var t=Pm(e.alternate,e,qe);e.memoizedProps=e.pendingProps,t===null?bm(e):ye=t,Du.current=null}function bm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Vg(n,t),n!==null){n.flags&=32767,ye=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,ye=null;return}}else if(n=Hg(n,t,qe),n!==null){ye=n;return}if(t=t.sibling,t!==null){ye=t;return}ye=t=e}while(t!==null);ke===0&&(ke=5)}function bn(e,t,n){var r=q,i=ft.transition;try{ft.transition=null,q=1,qg(e,t,n,r)}finally{ft.transition=i,q=r}return null}function qg(e,t,n,r){do fr();while(en!==null);if(G&6)throw Error(b(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(b(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Iv(e,o),e===Pe&&(ye=Pe=null,Ie=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||eo||(eo=!0,_m(zo,function(){return fr(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ft.transition,ft.transition=null;var a=q;q=1;var l=G;G|=4,Du.current=null,Qg(e,n),ym(n,e),xg(ls),Ro=!!as,ls=as=null,e.current=n,Gg(n),bv(),G=l,q=a,ft.transition=o}else e.current=n;if(eo&&(eo=!1,en=e,Ko=i),o=e.pendingLanes,o===0&&(un=null),_v(n.stateNode),Ze(e,ge()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Xo)throw Xo=!1,e=_s,_s=null,e;return Ko&1&&e.tag!==0&&fr(),o=e.pendingLanes,o&1?e===Ns?Zr++:(Zr=0,Ns=e):Zr=0,Sn(),null}function fr(){if(en!==null){var e=rp(Ko),t=ft.transition,n=q;try{if(ft.transition=null,q=16>e?16:e,en===null)var r=!1;else{if(e=en,en=null,Ko=0,G&6)throw Error(b(331));var i=G;for(G|=4,L=e.current;L!==null;){var o=L,a=o.child;if(L.flags&16){var l=o.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(L=u;L!==null;){var f=L;switch(f.tag){case 0:case 11:case 15:Xr(8,f,o)}var d=f.child;if(d!==null)d.return=f,L=d;else for(;L!==null;){f=L;var h=f.sibling,x=f.return;if(hm(f),f===u){L=null;break}if(h!==null){h.return=x,L=h;break}L=x}}}var w=o.alternate;if(w!==null){var v=w.child;if(v!==null){w.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}L=o}}if(o.subtreeFlags&2064&&a!==null)a.return=o,L=a;else e:for(;L!==null;){if(o=L,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Xr(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,L=p;break e}L=o.return}}var c=e.current;for(L=c;L!==null;){a=L;var m=a.child;if(a.subtreeFlags&2064&&m!==null)m.return=a,L=m;else e:for(a=c;L!==null;){if(l=L,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ga(9,l)}}catch(S){me(l,l.return,S)}if(l===a){L=null;break e}var g=l.sibling;if(g!==null){g.return=l.return,L=g;break e}L=l.return}}if(G=i,Sn(),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(ua,e)}catch{}r=!0}return r}finally{q=n,ft.transition=t}}return!1}function _f(e,t,n){t=yr(n,t),t=im(e,t,1),e=sn(e,t,1),t=We(),e!==null&&(_i(e,1,t),Ze(e,t))}function me(e,t,n){if(e.tag===3)_f(e,e,n);else for(;t!==null;){if(t.tag===3){_f(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(un===null||!un.has(r))){e=yr(n,e),e=om(t,e,1),t=sn(t,e,1),e=We(),t!==null&&(_i(t,1,e),Ze(t,e));break}}t=t.return}}function e0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=We(),e.pingedLanes|=e.suspendedLanes&n,Pe===e&&(Ie&n)===n&&(ke===4||ke===3&&(Ie&130023424)===Ie&&500>ge()-Uu?An(e,0):ju|=n),Ze(e,t)}function Em(e,t){t===0&&(e.mode&1?(t=Hi,Hi<<=1,!(Hi&130023424)&&(Hi=4194304)):t=1);var n=We();e=Dt(e,t),e!==null&&(_i(e,t,n),Ze(e,n))}function t0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Em(e,n)}function n0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(b(314))}r!==null&&r.delete(t),Em(e,n)}var Pm;Pm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xe.current)Ge=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ge=!1,Wg(e,t,n);Ge=!!(e.flags&131072)}else Ge=!1,ue&&t.flags&1048576&&Op(t,Uo,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;So(e,t),e=t.pendingProps;var i=mr(t,je.current);cr(t,n),i=Ru(null,t,r,e,i,n);var o=Lu();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ke(r)?(o=!0,Do(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ou(t),i.updater=ha,t.stateNode=i,i._reactInternals=t,vs(t,r,e,n),t=xs(null,t,r,!0,o,n)):(t.tag=0,ue&&o&&Su(t),Be(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(So(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=i0(r),e=gt(r,e),i){case 0:t=ys(null,t,r,e,n);break e;case 1:t=gf(null,t,r,e,n);break e;case 11:t=hf(null,t,r,e,n);break e;case 14:t=vf(null,t,r,gt(r.type,e),n);break e}throw Error(b(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),ys(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),gf(e,t,r,i,n);case 3:e:{if(um(t),e===null)throw Error(b(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Ip(e,t),Ho(t,r,null,n);var a=t.memoizedState;if(r=a.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=yr(Error(b(423)),t),t=yf(e,t,r,n,i);break e}else if(r!==i){i=yr(Error(b(424)),t),t=yf(e,t,r,n,i);break e}else for(et=ln(t.stateNode.containerInfo.firstChild),tt=t,ue=!0,xt=null,n=Mp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(hr(),r===i){t=jt(e,t,n);break e}Be(e,t,r,n)}t=t.child}return t;case 5:return Fp(t),e===null&&ps(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,a=i.children,ss(r,i)?a=null:o!==null&&ss(r,o)&&(t.flags|=32),sm(e,t),Be(e,t,a,n),t.child;case 6:return e===null&&ps(t),null;case 13:return cm(e,t,n);case 4:return Au(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=vr(t,null,r,n):Be(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),hf(e,t,r,i,n);case 7:return Be(e,t,t.pendingProps,n),t.child;case 8:return Be(e,t,t.pendingProps.children,n),t.child;case 12:return Be(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,a=i.value,ie(Bo,r._currentValue),r._currentValue=a,o!==null)if(Ct(o.value,a)){if(o.children===i.children&&!Xe.current){t=jt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){a=o.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(o.tag===1){s=$t(-1,n&-n),s.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?s.next=s:(s.next=f.next,f.next=s),u.pending=s}}o.lanes|=n,s=o.alternate,s!==null&&(s.lanes|=n),ms(o.return,n,t),l.lanes|=n;break}s=s.next}}else if(o.tag===10)a=o.type===t.type?null:o.child;else if(o.tag===18){if(a=o.return,a===null)throw Error(b(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),ms(a,n,t),a=o.sibling}else a=o.child;if(a!==null)a.return=o;else for(a=o;a!==null;){if(a===t){a=null;break}if(o=a.sibling,o!==null){o.return=a.return,a=o;break}a=a.return}o=a}Be(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,cr(t,n),i=dt(i),r=r(i),t.flags|=1,Be(e,t,r,n),t.child;case 14:return r=t.type,i=gt(r,t.pendingProps),i=gt(r.type,i),vf(e,t,r,i,n);case 15:return am(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:gt(r,i),So(e,t),t.tag=1,Ke(r)?(e=!0,Do(t)):e=!1,cr(t,n),Lp(t,r,i),vs(t,r,i,n),xs(null,t,r,!0,e,n);case 19:return fm(e,t,n);case 22:return lm(e,t,n)}throw Error(b(156,t.tag))};function _m(e,t){return qd(e,t)}function r0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ct(e,t,n,r){return new r0(e,t,n,r)}function Vu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function i0(e){if(typeof e=="function")return Vu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===cu)return 11;if(e===fu)return 14}return 2}function fn(e,t){var n=e.alternate;return n===null?(n=ct(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Eo(e,t,n,r,i,o){var a=2;if(r=e,typeof e=="function")Vu(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Vn:return Tn(n.children,i,o,t);case uu:a=8,i|=8;break;case jl:return e=ct(12,n,t,i|2),e.elementType=jl,e.lanes=o,e;case Ul:return e=ct(13,n,t,i),e.elementType=Ul,e.lanes=o,e;case Bl:return e=ct(19,n,t,i),e.elementType=Bl,e.lanes=o,e;case $d:return xa(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Rd:a=10;break e;case Ld:a=9;break e;case cu:a=11;break e;case fu:a=14;break e;case Xt:a=16,r=null;break e}throw Error(b(130,e==null?e:typeof e,""))}return t=ct(a,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function Tn(e,t,n,r){return e=ct(7,e,r,t),e.lanes=n,e}function xa(e,t,n,r){return e=ct(22,e,r,t),e.elementType=$d,e.lanes=n,e.stateNode={isHidden:!1},e}function bl(e,t,n){return e=ct(6,e,null,t),e.lanes=n,e}function El(e,t,n){return t=ct(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function o0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Yu(e,t,n,r,i,o,a,l,s){return e=new o0(e,t,n,l,s),t===1?(t=1,o===!0&&(t|=8)):t=0,o=ct(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ou(o),e}function a0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Hn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Nm(e){if(!e)return hn;e=e._reactInternals;e:{if(jn(e)!==e||e.tag!==1)throw Error(b(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ke(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(b(171))}if(e.tag===1){var n=e.type;if(Ke(n))return _p(e,n,t)}return t}function Om(e,t,n,r,i,o,a,l,s){return e=Yu(n,r,!0,e,i,o,a,l,s),e.context=Nm(null),n=e.current,r=We(),i=cn(n),o=$t(r,i),o.callback=t??null,sn(n,o,i),e.current.lanes=i,_i(e,i,r),Ze(e,r),e}function wa(e,t,n,r){var i=t.current,o=We(),a=cn(i);return n=Nm(n),t.context===null?t.context=n:t.pendingContext=n,t=$t(o,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=sn(i,t,a),e!==null&&(St(e,i,a,o),xo(e,i,a)),a}function Jo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Nf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Qu(e,t){Nf(e,t),(e=e.alternate)&&Nf(e,t)}function l0(){return null}var Am=typeof reportError=="function"?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}ka.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(b(409));wa(e,t,null,null)};ka.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$n(function(){wa(null,e,null,null)}),t[Ft]=null}};function ka(e){this._internalRoot=e}ka.prototype.unstable_scheduleHydration=function(e){if(e){var t=ap();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zt.length&&t!==0&&t<Zt[n].priority;n++);Zt.splice(n,0,e),n===0&&sp(e)}};function Xu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Of(){}function s0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=Jo(a);o.call(u)}}var a=Om(t,r,e,0,null,!1,!1,"",Of);return e._reactRootContainer=a,e[Ft]=a.current,ci(e.nodeType===8?e.parentNode:e),$n(),a}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Jo(s);l.call(u)}}var s=Yu(e,0,!1,null,null,!1,!1,"",Of);return e._reactRootContainer=s,e[Ft]=s.current,ci(e.nodeType===8?e.parentNode:e),$n(function(){wa(t,s,n,r)}),s}function Ca(e,t,n,r,i){var o=n._reactRootContainer;if(o){var a=o;if(typeof i=="function"){var l=i;i=function(){var s=Jo(a);l.call(s)}}wa(t,a,e,i)}else a=s0(n,t,e,i,r);return Jo(a)}ip=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=jr(t.pendingLanes);n!==0&&(mu(t,n|1),Ze(t,ge()),!(G&6)&&(xr=ge()+500,Sn()))}break;case 13:$n(function(){var r=Dt(e,1);if(r!==null){var i=We();St(r,e,1,i)}}),Qu(e,1)}};hu=function(e){if(e.tag===13){var t=Dt(e,134217728);if(t!==null){var n=We();St(t,e,134217728,n)}Qu(e,134217728)}};op=function(e){if(e.tag===13){var t=cn(e),n=Dt(e,t);if(n!==null){var r=We();St(n,e,t,r)}Qu(e,t)}};ap=function(){return q};lp=function(e,t){var n=q;try{return q=e,t()}finally{q=n}};Jl=function(e,t,n){switch(t){case"input":if(Vl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=pa(r);if(!i)throw Error(b(90));Fd(r),Vl(r,i)}}}break;case"textarea":jd(e,n);break;case"select":t=n.value,t!=null&&ar(e,!!n.multiple,t,!1)}};Qd=Bu;Gd=$n;var u0={usingClientEntryPoint:!1,Events:[Oi,Xn,pa,Vd,Yd,Bu]},Mr={findFiberByHostInstance:En,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},c0={bundleType:Mr.bundleType,version:Mr.version,rendererPackageName:Mr.rendererPackageName,rendererConfig:Mr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ht.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Zd(e),e===null?null:e.stateNode},findFiberByHostInstance:Mr.findFiberByHostInstance||l0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var to=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!to.isDisabled&&to.supportsFiber)try{ua=to.inject(c0),Nt=to}catch{}}it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=u0;it.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Xu(t))throw Error(b(200));return a0(e,t,null,n)};it.createRoot=function(e,t){if(!Xu(e))throw Error(b(299));var n=!1,r="",i=Am;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Yu(e,1,!1,null,null,n,!1,r,i),e[Ft]=t.current,ci(e.nodeType===8?e.parentNode:e),new Gu(t)};it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(b(188)):(e=Object.keys(e).join(","),Error(b(268,e)));return e=Zd(t),e=e===null?null:e.stateNode,e};it.flushSync=function(e){return $n(e)};it.hydrate=function(e,t,n){if(!Sa(t))throw Error(b(200));return Ca(null,e,t,!0,n)};it.hydrateRoot=function(e,t,n){if(!Xu(e))throw Error(b(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",a=Am;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=Om(t,null,e,1,n??null,i,!1,o,a),e[Ft]=t.current,ci(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new ka(t)};it.render=function(e,t,n){if(!Sa(t))throw Error(b(200));return Ca(null,e,t,!1,n)};it.unmountComponentAtNode=function(e){if(!Sa(e))throw Error(b(40));return e._reactRootContainer?($n(function(){Ca(null,null,e,!1,function(){e._reactRootContainer=null,e[Ft]=null})}),!0):!1};it.unstable_batchedUpdates=Bu;it.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Sa(n))throw Error(b(200));if(e==null||e._reactInternals===void 0)throw Error(b(38));return Ca(e,t,n,!1,r)};it.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=it})(lv);var Af=Ml;$l.createRoot=Af.createRoot,$l.hydrateRoot=Af.hydrateRoot;/**
 * @remix-run/router v1.5.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xi(){return xi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},xi.apply(this,arguments)}var tn;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(tn||(tn={}));const Tf="popstate";function f0(e){e===void 0&&(e={});function t(r,i){let{pathname:o,search:a,hash:l}=r.location;return Ts("",{pathname:o,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:qo(i)}return p0(t,n,null,e)}function Se(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ku(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function d0(){return Math.random().toString(36).substr(2,8)}function zf(e,t){return{usr:e.state,key:e.key,idx:t}}function Ts(e,t,n,r){return n===void 0&&(n=null),xi({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Pr(t):t,{state:n,key:t&&t.key||r||d0()})}function qo(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Pr(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function p0(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,a=i.history,l=tn.Pop,s=null,u=f();u==null&&(u=0,a.replaceState(xi({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function d(){l=tn.Pop;let k=f(),p=k==null?null:k-u;u=k,s&&s({action:l,location:v.location,delta:p})}function h(k,p){l=tn.Push;let c=Ts(v.location,k,p);n&&n(c,k),u=f()+1;let m=zf(c,u),g=v.createHref(c);try{a.pushState(m,"",g)}catch{i.location.assign(g)}o&&s&&s({action:l,location:v.location,delta:1})}function x(k,p){l=tn.Replace;let c=Ts(v.location,k,p);n&&n(c,k),u=f();let m=zf(c,u),g=v.createHref(c);a.replaceState(m,"",g),o&&s&&s({action:l,location:v.location,delta:0})}function w(k){let p=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof k=="string"?k:qo(k);return Se(p,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,p)}let v={get action(){return l},get location(){return e(i,a)},listen(k){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(Tf,d),s=k,()=>{i.removeEventListener(Tf,d),s=null}},createHref(k){return t(i,k)},createURL:w,encodeLocation(k){let p=w(k);return{pathname:p.pathname,search:p.search,hash:p.hash}},push:h,replace:x,go(k){return a.go(k)}};return v}var If;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(If||(If={}));function m0(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Pr(t):t,i=Zu(r.pathname||"/",n);if(i==null)return null;let o=Tm(e);h0(o);let a=null;for(let l=0;a==null&&l<o.length;++l)a=b0(o[l],_0(i));return a}function Tm(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,a,l)=>{let s={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:a,route:o};s.relativePath.startsWith("/")&&(Se(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=dn([r,s.relativePath]),f=n.concat(s);o.children&&o.children.length>0&&(Se(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Tm(o.children,t,f,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:S0(u,o.index),routesMeta:f})};return e.forEach((o,a)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,a);else for(let s of zm(o.path))i(o,a,s)}),t}function zm(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let a=zm(r.join("/")),l=[];return l.push(...a.map(s=>s===""?o:[o,s].join("/"))),i&&l.push(...a),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function h0(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:C0(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const v0=/^:\w+$/,g0=3,y0=2,x0=1,w0=10,k0=-2,Rf=e=>e==="*";function S0(e,t){let n=e.split("/"),r=n.length;return n.some(Rf)&&(r+=k0),t&&(r+=y0),n.filter(i=>!Rf(i)).reduce((i,o)=>i+(v0.test(o)?g0:o===""?x0:w0),r)}function C0(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function b0(e,t){let{routesMeta:n}=e,r={},i="/",o=[];for(let a=0;a<n.length;++a){let l=n[a],s=a===n.length-1,u=i==="/"?t:t.slice(i.length)||"/",f=E0({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!f)return null;Object.assign(r,f.params);let d=l.route;o.push({params:r,pathname:dn([i,f.pathname]),pathnameBase:T0(dn([i,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(i=dn([i,f.pathnameBase]))}return o}function E0(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=P0(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],a=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,f,d)=>{if(f==="*"){let h=l[d]||"";a=o.slice(0,o.length-h.length).replace(/(.)\/+$/,"$1")}return u[f]=N0(l[d]||"",f),u},{}),pathname:o,pathnameBase:a,pattern:e}}function P0(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ku(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(a,l)=>(r.push(l),"/([^\\/]+)"));return e.endsWith("*")?(r.push("*"),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function _0(e){try{return decodeURI(e)}catch(t){return Ku(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function N0(e,t){try{return decodeURIComponent(e)}catch(n){return Ku(!1,'The value for the URL param "'+t+'" will not be decoded because'+(' the string "'+e+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),e}}function Zu(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function O0(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Pr(e):e;return{pathname:n?n.startsWith("/")?n:A0(n,t):t,search:z0(r),hash:I0(i)}}function A0(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Pl(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Im(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Rm(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Pr(e):(i=xi({},e),Se(!i.pathname||!i.pathname.includes("?"),Pl("?","pathname","search",i)),Se(!i.pathname||!i.pathname.includes("#"),Pl("#","pathname","hash",i)),Se(!i.search||!i.search.includes("#"),Pl("#","search","hash",i)));let o=e===""||i.pathname==="",a=o?"/":i.pathname,l;if(r||a==null)l=n;else{let d=t.length-1;if(a.startsWith("..")){let h=a.split("/");for(;h[0]==="..";)h.shift(),d-=1;i.pathname=h.join("/")}l=d>=0?t[d]:"/"}let s=O0(i,l),u=a&&a!=="/"&&a.endsWith("/"),f=(o||a===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||f)&&(s.pathname+="/"),s}const dn=e=>e.join("/").replace(/\/\/+/g,"/"),T0=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),z0=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,I0=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function R0(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}/**
 * React Router v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function L0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const $0=typeof Object.is=="function"?Object.is:L0,{useState:M0,useEffect:F0,useLayoutEffect:D0,useDebugValue:j0}=Ll;function U0(e,t,n){const r=t(),[{inst:i},o]=M0({inst:{value:r,getSnapshot:t}});return D0(()=>{i.value=r,i.getSnapshot=t,_l(i)&&o({inst:i})},[e,r,t]),F0(()=>(_l(i)&&o({inst:i}),e(()=>{_l(i)&&o({inst:i})})),[e]),j0(r),r}function _l(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!$0(n,r)}catch{return!0}}function B0(e,t,n){return t()}const W0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",H0=!W0,V0=H0?B0:U0;"useSyncExternalStore"in Ll&&(e=>e.useSyncExternalStore)(Ll);const Lm=C.createContext(null),$m=C.createContext(null),Ti=C.createContext(null),ba=C.createContext(null),Un=C.createContext({outlet:null,matches:[]}),Mm=C.createContext(null);function zs(){return zs=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},zs.apply(this,arguments)}function Y0(e,t){let{relative:n}=t===void 0?{}:t;zi()||Se(!1);let{basename:r,navigator:i}=C.useContext(Ti),{hash:o,pathname:a,search:l}=Fm(e,{relative:n}),s=a;return r!=="/"&&(s=a==="/"?r:dn([r,a])),i.createHref({pathname:s,search:l,hash:o})}function zi(){return C.useContext(ba)!=null}function Ea(){return zi()||Se(!1),C.useContext(ba).location}function Q0(){zi()||Se(!1);let{basename:e,navigator:t}=C.useContext(Ti),{matches:n}=C.useContext(Un),{pathname:r}=Ea(),i=JSON.stringify(Im(n).map(l=>l.pathnameBase)),o=C.useRef(!1);return C.useEffect(()=>{o.current=!0}),C.useCallback(function(l,s){if(s===void 0&&(s={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let u=Rm(l,JSON.parse(i),r,s.relative==="path");e!=="/"&&(u.pathname=u.pathname==="/"?e:dn([e,u.pathname])),(s.replace?t.replace:t.push)(u,s.state,s)},[e,t,i,r])}function G0(){let{matches:e}=C.useContext(Un),t=e[e.length-1];return t?t.params:{}}function Fm(e,t){let{relative:n}=t===void 0?{}:t,{matches:r}=C.useContext(Un),{pathname:i}=Ea(),o=JSON.stringify(Im(r).map(a=>a.pathnameBase));return C.useMemo(()=>Rm(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function X0(e,t){zi()||Se(!1);let{navigator:n}=C.useContext(Ti),r=C.useContext($m),{matches:i}=C.useContext(Un),o=i[i.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let s=Ea(),u;if(t){var f;let v=typeof t=="string"?Pr(t):t;l==="/"||(f=v.pathname)!=null&&f.startsWith(l)||Se(!1),u=v}else u=s;let d=u.pathname||"/",h=l==="/"?d:d.slice(l.length)||"/",x=m0(e,{pathname:h}),w=q0(x&&x.map(v=>Object.assign({},v,{params:Object.assign({},a,v.params),pathname:dn([l,n.encodeLocation?n.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?l:dn([l,n.encodeLocation?n.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),i,r||void 0);return t&&w?C.createElement(ba.Provider,{value:{location:zs({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:tn.Pop}},w):w}function K0(){let e=r1(),t=R0(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},t),n?C.createElement("pre",{style:i},n):null,o)}class Z0 extends C.Component{constructor(t){super(t),this.state={location:t.location,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location?{error:t.error,location:t.location}:{error:t.error||n.error,location:n.location}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error?C.createElement(Un.Provider,{value:this.props.routeContext},C.createElement(Mm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function J0(e){let{routeContext:t,match:n,children:r}=e,i=C.useContext(Lm);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Un.Provider,{value:t},r)}function q0(e,t,n){if(t===void 0&&(t=[]),e==null)if(n!=null&&n.errors)e=n.matches;else return null;let r=e,i=n==null?void 0:n.errors;if(i!=null){let o=r.findIndex(a=>a.route.id&&(i==null?void 0:i[a.route.id]));o>=0||Se(!1),r=r.slice(0,Math.min(r.length,o+1))}return r.reduceRight((o,a,l)=>{let s=a.route.id?i==null?void 0:i[a.route.id]:null,u=null;n&&(a.route.ErrorBoundary?u=C.createElement(a.route.ErrorBoundary,null):a.route.errorElement?u=a.route.errorElement:u=C.createElement(K0,null));let f=t.concat(r.slice(0,l+1)),d=()=>{let h=o;return s?h=u:a.route.Component?h=C.createElement(a.route.Component,null):a.route.element&&(h=a.route.element),C.createElement(J0,{match:a,routeContext:{outlet:o,matches:f},children:h})};return n&&(a.route.ErrorBoundary||a.route.errorElement||l===0)?C.createElement(Z0,{location:n.location,component:u,error:s,children:d(),routeContext:{outlet:null,matches:f}}):d()},null)}var Lf;(function(e){e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator"})(Lf||(Lf={}));var ea;(function(e){e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator"})(ea||(ea={}));function e1(e){let t=C.useContext($m);return t||Se(!1),t}function t1(e){let t=C.useContext(Un);return t||Se(!1),t}function n1(e){let t=t1(),n=t.matches[t.matches.length-1];return n.route.id||Se(!1),n.route.id}function r1(){var e;let t=C.useContext(Mm),n=e1(ea.UseRouteError),r=n1(ea.UseRouteError);return t||((e=n.errors)==null?void 0:e[r])}function Is(e){Se(!1)}function i1(e){let{basename:t="/",children:n=null,location:r,navigationType:i=tn.Pop,navigator:o,static:a=!1}=e;zi()&&Se(!1);let l=t.replace(/^\/*/,"/"),s=C.useMemo(()=>({basename:l,navigator:o,static:a}),[l,o,a]);typeof r=="string"&&(r=Pr(r));let{pathname:u="/",search:f="",hash:d="",state:h=null,key:x="default"}=r,w=C.useMemo(()=>{let v=Zu(u,l);return v==null?null:{location:{pathname:v,search:f,hash:d,state:h,key:x},navigationType:i}},[l,u,f,d,h,x,i]);return w==null?null:C.createElement(Ti.Provider,{value:s},C.createElement(ba.Provider,{children:n,value:w}))}function o1(e){let{children:t,location:n}=e,r=C.useContext(Lm),i=r&&!t?r.router.routes:Rs(t);return X0(i,n)}var $f;(function(e){e[e.pending=0]="pending",e[e.success=1]="success",e[e.error=2]="error"})($f||($f={}));new Promise(()=>{});function Rs(e,t){t===void 0&&(t=[]);let n=[];return C.Children.forEach(e,(r,i)=>{if(!C.isValidElement(r))return;let o=[...t,i];if(r.type===C.Fragment){n.push.apply(n,Rs(r.props.children,o));return}r.type!==Is&&Se(!1),!r.props.index||!r.props.children||Se(!1);let a={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Rs(r.props.children,o)),n.push(a)}),n}/**
 * React Router DOM v6.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ls(){return Ls=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ls.apply(this,arguments)}function a1(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function l1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function s1(e,t){return e.button===0&&(!t||t==="_self")&&!l1(e)}const u1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function c1(e){let{basename:t,children:n,window:r}=e,i=C.useRef();i.current==null&&(i.current=f0({window:r,v5Compat:!0}));let o=i.current,[a,l]=C.useState({action:o.action,location:o.location});return C.useLayoutEffect(()=>o.listen(l),[o]),C.createElement(i1,{basename:t,children:n,location:a.location,navigationType:a.action,navigator:o})}const f1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",d1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Dm=C.forwardRef(function(t,n){let{onClick:r,relative:i,reloadDocument:o,replace:a,state:l,target:s,to:u,preventScrollReset:f}=t,d=a1(t,u1),{basename:h}=C.useContext(Ti),x,w=!1;if(typeof u=="string"&&d1.test(u)&&(x=u,f1)){let c=new URL(window.location.href),m=u.startsWith("//")?new URL(c.protocol+u):new URL(u),g=Zu(m.pathname,h);m.origin===c.origin&&g!=null?u=g+m.search+m.hash:w=!0}let v=Y0(u,{relative:i}),k=p1(u,{replace:a,state:l,target:s,preventScrollReset:f,relative:i});function p(c){r&&r(c),c.defaultPrevented||k(c)}return C.createElement("a",Ls({},d,{href:x||v,onClick:w||o?r:p,ref:n,target:s}))});var Mf;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmitImpl="useSubmitImpl",e.UseFetcher="useFetcher"})(Mf||(Mf={}));var Ff;(function(e){e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ff||(Ff={}));function p1(e,t){let{target:n,replace:r,state:i,preventScrollReset:o,relative:a}=t===void 0?{}:t,l=Q0(),s=Ea(),u=Fm(e,{relative:a});return C.useCallback(f=>{if(s1(f,n)){f.preventDefault();let d=r!==void 0?r:qo(s)===qo(u);l(e,{replace:d,state:i,preventScrollReset:o,relative:a})}},[s,l,u,r,i,n,e,o,a])}const m1="/my-pokedex/assets/interrogation-smaller-d19979e5.png";async function h1(e){return await(await fetch(e)).json()}async function v1(e){const n=await(await fetch(`https://pokeapi.co/api/v2/pokemon/${e}/`)).json();await console.log(n);const r={name:n.name,types:n.types,stats:[],abilities:n.abilities,moves:n.moves};if(n.sprites.front_default){const i=n.sprites.front_default;r.image=i}else{const i=n.sprites.other["official-artwork"].front_default;r.image=i}return r.image==null&&(r.image=m1),await Promise.all(n.stats.map(async i=>{const o=i.stat.name,a=i.base_stat;return r.stats.push({statName:o,statValue:a})})),await Promise.all(r.abilities.map(async i=>{const o=i.ability.url,l=(await h1(o)).flavor_text_entries;if(l.length>0){for(let s=0;s<=l.length;s++)if(l[s].language.name=="en")return i.description=l[s].flavor_text}else return i.description="No data yet."})),r}var ta={},g1={get exports(){return ta},set exports(e){ta=e}},ee={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ju=Symbol.for("react.element"),qu=Symbol.for("react.portal"),Pa=Symbol.for("react.fragment"),_a=Symbol.for("react.strict_mode"),Na=Symbol.for("react.profiler"),Oa=Symbol.for("react.provider"),Aa=Symbol.for("react.context"),y1=Symbol.for("react.server_context"),Ta=Symbol.for("react.forward_ref"),za=Symbol.for("react.suspense"),Ia=Symbol.for("react.suspense_list"),Ra=Symbol.for("react.memo"),La=Symbol.for("react.lazy"),x1=Symbol.for("react.offscreen"),jm;jm=Symbol.for("react.module.reference");function mt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ju:switch(e=e.type,e){case Pa:case Na:case _a:case za:case Ia:return e;default:switch(e=e&&e.$$typeof,e){case y1:case Aa:case Ta:case La:case Ra:case Oa:return e;default:return t}}case qu:return t}}}ee.ContextConsumer=Aa;ee.ContextProvider=Oa;ee.Element=Ju;ee.ForwardRef=Ta;ee.Fragment=Pa;ee.Lazy=La;ee.Memo=Ra;ee.Portal=qu;ee.Profiler=Na;ee.StrictMode=_a;ee.Suspense=za;ee.SuspenseList=Ia;ee.isAsyncMode=function(){return!1};ee.isConcurrentMode=function(){return!1};ee.isContextConsumer=function(e){return mt(e)===Aa};ee.isContextProvider=function(e){return mt(e)===Oa};ee.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ju};ee.isForwardRef=function(e){return mt(e)===Ta};ee.isFragment=function(e){return mt(e)===Pa};ee.isLazy=function(e){return mt(e)===La};ee.isMemo=function(e){return mt(e)===Ra};ee.isPortal=function(e){return mt(e)===qu};ee.isProfiler=function(e){return mt(e)===Na};ee.isStrictMode=function(e){return mt(e)===_a};ee.isSuspense=function(e){return mt(e)===za};ee.isSuspenseList=function(e){return mt(e)===Ia};ee.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Pa||e===Na||e===_a||e===za||e===Ia||e===x1||typeof e=="object"&&e!==null&&(e.$$typeof===La||e.$$typeof===Ra||e.$$typeof===Oa||e.$$typeof===Aa||e.$$typeof===Ta||e.$$typeof===jm||e.getModuleId!==void 0)};ee.typeOf=mt;(function(e){e.exports=ee})(g1);function w1(e){function t(_,z,R,U,y){for(var Q=0,P=0,pe=0,K=0,J,H,Oe=0,Ye=0,X,$e=X=J=0,Z=0,Ae=0,Nr=0,Te=0,Fi=R.length,Or=Fi-1,ht,B="",ve="",Ja="",qa="",Yt;Z<Fi;){if(H=R.charCodeAt(Z),Z===Or&&P+K+pe+Q!==0&&(P!==0&&(H=P===47?10:47),K=pe=Q=0,Fi++,Or++),P+K+pe+Q===0){if(Z===Or&&(0<Ae&&(B=B.replace(h,"")),0<B.trim().length)){switch(H){case 32:case 9:case 59:case 13:case 10:break;default:B+=R.charAt(Z)}H=59}switch(H){case 123:for(B=B.trim(),J=B.charCodeAt(0),X=1,Te=++Z;Z<Fi;){switch(H=R.charCodeAt(Z)){case 123:X++;break;case 125:X--;break;case 47:switch(H=R.charCodeAt(Z+1)){case 42:case 47:e:{for($e=Z+1;$e<Or;++$e)switch(R.charCodeAt($e)){case 47:if(H===42&&R.charCodeAt($e-1)===42&&Z+2!==$e){Z=$e+1;break e}break;case 10:if(H===47){Z=$e+1;break e}}Z=$e}}break;case 91:H++;case 40:H++;case 34:case 39:for(;Z++<Or&&R.charCodeAt(Z)!==H;);}if(X===0)break;Z++}switch(X=R.substring(Te,Z),J===0&&(J=(B=B.replace(d,"").trim()).charCodeAt(0)),J){case 64:switch(0<Ae&&(B=B.replace(h,"")),H=B.charCodeAt(1),H){case 100:case 109:case 115:case 45:Ae=z;break;default:Ae=At}if(X=t(z,Ae,X,H,y+1),Te=X.length,0<E&&(Ae=n(At,B,Nr),Yt=l(3,X,Ae,z,Ne,xe,Te,H,y,U),B=Ae.join(""),Yt!==void 0&&(Te=(X=Yt.trim()).length)===0&&(H=0,X="")),0<Te)switch(H){case 115:B=B.replace(N,a);case 100:case 109:case 45:X=B+"{"+X+"}";break;case 107:B=B.replace(c,"$1 $2"),X=B+"{"+X+"}",X=Le===1||Le===2&&o("@"+X,3)?"@-webkit-"+X+"@"+X:"@"+X;break;default:X=B+X,U===112&&(X=(ve+=X,""))}else X="";break;default:X=t(z,n(z,B,Nr),X,U,y+1)}Ja+=X,X=Nr=Ae=$e=J=0,B="",H=R.charCodeAt(++Z);break;case 125:case 59:if(B=(0<Ae?B.replace(h,""):B).trim(),1<(Te=B.length))switch($e===0&&(J=B.charCodeAt(0),J===45||96<J&&123>J)&&(Te=(B=B.replace(" ",":")).length),0<E&&(Yt=l(1,B,z,_,Ne,xe,ve.length,U,y,U))!==void 0&&(Te=(B=Yt.trim()).length)===0&&(B="\0\0"),J=B.charCodeAt(0),H=B.charCodeAt(1),J){case 0:break;case 64:if(H===105||H===99){qa+=B+R.charAt(Z);break}default:B.charCodeAt(Te-1)!==58&&(ve+=i(B,J,H,B.charCodeAt(2)))}Nr=Ae=$e=J=0,B="",H=R.charCodeAt(++Z)}}switch(H){case 13:case 10:P===47?P=0:1+J===0&&U!==107&&0<B.length&&(Ae=1,B+="\0"),0<E*j&&l(0,B,z,_,Ne,xe,ve.length,U,y,U),xe=1,Ne++;break;case 59:case 125:if(P+K+pe+Q===0){xe++;break}default:switch(xe++,ht=R.charAt(Z),H){case 9:case 32:if(K+Q+P===0)switch(Oe){case 44:case 58:case 9:case 32:ht="";break;default:H!==32&&(ht=" ")}break;case 0:ht="\\0";break;case 12:ht="\\f";break;case 11:ht="\\v";break;case 38:K+P+Q===0&&(Ae=Nr=1,ht="\f"+ht);break;case 108:if(K+P+Q+Je===0&&0<$e)switch(Z-$e){case 2:Oe===112&&R.charCodeAt(Z-3)===58&&(Je=Oe);case 8:Ye===111&&(Je=Ye)}break;case 58:K+P+Q===0&&($e=Z);break;case 44:P+pe+K+Q===0&&(Ae=1,ht+="\r");break;case 34:case 39:P===0&&(K=K===H?0:K===0?H:K);break;case 91:K+P+pe===0&&Q++;break;case 93:K+P+pe===0&&Q--;break;case 41:K+P+Q===0&&pe--;break;case 40:if(K+P+Q===0){if(J===0)switch(2*Oe+3*Ye){case 533:break;default:J=1}pe++}break;case 64:P+pe+K+Q+$e+X===0&&(X=1);break;case 42:case 47:if(!(0<K+Q+pe))switch(P){case 0:switch(2*H+3*R.charCodeAt(Z+1)){case 235:P=47;break;case 220:Te=Z,P=42}break;case 42:H===47&&Oe===42&&Te+2!==Z&&(R.charCodeAt(Te+2)===33&&(ve+=R.substring(Te,Z+1)),ht="",P=0)}}P===0&&(B+=ht)}Ye=Oe,Oe=H,Z++}if(Te=ve.length,0<Te){if(Ae=z,0<E&&(Yt=l(2,ve,Ae,_,Ne,xe,Te,U,y,U),Yt!==void 0&&(ve=Yt).length===0))return qa+ve+Ja;if(ve=Ae.join(",")+"{"+ve+"}",Le*Je!==0){switch(Le!==2||o(ve,2)||(Je=0),Je){case 111:ve=ve.replace(g,":-moz-$1")+ve;break;case 112:ve=ve.replace(m,"::-webkit-input-$1")+ve.replace(m,"::-moz-$1")+ve.replace(m,":-ms-input-$1")+ve}Je=0}}return qa+ve+Ja}function n(_,z,R){var U=z.trim().split(k);z=U;var y=U.length,Q=_.length;switch(Q){case 0:case 1:var P=0;for(_=Q===0?"":_[0]+" ";P<y;++P)z[P]=r(_,z[P],R).trim();break;default:var pe=P=0;for(z=[];P<y;++P)for(var K=0;K<Q;++K)z[pe++]=r(_[K]+" ",U[P],R).trim()}return z}function r(_,z,R){var U=z.charCodeAt(0);switch(33>U&&(U=(z=z.trim()).charCodeAt(0)),U){case 38:return z.replace(p,"$1"+_.trim());case 58:return _.trim()+z.replace(p,"$1"+_.trim());default:if(0<1*R&&0<z.indexOf("\f"))return z.replace(p,(_.charCodeAt(0)===58?"":"$1")+_.trim())}return _+z}function i(_,z,R,U){var y=_+";",Q=2*z+3*R+4*U;if(Q===944){_=y.indexOf(":",9)+1;var P=y.substring(_,y.length-1).trim();return P=y.substring(0,_).trim()+P+";",Le===1||Le===2&&o(P,1)?"-webkit-"+P+P:P}if(Le===0||Le===2&&!o(y,1))return y;switch(Q){case 1015:return y.charCodeAt(10)===97?"-webkit-"+y+y:y;case 951:return y.charCodeAt(3)===116?"-webkit-"+y+y:y;case 963:return y.charCodeAt(5)===110?"-webkit-"+y+y:y;case 1009:if(y.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+y+y;case 978:return"-webkit-"+y+"-moz-"+y+y;case 1019:case 983:return"-webkit-"+y+"-moz-"+y+"-ms-"+y+y;case 883:if(y.charCodeAt(8)===45)return"-webkit-"+y+y;if(0<y.indexOf("image-set(",11))return y.replace(be,"$1-webkit-$2")+y;break;case 932:if(y.charCodeAt(4)===45)switch(y.charCodeAt(5)){case 103:return"-webkit-box-"+y.replace("-grow","")+"-webkit-"+y+"-ms-"+y.replace("grow","positive")+y;case 115:return"-webkit-"+y+"-ms-"+y.replace("shrink","negative")+y;case 98:return"-webkit-"+y+"-ms-"+y.replace("basis","preferred-size")+y}return"-webkit-"+y+"-ms-"+y+y;case 964:return"-webkit-"+y+"-ms-flex-"+y+y;case 1023:if(y.charCodeAt(8)!==99)break;return P=y.substring(y.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+P+"-webkit-"+y+"-ms-flex-pack"+P+y;case 1005:return w.test(y)?y.replace(x,":-webkit-")+y.replace(x,":-moz-")+y:y;case 1e3:switch(P=y.substring(13).trim(),z=P.indexOf("-")+1,P.charCodeAt(0)+P.charCodeAt(z)){case 226:P=y.replace(S,"tb");break;case 232:P=y.replace(S,"tb-rl");break;case 220:P=y.replace(S,"lr");break;default:return y}return"-webkit-"+y+"-ms-"+P+y;case 1017:if(y.indexOf("sticky",9)===-1)break;case 975:switch(z=(y=_).length-10,P=(y.charCodeAt(z)===33?y.substring(0,z):y).substring(_.indexOf(":",7)+1).trim(),Q=P.charCodeAt(0)+(P.charCodeAt(7)|0)){case 203:if(111>P.charCodeAt(8))break;case 115:y=y.replace(P,"-webkit-"+P)+";"+y;break;case 207:case 102:y=y.replace(P,"-webkit-"+(102<Q?"inline-":"")+"box")+";"+y.replace(P,"-webkit-"+P)+";"+y.replace(P,"-ms-"+P+"box")+";"+y}return y+";";case 938:if(y.charCodeAt(5)===45)switch(y.charCodeAt(6)){case 105:return P=y.replace("-items",""),"-webkit-"+y+"-webkit-box-"+P+"-ms-flex-"+P+y;case 115:return"-webkit-"+y+"-ms-flex-item-"+y.replace(T,"")+y;default:return"-webkit-"+y+"-ms-flex-line-pack"+y.replace("align-content","").replace(T,"")+y}break;case 973:case 989:if(y.charCodeAt(3)!==45||y.charCodeAt(4)===122)break;case 931:case 953:if(D.test(_)===!0)return(P=_.substring(_.indexOf(":")+1)).charCodeAt(0)===115?i(_.replace("stretch","fill-available"),z,R,U).replace(":fill-available",":stretch"):y.replace(P,"-webkit-"+P)+y.replace(P,"-moz-"+P.replace("fill-",""))+y;break;case 962:if(y="-webkit-"+y+(y.charCodeAt(5)===102?"-ms-"+y:"")+y,R+U===211&&y.charCodeAt(13)===105&&0<y.indexOf("transform",10))return y.substring(0,y.indexOf(";",27)+1).replace(v,"$1-webkit-$2")+y}return y}function o(_,z){var R=_.indexOf(z===1?":":"{"),U=_.substring(0,z!==3?R:10);return R=_.substring(R+1,_.length-1),F(z!==2?U:U.replace(W,"$1"),R,z)}function a(_,z){var R=i(z,z.charCodeAt(0),z.charCodeAt(1),z.charCodeAt(2));return R!==z+";"?R.replace(A," or ($1)").substring(4):"("+z+")"}function l(_,z,R,U,y,Q,P,pe,K,J){for(var H=0,Oe=z,Ye;H<E;++H)switch(Ye=Ue[H].call(f,_,Oe,R,U,y,Q,P,pe,K,J)){case void 0:case!1:case!0:case null:break;default:Oe=Ye}if(Oe!==z)return Oe}function s(_){switch(_){case void 0:case null:E=Ue.length=0;break;default:if(typeof _=="function")Ue[E++]=_;else if(typeof _=="object")for(var z=0,R=_.length;z<R;++z)s(_[z]);else j=!!_|0}return s}function u(_){return _=_.prefix,_!==void 0&&(F=null,_?typeof _!="function"?Le=1:(Le=2,F=_):Le=0),u}function f(_,z){var R=_;if(33>R.charCodeAt(0)&&(R=R.trim()),re=R,R=[re],0<E){var U=l(-1,z,R,R,Ne,xe,0,0,0,0);U!==void 0&&typeof U=="string"&&(z=U)}var y=t(At,R,z,0,0);return 0<E&&(U=l(-2,y,R,R,Ne,xe,y.length,0,0,0),U!==void 0&&(y=U)),re="",Je=0,xe=Ne=1,y}var d=/^\0+/g,h=/[\0\r\f]/g,x=/: */g,w=/zoo|gra/,v=/([,: ])(transform)/g,k=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,g=/:(read-only)/g,S=/[svh]\w+-[tblr]{2}/,N=/\(\s*(.*)\s*\)/g,A=/([\s\S]*?);/g,T=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,be=/([^-])(image-set\()/,xe=1,Ne=1,Je=0,Le=1,At=[],Ue=[],E=0,F=null,j=0,re="";return f.use=s,f.set=u,e!==void 0&&u(e),f}var k1={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function S1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var C1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Df=S1(function(e){return C1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),$s={},b1={get exports(){return $s},set exports(e){$s=e}},te={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _e=typeof Symbol=="function"&&Symbol.for,ec=_e?Symbol.for("react.element"):60103,tc=_e?Symbol.for("react.portal"):60106,$a=_e?Symbol.for("react.fragment"):60107,Ma=_e?Symbol.for("react.strict_mode"):60108,Fa=_e?Symbol.for("react.profiler"):60114,Da=_e?Symbol.for("react.provider"):60109,ja=_e?Symbol.for("react.context"):60110,nc=_e?Symbol.for("react.async_mode"):60111,Ua=_e?Symbol.for("react.concurrent_mode"):60111,Ba=_e?Symbol.for("react.forward_ref"):60112,Wa=_e?Symbol.for("react.suspense"):60113,E1=_e?Symbol.for("react.suspense_list"):60120,Ha=_e?Symbol.for("react.memo"):60115,Va=_e?Symbol.for("react.lazy"):60116,P1=_e?Symbol.for("react.block"):60121,_1=_e?Symbol.for("react.fundamental"):60117,N1=_e?Symbol.for("react.responder"):60118,O1=_e?Symbol.for("react.scope"):60119;function at(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case ec:switch(e=e.type,e){case nc:case Ua:case $a:case Fa:case Ma:case Wa:return e;default:switch(e=e&&e.$$typeof,e){case ja:case Ba:case Va:case Ha:case Da:return e;default:return t}}case tc:return t}}}function Um(e){return at(e)===Ua}te.AsyncMode=nc;te.ConcurrentMode=Ua;te.ContextConsumer=ja;te.ContextProvider=Da;te.Element=ec;te.ForwardRef=Ba;te.Fragment=$a;te.Lazy=Va;te.Memo=Ha;te.Portal=tc;te.Profiler=Fa;te.StrictMode=Ma;te.Suspense=Wa;te.isAsyncMode=function(e){return Um(e)||at(e)===nc};te.isConcurrentMode=Um;te.isContextConsumer=function(e){return at(e)===ja};te.isContextProvider=function(e){return at(e)===Da};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===ec};te.isForwardRef=function(e){return at(e)===Ba};te.isFragment=function(e){return at(e)===$a};te.isLazy=function(e){return at(e)===Va};te.isMemo=function(e){return at(e)===Ha};te.isPortal=function(e){return at(e)===tc};te.isProfiler=function(e){return at(e)===Fa};te.isStrictMode=function(e){return at(e)===Ma};te.isSuspense=function(e){return at(e)===Wa};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===$a||e===Ua||e===Fa||e===Ma||e===Wa||e===E1||typeof e=="object"&&e!==null&&(e.$$typeof===Va||e.$$typeof===Ha||e.$$typeof===Da||e.$$typeof===ja||e.$$typeof===Ba||e.$$typeof===_1||e.$$typeof===N1||e.$$typeof===O1||e.$$typeof===P1)};te.typeOf=at;(function(e){e.exports=te})(b1);var rc=$s,A1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},T1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},z1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Bm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ic={};ic[rc.ForwardRef]=z1;ic[rc.Memo]=Bm;function jf(e){return rc.isMemo(e)?Bm:ic[e.$$typeof]||A1}var I1=Object.defineProperty,R1=Object.getOwnPropertyNames,Uf=Object.getOwnPropertySymbols,L1=Object.getOwnPropertyDescriptor,$1=Object.getPrototypeOf,Bf=Object.prototype;function Wm(e,t,n){if(typeof t!="string"){if(Bf){var r=$1(t);r&&r!==Bf&&Wm(e,r,n)}var i=R1(t);Uf&&(i=i.concat(Uf(t)));for(var o=jf(e),a=jf(t),l=0;l<i.length;++l){var s=i[l];if(!T1[s]&&!(n&&n[s])&&!(a&&a[s])&&!(o&&o[s])){var u=L1(t,s);try{I1(e,s,u)}catch{}}}}return e}var M1=Wm;function Lt(){return(Lt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Wf=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},Ms=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ta.typeOf(e)},na=Object.freeze([]),pn=Object.freeze({});function wi(e){return typeof e=="function"}function Hf(e){return e.displayName||e.name||"Component"}function oc(e){return e&&typeof e.styledComponentId=="string"}var wr=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",ac=typeof window<"u"&&"HTMLElement"in window,F1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Ii(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var D1=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,a=o;n>=a;)(a<<=1)<0&&Ii(16,""+n);this.groupSizes=new Uint32Array(a),this.groupSizes.set(i),this.length=a;for(var l=o;l<a;l++)this.groupSizes[l]=0}for(var s=this.indexOfGroup(n+1),u=0,f=r.length;u<f;u++)this.tag.insertRule(s,r[u])&&(this.groupSizes[n]++,s++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var a=i;a<o;a++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),a=o+i,l=o;l<a;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Po=new Map,ra=new Map,Jr=1,no=function(e){if(Po.has(e))return Po.get(e);for(;ra.has(Jr);)Jr++;var t=Jr++;return Po.set(e,t),ra.set(t,e),t},j1=function(e){return ra.get(e)},U1=function(e,t){t>=Jr&&(Jr=t+1),Po.set(e,t),ra.set(t,e)},B1="style["+wr+'][data-styled-version="5.3.9"]',W1=new RegExp("^"+wr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),H1=function(e,t,n){for(var r,i=n.split(","),o=0,a=i.length;o<a;o++)(r=i[o])&&e.registerName(t,r)},V1=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var a=n[i].trim();if(a){var l=a.match(W1);if(l){var s=0|parseInt(l[1],10),u=l[2];s!==0&&(U1(u,s),H1(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(a)}}},Y1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Hm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var s=l.childNodes,u=s.length;u>=0;u--){var f=s[u];if(f&&f.nodeType===1&&f.hasAttribute(wr))return f}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(wr,"active"),r.setAttribute("data-styled-version","5.3.9");var a=Y1();return a&&r.setAttribute("nonce",a),n.insertBefore(r,o),r},Q1=function(){function e(n){var r=this.element=Hm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,a=0,l=o.length;a<l;a++){var s=o[a];if(s.ownerNode===i)return s}Ii(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),G1=function(){function e(n){var r=this.element=Hm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),X1=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Vf=ac,K1={isServer:!ac,useCSSOMInjection:!F1},Vm=function(){function e(n,r,i){n===void 0&&(n=pn),r===void 0&&(r={}),this.options=Lt({},K1,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&ac&&Vf&&(Vf=!1,function(o){for(var a=document.querySelectorAll(B1),l=0,s=a.length;l<s;l++){var u=a[l];u&&u.getAttribute(wr)!=="active"&&(V1(o,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return no(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Lt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,a=r.target,n=i?new X1(a):o?new Q1(a):new G1(a),new D1(n)));var n,r,i,o,a},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(no(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(no(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(no(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",a=0;a<i;a++){var l=j1(a);if(l!==void 0){var s=n.names.get(l),u=r.getGroup(a);if(s&&u&&s.size){var f=wr+".g"+a+'[id="'+l+'"]',d="";s!==void 0&&s.forEach(function(h){h.length>0&&(d+=h+",")}),o+=""+u+f+'{content:"'+d+`"}/*!sc*/
`}}}return o}(this)},e}(),Z1=/(a)(d)/gi,Yf=function(e){return String.fromCharCode(e+(e>25?39:97))};function Fs(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Yf(t%52)+n;return(Yf(t%52)+n).replace(Z1,"$1-$2")}var nr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Ym=function(e){return nr(5381,e)};function J1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(wi(n)&&!oc(n))return!1}return!0}var q1=Ym("5.3.9"),ey=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&J1(t),this.componentId=n,this.baseHash=nr(q1,n),this.baseStyle=r,Vm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var a=kr(this.rules,t,n,r).join(""),l=Fs(nr(this.baseHash,a)>>>0);if(!n.hasNameForId(i,l)){var s=r(a,"."+l,void 0,i);n.insertRules(i,l,s)}o.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,f=nr(this.baseHash,r.hash),d="",h=0;h<u;h++){var x=this.rules[h];if(typeof x=="string")d+=x;else if(x){var w=kr(x,t,n,r),v=Array.isArray(w)?w.join(""):w;f=nr(f,v+h),d+=v}}if(d){var k=Fs(f>>>0);if(!n.hasNameForId(i,k)){var p=r(d,"."+k,void 0,i);n.insertRules(i,k,p)}o.push(k)}}return o.join(" ")},e}(),ty=/^\s*\/\/.*$/gm,ny=[":","[",".","#"];function ry(e){var t,n,r,i,o=e===void 0?pn:e,a=o.options,l=a===void 0?pn:a,s=o.plugins,u=s===void 0?na:s,f=new w1(l),d=[],h=function(v){function k(p){if(p)try{v(p+"}")}catch{}}return function(p,c,m,g,S,N,A,T,W,D){switch(p){case 1:if(W===0&&c.charCodeAt(0)===64)return v(c+";"),"";break;case 2:if(T===0)return c+"/*|*/";break;case 3:switch(T){case 102:case 112:return v(m[0]+c),"";default:return c+(D===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(k)}}}(function(v){d.push(v)}),x=function(v,k,p){return k===0&&ny.indexOf(p[n.length])!==-1||p.match(i)?v:"."+t};function w(v,k,p,c){c===void 0&&(c="&");var m=v.replace(ty,""),g=k&&p?p+" "+k+" { "+m+" }":m;return t=c,n=k,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),f(p||!k?"":k,g)}return f.use([].concat(u,[function(v,k,p){v===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,x))},h,function(v){if(v===-2){var k=d;return d=[],k}}])),w.hash=u.length?u.reduce(function(v,k){return k.name||Ii(15),nr(v,k.name)},5381).toString():"",w}var Qm=xn.createContext();Qm.Consumer;var Gm=xn.createContext(),iy=(Gm.Consumer,new Vm),Ds=ry();function oy(){return C.useContext(Qm)||iy}function ay(){return C.useContext(Gm)||Ds}var Xm=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=Ds);var a=r.name+o.hash;i.hasNameForId(r.id,a)||i.insertRules(r.id,a,o(r.rules,a,"@keyframes"))},this.toString=function(){return Ii(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ds),this.name+t.hash},e}(),ly=/([A-Z])/,sy=/([A-Z])/g,uy=/^ms-/,cy=function(e){return"-"+e.toLowerCase()};function Qf(e){return ly.test(e)?e.replace(sy,cy).replace(uy,"-ms-"):e}var Gf=function(e){return e==null||e===!1||e===""};function kr(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],a=0,l=e.length;a<l;a+=1)(i=kr(e[a],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if(Gf(e))return"";if(oc(e))return"."+e.styledComponentId;if(wi(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var s=e(t);return kr(s,t,n,r)}var u;return e instanceof Xm?n?(e.inject(n,r),e.getName(r)):e:Ms(e)?function f(d,h){var x,w,v=[];for(var k in d)d.hasOwnProperty(k)&&!Gf(d[k])&&(Array.isArray(d[k])&&d[k].isCss||wi(d[k])?v.push(Qf(k)+":",d[k],";"):Ms(d[k])?v.push.apply(v,f(d[k],k)):v.push(Qf(k)+": "+(x=k,(w=d[k])==null||typeof w=="boolean"||w===""?"":typeof w!="number"||w===0||x in k1?String(w).trim():w+"px")+";"));return h?[h+" {"].concat(v,["}"]):v}(e):e.toString()}var Xf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function nt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return wi(e)||Ms(e)?Xf(kr(Wf(na,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Xf(kr(Wf(e,n)))}var fy=function(e,t,n){return n===void 0&&(n=pn),e.theme!==n.theme&&e.theme||t||n.theme},dy=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,py=/(^-|-$)/g;function Nl(e){return e.replace(dy,"-").replace(py,"")}var Km=function(e){return Fs(Ym(e)>>>0)};function ro(e){return typeof e=="string"&&!0}var js=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},my=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function hy(e,t,n){var r=e[n];js(t)&&js(r)?Zm(r,t):e[n]=t}function Zm(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var a=o[i];if(js(a))for(var l in a)my(l)&&hy(e,a[l],l)}return e}var Jm=xn.createContext();Jm.Consumer;var Ol={};function qm(e,t,n){var r=oc(e),i=!ro(e),o=t.attrs,a=o===void 0?na:o,l=t.componentId,s=l===void 0?function(c,m){var g=typeof c!="string"?"sc":Nl(c);Ol[g]=(Ol[g]||0)+1;var S=g+"-"+Km("5.3.9"+g+Ol[g]);return m?m+"-"+S:S}(t.displayName,t.parentComponentId):l,u=t.displayName,f=u===void 0?function(c){return ro(c)?"styled."+c:"Styled("+Hf(c)+")"}(e):u,d=t.displayName&&t.componentId?Nl(t.displayName)+"-"+t.componentId:t.componentId||s,h=r&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,x=t.shouldForwardProp;r&&e.shouldForwardProp&&(x=t.shouldForwardProp?function(c,m,g){return e.shouldForwardProp(c,m,g)&&t.shouldForwardProp(c,m,g)}:e.shouldForwardProp);var w,v=new ey(n,d,r?e.componentStyle:void 0),k=v.isStatic&&a.length===0,p=function(c,m){return function(g,S,N,A){var T=g.attrs,W=g.componentStyle,D=g.defaultProps,be=g.foldedComponentIds,xe=g.shouldForwardProp,Ne=g.styledComponentId,Je=g.target,Le=function(U,y,Q){U===void 0&&(U=pn);var P=Lt({},y,{theme:U}),pe={};return Q.forEach(function(K){var J,H,Oe,Ye=K;for(J in wi(Ye)&&(Ye=Ye(P)),Ye)P[J]=pe[J]=J==="className"?(H=pe[J],Oe=Ye[J],H&&Oe?H+" "+Oe:H||Oe):Ye[J]}),[P,pe]}(fy(S,C.useContext(Jm),D)||pn,S,T),At=Le[0],Ue=Le[1],E=function(U,y,Q,P){var pe=oy(),K=ay(),J=y?U.generateAndInjectStyles(pn,pe,K):U.generateAndInjectStyles(Q,pe,K);return J}(W,A,At),F=N,j=Ue.$as||S.$as||Ue.as||S.as||Je,re=ro(j),_=Ue!==S?Lt({},S,{},Ue):S,z={};for(var R in _)R[0]!=="$"&&R!=="as"&&(R==="forwardedAs"?z.as=_[R]:(xe?xe(R,Df,j):!re||Df(R))&&(z[R]=_[R]));return S.style&&Ue.style!==S.style&&(z.style=Lt({},S.style,{},Ue.style)),z.className=Array.prototype.concat(be,Ne,E!==Ne?E:null,S.className,Ue.className).filter(Boolean).join(" "),z.ref=F,C.createElement(j,z)}(w,c,m,k)};return p.displayName=f,(w=xn.forwardRef(p)).attrs=h,w.componentStyle=v,w.displayName=f,w.shouldForwardProp=x,w.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):na,w.styledComponentId=d,w.target=r?e.target:e,w.withComponent=function(c){var m=t.componentId,g=function(N,A){if(N==null)return{};var T,W,D={},be=Object.keys(N);for(W=0;W<be.length;W++)T=be[W],A.indexOf(T)>=0||(D[T]=N[T]);return D}(t,["componentId"]),S=m&&m+"-"+(ro(c)?c:Nl(Hf(c)));return qm(c,Lt({},g,{attrs:h,componentId:S}),n)},Object.defineProperty(w,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?Zm({},e.defaultProps,c):c}}),Object.defineProperty(w,"toString",{value:function(){return"."+w.styledComponentId}}),i&&M1(w,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),w}var Us=function(e){return function t(n,r,i){if(i===void 0&&(i=pn),!ta.isValidElementType(r))return Ii(1,String(r));var o=function(){return n(r,i,nt.apply(void 0,arguments))};return o.withConfig=function(a){return t(n,r,Lt({},i,{},a))},o.attrs=function(a){return t(n,r,Lt({},i,{attrs:Array.prototype.concat(i.attrs,a).filter(Boolean)}))},o}(qm,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Us[e]=Us(e)});function eh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=nt.apply(void 0,[e].concat(n)).join(""),o=Km(i);return new Xm(o,i)}const $=Us,vy=$.div`
    grid-area: header;
    width: 130px;
    ${e=>e.height=="small"&&nt`
            height: 152px;
            @media (max-width: 800px) {
                width: 90px;
                height: 130px;
            }
            @media (max-width: 600px) {
                grid-area: buttons;
                height: auto;
                margin-top: 15px;
                background-color: transparent;
            };
        `}

    ${e=>e.height=="big"&&nt`
            height: 100%;
            position: absolute;
            left: 0;
            @media (max-width: 800px) {
                width: 90px;
            }
            @media (max-width: 600px) {
                width: 70px;
            };
            @media (max-width: 450px) {
                width: 65px;
            };
        `}
    
    background-color: var(--button-container-color);
    font-size: 26px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`,gy=$.button`
    ${e=>e.disabled==!0&&nt`
        margin-bottom: 30px;
        `}

    ${e=>e.height=="small"&&nt`
        margin-bottom: 10px;
        `}

    ${e=>e.height=="big"&&nt`
        margin-bottom: 30px;
        `}

    width: 80px;
    height: 80px;
    border: 1px solid var(--button-border-color);
    border-radius: 50%;
    box-shadow: rgba(28, 129, 237, 0.544) 0px 5px 15px;
    background-color: var(--button-background-color);
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: var(--button-background-hover-color);
        border: 1px solid var(--button-background-hover-color);
    }
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px) {
        width: 60px;
        height: 60px;
    };
`,yy=eh`
    0% {
        transform: translateX(2px);
    }
    50% {
        transform: translateX(-8px);
    }

    100% {
        transform: translateX(2px);
    }
`,xy=$.div`
    width: 40px;
    height: 40px;
    position: absolute;
    background-image: var(--button-image);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    animation: ${yy} 1s ease-in-out infinite;
    @media (max-width: 800px) {
        width: 30px;
        height: 30px;
    };
`,wy=$.p`
    color: var(--button-font-color);
    @media (max-width: 800px) {
        font-size: 22px;
    };
    @media (max-width: 600px) {
        display: none;
    };
`,th=e=>ne(vy,{height:e.height,children:[O(Dm,{to:"/my-pokedex",children:O(gy,{onClick:e.clickFunction,height:e.height,disabled:e.disabled,children:O(xy,{})})}),O(wy,{children:"BACK"})]}),ky=$.div`
    margin: 40px 30px 0 30px;
    display: grid;
    grid-template-areas: "base-infos stats"
                         "abilities abilities"
                         "moves moves";
    grid-template-columns: 1fr 1fr;
    color: var(--pokemon-details-font-color);
    @media (max-width: 950px) {
        grid-template-areas: "base-infos"
                             "stats"
                             "abilities"
                             "moves";
        grid-template-columns: 1fr;
    @media (max-width: 500px) {
        margin-left: 20px;
    };
    @media (max-width: 400px) {
        margin: 30px 10px 0 10px;
    };                             
`,Sy=$.div`
    grid-area: base-infos;
    margin-right: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 950px) {
        margin-bottom: 25px;                             
    };
    @media (max-width: 450px) {
        margin-right: 0;                             
    };
`,Cy=$.div`
    width: 100%;
    max-width: 500px;
    min-width: 400px;
    max-height: 300px;
    min-height: 250px;
    border-radius: 5px;
    background-image: var(--pokemon-details-background-image);
    background-size: cover;
    background-position:bottom;
    display: flex;
    justify-content: center;
    position: relative;
    @media (max-width: 1350px) {
        width: 90%;
    };
    @media (max-width: 1020px) {
        min-width: 350px;
        min-height: 200px;
    };
    @media (max-width: 600px) {
        min-width: 300px;
        min-height: 200px;
    };
    @media (max-width: 500px) {
        min-width: 250px;
    };
    @media (max-width: 380px) {
        min-width: 220px;
    };
`,by=$.img`
    width: 180px;
    max-height: 220px;
    position: absolute;
    bottom: 3px;
    @media (max-width: 1350px) {
        bottom: -5px;
    };
    @media (max-width: 380px) {
        width: 150px;
        max-height: 190px;
    };
`,Ey=$.h1`
    margin: 15px 0;
    text-transform: uppercase;
    text-align: center;
    color: var(--pokemon-details-name-color);
    @media (max-width: 1350px) {
        font-size: 28px;
    };
    @media (max-width: 1020px) {
        font-size: 24px;
    };
    @media (max-width: 450px) {
        font-size: 20px;
    };
`,Py=$.div`
    display: flex;
`,_y=$.ul`
    display: flex;
    align-items: center;
`,Ny=$.li`
    margin: 0 10px;
    padding: 3px;
    border: 1px solid var(--pokemon-details-border-color);
    border-radius: 5px;
`,Oy=$.div`
    grid-area: stats;
    padding: 20px 30px;
    border: 1px solid var(--pokemon-details-border-color);
    border-radius: 15px;
    background-color: var(--details-container-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (max-width: 450px) {
        padding: 10px 20px;
    };
`,Ay=$.h2`
    width: 80%;
    margin-bottom: 20px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid var(--pokemon-title-border-color);
`,Ty=$.ul`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
`,zy=$.li`
    display: flex;
    align-items: center;
    gap: 15px;
`,Iy=$.p`
    text-transform: uppercase;
    font-weight: 500;
    font-size: 24px;
    @media (max-width: 1350px) {
        font-size: 20px;
    };
    @media (max-width: 1020px) {
        font-size: 18px;
    };
    @media (max-width: 450px) {
        font-size: 14px;
    };
`,Ry=$.p`
    font-size: 20px;
    @media (max-width: 1350px) {
        font-size: 18px;
    };
    @media (max-width: 1020px) {
        font-size: 16px;
    };
    @media (max-width: 450px) {
        font-size: 14px;
    };
`,Ly=$.div`
    grid-area: abilities;
    margin-top: 40px;
    padding: 20px 0;
    border: 1px solid var(--pokemon-details-border-color);
    border-radius: 15px;
    background-color: var(--details-container-color);
    display: flex;
    flex-direction: column;
    align-items: center;
`,$y=$.h2`
    width: 80%;
    margin-bottom: 20px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid var(--pokemon-title-border-color);
`,My=$.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`,Fy=$.li`
    margin: 10px;
    max-width: 210px;
    height: 150px;
    max-height: 260px;
    border: 1px solid black;
    border-radius: 15px;
    background-color: var(--pokemon-ability-container-color);
    @media (max-width: 720px) {
        max-width: 150px;
    };
`,Dy=$.p`
    margin-bottom: 10px;
    padding: 5px 10px;
    text-transform: uppercase;
    text-align: center;
    font-size: 16px;
    border-bottom: 1px dashed var(--pokemon-details-border-color);
    border-radius: 15px 15px 0 0;
    background-color: var(--pokemon-ability-name-container-color);
`,jy=$.div`
    max-height: 100px;
    padding: 0 10px;
    text-align: justify;
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px;
        border: 1px solid black;
    };
    &::-webkit-scrollbar-track {
        background: var(--pokemon-ability-container-color);
    };
`,Uy=$.div`
    grid-area: moves;
    margin-top: 40px;
    padding: 20px;
    max-height: 400px;
    border: 1px solid var(--pokemon-details-border-color);
    border-radius: 15px;
    background-color: var(--details-container-color);
    display: flex;
    flex-direction: column;
    align-items: center;
`,By=$.h2`
    width: 80%;
    margin-bottom: 25px;
    padding-bottom: 10px;
    text-align: center;
    border-bottom: 1px solid var(--pokemon-title-border-color);
`,Wy=$.ul`
    overflow-y: auto;
    &::-webkit-scrollbar {
        width: 8px;
        border: 1px solid black;
    };
    &::-webkit-scrollbar-track {
        background: var(--pokemon-ability-container-color)
    }
`,Hy=$.li`
    margin: 3px 10px;
    padding: 3px;
    display: inline-block;
    border: 1px solid var(--pokemon-details-border-color);
    @media (max-width: 500px) {
        margin: 2px 8px;
        font-size: 14px;
    };
`,Ya=C.createContext(),Vy=e=>{const[t,n]=C.useState("light"),r=()=>{n(t==="light"?"dark":"light")};return O(Ya.Provider,{value:{theme:t,toggleTheme:r},children:e.children})},Yy=()=>{const{id:e}=G0(),[t,n]=C.useState({}),{theme:r}=C.useContext(Ya);return C.useEffect(()=>{async function i(){const o=await v1(e);n(o)}i()},[]),ne("div",{id:"notebook-container",className:`${r} details`,children:[O(th,{height:"big"}),ne(ky,{children:[ne(Sy,{children:[O(Cy,{children:O(by,{src:t.image})}),O(Ey,{children:t.name}),ne(Py,{children:[O("h3",{children:"Type:"}),O(_y,{children:t.types&&t.types.map(i=>O(Ny,{children:i.type.name},i.slot))})]})]}),ne(Oy,{children:[O(Ay,{children:"Stats"}),O(Ty,{children:t.stats&&t.stats.map(i=>ne(zy,{children:[ne(Iy,{children:[i.statName,":"]}),O(Ry,{children:i.statValue})]}))})]}),ne(Ly,{children:[O($y,{children:"ABILITIES"}),O(My,{children:t.abilities&&t.abilities.map(i=>ne(Fy,{children:[O(Dy,{children:i.ability.name}),O(jy,{children:i.description})]},i.slot))})]}),ne(Uy,{children:[O(By,{children:"MOVES"}),O(Wy,{children:t.moves&&t.moves.map(i=>O(Hy,{children:i.move.name},i.move.name))})]})]})]})},Qy=()=>O(Yy,{}),Ri=C.createContext(),Gy=e=>{const t=Number(localStorage.pageCounter),[n,r]=C.useState(t||0);return O(Ri.Provider,{value:{notebookPageCounter:n,setNotebookPageCounter:r},children:e.children})},lc="/my-pokedex/assets/interrogation-a76ba639.png";async function Xy(e){const n=await(await fetch(e)).json(),r=n.flavor_text_entries;for(let i=0;i<=r.length;i++)if(r[i]){if(r[i].language.name=="en")return r[i].flavor_text.replace(/[^a-zA-Z0-9,é,’,:;\-.?! ]/g," ").replace(/[/é]/g,"É")}else for(let o=0;o<=n.genera.length;o++){if(n.genera[o].language.name=="en")return n.genera[o].genus.replace(/[^a-zA-Z0-9,é,’,:;\-.?! ]/g," ");if(!n.genera)return"No data yet."}}async function Ky(e){return await Promise.all(e.map(async n=>{const i=await(await fetch(`https://pokeapi.co/api/v2/pokemon/${n}/`)).json(),o=i.species.url,a=await Xy(o),l={name:i.name,id:n,type:i.types,description:a};if(i.sprites.front_default){const s=i.sprites.front_default;l.image=s}else{const s=i.sprites.other["official-artwork"].front_default;l.image=s}return l.image==null&&(l.image=lc),l}))}const Qa=C.createContext(),Zy=e=>{const[t,n]=C.useState(localStorage.favoritesList?JSON.parse(localStorage.favoritesList):[]),[r,i]=C.useState(localStorage.favoritesListDetails?JSON.parse(localStorage.favoritesListDetails):[]),[o,a]=C.useState(localStorage.filterFavorites=="true");function l(u,f){if(u.length!==f.length)return!1;for(let d=0;d<u.length;d++)if(u[d]!==f[d])return!1;return!0}C.useEffect(()=>{async function u(){const f=await Ky(t);l(f,r)||(i(f),localStorage.setItem("favoritesListDetails",JSON.stringify(f)))}u()},[r,t]);const s=u=>{if(t.includes(u)){console.log(`pokemon ${u} retirado dos favoritos`),n(d=>d.filter(h=>h!==u));const f=t.filter(d=>d!==u);localStorage.setItem("favoritesList",JSON.stringify(f))}else{console.log(`pokemon ${u} adicionado aos favoritos`),n(d=>[...d,u]);const f=[...t,u];localStorage.setItem("favoritesList",JSON.stringify(f))}};return O(Qa.Provider,{value:{favoritePokemonsIds:t,toggleFavorite:s,favoritesPokemonsList:r,setFavoritesPokemonsList:i,filterFavorites:o,setFilterFavorites:a},children:e.children})},Jy=$.div`
    min-height: 100vh;
    width: 95vw;
    max-width: 1400px;
    margin: auto;
    background-image: var(--notebook-background-image);
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    position: relative;
`,qy=$.header`
    grid-area: header;
    width: 100%;
    height: fit-content;
    padding-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 600px) {
        padding-top: 0;
    };
`,ex=$.h1`
    font-size: 40px;
    color: var(--header-title-font-color);
    @media (max-width: 700px) {
        font-size: 32px;
    };
    @media (max-width: 550px) {
        font-size: 28px;
    };
`,tx=$.img`
    width: 50px;
    height: 50px;
    margin-right: 20px;
    @media (max-width: 700px) {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    };
`,nx="/my-pokedex/assets/pokeball-a343366e.png",rx=$.div`
    grid-area: header;
    height: 152px;
    width: 130px;
    position: absolute;
    right: 0;
    background-color: var(--button-container-color);
    font-size: 26px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px) {
        width: 90px;
        height: 130px;
    };
    @media (max-width: 600px) {
        grid-area: buttons;
        height: auto;
        margin-top: 15px;
        background-color: transparent;
    };
`,ix=$.button`
    margin-bottom: 10px;
    width: 80px;
    height: 80px;
    border: 1px solid var(--button-border-color);
    border-radius: 50%;
    box-shadow: rgba(28, 129, 237, 0.544) 0px 0px 15px;
    background-color: var(--button-background-color);
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &:hover {
        background-color: var(--button-background-hover-color);
        border: 1px solid var(--button-background-hover-color);
    }
    position: relative;
    display:flex;
    align-items: center;
    justify-content: center;
    transform: rotate(180deg);
    @media (max-width: 800px) {
        width: 60px;
        height: 60px;
    };
`,ox=eh`
    0% {
        transform: translateX(2px);
    }
    50% {
        transform: translateX(-8px);
    }

    100% {
        transform: translateX(2px);
    }
`,ax=$.div`
    width: 40px;
    height: 40px;
    position: absolute;
    background-image: var(--button-image);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    animation: ${ox} 1s ease-in-out infinite;
    @media (max-width: 800px) {
        width: 30px;
        height: 30px;
    };
`,lx=$.p`
    color: var(--button-font-color);
    @media (max-width: 800px) {
        font-size: 22px;
    };
    @media (max-width: 600px) {
        display: none;
    };
`,sx=e=>{const{notebookPageCounter:t,setNotebookPageCounter:n}=C.useContext(Ri);function r(){n(i=>i+1)}return ne(rx,{children:[O(ix,{onClick:r,disabled:t>128,children:O(ax,{})}),O(lx,{children:"NEXT"})]})},ux=$.div`
    width: 150px;
    height: 150px;
    padding: 20px 0;
    background-color: var(--button-background-color);
    border: 1px solid var(--background-color);
    border-radius: 40%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -1000px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    color: var(--button-font-color);
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 1250px) {
        width: 120px;
        height: 120px;
        font-size: 16px;
        gap: 5px;
    };
    @media (max-width: 800px) {
        width: 100px;
        height: 100px;
        font-size: 14px;
    }
`,cx=$.h2`
    font-weight: 500;
`,fx=$.input`
    width: 80px;
    height: 50px;
    background-color: var(--button-background-hover-color);
    box-shadow: inset 0 0 8px var(--button-border-color);
    border: 4px inset var(--button-border-color);
    border-radius: 8px;
    font-size: 28px;
    text-align: center;
    color: var(--button-font-color);
    &:focus {
        outline: none;
    };
    @media (max-width: 800px) {
        width: 70px;
        height: 40px;
        font-size: 24px;
    }
`,dx=e=>ne(ux,{children:[O(cx,{children:"Page"}),O(fx,{value:e.inputPageValue,onChange:e.inputPageNumberChangeFunction})]}),px=$.div`
    width: 160px;
    height: 140px;
    background-color: var(--button-background-color);
    border-radius: 0 8px 8px 0;
    color: var(--button-font-color);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    box-shadow: rgba(0, 0, 0, 0.24) 4px 4px 8px;
    @media (max-width: 1250px) {
        width: 140px;
    };
    @media (max-width: 800px) {
        width: 130px;
    };
`,mx=$.h2`
    font-weight: 500;
    @media (max-width: 1250px) {
        font-size: 22px;
    };
    @media (max-width: 800px) {
        font-size: 20px;
    };
`,hx=$.div`
    width: 120px;
    height: 90px;
    display: flex;
    @media (max-width: 800px) {
        width: 100px;
    };
`,vx=$.div`
    padding: 4px;
    width: 45px;
    height: 90px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    cursor: pointer;
    background-color: var(--background-color);
    opacity: 0.8;
    border: 5px inset var(--button-border-color);
    position: relative;
    @media (max-width: 800px) {
        width: 40px;
        height: 88px;
    };
`,gx=$.div`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: var(--button-font-color);
    position: absolute;
    top: var(--toggler-initial-position);
    @media (max-width: 800px) {
        width: 20px;
        height: 20px;
    };
`,yx=$.div`
    padding: 8px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    @media (max-width: 800px) {
        padding: 10px 0;
        font-size: 18px;
    };
`,xx=$.p`

`,wx=$.p`

`,kx=()=>{const e=document.getElementsByTagName("body")[0],t=document.getElementById("toggler"),{theme:n,toggleTheme:r}=C.useContext(Ya);return ne(px,{children:[O(mx,{children:"Theme"}),ne(hx,{children:[O(vx,{onClick:()=>{n=="light"?(r(),e.style.backgroundColor="var(--background-dark-color)",t.classList.remove("up-animation"),t.classList.add("down-animation")):n=="dark"&&(r(),e.style.backgroundColor="var(--background-light-color)",t.classList.remove("down-animation"),t.classList.add("up-animation"))},children:O(gx,{id:"toggler"})}),ne(yx,{children:[O(xx,{children:"Light"}),O(wx,{children:"Dark"})]})]})]})},Sx=$.div`
grid-area: menu;
height: 99.4%;
margin-top: 10px;
padding-top: 20px;
background-color: rgb(200, 0, 0, 0.15);
display: flex;
flex-direction: column;
gap: 28px;
@media (max-width: 800px) {
    position relative;
    display: none;
    ${e=>e.clicked&&nt`
            display: flex;
            position: absolute;
            top: 180px;
            height: 450px;
            z-index: 2;
        `};
}
`,Cx=$.div`
    width: 50px;
    height: 35px;
    transition: 1s transform;
    display: none;
    div:nth-child(n+1):nth-child(-n+3) {
        width: 100%;
        height: 4px;
        background-color: var(--button-font-color);
        margin: 6px 0;
        border-radius: 4px;
    };
    ${e=>e.clicked&&nt`transform: rotate(45deg)`};
    div:nth-child(n+1):nth-child(-n+1) {
        transition: 1s transform;
        ${e=>e.clicked&&nt`
                transform: translate(0, 9px) rotate(90deg);
            `};
    };
    div:nth-child(n+3):nth-child(-n+3) {
        transition: 1s transform;
        ${e=>e.clicked&&nt`
                transform: translate(0, -11px);
            `};
    };
    @media (max-width: 800px) {
        position absolute;
        top: 145px;
        left: 10px;
        display: block;
        cursor: pointer;
    };
`;function Kf(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Kf(Object(n),!0).forEach(function(r){Ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Kf(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ia(e){return ia=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ia(e)}function bx(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Zf(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Ex(e,t,n){return t&&Zf(e.prototype,t),n&&Zf(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sc(e,t){return _x(e)||Ox(e,t)||nh(e,t)||Tx()}function Li(e){return Px(e)||Nx(e)||nh(e)||Ax()}function Px(e){if(Array.isArray(e))return Bs(e)}function _x(e){if(Array.isArray(e))return e}function Nx(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ox(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,o=!1,a,l;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(s){o=!0,l=s}finally{try{!i&&n.return!=null&&n.return()}finally{if(o)throw l}}return r}}function nh(e,t){if(e){if(typeof e=="string")return Bs(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bs(e,t)}}function Bs(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ax(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Tx(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Jf=function(){},uc={},rh={},ih=null,oh={mark:Jf,measure:Jf};try{typeof window<"u"&&(uc=window),typeof document<"u"&&(rh=document),typeof MutationObserver<"u"&&(ih=MutationObserver),typeof performance<"u"&&(oh=performance)}catch{}var zx=uc.navigator||{},qf=zx.userAgent,ed=qf===void 0?"":qf,vn=uc,se=rh,td=ih,io=oh;vn.document;var Vt=!!se.documentElement&&!!se.head&&typeof se.addEventListener=="function"&&typeof se.createElement=="function",ah=~ed.indexOf("MSIE")||~ed.indexOf("Trident/"),oo,ao,lo,so,uo,Ut="___FONT_AWESOME___",Ws=16,lh="fa",sh="svg-inline--fa",Mn="data-fa-i2svg",Hs="data-fa-pseudo-element",Ix="data-fa-pseudo-element-pending",cc="data-prefix",fc="data-icon",nd="fontawesome-i2svg",Rx="async",Lx=["HTML","HEAD","STYLE","SCRIPT"],uh=function(){try{return!0}catch{return!1}}(),ae="classic",he="sharp",dc=[ae,he];function $i(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[ae]}})}var ki=$i((oo={},Ce(oo,ae,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ce(oo,he,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),oo)),Si=$i((ao={},Ce(ao,ae,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ce(ao,he,{solid:"fass",regular:"fasr",light:"fasl"}),ao)),Ci=$i((lo={},Ce(lo,ae,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ce(lo,he,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),lo)),$x=$i((so={},Ce(so,ae,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ce(so,he,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),so)),Mx=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ch="fa-layers-text",Fx=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Dx=$i((uo={},Ce(uo,ae,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ce(uo,he,{900:"fass",400:"fasr",300:"fasl"}),uo)),fh=[1,2,3,4,5,6,7,8,9,10],jx=fh.concat([11,12,13,14,15,16,17,18,19,20]),Ux=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Nn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},bi=new Set;Object.keys(Si[ae]).map(bi.add.bind(bi));Object.keys(Si[he]).map(bi.add.bind(bi));var Bx=[].concat(dc,Li(bi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Nn.GROUP,Nn.SWAP_OPACITY,Nn.PRIMARY,Nn.SECONDARY]).concat(fh.map(function(e){return"".concat(e,"x")})).concat(jx.map(function(e){return"w-".concat(e)})),qr=vn.FontAwesomeConfig||{};function Wx(e){var t=se.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Hx(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(se&&typeof se.querySelector=="function"){var Vx=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Vx.forEach(function(e){var t=sc(e,2),n=t[0],r=t[1],i=Hx(Wx(n));i!=null&&(qr[r]=i)})}var dh={styleDefault:"solid",familyDefault:"classic",cssPrefix:lh,replacementClass:sh,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};qr.familyPrefix&&(qr.cssPrefix=qr.familyPrefix);var Sr=I(I({},dh),qr);Sr.autoReplaceSvg||(Sr.observeMutations=!1);var M={};Object.keys(dh).forEach(function(e){Object.defineProperty(M,e,{enumerable:!0,set:function(n){Sr[e]=n,ei.forEach(function(r){return r(M)})},get:function(){return Sr[e]}})});Object.defineProperty(M,"familyPrefix",{enumerable:!0,set:function(t){Sr.cssPrefix=t,ei.forEach(function(n){return n(M)})},get:function(){return Sr.cssPrefix}});vn.FontAwesomeConfig=M;var ei=[];function Yx(e){return ei.push(e),function(){ei.splice(ei.indexOf(e),1)}}var Gt=Ws,_t={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Qx(e){if(!(!e||!Vt)){var t=se.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=se.head.childNodes,r=null,i=n.length-1;i>-1;i--){var o=n[i],a=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=o)}return se.head.insertBefore(t,r),e}}var Gx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ei(){for(var e=12,t="";e-- >0;)t+=Gx[Math.random()*62|0];return t}function _r(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function pc(e){return e.classList?_r(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ph(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Xx(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ph(e[n]),'" ')},"").trim()}function Ga(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function mc(e){return e.size!==_t.size||e.x!==_t.x||e.y!==_t.y||e.rotate!==_t.rotate||e.flipX||e.flipY}function Kx(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),l="rotate(".concat(t.rotate," 0 0)"),s={transform:"".concat(o," ").concat(a," ").concat(l)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:s,path:u}}function Zx(e){var t=e.transform,n=e.width,r=n===void 0?Ws:n,i=e.height,o=i===void 0?Ws:i,a=e.startCentered,l=a===void 0?!1:a,s="";return l&&ah?s+="translate(".concat(t.x/Gt-r/2,"em, ").concat(t.y/Gt-o/2,"em) "):l?s+="translate(calc(-50% + ".concat(t.x/Gt,"em), calc(-50% + ").concat(t.y/Gt,"em)) "):s+="translate(".concat(t.x/Gt,"em, ").concat(t.y/Gt,"em) "),s+="scale(".concat(t.size/Gt*(t.flipX?-1:1),", ").concat(t.size/Gt*(t.flipY?-1:1),") "),s+="rotate(".concat(t.rotate,"deg) "),s}var Jx=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function mh(){var e=lh,t=sh,n=M.cssPrefix,r=M.replacementClass,i=Jx;if(n!==e||r!==t){var o=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),l=new RegExp("\\.".concat(t),"g");i=i.replace(o,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(l,".".concat(r))}return i}var rd=!1;function Al(){M.autoAddCss&&!rd&&(Qx(mh()),rd=!0)}var qx={mixout:function(){return{dom:{css:mh,insertCss:Al}}},hooks:function(){return{beforeDOMElementCreation:function(){Al()},beforeI2svg:function(){Al()}}}},Bt=vn||{};Bt[Ut]||(Bt[Ut]={});Bt[Ut].styles||(Bt[Ut].styles={});Bt[Ut].hooks||(Bt[Ut].hooks={});Bt[Ut].shims||(Bt[Ut].shims=[]);var wt=Bt[Ut],hh=[],ew=function e(){se.removeEventListener("DOMContentLoaded",e),oa=1,hh.map(function(t){return t()})},oa=!1;Vt&&(oa=(se.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(se.readyState),oa||se.addEventListener("DOMContentLoaded",ew));function tw(e){Vt&&(oa?setTimeout(e,0):hh.push(e))}function Mi(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,o=i===void 0?[]:i;return typeof e=="string"?ph(e):"<".concat(t," ").concat(Xx(r),">").concat(o.map(Mi).join(""),"</").concat(t,">")}function id(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var nw=function(t,n){return function(r,i,o,a){return t.call(n,r,i,o,a)}},Tl=function(t,n,r,i){var o=Object.keys(t),a=o.length,l=i!==void 0?nw(n,i):n,s,u,f;for(r===void 0?(s=1,f=t[o[0]]):(s=0,f=r);s<a;s++)u=o[s],f=l(f,t[u],u,t);return f};function rw(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var o=e.charCodeAt(n++);(o&64512)==56320?t.push(((i&1023)<<10)+(o&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function Vs(e){var t=rw(e);return t.length===1?t[0].toString(16):null}function iw(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function od(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function Ys(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,o=od(t);typeof wt.hooks.addPack=="function"&&!i?wt.hooks.addPack(e,od(t)):wt.styles[e]=I(I({},wt.styles[e]||{}),o),e==="fas"&&Ys("fa",t)}var co,fo,po,rr=wt.styles,ow=wt.shims,aw=(co={},Ce(co,ae,Object.values(Ci[ae])),Ce(co,he,Object.values(Ci[he])),co),hc=null,vh={},gh={},yh={},xh={},wh={},lw=(fo={},Ce(fo,ae,Object.keys(ki[ae])),Ce(fo,he,Object.keys(ki[he])),fo);function sw(e){return~Bx.indexOf(e)}function uw(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!sw(i)?i:null}var kh=function(){var t=function(o){return Tl(rr,function(a,l,s){return a[s]=Tl(l,o,{}),a},{})};vh=t(function(i,o,a){if(o[3]&&(i[o[3]]=a),o[2]){var l=o[2].filter(function(s){return typeof s=="number"});l.forEach(function(s){i[s.toString(16)]=a})}return i}),gh=t(function(i,o,a){if(i[a]=a,o[2]){var l=o[2].filter(function(s){return typeof s=="string"});l.forEach(function(s){i[s]=a})}return i}),wh=t(function(i,o,a){var l=o[2];return i[a]=a,l.forEach(function(s){i[s]=a}),i});var n="far"in rr||M.autoFetchSvg,r=Tl(ow,function(i,o){var a=o[0],l=o[1],s=o[2];return l==="far"&&!n&&(l="fas"),typeof a=="string"&&(i.names[a]={prefix:l,iconName:s}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:l,iconName:s}),i},{names:{},unicodes:{}});yh=r.names,xh=r.unicodes,hc=Xa(M.styleDefault,{family:M.familyDefault})};Yx(function(e){hc=Xa(e.styleDefault,{family:M.familyDefault})});kh();function vc(e,t){return(vh[e]||{})[t]}function cw(e,t){return(gh[e]||{})[t]}function On(e,t){return(wh[e]||{})[t]}function Sh(e){return yh[e]||{prefix:null,iconName:null}}function fw(e){var t=xh[e],n=vc("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function gn(){return hc}var gc=function(){return{prefix:null,iconName:null,rest:[]}};function Xa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?ae:n,i=ki[r][e],o=Si[r][e]||Si[r][i],a=e in wt.styles?e:null;return o||a||null}var ad=(po={},Ce(po,ae,Object.keys(Ci[ae])),Ce(po,he,Object.keys(Ci[he])),po);function Ka(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,o=(t={},Ce(t,ae,"".concat(M.cssPrefix,"-").concat(ae)),Ce(t,he,"".concat(M.cssPrefix,"-").concat(he)),t),a=null,l=ae;(e.includes(o[ae])||e.some(function(u){return ad[ae].includes(u)}))&&(l=ae),(e.includes(o[he])||e.some(function(u){return ad[he].includes(u)}))&&(l=he);var s=e.reduce(function(u,f){var d=uw(M.cssPrefix,f);if(rr[f]?(f=aw[l].includes(f)?$x[l][f]:f,a=f,u.prefix=f):lw[l].indexOf(f)>-1?(a=f,u.prefix=Xa(f,{family:l})):d?u.iconName=d:f!==M.replacementClass&&f!==o[ae]&&f!==o[he]&&u.rest.push(f),!i&&u.prefix&&u.iconName){var h=a==="fa"?Sh(u.iconName):{},x=On(u.prefix,u.iconName);h.prefix&&(a=null),u.iconName=h.iconName||x||u.iconName,u.prefix=h.prefix||u.prefix,u.prefix==="far"&&!rr.far&&rr.fas&&!M.autoFetchSvg&&(u.prefix="fas")}return u},gc());return(e.includes("fa-brands")||e.includes("fab"))&&(s.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(s.prefix="fad"),!s.prefix&&l===he&&(rr.fass||M.autoFetchSvg)&&(s.prefix="fass",s.iconName=On(s.prefix,s.iconName)||s.iconName),(s.prefix==="fa"||a==="fa")&&(s.prefix=gn()||"fas"),s}var dw=function(){function e(){bx(this,e),this.definitions={}}return Ex(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(l){n.definitions[l]=I(I({},n.definitions[l]||{}),a[l]),Ys(l,a[l]);var s=Ci[ae][l];s&&Ys(s,a[l]),kh()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(o){var a=i[o],l=a.prefix,s=a.iconName,u=a.icon,f=u[2];n[l]||(n[l]={}),f.length>0&&f.forEach(function(d){typeof d=="string"&&(n[l][d]=u)}),n[l][s]=u}),n}}]),e}(),ld=[],ir={},dr={},pw=Object.keys(dr);function mw(e,t){var n=t.mixoutsTo;return ld=e,ir={},Object.keys(dr).forEach(function(r){pw.indexOf(r)===-1&&delete dr[r]}),ld.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),ia(i[a])==="object"&&Object.keys(i[a]).forEach(function(l){n[a]||(n[a]={}),n[a][l]=i[a][l]})}),r.hooks){var o=r.hooks();Object.keys(o).forEach(function(a){ir[a]||(ir[a]=[]),ir[a].push(o[a])})}r.provides&&r.provides(dr)}),n}function Qs(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var o=ir[e]||[];return o.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function Fn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=ir[e]||[];i.forEach(function(o){o.apply(null,n)})}function Wt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return dr[e]?dr[e].apply(null,t):void 0}function Gs(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||gn();if(t)return t=On(n,t)||t,id(Ch.definitions,n,t)||id(wt.styles,n,t)}var Ch=new dw,hw=function(){M.autoReplaceSvg=!1,M.observeMutations=!1,Fn("noAuto")},vw={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Vt?(Fn("beforeI2svg",t),Wt("pseudoElements2svg",t),Wt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;M.autoReplaceSvg===!1&&(M.autoReplaceSvg=!0),M.observeMutations=!0,tw(function(){yw({autoReplaceSvgRoot:n}),Fn("watch",t)})}},gw={icon:function(t){if(t===null)return null;if(ia(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:On(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Xa(t[0]);return{prefix:r,iconName:On(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(M.cssPrefix,"-"))>-1||t.match(Mx))){var i=Ka(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||gn(),iconName:On(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var o=gn();return{prefix:o,iconName:On(o,t)||t}}}},lt={noAuto:hw,config:M,dom:vw,parse:gw,library:Ch,findIconDefinition:Gs,toHtml:Mi},yw=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?se:n;(Object.keys(wt.styles).length>0||M.autoFetchSvg)&&Vt&&M.autoReplaceSvg&&lt.dom.i2svg({node:r})};function Za(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Mi(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Vt){var r=se.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function xw(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,o=e.styles,a=e.transform;if(mc(a)&&n.found&&!r.found){var l=n.width,s=n.height,u={x:l/s/2,y:.5};i.style=Ga(I(I({},o),{},{"transform-origin":"".concat(u.x+a.x/16,"em ").concat(u.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function ww(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,o=e.symbol,a=o===!0?"".concat(t,"-").concat(M.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:I(I({},i),{},{id:a}),children:r}]}]}function yc(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,o=e.iconName,a=e.transform,l=e.symbol,s=e.title,u=e.maskId,f=e.titleId,d=e.extra,h=e.watchable,x=h===void 0?!1:h,w=r.found?r:n,v=w.width,k=w.height,p=i==="fak",c=[M.replacementClass,o?"".concat(M.cssPrefix,"-").concat(o):""].filter(function(W){return d.classes.indexOf(W)===-1}).filter(function(W){return W!==""||!!W}).concat(d.classes).join(" "),m={children:[],attributes:I(I({},d.attributes),{},{"data-prefix":i,"data-icon":o,class:c,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(k)})},g=p&&!~d.classes.indexOf("fa-fw")?{width:"".concat(v/k*16*.0625,"em")}:{};x&&(m.attributes[Mn]=""),s&&(m.children.push({tag:"title",attributes:{id:m.attributes["aria-labelledby"]||"title-".concat(f||Ei())},children:[s]}),delete m.attributes.title);var S=I(I({},m),{},{prefix:i,iconName:o,main:n,mask:r,maskId:u,transform:a,symbol:l,styles:I(I({},g),d.styles)}),N=r.found&&n.found?Wt("generateAbstractMask",S)||{children:[],attributes:{}}:Wt("generateAbstractIcon",S)||{children:[],attributes:{}},A=N.children,T=N.attributes;return S.children=A,S.attributes=T,l?ww(S):xw(S)}function sd(e){var t=e.content,n=e.width,r=e.height,i=e.transform,o=e.title,a=e.extra,l=e.watchable,s=l===void 0?!1:l,u=I(I(I({},a.attributes),o?{title:o}:{}),{},{class:a.classes.join(" ")});s&&(u[Mn]="");var f=I({},a.styles);mc(i)&&(f.transform=Zx({transform:i,startCentered:!0,width:n,height:r}),f["-webkit-transform"]=f.transform);var d=Ga(f);d.length>0&&(u.style=d);var h=[];return h.push({tag:"span",attributes:u,children:[t]}),o&&h.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),h}function kw(e){var t=e.content,n=e.title,r=e.extra,i=I(I(I({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),o=Ga(r.styles);o.length>0&&(i.style=o);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var zl=wt.styles;function Xs(e){var t=e[0],n=e[1],r=e.slice(4),i=sc(r,1),o=i[0],a=null;return Array.isArray(o)?a={tag:"g",attributes:{class:"".concat(M.cssPrefix,"-").concat(Nn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Nn.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(M.cssPrefix,"-").concat(Nn.PRIMARY),fill:"currentColor",d:o[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:t,height:n,icon:a}}var Sw={found:!1,width:512,height:512};function Cw(e,t){!uh&&!M.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ks(e,t){var n=t;return t==="fa"&&M.styleDefault!==null&&(t=gn()),new Promise(function(r,i){if(Wt("missingIconAbstract"),n==="fa"){var o=Sh(e)||{};e=o.iconName||e,t=o.prefix||t}if(e&&t&&zl[t]&&zl[t][e]){var a=zl[t][e];return r(Xs(a))}Cw(e,t),r(I(I({},Sw),{},{icon:M.showMissingIcons&&e?Wt("missingIconAbstract")||{}:{}}))})}var ud=function(){},Zs=M.measurePerformance&&io&&io.mark&&io.measure?io:{mark:ud,measure:ud},Br='FA "6.4.0"',bw=function(t){return Zs.mark("".concat(Br," ").concat(t," begins")),function(){return bh(t)}},bh=function(t){Zs.mark("".concat(Br," ").concat(t," ends")),Zs.measure("".concat(Br," ").concat(t),"".concat(Br," ").concat(t," begins"),"".concat(Br," ").concat(t," ends"))},xc={begin:bw,end:bh},_o=function(){};function cd(e){var t=e.getAttribute?e.getAttribute(Mn):null;return typeof t=="string"}function Ew(e){var t=e.getAttribute?e.getAttribute(cc):null,n=e.getAttribute?e.getAttribute(fc):null;return t&&n}function Pw(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(M.replacementClass)}function _w(){if(M.autoReplaceSvg===!0)return No.replace;var e=No[M.autoReplaceSvg];return e||No.replace}function Nw(e){return se.createElementNS("http://www.w3.org/2000/svg",e)}function Ow(e){return se.createElement(e)}function Eh(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Nw:Ow:n;if(typeof e=="string")return se.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var o=e.children||[];return o.forEach(function(a){i.appendChild(Eh(a,{ceFn:r}))}),i}function Aw(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var No={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(Eh(i),n)}),n.getAttribute(Mn)===null&&M.keepOriginalSource){var r=se.createComment(Aw(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~pc(n).indexOf(M.replacementClass))return No.replace(t);var i=new RegExp("".concat(M.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var o=r[0].attributes.class.split(" ").reduce(function(l,s){return s===M.replacementClass||s.match(i)?l.toSvg.push(s):l.toNode.push(s),l},{toNode:[],toSvg:[]});r[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var a=r.map(function(l){return Mi(l)}).join(`
`);n.setAttribute(Mn,""),n.innerHTML=a}};function fd(e){e()}function Ph(e,t){var n=typeof t=="function"?t:_o;if(e.length===0)n();else{var r=fd;M.mutateApproach===Rx&&(r=vn.requestAnimationFrame||fd),r(function(){var i=_w(),o=xc.begin("mutate");e.map(i),o(),n()})}}var wc=!1;function _h(){wc=!0}function Js(){wc=!1}var aa=null;function dd(e){if(td&&M.observeMutations){var t=e.treeCallback,n=t===void 0?_o:t,r=e.nodeCallback,i=r===void 0?_o:r,o=e.pseudoElementsCallback,a=o===void 0?_o:o,l=e.observeMutationsRoot,s=l===void 0?se:l;aa=new td(function(u){if(!wc){var f=gn();_r(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!cd(d.addedNodes[0])&&(M.searchPseudoElements&&a(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&M.searchPseudoElements&&a(d.target.parentNode),d.type==="attributes"&&cd(d.target)&&~Ux.indexOf(d.attributeName))if(d.attributeName==="class"&&Ew(d.target)){var h=Ka(pc(d.target)),x=h.prefix,w=h.iconName;d.target.setAttribute(cc,x||f),w&&d.target.setAttribute(fc,w)}else Pw(d.target)&&i(d.target)})}}),Vt&&aa.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Tw(){aa&&aa.disconnect()}function zw(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var o=i.split(":"),a=o[0],l=o.slice(1);return a&&l.length>0&&(r[a]=l.join(":").trim()),r},{})),n}function Iw(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=Ka(pc(e));return i.prefix||(i.prefix=gn()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=cw(i.prefix,e.innerText)||vc(i.prefix,Vs(e.innerText))),!i.iconName&&M.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function Rw(e){var t=_r(e.attributes).reduce(function(i,o){return i.name!=="class"&&i.name!=="style"&&(i[o.name]=o.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return M.autoA11y&&(n?t["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(r||Ei()):(t["aria-hidden"]="true",t.focusable="false")),t}function Lw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:_t,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function pd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Iw(e),r=n.iconName,i=n.prefix,o=n.rest,a=Rw(e),l=Qs("parseNodeAttributes",{},e),s=t.styleParser?zw(e):[];return I({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:_t,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:s,attributes:a}},l)}var $w=wt.styles;function Nh(e){var t=M.autoReplaceSvg==="nest"?pd(e,{styleParser:!1}):pd(e);return~t.extra.classes.indexOf(ch)?Wt("generateLayersText",e,t):Wt("generateSvgReplacementMutation",e,t)}var yn=new Set;dc.map(function(e){yn.add("fa-".concat(e))});Object.keys(ki[ae]).map(yn.add.bind(yn));Object.keys(ki[he]).map(yn.add.bind(yn));yn=Li(yn);function md(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Vt)return Promise.resolve();var n=se.documentElement.classList,r=function(d){return n.add("".concat(nd,"-").concat(d))},i=function(d){return n.remove("".concat(nd,"-").concat(d))},o=M.autoFetchSvg?yn:dc.map(function(f){return"fa-".concat(f)}).concat(Object.keys($w));o.includes("fa")||o.push("fa");var a=[".".concat(ch,":not([").concat(Mn,"])")].concat(o.map(function(f){return".".concat(f,":not([").concat(Mn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var l=[];try{l=_r(e.querySelectorAll(a))}catch{}if(l.length>0)r("pending"),i("complete");else return Promise.resolve();var s=xc.begin("onTree"),u=l.reduce(function(f,d){try{var h=Nh(d);h&&f.push(h)}catch(x){uh||x.name==="MissingIcon"&&console.error(x)}return f},[]);return new Promise(function(f,d){Promise.all(u).then(function(h){Ph(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),s(),f()})}).catch(function(h){s(),d(h)})})}function Mw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Nh(e).then(function(n){n&&Ph([n],t)})}function Fw(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Gs(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Gs(i||{})),e(r,I(I({},n),{},{mask:i}))}}var Dw=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?_t:r,o=n.symbol,a=o===void 0?!1:o,l=n.mask,s=l===void 0?null:l,u=n.maskId,f=u===void 0?null:u,d=n.title,h=d===void 0?null:d,x=n.titleId,w=x===void 0?null:x,v=n.classes,k=v===void 0?[]:v,p=n.attributes,c=p===void 0?{}:p,m=n.styles,g=m===void 0?{}:m;if(t){var S=t.prefix,N=t.iconName,A=t.icon;return Za(I({type:"icon"},t),function(){return Fn("beforeDOMElementCreation",{iconDefinition:t,params:n}),M.autoA11y&&(h?c["aria-labelledby"]="".concat(M.replacementClass,"-title-").concat(w||Ei()):(c["aria-hidden"]="true",c.focusable="false")),yc({icons:{main:Xs(A),mask:s?Xs(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:N,transform:I(I({},_t),i),symbol:a,title:h,maskId:f,titleId:w,extra:{attributes:c,styles:g,classes:k}})})}},jw={mixout:function(){return{icon:Fw(Dw)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=md,n.nodeCallback=Mw,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?se:r,o=n.callback,a=o===void 0?function(){}:o;return md(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,o=r.title,a=r.titleId,l=r.prefix,s=r.transform,u=r.symbol,f=r.mask,d=r.maskId,h=r.extra;return new Promise(function(x,w){Promise.all([Ks(i,l),f.iconName?Ks(f.iconName,f.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var k=sc(v,2),p=k[0],c=k[1];x([n,yc({icons:{main:p,mask:c},prefix:l,iconName:i,transform:s,symbol:u,maskId:d,title:o,titleId:a,extra:h,watchable:!0})])}).catch(w)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.transform,l=n.styles,s=Ga(l);s.length>0&&(i.style=s);var u;return mc(a)&&(u=Wt("generateAbstractTransformGrouping",{main:o,transform:a,containerWidth:o.width,iconWidth:o.width})),r.push(u||o.icon),{children:r,attributes:i}}}},Uw={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,o=i===void 0?[]:i;return Za({type:"layer"},function(){Fn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(l){Array.isArray(l)?l.map(function(s){a=a.concat(s.abstract)}):a=a.concat(l.abstract)}),[{tag:"span",attributes:{class:["".concat(M.cssPrefix,"-layers")].concat(Li(o)).join(" ")},children:a}]})}}}},Bw={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,o=i===void 0?null:i,a=r.classes,l=a===void 0?[]:a,s=r.attributes,u=s===void 0?{}:s,f=r.styles,d=f===void 0?{}:f;return Za({type:"counter",content:n},function(){return Fn("beforeDOMElementCreation",{content:n,params:r}),kw({content:n.toString(),title:o,extra:{attributes:u,styles:d,classes:["".concat(M.cssPrefix,"-layers-counter")].concat(Li(l))}})})}}}},Ww={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,o=i===void 0?_t:i,a=r.title,l=a===void 0?null:a,s=r.classes,u=s===void 0?[]:s,f=r.attributes,d=f===void 0?{}:f,h=r.styles,x=h===void 0?{}:h;return Za({type:"text",content:n},function(){return Fn("beforeDOMElementCreation",{content:n,params:r}),sd({content:n,transform:I(I({},_t),o),title:l,extra:{attributes:d,styles:x,classes:["".concat(M.cssPrefix,"-layers-text")].concat(Li(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,o=r.transform,a=r.extra,l=null,s=null;if(ah){var u=parseInt(getComputedStyle(n).fontSize,10),f=n.getBoundingClientRect();l=f.width/u,s=f.height/u}return M.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,sd({content:n.innerHTML,width:l,height:s,transform:o,title:i,extra:a,watchable:!0})])}}},Hw=new RegExp('"',"ug"),hd=[1105920,1112319];function Vw(e){var t=e.replace(Hw,""),n=iw(t,0),r=n>=hd[0]&&n<=hd[1],i=t.length===2?t[0]===t[1]:!1;return{value:Vs(i?t[0]:t),isSecondary:r||i}}function vd(e,t){var n="".concat(Ix).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var o=_r(e.children),a=o.filter(function(A){return A.getAttribute(Hs)===t})[0],l=vn.getComputedStyle(e,t),s=l.getPropertyValue("font-family").match(Fx),u=l.getPropertyValue("font-weight"),f=l.getPropertyValue("content");if(a&&!s)return e.removeChild(a),r();if(s&&f!=="none"&&f!==""){var d=l.getPropertyValue("content"),h=~["Sharp"].indexOf(s[2])?he:ae,x=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(s[2])?Si[h][s[2].toLowerCase()]:Dx[h][u],w=Vw(d),v=w.value,k=w.isSecondary,p=s[0].startsWith("FontAwesome"),c=vc(x,v),m=c;if(p){var g=fw(v);g.iconName&&g.prefix&&(c=g.iconName,x=g.prefix)}if(c&&!k&&(!a||a.getAttribute(cc)!==x||a.getAttribute(fc)!==m)){e.setAttribute(n,m),a&&e.removeChild(a);var S=Lw(),N=S.extra;N.attributes[Hs]=t,Ks(c,x).then(function(A){var T=yc(I(I({},S),{},{icons:{main:A,mask:gc()},prefix:x,iconName:m,extra:N,watchable:!0})),W=se.createElement("svg");t==="::before"?e.insertBefore(W,e.firstChild):e.appendChild(W),W.outerHTML=T.map(function(D){return Mi(D)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Yw(e){return Promise.all([vd(e,"::before"),vd(e,"::after")])}function Qw(e){return e.parentNode!==document.head&&!~Lx.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Hs)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function gd(e){if(Vt)return new Promise(function(t,n){var r=_r(e.querySelectorAll("*")).filter(Qw).map(Yw),i=xc.begin("searchPseudoElements");_h(),Promise.all(r).then(function(){i(),Js(),t()}).catch(function(){i(),Js(),n()})})}var Gw={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=gd,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?se:r;M.searchPseudoElements&&gd(i)}}},yd=!1,Xw={mixout:function(){return{dom:{unwatch:function(){_h(),yd=!0}}}},hooks:function(){return{bootstrap:function(){dd(Qs("mutationObserverCallbacks",{}))},noAuto:function(){Tw()},watch:function(n){var r=n.observeMutationsRoot;yd?Js():dd(Qs("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},xd=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var o=i.toLowerCase().split("-"),a=o[0],l=o.slice(1).join("-");if(a&&l==="h")return r.flipX=!0,r;if(a&&l==="v")return r.flipY=!0,r;if(l=parseFloat(l),isNaN(l))return r;switch(a){case"grow":r.size=r.size+l;break;case"shrink":r.size=r.size-l;break;case"left":r.x=r.x-l;break;case"right":r.x=r.x+l;break;case"up":r.y=r.y-l;break;case"down":r.y=r.y+l;break;case"rotate":r.rotate=r.rotate+l;break}return r},n)},Kw={mixout:function(){return{parse:{transform:function(n){return xd(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=xd(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,o=n.containerWidth,a=n.iconWidth,l={transform:"translate(".concat(o/2," 256)")},s="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),f="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(s," ").concat(u," ").concat(f)},h={transform:"translate(".concat(a/2*-1," -256)")},x={outer:l,inner:d,path:h};return{tag:"g",attributes:I({},x.outer),children:[{tag:"g",attributes:I({},x.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:I(I({},r.icon.attributes),x.path)}]}]}}}},Il={x:0,y:0,width:"100%",height:"100%"};function wd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Zw(e){return e.tag==="g"?e.children:[e]}var Jw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),o=i?Ka(i.split(" ").map(function(a){return a.trim()})):gc();return o.prefix||(o.prefix=gn()),n.mask=o,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,o=n.main,a=n.mask,l=n.maskId,s=n.transform,u=o.width,f=o.icon,d=a.width,h=a.icon,x=Kx({transform:s,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:I(I({},Il),{},{fill:"white"})},v=f.children?{children:f.children.map(wd)}:{},k={tag:"g",attributes:I({},x.inner),children:[wd(I({tag:f.tag,attributes:I(I({},f.attributes),x.path)},v))]},p={tag:"g",attributes:I({},x.outer),children:[k]},c="mask-".concat(l||Ei()),m="clip-".concat(l||Ei()),g={tag:"mask",attributes:I(I({},Il),{},{id:c,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,p]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:m},children:Zw(h)},g]};return r.push(S,{tag:"rect",attributes:I({fill:"currentColor","clip-path":"url(#".concat(m,")"),mask:"url(#".concat(c,")")},Il)}),{children:r,attributes:i}}}},qw={provides:function(t){var n=!1;vn.matchMedia&&(n=vn.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:I(I({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=I(I({},o),{},{attributeName:"opacity"}),l={tag:"circle",attributes:I(I({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||l.children.push({tag:"animate",attributes:I(I({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:I(I({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(l),r.push({tag:"path",attributes:I(I({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:I(I({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:I(I({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:I(I({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ek={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),o=i===null?!1:i===""?!0:i;return n.symbol=o,n}}}},tk=[qx,jw,Uw,Bw,Ww,Gw,Xw,Kw,Jw,qw,ek];mw(tk,{mixoutsTo:lt});lt.noAuto;lt.config;lt.library;lt.dom;var qs=lt.parse;lt.findIconDefinition;lt.toHtml;var nk=lt.icon;lt.layer;lt.text;lt.counter;var V={},rk={get exports(){return V},set exports(e){V=e}},ik="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",ok=ik,ak=ok;function Oh(){}function Ah(){}Ah.resetWarningCache=Oh;var lk=function(){function e(r,i,o,a,l,s){if(s!==ak){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Ah,resetWarningCache:Oh};return n.PropTypes=n,n};rk.exports=lk();function kd(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function nn(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kd(Object(n),!0).forEach(function(r){or(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kd(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function la(e){return la=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},la(e)}function or(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function sk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function uk(e,t){if(e==null)return{};var n=sk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function eu(e){return ck(e)||fk(e)||dk(e)||pk()}function ck(e){if(Array.isArray(e))return tu(e)}function fk(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function dk(e,t){if(e){if(typeof e=="string")return tu(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return tu(e,t)}}function tu(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function pk(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mk(e){var t,n=e.beat,r=e.fade,i=e.beatFade,o=e.bounce,a=e.shake,l=e.flash,s=e.spin,u=e.spinPulse,f=e.spinReverse,d=e.pulse,h=e.fixedWidth,x=e.inverse,w=e.border,v=e.listItem,k=e.flip,p=e.size,c=e.rotation,m=e.pull,g=(t={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":o,"fa-shake":a,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":h,"fa-inverse":x,"fa-border":w,"fa-li":v,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},or(t,"fa-".concat(p),typeof p<"u"&&p!==null),or(t,"fa-rotate-".concat(c),typeof c<"u"&&c!==null&&c!==0),or(t,"fa-pull-".concat(m),typeof m<"u"&&m!==null),or(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(g).map(function(S){return g[S]?S:null}).filter(function(S){return S})}function hk(e){return e=e-0,e===e}function Th(e){return hk(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var vk=["style"];function gk(e){return e.charAt(0).toUpperCase()+e.slice(1)}function yk(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Th(n.slice(0,r)),o=n.slice(r+1).trim();return i.startsWith("webkit")?t[gk(i)]=o:t[i]=o,t},{})}function zh(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(s){return zh(e,s)}),i=Object.keys(t.attributes||{}).reduce(function(s,u){var f=t.attributes[u];switch(u){case"class":s.attrs.className=f,delete t.attributes.class;break;case"style":s.attrs.style=yk(f);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?s.attrs[u.toLowerCase()]=f:s.attrs[Th(u)]=f}return s},{attrs:{}}),o=n.style,a=o===void 0?{}:o,l=uk(n,vk);return i.attrs.style=nn(nn({},i.attrs.style),a),e.apply(void 0,[t.tag,nn(nn({},i.attrs),l)].concat(eu(r)))}var Ih=!1;try{Ih=!0}catch{}function xk(){if(!Ih&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Sd(e){if(e&&la(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(qs.icon)return qs.icon(e);if(e===null)return null;if(e&&la(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function Rl(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?or({},e,t):{}}var Bn=xn.forwardRef(function(e,t){var n=e.icon,r=e.mask,i=e.symbol,o=e.className,a=e.title,l=e.titleId,s=e.maskId,u=Sd(n),f=Rl("classes",[].concat(eu(mk(e)),eu(o.split(" ")))),d=Rl("transform",typeof e.transform=="string"?qs.transform(e.transform):e.transform),h=Rl("mask",Sd(r)),x=nk(u,nn(nn(nn(nn({},f),d),h),{},{symbol:i,title:a,titleId:l,maskId:s}));if(!x)return xk("Could not find icon",u),null;var w=x.abstract,v={ref:t};return Object.keys(e).forEach(function(k){Bn.defaultProps.hasOwnProperty(k)||(v[k]=e[k])}),wk(w[0],v)});Bn.displayName="FontAwesomeIcon";Bn.propTypes={beat:V.bool,border:V.bool,beatFade:V.bool,bounce:V.bool,className:V.string,fade:V.bool,flash:V.bool,mask:V.oneOfType([V.object,V.array,V.string]),maskId:V.string,fixedWidth:V.bool,inverse:V.bool,flip:V.oneOf([!0,!1,"horizontal","vertical","both"]),icon:V.oneOfType([V.object,V.array,V.string]),listItem:V.bool,pull:V.oneOf(["right","left"]),pulse:V.bool,rotation:V.oneOf([0,90,180,270]),shake:V.bool,size:V.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:V.bool,spinPulse:V.bool,spinReverse:V.bool,symbol:V.oneOfType([V.bool,V.string]),title:V.string,titleId:V.string,transform:V.oneOfType([V.string,V.object]),swapOpacity:V.bool};Bn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var wk=zh.bind(null,xn.createElement),Rh={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},kk={prefix:"fas",iconName:"face-meh",icon:[512,512,[128528,"meh"],"f11a","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176.4 176a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm128 32a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM160 336H352c8.8 0 16 7.2 16 16s-7.2 16-16 16H160c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]};const Sk=$.div`
    width: 160px;
    height: 140px;
    border-radius: 8px 0 0 8px;
    background-color: var(--button-background-color);
    box-shadow: rgba(0, 0, 0, 0.24) -4px 4px 8px;
    color: var(--button-font-color);
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 7px;
    @media (max-width: 1250px) {
        width: 140px;
        height: 120px;
    };
    @media (max-width: 800px) {
        width: 130px;
        height: 110px;
    };
`,Ck=$.h2`
    font-weight: 500;
    text-align: center;
    @media (max-width: 1250px) {
        font-size: 22px;
    };
    @media (max-width: 800px) {
        font-size: 20px;
    };
`,bk=$.div`
    padding: 4px 8px;
    font-size: 36px;
    cursor: pointer;
    border-radius: 10px;
    background-color: var(--filter-favorites-box-color);

    ${e=>e.filterFavorites&&nt`
                background-color: var(--background-color);
                box-shadow: var(--box-shadow) 0px 5px 15px;
                `}

    &:hover {
        box-shadow: var(--box-shadow) 0px 5px 15px;
        transition: 0.3s ease-in-out;
    };
    @media (max-width: 1250px) {
        font-size: 32px;
    };
    @media (max-width: 800px) {
        font-size: 30px;
    };
`,Ek=()=>{const{filterFavorites:e,setFilterFavorites:t}=C.useContext(Qa);C.useEffect(()=>{localStorage.setItem("filterFavorites",e)},[e]);function n(){t(!e)}return ne(Sk,{children:[O(Ck,{children:"Filter Favorites"}),O(bk,{filterFavorites:e,children:O(Bn,{icon:Rh,style:{color:e?"rgb(255, 243, 50)":"white"},onClick:n})})]})},Pk=e=>{const[t,n]=C.useState(""),[r,i]=C.useState(!1),{notebookPageCounter:o,setNotebookPageCounter:a}=C.useContext(Ri);C.useEffect(()=>{n(o+1)},[o]);function l(u){const f=parseInt(u.target.value,10)-1;isNaN(f)||f<0||f>128?n(""):a(f)}function s(){i(!r)}return ne(av,{children:[ne(Cx,{clicked:r,onClick:s,children:[O("div",{}),O("div",{}),O("div",{})]}),ne(Sx,{clicked:r,children:[O(dx,{inputPageValue:t,inputPageNumberChangeFunction:l}),O(Ek,{}),O(kx,{})]})]})},_k=$.ul`
    grid-area: pokemons;
    margin: 60px 30px 0 15px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;async function Nk(e){const t=`https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${e}0`;return(await(await fetch(t)).json()).results}async function Ok(e){const n=await(await fetch(e)).json(),r=n.flavor_text_entries;for(let i=0;i<=r.length;i++)if(r[i]){if(r[i].language.name=="en")return r[i].flavor_text.replace(/[^a-zA-Z0-9,é,’,:;\-.?! ]/g," ").replace(/[/é]/g,"É")}else for(let o=0;o<=n.genera.length;o++){if(n.genera[o].language.name=="en")return n.genera[o].genus.replace(/[^a-zA-Z0-9,é,’,:;\-.?! ]/g," ");if(!n.genera)return"No data yet."}}async function Ak(e){const n=await(await fetch(e)).json();if(n.sprites.front_default){const o=n.sprites.front_default;n.image=o}else{const o=n.sprites.other["official-artwork"].front_default;n.image=o}const r=n.species.url,i=await Ok(r);return n.description=i,n}async function Tk(e){const t=await Nk(e);return await Promise.all(t.map(async n=>{const r=n.url,i=await Ak(r);n.image=i.image,i.image?n.image=i.image:n.image=lc,n.description=i.description,n.type=i.types})),t}const zk=$.li`
  width: 500px;
  max-height: 333px;
  margin: 15px 0;
  padding: 15px 0 0 15px;
  background-color: var(--pokemon-list-container-color);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  position: relative;
  cursor: pointer;
  &:hover {
    box-shadow: var(--box-shadow) 0px 5px 15px;
    transition: 0.3s ease-in-out;
  }
  @media (max-width: 1350px) {
    width: 400px;
    padding: 12px 0 0 12px;
  };
  @media (max-width: 1100px) {
    width: 90%;
  };
  @media (max-width: 650px) {
    max-height: 200px;
  };
  @media (max-width: 400px) {
    width: 80%;
    padding: 20px 10px 0 10px;
  };
`,Ik=$.div`
  font-size: 28px;
  position: absolute;
  top: 4px;
  right: 10px;
  @media (max-width: 1350px) {
    font-size: 24px;
  };
  @media (max-width: 650px) {
    font-size: 22px;
  };
`,Rk=$.div`
  height: 100%;
  display: grid;
  grid-template-areas: "img-type name"
                      "img-type description"; 
  @media (max-width: 400px) {
    grid-template-areas: "name name"
                         " img-type img-type";
  };
`,Lk=$.div`
  grid-area: img-type;
  min-width: 160px;
  margin: 0 auto 15px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 650px) {
    min-width: 120px;
  };
  @media (max-width: 400px) {
    flex-direction: row;
    gap: 10px;
  };
`,$k=$.div`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 1.5px solid var(--pokemon-list-image-border-color);
  ${e=>`background-image: url(${e.image})`};
  background-repeat: no-repeat;
  background-size: contain;
  ${e=>e.image==lc&&nt`background-size: 40%`};
  background-color: var(--pokemon-list-image-container-color);
  background-position: center;
  @media (max-width: 1350px) {
    width: 120px;
    height: 120px;
  };
  @media (max-width: 650px) {
    width: 100px;
    height: 100px;
  };
  @media (max-width: 500px) {
    width: 90px;
    height: 90px;
  };
`,Mk=$.ul`
    margin-top: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 3;
    @media (max-width: 650px) {
      gap: 6px;
    };
    @media (max-width: 400px) {
      margin-top: 0;
      flex-wrap: wrap;
    };
`,Fk=$.li`
    padding: 3px 5px;
    border: 1px solid var(--pokemon-list-image-border-color);
    border-radius: 5px;
    background-color: var(--pokemon-list-description-container-color);
    color: var(--pokemon-list-description-font-color);
    @media (max-width: 1350px) {
      font-size: 14px;
    };
    @media (max-width: 650px) {
      padding: 2px 4px;
      font-size: 12px;
    };
`,Dk=$.p`
  grid-area: name;
  margin-top: 8px;
  padding: 15px 3px 0 15px;
  font-weight: bold;
  font-size: 28px;
  word-break: break-word;
  color: var(--pokemon-list-name-font-color);
  text-transform: uppercase;
  display: flex;
  align-items: center;
  @media (max-width: 1350px) {
    font-size: 22px;
  };
  @media (max-width: 650px) {
    font-size: 20px;
  };
  @media (max-width: 500px) {
    font-size: 16px;
  };
  @media (max-width: 400px) {
    margin: 10px 0;
    padding: 0;
    justify-content: center;
    text-align: center;
  };
`,jk=$.p`
  grid-area: description;
  margin: 12px 0 0 12px;
  padding: 15px;
  line-height: 22px;
  text-align: justify;
  border: 5px inset var(--pokemon-list-description-border-color);
  border-bottom-right-radius: 30px;
  background-color: var(--pokemon-list-description-container-color);
  color: var(--pokemon-list-description-font-color);
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 8px;
    border: 1px solid black;
  };
  &::-webkit-scrollbar-track {
    background: var(--pokemon-ability-container-color);
  };
  @media (max-width: 1350px) {
    margin: 11px 0 0 11px;
    padding: 13px;
    font-size: 14px;
    line-height: 16px;
  };
  @media (max-width: 650px) {
    margin: 10px 0 0 10px;
    padding: 10px;
    font-size: 13px;
    line-height: 16px;
  };
  @media (max-width: 500px) {
    padding: 8px;
    font-size: 12px;
    line-height: 14px;
  };
  @media (max-width: 400px) {
    display: none;
  };
`,Uk=e=>{const{favoritePokemonsIds:t,toggleFavorite:n}=C.useContext(Qa),[r,i]=C.useState(!1);return C.useEffect(()=>{i(t.includes(e.id))},[t,e.id]),ne(zk,{children:[O(Ik,{children:O(Bn,{icon:Rh,style:{color:r?"yellow":"var(--button-background-color)"},onClick:()=>{t.length<=11&&(n(e.id),i(!r)),t.length>=11&&r&&(n(e.id),i(!r)),t.length>11&&!r&&window.alert("You can only have 12 favorite Pokémon")}})}),O(Dm,{to:`/pokemon/${e.id}`,onClick:localStorage.setItem("pageCounter",e.listPage),children:ne(Rk,{children:[ne(Lk,{children:[O($k,{image:e.image}),O(Mk,{children:e.type&&e.type.map(a=>O(Fk,{children:a.type.name},a.slot))})]}),O(Dk,{children:e.name}),O(jk,{children:e.description})]})})]})},Bk=$.div`
    grid-area: pokemons;
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    font-size: 32px;
    color: var(--header-title-font-color);
    @media (max-width: 920px) {
        font-size: 27px;
    }
    @media (max-width: 800px) {
        font-size: 26px;
    }
    @media (max-width: 620px) {
        font-size: 20px;
    }
    @media (max-width: 500px) {
        font-size: 16px;
    }
    @media (max-width: 400px) {
        font-size: 13px;
    }
`,Wk=()=>ne(Bk,{children:[O("h1",{children:"Nothing to show here"}),O(Bn,{icon:kk,style:{fontSize:"50px"}})]}),Hk=()=>{const{notebookPageCounter:e}=C.useContext(Ri),{favoritesPokemonsList:t,filterFavorites:n}=C.useContext(Qa),[r,i]=C.useState([]),[o,a]=C.useState(!1);return C.useEffect(()=>{async function l(){i(t),await console.log(t)}if(n||localStorage.filterFavorites=="true")l();else{async function s(){const u=await Tk(e);i(u),await console.log(u)}s(),a(!1)}},[e,n,localStorage.filterFavorites]),C.useEffect(()=>{n&&t.length==0&&a(!0)},[t,n]),o?O(Wk,{}):O(_k,{children:r.map(l=>{var s=r.indexOf(l)+1+10*e;return s>1010&&(s=1e4+s%1e3-10),O(Uk,{name:l.name,image:l.image,type:l.type,description:l.description,listPage:e,id:n?l.id:s},l.name)})})},Vk=()=>{const{theme:e}=C.useContext(Ya),{notebookPageCounter:t,setNotebookPageCounter:n}=C.useContext(Ri);function r(){n(i=>i-1)}return ne(Jy,{id:"notebook-container",className:e,children:[O(th,{clickFunction:()=>r(),height:"small",disabled:t===0}),ne(qy,{children:[O(tx,{src:nx,alt:"pokeball"}),O(ex,{children:"Pokemon Diary"})]}),O(sx,{}),ne(Zy,{children:[O(Pk,{}),O(Hk,{})]})]})},Yk=()=>O(Gy,{children:O(Vk,{})}),Qk=()=>O(c1,{children:ne(o1,{children:[O(Is,{exact:!0,path:"/my-pokedex",element:O(Yk,{})}),O(Is,{exact:!0,path:"/pokemon/:id",element:O(Qy,{})})]})});function Gk(){return window.addEventListener("beforeunload",()=>{localStorage.clear()}),O(Vy,{children:O(Qk,{})})}$l.createRoot(document.getElementById("root")).render(O(xn.StrictMode,{children:O(Gk,{})}));
