(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d3a201d"],{"0c47":function(e,a,n){var t=n("c91c"),r=n("b17e");e.exports=Object.keys||function(e){return t(e,r)}},"189b":function(e,a,n){var t=n("72df"),r=n("7d53"),o=n("4fed"),i=r("species");e.exports=function(e){return o>=51||!t((function(){var a=[],n=a.constructor={};return n[i]=function(){return{foo:1}},1!==a[e](Boolean).foo}))}},2117:function(e,a,n){var t=n("8697");e.exports=function(e,a,n){if(t(e),void 0===a)return e;switch(n){case 0:return function(){return e.call(a)};case 1:return function(n){return e.call(a,n)};case 2:return function(n,t){return e.call(a,n,t)};case 3:return function(n,t,r){return e.call(a,n,t,r)}}return function(){return e.apply(a,arguments)}}},"37d1":function(e,a,n){var t=n("730c");e.exports=function(e){return Object(t(e))}},"4fed":function(e,a,n){var t,r,o=n("f498"),i=n("64e4"),s=o.process,c=s&&s.versions,l=c&&c.v8;l?(t=l.split("."),r=t[0]+t[1]):i&&(t=i.match(/Edge\/(\d+)/),(!t||t[1]>=74)&&(t=i.match(/Chrome\/(\d+)/),t&&(r=t[1]))),e.exports=r&&+r},"52af":function(e,a,n){"use strict";n.r(a);var t=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Select")]),e._m(0),e._m(1),n("h2",[e._v("Basic example")]),n("Playground",{attrs:{markup:e.basic,config:e.config}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.label,expression:"label"}],on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.label=a.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:""}},[e._v("Select a label mode")]),n("option",{attrs:{selected:"",value:"show"}},[e._v("With label")]),n("option",{attrs:{value:"hide"}},[e._v("Without label")]),n("option",{attrs:{value:"responsive"}},[e._v("Responsive")])])]),n("hr"),n("h2",[e._v("With filter")]),n("p",[e._v("This option enhances the native select filter by providing an additional search field where the user can type his own search string. The filter reduces the amount of option items by searching for the typed characters starting with the first character of the options text.")]),n("Playground",{attrs:{markup:e.withFilter,config:e.config}}),n("hr"),n("h2",[e._v("With optgroups")]),n("Playground",{attrs:{markup:e.withOptgroups,config:e.config}}),n("hr"),n("h2",[e._v("Dropdown direction")]),n("Playground",{attrs:{markup:e.direction,config:e.config}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.dropdownDirection,expression:"dropdownDirection"}],on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.dropdownDirection=a.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:""}},[e._v("Select a dropdown mode")]),n("option",{attrs:{selected:"",value:"down"}},[e._v("Direction down")]),n("option",{attrs:{value:"up"}},[e._v("Direction up")]),n("option",{attrs:{value:"auto"}},[e._v("Direction auto")])])]),n("hr"),n("h2",[e._v("With description text")]),e._m(2),n("Playground",{attrs:{markup:e.withDescriptionText,config:e.config}}),n("hr"),n("h2",[e._v("Disabled")]),n("Playground",{attrs:{markup:e.disabled,config:e.config}}),n("hr"),n("h2",[e._v("Validation states")]),e._m(3),n("Playground",{attrs:{markup:e.validationStates,config:e.config}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.state,expression:"state"}],on:{change:function(a){var n=Array.prototype.filter.call(a.target.options,(function(e){return e.selected})).map((function(e){var a="_value"in e?e._value:e.value;return a}));e.state=a.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:""}},[e._v("Select a validation state")]),n("option",{attrs:{value:"error"}},[e._v("Error")]),n("option",{attrs:{value:"success"}},[e._v("Success")]),n("option",{attrs:{value:"none"}},[e._v("None")])])]),n("hr"),n("h2",[e._v("Slots")]),e._m(4),n("Playground",{attrs:{markup:e.slots,config:e.config}})],1)},r=[function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("p",[e._v("The "),n("strong",[e._v("Select")]),e._v(" component is a styling wrapper for the native HTML "),n("code",[e._v("<select>")]),e._v(" form element. To improve accessibility on devices with touch support, it defaults to the native user interface behaviour.")])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("p",[e._v("A "),n("code",[e._v("label")]),e._v(" is a caption which informs the user what information a particular form field is asking for. The "),n("strong",[e._v("Select Wrapper")]),e._v(" component can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("p",[e._v("A description text can be added to explain the meaning of a specific form field. It's meant to be a textual enhancement of the label text and is technically connected with the "),n("code",[e._v("hide-label")]),e._v(" property.")])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("p",[e._v("The "),n("strong",[e._v("Select Wrapper")]),e._v(" component supports the visualisation of inline validation.")])},function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("p",[e._v("Sometimes it's useful to be able to render markup (e.g. an anchor tag) for "),n("code",[e._v("label")]),e._v(" or "),n("code",[e._v("message")]),e._v(". Therefore a named slot can be used. Make sure "),n("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot). For named slots only "),n("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"}},[e._v("phrasing content")]),e._v(" is allowed. Please make sure to set the corresponding "),n("strong",[e._v("aria")]),e._v(" attributes.")])}],o=(n("d86f"),n("ef14"),n("cfce"),n("6559"),n("75a4"),n("3835")),i=n("d4ec"),s=n("bee2"),c=n("262e"),l=n("2caf"),u=n("53ca"),d=n("2b0e"),p=n("2fe1"),f=function(e,a,n,t){var r,o=arguments.length,i=o<3?a:null===t?t=Object.getOwnPropertyDescriptor(a,n):t;if("object"===("undefined"===typeof Reflect?"undefined":Object(u["a"])(Reflect))&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,a,n,t);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(i=(o<3?r(i):o>3?r(a,n,i):r(a,n))||i);return o>3&&i&&Object.defineProperty(a,n,i),i},h=function(e){return e.map((function(e){return'<option value="'.concat(e,'">Option ').concat(e.toUpperCase(),"</option>")}))},m=function(e){Object(c["a"])(n,e);var a=Object(l["a"])(n);function n(){var e;return Object(i["a"])(this,n),e=a.apply(this,arguments),e.config={themeable:!0},e.label="show",e.state="error",e.dropdownDirection="down",e.withOptgroups='<p-select-wrapper label="Some label">\n  <select name="some-name">\n    <optgroup label="Some optgroup label 1">\n      '.concat(h(["a","b","c","d","e","f"]).join("\n      "),'\n    </optgroup>\n    <optgroup label="Some optgroup label 2">\n      ').concat(h(["g","h","i"]).join("\n      "),"\n    </optgroup>\n  </select>\n</p-select-wrapper>"),e.direction='<p-select-wrapper label="Some label" dropdown-direction="'.concat(e.dropdownDirection,'">\n  <select name="some-name">\n    ').concat(h(["a","b","c","d","e","f"]).join("\n    "),"\n  </select>\n</p-select-wrapper>"),e.withDescriptionText='<p-select-wrapper label="Some label" description="Some description">\n  <select name="some-name">\n    '.concat(h(["a","b","c"]).join("\n    "),"\n  </select>\n</p-select-wrapper>"),e.disabled='<p-select-wrapper label="Some label">\n  <select name="some-name" disabled>\n    '.concat(h(["a","b","c"]).join("\n    "),"\n  </select>\n</p-select-wrapper>"),e.slots='<p-select-wrapper state="error">\n  <span slot="label" id="some-label-id">Some label with a <a href="https://designsystem.porsche.com">link</a>.</span>\n  <span slot="description">Some description with a <a href="https://designsystem.porsche.com">link</a>.</span>\n  <select name="some-name" aria-labelledby="some-label-id" aria-describedby="some-message-id">\n    '.concat(h(["a","b","c"]).join("\n    "),'\n  </select>\n  <span slot="message" id="some-message-id">Some error message with a <a href="https://designsystem.porsche.com">link</a>.</span>\n</p-select-wrapper>'),e}return Object(s["a"])(n,[{key:"basic",get:function(){var e='hide-label="'.concat("hide"===this.label?"true":"responsive"===this.label?"{ base: true, l: false }":"false",'"');return'<p-select-wrapper label="Some label" '.concat(e,'>\n  <select name="some-name">\n    ').concat(h(["a","b","c","d","e","f"]).join("\n    "),"\n  </select>\n</p-select-wrapper>")}},{key:"withFilter",get:function(){var e={AF:"Afghanistan",AX:"Åland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia, Plurinational State of",BQ:"Bonaire, Sint Eustatius and Saba",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, the Democratic Republic of the",CK:"Cook Islands",CR:"Costa Rica",CI:"Côte d'Ivoire",HR:"Croatia",CU:"Cuba",CW:"Curaçao",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",VA:"Holy See (Vatican City State",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic of",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"Korea, Democratic People's Republic of",KR:"Korea, Republic of",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia, the former Yugoslav Republic of",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Moldova, Republic of",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory, Occupied",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Réunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",BL:"Saint Barthélemy",SH:"Saint Helena, Ascension and Tristan da Cunha",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin (French part",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten (Dutch part",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan, Province of China",TJ:"Tajikistan",TZ:"Tanzania, United Republic of",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela, Bolivarian Republic of",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};return'<p-select-wrapper filter="true" label="Some label">\n  <select name="some-name">\n    '.concat(Object.entries(e).map((function(e){var a=Object(o["a"])(e,2),n=a[0],t=a[1];return'<option value="'.concat(n,'"').concat("AQ"===n?" disabled":"",">").concat(t,"</option>")})).join("\n    "),"\n  </select>\n</p-select-wrapper>")}},{key:"validationStates",get:function(){var e='message="'.concat("none"!==this.state?"Some ".concat(this.state," validation message."):"",'"');return'<p-select-wrapper label="Some label" state="'.concat(this.state,'" ').concat(e,'>\n  <select name="some-name" :aria-invalid="state === \'error\'">\n    ').concat(h(["a","b","c"]).join("\n    "),"\n  </select>\n</p-select-wrapper>")}}]),n}(d["a"]);m=f([p["b"]],m);var v=m,b=v,g=n("2877"),S=Object(g["a"])(b,t,r,!1,null,null,null);a["default"]=S.exports},6009:function(e,a,n){var t=n("d4cb"),r=n("0c47"),o=n("378c"),i=n("e129").f,s=function(e){return function(a){var n,s=o(a),c=r(s),l=c.length,u=0,d=[];while(l>u)n=c[u++],t&&!i.call(s,n)||d.push(e?[n,s[n]]:s[n]);return d}};e.exports={entries:s(!0),values:s(!1)}},"64e4":function(e,a,n){var t=n("5428");e.exports=t("navigator","userAgent")||""},6559:function(e,a,n){var t=n("6b1d"),r=n("6009").entries;t({target:"Object",stat:!0},{entries:function(e){return r(e)}})},"6a86":function(e,a,n){var t=n("7526"),r=n("c6de"),o=n("7d53"),i=o("species");e.exports=function(e,a){var n;return r(e)&&(n=e.constructor,"function"!=typeof n||n!==Array&&!r(n.prototype)?t(n)&&(n=n[i],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===a?0:a)}},"75a4":function(e,a,n){var t=n("6b1d"),r=n("72df"),o=n("378c"),i=n("185a").f,s=n("d4cb"),c=r((function(){i(1)})),l=!s||c;t({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(e,a){return i(o(e),a)}})},"7f8a":function(e,a,n){"use strict";var t=n("72df");e.exports=function(e,a){var n=[][e];return!!n&&t((function(){n.call(null,a||function(){throw 1},1)}))}},8697:function(e,a){e.exports=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e}},c6de:function(e,a,n){var t=n("6a61");e.exports=Array.isArray||function(e){return"Array"==t(e)}},ce71:function(e,a,n){var t=n("d4cb"),r=n("72df"),o=n("f1a7"),i=Object.defineProperty,s={},c=function(e){throw e};e.exports=function(e,a){if(o(s,e))return s[e];a||(a={});var n=[][e],l=!!o(a,"ACCESSORS")&&a.ACCESSORS,u=o(a,0)?a[0]:c,d=o(a,1)?a[1]:void 0;return s[e]=!!n&&!r((function(){if(l&&!t)return!0;var e={length:-1};l?i(e,1,{enumerable:!0,get:c}):e[1]=1,n.call(e,u,d)}))}},cfce:function(e,a,n){"use strict";var t=n("6b1d"),r=n("d054").map,o=n("189b"),i=n("ce71"),s=o("map"),c=i("map");t({target:"Array",proto:!0,forced:!s||!c},{map:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}})},d054:function(e,a,n){var t=n("2117"),r=n("83a6"),o=n("37d1"),i=n("b495"),s=n("6a86"),c=[].push,l=function(e){var a=1==e,n=2==e,l=3==e,u=4==e,d=6==e,p=5==e||d;return function(f,h,m,v){for(var b,g,S=o(f),y=r(S),w=t(h,m,3),M=i(y.length),_=0,A=v||s,C=a?A(f,M):n?A(f,0):void 0;M>_;_++)if((p||_ in y)&&(b=y[_],g=w(b,_,S),e))if(a)C[_]=g;else if(g)switch(e){case 3:return!0;case 5:return b;case 6:return _;case 2:c.call(C,b)}else if(u)return!1;return d?-1:l||u?u:C}};e.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},d86f:function(e,a,n){"use strict";var t=n("6b1d"),r=n("72df"),o=n("c6de"),i=n("7526"),s=n("37d1"),c=n("b495"),l=n("dac6"),u=n("6a86"),d=n("189b"),p=n("7d53"),f=n("4fed"),h=p("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",b=f>=51||!r((function(){var e=[];return e[h]=!1,e.concat()[0]!==e})),g=d("concat"),S=function(e){if(!i(e))return!1;var a=e[h];return void 0!==a?!!a:o(e)},y=!b||!g;t({target:"Array",proto:!0,forced:y},{concat:function(e){var a,n,t,r,o,i=s(this),d=u(i,0),p=0;for(a=-1,t=arguments.length;a<t;a++)if(o=-1===a?i:arguments[a],S(o)){if(r=c(o.length),p+r>m)throw TypeError(v);for(n=0;n<r;n++,p++)n in o&&l(d,p,o[n])}else{if(p>=m)throw TypeError(v);l(d,p++,o)}return d.length=p,d}})},dac6:function(e,a,n){"use strict";var t=n("083f"),r=n("abdf"),o=n("9618");e.exports=function(e,a,n){var i=t(a);i in e?r.f(e,i,o(0,n)):e[i]=n}},ef14:function(e,a,n){"use strict";var t=n("6b1d"),r=n("83a6"),o=n("378c"),i=n("7f8a"),s=[].join,c=r!=Object,l=i("join",",");t({target:"Array",proto:!0,forced:c||!l},{join:function(e){return s.call(o(this),void 0===e?",":e)}})}}]);
//# sourceMappingURL=chunk-2d3a201d.53a73162.js.map