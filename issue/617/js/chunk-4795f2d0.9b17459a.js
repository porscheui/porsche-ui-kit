(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4795f2d0"],{"0f9e":function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));function o(e,t,a,o){var r,n=arguments.length,s=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,a):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,a,o);else for(var l=e.length-1;l>=0;l--)(r=e[l])&&(s=(n<3?r(s):n>3?r(t,a,s):r(t,a))||s);return n>3&&s&&Object.defineProperty(t,a,s),s}},"63e1":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vmark"},[a("h1",[e._v("Select")]),e._m(0),e._m(1),a("h2",[e._v("Basic example")]),a("Playground",{scopedSlots:e._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.label=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[e._v("Select a label mode")]),a("option",{attrs:{selected:"",value:"show"}},[e._v("With label")]),a("option",{attrs:{value:"hide"}},[e._v("Without label")]),a("option",{attrs:{value:"responsive"}},[e._v("Responsive")])])]},proxy:!0}])},[[a("p-select-wrapper",{attrs:{label:"Some label","hide-label":"hide"===e.label?"true":"responsive"===e.label?"{ base: true, l: false }":"false"}},[a("select",{attrs:{name:"some-name"}},[a("option",{attrs:{value:""}},[e._v("Select an option")]),a("option",{attrs:{value:"a"}},[e._v("Option A")]),a("option",{attrs:{value:"b"}},[e._v("Option B")]),a("option",{attrs:{value:"c",disabled:""}},[e._v("Option C")]),a("option",{attrs:{value:"d"}},[e._v("Option D")]),a("option",{attrs:{value:"e"}},[e._v("Option E")])])])]],2),a("hr"),a("h2",[e._v("With optgroups")]),a("Playground",[a("p-select-wrapper",{attrs:{label:"Some label"}},[a("select",{attrs:{name:"some-name"}},[a("optgroup",{attrs:{label:"Some optgroup label"}},[a("option",{attrs:{value:"a"}},[e._v("Option A")]),a("option",{attrs:{value:"b"}},[e._v("Option B")]),a("option",{attrs:{value:"c"}},[e._v("Option C")]),a("option",{attrs:{value:"d"}},[e._v("Option D")]),a("option",{attrs:{value:"e"}},[e._v("Option E")]),a("option",{attrs:{value:"f"}},[e._v("Option F")])]),a("optgroup",{attrs:{label:"Some optgroup label"}},[a("option",{attrs:{value:"g"}},[e._v("Option G")]),a("option",{attrs:{value:"h"}},[e._v("Option H")]),a("option",{attrs:{value:"i"}},[e._v("Option I")])])])])],1),a("hr"),a("h2",[e._v("With description text")]),e._m(2),a("Playground",[a("p-select-wrapper",{attrs:{label:"Some label",description:"Some description"}},[a("select",{attrs:{name:"some-name"}},[a("option",{attrs:{value:"a"}},[e._v("Option A")]),a("option",{attrs:{value:"b"}},[e._v("Option B")]),a("option",{attrs:{value:"c"}},[e._v("Option C")])])])],1),a("hr"),a("h2",[e._v("Disabled")]),a("Playground",[a("p-select-wrapper",{attrs:{label:"Some label"}},[a("select",{attrs:{name:"some-name",disabled:"disabled"}},[a("option",{attrs:{value:"a"}},[e._v("Option A")]),a("option",{attrs:{value:"b"}},[e._v("Option B")]),a("option",{attrs:{value:"c"}},[e._v("Option C")])])])],1),a("hr"),a("h2",[e._v("Native")]),a("Playground",[a("p-select-wrapper",{attrs:{label:"Some label",variant:"native"}},[a("select",{attrs:{name:"some-name"}},[a("option",{attrs:{value:"a"}},[e._v("Option A")]),a("option",{attrs:{value:"b",selected:""}},[e._v("Option B")]),a("option",{attrs:{value:"c"}},[e._v("Option C")])])])],1),a("hr"),a("h2",[e._v("Validation states")]),e._m(3),a("Playground",{scopedSlots:e._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.state=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[e._v("Select a validation state")]),a("option",{attrs:{value:"error"}},[e._v("Error")]),a("option",{attrs:{value:"success"}},[e._v("Success")]),a("option",{attrs:{value:"none"}},[e._v("None")])])]},proxy:!0}])},[[a("p-select-wrapper",{attrs:{label:"Some label",state:e.state,message:"none"!==e.state?"Some "+e.state+" validation message.":""}},[a("select",{attrs:{name:"some-name","aria-invalid":"error"===e.state}},[a("option",{attrs:{value:"a"}},[e._v("Option A")]),a("option",{attrs:{value:"b"}},[e._v("Option B")]),a("option",{attrs:{value:"c"}},[e._v("Option C")])])])]],2),a("hr"),a("h2",[e._v("Slots")]),e._m(4),a("Playground",[[a("p-select-wrapper",{attrs:{state:"error"}},[a("span",{attrs:{slot:"label",id:"some-label-id"},slot:"label"},[e._v("Some label with a "),a("a",{attrs:{href:"https://designsystem.porsche.com"}},[e._v("link")]),e._v(".")]),a("span",{attrs:{slot:"description"},slot:"description"},[e._v("Some description with a "),a("a",{attrs:{href:"https://designsystem.porsche.com"}},[e._v("link")]),e._v(".")]),a("select",{attrs:{name:"some-name","aria-labelledby":"some-label-id","aria-describedby":"some-message-id"}},[a("option",{attrs:{value:"a"}},[e._v("Option A")]),a("option",{attrs:{value:"b"}},[e._v("Option B")]),a("option",{attrs:{value:"c"}},[e._v("Option C")])]),a("span",{attrs:{slot:"message",id:"some-message-id"},slot:"message"},[e._v("Some error message with a "),a("a",{attrs:{href:"https://designsystem.porsche.com"}},[e._v("link")]),e._v(".")])])]],2)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("strong",[e._v("Select Wrapper")]),e._v(" component supports the element "),a("code",[e._v("<select>")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A "),a("code",[e._v("label")]),e._v(" is a caption which informs the user what information a particular form field is asking for. The "),a("strong",[e._v("Select Wrapper")]),e._v(" component can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A description text can be added to explain the meaning of a specific form field. It's meant to be a textual enhancement of the label text and is technically connected with the "),a("code",[e._v("hide-label")]),e._v(" property.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("strong",[e._v("Select Wrapper")]),e._v(" component supports the visualisation of inline validation.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Sometimes it's useful to be able to render markup (e.g. an anchor tag) for "),a("code",[e._v("label")]),e._v(" or "),a("code",[e._v("message")]),e._v(". Therefore a named slot can be used. Make sure "),a("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot). For named slots only "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"}},[e._v("phrasing content")]),e._v(" is allowed. Please make sure to set the corresponding "),a("strong",[e._v("aria")]),e._v(" attributes.")])}],n=a("d4ec"),s=a("262e"),l=a("2caf"),i=a("0f9e"),p=a("60a3"),v=function(e){Object(s["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(n["a"])(this,a),e=t.apply(this,arguments),e.label="show",e.state="error",e}return a}(p["c"]);v=Object(i["a"])([p["a"]],v);var c=v,u=c,_=a("2877"),d=Object(_["a"])(u,o,r,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-4795f2d0.9b17459a.js.map