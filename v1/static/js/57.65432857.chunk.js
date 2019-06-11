(window.webpackJsonp=window.webpackJsonp||[]).push([[57,60,61],{310:function(e,a,t){},311:function(e,a,t){"use strict";t.d(a,"a",function(){return x});var n=t(48),m=t(24),l=t(0),r=t.n(l),o=t(1),c=t.n(o),s=t(316),i=t(387),u=t(317),p=t.n(u),g=t(299),d=t(2),E=t(312),b=t.n(E),h=(t(310),t(318)),v=t.n(h);i.a.registerLanguage("xml",p.a);var x=function(e){var a=e.className,t=Object(l.useState)("light"),o=Object(m.a)(t,2),u=o[0],p=o[1],E=Object(l.useState)(!1),h=Object(m.a)(E,2),x=h[0],f=h[1],_=c()(b.a.render,Object(n.a)({},b.a.light,"light"===u),Object(n.a)({},b.a.dark,"dark"===u),"sg-example-global",a),k=function(e){"light"===e?p("light"):"dark"===e&&p("dark")},S=[{menuItem:"Light theme",key:"Tab1",active:"light"===u,onClick:function(){return k("light")}},{menuItem:"Dark theme",key:"Tab2",active:"dark"===u,onClick:function(){return k("dark")}}];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.h,{marginTop:8},r.a.createElement("div",{className:b.a.container},!0!==e.noTheme&&r.a.createElement(g.a,{panes:S,alignment:"left",mini:!0,divider:!1}),r.a.createElement("div",{className:_},T(e.children,u)),!e.noHTML&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d.c,{className:b.a["toggle-container"],justifyContent:"end"},!e.noHTML&&r.a.createElement("button",{className:c()(b.a.toggle,Object(n.a)({},b.a.open,x)),onClick:function(){"html"==="html"&&f(!x)}},x?"- JavaScript":"+ JavaScript")),x&&r.a.createElement("div",{className:b.a.codeblock},r.a.createElement(i.a,{language:"xml",style:v.a},function(e,a){return function(e){var a="";e=e.replace(/(>)(<)(\/*)/g,"$1\r\n$2$3");var t=0;return e.split("\r\n").forEach(function(e,n){var m=0;e.match(/.+<\/\w[^>]*>$/)?m=0:e.match(/^<\/\w/)?0!==t&&(t-=1):m=e.match(/^<\w[^>]*[^\/]>.*$/)?1:0;for(var l="",r=0;r<t;r++)l+="  ";a+=l+e+"\r\n",t+=m}),a}(Object(s.renderToStaticMarkup)(T(e,a)))}(e.children,u)))))))};function T(e,a){return"function"===typeof e?e(a):e}x.defaultProps={noTheme:!0}},312:function(e,a,t){e.exports={container:"example_container__8KWcy",codeblock:"example_codeblock__25lok",render:"example_render__1Zlxb",light:"example_light__3X9Nl",dark:"example_dark__2VX9v","toggle-container":"example_toggle-container__16PqW",toggle:"example_toggle__1FS9N",open:"example_open__10Jrv"}},356:function(e,a,t){"use strict";t.r(a);var n=t(303),m=t(0),l=t.n(m),r=t(302),o=t(311);a.default=function(e){var a=e.components;Object(n.a)(e,["components"]);return l.a.createElement(r.MDXTag,{name:"wrapper",components:a},l.a.createElement(r.MDXTag,{name:"h1",components:a},"Textarea"),l.a.createElement(r.MDXTag,{name:"h2",components:a},"Introduction"),l.a.createElement(r.MDXTag,{name:"h3",components:a},"Without value"),l.a.createElement(o.a,{noTheme:!0,className:"sg-example"},l.a.createElement(l.a.Fragment,null,l.a.createElement("p-textarea",{name:"some-name",label:"Some label"}))),l.a.createElement(r.MDXTag,{name:"h3",components:a},"With value"),l.a.createElement(o.a,{noTheme:!0,className:"sg-example"},l.a.createElement(l.a.Fragment,null,l.a.createElement("p-textarea",{name:"some-name",value:"Some value",label:"Some label"}))),l.a.createElement(r.MDXTag,{name:"hr",components:a}),l.a.createElement(r.MDXTag,{name:"h3",components:a},"States"),l.a.createElement(r.MDXTag,{name:"h4",components:a},"Disabled"),l.a.createElement(o.a,{noTheme:!0,className:"sg-example"},l.a.createElement(l.a.Fragment,null,l.a.createElement("p-textarea",{name:"some-name",label:"Some label",disabled:"true"}),l.a.createElement("p-textarea",{name:"some-name",value:"Some value",label:"Some label",disabled:"true"}))),l.a.createElement(r.MDXTag,{name:"h4",components:a},"Error"),l.a.createElement(o.a,{noTheme:!0,className:"sg-example"},l.a.createElement(l.a.Fragment,null,l.a.createElement("p-textarea",{name:"some-name",label:"Some label",error:"true"}),l.a.createElement("p-textarea",{name:"some-name",value:"Some value",label:"Some label",error:"true"}))),l.a.createElement(r.MDXTag,{name:"h4",components:a},"Disabled + Error"),l.a.createElement(o.a,{noTheme:!0,className:"sg-example"},l.a.createElement(l.a.Fragment,null,l.a.createElement("p-textarea",{name:"some-name",label:"Some label",disabled:"true",error:"true"}),l.a.createElement("p-textarea",{name:"some-name",value:"Some value",label:"Some label",disabled:"true",error:"true"}))),l.a.createElement(r.MDXTag,{name:"hr",components:a}),l.a.createElement(r.MDXTag,{name:"h3",components:a},"Edge Cases"),l.a.createElement(r.MDXTag,{name:"p",components:a},"Visualization of edge cases"),l.a.createElement(r.MDXTag,{name:"h4",components:a},"Long text"),l.a.createElement(o.a,{noTheme:!0,className:"sg-example"},l.a.createElement(l.a.Fragment,null,l.a.createElement("p-textarea",{name:"some-name",value:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",label:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}))))}}}]);
//# sourceMappingURL=57.65432857.chunk.js.map