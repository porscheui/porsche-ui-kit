(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ec8fd65"],{"083f":function(e,t,n){var r=n("7526");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},"0e93":function(e,t){e.exports=!1},"157c":function(e,t,n){var r=n("7526");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},"185a":function(e,t,n){var r=n("d4cb"),o=n("e129"),a=n("9618"),i=n("378c"),c=n("083f"),u=n("f1a7"),f=n("7c3f"),l=Object.getOwnPropertyDescriptor;t.f=r?l:function(e,t){if(e=i(e),t=c(t,!0),f)try{return l(e,t)}catch(n){}if(u(e,t))return a(!o.f.call(e,t),e[t])}},"1d8a":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},"1f5e":function(e,t,n){var r=n("378c"),o=n("b495"),a=n("9a0f"),i=function(e){return function(t,n,i){var c,u=r(t),f=o(u.length),l=a(i,f);if(e&&n!=n){while(f>l)if(c=u[l++],c!=c)return!0}else for(;f>l;l++)if((e||l in u)&&u[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},2402:function(e,t){t.f=Object.getOwnPropertySymbols},"254e":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Typography")]),n("h2",[e._v("Headline")]),e._m(0),n("h2",[e._v("Variant")]),e._m(1),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.theme;return[n("p-headline",{attrs:{theme:r,variant:"large-title"}},[e._v("The quick brown fox jumps over the lazy dog")]),n("p-headline",{attrs:{theme:r,variant:"headline-1"}},[e._v("The quick brown fox jumps over the lazy dog")]),n("p-headline",{attrs:{theme:r,variant:"headline-2"}},[e._v("The quick brown fox jumps over the lazy dog")]),n("p-headline",{attrs:{theme:r,variant:"headline-3"}},[e._v("The quick brown fox jumps over the lazy dog")]),n("p-headline",{attrs:{theme:r,variant:"headline-4"}},[e._v("The quick brown fox jumps over the lazy dog")]),n("p-headline",{attrs:{theme:r,variant:"headline-5"}},[e._v("The quick brown fox jumps over the lazy dog")])]}}])}),n("hr"),n("h2",[e._v("Custom tag hierarchy")]),e._m(2),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.theme;return[n("p-headline",{attrs:{theme:r,variant:"headline-1",tag:"h3"}},[e._v("The quick brown fox jumps over the lazy dog")]),n("p-headline",{attrs:{theme:r,variant:"headline-3",tag:"h1"}},[e._v("The quick brown fox jumps over the lazy dog")]),n("p-headline",{attrs:{theme:r,variant:"headline-1"}},[n("h3",[e._v("The quick brown fox jumps over the lazy dog")])]),n("p-headline",{attrs:{theme:r,variant:"headline-3"}},[n("h1",[e._v("The quick brown fox jumps over the lazy dog")])])]}}])}),n("hr"),n("h2",[e._v("Color")]),n("p",[e._v("A predefined default color associated with its theme is available but also inherit mode can be used to define a custom color.")]),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[n("select",{on:{change:function(t){e.color=t.target.value}}},[n("option",{attrs:{disabled:""}},[e._v("Select a color")]),n("option",{attrs:{value:"default",selected:""}},[e._v("Default")]),n("option",{attrs:{value:"inherit"}},[e._v("Inherit")])])]},proxy:!0},{key:"default",fn:function(t){var r=t.theme;return[n("p-headline",{style:e.isInheritColor,attrs:{theme:r,variant:"headline-3",color:e.color}},[e._v("The quick brown fox jumps over the lazy dog")])]}}])}),n("hr"),n("h2",[e._v("Alignment")]),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"configurator",fn:function(){return[n("select",{on:{change:function(t){e.align=t.target.value}}},[n("option",{attrs:{disabled:""}},[e._v("Select an alignment")]),n("option",{attrs:{value:"left"}},[e._v("Left")]),n("option",{attrs:{value:"center",selected:""}},[e._v("Center")]),n("option",{attrs:{value:"right"}},[e._v("Right")])])]},proxy:!0},{key:"default",fn:function(t){var r=t.theme;return[n("p-headline",{attrs:{theme:r,variant:"headline-3",align:e.align}},[e._v("The quick brown fox jumps over the lazy dog")])]}}])}),n("hr"),n("h2",[e._v("Ellipsis mode")]),n("p",[e._v("This will force any text to never wrap into a new line and in case it's too long for a single line then dots (…) at the end are used to visualize it.")]),n("Playground",{attrs:{themeable:!0},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.theme;return[n("p-headline",{attrs:{theme:r,variant:"headline-3",ellipsis:"true"}},[e._v("Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.")])]}}])})],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Headline component")]),e._v(" for predefined headlines with automated responsive sizing to fit into all major breakpoints.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("There are multiple predefined styling variants available. Default semantic tag hierarchy equals to headline type (e.g. "),n("code",[e._v("headline-1")]),e._v(" or "),n("code",[e._v("large-title")]),e._v(" is compiled to "),n("code",[e._v("<h1>")]),e._v(" and "),n("code",[e._v("headline-3")]),e._v(" is compiled to "),n("code",[e._v("<h3>")]),e._v(").")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If a custom tag hierarchy is needed, individual headline tags can be set from "),n("code",[e._v("h1")]),e._v(" to "),n("code",[e._v("h6")]),e._v(" either by referencing the corresponding "),n("code",[e._v("tag")]),e._v(" property or setting the HTML headline tags directly as slots.")])}],a=(n("75a4"),n("276c")),i=n("e954"),c=n("920b"),u=n("92a6"),f=n("0122"),l=n("60a3"),s=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(f["a"])(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},p=function(e){Object(c["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.color="default",e.align="center",e}return Object(i["a"])(n,[{key:"isInheritColor",get:function(){return"inherit"===this.color?"color: deeppink":void 0}}]),n}(l["c"]);p=s([l["a"]],p);var d=p,h=d,v=n("2877"),b=Object(v["a"])(h,r,o,!1,null,null,null);t["default"]=b.exports},"332c":function(e,t,n){var r=n("4cdd"),o=n("1d8a"),a=r("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},"378c":function(e,t,n){var r=n("83a6"),o=n("730c");e.exports=function(e){return r(o(e))}},"3e34":function(e,t,n){var r=n("f498"),o=n("5b12");e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},"3e36":function(e,t,n){var r=n("f498");e.exports=r},"4cdd":function(e,t,n){var r=n("0e93"),o=n("c607");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},5428:function(e,t,n){var r=n("3e36"),o=n("f498"),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(r[e])||a(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},"5b12":function(e,t,n){var r=n("d4cb"),o=n("abdfa"),a=n("9618");e.exports=r?function(e,t,n){return o.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},"65d0":function(e,t,n){var r=n("c91c"),o=n("b17e"),a=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},"6a61":function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},"6b1d":function(e,t,n){var r=n("f498"),o=n("185a").f,a=n("5b12"),i=n("b8ba"),c=n("3e34"),u=n("b634"),f=n("ebac");e.exports=function(e,t){var n,l,s,p,d,h,v=e.target,b=e.global,g=e.stat;if(l=b?r:g?r[v]||c(v,{}):(r[v]||{}).prototype,l)for(s in t){if(d=t[s],e.noTargetGet?(h=o(l,s),p=h&&h.value):p=l[s],n=f(b?s:v+(g?".":"#")+s,e.forced),!n&&void 0!==p){if(typeof d===typeof p)continue;u(d,p)}(e.sham||p&&p.sham)&&a(d,"sham",!0),i(l,s,d,e)}}},7297:function(e,t,n){var r=n("f498"),o=n("df6f"),a=r.WeakMap;e.exports="function"===typeof a&&/native code/.test(o(a))},"72df":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"730c":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},7526:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"75a4":function(e,t,n){var r=n("6b1d"),o=n("72df"),a=n("378c"),i=n("185a").f,c=n("d4cb"),u=o((function(){i(1)})),f=!c||u;r({target:"Object",stat:!0,forced:f,sham:!c},{getOwnPropertyDescriptor:function(e,t){return i(a(e),t)}})},"7c3f":function(e,t,n){var r=n("d4cb"),o=n("72df"),a=n("f2bf");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},"83a6":function(e,t,n){var r=n("72df"),o=n("6a61"),a="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a.call(e,""):Object(e)}:Object},"8bb2":function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},9618:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"9a0f":function(e,t,n){var r=n("8bb2"),o=Math.max,a=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):a(n,t)}},a03e:function(e,t,n){var r=n("5428"),o=n("65d0"),a=n("2402"),i=n("157c");e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(i(e)),n=a.f;return n?t.concat(n(e)):t}},abdfa:function(e,t,n){var r=n("d4cb"),o=n("7c3f"),a=n("157c"),i=n("083f"),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(a(e),t=i(t,!0),a(n),o)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},b17e:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},b495:function(e,t,n){var r=n("8bb2"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},b634:function(e,t,n){var r=n("f1a7"),o=n("a03e"),a=n("185a"),i=n("abdfa");e.exports=function(e,t){for(var n=o(t),c=i.f,u=a.f,f=0;f<n.length;f++){var l=n[f];r(e,l)||c(e,l,u(t,l))}}},b8ba:function(e,t,n){var r=n("f498"),o=n("5b12"),a=n("f1a7"),i=n("3e34"),c=n("df6f"),u=n("cdcd"),f=u.get,l=u.enforce,s=String(String).split("String");(e.exports=function(e,t,n,c){var u=!!c&&!!c.unsafe,f=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||a(n,"name")||o(n,"name",t),l(n).source=s.join("string"==typeof t?t:"")),e!==r?(u?!p&&e[t]&&(f=!0):delete e[t],f?e[t]=n:o(e,t,n)):f?e[t]=n:i(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||c(this)}))},c607:function(e,t,n){var r=n("f498"),o=n("3e34"),a="__core-js_shared__",i=r[a]||o(a,{});e.exports=i},c91c:function(e,t,n){var r=n("f1a7"),o=n("378c"),a=n("1f5e").indexOf,i=n("d687");e.exports=function(e,t){var n,c=o(e),u=0,f=[];for(n in c)!r(i,n)&&r(c,n)&&f.push(n);while(t.length>u)r(c,n=t[u++])&&(~a(f,n)||f.push(n));return f}},cdcd:function(e,t,n){var r,o,a,i=n("7297"),c=n("f498"),u=n("7526"),f=n("5b12"),l=n("f1a7"),s=n("332c"),p=n("d687"),d=c.WeakMap,h=function(e){return a(e)?o(e):r(e,{})},v=function(e){return function(t){var n;if(!u(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(i){var b=new d,g=b.get,m=b.has,y=b.set;r=function(e,t){return y.call(b,e,t),t},o=function(e){return g.call(b,e)||{}},a=function(e){return m.call(b,e)}}else{var _=s("state");p[_]=!0,r=function(e,t){return f(e,_,t),t},o=function(e){return l(e,_)?e[_]:{}},a=function(e){return l(e,_)}}e.exports={set:r,get:o,has:a,enforce:h,getterFor:v}},d4cb:function(e,t,n){var r=n("72df");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},d687:function(e,t){e.exports={}},df6f:function(e,t,n){var r=n("c607"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},e129:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);t.f=a?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},ebac:function(e,t,n){var r=n("72df"),o=/#|\.prototype\./,a=function(e,t){var n=c[i(e)];return n==f||n!=u&&("function"==typeof t?r(t):!!t)},i=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=a.data={},u=a.NATIVE="N",f=a.POLYFILL="P";e.exports=a},f1a7:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},f2bf:function(e,t,n){var r=n("f498"),o=n("7526"),a=r.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},f498:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=chunk-1ec8fd65.e97926ce.js.map