(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d3aaa82"],{"0538":function(e,t,n){"use strict";var r=n("1c0b"),o=n("861d"),i=[].slice,a={},c=function(e,t,n){if(!(t in a)){for(var r=[],o=0;o<t;o++)r[o]="a["+o+"]";a[t]=Function("C,a","return new C("+r.join(",")+")")}return a[t](e,n)};e.exports=Function.bind||function(e){var t=r(this),n=i.call(arguments,1),a=function(){var r=n.concat(i.call(arguments));return this instanceof a?c(t,r.length,r):t.apply(e,r)};return o(t.prototype)&&(a.prototype=t.prototype),a}},"1e1d":function(e,t,n){"use strict";var r=n("b6b4"),o=n.n(r);o.a},"25f0":function(e,t,n){"use strict";var r=n("6eeb"),o=n("825a"),i=n("d039"),a=n("ad6d"),c="toString",s=RegExp.prototype,l=s[c],u=i((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),h=l.name!=c;(u||h)&&r(RegExp.prototype,c,(function(){var e=o(this),t=String(e.source),n=e.flags,r=String(void 0===n&&e instanceof RegExp&&!("flags"in s)?a.call(e):n);return"/"+t+"/"+r}),{unsafe:!0})},"276c":function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",(function(){return r}))},3410:function(e,t,n){var r=n("23e7"),o=n("d039"),i=n("7b0b"),a=n("e163"),c=n("e177"),s=o((function(){a(1)}));r({target:"Object",stat:!0,forced:s,sham:!c},{getPrototypeOf:function(e){return a(i(e))}})},"4ae1":function(e,t,n){var r=n("23e7"),o=n("d066"),i=n("1c0b"),a=n("825a"),c=n("861d"),s=n("7c73"),l=n("0538"),u=n("d039"),h=o("Reflect","construct"),p=u((function(){function e(){}return!(h((function(){}),[],e)instanceof e)})),f=!u((function(){h((function(){}))})),v=p||f;r({target:"Reflect",stat:!0,forced:v,sham:v},{construct:function(e,t){i(e),a(t);var n=arguments.length<3?e:i(arguments[2]);if(f&&!p)return h(e,t,n);if(e==n){switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3])}var r=[null];return r.push.apply(r,t),new(l.apply(e,r))}var o=n.prototype,u=s(c(o)?o:Object.prototype),v=Function.apply.call(e,u,t);return c(v)?v:u}})},"6c05":function(e,t,n){e.exports=n.p+"img/icon-custom-kaixin.bbde6f67.svg"},"920b":function(e,t,n){"use strict";function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}n.d(t,"a",(function(){return o}))},"92a6":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("4ae1"),n("3410");function r(e){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},r(e)}n("d3b7"),n("25f0");function o(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var i=n("0122");function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e,t){return!t||"object"!==Object(i["a"])(t)&&"function"!==typeof t?a(e):t}function s(e){var t=o();return function(){var n,o=r(e);if(t){var i=r(this).constructor;n=Reflect.construct(o,arguments,i)}else n=o.apply(this,arguments);return c(this,n)}}},b6b4:function(e,t,n){},ca2c:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vmark"},[r("h1",[e._v("Link Pure")]),e._m(0),r("p",[e._v("It can be used with or without a label but it's recommend to keep the label visible for better accessibility whenever possible. When used without a label it's best practice to provide a descriptive label text for screen readers.")]),r("h2",[e._v("Basic example")]),r("h3",[e._v("With label")]),r("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com",theme:n}},[e._v("Some label")])]}}])}),r("h3",[e._v("Without label")]),r("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com","hide-label":"true",theme:n}},[e._v("Some label")])]}}])}),r("h3",[e._v("Responsive")]),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com","hide-label":"{ base: true, l: false }",theme:n}},[e._v("Some label")])]}}])}),r("hr"),r("h2",[e._v("Size")]),e._m(1),e._m(2),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[r("select",{on:{change:function(t){e.size=t.target.value}}},[r("option",{attrs:{disabled:""}},[e._v("Select a style variant")]),r("option",[e._v("x-small")]),r("option",[e._v("small")]),r("option",{attrs:{selected:""}},[e._v("medium")]),r("option",[e._v("large")]),r("option",[e._v("x-large")]),r("option",[e._v("inherit")])])]},proxy:!0},{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{style:e.isInherit,attrs:{href:"https://www.porsche.com",size:e.size,theme:n}},[e._v("Some label")])]}}])}),r("h3",[e._v("Responsive")]),e._m(3),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com",size:"{ base: 'small', l: 'medium' }",theme:n}},[e._v("Some label")])]}}])}),r("hr"),r("h2",[e._v("Weight")]),e._m(4),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[r("select",{on:{change:function(t){e.weight=t.target.value}}},[r("option",{attrs:{disabled:""}},[e._v("Select a weight")]),r("option",{attrs:{selected:""}},[e._v("thin")]),r("option",[e._v("regular")]),r("option",[e._v("bold")])])]},proxy:!0},{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com",size:"medium",weight:e.weight,theme:n}},[e._v("Some label")])]}}])}),r("hr"),r("h2",[e._v("Framework routing (anchor nesting)")]),e._m(5),r("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{theme:n}},[r("a",{attrs:{href:"https://www.porsche.com"}},[e._v("Some label")])]),r("a",{staticClass:"example-link",attrs:{href:"https://www.porsche.com"}},[r("p-link-pure",{attrs:{theme:n}},[e._v("Some label")])],1)]}}])}),r("hr"),r("h2",[e._v("Active state")]),e._m(6),r("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{active:"true",href:"https://www.porsche.com",theme:n}},[e._v("Some label")])]}}])}),e._m(7),r("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{active:"true",theme:n}},[e._v("Some label")])]}}])}),r("hr"),r("h2",[e._v('Examples how to use with Framework specific router and "active state" support')]),r("h3",[e._v("Angular")]),e._m(8),e._m(9),e._m(10),r("h3",[e._v("React")]),e._m(11),e._m(12),e._m(13),e._m(14),r("h3",[e._v("VueJs")]),e._m(15),r("h2",[e._v("Link with specific icon")]),e._m(16),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com",icon:"phone",theme:o}},[e._v("Some label")]),r("br"),r("p-link-pure",{attrs:{"icon-source":n("6c05"),"hide-label":"true",theme:o,href:"https://www.porsche.com"}},[e._v("Some label")])]}}])}),r("hr"),r("h2",[e._v("Link with custom clickable/focusable area")]),r("p",[e._v("Sometimes it might be useful to enlarge the clickable/focusable area of a link to fulfill accessibility guidelines. Therefore a custom padding can be set on the host element.")]),r("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{staticStyle:{padding:"1rem"},attrs:{href:"https://www.porsche.com",theme:n}},[e._v("Some label")]),r("p-link-pure",{staticStyle:{padding:"1rem"},attrs:{href:"https://www.porsche.com",theme:n,"hide-label":"true"}},[e._v("Some label")]),r("a",{staticClass:"example-link",attrs:{href:"https://www.porsche.com"}},[r("p-link-pure",{staticStyle:{padding:"1rem"},attrs:{theme:n}},[e._v("Some label")])],1),r("a",{staticClass:"example-link",attrs:{href:"https://www.porsche.com"}},[r("p-link-pure",{staticStyle:{padding:"1rem"},attrs:{theme:n,"hide-label":"true"}},[e._v("Some label")])],1)]}}])}),r("hr"),r("h2",[e._v("Bind events to the link")]),e._m(17),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com",onclick:"alert('click'); return false;",onfocus:"console.log('focus')",onfocusin:"console.log('focusin')",onblur:"console.log('blur')",onfocusout:"console.log('focusout')",theme:n}},[e._v("Some label")])]}}])}),r("hr"),r("h2",[e._v("Link Pure with Subline")]),e._m(18),e._m(19),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[r("select",{on:{change:function(t){e.size=t.target.value}}},[r("option",{attrs:{disabled:""}},[e._v("Select a size")]),r("option",{attrs:{selected:""}},[e._v("small")]),r("option",[e._v("medium")]),r("option",[e._v("large")]),r("option",[e._v("x-large")])])]},proxy:!0},{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{size:e.size,theme:n,href:"https://www.porsche.com"}},[e._v(" Some label "),r("p",{attrs:{slot:"subline"},slot:"subline"},[e._v("Some Subline")])]),r("p-link-pure",{attrs:{size:e.size,weight:"semibold",theme:n}},[r("a",{attrs:{href:"https://www.porsche.com"}},[e._v(" Some label ")]),r("p",{attrs:{slot:"subline"},slot:"subline"},[e._v("Some Subline")])])]}}])})],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("code",[e._v("<p-link-pure>")]),e._v(" component is essential for performing changes in page routes.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("There are predefined text sizes for the component which should cover most use cases. If a specific text size is needed, the size can be set to "),n("code",[e._v("inherit")]),e._v(" to specify the text size from outside.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Hint:")]),e._v(" If you are in "),n("code",[e._v("hideLabel")]),e._v("-mode, be aware that the box-size of the rendered element will not be the same as the given (font-size) pixel value, e.g. setting a font-size of "),n("strong",[e._v('"44px"')]),e._v(" will not generate a box with a "),n("strong",[e._v('"44px"')]),e._v(" width/height but instead a box size generated out of Porsche type-scaling formula which will end in "),n("strong",[e._v('"52px"')]),e._v(" width/height.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(", "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("There are predefined default text weights. Be aware of using the "),n("code",[e._v("thin")]),e._v(" variant only with larger text sizes.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("To support custom anchor tags (e.g. framework specific routing) you can provide them as a "),n("strong",[e._v("slotted element")]),e._v(" (recommended) of the component or as a wrapper element. If using the latter, take care of the correct styling of the rendered router "),n("code",[e._v("<a>")]),e._v(" tag like in the example below (in most cases "),n("code",[e._v("outline")]),e._v(" and "),n("code",[e._v("text-decoration")]),e._v(" must be set to "),n("code",[e._v("none")]),e._v(").")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Providing visually differences if a link changes its state can be achieved by setting the "),n("code",[e._v("active")]),e._v(" property.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If the active state should not render a clickable anchor tag, just remove the "),n("code",[e._v("href")]),e._v(" property.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('# template.html\n<p-link-pure [active]="rla.isActive">\n  <a routerLink="/path/to/heaven" routerLinkActive #rla="routerLinkActive"></a>\n</p-link-pure>\n\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you wrap it with an "),n("code",[e._v("<a>")]),e._v(", it's important to reset "),n("code",[e._v("text-decoration")]),e._v(" and "),n("code",[e._v("outline")]),e._v(", since the inner component has no control over the elements that are around it.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('# style.css\n.link {\n  text-decoration:none;\n  outline: none;\n}\n\n# template.html\n<a routerLink="/path/to/heaven" routerLinkActive #rla="routerLinkActive" class="link">\n  <p-link-pure [active]="rla.isActive">Some label</p-link-pure>\n</a>\n\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Use the spread operator to call props of "),n("strong",[e._v("PLinkPure")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('# Component.tsx\n<PLinkPure {...{active: true}}>\n  <Link to="/path/to/heaven">Some label</Link>\n</PLinkPure>\n\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you wrap it with the "),n("code",[e._v("<Link>")]),e._v(" component of React Router, it's important to reset "),n("code",[e._v("text-decoration")]),e._v(" and "),n("code",[e._v("outline")]),e._v(", since the inner component has no control over the elements that are around it.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('# Style.css\n.link {\n  text-decoration:none;\n  outline: none;\n}\n\n# Component.tsx\n<Link to="/path/to/heaven" className={"link"}>\n  <PLinkPure {...{active: true}}>Some label</PLinkPure>\n</Link>\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('<router-link :to="/path/to/heaven" v-slot="{ href, navigate, isActive }">\n  <p-link-pure :href="href" @click="navigate" :active="isActive">Some label</p-link-pure>\n</router-link>\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If another icon needs to be implemented, just replace the default icon with another predefined icon. Per default, all icons are fetched from the Porsche Design System CDN. Just choose an icon name from the "),n("code",[e._v("icon")]),e._v(" property. If you need to link to another icon hosted somewhere else, just set the whole icon path to the "),n("code",[e._v("iconSource")]),e._v(" prop.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You can use native "),n("code",[e._v("click")]),e._v(", "),n("code",[e._v("focus")]),e._v(", "),n("code",[e._v("focusin")]),e._v(", "),n("code",[e._v("blur")]),e._v(" and "),n("code",[e._v("focusout")]),e._v(" events on the link.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you need additional information on your link, we provide a "),n("code",[e._v('<p slot="subline" />')]),e._v(". The size of the "),n("em",[e._v("subline")]),e._v(" changes according to the size of the "),n("em",[e._v("label")]),e._v(". We do not support "),n("code",[e._v('size="inherit"')]),e._v(" in this pattern so far.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Note")]),e._v(" If you intend to use a "),n("code",[e._v("<a>")]),e._v(" tag inside of the "),n("code",[e._v("<p-link-pure")]),e._v(" component, keep in mind that the slot needs to be "),n("em",[e._v("outside")]),e._v(" of the anchor tag to function properly!")])}],i=n("276c"),a=n("e954"),c=n("920b"),s=n("92a6"),l=n("0f9e"),u=n("60a3"),h=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.size="medium",e.weight="thin",e}return Object(a["a"])(n,[{key:"isInherit",get:function(){return"inherit"===this.size?"font-size: 48px;":void 0}}]),n}(u["c"]);h=Object(l["b"])([u["a"]],h);var p=h,f=p,v=(n("1e1d"),n("2877")),_=Object(v["a"])(f,r,o,!1,null,"fee60d60",null);t["default"]=_.exports},e954:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}n.d(t,"a",(function(){return o}))}}]);
//# sourceMappingURL=chunk-1d3aaa82.3c412d7f.js.map