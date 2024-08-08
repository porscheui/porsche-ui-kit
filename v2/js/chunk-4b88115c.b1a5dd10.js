(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4b88115c"],{8536:function(e,t,i){},"99d3":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"vmark"},[t("h1",[e._v("Link Pure")]),e._m(0),t("TableOfContents"),t("h2",[e._v("Basic example")]),t("h3",[e._v("With label")]),t("Playground",{attrs:{markup:e.withLabel,config:e.config}}),t("h3",[e._v("Without label")]),t("Playground",{attrs:{markup:e.withoutLabel,config:e.config}}),t("h3",[e._v("Responsive")]),t("Playground",{attrs:{markup:e.responsive,config:e.config}}),t("h2",[e._v("ARIA attributes and states")]),e._m(1),t("Playground",{attrs:{markup:e.accessibility,config:e.config}}),t("h3",[t("A11yIcon"),e._v(" Accessibility hints")],1),e._m(2),t("hr"),t("h3",[e._v("Without Icon")]),e._m(3),e._m(4),e._m(5),t("Playground",{attrs:{markup:e.withoutIcon,config:e.configInline}}),t("h2",[e._v("Size")]),e._m(6),e._m(7),t("Playground",{attrs:{markup:e.sizeMarkup,config:e.config}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],attrs:{"aria-label":"Select style variant"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.size=t.target.multiple?i:i[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select style variant")]),t("option",[e._v("x-small")]),t("option",[e._v("small")]),t("option",[e._v("medium")]),t("option",[e._v("large")]),t("option",[e._v("x-large")]),t("option",[e._v("inherit")])])]),t("h3",[e._v("Responsive")]),e._m(8),t("Playground",{attrs:{markup:e.sizeResponsive,config:e.config}}),t("hr"),t("h2",[e._v("Weight")]),e._m(9),t("Playground",{attrs:{markup:e.weightMarkup,config:e.config}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],attrs:{"aria-label":"Select weight"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.weight=t.target.multiple?i:i[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select weight")]),t("option",[e._v("thin")]),t("option",[e._v("regular")]),t("option",[e._v("bold")])])]),t("hr"),t("h2",[e._v("Framework routing (anchor nesting)")]),e._m(10),t("Playground",{attrs:{markup:e.routing,config:e.config}}),t("hr"),t("h2",[e._v("Active state")]),e._m(11),t("Playground",{attrs:{markup:e.activeHref,config:e.config}}),t("hr"),t("h2",[e._v('Examples how to use with Framework specific router and "active state" support')]),t("h3",[e._v("Angular")]),e._m(12),t("h3",[e._v("React")]),e._m(13),t("h3",[e._v("VueJs")]),e._m(14),t("h2",[e._v("Link with specific icon")]),e._m(15),t("Playground",{attrs:{markup:e.icon,config:e.configInline}}),t("hr"),t("h2",[e._v("Alignment")]),e._m(16),t("Playground",{attrs:{markup:e.alignmentMarkup,config:e.config}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.alignLabel,expression:"alignLabel"}],attrs:{"aria-label":"Select alignment"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.alignLabel=t.target.multiple?i:i[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select alignment")]),t("option",{attrs:{value:"left"}},[e._v("Left")]),t("option",{attrs:{value:"right"}},[e._v("Right")]),t("option",{attrs:{value:"{ base: 'left', l: 'right' }"}},[e._v("Responsive")])])]),t("hr"),t("h2",[e._v("Stretch")]),e._m(17),t("Playground",{attrs:{markup:e.stretchMarkup,config:e.config}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.stretch,expression:"stretch"}],attrs:{"aria-label":"Select stretch and alignment"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.stretch=t.target.multiple?i:i[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select stretch and alignment")]),t("option",{attrs:{value:'stretch="true" align-label="left"'}},[e._v("stretch true, align-label left")]),t("option",{attrs:{value:'stretch="true" align-label="right"'}},[e._v("stretch true, align-label right")]),t("option",{attrs:{value:'stretch="false" align-label="left"'}},[e._v("stretch false, align-label left")]),t("option",{attrs:{value:'stretch="false" align-label="right"'}},[e._v("stretch false, align-label right")]),t("option",{attrs:{value:'stretch="{ base: true, l: false }" align-label="left"'}},[e._v("Responsive")])])]),t("hr"),t("h2",[e._v("Link Pure with custom clickable/focusable area")]),t("p",[e._v("Sometimes it might be useful to enlarge the clickable/focusable area of a link to fulfill accessibility guidelines. Therefore a custom padding can be set on the host element.")]),t("Playground",{attrs:{markup:e.clickableArea,config:e.configInline}}),t("hr"),t("h2",[e._v("Bind events to the link")]),e._m(18),t("Playground",{attrs:{markup:e.events,config:e.config}}),t("hr"),t("h2",[e._v("Remove Link Pure from tab order")]),e._m(19),t("Playground",{attrs:{markup:e.taborder,config:e.config}}),t("hr"),t("h2",[e._v("Link Pure with Subline")]),e._m(20),e._m(21),t("Playground",{attrs:{markup:e.subline,config:e.configInline}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.sublineSize,expression:"sublineSize"}],attrs:{"aria-label":"Select size"},on:{change:function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.sublineSize=t.target.multiple?i:i[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select size")]),t("option",[e._v("small")]),t("option",[e._v("medium")]),t("option",[e._v("large")]),t("option",[e._v("x-large")])])])],1)},o=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-link-pure")]),e._v(" component is essential for performing changes in "),t("strong",[e._v("page routes")]),e._v("."),t("br"),e._v(" A Link Pure can be used with or without a label, but it's recommended to keep the "),t("strong",[e._v("label visible")]),e._v(" for better ** usability** whenever possible."),t("br"),e._v(" When used without a label, it is mandatory for "),t("strong",[e._v("accessibility")]),e._v(" to provide a descriptive label text for screen readers."),t("br"),e._v(" When overriding the "),t("code",[e._v("position")]),e._v(" style of the "),t("code",[e._v("p-link-pure")]),e._v(" component, make sure to not use "),t("code",[e._v("position: static")]),e._v(", which would make the click area expand to the entire viewport."),t("br"),e._v(" In case you want the user to execute an action, you should select the "),t("a",{attrs:{href:"components/button"}},[e._v("Button")]),e._v(" or "),t("a",{attrs:{href:"components/button-pure"}},[e._v("Button Pure")]),e._v(" component instead.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Through the "),t("code",[e._v("aria")]),e._v(" property you have the possibility to provide additional "),t("strong",[e._v("ARIA")]),e._v(" attributes and states to the component.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ul",[t("li",[e._v("Make sure to provide "),t("strong",[e._v("descriptive")]),e._v(", self explaining "),t("strong",[e._v("labels")]),e._v(" which could be understood without context. If short labels are used like "),t("strong",[e._v('"OK"')]),e._v(" make sure to provide additional textual contents to expose a more descriptive experience to screen reader users. This can be done through "),t("strong",[e._v("ARIA")]),e._v(" with the "),t("code",[e._v("aria")]),e._v(" property or by using the "),t("strong",[e._v("slotted")]),e._v(" approach where you can set the "),t("code",[e._v("aria-label")]),e._v(" attribute directly on the anchor tag.")]),t("li",[e._v("If implementing the Link Pure with a "),t("strong",[e._v("hidden label")]),e._v(" ("),t("code",[e._v('hide-label="true"')]),e._v("), do not omit the label. Providing a ** descriptive text** to support "),t("strong",[e._v("screen reader")]),e._v(" users is "),t("strong",[e._v("mandatory")]),e._v(".")]),t("li",[e._v("In general, preventing opening new windows by default with ("),t("code",[e._v('target="_blank"')]),e._v(") is a good choice. Let users choose by themselves how to open links. However, if you choose to implement "),t("code",[e._v('target="_blank"')]),e._v(", make sure to provide additional information with ARIA label, e.g.: "),t("code",[e._v('aria-label="Porsche Taycan model page (opens in new window)"')])])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("By choosing "),t("code",[e._v('icon="none"')]),e._v(" the component is shown without icon.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The variant without icon is only recommended in the context of menus, where it is clearly evident that the component is clickable. If it is required in flowing text, a native link within the "),t("code",[e._v("p-text")]),e._v(" component can be used."),t("br"),e._v(" See "),t("a",{attrs:{href:"components/typography/text#text-with-a-link-button-and-bold-text-as-children"}},[e._v("text documentation")]),e._v(".")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[t("strong",[e._v("Caution:")]),e._v(" You can't combine this with the prop "),t("code",[e._v("hideLabel")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("There are predefined text sizes for the component which should cover most use cases. If a specific text size is needed, the size can be set to "),t("code",[e._v("inherit")]),e._v(" to specify the text size from outside.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[t("strong",[e._v("Hint:")]),e._v(" If you are in "),t("code",[e._v("hideLabel")]),e._v("-mode, be aware that the box-size of the rendered element will not be the same as the given (font-size) pixel value, e.g. setting a font-size of "),t("strong",[e._v('"44px"')]),e._v(" will not generate a box with a "),t("strong",[e._v('"44px"')]),e._v(" width/height but instead a box size generated out of Porsche type-scaling formula which will end in "),t("strong",[e._v('"52px"')]),e._v(" width/height.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The settings above can also be used on different major breakpoints "),t("code",[e._v("xs")]),e._v(", "),t("code",[e._v("s")]),e._v(", "),t("code",[e._v("m")]),e._v(", "),t("code",[e._v("l")]),e._v(", "),t("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("There are predefined default text weights. Be aware of using the "),t("code",[e._v("thin")]),e._v(" variant only with larger text sizes.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("To support custom anchor tags (e.g. framework specific routing) you can provide them as a "),t("strong",[e._v("slotted element")]),e._v(" ( recommended) of the component.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Providing visually differences if a link changes its state can be achieved by setting the "),t("code",[e._v("active")]),e._v(" property.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("pre",[t("code",{staticClass:"language-html"},[e._v('<p-link-pure [active]="rla.isActive">\n  <a routerLink="/path/to/heaven" routerLinkActive #rla="routerLinkActive"></a>\n</p-link-pure>\n')])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v('<PLinkPure active={isActive}>\n  <Link to="/path/to/heaven">Some label</Link>\n</PLinkPure>\n')])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("pre",[t("code",{staticClass:"language-html"},[e._v('<router-link :to="/path/to/heaven" v-slot="{ href, navigate, isActive }">\n  <p-link-pure :href="href" @click="navigate" :active="isActive">Some label</p-link-pure>\n</router-link>\n')])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("If another icon needs to be implemented, just replace the default icon with another predefined icon. Per default, all icons are fetched from the Porsche Design System CDN. Just choose an icon name from the "),t("code",[e._v("icon")]),e._v(" property. If you need to link to another icon hosted somewhere else, just set the whole icon path to the "),t("code",[e._v("iconSource")]),e._v(" prop.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("label")]),e._v(" can be aligned to the "),t("code",[e._v("right")]),e._v(" (default) or to the "),t("code",[e._v("left")]),e._v(" of the icon.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("stretch")]),e._v(" property extends the area between icon and label to the maximum available space. It is recommended to use stretch only on "),t("code",[e._v("left")]),e._v(" alignment and small viewports, e.g. mobile views.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("You can use native "),t("code",[e._v("click")]),e._v(", "),t("code",[e._v("focus")]),e._v(", "),t("code",[e._v("focusin")]),e._v(", "),t("code",[e._v("blur")]),e._v(" and "),t("code",[e._v("focusout")]),e._v(" events on the link.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("By setting the "),t("code",[e._v("tabindex")]),e._v(" attribute to "),t("code",[e._v("-1")]),e._v(" you can remove the "),t("strong",[e._v("Link Pure")]),e._v(" from the tab order.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("If you need additional information on your link, we provide a "),t("code",[e._v('<p slot="subline" />')]),e._v(". The size of the "),t("em",[e._v("subline")]),e._v(" changes according to the size of the "),t("em",[e._v("label")]),e._v(". We do not support "),t("code",[e._v('size="inherit"')]),e._v(", "),t("code",[e._v("stretch")]),e._v(" and "),t("code",[e._v("alignLabel")]),e._v("in this pattern so far.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[t("strong",[e._v("Note:")]),e._v(" If you intend to use a "),t("code",[e._v("<a>")]),e._v(" tag inside of the "),t("code",[e._v("p-link-pure")]),e._v(" component, keep in mind that the slot needs to be "),t("em",[e._v("outside")]),e._v(" of the anchor tag to function properly! Make sure to add an "),t("code",[e._v("aria-describedby")]),e._v(" attribute to expose the correct accessibility tree.")])}],r=i("ade3"),a=i("0f9e"),s=i("2b0e"),l=i("2fe1");let c=class extends s["a"]{constructor(...e){super(...e),Object(r["a"])(this,"config",{themeable:!0}),Object(r["a"])(this,"configInline",{...this.config,spacing:"inline"}),Object(r["a"])(this,"size","medium"),Object(r["a"])(this,"sublineSize","small"),Object(r["a"])(this,"weight","thin"),Object(r["a"])(this,"alignLabel","left"),Object(r["a"])(this,"stretch",'stretch="true" align-label="left"'),Object(r["a"])(this,"withLabel",'<p-link-pure href="https://www.porsche.com">Some label</p-link-pure>'),Object(r["a"])(this,"withoutLabel",'<p-link-pure href="https://www.porsche.com" hide-label="true">Some label</p-link-pure>'),Object(r["a"])(this,"responsive",'<p-link-pure href="https://www.porsche.com" hide-label="{ base: true, l: false }">Some label</p-link-pure>'),Object(r["a"])(this,"accessibility","<p-link-pure href=\"https://www.porsche.com\" aria=\"{ 'aria-label': 'Some more descriptive label' }\">Some label</p-link-pure>"),Object(r["a"])(this,"withoutIcon",'<p-link-pure icon="none" href="https://www.porsche.com">Some label</p-link-pure>\n<p-link-pure icon="none" size="small" weight="semibold" href="https://www.porsche.com">\n  Some label\n  <p slot="subline">Some Subline</p>\n</p-link-pure>'),Object(r["a"])(this,"sizeResponsive","<p-link-pure href=\"https://www.porsche.com\" size=\"{ base: 'small', l: 'medium' }\">Some label</p-link-pure>"),Object(r["a"])(this,"routing",'<p-link-pure>\n  <a href="https://www.porsche.com">Some label</a>\n</p-link-pure>'),Object(r["a"])(this,"activeHref",'<p-link-pure active="true" href="https://www.porsche.com">Some label</p-link-pure>'),Object(r["a"])(this,"activeWithoutHref",'<p-link-pure active="true">Some label</p-link-pure>'),Object(r["a"])(this,"icon",`<p-link-pure href="https://www.porsche.com" icon="phone">Some label</p-link-pure>\n<p-link-pure icon-source="${i("9e35")}" hide-label="true" href="https://www.porsche.com">Some label</p-link-pure>`),Object(r["a"])(this,"clickableArea",'<p-link-pure href="https://www.porsche.com" style="padding: 1rem;">Some label</p-link-pure>\n<p-link-pure href="https://www.porsche.com" hide-label="true" style="padding: 1rem;">Some label</p-link-pure>\n<p-link-pure style="padding: 1rem;">\n  <a href="https://www.porsche.com">Some label</a>\n</p-link-pure>\n<p-link-pure hide-label="true" style="padding: 1rem;">\n  <a href="https://www.porsche.com">Some label</a>\n</p-link-pure>'),Object(r["a"])(this,"events",'<p-link-pure\n  href="https://www.porsche.com"\n  onclick="alert(\'click\'); return false;"\n  onfocus="console.log(\'focus\')"\n  onfocusin="console.log(\'focusin\')"\n  onblur="console.log(\'blur\')"\n  onfocusout="console.log(\'focusout\')"\n>Some label</p-link-pure>'),Object(r["a"])(this,"taborder",'<p-link-pure href="https://www.porsche.com">Some label</p-link-pure>\n<p-link-pure href="https://www.porsche.com" tabindex="-1">Some label</p-link-pure>\n<p-link-pure href="https://www.porsche.com">Some label</p-link-pure>')}get sizeMarkup(){const e="inherit"===this.size?' style="font-size: 48px;"':"";return`<p-link-pure href="https://www.porsche.com" size="${this.size}"${e}>Some label</p-link-pure>`}get weightMarkup(){return`<p-link-pure href="https://www.porsche.com" size="medium" weight="${this.weight}">Some label</p-link-pure>`}get alignmentMarkup(){return`<p-link-pure align-label="${this.alignLabel}" href="https://www.porsche.com">Some label</p-link-pure>`}get stretchMarkup(){return`<p-link-pure ${this.stretch} href="https://www.porsche.com">Some label</p-link-pure>`}get subline(){return`<p-link-pure size="${this.sublineSize}" href="https://www.porsche.com">\n  Some label\n  <p slot="subline">Some Subline</p>\n</p-link-pure>\n<p-link-pure size="${this.sublineSize}" weight="semibold">\n  <a href="https://www.porsche.com" aria-describedby="subline">Some label</a>\n  <p slot="subline" id="subline">Some Subline</p>\n</p-link-pure>`}};c=Object(a["b"])([l["b"]],c);var u=c,p=u,h=(i("ffde"),i("2877")),v=Object(h["a"])(p,n,o,!1,null,"229df14b",null);t["default"]=v.exports},"9e35":function(e,t,i){e.exports=i.p+"img/icon-custom-kaixin.bbde6f67.svg"},ffde:function(e,t,i){"use strict";i("8536")}}]);
//# sourceMappingURL=chunk-4b88115c.b1a5dd10.js.map