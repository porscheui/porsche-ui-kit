(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-25eea40d"],{"189b":function(e,t,n){var r=n("72df"),a=n("7d53"),o=n("4fed"),i=a("species");e.exports=function(e){return o>=51||!r((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2117:function(e,t,n){var r=n("8697");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,a){return e.call(t,n,r,a)}}return function(){return e.apply(t,arguments)}}},"37d1":function(e,t,n){var r=n("730c");e.exports=function(e){return Object(r(e))}},"4fed":function(e,t,n){var r,a,o=n("f498"),i=n("64e4"),c=o.process,u=c&&c.versions,s=u&&u.v8;s?(r=s.split("."),a=r[0]+r[1]):i&&(r=i.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/),r&&(a=r[1]))),e.exports=a&&+a},"64e4":function(e,t,n){var r=n("5428");e.exports=r("navigator","userAgent")||""},"6a86":function(e,t,n){var r=n("7526"),a=n("c6de"),o=n("7d53"),i=o("species");e.exports=function(e,t){var n;return a(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"7f8a":function(e,t,n){"use strict";var r=n("72df");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},8697:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},"9bf8":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Tabs")]),n("p",[e._v("The component makes it easy to explore and switch between different views. You can organize and allow navigation between groups of content that are related and at the same level of hierarchy. The component handles the display of content according to the active tab and all accessibility attributes on your tab and tab content.")]),e._m(0),n("hr"),n("h2",[e._v("Basic example")]),e._m(1),e._m(2),n("Playground",{attrs:{markup:e.basic,config:e.config}}),n("h2",[e._v("Size")]),n("Playground",{attrs:{markup:e.sizeMarkup,config:e.config}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.size,expression:"size"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.size=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:""}},[e._v("Select size")]),n("option",{attrs:{selected:"",value:"small"}},[e._v("Small")]),n("option",{attrs:{value:"medium"}},[e._v("Medium")])])]),n("h2",[e._v("Weight")]),n("Playground",{attrs:{markup:e.weightMarkup,config:e.config}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.weight,expression:"weight"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.weight=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:""}},[e._v("Select weight")]),n("option",{attrs:{selected:"",value:"regular"}},[e._v("Regular")]),n("option",{attrs:{value:"semibold"}},[e._v("SemiBold")])])]),n("h2",[e._v("Gradient Color Scheme")]),n("p",[e._v("If the amount of tabs exceeds the viewport, the component renders arrow-buttons to help with horizontal scrolling. The background and gradient has to align to your chosen background.")]),n("Playground",{attrs:{markup:e.gradientMarkup,config:Object.assign({},e.config,{colorScheme:e.gradientColorScheme})}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.gradientColorScheme,expression:"gradientColorScheme"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.gradientColorScheme=t.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:""}},[e._v("Select gradient-color-scheme")]),n("option",{attrs:{selected:"",value:"default"}},[e._v("Default")]),n("option",{attrs:{value:"surface"}},[e._v("Surface")])])]),n("h2",[e._v("Active Tab")]),e._m(3),n("Playground",{attrs:{markup:e.activeTab,config:e.config}})],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("This variant does not support "),n("code",[e._v("a")]),e._v(" tags and should not be used for navigation. If you need to update your window location have a look at "),n("a",{attrs:{href:"#/components/tabs-bar"}},[e._v("Tabs Bar")]),e._v(" component.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Basic implementation shows a tab list with buttons to switch between the content. For every "),n("code",[e._v("p-tabs-item")]),e._v(" inside of the "),n("code",[e._v("p-tabs")]),e._v(" component, a tab will be created. The assigned "),n("code",[e._v("label")]),e._v(" property defines also the name of the button.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Every "),n("code",[e._v("p-tabs-item")]),e._v(" holds a "),n("code",[e._v("slot")]),e._v(" to display content which can be individually assigned.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("You may need to change the initial active tab. To do so, set the "),n("code",[e._v("active-tab-index")]),e._v(" attribute of "),n("code",[e._v("p-tabs")]),e._v(".")])}],o=(n("d86f"),n("ef14"),n("cfce"),n("d4ec")),i=n("bee2"),c=n("262e"),u=n("2caf"),s=n("0f9e"),l=n("2b0e"),f=n("2fe1"),d=function(e,t){return'  <p-tabs-item label="Tab '.concat(e,'">\n    <p-text>Tab Content ').concat(e,"</p-text>\n  </p-tabs-item>")},v=function(e){Object(c["a"])(n,e);var t=Object(u["a"])(n);function n(){var e;return Object(o["a"])(this,n),e=t.apply(this,arguments),e.config={themeable:!0},e.weight="semibold",e.size="medium",e.gradientColorScheme="surface",e.basic="<p-tabs>\n".concat(["One","Two","Three"].map(d).join("\n"),"\n</p-tabs>"),e.activeTab='<p-tabs active-tab-index="1">\n'.concat(["One","Two","Three"].map(d).join("\n"),"\n</p-tabs>"),e}return Object(i["a"])(n,[{key:"sizeMarkup",get:function(){return'<p-tabs size="'.concat(this.size,'">\n').concat(["One","Two","Three"].map(d).join("\n"),"\n</p-tabs>")}},{key:"weightMarkup",get:function(){return'<p-tabs weight="'.concat(this.weight,'">\n').concat(["One","Two","Three"].map(d).join("\n"),"\n</p-tabs>")}},{key:"gradientMarkup",get:function(){return'<p-tabs gradient-color-scheme="'.concat(this.gradientColorScheme,'">\n').concat(["One","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Eleven","Twelve","Thirteen","Fourteen","Fifteen","Sixteen","Seventeen","Eighteen","Nineteen","Twenty"].map(d).join("\n"),"\n</p-tabs>")}}]),n}(l["a"]);v=Object(s["b"])([f["b"]],v);var p=v,h=p,m=n("2877"),b=Object(m["a"])(h,r,a,!1,null,null,null);t["default"]=b.exports},c6de:function(e,t,n){var r=n("6a61");e.exports=Array.isArray||function(e){return"Array"==r(e)}},ce71:function(e,t,n){var r=n("d4cb"),a=n("72df"),o=n("f1a7"),i=Object.defineProperty,c={},u=function(e){throw e};e.exports=function(e,t){if(o(c,e))return c[e];t||(t={});var n=[][e],s=!!o(t,"ACCESSORS")&&t.ACCESSORS,l=o(t,0)?t[0]:u,f=o(t,1)?t[1]:void 0;return c[e]=!!n&&!a((function(){if(s&&!r)return!0;var e={length:-1};s?i(e,1,{enumerable:!0,get:u}):e[1]=1,n.call(e,l,f)}))}},cfce:function(e,t,n){"use strict";var r=n("6b1d"),a=n("d054").map,o=n("189b"),i=n("ce71"),c=o("map"),u=i("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},d054:function(e,t,n){var r=n("2117"),a=n("83a6"),o=n("37d1"),i=n("b495"),c=n("6a86"),u=[].push,s=function(e){var t=1==e,n=2==e,s=3==e,l=4==e,f=6==e,d=5==e||f;return function(v,p,h,m){for(var b,g,_=o(v),w=a(_),y=r(p,h,3),T=i(w.length),x=0,S=m||c,k=t?S(v,T):n?S(v,0):void 0;T>x;x++)if((d||x in w)&&(b=w[x],g=y(b,x,_),e))if(t)k[x]=g;else if(g)switch(e){case 3:return!0;case 5:return b;case 6:return x;case 2:u.call(k,b)}else if(l)return!1;return f?-1:s||l?l:k}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},d86f:function(e,t,n){"use strict";var r=n("6b1d"),a=n("72df"),o=n("c6de"),i=n("7526"),c=n("37d1"),u=n("b495"),s=n("dac6"),l=n("6a86"),f=n("189b"),d=n("7d53"),v=n("4fed"),p=d("isConcatSpreadable"),h=9007199254740991,m="Maximum allowed index exceeded",b=v>=51||!a((function(){var e=[];return e[p]=!1,e.concat()[0]!==e})),g=f("concat"),_=function(e){if(!i(e))return!1;var t=e[p];return void 0!==t?!!t:o(e)},w=!b||!g;r({target:"Array",proto:!0,forced:w},{concat:function(e){var t,n,r,a,o,i=c(this),f=l(i,0),d=0;for(t=-1,r=arguments.length;t<r;t++)if(o=-1===t?i:arguments[t],_(o)){if(a=u(o.length),d+a>h)throw TypeError(m);for(n=0;n<a;n++,d++)n in o&&s(f,d,o[n])}else{if(d>=h)throw TypeError(m);s(f,d++,o)}return f.length=d,f}})},dac6:function(e,t,n){"use strict";var r=n("083f"),a=n("abdf"),o=n("9618");e.exports=function(e,t,n){var i=r(t);i in e?a.f(e,i,o(0,n)):e[i]=n}},ef14:function(e,t,n){"use strict";var r=n("6b1d"),a=n("83a6"),o=n("378c"),i=n("7f8a"),c=[].join,u=a!=Object,s=i("join",",");r({target:"Array",proto:!0,forced:u||!s},{join:function(e){return c.call(o(this),void 0===e?",":e)}})}}]);
//# sourceMappingURL=chunk-25eea40d.69f5ea18.js.map