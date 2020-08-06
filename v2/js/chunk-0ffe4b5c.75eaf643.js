(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ffe4b5c"],{"798b":function(n,t,e){},"8b50":function(n,t,e){"use strict";e.r(t);var o=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"vmark"},[e("h1",[n._v("Buttons")]),e("p",[n._v("To help you better understand how to use our button guidelines we provide you with basic examples and coded snippets:")]),e("hr"),e("h2",[n._v("Grouped button pattern examples")]),n._m(0),e("h3",[n._v("Responsive row/column behaviour left aligned")]),e("Playground",[e("p-flex",{staticClass:"button-group-col button-group-row--s"},[e("p-button",{attrs:{variant:"tertiary"}},[n._v("Some label")]),e("p-button",{attrs:{variant:"secondary"}},[n._v("Some label")]),e("p-button",{attrs:{variant:"primary"}},[n._v("Some label")])],1)],1),e("h3",[n._v("Responsive row/column behaviour right aligned")]),e("Playground",[e("p-flex",{staticClass:"button-group-col button-group-row--s button-group--align-right",attrs:{"justify-content":"flex-end"}},[e("p-button",{attrs:{variant:"tertiary"}},[n._v("Some label")]),e("p-button",{attrs:{variant:"secondary"}},[n._v("Some label")]),e("p-button",{attrs:{variant:"primary"}},[n._v("Some label")])],1)],1),e("h3",[n._v("Explanation of used class names")]),n._m(1),n._m(2)],1)},r=[function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("p",[n._v("Basically you can use the following approach to serve the grouped button pattern described in the "),e("a",{attrs:{href:"#/patterns/buttons#guidelines"}},[n._v("design guidelines")]),n._v(". In a standard layout the buttons are placed in a stacked order on mobile up to viewports smaller than "),e("strong",[n._v('"s"')]),n._v(" and side by side on viewports larger than "),e("strong",[n._v('"s"')]),n._v(". You can change these responsive placements to your needs regarding to the context the buttons are placed in by changing the responsive modifier to "),e("code",[n._v("--xs, --s, --m, --l, --xl")]),n._v(".")])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("p",[n._v("Here you can find the "),e("strong",[n._v("SCSS")]),n._v(" of the used class names. This is meant to be just "),e("strong",[n._v("one")]),n._v(" possible solution to build the grouped button pattern. It's totally up to you and your team how to achieve the grouped button pattern described in the "),e("a",{attrs:{href:"#/patterns/buttons#guidelines"}},[n._v("design guidelines")]),n._v(".")])},function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("pre",[e("code",{staticClass:"language-scss"},[n._v(".button-group {\n  @mixin p-row() {\n    flex-direction: row;\n    > * {\n      width: auto;\n      &:not(:last-child) {\n        margin-right: $p-spacing-16;\n      }\n      &:not(:first-child) {\n        margin-top: 0;\n      }\n    }\n  } \n  \n  @mixin p-col() {\n    flex-direction: column;\n    > * {\n      width: 100%;\n      &:not(:first-child) {\n        margin-top: $p-spacing-16;\n      }\n      &:not(:last-child) {\n        margin-right: 0;\n      }\n    }\n  } \n  \n  &-row {\n    @include p-row;\n  }\n  \n  &-col {\n    @include p-col;\n  }\n  \n  @include p-media-query('xs') {\n    &-row--xs {\n      @include p-row;\n    }\n    \n    &-col--xs {\n      @include p-col;\n    }\n  }\n  \n  @include p-media-query('s') {\n    &-row--s {\n      @include p-row;\n    }\n    \n    &-col--s {\n      @include p-col;\n    }\n  }\n  \n  @include p-media-query('m') {\n    &-row--m {\n      @include p-row;\n    }\n    \n    &-col--m {\n      @include p-col;\n    }\n  }\n  \n  @include p-media-query('l') {\n    &-row--l {\n      @include p-row;\n    }\n    \n    &-col--l {\n      @include p-col;\n    }\n  }\n  \n  @include p-media-query('xl') {\n    &-row--xl {\n      @include p-row;\n    }\n    \n    &-col--xl {\n      @include p-col;\n    }\n  }\n  \n}\n")])])}],a=(e("c3bb"),e("2877")),i={},s=Object(a["a"])(i,o,r,!1,null,"1a18358e",null);t["default"]=s.exports},c3bb:function(n,t,e){"use strict";var o=e("798b"),r=e.n(o);r.a}}]);
//# sourceMappingURL=chunk-0ffe4b5c.75eaf643.js.map