(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{296:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.withMDXComponents=void 0;var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=m(t(0)),r=m(t(78)),s=m(t(4));function m(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)({}),p=l.Provider,c=l.Consumer;n.withMDXComponents=function(e){return function(n){var t=n.components,r=function(e,n){var t={};for(var a in e)n.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}(n,["components"]);return o.default.createElement(c,null,function(n){return o.default.createElement(e,a({components:t||n},r))})}};var i=function(e){var n=e.components,t=e.children;return o.default.createElement(p,{value:n},t)};i.propTypes={components:s.default.object.isRequired,children:s.default.element.isRequired},n.default=i},297:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(299);Object.defineProperty(n,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=t(296);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},298:function(e,n,t){"use strict";function a(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(n,"a",function(){return a})},299:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o=function(){function e(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(n,t,a){return t&&e(n.prototype,t),a&&e(n,a),n}}(),r=t(0),s=p(r),m=p(t(300)),l=t(296);function p(e){return e&&e.__esModule?e:{default:e}}var c={inlineCode:"code",wrapper:"div"},i=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!==typeof n&&"function"!==typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.Component),o(n,[{key:"render",value:function(){var e=this.props,n=e.name,t=e.parentName,o=e.props,r=void 0===o?{}:o,l=e.children,p=e.components,i=void 0===p?{}:p,g=e.Layout,u=e.layoutProps,d=i[t+"."+n]||i[n]||c[n]||n;return g?((0,m.default)(this,g),s.default.createElement(g,a({components:i},u),s.default.createElement(d,r,l))):s.default.createElement(d,r,l)}}]),n}();n.default=(0,l.withMDXComponents)(i)},300:function(e,n,t){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,s=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,c=p&&p(Object);e.exports=function e(n,t,i){if("string"!==typeof t){if(c){var g=p(t);g&&g!==c&&e(n,g,i)}var u=s(t);m&&(u=u.concat(m(t)));for(var d=0;d<u.length;++d){var h=u[d];if(!a[h]&&!o[h]&&(!i||!i[h])){var f=l(t,h);try{r(n,h,f)}catch(T){}}}return n}return n}},333:function(e,n,t){"use strict";t.r(n);var a=t(298),o=t(0),r=t.n(o),s=t(297);n.default=function(e){var n=e.components;Object(a.a)(e,["components"]);return r.a.createElement(s.MDXTag,{name:"wrapper",components:n},r.a.createElement(s.MDXTag,{name:"h1",components:n},"Grid"),r.a.createElement(s.MDXTag,{name:"p",components:n},"The grid provides a visual system to create responsive layout with a\nhomogeneous, balanced content placement across all Porsche web experiences and\nscreen sizes. "),r.a.createElement(s.MDXTag,{name:"h2",components:n},"Grid architecture"),r.a.createElement(s.MDXTag,{name:"ul",components:n},r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"The Porsche UI grid uses ",r.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"12 columns"),", offering a high layout flexibility by\nbeing dividable by 2, 3, 4 or 6. To enable a flexible adaption of content to any\nscreen size, its width is based on percentages (resulting from total screen\nwidth minus gutter and margin width). For layouting on mobile (screen widths < 759 px), it is recommended to use\na 6-column-grid to avoid too much small-scaling or even \u201ecluttering\u201c."),r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"The grid gutter")," separates the columns horizontally by in-between-spacings.\nThe gutter is defined with fixed pixel sizes and breakpoints to balance size\nratios between elements on the respective screen size. "),r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},r.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"li"},"The grid margins")," define the outer spacings between the content area and the left and right screen\nsides. Grid margins are defined using percentages, going from 7% to 10% for\nscreen widths larger than 1760 px. ")),r.a.createElement(s.MDXTag,{name:"p",components:n},r.a.createElement(s.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"assets/workshop/layout/grid/assets/grid-components.png",alt:"Porsche UI grid architecture"}})),r.a.createElement(s.MDXTag,{name:"h3",components:n},"Overview"),r.a.createElement(s.MDXTag,{name:"table",components:n},r.a.createElement(s.MDXTag,{name:"thead",components:n,parentName:"table"},r.a.createElement(s.MDXTag,{name:"tr",components:n,parentName:"thead"},r.a.createElement(s.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}}),r.a.createElement(s.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Viewport range"),r.a.createElement(s.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Columns"),r.a.createElement(s.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Gutter"),r.a.createElement(s.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Margin"))),r.a.createElement(s.MDXTag,{name:"tbody",components:n,parentName:"table"},r.a.createElement(s.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"td"},"Mobile")),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"320-759 px"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"12 columns (Design only: 6 columns)"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"16 px"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"7%")),r.a.createElement(s.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"td"},"Tablet")),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"760-1023 px"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"12 columns"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"24 px"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"7%")),r.a.createElement(s.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"1024-1299 px"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"12 columns"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"36 px"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"7%")),r.a.createElement(s.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},r.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"td"},"Desktop")),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"1300-1759 px"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"12 columns"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"36 px"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"7%")),r.a.createElement(s.MDXTag,{name:"tr",components:n,parentName:"tbody"},r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"1760 px or larger"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"12 columns"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"36 px"),r.a.createElement(s.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"10%")))),r.a.createElement(s.MDXTag,{name:"p",components:n},r.a.createElement(s.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"assets/workshop/layout/grid/assets/grid-viewports.png",alt:"Porsche UI grid architecture"}})),r.a.createElement(s.MDXTag,{name:"h2",components:n},"Grid Breakpoints"),r.a.createElement(s.MDXTag,{name:"p",components:n},"Breakpoints are the defined steps at which the content is\nadapted to fit the different screen sizes. For Porsche the following main\nbreakpoints are used, representing the latest screen size analytics data: "),r.a.createElement(s.MDXTag,{name:"ul",components:n},r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"760 px "),r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"1000 px "),r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"1300 px "),r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"1760 px")),r.a.createElement(s.MDXTag,{name:"h3",components:n},"Breakpoint usage"),r.a.createElement(s.MDXTag,{name:"p",components:n},"It is highly recommended to stick to the defined breakpoints especially for\ngeneral elements like e.g. header or footer."),r.a.createElement(s.MDXTag,{name:"p",components:n},"As for other components or modules, not each and every breakpoint is necessarily\nto be used. And also vice-versa: In case more breakpoints are needed for a\nspecific component, you are free to add more. If you do so, please make sure\nthat all additional breakpoints must have a minimum difference of 100 px to the\nexisting main breakpoints (in order to avoid \u201ebreakpoint overload\u201c)."),r.a.createElement(s.MDXTag,{name:"p",components:n},"Optimizing for defined viewport sizes due to statistical usage of specific\ndevices, all Porsche web layouts should be optimized for the following viewport\nsizes: "),r.a.createElement(s.MDXTag,{name:"ul",components:n},r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"320 / 375 px "),r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"768 px "),r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"1024 px "),r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"1366 px "),r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"1920 px")),r.a.createElement(s.MDXTag,{name:"p",components:n},"The main breakpoints (see above) are deliberately chosen with some distance to\nthe optimized device sizes due to a higher fault tolerance."),r.a.createElement(s.MDXTag,{name:"h3",components:n},"Layout template"),r.a.createElement(s.MDXTag,{name:"p",components:n},"To make layouting from scratch as easy as possible, the\noptimized viewport sizes are provided as ",r.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"http://ui.porsche.com/latest/porsche-ui-kit-layout-template.sketch"}},"Sketch artboard templates"),". They\ncome with final layout settings (including the responsive grid) that can be turned visible via: View \u2192 Canvas \u2192\nShow Layout."),r.a.createElement(s.MDXTag,{name:"h3",components:n},"Viewport range"),r.a.createElement(s.MDXTag,{name:"p",components:n},"In order to provide consistency throughout all Porsche web\nexperiences, all layouts should be optimized for a viewport range from ",r.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"320 px")," to a maximum of ",r.a.createElement(s.MDXTag,{name:"strong",components:n,parentName:"p"},"1920 px"),". For viewport sizes from 1920 px onwards, a\ngrowing white space outside the left and right edge should be used."),r.a.createElement(s.MDXTag,{name:"p",components:n},r.a.createElement(s.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"assets/workshop/layout/grid/assets/grid-maxwidth.png",alt:"Porsche UI grid architecture"}})),r.a.createElement(s.MDXTag,{name:"h2",components:n},"Tips for responsive layouting"),r.a.createElement(s.MDXTag,{name:"h3",components:n},"Use the grid purposefully."),r.a.createElement(s.MDXTag,{name:"p",components:n},"All content elements that should behave\nresponsively should be placed horizontally within the grid, always starting in a\ncolumn. The spacing between content elements is therefore defined by the grid\ngutter. In most cases, this should refer to modules or content boxes, whereas\nsmaller spaces on a more or less \u201emicro-level\u201c (both vertical and horizontal)\nshould be defined by using the ",r.a.createElement(s.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"#/layout/spacing"}},"Spacing")," component."),r.a.createElement(s.MDXTag,{name:"p",components:n},r.a.createElement(s.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"assets/workshop/layout/grid/assets/grid-alignment.png",alt:"Porsche UI grid alignment"}})),r.a.createElement(s.MDXTag,{name:"h3",components:n},"Know the possibilities. But use them wisely."),r.a.createElement(s.MDXTag,{name:"p",components:n},"When it comes to designing a\ncomponent or module responsively, there are several screws that can be turned to\nadapt to different screen sizes, such as changing\u2026"),r.a.createElement(s.MDXTag,{name:"ul",components:n},r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"\u2026 the component\u2019s grid column width and, therefore, it\u2019s wrapping behaviour.\nExample: A 3-column-text on desktop, each column using 4 grid columns, can be\nstacked on mobile, using 12 grid columns. "),r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"\u2026 text sizes \u2013 commonly using smaller text on mobile, larger text on bigger screens. "),r.a.createElement(s.MDXTag,{name:"li",components:n,parentName:"ul"},"\u2026 the general layout of the component by using different patterns on mobile and desktop.\nExample: Turning a multi-column teaser module on desktop into an accordion on mobile.")),r.a.createElement(s.MDXTag,{name:"p",components:n},"In designing for responsive layout, always aim to find the solution that works\nbest for the specific case, keeping the user and the specific context of use in\nmind."),r.a.createElement(s.MDXTag,{name:"p",components:n},r.a.createElement(s.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"assets/workshop/layout/grid/assets/grid-behaviour.png",alt:"Porsche UI grid behaviour"}})),r.a.createElement(s.MDXTag,{name:"h3",components:n},"Don\u2019t be afraid to think out of the box."),r.a.createElement(s.MDXTag,{name:"p",components:n},"It is possible to place elements\nend-to-end, spanning from left to the right edge of the screen. For example a\nfull-width-image that generates a more emotional and concise side entry. Though\nthis should be a well-thought exception."),r.a.createElement(s.MDXTag,{name:"p",components:n},"Also, for image groups it is possible to break out of the grid in order to\ncreate a stronger visual coherence. The outer edges (left and right) of the\nimages group should always be placed within the grid, whereas the edges\ninbetween the single images can be placed exactly in the middle of the gutter."),r.a.createElement(s.MDXTag,{name:"p",components:n},r.a.createElement(s.MDXTag,{name:"img",components:n,parentName:"p",props:{src:"assets/workshop/layout/grid/assets/grid-endtoend.png",alt:"End-to-end placement"}})))}}}]);
//# sourceMappingURL=10.4f1a7a79.chunk.js.map