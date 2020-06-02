(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ade25652"],{c257:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vmark"},[r("h1",[e._v("Text Field")]),r("p",[e._v("Use Text Fields in forms to help users enter text. Text Fields should always be accompanied by labels, helping the user to understand the type of input that is required.")]),r("hr"),r("h2",[e._v("Variants")]),r("h3",[e._v("Basic")]),r("p",[e._v("The basic version of the Text Field simply consists of a descriptive text label and an input field.")]),e._m(0),r("p",[r("p-text-field-wrapper",{attrs:{label:"Some label"}},[r("input",{attrs:{type:"text",name:"some-name",placeholder:"Some placeholder text"}})])],1),e._m(1),r("table",[e._m(2),r("tbody",[r("tr",[e._m(3),r("td",[r("p-text-field-wrapper",{attrs:{label:"Some label"}},[r("input",{attrs:{type:"number",name:"some-name","aria-label":"Some label"}})])],1)]),r("tr",[e._m(4),r("td",[r("p-text-field-wrapper",{attrs:{label:"Some label"}},[r("input",{attrs:{type:"email",name:"some-name","aria-label":"Some label"}})])],1)]),r("tr",[e._m(5),r("td",[r("p-text-field-wrapper",{attrs:{label:"Some label"}},[r("input",{attrs:{type:"tel",name:"some-name","aria-label":"Some label"}})])],1)]),r("tr",[e._m(6),r("td",[r("p-text-field-wrapper",{attrs:{label:"Some label"}},[r("input",{attrs:{type:"url",name:"some-name","aria-label":"Some label"}})])],1)]),r("tr",[e._m(7),r("td",[r("p-text-field-wrapper",{attrs:{label:"Some label"}},[r("input",{attrs:{type:"date",name:"some-name"}})])],1)]),r("tr",[e._m(8),r("td",[r("p-text-field-wrapper",{attrs:{label:"Some label"}},[r("input",{attrs:{type:"time",name:"some-name"}})])],1)]),r("tr",[e._m(9),r("td",[r("p-text-field-wrapper",{attrs:{label:"Some label"}},[r("input",{attrs:{type:"month",name:"some-name"}})])],1)]),r("tr",[e._m(10),r("td",[r("p-text-field-wrapper",{attrs:{label:"Some label"}},[r("input",{attrs:{type:"week",name:"some-name"}})])],1)])])]),r("h3",[e._v("Password")]),r("p",[e._v("Password fields have the ability to hide/show the typed password.")]),r("p",[r("p-text-field-wrapper",{attrs:{label:"Some label"}},[r("input",{attrs:{type:"password",name:"some-name",value:"some password"}})])],1),r("h3",[e._v("Search")]),r("p",[e._v("Search fields have the ability to activate the search function.")]),r("h3",[e._v("Pure")]),r("p",[e._v("The Pure variant (without label) is only to be used if the context clearly describes the purpose of the Text Field and no further explanation is required.")]),r("p",[r("p-text-field-wrapper",{attrs:{label:"Some label","hide-label":"true"}},[r("input",{attrs:{type:"text",name:"some-name"}})])],1),r("h3",[e._v("Description text")]),e._m(11),r("p",[r("p-text-field-wrapper",{attrs:{label:"Some label",description:"Some description"}},[r("input",{attrs:{type:"text",name:"some-name"}})])],1),r("hr"),r("h2",[e._v("States")]),r("p",[e._v("All Text Fields types are available in the following states:")]),e._m(12),r("hr"),r("h2",[e._v("Styling")]),r("h3",[e._v("Label")]),r("p",[e._v("The label text (always in copytext) gives the user an information about the option that can be selected. Try to keep the label short and descriptive (one word or two).")]),r("h3",[e._v("Input area")]),r("p",[e._v("Enables users to enter a single line of text.")]),r("h3",[e._v("Width")]),e._m(13),r("h3",[e._v("Validation and error")]),e._m(14),r("h3",[e._v("Spacing")]),e._m(15),r("hr"),r("h2",[e._v("Usage")]),r("h3",[e._v("Mandatory and optional fields")]),r("p",[e._v("Generally, it’s recommended to avoid optional fields in forms due to the fact that we should not give the user the feeling of having to give information that is not absolutely necessary. That being said, we would then have to label almost every (mandatory) form field with the well-known asterisk accompanied by a global explanation (“All fields marked with * ...“). In order to give the Porsche forms a more positive connotation and for the reason that users are more likely to provide voluntary information, we recommend to mark only optional fields by adding “(optional)” next to the input label.")]),r("p",[e._v("By doing so…")]),e._m(16),r("p",[r("p-text-field-wrapper",{attrs:{label:"Some label (optional)"}},[r("input",{attrs:{type:"text",name:"some-name"}})])],1),r("h3",[e._v("Disabled state")]),r("p",[e._v("All types of Text Field are available as disabled state. However, disabled states (e.g. read only) should be avoided whenever possible, as they always tend to disrupt the user and break the user flow. Keep in mind: “The best way [to] prevent user error is to make sure that the use cannot make errors in the first place (…).” (Donald A. Norman, 2002)")]),r("div",{staticStyle:{background:"#F2F2F2",width:"100%","margin-top":"64px","padding-top":"32px","padding-left":"42px","padding-bottom":"42px"}},[r("p-headline",{staticStyle:{"margin-bottom":"24px"},attrs:{variant:"headline-3",tag:"h3"}},[e._v("Examples")]),r("img",{attrs:{src:a("c61a"),alt:"Examples for text field usage"}})],1),r("h2",[e._v("Don'ts")]),r("h3",[e._v("Long text inputs")]),r("p",[e._v("Don't use the Text Field component if you need to allow users to enter longer text. In this case, you should use the Textarea component.")]),r("hr"),r("h2",[e._v("Related Components")]),e._m(17)])},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Placeholder text disappears when a user types in the input. If a user doesn’t enter a value and moves to another part of a form, the placeholder text reappears in the former text box. However, using placeholder text is not recommended since users can misinterpret it as already filled in content. Please find more information on providing extra information in the "),a("a",{attrs:{href:"#/patterns/forms"}},[e._v("Form pattern guideline")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",[e._v("You can choose between several input types for the basic Text Field.")]),a("br"),e._v(" Each one comes either with a formatting preset or with an automatic validation for the dedicated input type resulting in an error in case of a non-matching input.")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",[a("tr",[a("th",[a("strong",[e._v("Input type")])]),a("th",[a("strong",[e._v("Example")])])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("strong",[e._v("Number")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("strong",[e._v("Email")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("strong",[e._v("Phone number")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("strong",[e._v("URL")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("strong",[e._v("Date")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("strong",[e._v("Time")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("strong",[e._v("Month")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("strong",[e._v("Week")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Sometimes it’s helpful for the user to get further information on the input. This can be done by providing a description text displayed openly and directly outside the form field. Please find more information on providing extra information in the "),a("a",{attrs:{href:"#/patterns/forms"}},[e._v("Form pattern guideline")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v("default")]),a("li",[e._v("disabled")]),a("li",[e._v("hover")]),a("li",[e._v("read only")]),a("li",[e._v("focus")]),a("li",[e._v("error")]),a("li",[e._v("success")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Text fields have no specific width. Depending on the layout you can set the width either depending on the length of the text or by adjusting it to the grid. Baymard Institute usability study showed that: “If a field was too long or too short, the test subjects started to wonder if they had misunderstood the label (…).” "),a("a",{attrs:{href:"https://baymard.com/blog/form-field-usability-matching-user-expectations"}},[e._v("Baymard Institute")]),e._v(" The initial width of the sketch symbol is set to 272 px (corresponds to the grid width on viewport XS). For further information we recommend to read the "),a("a",{attrs:{href:"#/patterns/forms"}},[e._v("Form pattern guideline")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Validation text for a field is placed right below the field box in order to make it clear for the user which text field the validation belongs to. Please find more information on providing extra information in the "),a("a",{attrs:{href:"#/patterns/forms"}},[e._v("Form pattern guideline")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v('According to the "law of proximity" in Gestalt psychology ('),a("a",{attrs:{href:"https://lawsofux.com/law-of-proximity"}},[e._v("Laws of UX")]),e._v(") objects that are near or proximate to each other tend to be grouped together. Please find more information on providing extra information in the "),a("a",{attrs:{href:"#/patterns/forms"}},[e._v("Form pattern guideline")]),e._v(".")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[e._v('… users feel less overwhelmed as there are way less "(optional)" labels than there would be asterisks.')]),a("li",[e._v('… users do not have to read a global explanation ("All fields marked with * ...").')]),a("li",[e._v("… the asterisk is obsolete or freely available for other purposes, e.g. footnotes.")]),a("li",[e._v("… forms not only seem to be more positive, but also look more cleaned up in general.")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"#/components/form/textarea"}},[e._v("Textarea")])])])}],n=a("2877"),i={},l=Object(n["a"])(i,r,o,!1,null,null,null);t["default"]=l.exports},c61a:function(e,t,a){e.exports=a.p+"img/form-text-field-examples.c4eb8232.png"}}]);
//# sourceMappingURL=chunk-ade25652.d5d20279.js.map