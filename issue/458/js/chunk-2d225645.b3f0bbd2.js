(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225645"],{e3cd:function(e,t,n){"use strict";n.r(t);var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Start Coding")]),n("p",[e._v("Porsche Design System provides developers with a collection of Web components, Angular components and React components to build clean and high-quality frontends that innately come with the latest design definitions.")]),n("h2",[e._v("Requirements")]),e._m(0),n("h2",[e._v("Installation")]),e._m(1),n("p",[e._v("Those packages can be consumed by one of the following private NPM registries:")]),e._m(2),n("p",[e._v("If you don't have an account for one of the those NPM registries, you can easily register for the Porsche Design System NPM registry like as follows:")]),n("p",[n("p-link",{attrs:{target:"_blank",href:"http://eepurl.com/gnOIXD"}},[e._v("Request a Porsche Design System npm registry account")])],1),e._m(3),e._m(4),n("h4",[e._v("Vanilla JS:")]),e._m(5),n("h4",[e._v("Angular:")]),e._m(6),n("h4",[e._v("React:")]),e._m(7),n("h4",[e._v("SCSS utils (optional):")]),e._m(8),n("h2",[e._v("Usage")]),n("h3",[e._v("Vanilla JS")]),n("p",[e._v("If you're using web components in a static website, the following page setup is recommended (assuming a web server is running):")]),e._m(9),n("hr"),n("h3",[e._v("Angular")]),n("p",[e._v("The Angular components can be used like every other Angular library.")]),e._m(10),n("h4",[e._v("App module")]),e._m(11),n("h4",[e._v("App component")]),e._m(12),n("h3",[e._v("React")]),n("p",[e._v("The React wrappers for web components can be used like every other React component - even with Typescript support.")]),e._m(13),n("h4",[e._v("Index file")]),e._m(14),n("h4",[e._v("App file")]),e._m(15),n("hr"),n("h3",[e._v("SCSS utils")]),e._m(16),n("hr"),n("h3",[e._v("Web components used with non-supported framework")]),n("p",[e._v("At time of writing we only provide wrappers for Angular and React. But this doesn't mean that our web components can't be used with other frameworks like Vue or Ember. Just follow these guidelines to make our web components work in other frameworks:")]),e._m(17)])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://nodejs.org"}},[e._v("Node.js & NPM")])])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("All releases of the Porsche Design System are available as versioned NPM package called "),n("code",[e._v("@porsche-design-system/components-js")]),e._v(", "),n("code",[e._v("@porsche-design-system/components-angular")]),e._v(" and "),n("code",[e._v("@porsche-design-system/components-react")]),e._v(".")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[e._v("Porsche Design System NPM registry ("),n("a",{attrs:{href:"https://porscheui.jfrog.io"}},[e._v("https://porscheui.jfrog.io")]),e._v(")")]),n("li",[e._v("My Porsche NPM registry ("),n("a",{attrs:{href:"https://porschedev.jfrog.io"}},[e._v("https://porschedev.jfrog.io")]),e._v(")")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",[n("li",[e._v("Follow the instructions sent by e-mail")]),n("li",[e._v("Execute "),n("code",[e._v("npm login --registry=https://porscheui.jfrog.io/porscheui/api/npm/npm/")])]),n("li",[e._v("Enter username, password (Artifactory API Key, "),n("strong",[e._v("not")]),e._v(" Artifactory password!) and e-mail address when asked in the terminal (this will add the credentials to your global user "),n("code",[e._v("~/.npmrc")]),e._v(")")]),n("li",[e._v("Add local "),n("code",[e._v(".npmrc")]),e._v(" at the root of your NPM project and add the following lines of code:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("always-auth = true\n@porsche-design-system:registry = https://porscheui.jfrog.io/porscheui/api/npm/npm/\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("// install with npm:\nnpm install @porsche-design-system/components-js\n\n// install with yarn:\nyarn add @porsche-design-system/components-js\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("// install with npm:\nnpm install @porsche-design-system/components-angular\n\n// install with yarn:\nyarn add @porsche-design-system/components-angular\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("// install with npm:\nnpm install @porsche-design-system/components-react\n\n// install with yarn:\nyarn add @porsche-design-system/components-react\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("// install with npm:\nnpm install @porsche-design-system/scss-utils --save-dev\n\n// install with yarn:\nyarn add @porsche-design-system/scss-utils --dev\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v('<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width,initial-scale=1.0">\n    <title>Porsche Design System</title>\n    <script nomodule src="PATH/TO/PACKAGE/@porsche-design-system/components-js/dist/porsche-design-system/porsche-design-system.js"><\/script>\n    <script type="module" src="PATH/TO/PACKAGE/@porsche-design-system/components-js/dist/porsche-design-system/porsche-design-system.esm.js"><\/script>\n  </head>\n  <body>\n    <p-headline variant="headline-1">Some text</p-headline>\n  </body>\n</html>\n')])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("After adding the "),n("code",[e._v("@porsche-design-system/components-angular")]),e._v(" package to your project, you've to import the "),n("code",[e._v("PorscheDesignSystemModule")]),e._v(" in every module you want to use the components in. It declares and exports the Porsche Design System Compontents to make it available in the module that imports it. The following setup is a standard Angular CLI project:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\nimport { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    PorscheDesignSystemModule\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("import {Component} from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  template: `\n    <div id=\"app\">\n      <p-headline variant=\"headline-1\">Headline</p-headline>\n    </div>\n  `,\n  styles: []\n})\nexport class AppComponent {}\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("After adding "),n("code",[e._v("@porsche-design-system/components-react")]),e._v(" package to your project, import component(s). The following setup is a standard React Scripts (Create React App) setup with SCSS support:")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("import 'react-app-polyfill/ie11';\nimport 'react-app-polyfill/stable';\nimport React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.scss';\nimport App from './App';\n\nReactDOM.render(<App />, document.getElementById('root'));\n\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("pre",[n("code",[e._v("import React from 'react';\nimport { PHeadline } from '@porsche-design-system/components-react';\n\nconst App: React.FC = () => {\n  return (\n    <div className=\"App\">\n      <PHeadline variant=\"headline-1\">Headline</PHeadline>\n    </div>\n  )\n}\n\nexport default App;\n")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("SCSS utils can be used for easier Scss/Sass development. See "),n("a",{attrs:{href:"#/web/scss-utils/introduction"}},[e._v("SCSS utils section")]),e._v(" for further information.")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",[n("li",[n("a",{attrs:{href:"https://stenciljs.com/docs/vue"}},[e._v("Guidelines for Vue")])]),n("li",[n("a",{attrs:{href:"https://stenciljs.com/docs/ember"}},[e._v("Guidelines for Ember")])])])}],o=n("2877"),i={},a=Object(o["a"])(i,s,r,!1,null,null,null);t["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d225645.b3f0bbd2.js.map