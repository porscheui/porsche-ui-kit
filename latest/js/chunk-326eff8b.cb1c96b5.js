(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-326eff8b","chunk-41953f2c"],{"0538":function(e,t,n){"use strict";var o=n("1c0b"),r=n("861d"),a=[].slice,i={},s=function(e,t,n){if(!(t in i)){for(var o=[],r=0;r<t;r++)o[r]="a["+r+"]";i[t]=Function("C,a","return new C("+o.join(",")+")")}return i[t](e,n)};e.exports=Function.bind||function(e){var t=o(this),n=a.call(arguments,1),i=function(){var o=n.concat(a.call(arguments));return this instanceof i?s(t,o.length,o):t.apply(e,o)};return r(t.prototype)&&(i.prototype=t.prototype),i}},"25f0":function(e,t,n){"use strict";var o=n("6eeb"),r=n("825a"),a=n("d039"),i=n("ad6d"),s="toString",c=RegExp.prototype,u=c[s],l=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),p=u.name!=s;(l||p)&&o(RegExp.prototype,s,(function(){var e=r(this),t=String(e.source),n=e.flags,o=String(void 0===n&&e instanceof RegExp&&!("flags"in c)?i.call(e):n);return"/"+t+"/"+o}),{unsafe:!0})},"276c":function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return o}))},3410:function(e,t,n){var o=n("23e7"),r=n("d039"),a=n("7b0b"),i=n("e163"),s=n("e177"),c=r((function(){i(1)}));o({target:"Object",stat:!0,forced:c,sham:!s},{getPrototypeOf:function(e){return i(a(e))}})},"4ae1":function(e,t,n){var o=n("23e7"),r=n("d066"),a=n("1c0b"),i=n("825a"),s=n("861d"),c=n("7c73"),u=n("0538"),l=n("d039"),p=r("Reflect","construct"),f=l((function(){function e(){}return!(p((function(){}),[],e)instanceof e)})),h=!l((function(){p((function(){}))})),d=f||h;o({target:"Reflect",stat:!0,forced:d,sham:d},{construct:function(e,t){a(e),i(t);var n=arguments.length<3?e:a(arguments[2]);if(h&&!f)return p(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var o=[null];return o.push.apply(o,t),new(u.apply(e,o))}var r=n.prototype,l=c(s(r)?r:Object.prototype),d=Function.apply.call(e,l,t);return s(d)?d:l}})},"56ef1":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Flash Of Unstyled Content")]),n("p",[e._v("Unstyled content when opening an application or website creates a bad first impression. To prevent this, the Porsche Design System offers various solutions to ensure all necessary Porsche Design System fonts and components are fully loaded.")]),n("p",[e._v("On this page you find detailed instructions on how to prevent Flash of Unstyled Content and Flash of Unstyled Text where we provide options to boost your application, so make sure to keep reading.")]),n("h2",[e._v("Unstyled Porsche Design System Components")]),e._m(0),e._m(1),e._m(2),n("h3",[e._v("Example usage with template")]),e._m(3),n("h3",[e._v("Example usage static")]),e._m(4),n("pre",[n("code",[e._v("// index.html\n\n<head>\n  "+e._s(e.coreStyles)+"\n</head>\n")])]),n("h2",[e._v("Flash of Unstyled Text")]),n("p",[e._v("The Porsche Design System provides font face definitions and loads all needed fonts dynamically from our CDN. Until the fonts are fully loaded the components use the fallback font and you can see a little change as soon as loading is finished.")]),n("h3",[e._v("Inject Porsche Design System Stylesheet")]),n("p",[e._v("So far, if you use the Porsche Design System components we inject the stylesheet with all font face definitions into the head of your application as soon as our core is loaded. We recommend that you load the stylesheet on your own. We don't want to interfere with you application if we don't have to. Also you got more control over resources that are loaded.")]),e._m(5),e._m(6),n("h4",[e._v("Example")]),n("pre",[n("code",[e._v("// index.html\n// Using template syntax\n<head>\n  <%= require('@porsche-design-system/partials').getFontFaceCSS() %>\n</head>\n\n// Static solution\n// If you use the static solution watch your console output. We notify if changes happen.\n<head>\n  "+e._s(e.fontFaceCSS)+"\n</head>\n")])]),n("h3",[e._v("Preload specific Fonts")]),n("p",[e._v("Fonts should be loaded as soon as possible but only those which are needed. The Porsche Design System is not able to determine which components you use on the site and which fonts we have to provide initially but we export all resources you need to preload fonts and solve 'Flash of Unstyled Text' in your application")]),e._m(7),n("h4",[e._v("Example preload")]),e._m(8)])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you use "),n("code",[e._v("Porsche Design System")]),e._v(" components, we take care that your application only renders a component if it is fully styled. But there is a blink until our core is loaded and we can take action. This short timespan has to be covered.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("There are two ways to get rid of FOUC. We provide partials in our "),n("code",[e._v("@porsche-design-system/partials")]),e._v(" package for you to import into the "),n("code",[e._v("<head>")]),e._v(" of your "),n("code",[e._v("index.html")]),e._v(". The example shows how to implement a partial in a webpack project.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you are not able to use partials use the second, static solution. Just copy the whole "),n("code",[e._v("<style>")]),e._v(" tag from the second example and put it into the "),n("code",[e._v("<head>")]),e._v(" of the "),n("code",[e._v("index.html")]),e._v(" of your application. While using the static solution, make sure to list every component you use and update the list when you upgrade the version of the "),n("code",[e._v("Porsche Design Sytem")]),e._v(" with new components introduced.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("// index.html\n\n<head>\n  <%= require('@porsche-design-system/partials').getPorscheDesignSystemCoreStyles() %>\n</head>\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Note:")]),e._v(" If you implement this static solution you have to keep track of the list and add every new component you use.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("We provide the URL to our stylesheet in our "),n("code",[e._v("@porsche-design-system/assets")]),e._v(" package with the name "),n("code",[e._v("FONT_FACE_CDN_URL")]),e._v(". We also provide a ready to use partial in the "),n("code",[e._v("@porsche-design-system/partials")]),e._v(" package called "),n("code",[e._v("getFontFaceCSS()")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you use the static solution you have to update the "),n("code",[e._v("<Link>")]),e._v(" if changes are made in our font face definitions. But don't worry, we don't remove old files to grant you a valid fallback.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("We provide all URL´s you need in the "),n("code",[e._v("@porsche-design-system/assets")]),e._v(" package. Use the const "),n("code",[e._v("FONTS_CDN_BASE_URL")]),e._v(" which is the basic path to the CDN and the object "),n("code",[e._v("FONTS_MANIFEST")]),e._v(" which contains the filenames of all "),n("code",[e._v("fonts")]),e._v(" and according "),n("code",[e._v("weights")]),e._v(" in either "),n("code",[e._v("woff")]),e._v(" or "),n("code",[e._v("woff2")]),e._v(" file format. Combine the path and filename to preload them as "),n("code",[e._v("href")]),e._v(" in a "),n("code",[e._v("<Link>")]),e._v(" at the head of your "),n("code",[e._v("index.html")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('<head>\n <link\n   rel="preload"\n   href="path/to/webfont/nameOfWebFontFile"\n   as="font"\n   type="font/woff2"\n   crossorigin\n />\n</head>\n')])])}],a=(n("ac1f"),n("5319"),n("276c")),i=n("920b"),s=n("92a6"),c=n("9ab4"),u=n("60a3"),l=(n("ef14"),"https://cdn.ui.porsche.com/porsche-design-system/style/font-face.min.677d41d9905a04aadcb253f71e5f71e9.css"),p=["p-button","p-button-pure","p-checkbox-wrapper","p-content-wrapper","p-divider","p-fieldset-wrapper","p-flex","p-flex-item","p-grid","p-grid-item","p-headline","p-icon","p-link","p-link-pure","p-link-social","p-marque","p-pagination","p-radio-button-wrapper","p-select-wrapper","p-spinner","p-text","p-text-field-wrapper","p-text-list","p-text-list-item","p-textarea-wrapper"],f=function(e){return(null===e||void 0===e?void 0:e.withoutTags)?l:'<link rel="stylesheet" href="'+l+'">'},h=function(e){var t=p.join(",")+" { visibility: hidden }";return(null===e||void 0===e?void 0:e.withoutTags)?t:"<style>"+t+"</style>"},d=function(e){Object(i["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.fontFaceCSS=f(),e.coreStyles=h().replace(">",">\n    ").replace(/,/g,",\n    ").replace("}","}\n  "),e}return n}(u["c"]);d=Object(c["a"])([u["a"]],d);var v=d,y=v,_=n("2877"),m=Object(_["a"])(y,o,r,!1,null,null,null);t["default"]=m.exports},"920b":function(e,t,n){"use strict";function o(e,t){return o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},o(e,t)}function r(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}n.d(t,"a",(function(){return r}))},"92a6":function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));n("4ae1"),n("3410");function o(e){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},o(e)}n("d3b7"),n("25f0");function r(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var a=n("0122");function i(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e,t){return!t||"object"!==Object(a["a"])(t)&&"function"!==typeof t?i(e):t}function c(e){var t=r();return function(){var n,r=o(e);if(t){var a=o(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return s(this,n)}}},"9ab4":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));function o(e,t,n,o){var r,a=arguments.length,i=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(a<3?r(i):a>3?r(t,n,i):r(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i}},ef14:function(e,t,n){"use strict";var o=n("6b1d"),r=n("83a6"),a=n("378c"),i=n("7f8a"),s=[].join,c=r!=Object,u=i("join",",");o({target:"Array",proto:!0,forced:c||!u},{join:function(e){return s.call(a(this),void 0===e?",":e)}})}}]);
//# sourceMappingURL=chunk-326eff8b.cb1c96b5.js.map