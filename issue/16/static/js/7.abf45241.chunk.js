(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{296:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=p(n(0)),o=p(n(78)),l=p(n(4));function p(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.default)({}),m=c.Provider,u=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return a.default.createElement(u,null,function(t){return a.default.createElement(e,r({components:n||t},o))})}};var s=function(e){var t=e.components,n=e.children;return a.default.createElement(m,{value:t},n)};s.propTypes={components:l.default.object.isRequired,children:l.default.element.isRequired},t.default=s},297:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(299);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=n(296);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},298:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}n.d(t,"a",function(){return r})},299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),l=m(o),p=m(n(300)),c=n(296);function m(e){return e&&e.__esModule?e:{default:e}}var u={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,c=e.children,m=e.components,s=void 0===m?{}:m,i=e.Layout,f=e.layoutProps,d=s[n+"."+t]||s[t]||u[t]||t;return i?((0,p.default)(this,i),l.default.createElement(i,r({components:s},f),l.default.createElement(d,o,c))):l.default.createElement(d,o,c)}}]),t}();t.default=(0,c.withMDXComponents)(s)},300:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,l=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,u=m&&m(Object);e.exports=function e(t,n,s){if("string"!==typeof n){if(u){var i=m(n);i&&i!==u&&e(t,i,s)}var f=l(n);p&&(f=f.concat(p(n)));for(var d=0;d<f.length;++d){var g=f[d];if(!r[g]&&!a[g]&&(!s||!s[g])){var y=c(n,g);try{o(t,g,y)}catch(b){}}}return t}return t}},322:function(e,t,n){"use strict";n.r(t);var r=n(298),a=n(0),o=n.n(a),l=n(297);t.default=function(e){var t=e.components;Object(r.a)(e,["components"]);return o.a.createElement(l.MDXTag,{name:"wrapper",components:t},o.a.createElement(l.MDXTag,{name:"h1",components:t},"Color"),o.a.createElement(l.MDXTag,{name:"h2",components:t},"Recommendation of use"),o.a.createElement(l.MDXTag,{name:"table",components:t},o.a.createElement(l.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(l.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(l.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}}),o.a.createElement(l.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Light theme"),o.a.createElement(l.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Dark theme"))),o.a.createElement(l.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(l.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Background colors"),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"White, Grey 1, Grey 2"),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Grey 9, Grey 10, Black")),o.a.createElement(l.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Default"),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Black"),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"White")),o.a.createElement(l.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Active"),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Porsche Red"),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Porsche Red Light")),o.a.createElement(l.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Hover"),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Porsche Red Dark"),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Porsche Red")),o.a.createElement(l.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Disabled"),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Grey-5"),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Grey-7")))))}}}]);
//# sourceMappingURL=7.abf45241.chunk.js.map