(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fae9e1b0"],{"0cb2":function(e,t,o){"use strict";var r=o("e330"),n=o("7b0b"),a=Math.floor,s=r("".charAt),i=r("".replace),c=r("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,d=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,o,r,_,u){var v=o+e.length,h=r.length,p=d;return void 0!==_&&(_=n(_),p=l),i(u,p,(function(n,i){var l;switch(s(i,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,o);case"'":return c(t,v);case"<":l=_[c(i,1,-1)];break;default:var d=+i;if(0===d)return n;if(d>h){var u=a(d/10);return 0===u?n:u<=h?void 0===r[u-1]?s(i,1):r[u-1]+s(i,1):n}l=r[d-1]}return void 0===l?"":l}))}},"5b81":function(e,t,o){"use strict";var r=o("23e7"),n=o("c65b"),a=o("e330"),s=o("1d80"),i=o("1626"),c=o("7234"),l=o("44e7"),d=o("577e"),_=o("dc4a"),u=o("90d8"),v=o("0cb2"),h=o("b622"),p=o("c430"),f=h("replace"),g=TypeError,m=a("".indexOf),b=a("".replace),w=a("".slice),y=Math.max;r({target:"String",proto:!0},{replaceAll:function(e,t){var o,r,a,h,T,x,j,k,P,A=s(this),I=0,O=0,M="";if(!c(e)){if(o=l(e),o&&(r=d(s(u(e))),!~m(r,"g")))throw new g("`.replaceAll` does not allow non-global regexes");if(a=_(e,f),a)return n(a,e,A,t);if(p&&o)return b(d(A),e,t)}h=d(A),T=d(e),x=i(t),x||(t=d(t)),j=T.length,k=y(1,j),I=m(h,T);while(-1!==I)P=x?d(t(T,I,h)):v(T,h,I,[],void 0,t),M+=w(h,O,I)+P,O=I+j,I=I+k>h.length?-1:m(h,T,I+k);return O<h.length&&(M+=w(h,O)),M}})},"76c9":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"vmark"},[t("h1",[e._v("Meta Tags And Icon Links")]),e._m(0),e._m(1),e._m(2),e._m(3),t("h2",[e._v("Supported options")]),e._m(4),t("h2",[e._v("Examples")]),e._m(5),t("PartialDocs",{attrs:{name:"getMetaTagsAndIconLinks",params:e.params,location:"head"}}),t("h2",[e._v("Result")]),t("p",[e._v("The result of this partial looks like this:")]),t("Playground",{attrs:{showCodeEditor:!1,frameworkMarkup:[this.metaTagsAndIconLinks]}})],1)},n=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[t("strong",[e._v("Function name:")]),e._v(" "),t("code",[e._v("getMetaTagsAndIconLinks()")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Meta Icons are a set of icons to be used for the following purposes: "),t("strong",[e._v("Favicon")]),e._v(", "),t("strong",[e._v("Apple Touch Icons")]),e._v(", "),t("strong",[e._v("Android Touch Icons")]),e._v(" and "),t("strong",[e._v("Microsoft Windows Tiles")]),e._v(". To simplify the implementation process we provide a "),t("code",[e._v("getMetaTagsAndIconLinks")]),e._v(" partial.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Therefore, we provide a ready to use partial in all "),t("code",[e._v("@porsche-design-system/components-{js|angular|react|vue}")]),e._v(" packages which needs to be injected into the "),t("code",[e._v("<head>")]),e._v(" of your "),t("code",[e._v("index.html")]),e._v(".")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("This partial also provides some default Open Graph and Twitter meta tags which will display a thumbnail image when sharing a link on social media. If you want to define your own information you can set the "),t("code",[e._v("ogImage")]),e._v(" option to false.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("table",[t("thead",[t("tr",[t("th",[e._v("Option")]),t("th",[e._v("Description")]),t("th",[e._v("Type")]),t("th",[e._v("Default")])])]),t("tbody",[t("tr",[t("td",[t("code",[e._v("appTitle")])]),t("td",[t("strong",[e._v("Mandatory:")]),e._v(" Title of your app which will be reflected in the meta tag.")]),t("td",[t("code",[e._v("string")])]),t("td",[t("code",[e._v("undefined")])])]),t("tr",[t("td",[t("code",[e._v("cdn")])]),t("td",[e._v("Decides from which CDN the resources are loaded.")]),t("td",[t("code",[e._v("'auto' | 'cn'")])]),t("td",[t("code",[e._v("'auto'")])])]),t("tr",[t("td",[t("code",[e._v("format")])]),t("td",[e._v("Defines the output format of the partial. By default, it returns a html string, with "),t("code",[e._v("jsx")]),e._v(" it returns valid jsx elements. When using the "),t("code",{staticClass:"no-before"},[e._v("js")]),e._v(" option a javascript object is returned.")]),t("td",[t("code",[e._v("'html' | 'jsx' | 'js'")])]),t("td",[t("code",[e._v("'html'")])])]),t("tr",[t("td",[t("code",[e._v("ogImage")])]),t("td",[e._v("Boolean attribute to decide whether the Open Graph and Twitter meta tags should be included.")]),t("td",[t("code",[e._v("boolean")])]),t("td",[t("code",[e._v("true")])])])])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Project integration differs based on the project setup."),t("br"),e._v(" The following showcases the most common ways.")])}],a=o("ade3"),s=(o("f8c9"),o("5b81"),o("2b0e")),i=o("2fe1"),c=o("dc47"),l=function(e,t,o,r){var n,a=arguments.length,s=a<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,o):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,o,r);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(s=(a<3?n(s):a>3?n(t,o,s):n(t,o))||s);return a>3&&s&&Object.defineProperty(t,o,s),s};let d=class extends s["a"]{constructor(...e){super(...e),Object(a["a"])(this,"metaTagsAndIconLinks",c["b"].replaceAll("><",">\n<")),Object(a["a"])(this,"params",[{value:"{ appTitle: 'TITLE_OF_YOUR_APP' }"},{value:"{ appTitle: 'TITLE_OF_YOUR_APP', cdn: 'cn' }",comment:"force using China CDN"}])}};d=l([i["b"]],d);var _=d,u=_,v=o("2877"),h=Object(v["a"])(u,r,n,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-fae9e1b0.7f0a8657.js.map