(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa589"],{"112e":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Next Js")]),n("h2",[e._v("Sample integration")]),n("p",[e._v("You can find the repository of the NextJS example project here: "),n("a",{attrs:{href:"https://github.com/porscheui/sample-integration-nextjs"}},[e._v("Sample integration NextJS")])]),n("h2",[e._v("Get the project up and running")]),n("ul",[n("li",[e._v("Clone the repository by executing"),n("br"),n("code",[e._v("git clone https://github.com/porscheui/sample-integration-nextjs.git")])])]),n("h3",[e._v("yarn")]),n("ul",[n("li",[e._v("Install dependencies via "),n("code",[e._v("yarn install")])]),n("li",[e._v("Build the application via "),n("code",[e._v("yarn build")])]),n("li",[e._v("Run tests via "),n("code",[e._v("yarn test")])]),n("li",[e._v("Run the application via "),n("code",[e._v("yarn start")])])]),n("h3",[e._v("npm")]),n("ul",[n("li",[e._v("Install dependencies via "),n("code",[e._v("npm install")])]),n("li",[e._v("Build the application via "),n("code",[e._v("npm run build")])]),n("li",[e._v("Run tests via "),n("code",[e._v("npm test")])]),n("li",[e._v("Run the application via "),n("code",[e._v("npm start")])])]),n("hr"),n("h2",[e._v("Reproduce on your own")]),n("p",[e._v("To build your own application with the components of the Porsche Design System, follow these steps:")]),n("ul",[n("li",[e._v("Create a new application by executing:")])]),n("pre",[n("code",[e._v("// install with yarn:\nyarn create next-app\n\n// install with npm:\nnpm init next-app\n")])]),n("ul",[n("li",[n("p",[e._v("Follow the instructions to set everything up")])]),n("li",[n("p",[e._v("Switch to the created folder with "),n("code",[e._v("cd your-app-name")])])]),n("li",[n("p",[e._v("To add TypeScript to your "),n("strong",[e._v("NextJS Project")]),e._v(", you have to create a "),n("code",[e._v("tsconfig.json")]),e._v(" file in the root of your project")])]),n("li",[n("p",[e._v("Add typescript with "),n("code",[e._v("yarn add --dev typescript @types/react @types/node")]),e._v(" or"),n("br"),n("code",[e._v("npm install --save-dev typescript @types/react @types/node")])])]),n("li",[n("p",[e._v("Run "),n("code",[e._v("yarn dev")]),e._v(" or "),n("code",[e._v("npm run dev")]),e._v(" which configures your "),n("code",[e._v("tsconfig.json")]),e._v(" with default values")])]),n("li",[n("p",[e._v("You can convert your files from "),n("code",[e._v(".js")]),e._v(" to "),n("code",[e._v(".tsx")])])]),n("li",[n("p",[e._v("Follow the instructions at "),n("a",{attrs:{href:"#/start-coding/introduction"}},[e._v("Introduction")]),e._v(" to get the required npm package")])]),n("li",[n("p",[e._v("Install the Porsche Design System")])])]),n("pre",[n("code",[e._v("// install with yarn:\nyarn add @porsche-design-system/components-react\n\n// install with npm:\nnpm install @porsche-design-system/components-react\n")])]),n("p",[e._v("You are ready to start building your own application.")]),n("p",[e._v("The following project is the standard NextJS setup. Change your index page to use at least one Porsche Design System Component, for example:")]),n("h3",[e._v("Index page")]),n("pre",[n("code",[e._v('// index.ts\n \nimport Head from \'next/head\'\nimport {PHeadline} from "@porsche-design-system/components-react";\n\nexport default function Home() {\n  return (\n    <div className="container">\n      <Head>\n        <title>Create Next App</title>\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n\n      <main>\n        <PHeadline className="title">\n          Welcome to <a href="https://nextjs.org">Next.js!</a> with Porsche Design System\n        </PHeadline>\n      </main>\n    </div>\n  )\n}\n')])]),n("ul",[n("li",[e._v("Run "),n("code",[e._v("yarn build")]),e._v(" or "),n("code",[e._v("npm build")]),e._v(" to create pre-rendered pages")]),n("li",[e._v("Execute "),n("code",[e._v("yarn start")]),e._v(" or "),n("code",[e._v("npm start")]),e._v(" and check if the components are displayed correctly.")])]),n("hr"),n("h2",[e._v("Test the application")]),n("p",[e._v("To set up Jest testing in in NextJS you have to manually set up jest in your project. You find detailed information here: "),n("a",{attrs:{href:"https://jestjs.io/docs/en/getting-started"}},[e._v("Get Started with Jest")])]),n("p",[n("strong",[e._v("Jest")]),e._v(" uses "),n("strong",[e._v("jsdom")]),e._v(".It is yet not possible to render the functionality of web components in "),n("strong",[e._v("jsdom")]),e._v(".")]),n("p",[e._v("To ensure your tests don't fail, we provide mocks for every Porsche Design System component. They are distributed in the "),n("code",[e._v("@porsche-design-system/components-react")]),e._v(" npm package.")]),n("p",[e._v("The mocks must only be used if the functionality of the web component is required within the test. As we test and ensure the functionality of our web components extensively, we recommend using the mocks only as a last option.")]),n("p",[e._v("To consume the mocks you can set them up via your "),n("strong",[e._v("setupTest.js")]),e._v(" file in your root folder and copy the following snippet into the setup file.")]),n("pre",[n("code",[e._v("// setupTest.js\n\njest.mock('@porsche-design-system/components-react', () => {\n    return require('@porsche-design-system/components-react/mocks');\n});\n")])]),n("p",[e._v("You have to access the mocks in the Mock-Factory of the "),n("code",[e._v("jest.mock()")]),e._v(" function.")]),n("p",[e._v("If you only need a single component mock you can also consume the mock directly in your test. All of our mocks are named like "),n("strong",[e._v("p-name-mock")]),e._v(" for example "),n("strong",[e._v("p-headline-mock")]),e._v(".")]),n("pre",[n("code",[e._v("// SingleComponent.tsx\n\nexport function SingleComponent() {\n    return (\n        <PHeadline>Some headline</PHeadline>\n    )\n}\n")])]),n("pre",[n("code",[e._v("// SingleComponent.test.tsx\n\njest.mock('@porsche-design-system/components-react', () => {\n    return require('@porsche-design-system/components-react/mocks/p-headline-mock');\n});\n\ntest('renders a headline from Porsche Design System', async () => {\n    const {getByText} = render(<SingleComponent/>);\n    const headLineElement = getByText('Some headline');\n    expect(headLineElement).toBeInTheDocument();\n});\n")])]),n("p",[e._v("Use this solution until there is an upgrade to a newer "),n("strong",[e._v("jsdom")]),e._v(" version which provides support for "),n("strong",[e._v("Web Components")]),e._v(". In the meantime, we keep providing mocks.")]),n("p",[e._v("You find detailed information on how to use mock functions in "),n("strong",[e._v("Jest")]),e._v(" "),n("a",{attrs:{href:"https://jestjs.io/docs/en/mock-functions.html"}},[e._v("here")]),e._v(".")])])}],i=n("2877"),r={},a=Object(i["a"])(r,o,s,!1,null,null,null);t["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d0aa589.1161f11e.js.map