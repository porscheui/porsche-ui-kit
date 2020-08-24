(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d214049"],{aec2:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Testing")]),n("p",[e._v("One problem you might encounter while testing is, that the components get lazily loaded. That means, that they might not be ready when your tests start to access the elements."),n("br"),e._v(" You can solve that by using the "),n("a",{attrs:{href:"#/helpers/components-ready"}},[e._v("componentsReady-function")]),e._v(" to know when all loading is finished.")]),n("p",[e._v("Detailed information about tests in frameworks like "),n("a",{attrs:{href:"#/start-coding/react"}},[e._v("React")]),e._v(", Angular etc. can be found in the respective test projects")]),n("h2",[e._v("Unit Tests")]),n("p",[e._v("A simple Jasmine example could look like this:")]),n("pre",[n("code",{staticClass:"language-javascript"},[e._v("import { componentsReady } from '@porsche-design-system/components-js';\n\n/*\n * the function to test which adds a porsche design system\n * component to the document (usually this is done by a\n * template engine of a framework)\n */\n\nfunction addPText() {\n  const element = document.createElement('p-text');\n  element.innerText = 'Hello World';\n  document.body.appendChild(element);\n}\n\ndescribe(\"The p-text\", function() {\n  /**\n   * this test might fail, because the component is not\n   * ready if it wasn't used before\n   * in that case innerText would be empty string until\n   * the component finished loading\n   */\n  it(\"should have content\", function() {\n    addPText();\n    const element = document.querySelector('p-text');\n    expect(element.innerText).toBe('Hello World');\n    element.remove();\n  });\n \n  /**\n   * this test should work, even if the component\n   * still needs to be loaded, because the\n   * componentsReady() function returns a promise\n   * that resolves as soon as everything is ready\n   */\n  it(\"should have content\", async function() {\n    addPText();\n    await componentsReady();\n    const element = document.querySelector('p-text');\n    expect(element.innerText).toBe('Hello World');\n    element.remove();\n  });\n\n});\n")])]),n("h2",[e._v("E2E Tests")]),n("p",[e._v("Usually E2E tests are robust enough that the lazy loading shouldn't cause any issues. However, there are a lot of different setups for E2E tests.")]),n("p",[e._v("If you face any problems, we would appreciate if you report them. We'll do our best to find a solution."),n("br"),e._v(" Also, it might be handy to know that all components get a "),n("code",[e._v("hydrated")]),e._v(" class, as soon as they are loaded and ready, that you can wait for. Waiting for the functionality is available in most E2E frameworks."),n("br"),e._v(" Another option would be to make the "),n("code",[e._v("componentsReady")]),e._v(" function available in the browser and call it from the E2E tests to know when the page is ready.")]),n("h2",[e._v("Visual Regression Testing")]),n("p",[e._v("For Visual Regression Testing we recommend waiting for all network traffic to be finished. This should be handled by the Visual Regression Testing tools you use.")])])}],a=n("2877"),i={},l=Object(a["a"])(i,o,s,!1,null,null,null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d214049.69b901b6.js.map