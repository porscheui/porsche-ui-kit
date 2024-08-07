(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2302c3"],{eac4:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"vmark"},[t("h1",[e._v("Next Js")]),t("TableOfContents"),t("h2",[e._v("Test the application")]),e._m(0),e._m(1),e._m(2),e._m(3),t("Notification",{attrs:{heading:"Attention","heading-tag":"h2",state:"warning"}},[e._v(" The "),t("code",[e._v("Modal")]),e._v(" and "),t("code",[e._v("Flyout")]),e._v(" components use the "),t("strong",[e._v("Dialog API")]),e._v(", which isn't currently supported by jsdom ("),t("a",{attrs:{href:"https://github.com/jsdom/jsdom/issues/3294",target:"_blank"}},[e._v("see issue")]),e._v("). Since we cannot easily provide a polyfill for this, they have to be mocked or polyfilled manually. Either by using the available polyfill package "),t("a",{attrs:{href:"https://npmjs.com/package/dialog-polyfill",target:"_blank"}},[e._v("https://npmjs.com/package/dialog-polyfill")]),e._v(" or by mocking the API. ")]),t("h3",[e._v("Setup file")]),e._m(4),t("h3",[e._v("Example component")]),e._m(5),t("h3",[e._v("Test example component")]),e._m(6),t("h2",[e._v("Hints about PorscheDesignSystemProvider")]),e._m(7),t("h3",[e._v("Custom helper")]),e._m(8),e._m(9),t("h3",[e._v("Disabling the validation of PorscheDesignSystemProvider")]),e._m(10),t("p",[e._v("You can apply it globally on every test by calling it once in your test setup:")]),e._m(11),t("p",[e._v("If you don't want to have multiple test setups or prefer a more local approach you can use it within your test:")]),e._m(12),t("h3",[e._v("Disabling CDN requests from Porsche Design System and components")]),e._m(13),t("p",[e._v("You can apply it globally on every test by calling it once in your test setup:")]),e._m(14),t("p",[e._v("If you don't want to have multiple test setups or prefer a more local approach you can use it within your test:")]),e._m(15),t("h2",[e._v("Additional information when using @testing-library/react")]),t("h3",[e._v("Form Submission")]),e._m(16),e._m(17),e._m(18),t("h3",[e._v("Queries")]),e._m(19),e._m(20),e._m(21),e._m(22),e._m(23),e._m(24)],1)},o=[function(){var e=this,t=e._self._c;return t("p",[t("strong",[e._v("Jest")]),e._v(" uses "),t("strong",[e._v("jsdom")]),e._v(" and supports ShadowDOM since Version 12.2.0."),t("br"),e._v(" However, it doesn't support JavaScript modules as described in this "),t("a",{attrs:{href:"https://github.com/jsdom/jsdom/issues/2475"}},[e._v("issue")]),e._v("."),t("br"),e._v(" Also, it doesn't support "),t("code",[e._v("CSSStyleSheet.replace()")]),e._v(", "),t("code",[e._v("Intersection Observer")]),e._v(", "),t("code",[e._v("Element.prototype.scrollTo")]),e._v(" and others.")])},function(){var e=this,t=e._self._c;return t("p",[e._v("As a workaround we provide a polyfill as part of the "),t("code",[e._v("@porsche-design-system/components-react")]),e._v(" package.")])},function(){var e=this,t=e._self._c;return t("p",[e._v("To apply the polyfill, simply import it in your "),t("strong",[e._v("setupTest.{js|ts}")]),e._v(" file.")])},function(){var e=this,t=e._self._c;return t("p",[t("strong",[e._v("Note:")]),e._v(" If your test includes Porsche Design System components, make sure to wrap the component you"),t("br"),e._v(" want to test with a "),t("code",[e._v("PorscheDesignSystemProvider")]),e._v(" in order to avoid exceptions.")])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("// setupTest.{js|ts}\n\nimport '@porsche-design-system/components-react/jsdom-polyfill';\n")])])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v('// SingleComponent.tsx\n\nimport { useCallback, useState } from \'react\';\nimport { PTabsBar, type TabsBarUpdateEventDetail } from \'@porsche-design-system/components-react/ssr\';\n\nexport const SingleComponent = (): JSX.Element => {\n  const [activeTab, setActiveTab] = useState(0);\n  const onUpdate = useCallback((e: CustomEvent<TabsBarUpdateEventDetail>) => {\n    setActiveTab(e.detail.activeTabIndex);\n  }, []);\n\n  return (\n    <>\n      <PTabsBar activeTabIndex={activeTab} onUpdate={onUpdate} data-testid="host">\n        <button data-testid="button1">Some label</button>\n        <button data-testid="button2">Some label</button>\n        <button data-testid="button3">Some label</button>\n      </PTabsBar>\n      <div data-testid="debug">{`Active Tab: ${activeTab + 1}`}</div>\n    </>\n  );\n};\n')])])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("// SingleComponent.test.tsx\n\nimport { PorscheDesignSystemProvider, componentsReady } from '@porsche-design-system/components-react/ssr';\nimport { render } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\n\ntest('renders Tabs Bar from Porsche Design System and uses its events', async () => {\n  const { getByTestId } = render(\n    <PorscheDesignSystemProvider>\n      {' '}\n      {/* required for the component to work */}\n      <SingleComponent />\n    </PorscheDesignSystemProvider>\n  );\n\n  await componentsReady(); // we need to make sure Porsche Design System components are initialized\n\n  const debug = getByTestId('debug');\n  const button1 = getByTestId('button1');\n  const button2 = getByTestId('button2');\n  const button3 = getByTestId('button3');\n\n  expect(debug.innerHTML).toBe('Active Tab: 1');\n\n  await userEvent.click(button2);\n  expect(debug.innerHTML).toBe('Active Tab: 2');\n\n  await userEvent.click(button3);\n  expect(debug.innerHTML).toBe('Active Tab: 3');\n\n  await userEvent.click(button1);\n  expect(debug.innerHTML).toBe('Active Tab: 1');\n});\n")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("It might be rather redundant to wrap every single test with "),t("code",[e._v("PorscheDesignSystemProvider")]),e._v("."),t("br"),e._v(" Therefore, we offer the following advice.")])},function(){var e=this,t=e._self._c;return t("p",[e._v("To reduce repetitive code you can write a custom helper function that wraps a component in "),t("code",[e._v("PorscheDesignSystemProvider")]),e._v(" and calls the "),t("code",[e._v("render")]),e._v(" function of "),t("code",[e._v("@testing-library/react")]),e._v(":")])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("// helper.tsx\n\nimport { render, RenderResult } from '@testing-library/react';\nimport { PorscheDesignSystemProvider } from '@porsche-design-system/components-react/ssr';\n\nexport const renderWithProvider = (component: JSX.Element): RenderResult => {\n  return render(<PorscheDesignSystemProvider>{component}</PorscheDesignSystemProvider>);\n};\n")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("Alternatively we provide a utility function "),t("code",[e._v("skipCheckForPorscheDesignSystemProviderDuringTests()")]),e._v(" that can be used within your tests."),t("br"),e._v(" It only takes effect during testing since it relies on "),t("code",[e._v("process.env.NODE_ENV === 'test'")]),e._v(".")])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("// setupTest.{js|ts}\nimport { skipCheckForPorscheDesignSystemProviderDuringTests } from '@porsche-design-system/components-react/ssr';\n\nskipCheckForPorscheDesignSystemProviderDuringTests();\n")])])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("// SomeComponent.test.tsx\nimport { skipCheckForPorscheDesignSystemProviderDuringTests } from '@porsche-design-system/components-react/ssr';\n\ndescribe('SomeComponent', () => {\n  beforeEach(() => {\n    // either like this\n    skipCheckForPorscheDesignSystemProviderDuringTests();\n  });\n\n  it('should work', () => {\n    // or like this\n    skipCheckForPorscheDesignSystemProviderDuringTests();\n\n    // ...\n  });\n});\n")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("We provide a utility function "),t("code",[e._v("skipPorscheDesignSystemCDNRequestsDuringTests()")]),e._v(" that can be used within your tests when you use the "),t("code",[e._v("@porsche-design-system/components-react/jsdom-polyfill")]),e._v(" in your setup."),t("br"),e._v(" It will suppress all CDN request of the Porsche Design System.")])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("// setupTest.{js|ts}\nimport { skipPorscheDesignSystemCDNRequestsDuringTests } from '@porsche-design-system/components-react/ssr';\n\nskipPorscheDesignSystemCDNRequestsDuringTests();\n")])])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("// SomeComponent.test.tsx\nimport { skipPorscheDesignSystemCDNRequestsDuringTests } from '@porsche-design-system/components-react/ssr';\n\ndescribe('SomeComponent', () => {\n  beforeEach(() => {\n    // either like this\n    skipPorscheDesignSystemCDNRequestsDuringTests();\n  });\n\n  it('should work', () => {\n    // or like this\n    skipPorscheDesignSystemCDNRequestsDuringTests();\n\n    // ...\n  });\n});\n")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("If you try to submit a form via button click you will encounter issues with "),t("code",[e._v("@testing-library/react")]),e._v(" and "),t("code",[e._v("jsdom")]),e._v(". It is simply not provided (see "),t("a",{attrs:{href:"https://github.com/testing-library/react-testing-library/issues/755"}},[e._v("Github Issue 755")]),e._v(" and "),t("a",{attrs:{href:"https://github.com/jsdom/jsdom/issues/1937"}},[e._v("Github Issue 1937")]),e._v(").")])},function(){var e=this,t=e._self._c;return t("p",[e._v("If you have to test a form submit use "),t("code",[e._v("Simulate")]),e._v(".")])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("import { Simulate } from 'react-dom/test-utils';\n\nconst button = getByText('SomePorscheDesignSystemButton');\n\nSimulate.submit('button');\n")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("You are not able to use "),t("code",[e._v("getByRole")]),e._v(" to query Porsche Design System components when using "),t("code",[e._v("@testing-library")]),e._v(" because it uses default "),t("code",[e._v("roles")]),e._v("."),t("br"),e._v(" For example a "),t("code",[e._v("<button>")]),e._v(" gets the role "),t("code",[e._v("button")]),e._v(" without explicitly setting the attribute. To achieve this it uses "),t("a",{attrs:{href:"https://github.com/A11yance/aria-query"}},[e._v("aria-query")]),e._v(" internally which replicates the "),t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/Accessibility_tree"}},[e._v("Accessibility Tree")]),e._v(", see "),t("a",{attrs:{href:"https://testing-library.com/docs/guide-which-query"}},[e._v("documentation")]),e._v(".")])},function(){var e=this,t=e._self._c;return t("p",[e._v("Therefore, we provide the "),t("code",[e._v("getByRoleShadowed")]),e._v(" utility function that can be used as a drop-in replacement for "),t("code",[e._v("getByRole")]),e._v(".")])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("import { getByRoleShadowed } from '@porsche-design-system/components-react/testing';\n\nit('should work for PButton', async () => {\n  render(<PButton>Button</PButton>);\n  await componentsReady();\n\n  expect(getByRoleShadowed('button')).toBeInTheDocument();\n});\n")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("Other query selectors don't work if you are trying to select an element which is located inside of Shadow DOM."),t("br"),e._v(" As a solution there are "),t("code",[e._v("getByLabelTextShadowed")]),e._v(" and "),t("code",[e._v("getByTextShadowed")]),e._v(".")])},function(){var e=this,t=e._self._c;return t("pre",[t("code",{staticClass:"language-tsx"},[e._v("import { getByTextShadowed } from '@porsche-design-system/components-react/testing';\n\nit('should work for PAccordion', async () => {\n  render(<PAccordion heading=\"Heading\">Content</PAccordion>);\n  await componentsReady();\n\n  const el = getByTextShadowed('Heading');\n  expect(el).toBeInTheDocument();\n  expect(el.tagName).toBe('BUTTON');\n});\n")])])},function(){var e=this,t=e._self._c;return t("p",[e._v("We also provide test examples in our "),t("a",{attrs:{href:"https://github.com/porsche-design-system/sample-integration-react/tree/master/src/tests"}},[e._v("sample integration project")]),e._v(".")])}],r=s("2877"),i={},a=Object(r["a"])(i,n,o,!1,null,null,null);t["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d2302c3.8a6b0f96.js.map