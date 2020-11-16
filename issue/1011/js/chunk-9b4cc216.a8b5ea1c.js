(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9b4cc216"],{"0c47":function(e,a,t){var n=t("c91c"),r=t("b17e");e.exports=Object.keys||function(e){return n(e,r)}},"189b":function(e,a,t){var n=t("72df"),r=t("7d53"),o=t("4fed"),i=r("species");e.exports=function(e){return o>=51||!n((function(){var a=[],t=a.constructor={};return t[i]=function(){return{foo:1}},1!==a[e](Boolean).foo}))}},2117:function(e,a,t){var n=t("8697");e.exports=function(e,a,t){if(n(e),void 0===a)return e;switch(t){case 0:return function(){return e.call(a)};case 1:return function(t){return e.call(a,t)};case 2:return function(t,n){return e.call(a,t,n)};case 3:return function(t,n,r){return e.call(a,t,n,r)}}return function(){return e.apply(a,arguments)}}},"37d1":function(e,a,t){var n=t("730c");e.exports=function(e){return Object(n(e))}},"4fed":function(e,a,t){var n,r,o=t("f498"),i=t("64e4"),s=o.process,c=s&&s.versions,l=c&&c.v8;l?(n=l.split("."),r=n[0]+n[1]):i&&(n=i.match(/Edge\/(\d+)/),(!n||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/),n&&(r=n[1]))),e.exports=r&&+r},"52af":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"vmark"},[t("h1",[e._v("Select")]),e._m(0),e._m(1),t("h2",[e._v("Basic example")]),t("Playground",{attrs:{markup:e.basic,config:e.config}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.label=a.target.multiple?t:t[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select a label mode")]),t("option",{attrs:{selected:"",value:"show"}},[e._v("With label")]),t("option",{attrs:{value:"hide"}},[e._v("Without label")]),t("option",{attrs:{value:"responsive"}},[e._v("Responsive")])])]),t("hr"),t("h2",[e._v("With filter")]),t("p",[e._v("This option enhances the native select filter by providing an additional search field where the user can type his own search string. The filter reduces the amount of option items by searching for the typed characters starting with the first character of the options text.")]),t("Playground",{attrs:{markup:e.withFilter,config:e.config}}),t("hr"),t("h2",[e._v("With optgroups")]),t("Playground",{attrs:{markup:e.withOptgroups,config:e.config}}),t("hr"),t("h2",[e._v("Dropdown direction")]),t("Playground",{attrs:{markup:e.direction,config:e.config}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.dropdownDirection,expression:"dropdownDirection"}],on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.dropdownDirection=a.target.multiple?t:t[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select a dropdown mode")]),t("option",{attrs:{selected:"",value:"down"}},[e._v("Direction down")]),t("option",{attrs:{value:"up"}},[e._v("Direction up")]),t("option",{attrs:{value:"auto"}},[e._v("Direction auto")])])]),t("hr"),t("h2",[e._v("With description text")]),e._m(2),t("Playground",{attrs:{markup:e.withDescriptionText,config:e.config}}),t("hr"),t("h2",[e._v("Disabled")]),t("Playground",{attrs:{markup:e.disabled,config:e.config}}),t("hr"),t("h2",[e._v("Validation states")]),e._m(3),t("Playground",{attrs:{markup:e.validationStates,config:e.config}},[t("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],on:{change:function(a){var t=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.state=a.target.multiple?t:t[0]}}},[t("option",{attrs:{disabled:""}},[e._v("Select a validation state")]),t("option",{attrs:{value:"error"}},[e._v("Error")]),t("option",{attrs:{value:"success"}},[e._v("Success")]),t("option",{attrs:{value:"none"}},[e._v("None")])])]),t("hr"),t("h2",[e._v("Slots")]),e._m(4),t("Playground",{attrs:{markup:e.slots,config:e.config}}),t("hr"),t("h2",[e._v("Changing the selected option programmatically")]),e._m(5),e._m(6),e._m(7),e._m(8)],1)},r=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("The "),t("strong",[e._v("Select")]),e._v(" component is a styling wrapper for the native HTML "),t("code",[e._v("<select>")]),e._v(" form element. To improve accessibility on devices with touch support, it defaults to the native user interface behaviour.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("A "),t("code",[e._v("label")]),e._v(" is a caption which informs the user what information a particular form field is asking for. The "),t("strong",[e._v("Select Wrapper")]),e._v(" component can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("A description text can be added to explain the meaning of a specific form field. It's meant to be a textual enhancement of the label text and is technically connected with the "),t("code",[e._v("hide-label")]),e._v(" property.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("The "),t("strong",[e._v("Select Wrapper")]),e._v(" component supports the visualisation of inline validation.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("Sometimes it's useful to be able to render markup (e.g. an anchor tag) for "),t("code",[e._v("label")]),e._v(" or "),t("code",[e._v("message")]),e._v(". Therefore a named slot can be used. Make sure "),t("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot). For named slots only "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"}},[e._v("phrasing content")]),e._v(" is allowed. Please make sure to set the corresponding "),t("strong",[e._v("aria")]),e._v(" attributes.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("In JS there is no possibility to listen to the "),t("code",[e._v("onchange")]),e._v(" event or the "),t("code",[e._v("mutationObserver")]),e._v(" if the selected option is changed programmatically, e.g.:")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("//Won't update the custom styled dropdown\nselectElement.options[3].selected = true;\n")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("p",[e._v("To force re-rendering of the custom dropdown, the selected option needs to be changed by adding/removing the "),t("code",[e._v("selected")]),e._v(" attribute, e.g.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("//Won't update the custom styled dropdown\nselectElement.options[3].setAttribute('selected', 'selected');\nselectElement.options[0].removeAttribute('selected');\n")])])}],o=(t("d86f"),t("ef14"),t("cfce"),t("6559"),t("3835")),i=t("d4ec"),s=t("bee2"),c=t("262e"),l=t("2caf"),u=t("0f9e"),d=t("2b0e"),p=t("2fe1"),f=function(e){return e.map((function(e){return'<option value="'.concat(e,'">Option ').concat(e.toUpperCase(),"</option>")}))},h=function(e){Object(c["a"])(t,e);var a=Object(l["a"])(t);function t(){var e;return Object(i["a"])(this,t),e=a.apply(this,arguments),e.config={themeable:!0},e.label="show",e.state="error",e.dropdownDirection="auto",e.withOptgroups='<p-select-wrapper label="Some label">\n  <select name="some-name">\n    <optgroup label="Some optgroup label 1">\n      '.concat(f(["a","b","c","d","e","f"]).join("\n      "),'\n    </optgroup>\n    <optgroup label="Some optgroup label 2">\n      ').concat(f(["g","h","i"]).join("\n      "),"\n    </optgroup>\n  </select>\n</p-select-wrapper>"),e.withDescriptionText='<p-select-wrapper label="Some label" description="Some description">\n  <select name="some-name">\n    '.concat(f(["a","b","c"]).join("\n    "),"\n  </select>\n</p-select-wrapper>"),e.disabled='<p-select-wrapper label="Some label">\n  <select name="some-name" disabled>\n    '.concat(f(["a","b","c"]).join("\n    "),"\n  </select>\n</p-select-wrapper>"),e.slots='<p-select-wrapper state="error">\n  <span slot="label" id="some-label-id">Some label with a <a href="https://designsystem.porsche.com">link</a>.</span>\n  <span slot="description">Some description with a <a href="https://designsystem.porsche.com">link</a>.</span>\n  <select name="some-name" aria-labelledby="some-label-id" aria-describedby="some-message-id">\n    '.concat(f(["a","b","c"]).join("\n    "),'\n  </select>\n  <span slot="message" id="some-message-id">Some error message with a <a href="https://designsystem.porsche.com">link</a>.</span>\n</p-select-wrapper>'),e}return Object(s["a"])(t,[{key:"basic",get:function(){var e='hide-label="'.concat("hide"===this.label?"true":"responsive"===this.label?"{ base: true, l: false }":"false",'"');return'<p-select-wrapper label="Some label" '.concat(e,'>\n  <select name="some-name">\n    ').concat(f(["a","b","c","d","e","f"]).join("\n    "),"\n  </select>\n</p-select-wrapper>")}},{key:"withFilter",get:function(){var e={AF:"Afghanistan",AX:"Åland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia, Plurinational State of",BQ:"Bonaire, Sint Eustatius and Saba",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, the Democratic Republic of the",CK:"Cook Islands",CR:"Costa Rica",CI:"Côte d'Ivoire",HR:"Croatia",CU:"Cuba",CW:"Curaçao",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",VA:"Holy See (Vatican City State",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic of",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"Korea, Democratic People's Republic of",KR:"Korea, Republic of",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia, the former Yugoslav Republic of",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Moldova, Republic of",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory, Occupied",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Réunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",BL:"Saint Barthélemy",SH:"Saint Helena, Ascension and Tristan da Cunha",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin (French part",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten (Dutch part",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan, Province of China",TJ:"Tajikistan",TZ:"Tanzania, United Republic of",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela, Bolivarian Republic of",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};return'<p-select-wrapper filter="true" label="Some label">\n  <select name="some-name">\n    '.concat(Object.entries(e).map((function(e){var a=Object(o["a"])(e,2),t=a[0],n=a[1];return'<option value="'.concat(t,'"').concat("AQ"===t?" disabled":"",">").concat(n,"</option>")})).join("\n    "),"\n  </select>\n</p-select-wrapper>")}},{key:"direction",get:function(){return'<p-select-wrapper label="Some label" dropdown-direction="'.concat(this.dropdownDirection,'">\n  <select name="some-name">\n    ').concat(f(["a","b","c","d","e","f"]).join("\n    "),"\n  </select>\n</p-select-wrapper>")}},{key:"validationStates",get:function(){var e='message="'.concat("none"!==this.state?"Some ".concat(this.state," validation message."):"",'"');return'<p-select-wrapper label="Some label" state="'.concat(this.state,'" ').concat(e,'>\n  <select name="some-name" :aria-invalid="state === \'error\'">\n    ').concat(f(["a","b","c"]).join("\n    "),"\n  </select>\n</p-select-wrapper>")}}]),t}(d["a"]);h=Object(u["b"])([p["b"]],h);var m=h,v=m,b=t("2877"),g=Object(b["a"])(v,n,r,!1,null,null,null);a["default"]=g.exports},6009:function(e,a,t){var n=t("d4cb"),r=t("0c47"),o=t("378c"),i=t("e129").f,s=function(e){return function(a){var t,s=o(a),c=r(s),l=c.length,u=0,d=[];while(l>u)t=c[u++],n&&!i.call(s,t)||d.push(e?[t,s[t]]:s[t]);return d}};e.exports={entries:s(!0),values:s(!1)}},"64e4":function(e,a,t){var n=t("5428");e.exports=n("navigator","userAgent")||""},6559:function(e,a,t){var n=t("6b1d"),r=t("6009").entries;n({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"6a86":function(e,a,t){var n=t("7526"),r=t("c6de"),o=t("7d53"),i=o("species");e.exports=function(e,a){var t;return r(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!r(t.prototype)?n(t)&&(t=t[i],null===t&&(t=void 0)):t=void 0),new(void 0===t?Array:t)(0===a?0:a)}},"7f8a":function(e,a,t){"use strict";var n=t("72df");e.exports=function(e,a){var t=[][e];return!!t&&n((function(){t.call(null,a||function(){throw 1},1)}))}},8697:function(e,a){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},c6de:function(e,a,t){var n=t("6a61");e.exports=Array.isArray||function(e){return"Array"==n(e)}},ce71:function(e,a,t){var n=t("d4cb"),r=t("72df"),o=t("f1a7"),i=Object.defineProperty,s={},c=function(e){throw e};e.exports=function(e,a){if(o(s,e))return s[e];a||(a={});var t=[][e],l=!!o(a,"ACCESSORS")&&a.ACCESSORS,u=o(a,0)?a[0]:c,d=o(a,1)?a[1]:void 0;return s[e]=!!t&&!r((function(){if(l&&!n)return!0;var e={length:-1};l?i(e,1,{enumerable:!0,get:c}):e[1]=1,t.call(e,u,d)}))}},cfce:function(e,a,t){"use strict";var n=t("6b1d"),r=t("d054").map,o=t("189b"),i=t("ce71"),s=o("map"),c=i("map");n({target:"Array",proto:!0,forced:!s||!c},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},d054:function(e,a,t){var n=t("2117"),r=t("83a6"),o=t("37d1"),i=t("b495"),s=t("6a86"),c=[].push,l=function(e){var a=1==e,t=2==e,l=3==e,u=4==e,d=6==e,p=5==e||d;return function(f,h,m,v){for(var b,g,S=o(f),_=r(S),y=n(h,m,3),w=i(_.length),M=0,A=v||s,C=a?A(f,w):t?A(f,0):void 0;w>M;M++)if((p||M in _)&&(b=_[M],g=y(b,M,S),e))if(a)C[M]=g;else if(g)switch(e){case 3:return!0;case 5:return b;case 6:return M;case 2:c.call(C,b)}else if(u)return!1;return d?-1:l||u?u:C}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d86f:function(e,a,t){"use strict";var n=t("6b1d"),r=t("72df"),o=t("c6de"),i=t("7526"),s=t("37d1"),c=t("b495"),l=t("dac6"),u=t("6a86"),d=t("189b"),p=t("7d53"),f=t("4fed"),h=p("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",b=f>=51||!r((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),g=d("concat"),S=function(e){if(!i(e))return!1;var a=e[h];return void 0!==a?!!a:o(e)},_=!b||!g;n({target:"Array",proto:!0,forced:_},{concat:function(e){var a,t,n,r,o,i=s(this),d=u(i,0),p=0;for(a=-1,n=arguments.length;a<n;a++)if(o=-1===a?i:arguments[a],S(o)){if(r=c(o.length),p+r>m)throw TypeError(v);for(t=0;t<r;t++,p++)t in o&&l(d,p,o[t])}else{if(p>=m)throw TypeError(v);l(d,p++,o)}return d.length=p,d}})},dac6:function(e,a,t){"use strict";var n=t("083f"),r=t("abdf"),o=t("9618");e.exports=function(e,a,t){var i=n(a);i in e?r.f(e,i,o(0,t)):e[i]=t}},ef14:function(e,a,t){"use strict";var n=t("6b1d"),r=t("83a6"),o=t("378c"),i=t("7f8a"),s=[].join,c=r!=Object,l=i("join",",");n({target:"Array",proto:!0,forced:c||!l},{join:function(e){return s.call(o(this),void 0===e?",":e)}})}}]);
//# sourceMappingURL=chunk-9b4cc216.a8b5ea1c.js.map