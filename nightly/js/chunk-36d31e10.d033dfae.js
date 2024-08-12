(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-36d31e10"],{"7b4b":function(t,e,i){"use strict";var o=i("6b1d"),n=i("f498"),r=i("fa46");o({global:!0},{Reflect:{}}),r(n.Reflect,"Reflect",!0)},d58e:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"vmark"},[e("ComponentHeading",{attrs:{name:"Text List"}}),t._m(0),e("TableOfContents"),e("Notification",{attrs:{heading:"Deprecation hint","heading-tag":"h2",state:"warning"}},[t._v(" The "),e("code",[t._v("listType")]),t._v(" and "),e("code",[t._v("orderType")]),t._v(" properties have been deprecated and will be removed with the next major release."),e("br"),t._v(" Please use the "),e("code",[t._v("type")]),t._v(" property instead. ")]),e("h2",[t._v("Unordered list")]),e("Playground",{attrs:{markup:t.list(),config:t.config}}),e("h2",[t._v("Ordered list - numbered")]),e("Playground",{attrs:{markup:t.list("numbered"),config:t.config}}),e("h2",[t._v("Ordered list - alphabetically")]),e("Playground",{attrs:{markup:t.list("alphabetically"),config:t.config}}),e("h2",[t._v("Mixed list - (ordered / unordered)")]),e("Playground",{attrs:{markup:t.listMixed(),config:t.config}})],1)},n=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("The "),e("code",[t._v("p-text-list")]),t._v(" component is used to display listed data in form of an unordered or ordered list. A list depends on two parts (like any native HTML list): A list wrapper which defines the type of the list (unordered or ordered) and the list items. Nesting is also provided and follows the same nesting rules like native HTML lists. For more complex data you should consider the use of a data table.")])}],r=(i("7b4b"),i("2b0e")),s=i("2fe1"),l=function(t,e,i,o){var n,r=arguments.length,s=r<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,i):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(t,e,i,o);else for(var l=t.length-1;l>=0;l--)(n=t[l])&&(s=(r<3?n(s):r>3?n(e,i,s):n(e,i))||s);return r>3&&s&&Object.defineProperty(e,i,s),s};let a=class extends r["a"]{constructor(){super(...arguments),this.config={themeable:!0}}list(t){const e=t?` type="${t}"`:"";return`<p-text-list${e}>\n  <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n  <p-text-list-item>The quick brown fox jumps over the lazy dog\n    <p-text-list${e}>\n      <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n      <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n    </p-text-list>\n  </p-text-list-item>\n  <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n</p-text-list>`}listMixed(){return'<p-text-list type="numbered">\n  <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n  <p-text-list-item>The quick brown fox jumps over the lazy dog\n    <p-text-list>\n      <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n      <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n    </p-text-list>\n  </p-text-list-item>\n  <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n</p-text-list>'}};a=l([s["b"]],a);var p=a,d=p,u=i("2877"),c=Object(u["a"])(d,o,n,!1,null,null,null);e["default"]=c.exports},fa46:function(t,e,i){"use strict";var o=i("abdf").f,n=i("7a25"),r=i("7d53"),s=r("toStringTag");t.exports=function(t,e,i){t&&!i&&(t=t.prototype),t&&!n(t,s)&&o(t,s,{configurable:!0,value:e})}}}]);
//# sourceMappingURL=chunk-36d31e10.d033dfae.js.map