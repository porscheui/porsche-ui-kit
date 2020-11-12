(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7828742e"],{"0b6c":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vmark"},[r("h1",[t._v("Text List")]),r("p",[t._v("Text lists are used to display listed data in form of an unordered or ordered list. A list depends on two parts (like any native HTML list): A list wrapper which defines the type of the list (unordered or ordered) and the list items. Nesting is also provided and follows the same nesting rules like native HTML lists. For more complex data you should consider the use of a data table.")]),r("h2",[t._v("Unordered list")]),r("Playground",{attrs:{markup:t.list(),config:t.config}}),r("h2",[t._v("Ordered list - numbered")]),r("Playground",{attrs:{markup:t.list("ordered"),config:t.config}}),r("h2",[t._v("Ordered list - alphabetically")]),r("Playground",{attrs:{markup:t.list("ordered","alphabetically"),config:t.config}})],1)},n=[],i=(r("d86f"),r("d4ec")),a=r("bee2"),s=r("262e"),c=r("2caf"),l=r("0f9e"),u=r("2b0e"),d=r("2fe1"),f=function(t){Object(s["a"])(r,t);var e=Object(c["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.config={themeable:!0},t}return Object(a["a"])(r,[{key:"list",value:function(t,e){var r=(t?' list-type="'.concat(t,'"'):"")+(e?' order-type="'.concat(e,'"'):"");return"<p-text-list".concat(r,'>\n  <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n  <p-text-list-item>The quick <a href="#">brown fox</a> jumps <b>over</b> the <strong>lazy</strong> dog\n    <p-text-list').concat(r,'>\n      <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n      <p-text-list-item>The quick brown fox jumps over the lazy dog, the lazy dog jumps over the quick brown fox</p-text-list-item>\n        <p-text-list-item>The quick <a href="#">brown fox</a> jumps <b>over</b> the <strong>lazy</strong> dog\n          <p-text-list').concat(r,">\n            <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n            <p-text-list-item>The quick brown fox jumps over the lazy dog, the lazy dog jumps over the quick brown fox</p-text-list-item>\n          </p-text-list>\n        </p-text-list-item>\n    </p-text-list>\n  </p-text-list-item>\n  <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n</p-text-list>")}}]),r}(u["a"]);f=Object(l["b"])([d["b"]],f);var p=f,h=p,v=r("2877"),x=Object(v["a"])(h,o,n,!1,null,null,null);e["default"]=x.exports},"189b":function(t,e,r){var o=r("72df"),n=r("7d53"),i=r("4fed"),a=n("species");t.exports=function(t){return i>=51||!o((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"37d1":function(t,e,r){var o=r("730c");t.exports=function(t){return Object(o(t))}},"4fed":function(t,e,r){var o,n,i=r("f498"),a=r("64e4"),s=i.process,c=s&&s.versions,l=c&&c.v8;l?(o=l.split("."),n=o[0]+o[1]):a&&(o=a.match(/Edge\/(\d+)/),(!o||o[1]>=74)&&(o=a.match(/Chrome\/(\d+)/),o&&(n=o[1]))),t.exports=n&&+n},"64e4":function(t,e,r){var o=r("5428");t.exports=o("navigator","userAgent")||""},"6a86":function(t,e,r){var o=r("7526"),n=r("c6de"),i=r("7d53"),a=i("species");t.exports=function(t,e){var r;return n(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?o(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},c6de:function(t,e,r){var o=r("6a61");t.exports=Array.isArray||function(t){return"Array"==o(t)}},d86f:function(t,e,r){"use strict";var o=r("6b1d"),n=r("72df"),i=r("c6de"),a=r("7526"),s=r("37d1"),c=r("b495"),l=r("dac6"),u=r("6a86"),d=r("189b"),f=r("7d53"),p=r("4fed"),h=f("isConcatSpreadable"),v=9007199254740991,x="Maximum allowed index exceeded",m=p>=51||!n((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),b=d("concat"),g=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},y=!m||!b;o({target:"Array",proto:!0,forced:y},{concat:function(t){var e,r,o,n,i,a=s(this),d=u(a,0),f=0;for(e=-1,o=arguments.length;e<o;e++)if(i=-1===e?a:arguments[e],g(i)){if(n=c(i.length),f+n>v)throw TypeError(x);for(r=0;r<n;r++,f++)r in i&&l(d,f,i[r])}else{if(f>=v)throw TypeError(x);l(d,f++,i)}return d.length=f,d}})},dac6:function(t,e,r){"use strict";var o=r("083f"),n=r("abdf"),i=r("9618");t.exports=function(t,e,r){var a=o(e);a in t?n.f(t,a,i(0,r)):t[a]=r}}}]);
//# sourceMappingURL=chunk-7828742e.6d89aef9.js.map