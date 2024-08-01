(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36d14d2a"],{"7b4b":function(e,t,o){"use strict";var n=o("6b1d"),i=o("f498"),l=o("fa46");n({global:!0},{Reflect:{}}),l(i.Reflect,"Reflect",!0)},f579:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"vmark"},[t("ComponentHeading",{attrs:{name:"Flyout Multilevel"}}),e._m(0),t("Notification",{attrs:{heading:"Experimental Component","heading-tag":"h2",state:"warning"}},[e._v(" Interface of Flyout Multilevel might change in the near future. In addition, animation/transition concept will change in the future. Currently, only two multilevel levels are supported, but we will offer the support of more levels soon. ")]),t("Notification",{attrs:{heading:"Scroll-lock","heading-tag":"h2",state:"warning"}},[e._v(" This component sets "),t("code",[e._v("overflow: hidden")]),e._v(" on the body when opened in order to prevent background scrolling."),t("br"),e._v(" This doesn't work completely reliable under iOS but is the most stable solution."),t("br"),e._v(" Feel free to address this issue in an Open Source PR, if you can provide a better solution. "),t("b",[t("a",{attrs:{href:"https://github.com/porsche-design-system/porsche-design-system/blob/main/packages/components/src/utils/setScrollLock.ts"}},[e._v("Current implementation")])]),t("br")]),t("TableOfContents"),t("h2",[e._v("Basic")]),e._m(1),e._m(2),e._m(3),t("Playground",{attrs:{frameworkMarkup:e.codeExample,markup:e.codeExample["vanilla-js"],config:e.config}}),t("h2",[e._v("Active identifier")]),e._m(4),t("Playground",{attrs:{frameworkMarkup:e.codeExampleActiveIdentifier,markup:e.codeExampleActiveIdentifier["vanilla-js"],config:e.config}}),t("h3",[t("A11yIcon"),e._v(" Accessibility hints")],1),e._m(5),t("h2",[e._v("Example with custom content")]),e._m(6),e._m(7),t("Playground",{attrs:{frameworkMarkup:e.codeExampleCustomContent,markup:e.codeExampleCustomContent["vanilla-js"],config:e.config}})],1)},i=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-flyout-multilevel")]),e._v(" component is meant for displaying a multilevel structure in a flyout that overlays the page content from the start side of the screen. It is a controlled component that gives you flexible control over its behavior.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The basic concept of the component is to have a button that opens the "),t("code",[e._v("p-flyout-multilevel")]),e._v(" and a basic 2-level multilevel structure. The "),t("strong",[e._v("1st level")]),e._v(" is generated out of custom "),t("code",[e._v("p-flyout-multilevel-item")]),e._v(" components which generates a list of toggle buttons to navigate the 2nd level. These items can be filled with slotted anchor links as children which then represent the "),t("strong",[e._v("2nd level")]),e._v(" of the multilevel and are styled automatically by the component.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The most important property of p-flyout is its "),t("code",[e._v("open")]),e._v(" property. When it is set to "),t("code",[e._v("true")]),e._v(" the flyout will be visible.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("In order to get notified when the "),t("code",[e._v("p-flyout-multilevel")]),e._v(" gets closed by clicking the x button, you need to register an event listener for the dismiss event which is emitted by "),t("code",[e._v("p-flyout-multilevel")]),e._v(".")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-flyout-multilevel")]),e._v(" can be initialized with an "),t("code",[e._v("active-identifier")]),e._v(" property. This identifier is used to open the flyout with the corresponding "),t("strong",[e._v("2nd level")]),e._v(" multilevel item expanded. The "),t("code",[e._v("active-identifier")]),e._v(" must match a value of the "),t("code",[e._v("identifier")]),e._v(" property of the "),t("code",[e._v("p-flyout-multilevel-item")]),e._v(" component.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Always take care that you expose the current state of the multilevel to the user. This can be done by using the "),t("code",[e._v('aria-current="page"')]),e._v(" attribute on the corresponding anchor element. And this also causes automatic styling of this anchor.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("To give further flexibility, e.g. if you only want to provide a direct link to a page on the "),t("strong",[e._v("1st level")]),e._v(", you can just use the "),t("code",[e._v("p-link-pure")]),e._v(" component. Be aware that you have to adapt the styling of those custom "),t("strong",[e._v("1st level")]),e._v(" items to match the design of the other 1st level items.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("To gain more structure on the "),t("strong",[e._v("2nd level")]),e._v(" we also support out-of-the-box styling of "),t("code",[e._v("<h1> to <h6>")]),e._v(", "),t("code",[e._v("<p>")]),e._v(" and "),t("code",[e._v("<a>")]),e._v(" tags. Regarding further individualization of the "),t("strong",[e._v("2nd level")]),e._v(", you can create your own custom contents and use it as a child besides the already supported tags.")])}],l=o("ade3"),s=(o("7b4b"),o("2b0e")),r=o("2fe1"),a=o("526d"),c=function(e,t,o,n){var i,l=arguments.length,s=l<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,n);else for(var r=e.length-1;r>=0;r--)(i=e[r])&&(s=(l<3?i(s):l>3?i(t,o,s):i(t,o))||s);return l>3&&s&&Object.defineProperty(t,o,s),s};let u=class extends s["a"]{constructor(...e){super(...e),Object(l["a"])(this,"config",{themeable:!0}),Object(l["a"])(this,"flyoutMultilevels",[]),Object(l["a"])(this,"codeExample",Object(a["h"])("default")),Object(l["a"])(this,"codeExampleActiveIdentifier",Object(a["h"])("example-active-identifier")),Object(l["a"])(this,"codeExampleCustomContent",Object(a["h"])("example-custom-content"))}mounted(){this.registerEvents()}updated(){this.registerEvents()}registerEvents(){this.flyoutMultilevels=document.querySelectorAll(".playground .demo p-flyout-multilevel");const e=document.querySelectorAll(".playground .demo > p-button");e.forEach((e,t)=>e.addEventListener("click",()=>this.openFlyout(t))),this.flyoutMultilevels.forEach((e,t)=>{e.addEventListener("dismiss",()=>this.closeFlyout(t)),e.addEventListener("update",t=>{e.activeIdentifier=t.detail.activeIdentifier})})}openFlyout(e){this.flyoutMultilevels[e].open=!0}closeFlyout(e){this.flyoutMultilevels[e].open=!1}};u=c([Object(r["b"])()],u);var v=u,d=v,h=o("2877"),f=Object(h["a"])(d,n,i,!1,null,null,null);t["default"]=f.exports},fa46:function(e,t,o){"use strict";var n=o("abdf").f,i=o("7a25"),l=o("7d53"),s=l("toStringTag");e.exports=function(e,t,o){e&&!o&&(e=e.prototype),e&&!i(e,s)&&n(e,s,{configurable:!0,value:t})}}}]);
//# sourceMappingURL=chunk-36d14d2a.8fc4f6ff.js.map