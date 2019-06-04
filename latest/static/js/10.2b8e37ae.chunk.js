(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11],{302:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=i(n(0)),a=i(n(78)),o=i(n(4));function i(e){return e&&e.__esModule?e:{default:e}}var c=(0,a.default)({}),u=c.Provider,p=c.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,a=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return l.default.createElement(p,null,function(t){return l.default.createElement(e,r({components:n||t},a))})}};var m=function(e){var t=e.components,n=e.children;return l.default.createElement(u,{value:t},n)};m.propTypes={components:o.default.object.isRequired,children:o.default.element.isRequired},t.default=m},303:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(305);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var l=n(302);function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(l).default}})},304:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}n.d(t,"a",function(){return r})},305:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(0),o=u(a),i=u(n(306)),c=n(302);function u(e){return e&&e.__esModule?e:{default:e}}var p={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,a.Component),l(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,l=e.props,a=void 0===l?{}:l,c=e.children,u=e.components,m=void 0===u?{}:u,s=e.Layout,d=e.layoutProps,f=m[n+"."+t]||m[t]||p[t]||t;return s?((0,i.default)(this,s),o.default.createElement(s,r({components:m},d),o.default.createElement(f,a,c))):o.default.createElement(f,a,c)}}]),t}();t.default=(0,c.withMDXComponents)(m)},306:function(e,t,n){"use strict";var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},l={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,o=Object.getOwnPropertyNames,i=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,u=Object.getPrototypeOf,p=u&&u(Object);e.exports=function e(t,n,m){if("string"!==typeof n){if(p){var s=u(n);s&&s!==p&&e(t,s,m)}var d=o(n);i&&(d=d.concat(i(n)));for(var f=0;f<d.length;++f){var y=d[f];if(!r[y]&&!l[y]&&(!m||!m[y])){var E=c(n,y);try{a(t,y,E)}catch(x){}}}return t}return t}},307:function(e,t,n){},308:function(e,t,n){"use strict";n.d(t,"a",function(){return p});var r=n(48),l=n(0),a=n.n(l),o=n(1),i=n.n(o),c=n(309),u=n.n(c);n(307),n(310);var p=function(e){var t=e.className,n=e.theme,l=i()("sg-vrt",u.a.vrt,Object(r.a)({},u.a.light,"light"===n),Object(r.a)({},u.a.dark,"dark"===n),t);return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:l},function(e,t){return"function"===typeof e?e(t):e}(e.children,e.theme)))};p.defaultProps={theme:"light"}},309:function(e,t,n){e.exports={vrt:"exampleVrt_vrt__1SaND",light:"exampleVrt_light__TdDsu",dark:"exampleVrt_dark__3o6br","sg-example-loader":"exampleVrt_sg-example-loader__jk66z","p-loader":"exampleVrt_p-loader__10bzb","p-loader__fg":"exampleVrt_p-loader__fg__FtfHN"}},310:function(e,t,n){},333:function(e,t,n){"use strict";n.r(t);var r=n(304),l=n(0),a=n.n(l),o=n(303),i=n(308);t.default=function(e){var t=e.components;Object(r.a)(e,["components"]);return a.a.createElement(o.MDXTag,{name:"wrapper",components:t},a.a.createElement(i.a,null,function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p-headline",{type:"large-title",level:"1"},"Large Title"))}),a.a.createElement(i.a,{theme:"dark"},function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p-headline",{type:"large-title",level:"1",theme:e},"Large Title"))}),a.a.createElement(i.a,null,function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p-headline",{type:"headline-1",level:"1"},"Headline 1"),a.a.createElement("p-headline",{type:"headline-2",level:"2"},"Headline 2"),a.a.createElement("p-headline",{type:"headline-3",level:"3"},"Headline 3"),a.a.createElement("p-headline",{type:"headline-4",level:"4"},"Headline 4"),a.a.createElement("p-headline",{type:"headline-5",level:"5"},"Headline 5"),a.a.createElement("p-headline",{type:"headline-6",level:"6"},"Headline 6"))}),a.a.createElement(i.a,null,function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p-headline",{type:"headline-1",level:"1",align:"left"},"Headline left"),a.a.createElement("p-headline",{type:"headline-1",level:"1",align:"center"},"Headline center"),a.a.createElement("p-headline",{type:"headline-1",level:"1",align:"right"},"Headline right"),a.a.createElement("p-headline",{type:"headline-1",level:"1",ellipsis:"true"},"Headline ellipsis - Lorem ipsum dolor sit amet consecutor lorem ipsum dolor sit amet consecutor lorem ipsum dolor sit amet consecutor lorem ipsum dolor sit amet consecutor"),a.a.createElement("p-headline",{type:"headline-1",level:"1",wrap:"true"},"Headline wrap - Lorem ipsum dolorsitametconsecutoloremipsumdolorsitametconsecutoloremipsum"),a.a.createElement("p-headline",{type:"headline-1",level:"1",inline:"true"},"Headline inline"),a.a.createElement("p-headline",{type:"headline-1",level:"1",inline:"true"},"Headline inline"))}),a.a.createElement(i.a,null,function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p-text",{type:"copy"},"Copy text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"small"},"Small text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")))}),a.a.createElement(i.a,null,function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p-text",{type:"12"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"16"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"20"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"24"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"28"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"30"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"32"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"36"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"42"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"44"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"48"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"52"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"60"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"62"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"72"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")),a.a.createElement("p-text",{type:"84"},"Lorem ipsum text with ",a.a.createElement("strong",null,"strong text")," and ",a.a.createElement("b",null,"bold text")))}),a.a.createElement(i.a,null,function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p-text",{type:"60-thin"},"Lorem ipsum dolor sit amet"),a.a.createElement("p-text",{type:"62-thin"},"Lorem ipsum dolor sit amet"),a.a.createElement("p-text",{type:"72-thin"},"Lorem ipsum dolor sit amet"),a.a.createElement("p-text",{type:"84-thin"},"Lorem ipsum dolor sit amet"))}),a.a.createElement(i.a,null,function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("p-text",{type:"copy",align:"left"},"Copy text left"),a.a.createElement("p-text",{type:"copy",align:"center"},"Copy text center"),a.a.createElement("p-text",{type:"copy",align:"right"},"Copy text right"),a.a.createElement("p-text",{type:"copy",ellipsis:"true"},"Copy text ellipsis - Lorem ipsum dolor sit amet consecutor lorem ipsum dolor sit amet consecutor lorem ipsum dolor sit amet consecutor lorem ipsum dolor sit amet consecutor"),a.a.createElement("p-text",{type:"copy",wrap:"true"},"Copy text wrap - dolorsitametconsecutoloremipsumdolorsitametconsecutoloremipsumdolorsitametconsecutoloremipsumdolorsitametconsecutoloremipsum"),a.a.createElement("p-text",{type:"copy",inline:"true"},"Copy text inline"),a.a.createElement("p-text",{type:"copy",inline:"true"},"Copy text inline"))}))}}}]);
//# sourceMappingURL=10.2b8e37ae.chunk.js.map