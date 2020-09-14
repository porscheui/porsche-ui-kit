(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21044d"],{b6be:function(e,n,o){"use strict";o.r(n);var t=function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},r=[function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{staticClass:"vmark"},[o("h1",[e._v("Angular")]),o("h2",[e._v("Sample integration")]),o("p",[e._v("You can find the repository of the angular example project here: "),o("a",{attrs:{href:"https://github.com/porscheui/sample-integration-angular"}},[e._v("Sample integration angular")])]),o("h2",[e._v("Requirement")]),o("ul",[o("li",[e._v("Get the Angular cli by executing "),o("code",[e._v("npm install -g @angular/cli")])])]),o("h3",[e._v("Get the project up and running")]),o("ul",[o("li",[e._v("Clone the repository by executing "),o("br"),o("code",[e._v("git clone https://github.com/porscheui/sample-integration-angular.git")])])]),o("h3",[e._v("yarn")]),o("ul",[o("li",[e._v("Install dependencies via "),o("code",[e._v("yarn install")])]),o("li",[e._v("Run tests via "),o("code",[e._v("yarn test")])]),o("li",[e._v("Run the application via "),o("code",[e._v("yarn start")])]),o("li",[e._v("Build the application via "),o("code",[e._v("yarn build")])])]),o("h3",[e._v("npm")]),o("ul",[o("li",[e._v("Install dependencies via "),o("code",[e._v("npm install")])]),o("li",[e._v("Run tests via "),o("code",[e._v("npm test")])]),o("li",[e._v("Run the application via "),o("code",[e._v("npm start")])]),o("li",[e._v("Build the application via "),o("code",[e._v("npm run build")])])]),o("hr"),o("h2",[e._v("Reproduce on your own")]),o("p",[e._v("To build your own application with the components of the Porsche Design System, follow these steps:")]),o("ul",[o("li",[e._v("Follow the instructions at "),o("a",{attrs:{href:"#/start-coding/introduction"}},[e._v("Introduction")]),e._v(" to get the required npm package")]),o("li",[e._v("Run "),o("code",[e._v("ng new my-app")]),e._v(" to create a new Angular workspace and initial project")]),o("li",[e._v("Install the Porsche Design System")])]),o("pre",[o("code",[e._v("// install with npm:\nnpm install @porsche-design-system/components-angular\n\n// install with yarn:\nyarn add @porsche-design-system/components-angular\n")])]),o("p",[e._v("After adding the "),o("code",[e._v("@porsche-design-system/components-angular")]),e._v(" package to your project, you've to import the "),o("code",[e._v("PorscheDesignSystemModule")]),e._v(" in every module you want to use the components. The following setup is a standard Angular CLI project:")]),o("h3",[e._v("App module")]),o("pre",[o("code",[e._v("import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\nimport { PorscheDesignSystemModule } from '@porsche-design-system/components-angular';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    PorscheDesignSystemModule\n  ],\n  providers: [],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n\n")])]),o("h4",[e._v("App component")]),o("pre",[o("code",[e._v("import {Component} from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  template: `\n    <div id=\"app\">\n      <p-headline variant=\"headline-1\">Headline</p-headline>\n    </div>\n  `,\n  styles: []\n})\nexport class AppComponent {}\n")])]),o("p",[e._v("Run the application by executing "),o("code",[e._v("yarn start")]),e._v(" or "),o("code",[e._v("npm start")]),e._v(" and see if the Porsche Design System component is rendered correctly.")]),o("p",[e._v("You are now ready to build your own Angular application using the Porsche Design System.")]),o("h2",[e._v("Advanced usage")]),o("p",[e._v("By default, the "),o("code",[e._v("PorscheDesignSystemModule")]),e._v(" takes care of registering the Web Components via the Porsche Design System Loader automatically."),o("br"),e._v(" But in some cases for example, if you want to include the Porsche Design System in Web Components that you build with Angular, you might need more control on who is registering those components to prevent conflicts. In this case, you can provide the "),o("code",[e._v("PREVENT_WEB_COMPONENTS_REGISTRATION")]),e._v(" inject token with the value "),o("code",[e._v("true")]),e._v(". This will prevent the loading of polyfills and registration of the Web Components provided by the Porsche Design System, while keeping you able to use the Angular components."),o("br"),e._v(" Caution, if you opt-out of the automatic registering you've to take care that they are registered in some other places, else the Angular components won't work as expected.")]),o("p",[e._v("You can provide the token as follows:")]),o("pre",[o("code",[e._v("import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule } from '@angular/core';\nimport { PorscheDesignSystemModule, PREVENT_WEB_COMPONENTS_REGISTRATION } from '@porsche-design-system/components-angular';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    PorscheDesignSystemModule\n  ],\n  providers: [\n    {\n      provide: PREVENT_WEB_COMPONENTS_REGISTRATION,\n      useValue: true\n    }\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n")])]),o("h3",[e._v("Prefixing")]),o("p",[e._v("Another way of preventing conflicts is by using a unique custom prefix for the components. If you choose to use a prefix you can set it via the "),o("code",[e._v("WEB_COMPONENTS_PREFIX")]),e._v(" inject token."),o("br"),e._v(" When using custom prefixed component tags, you've to add also the "),o("a",{attrs:{href:"https://angular.io/api/core/CUSTOM_ELEMENTS_SCHEMA"}},[e._v("schema "),o("code",[e._v("CUSTOM_ELEMENTS_SCHEMA")])]),e._v(" to the modules that use the prefixed components."),o("br"),e._v(" Keep in mind. that prefixed versions only work with components that use shadow root. This means, that if you do use prefixes, you can't use "),o("code",[e._v("p-grid")]),e._v(", "),o("code",[e._v("p-grid-item")]),e._v(", "),o("code",[e._v("p-flex")]),e._v(" or "),o("code",[e._v("p-flex-item")]),e._v(".")]),o("p",[e._v("You can provide the token as follows:")]),o("pre",[o("code",[e._v("import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { PorscheDesignSystemModule, WEB_COMPONENTS_PREFIX } from '@porsche-design-system/components-angular';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    PorscheDesignSystemModule\n  ],\n  providers: [\n    {\n      provide: WEB_COMPONENTS_PREFIX,\n      useValue: 'sample-prefix'\n    }\n  ],\n  schemas: [\n    CUSTOM_ELEMENTS_SCHEMA\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule { }\n")])]),o("p",[e._v("You can now use the components as follows:")]),o("pre",[o("code",[e._v("import {Component} from '@angular/core';\n\n@Component({\n  selector: 'app-root',\n  template: `\n    <div id=\"app\">\n      <sample-prefix-p-headline p-headline variant=\"headline-1\">Headline</sample-prefix-p-headline>\n    </div>\n  `,\n  styles: []\n})\nexport class AppComponent {}\n")])]),o("p",[e._v("Be aware, that you still have to set the component name without the prefix as an attribute, else you might get unexpected results in some edge cases.")]),o("p",[e._v("You can even add more prefixes with the "),o("code",[e._v("PrefixService")]),e._v(":")]),o("pre",[o("code",[e._v("import { BrowserModule } from '@angular/platform-browser';\nimport { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';\nimport { PorscheDesignSystemModule, WEB_COMPONENTS_PREFIX, PrefixService } from '@porsche-design-system/components-angular';\nimport { AppComponent } from './app.component';\n\n@NgModule({\n  declarations: [\n    AppComponent\n  ],\n  imports: [\n    BrowserModule,\n    PorscheDesignSystemModule\n  ],\n  providers: [\n    {\n      provide: WEB_COMPONENTS_PREFIX,\n      useValue: 'sample-prefix'\n    }\n  ],\n  schemas: [\n    CUSTOM_ELEMENTS_SCHEMA\n  ],\n  bootstrap: [AppComponent]\n})\nexport class AppModule {\n  constructor(private prefixService: PrefixService) {\n    prefixService.load('another-prefix');\n  }\n}\n")])])])}],s=o("2877"),p={},a=Object(s["a"])(p,t,r,!1,null,null,null);n["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d21044d.6d248d80.js.map