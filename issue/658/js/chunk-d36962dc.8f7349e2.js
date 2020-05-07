(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d36962dc"],{"6a22":function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"vmark"},[r("h1",[e._v("Select")]),r("p",[e._v("A Select is used to trigger an action based on the selected option, to choose one option from a list of items or to navigate the user to a new position. Take the following aspects into consideration when deciding whether to use a Select or not:")]),e._m(0),r("hr"),r("h2",[e._v("Variants")]),r("h3",[e._v("Pure (without label)")]),r("p",[e._v("The component Pure (without label) is only used if the context clearly describes what the component Pure is to be used for and no further explanation is required.")]),r("p",[r("p-select-wrapper",{attrs:{label:"Some label","hide-label":"true"}},[r("select",{attrs:{name:"some-name"}},[r("option",{attrs:{value:"a"}},[e._v("Option A")]),r("option",{attrs:{value:"b"}},[e._v("Option B")]),r("option",{attrs:{value:"c"}},[e._v("Option C")])])])],1),r("h3",[e._v("Placeholder")]),e._m(1),r("hr"),r("h2",[e._v("States")]),r("p",[e._v("The Select component is available in the following states:")]),e._m(2),r("hr"),r("h2",[e._v("Styling")]),r("h3",[e._v("Label")]),r("p",[e._v("The label text (always in copytext) gives the user an information about the option that can be selected. Try to keep the label short and descriptive (a word or two).")]),r("h3",[e._v("Width")]),e._m(3),r("h3",[e._v("Help text")]),e._m(4),r("h3",[e._v("Validation and error")]),e._m(5),r("h3",[e._v("Spacing")]),e._m(6),r("hr"),r("h2",[e._v("Usage")]),r("h3",[e._v("Sorting")]),r("p",[e._v("It's recommended to use common sort order for menu items (frequency of use, alpha or numeric).")]),r("h3",[e._v("Disabled state")]),r("p",[e._v('All Selects are available in disabled state. However, disabled states should be avoided whenever possible, as they always tend to disrupt the user and break the user flow. Keep in mind: "The best way [to] prevent user error is to make sure that the use cannot make errors in the first place (…)." (Donald A. Norman, 2002)')]),r("h2",[e._v("Interaction")]),r("p",[e._v("The whole Select area is clickable. They can be removed by clicking outside the Select element or on the parent element.")]),r("div",{staticStyle:{background:"#F2F2F2",width:"100%","margin-top":"64px","padding-top":"32px","padding-left":"42px","padding-bottom":"42px"}},[r("p-headline",{staticStyle:{"margin-bottom":"24px"},attrs:{variant:"headline-3",tag:"h3"}},[e._v("Examples")]),r("img",{attrs:{src:o("9f2d"),alt:"Examples for textareas"}})],1),r("h2",[e._v("Don'ts")]),r("h3",[e._v("Content")]),r("p",[e._v("Avoid Select boxes for data that is highly familiar such as the day, month or year. Having to find these options in a long menu is tedious, breaks the previous guideline and can create even more work for users.")]),e._m(7),r("h3",[e._v("Number of options in view")]),r("p",[e._v("Very long Select boxes that require scrolling make it impossible for users to see all their choices in one glance. However this cannot always be avoided. Therefore make sure that when open there is only a maximum of 7 elements in the field of view without having to scroll.")]),e._m(8),r("h3",[e._v("Text only")]),r("p",[e._v("Never use images or symbols within a selection list.")]),r("hr"),r("h2",[e._v("Related Components")]),e._m(9)])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("strong",[e._v("The user's state of knowledge:")]),e._v(" Do the users know their input without having to look at a list of the different options? If the answer is 'no' it might be better to use a component showing the options directly (such as Radio Buttons).")]),o("li",[o("strong",[e._v("Number of options:")]),e._v(" Generally, a limit of 5-10 options is recommended. "),o("a",{attrs:{href:"https://baymard.com/blog/drop-down-usability"}},[e._v("Baymard Institute")]),e._v(" However, it depends on the individual context. If several options are offered it makes sense to offer an autocomplete.")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("Placeholder text disappears when a user types in the input. If a user doesn’t enter a value and moves to another part of a form, the placeholder text reappears in the former text box. However, using placeholder text is not recommended since users can misinterpret it as already filled in content. For further information we recommend to read the general form guideline. "),o("a",{attrs:{href:"#/patterns/forms"}},[e._v("Forms Guideline")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[e._v("default")]),o("li",[e._v("disabled")]),o("li",[e._v("hover")]),o("li",[e._v("focus")]),o("li",[e._v("error")]),o("li",[e._v("success")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("The Select has no specific width. Depending on the layout you can set the width either depending on the length of the text or by adjusting it to the grid. Baymard Institute usability study showed that: “If a field was too long or too short, the test subjects started to wonder if they had misunderstood the label (…).” "),o("a",{attrs:{href:"https://baymard.com/blog/form-field-usability-matching-user-expectations"}},[e._v("Baymard Institute")]),e._v(". The initial width of the sketch symbol is set to 272 px (corresponds to the grid width on viewport XS). For further information we recommend to read the general form guideline. "),o("a",{attrs:{href:"#/patterns/forms"}},[e._v("Forms Guideline")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("Help text should be displayed openly and directly, also in order not to expect the user to make additional clicks. For further information we recommend to read the general form guideline. "),o("a",{attrs:{href:"#/patterns/forms"}},[e._v("Forms Guideline")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v("Validation text for a Select is placed right below the field box. This places the error next to the offending select, so there is no confusion for the user as to what field failed validation. Effective error messaging can help the user to understand the problem and how to fix it. For further information we recommend to read the general form guideline. "),o("a",{attrs:{href:"#/patterns/forms"}},[e._v("Forms Guideline")])])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[e._v('According to the "law of proximity" in Gestalt psychology ('),o("a",{attrs:{href:"https://lawsofux.com/law-of-proximity"}},[e._v("Laws of UX")]),e._v(") objects that are near or proximate to each other tend to be grouped together. For further information we recommend to read the general form guideline. "),o("a",{attrs:{href:"#/patterns/forms"}},[e._v("Forms Guideline")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("img",{attrs:{src:o("a074"),alt:"Example for alignment"}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("img",{attrs:{src:o("ab5c"),alt:"Example for alignment"}})])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("a",{attrs:{href:"#/components/form/checkbox"}},[e._v("Checkbox")])]),o("li",[o("a",{attrs:{href:"#/components/form/radio-button"}},[e._v("Radio Button")])])])}],n=o("2877"),i={},s=Object(n["a"])(i,r,a,!1,null,null,null);t["default"]=s.exports},"9f2d":function(e,t,o){e.exports=o.p+"img/form-select-examples.fc3341e6.png"},a074:function(e,t,o){e.exports=o.p+"img/dont-typing-may-be-faster-select.7fb1ecb1.png"},ab5c:function(e,t,o){e.exports=o.p+"img/dont-include-too-many-items-select.23fa93ff.png"}}]);
//# sourceMappingURL=chunk-d36962dc.8f7349e2.js.map