(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-650b09f7"],{"06a6":function(e,t,i){},8600:function(e,t,i){"use strict";i("06a6")},cd30:function(e,t,i){"use strict";i.r(t);var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"vmark"},[t("ComponentHeading",{attrs:{name:"Link Tile Product"}}),t("Notification",{attrs:{heading:"Experimental Component","heading-tag":"h2",state:"warning"}},[e._v(" The "),t("code",[e._v("p-link-tile-product")]),e._v(" component is experimental and might be changed or removed in a future release. ")]),e._m(0),t("Notification",{attrs:{heading:"Image Aspect Ratio","heading-tag":"h2",state:"warning"}},[e._v(" The image within the component has a fixed aspect ratio of 8:9. For optimal presentation, it is recommended that the supplied image adheres to the same aspect ratio of 8:9 and includes a transparent background. ")]),t("TableOfContents"),t("h2",[e._v("Basic")]),e._m(1),e._m(2),t("Playground",{attrs:{markup:e.basic,config:e.config}}),t("h2",[e._v("Like Button")]),e._m(3),t("Playground",{attrs:{markup:e.likeButtonMarkup,config:e.config}},[t("PlaygroundSelect",{attrs:{values:e.likeButtons,name:"like-button"},model:{value:e.likeButton,callback:function(t){e.likeButton=t},expression:"likeButton"}})],1),t("h2",[e._v("Header")]),e._m(4),t("Playground",{attrs:{markup:e.header,config:e.config}}),t("h2",[e._v("Price Original")]),e._m(5),t("Playground",{attrs:{markup:e.priceOriginalMarkup,config:e.config}}),t("h2",[e._v("Description")]),e._m(6),t("Playground",{attrs:{markup:e.description,config:e.config}}),t("h2",[e._v("Aspect Ratio")]),e._m(7),t("Playground",{attrs:{markup:e.aspectRatioMarkup,config:e.config}},[t("PlaygroundSelect",{attrs:{values:e.aspectRatios,name:"aspectRatio"},model:{value:e.aspectRatio,callback:function(t){e.aspectRatio=t},expression:"aspectRatio"}})],1),t("h2",[e._v("Framework routing (anchor nesting)")]),e._m(8),t("Playground",{attrs:{markup:e.slottedLink,config:e.config}}),t("h2",[e._v("Framwork Example")]),t("Playground",{attrs:{frameworkMarkup:e.example,config:{...e.config,withoutDemo:!0}}},[t("p-link-tile-product",{attrs:{heading:"Some product",price:"1.911,00 €",description:"Some description",href:"https://porsche.com",liked:e.liked,theme:e.theme},on:{like:e.handleLike}},[t("p-tag",{attrs:{slot:"header",color:"background-base"},slot:"header"},[e._v("New")]),t("img",{attrs:{src:e.imgSrc2,width:"800",height:"900",alt:"Some alt text"}})],1)],1)],1)},n=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-link-tile-product")]),e._v(' is a navigational component designed to showcase a featured product within a store. it offers the option to "like" the product, allowing you to easily add it to the users wishlist. Additionally, you can place a chip at the top to signal special features about the product, such as its novelty or exclusivity.')])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("An "),t("code",[e._v("img")]),e._v(" or "),t("code",[e._v("picture")]),e._v(" element has to be available as a child of the "),t("code",[e._v("p-link-tile-product")]),e._v(" component.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("heading")]),e._v(" and "),t("code",[e._v("price")]),e._v(" properties are required and a link must be provided, using either the "),t("code",[e._v("href")]),e._v(" property or a "),t("a",{attrs:{href:"components/link-tile-product/examples#framework-routing-anchor-nesting"}},[e._v("slotted link")]),e._v(".")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("likeButton")]),e._v(" property can be used to hide the like button. By default, the like button is shown.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("If you want to signal special features about the product, such as its novelty or exclusivity, use the "),t("code",[e._v("header")]),e._v(" slot. Although you can pass in anything, it is recommended to use the "),t("code",[e._v("p-tag")]),e._v(" component.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("If you want to visualize the original (recommended retail price) and the retail price (with discount) then you can make use of "),t("code",[e._v("priceOriginal")]),e._v(" property.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("If you want to add any additional description, use the "),t("code",[e._v("description")]),e._v(" property.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("While the image will always stay at an aspect ratio of "),t("code",[e._v("8:9")]),e._v(", the aspect ratio of the component itself can be configured using the "),t("code",[e._v("aspect-ratio")]),e._v(" property to be either "),t("code",[e._v("3:4")]),e._v(" or "),t("code",[e._v("9:16")]),e._v(". This can be especially useful to extend the space for the image by using the "),t("code",[e._v("9:16")]),e._v(" aspect ratio on smaller viewports and the "),t("code",[e._v("3:4")]),e._v(" on larger ones.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("To support framework routing you can provide the link as a slotted element by using the "),t("code",[e._v("anchor")]),e._v(" slot instead of using the "),t("code",[e._v("href")]),e._v(" property. Ensure the named slot is directly on the anchor element, without nesting. To ensure accessibility, the slotted link must be labeled with both the product name, its price and optionally with the original price.")])}],r=i("ade3"),a=(i("7b4b"),i("2b0e")),s=i("2fe1"),c=i("fe30"),l=i("8309"),p=function(e,t,i,o){var n,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(a=(r<3?n(a):r>3?n(t,i,a):n(t,i))||a);return r>3&&a&&Object.defineProperty(t,i,a),a};let h=class extends a["a"]{constructor(...e){super(...e),Object(r["a"])(this,"config",{themeable:!0,spacing:"block"}),Object(r["a"])(this,"imgSrc","https://porsche-design-system.github.io/porsche-design-system/weekender.webp"),Object(r["a"])(this,"imgSrcLarge","https://porsche-design-system.github.io/porsche-design-system/weekender@2x.webp"),Object(r["a"])(this,"imgSrc2","https://porsche-design-system.github.io/porsche-design-system/placeholder_800x900.svg"),Object(r["a"])(this,"img",`<img src="${this.imgSrc}" alt="Some alt text" />`),Object(r["a"])(this,"link",'<a slot="anchor" href="https://porsche.com">Weekender, sale price 718,00 €, original price <s>911,00 €</s></a>'),Object(r["a"])(this,"headerSlot",'<p-tag slot="header" color="background-base">New</p-tag>'),Object(r["a"])(this,"liked",!1),Object(r["a"])(this,"example",Object(l["a"])()),Object(r["a"])(this,"basic",`<p-link-tile-product heading="Weekender" price="1.911,00 €" href="https://porsche.com">\n  ${this.img}\n</p-link-tile-product>`),Object(r["a"])(this,"likeButton","false"),Object(r["a"])(this,"likeButtons",["true","false"]),Object(r["a"])(this,"header",`<p-link-tile-product heading="Weekender" price="1.911,00 €" href="https://porsche.com">\n  ${this.headerSlot}\n  ${this.img}\n</p-link-tile-product>`),Object(r["a"])(this,"description",`<p-link-tile-product heading="Weekender" price="1.911,00 €" href="https://porsche.com" description="incl. VAT">\n  ${this.img}\n</p-link-tile-product>`),Object(r["a"])(this,"aspectRatio","3:4"),Object(r["a"])(this,"aspectRatios",[...c["a"],"{ base: '9:16', s: '3:4' }"]),Object(r["a"])(this,"slottedLink",`<p-link-tile-product heading="Weekender" price="718,00 €" price-original="911,00 €" description="incl. VAT">\n  ${this.link}\n  ${this.img}\n</p-link-tile-product>`)}handleLike(e){e.preventDefault(),this.liked=!e.detail.liked}get theme(){return this.$store.getters.playgroundTheme}get likeButtonMarkup(){return`<p-link-tile-product heading="Weekender" price="1.911,00 €" href="https://porsche.com" ${"false"===this.likeButton?'like-button="false"':""}>\n  ${this.img}\n</p-link-tile-product>`}get priceOriginalMarkup(){return`<p-link-tile-product heading="Weekender" price="718,00 €" price-original="911,00 €" href="https://porsche.com">\n  ${this.img}\n</p-link-tile-product>`}get aspectRatioMarkup(){return`<p-link-tile-product heading="Weekender" price="1.911,00 €" href="https://porsche.com" description="incl. VAT" aspect-ratio="${this.aspectRatio}">\n  ${this.headerSlot}\n  ${this.img}\n</p-link-tile-product>`}};h=p([s["b"]],h);var u=h,d=u,g=(i("8600"),i("2877")),f=Object(g["a"])(d,o,n,!1,null,"00f11496",null);t["default"]=f.exports},fe30:function(e,t,i){"use strict";i.d(t,"a",(function(){return o})),i.d(t,"b",(function(){return n}));const o=["3:4","9:16"],n="anchor"}}]);
//# sourceMappingURL=chunk-650b09f7.1bb6af0f.js.map