(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77fbcebe"],{"189b":function(e,t,a){var n=a("72df"),o=a("7d53"),i=a("4fed"),r=o("species");e.exports=function(e){return i>=51||!n((function(){var t=[],a=t.constructor={};return a[r]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"37d1":function(e,t,a){var n=a("730c");e.exports=function(e){return Object(n(e))}},"4fed":function(e,t,a){var n,o,i=a("f498"),r=a("64e4"),c=i.process,s=c&&c.versions,u=s&&s.v8;u?(n=u.split("."),o=n[0]+n[1]):r&&(n=r.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=r.match(/Chrome\/(\d+)/),n&&(o=n[1]))),e.exports=o&&+o},"64e4":function(e,t,a){var n=a("5428");e.exports=n("navigator","userAgent")||""},"6a86":function(e,t,a){var n=a("7526"),o=a("c6de"),i=a("7d53"),r=i("species");e.exports=function(e,t){var a;return o(e)&&(a=e.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?n(a)&&(a=a[r],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===t?0:t)}},ada5:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vmark"},[a("h1",[e._v("Pagination")]),a("h2",[e._v("Basic usage")]),e._m(0),a("Playground",{attrs:{markup:e.basic(),config:e.config}}),a("h3",[e._v("Max Number of Page Links: 7 (desktop)")]),a("Playground",{attrs:{markup:e.basic("7"),config:e.config}}),a("h3",[e._v("Max Number of Page Links: 5 (mobile)")]),a("Playground",{attrs:{markup:e.basic("5"),config:e.config}}),a("h3",[e._v("Responsive")]),e._m(1),a("Playground",{attrs:{markup:e.basic("{ base: 5, s: 7 }"),config:e.config}}),a("hr"),a("h2",[e._v("Behaviour playground")]),a("p",[e._v("By changing values for total amount of items, items to display per page and number of currently active page, the behaviour of the pagination component can be changed.")]),a("Playground",{staticClass:"playground-pagination",attrs:{markup:e.behaviour,config:e.config},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.theme;return[a("label",{staticStyle:{display:"inline-block","margin-right":"16px"}},[a("p-text",{attrs:{theme:n,tag:"span",size:"x-small"}},[e._v("Total items count")]),a("input",{attrs:{type:"number"},domProps:{value:e.totalItemsCount},on:{input:function(t){e.totalItemsCount=t.target.value}}})],1),a("label",{staticStyle:{display:"inline-block","margin-right":"16px"}},[a("p-text",{attrs:{theme:n,tag:"span",size:"x-small"}},[e._v("Items per page")]),a("input",{attrs:{type:"number"},domProps:{value:e.itemsPerPage},on:{input:function(t){e.itemsPerPage=t.target.value}}})],1),a("label",{staticStyle:{display:"inline-block"}},[a("p-text",{attrs:{theme:n,tag:"span",size:"x-small"}},[e._v("Active page")]),a("input",{attrs:{type:"number"},domProps:{value:e.activePage},on:{input:function(t){e.activePage=t.target.value}}})],1)]}}])})],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("To adapt the pagination to the specific viewport context, the amount of displayed page items varies between either "),a("code",[e._v("7")]),e._v(" (desktop/tablet) or "),a("code",[e._v("5")]),e._v(" (mobile). The components handles responsive viewport sizing by default.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("The settings above can also be used on different major breakpoints "),a("code",[e._v("xs")]),e._v(", "),a("code",[e._v("s")]),e._v(", "),a("code",[e._v("m")]),e._v(", "),a("code",[e._v("l")]),e._v(" and "),a("code",[e._v("xl")]),e._v(".")])}],i=(a("d86f"),a("d4ec")),r=a("bee2"),c=a("262e"),s=a("2caf"),u=a("0f9e"),p=a("2b0e"),l=a("2fe1"),v=function(e){Object(c["a"])(a,e);var t=Object(s["a"])(a);function a(){var e;return Object(i["a"])(this,a),e=t.apply(this,arguments),e.config={themeable:!0},e.totalItemsCount=500,e.itemsPerPage=25,e.activePage=1,e}return Object(r["a"])(a,[{key:"basic",value:function(e){var t=e?' max-number-of-page-links="'.concat(e,'"'):"";return'<p-pagination total-items-count="500" items-per-page="25" active-page="1"'.concat(t,"></p-pagination>")}},{key:"mounted",value:function(){this.registerEvents()}},{key:"updated",value:function(){this.registerEvents()}},{key:"registerEvents",value:function(){var e=this,t=this.$el.querySelector(".playground-pagination p-pagination");t.addEventListener("pageChange",(function(t){e.activePage=t.detail.page}))}},{key:"behaviour",get:function(){return'<p-pagination total-items-count="'.concat(this.totalItemsCount,'" items-per-page="').concat(this.itemsPerPage,'" active-page="').concat(this.activePage,'"></p-pagination>')}}]),a}(p["a"]);v=Object(u["b"])([l["b"]],v);var f=v,d=f,g=a("2877"),m=Object(g["a"])(d,n,o,!1,null,null,null);t["default"]=m.exports},c6de:function(e,t,a){var n=a("6a61");e.exports=Array.isArray||function(e){return"Array"==n(e)}},d86f:function(e,t,a){"use strict";var n=a("6b1d"),o=a("72df"),i=a("c6de"),r=a("7526"),c=a("37d1"),s=a("b495"),u=a("dac6"),p=a("6a86"),l=a("189b"),v=a("7d53"),f=a("4fed"),d=v("isConcatSpreadable"),g=9007199254740991,m="Maximum allowed index exceeded",b=f>=51||!o((function(){var e=[];return e[d]=!1,e.concat()[0]!==e})),h=l("concat"),y=function(e){if(!r(e))return!1;var t=e[d];return void 0!==t?!!t:i(e)},_=!b||!h;n({target:"Array",proto:!0,forced:_},{concat:function(e){var t,a,n,o,i,r=c(this),l=p(r,0),v=0;for(t=-1,n=arguments.length;t<n;t++)if(i=-1===t?r:arguments[t],y(i)){if(o=s(i.length),v+o>g)throw TypeError(m);for(a=0;a<o;a++,v++)a in i&&u(l,v,i[a])}else{if(v>=g)throw TypeError(m);u(l,v++,i)}return l.length=v,l}})},dac6:function(e,t,a){"use strict";var n=a("083f"),o=a("abdf"),i=a("9618");e.exports=function(e,t,a){var r=n(t);r in e?o.f(e,r,i(0,a)):e[r]=a}}}]);
//# sourceMappingURL=chunk-77fbcebe.46be4886.js.map