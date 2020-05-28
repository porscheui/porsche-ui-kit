(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22e186"],{f9fc:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vmark"},[s("h1",[e._v("Start Coding")]),s("p",[e._v("Porsche Design System provides developers with versioned packages of Web components, Angular components and React components to build clean and high-quality frontends that innately come with the latest design definitions.")]),s("p",[e._v("To enable a smooth start with the Porsche Design System we have created sample projects in all common frameworks. These projects show how to install and the usage of the Porsche Design System. Furthermore, the example projects contain examples and solutions for testing.")]),s("hr"),s("h2",[e._v("Requirements")]),e._m(0),s("h3",[e._v("Get required NPM-Packages")]),s("p",[e._v("All releases of the Porsche Design System are available as versioned NPM packages called")]),e._m(1),s("p",[e._v("Those packages can be consumed by one of the following private NPM registries:")]),e._m(2),s("p",[e._v("If you don't have an account for one of the those NPM registries, you can easily register for the Porsche Design System NPM registry like as follows:")]),s("p",[s("p-link",{attrs:{target:"_blank",href:"https://ux.porsche.com/start-coding.html"}},[e._v("Request a Porsche Design System npm registry account")])],1),e._m(3),e._m(4),s("h4",[e._v("Vanilla JS:")]),e._m(5),s("h4",[e._v("Angular:")]),e._m(6),s("h4",[e._v("React:")]),e._m(7),s("h4",[e._v("SCSS utils (optional):")]),e._m(8),s("h2",[e._v("Usage")]),s("h3",[e._v("Vanilla JS")]),s("p",[e._v("If you're using web components in a static website, the following page setup is recommended (assuming a web server is running):")]),e._m(9),s("hr"),s("h3",[e._v("SCSS utils")]),e._m(10),s("hr"),s("h3",[e._v("Web components used with a not-supported framework")]),s("p",[e._v("At the time of writing, we only provide wrappers for Angular and React. But this doesn't mean that our web components can't be used with other frameworks like Vue or Ember. Just follow these guidelines to make our web components work in other frameworks:")]),e._m(11)])},r=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://nodejs.org"}},[e._v("Node.js & NPM")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("code",[e._v("@porsche-design-system/components-js")])]),s("li",[s("code",[e._v("@porsche-design-system/components-angular")])]),s("li",[s("code",[e._v("@porsche-design-system/components-react")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[e._v("Porsche Design System NPM registry ("),s("a",{attrs:{href:"https://porscheui.jfrog.io"}},[e._v("https://porscheui.jfrog.io")]),e._v(")")]),s("li",[e._v("My Porsche NPM registry ("),s("a",{attrs:{href:"https://porschedev.jfrog.io"}},[e._v("https://porschedev.jfrog.io")]),e._v(")")]),s("li",[e._v("Porsche Highway NPM registry ("),s("a",{attrs:{href:"https://highway.porsche.com/artifactory/"}},[e._v("https://highway.porsche.com/artifactory/")]),e._v(")")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("Follow the instructions sent by e-mail")]),s("li",[e._v("Execute "),s("code",[e._v("npm login --registry=https://porscheui.jfrog.io/porscheui/api/npm/npm/")])]),s("li",[e._v("Enter username, password (Artifactory API Key, "),s("strong",[e._v("not")]),e._v(" Artifactory password!) and e-mail address when asked in the terminal (this will add the credentials to your global user "),s("code",[e._v("~/.npmrc")]),e._v(")")]),s("li",[e._v("Add local "),s("code",[e._v(".npmrc")]),e._v(" at the root of your NPM project and add the following lines of code:")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[e._v("always-auth = true\n@porsche-design-system:registry = https://porscheui.jfrog.io/porscheui/api/npm/npm/\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[e._v("// install with npm:\nnpm install @porsche-design-system/components-js\n\n// install with yarn:\nyarn add @porsche-design-system/components-js\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[e._v("// install with npm:\nnpm install @porsche-design-system/components-angular\n\n// install with yarn:\nyarn add @porsche-design-system/components-angular\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[e._v("// install with npm:\nnpm install @porsche-design-system/components-react\n\n// install with yarn:\nyarn add @porsche-design-system/components-react\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[e._v("// install with npm:\nnpm install @porsche-design-system/scss-utils --save-dev\n\n// install with yarn:\nyarn add @porsche-design-system/scss-utils --dev\n")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width,initial-scale=1.0">\n    <title>Porsche Design System</title>\n    <script nomodule src="PATH/TO/PACKAGE/@porsche-design-system/components-js/dist/porsche-design-system/porsche-design-system.js"><\/script>\n    <script type="module" src="PATH/TO/PACKAGE/@porsche-design-system/components-js/dist/porsche-design-system/porsche-design-system.esm.js"><\/script>\n  </head>\n  <body>\n    <p-headline variant="headline-1">Some text</p-headline>\n  </body>\n</html>\n')])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("SCSS utils can be used for easier Scss/Sass development. See "),s("a",{attrs:{href:"#/scss-utils/introduction"}},[e._v("SCSS utils section")]),e._v(" for further information.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://stenciljs.com/docs/vue"}},[e._v("Guidelines for Vue")])]),s("li",[s("a",{attrs:{href:"https://stenciljs.com/docs/ember"}},[e._v("Guidelines for Ember")])])])}],o=s("2877"),i={},a=Object(o["a"])(i,n,r,!1,null,null,null);t["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d22e186.b3b2e8be.js.map