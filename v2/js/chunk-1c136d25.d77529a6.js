(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c136d25"],{"599f":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"vmark"},[e("h1",[t._v("Notifications")]),e("TableOfContents"),e("h2",[t._v("Inline Notification")]),t._m(0),t._m(1),e("h2",[t._v("Basic")]),e("Playground",{attrs:{markup:t.basic,config:t.config}}),e("h2",[t._v("State")]),t._m(2),e("Playground",{attrs:{markup:t.stateDemo,config:t.config}},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.state,expression:"state"}],attrs:{"aria-label":"Select state"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.state=e.target.multiple?n:n[0]}}},[e("option",{attrs:{disabled:""}},[t._v("Select state")]),e("option",{attrs:{value:"neutral"}},[t._v("Neutral")]),e("option",{attrs:{value:"success"}},[t._v("Success")]),e("option",{attrs:{value:"warning"}},[t._v("Warning")]),e("option",{attrs:{value:"error"}},[t._v("Error")])])]),e("h2",[t._v("Persistent")]),t._m(3),e("Playground",{attrs:{markup:t.persistent,config:t.config}}),e("h2",[t._v("Event Handling")]),e("h3",[t._v("Close Button")]),t._m(4),e("Playground",{attrs:{frameworkMarkup:t.events,config:t.config}},[e("button",{attrs:{id:"bannerEventsButton",type:"button"}},[t._v("Show Inline Notification")]),e("br"),e("br"),e("div",{attrs:{id:"bannerEventsWrapper",hidden:""}},[e("p-inline-notification",{attrs:{heading:t.defaultHeading,description:t.defaultDescription}})],1)]),e("h3",[t._v("Action Button")]),t._m(5),e("Playground",{attrs:{frameworkMarkup:t.actionButton,config:t.config}},[e("p-inline-notification",{attrs:{id:"bannerAction",heading:t.defaultHeading,description:t.defaultDescription,"action-label":"Retry","action-icon":"reset"}}),e("br"),e("button",{attrs:{id:"bannerActionButton",type:"button"}},[t._v("Reset `actionLoading`")])],1),e("h2",[t._v("Slotted Content")]),t._m(6),e("Playground",{attrs:{markup:t.slottedContent,config:t.config}})],1)},o=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The "),e("code",[t._v("p-inline-notification")]),t._v(" is a controlled component that provides action-based feedback messages (e.g. after performing a task) or to convey informational and/or critical notification like some site related topics.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("Review the "),e("a",{attrs:{href:"components/notifications/decision-tree"}},[t._v("notification decision tree")]),t._v(" to determine which notification component is best for a particular scenario.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("Coloring can be controlled via the "),e("code",[t._v("state")]),t._v(" property.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("To make the "),e("code",[t._v("p-inline-notification")]),t._v(" non-closable by the user, use the "),e("code",[t._v("persistent")]),t._v(" property.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The custom event that is emitted on close button click is called "),e("code",[t._v("dismiss")]),t._v("."),e("br"),t._v(" It can be used to remove the component.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("A custom interaction, e.g., to retry the previous action like submitting a form, can be provided by setting the optional "),e("code",[t._v("actionLabel")]),t._v(", "),e("code",[t._v("actionIcon")]),t._v(" and "),e("code",[t._v("actionLoading")]),t._v(" properties."),e("br"),t._v(" The custom event that is emitted on action button click is called "),e("code",[t._v("action")]),t._v(".")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("Rich markup for the "),e("code",[t._v("heading")]),t._v(" can be applied by using "),e("code",[t._v('slot="heading"')]),t._v("."),e("br"),t._v(" Rich markup for the "),e("code",[t._v("description")]),t._v(" can be used by the unnamed default slot.")])}],a=n("ade3"),s=n("0f9e"),c=n("2b0e"),r=n("2fe1"),l=n("526d");let d=class extends c["a"]{constructor(...t){super(...t),Object(a["a"])(this,"config",{themeable:!0}),Object(a["a"])(this,"state","neutral"),Object(a["a"])(this,"width","basic"),Object(a["a"])(this,"defaultHeading","Some heading"),Object(a["a"])(this,"defaultDescription","Some description."),Object(a["a"])(this,"slottedHeading","Some slotted heading"),Object(a["a"])(this,"slottedDescription",'Some slotted description. You can also add inline <a href="https://porsche.com">links</a> to route to another page.'),Object(a["a"])(this,"basic",`<p-inline-notification heading="${this.defaultHeading}" description="${this.defaultDescription}">\n</p-inline-notification>\n<br>\n\x3c!-- or alternatively --\x3e\n<p-inline-notification heading="${this.defaultHeading}">\n  ${this.defaultDescription}\n</p-inline-notification>`),Object(a["a"])(this,"persistent",`<p-inline-notification heading="${this.defaultHeading}" description="${this.defaultDescription}" persistent="true">\n</p-inline-notification>`),Object(a["a"])(this,"slottedContent",`<p-inline-notification>\n  <span slot="heading">${this.slottedHeading}</span>\n  ${this.slottedDescription}\n</p-inline-notification>`),Object(a["a"])(this,"events",Object(l["d"])("example-events")),Object(a["a"])(this,"actionButton",Object(l["d"])("example-action-button"))}get stateDemo(){return`<p-inline-notification heading="${this.defaultHeading}" description="${this.defaultDescription}" state="${this.state}">\n</p-inline-notification>`}mounted(){const t=document.querySelector("#bannerEventsButton"),e=document.querySelector("#bannerEventsWrapper p-inline-notification"),{parentElement:n}=e;t.addEventListener("click",()=>n.hidden=!1),e.addEventListener("dismiss",()=>n.hidden=!0);const i=document.querySelector("#bannerActionButton"),o=document.querySelector("#bannerAction");i.addEventListener("click",()=>o.actionLoading=!1),o.addEventListener("action",()=>o.actionLoading=!0)}};d=Object(s["b"])([r["b"]],d);var u=d,p=u,f=(n("5f3f"),n("2877")),v=Object(f["a"])(p,i,o,!1,null,"392e6ecc",null);e["default"]=v.exports},"5f3f":function(t,e,n){"use strict";n("c5cb")},c5cb:function(t,e,n){}}]);
//# sourceMappingURL=chunk-1c136d25.d77529a6.js.map