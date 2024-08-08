(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a4e17da"],{"07d7":function(e,t,o){"use strict";o.d(t,"a",(function(){return n})),o.d(t,"b",(function(){return s})),o.d(t,"c",(function(){return i})),o.d(t,"d",(function(){return a}));const a="2560px",n="max(22px, 10.625vw - 12px)",s="calc(5vw - 16px)",i="min(50vw - 880px, 400px)"},"21a5":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));const a="16px"},"33d9":function(e,t,o){"use strict";o.d(t,"a",(function(){return c})),o.d(t,"b",(function(){return l}));var a=o("e55d"),n=o("70fa");const s=600;var i=o("d772"),r=o("7015");const c=`${i["a"]} ${r["a"]} ${s} `,l=`/${n["a"]} ${a["a"]}`},"478d":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));const a="clamp(16px, 1.25vw + 12px, 36px)"},"52f1":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));const a="clamp(8px, 0.5vw + 6px, 16px)"},5671:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var a=o("478d");const n=a["a"]},7015:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));const a="normal"},"70fa":function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));const a="calc(6px + 2.125ex)"},a0c1:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"vmark"},[t("ComponentHeading",{attrs:{name:"Modal"}}),e._m(0),t("p",[e._v("It is a controlled component. This grants flexible control over the modal's behavior especially whether it should stay open after user interaction like submission of a form.")]),t("Notification",{attrs:{heading:"Scroll-lock","heading-tag":"h2",state:"warning"}},[e._v(" This component sets "),t("code",[e._v("overflow: hidden")]),e._v(" on the body when opened in order to prevent background scrolling."),t("br"),e._v(" This doesn't work completely reliable under iOS but is the most stable solution."),t("br"),e._v(" Feel free to address this issue in an Open Source PR, if you can provide a better solution. "),t("b",[t("a",{attrs:{href:"https://github.com/porsche-design-system/porsche-design-system/blob/main/packages/components/src/utils/setScrollLock.ts"}},[e._v("Current implementation")])])]),t("TableOfContents"),t("h2",[e._v("Basic")]),e._m(1),e._m(2),e._m(3),t("h4",[e._v("Supported named slots:")]),e._m(4),t("Playground",{attrs:{frameworkMarkup:e.codeSamples,markup:e.codeSamples["vanilla-js"],config:e.config}}),t("h3",[t("A11yIcon"),e._v(" Accessibility hints")],1),e._m(5),t("h2",[e._v("Dismiss Button")]),e._m(6),t("Playground",{attrs:{markup:e.dismissButtonMarkup,config:e.config}}),t("h2",[e._v("Disable Backdrop Click")]),t("p",[e._v("It's possible to disable closing the modal by click on the backdrop.")]),t("Playground",{attrs:{markup:e.disableBackdropClickMarkup,config:e.config}}),t("h2",[e._v("Backdrop")]),e._m(7),t("Playground",{attrs:{markup:e.backdropMarkup,config:e.config}},[t("PlaygroundSelect",{attrs:{values:e.backdrops,name:"backdrop"},model:{value:e.backdrop,callback:function(t){e.backdrop=t},expression:"backdrop"}})],1),t("h2",[e._v("Fullscreen")]),e._m(8),t("Playground",{attrs:{markup:e.fullscreenMarkup,config:e.config}}),t("p",[e._v("Of course, any combination of the available options is possible.")]),t("h2",[e._v("Example: Scrollable modal with sticky footer")]),t("p",[e._v("If the modal's content does not fit into the current boundaries the content becomes scrollable and the footer area sticky.")]),t("Playground",{attrs:{markup:e.exampleScrollableMarkup,config:e.config}}),t("h2",[e._v("Example: Modal with Porsche Grid")]),e._m(9),[t("div",{staticClass:"playground"},[t("div",{staticClass:"demo"},[t("p-button",{attrs:{type:"button",aria:"{ 'aria-haspopup': 'dialog' }",theme:this.$store.getters.storefrontTheme}},[e._v("Open Modal")]),t("p-modal",{attrs:{open:"false",aria:"{ 'aria-label': 'Some Heading' }"}},[t("p-heading",{attrs:{slot:"header",size:"large",tag:"h2"},slot:"header"},[e._v("Some Heading")]),t("ExampleStylesGrid",{attrs:{visualizeGrid:!0}}),t("p-button-group",{attrs:{slot:"footer"},slot:"footer"},[t("p-button",[e._v("Accept")]),t("p-button",{attrs:{type:"button",variant:"secondary"}},[e._v("Deny")])],1)],1)],1)])],t("h2",[e._v("Custom styling")]),e._m(10),t("p",[e._v("In addition, it's possible to make containers or elements (e.g. "),t("code",[e._v("div")]),e._v(", "),t("code",[e._v("img")]),e._v(" etc.) stretch into the padding safe-zone by adding the "),t("code",{domProps:{textContent:e._s(e.stretchClassName)}}),e._v(" CSS class.")]),e._m(11),t("Playground",{attrs:{markup:e.customStylingMarkup,config:e.config}},[t("PlaygroundInput",{attrs:{type:"text",name:"Width"},model:{value:e.cssVariableWidth,callback:function(t){e.cssVariableWidth=t},expression:"cssVariableWidth"}}),t("PlaygroundInput",{attrs:{type:"number",name:"Spacing Top (px)"},model:{value:e.cssVariableSpacingTop,callback:function(t){e.cssVariableSpacingTop=t},expression:"cssVariableSpacingTop"}}),t("PlaygroundInput",{attrs:{type:"number",name:"Spacing Bottom (px)"},model:{value:e.cssVariableSpacingBottom,callback:function(t){e.cssVariableSpacingBottom=t},expression:"cssVariableSpacingBottom"}})],1)],2)},n=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-modal")]),e._v(" is a temporary overlay to focus the user's attention on one task while interactions with the underlying page are blocked. It is only used as highly disruptive modal notification to present important information until dismissed. Or as overlay to confirm critical user actions, such as confirming an irreversible choice. It should be used thoughtfully and sparingly.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Following "),t("strong",[e._v("web standards")]),e._v(", the component uses the native "),t("code",[e._v("<dialog />")]),e._v(" element internally which ensures proper focus handling including a "),t("strong",[e._v("focus trap")]),e._v(". In addition, it's rendered on the "),t("code",[e._v("#top-layer")]),e._v(" which ensures the element to be on top of the page independent of where "),t("code",[e._v("p-modal")]),e._v(" is placed in the DOM hierarchy ("),t("code",[e._v("z-index")]),e._v(" is not relevant anymore and won't have any effect).")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The most important property of "),t("code",[e._v("p-modal")]),e._v(" is its "),t("code",[e._v("open")]),e._v(" property. When it's set to "),t("code",[e._v("true")]),e._v(" the modal will be visible. In order to get notified when the modal gets closed by clicking the "),t("code",[e._v("x")]),e._v(" button, the backdrop or by pressing the "),t("code",[e._v("Escape")]),e._v(" key you need to register an event listener for the "),t("code",[e._v("dismiss")]),e._v(" event which is emitted by "),t("code",[e._v("p-modal")]),e._v(".")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The size of "),t("code",[e._v("p-modal")]),e._v(" adjusts itself to the content with a predefined "),t("strong",[e._v("min/max width")]),e._v(" which aligns to the "),t("strong",[t("a",{attrs:{href:"styles/grid"}},[e._v("Porsche Grid")])]),e._v(".")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ul",[t("li",[t("code",[e._v('slot="header"')]),e._v(": Renders a header section above the content area.")]),t("li",[t("code",[e._v("slot")]),e._v(": Shows the content area.")]),t("li",[t("code",[e._v('slot="footer"')]),e._v(": Shows a "),t("strong",[e._v("sticky")]),e._v(" footer section, flowing under the content area when scrollable.")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("To provide a unique accessible name for the dialog, it's mandatory to set a meaningful label with the "),t("code",[e._v("aria")]),e._v(" property.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("It's possible to render the modal without dismiss button. At the same time this also deactivates dismissing the modal by pressing "),t("code",[e._v("Escape")]),e._v(".")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("By default, "),t("code",[e._v("blur")]),e._v(" should be used whenever the modal gets opened by a user interaction, e.g. a click on a button, to allow the user to fully concentrate on the modal content. While "),t("code",[e._v("shading")]),e._v(' should be used when the modal gets opened automatically, e.g. through a "Cookie Consent Dialog", so that the user still knows which page it is.')])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The modal supports a "),t("code",[e._v("fullscreen")]),e._v(" property. Due to the size of fullscreen on desktop, it is easy to lose context for the consumer. Furthermore, you lose helpful functionality like backdrop click. This is why fullscreen modals are recommended for mobile devices only.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-modal")]),e._v(" component makes decent changes to the Porsche Grid to give support if used as slotted content. The following example shows the visualization of the Porsche Grid when used inside the modal component:")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v('The modal component has some values which can be overwritten by CSS Custom Properties (aka CSS Variables). This might be useful for e.g. a "Cookie Consent Dialog" to reserve certain space when used with '),t("code",[e._v("backdrop: 'shading'")]),e._v(" to always have the Porsche "),t("a",{attrs:{href:"components/crest"}},[e._v("crest")]),e._v(" or "),t("a",{attrs:{href:"components/wordmark"}},[e._v("wordmark")]),e._v(" visible in the background of the page. Since the modal is centered within the viewport and shrinks to its content, the custom vertical spacing definition will act like a safe zone.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("pre",[t("code",{staticClass:"language-scss"},[e._v("// the modal comes with predefined margin / safe-zone which needs to be considered when a custom width is defined\n--p-modal-width: clamp(276px, 45.25vw + 131px, 1000px);\n--p-modal-spacing-top: 200px;\n--p-modal-spacing-bottom: 50px;\n")])])}],s=o("ade3"),i=(o("7b4b"),o("2b0e")),r=o("2fe1"),c=o("52f1"),l=o("478d");const p="clamp(32px, 2.75vw + 23px, 76px)";o("f57c");var d=o("33d9");const u="clamp(1.27rem, 0.51vw + 1.16rem, 1.78rem)",h=u;d["a"],d["b"];o("b404"),o("70ab"),o("ccf1");var m=o("5671");o("b30f"),o("21a5");m["a"],c["a"],c["a"],c["a"],l["a"],l["a"],c["a"],c["a"],l["a"];const f="stretch-to-full-modal-width";var v=o("526d"),b=o("79b9"),_=function(e,t,o,a){var n,s=arguments.length,i=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,o,a);else for(var r=e.length-1;r>=0;r--)(n=e[r])&&(i=(s<3?n(i):s>3?n(t,o,i):n(t,o))||i);return s>3&&i&&Object.defineProperty(t,o,i),i};let g=class extends i["a"]{constructor(...e){super(...e),Object(s["a"])(this,"config",{themeable:!0}),Object(s["a"])(this,"modals",[]),Object(s["a"])(this,"codeSamples",Object(v["j"])()),Object(s["a"])(this,"dismissButtonMarkup",'<p-button type="button" aria="{ \'aria-haspopup\': \'dialog\' }">Open Modal</p-button>\n<p-modal dismiss-button="false" open="false" aria="{ \'aria-label\': \'Some Heading\' }">\n  <p-text>Some Content</p-text>\n</p-modal>'),Object(s["a"])(this,"disableBackdropClickMarkup",'<p-button type="button" aria="{ \'aria-haspopup\': \'dialog\' }">Open Modal</p-button>\n  <p-modal disable-backdrop-click="true" open="false" aria="{ \'aria-label\': \'Some Heading\' }">\n    <p-text>Some Content</p-text>\n  </p-modal>'),Object(s["a"])(this,"backdrops",["blur","shading"]),Object(s["a"])(this,"backdrop","shading"),Object(s["a"])(this,"fullscreenMarkup",'<p-button type="button" aria="{ \'aria-haspopup\': \'dialog\' }">Open Modal</p-button>\n<p-modal fullscreen="{ base: true, s: false }" open="false" aria="{ \'aria-label\': \'Some Heading\' }">\n  <p-text>Some Content</p-text>\n</p-modal>'),Object(s["a"])(this,"exampleScrollableMarkup",'<p-button type="button" aria="{ \'aria-haspopup\': \'dialog\' }">Open Modal</p-button>\n<p-modal open="false" aria="{ \'aria-label\': \'Some Heading\' }">\n  <p-heading slot="header" size="large" tag="h2">Some Heading</p-heading>\n  <p-text>Some Content Begin</p-text>\n  <div style="width: 10px; height: 120vh; background: deeppink;"></div>\n  <p-text>Some Content End</p-text>\n  <p-button-group slot="footer">\n    <p-button>Accept</p-button>\n    <p-button type="button" variant="secondary">Deny</p-button>\n  </p-button-group>\n</p-modal>'),Object(s["a"])(this,"cssVariableSpacingTop",200),Object(s["a"])(this,"cssVariableSpacingBottom",50),Object(s["a"])(this,"cssVariableWidth","clamp(276px, 45.25vw + 131px, 1000px)")}mounted(){this.registerEvents()}updated(){this.registerEvents()}registerEvents(){this.modals=this.$el.querySelectorAll(".playground .demo > p-modal"),this.modals.forEach((e,t)=>e.addEventListener("dismiss",()=>this.closeModal(t))),this.$el.querySelectorAll(".playground .demo > p-button").forEach((e,t)=>e.addEventListener("click",()=>this.openModal(t)))}openModal(e){this.modals[e].open=!0}closeModal(e){this.modals[e].open=!1}get backdropMarkup(){return`<p-button type="button" aria="{ 'aria-haspopup': 'dialog' }">Open Modal</p-button>\n<p-modal backdrop="${this.backdrop}" aria="{ 'aria-label': 'Some Heading' }" open="false">\n  <p-text>Some Content</p-text>\n</p-modal>`}get stretchClassName(){return f}get customStylingMarkup(){return`<p-button type="button" aria="{ 'aria-haspopup': 'dialog' }">Open Modal</p-button>\n<p-modal open="false" backdrop="shading" aria="{ 'aria-label': 'Some Heading' }" style="--p-modal-width: ${this.cssVariableWidth}; --p-modal-spacing-top: ${this.cssVariableSpacingTop}px; --p-modal-spacing-bottom: ${this.cssVariableSpacingBottom}px;">\n  <img src="${o("a34e")}" class="${f}">  \n</p-modal>`}};g=_([Object(r["b"])({components:{ExampleStylesGrid:b["default"]}})],g);var y=g,k=y,x=o("2877"),w=Object(x["a"])(k,a,n,!1,null,null,null);t["default"]=w.exports},a34e:function(e,t,o){e.exports=o.p+"img/porsche-992-carrera-s.f84c3d36.jpg"},b404:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var a=o("07d7");const n=a["a"]},d772:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));const a="normal"},e55d:function(e,t,o){"use strict";o.d(t,"a",(function(){return a}));const a="'Porsche Next','Arial Narrow',Arial,'Heiti SC',SimHei,sans-serif"}}]);
//# sourceMappingURL=chunk-3a4e17da.617c30f3.js.map