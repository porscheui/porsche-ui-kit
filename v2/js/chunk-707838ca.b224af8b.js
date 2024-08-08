(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-707838ca"],{2833:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"vmark"},[t("h1",[e._v("Notifications")]),t("TableOfContents"),t("h2",[e._v("Banner")]),e._m(0),e._m(1),t("h2",[e._v("Basic implementation")]),e._m(2),t("Playground",{attrs:{markup:e.basic,config:e.config}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],attrs:{"aria-label":"Select state"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.state=t.target.multiple?n:n[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select state")]),t("option",{attrs:{value:"neutral"}},[e._v("Neutral")]),t("option",{attrs:{value:"warning"}},[e._v("Warning")]),t("option",{attrs:{value:"error"}},[e._v("Error")])])]),t("h2",[e._v("Persistent")]),e._m(3),t("Playground",{attrs:{markup:e.persistent,config:e.config}}),t("h2",[e._v("Width")]),e._m(4),t("Playground",{attrs:{markup:e.markupWidth,config:e.config}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.width,expression:"width"}],attrs:{"aria-label":"Select width"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.width=t.target.multiple?n:n[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select width")]),t("option",{attrs:{value:"basic"}},[e._v("Basic")]),t("option",{attrs:{value:"extended"}},[e._v("Extended")]),t("option",{attrs:{value:"fluid"}},[e._v("Fluid")])])]),t("h2",[e._v("Example with user interaction")]),t("p",[t("p-button",{attrs:{type:"button"},on:{click:function(t){return e.openBanner(t)}}},[e._v("Open Banner")])],1),t("h3",[t("A11yIcon"),e._v(" Accessibility hints")],1),e._m(5),t("h2",[e._v("Custom styling")]),e._m(6),e._m(7)],1)},o=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-banner")]),e._v(" component provides action-based feedback messages (e.g. after performing a task) or to convey informational and/or critical notification like some site related topics.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Review the "),t("a",{attrs:{href:"components/notifications/decision-tree"}},[e._v("notification decision tree")]),e._v(" to determine which notification component is best for a particular scenario.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-banner")]),e._v(' component is positioned absolute above the page content by default. For personal adjustments, go to " Custom styling" section.')])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("If the "),t("strong",[e._v("Banner")]),e._v(" shouldn't be removable by the user, add "),t("code",[e._v("persistent")]),e._v(" prop.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-banner")]),e._v(" behaves the same as the "),t("strong",[e._v("ContentWrapper")]),e._v(" component and can be adapted to the same widths to match with your layout.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("To support "),t("strong",[e._v("keyboard navigation")]),e._v(", please take care of correct "),t("strong",[e._v("focus handling")]),e._v(" after closing the Banner with "),t("code",[e._v("ESC")]),e._v(" or "),t("code",[e._v("Enter")]),e._v(" key: The trigger element (e.g. a button) which has opened the Banner must "),t("strong",[e._v("receive focus state again")]),e._v(" after the Banner is closed. This is important to keep focus order consistent. You can test it out by navigation this example with the keyboard only.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-banner")]),e._v(" component has some values which can be overwritten by CSS Custom Properties (aka CSS Variables):")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("pre",[t("code",{staticClass:"language-scss"},[e._v("// default CSS variables\n--p-banner-position-type: fixed;\n--p-banner-position-top: p-px-to-rem(56px);\n--p-banner-position-bottom: p-px-to-rem(56px);\n\n// overwrite with CSS variables\np-banner {\n  --p-banner-position-top: 200px;\n}\n")])])}],s=n("ade3"),r=n("0f9e"),i=n("2b0e"),c=n("2fe1"),p=n("be96");let l=class extends i["a"]{constructor(...e){super(...e),Object(s["a"])(this,"config",{themeable:!0}),Object(s["a"])(this,"state","neutral"),Object(s["a"])(this,"width","basic"),Object(s["a"])(this,"persistent",'<p-banner persistent="true">\n  <span slot="title">Some banner title</span>\n  <span slot="description">Some banner description.</span>\n</p-banner>'),Object(s["a"])(this,"openBanner",e=>{const t=document.createElement("p-banner"),n=e.currentTarget;t.innerHTML='\n      <span slot="title">Some banner title</span>\n      <span slot="description">Some banner description.</span>\n    ',document.getElementById("app").append(t),t.addEventListener("dismiss",()=>{n.focus()})})}get basic(){return`<p-banner state="${this.state}">\n  <span slot="title">Some banner title</span>\n  <span slot="description">Some banner description. You can also add inline <a href="https://porsche.com">links</a> to route to another page.</span>\n</p-banner>`}get markupWidth(){return`<p-banner width="${this.width}">\n  <span slot="title">Some banner title</span>\n  <span slot="description">Some banner description.</span>\n</p-banner>`}mounted(){const e=document.querySelectorAll("p-banner");e.forEach(e=>e.addEventListener("dismiss",()=>console.log("dismissed"))),Object(p["a"])(this.$el).then(()=>{document.querySelector("html").scrollTop=0})}};l=Object(r["b"])([c["b"]],l);var u=l,v=u,_=(n("c773"),n("2877")),d=Object(_["a"])(v,a,o,!1,null,"62fae58b",null);t["default"]=d.exports},bc69:function(e,t,n){},c773:function(e,t,n){"use strict";n("bc69")}}]);
//# sourceMappingURL=chunk-707838ca.b224af8b.js.map