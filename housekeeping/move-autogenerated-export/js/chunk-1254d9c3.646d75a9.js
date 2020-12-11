(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1254d9c3"],{"0b6c":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"vmark"},[r("h1",[t._v("Text List")]),r("p",[t._v("Text lists are used to display listed data in form of an unordered or ordered list. A list depends on two parts (like any native HTML list): A list wrapper which defines the type of the list (unordered or ordered) and the list items. Nesting is also provided and follows the same nesting rules like native HTML lists. For more complex data you should consider the use of a data table.")]),r("h2",[t._v("Unordered list")]),r("Playground",{attrs:{markup:t.list(),config:t.config}}),r("h2",[t._v("Ordered list - numbered")]),r("Playground",{attrs:{markup:t.list("ordered"),config:t.config}}),r("h2",[t._v("Ordered list - alphabetically")]),r("Playground",{attrs:{markup:t.list("ordered","alphabetically"),config:t.config}})],1)},n=[],i=(r("d86f"),r("75a4"),r("d4ec")),a=r("bee2"),c=r("262e"),s=r("2caf"),l=r("53ca"),d=r("2b0e"),u=r("2fe1"),f=function(t,e,r,o){var n,i=arguments.length,a=i<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,r):o;if("object"===("undefined"===typeof Reflect?"undefined":Object(l["a"])(Reflect))&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,r,o);else for(var c=t.length-1;c>=0;c--)(n=t[c])&&(a=(i<3?n(a):i>3?n(e,r,a):n(e,r))||a);return i>3&&a&&Object.defineProperty(e,r,a),a},p=function(t){Object(c["a"])(r,t);var e=Object(s["a"])(r);function r(){var t;return Object(i["a"])(this,r),t=e.apply(this,arguments),t.config={themeable:!0},t}return Object(a["a"])(r,[{key:"list",value:function(t,e){var r=(t?' list-type="'.concat(t,'"'):"")+(e?' order-type="'.concat(e,'"'):"");return"<p-text-list".concat(r,'>\n  <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n  <p-text-list-item>The quick <a href="#">brown fox</a> jumps <b>over</b> the <strong>lazy</strong> dog\n    <p-text-list').concat(r,'>\n      <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n      <p-text-list-item>The quick brown fox jumps over the lazy dog, the lazy dog jumps over the quick brown fox</p-text-list-item>\n        <p-text-list-item>The quick <a href="#">brown fox</a> jumps <b>over</b> the <strong>lazy</strong> dog\n          <p-text-list').concat(r,">\n            <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n            <p-text-list-item>The quick brown fox jumps over the lazy dog, the lazy dog jumps over the quick brown fox</p-text-list-item>\n          </p-text-list>\n        </p-text-list-item>\n    </p-text-list>\n  </p-text-list-item>\n  <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>\n</p-text-list>")}}]),r}(d["a"]);p=f([u["b"]],p);var h=p,v=h,x=r("2877"),b=Object(x["a"])(v,o,n,!1,null,null,null);e["default"]=b.exports},"189b":function(t,e,r){var o=r("72df"),n=r("7d53"),i=r("4fed"),a=n("species");t.exports=function(t){return i>=51||!o((function(){var e=[],r=e.constructor={};return r[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"37d1":function(t,e,r){var o=r("730c");t.exports=function(t){return Object(o(t))}},"4fed":function(t,e,r){var o,n,i=r("f498"),a=r("64e4"),c=i.process,s=c&&c.versions,l=s&&s.v8;l?(o=l.split("."),n=o[0]+o[1]):a&&(o=a.match(/Edge\/(\d+)/),(!o||o[1]>=74)&&(o=a.match(/Chrome\/(\d+)/),o&&(n=o[1]))),t.exports=n&&+n},"64e4":function(t,e,r){var o=r("5428");t.exports=o("navigator","userAgent")||""},"6a86":function(t,e,r){var o=r("7526"),n=r("c6de"),i=r("7d53"),a=i("species");t.exports=function(t,e){var r;return n(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!n(r.prototype)?o(r)&&(r=r[a],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"75a4":function(t,e,r){var o=r("6b1d"),n=r("72df"),i=r("378c"),a=r("185a").f,c=r("d4cb"),s=n((function(){a(1)})),l=!c||s;o({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,e){return a(i(t),e)}})},c6de:function(t,e,r){var o=r("6a61");t.exports=Array.isArray||function(t){return"Array"==o(t)}},d86f:function(t,e,r){"use strict";var o=r("6b1d"),n=r("72df"),i=r("c6de"),a=r("7526"),c=r("37d1"),s=r("b495"),l=r("dac6"),d=r("6a86"),u=r("189b"),f=r("7d53"),p=r("4fed"),h=f("isConcatSpreadable"),v=9007199254740991,x="Maximum allowed index exceeded",b=p>=51||!n((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),m=u("concat"),g=function(t){if(!a(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},y=!b||!m;o({target:"Array",proto:!0,forced:y},{concat:function(t){var e,r,o,n,i,a=c(this),u=d(a,0),f=0;for(e=-1,o=arguments.length;e<o;e++)if(i=-1===e?a:arguments[e],g(i)){if(n=s(i.length),f+n>v)throw TypeError(x);for(r=0;r<n;r++,f++)r in i&&l(u,f,i[r])}else{if(f>=v)throw TypeError(x);l(u,f++,i)}return u.length=f,u}})},dac6:function(t,e,r){"use strict";var o=r("083f"),n=r("abdf"),i=r("9618");t.exports=function(t,e,r){var a=o(e);a in t?n.f(t,a,i(0,r)):t[a]=r}}}]);
//# sourceMappingURL=chunk-1254d9c3.646d75a9.js.map