(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cba82"],{"4b31":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"vmark"},[t("h1",[e._v("Radio Button")]),e._m(0),e._m(1),t("TableOfContents"),t("h2",[e._v("Basic examples")]),t("Playground",{attrs:{markup:e.basic,config:e.config}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],attrs:{"aria-label":"Select label mode"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.label=t.target.multiple?a:a[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select label mode")]),t("option",{attrs:{value:"show"}},[e._v("With label")]),t("option",{attrs:{value:"hide"}},[e._v("Without label")]),t("option",{attrs:{value:"responsive"}},[e._v("Responsive")])])]),t("hr"),t("h2",[e._v("Required")]),t("Playground",{attrs:{markup:e.required,config:e.config}}),t("hr"),t("h2",[e._v("Disabled")]),t("Playground",{attrs:{markup:e.disabled,config:e.config}}),t("h3",[t("A11yIcon"),e._v(" Accessibility hints")],1),e._m(2),t("hr"),t("h2",[e._v("Validation states")]),e._m(3),t("Playground",{attrs:{markup:e.validation,config:e.config}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],attrs:{"aria-label":"Select validation state"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.state=t.target.multiple?a:a[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select validation state")]),t("option",{attrs:{value:"error"}},[e._v("Error")]),t("option",{attrs:{value:"success"}},[e._v("Success")]),t("option",{attrs:{value:"none"}},[e._v("None")])])]),t("hr"),t("h2",[e._v("Slots")]),e._m(4),t("Playground",{attrs:{markup:e.slots,config:e.config}}),t("h3",[t("A11yIcon"),e._v(" Accessibility hints")],1),e._m(5),e._m(6)],1)},r=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-radio-button-wrapper")]),e._v(" component is a styling wrapper for the native HTML input type "),t("code",[e._v("radio")]),e._v(" form element. The singular property of a Radio Button makes it distinct from a checkbox, which allows more than one (or no) item to be selected and for the unselected state to be restored.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("A "),t("code",[e._v("label")]),e._v(" is a caption which informs the user what information a particular form field is asking for. The "),t("code",[e._v("p-radio-button-wrapper")]),e._v(" component can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("In general, you should "),t("strong",[e._v("prevent")]),e._v(" using the "),t("code",[e._v('disabled="true"')]),e._v(" state. Disabled elements are not reachable (focusable) anymore and can be missed by screen reader users. They can be confusing for sighted users as well by not pointing out why these elements are disabled. A good practice when to use the disabled state is during "),t("strong",[e._v("form submission")]),e._v(" to prevent changes while this process is performed.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-radio-button-wrapper")]),e._v(" component supports the visualisation of inline validation. The "),t("code",[e._v("message")]),e._v(" and "),t("code",[e._v("radio")]),e._v(" is colored and visible/hidden depending on the defined "),t("code",[e._v("state")]),e._v(".")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Sometimes it's useful to be able to render markup (e.g. an anchor tag) for "),t("code",[e._v("label")]),e._v(" or "),t("code",[e._v("message")]),e._v(". Therefore a named slot can be used. Make sure "),t("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot). For named slots only "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"}},[e._v("phrasing content")]),e._v(" is allowed.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("If using "),t("strong",[e._v("slotted contents")]),e._v(" to serve form elements, make sure to provide the right "),t("strong",[e._v("ARIA attributes")]),e._v(" to give screen reader users the corresponding information:")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ol",[t("li",[e._v("Add a unique ID to the "),t("code",[e._v('slot="label"')]),e._v(" element")]),t("li",[e._v("Add a unique ID to the "),t("code",[e._v('slot="message"')]),e._v(" element (if they are created)")]),t("li",[e._v("Add corresponding "),t("code",[e._v('aria-labelledby="some-label-id"')]),e._v(" to the "),t("code",[e._v("input")]),e._v(" element which points to the "),t("code",[e._v("label")]),e._v(" ID")]),t("li",[e._v("Add corresponding "),t("code",[e._v('aria-describedby="some-message-id"')]),e._v(" to the "),t("code",[e._v("input")]),e._v(" element which points to the "),t("code",[e._v("message")]),e._v(" ID when the (error/success) message appears")])])}],s=a("ade3"),n=a("0f9e"),i=a("2b0e"),l=a("2fe1");let p=class extends i["a"]{constructor(...e){super(...e),Object(s["a"])(this,"config",{spacing:"block"}),Object(s["a"])(this,"state","error"),Object(s["a"])(this,"label","show"),Object(s["a"])(this,"required",'<p-radio-button-wrapper label="Some label">\n  <input type="radio" name="some-name-4" required />\n</p-radio-button-wrapper>\n<p-radio-button-wrapper label="Some label">\n  <input type="radio" name="some-name-4" required checked />\n</p-radio-button-wrapper>'),Object(s["a"])(this,"disabled",'<p-radio-button-wrapper label="Some label">\n  <input type="radio" name="some-name-4" disabled />\n</p-radio-button-wrapper>\n<p-radio-button-wrapper label="Some label">\n  <input type="radio" name="some-name-4" disabled checked />\n</p-radio-button-wrapper>'),Object(s["a"])(this,"slots",'<p-radio-button-wrapper state="error">\n  <span slot="label" id="some-label-id-1">Some label with a <a href="https://designsystem.porsche.com">link</a>.</span>\n  <input type="radio" name="some-name-6" aria-labelledby="some-label-id-1" />\n</p-radio-button-wrapper>\n<p-radio-button-wrapper state="error">\n  <span slot="label" id="some-label-id-2">Some label with a <a href="https://designsystem.porsche.com">link</a>.</span>\n  <input type="radio" name="some-name-6" aria-labelledby="some-label-id-2" aria-describedby="some-message-id" />\n  <span slot="message" id="some-message-id">Some error message with a <a href="https://designsystem.porsche.com">link</a>.</span>\n</p-radio-button-wrapper>')}get basic(){const e=`hide-label="${"hide"===this.label?"true":"responsive"===this.label?"{ base: true, l: false }":"false"}"`;return`<p-radio-button-wrapper label="Some label" ${e}>\n  <input type="radio" name="some-name-1" />\n</p-radio-button-wrapper>\n<p-radio-button-wrapper label="Some label" ${e}>\n  <input type="radio" name="some-name-1" />\n</p-radio-button-wrapper>`}get validation(){const e=` message="${"none"!==this.state?`Some ${this.state} validation message.`:""}"`;return`<p-radio-button-wrapper label="Some label" state="${this.state}">\n  <input type="radio" name="some-name-5" />\n</p-radio-button-wrapper>\n<p-radio-button-wrapper label="Some label" state="${this.state}"${e}>\n  <input type="radio" name="some-name-5" />\n</p-radio-button-wrapper>`}};p=Object(n["b"])([l["b"]],p);var d=p,c=d,u=a("2877"),b=Object(u["a"])(c,o,r,!1,null,null,null);t["default"]=b.exports}}]);
//# sourceMappingURL=chunk-2d0cba82.ec1b24f0.js.map