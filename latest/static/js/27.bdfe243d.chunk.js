(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=a(n(0)),u=a(n(304)),i=a(n(3));function a(e){return e&&e.__esModule?e:{default:e}}var c=(0,u.default)({}),s=c.Provider,f=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,u=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return o.default.createElement(f,null,function(t){return o.default.createElement(e,r({components:n||t},u))})}};var l=function(e){var t=e.components,n=e.children;return o.default.createElement(s,{value:t},n)};l.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=l},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(302);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return u(r).default}});var o=n(299);function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return u(o).default}})},301:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",function(){return r})},302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(0),i=s(u),a=s(n(303)),c=n(299);function s(e){return e&&e.__esModule?e:{default:e}}var f={inlineCode:"code",wrapper:"div"},l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,u.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,u=void 0===o?{}:o,c=e.children,s=e.components,l=void 0===s?{}:s,p=e.Layout,d=e.layoutProps,v=l[n+"."+t]||l[t]||f[t]||t;return p?((0,a.default)(this,p),i.default.createElement(p,r({components:l},d),i.default.createElement(v,u,c))):i.default.createElement(v,u,c)}}]),t}();t.default=(0,c.withMDXComponents)(l)},303:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},u=Object.defineProperty,i=Object.getOwnPropertyNames,a=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,s=Object.getPrototypeOf,f=s&&s(Object);e.exports=function e(t,n,l){if("string"!==typeof n){if(f){var p=s(n);p&&p!==f&&e(t,p,l)}var d=i(n);a&&(d=d.concat(a(n)));for(var v=0;v<d.length;++v){var h=d[v];if(!r[h]&&!o[h]&&(!l||!l[h])){var y=c(n,h);try{u(t,h,y)}catch(m){}}}return t}return t}},304:function(e,t,n){"use strict";t.__esModule=!0;var r=u(n(0)),o=u(n(305));function u(e){return e&&e.__esModule?e:{default:e}}t.default=r.default.createContext||o.default,e.exports=t.default},305:function(e,t,n){"use strict";t.__esModule=!0;var r=n(0),o=(i(r),i(n(3))),u=i(n(80));i(n(306));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=1073741823;t.default=function(e,t){var n,i,l="__create-react-context-"+(0,u.default)()+"__",p=function(e){function n(){var t,r;a(this,n);for(var o=arguments.length,u=Array(o),i=0;i<o;i++)u[i]=arguments[i];return t=r=c(this,e.call.apply(e,[this].concat(u))),r.emitter=function(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter(function(t){return t!==e})},get:function(){return e},set:function(n,r){e=n,t.forEach(function(t){return t(e,r)})}}}(r.props.value),c(r,t)}return s(n,e),n.prototype.getChildContext=function(){var e;return(e={})[l]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,r=e.value,o=void 0;((u=n)===(i=r)?0!==u||1/u===1/i:u!==u&&i!==i)?o=0:(o="function"===typeof t?t(n,r):f,0!==(o|=0)&&this.emitter.set(e.value,o))}var u,i},n.prototype.render=function(){return this.props.children},n}(r.Component);p.childContextTypes=((n={})[l]=o.default.object.isRequired,n);var d=function(t){function n(){var e,r;a(this,n);for(var o=arguments.length,u=Array(o),i=0;i<o;i++)u[i]=arguments[i];return e=r=c(this,t.call.apply(t,[this].concat(u))),r.state={value:r.getValue()},r.onUpdate=function(e,t){0!==((0|r.observedBits)&t)&&r.setState({value:r.getValue()})},c(r,e)}return s(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?f:t},n.prototype.componentDidMount=function(){this.context[l]&&this.context[l].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?f:e},n.prototype.componentWillUnmount=function(){this.context[l]&&this.context[l].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[l]?this.context[l].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(r.Component);return d.contextTypes=((i={})[l]=o.default.object,i),{Provider:p,Consumer:d}},e.exports=t.default},306:function(e,t,n){"use strict";var r=n(307);e.exports=r},307:function(e,t,n){"use strict";function r(e){return function(){return e}}var o=function(){};o.thatReturns=r,o.thatReturnsFalse=r(!1),o.thatReturnsTrue=r(!0),o.thatReturnsNull=r(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},363:function(e,t,n){"use strict";n.r(t);var r=n(301),o=n(0),u=n.n(o),i=n(300);t.default=function(e){var t=e.components;Object(r.a)(e,["components"]);return u.a.createElement(i.MDXTag,{name:"wrapper",components:t},u.a.createElement(i.MDXTag,{name:"h1",components:t},"Loader"),u.a.createElement(i.MDXTag,{name:"h2",components:t},"Recommendation of use"))}}}]);
//# sourceMappingURL=27.bdfe243d.chunk.js.map