(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e8fd12a8"],{"2e1e":function(e,t,o){"use strict";o.r(t);var s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"vmark"},[t("ComponentHeading",{attrs:{name:"Model Signature"}}),e._m(0),t("TableOfContents"),t("h2",[e._v("Models")]),t("p",[e._v("The "),t("code",[e._v("model")]),e._v(" prop's default is "),t("code",[e._v(e._s(e.meta.propsMeta.model.defaultValue))]),e._v(".")]),t("Playground",{attrs:{markup:e.modelMarkup,config:e.config}},[t("PlaygroundSelect",{attrs:{values:e.models,name:"model"},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1),t("h2",[e._v("Safe Zone")]),t("p",[e._v("The "),t("code",[e._v("safe-zone")]),e._v(" prop's default is "),t("code",[e._v(e._s(e.meta.propsMeta.safeZone.defaultValue))]),e._v(", which ensures a visual balance across all model signatures. This is most likely the best option when the model signatures are used in combination or within tiles next to each other. When "),t("code",[e._v("false")]),e._v(" is set as value, the model signatures come without any safe zone which is probably preferred when the element is positioned independently.")]),t("Playground",{attrs:{markup:e.safeZoneMarkup,config:e.config}},[t("PlaygroundSelect",{attrs:{values:e.safeZones,name:"safe-zone"},model:{value:e.safeZone,callback:function(t){e.safeZone=t},expression:"safeZone"}})],1),t("h2",[e._v("Colors")]),t("p",[e._v("The "),t("code",[e._v("color")]),e._v(" prop's default is "),t("code",[e._v(e._s(e.meta.propsMeta.color.defaultValue))]),e._v(".")]),t("Playground",{attrs:{markup:e.colorMarkup,config:e.config}},[t("PlaygroundSelect",{attrs:{values:e.colors,name:"color"},model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1),t("h2",[e._v("Sizes")]),t("p",[e._v("The "),t("code",[e._v("size")]),e._v(" prop's default is "),t("code",[e._v(e._s(e.meta.propsMeta.size.defaultValue))]),e._v(".")]),t("Playground",{attrs:{markup:e.sizeMarkup,config:e.config}},[t("PlaygroundSelect",{attrs:{values:e.sizes,name:"size"},model:{value:e.size,callback:function(t){e.size=t},expression:"size"}})],1),t("h2",[e._v("Mask: Blend Mode")]),t("p",[e._v("In case, "),t("code",[e._v("p-model-signature")]),e._v(" shall be blended with its background, the CSS property "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode"}},[e._v("mix-blend-mode")]),e._v(" can be used ("),t("code",[e._v(e._s(e.blendMode))]),e._v(" will bring the best results). Depending on the use case it may be important to use it together with the CSS property "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/isolation"}},[e._v("isolation")]),e._v(" to create a new stacking context. It's also important to mention, that the "),t("code",[e._v("p-model-signature")]),e._v(" has to be used together with "),t("code",[e._v("contrast-{high|medium}")]),e._v(" color to have proper blend mode results.")]),t("Playground",{attrs:{markup:e.blendModeMarkup,config:e.config}}),t("h2",[e._v("Mask: Image")]),t("Notification",{attrs:{heading:"Experimental","heading-tag":"h3",state:"warning"}},[e._v(" The following example shows what is technically possible but has not yet been approved by the Porsche Brand Guide. ")]),t("Playground",{attrs:{markup:e.imageMarkup,config:e.config}}),t("h2",[e._v("Mask: Video")]),t("Notification",{attrs:{heading:"Experimental","heading-tag":"h3",state:"warning"}},[e._v(" The following example shows what is technically possible but has not yet been approved by the Porsche Brand Guide. ")]),t("Playground",{attrs:{markup:e.videoMarkup,config:e.config}}),t("h2",[e._v("Custom styling")]),e._m(1),e._m(2),t("Playground",{attrs:{markup:e.customStylingMarkup,config:e.config}})],1)},a=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-model-signature")]),e._v(" component is purely visual and renders the different signatures of Porsche car models."),t("br"),e._v(" It can be used to overlay background images or enhance cards and teasers to be more dynamic and recognizable.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("p-model-signature")]),e._v(" component has some values which can be overwritten by CSS Custom Properties (aka CSS Variables):")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("pre",[t("code",{staticClass:"language-scss"},[e._v("--p-model-signature-color\n--p-model-signature-width\n--p-model-signature-height\n")])])}],n=o("ade3"),i=(o("7b4b"),o("2b0e")),r=o("2fe1"),l=o("6549"),d=o("43b8"),c=function(e,t,o,s){var a,n=arguments.length,i=n<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,o):s;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,t,o,s);else for(var r=e.length-1;r>=0;r--)(a=e[r])&&(i=(n<3?a(i):n>3?a(t,o,i):a(t,o))||i);return n>3&&i&&Object.defineProperty(t,o,i),i};let u=class extends i["a"]{constructor(...e){super(...e),Object(n["a"])(this,"config",{themeable:!0,spacing:"inline"}),Object(n["a"])(this,"meta",Object(d["b"])("p-model-signature")),Object(n["a"])(this,"model",this.meta.propsMeta.model.defaultValue),Object(n["a"])(this,"models",l["b"]),Object(n["a"])(this,"safeZone",!1),Object(n["a"])(this,"safeZones",[!0,!1]),Object(n["a"])(this,"size",this.meta.propsMeta.size.defaultValue),Object(n["a"])(this,"sizes",l["c"].filter(e=>"inherit"!==e)),Object(n["a"])(this,"color",this.meta.propsMeta.color.defaultValue),Object(n["a"])(this,"colors",l["a"].filter(e=>"inherit"!==e)),Object(n["a"])(this,"blendMode","overlay")}get modelMarkup(){return`<p-model-signature model="${this.model}"></p-model-signature>`}get safeZoneMarkup(){return l["b"].map(e=>`<div style="background: #ff000033; display: inline-block;">\n  <p-model-signature safe-zone="${this.safeZone}" model="${e}"></p-model-signature>\n</div>`).join("\n")}get sizeMarkup(){return`<p-model-signature size="${this.size}"></p-model-signature>`}get colorMarkup(){return`<p-model-signature color="${this.color}"></p-model-signature>`}get blendModeMarkup(){return`<div style="isolation: isolate; background: #00aa3680; display: inline-block; padding: 32px;">\n  <p-model-signature color="contrast-medium" safe-zone="false" style="mix-blend-mode: ${this.blendMode}"></p-model-signature>\n</div>\n<div style="isolation: isolate; background: #f2f2f280; display: inline-block; padding: 32px;">\n  <p-model-signature color="contrast-medium" safe-zone="false" style="mix-blend-mode: ${this.blendMode}"></p-model-signature>\n</div>\n<div style="isolation: isolate; background: #1f1f1f80; display: inline-block; padding: 32px;">\n  <p-model-signature color="contrast-medium" safe-zone="false" style="mix-blend-mode: ${this.blendMode}"></p-model-signature>\n</div>\n<div style="isolation: isolate; background: #c5004280; display: inline-block; padding: 32px;">\n  <p-model-signature color="contrast-medium" safe-zone="false" style="mix-blend-mode: ${this.blendMode}"></p-model-signature>\n</div>\n<div style="isolation: isolate; background: #e1d4a480; display: inline-block; padding: 32px;">\n  <p-model-signature color="contrast-medium" safe-zone="false" style="mix-blend-mode: ${this.blendMode}"></p-model-signature>\n</div>\n<div style="isolation: isolate; background: #0099e080; display: inline-block; padding: 32px;">\n  <p-model-signature color="contrast-medium" safe-zone="false" style="mix-blend-mode: ${this.blendMode}"></p-model-signature>\n</div>`}get imageMarkup(){return'<p-model-signature safe-zone="false" style="--p-model-signature-width: auto;">\n  <img src="https://porsche-design-system.github.io/porsche-design-system/dessert.jpg" alt="Dessert" />\n</p-model-signature>'}get videoMarkup(){return'<p-model-signature safe-zone="false" style="--p-model-signature-width: auto;">\n  <video\n    poster="https://porsche-design-system.github.io/porsche-design-system/ocean.jpg"\n    src="https://porsche-design-system.github.io/porsche-design-system/ocean.mp4"\n    autoplay\n    playsinline\n    loop\n    muted\n  ></video>\n</p-model-signature>'}get customStylingMarkup(){return'<p-model-signature style="--p-model-signature-color: deeppink;"></p-model-signature>\n<p-model-signature style="--p-model-signature-width: auto; --p-model-signature-height: 50px;"></p-model-signature>\n<p-model-signature style="--p-model-signature-width: 50px; --p-model-signature-height: auto;"></p-model-signature>'}};u=c([r["b"]],u);var p=u,m=p,g=o("2877"),h=Object(g["a"])(m,s,a,!1,null,null,null);t["default"]=h.exports},6549:function(e,t,o){"use strict";o.d(t,"c",(function(){return a})),o.d(t,"b",(function(){return n})),o.d(t,"a",(function(){return i}));var s={718:{src:"718.493a9e3.svg",width:79,height:26},911:{src:"911.b68f913.svg",width:94,height:25},boxster:{src:"boxster.c321738.svg",width:239,height:26},cayenne:{src:"cayenne.2556201.svg",width:245,height:35},cayman:{src:"cayman.cc89196.svg",width:229,height:35},macan:{src:"macan.a1844f4.svg",width:196,height:26},panamera:{src:"panamera.6dae809.svg",width:260,height:25},taycan:{src:"taycan.df444c6.svg",width:167,height:36},"turbo-s":{src:"turbo-s.73f1e10.svg",width:199,height:25},turbo:{src:"turbo.6a4084a.svg",width:143,height:25}};o("70ab");const a=["small","inherit"],n=Object.keys(s),i=["primary","contrast-low","contrast-medium","contrast-high","inherit"]}}]);
//# sourceMappingURL=chunk-e8fd12a8.f989dc42.js.map