(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e139f"],{"7a10":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vmark"},[r("h1",[e._v("Scss")]),r("h2",[e._v("Variables")]),r("h2",[e._v("Color")]),r("p",[e._v("A light and dark theme is available depending on which background it's used.")]),r("br"),r("select",{attrs:{id:"theme-selector","data-selected":e.theme},on:{change:function(t){e.theme=t.target.value}}},[r("option",{attrs:{disabled:""}},[e._v("Select a theme")]),r("option",{attrs:{value:"light"}},[e._v("Theme light")]),r("option",{attrs:{value:"dark"}},[e._v("Theme dark")])]),r("h3",[e._v("Theme "+e._s(e.theme))]),r("h4",[e._v("Brand colors")]),r("table",[e._m(0),r("tbody",[r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"brand"}})],1),e._m(1),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-brand")])])])])]),r("h4",[e._v("Background colors")]),r("table",[e._m(2),r("tbody",[r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"background"}})],1),e._m(3),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-background")])])]),r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"surface"}})],1),e._m(4),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-surface")])])])])]),r("h4",[e._v("Text / icon color")]),r("table",[e._m(5),r("tbody",[r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"default"}})],1),e._m(6),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-default")])])])])]),r("h4",[e._v("Neutral colors")]),r("table",[e._m(7),r("tbody",[r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"neutral-contrast-high"}})],1),e._m(8),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-neutral-contrast-high")])])]),r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"neutral-contrast-medium"}})],1),e._m(9),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-neutral-contrast-medium")])])]),r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"neutral-contrast-low"}})],1),e._m(10),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-neutral-contrast-low")])])])])]),r("h4",[e._v("Notification colors")]),r("table",[e._m(11),r("tbody",[r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"notification-error"}})],1),e._m(12),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-notification-error")])])]),r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"notification-success"}})],1),e._m(13),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-notification-success")])])]),r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"notification-warning"}})],1),e._m(14),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-notification-warning")])])])])]),r("h4",[e._v("State colors")]),r("table",[e._m(15),r("tbody",[r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"state-hover"}})],1),e._m(16),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-state-hover")])])]),r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"state-active"}})],1),e._m(17),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-state-active")])])]),r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"state-focus"}})],1),e._m(18),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-state-focus")])])]),r("tr",[r("td",[r("ColorBadge",{attrs:{theme:e.theme,color:"state-disabled"}})],1),e._m(19),r("td",[r("code",[e._v("$p-color-theme-"+e._s(e.theme)+"-state-disabled")])])])])]),r("hr"),r("h3",[e._v("External brand colors")]),r("table",[e._m(20),r("tbody",[r("tr",[r("td",[r("ColorBadge",{attrs:{color:"external-facebook"}})],1),e._m(21),e._m(22)]),r("tr",[r("td",[r("ColorBadge",{attrs:{color:"external-google"}})],1),e._m(23),e._m(24)]),r("tr",[r("td",[r("ColorBadge",{attrs:{color:"external-instagram"}})],1),e._m(25),e._m(26)]),r("tr",[r("td",[r("ColorBadge",{attrs:{color:"external-linkedin"}})],1),e._m(27),e._m(28)]),r("tr",[r("td",[r("ColorBadge",{attrs:{color:"external-pinterest"}})],1),e._m(29),e._m(30)]),r("tr",[r("td",[r("ColorBadge",{attrs:{color:"external-twitter"}})],1),e._m(31),e._m(32)]),r("tr",[r("td",[r("ColorBadge",{attrs:{color:"external-wechat"}})],1),e._m(33),e._m(34)]),r("tr",[r("td",[r("ColorBadge",{attrs:{color:"external-whatsapp"}})],1),e._m(35),e._m(36)]),r("tr",[r("td",[r("ColorBadge",{attrs:{color:"external-xing"}})],1),e._m(37),e._m(38)]),r("tr",[r("td",[r("ColorBadge",{attrs:{color:"external-youtube"}})],1),e._m(39),e._m(40)])])]),r("hr"),r("h2",[e._v("Spacing")]),e._m(41),r("p",[e._v("Possible variable for usage with SCSS (where {v} is the spacing value):")]),e._m(42),r("p",[e._v("Or the reduced set of spacings which should be used as main layout spacings for spacings between elements:")]),e._m(43),r("p",[e._v("Possible variable for usage with SCSS (where {v} is the spacing value):")]),e._m(44),r("hr"),r("h2",[e._v("Font")]),e._m(45),r("h3",[e._v("Family")]),r("p",[e._v("Contains Porsche Next and predefined fallback fonts:")]),e._m(46),r("h3",[e._v("Weight")]),e._m(47),r("p",[e._v("Possible variable for usage with SCSS (where {v} is the font weight value):")]),e._m(48),r("h3",[e._v("Size")]),r("h4",[e._v("Font scaling system")]),r("p",[e._v("Given values are:")]),e._m(49),r("p",[e._v("Possible variable for usage with SCSS (where {v} is the font size value):")]),e._m(50),r("h4",[e._v("Predefined text sizes")]),r("p",[e._v("Given values are:")]),e._m(51),r("p",[e._v("Possible variable for usage with SCSS (where {v} is the font size value):")]),e._m(52),r("hr"),r("h2",[e._v("Animation")]),r("h3",[e._v("Hover")]),e._m(53)])},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th"),r("th"),r("th")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Brand")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th"),r("th"),r("th")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Background")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Surface")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th"),r("th"),r("th")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Default")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th"),r("th"),r("th")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Neutral Contrast High")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Neutral Contrast Medium")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Neutral Contrast Low")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th"),r("th"),r("th")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Error")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Success")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Warning")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th"),r("th"),r("th")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v(":hover")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v(":active")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v(":focus")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v(":disabled")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th"),r("th"),r("th")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Facebook")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("code",[e._v("$p-color-external-facebook")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Google")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("code",[e._v("$p-color-external-google")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Instagram")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("code",[e._v("$p-color-external-instagram")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("LinkedIn")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("code",[e._v("$p-color-external-linkedin")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Pinterest")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("code",[e._v("$p-color-external-pinterest")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("Twitter")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("code",[e._v("$p-color-external-twitter")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("WeChat")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("code",[e._v("$p-color-external-wechat")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("WhatsApp")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("code",[e._v("$p-color-external-whatsapp")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("XING")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("code",[e._v("$p-color-external-xing")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("strong",[e._v("YouTube")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("td",[r("code",[e._v("$p-color-external-youtube")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Given values are:"),r("br"),r("code",[e._v("0 | 4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",[e._v("$p-spacing-{v};\n")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Given values are:"),r("br"),r("code",[e._v("x-small | small | medium | large | x-large | xx-large")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",[e._v("$p-layout-{v};\n")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("For font styling it's recommended to use the "),r("a",{attrs:{href:"#/components/typography#headline"}},[r("code",[e._v("<p-headline>")])]),e._v("/"),r("a",{attrs:{href:"#/components/typography#text"}},[r("code",[e._v("<p-text>")])]),e._v(" component or "),r("a",{attrs:{href:"#/utilities/scss#mixins"}},[e._v("text/headline scss mixins")]),e._v(".")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",[e._v("$p-font-primary\n")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v("Given values are:"),r("br"),r("code",[e._v("thin | regular | bold")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",[e._v("$p-font-weight-{v};\n")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("code",[e._v("12 | 16 | 18 | 20 | 24 | 28 | 30 | 32 | 36 | 42 | 44 | 48 | 52 | 60 | 62 | 72 | 84")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",[e._v("$p-font-size-{v};\n")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("code",[e._v("x-small | small | medium | large | x-large")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",[e._v("$p-text-size-{v};\n")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("pre",[r("code",[e._v("$p-animation-hover-duration\n$p-animation-hover-bezier\n")])])}],a=r("d4ec"),c=r("262e"),s=r("2caf"),l=r("9ab4"),_=r("60a3"),i=function(e){Object(c["a"])(r,e);var t=Object(s["a"])(r);function r(){var e;return Object(a["a"])(this,r),e=t.apply(this,arguments),e.theme="light",e}return r}(_["c"]);i=Object(l["a"])([_["a"]],i);var h=i,d=h,m=r("2877"),v=Object(m["a"])(d,n,o,!1,null,null,null);t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0e139f.82a6904d.js.map