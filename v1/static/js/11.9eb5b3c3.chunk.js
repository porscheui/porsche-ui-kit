(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{299:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=l(n(0)),r=l(n(304)),i=l(n(3));function l(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)({}),u=s.Provider,c=s.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,r=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["components"]);return o.default.createElement(c,null,function(t){return o.default.createElement(e,a({components:n||t},r))})}};var p=function(e){var t=e.components,n=e.children;return o.default.createElement(u,{value:t},n)};p.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=p},300:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(302);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n(299);function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},301:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}n.d(t,"a",function(){return a})},302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=u(r),l=u(n(303)),s=n(299);function u(e){return e&&e.__esModule?e:{default:e}}var c={inlineCode:"code",wrapper:"div"},p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,o=e.props,r=void 0===o?{}:o,s=e.children,u=e.components,p=void 0===u?{}:u,m=e.Layout,f=e.layoutProps,d=p[n+"."+t]||p[t]||c[t]||t;return m?((0,l.default)(this,m),i.default.createElement(m,a({components:p},f),i.default.createElement(d,r,s))):i.default.createElement(d,r,s)}}]),t}();t.default=(0,s.withMDXComponents)(p)},303:function(e,t,n){"use strict";var a={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,i=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,s=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,c=u&&u(Object);e.exports=function e(t,n,p){if("string"!==typeof n){if(c){var m=u(n);m&&m!==c&&e(t,m,p)}var f=i(n);l&&(f=f.concat(l(n)));for(var d=0;d<f.length;++d){var h=f[d];if(!a[h]&&!o[h]&&(!p||!p[h])){var g=s(n,h);try{r(t,h,g)}catch(b){}}}return t}return t}},304:function(e,t,n){"use strict";t.__esModule=!0;var a=r(n(0)),o=r(n(305));function r(e){return e&&e.__esModule?e:{default:e}}t.default=a.default.createContext||o.default,e.exports=t.default},305:function(e,t,n){"use strict";t.__esModule=!0;var a=n(0),o=(i(a),i(n(3))),r=i(n(80));i(n(306));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var c=1073741823;t.default=function(e,t){var n,i,p="__create-react-context-"+(0,r.default)()+"__",m=function(e){function n(){var t,a;l(this,n);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return t=a=s(this,e.call.apply(e,[this].concat(r))),a.emitter=function(e){var t=[];return{on:function(e){t.push(e)},off:function(e){t=t.filter(function(t){return t!==e})},get:function(){return e},set:function(n,a){e=n,t.forEach(function(t){return t(e,a)})}}}(a.props.value),s(a,t)}return u(n,e),n.prototype.getChildContext=function(){var e;return(e={})[p]=this.emitter,e},n.prototype.componentWillReceiveProps=function(e){if(this.props.value!==e.value){var n=this.props.value,a=e.value,o=void 0;((r=n)===(i=a)?0!==r||1/r===1/i:r!==r&&i!==i)?o=0:(o="function"===typeof t?t(n,a):c,0!==(o|=0)&&this.emitter.set(e.value,o))}var r,i},n.prototype.render=function(){return this.props.children},n}(a.Component);m.childContextTypes=((n={})[p]=o.default.object.isRequired,n);var f=function(t){function n(){var e,a;l(this,n);for(var o=arguments.length,r=Array(o),i=0;i<o;i++)r[i]=arguments[i];return e=a=s(this,t.call.apply(t,[this].concat(r))),a.state={value:a.getValue()},a.onUpdate=function(e,t){0!==((0|a.observedBits)&t)&&a.setState({value:a.getValue()})},s(a,e)}return u(n,t),n.prototype.componentWillReceiveProps=function(e){var t=e.observedBits;this.observedBits=void 0===t||null===t?c:t},n.prototype.componentDidMount=function(){this.context[p]&&this.context[p].on(this.onUpdate);var e=this.props.observedBits;this.observedBits=void 0===e||null===e?c:e},n.prototype.componentWillUnmount=function(){this.context[p]&&this.context[p].off(this.onUpdate)},n.prototype.getValue=function(){return this.context[p]?this.context[p].get():e},n.prototype.render=function(){return(e=this.props.children,Array.isArray(e)?e[0]:e)(this.state.value);var e},n}(a.Component);return f.contextTypes=((i={})[p]=o.default.object,i),{Provider:m,Consumer:f}},e.exports=t.default},306:function(e,t,n){"use strict";var a=n(307);e.exports=a},307:function(e,t,n){"use strict";function a(e){return function(){return e}}var o=function(){};o.thatReturns=a,o.thatReturnsFalse=a(!1),o.thatReturnsTrue=a(!0),o.thatReturnsNull=a(null),o.thatReturnsThis=function(){return this},o.thatReturnsArgument=function(e){return e},e.exports=o},337:function(e,t,n){"use strict";n.r(t);var a=n(301),o=n(0),r=n.n(o),i=n(300);t.default=function(e){var t=e.components;Object(a.a)(e,["components"]);return r.a.createElement(i.MDXTag,{name:"wrapper",components:t},r.a.createElement(i.MDXTag,{name:"h1",components:t},"Button Regular"),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Recommendation of use"),r.a.createElement(i.MDXTag,{name:"p",components:t},"A Button Regular enables the user to execute an action, change the state of an application or jump to another page with a single tap. For an optimal user guidance and dedicated pursuit of business or sales goals, different types of buttons (basic, highlight, sales) can be used."),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Styling"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"The Button Regular is available for light (standard) and dark (inverted) background."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"It always contains an icon (default: arrow right) and a text label in copytext size. The content is always positioned top left aligned within the button."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"Button dimensions:"),r.a.createElement(i.MDXTag,{name:"ul",components:t,parentName:"li"},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Width:")," By default, the button width is determined by the specific content length."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Height:")," Standard size 50 px (padding left/right 18 px), small size 30 px (padding left/right 12 px). If it gets multilined, the Button Regular grows to the bottom, keeping its initial padding."))),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"The Button Regular comes in 2 different sizes. The small size is only to be used in dedicated cases, when a standard size is not appropriate (usually for lack of space)."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"p",components:t,parentName:"li"},"Different types of buttons are available to be used for specific contexts:"),r.a.createElement(i.MDXTag,{name:"ul",components:t,parentName:"li"},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Basic:")," Default button in grey (standard) or white (inverted)."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Highlight:")," Button Regular in red. To be used only for next best actions to give the user the best guidance possible. Allowed max. 2 times per screen."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Sales:")," Button Regular in blue, only to be used for sales-relevant interactions or promotional functions."))),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Filled & Ghost: Both Basic and Sales Button are available in filled and ghost (outline only) view. The ghost view is always subordinate to the filled view, thus it is often used in combination (e.g. Submit = filled / Cancel = ghost) or stand-alone, when there are other buttons on a page with higher priority."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Button Positioning: By default, the Button Regular is to be positioned left-aligned within a module or a screen. Depending on the content and the user guidance, the position can be changed individually, e.g. it can also be placed right-aligned (e.g. in forms) or also at the end of a text (e.g. error notifications).")),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Interaction"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"The whole button area is clickable. The clickability is indicated by a specific hover state (slightly changing color).")),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Usability"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Button width:")," Even if there is no technical limit to the button width, you should always make sure that the button remains legible, even more so in multiline state. For copytext size, it is recommended to use max. 100 characters per line (equals approx. 700 px button width)."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},r.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"li"},"Disabled state:")," All types of Button Regular are provided in disabled state. However, disabled states should be avoided whenever possible, as they always tend to disrupt the user and break the user flow. Keep in mind: \u201cThe best way ","[to]"," prevent user error is to make sure that the use cannot make errors in the first place (\u2026).\u201d (Donald A. Norman, 2002).")),r.a.createElement(i.MDXTag,{name:"h2",components:t},"Usage in Sketch"),r.a.createElement(i.MDXTag,{name:"ul",components:t},r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"Drag the Button Regular from DSM on your artboard. Use the override panel to change both icon and button label, if needed. When overriding the button label, make sure to manually resize the button width and maintaining a padding-right of 18 px (small size: 12 px)."),r.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},"If you insert multiline text (you can force a break in the override panel via alt + Enter), please make sure to resize the button manually both horizontally and vertically. For the correct height, the following formula will do the trick: line height * number of lines + 26 = final button height.")))}}}]);
//# sourceMappingURL=11.9eb5b3c3.chunk.js.map