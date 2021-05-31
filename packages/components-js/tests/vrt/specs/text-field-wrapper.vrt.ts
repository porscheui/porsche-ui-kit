import { getVisualRegressionStatesTester, getVisualRegressionTester, testOptions } from '../helpers';
import {
  CSS_ANIMATION_DURATION,
  forceFocused,
  forceFocusedHovered,
  forceHovered,
  getBody,
  setContentWithDesignSystem,
} from '../../e2e/helpers';

describe('Text Field Wrapper', () => {
  it('should have no visual regression', async () => {
    const vrt = getVisualRegressionTester();
    expect(
      await vrt.test(
        'text-field-wrapper',
        async () => {
          await vrt.goTo('/#text-field-wrapper');
        },
        testOptions
      )
    ).toBeFalsy();
  });

  it('should have no visual regression for :hover + :focus-visible', async () => {
    const vrt = getVisualRegressionStatesTester();
    expect(
      await vrt.test('text-field-wrapper-states', async () => {
        const page = await vrt.getPage();

        const head = `
          <link rel="stylesheet" href="styles.css" />
          <style type="text/css">p-text-field-wrapper:not(:last-child) { margin-bottom: 16px; }</style>`;

        const getElements = (): string => `
          <p-text-field-wrapper label="Some label" message="Some error validation message.">
            <input type="text" name="some-name" />
          </p-text-field-wrapper>
          <p-text-field-wrapper label="Some label" state="error" message="Some error validation message.">
            <input type="text" name="some-name" />
          </p-text-field-wrapper>
          <p-text-field-wrapper label="Some label" state="success" message="Some success validation message.">
            <input type="text" name="some-name" />
          </p-text-field-wrapper>`;

        await setContentWithDesignSystem(page, getBody(getElements), { injectIntoHead: head });

        await forceHovered(page, '.hovered > p-text-field-wrapper input[type="text"]');
        await forceFocused(page, '.focused > p-text-field-wrapper input[type="text"]');
        await forceFocusedHovered(page, '.focused-hovered > p-text-field-wrapper input[type="text"]');

        //wait for all style transitions to finish
        await page.waitForTimeout(CSS_ANIMATION_DURATION);
      })
    ).toBeFalsy();
  });
});
