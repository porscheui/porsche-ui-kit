import { getVisualRegressionTester, testOptions } from '../helpers';

describe('Select Wrapper', () => {
  it('should have no visual regression', async () => {
    const vrt = getVisualRegressionTester();
    expect(
      await vrt.test(
        'select-wrapper',
        async () => {
          await vrt.goTo('/select-wrapper');
          await vrt.click('#test-focus-state');
          await vrt.getPage().waitFor(1000);
        },
        testOptions
      )
    ).toBeFalsy();
  });
});
