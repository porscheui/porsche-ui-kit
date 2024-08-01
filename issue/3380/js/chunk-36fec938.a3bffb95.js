(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36fec938"],{"448b":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"vmark"},[t("ComponentHeading",{attrs:{name:"Accordion"}}),e._m(0),t("p",[e._v("It is a controlled component. This means it does not contain any internal state, and you got full control over its behavior.")]),t("TableOfContents"),t("h2",[e._v("Basic example")]),t("Notification",{attrs:{heading:"Deprecation hint","heading-tag":"h3",state:"warning"}},[e._v(" The "),t("code",[e._v("accordionChange")]),e._v(" event has been deprecated and will be removed with the next major release."),t("br"),e._v(" Please use the "),t("code",[e._v("update")]),e._v(" event instead. ")]),t("Playground",{attrs:{frameworkMarkup:e.codeExample,config:e.config,markup:e.basic}}),e._m(1),t("h3",[t("A11yIcon"),e._v(" Accessibility hints")],1),e._m(2),t("hr"),t("h2",[e._v("Sticky headline")]),e._m(3),t("h3",[e._v("Custom styling")]),t("p",[e._v("The top value can be overwritten by CSS Custom Properties (aka CSS Variables):")]),e._m(4),t("hr"),t("h2",[e._v("Size")]),t("Playground",{attrs:{markup:e.sizeMarkup,config:e.config}},[t("PlaygroundSelect",{attrs:{values:e.sizes,name:"size"},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}})],1),t("hr"),t("h2",[e._v("Slotted heading")]),e._m(5),e._m(6),t("Playground",{attrs:{markup:e.slottedMarkup,config:e.config}}),t("hr"),t("h2",[e._v("Compact")]),e._m(7),t("Playground",{attrs:{markup:e.compactMarkup,config:e.config}}),t("hr"),t("h2",[e._v("Compact with custom clickable/focusable area")]),e._m(8),t("Playground",{attrs:{markup:e.clickableAreaMarkup,config:e.config}}),t("hr")],1)},a=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-accordion")]),e._v(" is a component that reveals or hides associated sections of content."),t("br"),e._v(" Accordions are flexible in the context and can include other components of the Porsche Design System.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The accordion width is 100% of the parent container. We do strongly advise you to not use the full display width, as this will quickly result in a loss of context. Parent containers with a maximum width of "),t("code",[e._v("800px")]),e._v(" are recommended.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("heading-tag")]),e._v(" property needs to be set in order for the accordion to fit into the outline of the page. If there is no "),t("code",[e._v("heading-tag")]),e._v(" property provided, it defaults to "),t("code",[e._v("h2")]),e._v(". For instance some of our example accordions use heading "),t("strong",[e._v("level 3")]),e._v(" because they are contained in sections titled with a "),t("strong",[e._v("level 2")]),e._v(" heading.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The headline can be made sticky by adding the property "),t("code",[e._v("sticky")]),e._v(" to the "),t("code",[e._v("p-accordion")]),e._v(" tag.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("pre",[t("code",{staticClass:"language-scss"},[e._v("// default CSS variable\n--p-accordion-position-sticky-top: 0;\n\n// overwrite with CSS variable\np-accordion {\n  --p-accordion-position-sticky-top: 50px;\n}\n")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Sometimes it's useful to be able to render markup for "),t("code",[e._v("heading")]),e._v(". Therefore, a named slot can be used. Make sure "),t("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot).")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Please "),t("strong",[e._v("refrain")]),e._v(" from using any other than text content as slotted markup.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("By setting "),t("code",[e._v("compact")]),e._v(" to "),t("code",[e._v("true")]),e._v(" you can have a more compact accordion. It removes the borders and reduces the spacings.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Sometimes it might be useful to enlarge the clickable/focusable area to fulfill accessibility guidelines. Therefore a custom padding can be set on the heading slot element in "),t("code",[e._v("compact")]),e._v(" variant.")])}],i=n("ade3"),r=(n("7b4b"),n("2b0e")),s=n("2fe1"),c=n("526d");const d=["small","medium"];var l=function(e,t,n,o){var a,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(a=e[s])&&(r=(i<3?a(r):i>3?a(t,n,r):a(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let p=class extends r["a"]{constructor(...e){super(...e),Object(i["a"])(this,"config",{themeable:!0}),Object(i["a"])(this,"codeExample",Object(c["a"])()),Object(i["a"])(this,"content","<p-text>\n    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,\n    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.\n  </p-text>"),Object(i["a"])(this,"size","small"),Object(i["a"])(this,"sizes",[...d,"{ base: 'small', l: 'medium' }"])}get basic(){return`<p-accordion heading="Some Heading" heading-tag="h3">\n  ${this.content}\n</p-accordion>\n<p-accordion heading="Some Heading" heading-tag="h3">\n  ${this.content}\n</p-accordion>`}get sizeMarkup(){return`<p-accordion heading="Some Heading" heading-tag="h3" size="${this.size}">\n  ${this.content}\n</p-accordion>\n<p-accordion heading="Some Heading" heading-tag="h3" size="${this.size}">\n  ${this.content}\n</p-accordion>`}get slottedMarkup(){return`<p-accordion heading-tag="h3">\n  <span slot="heading">Some slotted heading</span>\n  ${this.content}\n</p-accordion>\n<p-accordion heading-tag="h3">\n  <span slot="heading">Some slotted heading</span>\n  ${this.content}\n</p-accordion>`}get compactMarkup(){return'<div style="max-width: 400px">\n  <p-accordion heading="Some Heading" heading-tag="h3" compact="true">\n    <p-link-pure href="https://porsche.com" icon="none">Some label</p-link-pure>\n  </p-accordion>\n  <p-accordion heading="Some Heading" heading-tag="h3" compact="true">\n    <p-link-pure href="https://porsche.com" icon="none">Some label</p-link-pure>\n  </p-accordion>\n</div>'}get clickableAreaMarkup(){return'<div style="max-width: 400px">\n  <p-accordion heading-tag="h3" compact="true">\n    <span slot="heading" style="padding: 1rem;">Some slotted heading</span>\n    <p-link-pure href="https://porsche.com" icon="none" style="padding: 1rem;">Some label</p-link-pure>\n  </p-accordion>\n  <p-accordion heading-tag="h3" compact="true">\n    <span slot="heading" style="padding: 1rem;">Some slotted heading</span>\n    <p-link-pure href="https://porsche.com" icon="none" style="padding: 1rem;">Some label</p-link-pure>\n  </p-accordion>\n</div>'}mounted(){this.registerEvents();const e=this.$el.querySelectorAll(".playground > p-tabs-bar");e.forEach(e=>e.addEventListener("update",()=>{this.registerEvents()}))}updated(){this.registerEvents()}registerEvents(){const e=this.$el.querySelectorAll(".playground .demo p-accordion");e.forEach(e=>e.addEventListener("update",e=>e.target.open=e.detail.open))}};p=l([s["b"]],p);var h=p,u=h,g=n("2877"),m=Object(g["a"])(u,o,a,!1,null,null,null);t["default"]=m.exports},"7b4b":function(e,t,n){"use strict";var o=n("6b1d"),a=n("f498"),i=n("fa46");o({global:!0},{Reflect:{}}),i(a.Reflect,"Reflect",!0)},fa46:function(e,t,n){"use strict";var o=n("abdf").f,a=n("7a25"),i=n("7d53"),r=i("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!a(e,r)&&o(e,r,{configurable:!0,value:t})}}}]);
//# sourceMappingURL=chunk-36fec938.a3bffb95.js.map