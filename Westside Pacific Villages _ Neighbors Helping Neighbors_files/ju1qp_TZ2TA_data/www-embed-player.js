(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function v(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ia=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if(typeof Object.setPrototypeOf=="function")ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function w(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ra(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function sa(a){return ta(a,a)}
function ta(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ua(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var va=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ua(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||va});
function wa(){this.D=!1;this.u=null;this.i=void 0;this.h=1;this.o=this.M=0;this.P=this.j=null}
function xa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
wa.prototype.G=function(a){this.i=a};
function ya(a,b){a.j={exception:b,zd:!0};a.h=a.M||a.o}
wa.prototype.return=function(a){this.j={return:a};this.h=this.o};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.A=function(a){this.h=a};
function za(a,b,c){a.M=b;c!=void 0&&(a.o=c)}
function Aa(a,b){a.h=b;a.M=0}
function Ba(a){a.M=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.zd?a.h=a.M||a.o:b.A!=void 0&&a.o<b.A?(a.h=b.A,a.j=null):a.h=a.o:a.h=0}
function Da(a){this.h=new wa;this.i=a}
function Ea(a,b){xa(a.h);var c=a.h.u;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.u=null,ya(a.h,g),Ga(a)}a.h.u=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.zd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){xa(a.h);a.h.u?b=Fa(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Ga(a));return b};
this.throw=function(b){xa(a.h);a.h.u?b=Fa(a,a.h.u["throw"],b,a.h.G):(ya(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("globalThis",function(a){return a||fa});
v("Reflect",function(a){return a?a:{}});
v("Reflect.construct",function(){return la});
v("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.X=0;this.ab=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.j)}};
b.prototype.U=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.o(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(this.X!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.X);this.X=g;this.ab=h;this.X===2&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=fa.console;typeof h!=="undefined"&&h.error(g.ab)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ab;return k(g)};
b.prototype.D=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.hc(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(u){try{l(p(u))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.hc(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.hc=function(g,h){function k(){switch(l.X){case 1:g(l.ab);break;case 2:h(l.ab);break;default:throw Error("Unexpected state: "+l.X);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).hc(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(u){return function(x){p[u]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).hc(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||qa});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
v("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ua(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ua(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ua(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)?delete k[g][this.h]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ua(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
v("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
function Ka(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Ka(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push([d,b[d]]);return c}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});
v("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
v("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ma(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Sa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ta(a){return Object.prototype.hasOwnProperty.call(a,Ua)&&a[Ua]||(a[Ua]=++Va)}
var Ua="closure_uid_"+(Math.random()*1E9>>>0),Va=0;function Wa(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Za(a,b,c){Za=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Wa:Xa;return Za.apply(null,arguments)}
function $a(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function ab(){return Date.now()}
function bb(a){return a}
function cb(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function db(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,db);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
cb(db,Error);db.prototype.name="CustomError";var eb=(new Date("2024-01-01T00:00:00Z")).getTime();function fb(a){var b=a.url;a=a.Wh;this.i=b;this.D=a;a=/[?&]dsh=1(&|$)/.test(b);this.u=!a&&/[?&]ae=1(&|$)/.test(b);this.M=!a&&/[?&]ae=2(&|$)/.test(b);if((this.h=/[?&]adurl=([^&]*)/.exec(b))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.j=c}this.o=(new Date).getTime()-eb}
function gb(a,b){return b?a.h?a.i.slice(0,a.h.index)+b+a.i.slice(a.h.index):a.i+b:a.i}
function hb(a){a=a.D;if(!a)return"";var b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)}).join("|")));
typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b}
;var ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var jb=globalThis.trustedTypes,kb;function lb(){var a=null;if(!jb)return a;try{var b=function(c){return c};
a=jb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function mb(){kb===void 0&&(kb=lb());return kb}
;function nb(a){this.h=a}
nb.prototype.toString=function(){return this.h+""};
function ob(a){var b=mb();return new nb(b?b.createScriptURL(a):a)}
function pb(a){if(a instanceof nb)return a.h;throw Error("");}
;var qb=sa([""]),rb=ta(["\x00"],["\\0"]),sb=ta(["\n"],["\\n"]),tb=ta(["\x00"],["\\u0000"]);function ub(a){return a.toString().indexOf("`")===-1}
ub(function(a){return a(qb)})||ub(function(a){return a(rb)})||ub(function(a){return a(sb)})||ub(function(a){return a(tb)});function vb(a){this.h=a}
vb.prototype.toString=function(){return this.h};
var wb=new vb("about:invalid#zClosurez");function xb(a){this.He=a}
function yb(a){return new xb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var zb=[yb("data"),yb("http"),yb("https"),yb("mailto"),yb("ftp"),new xb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],Ab=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function Bb(a){if(a instanceof vb)if(a instanceof vb)a=a.h;else throw Error("");else a=Ab.test(a)?a:void 0;return a}
;function Cb(a,b){b=Bb(b);b!==void 0&&(a.href=b)}
;function Db(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function Eb(a){this.h=a}
Eb.prototype.toString=function(){return this.h+""};function Fb(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Gb(a){this.h=a}
Gb.prototype.toString=function(){return this.h+""};
function Hb(a){var b=mb();return new Gb(b?b.createScript(a):a)}
function Ib(a){if(a instanceof Gb)return a.h;throw Error("");}
;function Jb(a){var b=Fb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Kb(a,b){a.src=pb(b);Jb(a)}
;function Lb(){this.h=Nb[0].toLowerCase()}
Lb.prototype.toString=function(){return this.h};function Ob(a){var b="true".toString(),c=[new Lb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Lb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Pb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Qb(a,b){if(b instanceof nb)a.href=pb(b).toString(),a.rel="stylesheet";else{if(Pb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Bb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Rb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Sb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Tb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ub=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Vb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Sb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Wb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Xb(a,b){b=Rb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Yb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Zb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function $b(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ac(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,bc[c])c=bc[c];else{c=String(c);if(!bc[c]){var f=/function\s+([^\(]+)/m.exec(c);bc[c]=f?f[1]:"[Anonymous]"}c=bc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function ac(a,b){b||(b={});b[cc(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[cc(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=ac(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[cc(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=ac(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function cc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var bc={};function dc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fc(a){return a?decodeURI(a):a}
function hc(a,b){return b.match(ec)[a]||null}
function ic(a){return fc(hc(3,a))}
function jc(a){var b=a.match(ec);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function kc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function lc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)lc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function mc(a){var b=[],c;for(c in a)lc(c,a[c],b);return b.join("&")}
function nc(a,b){b=mc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function oc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var pc=/#|$/,qc=/[?&]($|#)/;function rc(a,b){for(var c=a.search(pc),d=0,e,f=[];(e=oc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(qc,"$1")}
;function sc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function tc(a){var b=b===void 0?42:b;var c=[];uc(a,vc,6).forEach(function(d){wc(d,2)<=b&&c.push(wc(d,1))});
return c}
function xc(a){var b=b===void 0?42:b;var c=[];uc(a,vc,6).forEach(function(d){wc(d,2)>b&&c.push(wc(d,1))});
return c}
function yc(a){var b=b===void 0?42:b;a=(a==null?void 0:wc(a,1))||0;return a>0&&b>=a}
;function zc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Ac(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?Ac.apply(null,d):zc(d)}}
;function F(){this.ea=this.ea;this.M=this.M}
F.prototype.ea=!1;F.prototype.dispose=function(){this.ea||(this.ea=!0,this.ba())};
F.prototype[Symbol.dispose]=function(){this.dispose()};
function Bc(a,b){a.addOnDisposeCallback($a(zc,b))}
F.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.M||(this.M=[]),b&&(a=a.bind(b)),this.M.push(a))};
F.prototype.ba=function(){if(this.M)for(;this.M.length;)this.M.shift()()};var Cc;function Dc(){F.apply(this,arguments);this.j=1;this[Cc]=this.dispose}
w(Dc,F);Dc.prototype.share=function(){if(this.ea)throw Error("E:AD");this.j++;return this};
Dc.prototype.dispose=function(){--this.j||F.prototype.dispose.call(this)};
Cc=Symbol.dispose;function Ec(a){return{fieldType:2,fieldName:a}}
function Fc(a){return{fieldType:3,fieldName:a}}
;function Gc(a){this.h=a;a.Hc("/client_streamz/bg/frs",Fc("ke"))}
Gc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Hc(a){this.h=a;a.Hc("/client_streamz/bg/wrl",Fc("mn"),Ec("ac"),Ec("sc"),Fc("rk"),Fc("mk"))}
Hc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Ic(a){this.i=a;a.Lb("/client_streamz/bg/ec",Fc("en"),Fc("mk"))}
Ic.prototype.h=function(a,b){this.i.Jb("/client_streamz/bg/ec",a,b)};
function Jc(a){this.h=a;a.Hc("/client_streamz/bg/el",Fc("en"),Fc("rk"),Fc("mk"))}
Jc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Kc(a){this.i=a;a.Lb("/client_streamz/bg/cec",Ec("ec"),Fc("rk"),Fc("mk"))}
Kc.prototype.h=function(a,b,c){this.i.Jb("/client_streamz/bg/cec",a,b,c)};
function Lc(a){this.i=a;a.Lb("/client_streamz/bg/po/csc",Ec("cs"),Fc("rk"),Fc("mk"))}
Lc.prototype.h=function(a,b,c){this.i.Jb("/client_streamz/bg/po/csc",a,b,c)};
function Mc(a){this.i=a;a.Lb("/client_streamz/bg/po/ctav",Fc("av"),Fc("rk"),Fc("mk"))}
Mc.prototype.h=function(a,b,c){this.i.Jb("/client_streamz/bg/po/ctav",a,b,c)};
function Nc(a){this.i=a;a.Lb("/client_streamz/bg/po/cwsc",Fc("su"),Fc("rk"),Fc("mk"))}
Nc.prototype.h=function(a,b,c){this.i.Jb("/client_streamz/bg/po/cwsc",a,b,c)};function Oc(a){C.setTimeout(function(){throw a;},0)}
;var Pc,Qc=E("CLOSURE_FLAGS"),Rc=Qc&&Qc[610401301];Pc=Rc!=null?Rc:!1;function Sc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Tc,Uc=C.navigator;Tc=Uc?Uc.userAgentData||null:null;function Vc(a){return Pc?Tc?Tc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function G(a){return Sc().indexOf(a)!=-1}
;function Wc(){return Pc?!!Tc&&Tc.brands.length>0:!1}
function Xc(){return Wc()?!1:G("Opera")}
function Yc(){return G("Firefox")||G("FxiOS")}
function Zc(){return Wc()?Vc("Chromium"):(G("Chrome")||G("CriOS"))&&!(Wc()?0:G("Edge"))||G("Silk")}
;function $c(){return Pc?!!Tc&&!!Tc.platform:!1}
function ad(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;var bd=Xc(),cd=Wc()?!1:G("Trident")||G("MSIE"),dd=G("Edge"),ed=G("Gecko")&&!(Sc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),fd=Sc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge");fd&&G("Mobile");$c()||G("Macintosh");$c()||G("Windows");($c()?Tc.platform==="Linux":G("Linux"))||$c()||G("CrOS");var gd=$c()?Tc.platform==="Android":G("Android");ad();G("iPad");G("iPod");ad()||G("iPad")||G("iPod");Sc().toLowerCase().indexOf("kaios");Yc();var hd=ad()||G("iPod"),id=G("iPad");!G("Android")||Zc()||Yc()||Xc()||G("Silk");Zc();var jd=G("Safari")&&!(Zc()||(Wc()?0:G("Coast"))||Xc()||(Wc()?0:G("Edge"))||(Wc()?Vc("Microsoft Edge"):G("Edg/"))||(Wc()?Vc("Opera"):G("OPR"))||Yc()||G("Silk")||G("Android"))&&!(ad()||G("iPad")||G("iPod"));var kd={},ld=null;function md(a,b){Na(a);b===void 0&&(b=0);nd();b=kd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function od(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;pd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function pd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=ld[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
nd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function nd(){if(!ld){ld={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));kd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];ld[f]===void 0&&(ld[f]=e)}}}}
;var qd=typeof Uint8Array!=="undefined",rd=!cd&&typeof btoa==="function";function sd(a){if(!rd)return md(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var td=/[-_.]/g,ud={"-":"+",_:"/",".":"="};function vd(a){return ud[a]||""}
function wd(a){return qd&&a!=null&&a instanceof Uint8Array}
var xd={};function yd(a,b){zd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
yd.prototype.sizeBytes=function(){zd(xd);var a=this.h;if(a!=null&&!wd(a))if(typeof a==="string")if(rd){td.test(a)&&(a=a.replace(td,vd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=od(a);else Ma(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var Ad;function zd(a){if(a!==xd)throw Error("illegal external caller");}
;var Bd=void 0;function Cd(a){a=Error(a);Zb(a,"warning");return a}
;var Dd=typeof Symbol==="function"&&typeof Symbol()==="symbol",Ed=new Set;function Fd(a,b,c,d){c=c===void 0?!1:c;a=typeof Symbol==="function"&&typeof Symbol()==="symbol"?(d===void 0?0:d)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b;c&&Ed.add(a);return a}
var Gd=Fd("jas",void 0,!0,!0),Hd=Fd(void 0,"2ex"),Id=Fd(void 0,"1oa",!0),Jd=Fd(void 0,Symbol(),!0);Math.max.apply(Math,ra(Object.values({lh:1,jh:2,ih:4,oh:8,nh:16,mh:32,Nf:64,qh:128,hh:256,gh:512,kh:1024,Tf:2048,ph:4096,Uf:8192,Of:16384})));var Kd=Dd?function(a,b){a[Gd]|=b}:function(a,b){a.jb!==void 0?a.jb|=b:Object.defineProperties(a,{jb:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},I=Dd?function(a){return a[Gd]|0}:function(a){return a.jb|0},Ld=Dd?function(a,b){a[Gd]=b}:function(a,b){a.jb!==void 0?a.jb=b:Object.defineProperties(a,{jb:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Md(a,b){Ld(b,(a|0)&-30975)}
function Nd(a,b){Ld(b,(a|34)&-30941)}
;function Od(){return typeof BigInt==="function"}
;function Pd(a){return Array.prototype.slice.call(a)}
;var Qd={},Rd={};function Sd(a){return!(!a||typeof a!=="object"||a.h!==Rd)}
function Td(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Ud(a){return!Array.isArray(a)||a.length?!1:I(a)&1?!0:!1}
var Vd,Wd=[];Ld(Wd,55);Vd=Object.freeze(Wd);function Xd(a){if(a&2)throw Error();}
function Yd(a,b){var c=bb(Jd);(b=c?b[c]:void 0)&&(a[Jd]=Pd(b))}
var Zd=Object.freeze({});function $d(a){a.Eh=!0;return a}
;var ae=$d(function(a){return typeof a==="number"}),be=$d(function(a){return typeof a==="string"}),ce=$d(function(a){return typeof a==="boolean"});
function de(){var a=ee;return $d(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var fe=$d(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var ge=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function he(a){var b=a;if(be(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(ae(b)&&!Number.isSafeInteger(b))throw Error(String(b));return ge?BigInt(a):a=ce(a)?a?"1":"0":be(a)?a.trim()||"0":String(a)}
var ne=$d(function(a){return ge?a>=ie&&a<=je:a[0]==="-"?ke(a,le):ke(a,me)}),le=Number.MIN_SAFE_INTEGER.toString(),ie=ge?BigInt(Number.MIN_SAFE_INTEGER):void 0,me=Number.MAX_SAFE_INTEGER.toString(),je=ge?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function ke(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var oe=0,pe=0;function qe(a){var b=a>>>0;oe=b;pe=(a-b)/4294967296>>>0}
function re(a){if(a<0){qe(0-a);var b=y(se(oe,pe));a=b.next().value;b=b.next().value;oe=a>>>0;pe=b>>>0}else qe(a)}
function te(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Od()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+ue(c)+ue(a));return c}
function ue(a){a=String(a);return"0000000".slice(a.length)+a}
function ve(){var a=oe,b=pe;b&2147483648?Od()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(se(a,b)),a=b.next().value,b=b.next().value,a="-"+te(a,b)):a=te(a,b);return a}
function se(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var we=typeof BigInt==="function"?BigInt.asIntN:void 0,xe=Number.isSafeInteger,ye=Number.isFinite,ze=Math.trunc;function Ae(a){return a.displayName||a.name||"unknown type name"}
function Be(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Ma(a)+": "+a);return a}
var Ce=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function De(a){switch(typeof a){case "bigint":return!0;case "number":return ye(a);case "string":return Ce.test(a);default:return!1}}
function Ee(a){if(typeof a!=="number")throw Cd("int32");if(!ye(a))throw Cd("int32");return a|0}
function Fe(a){return a==null?a:Ee(a)}
function Ge(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return ye(a)?a|0:void 0}
function He(a){var b=0;b=b===void 0?0:b;if(!De(a))throw Cd("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return Ie(a);case "bigint":return String(we(64,a));default:return Je(a)}case 8192:switch(c){case "string":return b=ze(Number(a)),xe(b)?a=he(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=Od()?he(we(64,BigInt(a))):he(Ke(a))),a;case "bigint":return he(we(64,a));default:return xe(a)?he(Le(a)):he(Je(a))}case 0:switch(c){case "string":return Ie(a);case "bigint":return he(we(64,
a));default:return Le(a)}default:return Db(b,"Unknown format requested type for int64")}}
function Me(a){return a==null?a:He(a)}
function Ne(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function Ke(a){a.indexOf(".");if(Ne(a))return a;if(a.length<16)re(Number(a));else if(Od())a=BigInt(a),oe=Number(a&BigInt(4294967295))>>>0,pe=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");pe=oe=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),pe*=1E6,oe=oe*1E6+d,oe>=4294967296&&(pe+=Math.trunc(oe/4294967296),pe>>>=0,oe>>>=0);b&&(b=y(se(oe,pe)),a=b.next().value,b=b.next().value,oe=a,pe=b)}return ve()}
function Le(a){De(a);a=ze(a);if(!xe(a)){re(a);var b=oe,c=pe;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:te(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Je(a){De(a);a=ze(a);if(xe(a))a=String(a);else{var b=String(a);Ne(b)?a=b:(re(a),a=ve())}return a}
function Ie(a){De(a);var b=ze(Number(a));if(xe(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Ke(a)}
function Oe(a){if(a==null)return a;if(typeof a==="bigint")return ne(a)?a=Number(a):(a=we(64,a),a=ne(a)?Number(a):String(a)),a;if(De(a))return typeof a==="number"?Le(a):Ie(a)}
function Pe(a){if(typeof a!=="string")throw Error();return a}
function Qe(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Re(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Ae(b)+" but got "+(a&&Ae(a.constructor)));}
function Se(a,b,c){if(a!=null&&typeof a==="object"&&a.Tc===Qd)return a;if(Array.isArray(a)){var d=I(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Ld(a,e);return new b(a)}}
;function Te(a,b){return Ue(b)}
function Ue(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return ne(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Ud(a))return}else{if(wd(a))return sd(a);if(a instanceof yd){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=sd(b)}}}return a}
;function Ve(a,b,c){var d=Pd(a),e=d.length,f=b&256?d[e-1]:void 0;e+=f?-1:0;for(b=b&512?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(var g in f)b[g]=c(f[g])}Yd(d,a);return d}
function We(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Ud(a)?void 0:e&&I(a)&2?a:Xe(a,b,c,d!==void 0,e);else if(Td(a)){var f={},g;for(g in a)f[g]=We(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Xe(a,b,c,d,e){var f=d||c?I(a):0;d=d?!!(f&32):void 0;for(var g=Pd(a),h=0;h<g.length;h++)g[h]=We(g[h],b,c,d,e);c&&(Yd(g,a),c(f,g));return g}
function Ye(a){return a.Tc===Qd?a.toJSON():Ue(a)}
function Ze(a){return Xe(a,Ye,void 0,void 0,!1)}
;function J(a,b,c){if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");d=I(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(Td(c[f])){d|=256;b=f-(d&512?0:-1);if(b>=1024)throw Error("pvtlmt");d=d&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,e-(d&512?0:-1));if(b>1024)throw Error("spvt");d=d&-33521665|(b&1023)<<15}}}Ld(a,d);return a}
;function $e(a,b,c){c=c===void 0?Nd:c;if(a!=null){if(qd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=I(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Ld(a,(d|34)&-12293),a):Xe(a,$e,d&4?Nd:c,!0,!0)}a.Tc===Qd&&(c=a.F,d=I(c),a=d&2?a:new a.constructor(af(c,d,!0)));return a}}
function af(a,b,c){var d=c||b&2?Nd:Md,e=!!(b&32);a=Ve(a,b,function(f){return $e(f,e,d)});
Kd(a,32|(c?2:0));return a}
function bf(a){var b=a.F,c=I(b);return c&2?new a.constructor(af(b,c,!1)):a}
;function cf(a,b){a=a.F;return df(a,I(a),b)}
function df(a,b,c,d){if(c===-1)return null;var e=c+(b&512?0:-1),f=a.length-1;if(e>=f&&b&256)return a[f][c];if(d&&b&256&&(b=a[f][c],b!=null)){if(a[e]!=null&&Hd!=null){var g;a=(g=Bd)!=null?g:Bd={};g=a[Hd]||0;g>=4||(a[Hd]=g+1,g=Error(),Zb(g,"incident"),Oc(g))}return b}if(e<=f)return a[e]}
function L(a,b,c){var d=a.F,e=I(d);Xd(e);ef(d,e,b,c);return a}
function ef(a,b,c,d){var e=b&512?0:-1,f=c+e,g=a.length-1;if(f>=g&&b&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b&256&&(a=a[g],c in a&&delete a[c]),b;d!==void 0&&(g=b>>15&1023||536870912,c>=g?d!=null&&(f={},a[g+e]=(f[c]=d,f),b|=256,Ld(a,b)):a[f]=d);return b}
function ff(a){return gf(a,hf,11,!1)!==void 0}
function jf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function kf(a,b,c){var d=a.F,e=I(d);Xd(e);if(b==null)return ef(d,e,3),a;if(!Array.isArray(b))throw Cd();var f=I(b),g=f,h=jf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Pd(b),g=0,f=lf(f,e),f=mf(f,e,!0),k=!1);f|=21;h=4&f?4096&f?4096:8192&f?8192:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=Pd(b),g=0,f=lf(f,e),f=mf(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=Pd(b),f=lf(f,e),f=mf(f,e,!0)),Ld(b,f));ef(d,e,3,b);return a}
function nf(a,b,c,d){a=a.F;var e=I(a);Xd(e);if(d==null){var f=of(a);if(pf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=of(a);var g=pf(f,a,e,c);g!==b&&(g&&(e=ef(a,e,g)),f.set(c,b))}ef(a,e,b,d)}
function of(a){if(Dd){var b;return(b=a[Id])!=null?b:a[Id]=new Map}if(Id in a)return a[Id];b=new Map;Object.defineProperty(a,Id,{value:b});return b}
function pf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];df(b,c,g)!=null&&(e!==0&&(c=ef(b,c,e)),e=g)}a.set(d,e);return e}
function gf(a,b,c,d){a=a.F;var e=I(a);d=df(a,e,c,d);b=Se(d,b,e);b!==d&&b!=null&&ef(a,e,c,b);return b}
function qf(a,b,c,d){b=gf(a,b,c,d===void 0?!1:d);if(b==null)return b;a=a.F;d=I(a);if(!(d&2)){var e=bf(b);e!==b&&(b=e,ef(a,d,c,b))}return b}
function uc(a,b,c){var d=void 0===Zd?2:4;var e=I(a.F),f=e,g=!(2&e);a=a.F;var h=!!(2&f);e=h?1:d;g&&(g=!h);d=df(a,f,c);d=Array.isArray(d)?d:Vd;var k=I(d);h=!!(4&k);if(!h){var l=k;l===0&&(l=lf(l,f));k=d;l|=1;var m=f,n=!!(2&l);n&&(m|=2);for(var p=!n,t=!0,u=0,x=0;u<k.length;u++){var z=Se(k[u],b,m);if(z instanceof b){if(!n){var H=!!(I(z.F)&2);p&&(p=!H);t&&(t=H)}k[x++]=z}}x<u&&(k.length=x);l|=4;l=t?l|16:l&-17;l=p?l|8:l&-9;Ld(k,l);n&&Object.freeze(k);k=l}if(g&&!(8&k||!d.length&&(e===1||e===4&&32&k))){jf(k)&&
(d=Pd(d),k=lf(k,f),f=ef(a,f,c,d));b=d;g=k;for(k=0;k<b.length;k++)l=b[k],m=bf(l),l!==m&&(b[k]=m);g|=8;g=b.length?g&-17:g|16;Ld(b,g);k=g}e===1||e===4&&32&k?jf(k)||(f=k,c=!!(32&k),k|=!d.length||16&k&&(!h||c)?2:2048,k!==f&&Ld(d,k),Object.freeze(d)):(e===2&&jf(k)&&(d=Pd(d),k=lf(k,f),k=mf(k,f,!1),Ld(d,k),f=ef(a,f,c,d)),jf(k)||(c=k,k=mf(k,f,!1),k!==c&&Ld(d,k)));return d}
function rf(a,b,c,d){d!=null?Re(d,b):d=void 0;return L(a,c,d)}
function sf(a,b,c,d){var e=a.F,f=I(e);Xd(f);if(d==null)return ef(e,f,c),a;if(!Array.isArray(d))throw Cd();for(var g=I(d),h=g,k=jf(g),l=k||Object.isFrozen(d),m=!0,n=!0,p=0;p<d.length;p++){var t=d[p];Re(t,b);k||(t=!!(I(t.F)&2),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=Pd(d),h=0,g=lf(g,f),g=mf(g,f,!0));g!==h&&Ld(d,g);ef(e,f,c,d);return a}
function lf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function mf(a,b,c){32&b&&c||(a&=-33);return a}
function tf(a){a=cf(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(we(64,a)):De(a)?c==="string"?Ie(a):b?Je(a):Le(a):void 0;return b}
function uf(a,b){a=cf(a,b);return a==null||typeof a==="string"?a:void 0}
function wc(a,b,c){c=c===void 0?0:c;var d;return(d=Ge(cf(a,b)))!=null?d:c}
function vf(a,b){var c=c===void 0?"":c;var d;return(d=uf(a,b))!=null?d:c}
function wf(a){var b=0;b=b===void 0?0:b;a=cf(a,1);a=a==null?a:ye(a)?a|0:void 0;return a!=null?a:b}
function xf(a,b,c){return L(a,b,Qe(c))}
function yf(a,b,c){c=Qe(c);a=a.F;var d=I(a);Xd(d);ef(a,d,b,c===""?void 0:c)}
function zf(a,b,c){if(c!=null){if(!ye(c))throw Cd("enum");c|=0}return L(a,b,c)}
;function Af(a){return a}
function Bf(a){return a}
function Cf(a,b,c,d){return Df(a,b,c,d,Ef,Ff)}
function Gf(a,b,c,d){return Df(a,b,c,d,Hf,If)}
function Df(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var p=c[n];d&&n===c.length-1&&p===d||(l++,p!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Jf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;p=g;for(var u=m,x=c.length-1;x>=0;x--){var z=c[x];if(!(z==null||d&&x===c.length-1&&z===d)){z=x-b;var H=e(z,t)+f(n,p,u);H<l&&(a=1+z,l=H);n++;t--;u+=Jf(z);p=Math.max(p,z)}}b=e(0,0)+f(n,p,u);b<l&&(a=0,l=b);if(d){n=h;p=g;u=m;t=k;for(var K in d)d=+K,isNaN(d)||d>=
1024||(n--,t++,u-=K.length,g=e(d,t)+f(n,p,u),g<l&&(a=1+d,l=g))}return a}
function If(a,b,c){return c+a*3+(a>1?a-1:0)}
function Hf(a,b){return(a>1?a-1:0)+(a-b)*4}
function Ff(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Ef(a){return 40+4*a}
function Jf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Kf;function Lf(a){return a}
var Mf;function M(a,b,c){this.F=J(a,b,c)}
r=M.prototype;r.toJSON=function(){var a=!Mf;try{return a&&(Mf=Ze),Nf(this)}finally{a&&(Mf=void 0)}};
r.serialize=function(a){try{return Mf=Lf,a&&(Kf=a===Bf||a!==Af&&a!==Cf&&a!==Gf?Bf:a),JSON.stringify(Nf(this),Te)}finally{a&&(Kf=void 0),Mf=void 0}};
function Of(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Kd(b,32);return new a(b)}
r.clone=function(){var a=this.F,b=I(a);return new this.constructor(af(a,b,!1))};
r.Tc=Qd;r.toString=function(){try{return Mf=Lf,Nf(this).toString()}finally{Mf=void 0}};
function Nf(a){var b=a.F,c=Mf(b);b=c!==b;var d=I(b?a.F:c);if(a=c.length){var e=c[a-1],f=Td(e);f?a--:e=void 0;var g=d&512?0:-1,h=a-g;d=!!Kf&&!(d&512);var k,l=(k=Kf)!=null?k:Bf;k=d?l(h,g,c,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(c,0,a):c;if(f||h){b:{var m=d;var n=e;var p;f=!1;if(h)for(l=Math.max(0,k+g);l<m.length;l++){var t=m[l],u=l-g;t==null||Ud(t)||Sd(t)&&t.size===0||(f=m[l]=void 0,((f=p)!=null?f:p={})[u]=t,f=!0)}if(n)for(var x in n)if(l=+x,isNaN(l))l=void 0,((l=p)!=null?l:p={})[x]=n[x];else if(t=
n[x],Array.isArray(t)&&(Ud(t)||Sd(t)&&t.size===0)&&(t=null),t==null&&(f=!0),h&&l<k){f=!0;t=l+g;for(u=m.length;u<=t;u++)m.push(void 0);m[t]=n[l]}else t!=null&&(l=void 0,((l=p)!=null?l:p={})[x]=t);f||(p=n);if(p)for(var z in p){n=p;break b}n=null}m=n==null?e!=null:n!==e}h&&(a=d.length);for(var H;a>0;a--){p=d[a-1];if(!(p==null||Ud(p)||Sd(p)&&p.size===0))break;H=!0}if(d!==c||m||H){if(!h&&!b)d=Array.prototype.slice.call(d,0,a);else if(H||m||n)d.length=a;n&&d.push(n)}c=d}return c}
;function Pf(a){return function(b){return Of(a,b)}}
;function Qf(a){this.F=J(a)}
w(Qf,M);function Rf(a,b){return kf(a,b,Ee)}
;function Sf(a){this.F=J(a)}
w(Sf,M);var Tf=[1,2,3];function Uf(a){this.F=J(a)}
w(Uf,M);var Vf=[1,2,3];function Wf(a){this.F=J(a)}
w(Wf,M);function Xf(a){this.F=J(a)}
w(Xf,M);function Yf(a){this.F=J(a)}
w(Yf,M);function Zf(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function $f(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var u=e[1],x=e[2],z=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var K=z^u&(x^z);var da=1518500249}else K=u^x^z,da=1859775393;else t<60?(K=u&x|z&(u|x),da=2400959708):(K=u^x^z,da=3395469782);K=((n<<5|n>>>27)&4294967295)+K+H+da+p[t]&4294967295;H=z;z=x;x=(u<<30|u>>>2)&4294967295;u=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+u&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],u=0,x=n.length;u<x;++u)t.push(n.charCodeAt(u));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var u=24;u>=0;u-=8)n[p++]=e[t]>>u&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,le:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function ag(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,bg(Zf(d),a,c||null)].join(" "):null}
function bg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Sb(d,function(h){e.push(h)}),cg(e.join(" "));
var f=[],g=[];Sb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Sb(d,function(h){e.push(h)});
a=cg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function cg(a){var b=$f();b.update(a);return b.le().toLowerCase()}
;function dg(a){this.h=a||{cookie:""}}
r=dg.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Ub:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.cf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ub}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ib(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Ub:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ib(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var eg=new dg(typeof document=="undefined"?null:document);function fg(){var a=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__1PSAPISID||C.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new dg(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function gg(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new dg(document)).get(b));return a?ag(a,c,d):null}
function hg(a){var b=Zf(String(C.location.href)),c=[];if(fg()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?C.__SAPISID:C.__APISID;d||typeof document==="undefined"||(d=new dg(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?ag(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=gg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=gg("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function ig(){}
ig.prototype.compress=function(a){var b,c,d,e;return A(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
ig.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function jg(a){this.F=J(a)}
w(jg,M);function kg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return ab()};
this.i=this.h()}
kg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
kg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
kg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
kg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function lg(a){this.F=J(a)}
w(lg,M);function mg(a){this.F=J(a)}
w(mg,M);function ng(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=ng.prototype;r.clone=function(){return new ng(this.x,this.y)};
r.equals=function(a){return a instanceof ng&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function og(a,b){this.width=a;this.height=b}
r=og.prototype;r.clone=function(){return new og(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function pg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function qg(a){var b=rg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function sg(a){for(var b in a)return!1;return!0}
function tg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ug(a){return a!==null&&"privembed"in a?a.privembed:!1}
function vg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function wg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function xg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=xg(a[c]);return b}
var yg="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function zg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<yg.length;f++)c=yg[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ag(a,b){this.h=a===Bg&&b||""}
Ag.prototype.toString=function(){return this.h};
var Bg={};new Ag(Bg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Cg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Dg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Eg(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Fg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Gg(a){this.F=J(a)}
w(Gg,M);Gg.prototype.nc=function(){return wf(this)};function Hg(a){this.F=J(a)}
w(Hg,M);function Ig(a){this.F=J(a)}
w(Ig,M);function Jg(a,b){sf(a,Hg,1,b)}
;function hf(a){this.F=J(a)}
w(hf,M);var Kg=["platform","platformVersion","architecture","model","uaFullVersion"],Lg=new Ig,Mg=null;function Ng(a,b){b=b===void 0?Kg:b;if(!Mg){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Hg;f=xf(f,1,e.brand);return xf(f,2,e.version)});
Jg(L(Lg,2,Be(a.mobile)),c);Mg=a.getHighEntropyValues(b)}var d=new Set(b);return Mg.then(function(e){var f=Lg.clone();d.has("platform")&&xf(f,3,e.platform);d.has("platformVersion")&&xf(f,4,e.platformVersion);d.has("architecture")&&xf(f,5,e.architecture);d.has("model")&&xf(f,6,e.model);d.has("uaFullVersion")&&xf(f,7,e.uaFullVersion);return f}).catch(function(){return Lg.clone()})}
;function Og(a){this.F=J(a)}
w(Og,M);function Pg(a){this.F=J(a,4)}
w(Pg,M);function Qg(a){this.F=J(a,36)}
w(Qg,M);function Rg(a){this.F=J(a,19)}
w(Rg,M);Rg.prototype.Xb=function(a){return zf(this,2,a)};function Sg(a,b){this.Wa=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new Rg;Number.isInteger(a)&&this.h.Xb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Tg(this,new Og)}
Sg.prototype.Xb=function(a){this.h.Xb(a);return this};
function Tg(a,b){rf(a.h,Og,1,b);wf(b)||zf(b,1,1);a.Wa||(b=Ug(a),vf(b,5)||xf(b,5,a.locale));a.i&&(b=Ug(a),qf(b,Ig,9)||rf(b,Ig,9,a.i))}
function Vg(a,b){ff(Wg(a))&&(a=Xg(a),zf(a,1,b))}
function Yg(a,b){ff(Wg(a))&&(a=Xg(a),L(a,2,Be(b)))}
function Wg(a){return qf(a.h,Og,1)}
function Zg(a){var b=b===void 0?Kg:b;var c=a.Wa?void 0:window;c?Ng(c,b).then(function(d){a.i=d;d=Ug(a);rf(d,Ig,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Ug(a){a=Wg(a);var b=qf(a,hf,11);b||(b=new hf,rf(a,hf,11,b));return b}
function Xg(a){a=Ug(a);var b=qf(a,Gg,10);b||(b=new Gg,L(b,2,Be(!1)),rf(a,Gg,10,b));return b}
function $g(a,b,c,d,e,f,g){c=c===void 0?0:c;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;d=d===void 0?0:d;if(ff(Wg(a))){var h=Xg(a);L(h,3,Fe(d))}ff(Wg(a))&&(d=Xg(a),L(d,4,Fe(f)));ff(Wg(a))&&(f=Xg(a),L(f,5,Fe(g)));a=a.h.clone();g=Date.now().toString();a=L(a,4,Me(g));b=b.slice();b=sf(a,Qg,3,b);e&&(a=new lg,e=L(a,13,Fe(e)),a=new mg,e=rf(a,lg,2,e),a=new Pg,e=rf(a,mg,1,e),e=zf(e,2,9),rf(b,Pg,18,e));c&&L(b,14,Me(c));return b}
;var ah=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function bh(a){this.h=this.i=this.j=a}
bh.prototype.reset=function(){this.h=this.i=this.j};
bh.prototype.getValue=function(){return this.i};function ch(a){this.F=J(a,8)}
w(ch,M);var dh=Pf(ch);function eh(a){this.F=J(a)}
w(eh,M);var fh=new function(){this.ctor=eh;this.isRepeated=0;this.h=qf;this.defaultValue=void 0};function gh(a){F.call(this);var b=this;this.componentId="";this.h=[];this.Pa="";this.pageId=null;this.Qa=this.ha=-1;this.G=this.experimentIds=null;this.Y=this.Z=this.D=this.o=0;this.sb=1;this.timeoutMillis=0;this.pa=!1;this.logSource=a.logSource;this.hb=a.hb||function(){};
this.j=new Sg(a.logSource,a.Wa);this.network=a.network||null;this.nb=a.nb||null;this.bufferSize=1E3;this.P=a.zf||null;this.sessionIndex=a.sessionIndex||null;this.Pb=a.Pb||!1;this.logger=null;this.withCredentials=!a.sd;this.Wa=a.Wa||!1;this.U=!this.Wa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Fa=typeof URLSearchParams!=="undefined"&&!!(new URL(hh())).searchParams&&!!(new URL(hh())).searchParams.set;var c=zf(new Og,1,1);Tg(this.j,c);this.u=new bh(1E4);a=kh(this,a.nd);
this.i=new kg(this.u.getValue(),a);this.xa=new kg(6E5,a);this.Pb||this.xa.start();this.Wa||(document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&b.Lc()}),document.addEventListener("pagehide",this.Lc.bind(this)))}
w(gh,F);function kh(a,b){return a.Fa?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
r=gh.prototype;r.ba=function(){this.Lc();this.i.stop();this.xa.stop();F.prototype.ba.call(this)};
function lh(a){a.P||(a.P=hh());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
r.log=function(a){if(this.Fa){a=a.clone();var b=this.sb++;a=L(a,21,Me(b));this.componentId&&xf(a,26,this.componentId);b=a;if(tf(b)==null){var c=Date.now();c=Number.isFinite(c)?c.toString():"0";L(b,1,Me(c))}Oe(cf(b,15))==null&&L(b,15,Me((new Date).getTimezoneOffset()*60));this.experimentIds&&(c=this.experimentIds.clone(),rf(b,jg,16,c));b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b);this.h.push(a);this.Pb||this.i.enabled||this.i.start()}};
r.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.pa&&this.U)Vg(this.j,3),mh(this);else{var d=Date.now();if(this.Qa>d&&this.ha<d)b&&b("throttled");else{this.network&&(typeof this.network.nc==="function"?Vg(this.j,this.network.nc()):Vg(this.j,0));var e=$g(this.j,this.h,this.o,this.D,this.nb,this.Z,this.Y),f=this.hb();if(f&&this.Pa===f)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=e.serialize();var g;this.G&&this.G.isSupported(d.length)&&(g=
this.G.compress(d));var h=nh(this,d,f),k=function(n){c.u.reset();c.i.setInterval(c.u.getValue());if(n){var p=null;try{var t=JSON.stringify(JSON.parse(n.replace(")]}'\n","")));p=dh(t)}catch(z){}if(p){n=Number;var u="-1";u=u===void 0?"0":u;var x;t=(x=tf(p))!=null?x:u;x=n(t);x>0&&(c.ha=Date.now(),c.Qa=c.ha+x);p=fh.ctor?fh.h(p,fh.ctor,175237375,!0):fh.h(p,175237375,null,!0);if(p=p===null?void 0:p)p=wc(p,1,-1),p!==-1&&(c.u=new bh(p<1?1:p),c.i.setInterval(c.u.getValue()))}}a&&a();c.D=0},l=function(n,p){var t=
uc(e,Qg,3);
var u;var x=(u=Oe(cf(e,14)))!=null?u:void 0;u=c.u;u.h=Math.min(3E5,u.h*2);u.i=Math.min(3E5,u.h+Math.round(.1*(Math.random()-.5)*2*u.h));c.i.setInterval(c.u.getValue());n===401&&f&&(c.Pa=f);x&&(c.o+=x);p===void 0&&(p=c.isRetryable(n));p&&(c.h=t.concat(c.h),c.Pb||c.i.enabled||c.i.start());b&&b("net-send-failed",n);++c.D},m=function(){c.network&&c.network.send(h,k,l)};
g?g.then(function(n){h.Cc["Content-Encoding"]="gzip";h.Cc["Content-Type"]="application/binary";h.body=n;h.ee=2;m()},function(){m()}):m()}}}};
function nh(a,b,c){c=c===void 0?a.hb():c;var d={},e=new URL(lh(a));c&&(d.Authorization=c);a.sessionIndex&&(d["X-Goog-AuthUser"]=a.sessionIndex,e.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:a.pageId}),e.searchParams.set("pageId",a.pageId));return{url:e.toString(),body:b,ee:1,Cc:d,requestType:"POST",withCredentials:a.withCredentials,timeoutMillis:a.timeoutMillis}}
r.Lc=function(){Yg(this.j,!0);this.flush();Yg(this.j,!1)};
function mh(a){oh(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.U=!1);return d})}
function oh(a,b){if(a.h.length!==0){var c=new URL(lh(a));c.searchParams.delete("format");var d=a.hb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=$g(a.j,e,a.o,a.D,a.nb,a.Z,a.Y);if(!b(c.toString(),f)){++a.D;break}a.o=0;a.D=0;a.Z=0;a.Y=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
r.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function hh(){return"https://play.google.com/log?format=json&hasfast=true"}
;function ph(){this.Yd=typeof AbortController!=="undefined"}
ph.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return A(function(u){switch(u.h){case 1:return f=(e=d.Yd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,za(u,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Cc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),u.yield(fetch(a.url,g),5);case 5:h=u.i;if(h.status!==200){(k=c)==null||k(h.status);u.A(3);break}if((l=b)==null){u.A(7);break}return u.yield(h.text(),8);case 8:l(u.i);case 7:case 3:u.P=[u.j];u.M=0;u.o=0;clearTimeout(f);Ca(u);break;case 2:m=Ba(u);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}u.A(3)}})};
ph.prototype.nc=function(){return 4};function qh(a,b){F.call(this);this.logSource=a;this.sessionIndex=b;this.Ua="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.nb=null;this.j=!1;this.pageId=null}
w(qh,F);function rh(a,b){a.i=b;return a}
function sh(a,b){a.network=b;return a}
function th(a,b){a.h=b}
qh.prototype.sd=function(){this.u=!0;return this};
function uh(a){a.network||(a.network=new ph);var b=new gh({logSource:a.logSource,hb:a.hb?a.hb:hg,sessionIndex:a.sessionIndex,zf:a.Ua,Wa:a.o,Pb:!1,sd:a.u,nd:a.nd,network:a.network});Bc(a,b);if(a.i){var c=a.i,d=Ug(b.j);xf(d,7,c)}b.G=new ig;a.componentId&&(b.componentId=a.componentId);a.nb&&(b.nb=a.nb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new jg),c=b.experimentIds,d=d.serialize(),xf(c,4,d)):b.experimentIds&&L(b.experimentIds,4));a.j&&(b.pa=b.U);Zg(b.j);a.network.Xb&&
a.network.Xb(a.logSource);a.network.pf&&a.network.pf(b);return b}
;function vh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;F.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new qh(a,"0"),a.componentId=b,Bc(this,a),c!==""&&(a.Ua=c),d&&(a.o=!0),e&&rh(a,e),g&&sh(a,g),b=uh(a));this.h=b}
w(vh,F);
vh.prototype.flush=function(a){var b=a||[];if(b.length){a=new Yf;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Xf;f=xf(f,1,e.i);var g=wh(e);f=kf(f,g,Pe);g=[];var h=[];for(var k=y(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Mc(l)||[],p=[],t=0;t<n.length;t++){var u=n[t],x=u&&u.h;u=new Uf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&nf(u,1,Vf,Me(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);nf(u,2,Vf,x)}p.push(u)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new Wf;p=rf(t,Uf,2,p);t=l;u=[];x=xh(e);for(var z=0;z<x.length;z++){var H=x[z],K=t[z],da=new Sf;switch(H){case 3:nf(da,1,Tf,Qe(String(K)));break;case 2:H=Number(K);Number.isFinite(H)&&nf(da,2,Tf,Fe(H));break;case 1:nf(da,3,Tf,Be(K==="true"))}u.push(da)}sf(p,Sf,1,u);g.push(p)}}sf(f,Wf,4,g);c.push(f);e.clear()}sf(a,Xf,1,c);b=this.h;if(a instanceof Qg)b.log(a);else try{var ea=new Qg,Oa=a.serialize();var Mb=xf(ea,8,Oa);b.log(Mb)}catch(ka){}this.h.flush()}};function yh(a){this.h=a}
;function zh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function xh(a){return a.fields.map(function(b){return b.fieldType})}
function wh(a){return a.fields.map(function(b){return b.fieldName})}
r=zh.prototype;r.Zd=function(a){var b=B.apply(1,arguments),c=this.Mc(b);c?c.push(new yh(a)):this.Kd(a,b)};
r.Kd=function(a){var b=this.md(B.apply(1,arguments));this.h.set(b,[new yh(a)])};
r.Mc=function(){var a=this.md(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.ye=function(){var a=this.Mc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.md=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Ah(a,b){zh.call(this,a,3,b)}
w(Ah,zh);Ah.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.ye(b);d&&(c=d.h);this.Kd(c+a,b)};function Bh(a,b){zh.call(this,a,2,b)}
w(Bh,zh);Bh.prototype.record=function(a){this.Zd(a,B.apply(1,arguments))};function Ch(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Ch.prototype.stopPropagation=function(){this.j=!0};
Ch.prototype.preventDefault=function(){this.defaultPrevented=!0};function Dh(a,b){Ch.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
cb(Dh,Ch);
Dh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Dh.Aa.preventDefault.call(this)};
Dh.prototype.stopPropagation=function(){Dh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Dh.prototype.preventDefault=function(){Dh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Eh="closure_listenable_"+(Math.random()*1E6|0);var Fh=0;function Gh(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.pc=e;this.key=++Fh;this.Wb=this.fc=!1}
function Hh(a){a.Wb=!0;a.listener=null;a.proxy=null;a.src=null;a.pc=null}
;function Ih(a){this.src=a;this.listeners={};this.h=0}
Ih.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Jh(a,b,d,e);g>-1?(b=a[g],c||(b.fc=!1)):(b=new Gh(b,this.src,f,!!d,e),b.fc=c,a.push(b));return b};
Ih.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Jh(e,b,c,d);return b>-1?(Hh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Kh(a,b){var c=b.type;c in a.listeners&&Xb(a.listeners[c],b)&&(Hh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Jh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Wb&&f.listener==b&&f.capture==!!c&&f.pc==d)return e}return-1}
;var Lh="closure_lm_"+(Math.random()*1E6|0),Mh={},Nh=0;function Oh(a,b,c,d,e){if(d&&d.once)Ph(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Oh(a,b[f],c,d,e);else c=Qh(c),a&&a[Eh]?a.listen(b,c,Sa(d)?!!d.capture:!!d,e):Rh(a,b,c,!1,d,e)}
function Rh(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Sa(e)?!!e.capture:!!e,h=Sh(a);h||(a[Lh]=h=new Ih(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Th();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ah||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Uh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Nh++}}
function Th(){function a(c){return b.call(a.src,a.listener,c)}
var b=Vh;return a}
function Ph(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ph(a,b[f],c,d,e);else c=Qh(c),a&&a[Eh]?Wh(a,b,c,Sa(d)?!!d.capture:!!d,e):Rh(a,b,c,!0,d,e)}
function Xh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Xh(a,b[f],c,d,e);else(d=Sa(d)?!!d.capture:!!d,c=Qh(c),a&&a[Eh])?a.i.remove(String(b),c,d,e):a&&(a=Sh(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Jh(b,c,d,e)),(c=a>-1?b[a]:null)&&Yh(c))}
function Yh(a){if(typeof a!=="number"&&a&&!a.Wb){var b=a.src;if(b&&b[Eh])Kh(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Uh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Nh--;(c=Sh(b))?(Kh(c,a),c.h==0&&(c.src=null,b[Lh]=null)):Hh(a)}}}
function Uh(a){return a in Mh?Mh[a]:Mh[a]="on"+a}
function Vh(a,b){if(a.Wb)a=!0;else{b=new Dh(b,this);var c=a.listener,d=a.pc||a.src;a.fc&&Yh(a);a=c.call(d,b)}return a}
function Sh(a){a=a[Lh];return a instanceof Ih?a:null}
var Zh="__closure_events_fn_"+(Math.random()*1E9>>>0);function Qh(a){if(typeof a==="function")return a;a[Zh]||(a[Zh]=function(b){return a.handleEvent(b)});
return a[Zh]}
;function $h(){F.call(this);this.i=new Ih(this);this.xa=this;this.Z=null}
cb($h,F);$h.prototype[Eh]=!0;r=$h.prototype;r.addEventListener=function(a,b,c,d){Oh(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Xh(this,a,b,c,d)};
function ai(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.xa;c=b.type||b;typeof b==="string"?b=new Ch(b,a):b instanceof Ch?b.target=b.target||a:(e=b,b=new Ch(c,a),zg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=bi(g,c,!0,b)&&e}b.j||(g=b.h=a,e=bi(g,c,!0,b)&&e,b.j||(e=bi(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=bi(g,c,!1,b)&&e}
r.ba=function(){$h.Aa.ba.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Wh(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Hh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function bi(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Wb&&g.capture==c){var h=g.listener,k=g.pc||g.src;g.fc&&Kh(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var ci=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function di(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
di.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function ei(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function fi(){this.i=this.h=null}
fi.prototype.add=function(a,b){var c=gi.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
fi.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var gi=new di(function(){return new hi},function(a){return a.reset()});
function hi(){this.next=this.scope=this.h=null}
hi.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
hi.prototype.reset=function(){this.next=this.scope=this.h=null};var ii,ji=!1,ki=new fi;function li(a,b){ii||mi();ji||(ii(),ji=!0);ki.add(a,b)}
function mi(){var a=Promise.resolve(void 0);ii=function(){a.then(ni)}}
function ni(){for(var a;a=ki.remove();){try{a.h.call(a.scope)}catch(b){Oc(b)}ei(gi,a)}ji=!1}
;function oi(){}
function pi(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function qi(a){this.X=0;this.ab=void 0;this.vb=this.Sa=this.parent_=null;this.oc=this.Kc=!1;if(a!=oi)try{var b=this;a.call(void 0,function(c){ri(b,2,c)},function(c){ri(b,3,c)})}catch(c){ri(this,3,c)}}
function si(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
si.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var ti=new di(function(){return new si},function(a){a.reset()});
function ui(a,b,c){var d=ti.get();d.i=a;d.h=b;d.context=c;return d}
function vi(a){return new qi(function(b,c){c(a)})}
qi.prototype.then=function(a,b,c){return wi(this,ci(typeof a==="function"?a:null),ci(typeof b==="function"?b:null),c)};
qi.prototype.$goog_Thenable=!0;function xi(a,b,c,d){yi(a,ui(b||oi,c||null,d))}
r=qi.prototype;r.finally=function(a){var b=this;a=ci(a);return new Promise(function(c,d){xi(b,function(e){a();c(e)},function(e){a();
d(e)})})};
r.Ec=function(a,b){return wi(this,null,ci(a),b)};
r.catch=qi.prototype.Ec;r.cancel=function(a){if(this.X==0){var b=new zi(a);li(function(){Ai(this,b)},this)}};
function Ai(a,b){if(a.X==0)if(a.parent_){var c=a.parent_;if(c.Sa){for(var d=0,e=null,f=null,g=c.Sa;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.X==0&&d==1?Ai(c,b):(f?(d=f,d.next==c.vb&&(c.vb=d),d.next=d.next.next):Bi(c),Ci(c,e,3,b)))}a.parent_=null}else ri(a,3,b)}
function yi(a,b){a.Sa||a.X!=2&&a.X!=3||Di(a);a.vb?a.vb.next=b:a.Sa=b;a.vb=b}
function wi(a,b,c,d){var e=ui(null,null,null);e.child=new qi(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof zi?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;yi(a,e);return e.child}
r.xf=function(a){this.X=0;ri(this,2,a)};
r.yf=function(a){this.X=0;ri(this,3,a)};
function ri(a,b,c){if(a.X==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.X=1;a:{var d=c,e=a.xf,f=a.yf;if(d instanceof qi){xi(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Sa(d))try{var k=d.then;if(typeof k==="function"){Ei(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ab=c,a.X=b,a.parent_=null,Di(a),b!=3||c instanceof zi||Fi(a,c))}}
function Ei(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Di(a){a.Kc||(a.Kc=!0,li(a.se,a))}
function Bi(a){var b=null;a.Sa&&(b=a.Sa,a.Sa=b.next,b.next=null);a.Sa||(a.vb=null);return b}
r.se=function(){for(var a;a=Bi(this);)Ci(this,a,this.X,this.ab);this.Kc=!1};
function Ci(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.oc;a=a.parent_)a.oc=!1;if(b.child)b.child.parent_=null,Gi(b,c,d);else try{b.j?b.i.call(b.context):Gi(b,c,d)}catch(e){Hi.call(null,e)}ei(ti,b)}
function Gi(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Fi(a,b){a.oc=!0;li(function(){a.oc&&Hi.call(null,b)})}
var Hi=Oc;function zi(a){db.call(this,a)}
cb(zi,db);zi.prototype.name="cancel";function Ii(a,b){$h.call(this);this.j=a||1;this.h=b||C;this.o=Za(this.uf,this);this.u=ab()}
cb(Ii,$h);r=Ii.prototype;r.enabled=!1;r.Ea=null;r.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
r.uf=function(){if(this.enabled){var a=ab()-this.u;a>0&&a<this.j*.8?this.Ea=this.h.setTimeout(this.o,this.j-a):(this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null),ai(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.h.setTimeout(this.o,this.j),this.u=ab())};
r.stop=function(){this.enabled=!1;this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null)};
r.ba=function(){Ii.Aa.ba.call(this);this.stop();delete this.h};function Ji(a){F.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.D=new Set;this.flushInterval=3E4;this.h=new Ii(this.flushInterval);this.h.listen("tick",this.Zb,!1,this);Bc(this,this.h)}
w(Ji,F);r=Ji.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Ki(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.Zb()}
r.Zb=function(){var a=this.i.values();a=[].concat(ra(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Li(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Lb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ah(a,b))};
r.Hc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Bh(a,b))};
function Mi(a,b){return a.D.has(b)?void 0:a.i.get(b)}
r.Jb=function(a){this.Xd(a,1,B.apply(1,arguments))};
r.Xd=function(a,b){var c=B.apply(2,arguments),d=Mi(this,a);d&&d instanceof Ah&&(d.j(b,c),Ki(this))};
r.record=function(a,b){var c=B.apply(2,arguments),d=Mi(this,a);d&&d instanceof Bh&&(d.record(b,c),Ki(this))};
function Li(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Ni(){}
Ni.prototype.serialize=function(a){var b=[];Oi(this,a,b);return b.join("")};
function Oi(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Oi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Pi(d,c),c.push(":"),Oi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Pi(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Qi={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ri=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Pi(a,b){b.push('"',a.replace(Ri,function(c){var d=Qi[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Qi[c]=d);return d}),'"')}
;function Si(){$h.call(this);this.headers=new Map;this.h=!1;this.J=null;this.o=this.Y="";this.j=this.U=this.D=this.P=!1;this.G=0;this.u=null;this.pa="";this.ha=!1}
cb(Si,$h);var Ti=/^https?$/i,Ui=["POST","PUT"],Vi=[];function Wi(a,b,c,d,e,f,g){var h=new Si;Vi.push(h);b&&h.listen("complete",b);Wh(h,"ready",h.he);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
r=Si.prototype;r.he=function(){this.dispose();Xb(Vi,this)};
r.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.P=!1;this.h=!0;this.J=new XMLHttpRequest;this.J.onreadystatechange=ci(Za(this.Dd,this));try{this.getStatus(),this.U=!0,this.J.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Xi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Rb(Ui,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.pa&&(this.J.responseType=this.pa);"withCredentials"in this.J&&this.J.withCredentials!==this.ha&&(this.J.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.wf.bind(this),this.G)),
this.getStatus(),this.D=!0,this.J.send(a),this.D=!1}catch(g){this.getStatus(),Xi(this,g)}};
r.wf=function(){typeof La!="undefined"&&this.J&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),ai(this,"timeout"),this.abort(8))};
function Xi(a,b){a.h=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.o=b;Yi(a);Zi(a)}
function Yi(a){a.P||(a.P=!0,ai(a,"complete"),ai(a,"error"))}
r.abort=function(){this.J&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.J.abort(),this.j=!1,ai(this,"complete"),ai(this,"abort"),Zi(this))};
r.ba=function(){this.J&&(this.h&&(this.h=!1,this.j=!0,this.J.abort(),this.j=!1),Zi(this,!0));Si.Aa.ba.call(this)};
r.Dd=function(){this.ea||(this.U||this.D||this.j?$i(this):this.Oe())};
r.Oe=function(){$i(this)};
function $i(a){if(a.h&&typeof La!="undefined")if(a.D&&(a.J?a.J.readyState:0)==4)setTimeout(a.Dd.bind(a),0);else if(ai(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(aj(a))ai(a,"complete"),ai(a,"success");else{try{var b=(a.J?a.J.readyState:0)>2?a.J.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";Yi(a)}}finally{Zi(a)}}}
function Zi(a,b){if(a.J){a.u&&(clearTimeout(a.u),a.u=null);var c=a.J;a.J=null;b||ai(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.J};
r.isComplete=function(){return(this.J?this.J.readyState:0)==4};
function aj(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=hc(1,String(a.Y)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Ti.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.J?this.J.readyState:0)>2?this.J.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function bj(){}
bj.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Wi(a.url,function(d){d=d.target;if(aj(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Cc,a.timeoutMillis,a.withCredentials)};
bj.prototype.nc=function(){return 1};function cj(a,b){this.logger=a;this.event=b;this.startTime=dj()}
cj.prototype.done=function(){this.logger.Tb(this.event,dj()-this.startTime)};
function ej(){Dc.apply(this,arguments)}
w(ej,Dc);function fj(a,b){var c=dj();b=b();a.Tb("n",dj()-c);return b}
function gj(){ej.apply(this,arguments)}
w(gj,ej);r=gj.prototype;r.Qc=function(){};
r.Cb=function(){};
r.Tb=function(){};
r.Ha=function(){};
r.Bc=function(){};
r.Pd=function(){};
function hj(a){return{sf:new Gc(a),errorCount:new Kc(a),eventCount:new Ic(a),re:new Jc(a),Zh:new Hc(a),bi:new Lc(a),uh:new Mc(a),ai:new Nc(a)}}
function ij(a,b,c,d,e){a=sh(rh(new qh(1828,"0"),a),new bj);b.length&&th(a,Rf(new Qf,b));e!==void 0&&(a.Ua=e);d&&(a.j=!0);var f=new vh(1828,"","",!1,"",uh(a));Bc(f,a);var g=new Ji({flush:function(h){try{f.flush(h)}catch(k){c(k)}}});
g.addOnDisposeCallback(function(){setTimeout(function(){try{g.Zb()}finally{f.dispose()}})});
g.o=1E5;g.flushInterval=3E4;g.h.setInterval(3E4);return g}
function jj(a,b){F.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(jj,F);function kj(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-dj());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=dj(),a.timer=void 0}},b)}}
function lj(a,b,c){ej.call(this);this.metrics=a;this.Da=b;this.pb=c}
w(lj,ej);lj.prototype.Qc=function(a){this.metrics.sf.record(a,this.Da)};
lj.prototype.Cb=function(a){this.metrics.eventCount.h(a,this.Da)};
lj.prototype.Tb=function(a,b){this.metrics.re.record(b,a,this.pb,this.Da)};
lj.prototype.Ha=function(a){this.metrics.errorCount.h(a,this.pb,this.Da)};
function mj(a,b){b=b===void 0?[]:b;var c={Da:a.Da||"_",pb:a.pb||"",lc:a.lc||[],uc:a.uc|0,Ua:a.Ua,vc:a.vc||function(){},
Jc:!!a.Jc,Ib:a.Ib||function(e,f){return ij(e,f,c.vc,c.Jc,c.Ua)}};
b=c.Ib("42",c.lc.concat(b));lj.call(this,hj(b),c.Da,c.pb);var d=this;this.options=c;this.service=b;this.i=!a.Ib;this.h=new jj(function(){return void d.service.Zb()},c.uc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(mj,lj);mj.prototype.Pd=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Ib("42",this.options.lc.concat(a));this.h=new jj(function(){return void b.service.Zb()},this.options.uc);
this.metrics=hj(this.service)};
mj.prototype.Bc=function(){kj(this.h)};
function dj(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function nj(a){this.F=J(a)}
w(nj,M);function oj(a){this.F=J(a)}
w(oj,M);function pj(a){this.F=J(a,0,"bfkj")}
w(pj,M);var qj=function(a){return $d(function(b){return b instanceof a&&!(I(b.F)&2)})}(pj);function rj(a){this.F=J(a)}
w(rj,M);function vc(a){this.F=J(a)}
w(vc,M);function sj(a){this.F=J(a)}
w(sj,M);var tj=Pf(sj);function uj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function vj(a,b,c){if(a.disable)return new gj;var d=b&&yc(qf(b,rj,7))?tc(b):[];if(c)return c.Pd(d),c.share();a={Da:a.Da,pb:a.pb,lc:a.Ah,uc:a.Kh,Jc:yc(b==null?void 0:qf(b,rj,10)),Ua:a.Ua,vc:a.vc,Ib:a.Ib};d=d===void 0?[]:d;return new mj(a,d)}
function wj(a){function b(u,x,z,H){Promise.resolve().then(function(){k.done();h.Bc();h.dispose();g.resolve({be:u,rf:x,Se:z,wh:H})})}
function c(u,x,z,H){if(!d.logger.ea){var K="k";x?K="h":z&&(K="u");K!=="k"?H!==0&&(d.logger.Cb(K),d.logger.Tb(K,u)):d.i<=0?(d.logger.Cb(K),d.logger.Tb(K,u),d.i=Math.floor(Math.random()*200)):d.i--}}
F.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new sj;if("challenge"in a&&qj(a.challenge)){var e=vf(a.challenge,4);var f=vf(a.challenge,5);vf(a.challenge,7)&&(this.h=tj(vf(a.challenge,7)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var u,x,z;return A(function(H){if(H.h==1)return H.yield(d.j,2);u=H.i;x=u.rf;(z=x)==null||z();H.h=0})});
this.logger=vj(a.Bd||{},this.h,a.xh);Bc(this,this.logger);var g=new uj;this.j=g.promise;this.logger.Cb("t");var h=this.logger.share(),k=new cj(h,"t");if(!C[f])throw this.logger.Ha(25),Error("EGOU");if(!C[f].a)throw this.logger.Ha(26),Error("ELIU");try{var l=C[f].a;f=[];var m=[];if(yc(qf(this.h,rj,7))){for(var n=tc(this.h),p=0;p<n.length;p++)f.push(n[p]),m.push(1);var t=xc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2)}this.u=y(l(e,b,!0,a.Yh,c,[f,m],vf(this.h,5))).next().value;this.cd=g.promise.then(function(){})}catch(u){throw this.logger.Ha(28),
u;
}}
w(wj,F);wj.prototype.snapshot=function(a){if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.be;return new Promise(function(e){var f=new cj(b,"n");d(function(g){f.done();b.Qc(g.length);b.Bc();b.dispose();e(g)},[a.wb,
a.ed,a.Bf,a.gd])})})};
wj.prototype.hd=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var c=fj(this.logger,function(){return b.u([a.wb,a.ed,a.Bf,a.gd])});
this.logger.Qc(c.length);this.logger.Bc();return c};
wj.prototype.o=function(a){this.j.then(function(b){var c;(c=b.Se)==null||c(a)})};function xj(){var a=yj();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:sc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new zj(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new zj(f))}))})}
function zj(a){F.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.cd=this.vm.p;this.j=this.o.bind(this);this.addOnDisposeCallback(function(){return void Aj(b)})}
w(zj,F);zj.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.wb&&{c:a.wb},a.ed&&{s:a.ed},a.gd!==void 0&&{p:a.gd}))};
zj.prototype.o=function(a){this.vm.e(a)};
function Aj(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
;function Bj(a){if(!a)return null;a=uf(a,4);return a===null||a===void 0?null:ob(a)}
;function Cj(){this.promises={};this.h=null}
function Dj(){Cj.h||(Cj.h=new Cj);return Cj.h}
function Ej(a,b){return Fj(a,qf(b,nj,1),qf(b,oj,2),vf(b,3))}
function Fj(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return Gj(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){Gj(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function Gj(a,b){return b?Hj(b):a?Ij(a):Promise.resolve()}
function Hj(a){return new Promise(function(b,c){var d=Dg("SCRIPT"),e=Bj(a);Kb(d,e);d.onload=function(){Eg(d);b()};
d.onerror=function(){Eg(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function Ij(a){return new Promise(function(b){var c=Dg("SCRIPT");if(a){var d=uf(a,6);d=d===null||d===void 0?null:Hb(d)}else d=null;c.textContent=Ib(d);Jb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Eg(c);b()})}
;var Jj=window;function Kj(a){var b=Lj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Mj(){var a=[];Kj(function(b){a.push(b)});
return a}
var Lj={Cf:"allow-forms",Df:"allow-modals",Ef:"allow-orientation-lock",Ff:"allow-pointer-lock",Gf:"allow-popups",Hf:"allow-popups-to-escape-sandbox",If:"allow-presentation",Jf:"allow-same-origin",Kf:"allow-scripts",Lf:"allow-top-navigation",Mf:"allow-top-navigation-by-user-activation"},Nj=pi(function(){return Mj()});
function Oj(){var a=Pj(),b={};Sb(Nj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Pj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Qj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Rj=(new Date).getTime();function Sj(a){$h.call(this);var b=this;this.D=this.j=0;this.Ca=a!=null?a:{ma:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(Tj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.D||Uj(this)}
w(Sj,$h);function Vj(){var a=Wj;Sj.h||(Sj.h=new Sj(a));return Sj.h}
Sj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.D);delete Sj.h};
Sj.prototype.ta=function(){return this.h};
function Uj(a){a.D=a.Ca.ma(function(){var b;return A(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(Tj(a),3):c.yield(Tj(a),3);Uj(a);c.h=0})},3E4)}
function Tj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Ca.ma(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.M=0;h.o=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?ai(a,"networkstatus-online"):ai(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.A(3)}})})}
;function Xj(){this.data=[];this.h=-1}
Xj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Xj.prototype.get=function(a){return!!this.data[a]};
function Yj(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function Zj(){this.blockSize=-1}
;function ak(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.M=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
cb(ak,Zj);ak.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function bk(a,b,c){c||(c=0);var d=a.M;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
ak.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)bk(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){bk(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){bk(this,e);f=0;break}}this.i=f;this.o+=b}};
ak.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;bk(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function ck(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function dk(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function ek(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:ck(a).match(/\S+/g)||[],b=Rb(a,b)>=0);return b}
function fk(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):ek(a,"inverted-hdpi")&&dk(a,Array.prototype.filter.call(a.classList?a.classList:ck(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function gk(){}
gk.prototype.next=function(){return hk};
var hk={done:!0,value:void 0};gk.prototype.tb=function(){return this};function ik(a){if(a instanceof jk||a instanceof kk||a instanceof lk)return a;if(typeof a.next=="function")return new jk(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new jk(function(){return a[Symbol.iterator]()});
if(typeof a.tb=="function")return new jk(function(){return a.tb()});
throw Error("Not an iterator or iterable.");}
function jk(a){this.h=a}
jk.prototype.tb=function(){return new kk(this.h())};
jk.prototype[Symbol.iterator]=function(){return new lk(this.h())};
jk.prototype.i=function(){return new lk(this.h())};
function kk(a){this.h=a}
w(kk,gk);kk.prototype.next=function(){return this.h.next()};
kk.prototype[Symbol.iterator]=function(){return new lk(this.h)};
kk.prototype.i=function(){return new lk(this.h)};
function lk(a){jk.call(this,function(){return a});
this.j=a}
w(lk,jk);lk.prototype.next=function(){return this.j.next()};function N(a){F.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.D=!!a}
cb(N,F);r=N.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.cc(a)}return!1};
r.cc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Xb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.rb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.D)for(f=0;f<c.length;f++)e=c[f],mk(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.cc(c)}}return f!=0}return!1};
function mk(a,b,c){li(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.cc,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.ba=function(){N.Aa.ba.call(this);this.clear();this.j.length=0};function nk(a){this.h=a}
nk.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Ni).serialize(b))};
nk.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
nk.prototype.remove=function(a){this.h.remove(a)};function ok(a){this.h=a}
cb(ok,nk);function pk(a){this.data=a}
function qk(a){return a===void 0||a instanceof pk?a:new pk(a)}
ok.prototype.set=function(a,b){ok.Aa.set.call(this,a,qk(b))};
ok.prototype.i=function(a){a=ok.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
ok.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function rk(a){this.h=a}
cb(rk,ok);rk.prototype.set=function(a,b,c){if(b=qk(b)){if(c){if(c<ab()){rk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=ab()}rk.Aa.set.call(this,a,b)};
rk.prototype.i=function(a){var b=rk.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<ab()||c&&c>ab())rk.prototype.remove.call(this,a);else return b}};function sk(){}
;function tk(){}
cb(tk,sk);tk.prototype[Symbol.iterator]=function(){return ik(this.tb(!0)).i()};
tk.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function uk(a){this.h=a;this.i=null}
cb(uk,tk);r=uk.prototype;r.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
r.set=function(a,b){vk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){vk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){vk(this);this.h.removeItem(a)};
r.tb=function(a){vk(this);var b=0,c=this.h,d=new gk;d.next=function(){if(b>=c.length)return hk;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){vk(this);this.h.clear()};
r.key=function(a){vk(this);return this.h.key(a)};
function vk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Oc(Error("Storage mechanism: Storage unavailable"))}
;function wk(){var a=null;try{a=C.localStorage||null}catch(b){}uk.call(this,a)}
cb(wk,uk);function xk(a,b){this.i=a;this.h=b+"::"}
cb(xk,tk);xk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
xk.prototype.get=function(a){return this.i.get(this.h+a)};
xk.prototype.remove=function(a){this.i.remove(this.h+a)};
xk.prototype.tb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new gk;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},yk=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.dd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var zk={ub:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ud:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Ak={ub:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ud:function(a){return[].concat.apply([],a)}};
O.qf=function(){yk?(O.qb=Uint8Array,O.Ja=Uint16Array,O.Wd=Int32Array,O.assign(O,zk)):(O.qb=Array,O.Ja=Array,O.Wd=Array,O.assign(O,Ak))};
O.qf();var Bk=!0;try{new Uint8Array(1)}catch(a){Bk=!1}
function Ck(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new O.qb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Dk={};Dk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Ek={},Fk,Gk=[],Hk=0;Hk<256;Hk++){Fk=Hk;for(var Ik=0;Ik<8;Ik++)Fk=Fk&1?3988292384^Fk>>>1:Fk>>>1;Gk[Hk]=Fk}Ek=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Gk[(a^b[d])&255];return a^-1};var Jk={};Jk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Kk(a){for(var b=a.length;--b>=0;)a[b]=0}
var Lk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Mk=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Nk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Ok=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Pk=Array(576);Kk(Pk);var Qk=Array(60);Kk(Qk);var Rk=Array(512);Kk(Rk);var Sk=Array(256);Kk(Sk);var Tk=Array(29);Kk(Tk);var Uk=Array(30);Kk(Uk);function Vk(a,b,c,d,e){this.Md=a;this.we=b;this.ue=c;this.oe=d;this.Me=e;this.xd=a&&a.length}
var Wk,Xk,Yk;function Zk(a,b){this.td=a;this.Eb=0;this.bb=b}
function $k(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function al(a,b,c){a.ia>16-c?(a.oa|=b<<a.ia&65535,$k(a,a.oa),a.oa=b>>16-a.ia,a.ia+=c-16):(a.oa|=b<<a.ia&65535,a.ia+=c)}
function bl(a,b,c){al(a,c[b*2],c[b*2+1])}
function cl(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function dl(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=cl(d[e]++,e))}
function el(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.fb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Oa=a.Hb=0;a.ya=a.matches=0}
function fl(a){a.ia>8?$k(a,a.oa):a.ia>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ia=0}
function gl(a,b,c){fl(a);$k(a,c);$k(a,~c);O.ub(a.aa,a.window,b,c,a.pending);a.pending+=c}
function hl(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function il(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Na;){e<a.Na&&hl(b,a.da[e+1],a.da[e],a.depth)&&e++;if(hl(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function jl(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Ob+d*2]<<8|a.aa[a.Ob+d*2+1];var f=a.aa[a.Pc+d];d++;if(e===0)bl(a,f,b);else{var g=Sk[f];bl(a,g+256+1,b);var h=Lk[g];h!==0&&(f-=Tk[g],al(a,f,h));e--;g=e<256?Rk[e]:Rk[256+(e>>>7)];bl(a,g,c);h=Mk[g];h!==0&&(e-=Uk[g],al(a,e,h))}}while(d<a.ya)}bl(a,256,b)}
function kl(a,b){var c=b.td,d=b.bb.Md,e=b.bb.xd,f=b.bb.oe,g,h=-1;a.Na=0;a.zb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.da[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Oa--;e&&(a.Hb-=d[k*2+1])}b.Eb=h;for(g=a.Na>>1;g>=1;g--)il(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Na--],il(a,c,1),d=a.da[1],a.da[--a.zb]=g,a.da[--a.zb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,il(a,c,1);while(a.Na>=
2);a.da[--a.zb]=a.da[1];g=b.td;k=b.Eb;d=b.bb.Md;e=b.bb.xd;f=b.bb.we;var l=b.bb.ue,m=b.bb.Me,n,p=0;for(n=0;n<=15;n++)a.Ka[n]=0;g[a.da[a.zb]*2+1]=0;for(b=a.zb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ka[n]++;var u=0;t>=l&&(u=f[t-l]);var x=g[t*2];a.Oa+=x*(n+u);e&&(a.Hb+=x*(d[t*2+1]+u))}}if(p!==0){do{for(n=m-1;a.Ka[n]===0;)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ka[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Oa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}dl(c,h,a.Ka)}
function ll(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function ml(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do bl(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(bl(a,l,a.ja),g--),bl(a,16,a.ja),al(a,g-3,2)):g<=10?(bl(a,17,a.ja),al(a,g-3,3)):(bl(a,18,a.ja),al(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function nl(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var ol=!1;function pl(a,b,c){a.aa[a.Ob+a.ya*2]=b>>>8&255;a.aa[a.Ob+a.ya*2+1]=b&255;a.aa[a.Pc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(Sk[c]+256+1)*2]++,a.fb[(b<256?Rk[b]:Rk[256+(b>>>7)])*2]++);return a.ya===a.Sb-1}
;function ql(a,b){a.msg=Jk[b];return b}
function rl(a){for(var b=a.length;--b>=0;)a[b]=0}
function sl(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(O.ub(a.output,b.aa,b.Vb,c,a.Fb),a.Fb+=c,b.Vb+=c,a.jd+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Vb=0))}
function tl(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.K.Ic===2&&(a.K.Ic=nl(a));kl(a,a.sc);kl(a,a.jc);ll(a,a.ra,a.sc.Eb);ll(a,a.fb,a.jc.Eb);kl(a,a.pd);for(e=18;e>=3&&a.ja[Ok[e]*2+1]===0;e--);a.Oa+=3*(e+1)+5+5+4;var f=a.Oa+3+7>>>3;var g=a.Hb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)al(a,b?1:0,3),gl(a,c,d);else if(a.strategy===4||g===f)al(a,2+(b?1:0),3),jl(a,Pk,Qk);else{al(a,4+(b?1:0),3);c=a.sc.Eb+1;d=a.jc.Eb+1;e+=1;al(a,c-257,5);al(a,d-1,5);al(a,e-4,4);for(f=0;f<e;f++)al(a,
a.ja[Ok[f]*2+1],3);ml(a,a.ra,c-1);ml(a,a.fb,d-1);jl(a,a.ra,a.fb)}el(a);b&&fl(a);a.va=a.v;sl(a.K)}
function P(a,b){a.aa[a.pending++]=b}
function ul(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function vl(a,b){var c=a.Ad,d=a.v,e=a.wa,f=a.Cd,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.cb,l=a.Ia,m=a.v+258,n=h[d+e-1],p=h[d+e];a.wa>=a.wd&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Db=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function wl(a){var b=a.la,c;do{var d=a.Ud-a.B-a.v;if(a.v>=b+(b-262)){O.ub(a.window,a.window,b,b,0);a.Db-=b;a.v-=b;a.va-=b;var e=c=a.qc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.na===0)break;e=a.K;c=a.window;f=a.v+a.B;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,O.ub(c,e.input,e.mb,g,f),e.state.wrap===1?e.I=Dk(e.I,c,g,f):e.state.wrap===2&&(e.I=Ek(e.I,c,g,f)),e.mb+=g,e.ob+=g,c=g);a.B+=c;if(a.B+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.R=(a.R<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.cb]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.B+a.sa<3););}while(a.B<262&&a.K.na!==0)}
function xl(a,b){for(var c;;){if(a.B<262){wl(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=vl(a,c));if(a.T>=3)if(c=pl(a,a.v-a.Db,a.T-3),a.B-=a.T,a.T<=a.Rc&&a.B>=3){a.T--;do a.v++,a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ma^a.window[a.v+1])&a.La;else c=pl(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(tl(a,!1),a.K.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(tl(a,!0),a.K.S===0?3:4):a.ya&&(tl(a,!1),a.K.S===0)?1:2}
function yl(a,b){for(var c,d;;){if(a.B<262){wl(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.Fd=a.Db;a.T=2;c!==0&&a.wa<a.Rc&&a.v-c<=a.la-262&&(a.T=vl(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.Db>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.B-3;c=pl(a,a.v-1-a.Fd,a.wa-3);a.B-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.kb=0;a.T=2;a.v++;if(c&&(tl(a,!1),a.K.S===0))return 1}else if(a.kb){if((c=pl(a,0,a.window[a.v-1]))&&tl(a,!1),a.v++,a.B--,a.K.S===0)return 1}else a.kb=1,a.v++,a.B--}a.kb&&(pl(a,0,a.window[a.v-1]),a.kb=0);a.sa=a.v<2?a.v:2;return b===4?(tl(a,!0),a.K.S===0?3:4):a.ya&&(tl(a,!1),a.K.S===0)?1:2}
function zl(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){wl(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=pl(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=pl(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(tl(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(tl(a,!0),a.K.S===0?3:4):
a.ya&&(tl(a,!1),a.K.S===0)?1:2}
function Al(a,b){for(var c;;){if(a.B===0&&(wl(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=pl(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(tl(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(tl(a,!0),a.K.S===0?3:4):a.ya&&(tl(a,!1),a.K.S===0)?1:2}
function Bl(a,b,c,d,e){this.Ae=a;this.Le=b;this.Ne=c;this.Ke=d;this.xe=e}
var Cl;Cl=[new Bl(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.B<=1){wl(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,tl(a,!1),a.K.S===0)return 1;if(a.v-a.va>=a.la-262&&(tl(a,!1),a.K.S===0))return 1}a.sa=0;if(b===4)return tl(a,!0),a.K.S===0?3:4;a.v>a.va&&tl(a,!1);return 1}),
new Bl(4,4,8,4,xl),new Bl(4,5,16,8,xl),new Bl(4,6,32,32,xl),new Bl(4,4,16,16,yl),new Bl(8,16,32,32,yl),new Bl(8,16,128,128,yl),new Bl(8,32,128,256,yl),new Bl(32,128,258,1024,yl),new Bl(32,258,258,4096,yl)];
function Dl(){this.K=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Vb=this.za=0;this.H=null;this.Ba=0;this.method=8;this.Bb=-1;this.cb=this.ld=this.la=0;this.window=null;this.Ud=0;this.head=this.Ia=null;this.Cd=this.wd=this.strategy=this.level=this.Rc=this.Ad=this.wa=this.B=this.Db=this.v=this.kb=this.Fd=this.T=this.va=this.Ma=this.La=this.Nc=this.qc=this.R=0;this.ra=new O.Ja(1146);this.fb=new O.Ja(122);this.ja=new O.Ja(78);rl(this.ra);rl(this.fb);rl(this.ja);this.pd=this.jc=this.sc=
null;this.Ka=new O.Ja(16);this.da=new O.Ja(573);rl(this.da);this.zb=this.Na=0;this.depth=new O.Ja(573);rl(this.depth);this.ia=this.oa=this.sa=this.matches=this.Hb=this.Oa=this.Ob=this.ya=this.Sb=this.Pc=0}
function El(a,b){if(!a||!a.state||b>5||b<0)return a?ql(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return ql(a,a.S===0?-5:-2);c.K=a;var d=c.Bb;c.Bb=b;if(c.status===42)if(c.wrap===2)a.I=0,P(c,31),P(c,139),P(c,8),c.H?(P(c,(c.H.text?1:0)+(c.H.Va?2:0)+(c.H.extra?4:0)+(c.H.name?8:0)+(c.H.comment?16:0)),P(c,c.H.time&255),P(c,c.H.time>>8&255),P(c,c.H.time>>16&255),P(c,c.H.time>>24&255),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,c.H.os&255),c.H.extra&&c.H.extra.length&&
(P(c,c.H.extra.length&255),P(c,c.H.extra.length>>8&255)),c.H.Va&&(a.I=Ek(a.I,c.aa,c.pending,0)),c.Ba=0,c.status=69):(P(c,0),P(c,0),P(c,0),P(c,0),P(c,0),P(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),P(c,3),c.status=113);else{var e=8+(c.ld-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;ul(c,e+(31-e%31));c.v!==0&&(ul(c,a.I>>>16),ul(c,a.I&65535));a.I=1}if(c.status===69)if(c.H.extra){for(e=c.pending;c.Ba<(c.H.extra.length&65535)&&(c.pending!==c.za||
(c.H.Va&&c.pending>e&&(a.I=Ek(a.I,c.aa,c.pending-e,e)),sl(a),e=c.pending,c.pending!==c.za));)P(c,c.H.extra[c.Ba]&255),c.Ba++;c.H.Va&&c.pending>e&&(a.I=Ek(a.I,c.aa,c.pending-e,e));c.Ba===c.H.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.H.name){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=Ek(a.I,c.aa,c.pending-e,e)),sl(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.H.name.length?c.H.name.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.H.Va&&c.pending>
e&&(a.I=Ek(a.I,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.H.comment){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=Ek(a.I,c.aa,c.pending-e,e)),sl(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.H.comment.length?c.H.comment.charCodeAt(c.Ba++)&255:0;P(c,f)}while(f!==0);c.H.Va&&c.pending>e&&(a.I=Ek(a.I,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.H.Va?(c.pending+2>c.za&&sl(a),c.pending+2<=c.za&&(P(c,
a.I&255),P(c,a.I>>8&255),a.I=0,c.status=113)):c.status=113);if(c.pending!==0){if(sl(a),a.S===0)return c.Bb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return ql(a,-5);if(c.status===666&&a.na!==0)return ql(a,-5);if(a.na!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?Al(c,b):c.strategy===3?zl(c,b):Cl[c.level].xe(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Bb=-1),0;if(d===2&&(b===1?(al(c,2,3),bl(c,256,Pk),c.ia===16?($k(c,c.oa),c.oa=0,c.ia=0):c.ia>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ia-=8)):b!==5&&(al(c,0,3),gl(c,0,0),b===3&&(rl(c.head),c.B===0&&(c.v=0,c.va=0,c.sa=0))),sl(a),a.S===0))return c.Bb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(P(c,a.I&255),P(c,a.I>>8&255),P(c,a.I>>16&255),P(c,a.I>>24&255),P(c,a.ob&255),P(c,a.ob>>8&255),P(c,a.ob>>16&255),P(c,a.ob>>24&255)):(ul(c,a.I>>>16),ul(c,a.I&65535));sl(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var Fl={};Fl=function(){this.input=null;this.ob=this.na=this.mb=0;this.output=null;this.jd=this.S=this.Fb=0;this.msg="";this.state=null;this.Ic=2;this.I=0};var Gl=Object.prototype.toString;
function Hl(a){if(!(this instanceof Hl))return new Hl(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new Fl;this.K.S=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=ql(b,-2);else{e===8&&(e=9);var k=new Dl;b.state=k;k.K=b;k.wrap=h;k.H=null;k.ld=e;k.la=1<<k.ld;k.cb=k.la-1;k.Nc=f+7;k.qc=1<<k.Nc;k.La=k.qc-1;k.Ma=~~((k.Nc+3-1)/3);k.window=new O.qb(k.la*2);k.head=new O.Ja(k.qc);k.Ia=new O.Ja(k.la);k.Sb=1<<f+6;k.za=k.Sb*4;k.aa=new O.qb(k.za);k.Ob=1*k.Sb;k.Pc=3*k.Sb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ob=b.jd=0;b.Ic=2;c=b.state;c.pending=0;c.Vb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.I=c.wrap===2?
0:1;c.Bb=0;if(!ol){d=Array(16);for(f=g=0;f<28;f++)for(Tk[f]=g,e=0;e<1<<Lk[f];e++)Sk[g++]=f;Sk[g-1]=f;for(f=g=0;f<16;f++)for(Uk[f]=g,e=0;e<1<<Mk[f];e++)Rk[g++]=f;for(g>>=7;f<30;f++)for(Uk[f]=g<<7,e=0;e<1<<Mk[f]-7;e++)Rk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Pk[e*2+1]=8,e++,d[8]++;for(;e<=255;)Pk[e*2+1]=9,e++,d[9]++;for(;e<=279;)Pk[e*2+1]=7,e++,d[7]++;for(;e<=287;)Pk[e*2+1]=8,e++,d[8]++;dl(Pk,287,d);for(e=0;e<30;e++)Qk[e*2+1]=5,Qk[e*2]=cl(e,5);Wk=new Vk(Pk,Lk,257,286,15);Xk=new Vk(Qk,
Mk,0,30,15);Yk=new Vk([],Nk,0,19,7);ol=!0}c.sc=new Zk(c.ra,Wk);c.jc=new Zk(c.fb,Xk);c.pd=new Zk(c.ja,Yk);c.oa=0;c.ia=0;el(c);c=0}else c=ql(b,-2);c===0&&(b=b.state,b.Ud=2*b.la,rl(b.head),b.Rc=Cl[b.level].Le,b.wd=Cl[b.level].Ae,b.Cd=Cl[b.level].Ne,b.Ad=Cl[b.level].Ke,b.v=0,b.va=0,b.B=0,b.sa=0,b.T=b.wa=2,b.kb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(Jk[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.H=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=Ck(a.dictionary):
Gl.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.I=Dk(a.I,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(rl(l.head),l.v=0,l.va=0,l.sa=0),c=new O.qb(l.la),O.ub(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.na;d=a.mb;e=a.input;a.na=g;a.mb=0;a.input=f;for(wl(l);l.B>=3;){f=l.v;g=l.B-2;do l.R=(l.R<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.cb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.B=2;wl(l)}l.v+=l.B;l.va=l.v;l.sa=l.B;l.B=0;l.T=l.wa=2;l.kb=0;a.mb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Jk[b]);this.rh=!0}}
Hl.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Ck(a):Gl.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.mb=0;c.na=c.input.length;do{c.S===0&&(c.output=new O.qb(d),c.Fb=0,c.S=d);a=El(c,e);if(a!==1&&a!==0)return Il(this,a),this.ended=!0,!1;if(c.S===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=O.dd(c.output,c.Fb);b=f;f=f.length;if(f<65537&&(b.subarray&&Bk||!b.subarray))b=
String.fromCharCode.apply(null,O.dd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.dd(c.output,c.Fb),this.chunks.push(b)}while((c.na>0||c.S===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=ql(c,-2):(c.state=null,a=d===113?ql(c,-3):0)):a=-2,Il(this,a),this.ended=!0,a===0;e===2&&(Il(this,0),c.S=0);return!0};
function Il(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):O.ud(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function Jl(a,b){b=b||{};b.gzip=!0;b=new Hl(b);b.push(a,!0);if(b.err)throw b.msg||Jk[b.err];return b.result}
;function Kl(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Hb(a):null:null}
function Ll(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?ob(a):null:null}
;function Ml(a){return ob(a===null?"null":a===void 0?"undefined":a)}
;function Nl(a){this.name=a}
;var Ol=new Nl("rawColdConfigGroup");var Pl=new Nl("rawHotConfigGroup");function Ql(a){this.F=J(a)}
w(Ql,M);function Rl(a){this.F=J(a)}
w(Rl,M);Rl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new yd(a,xd):Ad||(Ad=new yd(null,xd));else if(a.constructor!==yd)if(wd(a))a=a.length?new yd(new Uint8Array(a),xd):Ad||(Ad=new yd(null,xd));else throw Error();return L(this,1,a)};var Sl=new Nl("continuationCommand");var Tl=new Nl("webCommandMetadata");var Ul=new Nl("signalServiceEndpoint");var Vl={Sf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Pf:"EMBEDDED_PLAYER_MODE_DEFAULT",Rf:"EMBEDDED_PLAYER_MODE_PFP",Qf:"EMBEDDED_PLAYER_MODE_PFL"};var Wl=new Nl("feedbackEndpoint");var ee={Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Vf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED"};var Xl=new Nl("shareEndpoint"),Yl=new Nl("shareEntityEndpoint"),Zl=new Nl("shareEntityServiceEndpoint"),$l=new Nl("webPlayerShareEntityServiceEndpoint");var am=new Nl("playlistEditEndpoint");var bm=new Nl("modifyChannelNotificationPreferenceEndpoint");var cm=new Nl("unsubscribeEndpoint");var dm=new Nl("subscribeEndpoint");function em(){var a=fm;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function gm(a){D("yt.ads.biscotti.lastId_",a)}
;function hm(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var im=C.window,jm,km,lm=(im==null?void 0:(jm=im.yt)==null?void 0:jm.config_)||(im==null?void 0:(km=im.ytcfg)==null?void 0:km.data_)||{};D("yt.config_",lm);function mm(){hm(lm,arguments)}
function R(a,b){return a in lm?lm[a]:b}
function nm(a){var b=lm.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var om=[];function pm(a){om.forEach(function(b){return b(a)})}
function qm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){rm(b)}}:a}
function rm(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),mm("ERRORS",b));pm(a)}
function sm(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),mm("ERRORS",f))}
;var tm=/^[\w.]*$/,um={q:!0,search_query:!0};function wm(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=xm(f[0]||""),h=xm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Yb(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(wm);l.args=[{key:m,value:f[1],query:a,method:ym===n?"unchanged":n}];um.hasOwnProperty(m)||sm(l)}}return c}
var ym=String(wm);function zm(a){var b=[];pg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Sb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Am(a){a.charAt(0)==="?"&&(a=a.substring(1));return wm(a,"&")}
function Bm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),Am(a.length>1?a[1]:a[0])):{}}
function Cm(a,b){return Dm(a,b||{},!0)}
function Dm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Am(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return nc(a,e)+d}
function Em(a){if(!b)var b=window.location.href;var c=hc(1,a),d=ic(a);c&&d?(a=a.match(ec),b=b.match(ec),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ic(b)===d&&(Number(hc(4,b))||null)===(Number(hc(4,a))||null):!0;return a}
function xm(a){return a&&a.match(tm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Fm(a){var b=Gm;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Rj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Pa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Jj:g;try{var h=g.history.length}catch(Pa){h=0}e.u_his=h;var k;e.u_h=(k=Jj.screen)==null?void 0:k.height;var l;e.u_w=(l=Jj.screen)==null?void 0:l.width;var m;e.u_ah=(m=Jj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=Jj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=Jj.screen)==null?void 0:p.colorDepth}catch(Pa){}h=b.h;try{var t=h.screenX;var u=h.screenY}catch(Pa){}try{var x=h.outerWidth;var z=h.outerHeight}catch(Pa){}try{var H=h.innerWidth;var K=h.innerHeight}catch(Pa){}try{var da=h.screenLeft;var ea=h.screenTop}catch(Pa){}try{H=h.innerWidth,K=h.innerHeight}catch(Pa){}try{var Oa=h.screen.availWidth;var Mb=h.screen.availTop}catch(Pa){}t=[da,ea,t,u,Oa,Mb,x,z,H,K];try{var ka=(b.h.top||window).document,Ya=
ka.compatMode=="CSS1Compat"?ka.documentElement:ka.body;var Qa=(new og(Ya.clientWidth,Ya.clientHeight)).round()}catch(Pa){Qa=new og(-12245933,-12245933)}ka=Qa;Qa={};var Ra=Ra===void 0?C:Ra;Ya=new Xj;"SVGElement"in Ra&&"createElementNS"in Ra.document&&Ya.set(0);u=Oj();u["allow-top-navigation-by-user-activation"]&&Ya.set(1);u["allow-popups-to-escape-sandbox"]&&Ya.set(2);Ra.crypto&&Ra.crypto.subtle&&Ya.set(3);"TextDecoder"in Ra&&"TextEncoder"in Ra&&Ya.set(4);Ra=Yj(Ya);Qa.bc=Ra;Qa.bih=ka.height;Qa.biw=
ka.width;Qa.brdim=t.join();b=b.i;b=(Qa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Qa.wgl=!!Jj.WebGLRenderingContext,Qa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Gm=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return zm(Fm(a))});ab();navigator.userAgent.indexOf(" (CrKey ");var Hm="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Im(){if(!Hm)return null;var a=Hm();return"open"in a?a:null}
function Jm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Km(a,b){typeof a==="function"&&(a=qm(a));return window.setTimeout(a,b)}
;var Lm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ra(Lm),["client_dev_set_cookie"]);function S(a){a=Mm(a);return typeof a==="string"&&a==="false"?!1:!!a}
function Nm(a,b){a=Mm(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Mm(a){return R("EXPERIMENT_FLAGS",{})[a]}
function Om(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Pm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Qm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ra(Lm)),Rm=!1;function Sm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&qm(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=Im();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;S("debug_forward_web_query_parameters")&&(a=Tm(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Um(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){sm(n)}}l.send(d);return l}
function Um(a,b){b=b===void 0?{}:b;var c=Em(a),d=R("INNERTUBE_CLIENT_NAME"),e=S("web_ajax_ignore_global_headers_if_set"),f;for(f in Pm){var g=R(Pm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=R("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(ic(a)?!1:!0))){k=a;var l;if(l=S("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=ic(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=fc(hc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!ic(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ic(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ic(a)||(b["X-YouTube-Ad-Signals"]=zm(Fm()));return b}
function Vm(a,b){b.method="POST";b.postParams||(b.postParams={});return Wm(a,b)}
function Wm(a,b){var c=b.format||"JSON";a=Xm(a,b);var d=Ym(a,b),e=!1,f=Zm(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Jm(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=$m(a,c,k,b.convertToSafeHtml);l&&(l=an(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Km(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Xm(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Cm(a,b);return a}
function Ym(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ic(a)&&!b.withCredentials&&ic(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(S("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Am(e),zg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):mc(e));f=e||f&&!sg(f);!Rm&&f&&b.method!=="POST"&&(Rm=!0,rm(Error("AJAX request with postData should use POST")));return e}
function $m(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,sm(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?bn(a):null)e={},Sb(a.getElementsByTagName("*"),function(g){e[g.tagName]=cn(g)})}d&&dn(e);
return e}
function dn(a){if(Sa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=mb();d=new Eb(e?e.createHTML(d):d);a[c]=d}else dn(a[b])}}
function an(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function bn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function cn(a){var b="";Sb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Tm(a){var b=window.location.search,c=ic(a);S("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Em(a)&&(c=document.location.hostname);var d=fc(hc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Am(b),f={};Sb(Qm,function(g){e[g]&&(f[g]=e[g])});
return Dm(a,f||{},!1)}
var Zm=Sm;var en=[{Sc:function(a){return"Cannot read property '"+a.key+"'"},
wc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Sc:function(a){return"Cannot call '"+a.key+"'"},
wc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Sc:function(a){return a.key+" is not defined"},
wc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var gn={Ya:[],Ta:[{callback:fn,weight:500}]};function fn(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function hn(){this.Ta=[];this.Ya=[]}
var jn;function kn(){if(!jn){var a=jn=new hn;a.Ya.length=0;a.Ta.length=0;gn.Ya&&a.Ya.push.apply(a.Ya,gn.Ya);gn.Ta&&a.Ta.push.apply(a.Ta,gn.Ta)}return jn}
;var ln=new N;function mn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=nn(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=nn(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=nn(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function nn(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function on(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=pn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=mn(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?pn(f+".ve",g,h,k):0;d+=f;d+=pn(e,a[e],b,c);if(d>500)break}}else c[b]=qn(a),d+=c[b].length;else c[b]=qn(a),d+=c[b].length;return d}
function pn(a,b,c,d){c+="."+a;a=qn(b);d[c]=a;return c.length+a.length}
function qn(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function rn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function sn(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function tn(){this.Nd=!0}
function un(){tn.h||(tn.h=new tn);return tn.h}
function vn(a,b){a={};var c=[];"USER_SESSION_ID"in lm&&c.push({key:"u",value:R("USER_SESSION_ID")});if(c=hg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),S("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in lm||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in lm&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID"));return a}
;var wn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function xn(a,b,c,d,e){eg.set(""+a,b,{Ub:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function yn(a){return eg.get(""+a,void 0)}
function zn(a,b,c){eg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function An(){if(S("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!eg.isEnabled())return!1;if(eg.h.cookie)return!0;S("embeds_web_enable_cookie_detection_fix")?eg.set("TESTCOOKIESENABLED","1",{Ub:60,cf:"none",secure:!0}):eg.set("TESTCOOKIESENABLED","1",{Ub:60});if(eg.get("TESTCOOKIESENABLED")!=="1")return!1;eg.remove("TESTCOOKIESENABLED");return!0}
;var Bn=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Bn);function Cn(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=yn(this.h);a&&this.parse(a)}
var Dn;function En(){Dn||(Dn=new Cn);return Dn}
r=Cn.prototype;r.get=function(a,b){Fn(a);Gn(a);a=Bn[a]!==void 0?Bn[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){Fn(a);Gn(a);if(b==null)throw Error("ExpectedNotNull");Bn[a]=b.toString()};
function Hn(a){return!!((In("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){Fn(a);Gn(a);delete Bn[a]};
r.clear=function(){for(var a in Bn)delete Bn[a]};
function Gn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Fn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function In(a){a=Bn[a]!==void 0?Bn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Bn[d]=c.toString())}};var Jn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Kn={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Ln(){var a=C.navigator;return a?a.connection:void 0}
function Mn(){var a=Ln();if(a){var b=Jn[a.type||"unknown"]||"CONN_UNKNOWN";a=Jn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function Nn(){var a=Ln();if(a!=null&&a.effectiveType)return Kn.hasOwnProperty(a.effectiveType)?Kn[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function T(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ra(b))}
w(T,Error);function On(){try{return Pn(),!0}catch(a){return!1}}
function Pn(a){if(R("DATASYNC_ID")!==void 0)return R("DATASYNC_ID");throw new T("Datasync ID not set",a===void 0?"unknown":a);}
;function Qn(){}
function Rn(a,b){return Wj.Ra(a,0,b)}
Qn.prototype.ma=function(a,b){return this.Ra(a,1,b)};
Qn.prototype.Kb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Sn=Nm("web_emulated_idle_callback_delay",300),Tn=1E3/60-3,Un=[8,5,4,3,2,1,0];
function Vn(a){a=a===void 0?{}:a;F.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.P=[];this.U=this.ha=!1;for(var b=y(Un),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Gc=a.timeout||1;this.G=Tn;this.D=0;this.xa=this.Pe.bind(this);this.Fc=this.vf.bind(this);this.Pa=this.ae.bind(this);this.Qa=this.Be.bind(this);this.sb=this.We.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!S("disable_scheduler_requestIdleCallback");(this.pa=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
w(Vn,F);r=Vn.prototype;r.Kb=function(a){var b=ab();Wn(this,a);a=ab()-b;this.u||(this.G-=a)};
r.Ra=function(a,b,c){++this.Z;if(b===10)return this.Kb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Xn(this)!==this.D&&this.stop(),this.start()));return d};
r.qa=function(a){delete this.j[a]};
function Yn(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function Zn(a){return!a.isHidden()&&a.pa}
function Xn(a){if(a.i[8].length){if(a.U)return 4;if(Zn(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?Zn(a)?3:2:1;return 0}
r.Ha=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Wn(a,b){try{b()}catch(c){a.Ha(c)}}
function $n(a){for(var b=y(Un),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.Be=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;ao(this,b);this.ha=!1};
r.vf=function(){ao(this)};
r.ae=function(){bo(this)};
r.We=function(a){this.U=!0;var b=Xn(this);b===4&&b!==this.D&&(this.stop(),this.start());ao(this,void 0,a);this.U=!1};
r.Pe=function(){this.isHidden()||bo(this);this.h&&(this.stop(),this.start())};
function bo(a){a.stop();a.u=!0;for(var b=ab(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Wn(a,e)}co(a);a.u=!1;$n(a)&&a.start();b=ab()-b;a.G-=b}
function co(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function ao(a,b,c){a.U&&a.D===4&&a.h||a.stop();a.u=!0;b=ab()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Wn(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!(ab()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Wn(a,c)}while(c&&ab()<b)}a.u=!1;co(a);a.G=Tn;$n(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.D=Xn(this),this.D){case 1:var a=this.Qa;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Sn);break;case 2:this.h=window.setTimeout(this.Fc,this.Gc);break;case 3:this.h=window.requestAnimationFrame(this.sb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.D){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.ba=function(){Yn(this);this.stop();this.pa&&document.removeEventListener("visibilitychange",this.xa);F.prototype.ba.call(this)};var eo=E("yt.scheduler.instance.timerIdMap_")||{},fo=Nm("kevlar_tuner_scheduler_soft_state_timer_ms",800),go=0,ho=0;function io(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new Vn(R("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function jo(){ko();var a=E("ytglobal.schedulerInstanceInstance_");a&&(zc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function ko(){Yn(io());for(var a in eo)eo.hasOwnProperty(a)&&delete eo[Number(a)]}
function lo(a,b,c){if(!c)return c=c===void 0,-io().Ra(a,b,c);var d=window.setTimeout(function(){var e=io().Ra(a,b);eo[d]=e},c);
return d}
function mo(a){io().Kb(a)}
function no(a){var b=io();if(a<0)b.qa(-a);else{var c=eo[a];c?(b.qa(c),delete eo[a]):window.clearTimeout(a)}}
function oo(){po()}
function po(){window.clearTimeout(go);io().start()}
function qo(){io().pause();window.clearTimeout(go);go=window.setTimeout(oo,fo)}
function ro(){window.clearTimeout(ho);ho=window.setTimeout(function(){so(0)},fo)}
function so(a){ro();var b=io();b.o=a;b.start()}
function to(a){ro();var b=io();b.o>a&&(b.o=a,b.start())}
function uo(){window.clearTimeout(ho);var a=io();a.o=0;a.start()}
;function vo(){Qn.apply(this,arguments)}
w(vo,Qn);function wo(){vo.h||(vo.h=new vo);return vo.h}
vo.prototype.Ra=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Km(a,c||0)};
vo.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
vo.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
vo.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Wj=wo();
S("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",jo),D("yt.scheduler.instance.addJob",lo),D("yt.scheduler.instance.addImmediateJob",mo),D("yt.scheduler.instance.cancelJob",no),D("yt.scheduler.instance.cancelAllJobs",ko),D("yt.scheduler.instance.start",po),D("yt.scheduler.instance.pause",qo),D("yt.scheduler.instance.setPriorityThreshold",so),D("yt.scheduler.instance.enablePriorityThreshold",to),D("yt.scheduler.instance.clearPriorityThreshold",uo),D("yt.scheduler.initialized",
!0));function xo(a){var b=new wk;this.h=(a=b.isAvailable()?a?new xk(b,a):b:null)?new rk(a):null;this.i=document.domain||window.location.hostname}
xo.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Ni).serialize(b))}catch(f){return}else e=escape(b);xn(a,e,c,this.i)};
xo.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=yn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
xo.prototype.remove=function(a){this.h&&this.h.remove(a);zn(a,"/",this.i)};var yo=function(){var a;return function(){a||(a=new xo("ytidb"));return a}}();
function zo(){var a;return(a=yo())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Ao=[],Bo,Co=!1;function Do(){var a={};for(Bo=new Eo(a.handleError===void 0?Fo:a.handleError,a.logEvent===void 0?Go:a.logEvent);Ao.length>0;)switch(a=Ao.shift(),a.type){case "ERROR":Bo.Ha(a.payload);break;case "EVENT":Bo.logEvent(a.eventType,a.payload)}}
function Ho(a){Co||(Bo?Bo.Ha(a):(Ao.push({type:"ERROR",payload:a}),Ao.length>10&&Ao.shift()))}
function Io(a,b){Co||(Bo?Bo.logEvent(a,b):(Ao.push({type:"EVENT",eventType:a,payload:b}),Ao.length>10&&Ao.shift()))}
;function Jo(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Ko(a){return a.substr(0,a.indexOf(":"))||a}
;var Lo=hd||id;function Mo(a){var b=Sc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var No={},Oo=(No.AUTH_INVALID="No user identifier specified.",No.EXPLICIT_ABORT="Transaction was explicitly aborted.",No.IDB_NOT_SUPPORTED="IndexedDB is not supported.",No.MISSING_INDEX="Index not created.",No.MISSING_OBJECT_STORES="Object stores not created.",No.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",No.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",No.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
No.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",No.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",No.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",No.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",No),Po={},Qo=(Po.AUTH_INVALID="ERROR",Po.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Po.EXPLICIT_ABORT="IGNORED",Po.IDB_NOT_SUPPORTED="ERROR",Po.MISSING_INDEX=
"WARNING",Po.MISSING_OBJECT_STORES="ERROR",Po.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Po.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Po.QUOTA_EXCEEDED="WARNING",Po.QUOTA_MAYBE_EXCEEDED="WARNING",Po.UNKNOWN_ABORT="WARNING",Po.INCOMPATIBLE_DB_VERSION="WARNING",Po),Ro={},So=(Ro.AUTH_INVALID=!1,Ro.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,Ro.EXPLICIT_ABORT=!1,Ro.IDB_NOT_SUPPORTED=!1,Ro.MISSING_INDEX=!1,Ro.MISSING_OBJECT_STORES=!1,Ro.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,Ro.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,Ro.QUOTA_EXCEEDED=!1,Ro.QUOTA_MAYBE_EXCEEDED=!0,Ro.UNKNOWN_ABORT=!0,Ro.INCOMPATIBLE_DB_VERSION=!1,Ro);function To(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Oo[a]:c;d=d===void 0?Qo[a]:d;e=e===void 0?So[a]:e;T.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,To.prototype)}
w(To,T);function Uo(a,b){To.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Oo.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Uo.prototype)}
w(Uo,To);function Vo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Vo.prototype)}
w(Vo,Error);var Wo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Xo(a,b,c,d){b=Ko(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof To)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new To("QUOTA_EXCEEDED",a);if(jd&&e.name==="UnknownError")return new To("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Vo)return new To("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Wo.some(function(f){return e.message.includes(f)}))return new To("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new To("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Ed:e.name})];e.level="WARNING";return e}
function Yo(a,b,c){var d=zo();return new To("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function Zo(a){if(!a)throw Error();throw a;}
function $o(a){return a}
function ap(a){this.h=a}
function bp(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
bp.all=function(a){return new bp(new ap(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Ab:0};f.Ab<a.length;f={Ab:f.Ab},++f.Ab)bp.resolve(a[f.Ab]).then(function(g){return function(h){d[g.Ab]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
bp.resolve=function(a){return new bp(new ap(function(b,c){a instanceof bp?a.then(b,c):b(a)}))};
bp.reject=function(a){return new bp(new ap(function(b,c){c(a)}))};
bp.prototype.then=function(a,b){var c=this,d=a!=null?a:$o,e=b!=null?b:Zo;return new bp(new ap(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){cp(c,c,d,f,g)}),c.i.push(function(){dp(c,c,e,f,g)})):c.state.status==="FULFILLED"?cp(c,c,d,f,g):c.state.status==="REJECTED"&&dp(c,c,e,f,g)}))};
bp.prototype.catch=function(a){return this.then(void 0,a)};
function cp(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof bp?ep(a,b,f,d,e):d(f)}catch(g){e(g)}}
function dp(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof bp?ep(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ep(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof bp?ep(a,b,f,d,e):d(f)},function(f){e(f)})}
;function fp(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function gp(a){return new Promise(function(b,c){fp(a,b,c)})}
function hp(a){return new bp(new ap(function(b,c){fp(a,b,c)}))}
;function ip(a,b){return new bp(new ap(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var jp=window,U=jp.ytcsi&&jp.ytcsi.now?jp.ytcsi.now:jp.performance&&jp.performance.timing&&jp.performance.now&&jp.performance.timing.navigationStart?function(){return jp.performance.timing.navigationStart+jp.performance.now()}:function(){return(new Date).getTime()};function kp(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
r=kp.prototype;r.add=function(a,b,c){return lp(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return lp(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return lp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function mp(a,b,c){a=a.h.createObjectStore(b,c);return new np(a)}
r.delete=function(a,b){return lp(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return lp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function op(a,b,c){return lp(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return hp(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function lp(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,u,x;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){z.A(4);break}g++;k=Math.round(U());za(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var K=new pp(l);K=qp(K,d);return H.call(z,K,7);case 7:return m=z.i,n=Math.round(U()),rp(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:p=Ba(z);t=Math.round(U());u=Xo(p,
a.h.name,b.join(),a.h.version);if((x=u instanceof To&&!u.h)||g>=f)rp(a,k,t,g,u,b.join(),e),h=u;z.A(2);break;case 4:return z.return(Promise.reject(h))}})}
function rp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof To&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Io("QUOTA_EXCEEDED",{dbName:Ko(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof To&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Io("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),sp(a,!1,d,f,b,g.tag),Ho(e)):sp(a,!0,d,f,b,g.tag)}
function sp(a,b,c,d,e,f){Io("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function np(a){this.h=a}
r=np.prototype;r.add=function(a,b){return hp(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return hp(this.h.clear()).then(function(){})};
function tp(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return hp(this.h.count(a))};
function up(a,b){return vp(a,{query:b},function(c){return c.delete().then(function(){return wp(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?up(this,a):hp(this.h.delete(a))};
r.get=function(a){return hp(this.h.get(a))};
r.index=function(a){try{return new xp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Vo(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function vp(a,b,c){a=a.h.openCursor(b.query,b.direction);return yp(a).then(function(d){return ip(d,c)})}
function pp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=To;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function qp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return y(d).next().value})}
pp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new To("EXPLICIT_ABORT");};
pp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new np(a),this.i.set(a,b));return b};
function xp(a){this.h=a}
r=xp.prototype;r.count=function(a){return hp(this.h.count(a))};
r.delete=function(a){return zp(this,{query:a},function(b){return b.delete().then(function(){return wp(b)})})};
r.get=function(a){return hp(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function zp(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return yp(a).then(function(d){return ip(d,c)})}
function Ap(a,b){this.request=a;this.cursor=b}
function yp(a){return hp(a).then(function(b){return b?new Ap(a,b):null})}
function wp(a){a.cursor.continue(void 0);return yp(a.request)}
Ap.prototype.delete=function(){return hp(this.cursor.delete()).then(function(){})};
Ap.prototype.getValue=function(){return this.cursor.value};
Ap.prototype.update=function(a){return hp(this.cursor.update(a))};function Bp(a,b,c){return new Promise(function(d,e){function f(){p||(p=new kp(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.de,k=c.blocking,l=c.tf,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Io("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Ko(a)});var u=f(),x=new pp(g.transaction);
m&&m(u,function(z){return t.oldVersion<z&&t.newVersion>=z},x);
x.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Io("IDB_UNEXPECTEDLY_CLOSED",{dbName:Ko(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Cp(a,b,c){c=c===void 0?{}:c;return Bp(a,b,c)}
function Dp(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.de)&&c.addEventListener("blocked",function(){e()}),g.yield(gp(c),4);
if(g.h!=2)return Aa(g,0);f=Ba(g);throw Xo(f,a,"",-1);})}
;function Ep(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
Ep.prototype.i=function(a,b,c){c=c===void 0?{}:c;return Cp(a,b,c)};
Ep.prototype.delete=function(a){a=a===void 0?{}:a;return Dp(this.name,a)};
function Fp(a,b){return new To("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Gp(a,b){if(!b)throw Yo("openWithToken",Ko(a.name));return a.open()}
Ep.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,u;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",za(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=x.i,H=c.options,K=[],da=y(Object.keys(H.Gb)),ea=da.next();!ea.done;ea=da.next()){ea=ea.value;var Oa=H.Gb[ea],Mb=Oa.Xe===void 0?Number.MAX_VALUE:Oa.Xe;!(z.h.version>=Oa.Mb)||z.h.version>=Mb||z.h.objectStoreNames.contains(ea)||K.push(ea)}k=K;if(k.length===0){x.A(5);break}l=Object.keys(c.options.Gb);
m=h.objectStoreNames();if(c.u<Nm("ytidb_reopen_db_retries",0))return c.u++,h.close(),Ho(new To("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<Nm("ytidb_remake_db_retries",1))){x.A(6);break}c.o++;return x.yield(c.delete(),7);case 7:return Ho(new To("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Uo(m,l);case 5:return x.return(h);case 2:n=Ba(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.A(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,Fp(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!S("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Xo(n,c.name,"",(u=c.options.version)!=null?u:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Fp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,tf:b,upgrade:this.options.upgrade};return this.h=d=a()};var Hp=new Ep("YtIdbMeta",{Gb:{databases:{Mb:1}},upgrade:function(a,b){b(1)&&mp(a,"databases",{keyPath:"actualName"})}});
function Ip(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Gp(Hp,b),2);c=d.i;return d.return(lp(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return hp(f.h.put(a,void 0)).then(function(){})})}))})}
function Jp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(Gp(Hp,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Kp(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(Gp(Hp,b),2)):e.h!=3?(d=e.i,e.yield(lp(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return vp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return wp(g)})}),3)):e.return(c)})}
function Lp(a){return Kp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Mp(a,b,c){return Kp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Np(a){var b,c;return A(function(d){if(d.h==1)return b=Pn("YtIdbMeta hasAnyMeta other"),d.yield(Kp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Op,Pp=new function(){}(new function(){});
function Qp(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=zo();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Lo)f=/WebKit\/([0-9]+)/.exec(Sc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Sc()),f=!(f&&parseInt(f[1],10)>=602));if(f||dd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Ip(d,Pp),4);case 4:return e.yield(Jp("yt-idb-test-do-not-use",Pp),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Rp(){if(Op!==void 0)return Op;Co=!0;return Op=Qp().then(function(a){Co=!1;var b;if((b=yo())!=null&&b.h){var c;b={hasSucceededOnce:((c=zo())==null?void 0:c.hasSucceededOnce)||a};var d;(d=yo())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Sp(){return E("ytglobal.idbToken_")||void 0}
function Tp(){var a=Sp();return a?Promise.resolve(a):Rp().then(function(b){(b=b?Pp:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Up=0;function Vp(a,b){Up||(Up=Wj.ma(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Tp(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(Mp(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(Dp(f.actualName),7);case 7:return h.yield(Jp(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),Ho(g),d=!1;case 4:Wj.qa(Up),Up=0,d&&Vp(a,b),h.h=0}})}))}
function Wp(){var a;return A(function(b){return b.h==1?b.yield(Tp(),2):(a=b.i)?b.return(Np(a)):b.return(!1)})}
new uj;function Xp(a){if(!On())throw a=new To("AUTH_INVALID",{dbName:a}),Ho(a),a;var b=Pn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Yp(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Tp(),2);case 2:g=m.i;if(!g)throw h=Yo("openDbImpl",a,b),S("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Ho(h),h;Jo(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Xp(a);za(m,3);return m.yield(Ip(k,g),5);case 5:return m.yield(Cp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Ba(m),za(m,7),m.yield(Jp(k.actualName,
g),9);case 9:Aa(m,8);break;case 7:Ba(m);case 8:throw l;}})}
function Zp(a,b,c){c=c===void 0?{}:c;return Yp(a,b,!1,c)}
function $p(a,b,c){c=c===void 0?{}:c;return Yp(a,b,!0,c)}
function aq(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Tp(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Jo(a);d=Xp(a);return e.yield(Dp(d.actualName,b),3)}return e.yield(Jp(d.actualName,c),0)})}
function bq(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(Dp(d.actualName,b),2):e.yield(Jp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function cq(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Tp(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Jo("LogsDatabaseV2");return d.yield(Lp(b),3)}c=d.i;return d.yield(bq(c,a,b),0)})}
function dq(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Tp(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Jo(a);return d.yield(Dp(a,b),3)}return d.yield(Jp(a,c),0)})}
;function eq(a,b){Ep.call(this,a,b);this.options=b;Jo(a)}
w(eq,Ep);function fq(a,b){var c;return function(){c||(c=new eq(a,b));return c}}
eq.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?$p:Zp)(a,b,Object.assign({},c))};
eq.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?dq:aq)(this.name,a)};
function gq(a,b){return fq(a,b)}
;var hq={},iq=gq("ytGcfConfig",{Gb:(hq.coldConfigStore={Mb:1},hq.hotConfigStore={Mb:1},hq),shared:!1,upgrade:function(a,b){b(1)&&(tp(mp(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),tp(mp(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function jq(a){return Gp(iq(),a)}
function kq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(jq(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(op(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function lq(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(jq(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(op(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function mq(a){var b,c;return A(function(d){return d.h==1?d.yield(jq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(lp(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return zp(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function nq(a){var b,c;return A(function(d){return d.h==1?d.yield(jq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(lp(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return zp(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function oq(){F.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ra(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(oq,F);oq.prototype.ba=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;F.prototype.ba.call(this)};function pq(){this.h=0;this.i=new oq}
function qq(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:R("RAW_HOT_CONFIG_GROUP")}
function rq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!S("start_client_gcf")){g.A(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Sp();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(nq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(kq(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function sq(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!S("start_client_gcf"))return h.A(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Sp())?c?h.A(4):h.yield(mq(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(lq(c,b,g,d),0)})}
function tq(){if(!pq.h){var a=new pq;pq.h=a}a=pq.h;var b=U()-a.h;if(!(a.h!==0&&b<Nm("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
pq.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function uq(){return"INNERTUBE_API_KEY"in lm&&"INNERTUBE_API_VERSION"in lm}
function vq(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),Ce:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),yd:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Ch:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ee:R("INNERTUBE_CONTEXT_HL"),De:R("INNERTUBE_CONTEXT_GL"),Fe:R("INNERTUBE_HOST_OVERRIDE")||"",Ge:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Dh:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function wq(a){var b={client:{hl:a.Ee,gl:a.De,clientName:a.yd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ce}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Om();c.length>0&&(b.request={internalExperimentFlags:c});c=a.yd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=sn()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(S("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Mn())&&b&&(b.client.connectionType=a);S("web_log_effective_connection_type")&&
(a=Nn())&&b&&(b.client.effectiveConnectionType=a);S("start_client_gcf")&&(e=tq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));R("DELEGATED_SESSION_ID")&&!S("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!S("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=R("INNERTUBE_CONTEXT");var g;if(S("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(Am(R("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function xq(a,b,c){c=c===void 0?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().sh:(a=vn(un()),S("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var yq=typeof TextEncoder!=="undefined"?new TextEncoder:null,zq=yq?function(a){return yq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var Aq={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},Bq={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function Cq(a,b){this.version=a;this.args=b}
Cq.prototype.serialize=function(){return{version:this.version,args:this.args}};function Dq(a,b){this.topic=a;this.h=b}
Dq.prototype.toString=function(){return this.topic};var Eq=E("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.cc;N.prototype.publish=N.prototype.rb;N.prototype.clear=N.prototype.clear;D("ytPubsub2Pubsub2Instance",Eq);var Fq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",Fq);var Gq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",Gq);var Hq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",Hq);
D("ytPubsub2Pubsub2SkipSubKey",null);function Iq(a,b){var c=Jq();c&&c.publish.call(c,a.toString(),a,b)}
function Kq(a){var b=Lq,c=Jq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Fq[d])try{if(f&&b instanceof Dq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Sd){var l=new h;h.Sd=l.version}var m=h.Sd}catch(z){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var u=Array(t);for(k=0;k<t;k++)u[k]=p[k];var x=u}else x=[];f=n.call(m,h,x)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){rm(z)}},Hq[b.toString()]?E("yt.scheduler.instance")?Wj.ma(g):Km(g,0):g())});
Fq[d]=!0;Gq[b.toString()]||(Gq[b.toString()]=[]);Gq[b.toString()].push(d);return d}
function Mq(){var a=Nq,b=Kq(function(c){a.apply(void 0,arguments);Oq(b)});
return b}
function Oq(a){var b=Jq();b&&(typeof a==="number"&&(a=[a]),Sb(a,function(c){b.unsubscribeByKey(c);delete Fq[c]}))}
function Jq(){return E("ytPubsub2Pubsub2Instance")}
;function Pq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Iq("meta_logging_csi_event",{timerName:a,Vh:b})}
;var Qq=void 0,Rq=void 0;function Sq(){Rq||(Rq=Ll(R("WORKER_SERIALIZATION_URL")));return Rq||void 0}
function Tq(){var a=Sq();Qq||a===void 0||(Qq=new Worker(pb(a),void 0));return Qq}
;var Uq=Nm("max_body_size_to_compress",5E5),Vq=Nm("min_body_size_to_compress",500),Wq=!0,Xq=0,Yq=0,Zq=Nm("compression_performance_threshold_lr",250),$q=Nm("slow_compressions_before_abandon_count",4),ar=!1,br=new Map,cr=1,dr=!0;function er(){if(typeof Worker==="function"&&Sq()&&!ar){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=br.get(c.key);d&&(fr(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),br.delete(c.key))}},b=Tq();
b&&(b.addEventListener("message",a),b.onerror=function(){br.clear()},ar=!0)}}
function gr(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:U(),ticks:{},infos:{}};if(Wq)try{var g=hr(b);if(g!=null&&(g>Uq||g<Vq))d(a,c);else{if(S("gzip_gel_with_worker")&&(S("initial_gzip_use_main_thread")&&!dr||!S("initial_gzip_use_main_thread"))){ar||er();var h=Tq();if(h&&!e){br.set(cr,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:cr});cr++;return}}var k=Jl(zq(b));fr(k,f,a,c,d)}}catch(l){sm(l),d(a,c)}else d(a,c)}
function fr(a,b,c,d,e){dr=!1;var f=U();b.ticks.gelc=f;Yq++;S("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Zq&&(Xq++,S("abandon_compression_after_N_slow_zips")?Yq===Nm("compression_disable_point")&&Xq>$q&&(Wq=!1):Wq=!1);ir(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function jr(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Wq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=hr(g);if(h!=null&&(h>Uq||h<Vq))return a;c=b?{level:1}:void 0;f=Jl(zq(g),c);var k=U();e.ticks.gelc=k;if(b){Yq++;if((S("disable_compression_due_to_performance_degredation")||S("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Zq)if(Xq++,S("abandon_compression_after_N_slow_zips")||S("abandon_compression_after_N_slow_zips_lr")){b=Xq/Yq;var l=$q/Nm("compression_disable_point");Yq>0&&Yq%Nm("compression_disable_point")===0&&b>=l&&(Wq=!1)}else Wq=!1;ir(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return sm(m),a}}else return a}
function hr(a){try{return(new Blob(a.split(""))).size}catch(b){return sm(b),null}}
function ir(a){S("gel_compression_csi_killswitch")||!S("log_gel_compression_latency")&&!S("log_gel_compression_latency_lr")||Pq("gel_compression",a,{sampleRate:.1})}
;function kr(a){a=Object.assign({},a);delete a.Authorization;var b=hg();if(b){var c=new ak;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=md(c.digest(),3)}return a}
;var lr;function mr(){lr||(lr=new xo("yt.innertube"));return lr}
function nr(a,b,c,d){if(d)return null;d=mr().get("nextId",!0)||1;var e=mr().get("requests",!0)||{};e[d]={method:a,request:b,authState:kr(c),requestTime:Math.round(U())};mr().set("nextId",d+1,86400,!0);mr().set("requests",e,86400,!0);return d}
function or(a){var b=mr().get("requests",!0)||{};delete b[a];mr().set("requests",b,86400,!0)}
function pr(a){var b=mr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(U())-d.requestTime<6E4)){var e=d.authState,f=kr(xq(!1));vg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),qr(a,d.method,e,{}));delete b[c]}}mr().set("requests",b,86400,!0)}}
;function rr(a){this.ec=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.yb=function(){};
this.now=Date.now;this.Qb=!1;var b;this.Od=(b=a.Od)!=null?b:100;var c;this.Jd=(c=a.Jd)!=null?c:1;var d;this.Hd=(d=a.Hd)!=null?d:2592E6;var e;this.Gd=(e=a.Gd)!=null?e:12E4;var f;this.Id=(f=a.Id)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.kc=!!a.kc;var h;this.ic=(h=a.ic)!=null?h:.1;var k;this.yc=(k=a.yc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.yb&&(this.yb=a.yb);a.Qb&&(this.Qb=a.Qb);a.ec&&(this.ec=a.ec);this.W=a.W;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Yc=a.Yc;this.Vc=a.Vc;sr(this)&&(!this.W||this.W("networkless_logging"))&&tr(this)}
function tr(a){sr(a)&&!a.Qb&&(a.h=!0,a.kc&&Math.random()<=a.ic&&a.ga.ge(a.V),ur(a),a.fa.ta()&&a.ac(),a.fa.listen(a.Yc,a.ac.bind(a)),a.fa.listen(a.Vc,a.qd.bind(a)))}
r=rr.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(sr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.V).then(function(e){d.id=e;c.fa.ta()&&vr(c,d)}).catch(function(e){vr(c,d);
wr(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(sr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.V).catch(function(l){wr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
wr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(sr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.xb(d.id,c.V):e=!0;c.fa.lb&&c.W&&c.W("vss_network_hint")&&c.fa.lb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.V).then(function(g){d.id=g;e&&c.ga.xb(d.id,c.V)}).catch(function(g){wr(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.ac=function(){var a=this;if(!sr(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.ma(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.ga.vd("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(vr(a,b),3):(a.qd(),c.return());a.i&&(a.i=0,a.ac());c.h=0})},this.Od))};
r.qd=function(){this.Ca.qa(this.i);this.i=0};
function vr(a,b){var c;return A(function(d){switch(d.h){case 1:if(!sr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.Je(b.id,a.V),3);case 3:(c=d.i)||a.yb(Error("The request cannot be found in the database."));case 2:if(xr(a,b,a.Hd)){d.A(4);break}a.yb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.xb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=yr(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.xb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function yr(a,b){if(!sr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=zr(f);(h=Ar(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.yc)){m.A(2);break}if(!a.fa.Dc){m.A(3);break}return m.yield(a.fa.Dc(),3);case 3:if(a.fa.ta()){m.A(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.Zc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.yc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.Jd?m.yield(a.ga.Zc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.ga.xb(b.id,a.V),8);case 12:a.Ca.ma(function(){a.fa.ta()&&a.ac()},a.Id);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.xb(b.id,a.V),2);a.fa.lb&&a.W&&a.W("vss_network_hint")&&a.fa.lb(!0);d(e,f);h.h=0})};
return b}
function xr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function ur(a){if(!sr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.vd("QUEUED",a.V).then(function(b){b&&!xr(a,b,a.Gd)?a.Ca.ma(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.Zc(b.id,a.V),2);ur(a);c.h=0})}):a.fa.ta()&&a.ac()})}
function wr(a,b){a.Vd&&!a.fa.ta()?a.Vd(b):a.handleError(b)}
function sr(a){return!!a.V||a.ec}
function zr(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Ar(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Br;
function Cr(){if(Br)return Br();var a={};Br=gq("LogsDatabaseV2",{Gb:(a.LogsRequestsStore={Mb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&mp(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),tp(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Br()}
;function Dr(a){return Gp(Cr(),a)}
function Er(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Dr(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(op(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();Fr(c);return g.return(f)})}
function Gr(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(Dr(b),2);if(m.h!=3)return d=m.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k="prev",S("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(lp(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return zp(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=U();Fr(c);return m.return(l)})}
function Hr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Dr(b),2);c=d.i;return d.return(lp(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",hp(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Ir(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(Dr(b),2);e=f.i;return f.return(lp(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),hp(h.h.put(k,void 0)).then(function(){return k})):bp.resolve(void 0)})}))})}
function Jr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Dr(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Kr(a){var b,c;return A(function(d){if(d.h==1)return d.yield(Dr(a),2);b=d.i;c=U()-2592E6;return d.yield(lp(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return vp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return wp(f)})})}),0)})}
function Lr(){A(function(a){return a.yield(cq(),0)})}
function Fr(a){S("nwl_csi_killswitch")||Pq("networkless_performance",a,{sampleRate:1})}
;var Mr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,
fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,
castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514};var Nr={},Or=gq("ServiceWorkerLogsDatabase",{Gb:(Nr.SWHealthLog={Mb:1},Nr),shared:!0,upgrade:function(a,b){b(1)&&tp(mp(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Pr(a){return Gp(Or(),a)}
function Qr(a){var b,c;A(function(d){if(d.h==1)return d.yield(Pr(a),2);b=d.i;c=U()-2592E6;return d.yield(lp(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return vp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return wp(f)})})}),0)})}
function Rr(a){var b;return A(function(c){if(c.h==1)return c.yield(Pr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Sr={},Tr=0;function Ur(a){var b=b===void 0?{}:b;var c=new Image,d=""+Tr++;Sr[d]=c;c.onload=c.onerror=function(){delete Sr[d]};
b.Rh&&(c.referrerPolicy="no-referrer");c.src=a}
;var Vr;function Wr(){Vr||(Vr=new xo("yt.offline"));return Vr}
function Xr(a){if(S("offline_error_handling")){var b=Wr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Wr().set("errors",b,2592E3,!0)}}
;function Yr(){this.h=new Map;this.i=!1}
function Zr(){if(!Yr.h){var a=E("yt.networkRequestMonitor.instance")||new Yr;D("yt.networkRequestMonitor.instance",a);Yr.h=a}return Yr.h}
Yr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Yr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Yr.prototype.removeParams=function(a){return a.split("?")[0]};
Yr.prototype.removeParams=Yr.prototype.removeParams;Yr.prototype.isEndpointCFR=Yr.prototype.isEndpointCFR;Yr.prototype.requestComplete=Yr.prototype.requestComplete;Yr.getInstance=Zr;function $r(){$h.call(this);var a=this;this.j=!1;this.h=Vj();this.h.listen("networkstatus-online",function(){if(a.j&&S("offline_error_handling")){var b=Wr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new T(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;rm(d)}Wr().set("errors",{},2592E3,!0)}}})}
w($r,$h);function as(){if(!$r.h){var a=E("yt.networkStatusManager.instance")||new $r;D("yt.networkStatusManager.instance",a);$r.h=a}return $r.h}
r=$r.prototype;r.ta=function(){return this.h.ta()};
r.lb=function(a){this.h.h=a};
r.ze=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.pe=function(){this.j=!0};
r.listen=function(a,b){return this.h.listen(a,b)};
r.Dc=function(a){a=Tj(this.h,a);a.then(function(b){S("use_cfr_monitor")&&Zr().requestComplete("generate_204",b)});
return a};
$r.prototype.sendNetworkCheckRequest=$r.prototype.Dc;$r.prototype.listen=$r.prototype.listen;$r.prototype.enableErrorFlushing=$r.prototype.pe;$r.prototype.getWindowStatus=$r.prototype.ze;$r.prototype.networkStatusHint=$r.prototype.lb;$r.prototype.isNetworkAvailable=$r.prototype.ta;$r.getInstance=as;function bs(a){a=a===void 0?{}:a;$h.call(this);var b=this;this.h=this.u=0;this.j=as();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){cs(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){cs(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ai(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ai(b,"publicytnetworkstatus-offline")})))}
w(bs,$h);bs.prototype.ta=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
bs.prototype.lb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
bs.prototype.Dc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return S("skip_network_check_if_cfr")&&Zr().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.lb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function cs(a,b){a.rateLimit?a.h?(Wj.qa(a.u),a.u=Wj.ma(function(){a.o!==b&&(ai(a,b),a.o=b,a.h=U())},a.rateLimit-(U()-a.h))):(ai(a,b),a.o=b,a.h=U()):ai(a,b)}
;var ds;function es(){var a=rr.call;ds||(ds=new bs({Ih:!0,zh:!0}));a.call(rr,this,{ga:{ge:Kr,xb:Jr,vd:Gr,Je:Hr,Zc:Ir,set:Er},fa:ds,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;sm(new T(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else rm(b)},
yb:sm,sendFn:gs,now:U,Vd:Xr,Ca:wo(),Yc:"publicytnetworkstatus-online",Vc:"publicytnetworkstatus-offline",kc:!0,ic:.1,yc:Nm("potential_esf_error_limit",10),W:S,Qb:!(On()&&hs())});this.j=new uj;S("networkless_immediately_drop_all_requests")&&Lr();dq("LogsDatabaseV2")}
w(es,rr);function is(){var a=E("yt.networklessRequestController.instance");a||(a=new es,D("yt.networklessRequestController.instance",a),S("networkless_logging")&&Tp().then(function(b){a.V=b;tr(a);a.j.resolve();a.kc&&Math.random()<=a.ic&&a.V&&Qr(a.V);S("networkless_immediately_drop_sw_health_store")&&js(a)}));
return a}
es.prototype.writeThenSend=function(a,b){b||(b={});b=ks(a,b);On()||(this.h=!1);rr.prototype.writeThenSend.call(this,a,b)};
es.prototype.sendThenWrite=function(a,b,c){b||(b={});b=ks(a,b);On()||(this.h=!1);rr.prototype.sendThenWrite.call(this,a,b,c)};
es.prototype.sendAndWrite=function(a,b){b||(b={});b=ks(a,b);On()||(this.h=!1);rr.prototype.sendAndWrite.call(this,a,b)};
es.prototype.awaitInitialization=function(){return this.j.promise};
function js(a){var b;A(function(c){if(!a.V)throw b=Yo("clearSWHealthLogsDb"),b;return c.return(Rr(a.V).catch(function(d){a.handleError(d)}))})}
function gs(a,b,c,d){d=d===void 0?!1:d;b=S("web_fp_via_jspb")?Object.assign({},b):b;S("use_cfr_monitor")&&ls(a,b);if(S("use_request_time_ms_header"))b.headers&&Em(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Sm(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Sm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new fb({url:a});if(k.u?typeof k.j!=="string"||k.j.length===0?0:{version:3,ne:k.j,ce:gb(k,"&act=1&ri=1"+hb(k))}:k.M&&{version:4,ne:gb(k,"&dct=1&suid="+k.o),ce:gb(k,"&act=1&ri=1&suid="+k.o)}){var l=fc(hc(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(pc),p=oc(a,0,"ri",n);if(p<0)var t=null;else{var u=a.indexOf("&",p);if(u<0||u>n)u=n;t=decodeURIComponent(a.slice(p+3,u!==-1?u:0).replace(/\+/g," "))}m=t!=="1"}var x=!m;break b}}catch(H){}x=
!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(H){}z=!1}c=z?!0:!1}else c=!1;c||Ur(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),gr(a,b.postBody,b,Wm,d)):gr(a,JSON.stringify(b.postParams),b,Vm,d):Wm(a,b)}
function ks(a,b){S("use_event_time_ms_header")&&Em(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(U())));return b}
function ls(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Zr().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Zr().requestComplete(a,!0);d(e,f)}}
function hs(){return ic(document.location.toString())!=="www.youtube-nocookie.com"}
;var ms=!1,ns=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:ms};D("ytNetworklessLoggingInitializationOptions",ns);function ps(){var a;A(function(b){if(b.h==1)return b.yield(Tp(),2);a=b.i;if(!a||!On()&&!S("nwl_init_require_datasync_id_killswitch")||!hs())return b.A(0);ms=!0;ns.isNwlInitialized=ms;return b.yield(is().awaitInitialization(),0)})}
;function qs(a){var b=this;this.config_=null;a?this.config_=a:uq()&&(this.config_=vq());Rn(function(){pr(b)},5E3)}
qs.prototype.isReady=function(){!this.config_&&uq()&&(this.config_=vq());return!!this.config_};
function qr(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||S("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=nr(b,c,l,k)),p)){var t=g.onSuccess,u=g.onFetchSuccess;g.onSuccess=function(H,K){or(p);t(H,K)};
c.onFetchSuccess=function(H,K){or(p);u(H,K)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?is().writeThenSend(m,g):is().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var z=g.postBody;typeof z!=="string"&&(z=JSON.stringify(g.postBody));gr(m,z,g,Wm,x)}else gr(m,JSON.stringify(g.postParams),g,Vm,x)}else S("web_all_payloads_via_jspb")?Wm(m,g):Vm(m,g)}catch(H){if(H.name==="InvalidAccessError")p&&(or(p),p=0),sm(Error("An extension is blocking network request."));else throw H;}p&&Rn(function(){pr(a)},5E3)}
!R("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&sm(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new T("innertube xhrclient not ready",b,c,d);rm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Fe)&&(h=f);var k=a.config_.Ge||!1,l=xq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=Cm(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(E("ytNetworklessLoggingInitializationOptions")?ns.isNwlInitialized:ms)?Rp().then(function(n){e(n)}):e(!1)}
;var rs=0,ss=fd?"webkit":ed?"moz":cd?"ms":bd?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++rs});var ts={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function us(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ts||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function zs(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
us.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
us.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
us.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var rg=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",rg);var As=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",As);
function Bs(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return qg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Sa(e[4])&&Sa(d)&&vg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Cs(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Bs(a,b,c,d);if(e)return e;e=++As.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new us(h);if(!Fg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new us(h);
h.currentTarget=a;return c.call(a,h)};
g=qm(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ds()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);rg[e]=[a,b,c,g,d];return e}
function Es(a){a&&(typeof a=="string"&&(a=[a]),Sb(a,function(b){if(b in rg){var c=rg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Ds()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete rg[b]}}))}
var Ds=pi(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Fs(a){this.G=a;this.h=null;this.o=0;this.D=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=Cs(window,"mousemove",Za(this.Y,this));a=Za(this.P,this);typeof a==="function"&&(a=qm(a));this.Z=window.setInterval(a,25)}
cb(Fs,F);Fs.prototype.Y=function(a){a.h===void 0&&zs(a);var b=a.h;a.i===void 0&&zs(a);this.h=new ng(b,a.i)};
Fs.prototype.P=function(){if(this.h){var a=U();if(this.o!=0){var b=this.D,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.D=this.h;this.j=(this.j+1)%4}};
Fs.prototype.ba=function(){window.clearInterval(this.Z);Es(this.U)};var Gs={};
function Hs(a){var b=a===void 0?{}:a;a=b.Ue===void 0?!1:b.Ue;b=b.qe===void 0?!0:b.qe;if(E("_lact",window)==null){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&Is();Cs(document,"keydown",Is);Cs(document,"keyup",Is);Cs(document,"mousedown",Is);Cs(document,"mouseup",Is);a?Cs(window,"touchmove",function(){Js("touchmove",200)},{passive:!0}):(Cs(window,"resize",function(){Js("resize",200)}),b&&Cs(window,"scroll",function(){Js("scroll",200)}));
new Fs(function(){Js("mouse",100)});
Cs(document,"touchstart",Is,{passive:!0});Cs(document,"touchend",Is,{passive:!0})}}
function Js(a,b){Gs[a]||(Gs[a]=!0,Wj.ma(function(){Is();Gs[a]=!1},b))}
function Is(){E("_lact",window)==null&&Hs();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Ks(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Ls=C.ytPubsubPubsubInstance||new N,Ms=C.ytPubsubPubsubSubscribedKeys||{},Ns=C.ytPubsubPubsubTopicToKeys||{},Os=C.ytPubsubPubsubIsSynchronous||{};function Ps(a,b){var c=Qs();if(c&&b){var d=c.subscribe(a,function(){function e(){Ms[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Os[a]?e():Km(e,0)}catch(g){rm(g)}},void 0);
Ms[d]=!0;Ns[a]||(Ns[a]=[]);Ns[a].push(d);return d}return 0}
function Rs(a){var b=Qs();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Sb(a,function(c){b.unsubscribeByKey(c);delete Ms[c]}))}
function Ss(a,b){var c=Qs();c&&c.publish.apply(c,arguments)}
function Ts(a){var b=Qs();if(b)if(b.clear(a),a)Us(a);else for(var c in Ns)Us(c)}
function Qs(){return C.ytPubsubPubsubInstance}
function Us(a){Ns[a]&&(a=Ns[a],Sb(a,function(b){Ms[b]&&delete Ms[b]}),a.length=0)}
N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.cc;N.prototype.publish=N.prototype.rb;N.prototype.clear=N.prototype.clear;D("ytPubsubPubsubInstance",Ls);D("ytPubsubPubsubTopicToKeys",Ns);D("ytPubsubPubsubIsSynchronous",Os);D("ytPubsubPubsubSubscribedKeys",Ms);var Vs=Symbol("injectionDeps");function Ws(a){this.name=a}
Ws.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Xs(a){this.key=a}
function Ys(){this.i=new Map;this.j=new Map;this.h=new Map}
function Zs(a,b){a.i.set(b.Ac,b);var c=a.j.get(b.Ac);if(c)try{c.Qh(a.resolve(b.Ac))}catch(d){c.Oh(d)}}
Ys.prototype.resolve=function(a){return a instanceof Xs?$s(this,a.key,[],!0):$s(this,a,[])};
function $s(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Rd!==void 0)var e=d.Rd;else if(d.Af)e=d[Vs]?at(a,d[Vs],c):[],e=d.Af.apply(d,ra(e));else if(d.Qd){e=d.Qd;var f=e[Vs]?at(a,e[Vs],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ra(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Uh||a.h.set(b,e);return e}
function at(a,b,c){return b?b.map(function(d){return d instanceof Xs?$s(a,d.key,c,!0):$s(a,d,c)}):[]}
;var bt;function ct(){bt||(bt=new Ys);return bt}
;var dt=window;function et(){var a,b;return"h5vcc"in dt&&((a=dt.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=dt.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in dt&&dt.performance.mark&&dt.performance.measure?2:0}
function ft(a){var b=et();switch(b){case 1:dt.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:dt.performance.mark(a+"-start");break;case 0:break;default:Db(b,"unknown trace type")}}
function gt(a){var b=et();switch(b){case 1:dt.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";dt.performance.mark(c);dt.performance.measure(a,b,c);break;case 0:break;default:Db(b,"unknown trace type")}}
;var ht=S("web_enable_lifecycle_monitoring")&&et()!==0,jt=S("web_enable_lifecycle_monitoring");function kt(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function lt(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?wo():d;this.j=c;this.scheduler=d;this.i=new uj;this.h=a;for(a={ib:0};a.ib<this.h.length;a={xc:void 0,ib:a.ib},a.ib++)a.xc=this.h[a.ib],c=function(e){return function(){e.xc.Oc();b.h[e.ib].zc=!0;b.h.every(function(f){return f.zc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.xc),d=this.scheduler.Ra(c,d),this.h[a.ib]=Object.assign({},a.xc,{Oc:c,
jobId:d})}
function mt(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.zc||(a.scheduler.qa(c.jobId),a.scheduler.Ra(c.Oc,10))}
lt.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.zc||this.scheduler.qa(b.jobId),b.zc=!0;this.i.resolve()};
lt.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function nt(a){this.state=a;this.plugins=[];this.o=void 0;this.D={};ht&&ft(this.state)}
r=nt.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;ht&&gt(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(mt(this.j),this.j=void 0);ot(this,a,b);this.state=a;ht&&ft(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(pt(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function pt(a,b){var c=b.filter(function(e){return qt(a,e)===10}),d=b.filter(function(e){return qt(a,e)!==10});
return a.D.Th?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.af.apply(a,[c].concat(ra(e))),2);a.Ld.apply(a,[d].concat(ra(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.bf.apply(a,[c].concat(ra(e)));a.Ld.apply(a,[d].concat(ra(e)))}}
r.bf=function(a){for(var b=B.apply(1,arguments),c=wo(),d=y(a),e=d.next(),f={};!e.done;f={Rb:void 0},e=d.next())f.Rb=e.value,c.Kb(function(g){return function(){rt(g.Rb.name);st(function(){return g.Rb.callback.apply(g.Rb,ra(b))});
tt(g.Rb.name)}}(f))};
r.af=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=wo(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.Xa=e.value;f.dc=void 0;g=function(k){return function(){rt(k.Xa.name);var l=st(function(){return k.Xa.callback.apply(k.Xa,ra(b))});
fe(l)?k.dc=S("web_lifecycle_error_handling_killswitch")?l.then(function(){tt(k.Xa.name)}):l.then(function(){tt(k.Xa.name)},function(m){kt(m);
tt(k.Xa.name)}):tt(k.Xa.name)}}(f);
c.Kb(g);return f.dc?h.yield(f.dc,3):h.A(3)}f={Xa:void 0,dc:void 0};e=d.next();return h.A(2)})};
r.Ld=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Oc:function(){rt(e.name);st(function(){return e.callback.apply(e,ra(b))});
tt(e.name)},
priority:qt(c,e)}});
d.length&&(this.j=new lt(d))};
function qt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function rt(a){ht&&a&&ft(a)}
function tt(a){ht&&a&&gt(a)}
function ot(a,b,c){jt&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(nt.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function st(a){if(S("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){kt(b)}}
;function ut(a){nt.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var vt;w(ut,nt);ut.prototype.i=function(a,b){var c=this;this.h=Rn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
ut.prototype.u=function(a,b){this.h&&(Wj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function wt(){vt||(vt=new ut);return vt}
;var xt=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return xt});function zt(){this.store={};this.h={}}
zt.prototype.storePayload=function(a,b){a=At(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);S("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
zt.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Bt(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ra(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ra(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ra(this.smartExtractMatchingEntries(a))));return c};
zt.prototype.extractMatchingEntries=function(a){a=Bt(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ra(this.store[a[c]])),delete this.store[a[c]]);return b};
zt.prototype.getSequenceCount=function(a){a=Bt(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Bt(a,b){var c=At(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&At(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Ct(b.auth,g[0])){var h=b.isJspb;Ct(h===void 0?"undefined":h?"true":"false",g[1])&&Ct(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Ct(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Ct(a,b){return a===void 0||a==="undefined"?!0:a===b}
zt.prototype.getSequenceCount=zt.prototype.getSequenceCount;zt.prototype.extractMatchingEntries=zt.prototype.extractMatchingEntries;zt.prototype.smartExtractMatchingEntries=zt.prototype.smartExtractMatchingEntries;zt.prototype.storePayload=zt.prototype.storePayload;function At(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function Dt(a,b){if(a)return a[b.name]}
;var Et=Nm("initial_gel_batch_timeout",2E3),Ft=Nm("gel_queue_timeout_max_ms",6E4),Gt=Nm("gel_min_batch_size",5),Ht=void 0;function It(){this.o=this.h=this.i=0;this.j=!1}
var Jt=new It,Kt=new It,Lt=new It,Mt=new It,Nt,Ot=!0,Pt=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Pt);var Qt={};function Rt(){var a=E("yt.logging.ims");a||(a=new zt,D("yt.logging.ims",a));return a}
function St(a,b){if(a.endpoint==="log_event"){Tt();var c=Ut(a),d=Vt(a.payload)||"";a:{if(S("enable_web_tiered_gel")){var e=Mr[d||""];var f,g,h,k=ct().resolve(new Xs(pq))==null?void 0:(f=qq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!S("web_payload_policy_disabled_killswitch"))return;k=Wt(e.tier);if(k===400){Xt(a,b);return}}Qt[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};Rt().storePayload(c,a.payload);Yt(b,c,d==="gelDebuggingEvent")}}
function Yt(a,b,c){function d(){Zt({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(Ht=new a);a=Nm("tvhtml5_logging_max_batch_ads_fork")||Nm("tvhtml5_logging_max_batch")||Nm("web_logging_max_batch")||100;var f=U(),g=$t(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=Rt().getSequenceCount(b));c>=1E3?d():c>=a?Nt||(Nt=au(function(){d();Nt=void 0},0)):f-h>=10&&(bu(e,b.tier),g.o=f)}
function Xt(a,b){if(a.endpoint==="log_event"){S("more_accurate_gel_parser")&&Rt().storePayload({isJspb:!1},a.payload);Tt();var c=Ut(a),d=new Map;d.set(c,[a.payload]);var e=Vt(a.payload)||"";b&&(Ht=new b);return new qi(function(f,g){Ht&&Ht.isReady()?cu(d,Ht,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Ut(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Pt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function Zt(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new qi(function(e,f){var g=$t(c,d),h=g.j;g.j=!1;du(g.i);du(g.h);g.h=0;Ht&&Ht.isReady()?d===void 0&&S("enable_web_tiered_gel")?eu(e,f,a,b,c,300,h):eu(e,f,a,b,c,d,h):(bu(c,d),e())})}
function eu(a,b,c,d,e,f,g){var h=Ht;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=S("enable_web_tiered_gel")?Rt().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):Rt().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(Qt)),l=d.next();!l.done;l=d.next())l=l.value,e=S("enable_web_tiered_gel")?Rt().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):Rt().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(S("web_fp_via_jspb_and_json")&&c.writeThenSend||!S("web_fp_via_jspb_and_json"))&&delete Qt[l];cu(k,h,a,b,c,!1,g)}
function bu(a,b){function c(){Zt({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=$t(a,b),e=d===Mt||d===Lt?5E3:Ft;S("web_gel_timeout_cap")&&!d.h&&(e=au(function(){c()},e),d.h=e);
du(d.i);e=R("LOGGING_BATCH_TIMEOUT",Nm("web_gel_debounce_ms",1E4));S("shorten_initial_gel_batch_timeout")&&Ot&&(e=Et);e=au(function(){Nm("gel_min_batch_size")>0?Rt().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Gt&&c():c()},e);
d.i=e}
function cu(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(U()),k=a.size,l=(g===void 0?0:g)&&S("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={Uc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Xc:void 0,Wc:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=xg({context:wq(b.config_||vq())});if(!Na(n)&&!S("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Pt[m])&&
fu(g.batchRequest,m,n);delete Pt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";gu(g.batchRequest,h,g.dangerousLogToVisitorSession);S("always_send_and_write")&&(e.writeThenSend=!1);g.Xc=function(p){S("start_client_gcf")&&Wj.ma(function(){return A(function(t){return t.yield(hu(p),0)})});
k--;k||c()};
g.Uc=0;g.Wc=function(p){return function(){p.Uc++;if(e.bypassNetworkless&&p.Uc===1)try{qr(b,l,p.batchRequest,iu({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Xc,p.Wc,f)),Ot=!1}catch(t){rm(t),d()}k--;k||c()}}(g);
try{qr(b,l,g.batchRequest,iu(e,g.dangerousLogToVisitorSession,g.Xc,g.Wc,f)),Ot=!1}catch(p){rm(p),d()}}}
function iu(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,th:!!e,headers:{},postBodyFormat:"",postBody:"",compress:S("compress_gel")||S("compress_gel_lr")};ju()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function gu(a,b,c){ju()||(a.requestTimeMs=String(b));S("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),mm("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function fu(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Tt(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=Mm("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(xt=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",xt),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function ju(){return S("use_request_time_ms_header")||S("lr_use_request_time_ms_header")}
function au(a,b){return S("transport_use_scheduler")===!1?Km(a,b):S("logging_avoid_blocking_during_navigation")||S("lr_logging_avoid_blocking_during_navigation")?Rn(function(){if(wt().currentState==="none")a();else{var c={};wt().install((c.none={callback:a},c))}},b):Rn(a,b)}
function du(a){S("transport_use_scheduler")?Wj.qa(a):window.clearTimeout(a)}
function hu(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=Dt(d,Pl),g=(f=d)==null?void 0:f.hotHashData,h=Dt(d,Ol),l=(k=d)==null?void 0:k.coldHashData,(m=ct().resolve(new Xs(pq)))?g?e?n.yield(rq(m,g,e),2):n.yield(rq(m,g),2):n.A(2):n.return()):l?h?n.yield(sq(m,l,h),0):n.yield(sq(m,l),0):n.A(0)})}
function $t(a,b){b=b===void 0?200:b;return a?b===300?Mt:Kt:b===300?Lt:Jt}
function Vt(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Mr[b])return b}
function Wt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var ku=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",ku);
function lu(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Ks();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!S("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,ku[b]=b in ku?ku[b]+1:0,a.sequence={index:ku[b],groupKey:b},d.endOfSequence&&delete ku[d.sequenceGroup]);(d.sendIsolatedPayload?Xt:St)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Go(a,b,c){c=c===void 0?{}:c;var d=qs;R("ytLoggingEventsDefaultDisabled",!1)&&qs===qs&&(d=null);lu(a,b,d,c)}
;function mu(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var nu=new Set,ou=0,pu=0,qu=0,ru=[],su=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Fo(a){tu(a)}
function V(a){tu(a,"WARNING")}
function uu(a){a instanceof Error?tu(a):(a=Sa(a)?JSON.stringify(a):String(a),a=new T(a),a.name="RejectedPromiseError",V(a))}
function tu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),S("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(ou>=5))){d=ru;var k=$b(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=on(a.args[p],"params."+p,c,n),
n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var u="params."+p,x=qn(t[p]);c[u]=x;n+=u.length+x.length;if(n>500)break}}else c.params=qn(t)}if(d.length)for(p=0;p<d.length&&!(n=on(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=
p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=kn();c=y(a.Ya);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.Jh)){a=d.weight;break a}a=y(a.Ta);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=y(en);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.wc[p.name])for(e=y(c.wc[p.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Sc(f);break}p.params||(p.params={});a=kn();p.params["params.errorServiceSignature"]="msg="+a.Ya.length+"&cb="+a.Ta.length;p.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Ag(Bg,"sample")).constructor!==Ag&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(p);if(p.sampleWeight!==0&&!nu.has(p.message)){if(g&&S("web_enable_error_204"))vu(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(ln.rb("handleError",p),S("record_app_crashed_web")&&qu===0&&p.sampleWeight===1&&(qu++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},S("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),Go("appCrashed",g)),pu++):b==="WARNING"&&ln.rb("handleWarning",p);if(S("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=y(su);for(c=a.next();!c.done;c=a.next())if(Mo(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,
sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!nm("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=y(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Go("clientError",h),(g==="ERROR"||S("errors_flush_gel_always_killswitch"))&&Zt(void 0,void 0,!1))}S("suppress_error_204_logging")||vu(b,p)}try{nu.add(p.message)}catch(z){}ou++}}}
function vu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Wm(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function wu(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ra(b))}
;function xu(){this.register=new Map}
function yu(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Nh("ABORTED")}
xu.prototype.clear=function(){yu(this);this.register.clear()};
var zu=new xu;var Au=Date.now().toString();
function Bu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(Au)for(a=1,b=0;b<Au.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Au.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Cu,Du=C.ytLoggingDocDocumentNonce_;Du||(Du=Bu(),D("ytLoggingDocDocumentNonce_",Du));Cu=Du;function Eu(a){this.h=a}
r=Eu.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new Rl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&L(a,2,Fe(this.h.veType)),this.h.veCounter!==void 0&&L(a,6,Fe(this.h.veCounter)),this.h.elementIndex!==void 0&&L(a,3,Fe(this.h.elementIndex)),this.h.isCounterfactual&&L(a,5,Be(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();rf(a,Rl,7,b)}this.h.youtubeData!==void 0&&rf(a,Ql,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function Fu(a){return R("client-screen-nonce-store",{})[a===void 0?0:a]}
function Gu(a,b){b=b===void 0?0:b;var c=R("client-screen-nonce-store");c||(c={},mm("client-screen-nonce-store",c));c[b]=a}
function Hu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Iu(a){return R(Hu(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",Iu);function Ju(){var a=R("csn-to-ctt-auth-info");a||(a={},mm("csn-to-ctt-auth-info",a));return a}
function Ku(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Lu(a){a=Fu(a===void 0?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Lu);function Mu(a,b,c){var d=Ju();(c=Lu(c))&&delete d[c];b&&(d[a]=b)}
function Nu(a){return Ju()[a]}
D("yt_logging_screen.getCttAuthInfo",Nu);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Fu(c)||b!==R(Hu(c)))if(Mu(a,d,c),Gu(a,c),mm(Hu(c),b),b=function(){setTimeout(function(){a&&Go("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Cu,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Ou(){var a=wg(Pu),b;return(new qi(function(c,d){a.onSuccess=function(e){Jm(e)?c(new Qu(e)):d(new Ru("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Ru("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Ru("Request timed out","net.timeout",e))};
b=Wm("//googleads.g.doubleclick.net/pagead/id",a)})).Ec(function(c){if(c instanceof zi){var d;
(d=b)==null||d.abort()}return vi(c)})}
function Ru(a,b,c){db.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Ru,db);function Qu(a){this.xhr=a}
;function Su(){this.X=0;this.h=null}
Su.prototype.then=function(a,b,c){return this.X===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Tu(a):this.X===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Uu(a):this};
Su.prototype.getValue=function(){return this.h};
Su.prototype.isRejected=function(){return this.X==2};
Su.prototype.$goog_Thenable=!0;function Uu(a){var b=new Su;a=a===void 0?null:a;b.X=2;b.h=a===void 0?null:a;return b}
function Tu(a){var b=new Su;a=a===void 0?null:a;b.X=1;b.h=a===void 0?null:a;return b}
;function Vu(a){var b=R("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(jc(a)));return a}
function Wu(a){var b={};S("json_condensed_response")&&(b.prettyPrint="false");return a=Dm(a,b||{},!1)}
function Xu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:Em(a)?"same-origin":"cors",credentials:Em(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Yu(){return fg()||(hd||id)&&Mo("applewebkit")&&!Mo("version")&&(!Mo("safari")||Mo("gsa/"))||gd&&Mo("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Zu(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Vl)if(Vl[d]==c.embeddedPlayerMode){b=Vl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function $u(a){db.call(this,a.message||a.description||a.name);this.isMissing=a instanceof av;this.isTimeout=a instanceof Ru&&a.errorCode=="net.timeout";this.isCanceled=a instanceof zi}
w($u,db);$u.prototype.name="BiscottiError";function av(){db.call(this,"Biscotti ID is missing from server")}
w(av,db);av.prototype.name="BiscottiMissingError";var Pu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},bv=null;function cv(){if(S("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Yu())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if(ug(a)=="1")return Error("Biscotti ID is not available in private embed mode");if(Zu(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function fm(){var a=cv();if(a!==void 0)return vi(a);bv||(bv=Ou().then(dv).Ec(function(b){return ev(2,b)}));
return bv}
function dv(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new av;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new av;a=a.id;gm(a);bv=Tu(a);fv(18E5,2);return a}
function ev(a,b){b=new $u(b);gm("");bv=Uu(b);a>0&&fv(12E4,a-1);throw b;}
function fv(a,b){Km(function(){Ou().then(dv,function(c){return ev(b,c)}).Ec(oi)},a)}
function gv(){try{var a=E("yt.ads.biscotti.getId_");return a?a():fm()}catch(b){return vi(b)}}
;var Nb=sa(["data-"]);function hv(a){a&&(a.dataset?a.dataset[iv()]="true":Ob(a))}
function jv(a){return a?a.dataset?a.dataset[iv()]:a.getAttribute("data-loaded"):null}
var kv={};function iv(){return kv.loaded||(kv.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function lv(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||wg(b);this.assets=a.assets||{};this.attrs=a.attrs||wg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
lv.prototype.clone=function(){var a=new lv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Ma(c)=="object"?a[b]=wg(c):a[b]=c}return a};var mv=["att/get"],nv=["share/get_share_panel"],ov=["share/get_web_player_share_panel"],pv=["feedback"],qv=["notification/modify_channel_preference"],rv=["browse/edit_playlist"],sv=["subscription/subscribe"],tv=["subscription/unsubscribe"];var uv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",uv);function vv(a){hm(uv,arguments)}
;function wv(a,b,c){xv(a,b,c===void 0?null:c)}
function yv(a){a=zv(a);var b=document.getElementById(a);b&&(Ts(a),b.parentNode.removeChild(b))}
function Av(a,b){a&&b&&(a=""+Ta(b),(a=Bv[a])&&Rs(a))}
function xv(a,b,c){c=c===void 0?null:c;var d=zv(a),e=document.getElementById(d),f=e&&jv(e),g=e&&!f;f?b&&b():(b&&(f=Ps(d,b),b=""+Ta(b),Bv[b]=f),g||(e=Cv(a,d,function(){jv(e)||(hv(e),Ss(d),Km(function(){Ts(d)},0))},c)))}
function Cv(a,b,c,d){d=d===void 0?null:d;var e=Dg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Kb(e,Ml(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function zv(a){var b=document.createElement("a");Cb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+dc(a)}
var Bv={};function Dv(a){var b=Ev(a),c=document.getElementById(b),d=c&&jv(c);d||c&&!d||(c=Fv(a,b,function(){if(!jv(c)){hv(c);Ss(b);var e=$a(Ts,b);Km(e,0)}}))}
function Fv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ml(a);Qb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Ev(a){var b=Dg("A");Cb(b,new vb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+dc(a)}
;function Gv(a){var b=B.apply(1,arguments);if(!Hv(a)||b.some(function(d){return!Hv(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())Iv(a,c.value)}
function Iv(a,b){for(var c in b)if(Hv(b[c])){if(c in a&&!Hv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Iv(a[c],b[c])}else if(Jv(b[c])){if(c in a&&!Jv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Kv(a[c],b[c])}else a[c]=b[c];return a}
function Kv(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Hv(c)?a.push(Iv({},c)):Jv(c)?a.push(Kv([],c)):a.push(c);return a}
function Hv(a){return typeof a==="object"&&!Array.isArray(a)}
function Jv(a){return typeof a==="object"&&Array.isArray(a)}
;var Lv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Mv(a,b){var c=c===void 0?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=ic(window.location.href);e&&d.push(e);e=ic(a);if(Rb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),Cb(d,a),a=d.href)if(a=jc(a),a=kc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Lu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Nv(a,b,f)}else Nv(a,b)}
function Nv(a,b,c){a=Ov(a);b=b?mc(b):"";c=c||5;Yu()&&xn(a,b,c)}
function Ov(a){for(var b=y(Lv),c=b.next();!c.done;c=b.next())a=rc(a,c.value);return"ST-"+dc(a).toString(36)}
;function Pv(a){Cq.call(this,1,arguments);this.csn=a}
w(Pv,Cq);var Lq=new Dq("screen-created",Pv),Qv=[],Rv=0,Sv=new Map,Tv=new Map,Uv=new Map;
function Vv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Wv({cttAuthInfo:Nu(b)||void 0},b),g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(sg(k)||!k.trackingParams&&!k.veType)&&V(Error("Child VE logged with no data"));if(S("no_client_ve_attach_unless_shown")){var l=Xv(h,b);if(k.veType&&!Tv.has(l)&&!Uv.has(l)&&!e){if(!S("il_attach_cache_limit")||Sv.size<1E3){Sv.set(l,[a,b,c,h]);return}S("il_attach_cache_limit")&&Sv.size>1E3&&V(new T("IL Attach cache exceeded limit"))}h=Xv(c,b);Sv.has(h)?
Yv(c,b):Uv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Ub(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?Zv("visualElementAttached",f,c):a?lu("visualElementAttached",c,a,f):Go("visualElementAttached",c,f)}
function Zv(a,b,c){Qv.push({Te:a,payload:c,Fh:void 0,options:b});Rv||(Rv=Mq())}
function Nq(a){if(Qv){for(var b=y(Qv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Go(c.Te,c.payload,c.options));Qv.length=0}Rv=0}
function Xv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Yv(a,b){a=Xv(a,b);Sv.has(a)&&(b=Sv.get(a)||[],Vv(b[0],b[1],b[2],[b[3]],!0),Sv.delete(a))}
function Wv(a,b){S("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function $v(){try{return!!self.localStorage}catch(a){return!1}}
;function aw(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function bw(a){if($v()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=aw(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function cw(){if(!$v())return!1;var a=Pn(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=aw(c.value),c!==void 0&&c!==a)return!0;return!1}
;function dw(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(R("INNERTUBE_CLIENT_NAME")==="WEB"||R("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function ew(a){if(R("LOGGED_IN",!0)&&dw()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=ic(window.location.href);c&&b.push(c);c=ic(a);Rb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=jc(a),(b=kc(b))?(b=Ov(b),b=(b=yn(b)||null)?Am(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;dw()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Mv(a,b)}}
;function fw(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Mv(a,b);if(c)return!1;ew(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;a=nc(a,e);ew(a);f=a+f;var h=h===void 0?zb:h;a:if(h=h===void 0?zb:h,f instanceof vb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof xb&&b.He(f)){h=new vb(f);break a}h=void 0}g=g.location;h=Bb(h||wb);h!==void 0&&(g.href=h);return!0}
;function gw(a){if(ug(R("PLAYER_VARS",{}))!="1"){a&&em();try{gv().then(function(){},function(){}),Km(gw,18E5)}catch(b){rm(b)}}}
;var hw=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function iw(){var a=a===void 0?window.location.href:a;if(S("kevlar_disable_theme_param"))return null;var b=fc(hc(5,a));if(S("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=Bm(a).theme;return hw.get(c)||null}catch(d){}return null}
;function jw(){this.h={};if(this.i=An()){var a=yn("CONSISTENCY");a&&kw(this,{encryptedTokenJarContents:a})}}
jw.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ga.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];kw(this,a)}};
function kw(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&xn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var lw=window.location.hostname.split(".").slice(-2).join(".");function mw(){this.j=-1;var a=R("LOCATION_PLAYABILITY_TOKEN");R("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=nw(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var ow;function pw(){ow=E("yt.clientLocationService.instance");ow||(ow=new mw,D("yt.clientLocationService.instance",ow));return ow}
r=mw.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,R("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=nw(this))&&this.h.set("yt-location-playability-token",a,15552E3):xn("YT_CL",JSON.stringify({loctok:a}),15552E3,lw,!0))};
function nw(a){return a.h===void 0?new xo("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=nw(this))&&this.h.remove("yt-location-playability-token"):zn("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;R("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function qw(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=R("INNERTUBE_CONTEXT");if(!d)return tu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=xg(d);S("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;En();var g="USER_INTERFACE_THEME_LIGHT";Hn(165)?g="USER_INTERFACE_THEME_DARK":Hn(174)?g="USER_INTERFACE_THEME_LIGHT":!S("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:iw()||g;e.userInterfaceTheme=f;if(!b){if(f=Mn())e.connectionType=f;S("web_log_effective_connection_type")&&(f=Nn())&&(d.client.effectiveConnectionType=f)}var h;if(S("web_log_memory_total_kbytes")&&((h=C.navigator)==null?0:h.deviceMemory)){var k;h=(k=C.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}S("web_gcf_hashes_innertube")&&(f=tq())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=Bm(C.location.href);!S("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo={graftUrl:C.location.href},S("kevlar_woffle")&&rn.h&&(k=rn.h,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=sn(),
e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!S("web_lr_app_quality_killswitch")&&(k=R("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!S("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(Oa){}l=
void 0}l&&(e.timeZone=l)}(l=R("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Om();jw.h||(jw.h=new jw);e=jw.h.h;k=[];h=0;for(var m in e)k[h++]=e[m];d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:k});!S("web_prequest_context_killswitch")&&(m=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=m);l=En();m=Hn(58);l=l.get("gsml","");d.user=Object.assign({},d.user);m&&(d.user.enableSafetyMode=m);l&&(d.user.lockedSafetyMode=
!0);S("warm_op_csn_cleanup")?c&&(b=Lu())&&(d.clientScreenNonce=b):!b&&(b=Lu())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=E("yt.mdx.remote.remoteClient_"))d.remoteClient=a;pw().setLocationOnInnerTubeContext(d);try{var n=Fm(),p=n.bid;delete n.bid;d.adSignalsInfo={params:[],bid:p};for(var t=y(Object.entries(n)),u=t.next();!u.done;u=t.next()){var x=y(u.value),z=x.next().value,H=x.next().value;n=z;p=H;a=void 0;(a=d.adSignalsInfo.params)==null||a.push({key:n,value:""+p})}var K,
da;if(((K=d.client)==null?void 0:K.clientName)==="TVHTML5"||((da=d.client)==null?void 0:da.clientName)==="TVHTML5_UNPLUGGED"){var ea=R("INNERTUBE_CONTEXT");ea.adSignalsInfo&&(d.adSignalsInfo.advertisingId=ea.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=ea.adSignalsInfo.limitAdTracking)}}catch(Oa){tu(Oa)}return d}
;function rw(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),R("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=R("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function sw(){this.h={}}
sw.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
sw.prototype.get=function(a){if(this.contains(a))return this.h[a]};
sw.prototype.set=function(a,b){this.h[a]=b};
sw.prototype.remove=function(a){delete this.h[a]};function tw(){this.mappings=new sw}
tw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
tw.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Db(b)}}return a};
new tw;function uw(a){return function(){return new a}}
;var vw={},ww=(vw.WEB_UNPLUGGED="^unplugged/",vw.WEB_UNPLUGGED_ONBOARDING="^unplugged/",vw.WEB_UNPLUGGED_OPS="^unplugged/",vw.WEB_UNPLUGGED_PUBLIC="^unplugged/",vw.WEB_CREATOR="^creator/",vw.WEB_KIDS="^kids/",vw.WEB_EXPERIMENTS="^experiments/",vw.WEB_MUSIC="^music/",vw.WEB_REMIX="^music/",vw.WEB_MUSIC_EMBEDDED_PLAYER="^music/",vw.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",vw);
function xw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=ww[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(ww).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function yw(){}
yw.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?wn:c;var d={context:qw(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+xw(this.j());(e=(f=Dt(a.commandMetadata,Tl))==null?void 0:f.apiUrl)&&(b=e);f=Wu(Vu(b));a=Object.assign({},{command:a},void 0);d={input:f,Za:Xu(f),Ga:d,config:a};d.config.Nb?d.config.Nb.identity=c:d.config.Nb={identity:c};return d}tu(new T("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(yw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function zw(){}
w(zw,yw);function Aw(){}
w(Aw,zw);Aw.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",Za:Xu("/getDatasyncIdsEndpoint","GET"),Ga:{}}};
Aw.prototype.j=function(){return[]};
Aw.prototype.i=function(){};
Aw.prototype.h=function(){};var Bw={},Cw=(Bw.GET_DATASYNC_IDS=uw(Aw),Bw);function Dw(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Ew(){var a=Dw();a.info||(a.info={});return a.info}
function Fw(a){a=Dw(a);a.metadata||(a.metadata={});return a.metadata}
function Gw(a){a=Dw(a);a.tick||(a.tick={});return a.tick}
function Hw(a){a=Dw(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Iw(a){a=Hw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Jw(a){var b=Dw(a).nonce;b||(b=Bu(),Dw(a).nonce=b);return b}
;function Kw(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Lw(a){a=a||"";var b=E("ytcsi.reference");b||(Kw(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Kw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Mw=(W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]=
"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W["playlist.videos"]=
"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]=
"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W),X={},Nw=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback=
"LATENCY_ACTION_DIRECT_PLAYBACK",X.editor="LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.management="LATENCY_ACTION_MANAGEMENT",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.review="LATENCY_ACTION_REVIEW",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",
X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",
X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",
X.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",X);Object.assign(Nw,Mw);function Ow(a,b){Cq.call(this,1,arguments);this.timer=b}
w(Ow,Cq);var Pw=new Dq("aft-recorded",Ow);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Qw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Qw);function Rw(){this.h=0}
function Sw(){Rw.h||(Rw.h=new Rw);return Rw.h}
Rw.prototype.tick=function(a,b,c,d){Tw(this,"tick_"+a+"_"+b)||Go("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Rw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Tw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Go("latencyActionInfo",a,{cttAuthInfo:c}))};
Rw.prototype.jspbInfo=function(){};
Rw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Tw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Go("latencyActionSpan",a,{cttAuthInfo:c}))};
function Tw(a,b){Qw[b]=Qw[b]||{count:0};var c=Qw[b];c.count++;c.time=U();a.h||(a.h=Rn(function(){var d=U(),e;for(e in Qw)Qw[e]&&d-Qw[e].time>6E4&&delete Qw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new T("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||V(c)),!0):!1}
;var Uw=window;function Vw(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Ww(){var a;if(S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Xw(e.requestStart),e.responseEnd=Xw(e.responseEnd),e.redirectStart=Xw(e.redirectStart),e.redirectEnd=Xw(e.redirectEnd),e.domainLookupEnd=Xw(e.domainLookupEnd),e.connectStart=Xw(e.connectStart),e.connectEnd=
Xw(e.connectEnd),e.responseStart=Xw(e.responseStart),e.secureConnectionStart=Xw(e.secureConnectionStart),e.domainLookupStart=Xw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=S("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Xw(a){return Math.round(Yw()+a)}
function Yw(){return(S("csi_use_time_origin")||S("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Uw.performance||Uw.mozPerformance||Uw.msPerformance||Uw.webkitPerformance||new Vw;var Zw=!1,$w=!1,ax={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"};Za(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||oi,Y);function bx(a,b){if(!S("web_csi_action_sampling_enabled")||!Dw(b).actionDisabled){var c=Lw(b||"");Gv(c.info,a);a.loadType&&(c=a.loadType,Fw(b).loadType=c);Gv(Iw(b),a);c=Jw(b);b=Dw(b).cttAuthInfo;Sw().info(a,c,b)}}
function cx(){var a,b,c,d;return((d=ct().resolve(new Xs(pq))==null?void 0:(a=qq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!S("web_csi_action_sampling_enabled")||!Dw(c).actionDisabled){var d=Jw(c),e;if(e=S("web_csi_debug_sample_enabled")&&d){(ct().resolve(new Xs(pq))==null?0:qq())&&!$w&&($w=!0,Z("gcfl",U(),c));var f,g,h;e=(ct().resolve(new Xs(pq))==null?void 0:(f=qq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=cx();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;Dw(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,bx(f,c));Dw(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||S("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);try{Y.mark(e,
{startTime:f})}catch(k){}}e=Lw(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Hw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Gw(c);e=b||U();S("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=Dw(c).cttAuthInfo;a==="_start"?(a=Sw(),Tw(a,"baseline_"+d)||Go("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Sw().tick(a,d,b,f);dx(c);return e}}}
function ex(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ss+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function fx(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(R("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function gx(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Fb(document)&&a.setAttribute("nonce",Fb(document));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Yw(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function hx(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Tb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Vb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Xw(b.startTime)),Z("wffe",Xw(b.responseEnd)))}
function ix(a){var b=jx("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=jx(b[d],a);if(e)return e}return NaN}
function jx(a,b){if(a=Gw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function dx(a){var b=jx("_start",a),c=ix(a),d=S("enable_cow_info_csi")||!Zw;b&&c&&d&&(Iq(Pw,new Ow(Math.round(c-b),a)),Zw=!0)}
function kx(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Wb(a,function(c){return c.name==="first-paint"}))return Xw(a.startTime)}var b;
S("csi_use_performance_navigation_timing")||S("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.Lh;return b?Math.max(0,b):0}
;function lx(a,b){qm(function(){Lw("").info.actionType=a;b&&mm("TIMING_AFT_KEYS",b);mm("TIMING_ACTION",a);var c=fx();Object.keys(c).length>0&&bx(c);c={isNavigation:!0,actionType:Nw[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=R("PREVIOUS_ACTION");d&&(c.previousAction=Nw[d]||"LATENCY_ACTION_UNKNOWN");if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Lu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=ex();if(d===1||d===-1)c.isVisible=!0;Fw();Ew();
c.loadType="cold";d=Ew();var e=Ww(),f=Yw(),g=R("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!S("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=kx();d>0&&Z("fpt",d);d=Ww();d.isPerformanceNavigationTiming&&bx({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Yw()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&hx();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in ax)ax.hasOwnProperty(h)&&(e=ax[h],
gx(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});bx(c);c=Hw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Iw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(Fw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=Gw();e=Hw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,jx(k));else if(S("log_repeated_ytcsi_ticks"))for(f=
y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,Gv(c,d),Gv(k,d),d=!0;d&&bx(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&mx()&&ix()&&dx()})()}
function mx(a){return qm(function(){return nx("_start",a)})()}
function ox(a,b,c){qm(bx)(a,b,c===void 0?!1:c)}
function px(a,b,c){return qm(Z)(a,b,c)}
function nx(a,b){return qm(function(){var c=Gw(b);return a in c})()}
function qx(a){if(!S("universal_csi_network_ticks"))return"";a=fc(hc(5,a))||"";for(var b=Object.keys(Aq),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function rx(a){if(!S("universal_csi_network_ticks"))return function(){};
var b=Aq[a];return b?(sx(b),function(){var c=S("universal_csi_network_ticks")?(c=Bq[a])?sx(c):!1:!1;return c}):function(){}}
function sx(a){return qm(function(){if(nx(a))return!1;px(a,void 0,void 0);return!0})()}
function tx(a){qm(function(){if(!mx("attestation_challenge_fetch")||nx(a,"attestation_challenge_fetch"))return!1;px(a,void 0,"attestation_challenge_fetch");return!0})()}
function ux(){qm(function(){var a=Jw();requestAnimationFrame(function(){setTimeout(function(){a===Jw()&&px("ol",void 0,void 0)},0)})})()}
var vx=window;vx.ytcsi&&(vx.ytcsi.infoGel=ox,vx.ytcsi.tick=px);var wx="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),xx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function yx(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.Yb||(a.Yb={});a.Yb=Object.assign({},Cw,a.Yb)}
function zx(a,b,c,d){if(yx.h!==void 0){if(d=yx.h,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new T("InnerTubeTransportService is already initialized",a);
}else yx.h=new yx(a,b,c,d)}
function Ax(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?wn:c;var d=Bx(a,b);return d?new qi(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new T("Error: Failed to build request for command.",b));n.A(0);break}ew(h.input);l=((k=h.Za)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Nd){m=Cx(h.config,l);n.A(4);break}return n.yield(Dx(h.config,l),5);case 5:m=n.i;case 4:e(Ex(a,h,m)),n.h=
0}})}):vi(new T("Error: No request builder found for command.",b))}
function Fx(a,b){function c(){}
var d="/youtubei/v1/"+xw(mv);var e=e===void 0?{Nb:{identity:wn}}:e;var f=f===void 0?!0:f;c=rx(qx(d));b.context||(b.context=qw(void 0,f));return new qi(function(g){var h,k,l,m,n;return A(function(p){if(p.h==1)return h=Vu(d),k=Em(h)?"same-origin":"cors",a.j.Nd?(l=Cx(e,k),p.A(2)):p.yield(Dx(e,k),3);p.h!=2&&(l=p.i);m=Wu(Vu(d));n={input:m,Za:Xu(m),Ga:b,config:e};g(Ex(a,n,l,c));p.h=0})})}
function Gx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(wx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function Ex(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,u,x,z,H,K,da,ea,Oa,Mb,ka,Ya,Qa,Ra,Pa,ih,jh,vs,ws,xs,ys;return A(function(ja){switch(ja.h){case 1:ja.A(2);break;case 3:if((e=ja.i)&&!e.isExpired())return ja.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ga)==null?0:g.context)){ja.A(4);break}h=b.Ga.context;ja.A(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){ja.A(4);break}m=l.value;return ja.yield(m.Mh(h),9);case 9:l=k.next();ja.A(8);break;case 4:if((n=a.i)==null||!n.Sh(b.input,b.Ga)){ja.A(12);break}return ja.yield(a.i.Hh(b.input,
b.Ga),13);case 13:return p=ja.i,Gx(a,p,b),ja.return(p);case 12:return(x=(u=b.config)==null?void 0:u.Ph)&&a.h.has(x)?t=a.h.get(x):(z=JSON.stringify(b.Ga),da=(K=(H=b.Za)==null?void 0:H.headers)!=null?K:{},b.Za=Object.assign({},b.Za,{headers:Object.assign({},da,c)}),ea=Object.assign({},b.Za),b.Za.method==="POST"&&(ea=Object.assign({},ea,{body:z})),((Oa=b.config)==null?0:Oa.Ye)&&px(b.config.Ye),Mb=function(){return a.fa.fetch(b.input,ea,b.config)},t=Mb(),x&&a.h.set(x,t)),ja.yield(t,14);
case 14:if((ka=ja.i)&&"error"in ka&&((Ya=ka)==null?0:(Qa=Ya.error)==null?0:Qa.details))for(Ra=ka.error.details,Pa=y(Ra),ih=Pa.next();!ih.done;ih=Pa.next())jh=ih.value,(vs=jh["@type"])&&xx.indexOf(vs)>-1&&(delete jh["@type"],ka=jh);x&&a.h.has(x)&&a.h.delete(x);((ws=b.config)==null?0:ws.Ze)&&px(b.config.Ze);if(ka||(xs=a.i)==null||!xs.vh(b.input,b.Ga)){ja.A(15);break}return ja.yield(a.i.Gh(b.input,b.Ga),16);case 16:ka=ja.i;case 15:return Gx(a,ka,b),((ys=b.config)==null?0:ys.Ve)&&px(b.config.Ve),d(),
ja.return(ka||void 0)}})}
function Bx(a,b){a:{a=a.u;var c,d=(c=Dt(b,Ul))==null?void 0:c.signal;if(d&&a.Yb&&(c=a.Yb[d])){var e=c();break a}var f;if((c=(f=Dt(b,Sl))==null?void 0:f.request)&&a.ke&&(f=a.ke[c])){e=f();break a}for(e in b)if(a.rd[e]&&(b=a.rd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function Dx(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Nb)==null?void 0:d.sessionIndex;var h=g.yield;var k=vn(0,{sessionIndex:e});if(!(k instanceof qi)){var l=new qi(oi);ri(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},rw(b),f)))})}
function Cx(a,b){var c;a=a==null?void 0:(c=a.Nb)==null?void 0:c.sessionIndex;c=vn(0,{sessionIndex:a});return Object.assign({},rw(b),c)}
;var Hx=new Ws("INNERTUBE_TRANSPORT_TOKEN");function Ix(){}
w(Ix,zw);Ix.prototype.j=function(){return sv};
Ix.prototype.i=function(a){return Dt(a,dm)||void 0};
Ix.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Ix.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Jx(){}
w(Jx,zw);Jx.prototype.j=function(){return tv};
Jx.prototype.i=function(a){return Dt(a,cm)||void 0};
Jx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Jx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Kx=new Ws("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Lx(a){this.M=a}
w(Lx,zw);Lx.prototype.j=function(){return nv};
Lx.prototype.i=function(a){return Dt(a,Yl)||Dt(a,Zl)||Dt(a,Xl)};
Lx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.M)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.M.i(b.clientParamIdentifier)}};
Lx[Vs]=[Kx];function Mx(){}
w(Mx,zw);Mx.prototype.j=function(){return pv};
Mx.prototype.i=function(a){return Dt(a,Wl)||void 0};
Mx.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Mx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Nx(){}
w(Nx,zw);Nx.prototype.j=function(){return qv};
Nx.prototype.i=function(a){return Dt(a,bm)||void 0};
Nx.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Ox(){}
w(Ox,zw);Ox.prototype.j=function(){return rv};
Ox.prototype.i=function(a){return Dt(a,am)||void 0};
Ox.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Px(){}
w(Px,zw);Px.prototype.j=function(){return ov};
Px.prototype.i=function(a){return Dt(a,$l)};
Px.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Qx=new Ws("FETCH_FN_TOKEN"),Rx=new Ws("PARSE_FN_TOKEN");function Sx(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;T.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(Sx,T);var Tx=new Ws("NETWORK_SLI_TOKEN");function Ux(a,b,c){this.h=a;this.i=b;this.j=c}
Ux.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=Vx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){V(k);
if((c==null?0:c.te)&&k instanceof Sx&&k.errorType===1)return Promise.reject(k)}))})};
function Vx(a,b,c){if(a.h){var d=fc(hc(5,rc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;S("wug_networking_gzip_request")&&(a=jr(c));return new window.Request(b,a)}
Ux.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.Ie)&&a.ok)return Of(b.Ie,e);e=e.replace(")]}'","");if((b==null?0:b.te)&&e)try{var f=d(e)}catch(h){throw new Sx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Bh(),c=c.then(function(e){V(new T("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
Ux[Vs]=[new Xs(Tx),new Xs(Qx),new Xs(Rx)];var Wx=new Ws("NETWORK_MANAGER_TOKEN");var Xx;function Yx(){var a,b;if(!Xx){var c=ct();Zs(c,{Ac:Wx,Qd:Ux});var d={rd:{feedbackEndpoint:uw(Mx),modifyChannelNotificationPreferenceEndpoint:uw(Nx),playlistEditEndpoint:uw(Ox),shareEntityEndpoint:uw(Lx),subscribeEndpoint:uw(Ix),unsubscribeEndpoint:uw(Jx),webPlayerShareEntityServiceEndpoint:uw(Px)}},e=pw(),f={};e&&(f.client_location=e);a===void 0&&(a=un());b===void 0&&(b=c.resolve(Wx));zx(d,b,a,f);Zs(c,{Ac:Hx,Rd:yx.h});Xx=c.resolve(Hx)}return Xx}
;function Zx(a){var b=new pj;if(a.interpreterJavascript){var c=Kl(a.interpreterJavascript);c=Ib(c).toString();var d=new nj;xf(d,6,c);rf(b,nj,1,d)}else a.interpreterUrl&&(c=Ll(a.interpreterUrl),c=pb(c).toString(),d=new oj,xf(d,4,c),rf(b,oj,2,d));a.interpreterHash&&yf(b,3,a.interpreterHash);a.program&&yf(b,4,a.program);a.globalName&&yf(b,5,a.globalName);a.clientExperimentsStateBlob&&yf(b,7,a.clientExperimentsStateBlob);return b}
function $x(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
;function yj(){if(S("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function ay(a){this.h=a}
ay.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
ay.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
ay.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function by(){return new Promise(function(a){var b=window.top;b.ntpevasrs!==void 0?a(new ay(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new ay(c))}))})}
;var cy=[],dy=!1;function ey(){if(!S("disable_biscotti_fetch_for_ad_blocker_detection")&&!S("disable_biscotti_fetch_entirely_for_all_web_clients")&&Yu()){var a=R("PLAYER_VARS",{});if(ug(a)!="1"&&!Zu(a)){var b=function(){dy=!0;"google_ad_status"in window?mm("DCLKSTAT",1):mm("DCLKSTAT",2)};
try{wv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}cy.push(Wj.ma(function(){if(!(dy||"google_ad_status"in window)){try{Av("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}dy=!0;mm("DCLKSTAT",3)}},5E3))}}}
function fy(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function gy(a){this.h=a}
[new gy("b.f_"),new gy("j.s_"),new gy("r.s_"),new gy("e.h_"),new gy("i.s_"),new gy("s.t_"),new gy("p.h_"),new gy("s.i_"),new gy("f.i_"),new gy("a.b_"),new gy("a.o_"),new gy("g.o_"),new gy("p.i_"),new gy("p.m_"),new gy("i.k_"),new gy("n.k_"),new gy("i.f_"),new gy("a.s_"),new gy("m.c_"),new gy("n.h_"),new gy("o.p_")].reduce(function(a,b){a[b.h]=b;return a},{});function hy(a,b){var c={preload:!0},d=this;this.network=a;this.options=c;this.o=b;this.h=null;if(c.Xh){var e=new uj;this.h=e.promise;C.ytAtRC&&Wj.Ra(function(){var f,g;return A(function(h){if(h.h==1){if(!C.ytAtRC)return h.return();f=iy(null);return h.yield(d.gb(f),2)}g=h.i;C.ytAtRC&&C.ytAtRC(JSON.stringify(g));h.h=0})},2);
by().then(function(f){var g,h,k,l;return A(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.gb(iy(n))}),m.yield(xj(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,eb:$x(k),vm:g,bgChallenge:new pj};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,eb:$x(n),vm:g,bgChallenge:new pj};d.h=Promise.resolve(n)});
m.h=0})})}else c.preload&&jy(this,new Promise(function(f){Rn(function(){f(ky(d))},0)}))}
hy.prototype.j=function(){var a=this;return A(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
hy.prototype.i=function(a,b,c){var d=this,e,f,g;return A(function(h){d.h===null&&jy(d,ky(d));e=!1;f={};g=function(){var k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.eb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);za(n,4);e=!0;if(S("attbs")&&!S("attmusi")){m=k.vm.hd({wb:l});n.A(6);break}return n.yield(k.vm.snapshot({wb:l}),7);case 7:m=n.i;case 6:m?f.webResponse=
m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";Aa(n,3);break;case 4:Ba(n),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var p=k.eb,t={};p.c6a&&(t.reportingStatus=String(Number(p.c)^fy()));p.c6b&&(t.broadSpectrumDetectionResult=String(Number(p.c)^Number(R("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),ly(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function iy(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function ky(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,p,t;return A(function(u){switch(u.h){case 1:c=iy(Dj().h);if(S("att_fet_ks"))return za(u,7),u.yield(a.gb(c),9);za(u,4);return u.yield(my(a,c),6);case 6:g=u.i;e=g.Qe;f=g.Re;d=g;Aa(u,3);break;case 4:return Ba(u),V(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),ny(a,864E5),u.return({challenge:"",eb:{},vm:void 0,bgChallenge:void 0});case 9:d=u.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=$x(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");Aa(u,3);break;case 7:h=Ba(u);V(h);b++;if(b>=5)return V(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),ny(a,864E5),u.return({challenge:"",eb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return u.return(new Promise(function(x){Rn(function(){x(ky(a,
b))},k)}));
case 3:l=Number(f.t)||7200;ny(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){u.A(10);break}n=Zx(d.bgChallenge);za(u,11);return u.yield(Ej(Dj(),n),13);case 13:Aa(u,12);break;case 11:return p=Ba(u),V(p),u.return({challenge:e,eb:f,vm:m,bgChallenge:n});case 12:return za(u,14),m=new wj({challenge:n,Bd:{Da:"aGIf"}}),u.yield(m.cd,16);case 16:Aa(u,10);break;case 14:t=Ba(u),V(t),m=void 0;case 10:return u.return({challenge:e,eb:f,vm:m,bgChallenge:n})}})}
hy.prototype.gb=function(a){var b=this,c;return A(function(d){c=b.o;if(!c||c.ta())return d.return(b.network.gb(a));tx("att_pna");return d.return(new Promise(function(e){Wh(c,"publicytnetworkstatus-online",function(){b.network.gb(a).then(e)})}))})};
function oy(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=$x(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Qe:b,Re:c})}
function my(a,b){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.od=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Rn(function(){l(void 0)},k.od)}}(e)),5);
case 5:return za(h,7),h.yield(a.gb(b),9);case 9:return f=h.i,h.return(oy(f));case 7:c=g=Ba(h),g instanceof Error&&V(g);case 8:d++;e={od:void 0};h.A(2);break;case 4:throw c;}})}
function jy(a,b){a.h=b}
function py(a){var b,c,d;return A(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=ky(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function ny(a,b){function c(){var e;return A(function(f){e=d-Date.now();return e<1E3?f.yield(py(a),0):(Rn(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function ly(a,b){return new Promise(function(c){Rn(function(){c(b())},a)})}
;function qy(){this.h=Yx()}
qy.prototype.gb=function(a){tx("att_fsr");return Fx(this.h,a).then(function(b){tx("att_frr");return b})};function ry(){var a,b,c;return A(function(d){if(d.h==1)return a=ct().resolve(Hx),a?d.yield(Ax(a),2):(V(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return V(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.yh;return d.return(c)}V(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function sy(){var a;return(a=R("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var ty=C.caches,uy;function vy(a){var b=a.indexOf(":");return b===-1?{Ed:a}:{Ed:a.substring(0,b),datasyncId:a.substring(b+1)}}
function wy(){return A(function(a){if(uy!==void 0)return a.return(uy);uy=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(ty.open("test-only"),4);case 4:return d.yield(ty.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(uy)})}
function xy(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(wy(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(ty.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=vy(f),h=g.datasyncId,!h||a.includes(h)||b.push(ty.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function yy(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(wy(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Pn("cache contains other");return h.yield(ty.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=vy(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function zy(){try{return!!self.sessionStorage}catch(a){return!1}}
;function Ay(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function By(a){if(zy()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=Ay(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Cy(){if(!zy())return!1;var a=Pn(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=Ay(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Dy(){ry().then(function(a){a&&(Vp(a),xy(a),bw(a),By(a))})}
function Ey(){var a=new bs;Wj.ma(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(S("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=Pn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Vp(h);xy(h);bw(h);By(h);return g.return()}c=cw();d=Cy();return g.yield(yy(),3);case 3:return e=g.i,g.yield(Wp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?Dy():Wh(a,"publicytnetworkstatus-online",Dy),g.h=0}})})}
;function Fy(){this.state=1;this.vm=null}
r=Fy.prototype;r.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript)d=Kl(a.interpreterSafeScript);else{var f;d=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(e=Ll(a.interpreterSafeUrl).toString());Gy(this,d,e,a.program,b,c)}else V(Error("Cannot initialize botguard without program"))};
function Gy(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,wv(c,function(){window[g]?Hy(a,d,g,e):(a.state=3,yv(c),V(new T("Unable to load Botguard","from "+c)))},f)):b?(f=Dg("SCRIPT"),b instanceof Gb?(f.textContent=Ib(b),Jb(f)):f.textContent=b,f.nonce=Fb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?Hy(a,d,g,e):(a.state=4,V(new T("Unable to load Botguard from JS")))):V(new T("Unable to load VM; no url or JS provided"))}
r.isLoading=function(){return this.state===2};
function Hy(a,b,c,d){a.state=5;try{var e=new wj({program:b,globalName:c,Bd:{disable:!S("att_web_record_metrics"),Da:"aGIf"}});e.cd.then(function(){a.state=6;d&&d(b)});
a.bd(e)}catch(f){a.state=7,f instanceof Error&&V(f)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.kd()?this.Td({wb:a}):null};
r.dispose=function(){this.bd(null);this.state=8};
r.kd=function(){return!!this.vm};
r.Td=function(a){return this.vm.hd(a)};
r.bd=function(a){zc(this.vm);this.vm=a};function Iy(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Jy(){Fy.apply(this,arguments)}
w(Jy,Fy);Jy.prototype.bd=function(a){var b;(b=Iy())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.hd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Jy.prototype.kd=function(){return!!Iy()};
Jy.prototype.Td=function(a){return Iy().bgvmc(a)};function Ky(a){nt.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.M},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.M},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Ky,nt);Ky.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Ky.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Ky.prototype.M=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Ky.prototype.i=function(){this.h=new Map};function Ly(a){nt.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.M},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.M},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.M},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
S("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(Ly,nt);Ly.prototype.i=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
Ly.prototype.h=function(a,b){a(b==null?void 0:b.event);S("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
Ly.prototype.u=function(a,b){a(b==null?void 0:b.event)};
Ly.prototype.M=function(a,b){a(b==null?void 0:b.event)};function My(){this.o=new Ky;this.u=new Ly}
My.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function Ny(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Ny.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Lu(c===void 0?0:c)){a=this.client;d=new Eu({trackingParams:d});var e=void 0;if(S("no_client_ve_attach_unless_shown")){var f=Xv(d,c);Tv.set(f,!0);Yv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Wv({cttAuthInfo:Nu(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?Zv("visualElementGestured",f,d):a?lu("visualElementGestured",d,a,f):Go("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Ny.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Eu({trackingParams:a}),b,c===void 0?0:c)};
Ny.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Lu(d);a||(a=(a=Iu(d===void 0?0:d))?new Eu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Wv({cttAuthInfo:Nu(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?Zv("visualElementStateChanged",d,b):a?lu("visualElementStateChanged",b,a,d):Go("visualElementStateChanged",b,d))}};
function Oy(a,b){if(b===void 0)for(var c=Ku(),d=0;d<c.length;d++)c[d]!==void 0&&Oy(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Vv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Py(){My.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));S("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));S("web_log_cfg_cee_ks")||Rn(Qy)}
w(Py,My);Py.prototype.j=function(){Go("finalPayload",{csn:Lu()})};
Py.prototype.h=function(){yu(zu)};
Py.prototype.i=function(){var a=Oy;Ny.h||(Ny.h=new Ny);a(Ny.h)};
function Qy(){var a=R("CLIENT_EXPERIMENT_EVENTS");if(a){var b=de();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&Go("genericClientExperimentEvent",{eventType:c});delete lm.CLIENT_EXPERIMENT_EVENTS}}
;function Ry(){}
function Sy(){var a=E("ytglobal.storage_");a||(a=new Ry,D("ytglobal.storage_",a));return a}
Ry.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(Ty()):d.return()})};
function Ty(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Ry);function Eo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
Eo.prototype.Ha=function(a){this.handleError(a)};
Eo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":S("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":S("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Uy(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Uy(a,b){Sy().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Vy(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Vy(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Vy(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Wy={},Xy=(Wy["api.invalidparam"]=2,Wy.auth=150,Wy["drm.auth"]=150,Wy["heartbeat.net"]=150,Wy["heartbeat.servererror"]=150,Wy["heartbeat.stop"]=150,Wy["html5.unsupportedads"]=5,Wy["fmt.noneavailable"]=5,Wy["fmt.decode"]=5,Wy["fmt.unplayable"]=5,Wy["html5.missingapi"]=5,Wy["html5.unsupportedlive"]=5,Wy["drm.unavailable"]=5,Wy["mrm.blocked"]=151,Wy["embedder.identity.denied"]=152,Wy);var Yy=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function Zy(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function $y(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(Yy);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function az(a,b,c,d){if(Sa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function bz(a){F.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.D=[];this.P={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=S("web_player_split_event_bus_iframe");this.o=R("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",cz(b));b.sendMessage("onReady");e=y(b.D);for(d=e.next();!d.done;d=e.next())dz(b,d.value);b.D=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=ez(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&Zy(e)){var f=d;if(Sa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=$y(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=$y(g);break;case "loadPlaylist":case "cuePlaylist":g=az(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);Zy(e)&&fz(b,cz(b))}}}};
gz.addEventListener("message",this.G);if(a=R("WIDGET_ID"))this.sessionId=a;hz(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Xy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
hz(this,"onVideoProgress",this.lf.bind(this));hz(this,"onVolumeChange",this.mf.bind(this));hz(this,"onApiChange",this.df.bind(this));hz(this,"onPlaybackQualityChange",this.hf.bind(this));hz(this,"onPlaybackRateChange",this.jf.bind(this));hz(this,"onStateChange",this.kf.bind(this));hz(this,"onWebglSettingsChanged",this.nf.bind(this));hz(this,"onCaptionsTrackListChanged",this.ef.bind(this));hz(this,"captionssettingschanged",this.ff.bind(this))}
w(bz,F);function fz(a,b){a.sendMessage("infoDelivery",b)}
r=bz.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?dz(this,a):this.D.push(a)};
function ez(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function hz(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function cz(a){if(!a.api)return null;var b=a.api.getApiInterface();Xb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.kf=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());fz(this,a)};
r.hf=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());fz(this,a)};
r.jf=function(a){fz(this,{playbackRate:a})};
r.df=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.mf=function(){fz(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.lf=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());fz(this,a)};
r.nf=function(){fz(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.ef=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};fz(this,a)}};
r.ff=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};fz(this,a)}};
function dz(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){V(d)}}}
r.ba=function(){F.prototype.ba.call(this);gz.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var gz=window;function iz(a,b,c){F.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=S("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=jz(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=kz(g,f))&&lz(d,g,f))}}}}}};
mz.addEventListener("message",this.i);lz(this,"RECEIVING")}
w(iz,F);r=iz.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.gf.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.gf=function(a,b){this.ea||lz(this,a,nz(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function jz(a,b){switch(a){case "loadVideoById":return[$y(b)];case "cueVideoById":return[$y(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[az(b)];case "cuePlaylist":return[az(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function kz(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function nz(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function lz(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),oz.postMessage(JSON.stringify(b),a.origin))}
r.ba=function(){mz.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);F.prototype.ba.call(this)};
var mz=window,oz=window.parent;var pz=new Jy;function qz(){return pz.kd()}
function rz(a){a=a===void 0?{}:a;return pz.invoke(a)}
;function sz(a,b,c,d,e){F.call(this);var f=this;this.D=b;this.webPlayerContextConfig=d;this.Fc=e;this.Pa=!1;this.api={};this.pa=this.u=null;this.U=new N;this.h={};this.Z=this.xa=this.elementId=this.Qa=this.config=null;this.Y=!1;this.j=this.G=null;this.Fa={};this.Gc=["onReady"];this.lastError=null;this.sb=NaN;this.P={};this.ha=0;this.i=this.o=a;Bc(this,this.U);tz(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(uz(this),vz(this))}
w(sz,F);r=sz.prototype;r.getId=function(){return this.D};
r.loadNewVideoConfig=function(a){if(!this.ea){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof lv||(b=new lv(b));this.config=b;this.setConfig(a);vz(this);this.isReady()&&wz(this)}};
function uz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.D,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.D:a.config.attrs.id=a.D);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Qa=a;this.config=xz(a);uz(this);if(!this.xa){var b;this.xa=yz(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Qj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Qj(Number(a)||a))};
function wz(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function zz(a){var b=!0,c=Az(a);c&&a.config&&(b=c.dataset.version===Bz(a));return b&&!!E("yt.player.Application.create")}
function vz(a){if(!a.ea&&!a.Y){var b=zz(a);if(b&&(Az(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||Cz(a);else if(Dz(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),Cz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Ez(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?xz(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Fc);Cz(a)};
a.Y=!0;b?a.G():(wv(Bz(a),a.G),(b=Fz(a))&&Dv(b||""),Gz(a)&&!c&&D("yt.player.Application.create",null))}}}
function Az(a){var b=Cg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Cz(a){if(!a.ea){var b=Az(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!Ez(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Hz(a)}else a.sb=setTimeout(function(){Cz(a)},50)}}
function Hz(a){tz(a);a.Pa=!0;var b=Az(a);if(b){a.u=Iz(a,b,"addEventListener");a.pa=Iz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Iz(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);wz(a);a.xa&&a.xa(a.api);a.U.rb("onReady",a.api)}
function Iz(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new T("PlayerProxy error in method call",{error:f,method:c,playerId:a.D}),e.level="WARNING",e;}}}
function tz(a){a.Pa=!1;if(a.pa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.pa(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.pa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Pa};
r.addEventListener=function(a,b){var c=this,d=yz(this,b);d&&(Rb(this.Gc,a)>=0||this.h[a]||(b=Jz(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.ea||(b=yz(this,b))&&this.U.unsubscribe(a,b)};
function yz(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new T("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function Jz(a,b){function c(d){function e(){if(!a.ea)try{a.U.rb(b,d!=null?d:void 0)}catch(h){var g=new T("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.D,data:d,originalStack:h.stack,componentStack:h.je});g.level="WARNING";throw g;}}
if(Ez(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
tg(a.P,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Z||(Az(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function Dz(a){a.cancel();tz(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=Az(a);b&&(zz(a)||!Gz(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.G&&Av(Bz(this),this.G);clearTimeout(this.sb);this.Y=!1};
r.ba=function(){Dz(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new T("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Qa=this.config=this.api=null;delete this.o;delete this.i;F.prototype.ba.call(this)};
function Gz(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function Bz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Fz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Ez(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function xz(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?wg(e):e}return b}
;var Kz={},Lz="player_uid_"+(Math.random()*1E9>>>0);function Mz(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Cg(c):c;var e=Lz+"_"+Ta(c),f=Kz[e];if(f&&d)return Nz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new sz(c,e,a,b,void 0);Kz[e]=f;f.addOnDisposeCallback(function(){delete Kz[f.getId()]});
return f.api}
function Nz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Oz=null,Pz=null;
function Qz(){ux();var a=En(),b=Hn(119),c=window.devicePixelRatio>1;if(document.body&&ek(document.body,"exp-invert-logo"))if(c&&!ek(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!ek(d,"inverted-hdpi")){var e=ck(d);dk(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&ek(document.body,"inverted-hdpi")&&fk();if(b!=c){b="f"+(Math.floor(119/31)+1);d=In(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Bn[b]:(c=d.toString(16),Bn[b]=c.toString());
c=!0;S("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Bn)Bn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Bn[f])));var f=d.join("&");xn(b,f,63072E3,a.i,c)}}
function Rz(){Sz()}
function Tz(){px("ep_init_pr");Sz()}
function Sz(){var a=Oz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Uz(){Oz&&Oz.sendAbandonmentPing&&Oz.sendAbandonmentPing();R("PL_ATT")&&pz.dispose();for(var a=Wj,b=0,c=cy.length;b<c;b++)a.qa(cy[b]);cy.length=0;yv("//static.doubleclick.net/instream/ad_status.js");dy=!1;mm("DCLKSTAT",0);Ac(Pz);Oz&&(Oz.removeEventListener("onVideoDataChange",Rz),Oz.destroy())}
;px("ep_init_eps");D("yt.setConfig",mm);D("yt.config.set",mm);D("yt.setMsg",vv);D("yt.msgs.set",vv);D("yt.logging.errors.log",tu);
D("writeEmbed",function(){px("ep_init_wes");var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}gw(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);lx("embed",["ol"]);c=sy();if(!c.serializedForcedExperimentIds){var d=Bm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&lx("watch",["pbs","pbu","pbp"]);Oz=Mz(a,c);Oz.addEventListener("onVideoDataChange",Rz);Oz.addEventListener("onReady",Tz);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Pz=new bz(Oz):R("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Pz=new iz(Oz,a,b));ey();S("ytidb_create_logger_embed_killswitch")||Do();a={};Py.h||(Py.h=new Py);Py.h.install((a.flush_logs={callback:function(){Zt()}},a));
ps();S("ytidb_clear_embedded_player")&&Wj.ma(function(){Yx();Ey()});
S("enable_rta_manager")&&Wj.ma(function(){var f=new qy;var g=S("enable_rta_nsm")?new bs:void 0;hy.h=new hy(f,g);f=hy.h;g=f.i.bind(f);D("yt.aba.att",g);f=f.j.bind(f);D("yt.aba.att2",f)});
px("ep_init_wee")});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||qz);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||rz);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||fy);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||fw);D("yt.util.activity.init",E("yt.util.activity.init")||Hs);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Ks);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Is);window.addEventListener("load",qm(function(){Qz()}));
window.addEventListener("pageshow",qm(function(a){a.persisted||Qz()}));
window.addEventListener("pagehide",qm(function(a){S("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Uz():a.persisted||Uz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=nm("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new T(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!S("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.je)f||(f={}),f.componentStack=mu(m)}f&&wu(e,f);g?tu(e):V(e)}};
Hi=uu;window.addEventListener("unhandledrejection",function(a){uu(a.reason)});
Sb(R("ERRORS")||[],function(a){tu.apply(null,a)});
mm("ERRORS",[]);px("ep_init_epe");}).call(this);
