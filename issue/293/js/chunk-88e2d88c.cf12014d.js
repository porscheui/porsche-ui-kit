(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-88e2d88c"],{"1fef":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"vmark"},[i("h1",[e._v("Grid")]),e._m(0),i("p",[e._v("In order to prevent horizontal scrolling it's needed to define a global CSS rule in your application, e.g.:")]),e._m(1),i("h3",[e._v("Grid size")]),i("p",[e._v("Following example shows a standard grid implementation.")]),i("Playground",{attrs:{childElementLayout:{spacing:"block-small"}}},[i("p-grid",{staticClass:"example-grid"},[i("p-grid-item",{attrs:{size:"12"}},[e._v("12")])],1),e._l(11,(function(t,s){return i("p-grid",{key:s,staticClass:"example-grid"},[i("p-grid-item",{attrs:{size:t}},[e._v(e._s(t))]),i("p-grid-item",{attrs:{size:12-t}},[e._v(e._s(12-t))])],1)}))],2),i("h4",[e._v("Responsiveness")]),e._m(2),i("Playground",[i("p-grid",{staticClass:"example-grid"},[i("p-grid-item",{attrs:{size:"{ base: 6, m: 2 }"}},[e._v("A")]),i("p-grid-item",{attrs:{size:"{ base: 6, m: 10 }"}},[e._v("B")])],1)],1),i("hr"),i("h4",[e._v("Safe Zone")]),e._m(3),i("Playground",[i("p-grid",{staticClass:"example-grid",attrs:{"safe-zone":"true"}},[i("p-grid-item",{attrs:{size:"4"}},[e._v("A")]),i("p-grid-item",{attrs:{size:"8"}},[e._v("B")])],1)],1),i("hr"),i("h3",[e._v("Grid offset")]),i("p",[e._v("In some cases it can be necessary to indent columns. The grid gives basic indentions based on grid sizings.")]),i("Playground",{attrs:{childElementLayout:{spacing:"block-small"}}},e._l(11,(function(t,s){return i("p-grid",{key:s,staticClass:"example-grid"},[i("p-grid-item",{attrs:{offset:t,size:12-t}},[e._v(e._s(t))])],1)})),1),i("h4",[e._v("Responsiveness")]),e._m(4),i("Playground",[i("p-grid",{staticClass:"example-grid"},[i("p-grid-item",{attrs:{offset:"{ base: 6, m: 2 }",size:"{ base: 6, m: 10 }"}},[e._v("A")])],1)],1),i("hr"),i("h3",[e._v("Grid direction")]),e._m(5),i("h4",[e._v("Row (default)")]),i("Playground",[i("p-grid",{staticClass:"example-grid",attrs:{direction:"row"}},[i("p-grid-item",{attrs:{size:"4"}},[e._v("A")]),i("p-grid-item",{attrs:{size:"4"}},[e._v("B")]),i("p-grid-item",{attrs:{size:"4"}},[e._v("C")])],1)],1),i("h4",[e._v("Row reverse")]),i("Playground",[i("p-grid",{staticClass:"example-grid",attrs:{direction:"row-reverse"}},[i("p-grid-item",{attrs:{size:"4"}},[e._v("A")]),i("p-grid-item",{attrs:{size:"4"}},[e._v("B")]),i("p-grid-item",{attrs:{size:"4"}},[e._v("C")])],1)],1),i("h4",[e._v("Column")]),i("Playground",[i("p-grid",{staticClass:"example-grid",attrs:{direction:"column"}},[i("p-grid-item",{attrs:{size:"4"}},[e._v("A")]),i("p-grid-item",{attrs:{size:"4"}},[e._v("B")]),i("p-grid-item",{attrs:{size:"4"}},[e._v("C")])],1)],1),i("h4",[e._v("Column-reverse")]),i("Playground",[i("p-grid",{staticClass:"example-grid",attrs:{direction:"column-reverse"}},[i("p-grid-item",{attrs:{size:"4"}},[e._v("A")]),i("p-grid-item",{attrs:{size:"4"}},[e._v("B")]),i("p-grid-item",{attrs:{size:"4"}},[e._v("C")])],1)],1),i("h4",[e._v("Responsiveness")]),e._m(6),i("Playground",[i("p-grid",{staticClass:"example-grid",attrs:{direction:"{ base: 'column', m: 'row' }"}},[i("p-grid-item",{attrs:{size:"{ base: 12, m: 4 }"}},[e._v("A")]),i("p-grid-item",{attrs:{size:"{ base: 12, m: 4 }"}},[e._v("B")]),i("p-grid-item",{attrs:{size:"{ base: 12, m: 4 }"}},[e._v("C")])],1)],1),i("hr"),i("h3",[e._v("Grid nesting")]),i("p",[e._v('Basic nesting of grids is supported. "Basic" because of percentage value of width and gutter which couldn\'t be calculated for each column width. Here are some examples of "do\'s" and "don\'ts":')]),i("Playground",[i("p-grid",[i("p-grid-item",{attrs:{size:"6"}},[i("p-grid",{staticClass:"example-grid"},[i("p-grid-item",{attrs:{size:"6"}},[e._v("A")]),i("p-grid-item",{attrs:{size:"6"}},[e._v("B")])],1)],1),i("p-grid-item",{attrs:{size:"6"}},[i("p-grid",{staticClass:"example-grid"},[i("p-grid-item",{attrs:{size:"4"}},[e._v("A")]),i("p-grid-item",{attrs:{size:"8"}},[e._v("B")])],1)],1)],1)],1),i("h4",[e._v('Possible nesting by keeping columns in "the grid"')]),i("p",[e._v("Only columns with the following widths could be nested:")]),e._m(7),i("h4",[e._v("Forbidden nesting")]),i("p",[e._v('Nesting inside columns with the following widths should be prevented, because all item widths won\'t be in "the grid" anymore:')]),e._m(8)],1)},r=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("The Porsche Design System grid system is based upon a standard 12 column responsive grid. Its main purpose is to provide a solid and flexible grid system for defining layout areas and page structures. It is not meant to function as a toolkit for layouting content blocks or components. For this, the "),i("a",{attrs:{href:"#/components/layout/flex"}},[e._v("Flex")]),e._v(" component is the right choice.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("pre",[i("code",[e._v("body {\n  overflow-x: hidden;\n}\n")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("The settings above can also be used on different major breakpoints "),i("code",[e._v("xs")]),e._v(", "),i("code",[e._v("s")]),e._v(", "),i("code",[e._v("m")]),e._v(", "),i("code",[e._v("l")]),e._v(" and "),i("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("Enabling the "),i("code",[e._v("safe-zone")]),e._v(" property defines the outer spacings between the content area and the left and right screen sides, as well as centering its content and setting a max-width.")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("The settings above can also be used on different major breakpoints "),i("code",[e._v("xs")]),e._v(", "),i("code",[e._v("s")]),e._v(", "),i("code",[e._v("m")]),e._v(", "),i("code",[e._v("l")]),e._v(" and "),i("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("In some cases it might be necessary to define or change direction of the columns/rows. The default setting is "),i("code",[e._v("row")]),e._v(". But "),i("code",[e._v("column")]),e._v(" is also possible to set the columns vertically underneath each other. A change of the optical order can be achieved by setting "),i("code",[e._v("reverse")]),e._v(".")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("The settings above can also be used on different major breakpoints "),i("code",[e._v("xs")]),e._v(", "),i("code",[e._v("s")]),e._v(", "),i("code",[e._v("m")]),e._v(", "),i("code",[e._v("l")]),e._v(" and "),i("code",[e._v("xl")]),e._v(".")])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("total width of 8")]),i("li",[e._v("total width of 6")]),i("li",[e._v("total width of 4")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ul",[i("li",[e._v("total width of 11")]),i("li",[e._v("total width of 10")]),i("li",[e._v("total width of 9")]),i("li",[e._v("total width of 7")]),i("li",[e._v("total width of 5")]),i("li",[e._v("total width of 3")])])}],a=(i("6f19"),i("2877")),n={},o=Object(a["a"])(n,s,r,!1,null,"49365470",null);t["default"]=o.exports},"41d4":function(e,t,i){},"6f19":function(e,t,i){"use strict";var s=i("41d4"),r=i.n(s);r.a}}]);
//# sourceMappingURL=chunk-88e2d88c.cf12014d.js.map