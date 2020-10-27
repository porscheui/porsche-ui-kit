(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-180a854d"],{"083f":function(e,t,n){var r=n("7526");e.exports=function(e,t){if(!r(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!r(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!r(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")}},"09a4":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Checkbox")]),e._m(0),e._m(1),n("h2",[e._v("Basic example")]),n("Playground",{attrs:{childElementLayout:{spacing:"block"}},scopedSlots:e._u([{key:"configurator",fn:function(){return[n("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.label=t.target.multiple?n:n[0]}}},[n("option",{attrs:{selected:"",value:"show"}},[e._v("With label")]),n("option",{attrs:{value:"hide"}},[e._v("Without label")]),n("option",{attrs:{value:"responsive"}},[e._v("Responsive")])])]},proxy:!0}])},[[n("p-checkbox-wrapper",{attrs:{label:"Some label","hide-label":"hide"===e.label?"true":"responsive"===e.label?"{ base: true, l: false }":"false"}},[n("input",{attrs:{type:"checkbox",name:"some-name"}})]),n("p-checkbox-wrapper",{attrs:{label:"Some label","hide-label":"hide"===e.label?"true":"responsive"===e.label?"{ base: true, l: false }":"false"}},[n("input",{attrs:{type:"checkbox",name:"some-name",checked:""}})])]],2),n("hr"),n("h2",[e._v("Indeterminate")]),e._m(2),e._m(3),n("Playground",{attrs:{childElementLayout:{spacing:"inline"}}},[n("p-checkbox-wrapper",{attrs:{label:"Some label"}},[n("input",{staticClass:"example-set-to-indeterminate",attrs:{type:"checkbox",name:"some-name"}})]),n("p-checkbox-wrapper",{attrs:{label:"Some label",indeterminate:"true"}},[n("input",{staticClass:"example-set-to-indeterminate",attrs:{type:"checkbox",name:"some-name",checked:""}})])],1),n("hr"),n("h2",[e._v("Disabled")]),n("Playground",{attrs:{childElementLayout:{spacing:"inline"}}},[n("p-checkbox-wrapper",{attrs:{label:"Some label"}},[n("input",{attrs:{type:"checkbox",name:"some-name",disabled:""}})]),n("p-checkbox-wrapper",{attrs:{label:"Some label"}},[n("input",{attrs:{type:"checkbox",name:"some-name",checked:"",disabled:""}})])],1),n("hr"),n("h2",[e._v("Validation states")]),e._m(4),n("Playground",{scopedSlots:e._u([{key:"configurator",fn:function(){return[n("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.state=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:""}},[e._v("Select a validation state")]),n("option",{attrs:{value:"error"}},[e._v("Error")]),n("option",{attrs:{value:"success"}},[e._v("Success")]),n("option",{attrs:{value:"none"}},[e._v("None")])])]},proxy:!0}])},[[n("p-checkbox-wrapper",{attrs:{label:"Some label",state:e.state,message:"none"!==e.state?"Some "+e.state+" validation message.":""}},[n("input",{attrs:{type:"checkbox",name:"some-name"}})])]],2),n("hr"),n("h2",[e._v("Slots")]),e._m(5),n("Playground",[[n("p-checkbox-wrapper",{attrs:{state:"error"}},[n("span",{attrs:{slot:"label",id:"some-label-id"},slot:"label"},[e._v("Some label with a "),n("a",{attrs:{href:"https://designsystem.porsche.com"}},[e._v("link")]),e._v(".")]),n("input",{attrs:{type:"checkbox",name:"some-name","aria-labelledby":"some-label-id","aria-describedby":"some-message-id"}}),n("span",{attrs:{slot:"message",id:"some-message-id"},slot:"message"},[e._v("Some error message with a "),n("a",{attrs:{href:"https://designsystem.porsche.com"}},[e._v("link")]),e._v(".")])])]],2)],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("strong",[e._v("Checkbox")]),e._v(" component is a styling wrapper for the native HTML input type "),n("code",[e._v("checkbox")]),e._v(" form element. Checking one box doesn't uncheck other Checkboxes. By default Checkboxes are not selected.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("A "),n("code",[e._v("label")]),e._v(" is a caption which informs the user what information a particular form field is asking for. The "),n("strong",[e._v("Checkbox Wrapper")]),e._v(" component can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Mask the visual appearance of a checkbox which has a state in-between checked and unchecked."),n("br"),e._v(" This is especially useful for a checkbox that is used to set the state of a group of checkboxes at once. However this group might have a mixed state. In this case we recommend to use "),n("code",[e._v("checked=false")]),e._v(" and "),n("code",[e._v("indeterminate=true")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[n("strong",[e._v("Note: The "),n("code",[e._v("indeterminate")]),e._v(" attribute can only be set through the DOM node. There is no HTML attribute to set it. Also it's worth to know, that the "),n("code",[e._v("indeterminate")]),e._v(" attribute only affects how the checkbox is shown. The current value is hidden from the user, but the checkbox still keeps it's "),n("code",[e._v("checked")]),e._v(" state. You can find more details in "),n("a",{attrs:{href:"https://www.w3.org/TR/html52/sec-forms.html#dom-htmlinputelement-indeterminate"}},[e._v("the specification")]),e._v(".")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The "),n("strong",[e._v("Checkbox Wrapper")]),e._v(" component supports the visualisation of inline validation. The "),n("code",[e._v("message")]),e._v(" and "),n("code",[e._v("checkbox")]),e._v(" is colored and visible/hidden depending on the defined "),n("code",[e._v("state")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Sometimes it's useful to be able to render markup (e.g. an anchor tag) for "),n("code",[e._v("label")]),e._v(" or "),n("code",[e._v("message")]),e._v(". Therefore a named slot can be used. Make sure "),n("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot). For named slots only "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"}},[e._v("phrasing content")]),e._v(" is allowed. Please make sure to set the corresponding "),n("strong",[e._v("aria")]),e._v(" attributes.")])}],a=(n("8f0b"),n("75a4"),n("fa8c5"),n("d4ec")),i=n("bee2"),c=n("262e"),s=n("2caf"),u=n("53ca"),f=n("2b0e"),l=n("2fe1"),p=function(e,t,n,r){var o,a=arguments.length,i=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"===("undefined"===typeof Reflect?"undefined":Object(u["a"])(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,n,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(a<3?o(i):a>3?o(t,n,i):o(t,n))||i);return a>3&&i&&Object.defineProperty(t,n,i),i},d=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.state="error",e.label="show",e}return Object(i["a"])(n,[{key:"mounted",value:function(){this.$nextTick((function(){var e=document.querySelectorAll(".example-set-to-indeterminate");e.forEach((function(e){e.indeterminate=!0}))}))}}]),n}(f["a"]);d=p([l["b"]],d);var v=d,h=v,b=n("2877"),m=Object(b["a"])(h,r,o,!1,null,null,null);t["default"]=m.exports},"0e93":function(e,t){e.exports=!1},"130d":function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},"157c":function(e,t,n){var r=n("7526");e.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e}},"185a":function(e,t,n){var r=n("d4cb"),o=n("e129"),a=n("9618"),i=n("378c"),c=n("083f"),s=n("f1a7"),u=n("7c3f"),f=Object.getOwnPropertyDescriptor;t.f=r?f:function(e,t){if(e=i(e),t=c(t,!0),u)try{return f(e,t)}catch(n){}if(s(e,t))return a(!o.f.call(e,t),e[t])}},"1d8a":function(e,t){var n=0,r=Math.random();e.exports=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++n+r).toString(36)}},"1f5e":function(e,t,n){var r=n("378c"),o=n("b495"),a=n("9a0f"),i=function(e){return function(t,n,i){var c,s=r(t),u=o(s.length),f=a(i,u);if(e&&n!=n){while(u>f)if(c=s[f++],c!=c)return!0}else for(;u>f;f++)if((e||f in s)&&s[f]===n)return e||f||0;return!e&&-1}};e.exports={includes:i(!0),indexOf:i(!1)}},2117:function(e,t,n){var r=n("8697");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},2402:function(e,t){t.f=Object.getOwnPropertySymbols},"332c":function(e,t,n){var r=n("4cdd"),o=n("1d8a"),a=r("keys");e.exports=function(e){return a[e]||(a[e]=o(e))}},"378c":function(e,t,n){var r=n("83a6"),o=n("730c");e.exports=function(e){return r(o(e))}},"37d1":function(e,t,n){var r=n("730c");e.exports=function(e){return Object(r(e))}},"3e34":function(e,t,n){var r=n("f498"),o=n("5b12");e.exports=function(e,t){try{o(r,e,t)}catch(n){r[e]=t}return t}},"3e36":function(e,t,n){var r=n("f498");e.exports=r},"4cdd":function(e,t,n){var r=n("0e93"),o=n("c607");(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"4db4":function(e,t,n){var r=n("e7a0");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5428:function(e,t,n){var r=n("3e36"),o=n("f498"),a=function(e){return"function"==typeof e?e:void 0};e.exports=function(e,t){return arguments.length<2?a(r[e])||a(o[e]):r[e]&&r[e][t]||o[e]&&o[e][t]}},"5b12":function(e,t,n){var r=n("d4cb"),o=n("abdf"),a=n("9618");e.exports=r?function(e,t,n){return o.f(e,t,a(1,n))}:function(e,t,n){return e[t]=n,e}},"65d0":function(e,t,n){var r=n("c91c"),o=n("b17e"),a=o.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},"6a61":function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},"6a86":function(e,t,n){var r=n("7526"),o=n("c6de"),a=n("7d53"),i=a("species");e.exports=function(e,t){var n;return o(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"6b1d":function(e,t,n){var r=n("f498"),o=n("185a").f,a=n("5b12"),i=n("b8ba"),c=n("3e34"),s=n("b634"),u=n("ebac");e.exports=function(e,t){var n,f,l,p,d,v,h=e.target,b=e.global,m=e.stat;if(f=b?r:m?r[h]||c(h,{}):(r[h]||{}).prototype,f)for(l in t){if(d=t[l],e.noTargetGet?(v=o(f,l),p=v&&v.value):p=f[l],n=u(b?l:h+(m?".":"#")+l,e.forced),!n&&void 0!==p){if(typeof d===typeof p)continue;s(d,p)}(e.sham||p&&p.sham)&&a(d,"sham",!0),i(f,l,d,e)}}},7297:function(e,t,n){var r=n("f498"),o=n("df6f"),a=r.WeakMap;e.exports="function"===typeof a&&/native code/.test(o(a))},"72df":function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},"730c":function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on "+e);return e}},7526:function(e,t){e.exports=function(e){return"object"===typeof e?null!==e:"function"===typeof e}},"75a4":function(e,t,n){var r=n("6b1d"),o=n("72df"),a=n("378c"),i=n("185a").f,c=n("d4cb"),s=o((function(){i(1)})),u=!c||s;r({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(e,t){return i(a(e),t)}})},"7c3f":function(e,t,n){var r=n("d4cb"),o=n("72df"),a=n("f2bf");e.exports=!r&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},"7d53":function(e,t,n){var r=n("f498"),o=n("4cdd"),a=n("f1a7"),i=n("1d8a"),c=n("e7a0"),s=n("4db4"),u=o("wks"),f=r.Symbol,l=s?f:f&&f.withoutSetter||i;e.exports=function(e){return a(u,e)||(c&&a(f,e)?u[e]=f[e]:u[e]=l("Symbol."+e)),u[e]}},"7f8a":function(e,t,n){"use strict";var r=n("72df");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},"83a6":function(e,t,n){var r=n("72df"),o=n("6a61"),a="".split;e.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?a.call(e,""):Object(e)}:Object},8697:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"8bb2":function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?r:n)(e)}},"8f0b":function(e,t,n){"use strict";var r=n("6b1d"),o=n("e8e5");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},9618:function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"9a0f":function(e,t,n){var r=n("8bb2"),o=Math.max,a=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):a(n,t)}},a03e:function(e,t,n){var r=n("5428"),o=n("65d0"),a=n("2402"),i=n("157c");e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(i(e)),n=a.f;return n?t.concat(n(e)):t}},abdf:function(e,t,n){var r=n("d4cb"),o=n("7c3f"),a=n("157c"),i=n("083f"),c=Object.defineProperty;t.f=r?c:function(e,t,n){if(a(e),t=i(t,!0),a(n),o)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},b17e:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},b495:function(e,t,n){var r=n("8bb2"),o=Math.min;e.exports=function(e){return e>0?o(r(e),9007199254740991):0}},b634:function(e,t,n){var r=n("f1a7"),o=n("a03e"),a=n("185a"),i=n("abdf");e.exports=function(e,t){for(var n=o(t),c=i.f,s=a.f,u=0;u<n.length;u++){var f=n[u];r(e,f)||c(e,f,s(t,f))}}},b8ba:function(e,t,n){var r=n("f498"),o=n("5b12"),a=n("f1a7"),i=n("3e34"),c=n("df6f"),s=n("cdcd"),u=s.get,f=s.enforce,l=String(String).split("String");(e.exports=function(e,t,n,c){var s=!!c&&!!c.unsafe,u=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof t||a(n,"name")||o(n,"name",t),f(n).source=l.join("string"==typeof t?t:"")),e!==r?(s?!p&&e[t]&&(u=!0):delete e[t],u?e[t]=n:o(e,t,n)):u?e[t]=n:i(t,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&u(this).source||c(this)}))},c607:function(e,t,n){var r=n("f498"),o=n("3e34"),a="__core-js_shared__",i=r[a]||o(a,{});e.exports=i},c6de:function(e,t,n){var r=n("6a61");e.exports=Array.isArray||function(e){return"Array"==r(e)}},c91c:function(e,t,n){var r=n("f1a7"),o=n("378c"),a=n("1f5e").indexOf,i=n("d687");e.exports=function(e,t){var n,c=o(e),s=0,u=[];for(n in c)!r(i,n)&&r(c,n)&&u.push(n);while(t.length>s)r(c,n=t[s++])&&(~a(u,n)||u.push(n));return u}},cdcd:function(e,t,n){var r,o,a,i=n("7297"),c=n("f498"),s=n("7526"),u=n("5b12"),f=n("f1a7"),l=n("332c"),p=n("d687"),d=c.WeakMap,v=function(e){return a(e)?o(e):r(e,{})},h=function(e){return function(t){var n;if(!s(t)||(n=o(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}};if(i){var b=new d,m=b.get,y=b.has,g=b.set;r=function(e,t){return g.call(b,e,t),t},o=function(e){return m.call(b,e)||{}},a=function(e){return y.call(b,e)}}else{var x=l("state");p[x]=!0,r=function(e,t){return u(e,x,t),t},o=function(e){return f(e,x)?e[x]:{}},a=function(e){return f(e,x)}}e.exports={set:r,get:o,has:a,enforce:v,getterFor:h}},ce71:function(e,t,n){var r=n("d4cb"),o=n("72df"),a=n("f1a7"),i=Object.defineProperty,c={},s=function(e){throw e};e.exports=function(e,t){if(a(c,e))return c[e];t||(t={});var n=[][e],u=!!a(t,"ACCESSORS")&&t.ACCESSORS,f=a(t,0)?t[0]:s,l=a(t,1)?t[1]:void 0;return c[e]=!!n&&!o((function(){if(u&&!r)return!0;var e={length:-1};u?i(e,1,{enumerable:!0,get:s}):e[1]=1,n.call(e,f,l)}))}},d054:function(e,t,n){var r=n("2117"),o=n("83a6"),a=n("37d1"),i=n("b495"),c=n("6a86"),s=[].push,u=function(e){var t=1==e,n=2==e,u=3==e,f=4==e,l=6==e,p=5==e||l;return function(d,v,h,b){for(var m,y,g=a(d),x=o(g),_=r(v,h,3),w=i(x.length),S=0,k=b||c,O=t?k(d,w):n?k(d,0):void 0;w>S;S++)if((p||S in x)&&(m=x[S],y=_(m,S,g),e))if(t)O[S]=y;else if(y)switch(e){case 3:return!0;case 5:return m;case 6:return S;case 2:s.call(O,m)}else if(f)return!1;return l?-1:u||f?f:O}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},d4cb:function(e,t,n){var r=n("72df");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},d687:function(e,t){e.exports={}},df6f:function(e,t,n){var r=n("c607"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(e){return o.call(e)}),e.exports=r.inspectSource},e129:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,a=o&&!r.call({1:2},1);t.f=a?function(e){var t=o(this,e);return!!t&&t.enumerable}:r},e7a0:function(e,t,n){var r=n("72df");e.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},e8e5:function(e,t,n){"use strict";var r=n("d054").forEach,o=n("7f8a"),a=n("ce71"),i=o("forEach"),c=a("forEach");e.exports=i&&c?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},ebac:function(e,t,n){var r=n("72df"),o=/#|\.prototype\./,a=function(e,t){var n=c[i(e)];return n==u||n!=s&&("function"==typeof t?r(t):!!t)},i=a.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",u=a.POLYFILL="P";e.exports=a},f1a7:function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},f2bf:function(e,t,n){var r=n("f498"),o=n("7526"),a=r.document,i=o(a)&&o(a.createElement);e.exports=function(e){return i?a.createElement(e):{}}},f498:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||Function("return this")()}).call(this,n("c8ba"))},fa8c5:function(e,t,n){var r=n("f498"),o=n("130d"),a=n("e8e5"),i=n("5b12");for(var c in o){var s=r[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{i(u,"forEach",a)}catch(f){u.forEach=a}}}}]);
//# sourceMappingURL=chunk-180a854d.673f405b.js.map