(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c8be3"],{"55d1":function(e,a,t){"use strict";t.r(a);var n=function(){var e=this,a=e._self._c;e._self._setupProxy;return a("div",{staticClass:"vmark"},[a("ComponentHeading",{attrs:{name:"Select Wrapper"}}),e._m(0),e._m(1),a("TableOfContents"),a("h2",[e._v("Basic example")]),a("Playground",{attrs:{markup:e.hideLabelMarkup,config:e.config}},[a("PlaygroundSelect",{attrs:{values:e.hideLabels,name:"hideLabel"},model:{value:e.hideLabel,callback:function(a){e.hideLabel=a},expression:"hideLabel"}})],1),a("hr"),a("h2",[e._v("Basic example without preselection")]),e._m(2),a("Playground",{attrs:{markup:e.requiredMarkup,config:e.config}},[a("PlaygroundSelect",{attrs:{values:e.requireds,name:"required"},model:{value:e.required,callback:function(a){e.required=a},expression:"required"}})],1),a("hr"),a("h2",[e._v("With filter")]),a("p",[e._v("This option enhances the native select filter by providing an additional search field where the user can type their own search string. The filter reduces the amount of option items by searching for the typed characters starting with the first character of the options text.")]),a("Playground",{attrs:{markup:e.withFilter,config:e.config}}),a("hr"),a("h2",[e._v("With optgroups")]),a("Playground",{attrs:{markup:e.withOptgroups,config:e.config}}),a("hr"),a("h2",[e._v("Dropdown direction")]),a("Playground",{attrs:{markup:e.dropdownDirectionMarkup,config:e.config}},[a("PlaygroundSelect",{attrs:{values:e.dropdownDirections,name:"dropdownDirection"},model:{value:e.dropdownDirection,callback:function(a){e.dropdownDirection=a},expression:"dropdownDirection"}})],1),a("hr"),a("h2",[e._v("With description text")]),e._m(3),a("Playground",{attrs:{markup:e.withDescriptionText,config:e.config}}),a("hr"),a("h2",[e._v("Required")]),a("Playground",{attrs:{markup:e.requiredBasic,config:e.config}}),a("hr"),a("h2",[e._v("Disabled")]),a("Playground",{attrs:{markup:e.disabled,config:e.config}}),a("h3",[a("A11yIcon"),e._v(" Accessibility hints")],1),e._m(4),a("hr"),a("h2",[e._v("Validation states")]),e._m(5),a("Playground",{attrs:{markup:e.stateMarkup,config:e.config}},[a("PlaygroundSelect",{attrs:{values:e.states,name:"state"},model:{value:e.state,callback:function(a){e.state=a},expression:"state"}})],1),a("hr"),a("h2",[e._v("Slots")]),e._m(6),a("Playground",{attrs:{markup:e.slots,config:e.config}}),a("h3",[a("A11yIcon"),e._v(" Accessibility hints")],1),e._m(7),e._m(8),a("hr"),a("h2",[e._v("Within table")]),e._m(9)],1)},i=[function(){var e=this,a=e._self._c;e._self._setupProxy;return a("p",[e._v("The "),a("code",[e._v("p-select-wrapper")]),e._v(" component is a styling wrapper for the native HTML "),a("code",[e._v("<select>")]),e._v(" form element. To improve accessibility on devices with touch support, it defaults to the native user interface behaviour.")])},function(){var e=this,a=e._self._c;e._self._setupProxy;return a("p",[e._v("A "),a("code",[e._v("label")]),e._v(" is a caption which informs the user what information a particular form field is asking for. The "),a("code",[e._v("p-select-wrapper")]),e._v(" component can be used with or without a label but it's recommended to keep the label visible for better accessibility whenever possible. When used without a label, it's best practice to provide a descriptive label text for screen readers.")])},function(){var e=this,a=e._self._c;e._self._setupProxy;return a("p",[e._v("To ensure the user makes a conscious choice, use "),a("code",[e._v("<option></option>")]),e._v(" as placeholder. If the select is required, use "),a("code",[e._v("<option hidden></option>")]),e._v(" to enforce a selection.")])},function(){var e=this,a=e._self._c;e._self._setupProxy;return a("p",[e._v("A description text can be added to explain the meaning of a specific form field. It's meant to be a textual enhancement of the label text and is technically connected with the "),a("code",[e._v("hide-label")]),e._v(" property.")])},function(){var e=this,a=e._self._c;e._self._setupProxy;return a("p",[e._v("In general, you should "),a("strong",[e._v("prevent")]),e._v(" using the "),a("code",[e._v('disabled="true"')]),e._v(" state. Disabled elements are not reachable (focusable) anymore and can be missed by screen reader users. They can be confusing for sighted users as well by not pointing out why these elements are disabled. A good practice when to use the disabled state is during "),a("strong",[e._v("form submission")]),e._v(" to prevent changes while this process is performed.")])},function(){var e=this,a=e._self._c;e._self._setupProxy;return a("p",[e._v("The "),a("code",[e._v("p-select-wrapper")]),e._v(" component supports the visualisation of inline validation.")])},function(){var e=this,a=e._self._c;e._self._setupProxy;return a("p",[e._v("Sometimes it's useful to be able to render markup (e.g. an anchor tag) for "),a("code",[e._v("label")]),e._v(" or "),a("code",[e._v("message")]),e._v("."),a("br"),e._v(" Therefore, a named slot can be used. Make sure "),a("strong",[e._v("not")]),e._v(" to define the corresponding property on the host element when a named slot is used (because a property definition is preferred over a named slot). For named slots only "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Content_categories#Phrasing_content"}},[e._v("phrasing content")]),e._v(" is allowed.")])},function(){var e=this,a=e._self._c;e._self._setupProxy;return a("p",[e._v("If using "),a("strong",[e._v("slotted contents")]),e._v(" to serve form elements, make sure to provide the right "),a("strong",[e._v("ARIA attributes")]),e._v(" to give screen reader users the corresponding information:")])},function(){var e=this,a=e._self._c;e._self._setupProxy;return a("ol",[a("li",[e._v("Add a unique ID to the "),a("code",[e._v('slot="label"')]),e._v(" element")]),a("li",[e._v("Add a unique ID to the "),a("code",[e._v('slot="message"')]),e._v(" element (if they are created)")]),a("li",[e._v("Add corresponding "),a("code",[e._v('aria-labelledby="some-label-id"')]),e._v(" to the "),a("code",[e._v("select")]),e._v(" element which points to the "),a("code",[e._v("label")]),e._v(" ID")]),a("li",[e._v("Add corresponding "),a("code",[e._v('aria-describedby="some-description-id some-message-id"')]),e._v(" to the "),a("code",[e._v("select")]),e._v(" element which points to both, the "),a("code",[e._v("description")]),e._v(" ID (if set) and the "),a("code",[e._v("message")]),e._v(" ID when the (error/success) message appears")])])},function(){var e=this,a=e._self._c;e._self._setupProxy;return a("p",[e._v("When a "),a("code",[e._v("p-select-wrapper")]),e._v(" is used within the "),a("code",[e._v("p-table")]),e._v(" component the dropdown will automatically switch to a native popover behavior. This will prevent the dropdown of the "),a("code",[e._v("p-select-wrapper")]),e._v(" from being cut off when it overlaps with the component's scroll container. The "),a("code",[e._v("p-select-wrapper")]),e._v(" will be automatically closed when the user scrolls within the table. Have a look at our "),a("a",{attrs:{href:"components/table/examples#advanced-table"}},[e._v("advanced example page")]),e._v(" of "),a("code",[e._v("p-table")]),e._v(" component.")])}],r=(t("7b4b"),t("2b0e")),o=t("2fe1"),s=t("70ab");const l=["down","up"],c=[...l,"auto"];var d=function(e,a,t,n){var i,r=arguments.length,o=r<3?a:null===n?n=Object.getOwnPropertyDescriptor(a,t):n;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)o=Reflect.decorate(e,a,t,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(o=(r<3?i(o):r>3?i(a,t,o):i(a,t))||o);return r>3&&o&&Object.defineProperty(a,t,o),o};const p=e=>e.map(e=>`<option value="${e}">Option ${e.toUpperCase()}</option>`);let u=class extends r["a"]{constructor(){super(...arguments),this.config={themeable:!0,overflowX:"visible"},this.hideLabel=!1,this.hideLabels=[!1,!0,"{ base: true, l: false }"],this.required=!1,this.requireds=[!1,!0],this.withOptgroups=`<p-select-wrapper label="Some label">\n  <select name="some-name">\n    <optgroup label="Some optgroup label 1">\n      ${p(["a","b","c","d","e","f"]).join("\n      ")}\n    </optgroup>\n    <optgroup label="Some optgroup label 2">\n      ${p(["g","h","i"]).join("\n      ")}\n    </optgroup>\n  </select>\n</p-select-wrapper>`,this.dropdownDirection="auto",this.dropdownDirections=c,this.withDescriptionText=`<p-select-wrapper label="Some label" description="Some description">\n  <select name="some-name">\n    ${p(["a","b","c"]).join("\n    ")}\n  </select>\n</p-select-wrapper>`,this.requiredBasic=`<p-select-wrapper label="Some label">\n  <select name="some-name" required>\n    ${p(["a","b","c"]).join("\n    ")}\n  </select>\n</p-select-wrapper>`,this.disabled=`<p-select-wrapper label="Some label">\n  <select name="some-name" disabled>\n    ${p(["a","b","c"]).join("\n    ")}\n  </select>\n</p-select-wrapper>`,this.state="error",this.states=s["d"],this.slots=`<p-select-wrapper state="error">\n  <span slot="label" id="some-label-id">Some label with a <a href="https://designsystem.porsche.com">link</a>.</span>\n  <span slot="description" id="some-description-id">Some description with a <a href="https://designsystem.porsche.com">link</a>.</span>\n  <select name="some-name" aria-labelledby="some-label-id" aria-describedby="some-description-id some-message-id">\n    ${p(["a","b","c"]).join("\n    ")}\n  </select>\n  <span slot="message" id="some-message-id">Some error message with a <a href="https://designsystem.porsche.com">link</a>.</span>\n</p-select-wrapper>`}get hideLabelMarkup(){return`<p-select-wrapper label="Some label" hide-label="${this.hideLabel}">\n  <select name="some-name">\n    ${p(["a","b","c","d","e","f"]).join("\n    ")}\n  </select>\n</p-select-wrapper>`}get requiredMarkup(){const e=this.required?"<option hidden></option>":"<option></option>",a=this.required?" required":"";return`<p-select-wrapper label="Some label">\n  <select name="some-name"${a}>\n    ${e}\n    ${p(["a","b","c"]).join("\n    ")}\n  </select>\n</p-select-wrapper>`}get withFilter(){const e={AF:"Afghanistan",AX:"Åland Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia, Plurinational State of",BQ:"Bonaire, Sint Eustatius and Saba",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cape Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo, the Democratic Republic of the",CK:"Cook Islands",CR:"Costa Rica",CI:"Côte d'Ivoire",HR:"Croatia",CU:"Cuba",CW:"Curaçao",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",VA:"Holy See (Vatican City State",HN:"Honduras",HK:"Hong Kong",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran, Islamic Republic of",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"Korea, Democratic People's Republic of",KR:"Korea, Republic of",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao",MK:"Macedonia, the former Yugoslav Republic of",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia, Federated States of",MD:"Moldova, Republic of",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestinian Territory, Occupied",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"Réunion",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",BL:"Saint Barthélemy",SH:"Saint Helena, Ascension and Tristan da Cunha",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin (French part",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten (Dutch part",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan, Province of China",TJ:"Tajikistan",TZ:"Tanzania, United Republic of",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela, Bolivarian Republic of",VN:"Viet Nam",VG:"Virgin Islands, British",VI:"Virgin Islands, U.S",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"};return`<p-select-wrapper filter="true" label="Some label">\n<select name="some-name">\n  ${Object.entries(e).map(([e,a])=>`<option value="${e}"${"AQ"===e?" disabled":""}>${a}</option>`).join("\n    ")}\n</select>\n</p-select-wrapper>`}get dropdownDirectionMarkup(){return`<p-select-wrapper label="Some label" dropdown-direction="${this.dropdownDirection}">\n  <select name="some-name">\n    ${p(["a","b","c","d","e","f"]).join("\n    ")}\n  </select>\n</p-select-wrapper>`}get stateMarkup(){const e=`message="${"none"!==this.state?`Some ${this.state} validation message.`:""}"`;return`<p-select-wrapper label="Some label" state="${this.state}" ${e}>\n  <select name="some-name" aria-invalid="${"error"===this.state}">\n    ${p(["a","b","c"]).join("\n    ")}\n  </select>\n</p-select-wrapper>`}};u=d([o["b"]],u);var h=u,m=h,b=t("2877"),v=Object(b["a"])(m,n,i,!1,null,null,null);a["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2d0c8be3.8d50fb7a.js.map