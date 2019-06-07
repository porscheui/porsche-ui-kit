(window.webpackJsonp=window.webpackJsonp||[]).push([[52,56,57],{308:function(e,t,n){},309:function(e,t,n){"use strict";n.d(t,"a",function(){return x});var a=n(48),r=n(24),o=n(0),m=n.n(o),c=n(1),l=n.n(c),p=n(314),i=n(380),h=n(315),s=n.n(h),u=n(297),d=n(2),g=n(310),f=n.n(g),k=(n(308),n(316)),E=n.n(k);i.a.registerLanguage("xml",s.a);var x=function(e){var t=e.className,n=Object(o.useState)("light"),c=Object(r.a)(n,2),h=c[0],s=c[1],g=Object(o.useState)(!1),k=Object(r.a)(g,2),x=k[0],L=k[1],T=l()(f.a.render,Object(a.a)({},f.a.light,"light"===h),Object(a.a)({},f.a.dark,"dark"===h),"sg-example-global",t),b=function(e){"light"===e?s("light"):"dark"===e&&s("dark")},_=[{menuItem:"Light theme",key:"Tab1",active:"light"===h,onClick:function(){return b("light")}},{menuItem:"Dark theme",key:"Tab2",active:"dark"===h,onClick:function(){return b("dark")}}];return m.a.createElement(m.a.Fragment,null,m.a.createElement(d.h,{marginTop:8},m.a.createElement("div",{className:f.a.container},!0!==e.noTheme&&m.a.createElement(u.a,{panes:_,alignment:"left",mini:!0,divider:!1}),m.a.createElement("div",{className:T},y(e.children,h)),!e.noHTML&&m.a.createElement(m.a.Fragment,null,m.a.createElement(d.c,{className:f.a["toggle-container"],justifyContent:"end"},!e.noHTML&&m.a.createElement("button",{className:l()(f.a.toggle,Object(a.a)({},f.a.open,x)),onClick:function(){"html"==="html"&&L(!x)}},x?"- JavaScript":"+ JavaScript")),x&&m.a.createElement("div",{className:f.a.codeblock},m.a.createElement(i.a,{language:"xml",style:E.a},function(e,t){return function(e){var t="";e=e.replace(/(>)(<)(\/*)/g,"$1\r\n$2$3");var n=0;return e.split("\r\n").forEach(function(e,a){var r=0;e.match(/.+<\/\w[^>]*>$/)?r=0:e.match(/^<\/\w/)?0!==n&&(n-=1):r=e.match(/^<\w[^>]*[^\/]>.*$/)?1:0;for(var o="",m=0;m<n;m++)o+="  ";t+=o+e+"\r\n",n+=r}),t}(Object(p.renderToStaticMarkup)(y(e,t)))}(e.children,h)))))))};function y(e,t){return"function"===typeof e?e(t):e}x.defaultProps={noTheme:!0}},310:function(e,t,n){e.exports={container:"example_container__8KWcy",codeblock:"example_codeblock__25lok",render:"example_render__1Zlxb",light:"example_light__3X9Nl",dark:"example_dark__2VX9v","toggle-container":"example_toggle-container__16PqW",toggle:"example_toggle__1FS9N",open:"example_open__10Jrv"}},342:function(e,t,n){"use strict";n.r(t);var a=n(301),r=n(0),o=n.n(r),m=n(300),c=n(309);t.default=function(e){var t=e.components;Object(a.a)(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",components:t},o.a.createElement(m.MDXTag,{name:"h1",components:t},"Text Link"),o.a.createElement(m.MDXTag,{name:"h2",components:t},"Introduction"),o.a.createElement(m.MDXTag,{name:"p",components:t},"The Text-link component is used to show a linkable icon/textlink combination. It should only be used for linking between pages."),o.a.createElement(m.MDXTag,{name:"h3",components:t},"Basic example"),o.a.createElement(c.a,{noTheme:!1,className:"sg-example-text-link"},function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p-text-link",{href:"https://ui.porsche.com",theme:e},"Lorem ipsum dolor"))}),o.a.createElement(m.MDXTag,{name:"h3",components:t},"Sizes regular"),o.a.createElement(m.MDXTag,{name:"p",components:t},"All sizes of generic Text component are available."),o.a.createElement(c.a,{noTheme:!1,className:"sg-example-text-link"},function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"12",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"16",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"20",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"18",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"24",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"28",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"30",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"32",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"36",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"42",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"44",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"48",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"52",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"60",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"62",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"72",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"84",theme:e},"Lorem ipsum dolor"))}),o.a.createElement(m.MDXTag,{name:"h3",components:t},"Sizes thin"),o.a.createElement(m.MDXTag,{name:"p",components:t},"All sizes of generic Text component are available."),o.a.createElement(c.a,{noTheme:!1,className:"sg-example-text-link"},function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"60-thin",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"62-thin",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"72-thin",theme:e},"Lorem ipsum dolor"),o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"84-thin",theme:e},"Lorem ipsum dolor"))}),o.a.createElement(m.MDXTag,{name:"h3",components:t},"Specific icon"),o.a.createElement(m.MDXTag,{name:"p",components:t},"If another icon needs to be implemented, just replace the default icon with your new icon."),o.a.createElement(c.a,{noTheme:!1,className:"sg-example-text-link"},function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("p-text-link",{href:"https://ui.porsche.com",type:"20",icon:"arrow-left-hair",theme:e},"Lorem ipsum dolor"))}))}}}]);
//# sourceMappingURL=52.35ff15f0.chunk.js.map