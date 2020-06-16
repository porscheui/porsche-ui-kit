import {
  getAttributeFromHandle,
  getClassFromHandle, getElementStyle,
  selectNode,
  setContentWithDesignSystem, waitForInnerHTMLChange
} from '../helpers';
import { Page } from 'puppeteer';
import { getBrowser } from '../helpers/setup';

describe('radio-button-wrapper', () => {

  let page: Page;

  beforeEach(async () => page = await getBrowser().newPage());
  afterEach(async () => await page.close());

  const getRadioButtonHost = () => selectNode(page, 'p-radio-button-wrapper');
  const getRadioButtonFakeInput = () => selectNode(page, 'p-radio-button-wrapper >>> .p-radio-button-wrapper__fake-radio-button');
  const getRadioButtonRealInput = () => selectNode(page, 'p-radio-button-wrapper input');
  const getRadioButtonLabel = () => selectNode(page, 'p-radio-button-wrapper >>> .p-radio-button-wrapper__label-text');
  const getRadioButtonMessage = () => selectNode(page, 'p-radio-button-wrapper >>> .p-radio-button-wrapper__message');

  it('should render', async () => {
    await setContentWithDesignSystem(page, `
      <p-radio-button-wrapper label="Some label">
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>
    `);
    const el = await getRadioButtonFakeInput();
    expect(el).toBeDefined();
  });

  it('should add aria-label to support screen readers properly', async () => {
    await setContentWithDesignSystem(page, `
      <p-radio-button-wrapper label="Some label">
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>
    `);
    const input = await getRadioButtonRealInput();
    expect(await getAttributeFromHandle(input, 'aria-label')).toBe('Some label');
  });

  it('should add aria-label with message text to support screen readers properly', async () => {
    await setContentWithDesignSystem(page, `
      <p-radio-button-wrapper label="Some label" message="Some error message" state="error">
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>
    `);
    const input = await getRadioButtonRealInput();
    expect(await getAttributeFromHandle(input, 'aria-label')).toBe('Some label. Some error message');
  });

  it('should not render label if label prop is not defined but should render if changed programmatically', async () => {
    await setContentWithDesignSystem(page, `
      <p-radio-button-wrapper>
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>`);

    const radioComponent = await getRadioButtonHost();
    expect(await getRadioButtonLabel()).toBeNull();

    await radioComponent.evaluate(el => el.setAttribute('label', 'Some label'));
    await waitForInnerHTMLChange(page, radioComponent);
    expect(await getRadioButtonLabel()).not.toBeNull();
  });

  it('should add/remove message text and update aria-label attribute with message if state changes programmatically', async () => {
    await setContentWithDesignSystem(page, `
      <p-radio-button-wrapper label="Some label">
        <input type="radio" name="some-name"/>
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>`);

    const radioComponent = await getRadioButtonHost();
    const input = await selectNode(page, 'input');

    expect(await getRadioButtonMessage()).toBeNull();
    await radioComponent.evaluate(el => el.setAttribute('state', 'error'));
    await radioComponent.evaluate(el => el.setAttribute('message', 'Some error message'));
    await waitForInnerHTMLChange(page, radioComponent);

    expect(await getRadioButtonMessage()).toBeDefined();
    expect(await getAttributeFromHandle(await getRadioButtonMessage(), 'role')).toEqual('alert');
    expect(await getAttributeFromHandle(input, 'aria-label')).toEqual('Some label. Some error message');

    await radioComponent.evaluate(el => el.setAttribute('state', 'success'));
    await radioComponent.evaluate(el => el.setAttribute('message', 'Some success message'));
    await waitForInnerHTMLChange(page, radioComponent);

    expect(await getRadioButtonMessage()).toBeDefined();
    expect(await getAttributeFromHandle(await getRadioButtonMessage(), 'role')).toBeNull();
    expect(await getAttributeFromHandle(input, 'aria-label')).toEqual('Some label. Some success message');

    await radioComponent.evaluate(el => el.setAttribute('state', 'none'));
    await radioComponent.evaluate(el => el.setAttribute('message', ''));
    await waitForInnerHTMLChange(page, radioComponent);

    expect(await getRadioButtonMessage()).toBeNull();
    expect(await getAttributeFromHandle(input, 'aria-label')).toEqual('Some label');
  });

  it('should check radio-button when input is clicked', async () => {
    await setContentWithDesignSystem(page, `
      <p-radio-button-wrapper label="Some label" id="radio-1">
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>
      <p-radio-button-wrapper label="Some label" id="radio-2">
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>`);

    const radioComponent1Label = await selectNode(page, '#radio-1 >>> .p-radio-button-wrapper__label');
    const fakeRadio1 = await selectNode(page, '#radio-1 >>> .p-radio-button-wrapper__fake-radio-button');
    const fakeRadio2 = await selectNode(page, '#radio-2 >>> .p-radio-button-wrapper__fake-radio-button');
    const input1 = await selectNode(page, '#radio-1 > input[type="radio"]');
    const input2 = await selectNode(page, '#radio-2 > input[type="radio"]');

    expect(await getClassFromHandle(fakeRadio1)).not.toContain('p-radio-button-wrapper__fake-radio-button--checked');

    await input1.click();
    await waitForInnerHTMLChange(page, radioComponent1Label);

    expect(await getClassFromHandle(fakeRadio1)).toContain('p-radio-button-wrapper__fake-radio-button--checked');

    await input2.click();
    await waitForInnerHTMLChange(page, radioComponent1Label);

    expect(await getClassFromHandle(fakeRadio1)).not.toContain('p-radio-button-wrapper__fake-radio-button--checked');
    expect(await getClassFromHandle(fakeRadio2)).toContain('p-radio-button-wrapper__fake-radio-button--checked');
  });

  it('should check radio-button when label text is clicked', async () => {
    await setContentWithDesignSystem(page, `
      <p-radio-button-wrapper label="Some label" id="radio-1">
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>
      <p-radio-button-wrapper label="Some label" id="radio-2">
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>`);

    const radioComponent1Label = await selectNode(page, '#radio-1 >>> .p-radio-button-wrapper__label');
    const fakeRadio1 = await selectNode(page, '#radio-1 >>> .p-radio-button-wrapper__fake-radio-button');
    const fakeRadio2 = await selectNode(page, '#radio-2 >>> .p-radio-button-wrapper__fake-radio-button');
    const labelText1 = await selectNode(page, '#radio-1 >>> .p-radio-button-wrapper__label-text');
    const labelText2 = await selectNode(page, '#radio-2 >>> .p-radio-button-wrapper__label-text');

    expect(await getClassFromHandle(fakeRadio1)).not.toContain('p-radio-button-wrapper__fake-radio-button--checked');

    await labelText1.click();
    await waitForInnerHTMLChange(page, radioComponent1Label);

    expect(await getClassFromHandle(fakeRadio1)).toContain('p-radio-button-wrapper__fake-radio-button--checked');

    await labelText2.click();
    await waitForInnerHTMLChange(page, radioComponent1Label);

    expect(await getClassFromHandle(fakeRadio1)).not.toContain('p-radio-button-wrapper__fake-radio-button--checked');
    expect(await getClassFromHandle(fakeRadio2)).toContain('p-radio-button-wrapper__fake-radio-button--checked');
  });

  it('should check radio-button when radio-button is changed programmatically', async () => {
    await setContentWithDesignSystem(page, `
      <p-radio-button-wrapper label="Some label" id="radio-1">
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>
      <p-radio-button-wrapper label="Some label" id="radio-2">
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>`);

    const radioComponent1Label = await selectNode(page, '#radio-1 >>> .p-radio-button-wrapper__label');
    const fakeRadio1 = await selectNode(page, '#radio-1 >>> .p-radio-button-wrapper__fake-radio-button');
    const fakeRadio1Input = await selectNode(page, '#radio-1 > input');
    const fakeRadio2 = await selectNode(page, '#radio-2 >>> .p-radio-button-wrapper__fake-radio-button');
    const fakeRadio2Input = await selectNode(page, '#radio-2 > input');

    expect(await getClassFromHandle(fakeRadio1)).not.toContain('p-radio-button-wrapper__fake-radio-button--checked');
    expect(await getClassFromHandle(fakeRadio2)).not.toContain('p-radio-button-wrapper__fake-radio-button--checked');

    await fakeRadio1Input.evaluate(el => el.setAttribute('checked', 'true'));
    await waitForInnerHTMLChange(page, radioComponent1Label);

    expect(await getClassFromHandle(fakeRadio1)).toContain('p-radio-button-wrapper__fake-radio-button--checked');

    await fakeRadio2Input.evaluate(el => el.setAttribute('checked', 'true'));
    await waitForInnerHTMLChange(page, radioComponent1Label);

    expect(await getClassFromHandle(fakeRadio1)).not.toContain('p-radio-button-wrapper__fake-radio-button--checked');
    expect(await getClassFromHandle(fakeRadio2)).toContain('p-radio-button-wrapper__fake-radio-button--checked');
  });

  it('should disable radio-button when radio-button is set disabled programmatically', async () => {
    await setContentWithDesignSystem(page, `
      <p-radio-button-wrapper label="Some label" id="radio-1">
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>`);

    const radioComponent1Label = await selectNode(page, '#radio-1 >>> .p-radio-button-wrapper__label');
    const fakeRadio1 = await selectNode(page, '#radio-1 >>> .p-radio-button-wrapper__fake-radio-button');
    const fakeRadio1Input = await selectNode(page, '#radio-1 > input');

    expect(await getClassFromHandle(fakeRadio1)).not.toContain('p-radio-button-wrapper__fake-radio-button--disabled');

    await fakeRadio1Input.evaluate((el: HTMLInputElement) => el.disabled = true);
    await waitForInnerHTMLChange(page, radioComponent1Label);

    expect(await getClassFromHandle(fakeRadio1)).toContain('p-radio-button-wrapper__fake-radio-button--disabled');

    await fakeRadio1Input.evaluate((el: HTMLInputElement) => el.disabled = false);
    await waitForInnerHTMLChange(page, radioComponent1Label);

    expect(await getClassFromHandle(fakeRadio1)).not.toContain('p-radio-button-wrapper__fake-radio-button--disabled');
  });

  describe('hover state', () => {

    it('should change box-shadow color when fake radio button is hovered', async () => {
      await setContentWithDesignSystem(page, `
      <p-radio-button-wrapper label="Some label" id="radio-1">
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>`);

      const fakeRadioButton = await getRadioButtonFakeInput();
      const initialBoxShadow = await getElementStyle(fakeRadioButton, 'boxShadow');

      await fakeRadioButton.hover();

      expect(await getElementStyle(fakeRadioButton, 'boxShadow', { waitForTransition: true })).not.toBe(initialBoxShadow);
    });

    it('should change box-shadow color of fake radio button when label text is hovered', async () => {
      await setContentWithDesignSystem(page, `
      <p-radio-button-wrapper label="Some label" id="radio-1">
        <input type="radio" name="some-name"/>
      </p-radio-button-wrapper>`);

      const fakeRadioButton = await getRadioButtonFakeInput();
      const labelText = await getRadioButtonLabel();

      const initialBoxShadow = await getElementStyle(fakeRadioButton, 'boxShadow');

      await labelText.hover();

      expect(await getElementStyle(fakeRadioButton, 'boxShadow', { waitForTransition: true })).not.toBe(initialBoxShadow);
    });
  });
});
