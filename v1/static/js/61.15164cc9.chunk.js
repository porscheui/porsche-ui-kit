(window.webpackJsonp=window.webpackJsonp||[]).push([[61,66],{311:function(e,a,n){},312:function(e,a,n){"use strict";n.d(a,"a",function(){return f});var t=n(48),r=n(24),c=n(0),l=n.n(c),m=n(1),o=n.n(m),i=n(317),s=n(396),u=n(318),p=n(300),g=n(2),h=n(313),d=n.n(h),E=(n(311),n(319));s.a.registerLanguage("xml",u.a);var f=function(e){var a=e.className,n=Object(c.useState)("light"),m=Object(r.a)(n,2),u=m[0],h=m[1],f=Object(c.useState)(!1),k=Object(r.a)(f,2),v=k[0],T=k[1],b=o()(d.a.render,Object(t.a)({},d.a.light,"light"===u),Object(t.a)({},d.a.dark,"dark"===u),"sg-example-global",a),x=function(e){"light"===e?h("light"):"dark"===e&&h("dark")},M=[{menuItem:"Light theme",key:"Tab1",active:"light"===u,onClick:function(){return x("light")}},{menuItem:"Dark theme",key:"Tab2",active:"dark"===u,onClick:function(){return x("dark")}}];return l.a.createElement(l.a.Fragment,null,l.a.createElement(g.h,{marginTop:8},l.a.createElement("div",{className:d.a.container},!0!==e.noTheme&&l.a.createElement(p.a,{panes:M,alignment:"left",mini:!0,divider:!1}),l.a.createElement("div",{className:b},_(e.children,u)),!e.noHTML&&l.a.createElement(l.a.Fragment,null,l.a.createElement(g.c,{className:d.a["toggle-container"],justifyContent:"end"},!e.noHTML&&l.a.createElement("button",{className:o()(d.a.toggle,Object(t.a)({},d.a.open,v)),onClick:function(){"html"==="html"&&T(!v)}},v?"- JavaScript":"+ JavaScript")),v&&l.a.createElement("div",{className:d.a.codeblock},l.a.createElement(s.a,{language:"xml",style:E.a},function(e,a){return function(e){var a="";e=e.replace(/(>)(<)(\/*)/g,"$1\r\n$2$3");var n=0;return e.split("\r\n").forEach(function(e,t){var r=0;e.match(/.+<\/\w[^>]*>$/)?r=0:e.match(/^<\/\w/)?0!==n&&(n-=1):r=e.match(/^<\w[^>]*[^\/]>.*$/)?1:0;for(var c="",l=0;l<n;l++)c+="  ";a+=c+e+"\r\n",n+=r}),a}(Object(i.renderToStaticMarkup)(_(e,a)))}(e.children,u)))))))};function _(e,a){return"function"===typeof e?e(a):e}f.defaultProps={noTheme:!0}},313:function(e,a,n){e.exports={container:"example_container__8KWcy",codeblock:"example_codeblock__25lok",render:"example_render__1Zlxb",light:"example_light__3X9Nl",dark:"example_dark__2VX9v","toggle-container":"example_toggle-container__16PqW",toggle:"example_toggle__1FS9N",open:"example_open__10Jrv"}},374:function(e,a,n){"use strict";n.r(a);var t=n(304),r=n(0),c=n.n(r),l=n(303),m=n(312);a.default=function(e){var a=e.components;Object(t.a)(e,["components"]);return c.a.createElement(l.MDXTag,{name:"wrapper",components:a},c.a.createElement(l.MDXTag,{name:"h1",components:a},"Spinner"),c.a.createElement(l.MDXTag,{name:"h2",components:a},"Introduction"),c.a.createElement(l.MDXTag,{name:"p",components:a},"Basic animated spinner to visualize loading states, e.g. page loading, form validation, etc. The Spinner component sizes are predefined."),c.a.createElement(l.MDXTag,{name:"h3",components:a},"X-small"),c.a.createElement(m.a,{noTheme:!1},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p-spinner",{size:"x-small",theme:e}))}),c.a.createElement(l.MDXTag,{name:"h3",components:a},"Small"),c.a.createElement(m.a,{noTheme:!1},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p-spinner",{size:"small",theme:e}))}),c.a.createElement(l.MDXTag,{name:"h3",components:a},"Medium"),c.a.createElement(m.a,{noTheme:!1},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p-spinner",{size:"medium",theme:e}))}),c.a.createElement(l.MDXTag,{name:"h3",components:a},"Large"),c.a.createElement(m.a,{noTheme:!1},function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("p-spinner",{size:"large",theme:e}))}))}}}]);
//# sourceMappingURL=61.15164cc9.chunk.js.map