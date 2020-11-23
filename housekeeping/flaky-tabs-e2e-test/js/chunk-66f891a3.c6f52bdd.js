(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-66f891a3"],{"189b":function(e,t,n){var o=n("72df"),r=n("7d53"),a=n("4fed"),s=r("species");e.exports=function(e){return a>=51||!o((function(){var t=[],n=t.constructor={};return n[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2117:function(e,t,n){var o=n("8697");e.exports=function(e,t,n){if(o(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}}},"37d1":function(e,t,n){var o=n("730c");e.exports=function(e){return Object(o(e))}},"4fed":function(e,t,n){var o,r,a=n("f498"),s=n("64e4"),i=a.process,c=i&&i.versions,l=c&&c.v8;l?(o=l.split("."),r=o[0]+o[1]):s&&(o=s.match(/Edge\/(\d+)/),(!o||o[1]>=74)&&(o=s.match(/Chrome\/(\d+)/),o&&(r=o[1]))),e.exports=r&&+r},"64e4":function(e,t,n){var o=n("5428");e.exports=o("navigator","userAgent")||""},"6a86":function(e,t,n){var o=n("7526"),r=n("c6de"),a=n("7d53"),s=a("species");e.exports=function(e,t){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?o(n)&&(n=n[s],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"7f8a":function(e,t,n){"use strict";var o=n("72df");e.exports=function(e,t){var n=[][e];return!!n&&o((function(){n.call(null,t||function(){throw 1},1)}))}},8697:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"9ce0":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Loading Behaviour")]),e._m(0),e._m(1),n("h2",[e._v("Unstyled Porsche Design System Components (FOUC)")]),e._m(2),e._m(3),n("h3",[e._v("Example usage of partials with template")]),e._m(4),e._m(5),n("h3",[e._v("Example usage of partials with placeholder")]),e._m(6),e._m(7),e._m(8),n("h3",[e._v("Example usage with static CSS snippet")]),e._m(9),n("pre",[n("code",{staticClass:"language-html"},[e._v("// index.html\n\n<head>\n  "+e._s(e.coreStyles)+"\n</head>\n")])]),n("hr"),n("h2",[e._v("Flash of Unstyled Text")]),n("p",[e._v("The Porsche Design System provides font face definitions and loads all needed fonts dynamically from our CDN. Until the fonts are fully loaded the components use the fallback font and you might see a little change until the loading is finished.")]),n("h3",[e._v("Inject Porsche Design System Font Stylesheet")]),n("p",[e._v("If you use the Porsche Design System components we inject the font-stylesheet with all font-face definitions into the head of your application as soon as our core is loaded. Regarding which font-styles do you use on your page, these fonts get downloaded from our CDN. This can lead (for the first time) to a decent rendering glitch of your texts. To improve rendering we recommend that you load the stylesheet on your own.")]),e._m(10),n("h4",[e._v("Example with partials")]),e._m(11),n("h4",[e._v("Example with placeholder")]),e._m(12),e._m(13),n("h4",[e._v("Example with static path")]),e._m(14),n("pre",[n("code",{staticClass:"language-html"},[e._v("// index.html\n\n<head>\n  // Make sure to watch your console output. We notify you about any changes.\n  "+e._s(e.fontFaceCSS)+"\n</head>\n")])]),n("h3",[e._v("Preload specific font files")]),e._m(15),e._m(16),n("h4",[e._v("Example preload")]),e._m(17)])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Unstyled content")]),e._v(" when opening an application or website creates a bad first impression. To prevent this, the Porsche Design System offers various solutions to ensure all necessary Porsche Design System fonts and components are fully loaded.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("On this page you find detailed instructions on how to prevent "),n("strong",[e._v("Flash of Unstyled Content")]),e._v(" (FOUC) and "),n("strong",[e._v("Flash of Unstyled Text")]),e._v(" (FOUT) where we provide options to boost your application.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you use "),n("code",[e._v("Porsche Design System")]),e._v(" components, we take care that your application only renders a component if it is fully styled. However, it takes a moment until our core is fully loaded and only then we can take action. This short timespan has to be covered.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("There are two ways to get rid of FOUC: via "),n("strong",[e._v("partials")]),e._v(" or as "),n("strong",[e._v("static CSS snippet")]),e._v(". We provide partials in our "),n("code",[e._v("@porsche-design-system/partials")]),e._v(" package for you to import them into the "),n("code",[e._v("<head>")]),e._v(" of your "),n("code",[e._v("index.html")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The example shows how to implement a partial in a webpack project. The core styles partial has following parameters (optional)"),n("br"),n("code",[e._v("getPorscheDesignSystemCoreStyles({ withoutTags: true, prefix: 'custom-prefix' })")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-html"},[e._v("// index.html\n\n<head>\n  // without parameters\n  <%= require('@porsche-design-system/partials').getPorscheDesignSystemCoreStyles() %>\n</head>\n\n<head>\n  // with custom prefix to match your prefixed components\n  <%= require('@porsche-design-system/partials').getPorscheDesignSystemCoreStyles({ prefix: 'custom-prefix' }) %>\n</head>\n\n<head>\n  // without style tags\n  <style>\n    <%= require('@porsche-design-system/partials').getPorscheDesignSystemCoreStyles({ withoutTags: true }) %>\n  </style>\n</head>\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you don't use webpack or your bundler does not work with the syntax of the previous example you can put a placeholder in your markup and replace its content with a script. You can also pass following parameters (optional)"),n("br"),n("code",[e._v("getPorscheDesignSystemCoreStyles({ withoutTags: true, prefix: 'custom-prefix' })")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-html"},[e._v("// index.html\n\n<head>\n  \x3c!--PLACEHOLDER_CORE_STYLES--\x3e\n</head>\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-json"},[e._v('// package.json\n\n"scripts": {\n  "prestart": "yarn replace",\n  "replace": "partial=$(node -e \'console.log(require(\\"@porsche-design-system/partials\\").getPorscheDesignSystemCoreStyles())\') && regex=\'\x3c!--PLACEHOLDER_CORE_STYLES--\x3e|<style>(p-[a-z-]*,?)*{visibility:hidden}<\\\\/style>\' && sed -i \'\' -E -e \\"s@$regex@$partial@\\" src/index.html",\n} \n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you are not able to use "),n("strong",[e._v("partials")]),e._v(" use the "),n("strong",[e._v("static")]),e._v(" solution. Just copy the whole "),n("code",[e._v("<style>")]),e._v(" tag from the static example and put it into the "),n("code",[e._v("<head>")]),e._v(" of the "),n("code",[e._v("index.html")]),e._v(" of your application. While using the static solution, make sure to list every component you use and "),n("strong",[e._v("update the list")]),e._v(" when you upgrade the version of the "),n("code",[e._v("Porsche Design Sytem")]),e._v(" with new components introduced. Be aware if using custom prefixed components to adapt the style names with your custom prefix.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("We provide the URL to our stylesheet in our "),n("code",[e._v("@porsche-design-system/assets")]),e._v(" package with the name "),n("code",[e._v("FONT_FACE_CDN_URL")]),e._v(". We also provide a ready to use partial in the "),n("code",[e._v("@porsche-design-system/partials")]),e._v(" package called "),n("code",[e._v("getFontFaceCSS()")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-html"},[e._v("// index.html\n\n<head>\n  // Using template syntax\n  <%= require('@porsche-design-system/partials').getFontFaceCSS() %>\n</head>\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-html"},[e._v("// index.html\n\n<head>\n  \x3c!--PLACEHOLDER_FONT_FACE_CSS--\x3e\n</head>\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-json"},[e._v('// package.json\n\n"scripts": {\n  "prestart": "yarn replace",\n  "replace": "partial=$(node -e \'console.log(require(\\"@porsche-design-system/partials\\").getFontFaceCSS())\') && regex=\'\x3c!--PLACEHOLDER_FONT_FACE_CSS--\x3e|<link rel=\\"?stylesheet\\"? href=\\"?https:\\\\/\\\\/cdn\\\\.ui\\\\.porsche\\\\.(com|cn)\\\\/porsche-design-system\\\\/styles\\\\/font-face\\\\.min\\\\..*\\\\.css\\"?>\' && sed -i \'\' -E -e \\"s@$regex@$partial@\\" src/index.html",\n} \n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you use the static solution you have to update the "),n("code",[e._v("<Link>")]),e._v(" if changes are made in our font face definitions. But don't worry, we don't remove old files to grant you a valid fallback.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Fonts should be loaded as soon as possible but only those which are needed. The Porsche Design System is not able to determine which components you use on the site and which fonts we have to provide initially, but we export all resources you need to preload fonts and optimize "),n("strong",[e._v("Flash of Unstyled Tex")]),e._v(" in your application.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("We provide all URLs that you need in the "),n("code",[e._v("@porsche-design-system/assets")]),e._v(" package. Use the const "),n("code",[e._v("FONTS_CDN_BASE_URL")]),e._v(" which is the basic path to the CDN and the object "),n("code",[e._v("FONTS_MANIFEST")]),e._v(" which contains the filenames of all "),n("code",[e._v("fonts")]),e._v(" and according "),n("code",[e._v("weights")]),e._v(" in either "),n("code",[e._v("woff")]),e._v(" or "),n("code",[e._v("woff2")]),e._v(" file format. Combine the path and filename to preload them via "),n("code",[e._v("href")]),e._v(" with a "),n("code",[e._v("<link>")]),e._v(" tag at the head of your "),n("code",[e._v("index.html")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",{staticClass:"language-html"},[e._v('// index.html\n\n<head>\n <link\n   rel="preload"\n   href="path/to/webfont/nameOfWebFontFile"\n   as="font"\n   type="font/woff2"\n   crossorigin\n />\n</head>\n')])])}],a=(n("ac1f"),n("5319"),n("d4ec")),s=n("262e"),i=n("2caf"),c=n("9ab4"),l=n("2b0e"),p=n("2fe1"),u=(n("ef14"),n("cfce"),function(e){var t=("cn"===(null===e||void 0===e?void 0:e.cdn)?"https://cdn.ui.porsche.cn":"https://cdn.ui.porsche.com")+"/porsche-design-system/styles/"+("cn"===(null===e||void 0===e?void 0:e.cdn)?"font-face.min.cn.c1b46971322e96095de49987cdc90226.css":"font-face.min.de7353ac41430a74da152a5bf0e7bb5b.css");return(null===e||void 0===e?void 0:e.withoutTags)?t:"<link rel=stylesheet href="+t+">"}),h=function(e){var t=["p-banner","p-button","p-button-pure","p-checkbox-wrapper","p-content-wrapper","p-divider","p-fieldset-wrapper","p-flex","p-flex-item","p-grid","p-grid-item","p-headline","p-icon","p-link","p-link-pure","p-link-social","p-marque","p-modal","p-pagination","p-radio-button-wrapper","p-select-wrapper","p-spinner","p-tabs","p-tabs-bar","p-tabs-item","p-text","p-text-field-wrapper","p-text-list","p-text-list-item","p-textarea-wrapper"],n=t.map((function(t){return(null===e||void 0===e?void 0:e.prefix)?e.prefix+"-"+t:t})).join(",")+"{visibility:hidden}";return(null===e||void 0===e?void 0:e.withoutTags)?n:"<style>"+n+"</style>"},d=function(e){Object(s["a"])(n,e);var t=Object(i["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.fontFaceCSS=u(),e.coreStyles=h().replace(">",">\n    ").replace(/,/g,",\n    ").replace("}","}\n  ").replace(/({|}|:)/g," $1 ").replace(" :",":"),e}return n}(l["a"]);d=Object(c["a"])([p["b"]],d);var f=d,v=f,_=n("2877"),m=Object(_["a"])(v,o,r,!1,null,null,null);t["default"]=m.exports},c6de:function(e,t,n){var o=n("6a61");e.exports=Array.isArray||function(e){return"Array"==o(e)}},ce71:function(e,t,n){var o=n("d4cb"),r=n("72df"),a=n("f1a7"),s=Object.defineProperty,i={},c=function(e){throw e};e.exports=function(e,t){if(a(i,e))return i[e];t||(t={});var n=[][e],l=!!a(t,"ACCESSORS")&&t.ACCESSORS,p=a(t,0)?t[0]:c,u=a(t,1)?t[1]:void 0;return i[e]=!!n&&!r((function(){if(l&&!o)return!0;var e={length:-1};l?s(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,p,u)}))}},cfce:function(e,t,n){"use strict";var o=n("6b1d"),r=n("d054").map,a=n("189b"),s=n("ce71"),i=a("map"),c=s("map");o({target:"Array",proto:!0,forced:!i||!c},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},d054:function(e,t,n){var o=n("2117"),r=n("83a6"),a=n("37d1"),s=n("b495"),i=n("6a86"),c=[].push,l=function(e){var t=1==e,n=2==e,l=3==e,p=4==e,u=6==e,h=5==e||u;return function(d,f,v,_){for(var m,y,g=a(d),w=r(g),x=o(f,v,3),b=s(w.length),S=0,C=_||i,E=t?C(d,b):n?C(d,0):void 0;b>S;S++)if((h||S in w)&&(m=w[S],y=x(m,S,g),e))if(t)E[S]=y;else if(y)switch(e){case 3:return!0;case 5:return m;case 6:return S;case 2:c.call(E,m)}else if(p)return!1;return u?-1:l||p?p:E}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},ef14:function(e,t,n){"use strict";var o=n("6b1d"),r=n("83a6"),a=n("378c"),s=n("7f8a"),i=[].join,c=r!=Object,l=s("join",",");o({target:"Array",proto:!0,forced:c||!l},{join:function(e){return i.call(a(this),void 0===e?",":e)}})}}]);
//# sourceMappingURL=chunk-66f891a3.c6f52bdd.js.map