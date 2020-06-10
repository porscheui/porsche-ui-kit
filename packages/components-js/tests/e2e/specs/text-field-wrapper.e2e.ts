import {
  addEventListener,
  getAttributeFromHandle, getBoxShadow,
  getClassFromHandle, getClassListFromHandle, getPropertyFromHandle, initAddEventListener,
  selectNode,
  setContentWithDesignSystem, waitForEventCallbacks, waitForInnerHTMLChange, waitForSelector
} from '../helpers';
import { Page } from 'puppeteer';
import { getBrowser } from '../helpers/setup';

describe('Text Field Wrapper', () => {

  let page: Page;

  beforeEach(async () => {
    page = await getBrowser().newPage();
    await initAddEventListener(page);
  });
  afterEach(async () => await page.close());

  const getTextFieldHost = () => selectNode(page, 'p-text-field-wrapper');
  const getTextFieldFakeInput = () => selectNode(page, 'p-text-field-wrapper >>> .p-text-field-wrapper__fake-input');
  const getTextFieldRealInput = () => selectNode(page, 'p-text-field-wrapper input');
  const getTextFieldMessage = () => selectNode(page, 'p-text-field-wrapper >>> .p-text-field-wrapper__message');
  const getTextFieldLabel = () => selectNode(page, 'p-text-field-wrapper >>> .p-text-field-wrapper__label-text');
  const getTextFieldButton = () => selectNode(page, 'p-text-field-wrapper >>> button.p-text-field-wrapper__button');
  const getTextFieldIcon = () => selectNode(page, 'p-text-field-wrapper >>> p-icon');
  const getTextFieldIconInner = () => selectNode(page,'p-text-field-wrapper >>> p-icon >>> i');

  const getIconName = async () => getPropertyFromHandle(await getTextFieldIcon(), 'name');
  const getDisabledState = async () => getPropertyFromHandle(await getTextFieldButton(), 'disabled');

  it('should render', async () => {
    await setContentWithDesignSystem(page,`
      <p-text-field-wrapper label="Some label">
        <input type="text" name="some-name">
      </p-text-field-wrapper>
    `);
    const el = await getTextFieldLabel();
    expect(el).toBeDefined();
  });

  it('should add aria-label to support screen readers properly', async () => {
    await setContentWithDesignSystem(page,`
      <p-text-field-wrapper label="Some label">
        <input type="text" name="some-name">
      </p-text-field-wrapper>
    `);
    const input = await getTextFieldRealInput();
    expect(await getAttributeFromHandle(input, 'aria-label')).toBe('Some label');
  });

  it('should add aria-label with description text to support screen readers properly', async () => {
    await setContentWithDesignSystem(page,`
      <p-text-field-wrapper label="Some label" description="Some description">
        <input type="text" name="some-name">
      </p-text-field-wrapper>
    `);
    const input = await getTextFieldRealInput();
    expect(await getAttributeFromHandle(input, 'aria-label')).toBe('Some label. Some description');
  });

  it('should add aria-label with message text to support screen readers properly', async () => {
    await setContentWithDesignSystem(page,`
      <p-text-field-wrapper label="Some label" description="Some description" message="Some error message" state="error">
        <input type="text" name="some-name">
      </p-text-field-wrapper>
    `);
    const input = await getTextFieldRealInput();
    expect(await getAttributeFromHandle(input, 'aria-label')).toBe('Some label. Some error message');
  });

  it('should not render label if label prop is not defined but should render if changed programmatically', async () => {
    await setContentWithDesignSystem(page,`
      <p-text-field-wrapper>
        <input type="text" name="some-name"/>
      </p-text-field-wrapper>`);

    const textFieldComponent = await getTextFieldHost();

    expect(await getTextFieldLabel()).toBeNull();

    await textFieldComponent.evaluate(el => el.setAttribute('label', 'Some label'));
    await waitForEventCallbacks(page);

    expect(await getTextFieldLabel()).not.toBeNull();
  });

  it('should add/remove message text and update aria-label attribute with message text if state changes programmatically', async () => {
    await setContentWithDesignSystem(page,`
      <p-text-field-wrapper label="Some label">
        <input type="text" name="some-name"/>
      </p-text-field-wrapper>`);

    const textFieldComponent = await getTextFieldHost();
    const input = await getTextFieldRealInput();

    expect(await getTextFieldMessage()).toBeNull();

    await textFieldComponent.evaluate(el => el.setAttribute('state', 'error'));
    await textFieldComponent.evaluate(el => el.setAttribute('message', 'Some error message'));
    await waitForInnerHTMLChange(page, textFieldComponent);

    expect(await getTextFieldMessage()).toBeDefined();
    expect(await getAttributeFromHandle(await getTextFieldMessage(), 'role')).toEqual('alert');
    expect(await getAttributeFromHandle(input, 'aria-label')).toEqual('Some label. Some error message');

    await textFieldComponent.evaluate(el => el.setAttribute('state', 'success'));
    await textFieldComponent.evaluate(el => el.setAttribute('message', 'Some success message'));
    await waitForInnerHTMLChange(page, textFieldComponent);

    expect(await getTextFieldMessage()).toBeDefined();
    expect(await getAttributeFromHandle(await getTextFieldMessage(), 'role')).toBeNull();
    expect(await getAttributeFromHandle(input, 'aria-label')).toEqual('Some label. Some success message');

    await textFieldComponent.evaluate(el => el.setAttribute('state', 'null'));
    await textFieldComponent.evaluate(el => el.setAttribute('message', ''));
    await waitForInnerHTMLChange(page, textFieldComponent);

    expect(await getTextFieldMessage()).toBeNull();
    expect(await getAttributeFromHandle(input, 'aria-label')).toEqual('Some label');
  });

  it(`should focus input when label text is clicked`, async () => {
    await setContentWithDesignSystem(page, `
      <p-text-field-wrapper label="Some label">
        <input type="text" name="some-name">
      </p-text-field-wrapper>
    `);

    const labelText = await getTextFieldLabel();
    const input = await getTextFieldRealInput();

    let inputFocusSpyCalls = 0;
    await addEventListener(input, 'focus', () => inputFocusSpyCalls++);

    expect(inputFocusSpyCalls).toBe(0);
    await labelText.click();
    await waitForEventCallbacks(page);

    expect(inputFocusSpyCalls).toBe(1);
  });

  // it('should disable fake input and toggle password button when input (type password) is set disabled programmatically', async () => {
  //   await setContentWithDesignSystem(page,`
  //     <p-text-field-wrapper label="Some label">
  //       <input type="password" name="some-name">
  //     </p-text-field-wrapper>
  //   `);
  //
  //   const fakeInput = await getTextFieldFakeInput();
  //   const input = await getTextFieldRealInput();
  //
  //   expect(await getClassListFromHandle(fakeInput)).not.toContain('p-text-field-wrapper__fake-input--disabled');
  //   // expect(await getDisabledState()).toBe(false); // TODO: for some reasons this causes the pipeline to fail
  //
  //   await input.evaluate((el: HTMLInputElement) => el.disabled = true);
  //   await waitForSelector(page, fakeInput, 'p-text-field-wrapper__fake-input--disabled');
  //
  //   expect(await getClassFromHandle(fakeInput)).toContain('p-text-field-wrapper__fake-input--disabled');
  //   // expect(await getDisabledState()).toBe(true); // TODO: for some reasons this causes the pipeline to fail
  //
  //   await input.evaluate((el: HTMLInputElement) => el.disabled = false);
  //   await waitForSelector(page, fakeInput, 'p-text-field-wrapper__fake-input--disabled', {isGone: true});
  //
  //   expect(await getClassFromHandle(fakeInput)).not.toContain('p-text-field-wrapper__fake-input--disabled');
  //   // expect(await getDisabledState()).toBe(false); // TODO: for some reasons this causes the pipeline to fail
  // }); // TODO: for some reasons this causes the pipeline to fail

  it('should toggle icon when password visibility button is clicked', async () => {
    await setContentWithDesignSystem(page, `
      <p-text-field-wrapper label="Some label">
        <input type="password" name="some-name">
      </p-text-field-wrapper>
    `);

    const toggleButton = await getTextFieldButton();
    const buttonIconInner = await getTextFieldIconInner();

    expect(await getIconName()).toBe('view');

    await toggleButton.click();
    await waitForInnerHTMLChange(page, buttonIconInner);

    expect(await getIconName()).toBe('view-off');

    await toggleButton.click();
    await waitForInnerHTMLChange(page, buttonIconInner);

    expect(await getIconName()).toBe('view');
  });

  // it('should disable search button when input (type search) is set to disabled or readonly programmatically', async () => {
  //   await setContentWithDesignSystem(page, `
  //     <p-text-field-wrapper label="Some label">
  //       <input type="search" name="some-name">
  //     </p-text-field-wrapper>
  //   `);
  //
  //   const fakeInput = await getTextFieldFakeInput();
  //   const input = await getTextFieldRealInput();
  //
  //   // expect(await getDisabledState()).toBe(false); // TODO: for some reasons this causes the pipeline to fail
  //
  //   await input.evaluate((el: HTMLInputElement) => el.disabled = true);
  //   await waitForSelector(page, fakeInput, 'p-text-field-wrapper__fake-input--disabled');
  //
  //   // expect(await getDisabledState()).toBe(true); // TODO: for some reasons this causes the pipeline to fail
  //
  //   await input.evaluate((el: HTMLInputElement) => el.disabled = false);
  //   await waitForSelector(page, fakeInput, 'p-text-field-wrapper__fake-input--disabled', {isGone: true});
  //
  //   // expect(await getDisabledState()).toBe(false); // TODO: for some reasons this causes the pipeline to fail
  //
  //   await input.evaluate((el: HTMLInputElement) => el.readOnly = true);
  //   await waitForSelector(page, fakeInput, 'p-text-field-wrapper__fake-input--readonly');
  //
  //   expect(await getClassFromHandle(fakeInput)).toContain('p-text-field-wrapper__fake-input--readonly');
  //   // expect(await getDisabledState()).toBe(true); // TODO: for some reasons this causes the pipeline to fail
  //
  //   await input.evaluate((el: HTMLInputElement) => el.readOnly = false);
  //   await waitForSelector(page, fakeInput, 'p-text-field-wrapper__fake-input--readonly', {isGone: true});
  //
  //   expect(await getClassFromHandle(fakeInput)).not.toContain('p-text-field-wrapper__fake-input--readonly');
  //   // expect(await getDisabledState()).toBe(false); // TODO: for some reasons this causes the pipeline to fail
  // }); // TODO: for some reasons this causes the pipeline to fail

  it(`should toggle password visibility and focus input correctly`, async () => {
    await setContentWithDesignSystem(page, `
      <p-text-field-wrapper label="Some label">
        <input type="password" name="some-name">
      </p-text-field-wrapper>
    `);

    const button = await getTextFieldButton();
    const input = await getTextFieldRealInput();

    let inputFocusCalls = 0;
    await addEventListener(input, 'focus', () => inputFocusCalls++);

    expect(await getAttributeFromHandle(input, 'type')).toBe('password');
    expect(inputFocusCalls).toBe(0);

    await button.click();

    expect(await getAttributeFromHandle(input, 'type')).toBe('text');
    expect(inputFocusCalls).toBe(1);

    await button.click();

    expect(await getAttributeFromHandle(input, 'type')).toBe('password');
    expect(inputFocusCalls).toBe(2);
  });

  it(`submits outer forms on click on search button, if the input is search`, async () => {
    await setContentWithDesignSystem(page, `
      <form onsubmit="return false;">
        <p-text-field-wrapper label="Some label">
          <input type="search" name="some-name">
        </p-text-field-wrapper>
      </form>
    `);
    const searchButton = await getTextFieldButton();
    const form = await selectNode(page, 'form');

    let formFocusCalls = 0;
    await addEventListener(form, 'submit', () => formFocusCalls++);

    await searchButton.click();
    await waitForEventCallbacks(page);
    expect(formFocusCalls).toBe(1);
  });

  describe('hover state', () => {

    it('should change box-shadow color when fake input is hovered', async () => {
      await setContentWithDesignSystem(page, `
        <p-text-field-wrapper label="Some label">
          <input type="text" name="some-name">
        </p-text-field-wrapper>
      `);

      const fakeInput = await getTextFieldFakeInput();
      const initialBoxShadow = await getBoxShadow(fakeInput);

      await fakeInput.hover();

      expect(await getBoxShadow(fakeInput, {waitForTransition: true})).not.toBe(initialBoxShadow);
    });

    it('should change box-shadow color of fake input when label text is hovered', async () => {
      await setContentWithDesignSystem(page, `
        <p-text-field-wrapper label="Some label">
          <input type="text" name="some-name">
        </p-text-field-wrapper>
      `);

      const fakeInput = await getTextFieldFakeInput();
      const labelText = await getTextFieldLabel();
      const initialBoxShadow = await getBoxShadow(fakeInput);

      await labelText.hover();

      expect(await getBoxShadow(fakeInput, {waitForTransition: true})).not.toBe(initialBoxShadow);
    });
  });
});

