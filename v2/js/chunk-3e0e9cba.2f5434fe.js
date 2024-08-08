(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e0e9cba"],{"18ae":function(t,e,o){"use strict";o("2fb7")},"28eb":function(t,e,o){"use strict";var s=o("6b1d"),a=o("98f3").left,n=o("7f8a"),i=o("4fed"),r=o("f117"),c=n("reduce"),u=!r&&i>79&&i<83;s({target:"Array",proto:!0,forced:!c||u},{reduce:function(t){var e=arguments.length;return a(this,t,e,e>1?arguments[1]:void 0)}})},"2fb7":function(t,e,o){},"3ce2":function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"vmark"},[e("h1",[t._v("Notifications")]),e("TableOfContents"),e("h2",[t._v("Toast")]),t._m(0),t._m(1),e("h2",[t._v("Basic")]),t._m(2),t._m(3),e("Playground",{attrs:{frameworkMarkup:t.basic,config:t.config}},[e("label",[t._v(" State: "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.toastState,expression:"toastState"}],attrs:{"aria-label":"Select state"},on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.toastState=e.target.multiple?o:o[0]}}},[e("option",{attrs:{disabled:""}},[t._v("Select state")]),e("option",{attrs:{value:"neutral"}},[t._v("Neutral")]),e("option",{attrs:{value:"success"}},[t._v("Success")])])]),e("br"),e("br"),e("label",[t._v(" Text:  "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.toastText,expression:"toastText"}],attrs:{type:"text"},domProps:{value:t.toastText},on:{input:function(e){e.target.composing||(t.toastText=e.target.value)}}})]),e("br"),e("br"),e("button",{attrs:{type:"button"},on:{click:function(e){return t.queueToast()}}},[t._v("Queue Toast")])]),e("h3",[e("A11yIcon"),t._v(" Accessibility hints")],1),t._m(4),e("h2",[t._v("Position")]),t._m(5),e("Playground",{attrs:{markup:t.offsetMarkup,config:{...t.config,withoutDemo:!0}}},[e("label",[t._v(" Position Bottom "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.positionBottom,expression:"positionBottom"}],attrs:{type:"number",min:"0",max:"200",step:"5"},domProps:{value:t.positionBottom},on:{input:function(e){e.target.composing||(t.positionBottom=e.target.value)}}})]),e("br"),e("br"),e("button",{attrs:{type:"button"},on:{click:function(e){return t.queueToast()}}},[t._v("Queue Toast")])]),e("p",[e("p-toast",{ref:"toast",style:`--p-toast-position-bottom: ${t.positionBottom}px`,attrs:{theme:t.theme}})],1)],1)},a=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The "),e("code",[t._v("p-toast")]),t._v(" component manages both the queue and display of toast messages."),e("br"),t._v(" Therefore, you can only have a single instance of this component within in your application. We recommend rendering it close to the "),e("code",[t._v("body")]),t._v(", e.g., in your "),e("code",[t._v("App.tsx")]),t._v(" or "),e("code",[t._v("app.component.ts")]),t._v(". This way you reduce the chance of having issues with its z-index and fixed positioning.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("Review the "),e("a",{attrs:{href:"components/notifications/decision-tree"}},[t._v("notification decision tree")]),t._v(" to determine which notification component is best for a particular scenario.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("Queuing messages on "),e("code",[t._v("p-toast")]),t._v(" component happens via its "),e("code",[t._v("addMessage()")]),t._v(" method."),e("br"),t._v(" For Angular users, we offer the injectable "),e("code",[t._v("ToastManager")]),t._v(" service, for React, there is the "),e("code",[t._v("useToastManager()")]),t._v(" hook."),e("br"),t._v(" Both expose the "),e("code",[t._v("addMessage()")]),t._v(" method, which needs to be called with a parameter that has the following structure:")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("pre",[e("code",{staticClass:"language-ts"},[t._v("type ToastMessage = {\n  text: string;\n  state?: 'neutral' | 'success';\n};\n")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("By their very nature, toast components are "),e("strong",[t._v("not fully accessibility compliant")]),t._v(' and do not meet success criterion 2.2.1 ("Timing Adjustable") because of the default timing of 6 seconds until it automatically disappears. This behavior cannot be adjusted and could result in users not being able to interact with Web content in a reasonable amount of time. So be careful '),e("strong",[t._v("not to use toast messages for relevant information")]),t._v(". Content and user interactions should always be understandable and usable without a toast message.")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The bottom position of the "),e("code",[t._v("p-toast")]),t._v(" can be adjusted via the "),e("code",[t._v("--p-toast-position-bottom")]),t._v(" CSS variable.")])}],n=o("ade3"),i=(o("28eb"),o("0f9e")),r=o("2b0e"),c=o("2fe1"),u=o("526d");let l=class extends r["a"]{constructor(...t){super(...t),Object(n["a"])(this,"config",{themeable:!0}),Object(n["a"])(this,"toastState","neutral"),Object(n["a"])(this,"toastText","Some message"),Object(n["a"])(this,"toastCounter",1),Object(n["a"])(this,"positionBottom",64)}get basic(){return Object.entries(Object(u["l"])()).reduce((t,[e,o])=>({...t,[e]:o.replace(/(state:) 'success'/,`$1 '${this.toastState}'`).replace(/(Some message)/,this.toastText)}),{})}get offsetMarkup(){return`<p-toast style="--p-toast-position-bottom: ${this.positionBottom}px"></p-toast>`}queueToast(){this.$refs.toast.addMessage({text:`${this.toastText} ${this.toastCounter}`,state:this.toastState}),this.toastCounter++}get theme(){return this.$store.getters.theme}};l=Object(i["b"])([c["b"]],l);var p=l,f=p,v=(o("18ae"),o("2877")),d=Object(v["a"])(f,s,a,!1,null,"55d363f2",null);e["default"]=d.exports},"7f8a":function(t,e,o){"use strict";var s=o("72df");t.exports=function(t,e){var o=[][t];return!!o&&s((function(){o.call(null,e||function(){return 1},1)}))}},"98f3":function(t,e,o){var s=o("63d3"),a=o("37d1"),n=o("83a6"),i=o("0481"),r=TypeError,c=function(t){return function(e,o,c,u){s(o);var l=a(e),p=n(l),f=i(l),v=t?f-1:0,d=t?-1:1;if(c<2)while(1){if(v in p){u=p[v],v+=d;break}if(v+=d,t?v<0:f<=v)throw r("Reduce of empty array with no initial value")}for(;t?v>=0:f>v;v+=d)v in p&&(u=o(u,p[v],v,l));return u}};t.exports={left:c(!1),right:c(!0)}},f117:function(t,e,o){var s=o("6a61"),a=o("f498");t.exports="process"==s(a.process)}}]);
//# sourceMappingURL=chunk-3e0e9cba.2f5434fe.js.map