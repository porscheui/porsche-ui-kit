(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0062329b"],{6579:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));o("9bd2"),o("ef1f"),o("2aa5"),o("f3b8"),o("32f5"),o("918c");var i=new Map,n=function(t){var e=t.tagName,o=i.get(e);if(void 0!==o)return o;var n=new Map;return i.set(e,n),n},r=function(t){return t===document?t.head:t},s=function(t,e){var o=t.getRootNode(),i=n(t);if(void 0===i.get(o)){i.set(o,!0);var s=document.createElement("style");s.appendChild(document.createTextNode(a(e)));var l=r(o),c=l.querySelector("meta[charset]");null!==c?l.insertBefore(s,c.nextSibling):l.childNodes.length>0?l.insertBefore(s,l.firstChild):l.appendChild(s)}},a=function(t){return t.replace(/\s{2,}|(\/\*.*\*\/)/g,"").replace(/(:|;)\s/g,"$1").replace(/[\s;]({|})\s?/g,"$1")}},"7e67":function(t,e,o){"use strict";o.r(e),o.d(e,"p_text_list_item",(function(){return s}));var i=o("a5a2"),n=o("6579"),r=':host{position:relative !important;display:list-item !important;color:inherit !important;list-style-type:none !important}:host(.p-text-list-item--unordered){padding-left:1.5rem !important}:host(.p-text-list-item--unordered)::before{content:"" !important;position:absolute !important;left:0 !important;top:calc(1.5em / 2 - 0.125em) !important;width:0.25rem !important;height:0.25rem !important;background-color:currentColor !important}:host(.p-text-list-item--unordered.p-text-list-item--nested)::before{height:1px !important;width:0.5rem !important;top:calc(1.5em / 2) !important}:host(.p-text-list-item--ordered){padding-left:2.5rem !important}:host(.p-text-list-item--ordered)::before{position:absolute !important;right:calc(100% - 24px) !important;top:0 !important;counter-increment:section !important;text-align:right !important;font-size:1rem;line-height:1.5;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif;font-weight:400}:host(.p-text-list-item--ordered-numbered)::before{content:counters(section, ".", decimal) "." !important}:host(.p-text-list-item--ordered-alphabetically)::before{content:counters(section, ".", lower-latin) "." !important}:host(.p-text-list-item--ordered-numbered.p-text-list-item--nested)::before{content:counters(section, ".", decimal) !important}:host(.p-text-list-item--ordered-alphabetically.p-text-list-item--nested)::before{content:counters(section, ".", lower-latin) !important}',s=function(){function t(t){Object(i["l"])(this,t)}return t.prototype.componentDidLoad=function(){this.addSlottedStyles()},t.prototype.render=function(){var t,e=(t={},t[Object(i["f"])("text-list-item")]=!0,t[Object(i["f"])("text-list-item--"+this.typeOfList)]=!0,t[Object(i["f"])("text-list-item--ordered-"+this.typeOfOrderedList)]="ordered"===this.typeOfList,t[Object(i["f"])("text-list-item--nested")]=this.isNestedList,t);return Object(i["j"])(i["b"],{role:"listitem",class:e},Object(i["j"])("slot",null))},Object.defineProperty(t.prototype,"typeOfList",{get:function(){var t=this.host.closest(Object(i["f"])("text-list"));return t.getAttribute("list-type")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"typeOfOrderedList",{get:function(){var t=this.host.closest(Object(i["f"])("text-list"));return t.getAttribute("order-type")},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"isNestedList",{get:function(){return!!this.host.closest(Object(i["f"])("text-list[nested]"))},enumerable:!1,configurable:!0}),t.prototype.addSlottedStyles=function(){var t=this.host.tagName.toLowerCase(),e=t+" a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    "+t+" a:hover {\n      color: #d5001c;\n    }\n\n    "+t+" a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }\n    ";Object(n["a"])(this.host,e)},Object.defineProperty(t.prototype,"host",{get:function(){return Object(i["i"])(this)},enumerable:!1,configurable:!0}),t}();s.style=r}}]);
//# sourceMappingURL=chunk-0062329b.773f5770.js.map