!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.porscheDesignSystem=n():e.porscheDesignSystem=n()}(window,(function(){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=9)}([function(e,n,t){"use strict";function r(){return"noModule"in HTMLScriptElement.prototype}function o(){return"customElements"in window}function i(e){document.head.appendChild(e)}function u(e){return document.createElement(e)}t.d(n,"d",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return i})),t.d(n,"b",(function(){return u}))},function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r="porscheWebComponentsManager";function o(){if(!document[r]){var e={_registered:{},_inProgress:new Map,_readyDeferred:null,_polyfills:{loaded:!1,preventLoading:!1}};document[r]=e}return document[r]}},function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(3),o=t(1);const i="https://cdn.ui.porsche.com/porsche-design-system/components/polyfills.min.5d6f8341.js";var u=t(0);function c(e){var n=Object(o.a)()._polyfills;if(!n.loaded&&!Object(u.c)()&&!n.preventLoading)return n.loaded=!0,window.addEventListener("PorscheWebComponentsManagerPolyfillsLoaded",e,{once:!0}),Object(r.a)(i,!1),void Object(r.a)(i,!0);e()}},function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(0),o=[],i=!1;function u(e,n){var t=Object(r.d)();(n&&t||!n&&!t)&&(o.push({src:e,moduleSyntax:n}),n&&function(e){var n=Object(r.b)("link");n.rel="preload",n.as="script",n.crossOrigin="",n.href=e,Object(r.a)(n)}(e),function e(){if(!i&&o.length>0){i=!0;var n=o.shift(),t=n.src,u=n.moduleSyntax,c=Object(r.b)("script");c.setAttribute("src",t),u?c.type="module":c.noModule=!0,c.onload=function(){i=!1,e()},document.body.appendChild(c)}}())}},function(e,n,t){"use strict";t(1)},function(e,n,t){"use strict";t(4),t(2)},function(e,n){},function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(3),o=t(1),i=t(2),u=t(0);function c(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,n){if(!e)return;if("string"==typeof e)return s(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return s(e,n)}(e))){var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function s(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function l(e){var n,t=e.name,o=e.scripts,s=e.stylesUrl,l=void 0===s?null:s,f=e.inlineStyles,d=void 0===f?null:f,p=e.version,b=void 0===p?"global":p,y=e.prefix,m=void 0===y?null:y;null===m&&(b="global");var v,g,j,h,O=null!==(n=a(t,b))&&void 0!==n?n:{},S=O.scriptsLoaded,x=O.prefixes,_=O.registerCustomElements;S||(d&&(j=d,(h=Object(u.b)("style")).appendChild(document.createTextNode(j)),Object(u.a)(h)),l&&(v=l,(g=Object(u.b)("link")).rel="stylesheet",g.type="text/css",g.href=v,Object(u.a)(g)),Object(i.a)((function(){return function(e){var n,t=c(e);try{for(t.s();!(n=t.n()).done;){var o=n.value,i=o.url,u=o.module;Object(r.a)(i,u)}}catch(e){t.e(e)}finally{t.f()}}(o)})),O.scriptsLoaded=!0),null!==m&&x.indexOf(m)<0&&(x.push(m),_&&_(m))}function a(e,n){var t,r,i,u=Object(o.a)()._registered,c=u[e],s=(c=void 0===c?{}:c)[n];if(null===(void 0===s?null:s)){u[e]=Object.assign(Object.assign({},u[e]),(i={scriptsLoaded:!1,prefixes:[],registerCustomElements:null},(r=n)in(t={})?Object.defineProperty(t,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[r]=i,t))}return u[e][n]}t(4)},function(e,n,t){"use strict";t(5);var r=t(7);t.d(n,"loadComponentLibrary",(function(){return r.a}));t(6)},function(e,n,t){"use strict";t.r(n),t.d(n,"PDS_CDN_KEY",(function(){return o})),t.d(n,"load",(function(){return i}));var r=t(8);const o="porscheDesignSystemCdn",i=({prefix:e=""}={})=>{Object(r.loadComponentLibrary)(Object.assign(Object.assign({},{name:"porscheDesignSystem",version:"2.0.0-alpha.3",scripts:[{module:!0,url:(typeof window!=='undefined'&&window['PORSCHE_DESIGN_SYSTEM_CDN']==='cn'?'https://cdn.ui.porsche.cn':'https://cdn.ui.porsche.com')+"/porsche-design-system/components/porsche-design-system.v2.0.0-alpha.3.c10a1d6232fc53658fc8.js"}],stylesUrl:null,inlineStyles:null}),{prefix:e}))}}])}));