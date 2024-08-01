(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-53ec3594"],{"9b7a":function(t,e,i){"use strict";i("f806")},caa2:function(t,e,i){t.exports=i.p+"img/lights.1124400a.jpg"},e182:function(t,e,i){t.exports=i.p+"img/image-grid-split-light.992170e6.png"},ea49:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"vmark"},[e("ComponentHeading",{attrs:{name:"Button Tile"}}),t._m(0),t._m(1),e("TableOfContents"),e("h2",[t._v("Basic")]),t._m(2),t._m(3),t._m(4),e("h4",[t._v("Supported named slots:")]),t._m(5),e("Playground",{attrs:{markup:t.basic,config:t.config}}),e("h3",[e("A11yIcon"),t._v(" Accessibility hints")],1),t._m(6),e("h2",[t._v("States")]),e("Playground",{attrs:{markup:t.stateMarkup,config:t.config}},[e("PlaygroundSelect",{attrs:{values:t.states,name:"state"},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}})],1),e("h2",[t._v("Aspect Ratio")]),t._m(7),e("Playground",{attrs:{markup:t.aspectRatioMarkup}},[e("PlaygroundSelect",{attrs:{values:t.aspectRatios,name:"aspectRatio"},model:{value:t.aspectRatio,callback:function(e){t.aspectRatio=e},expression:"aspectRatio"}})],1),e("h2",[t._v("Size")]),t._m(8),e("Playground",{attrs:{markup:t.sizeMarkup,config:t.config}},[e("PlaygroundSelect",{attrs:{values:t.sizes,name:"size"},model:{value:t.size,callback:function(e){t.size=e},expression:"size"}})],1),e("h2",[t._v("Weight")]),t._m(9),e("Playground",{attrs:{markup:t.weightMarkup,config:t.config}},[e("PlaygroundSelect",{attrs:{values:t.weights,name:"weight"},model:{value:t.weight,callback:function(e){t.weight=e},expression:"weight"}})],1),e("h2",[t._v("Gradient")]),t._m(10),t._m(11),e("Playground",{attrs:{markup:t.gradientMarkup,config:t.config}},[e("PlaygroundSelect",{attrs:{values:t.gradients,name:"gradient"},model:{value:t.gradient,callback:function(e){t.gradient=e},expression:"gradient"}})],1),e("h2",[t._v("Background")]),t._m(12),e("Playground",{attrs:{markup:t.backgroundMarkup,config:t.config}},[e("PlaygroundSelect",{attrs:{values:t.backgrounds,name:"background"},model:{value:t.background,callback:function(e){t.background=e},expression:"background"}})],1),e("h2",[t._v("Compact")]),t._m(13),e("Playground",{attrs:{markup:t.compactMarkup}},[e("PlaygroundSelect",{attrs:{values:t.compacts,name:"compact"},model:{value:t.compact,callback:function(e){t.compact=e},expression:"compact"}})],1),e("h2",[t._v("Alignment")]),e("p",[t._v("It is possible to align the description on top of the component.")]),t._m(14),e("Playground",{attrs:{markup:t.alignMarkup}},[e("PlaygroundSelect",{attrs:{values:t.aligns,name:"align"},model:{value:t.align,callback:function(e){t.align=e},expression:"align"}})],1),e("h2",[t._v("Hyphens")]),e("p",[t._v("It is possible to overwrite the hyphens style on the host element and use 'soft' hyphens. However, please note that hyphenation behavior can vary depending on the browser and the language of the text. In some cases, it may be necessary to set the appropriate lang attribute on your HTML element to ensure that hyphenation works correctly for the desired language.")]),e("Playground",{attrs:{markup:t.hyphenMarkup}},[e("PlaygroundSelect",{attrs:{values:t.hyphens,name:"hyphens"},model:{value:t.hyphen,callback:function(e){t.hyphen=e},expression:"hyphen"}})],1),e("h2",[t._v("UI behaviour")]),e("p",[t._v("The component is able to break out of its aspect ratio in case content overflows to be accessibility compliant (see first row in example).")]),e("p",[t._v("Additionally, the component is able to align to the highest CSS Grid child independent of the aspect ratio when used in CSS Grid context (see second row in example).")]),e("Notification",{attrs:{heading:"Browser Support Limitation","heading-tag":"h3",state:"warning"}},[t._v(" Currently, Safari is only able to align the height per CSS Grid row as long as the content does not overflow. ")]),e("Playground",{attrs:{markup:t.gridMarkup}})],1)},a=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The "),e("code",[t._v("p-button-tile")]),t._v(" is an interactive component that displays a provided image to tease content and performs form or "),e("strong",[t._v("interaction")]),t._v(" events within one container. Whenever you want to provide navigational elements, stick to the "),e("a",{attrs:{href:"components/link-tile"}},[t._v("Link Tile")]),t._v(" component instead.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[e("strong",[t._v("Note:")]),t._v(" The component does not take care of processing and aligning the image.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("An "),e("code",[t._v("img")]),t._v(" or "),e("code",[t._v("picture")]),t._v(" tag has to be provided as default slot.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("Additionally, the properties "),e("code",[t._v("description")]),t._v(" and "),e("code",[t._v("label")]),t._v(" are required. The "),e("code",[t._v("description")]),t._v(" property is used as a teaser with a more detailed description of the button and its action.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The "),e("code",[t._v("label")]),t._v(" property is used to describe the button.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",[e("li",[e("code",[t._v('slot="header"')]),t._v(": Renders a header section above the content area.")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("In general, placing textual contents above an image can easily lead to "),e("strong",[t._v("contrast issues")]),t._v(". Though we are providing a scalable background gradient to reduce the risk of low contrasts between foreground text and background image, there still can occur issues with color contrast ratios, especially if different aspect ratios for multiple viewport sizes are used. So, always "),e("strong",[t._v("check readability")]),t._v(" and play around with the "),e("code",[t._v("size")]),t._v(" and "),e("code",[t._v("weight")]),t._v(" properties to achieve the best results.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The component takes its height from the width provided and places the image via CSS "),e("code",[t._v("object-fit: cover")]),t._v(". Therefore, you can change the height by using different aspect ratios.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The "),e("code",[t._v("size")]),t._v(" property changes the font size of the description.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The "),e("code",[t._v("weight")]),t._v(" property changes the font weight of the description.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("By default, the "),e("code",[t._v("p-button-tile")]),t._v(" takes care of the readability of the description by displaying a gradient. If the underlying image provides enough contrast, you can choose to disable the gradient by setting "),e("code",[t._v('gradient="false"')]),t._v(".")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[e("strong",[t._v("Note:")]),t._v(" When disabling the gradient, it must be ensured that the contrast values are accessibility compliant.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The "),e("code",[t._v("background")]),t._v(" property changes the theme of the description and button. If the underlying image is light and provides enough contrast, you can choose to set "),e("code",[t._v('background="light"')]),t._v(". The component is not provided with a bright gradient, so if the property is set to "),e("code",[t._v('background="light"')]),t._v(", the gradient is disabled.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The "),e("code",[t._v("label")]),t._v(" property stays mandatory when using "),e("code",[t._v("compact")]),t._v(", for "),e("strong",[t._v("accessibility")]),t._v(" reasons.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[e("strong",[t._v("Note:")]),t._v(" This is only possible in combination with "),e("code",[t._v('compact="true"')])])}],o=i("ade3"),s=(i("7b4b"),i("2b0e")),r=i("2fe1"),c=i("70ab"),l=function(t,e,i,n){var a,o=arguments.length,s=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(a=t[r])&&(s=(o<3?a(s):o>3?a(e,i,s):a(e,i))||s);return o>3&&s&&Object.defineProperty(e,i,s),s};let p=class extends s["a"]{constructor(...t){super(...t),Object(o["a"])(this,"config",{spacing:"inline"}),Object(o["a"])(this,"imgAttributes",'alt="Some alt text"'),Object(o["a"])(this,"basic",`<p-button-tile\n  label="Some label"\n  description="Some Description"\n>\n  <p-tag slot="header" theme="dark" color="background-frosted" compact="true">Some tag</p-tag>\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>`),Object(o["a"])(this,"state","disabled"),Object(o["a"])(this,"states",["disabled","loading"]),Object(o["a"])(this,"aspectRatio","1/1"),Object(o["a"])(this,"aspectRatios",[...c["h"].map(t=>c["i"].includes(t)?t+" (deprecated)":t),"{ base: '3/4', s: '1/1', m: '16/9' }"]),Object(o["a"])(this,"size","large"),Object(o["a"])(this,"sizes",[...c["j"].map(t=>c["k"].includes(t)?t+" (deprecated)":t),"{ base: 'inherit', m: 'medium' }"]),Object(o["a"])(this,"weight","semi-bold"),Object(o["a"])(this,"weights",[...c["l"],"{ base: 'semi-bold', m: 'regular' }"]),Object(o["a"])(this,"gradient",!1),Object(o["a"])(this,"gradients",[!1,!0]),Object(o["a"])(this,"background","light"),Object(o["a"])(this,"backgrounds",[...c["f"]]),Object(o["a"])(this,"compact",!0),Object(o["a"])(this,"compacts",[!1,!0,"{ base: true, m: false }"]),Object(o["a"])(this,"align","top"),Object(o["a"])(this,"aligns",c["g"]),Object(o["a"])(this,"hyphen","manual"),Object(o["a"])(this,"hyphens",["auto","manual","none"])}get stateMarkup(){return`<p-button-tile label="Some Label" description="Some Description" ${this.state}>\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>\n<p-button-tile label="Some Label" description="Some Description" size="${this.size}" compact="true" ${this.state}>\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>`}get aspectRatioMarkup(){return`<p-button-tile label="Some Label" description="Some Description" aspect-ratio="${this.aspectRatio}">\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>`}get sizeMarkup(){return`<p-button-tile label="Some Label" description="Some Description" size="${this.size}" style="font-size: 40px;">\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>\n<p-button-tile label="Some Label" description="Some Description" size="${this.size}" compact="true" style="font-size: 40px;">\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>`}get weightMarkup(){return`<p-button-tile label="Some Label" description="Some Description" weight="${this.weight}">\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>\n<p-button-tile label="Some Label" description="Some Description" weight="${this.weight}" compact="true">\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>`}get gradientMarkup(){return`<p-button-tile\n  label="Some label"\n  description="Some Description"\n  gradient="${this.gradient}"\n>\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>\n<p-button-tile\n  label="Some label"\n  description="Some Description"\n  compact="true"\n  gradient="${this.gradient}"\n>\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>`}get backgroundMarkup(){return`<p-button-tile\n  label="Some label"\n  description="Some Description"\n  background="${this.background}"\n>\n  <img src="${i("e182")}" ${this.imgAttributes} />\n</p-button-tile>\n<p-button-tile\n  label="Some label"\n  description="Some Description"\n  compact="true"\n  background="${this.background}"\n>\n  <img src="${i("e182")}" ${this.imgAttributes} />\n</p-button-tile>`}get compactMarkup(){return`<p-button-tile\n  label="Some label"\n  description="Some Description"\n  compact="${this.compact}"\n>\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>`}get alignMarkup(){return`<p-button-tile\n  label="Some label"\n  description="Some Description"\n  compact="true"\n  align="${this.align}"\n>\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>`}get hyphenMarkup(){return`<p-button-tile\n  label="Some label"\n  description="An extra&shy;ordinarily Porsche"\n  compact="true"\n  size="inherit" \n  style="${"auto"!==this.hyphen?"hyphens: "+this.hyphen+"; ":""}font-size: 45px;"\n>\n  <img src="${i("caa2")}" ${this.imgAttributes} />\n</p-button-tile>`}get gridMarkup(){return`<div style="display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px;">\n  <p-button-tile\n    aspect-ratio="4/3"\n    label="Some Label"\n    size="large"\n    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."\n  >\n    <p-tag slot="header" theme="dark" color="background-frosted" compact="true">4/3</p-tag>\n    <img\n      src="${i("caa2")}"\n      ${this.imgAttributes}\n    />\n  </p-button-tile>\n  <p-button-tile aspect-ratio="4/3" label="Some Label" description="Some description">\n    <p-tag slot="header" theme="dark" color="background-frosted" compact="true">4/3</p-tag>\n    <img\n      src="${i("caa2")}"\n      ${this.imgAttributes}\n    />\n  </p-button-tile>\n  <p-button-tile aspect-ratio="1/1" label="Some Label" description="Some description">\n    <p-tag slot="header" theme="dark" color="background-frosted" compact="true">1/1</p-tag>\n    <img\n      src="${i("caa2")}"\n      ${this.imgAttributes}\n    />\n  </p-button-tile>\n  <p-button-tile aspect-ratio="9/16" label="Some Label" description="Some description">\n    <p-tag slot="header" theme="dark" color="background-frosted" compact="true">9/16</p-tag>\n    <img\n      src="${i("caa2")}"\n      ${this.imgAttributes}\n    />\n  </p-button-tile>\n  <p-button-tile aspect-ratio="1/1" label="Some Label" description="Some description">\n    <p-tag slot="header" theme="dark" color="background-frosted" compact="true">1/1</p-tag>\n    <img\n      src="${i("caa2")}"\n      ${this.imgAttributes}\n    />\n  </p-button-tile>\n</div>`}};p=l([r["b"]],p);var u=p,d=u,h=(i("9b7a"),i("2877")),g=Object(h["a"])(d,n,a,!1,null,"d693e826",null);e["default"]=g.exports},f806:function(t,e,i){}}]);
//# sourceMappingURL=chunk-53ec3594.7fc28390.js.map