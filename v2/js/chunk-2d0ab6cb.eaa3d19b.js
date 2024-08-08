(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ab6cb"],{"14e7":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"vmark"},[t("h1",[e._v("Components Ready")]),e._m(0),t("p",[e._v("The resolved value is a number with the amount of ready components.")]),t("p",[e._v("If the DOM changes later on you can call it again to know when the new components are loaded.")]),e._m(1),e._m(2),t("TableOfContents"),t("h2",[e._v("Basic Example")]),e._m(3),e._m(4),t("h2",[e._v("Advanced Example")]),e._m(5),e._m(6),t("h2",[e._v("Testing")]),t("p",[e._v("In this section you can find basic examples for the default test setups of each framework.")]),e._m(7),t("p",[e._v("Other Angular setups can be found further down.")]),t("p-inline-notification",{attrs:{heading:"Important note",state:"warning",persistent:"true"}},[e._v(" All test environments that don't use a real browser typically run in "),t("strong",[e._v("jsdom")]),e._v(" which requires our "),t("strong",[e._v("@porsche-design-system/components-{js|angular|react}/jsdom-polyfill")]),e._v(" subpackage in order to have real working Porsche Design System components."),t("br"),e._v(' Without it, you are just rendering "dead" component markup without any functionality. ')]),t("Playground",{attrs:{frameworkMarkup:e.codeSampleDefault,showCodeEditor:!1}}),t("h3",[e._v("Angular Jest with TestBed")]),e._m(8),t("Playground",{attrs:{frameworkMarkup:e.codeSampleAngularTestBed,showCodeEditor:!1}}),t("h3",[e._v("Angular Jest with Testing Library")]),e._m(9),t("Playground",{attrs:{frameworkMarkup:e.codeSampleAngularTestingLibrary,showCodeEditor:!1}})],1)},s=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Since the components are loaded lazily, it might be hard to tell when they are ready if you rely on them programmatically. To solve that we provide the "),t("code",[e._v("componentsReady")]),e._v(" function which returns a promise that resolves as soon as all currently used components are loaded and ready to use.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("The "),t("code",[e._v("componentsReady")]),e._v(" function is provided as part of the following components packages:")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ul",[t("li",[e._v("@porsche-design-system/components-js")]),t("li",[e._v("@porsche-design-system/components-angular")]),t("li",[e._v("@porsche-design-system/components-react")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[t("code",[e._v("componentsReady")]),e._v(" is quite flexible. You can call it wherever and as often as you like."),t("br"),e._v(" By default, it uses the current document's "),t("code",[e._v("body")]),e._v(" element to look for any web component of the Porsche Design System.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("import { componentsReady } from '@porsche-design-system/components-{js|angular|react}';\n\nconst doSomeStuff = async () => {\n  // doing some changes to the DOM and add new Porsche Design System components to it\n\n  await componentsReady();\n\n  // some code that relies on the newly added components\n};\n")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("In case you want to limit the search radius of "),t("code",[e._v("componentsReady")]),e._v(" you can pass any "),t("code",[e._v("HTMLElement")]),e._v(" as a parameter."),t("br"),e._v(" This is useful when you want to show a loading indicator for only a part of your application's interface, e.g. the sidebar and only care about components inside.")])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("import { componentsReady } from '@porsche-design-system/components-{js|angular|react}';\n\nconst initSomeSidebar = async () => {\n  const sidebarEl = document.querySelector('.sidebar');\n  let showSpinner = true;\n\n  // wait until all Porsche Design System components used within sidebar are ready\n  await componentsReady(sidebarEl);\n  showSpinner = false;\n};\n")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("ul",[t("li",[e._v("Vanilla JS: "),t("code",[e._v("jest")]),e._v(", "),t("code",[e._v("jsdom")]),e._v(" with "),t("code",[e._v("@testing-library")])]),t("li",[e._v("Angular: "),t("code",[e._v("jasmine")]),e._v(", "),t("code",[e._v("karma")]),e._v(" with "),t("code",[e._v("TestBed")])]),t("li",[e._v("React: "),t("code",[e._v("jest")]),e._v(", "),t("code",[e._v("jsdom")]),e._v(" with "),t("code",[e._v("@testing-library/react")])])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Setup: "),t("code",[e._v("jest")]),e._v(", "),t("code",[e._v("jsdom")]),e._v(" with "),t("code",[e._v("TestBed")])])},function(){var e=this,t=e._self._c;e._self._setupProxy;return t("p",[e._v("Setup: "),t("code",[e._v("jest")]),e._v(", "),t("code",[e._v("jsdom")]),e._v(" with "),t("code",[e._v("@testing-library/angular")])])}],a=n("ade3"),r=n("9ab4"),i=n("2b0e"),c=n("2fe1"),l=n("526d");let d=class extends i["a"]{constructor(...e){super(...e),Object(a["a"])(this,"codeSampleDefault",Object(l["c"])("default")),Object(a["a"])(this,"codeSampleAngularTestBed",Object(l["c"])("testbed")),Object(a["a"])(this,"codeSampleAngularTestingLibrary",Object(l["c"])("testing-library"))}};d=Object(r["a"])([c["b"]],d);var _=d,u=_,p=n("2877"),m=Object(p["a"])(u,o,s,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-2d0ab6cb.eaa3d19b.js.map