(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{263:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=s(n(0)),r=s(n(68)),i=s(n(5));function s(e){return e&&e.__esModule?e:{default:e}}var l=(0,r.default)({}),c=l.Provider,p=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return o.default.createElement(p,null,function(t){return o.default.createElement(e,a({components:n||t},r))})}};var m=function(e){var t=e.components,n=e.children;return o.default.createElement(c,{value:t},n)};m.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=m},264:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(266);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n(263);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},265:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",function(){return a})},266:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=c(r),s=c(n(267)),l=n(263);function c(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,r=void 0===o?{}:o,l=e.children,c=e.components,m=void 0===c?{}:c,u=e.Layout,f=e.layoutProps,d=m[n+"."+t]||m[t]||p[t]||t;return u?((0,s.default)(this,u),i.default.createElement(u,a({components:m},f),i.default.createElement(d,r,l))):i.default.createElement(d,r,l)}}]),t}();t.default=(0,l.withMDXComponents)(m)},267:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,i=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,p=c&&c(Object);e.exports=function e(t,n,m){if("string"!==typeof n){if(p){var u=c(n);u&&u!==p&&e(t,u,m)}var f=i(n);s&&(f=f.concat(s(n)));for(var d=0;d<f.length;++d){var g=f[d];if(!a[g]&&!o[g]&&(!m||!m[g])){var h=l(n,g);try{r(t,g,h)}catch(y){}}}return t}return t}},297:function(e,t,n){"use strict";n.r(t);var a=n(265),o=n(0),r=n.n(o),i=n(264);t.default=function(e){var t=e.components;Object(a.a)(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:t},r.a.createElement(i.MDXTag,{name:"h1",components:t},"Grid"),r.a.createElement(i.MDXTag,{name:"p",components:t},r.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"this is the image path to static assets for workshop images used in documentation")),r.a.createElement(i.MDXTag,{name:"p",components:t},r.a.createElement(i.MDXTag,{name:"img",components:t,parentName:"p",props:{src:"assets/workshop/layout/grid/assets/test.jpg",alt:"assets/workshop/layout/grid/assets/test.jpg"}})),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Recommendation of use"),r.a.createElement(i.MDXTag,{name:"p",components:t},"The grid is a fixed component in the digital Porsche layout. It provides a visual system consisting of a defined number of columns that allow a homogeneous, balanced content placement with standardised horizontal spacings defined by the grid gutter."),r.a.createElement(i.MDXTag,{name:"p",components:t},"The flexible grid is the central tool to provide a responsive layout by defining a specific number of grid columns for modules or elements for different viewport sizes. Therefore, the grid is a mandatory part of every digital layout process and should always be kept in mind when designing Porsche web experiences."),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Grid layout and behaviour"),r.a.createElement(i.MDXTag,{name:"p",components:t},"The number of grid columns differs for the different viewports. Generally, it is based on 12 columns that is dividable by 2, 3, 4 and 6 and therefore allows a high layout flexibility:"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"\u2264 759 px: 6 columns (valid for UI design only, technically 12 columns)"),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"\u2265 760 px: 12 columns")),r.a.createElement(i.MDXTag,{name:"p",components:t},r.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Grid gutter:")),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"\u2264 759 px: 16 px"),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"760-999 px: 24 px"),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"\u2265 1000 px: 36 px")),r.a.createElement(i.MDXTag,{name:"p",components:t},r.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"p"},"Margin column:")),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"\u2264 1759 px: 7%"),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"\u2265 1760 px: 10%")),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Main Breakpoints & optimized layout sizes"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"The main breakpoints for all Porsche web experiences are: 760 px / 1000 px / 1300 px and 1760 px. They are based on statistical data on browser size usage and binding, especially for general elements like e.g. header or footer."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Depending on the specific component or module, not each and every breakpoint is necessarily to be used. In case more breakpoints are needed for a specific component, you are free to add more. Please make sure that all additional breakpoints must have a minimum difference of 100 px to the existing main breakpoints."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Based on the main breakpoints, all Porsche web layouts are to be optimized for the following viewport sizes: 320, 375, 768, 1024, 1366 and 1920 px width.")),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Layouting"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Content elements should be placed within the grid, always starting in a column."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"It is possible to place elements outside the grid, e.g. browser-width pictures. This should be a well thought out exception.")))}}}]);
//# sourceMappingURL=10.72b80160.chunk.js.map