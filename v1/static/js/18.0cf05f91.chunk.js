(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=c(n(0)),a=c(n(304)),i=c(n(3));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,a.default)({}),u=l.Provider,p=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(p,null,function(t){return o.default.createElement(e,r({components:n||t},a))})}};var s=function(e){var t=e.components,n=e.children;return o.default.createElement(u,{value:t},n)};s.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=s},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(302);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n(299);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},301:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",function(){return r})},302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),i=u(a),c=u(n(303)),l=n(299);function u(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},s=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,a=void 0===o?{}:o,l=e.children,u=e.components,s=void 0===u?{}:u,f=e.Layout,m=e.layoutProps,d=s[n+"."+t]||s[t]||p[t]||t;return f?((0,c.default)(this,f),i.default.createElement(f,r({components:s},m),i.default.createElement(d,a,l))):i.default.createElement(d,a,l)}}]),t}();t.default=(0,l.withMDXComponents)(s)},303:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,c=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,p=u&&u(Object);e.exports=function e(t,n,s){if("string"!==typeof n){if(p){var f=u(n);f&&f!==p&&e(t,f,s)}var m=i(n);c&&(m=m.concat(c(n)));for(var d=0;d<m.length;++d){var h=m[d];if(!r[h]&&!o[h]&&(!s||!s[h])){var v=l(n,h);try{a(t,h,v)}catch(y){}}}return t}return t}},304:function(e,t,n){"use strict";t.__esModule=!0;var r=a(n(0)),o=a(n(305));function a(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},305:function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=(i(r),i(n(3))),a=i(n(80));i(n(306));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var p=1073741823;t.default=function(e,t){var n,i,s="__create-react-context-"+(0,a.default)()+"__",f=function(e){function n(){var t,r;c(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=l(this,e.call.apply(e,[this].concat(a))),r.emitter=function(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter(function(t){return t!==e})},get:function(){return e},set:function(n,r){e=n,t.forEach(function(t){return t(e,r)})}}}(r.props.value),l(r,t)}return u(n,e),n.prototype.getChildContext=function(){var e;return(e={})[s]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((a=n)===(i=r)?0!==a||1/a===1/i:a!==a&&i!==i)?o=0:(o="function"===typeof t?t(n,r):p,0!==(o|=0)&&this.emitter.set(e.value,o))}var a,i},n.prototype.render=function(){return this.props.children},n}(r.Component);f.childContextTypes=((n={})[s]=o.default.object.isRequired,n);var m=function(t){function n(){var e,r;c(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return e=r=l(this,t.call.apply(t,[this].concat(a))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!==((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},l(r,e)}return u(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?p:t},n.prototype.componentDidMount=function(){this.context[s]&&this.context[s].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?p:e},n.prototype.componentWillUnmount=function(){this.context[s]&&this.context[s].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[s]?this.context[s].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return m.contextTypes=((i={})[s]=o.default.object,i),{Provider:f,Consumer:m}},e.exports=t.default},306:function(e,t,n){"use strict";var r=n(307);e.exports=r},307:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},376:function(e,t,n){"use strict";n.r(t);var r=n(301),o=n(0),a=n.n(o),i=n(300);t.default=function(e){var t=e.components;Object(r.a)(e,["components"]);return a.a.createElement(i.MDXTag,{name:"wrapper",components:t},a.a.createElement(i.MDXTag,{name:"h1",components:t},"Grid (#/child)"),a.a.createElement(i.MDXTag,{name:"h2",components:t},"Properties"),a.a.createElement(i.MDXTag,{name:"table",components:t},a.a.createElement(i.MDXTag,{name:"thead",components:t,parentName:"table"},a.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"thead"},a.a.createElement(i.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Property"),a.a.createElement(i.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Attribute"),a.a.createElement(i.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"),a.a.createElement(i.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Type"),a.a.createElement(i.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Default"))),a.a.createElement(i.MDXTag,{name:"tbody",components:t,parentName:"table"},a.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"tbody"},a.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},a.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"offset")),a.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},a.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"offset")),a.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},'The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.'),a.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},a.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"any")),a.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},a.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"0"))),a.a.createElement(i.MDXTag,{name:"tr",components:t,parentName:"tbody"},a.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},a.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"size")),a.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},a.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"size")),a.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},'The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {"base": 6, "l": 3}. You always need to provide a base value when doing this.'),a.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},a.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"any")),a.a.createElement(i.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},a.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"1"))))))}}}]);
//# sourceMappingURL=18.0cf05f91.chunk.js.map