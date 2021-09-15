import {
  forceFocusedHoveredState,
  forceFocusedState,
  forceHoveredState,
  getThemedBodyMarkup,
  GetThemedMarkup,
  setContentWithDesignSystem,
} from '../helpers';
import {
  CSS_TRANSITION_DURATION,
  getVisualRegressionTester,
  getVisualRegressionStatesTester,
  vrtTest,
} from '@porsche-design-system/shared/testing';

describe('Button Pure', () => {
  it('should have no visual regression', async () => {
    expect(
      await vrtTest(getVisualRegressionTester(), 'button-pure', '/#button-pure', {
        scenario: (page) => page.waitForTimeout(CSS_TRANSITION_DURATION),
      })
    ).toBeFalsy();
  });

  it('should have no visual regression for :hover + :focus-visible', async () => {
    const vrt = getVisualRegressionStatesTester();
    expect(
      await vrt.test('button-pure-states', async () => {
        const page = vrt.getPage();

        const head = `<style type="text/css">p-button-pure:not(:last-child) { margin-right: 0.5rem; } div div:not(:first-of-type) { margin-top: 0.5rem }</style>`;

        const getElementsMarkup: GetThemedMarkup = (theme) => `
          <div>
            <p-button-pure theme="${theme}">Label default</p-button-pure>
            <p-button-pure theme="${theme}" loading="true">Label loading</p-button-pure>
            <p-button-pure theme="${theme}">Label default <p slot="subline">Some Subline</p></p-button-pure>
            <p-button-pure theme="${theme}" loading="true">Label loading <p slot="subline">Some Subline</p></p-button-pure>
          </div>
          <div>
            <p-button-pure theme="${theme}" align-label="left">Label align left</p-button-pure>
            <p-button-pure theme="${theme}" align-label="left" icon="logoDelicious">Label align left</p-button-pure>
          </div>
          <div>
            <p-button-pure theme="${theme}" hide-label="true">Without label</p-button-pure>
          </div>
          <div>
            <p-button-pure theme="${theme}" active="true">Label active</p-button-pure>
            <p-button-pure theme="${theme}" active="true">Label active<p slot="subline">Some subline</p></p-button-pure>
          </div>
          <div>
            <p-button-pure theme="${theme}" icon="none">Label icon none</p-button-pure>
            <p-button-pure theme="${theme}" icon="none">Label icon none <p slot="subline">Some slightly longer subline</p></p-button-pure>
          </div>
          <div>
            <p-button-pure theme="${theme}" style="padding: 1rem">Label with custom click-area</p-button-pure>
            <p-button-pure theme="${theme}" hide-label="true" style="padding: 1rem">Label with custom click-area</p-button-pure>
          </div>
          <div>
            <p-button-pure theme="${theme}" stretch="true">Label stretch</p-button-pure>
          </div>
          <div>
            <p-button-pure theme="${theme}" align-label="left" stretch="true">Label stretch align left</p-button-pure>
          </div>`;

        await setContentWithDesignSystem(page, getThemedBodyMarkup(getElementsMarkup), { injectIntoHead: head });

        await forceHoveredState(page, '.hovered p-button-pure >>> button');
        await forceFocusedState(page, '.focused p-button-pure >>> button');
        await forceFocusedHoveredState(page, '.focused-hovered p-button-pure >>> button');
      })
    ).toBeFalsy();
  });
});
