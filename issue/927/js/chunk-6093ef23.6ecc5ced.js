(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6093ef23"],{"04e5":function(e,t,n){},"083f":function(e,t,n){var r=n("7526");e.exports=function(e,t){if(!r(e))return e;var n,a;if(t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;if("function"==typeof(n=e.valueOf)&&!r(a=n.call(e)))return a;if(!t&&"function"==typeof(n=e.toString)&&!r(a=n.call(e)))return a;throw TypeError("Can't convert object to primitive value")}},"0e93":function(e,t){e.exports=!1},"157c":function(e,t,n){var r=n("7526");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},"185a":function(e,t,n){var r=n("d4cb"),a=n("e129"),o=n("9618"),i=n("378c"),s=n("083f"),c=n("f1a7"),l=n("7c3f"),u=Object.getOwnPropertyDescriptor;t.f=r?u:function(e,t){if(e=i(e),t=s(t,!0),l)try{return u(e,t)}catch(n){}if(c(e,t))return o(!a.f.call(e,t),e[t])}},"189b":function(e,t,n){var r=n("72df"),a=n("7d53"),o=n("4fed"),i=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"1b6c":function(e,t,n){e.exports=n.p+"img/typography-uppercase.da1cae6f.png"},"1d8a":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},"1f5e":function(e,t,n){var r=n("378c"),a=n("b495"),o=n("9a0f"),i=function(e){return function(t,n,i){var s,c=r(t),l=a(c.length),u=o(i,l);if(e&&n!=n){while(l>u)if(s=c[u++],s!=s)return!0}else for(;l>u;u++)if((e||u in c)&&c[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},2402:function(e,t){t.f=Object.getOwnPropertySymbols},"2aa5":function(e,t,n){"use strict";var r=n("6b1d"),a=n("42c5");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},"2e89":function(e,t,n){e.exports=n.p+"img/typography-donts.bd7f4092.png"},"2f6a":function(e,t,n){"use strict";var r=n("72df");function a(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=a("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=a("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},"332c":function(e,t,n){var r=n("4cdd"),a=n("1d8a"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=a(e))}},"33ef":function(e,t,n){"use strict";var r=n("6b1d"),a=n("7526"),o=n("c6de"),i=n("9a0f"),s=n("b495"),c=n("378c"),l=n("dac6"),u=n("7d53"),p=n("189b"),f=n("ce71"),h=p("slice"),d=f("slice",{ACCESSORS:!0,0:0,1:2}),v=u("species"),g=[].slice,y=Math.max;r({target:"Array",proto:!0,forced:!h||!d},{slice:function(e,t){var n,r,u,p=c(this),f=s(p.length),h=i(e,f),d=i(void 0===t?f:t,f);if(o(p)&&(n=p.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?a(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(p,h,d);for(r=new(void 0===n?Array:n)(y(d-h,0)),u=0;h<d;h++,u++)h in p&&l(r,u,p[h]);return r.length=u,r}})},"378c":function(e,t,n){var r=n("83a6"),a=n("730c");e.exports=function(e){return r(a(e))}},"3e34":function(e,t,n){var r=n("f498"),a=n("5b12");e.exports=function(e,t){try{a(r,e,t)}catch(n){r[e]=t}return t}},"3e36":function(e,t,n){var r=n("f498");e.exports=r},"42c5":function(e,t,n){"use strict";var r=n("abfd"),a=n("2f6a"),o=RegExp.prototype.exec,i=String.prototype.replace,s=o,c=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],p=c||u||l;p&&(s=function(e){var t,n,a,s,p=this,f=l&&p.sticky,h=r.call(p),d=p.source,v=0,g=e;return f&&(h=h.replace("y",""),-1===h.indexOf("g")&&(h+="g"),g=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(d="(?: "+d+")",g=" "+g,v++),n=new RegExp("^(?:"+d+")",h)),u&&(n=new RegExp("^"+d+"$(?!\\s)",h)),c&&(t=p.lastIndex),a=o.call(f?n:p,g),f?a?(a.input=a.input.slice(v),a[0]=a[0].slice(v),a.index=p.lastIndex,p.lastIndex+=a[0].length):p.lastIndex=0:c&&a&&(p.lastIndex=p.global?a.index+a[0].length:t),u&&a&&a.length>1&&i.call(a[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)})),a}),e.exports=s},"4cdd":function(e,t,n){var r=n("0e93"),a=n("c607");(e.exports=function(e,t){return a[e]||(a[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"4db4":function(e,t,n){var r=n("e7a0");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},"4fed":function(e,t,n){var r,a,o=n("f498"),i=n("64e4"),s=o.process,c=s&&s.versions,l=c&&c.v8;l?(r=l.split("."),a=r[0]+r[1]):i&&(r=i.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/),r&&(a=r[1]))),e.exports=a&&+a},5428:function(e,t,n){var r=n("3e36"),a=n("f498"),o=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e])||o(a[e]):r[e]&&r[e][t]||a[e]&&a[e][t]}},"58d3":function(e,t,n){"use strict";var r=n("95b2"),a=n("157c"),o=n("b495"),i=n("730c"),s=n("e3f6"),c=n("df8c");r("match",1,(function(e,t,n){return[function(t){var n=i(this),r=void 0==t?void 0:t[e];return void 0!==r?r.call(t,n):new RegExp(t)[e](String(n))},function(e){var r=n(t,e,this);if(r.done)return r.value;var i=a(e),l=String(this);if(!i.global)return c(i,l);var u=i.unicode;i.lastIndex=0;var p,f=[],h=0;while(null!==(p=c(i,l))){var d=String(p[0]);f[h]=d,""===d&&(i.lastIndex=s(l,o(i.lastIndex),u)),h++}return 0===h?null:f}]}))},"5a5e":function(e,t,n){e.exports=n.p+"img/typography-headlines.e85dd1d2.png"},"5b12":function(e,t,n){var r=n("d4cb"),a=n("abdf"),o=n("9618");e.exports=r?function(e,t,n){return a.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},"5f4a":function(e,t,n){e.exports=n.p+"img/typography-font-weights.128373cc.png"},"64e4":function(e,t,n){var r=n("5428");e.exports=r("navigator","userAgent")||""},"65d0":function(e,t,n){var r=n("c91c"),a=n("b17e"),o=a.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"6a61":function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},"6b1d":function(e,t,n){var r=n("f498"),a=n("185a").f,o=n("5b12"),i=n("b8ba"),s=n("3e34"),c=n("b634"),l=n("ebac");e.exports=function(e,t){var n,u,p,f,h,d,v=e.target,g=e.global,y=e.stat;if(u=g?r:y?r[v]||s(v,{}):(r[v]||{}).prototype,u)for(p in t){if(h=t[p],e.noTargetGet?(d=a(u,p),f=d&&d.value):f=u[p],n=l(g?p:v+(y?".":"#")+p,e.forced),!n&&void 0!==f){if(typeof h===typeof f)continue;c(h,f)}(e.sham||f&&f.sham)&&o(h,"sham",!0),i(u,p,h,e)}}},7297:function(e,t,n){var r=n("f498"),a=n("df6f"),o=r.WeakMap;e.exports="function"===typeof o&&/native code/.test(a(o))},"72df":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"730c":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},7526:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"7c3f":function(e,t,n){var r=n("d4cb"),a=n("72df"),o=n("f2bf");e.exports=!r&&!a((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"7d53":function(e,t,n){var r=n("f498"),a=n("4cdd"),o=n("f1a7"),i=n("1d8a"),s=n("e7a0"),c=n("4db4"),l=a("wks"),u=r.Symbol,p=c?u:u&&u.withoutSetter||i;e.exports=function(e){return o(l,e)||(s&&o(u,e)?l[e]=u[e]:l[e]=p("Symbol."+e)),l[e]}},"83a6":function(e,t,n){var r=n("72df"),a=n("6a61"),o="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==a(e)?o.call(e,""):Object(e)}:Object},"8bb2":function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},"95b2":function(e,t,n){"use strict";n("2aa5");var r=n("b8ba"),a=n("72df"),o=n("7d53"),i=n("42c5"),s=n("5b12"),c=o("species"),l=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),p=o("replace"),f=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),h=!a((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,p){var d=o(e),v=!a((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),g=v&&!a((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!v||!g||"replace"===e&&(!l||!u||f)||"split"===e&&!h){var y=/./[d],_=n(d,""[e],(function(e,t,n,r,a){return t.exec===i?v&&!a?{done:!0,value:y.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),m=_[0],x=_[1];r(String.prototype,e,m),r(RegExp.prototype,d,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}p&&s(RegExp.prototype[d],"sham",!0)}},9618:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"9a0f":function(e,t,n){var r=n("8bb2"),a=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?a(n+t,0):o(n,t)}},a03e:function(e,t,n){var r=n("5428"),a=n("65d0"),o=n("2402"),i=n("157c");e.exports=r("Reflect","ownKeys")||function(e){var t=a.f(i(e)),n=o.f;return n?t.concat(n(e)):t}},a696:function(e,t,n){e.exports=n.p+"img/typography-copytext-states.a3c40ff3.png"},abdf:function(e,t,n){var r=n("d4cb"),a=n("7c3f"),o=n("157c"),i=n("083f"),s=Object.defineProperty;t.f=r?s:function(e,t,n){if(o(e),t=i(t,!0),o(n),a)try{return s(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},abfd:function(e,t,n){"use strict";var r=n("157c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b17e:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},b495:function(e,t,n){var r=n("8bb2"),a=Math.min;e.exports=function(e){return e>0?a(r(e),9007199254740991):0}},b634:function(e,t,n){var r=n("f1a7"),a=n("a03e"),o=n("185a"),i=n("abdf");e.exports=function(e,t){for(var n=a(t),s=i.f,c=o.f,l=0;l<n.length;l++){var u=n[l];r(e,u)||s(e,u,c(t,u))}}},b7fb:function(e,t,n){var r=n("8bb2"),a=n("730c"),o=function(e){return function(t,n){var o,i,s=String(a(t)),c=r(n),l=s.length;return c<0||c>=l?e?"":void 0:(o=s.charCodeAt(c),o<55296||o>56319||c+1===l||(i=s.charCodeAt(c+1))<56320||i>57343?e?s.charAt(c):o:e?s.slice(c,c+2):i-56320+(o-55296<<10)+65536)}};e.exports={codeAt:o(!1),charAt:o(!0)}},b8ba:function(e,t,n){var r=n("f498"),a=n("5b12"),o=n("f1a7"),i=n("3e34"),s=n("df6f"),c=n("cdcd"),l=c.get,u=c.enforce,p=String(String).split("String");(e.exports=function(e,t,n,s){var c=!!s&&!!s.unsafe,l=!!s&&!!s.enumerable,f=!!s&&!!s.noTargetGet;"function"==typeof n&&("string"!=typeof t||o(n,"name")||a(n,"name",t),u(n).source=p.join("string"==typeof t?t:"")),e!==r?(c?!f&&e[t]&&(l=!0):delete e[t],l?e[t]=n:a(e,t,n)):l?e[t]=n:i(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&l(this).source||s(this)}))},c607:function(e,t,n){var r=n("f498"),a=n("3e34"),o="__core-js_shared__",i=r[o]||a(o,{});e.exports=i},c6de:function(e,t,n){var r=n("6a61");e.exports=Array.isArray||function(e){return"Array"==r(e)}},c91c:function(e,t,n){var r=n("f1a7"),a=n("378c"),o=n("1f5e").indexOf,i=n("d687");e.exports=function(e,t){var n,s=a(e),c=0,l=[];for(n in s)!r(i,n)&&r(s,n)&&l.push(n);while(t.length>c)r(s,n=t[c++])&&(~o(l,n)||l.push(n));return l}},cdcd:function(e,t,n){var r,a,o,i=n("7297"),s=n("f498"),c=n("7526"),l=n("5b12"),u=n("f1a7"),p=n("332c"),f=n("d687"),h=s.WeakMap,d=function(e){return o(e)?a(e):r(e,{})},v=function(e){return function(t){var n;if(!c(t)||(n=a(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(i){var g=new h,y=g.get,_=g.has,m=g.set;r=function(e,t){return m.call(g,e,t),t},a=function(e){return y.call(g,e)||{}},o=function(e){return _.call(g,e)}}else{var x=p("state");f[x]=!0,r=function(e,t){return l(e,x,t),t},a=function(e){return u(e,x)?e[x]:{}},o=function(e){return u(e,x)}}e.exports={set:r,get:a,has:o,enforce:d,getterFor:v}},ce71:function(e,t,n){var r=n("d4cb"),a=n("72df"),o=n("f1a7"),i=Object.defineProperty,s={},c=function(e){throw e};e.exports=function(e,t){if(o(s,e))return s[e];t||(t={});var n=[][e],l=!!o(t,"ACCESSORS")&&t.ACCESSORS,u=o(t,0)?t[0]:c,p=o(t,1)?t[1]:void 0;return s[e]=!!n&&!a((function(){if(l&&!r)return!0;var e={length:-1};l?i(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,u,p)}))}},d4cb:function(e,t,n){var r=n("72df");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},d687:function(e,t){e.exports={}},daa1:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Typography")]),e._m(0),n("hr"),n("h2",[e._v("Typeface: Porsche Next")]),n("p",[e._v("The special Porsche feeling and the high recognisability across different touchpoints is decisively shaped by the use of the corporate typeface Porsche Next, which has been exclusively designed for Porsche. Therefore it is the only typeface allowed to be used for Porsche in both print and digital media.")]),n("p",[e._v('Formally, the impression of the Porsche Next is largely determined by the visual character of the "squircle", a combination of square and circle, which is reflected in the curves and circular shapes of the typeface.')]),e._m(1),n("h3",[e._v("Download")]),e._m(2),n("h3",[e._v("Fallback fonts")]),e._m(3),n("h3",[e._v("Language versions")]),n("p",[e._v("The Porsche Next contains all typeface characters required for European, Greek and Cyrillic languages. Arabic, Pashtu, Persian and Urdu are not yet supported by the Porsche Design System but available as separate typeface packages on request.")]),n("h4",[e._v("Chinese / Japanese / Korean")]),e._m(4),n("hr"),n("h2",[e._v("Headline styles")]),n("p",[e._v("The Porsche headline styles should only be used for first-level headlines whose function is to lead a page, section or content area. For Porsche headlines styles, only semibold weight is used to provide a good readability and making it as easy as possible to focus on the content sections of a page. The headline styles span from large title, that can be used optionally and only once per page, to headlines 1 to 5 that can be used multiple times.")]),e._m(5),e._m(6),n("h3",[e._v("Applying headline styles")]),e._m(7),n("h3",[e._v("Headline-subline combinations")]),n("p",[e._v('A first-level headline can be supplemented by a corresponding subline. Sublines must be set in Regular using an "additional sizes" class with minimum 16px size.')]),e._m(8),n("p",[e._v("Examples:")]),e._m(9),n("h2",[e._v("Copy styles")]),e._m(10),e._m(11),e._m(12),n("h2",[e._v("Additional styles")]),e._m(13),e._m(14),n("p",[e._v("Depending on the information level of the respective text you can either chose between regular or thin weight. In both cases legibility should be ensured.")]),e._m(15),n("h3",[e._v("Porsche type scale")]),n("p",[e._v("Additional text sizes can be defined based on the Porsche type scale system.")]),n("p",[n("p-text",{staticClass:"type-scale highlight",attrs:{size:"x-small",tag:"span",color:"inherit"}},[e._v("12")]),n("p-text",{staticClass:"type-scale highlight",attrs:{tag:"span",color:"inherit"}},[e._v("16")]),n("p-text",{staticClass:"type-scale f-18",attrs:{size:"inherit",tag:"span"}},[e._v("18")]),n("p-text",{staticClass:"type-scale f-20",attrs:{size:"inherit",tag:"span"}},[e._v("20")]),n("p-text",{staticClass:"type-scale f-22",attrs:{size:"inherit",tag:"span"}},[e._v("22")]),n("p-text",{staticClass:"type-scale highlight",attrs:{size:"medium",tag:"span",color:"inherit"}},[e._v("24")]),n("p-text",{staticClass:"type-scale f-28",attrs:{size:"inherit",tag:"span"}},[e._v("28")]),n("p-text",{staticClass:"type-scale f-30",attrs:{size:"inherit",tag:"span"}},[e._v("30")]),n("p-text",{staticClass:"type-scale f-32",attrs:{size:"inherit",tag:"span"}},[e._v("32")]),n("p-text",{staticClass:"type-scale highlight",attrs:{size:"large",tag:"span",color:"inherit"}},[e._v("36")]),n("p-text",{staticClass:"type-scale f-42",attrs:{size:"inherit",tag:"span"}},[e._v("42")]),n("p-text",{staticClass:"type-scale f-44",attrs:{size:"inherit",tag:"span"}},[e._v("44")]),n("p-text",{staticClass:"type-scale f-48",attrs:{size:"inherit",tag:"span"}},[e._v("48")]),n("p-text",{staticClass:"type-scale highlight",attrs:{size:"x-large",tag:"span",color:"inherit"}},[e._v("52")]),n("p-text",{staticClass:"type-scale f-60",attrs:{size:"inherit",tag:"span"}},[e._v("60")]),n("p-text",{staticClass:"type-scale f-62",attrs:{size:"inherit",tag:"span"}},[e._v("62")]),n("p-text",{staticClass:"type-scale f-72",attrs:{size:"inherit",tag:"span"}},[e._v("72")]),n("p-text",{staticClass:"type-scale f-84",attrs:{size:"inherit",tag:"span"}},[e._v("84")])],1),n("h3",[e._v("Line height")]),e._m(16),n("h3",[e._v("Type Scale Calculator")]),n("p",[e._v("Enter a font-size in px unit based on Porsche Type Scale."),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],attrs:{type:"number"},domProps:{value:e.size},on:{input:function(t){t.target.composing||(e.size=t.target.value)}}})]),n("pre",[n("code",[e._v(e._s(this.typeScale(e.size+"px"))+"\n")])]),n("p",[n("strong",[e._v("Example Text")]),n("p-text",{style:e.typeScale(e.size+"px",!1),attrs:{size:"inherit"}},[e._v("The quick brown fox jumps over the lazy dog")])],1),n("hr"),n("h2",[e._v("Font styling")]),n("h3",[e._v("Text color")]),e._m(17),n("h3",[e._v("Font weights")]),n("p",[e._v("The Porsche Next is available in different font weights that enable to add emphasis and create a visual content hierarchy. For digital applications, we recommend only to use semibold, regular and thin:")]),e._m(18),e._m(19),n("h3",[e._v("Text alignment")]),n("p",[e._v("Per default, the Porsche Next is always used left-aligned. In individual cases or certain components it can also be used centered, but keep in mind to not exceed 3 text lines, as it is much harder to read. Right-aligned text is also possible in exceptional cases, for example in tables where right-aligned numbers should support readability.")]),n("p",[e._v("Please avoid…")]),e._m(20),n("h3",[e._v("Line length")]),n("p",[e._v("The longer a text line gets, the harder it is for the user to jump from the end of the current line to the beginning of the next line. Therefore we should always aim at a line length that supports good readability.")]),e._m(21),e._m(22),n("h3",[e._v("Multi-column text")]),n("p",[e._v('Generally, text paragraphs should be set as single column. Multi-column text should never exceed 3 columns and is only allowed when it can be ensured that all text columns are in the visible viewport range ("above the fold"). The user should not have to scroll before being able to read the full content.')]),n("h3",[e._v("Paragraph spacing")]),n("p",[e._v("The vertical spacing between copytext paragraphs should be at least 24px, which equals the space of one line of text in-between.")]),e._m(23),n("h3",[e._v("Upper case")]),n("p",[e._v("The usage of upper case text is possible, but should be handled with care, as upper case text is always a matter of readability. Upper case text should only be used for:")]),e._m(24),e._m(25),n("h2",[e._v("Typography principles")]),n("p",[e._v("For Porsche web applications, good typography is…")]),n("h3",[e._v("… functional.")]),n("p",[e._v("Use typography to provide clear hierarchy, to organize content and to guide the user through the digital product journey.")]),n("h3",[e._v("… clear.")]),n("p",[e._v("Use typography to provide both efficiency and, from a more visual point of view, support for a clear and modern look and feel of the Porsche application.")]),n("h3",[e._v("… readable.")]),n("p",[e._v('Never use typography by the sake of itself or as "eye candy". It should always support the usability of a website by making text readable due to a good text color contrast and sufficient text sizes.')]),n("h3",[e._v("… purposeful.")]),n("p",[e._v("Use typography wisely and always keep an eye on the user's needs and the purpose of the content you want to communicate.")]),n("h3",[e._v("… a matter of course.")]),n("p",[e._v("Always use typography in a professional manner in order to support the exclusiveness and high-quality-standard of the brand. This not only means to make use of the pre-defined type styles provided in the Porsche Design System, but also to follow the general rules of good (micro) typography, such as using the right kind of apostrophes in the respective language.")]),n("hr"),n("h2",[e._v("Accessibility")]),e._m(26),n("p",[e._v("Also, you should not rely on color only to convey information. When communicating element states with text (for example a password validation information in forms), make sure to always use additional text stylings to make it easy for visually impaired people to recognise status information even if they can’t see the color – this is of even higher importance the more critical the information is.")]),n("hr"),n("h2",[e._v("Don'ts")]),n("h3",[e._v("Text modifications")]),n("p",[e._v("Please avoid to transform the Porsche Next manually (e.g. within Sketch or via CSS), as this would have a big and undesirable impact on the origin character of the company typeface. This includes:")]),e._m(27),e._m(28)])},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Typography plays an important role for the general brand impression and is indispensable for the use in digital applications, not to say: Typography "),n("strong",[e._v("is")]),e._v(" the interface. Typography enables meaningful information with well structured hierarchy and is therefore one of the most important elements to provide user guidance.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("img",{attrs:{src:n("eb0f"),alt:"Porsche Next Squircles"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You can download the "),n("a",{attrs:{href:"https://cdn.ui.porsche.com/porsche-design-system/font/v1/Porsche_Next_WebOTF_Lat-Gr-Cyr.zip"}},[e._v("Porsche Next font here")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("If in some cases the Porsche Next webfont can't be rendered by the browser (e.g. due to download errors) yo have to provide fallback fonts which should be stacked like this: "),n("code",[e._v('font-family: "Porsche Next", "Arial Narrow", Arial, sans-serif;')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("For Chinese, Japanese and Korean language the "),n("code",[e._v("sans-serif")]),e._v(" system fonts are to be used, sticking to the default Porsche font scaling system.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th"),n("th",[e._v("320 - 759 px (XS)")]),n("th",[e._v("760 - 999 px (S)")]),n("th",[e._v("1000 - 1299 px (M)")]),n("th",[e._v("1300 - 1759 px (L)")]),n("th",[e._v("1760 px or larger (XL)")])])]),n("tbody",[n("tr",[n("td",[e._v("Large Title")]),n("td",[e._v("32 px")]),n("td",[e._v("42 px")]),n("td",[e._v("52 px")]),n("td",[e._v("62 px")]),n("td",[e._v("72 px")])]),n("tr",[n("td",[e._v("Headline-1")]),n("td",[e._v("28 px")]),n("td",[e._v("36 px")]),n("td",[e._v("44 px")]),n("td",[e._v("52 px")]),n("td",[e._v("60 px")])]),n("tr",[n("td",[e._v("Headline-2")]),n("td",[e._v("24 px")]),n("td",[e._v("30 px")]),n("td",[e._v("36 px")]),n("td",[e._v("42 px")]),n("td",[e._v("48 px")])]),n("tr",[n("td",[e._v("Headline-3")]),n("td",[e._v("20 px")]),n("td",[e._v("24 px")]),n("td",[e._v("28 px")]),n("td",[e._v("32 px")]),n("td",[e._v("36 px")])]),n("tr",[n("td",[e._v("Headline-4")]),n("td",[e._v("16 px")]),n("td",[e._v("18 px")]),n("td",[e._v("20 px")]),n("td",[e._v("22 px")]),n("td",[e._v("24 px")])]),n("tr",[n("td",[e._v("Headline-5")]),n("td",[e._v("16 px")]),n("td",[e._v("16 px")]),n("td",[e._v("16 px")]),n("td",[e._v("16 px")]),n("td",[e._v("16 px")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("img",{attrs:{src:n("5a5e"),alt:"Headline example"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Depending on your layout, you don't necessarily have to start with headline 1. Also, it is possible to skip headline sizes whenever it serves the information structure. It is much more important to keep an eye on a homogeneous use of text sizes within one application. Also, please note that the headline class namings don't necessarily refer to the HTML font tags. For example the style headline 1 can also technically be implemented as "),n("code",[e._v("<h2>")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Headline size")]),n("th",[e._v("Subline size")])])]),n("tbody",[n("tr",[n("td",[e._v("16-18 px")]),n("td",[e._v("16 px")])]),n("tr",[n("td",[e._v("20-42 px")]),n("td",[e._v("Min. 2 sizes smaller (see Porsche type scale)")])]),n("tr",[n("td",[e._v("44 px or larger")]),n("td",[e._v("Min. 4 sizes smaller (see Porsche type scale)")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("img",{attrs:{src:n("f5c7"),alt:"Headline-subline combinations"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The Porsche copytext styles are typically to be used for long-form writing. The default copytext size is 16px, which is represented by the "),n("strong",[e._v("text small")]),e._v(" style. The copy "),n("strong",[e._v("text x-small")]),e._v(" is only recommended for additional, low-informative text such as disclaimers or captions. Copy text keeps the respective text size throughout all viewports.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Copy text")]),n("th",[e._v("Font size")]),n("th",[e._v("Available states")])])]),n("tbody",[n("tr",[n("td",[e._v("Text Small (default)")]),n("td",[e._v("16 px")]),n("td",[e._v("active, default, disabled, highlight, linked")])]),n("tr",[n("td",[e._v("Text X-Small")]),n("td",[e._v("12 px")]),n("td",[e._v("active, default, disabled, highlight, linked")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("img",{attrs:{src:n("a696"),alt:"Copytext states"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("For short text parts that are not explicitly a page or section headline, but need a bit more focus or should be displayed larger due to aesthetic purpose, you can stick to the additional sizes provided in the Porsche Design System. There are "),n("strong",[n("span",{staticStyle:{color:"#00D5B9"}},[e._v("predefined default text sizes")])]),e._v(", which should cover most use cases.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",[n("thead",[n("tr",[n("th",[e._v("Additional text size")]),n("th",[e._v("Font size")])])]),n("tbody",[n("tr",[n("td",[e._v("Text Medium")]),n("td",[e._v("24 px")])]),n("tr",[n("td",[e._v("Text Large")]),n("td",[e._v("36 px")])]),n("tr",[n("td",[e._v("Text X-Large")]),n("td",[e._v("52 px")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("img",{attrs:{src:n("f1df"),alt:"Additional text sizes"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("For reasons of legibility, the line height should always be adjusted to the respective text size. The text styles provided work with a 4 px baseline unit that fits to the "),n("a",{attrs:{href:"#/components/spacing"}},[e._v("8 px spacing system")]),e._v(" in order to follow a harmonious overall vertical rhythm.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The color to be used for Porsche Next depends on the "),n("a",{attrs:{href:"#/components/color"}},[e._v("Porsche color theme")]),e._v(" in use. In order to support both simplicity and legibility (sufficient contrast), default text is either to be set in Porsche Black or Porsche Light. For copytext sizes the Porsche color themes also provide different text state colors, such as Porsche Red for active states or Porsche Grey for disabled text.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("strong",[e._v("Porsche Next Semibold")]),e._v(" for first-level headlines.")]),n("li",[n("strong",[e._v("Porsche Next Bold")]),e._v(" for copytext highlights.")]),n("li",[n("strong",[e._v("Porsche Next Regular")]),e._v(" for copytext, stand-alone text or sublines (in combination with first-level headlines).")]),n("li",[n("strong",[e._v("Porsche Next Thin")]),e._v(" for stand-alone text larger than 20px.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("img",{attrs:{src:n("5f4a"),alt:"Font Weights"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("… using the font in block typesetting, as this does not correspond with the high-quality brand image.")]),n("li",[e._v("… mixing up different text alignments within one paragraph. Keep it straight and simple.")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("For UI applications it is recommended to use "),n("a",{attrs:{href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-visual-presentation.html"}},[e._v("no more than 80 characters or glyphs per line")]),e._v(". This might differ a bit depending on the respective line height and viewport size and results in different pixel widths depending on the Porsche type class in use:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Copytext X-Small (12 px): max. 400-450 px")]),n("li",[e._v("Copytext Small (16 px): max. 500-550 px")]),n("li",[e._v("Headlines and additional sizes (20-84 px): max. 700 up to max. 2700 px")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("img",{attrs:{src:n("dc30"),alt:"Copytext paragraph spacing"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Exceptional, one-of-a-kind design cases like standing-out parts of a (graphical) composition or in sole design elements like a tag cloud.")]),n("li",[e._v("Special components for which readability is generally not critical (such as short tags).")]),n("li",[e._v("Proper names such as GTS or BOSE.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("img",{attrs:{src:n("1b6c"),alt:"Example for uppercase text"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("As we stick to the common "),n("a",{attrs:{href:"#/accessibility/guidelines"}},[e._v("WCAG 2.1 Standard")]),e._v(", you should always ensure a sufficient contrast ratio when designing with text. The combination of text and background color should pass the WCAG AA standard and have a contrast ratio of at least 4.5:1 for standard text size and 3:1 for larger text sizes.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("No change of letter-spacing.")]),n("li",[e._v("No use of (drop) shadows on text.")]),n("li",[e._v("No formal change of letters (for example distortion).")]),n("li",[e._v("No use of outline borders on text.")]),n("li",[e._v("No use of opacity for text colors.")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("img",{attrs:{src:n("2e89"),alt:"Example for uppercase text"}})])}],o=(n("33ef"),n("d4ec")),i=n("bee2"),s=n("262e"),c=n("2caf"),l=n("0f9e"),u=n("2b0e"),p=n("2fe1"),f=(n("2aa5"),n("58d3"),{4:"0.25rem",8:"0.5rem",16:"1rem",24:"1.5rem",32:"2rem",40:"2.5rem",48:"3rem",56:"3.5rem",64:"4rem",72:"4.5rem",80:"5rem"}),h=(f["4"],f["8"],f["16"],f["32"],f["48"],f["80"],/^(\d+\.?\d*)(rem|px)$/),d=16,v=function(e){var t,n=null!==(t=null===e||void 0===e?void 0:e.match(h))&&void 0!==t?t:[],r=n[1],a=n[2];if("rem"!==a||"0"===r)throw new Error("function only accepts value in rem and not 0, e.g. 1.5rem");return parseFloat(""+r)*d+"px"},g=function(e){var t,n=null!==(t=null===e||void 0===e?void 0:e.match(h))&&void 0!==t?t:[],r=n[1],a=n[2];if(void 0===a||void 0===r||"0"===r)throw new Error("font size needs to be value + px or rem and not 0, e.g. 15rem or 16px, received: '"+e+"'");var o="rem"===a?v(e):r,i=parseFloat(o),s=2.71828,c=.911/(2.97+.005*Math.pow(s,.2*i))+1.2,l=i*c,u=l%4;u>2&&(u-=4);var p=1e5,f=l-u,d=f/i;return Math.round(d*p)/p},y=function(e){Object(s["a"])(n,e);var t=Object(c["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.size="16",e}return Object(i["a"])(n,[{key:"typeScale",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=g(e),r=Math.round(e.slice(0,-2)*n),a=e.slice(0,-2)/16;return t?"font-size: "+a+"rem; // "+e+"\nline-height: "+n+"; // "+r+"px":"font-size: "+a+"rem; line-height: "+n+";"}}]),n}(u["a"]);y=Object(l["b"])([p["b"]],y);var _=y,m=_,x=(n("eeb2"),n("2877")),b=Object(x["a"])(m,r,a,!1,null,"5a652061",null);t["default"]=b.exports},dac6:function(e,t,n){"use strict";var r=n("083f"),a=n("abdf"),o=n("9618");e.exports=function(e,t,n){var i=r(t);i in e?a.f(e,i,o(0,n)):e[i]=n}},dc30:function(e,t,n){e.exports=n.p+"img/typography-paragraph-spacing.39850e11.png"},df6f:function(e,t,n){var r=n("c607"),a=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return a.call(e)}),e.exports=r.inspectSource},df8c:function(e,t,n){var r=n("6a61"),a=n("42c5");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return a.call(e,t)}},e129:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,o=a&&!r.call({1:2},1);t.f=o?function(e){var t=a(this,e);return!!t&&t.enumerable}:r},e3f6:function(e,t,n){"use strict";var r=n("b7fb").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},e7a0:function(e,t,n){var r=n("72df");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},eb0f:function(e,t,n){e.exports=n.p+"img/typography-squircle.10cc973b.png"},ebac:function(e,t,n){var r=n("72df"),a=/#|\.prototype\./,o=function(e,t){var n=s[i(e)];return n==l||n!=c&&("function"==typeof t?r(t):!!t)},i=o.normalize=function(e){return String(e).replace(a,".").toLowerCase()},s=o.data={},c=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},eeb2:function(e,t,n){"use strict";var r=n("04e5"),a=n.n(r);a.a},f1a7:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},f1df:function(e,t,n){e.exports=n.p+"img/typography-additional-sizes.789657ff.png"},f2bf:function(e,t,n){var r=n("f498"),a=n("7526"),o=r.document,i=a(o)&&a(o.createElement);e.exports=function(e){return i?o.createElement(e):{}}},f498:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("c8ba"))},f5c7:function(e,t,n){e.exports=n.p+"img/typography-headline-subline.b283e9f6.png"}}]);
//# sourceMappingURL=chunk-6093ef23.6ecc5ced.js.map