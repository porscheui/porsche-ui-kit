(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7d5833a2"],{1150:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a("ef14");var i=a("53ca"),r=a("8139"),o=Object(r["g"])((function(e){
/*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
(function(){var t={}.hasOwnProperty;function a(){for(var e=[],r=0;r<arguments.length;r++){var o=arguments[r];if(o){var n=Object(i["a"])(o);if("string"===n||"number"===n)e.push(o);else if(Array.isArray(o)&&o.length){var p=a.apply(null,o);p&&e.push(p)}else if("object"===n)for(var s in o)t.call(o,s)&&o[s]&&e.push(s)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):window.classNames=a})()}))},6579:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a("9bd2"),a("ef1f"),a("2aa5"),a("f3b8"),a("32f5"),a("918c");var i=new Map,r=function(e){var t=e.tagName,a=i.get(t);if(void 0!==a)return a;var r=new Map;return i.set(t,r),r},o=function(e){return e===document?e.head:e},n=function(e,t){var a=e.getRootNode(),i=r(e);if(void 0===i.get(a)){i.set(a,!0);var n=document.createElement("style");n.appendChild(document.createTextNode(p(t)));var s=o(a),l=s.querySelector("meta[charset]");null!==l?s.insertBefore(n,l.nextSibling):s.childNodes.length>0?s.insertBefore(n,s.firstChild):s.appendChild(n)}},p=function(e){return e.replace(/\s{2,}|(\/\*.*\*\/)/g,"").replace(/(:|;)\s/g,"$1").replace(/[\s;]({|})\s?/g,"$1")}},9040:function(e,t,a){"use strict";function i(e,t,a,i){var r,o=!1,n=0;function p(){r&&clearTimeout(r)}function s(){p(),o=!0}function l(){for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];var d=this,b=Date.now()-n;function x(){n=Date.now(),a.apply(d,l)}function h(){r=void 0}o||(i&&!r&&x(),p(),void 0===i&&b>e?x():!0!==t&&(r=setTimeout(i?h:x,void 0===i?e-b:e)))}return"boolean"!==typeof t&&(i=a,a=t,t=void 0),l.cancel=s,l}a.d(t,"a",(function(){return i}))},c0ac:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var i=a("9040"),r=function(e,t,a){window.requestAnimationFrame((function(){e.addEventListener("transitionend",Object(i["a"])(50,(function(e){e.propertyName===t&&a()}))),a()}))}},c977:function(e,t,a){"use strict";a.r(t),a.d(t,"p_textarea_wrapper",(function(){return s}));a("d6de"),a("8d0f"),a("8d0d");var i=a("8139"),r=a("6579"),o=(a("9040"),a("c0ac")),n=a("1150"),p=':host{display:block}::slotted(textarea){position:relative !important;width:100% !important;min-height:11.75rem;display:block !important;padding:0.625rem !important;margin:0 !important;outline:transparent none !important;outline-offset:3px !important;-webkit-appearance:none !important;-moz-appearance:none !important;appearance:none !important;-webkit-box-sizing:border-box !important;box-sizing:border-box !important;border-width:0 !important;border-top-color:transparent !important;background-color:transparent !important;opacity:1 !important;font-family:"Porsche Next", "Arial Narrow", Arial, sans-serif !important;font-weight:400 !important;font-size:1rem !important;line-height:1.5 !important;text-indent:0 !important;color:#000 !important;resize:vertical;-webkit-transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important;transition:outline-color 0.24s ease, color 0.24s ease, border-top-color 1ms linear !important}::slotted(textarea:focus){outline:#00d5b9 solid 2px !important}::slotted(textarea:-moz-read-only:focus){outline:none !important}::slotted(textarea:read-only:focus){outline:none !important}::slotted(textarea:not(:disabled):-moz-read-only){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#626669 !important}::slotted(textarea:not(:disabled):read-only){border-top-color:rgba(255, 255, 255, 0.01) !important;color:#626669 !important}::slotted(textarea:disabled){border-top-color:rgba(255, 255, 255, 0.02) !important;color:#96989a !important;-webkit-text-fill-color:#96989a !important;cursor:not-allowed !important}.p-textarea-wrapper__label{display:block}.p-textarea-wrapper__label-text,.p-textarea-wrapper__description-text{display:block;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-textarea-wrapper__label-text--disabled,.p-textarea-wrapper__description-text--disabled{color:#96989a}.p-textarea-wrapper__label-text--visible,.p-textarea-wrapper__description-text--visible{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-textarea-wrapper__label-text--hidden,.p-textarea-wrapper__description-text--hidden{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}@media (min-width: 480px){.p-textarea-wrapper__label-text--visible-xs,.p-textarea-wrapper__description-text--visible-xs{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-textarea-wrapper__label-text--hidden-xs,.p-textarea-wrapper__description-text--hidden-xs{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 760px){.p-textarea-wrapper__label-text--visible-s,.p-textarea-wrapper__description-text--visible-s{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-textarea-wrapper__label-text--hidden-s,.p-textarea-wrapper__description-text--hidden-s{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1000px){.p-textarea-wrapper__label-text--visible-m,.p-textarea-wrapper__description-text--visible-m{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-textarea-wrapper__label-text--hidden-m,.p-textarea-wrapper__description-text--hidden-m{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1300px){.p-textarea-wrapper__label-text--visible-l,.p-textarea-wrapper__description-text--visible-l{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-textarea-wrapper__label-text--hidden-l,.p-textarea-wrapper__description-text--hidden-l{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}@media (min-width: 1760px){.p-textarea-wrapper__label-text--visible-xl,.p-textarea-wrapper__description-text--visible-xl{position:static;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;height:auto;margin:0;padding:0 0 0.25rem 0;white-space:normal;overflow:visible;clip:auto;-webkit-clip-path:none;clip-path:none}.p-textarea-wrapper__label-text--hidden-xl,.p-textarea-wrapper__description-text--hidden-xl{position:absolute;width:1px;height:1px;margin:-1px;padding:0;white-space:nowrap;overflow:hidden;clip:rect(1px, 1px, 1px, 1px);-webkit-clip-path:inset(50%);clip-path:inset(50%)}}.p-textarea-wrapper__description-text{color:#626669}.p-textarea-wrapper__description-text--disabled{color:#96989a}.p-textarea-wrapper__label-text~.p-textarea-wrapper__description-text{margin-top:-0.25rem;padding-bottom:0.5rem}.p-textarea-wrapper__fake-textarea{display:block;padding:0.125rem;background-color:#fff;-webkit-box-shadow:inset 0 0 0 1px #626669;box-shadow:inset 0 0 0 1px #626669;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:background-color 0.24s ease, -webkit-box-shadow 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease;transition:box-shadow 0.24s ease, background-color 0.24s ease, -webkit-box-shadow 0.24s ease}.p-textarea-wrapper__fake-textarea:hover:not(.p-textarea-wrapper__fake-textarea--disabled):not(.p-textarea-wrapper__fake-textarea--readonly):not(.p-textarea-wrapper__fake-textarea--success):not(.p-textarea-wrapper__fake-textarea--error),.p-textarea-wrapper__label-text:hover~.p-textarea-wrapper__fake-textarea:not(.p-textarea-wrapper__fake-textarea--disabled):not(.p-textarea-wrapper__fake-textarea--readonly):not(.p-textarea-wrapper__fake-textarea--success):not(.p-textarea-wrapper__fake-textarea--error){-webkit-box-shadow:inset 0 0 0 1px #000;box-shadow:inset 0 0 0 1px #000}.p-textarea-wrapper__fake-textarea--disabled{-webkit-box-shadow:inset 0 0 0 1px #96989a;box-shadow:inset 0 0 0 1px #96989a;background-color:#fff}.p-textarea-wrapper__fake-textarea--readonly{-webkit-box-shadow:inset 0 0 0 1px #ebebeb;box-shadow:inset 0 0 0 1px #ebebeb;background-color:#ebebeb}.p-textarea-wrapper__fake-textarea--success{-webkit-box-shadow:inset 0 0 0 2px #018a16;box-shadow:inset 0 0 0 2px #018a16}.p-textarea-wrapper__fake-textarea--success:hover,.p-textarea-wrapper__label-text:hover~.p-textarea-wrapper__fake-textarea--success{-webkit-box-shadow:inset 0 0 0 2px #014d0c;box-shadow:inset 0 0 0 2px #014d0c}.p-textarea-wrapper__fake-textarea--error{-webkit-box-shadow:inset 0 0 0 2px #e00000;box-shadow:inset 0 0 0 2px #e00000}.p-textarea-wrapper__fake-textarea--error:hover,.p-textarea-wrapper__label-text:hover~.p-textarea-wrapper__fake-textarea--error{-webkit-box-shadow:inset 0 0 0 2px #a30000;box-shadow:inset 0 0 0 2px #a30000}.p-textarea-wrapper__message{margin-top:0.25rem;color:#000;-webkit-transition:color 0.24s ease;transition:color 0.24s ease}.p-textarea-wrapper__message--success{color:#018a16}.p-textarea-wrapper__message--error{color:#e00000}.p-textarea-wrapper__message--none{color:#000}',s=function(){function e(e){var t=this;Object(i["m"])(this,e),this.label="",this.description="",this.state="none",this.message="",this.hideLabel=!1,this.setState=function(){t.disabled=t.textarea.disabled,t.readonly=t.textarea.readOnly},this.labelClick=function(){t.textarea.focus()}}return e.prototype.componentWillLoad=function(){this.setTextarea(),this.setAriaAttributes(),this.setState(),this.bindStateListener(),this.addSlottedStyles()},e.prototype.componentDidUpdate=function(){this.setAriaAttributes()},e.prototype.render=function(){var e=Object(n["a"])(Object(i["f"])("textarea-wrapper__label")),t=Object(n["a"])(Object(i["f"])("textarea-wrapper__label-text"),Object(i["l"])("textarea-wrapper__label-text-",this.hideLabel,["hidden","visible"]),this.disabled&&Object(i["f"])("textarea-wrapper__label-text--disabled")),a=Object(n["a"])(Object(i["f"])("textarea-wrapper__description-text"),Object(i["l"])("textarea-wrapper__description-text-",this.hideLabel,["hidden","visible"]),this.disabled&&Object(i["f"])("textarea-wrapper__description-text--disabled")),r=Object(n["a"])(Object(i["f"])("textarea-wrapper__fake-textarea"),Object(i["f"])("textarea-wrapper__fake-textarea--"+this.state),this.disabled&&Object(i["f"])("textarea-wrapper__fake-textarea--disabled"),this.readonly&&Object(i["f"])("textarea-wrapper__fake-textarea--readonly")),o=Object(n["a"])(Object(i["f"])("textarea-wrapper__message"),Object(i["f"])("textarea-wrapper__message--"+this.state));return Object(i["k"])(i["b"],null,Object(i["k"])("label",{class:e},this.isLabelVisible&&Object(i["k"])("p-text",{class:t,color:"inherit",tag:"span",onClick:this.labelClick},this.label||Object(i["k"])("span",null,Object(i["k"])("slot",{name:"label"}))),this.isDescriptionVisible&&Object(i["k"])("p-text",{class:a,tag:"span",color:"inherit",size:"x-small",onClick:this.labelClick},this.description||Object(i["k"])("span",null,Object(i["k"])("slot",{name:"description"}))),Object(i["k"])("span",{class:r},Object(i["k"])("slot",null))),this.isMessageVisible&&Object(i["k"])("p-text",{class:o,color:"inherit",role:"error"===this.state&&"alert"},this.message||Object(i["k"])("span",null,Object(i["k"])("slot",{name:"message"}))))},Object.defineProperty(e.prototype,"isLabelVisible",{get:function(){return!!this.label||!!this.host.querySelector('[slot="label"]')},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isDescriptionVisible",{get:function(){return!!this.description||!!this.host.querySelector('[slot="description"]')},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isMessageDefined",{get:function(){return!!this.message||!!this.host.querySelector('[slot="message"]')},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isMessageVisible",{get:function(){return["success","error"].includes(this.state)&&this.isMessageDefined},enumerable:!1,configurable:!0}),e.prototype.setTextarea=function(){this.textarea=this.host.querySelector("textarea")},e.prototype.setAriaAttributes=function(){this.label&&this.message?this.textarea.setAttribute("aria-label",this.label+". "+this.message):this.label&&this.description?this.textarea.setAttribute("aria-label",this.label+". "+this.description):this.label&&this.textarea.setAttribute("aria-label",this.label),"error"===this.state?this.textarea.setAttribute("aria-invalid","true"):this.textarea.removeAttribute("aria-invalid")},e.prototype.bindStateListener=function(){Object(o["a"])(this.textarea,"border-top-color",this.setState)},e.prototype.addSlottedStyles=function(){var e=this.host.tagName.toLowerCase(),t=e+" a {\n      outline: none transparent;\n      color: inherit;\n      text-decoration: underline;\n      -webkit-transition: outline-color .24s ease, color .24s ease;\n      transition: outline-color .24s ease, color .24s ease;\n    }\n\n    "+e+" a:hover {\n      color: #d5001c;\n    }\n\n    "+e+" a:focus {\n      outline: 2px solid #00d5b9;\n      outline-offset: 1px;\n    }\n    ";Object(r["a"])(this.host,t)},Object.defineProperty(e.prototype,"host",{get:function(){return Object(i["j"])(this)},enumerable:!1,configurable:!0}),e}();s.style=p}}]);
//# sourceMappingURL=chunk-7d5833a2.f2ee227d.js.map