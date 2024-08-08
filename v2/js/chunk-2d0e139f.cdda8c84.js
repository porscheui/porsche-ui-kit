(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e139f"],{"7a10":function(t,e,r){"use strict";r.r(e);var o=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"vmark"},[e("h1",[t._v("Scss")]),e("TableOfContents"),e("h2",[t._v("Color")]),e("p",[t._v("A light and dark theme is available depending on which background it's used.")]),e("br"),e("select",{directives:[{name:"model",rawName:"v-model",value:t.theme,expression:"theme"}],attrs:{id:"theme-selector","data-selected":t.theme,"aria-label":"Select theme"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.theme=e.target.multiple?r:r[0]}}},[e("option",{attrs:{disabled:""}},[t._v("Select theme")]),e("option",{attrs:{value:"light"}},[t._v("Theme light")]),e("option",{attrs:{value:"dark"}},[t._v("Theme dark")])]),e("h3",[t._v("Theme "+t._s(t.theme))]),e("h4",[t._v("Brand colors")]),e("table",[t._m(0),e("tbody",[e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"brand"}})],1),t._m(1),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"brand")])])])])]),e("h4",[t._v("Background colors")]),e("table",[t._m(2),e("tbody",[e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"background-default"}})],1),t._m(3),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"background-default")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"background-surface"}})],1),t._m(4),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"background-surface")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"background-shading"}})],1),t._m(5),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"background-shading")])])])])]),e("h4",[t._v("Background notification colors")]),e("table",[t._m(6),e("tbody",[e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"notification-error-soft"}})],1),t._m(7),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"notification-error-soft")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"notification-success-soft"}})],1),t._m(8),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"notification-success-soft")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"notification-warning-soft"}})],1),t._m(9),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"notification-warning-soft")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"notification-neutral-soft"}})],1),t._m(10),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"notification-neutral-soft")])])])])]),e("h4",[t._v("Base color")]),e("table",[t._m(11),e("tbody",[e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"default"}})],1),t._m(12),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"default")])])])])]),e("h4",[t._v("Neutral colors")]),e("table",[t._m(13),e("tbody",[e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"neutral-contrast-high"}})],1),t._m(14),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"neutral-contrast-high")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"neutral-contrast-medium"}})],1),t._m(15),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"neutral-contrast-medium")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"neutral-contrast-low"}})],1),t._m(16),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"neutral-contrast-low")])])])])]),e("h4",[t._v("Notification colors")]),e("table",[t._m(17),e("tbody",[e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"notification-error"}})],1),t._m(18),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"notification-error")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"notification-success"}})],1),t._m(19),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"notification-success")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"notification-warning"}})],1),t._m(20),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"notification-warning")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"notification-neutral"}})],1),t._m(21),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"notification-neutral")])])])])]),e("h4",[t._v("State colors")]),e("table",[t._m(22),e("tbody",[e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"state-hover"}})],1),t._m(23),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"state-hover")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"state-active"}})],1),t._m(24),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"state-active")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"state-focus"}})],1),t._m(25),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"state-focus")])])]),e("tr",[e("td",[e("ColorBadge",{attrs:{theme:t.theme,color:"state-disabled"}})],1),t._m(26),e("td",[e("code",[t._v("$p-color"+t._s("dark"===t.theme?"-theme-dark-":"-")+"state-disabled")])])])])]),e("hr"),e("h3",[t._v("External brand colors")]),e("table",[t._m(27),e("tbody",[e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-facebook"}})],1),t._m(28),t._m(29)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-google"}})],1),t._m(30),t._m(31)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-instagram"}})],1),t._m(32),t._m(33)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-kakaotalk"}})],1),t._m(34),t._m(35)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-linkedin"}})],1),t._m(36),t._m(37)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-naver"}})],1),t._m(38),t._m(39)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-pinterest"}})],1),t._m(40),t._m(41)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-reddit"}})],1),t._m(42),t._m(43)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-tiktok"}})],1),t._m(44),t._m(45)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-twitter"}})],1),t._m(46),t._m(47)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-wechat"}})],1),t._m(48),t._m(49)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-whatsapp"}})],1),t._m(50),t._m(51)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-xing"}})],1),t._m(52),t._m(53)]),e("tr",[e("td",[e("ColorBadge",{attrs:{color:"external-youtube"}})],1),t._m(54),t._m(55)])])]),e("hr"),e("h2",[t._v("Spacing")]),t._m(56),e("p",[t._v("Possible variable for usage with SCSS (where {v} is the spacing value):")]),t._m(57),e("p",[t._v("Or the reduced set of spacings which should be used as main layout spacings for spacings between elements:")]),t._m(58),e("p",[t._v("Possible variable for usage with SCSS (where {v} is the spacing value):")]),t._m(59),e("hr"),e("h2",[t._v("Font")]),t._m(60),e("h3",[t._v("Family")]),e("p",[t._v("Contains Porsche Next and predefined fallback fonts:")]),t._m(61),e("h3",[t._v("Weight")]),t._m(62),e("p",[t._v("Possible variable for usage with SCSS (where {v} is the font weight value):")]),t._m(63),e("h3",[t._v("Size")]),e("h4",[t._v("Font scaling system")]),e("p",[t._v("Given values are:")]),t._m(64),e("p",[t._v("Possible variable for usage with SCSS (where {v} is the font size value):")]),t._m(65),e("h4",[t._v("Predefined font sizes")]),e("p",[t._v("Given values are:")]),t._m(66),e("p",[t._v("Possible variable for usage with SCSS (where {v} is the font size value):")]),t._m(67)],1)},s=[function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",[e("th"),e("th"),e("th")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Brand")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",[e("th"),e("th"),e("th")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Default")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Surface")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Shading")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",[e("th"),e("th"),e("th")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Error Soft")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Success Soft")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Warning Soft")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Neutral Soft")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",[e("th"),e("th"),e("th")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Default")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",[e("th"),e("th"),e("th")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Neutral Contrast High")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Neutral Contrast Medium")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Neutral Contrast Low")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",[e("th"),e("th"),e("th")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Error")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Success")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Warning")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Neutral")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",[e("th"),e("th"),e("th")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v(":hover")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v(":active")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v(":focus")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v(":disabled")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("thead",[e("tr",[e("th"),e("th"),e("th")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Facebook")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-facebook")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Google")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-google")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Instagram")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-instagram")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("KakaoTalk")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-kakaotalk")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("LinkedIn")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-linkedin")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Naver")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-naver")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Pinterest")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-pinterest")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Reddit")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-reddit")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("TikTok")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-tiktok")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("Twitter")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-twitter")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("WeChat")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-wechat")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("WhatsApp")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-whatsapp")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("XING")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-xing")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("strong",[t._v("YouTube")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("td",[e("code",[t._v("$p-color-external-youtube")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("Given values are:"),e("br"),e("code",[t._v("4 | 8 | 16 | 24 | 32 | 40 | 48 | 56 | 64 | 72 | 80")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("pre",[e("code",{staticClass:"language-scss"},[t._v("$p-spacing-{v};\n")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("Given values are:"),e("br"),e("code",[t._v("x-small | small | medium | large | x-large | xx-large")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("pre",[e("code",{staticClass:"language-scss"},[t._v("$p-layout-{v};\n")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("For font styling it's recommended to use the "),e("a",{attrs:{href:"components/typography/headline"}},[e("code",[t._v("<p-headline>")])]),t._v("/"),e("a",{attrs:{href:"components/typography/text"}},[e("code",[t._v("<p-text>")])]),t._v(" component or "),e("a",{attrs:{href:"utilities/scss/mixins"}},[t._v("text/headline scss mixins")]),t._v(".")])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("pre",[e("code",{staticClass:"language-scss"},[t._v("$p-font-family\n")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[t._v("Given values are:"),e("br"),e("code",[t._v("thin | regular | semibold | bold")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("pre",[e("code",{staticClass:"language-scss"},[t._v("$p-font-weight-{v};\n")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[e("code",[t._v("12 | 16 | 18 | 20 | 24 | 28 | 30 | 32 | 36 | 42 | 44 | 48 | 52 | 60 | 62 | 72 | 84")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("pre",[e("code",{staticClass:"language-scss"},[t._v("$p-font-size-{v};\n")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("p",[e("code",[t._v("x-small | small | medium | large | x-large")])])},function(){var t=this,e=t._self._c;t._self._setupProxy;return e("pre",[e("code",{staticClass:"language-scss"},[t._v("$p-font-size-{v};\n")])])}],_=r("ade3"),a=r("9ab4"),n=r("2b0e"),l=r("2fe1");let c=class extends n["a"]{constructor(...t){super(...t),Object(_["a"])(this,"theme","light")}};c=Object(a["a"])([l["b"]],c);var i=c,d=i,u=r("2877"),f=Object(u["a"])(d,o,s,!1,null,null,null);e["default"]=f.exports}}]);
//# sourceMappingURL=chunk-2d0e139f.cdda8c84.js.map