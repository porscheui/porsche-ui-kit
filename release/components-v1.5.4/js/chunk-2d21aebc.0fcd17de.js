(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21aebc"],{be25:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vmark"},[a("h1",[e._v("Text Field")]),e._m(0),e._m(1),e._m(2),a("h2",[e._v("Basic example")]),a("Playground",{attrs:{childElementLayout:{spacing:"block"}},scopedSlots:e._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.label=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[e._v("Select a label mode")]),a("option",{attrs:{selected:"",value:"show"}},[e._v("With label")]),a("option",{attrs:{value:"hide"}},[e._v("Without label")]),a("option",{attrs:{value:"responsive"}},[e._v("Responsive")])])]},proxy:!0}])},[[a("p-text-field-wrapper",{attrs:{label:"Some label","hide-label":"hide"===e.label?"true":"responsive"===e.label?"{ base: true, l: false }":"false"}},[a("input",{attrs:{type:"text",name:"some-name"}})]),a("p-text-field-wrapper",{attrs:{label:"Some label","hide-label":"hide"===e.label?"true":"responsive"===e.label?"{ base: true, l: false }":"false"}},[a("input",{attrs:{type:"text",placeholder:"Some placeholder text",name:"some-name"}})])]],2),a("hr"),a("h2",[e._v("With description text")]),e._m(3),a("Playground",[a("p-text-field-wrapper",{attrs:{label:"Some label",description:"Some description"}},[a("input",{attrs:{type:"text",name:"some-name"}})])],1),a("hr"),a("h2",[e._v("Disabled")]),a("Playground",[a("p-text-field-wrapper",{attrs:{label:"Some label"}},[a("input",{attrs:{type:"text",name:"some-name",value:"Some value",disabled:""}})])],1),a("hr"),a("h2",[e._v("Read only")]),a("Playground",[a("p-text-field-wrapper",{attrs:{label:"Some label"}},[a("input",{attrs:{type:"text",name:"some-name",value:"Some value",readonly:""}})])],1),a("hr"),a("h2",[e._v("Types")]),e._m(4),a("h3",[e._v("Basic")]),a("Playground",{scopedSlots:e._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.type=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[e._v("Select a type")]),a("option",{attrs:{value:"text"}},[e._v("Text")]),a("option",{attrs:{value:"number"}},[e._v("Number")]),a("option",{attrs:{value:"email"}},[e._v("Email")]),a("option",{attrs:{value:"tel"}},[e._v("Tel")]),a("option",{attrs:{value:"search"}},[e._v("Search")]),a("option",{attrs:{value:"url"}},[e._v("Url")]),a("option",{attrs:{value:"date"}},[e._v("Date")]),a("option",{attrs:{value:"time"}},[e._v("Time")]),a("option",{attrs:{value:"month"}},[e._v("Month")]),a("option",{attrs:{value:"week"}},[e._v("Week")])])]},proxy:!0}])},[[a("p-text-field-wrapper",{attrs:{label:"Some label"}},[a("input",{attrs:{type:e.type,name:"some-name"}})])]],2),a("h3",[e._v("Password")]),a("Playground",[a("p-text-field-wrapper",{attrs:{label:"Some label"}},[a("input",{attrs:{type:"password",name:"some-name",value:"some password"}})])],1),a("h3",[e._v("Search")]),a("Playground",[a("form",{attrs:{action:"#",onsubmit:"alert('submit'); return false;"}},[a("p-text-field-wrapper",{attrs:{label:"Some label"}},[a("input",{attrs:{type:"search",name:"some-name"}})])],1)]),a("hr"),a("h2",[e._v("Validation states")]),e._m(5),a("Playground",{scopedSlots:e._u([{key:"configurator",fn:function(){return[a("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.state=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:""}},[e._v("Select a validation state")]),a("option",{attrs:{value:"error"}},[e._v("Error")]),a("option",{attrs:{value:"success"}},[e._v("Success")]),a("option",{attrs:{value:"none"}},[e._v("None")])])]},proxy:!0}])},[[a("p-text-field-wrapper",{attrs:{label:"Some label",state:e.state,message:"none"!==e.state?"Some "+e.state+" validation message.":""}},[a("input",{attrs:{type:"text",name:"some-name"}})])]],2),a("hr"),a("h2",[e._v("Slots")]),e._m(6),a("Playground",[[a("p-text-field-wrapper",{attrs:{state:"error"}},[a("span",{attrs:{slot:"label",id:"some-label-id"},slot:"label"},[e._v("Some label with a "),a("a",{attrs:{href:"https://designsystem.porsche.com"}},[e._v("link")]),e._v(".")]),a("span",{attrs:{slot:"description"},slot:"description"},[e._v("Some description with a "),a("a",{attrs:{href:"https://designsystem.porsche.com"}},[e._v("link")]),e._v(".")]),a("input",{attrs:{type:"text",name:"some-name","aria-labelledby":"some-label-id","aria-describedby":"some-message-id"}}),a("span",{attrs:{slot:"message",id:"some-message-id"},slot:"message"},[e._v("Some error message with a "),a("a",{attrs:{href:"https://designsystem.porsche.com"}},[e._v("link")]),e._v(".")])])]],2)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("strong",[e._v("Text Field Wrapper")]),e._v(" is a styling wrapper for the native HTML input types and is essential for mostly any form.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A "),a("code",[e._v("label")]),e._v(" is a caption which informs the user what information a particular form field is asking for. The "),a("strong",[e._v("Text Field Wrapper")]),e._v(" component can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("While a "),a("code",[e._v("placeholder")]),e._v(" is optional but recommended to be set whenever bits of example content or hints shall be shown to give the user visual cues to fill out the form.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("A description text can be added to explain the meaning of a specific form field. It's meant to be a textual enhancement of the label text and is technically connected with the "),a("code",[e._v("hide-label")]),e._v(" property.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The following types listed in the configurator below are supported. Browser specific UI helpers (e.g. calendar dropdown in Chrome) may occur inside the input field which are explicitly not reset by the "),a("strong",[e._v("Text Field Wrapper")]),e._v(" component. For better accessibility it's recommended to "),a("strong",[e._v("not")]),e._v(" reset these browser default UI helpers.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The "),a("strong",[e._v("Text Field Wrapper")]),e._v(" component supports the visualisation of inline validation. The "),a("code",[e._v("message")]),e._v(" and "),a("code",[e._v("input")]),e._v(" is colored and visible/hidden depending on the defined "),a("code",[e._v("state")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Sometimes it's useful to be able to render markup (e.g. an anchor tag) for "),a("code",[e._v("label")]),e._v(", "),a("code",[e._v("description")]),e._v(" or "),a("code",[e._v("message")]),e._v(". Therefore a named slot can be used. Make sure "),a("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot). For named slots only "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"}},[e._v("phrasing content")]),e._v(" is allowed. Please make sure to set the corresponding "),a("strong",[e._v("aria")]),e._v(" attributes.")])}],s=a("d4ec"),l=a("262e"),n=a("2caf"),i=a("0f9e"),p=a("60a3"),c=function(e){Object(l["a"])(a,e);var t=Object(n["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.label="show",e.type="text",e.state="error",e}return a}(p["c"]);c=Object(i["b"])([p["a"]],c);var v=c,d=v,u=a("2877"),m=Object(u["a"])(d,r,o,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d21aebc.0fcd17de.js.map