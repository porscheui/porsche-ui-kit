(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2138c7"],{acc2:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e._self._c;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Angular")]),n("TableOfContents"),n("h2",[e._v("Quick start")]),e._m(0),e._m(1),e._m(2),n("p",[e._v("You are ready to start building your own application.")]),n("h3",[e._v("Integration")]),e._m(3),n("p",[e._v("The following setup is a standard Angular CLI project:")]),e._m(4),n("p",[e._v("Change your AppComponent to use at least one Porsche Design System component, for example:")]),e._m(5),e._m(6),n("h2",[e._v("When are Porsche Design System components initialized?")]),e._m(7),n("h2",[e._v("Sample integration")]),e._m(8),n("h3",[e._v("Get the project up and running")]),e._m(9)],1)},r=[function(){var e=this,n=e._self._c;return n("p",[e._v("To build your own application with the "),n("strong",[e._v("Angular")]),e._v(" components of the Porsche Design System, follow these steps:")])},function(){var e=this,n=e._self._c;return n("ul",[n("li",[e._v("Follow the instructions at "),n("a",{attrs:{href:"start-coding/introduction"}},[e._v("Introduction")]),e._v(" to get the required npm package")]),n("li",[e._v("Run "),n("code",[e._v("ng new my-app")]),e._v(" to create a new Angular workspace and initial project")]),n("li",[e._v("Install the Porsche Design System")])])},function(){var e=this,n=e._self._c;return n("pre",[n("code",{staticClass:"language-shell"},[e._v("// install with npm:\nnpm install @porsche-design-system/components-angular\n\n// install with yarn:\nyarn add @porsche-design-system/components-angular\n")])])},function(){var e=this,n=e._self._c;return n("p",[e._v("After adding the "),n("code",[e._v("@porsche-design-system/components-angular")]),e._v(" package to your project, you've to import the "),n("code",[e._v("PorscheDesignSystemModule")]),e._v(" in every module you want to use the components.")])},function(){var e=this,n=e._self._c;return n("pre",[n("code",{staticClass:"language-ts"},[e._v("// app.module.ts\n\nimport { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\nimport { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, PorscheDesignSystemModule],\n  providers: [],\n  bootstrap: [AppComponent],\n})\nexport class AppModule {}\n")])])},function(){var e=this,n=e._self._c;return n("pre",[n("code",{staticClass:"language-ts"},[e._v("// app.component.ts\n\nimport { Component } from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  template: `\n    <div id=\"app\">\n      <p-headline variant=\"headline-1\">Headline</p-headline>\n    </div>\n  `,\n  styles: [],\n})\nexport class AppComponent {}\n")])])},function(){var e=this,n=e._self._c;return n("p",[e._v("Run "),n("code",[e._v("yarn start")]),e._v(" or "),n("code",[e._v("npm start")]),e._v(" and check if the components are displayed correctly.")])},function(){var e=this,n=e._self._c;return n("p",[e._v("See "),n("a",{attrs:{href:"helpers/components-ready"}},[e._v("componentsReady()")]),e._v(" for further information.")])},function(){var e=this,n=e._self._c;return n("p",[e._v("We provide a public GitHub repository with a basic sample project setup to show how it is managed in real code."),n("br"),e._v(" You can find the repository of the Angular example project here: "),n("a",{attrs:{href:"https://github.com/porsche-design-system/sample-integration-angular"}},[e._v("Sample integration Angular")])])},function(){var e=this,n=e._self._c;return n("ul",[n("li",[e._v("Clone the repository by executing"),n("br"),n("code",[e._v("git clone https://github.com/porsche-design-system/sample-integration-angular.git")])]),n("li",[e._v("Follow the installation guidelines in the README.md file")])])}],s=t("2877"),a={},i=Object(s["a"])(a,o,r,!1,null,null,null);n["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d2138c7.0584abab.js.map