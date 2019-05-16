(window.webpackJsonp=window.webpackJsonp||[]).push([[22,25,26],{297:function(e,n,a){},298:function(e,n,a){"use strict";a.d(n,"a",function(){return T});var t=a(47),o=a(23),r=a(0),c=a.n(r),i=a(1),s=a.n(i),m=a(303),l=a(339),p=a(304),g=a.n(p),d=a(290),h=a(2),u=a(299),E=a.n(u),f=(a(297),a(305)),v=a.n(f);l.a.registerLanguage("xml",g.a);var T=function(e){var n=e.className,a=Object(r.useState)("default"),i=Object(o.a)(a,2),p=i[0],g=i[1],u=Object(r.useState)(!1),f=Object(o.a)(u,2),T=f[0],M=f[1],w=Object(r.useState)(!1),X=Object(o.a)(w,2),D=X[0],y=X[1],S=s()(E.a.render,Object(t.a)({},E.a.light,"default"===p),Object(t.a)({},E.a.dark,"inverted"===p),"sg-example-global",n),x=function(e){"html"===e?(M(!T),y(!1)):"scss"===e&&(y(!D),M(!1))},N=function(e){"default"===e?g("default"):"inverted"===e&&g("inverted")},_=[{menuItem:"Light",key:"Tab1",active:"default"===p,onClick:function(){return N("default")}},{menuItem:"Inverted",key:"Tab2",active:"inverted"===p,onClick:function(){return N("inverted")}}];return c.a.createElement(c.a.Fragment,null,c.a.createElement(h.g,{marginTop:8},c.a.createElement("div",{className:E.a.container},!0!==e.noTheme&&c.a.createElement(d.a,{panes:_,alignment:"left",mini:!0,divider:!1}),c.a.createElement("div",{className:S},b(e.children,p)),(!e.noHTML||!e.noSCSS)&&c.a.createElement(c.a.Fragment,null,c.a.createElement(h.c,{className:E.a["toggle-container"],justifyContent:"end"},!e.noHTML&&c.a.createElement("button",{className:s()(E.a.toggle,Object(t.a)({},E.a.open,T)),onClick:function(){return x("html")}},T?"- HTML":"+ HTML"),!e.noSCSS&&c.a.createElement("button",{className:s()(E.a.toggle,Object(t.a)({},E.a.open,D)),onClick:function(){return x("scss")}},D?"- SCSS":"+ SCSS")),T&&c.a.createElement("div",{className:E.a.codeblock},c.a.createElement(l.a,{language:"xml",style:v.a},function(e,n){return function(e){var n="";e=e.replace(/(>)(<)(\/*)/g,"$1\r\n$2$3");var a=0;return e.split("\r\n").forEach(function(e,t){var o=0;e.match(/.+<\/\w[^>]*>$/)?o=0:e.match(/^<\/\w/)?0!==a&&(a-=1):o=e.match(/^<\w[^>]*[^\/]>.*$/)?1:0;for(var r="",c=0;c<a;c++)r+="  ";n+=r+e+"\r\n",a+=o}),n}(Object(m.renderToStaticMarkup)(b(e,n)))}(e.children,p))),D&&c.a.createElement("div",{className:E.a.codeblock},c.a.createElement(l.a,{language:"scss",style:v.a},"# SCSS paths coming soon..."))))))};function b(e,n){return"function"===typeof e?e(n):e}T.defaultProps={noTheme:!0}},299:function(e,n,a){e.exports={container:"example_container__8KWcy",codeblock:"example_codeblock__25lok",render:"example_render__1Zlxb",light:"example_light__3X9Nl",dark:"example_dark__2VX9v","toggle-container":"example_toggle-container__16PqW",toggle:"example_toggle__1FS9N",open:"example_open__10Jrv"}},329:function(e,n,a){"use strict";a.r(n);var t=a(294),o=a(0),r=a.n(o),c=a(293),i=a(298),s=a(2);n.default=function(e){var n=e.components;Object(t.a)(e,["components"]);return r.a.createElement(c.MDXTag,{name:"wrapper",components:n},r.a.createElement(c.MDXTag,{name:"h1",components:n},"Icon"),r.a.createElement(c.MDXTag,{name:"h2",components:n},"Introduction"),r.a.createElement(c.MDXTag,{name:"p",components:n},"Porsche UI Kit is using a SVG icon system to present an icon object visually. If used as a React Component, icons are implemented as inline SVG. If used in other technical environments, it can also be used as a SVG sprite and referenced by a ",r.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<use>"),"-tag (@see documentation below)."),r.a.createElement(c.MDXTag,{name:"h2",components:n},"Icons used as a React component"),r.a.createElement(c.MDXTag,{name:"h3",components:n},"Icon standard"),r.a.createElement(i.a,{noTheme:!0},function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.e,{name:"icon_car-next.min.svg"}))}),r.a.createElement(c.MDXTag,{name:"h3",components:n},"Predefined icon sizes"),r.a.createElement(c.MDXTag,{name:"p",components:n},"The default icon size has a box of 24x24px (1.5rem) which corresponds to the default copytext line-height. If larger sizes are needed, choose from one of the predefined sizes."),r.a.createElement(c.MDXTag,{name:"h4",components:n},"Medium"),r.a.createElement(i.a,{noTheme:!0},function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.e,{name:"icon_car-next.min.svg",size:"small"}))}),r.a.createElement(c.MDXTag,{name:"h4",components:n},"Large"),r.a.createElement(i.a,{noTheme:!0},function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.e,{name:"icon_car-next.min.svg",size:"medium"}))}),r.a.createElement(c.MDXTag,{name:"h4",components:n},"X-large"),r.a.createElement(i.a,{noTheme:!0},function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(s.e,{name:"icon_car-next.min.svg",size:"large"}))}),r.a.createElement(c.MDXTag,{name:"hr",components:n}),r.a.createElement(c.MDXTag,{name:"h2",components:n},"Icons used with a sprite system"),r.a.createElement(c.MDXTag,{name:"p",components:n},"To render icons with an icon sprite it has to be generated and implemented by the projects/products itself regarding to their technical und visual needs."),r.a.createElement(c.MDXTag,{name:"h3",components:n},"Building the icon sprite (from UI Kit Icon Platform)"),r.a.createElement(c.MDXTag,{name:"p",components:n},"TBD!!!"),r.a.createElement(c.MDXTag,{name:"p",components:n},"Building the sprite can be done manually or even better with help of a frontend build system, e.g. ",r.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/jkphl/svg-sprite"}},"https://github.com/jkphl/svg-sprite"),"."),r.a.createElement(c.MDXTag,{name:"p",components:n},r.a.createElement(c.MDXTag,{name:"strong",components:n,parentName:"p"},"Hints for optimizations"),":"),r.a.createElement(c.MDXTag,{name:"ul",components:n},r.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Using just the icons which are needed inside the application is recommended."),r.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Reducing the file size of the icon sprite can be done by optimizing SVG's with a SVG optimizer which strips out unnecessary SVG code."),r.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"Also activating GZIP compression on the server side can reduce file size up to 50%.")),r.a.createElement(c.MDXTag,{name:"p",components:n},"Finally the generated icon sprite should look something like this:"),r.a.createElement(c.MDXTag,{name:"pre",components:n},r.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},'<svg xmlns="http://www.w3.org/2000/svg">\n  <symbol id="icon-arrow-down-hair" viewBox="0 0 32 32">\n    <title>icon_arrow-down-hair</title>\n    <path d="M4 15v-3l12 9.5 12-9.5v3l-12 9.5z"/>\n  </symbol>\n  <symbol id="icon-arrow-down-thin" viewBox="0 0 32 32">\n    <title>icon_arrow-down-thin</title>\n    <path d="M4 15v-4.5l12 9.5 12-9.5v4.5l-12 9.5z"/>\n  </symbol>\n  <symbol id="icon-arrow-down" viewBox="0 0 32 32">\n    <title>icon_arrow-down</title>\n    <path d="M4 15v-8l12 9.5 12-9.5v8l-12 9.5z"/>\n  </symbol>\n  ...\n</svg>\n')),r.a.createElement(c.MDXTag,{name:"p",components:n},"For screen reader accessibility, provide a context-rich title for the SVG using the ",r.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<title>")," element."),r.a.createElement(c.MDXTag,{name:"h3",components:n},"Including the icon sprite"),r.a.createElement(c.MDXTag,{name:"p",components:n},"For modern browsers (including Chrome, Firefox, Safari, Edge13), setting a direct link to the SVG file is the best choice (shown in the example beyond).\nIf older browsers like IE11 or Edge < 12 need to be supported, an additional polyfill must be included to implement the SVG sprite with AJAX.\nThe best choice therefore is ",r.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"svg4everybody")," (",r.a.createElement(c.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://github.com/jonathantneal/svg4everybody"}},"https://github.com/jonathantneal/svg4everybody"),") which is a well tested and widely adopted SVG polyfill."),r.a.createElement(c.MDXTag,{name:"h3",components:n},"Referencing SVG icon from a static sprite asset (recommended)"),r.a.createElement(c.MDXTag,{name:"p",components:n},"The SVG sprite is used by serving the icons bundled all together as a static asset. An icon can be referenced by setting a path to the SVG sprite file and adding a hash in combination with the icon ID identifier."),r.a.createElement(c.MDXTag,{name:"pre",components:n},r.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},'<svg class="p-icon" role="img" title="arrow down">\n  <use xlink:href="/path-to-icon-sprite/svg-sprite.svg#icon-arrow-down"/>\n</svg>\n')),r.a.createElement(c.MDXTag,{name:"h3",components:n},"Icon inside an icon wrapper"),r.a.createElement(c.MDXTag,{name:"p",components:n},"Sometimes there may be technical reasons (e.g. js components) which cause in adding an additional wrapper element around the icon. In this case, moving the icon classes to the wrapper element is possible:"),r.a.createElement(c.MDXTag,{name:"pre",components:n},r.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},'<div class="p-icon">\n  <svg role="img" title="arrow down">\n    <use xlink:href="/path-to-icon-sprite/svg-sprite.svg#icon-arrow-down"/>\n  </svg>\n</div>\n')),r.a.createElement(c.MDXTag,{name:"h3",components:n},"Icon sizes"),r.a.createElement(c.MDXTag,{name:"p",components:n},"There are pre-defined icon sizes which can be set by adding one of the following classes:"),r.a.createElement(c.MDXTag,{name:"pre",components:n},r.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},'<svg class="p-icon p-icon--medium" role="img" title="arrow down">\n  <use xlink:href="/path-to-icon-sprite/svg-sprite.svg#icon-arrow-down"/>\n</svg>\n')),r.a.createElement(c.MDXTag,{name:"p",components:n},"Available sizes:\n",r.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"p-icon--x-small")," => 16px\n",r.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"p-icon--small")," => 24px\n",r.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"p-icon--medium")," => 32px\n",r.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"p-icon--large")," => 40px\n",r.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"p-icon--x-large")," => 80px"),r.a.createElement(c.MDXTag,{name:"h3",components:n},"Colors"),r.a.createElement(c.MDXTag,{name:"p",components:n},"All icons are rendered in black by default. Changing the icon to a different color can be done by adding individual color definitions inside the CSS code:"),r.a.createElement(c.MDXTag,{name:"pre",components:n},r.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},'.some-color-class {\n  color: $p-color-palette-white;\n}\n\n<svg class="p-icon some-color-class" role="img" title="arrow down">\n  <use xlink:href="/path-to-icon-sprite/svg-sprite.svg#icon-arrow-down"/>\n</svg>\n')),r.a.createElement(c.MDXTag,{name:"h3",components:n},"Accessibility"),r.a.createElement(c.MDXTag,{name:"p",components:n},"With using SVG icons, there are options to give more accessibility to users using screen readers. Here are some good practices:"),r.a.createElement(c.MDXTag,{name:"ul",components:n},r.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"If icons stand alone, adding descriptive text with an ",r.a.createElement(c.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"aria-label")," attribute is a good practice:")),r.a.createElement(c.MDXTag,{name:"pre",components:n},r.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},'<svg class="p-icon" role="img" focusable="false" aria-label="descriptive text, e.g: close the layer">\n  <use xlink:href="/path-to-icon-sprite/svg-sprite.svg#icon-close"/>\n</svg>\n')),r.a.createElement(c.MDXTag,{name:"ul",components:n},r.a.createElement(c.MDXTag,{name:"li",components:n,parentName:"ul"},"If an icon is just for visual presentation and has no meaning of its own, it can be hidden from screen readers.\nPossible use case: if an arrow icon is palced beside a descriptive button text:")),r.a.createElement(c.MDXTag,{name:"pre",components:n},r.a.createElement(c.MDXTag,{name:"code",components:n,parentName:"pre",props:{metaString:null}},'<button type="button">\n  <svg class="p-icon" role="img" focusable="false" aria-hidden="true">\n    <use xlink:href="/path-to-icon-sprite/svg-sprite.svg#icon-arrow-right"/>\n  </svg>\n  go to detail page\n<button>\n')))}}}]);
//# sourceMappingURL=22.cd7d54c1.chunk.js.map