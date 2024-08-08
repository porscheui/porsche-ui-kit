(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e6727af2"],{"3a02":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"vmark"},[e("ComponentHeading",{attrs:{name:"Button"}}),t._m(0),e("TableOfContents"),e("h2",[t._v("Variants")]),e("p",[t._v("Choose between predefined styling variants.")]),e("h3",[t._v("Primary (default)")]),e("p",[t._v('Button with label only (default) and with icon only (default: "arrow-right") in different states.')]),e("Playground",{attrs:{markup:t.primary,config:t.config}}),e("h3",[t._v("Secondary")]),e("Playground",{attrs:{markup:t.secondary,config:t.config}}),e("h3",[t._v("Tertiary (deprecated)")]),e("Notification",{attrs:{heading:"Important note","heading-tag":"h4",state:"error"}},[t._v(" The variant `tertiary` is deprecated and will be removed with next major release. In case, e.g. "),e("b",[t._v('variant="tertiary"')]),t._v(" is used it will automatically be mapped to variant "),e("b",[t._v('"secondary"')]),t._v(". ")]),e("Playground",{attrs:{markup:t.tertiary,config:t.config}}),e("h3",[t._v("Ghost")]),e("Playground",{attrs:{markup:t.ghost,config:t.config}}),e("h3",[t._v("Responsive")]),e("Playground",{attrs:{markup:t.responsive,config:t.config}}),e("h2",[t._v("ARIA attributes and states")]),t._m(1),e("Playground",{attrs:{markup:t.accessibility,config:t.config}}),e("h3",[e("A11yIcon"),t._v(" Accessibility hints")],1),t._m(2),e("hr"),e("h2",[t._v("Compact")]),t._m(3),e("Playground",{attrs:{markup:t.compact,config:t.config}}),e("hr"),e("h2",[t._v("Button with specific icon")]),t._m(4),e("Playground",{attrs:{markup:t.icon,config:t.config}}),e("hr"),e("h2",[t._v("Bind events to the Button")]),t._m(5),e("Playground",{attrs:{markup:t.events,config:t.config}}),e("hr"),e("h2",[t._v("Remove Button from tab order")]),t._m(6),e("Playground",{attrs:{markup:t.taborder,config:t.config}}),e("h2",[t._v("Form")]),t._m(7),e("Playground",{attrs:{frameworkMarkup:t.formExample,config:{...t.config,withoutDemo:!0}}},[e("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit.apply(null,arguments)}}},[e("p-button",{staticStyle:{"margin-inline-end":"16px"},attrs:{name:"option",value:"A",type:"submit",theme:t.theme}},[t._v("Button A")]),e("p-button",{attrs:{name:"option",value:"B",type:"submit",theme:t.theme}},[t._v("Button B")])],1),e("p-text",{attrs:{theme:t.theme}},[t._v(t._s(t.selectedValuesForm))])],1)],1)},a=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The "),e("code",[t._v("p-button")]),t._v(" component is essential for performing form or "),e("strong",[t._v("interaction")]),t._v(" events. For an optimal user guidance and dedicated pursuit of business or sales goals, different types of Buttons ("),e("strong",[t._v("Primary")]),t._v(" and "),e("strong",[t._v("Secondary")]),t._v(") are available for usage. A Button can be used with or without a label but it's recommended to keep the "),e("strong",[t._v("label visible")]),t._v(" for better "),e("strong",[t._v("usability")]),t._v(" whenever possible. When used without a label, it is mandatory for "),e("strong",[t._v("accessibility")]),t._v(" to provide a descriptive label text for screen readers. Whenever you want to provide navigational elements, stick to the "),e("a",{attrs:{href:"components/link"}},[t._v("Link")]),t._v(" component instead.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("Through the "),e("code",[t._v("aria")]),t._v(" property you have the possibility to provide additional "),e("strong",[t._v("ARIA")]),t._v(" attributes and states to the component.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",[e("li",[t._v("Make sure to provide "),e("strong",[t._v("descriptive")]),t._v(", self explaining "),e("strong",[t._v("labels")]),t._v(" which could be understood without context. If short labels are used like "),e("strong",[t._v('"OK"')]),t._v(" make sure to provide additional textual contents through "),e("strong",[t._v("ARIA")]),t._v(" with the "),e("code",[t._v("aria")]),t._v(" property to expose a more descriptive experience to screen reader users.")]),e("li",[t._v("If implementing the Button with a "),e("strong",[t._v("hidden label")]),t._v(" ("),e("code",[t._v('hide-label="true"')]),t._v("), do not omit the label. Providing a "),e("strong",[t._v("descriptive text")]),t._v(" to support "),e("strong",[t._v("screen reader")]),t._v(" users is "),e("strong",[t._v("mandatory")]),t._v(".")]),e("li",[t._v("In general, you should "),e("strong",[t._v("prevent")]),t._v(" using the "),e("code",[t._v('disabled="true"')]),t._v(" state. Disabled elements are not reachable (focusable) anymore and can be missed by screen reader users. They can be confusing for sighted users as well by not pointing out why these elements are disabled.")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("By setting "),e("code",[t._v("compact")]),t._v(" to "),e("code",[t._v("true")]),t._v(" you can have a more compact button with reduced spacings.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("If an icon needs to be implemented, just set another predefined icon. Per default, all icons are fetched from the Porsche Design System CDN. Just choose an icon name from the "),e("code",[t._v("icon")]),t._v(" property. If you need to link to another icon hosted somewhere else, just set the whole icon path to the "),e("code",[t._v("iconSource")]),t._v(" prop.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("You can use native "),e("code",[t._v("click")]),t._v(", "),e("code",[t._v("focus")]),t._v(", "),e("code",[t._v("focusin")]),t._v(", "),e("code",[t._v("blur")]),t._v(" and "),e("code",[t._v("focusout")]),t._v(" events on the button.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("By setting the "),e("code",[t._v("tabindex")]),t._v(" attribute to "),e("code",[t._v("-1")]),t._v(" you can remove the "),e("strong",[t._v("Button")]),t._v(" from the tab order.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("When used as a submit button, the "),e("code",[t._v("name")]),t._v(" and "),e("code",[t._v("value")]),t._v(" props are submitted as a pair as part of the form data.")])}],r=o("ade3"),i=(o("7b4b"),o("2b0e")),s=o("2fe1"),l=o("526d"),u=function(t,e,o,n){var a,r=arguments.length,i=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(a=t[s])&&(i=(r<3?a(i):r>3?a(e,o,i):a(e,o))||i);return r>3&&i&&Object.defineProperty(e,o,i),i};let c=class extends i["a"]{constructor(...t){super(...t),Object(r["a"])(this,"config",{themeable:!0,spacing:"inline"}),Object(r["a"])(this,"formExample",Object(l["c"])()),Object(r["a"])(this,"primary",'<p-button>Some label</p-button>\n<p-button loading>Some label</p-button>\n<p-button disabled>Some label</p-button>\n<br>\n<p-button hide-label="true" icon="arrow-right">Some label</p-button>\n<p-button hide-label="true" icon="arrow-right" loading>Some label</p-button>\n<p-button hide-label="true" icon="arrow-right" disabled>Some label</p-button>'),Object(r["a"])(this,"secondary",'<p-button variant="secondary">Some label</p-button>\n<p-button variant="secondary" loading="true">Some label</p-button>\n<p-button variant="secondary" disabled="true">Some label</p-button>\n<br>\n<p-button variant="secondary" hide-label="true" icon="arrow-right">Some label</p-button>\n<p-button variant="secondary" hide-label="true" icon="arrow-right" loading>Some label</p-button>\n<p-button variant="secondary" hide-label="true" icon="arrow-right" disabled>Some label</p-button>'),Object(r["a"])(this,"tertiary",'<p-button variant="tertiary">Some label</p-button>\n<p-button variant="tertiary" loading="true">Some label</p-button>\n<p-button variant="tertiary" disabled="true">Some label</p-button>\n<br>\n<p-button variant="tertiary" hide-label="true" icon="arrow-right">Some label</p-button>\n<p-button variant="tertiary" hide-label="true" icon="arrow-right" loading>Some label</p-button>\n<p-button variant="tertiary" hide-label="true" icon="arrow-right" disabled>Some label</p-button>'),Object(r["a"])(this,"ghost",'<p-button variant="ghost">Some label</p-button>\n<p-button variant="ghost" loading="true">Some label</p-button>\n<p-button variant="ghost" disabled="true">Some label</p-button>\n<br>\n<p-button variant="ghost" hide-label="true" icon="arrow-right">Some label</p-button>\n<p-button variant="ghost" hide-label="true" icon="arrow-right" loading>Some label</p-button>\n<p-button variant="ghost" hide-label="true" icon="arrow-right" disabled>Some label</p-button>'),Object(r["a"])(this,"responsive",'<p-button variant="primary" hide-label="{ base: true, s: false }" icon="arrow-right">Some label</p-button>\n<p-button variant="secondary" hide-label="{ base: true, m: false }" icon="arrow-right">Some label</p-button>'),Object(r["a"])(this,"accessibility","<p-button aria=\"{ 'aria-label': 'Some more descriptive label' }\">Some label</p-button>"),Object(r["a"])(this,"compact",'<p-button compact="true">Some label</p-button>\n<p-button compact="true" variant="secondary">Some label</p-button>\n<p-button compact="true" variant="ghost">Some label</p-button>'),Object(r["a"])(this,"icon",`<p-button icon="delete">Some label</p-button>\n<p-button icon-source="${o("9e35")}" hide-label="true">Some label</p-button>`),Object(r["a"])(this,"events","<p-button\n  onclick=\"alert('click')\"\n  onfocus=\"console.log('focus')\"\n  onfocusin=\"console.log('focusin')\"\n  onblur=\"console.log('blur')\"\n  onfocusout=\"console.log('focusout')\"\n>Some label</p-button>"),Object(r["a"])(this,"taborder",'<p-button>Some label</p-button>\n<p-button tabindex="-1" hide-label="true" icon="arrow-right">Some label</p-button>\n<p-button>Some label</p-button>'),Object(r["a"])(this,"selectedValuesForm","Last submitted data: none")}get theme(){return this.$store.getters.playgroundTheme}onSubmit(t){const e=Array.from(new FormData(t.target,t.submitter).entries())[0];this.selectedValuesForm="Last submitted data: "+(e.join("=")||"none")}};c=u([s["b"]],c);var b=c,p=b,d=o("2877"),v=Object(d["a"])(p,n,a,!1,null,null,null);e["default"]=v.exports},"7b4b":function(t,e,o){"use strict";var n=o("6b1d"),a=o("f498"),r=o("fa46");n({global:!0},{Reflect:{}}),r(a.Reflect,"Reflect",!0)},"9e35":function(t,e,o){t.exports=o.p+"img/icon-custom-kaixin.bbde6f67.svg"},fa46:function(t,e,o){"use strict";var n=o("abdf").f,a=o("7a25"),r=o("7d53"),i=r("toStringTag");t.exports=function(t,e,o){t&&!o&&(t=t.prototype),t&&!a(t,i)&&n(t,i,{configurable:!0,value:e})}}}]);
//# sourceMappingURL=chunk-e6727af2.379202ce.js.map