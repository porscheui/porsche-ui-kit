(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63372704"],{"083f":function(e,t,n){var r=n("7526");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},"0e93":function(e,t){e.exports=!1},"157c":function(e,t,n){var r=n("7526");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},"185a":function(e,t,n){var r=n("d4cb"),o=n("e129"),i=n("9618"),a=n("378c"),c=n("083f"),s=n("f1a7"),u=n("7c3f"),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=a(e),t=c(t,!0),u)try{return l(e,t)}catch(n){}if(s(e,t))return i(!o.f.call(e,t),e[t])}},"1d8a":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},"1f5e":function(e,t,n){var r=n("378c"),o=n("b495"),i=n("9a0f"),a=function(e){return function(t,n,a){var c,s=r(t),u=o(s.length),l=i(a,u);if(e&&n!=n){while(u>l)if(c=s[l++],c!=c)return!0}else for(;u>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},2402:function(e,t){t.f=Object.getOwnPropertySymbols},"332c":function(e,t,n){var r=n("4cdd"),o=n("1d8a"),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},"378c":function(e,t,n){var r=n("83a6"),o=n("730c");e.exports=function(e){return r(o(e))}},"3e34":function(e,t,n){var r=n("f498"),o=n("5b12");e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},"3e36":function(e,t,n){var r=n("f498");e.exports=r},"4cdd":function(e,t,n){var r=n("0e93"),o=n("c607");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},5428:function(e,t,n){var r=n("3e36"),o=n("f498"),i=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?i(r[e])||i(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},"542e":function(e,t,n){"use strict";var r=n("cc46"),o=n.n(r);o.a},"5b12":function(e,t,n){var r=n("d4cb"),o=n("abdfa"),i=n("9618");e.exports=r?function(e,t,n){return o.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},"65d0":function(e,t,n){var r=n("c91c"),o=n("b17e"),i=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,i)}},"6a61":function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},"6b1d":function(e,t,n){var r=n("f498"),o=n("185a").f,i=n("5b12"),a=n("b8ba"),c=n("3e34"),s=n("b634"),u=n("ebac");e.exports=function(e,t){var n,l,f,p,h,v,d=e.target,m=e.global,_=e.stat;if(l=m?r:_?r[d]||c(d,{}):(r[d]||{}).prototype,l)for(f in t){if(h=t[f],e.noTargetGet?(v=o(l,f),p=v&&v.value):p=l[f],n=u(m?f:d+(_?".":"#")+f,e.forced),!n&&void 0!==p){if(typeof h===typeof p)continue;s(h,p)}(e.sham||p&&p.sham)&&i(h,"sham",!0),a(l,f,h,e)}}},"6c05":function(e,t,n){e.exports=n.p+"img/icon-custom-kaixin.bbde6f67.svg"},7297:function(e,t,n){var r=n("f498"),o=n("df6f"),i=r.WeakMap;e.exports="function"===typeof i&&/native code/.test(o(i))},"72df":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"730c":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},7526:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"75a4":function(e,t,n){var r=n("6b1d"),o=n("72df"),i=n("378c"),a=n("185a").f,c=n("d4cb"),s=o((function(){a(1)})),u=!c||s;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(e,t){return a(i(e),t)}})},"7c3f":function(e,t,n){var r=n("d4cb"),o=n("72df"),i=n("f2bf");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"83a6":function(e,t,n){var r=n("72df"),o=n("6a61"),i="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?i.call(e,""):Object(e)}:Object},"8bb2":function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},9618:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"9a0f":function(e,t,n){var r=n("8bb2"),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},a03e:function(e,t,n){var r=n("5428"),o=n("65d0"),i=n("2402"),a=n("157c");e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=i.f;return n?t.concat(n(e)):t}},abdfa:function(e,t,n){var r=n("d4cb"),o=n("7c3f"),i=n("157c"),a=n("083f"),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(i(e),t=a(t,!0),i(n),o)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},b17e:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},b495:function(e,t,n){var r=n("8bb2"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},b634:function(e,t,n){var r=n("f1a7"),o=n("a03e"),i=n("185a"),a=n("abdfa");e.exports=function(e,t){for(var n=o(t),c=a.f,s=i.f,u=0;u<n.length;u++){var l=n[u];r(e,l)||c(e,l,s(t,l))}}},b8ba:function(e,t,n){var r=n("f498"),o=n("5b12"),i=n("f1a7"),a=n("3e34"),c=n("df6f"),s=n("cdcd"),u=s.get,l=s.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var s=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||i(n,"name")||o(n,"name",t),l(n).source=f.join("string"==typeof t?t:"")),e!==r?(s?!p&&e[t]&&(u=!0):delete e[t],u?e[t]=n:o(e,t,n)):u?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},c607:function(e,t,n){var r=n("f498"),o=n("3e34"),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},c91c:function(e,t,n){var r=n("f1a7"),o=n("378c"),i=n("1f5e").indexOf,a=n("d687");e.exports=function(e,t){var n,c=o(e),s=0,u=[];for(n in c)!r(a,n)&&r(c,n)&&u.push(n);while(t.length>s)r(c,n=t[s++])&&(~i(u,n)||u.push(n));return u}},ca2c:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vmark"},[r("h1",[e._v("Link Pure")]),e._m(0),r("p",[e._v("It can be used with or without a label but it's recommend to keep the label visible for better accessibility whenever possible. When used without a label it's best practice to provide a descriptive label text for screen readers.")]),r("h2",[e._v("Basic example")]),r("h3",[e._v("With label")]),r("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com",theme:n}},[e._v("Some label")])]}}])}),r("h3",[e._v("Without label")]),r("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com","hide-label":"true",theme:n}},[e._v("Some label")])]}}])}),r("h3",[e._v("Responsive")]),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com","hide-label":"{ base: true, l: false }",theme:n}},[e._v("Some label")])]}}])}),r("hr"),r("h2",[e._v("Size")]),e._m(1),e._m(2),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[r("select",{on:{change:function(t){e.size=t.target.value}}},[r("option",{attrs:{disabled:""}},[e._v("Select a style variant")]),r("option",[e._v("x-small")]),r("option",[e._v("small")]),r("option",{attrs:{selected:""}},[e._v("medium")]),r("option",[e._v("large")]),r("option",[e._v("x-large")]),r("option",[e._v("inherit")])])]},proxy:!0},{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{style:e.isInherit,attrs:{href:"https://www.porsche.com",size:e.size,theme:n}},[e._v("Some label")])]}}])}),r("h3",[e._v("Responsive")]),e._m(3),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com",size:"{ base: 'small', l: 'medium' }",theme:n}},[e._v("Some label")])]}}])}),r("hr"),r("h2",[e._v("Weight")]),e._m(4),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[r("select",{on:{change:function(t){e.weight=t.target.value}}},[r("option",{attrs:{disabled:""}},[e._v("Select a weight")]),r("option",{attrs:{selected:""}},[e._v("thin")]),r("option",[e._v("regular")]),r("option",[e._v("bold")])])]},proxy:!0},{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com",size:"medium",weight:e.weight,theme:n}},[e._v("Some label")])]}}])}),r("hr"),r("h2",[e._v("Framework routing (anchor nesting)")]),e._m(5),r("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{theme:n}},[r("a",{attrs:{href:"https://www.porsche.com"}},[e._v("Some label")])])]}}])}),r("hr"),r("h2",[e._v("Active state")]),e._m(6),r("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{active:"true",href:"https://www.porsche.com",theme:n}},[e._v("Some label")])]}}])}),e._m(7),r("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{active:"true",theme:n}},[e._v("Some label")])]}}])}),r("hr"),r("h2",[e._v('Examples how to use with Framework specific router and "active state" support')]),r("h3",[e._v("Angular")]),e._m(8),r("h3",[e._v("React")]),e._m(9),e._m(10),r("h3",[e._v("VueJs")]),e._m(11),r("h2",[e._v("Link with specific icon")]),e._m(12),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var o=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com",icon:"phone",theme:o}},[e._v("Some label")]),r("br"),r("p-link-pure",{attrs:{"icon-source":n("6c05"),"hide-label":"true",theme:o,href:"https://www.porsche.com"}},[e._v("Some label")])]}}])}),r("hr"),r("h2",[e._v("Link with custom clickable/focusable area")]),r("p",[e._v("Sometimes it might be useful to enlarge the clickable/focusable area of a link to fulfill accessibility guidelines. Therefore a custom padding can be set on the host element.")]),r("Playground",{attrs:{themeable:!0,childElementLayout:{spacing:"inline"}},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{staticStyle:{padding:"1rem"},attrs:{href:"https://www.porsche.com",theme:n}},[e._v("Some label")]),r("p-link-pure",{staticStyle:{padding:"1rem"},attrs:{href:"https://www.porsche.com",theme:n,"hide-label":"true"}},[e._v("Some label")]),r("a",{staticClass:"example-link",attrs:{href:"https://www.porsche.com"}},[r("p-link-pure",{staticStyle:{padding:"1rem"},attrs:{theme:n}},[e._v("Some label")])],1),r("a",{staticClass:"example-link",attrs:{href:"https://www.porsche.com"}},[r("p-link-pure",{staticStyle:{padding:"1rem"},attrs:{theme:n,"hide-label":"true"}},[e._v("Some label")])],1)]}}])}),r("hr"),r("h2",[e._v("Bind events to the link")]),e._m(13),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{href:"https://www.porsche.com",onclick:"alert('click'); return false;",onfocus:"console.log('focus')",onfocusin:"console.log('focusin')",onblur:"console.log('blur')",onfocusout:"console.log('focusout')",theme:n}},[e._v("Some label")])]}}])}),r("hr"),r("h2",[e._v("Link Pure with Subline")]),e._m(14),e._m(15),r("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[r("select",{on:{change:function(t){e.size=t.target.value}}},[r("option",{attrs:{disabled:""}},[e._v("Select a size")]),r("option",{attrs:{selected:""}},[e._v("small")]),r("option",[e._v("medium")]),r("option",[e._v("large")]),r("option",[e._v("x-large")])])]},proxy:!0},{key:"default",fn:function(t){var n=t.theme;return[r("p-link-pure",{attrs:{size:e.size,theme:n,href:"https://www.porsche.com"}},[e._v(" Some label "),r("p",{attrs:{slot:"subline"},slot:"subline"},[e._v("Some Subline")])]),r("p-link-pure",{attrs:{size:e.size,weight:"semibold",theme:n}},[r("a",{attrs:{href:"https://www.porsche.com"}},[e._v(" Some label ")]),r("p",{attrs:{slot:"subline"},slot:"subline"},[e._v("Some Subline")])])]}}])})],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("code",[e._v("<p-link-pure>")]),e._v(" component is essential for performing changes in page routes.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("There are predefined text sizes for the component which should cover most use cases. If a specific text size is needed, the size can be set to "),n("code",[e._v("inherit")]),e._v(" to specify the text size from outside.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Hint:")]),e._v(" If you are in "),n("code",[e._v("hideLabel")]),e._v("-mode, be aware that the box-size of the rendered element will not be the same as the given (font-size) pixel value, e.g. setting a font-size of "),n("strong",[e._v('"44px"')]),e._v(" will not generate a box with a "),n("strong",[e._v('"44px"')]),e._v(" width/height but instead a box size generated out of Porsche type-scaling formula which will end in "),n("strong",[e._v('"52px"')]),e._v(" width/height.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(", "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("There are predefined default text weights. Be aware of using the "),n("code",[e._v("thin")]),e._v(" variant only with larger text sizes.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("To support custom anchor tags (e.g. framework specific routing) you can provide them as a "),n("strong",[e._v("slotted element")]),e._v(" (recommended) of the component.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Providing visually differences if a link changes its state can be achieved by setting the "),n("code",[e._v("active")]),e._v(" property.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If the active state should not render a clickable anchor tag, just remove the "),n("code",[e._v("href")]),e._v(" property.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('# template.html\n<p-link-pure [active]="rla.isActive">\n  <a routerLink="/path/to/heaven" routerLinkActive #rla="routerLinkActive"></a>\n</p-link-pure>\n\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Use the spread operator to call props of "),n("strong",[e._v("PLinkPure")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('# Component.tsx\n<PLinkPure {...{active: true}}>\n  <Link to="/path/to/heaven">Some label</Link>\n</PLinkPure>\n\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('<router-link :to="/path/to/heaven" v-slot="{ href, navigate, isActive }">\n  <p-link-pure :href="href" @click="navigate" :active="isActive">Some label</p-link-pure>\n</router-link>\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If another icon needs to be implemented, just replace the default icon with another predefined icon. Per default, all icons are fetched from the Porsche Design System CDN. Just choose an icon name from the "),n("code",[e._v("icon")]),e._v(" property. If you need to link to another icon hosted somewhere else, just set the whole icon path to the "),n("code",[e._v("iconSource")]),e._v(" prop.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You can use native "),n("code",[e._v("click")]),e._v(", "),n("code",[e._v("focus")]),e._v(", "),n("code",[e._v("focusin")]),e._v(", "),n("code",[e._v("blur")]),e._v(" and "),n("code",[e._v("focusout")]),e._v(" events on the link.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If you need additional information on your link, we provide a "),n("code",[e._v('<p slot="subline" />')]),e._v(". The size of the "),n("em",[e._v("subline")]),e._v(" changes according to the size of the "),n("em",[e._v("label")]),e._v(". We do not support "),n("code",[e._v('size="inherit"')]),e._v(" in this pattern so far.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Note")]),e._v(" If you intend to use a "),n("code",[e._v("<a>")]),e._v(" tag inside of the "),n("code",[e._v("<p-link-pure")]),e._v(" component, keep in mind that the slot needs to be "),n("em",[e._v("outside")]),e._v(" of the anchor tag to function properly!")])}],i=(n("75a4"),n("276c")),a=n("e954"),c=n("920b"),s=n("92a6"),u=n("0122"),l=n("60a3"),f=function(e,t,n,r){var o,i=arguments.length,a=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(u["a"])(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},p=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=t.apply(this,arguments),e.size="medium",e.weight="thin",e}return Object(a["a"])(n,[{key:"isInherit",get:function(){return"inherit"===this.size?"font-size: 48px;":void 0}}]),n}(l["c"]);p=f([l["a"]],p);var h=p,v=h,d=(n("542e"),n("2877")),m=Object(d["a"])(v,r,o,!1,null,"7b00212b",null);t["default"]=m.exports},cc46:function(e,t,n){},cdcd:function(e,t,n){var r,o,i,a=n("7297"),c=n("f498"),s=n("7526"),u=n("5b12"),l=n("f1a7"),f=n("332c"),p=n("d687"),h=c.WeakMap,v=function(e){return i(e)?o(e):r(e,{})},d=function(e){return function(t){var n;if(!s(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(a){var m=new h,_=m.get,b=m.has,g=m.set;r=function(e,t){return g.call(m,e,t),t},o=function(e){return _.call(m,e)||{}},i=function(e){return b.call(m,e)}}else{var y=f("state");p[y]=!0,r=function(e,t){return u(e,y,t),t},o=function(e){return l(e,y)?e[y]:{}},i=function(e){return l(e,y)}}e.exports={set:r,get:o,has:i,enforce:v,getterFor:d}},d4cb:function(e,t,n){var r=n("72df");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},d687:function(e,t){e.exports={}},df6f:function(e,t,n){var r=n("c607"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},e129:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);t.f=i?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},ebac:function(e,t,n){var r=n("72df"),o=/#|\.prototype\./,i=function(e,t){var n=c[a(e)];return n==u||n!=s&&("function"==typeof t?r(t):!!t)},a=i.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=i.data={},s=i.NATIVE="N",u=i.POLYFILL="P";e.exports=i},f1a7:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},f2bf:function(e,t,n){var r=n("f498"),o=n("7526"),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},f498:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-63372704.dd034ae6.js.map