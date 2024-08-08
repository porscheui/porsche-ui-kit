(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c0ea0"],{"448b":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"vmark"},[t("h1",[e._v("Accordion")]),e._m(0),t("p",[e._v("It is a controlled component. This means it does not contain any internal state, and you got full control over its behavior.")]),t("p-inline-notification",{attrs:{heading:"Important note",state:"warning",persistent:"true"}},[e._v(" This component uses the "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver",target:"_blank"}},[e._v("ResizeObserver")]),e._v(" API internally which isn't available in all browsers."),t("br"),e._v(" If your browser does not support the ResizeObserver, a fallback is used, which might be not as performant."),t("br"),e._v(" See "),t("a",{attrs:{href:"https://caniuse.com/resizeobserver",target:"_blank"}},[e._v("caniuse.com")]),e._v(" for more details on browser support. ")]),t("TableOfContents"),t("h2",[e._v("Basic example")]),t("Playground",{attrs:{frameworkMarkup:e.codeExample,config:e.config,markup:e.basic}}),e._m(1),t("h3",[e._v("Headline Tag")]),e._m(2),t("hr"),t("h2",[e._v("Size")]),t("Playground",{attrs:{markup:e.sizeMarkup,config:e.config}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],attrs:{"aria-label":"Select size"},on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.size=t.target.multiple?o:o[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select size")]),t("option",{attrs:{value:"small"}},[e._v("Small")]),t("option",{attrs:{value:"medium"}},[e._v("Medium")]),t("option",{attrs:{value:"{ base: 'small', l: 'medium' }"}},[e._v("Responsive")])])]),t("hr"),t("h2",[e._v("Slotted heading")]),e._m(3),e._m(4),t("Playground",{attrs:{markup:e.slottedMarkup,config:e.config}}),t("hr"),t("h2",[e._v("Compact")]),e._m(5),e._m(6),t("Playground",{attrs:{markup:e.compactMarkup,config:e.config}}),t("hr")],1)},a=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-accordion")]),e._v(" is a component that reveals or hides associated sections of content."),t("br"),e._v(" Accordions are flexible in the context and can include other components of the Porsche Design System.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The accordion width is 100% of the parent container. We do strongly advise you to not use the full display width, as this will quickly result in a loss of context. Parent containers with a maximum width of "),t("code",[e._v("800px")]),e._v(" are recommended.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("tag")]),e._v(" property needs to be set in order for the accordion to fit into the outline of the page. If there is no "),t("code",[e._v("tag")]),e._v(" property provided, it defaults to "),t("code",[e._v("h2")]),e._v(". For instance our example accordions use heading level 3 because they are contained in sections titled with a level 2 heading.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Sometimes it's useful to be able to render markup for "),t("code",[e._v("heading")]),e._v(". Therefore, a named slot can be used. Make sure "),t("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot).")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Please "),t("strong",[e._v("refrain")]),e._v(" from using any other than text content as slotted markup.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("By setting "),t("code",[e._v("compact")]),e._v(" to "),t("code",[e._v("true")]),e._v(" you can have a more compact accordion. It removes the borders and reduces the spacings.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Be aware, that the "),t("code",[e._v("size")]),e._v(" property will be ignored when "),t("code",[e._v("compact")]),e._v(" is set to "),t("code",[e._v("true")]),e._v(". We recommend using the property in case you need a side-navigation with an accordion like behavior.")])}],r=o("ade3"),i=o("0f9e"),s=o("2b0e"),c=o("2fe1"),d=o("526d");let l=class extends s["a"]{constructor(...e){super(...e),Object(r["a"])(this,"config",{themeable:!0}),Object(r["a"])(this,"codeExample",Object(d["a"])()),Object(r["a"])(this,"size","small"),Object(r["a"])(this,"content","<p-text>\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n  </p-text>")}get basic(){return`<p-accordion heading="Some Heading" tag="h3">\n  ${this.content}\n</p-accordion>\n<p-accordion heading="Some Heading" tag="h3">\n  ${this.content}\n</p-accordion>`}get sizeMarkup(){return`<p-accordion heading="Some Heading" tag="h3" size="${this.size}">\n  ${this.content}\n</p-accordion>\n<p-accordion heading="Some Heading" tag="h3" size="${this.size}">\n  ${this.content}\n</p-accordion>`}get slottedMarkup(){return`<p-accordion tag="h3">\n  <span slot="heading">Some slotted heading</span>\n  ${this.content}\n</p-accordion>\n<p-accordion tag="h3">\n  <span slot="heading">Some slotted heading</span>\n  ${this.content}\n</p-accordion>`}get compactMarkup(){return'<div style="max-width: 400px">\n  <p-accordion heading="Some Heading" tag="h3" compact="true">\n    <p-link-pure href="https://www.porsche.com" icon="none">Some label</p-link-pure>\n  </p-accordion>\n  <p-accordion heading="Some Heading" tag="h3" compact="true">\n    <p-link-pure href="https://www.porsche.com" icon="none">Some label</p-link-pure>\n  </p-accordion>\n</div>'}mounted(){this.registerEvents();const e=this.$el.querySelectorAll(".playground > p-tabs-bar");e.forEach(e=>e.addEventListener("tabChange",()=>{this.registerEvents()}))}updated(){this.registerEvents()}registerEvents(){const e=this.$el.querySelectorAll(".playground .demo p-accordion");e.forEach(e=>e.addEventListener("accordionChange",e=>e.target.open=e.detail.open))}};l=Object(i["b"])([c["b"]],l);var p=l,u=p,h=o("2877"),v=Object(h["a"])(u,n,a,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0c0ea0.3ea647e0.js.map