import { VisualRegressionTester } from '@porsche-design-system/visual-regression-tester';
import { getVisualRegressionTester } from '../helpers/setup';

describe('js-focus-custom-pseudo', () => {
  let vrt: VisualRegressionTester;

  beforeAll(() => {
    vrt = getVisualRegressionTester();
  });

  it('should have no visual regression', async () => {
    expect(
      await vrt.test(
        'focus-custom-pseudo',
        async () => {
          await vrt.goTo('/#/js-focus');
          await vrt.focus('#focusable-element-custom-pseudo');
        },
        { regressionSuffix: 'js' }
      )
    ).toBeFalsy();
  });
});
