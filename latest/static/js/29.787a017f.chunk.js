(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{299:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.withMDXComponents=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=a(n(0)),u=a(n(304)),i=a(n(3));function a(t){return t&&t.__esModule?t:{default:t}}var c=(0,u.default)({}),s=c.Provider,f=c.Consumer;e.withMDXComponents=function(t){return function(e){var n=e.components,u=function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["components"]);return o.default.createElement(f,null,function(e){return o.default.createElement(t,r({components:n||e},u))})}};var l=function(t){var e=t.components,n=t.children;return o.default.createElement(s,{value:e},n)};l.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},e.default=l},300:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(302);Object.defineProperty(e,"MDXTag",{enumerable:!0,get:function(){return u(r).default}});var o=n(299);function u(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"MDXProvider",{enumerable:!0,get:function(){return u(o).default}})},301:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},u=Object.keys(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(r=0;r<u.length;r++)n=u[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}n.d(e,"a",function(){return r})},302:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),u=n(0),i=s(u),a=s(n(303)),c=n(299);function s(t){return t&&t.__esModule?t:{default:t}}var f={inlineCode:"code",wrapper:"div"},l=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,u.Component),o(e,[{key:"render",value:function(){var t=this.props,e=t.name,n=t.parentName,o=t.props,u=void 0===o?{}:o,c=t.children,s=t.components,l=void 0===s?{}:s,p=t.Layout,d=t.layoutProps,v=l[n+"."+e]||l[e]||f[e]||e;return p?((0,a.default)(this,p),i.default.createElement(p,r({components:l},d),i.default.createElement(v,u,c))):i.default.createElement(v,u,c)}}]),e}();e.default=(0,c.withMDXComponents)(l)},303:function(t,e,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u=Object.defineProperty,i=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,f=s&&s(Object);t.exports=function t(e,n,l){if("string"!==typeof n){if(f){var p=s(n);p&&p!==f&&t(e,p,l)}var d=i(n);a&&(d=d.concat(a(n)));for(var v=0;v<d.length;++v){var y=d[v];if(!r[y]&&!o[y]&&(!l||!l[y])){var h=c(n,y);try{u(e,y,h)}catch(b){}}}return e}return e}},304:function(t,e,n){"use strict";e.__esModule=!0;var r=u(n(0)),o=u(n(305));function u(t){return t&&t.__esModule?t:{default:t}}e.default=r.default.createContext||o.default,t.exports=e.default},305:function(t,e,n){"use strict";e.__esModule=!0;var r=n(0),o=(i(r),i(n(3))),u=i(n(80));i(n(306));function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function s(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var f=1073741823;e.default=function(t,e){var n,i,l="__create-react-context-"+(0,u.default)()+"__",p=function(t){function n(){var e,r;a(this,n);for(var o=arguments.length,u=Array(o),i=0;i<o;i++)u[i]=arguments[i];return e=r=c(this,t.call.apply(t,[this].concat(u))),r.emitter=function(t){var e=[];return{on:function(t){e.push(t)},off:function(t){e=e.filter(function(e){return e!==t})},get:function(){return t},set:function(n,r){t=n,e.forEach(function(e){return e(t,r)})}}}(r.props.value),c(r,e)}return s(n,t),n.prototype.getChildContext=function(){var t;return(t={})[l]=this.emitter,t},n.prototype.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var n=this.props.value,r=t.value,o=void 0;((u=n)===(i=r)?0!==u||1/u===1/i:u!==u&&i!==i)?o=0:(o="function"===typeof e?e(n,r):f,0!==(o|=0)&&this.emitter.set(t.value,o))}var u,i},n.prototype.render=function(){return this.props.children},n}(r.Component);p.childContextTypes=((n={})[l]=o.default.object.isRequired,n);var d=function(e){function n(){var t,r;a(this,n);for(var o=arguments.length,u=Array(o),i=0;i<o;i++)u[i]=arguments[i];return t=r=c(this,e.call.apply(e,[this].concat(u))),r.state={value:r.getValue()},r.onUpdate=function(t,e){0!==((0|r.observedBits)&e)&&r.setState({value:r.getValue()})},c(r,t)}return s(n,e),n.prototype.componentWillReceiveProps=function(t){var e=t.observedBits;this.observedBits=void 0===e||null===e?f:e},n.prototype.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=void 0===t||null===t?f:t},n.prototype.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[l]?this.context[l].get():t},n.prototype.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},n}(r.Component);return d.contextTypes=((i={})[l]=o.default.object,i),{Provider:p,Consumer:d}},t.exports=e.default},306:function(t,e,n){"use strict";var r=n(307);t.exports=r},307:function(t,e,n){"use strict";function r(t){return function(){return t}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(t){return t},t.exports=o},357:function(t,e,n){"use strict";n.r(e);var r=n(301),o=n(0),u=n.n(o),i=n(300);e.default=function(t){var e=t.components;Object(r.a)(t,["components"]);return u.a.createElement(i.MDXTag,{name:"wrapper",components:e},u.a.createElement(i.MDXTag,{name:"p",components:e},"TBD"))}}}]);
//# sourceMappingURL=29.787a017f.chunk.js.map