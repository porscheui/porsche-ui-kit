(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ce5bc39"],{"0446":function(e,t,n){var r=n("da06"),o=n("5bb7"),a=n("7d53"),i=a("iterator");e.exports=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||o[r(e)]}},"0c47":function(e,t,n){var r=n("c91c"),o=n("b17e");e.exports=Object.keys||function(e){return r(e,o)}},"0e39":function(e,t,n){var r=n("f1a7"),o=n("37d1"),a=n("332c"),i=n("802e"),l=a("IE_PROTO"),f=Object.prototype;e.exports=i?Object.getPrototypeOf:function(e){return e=o(e),r(e,l)?e[l]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?f:null}},"189b":function(e,t,n){var r=n("72df"),o=n("7d53"),a=n("4fed"),i=o("species");e.exports=function(e){return a>=51||!r((function(){var t=[],n=t.constructor={};return n[i]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2117:function(e,t,n){var r=n("8697");e.exports=function(e,t,n){if(r(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}}},2514:function(e,t,n){var r=n("157c"),o=n("aaba");e.exports=function(e,t,n,a){try{return a?t(r(n)[0],n[1]):t(n)}catch(i){throw o(e),i}}},"2df4":function(e,t,n){"use strict";var r=n("6b1d"),o=n("2e3f"),a=n("0e39"),i=n("c1a2"),l=n("fa46"),f=n("5b12"),s=n("b8ba"),c=n("7d53"),u=n("0e93"),p=n("5bb7"),d=n("ff89"),v=d.IteratorPrototype,h=d.BUGGY_SAFARI_ITERATORS,x=c("iterator"),m="keys",_="values",g="entries",b=function(){return this};e.exports=function(e,t,n,c,d,y,w){o(n,t,c);var k,P,j,S=function(e){if(e===d&&I)return I;if(!h&&e in A)return A[e];switch(e){case m:return function(){return new n(this,e)};case _:return function(){return new n(this,e)};case g:return function(){return new n(this,e)}}return function(){return new n(this)}},F=t+" Iterator",O=!1,A=e.prototype,C=A[x]||A["@@iterator"]||d&&A[d],I=!h&&C||S(d),T="Array"==t&&A.entries||C;if(T&&(k=a(T.call(new e)),v!==Object.prototype&&k.next&&(u||a(k)===v||(i?i(k,v):"function"!=typeof k[x]&&f(k,x,b)),l(k,F,!0,!0),u&&(p[F]=b))),d==_&&C&&C.name!==_&&(O=!0,I=function(){return C.call(this)}),u&&!w||A[x]===I||f(A,x,I),p[t]=I,d)if(P={values:S(_),keys:y?I:S(m),entries:S(g)},w)for(j in P)(h||O||!(j in A))&&s(A,j,P[j]);else r({target:t,proto:!0,forced:h||O},P);return P}},"2e3f":function(e,t,n){"use strict";var r=n("ff89").IteratorPrototype,o=n("82e8"),a=n("9618"),i=n("fa46"),l=n("5bb7"),f=function(){return this};e.exports=function(e,t,n){var s=t+" Iterator";return e.prototype=o(r,{next:a(1,n)}),i(e,s,!1,!0),l[s]=f,e}},3211:function(e,t,n){var r=n("7d53"),o=r("iterator"),a=!1;try{var i=0,l={next:function(){return{done:!!i++}},return:function(){a=!0}};l[o]=function(){return this},Array.from(l,(function(){throw 2}))}catch(f){}e.exports=function(e,t){if(!t&&!a)return!1;var n=!1;try{var r={};r[o]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(f){}return n}},"37d1":function(e,t,n){var r=n("730c");e.exports=function(e){return Object(r(e))}},"3cec":function(e,t,n){var r=n("7d53"),o=r("toStringTag"),a={};a[o]="z",e.exports="[object z]"===String(a)},"4fed":function(e,t,n){var r,o,a=n("f498"),i=n("64e4"),l=a.process,f=l&&l.versions,s=f&&f.v8;s?(r=s.split("."),o=r[0]+r[1]):i&&(r=i.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/),r&&(o=r[1]))),e.exports=o&&+o},"5bb7":function(e,t){e.exports={}},"64e4":function(e,t,n){var r=n("5428");e.exports=r("navigator","userAgent")||""},"6a86":function(e,t,n){var r=n("7526"),o=n("c6de"),a=n("7d53"),i=a("species");e.exports=function(e,t){var n;return o(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!o(n.prototype)?r(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===t?0:t)}},"77b6":function(e,t,n){"use strict";n("f73f")},"7f8a":function(e,t,n){"use strict";var r=n("72df");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},"802e":function(e,t,n){var r=n("72df");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},"82e8":function(e,t,n){var r,o=n("157c"),a=n("b99b"),i=n("b17e"),l=n("d687"),f=n("9324"),s=n("f2bf"),c=n("332c"),u=">",p="<",d="prototype",v="script",h=c("IE_PROTO"),x=function(){},m=function(e){return p+v+u+e+p+"/"+v+u},_=function(e){e.write(m("")),e.close();var t=e.parentWindow.Object;return e=null,t},g=function(){var e,t=s("iframe"),n="java"+v+":";return t.style.display="none",f.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(m("document.F=Object")),e.close(),e.F},b=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}b=r?_(r):g();var e=i.length;while(e--)delete b[d][i[e]];return b()};l[h]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(x[d]=o(e),n=new x,x[d]=null,n[h]=e):n=b(),void 0===t?n:a(n,t)}},8423:function(e,t,n){var r=n("6b1d"),o=n("ccae"),a=n("3211"),i=!a((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:i},{from:o})},8697:function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},9324:function(e,t,n){var r=n("5428");e.exports=r("document","documentElement")},aaba:function(e,t,n){var r=n("157c");e.exports=function(e){var t=e["return"];if(void 0!==t)return r(t.call(e)).value}},b99b:function(e,t,n){var r=n("d4cb"),o=n("abdf"),a=n("157c"),i=n("0c47");e.exports=r?Object.defineProperties:function(e,t){a(e);var n,r=i(t),l=r.length,f=0;while(l>f)o.f(e,n=r[f++],t[n]);return e}},c174:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Flex")]),e._m(0),n("h3",[e._v("Flex")]),n("p",[e._v("Initialize standard Flexbox container to define Flex context.")]),n("Playground",{attrs:{markup:e.flexInline()}}),n("h3",[e._v("Inline")]),n("p",[e._v("Flex inline displays Flex containers in a row.")]),n("Playground",{attrs:{markup:e.flexInline("true")}}),n("h3",[e._v("Responsive")]),e._m(1),n("Playground",{attrs:{markup:e.flexInline("{ base: false, l: true }")}}),n("hr"),n("h3",[e._v("Flex direction")]),n("p",[e._v("Define or change direction of the Flex items to rows or columns and set order.")]),n("h4",[e._v("Row")]),n("Playground",{attrs:{markup:e.direction("row")}}),n("h4",[e._v("Row-reverse")]),n("Playground",{attrs:{markup:e.direction("row-reverse")}}),n("h4",[e._v("Column")]),n("Playground",{attrs:{markup:e.direction("column")}}),n("h4",[e._v("Column-reverse")]),n("Playground",{attrs:{markup:e.direction("column-reverse")}}),n("h4",[e._v("Responsiveness")]),e._m(2),n("Playground",{attrs:{markup:e.direction("{ base: 'column', l: 'row' }")}}),n("hr"),n("h3",[e._v("Flex wrap")]),n("p",[e._v("The flex wrap property is used to force Flex items to stay in line independently of the Flex container width, or to flow in multiple lines forced by the Flex container width.")]),n("h4",[e._v("Nowrap")]),n("Playground",{attrs:{markup:e.wrap()}}),n("h4",[e._v("Wrap")]),n("Playground",{attrs:{markup:e.wrap("wrap")}}),n("h4",[e._v("Wrap-reverse")]),n("Playground",{attrs:{markup:e.wrap("wrap-reverse")}}),n("h4",[e._v("Responsiveness")]),e._m(3),n("Playground",{attrs:{markup:e.wrap("{ base: 'wrap', l: 'nowrap' }")}}),n("hr"),n("h3",[e._v("Flex justify-content")]),n("p",[e._v("This property defines the alignment of Flex items on the main axis in conjunction to their siblings.")]),n("h4",[e._v("Flex-start")]),n("Playground",{attrs:{markup:e.justifyContent()}}),n("h4",[e._v("Flex-end")]),n("Playground",{attrs:{markup:e.justifyContent("flex-end")}}),n("h4",[e._v("Center")]),n("Playground",{attrs:{markup:e.justifyContent("center")}}),n("h4",[e._v("Space-between")]),n("Playground",{attrs:{markup:e.justifyContent("space-between")}}),n("h4",[e._v("Space-around")]),n("Playground",{attrs:{markup:e.justifyContent("space-around")}}),n("h4",[e._v("Space-evenly")]),n("Playground",{attrs:{markup:e.justifyContent("space-evenly")}}),n("h4",[e._v("Responsiveness")]),e._m(4),n("Playground",{attrs:{markup:e.justifyContent("{ base: 'flex-start', l: 'flex-end' }")}}),n("hr"),n("h3",[e._v("Flex align-items")]),n("p",[e._v("This property defines the alignment of Flex items on the cross axis in conjunction to their siblings.")]),n("h4",[e._v("Stretch")]),n("Playground",{attrs:{markup:e.alignItems(),config:{height:"fixed"}}}),n("h4",[e._v("Flex-start")]),n("Playground",{attrs:{markup:e.alignItems("flex-start"),config:{height:"fixed"}}}),n("h4",[e._v("Flex-end")]),n("Playground",{attrs:{markup:e.alignItems("flex-end"),config:{height:"fixed"}}}),n("h4",[e._v("Center")]),n("Playground",{attrs:{markup:e.alignItems("center"),config:{height:"fixed"}}}),n("h4",[e._v("Baseline")]),n("Playground",{attrs:{markup:e.alignItems("baseline"),config:{height:"fixed"}}}),n("h4",[e._v("Responsiveness")]),e._m(5),n("Playground",{attrs:{markup:e.alignItems("{ base: 'flex-start', l: 'flex-end' }"),config:{height:"fixed"}}}),n("hr"),n("h3",[e._v("Flex align-content")]),n("p",[e._v("This aligns Flex items on the cross axis of the Flex container when there is extra space available. This property has only effect when there is more than one line of Flex items.")]),n("h4",[e._v("Stretch")]),n("Playground",{attrs:{markup:e.alignContent(),config:{height:"fixed"}}}),n("h4",[e._v("Flex-start")]),n("Playground",{attrs:{markup:e.alignContent("flex-start"),config:{height:"fixed"}}}),n("h4",[e._v("Flex-end")]),n("Playground",{attrs:{markup:e.alignContent("flex-end"),config:{height:"fixed"}}}),n("h4",[e._v("Center")]),n("Playground",{attrs:{markup:e.alignContent("center"),config:{height:"fixed"}}}),n("h4",[e._v("Space-between")]),n("Playground",{attrs:{markup:e.alignContent("space-between"),config:{height:"fixed"}}}),n("h4",[e._v("Space-around")]),n("Playground",{attrs:{markup:e.alignContent("space-around"),config:{height:"fixed"}}}),n("h4",[e._v("Space-evenly")]),n("Playground",{attrs:{markup:e.alignContent("space-evenly"),config:{height:"fixed"}}}),n("h4",[e._v("Responsiveness")]),e._m(6),n("Playground",{attrs:{markup:e.alignContent("{ base: 'flex-start', l: 'flex-end' }"),config:{height:"fixed"}}}),n("hr"),n("h2",[e._v("Modifier for Flex items (children)")]),n("h3",[e._v("Flex-item width")]),n("p",[e._v("The widths of Flex items is normally defined through its contents by default. But it is also possible to define specific predefined widths.")]),n("h4",[e._v("Specific")]),n("Playground",{attrs:{markup:e.widthSpecific,config:{spacing:"block-small"}}}),n("h4",[e._v("Responsiveness")]),e._m(7),n("Playground",{attrs:{markup:e.widthWrap}}),n("hr"),n("h3",[e._v("Flex-item offset")]),n("p",[e._v("Items can have different offsets that work similar like column widths.")]),n("h4",[e._v("Widths")]),n("Playground",{attrs:{markup:e.offsetWidths,config:{spacing:"block-small"}}}),n("h4",[e._v("Responsive")]),e._m(8),n("Playground",{attrs:{markup:e.offsetReponsive,config:{spacing:"block-small"}}}),n("hr"),n("h3",[e._v("Flex-item align-self")]),n("p",[e._v("You can override the align-items properties of the Flex container for individual Flex items.")]),n("h4",[e._v("Auto")]),n("Playground",{attrs:{markup:e.alignSelf(),config:{height:"fixed"}}}),n("h4",[e._v("Stretch")]),n("Playground",{attrs:{markup:e.alignSelf("stretch","flex-start"),config:{height:"fixed"}}}),n("h4",[e._v("Flex-start")]),n("Playground",{attrs:{markup:e.alignSelf("flex-start"),config:{height:"fixed"}}}),n("h4",[e._v("Flex-end")]),n("Playground",{attrs:{markup:e.alignSelf("flex-end"),config:{height:"fixed"}}}),n("h4",[e._v("Center")]),n("Playground",{attrs:{markup:e.alignSelf("center"),config:{height:"fixed"}}}),n("h4",[e._v("Baseline")]),n("Playground",{attrs:{markup:e.alignSelf("baseline"),config:{height:"fixed"}}}),n("h4",[e._v("Responsiveness")]),e._m(9),n("Playground",{attrs:{markup:e.alignSelf("{ base: 'flex-start', l: 'flex-end' }"),config:{height:"fixed"}}}),n("hr"),n("h3",[e._v("Flex-item grow")]),n("p",[e._v("Flexbox default behaviours on how the item widths are rendered (stretched) can be overwritten with the following class names.")]),n("p",[e._v("It handles how to grow an item based on the space that is left to fulfill the parent's width.")]),n("h4",[e._v("Grow - 0")]),n("Playground",{attrs:{markup:e.grow()}}),n("h4",[e._v("Grow - 1")]),n("Playground",{attrs:{markup:e.grow("1")}}),n("h4",[e._v("Responsiveness")]),e._m(10),n("Playground",{attrs:{markup:e.grow("{ base: 0, l: 1 }")}}),n("hr"),n("h3",[e._v("Flex-item shrink")]),n("p",[e._v("Flexbox default behaviour on how the item widths are rendered (shrinked) can be overwritten with the following class names.")]),n("p",[e._v("It handles how to shrink an item based on the space that exceeds the parents width to fulfill it.")]),n("h4",[e._v("Shrink - 1")]),n("Playground",{attrs:{markup:e.shrink()}}),n("h4",[e._v("Shrink - 0")]),n("Playground",{attrs:{markup:e.shrink("0")}}),n("h4",[e._v("Responsiveness")]),e._m(11),n("Playground",{attrs:{markup:e.shrink("{ base: 0, l: 1 }")}}),n("hr"),n("h3",[e._v("Flex-item shorthand")]),n("p",[e._v("Setting shorthand properties for Flex grow, shrink and base:")]),n("h4",[e._v("Initial (grow:0, shrink:1 and base:auto)")]),n("Playground",{attrs:{markup:e.flexShorthand("initial")}}),n("h4",[e._v("Auto (grow:1, shrink:1 and base:auto)")]),n("Playground",{attrs:{markup:e.flexShorthand("auto")}}),n("h4",[e._v("Equal (grow:1, shrink:1 and base:0)")]),n("Playground",{attrs:{markup:e.flexShorthand("equal")}}),n("h4",[e._v("None (grow:0, shrink:0 and base:auto)")]),n("Playground",{attrs:{markup:e.flexShorthand("none")}}),n("h4",[e._v("Responsiveness")]),e._m(12),n("Playground",{attrs:{markup:e.flexShorthand("{base: 'initial', l: 'equal'}")}})],1)},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The Porsche Design System flex layout system is based on standard CSS Flexbox browser behaviour and can be controlled by the properties of the Flex container and Flex item. It can be used to quickly layout standard content blocks or components. It does not replace the "),n("a",{attrs:{href:"#/components/grid"}},[e._v("Grid")]),e._v(" component which should be used to define basic page structures.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(", "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("The settings above can also be used on different major breakpoints "),n("code",[e._v("xs")]),e._v(", "),n("code",[e._v("s")]),e._v(", "),n("code",[e._v("m")]),e._v(", "),n("code",[e._v("l")]),e._v(" and "),n("code",[e._v("xl")]),e._v(".")])}],a=(n("d86f"),n("8423"),n("ef14"),n("cfce"),n("f3b8"),n("d4ec")),i=n("bee2"),l=n("262e"),f=n("2caf"),s=n("0f9e"),c=n("2b0e"),u=n("2fe1"),p=function(e){Object(l["a"])(n,e);var t=Object(f["a"])(n);function n(){var e;return Object(a["a"])(this,n),e=t.apply(this,arguments),e.widthSpecific='<p-flex class="example-flex">\n  <p-flex-item width="one-quarter">one-quarter</p-flex-item>\n  <p-flex-item width="one-quarter">one-quarter</p-flex-item>\n  <p-flex-item width="one-quarter">one-quarter</p-flex-item>\n  <p-flex-item width="one-quarter">one-quarter</p-flex-item>\n</p-flex>\n<p-flex class="example-flex">\n  <p-flex-item width="one-third">one-third</p-flex-item>\n  <p-flex-item width="one-third">one-third</p-flex-item>\n  <p-flex-item width="one-third">one-third</p-flex-item>\n</p-flex>\n<p-flex class="example-flex">\n  <p-flex-item width="half">half</p-flex-item>\n  <p-flex-item width="half">half</p-flex-item>\n</p-flex>\n<p-flex class="example-flex">\n  <p-flex-item width="two-thirds">two-thirds</p-flex-item>\n  <p-flex-item width="one-third">one-third</p-flex-item>\n</p-flex>\n<p-flex class="example-flex">\n  <p-flex-item width="three-quarters">three-quarters</p-flex-item>\n  <p-flex-item width="one-quarter">one-quarter</p-flex-item>\n</p-flex>\n<p-flex class="example-flex">\n  <p-flex-item width="full">full</p-flex-item>\n</p-flex>',e.widthWrap="<p-flex wrap=\"wrap\" class=\"example-flex\">\n  <p-flex-item width=\"{ base: 'half', l: 'one-quarter' }\">1</p-flex-item>\n  <p-flex-item width=\"{ base: 'half', l: 'one-quarter' }\">2</p-flex-item>\n  <p-flex-item width=\"{ base: 'half', l: 'one-quarter' }\">3</p-flex-item>\n  <p-flex-item width=\"{ base: 'half', l: 'one-quarter' }\">4</p-flex-item>\n</p-flex>",e.offsetWidths='<p-flex class="example-flex">\n  <p-flex-item offset="one-quarter" width="three-quarters">Offset: quarter</p-flex-item>\n</p-flex>\n<p-flex class="example-flex">\n  <p-flex-item offset="one-third" width="two-thirds">Offset: third</p-flex-item>\n</p-flex>\n<p-flex class="example-flex">\n  <p-flex-item offset="half" width="half">Offset: half</p-flex-item>\n</p-flex>\n<p-flex class="example-flex">\n  <p-flex-item offset="two-thirds" width="one-third">Offset: 2 thirds</p-flex-item>\n</p-flex>\n<p-flex class="example-flex">\n  <p-flex-item offset="three-quarters" width="one-quarter">Offset: 3 quarters</p-flex-item>\n</p-flex>',e.offsetReponsive="<p-flex class=\"example-flex\">\n  <p-flex-item offset=\"{ base: 'none', l: 'one-third' }\">Responsive offset</p-flex-item>\n</p-flex>",e}return Object(i["a"])(n,[{key:"flexInline",value:function(e){var t=e?' inline="'.concat(e,'"'):"";return"<p-flex".concat(t,' class="example-flex">\n  <p-flex-item>1</p-flex-item>\n  <p-flex-item>2</p-flex-item>\n</p-flex>\n<p-flex').concat(t,' class="example-flex">\n  <p-flex-item>1</p-flex-item>\n  <p-flex-item>2</p-flex-item>\n</p-flex>')}},{key:"direction",value:function(e){var t=e?' direction="'.concat(e,'"'):"";return"<p-flex".concat(t,' class="example-flex">\n  <p-flex-item>1</p-flex-item>\n  <p-flex-item>2</p-flex-item>\n  <p-flex-item>3</p-flex-item>\n</p-flex>')}},{key:"wrap",value:function(e){var t=e?' wrap="'.concat(e,'"'):"";return"<p-flex".concat(t,' class="example-flex">\n  ').concat(Array.from(Array(9)).map((function(e,t){return"<p-flex-item>".concat(t+1,"</p-flex-item>")})).join("\n  "),"\n</p-flex>")}},{key:"justifyContent",value:function(e){var t=e?' justify-content="'.concat(e,'"'):"";return"<p-flex".concat(t,' class="example-flex">\n  <p-flex-item>1</p-flex-item>\n  <p-flex-item>2</p-flex-item>\n  <p-flex-item>3</p-flex-item>\n</p-flex>')}},{key:"alignItems",value:function(e){var t=e?' align-items="'.concat(e,'"'):"";return"<p-flex".concat(t,' class="example-flex">\n  <p-flex-item>1</p-flex-item>\n  <p-flex-item>2</p-flex-item>\n  <p-flex-item>3</p-flex-item>\n</p-flex>')}},{key:"alignContent",value:function(e){var t=e?' align-content="'.concat(e,'"'):"";return'<p-flex wrap="wrap"'.concat(t,' class="example-flex">\n  ').concat(Array.from(Array(9)).map((function(e,t){return"<p-flex-item>".concat(t+1,"</p-flex-item>")})).join("\n  "),"\n</p-flex>")}},{key:"alignSelf",value:function(e,t){var n=e?' align-self="'.concat(e,'"'):"",r=t?' align-items="'.concat(t,'"'):"";return"<p-flex".concat(r,' class="example-flex">\n  <p-flex-item').concat("baseline"===e?n:"",">1</p-flex-item>\n  <p-flex-item>2</p-flex-item>\n  <p-flex-item").concat(n,">3</p-flex-item>\n  <p-flex-item>4</p-flex-item>\n</p-flex>")}},{key:"grow",value:function(e){var t=e?' grow="'.concat(e,'"'):"";return'<p-flex class="example-flex">\n  <p-flex-item>1</p-flex-item>\n  <p-flex-item'.concat(t,">2</p-flex-item>\n</p-flex>")}},{key:"shrink",value:function(e){var t=e?' shrink="'.concat(e,'"'):"";return'<p-flex class="example-flex">\n  <p-flex-item'.concat(t,' style="width: 80%">1</p-flex-item>\n  <p-flex-item style="width: 80%">2</p-flex-item>\n</p-flex>')}},{key:"flexShorthand",value:function(e){var t=e?' flex="'.concat(e,'"'):"";return'<p-flex class="example-flex">\n  <p-flex-item'.concat(t,">1 - short content</p-flex-item>\n  <p-flex-item").concat(t,">2 - large amount of content lorem ipsum dolor sit amet consecutor sibling nira space</p-flex-item>\n  <p-flex-item").concat(t,">3 - short content</p-flex-item>\n</p-flex>")}}]),n}(c["a"]);p=Object(s["b"])([u["b"]],p);var d=p,v=d,h=(n("77b6"),n("2877")),x=Object(h["a"])(v,r,o,!1,null,"57fa1155",null);t["default"]=x.exports},c1a2:function(e,t,n){var r=n("157c"),o=n("f3e4");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,e.call(n,[]),t=n instanceof Array}catch(a){}return function(n,a){return r(n),o(a),t?e.call(n,a):n.__proto__=a,n}}():void 0)},c6de:function(e,t,n){var r=n("6a61");e.exports=Array.isArray||function(e){return"Array"==r(e)}},c965:function(e,t,n){var r=n("7d53"),o=n("5bb7"),a=r("iterator"),i=Array.prototype;e.exports=function(e){return void 0!==e&&(o.Array===e||i[a]===e)}},ccae:function(e,t,n){"use strict";var r=n("2117"),o=n("37d1"),a=n("2514"),i=n("c965"),l=n("b495"),f=n("dac6"),s=n("0446");e.exports=function(e){var t,n,c,u,p,d,v=o(e),h="function"==typeof this?this:Array,x=arguments.length,m=x>1?arguments[1]:void 0,_=void 0!==m,g=s(v),b=0;if(_&&(m=r(m,x>2?arguments[2]:void 0,2)),void 0==g||h==Array&&i(g))for(t=l(v.length),n=new h(t);t>b;b++)d=_?m(v[b],b):v[b],f(n,b,d);else for(u=g.call(v),p=u.next,n=new h;!(c=p.call(u)).done;b++)d=_?a(u,m,[c.value,b],!0):c.value,f(n,b,d);return n.length=b,n}},ce71:function(e,t,n){var r=n("d4cb"),o=n("72df"),a=n("f1a7"),i=Object.defineProperty,l={},f=function(e){throw e};e.exports=function(e,t){if(a(l,e))return l[e];t||(t={});var n=[][e],s=!!a(t,"ACCESSORS")&&t.ACCESSORS,c=a(t,0)?t[0]:f,u=a(t,1)?t[1]:void 0;return l[e]=!!n&&!o((function(){if(s&&!r)return!0;var e={length:-1};s?i(e,1,{enumerable:!0,get:f}):e[1]=1,n.call(e,c,u)}))}},cfce:function(e,t,n){"use strict";var r=n("6b1d"),o=n("d054").map,a=n("189b"),i=n("ce71"),l=a("map"),f=i("map");r({target:"Array",proto:!0,forced:!l||!f},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},d054:function(e,t,n){var r=n("2117"),o=n("83a6"),a=n("37d1"),i=n("b495"),l=n("6a86"),f=[].push,s=function(e){var t=1==e,n=2==e,s=3==e,c=4==e,u=6==e,p=7==e,d=5==e||u;return function(v,h,x,m){for(var _,g,b=a(v),y=o(b),w=r(h,x,3),k=i(y.length),P=0,j=m||l,S=t?j(v,k):n||p?j(v,0):void 0;k>P;P++)if((d||P in y)&&(_=y[P],g=w(_,P,b),e))if(t)S[P]=g;else if(g)switch(e){case 3:return!0;case 5:return _;case 6:return P;case 2:f.call(S,_)}else switch(e){case 4:return!1;case 7:f.call(S,_)}return u?-1:s||c?c:S}};e.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6),filterOut:s(7)}},d86f:function(e,t,n){"use strict";var r=n("6b1d"),o=n("72df"),a=n("c6de"),i=n("7526"),l=n("37d1"),f=n("b495"),s=n("dac6"),c=n("6a86"),u=n("189b"),p=n("7d53"),d=n("4fed"),v=p("isConcatSpreadable"),h=9007199254740991,x="Maximum allowed index exceeded",m=d>=51||!o((function(){var e=[];return e[v]=!1,e.concat()[0]!==e})),_=u("concat"),g=function(e){if(!i(e))return!1;var t=e[v];return void 0!==t?!!t:a(e)},b=!m||!_;r({target:"Array",proto:!0,forced:b},{concat:function(e){var t,n,r,o,a,i=l(this),u=c(i,0),p=0;for(t=-1,r=arguments.length;t<r;t++)if(a=-1===t?i:arguments[t],g(a)){if(o=f(a.length),p+o>h)throw TypeError(x);for(n=0;n<o;n++,p++)n in a&&s(u,p,a[n])}else{if(p>=h)throw TypeError(x);s(u,p++,a)}return u.length=p,u}})},da06:function(e,t,n){var r=n("3cec"),o=n("6a61"),a=n("7d53"),i=a("toStringTag"),l="Arguments"==o(function(){return arguments}()),f=function(e,t){try{return e[t]}catch(n){}};e.exports=r?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=f(t=Object(e),i))?n:l?o(t):"Object"==(r=o(t))&&"function"==typeof t.callee?"Arguments":r}},dac6:function(e,t,n){"use strict";var r=n("083f"),o=n("abdf"),a=n("9618");e.exports=function(e,t,n){var i=r(t);i in e?o.f(e,i,a(0,n)):e[i]=n}},ef14:function(e,t,n){"use strict";var r=n("6b1d"),o=n("83a6"),a=n("378c"),i=n("7f8a"),l=[].join,f=o!=Object,s=i("join",",");r({target:"Array",proto:!0,forced:f||!s},{join:function(e){return l.call(a(this),void 0===e?",":e)}})},f3b8:function(e,t,n){"use strict";var r=n("b7fb").charAt,o=n("cdcd"),a=n("2df4"),i="String Iterator",l=o.set,f=o.getterFor(i);a(String,"String",(function(e){l(this,{type:i,string:String(e),index:0})}),(function(){var e,t=f(this),n=t.string,o=t.index;return o>=n.length?{value:void 0,done:!0}:(e=r(n,o),t.index+=e.length,{value:e,done:!1})}))},f3e4:function(e,t,n){var r=n("7526");e.exports=function(e){if(!r(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype");return e}},f73f:function(e,t,n){},fa46:function(e,t,n){var r=n("abdf").f,o=n("f1a7"),a=n("7d53"),i=a("toStringTag");e.exports=function(e,t,n){e&&!o(e=n?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},ff89:function(e,t,n){"use strict";var r,o,a,i=n("0e39"),l=n("5b12"),f=n("f1a7"),s=n("7d53"),c=n("0e93"),u=s("iterator"),p=!1,d=function(){return this};[].keys&&(a=[].keys(),"next"in a?(o=i(i(a)),o!==Object.prototype&&(r=o)):p=!0),void 0==r&&(r={}),c||f(r,u)||l(r,u,d),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}}}]);
//# sourceMappingURL=chunk-5ce5bc39.2e6d7bdc.js.map