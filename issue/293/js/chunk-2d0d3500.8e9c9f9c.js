(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d3500"],{"5bda":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"vmark"},[n("h1",[e._v("Gatsby - Sample integration")]),n("p",[e._v("You can find the repository of the Gatsby example project here: "),n("a",{attrs:{href:"https://github.com/porscheui/sample-integration-gatsby"}},[e._v("Sample integration Gatsby")])]),n("h2",[e._v("Get the project up and running")]),n("ul",[n("li",[e._v("Clone the repository by executing"),n("br"),n("code",[e._v("git clone https://github.com/porscheui/sample-integration-gatsby.git")])])]),n("h3",[e._v("yarn")]),n("ul",[n("li",[e._v("Install dependencies via "),n("code",[e._v("yarn install")])]),n("li",[e._v("Run tests via "),n("code",[e._v("yarn test")])]),n("li",[e._v("Run the application via "),n("code",[e._v("yarn start")])]),n("li",[e._v("Build the application via "),n("code",[e._v("yarn build")])])]),n("h3",[e._v("npm")]),n("ul",[n("li",[e._v("Install dependencies via "),n("code",[e._v("npm install")])]),n("li",[e._v("Run tests via "),n("code",[e._v("npm test")])]),n("li",[e._v("Run the application via "),n("code",[e._v("npm start")])]),n("li",[e._v("Build the application via "),n("code",[e._v("npm run build")])])]),n("hr"),n("h2",[e._v("Reproduce on your own")]),n("p",[e._v("To build your own application with the components of the Porsche Design System, follow these steps:")]),n("ul",[n("li",[e._v("Get the Gatsby CLI")])]),n("pre",[n("code",[e._v("// install with yarn:\nyarn global install gatsby-cli\n\n// install with npm:\nnpm install -g gatsby-cli\n")])]),n("ul",[n("li",[e._v("Create a new site with "),n("code",[e._v("gatsby new gatsby-site")])]),n("li",[e._v("Switch to the created folder with "),n("code",[e._v("cd gatsby-site")])]),n("li",[e._v("To add TypeScript to your "),n("strong",[e._v("Gatsby Project")]),e._v(", you have to install it")])]),n("pre",[n("code",[e._v("// install with yarn:\nyarn add gatsby-plugin-typescript\n\n// install with npm:\nnpm install gatsby-plugin-typescript\n")])]),n("ul",[n("li",[e._v("Include the plugin in your "),n("code",[e._v("gatsby-config.js")])])]),n("pre",[n("code",[e._v("// gatsby-config.js\nmodule.exports = {\n  // ...,\n  plugins: [`gatsby-plugin-typescript`],\n}\n")])]),n("ul",[n("li",[e._v("To get full Typescript support, change the .js files to .ts")]),n("li",[e._v("Follow the instructions at "),n("a",{attrs:{href:"https://designsystem.porsche.com/v1/#/start-coding/introduction"}},[e._v("Introduction")]),e._v(" to get the required npm package")]),n("li",[e._v("Install the Porsche Design System")])]),n("pre",[n("code",[e._v("// install with yarn:\nyarn add @porsche-design-system/components-react\n\n// install with npm:\nnpm install @porsche-design-system/components-react\n")])]),n("p",[e._v("You are ready to start building your own application.")]),n("p",[e._v("The following project is the standard Gatsby site setup. Change your Index page to use at least one Porsche Design System Component, for example:")]),n("h3",[e._v("Index page")]),n("pre",[n("code",[e._v('// index.ts\n \nimport * as React from "react"\nimport { Link } from "gatsby"\nimport {PHeadline, PText} from "@porsche-design-system/components-react"\n\nimport Layout from "../components/layout"\nimport Image from "../components/image"\nimport SEO from "../components/seo"\n   \nconst IndexPage = () => (\n <Layout>\n   <SEO title=\'Home\' />\n   <PHeadline>Hi people</PHeadline>\n   <PText>Welcome to your new Gatsby site.</PText>\n   <PText>Now go build something great.</PText>\n   <div>\n     <Image />\n   </div>\n   <Link to="/page-2/">Go to page 2</Link>\n </Layout>\n)\n   \nexport default IndexPage\n')])]),n("p",[e._v("Run "),n("code",[e._v("yarn start")]),e._v(" or "),n("code",[e._v("npm start")]),e._v(" and check if the components are displayed correctly.")]),n("hr"),n("h2",[e._v("Test the application")]),n("p",[e._v("To set up Jest testing in in Gatsby you have to follow the instructions on how to set up jest for your project:")]),n("ul",[n("li",[e._v("Step 1: "),n("a",{attrs:{href:"https://www.gatsbyjs.org/docs/unit-testing/"}},[e._v("Set up Jest for Unit testing general")])]),n("li",[e._v("Step 2: "),n("a",{attrs:{href:"https://www.gatsbyjs.org/docs/testing-react-components/"}},[e._v("Set up to test react components")])])]),n("p",[e._v("It is yet not possible to render our web components in "),n("strong",[e._v("jsdom")]),e._v(".")]),n("p",[e._v("To ensure your tests don't fail, we provide mocks for every Porsche Design System component. They are distributed in the "),n("code",[e._v("@porsche-design-system/components-react")]),e._v(" npm package.")]),n("p",[e._v("To consume the mocks you can set them up via your "),n("strong",[e._v("setup-test-env.js")]),e._v(" file in your root folder and copy the following snippet into the setup file.")]),n("pre",[n("code",[e._v("// setup-test-env.js\n\njest.mock('@porsche-design-system/components-react', () => {\n    return require('@porsche-design-system/components-react/mocks');\n});\n")])]),n("p",[e._v("You have to access the mocks in the Mock-Factory of the "),n("code",[e._v("jest.mock()")]),e._v(" function.")]),n("p",[e._v("If you only need a single component mock you can also consume the mock directly in your test. All of our mocks are named like "),n("strong",[e._v("p-name-mock")]),e._v(" for example "),n("strong",[e._v("p-headline-mock")]),e._v(".")]),n("pre",[n("code",[e._v("// SingleComponent.tsx\n\nexport function SingleComponent() {\n    return (\n        <PHeadline>Some headline</PHeadline>\n    )\n}\n")])]),n("pre",[n("code",[e._v("// SingleComponent.test.tsx\n\njest.mock('@porsche-design-system/components-react', () => {\n    return require('@porsche-design-system/components-react/mocks/p-headline-mock');\n});\n\ntest('renders a headline from Porsche Design System', async () => {\n    const {getByText} = render(<SingleComponent/>);\n    const headLineElement = getByText('Some headline');\n    expect(headLineElement).toBeInTheDocument();\n});\n")])]),n("p",[e._v("Use this solution until there is an upgrade to a newer "),n("strong",[e._v("jsdom")]),e._v(" version which provides support for "),n("strong",[e._v("Web Components")]),e._v(". In the meantime we keep providing mocks.")]),n("p",[e._v("You find detailed information on how to use mock functions in "),n("strong",[e._v("Jest")]),e._v(" "),n("a",{attrs:{href:"https://jestjs.io/docs/en/mock-functions.html"}},[e._v("here")]),e._v(".")]),n("p",[e._v("We also provide test examples in our "),n("a",{attrs:{href:"https://github.com/porscheui/sample-integration-gatsby/blob/master/src/components/__tests__/applicationTest.test.tsx"}},[e._v("sample integration project")]),e._v(".")])])}],i=n("2877"),a={},r=Object(i["a"])(a,o,s,!1,null,null,null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0d3500.8e9c9f9c.js.map