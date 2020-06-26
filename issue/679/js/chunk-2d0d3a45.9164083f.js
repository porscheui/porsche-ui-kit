(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3a45"],{"5e43":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("React")]),n("h2",[e._v("Sample integration")]),n("p",[e._v("You can find the repository of the react example project here: "),n("a",{attrs:{href:"https://github.com/porscheui/sample-integration-react.git"}},[e._v("Sample integration react")])]),n("h2",[e._v("Get the project up and running")]),n("ul",[n("li",[e._v("Clone the repository by executing "),n("br"),n("code",[e._v("git clone https://github.com/porscheui/sample-integration-react.git")])])]),n("h3",[e._v("yarn")]),n("ul",[n("li",[e._v("Install dependencies via "),n("code",[e._v("yarn install")])]),n("li",[e._v("Run tests via "),n("code",[e._v("yarn test")])]),n("li",[e._v("Run the application via "),n("code",[e._v("yarn start")])]),n("li",[e._v("Build the application via "),n("code",[e._v("yarn build")])])]),n("h3",[e._v("npm")]),n("ul",[n("li",[e._v("Install dependencies via "),n("code",[e._v("npm install")])]),n("li",[e._v("Run tests via "),n("code",[e._v("npm test")])]),n("li",[e._v("Run the application via "),n("code",[e._v("npm start")])]),n("li",[e._v("Build the application via "),n("code",[e._v("npm run build")])])]),n("hr"),n("h2",[e._v("Reproduce on your own")]),n("p",[e._v("To build your own application which is provided with the Porsche Design System follow these simple steps:")]),n("ul",[n("li",[e._v("Run "),n("code",[e._v("yarn create react-app my-app --template typescript")]),e._v(" or "),n("code",[e._v("npx create-react-app my-app --template typescript")]),e._v(" to create a directory inside the current folder with the initial project structure called "),n("code",[e._v("my-app")])]),n("li",[e._v("To add TypeScript to your "),n("strong",[e._v("Create React App")]),e._v(", you have to install it:")])]),n("pre",[n("code",[e._v("// install with yarn:\nyarn add typescript @types/node @types/react @types/react-dom @types/jest\n\n// install with npm:\nnpm install typescript @types/node @types/react @types/react-dom @types/jest\n")])]),n("ul",[n("li",[e._v("Install the Porsche Design System")])]),n("pre",[n("code",[e._v("// install with yarn:\nyarn add @porsche-design-system/components-react\n\n// install with npm:\nnpm install @porsche-design-system/components-react\n")])]),n("p",[e._v("You are ready to start building your own application.")]),n("p",[e._v("The following project is a standard React Scripts (Create React App) setup:")]),n("h3",[e._v("Index file")]),n("pre",[n("code",[e._v("import React from 'react';\nimport ReactDOM from 'react-dom';\nimport './index.css';\nimport App from './App';\nimport * as serviceWorker from './serviceWorker';\n\nReactDOM.render(\n  <React.StrictMode>\n    <App />\n  </React.StrictMode>,\n  document.getElementById('root')\n);\n\nserviceWorker.unregister();\n")])]),n("h3",[e._v("App file")]),n("p",[e._v("Change your App file to use at least one Porsche Design System Component, for example:")]),n("pre",[n("code",[e._v("import React from 'react';\nimport { PHeadline } from '@porsche-design-system/components-react';\n\nexport function App() {\n  return (\n    <div className=\"App\">\n      <PHeadline variant=\"headline-1\">Headline from Porsche Design System</PHeadline>\n    </div>\n  );\n}\n\nexport default App;\n")])]),n("p",[e._v("Run "),n("code",[e._v("yarn start")]),e._v(" or "),n("code",[e._v("npm start")]),e._v(" and check if the components are displayed correctly.")]),n("hr"),n("h2",[e._v("Test the application")]),n("p",[n("strong",[e._v("Jest")]),e._v(" uses "),n("strong",[e._v("jsdom")]),e._v(". It is not yet possible to render functionality of web components via "),n("strong",[e._v("jsdom")]),e._v(".")]),n("p",[e._v("To ensure your tests don't fail, we provide mocks for every Porsche Design System component. They are distributed in the "),n("code",[e._v("@porsche-design-system/components-react")]),e._v(" npm package.")]),n("p",[e._v("The mocks must only be used if the functionality of the web component is required within the test. As we test and ensure the functionality of our web components extensively, we recommend using the mocks only as a last option.")]),n("p",[e._v("To consume the mocks you can set them up via your "),n("strong",[e._v("setupTest.ts")]),e._v(" file in your root folder and copy the following snippet into the setup file.")]),n("pre",[n("code",[e._v("// setupTest.ts\n\njest.mock('@porsche-design-system/components-react', () => {\n    return require('@porsche-design-system/components-react/mocks');\n});\n")])]),n("p",[e._v("You have to access the mocks in the Mock-Factory of the "),n("code",[e._v("jest.mock()")]),e._v(" function.")]),n("p",[e._v("If you only need a single component mock you can also consume the mock directly in your test. All of our mocks are named like "),n("strong",[e._v("p-name-mock")]),e._v(" for example "),n("strong",[e._v("p-headline-mock")]),e._v(".")]),n("pre",[n("code",[e._v("// SingleComponent.tsx\n\nexport function SingleComponent() {\n    return (\n        <PHeadline>Some headline</PHeadline>\n    )\n}\n")])]),n("pre",[n("code",[e._v("// SingleComponent.test.tsx\n\njest.mock('@porsche-design-system/components-react', () => {\n    return require('@porsche-design-system/components-react/mocks/p-headline-mock');\n});\n\ntest('renders a headline from Porsche Design System', async () => {\n    const {getByText} = render(<SingleComponent/>);\n    const headLineElement = getByText('Some headline');\n    expect(headLineElement).toBeInTheDocument();\n});\n")])]),n("p",[e._v("Use this solution until "),n("strong",[e._v("Creat React App")]),e._v(" upgrades to a newer "),n("strong",[e._v("jsdom")]),e._v(" version which provides support for "),n("strong",[e._v("Web Components")]),e._v(". In the meantime, we keep providing mocks.")]),n("p",[e._v("You find detailed information on how to use mock functions in "),n("strong",[e._v("Jest")]),e._v(" "),n("a",{attrs:{href:"https://jestjs.io/docs/en/mock-functions.html"}},[e._v("here")]),e._v(".")]),n("p",[e._v("We also provide test examples in our "),n("a",{attrs:{href:"https://github.com/porscheui/sample-integration-react/blob/master/src/tests/App.test.tsx"}},[e._v("sample integration project")]),e._v(".")]),n("h3",[e._v("Advanced usage")]),n("h3",[e._v("Prefixing")]),n("p",[e._v("A way of preventing conflicts is by using a unique custom prefix for the components."),n("br"),e._v(" You can create components with your prefix with the provided "),n("code",[e._v("getPrefixedComponents")]),e._v(" function. Just provide the desired prefix as first parameter as a string."),n("br"),e._v(" It will return an object with components that will render with the provided prefix. The object keys are the component names in upper camel-case, without the prefix."),n("br"),e._v(" Keep in mind. that prefixed versions only work with components that use shadow root. This means, that if you do use prefixes, you can't use "),n("code",[e._v("p-grid")]),e._v(", "),n("code",[e._v("p-grid-item")]),e._v(", "),n("code",[e._v("p-flex")]),e._v(" or "),n("code",[e._v("p-flex-item")]),e._v(".")]),n("p",[e._v("Caution: "),n("code",[e._v("getPrefixedComponents")]),e._v(" needs to be deep imported. For usage of the unprefixed components the web components will be defined without a prefix automatically. That would also happen, if we would provide "),n("code",[e._v("getPrefixedComponents")]),e._v(" components also within the same barrel export. This way we can ensure, that only the prefixed web components are getting defined.")]),n("pre",[n("code",[e._v("import React from 'react';\nimport { getPrefixedComponents } from '@porsche-design-system/components-react/dist/prefixed-components';\n\nconst { PHeadline } = getPrefixedComponents('sample-prefix');\n\nexport function App() {\n  return (\n    <div className=\"App\">\n      <PHeadline variant=\"headline-1\">Headline from Porsche Design System</PHeadline>\n    </div>\n  );\n}\n\nexport default App;\n")])]),n("p",[e._v("In the example the "),n("code",[e._v("PHeadline")]),e._v(" component will render as "),n("code",[e._v("<sample-prefix-p-headline>")]),e._v(". We recommend to call "),n("code",[e._v("getPrefixedComponents")]),e._v(" only once in your app and import it from there, that you can change the prefix in a single place.")]),n("pre",[n("code",[e._v("// PorscheDesignSystem.ts\nimport { getPrefixedComponents } from '@porsche-design-system/components-react/dist/prefixed-components';\nexport const PorscheDesignComponents =  getPrefixedComponents('sample-prefix');\n")])]),n("pre",[n("code",[e._v("// SingleComponent.tsx\n\nimport { PorscheDesignComponents } from './PorscheDesignSystem';\nconst { PHeadline } = PorscheDesignComponents;\n\nexport function SingleComponent() {\n    return (\n        <PHeadline>Some headline</PHeadline>\n    )\n}\n")])])])}],r=n("2877"),i={},p=Object(r["a"])(i,o,s,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d3a45.9164083f.js.map