(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=p(n(0)),o=p(n(304)),l=p(n(3));function p(e){return e&&e.__esModule?e:{default:e}}var c=(0,o.default)({}),i=c.Provider,s=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return r.default.createElement(s,null,function(t){return r.default.createElement(e,a({components:n||t},o))})}};var m=function(e){var t=e.components,n=e.children;return r.default.createElement(i,{value:t},n)};m.propTypes={components:l.default.object.isRequired,children:l.default.element.isRequired},t.default=m},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(302);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(a).default}});var r=n(299);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(r).default}})},301:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",function(){return a})},302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),o=n(0),l=i(o),p=i(n(303)),c=n(299);function i(e){return e&&e.__esModule?e:{default:e}}var s={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,o=void 0===r?{}:r,c=e.children,i=e.components,m=void 0===i?{}:i,u=e.Layout,f=e.layoutProps,d=m[n+"."+t]||m[t]||s[t]||t;return u?((0,p.default)(this,u),l.default.createElement(u,a({components:m},f),l.default.createElement(d,o,c))):l.default.createElement(d,o,c)}}]),t}();t.default=(0,c.withMDXComponents)(m)},303:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o=Object.defineProperty,l=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,s=i&&i(Object);e.exports=function e(t,n,m){if("string"!==typeof n){if(s){var u=i(n);u&&u!==s&&e(t,u,m)}var f=l(n);p&&(f=f.concat(p(n)));for(var d=0;d<f.length;++d){var g=f[d];if(!a[g]&&!r[g]&&(!m||!m[g])){var h=c(n,g);try{o(t,g,h)}catch(v){}}}return t}return t}},304:function(e,t,n){"use strict";t.__esModule=!0;var a=o(n(0)),r=o(n(305));function o(e){return e&&e.__esModule?e:{default:e}}t.default=a.default.createContext||r.default,e.exports=t.default},305:function(e,t,n){"use strict";t.__esModule=!0;var a=n(0),r=(l(a),l(n(3))),o=l(n(80));l(n(306));function l(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=1073741823;t.default=function(e,t){var n,l,m="__create-react-context-"+(0,o.default)()+"__",u=function(e){function n(){var t,a;p(this,n);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return t=a=c(this,e.call.apply(e,[this].concat(o))),a.emitter=function(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter(function(t){return t!==e})},get:function(){return e},set:function(n,a){e=n,t.forEach(function(t){return t(e,a)})}}}(a.props.value),c(a,t)}return i(n,e),n.prototype.getChildContext=function(){var e;return(e={})[m]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,a=e.value,r=void 0;((o=n)===(l=a)?0!==o||1/o===1/l:o!==o&&l!==l)?r=0:(r="function"===typeof t?t(n,a):s,0!==(r|=0)&&this.emitter.set(e.value,r))}var o,l},n.prototype.render=function(){return this.props.children},n}(a.Component);u.childContextTypes=((n={})[m]=r.default.object.isRequired,n);var f=function(t){function n(){var e,a;p(this,n);for(var r=arguments.length,o=Array(r),l=0;l<r;l++)o[l]=arguments[l];return e=a=c(this,t.call.apply(t,[this].concat(o))),a.state={value:a.getValue()},a.onUpdate=function(e,t){0!==((0|a.observedBits)&t)&&a.setState({value:a.getValue()})},c(a,e)}return i(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?s:t},n.prototype.componentDidMount=function(){this.context[m]&&this.context[m].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?s:e},n.prototype.componentWillUnmount=function(){this.context[m]&&this.context[m].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[m]?this.context[m].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(a.Component);return f.contextTypes=((l={})[m]=r.default.object,l),{Provider:u,Consumer:f}},e.exports=t.default},306:function(e,t,n){"use strict";var a=n(307);e.exports=a},307:function(e,t,n){"use strict";function a(e){return function(){return e}}var r=function(){};r.thatReturns=a,r.thatReturnsFalse=a(!1),r.thatReturnsTrue=a(!0),r.thatReturnsNull=a(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},e.exports=r},362:function(e,t,n){"use strict";n.r(t);var a=n(301),r=n(0),o=n.n(r),l=n(300);t.default=function(e){var t=e.components;Object(a.a)(e,["components"]);return o.a.createElement(l.MDXTag,{name:"wrapper",components:t},o.a.createElement(l.MDXTag,{name:"h1",components:t},"p-toggle"),o.a.createElement(l.MDXTag,{name:"h2",components:t},"Properties"),o.a.createElement(l.MDXTag,{name:"table",components:t},o.a.createElement(l.MDXTag,{name:"thead",components:t,parentName:"table"},o.a.createElement(l.MDXTag,{name:"tr",components:t,parentName:"thead"},o.a.createElement(l.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Property"),o.a.createElement(l.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Attribute"),o.a.createElement(l.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Description"),o.a.createElement(l.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Type"),o.a.createElement(l.MDXTag,{name:"th",components:t,parentName:"tr",props:{align:null}},"Default"))),o.a.createElement(l.MDXTag,{name:"tbody",components:t,parentName:"table"},o.a.createElement(l.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"checked")),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"checked")),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Shows the toggle button checked or unchecked"),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"boolean")),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"false"))),o.a.createElement(l.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"disabled")),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"disabled")),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Disables the toggle button. No events will be triggered while disabled state is active."),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"boolean")),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"false"))),o.a.createElement(l.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"name")),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"name")),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},"Sets the input name"),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"string")),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},'"foo"'))),o.a.createElement(l.MDXTag,{name:"tr",components:t,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"value")),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"value")),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}}),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},"string")),o.a.createElement(l.MDXTag,{name:"td",components:t,parentName:"tr",props:{align:null}},o.a.createElement(l.MDXTag,{name:"inlineCode",components:t,parentName:"td"},'"bar"'))))),o.a.createElement(l.MDXTag,{name:"h2",components:t},"Dependencies"),o.a.createElement(l.MDXTag,{name:"h3",components:t},"Depends on"),o.a.createElement(l.MDXTag,{name:"ul",components:t},o.a.createElement(l.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(l.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"#/icon/icon"}},"p-icon"))))}}}]);
//# sourceMappingURL=39.bf6efa73.chunk.js.map