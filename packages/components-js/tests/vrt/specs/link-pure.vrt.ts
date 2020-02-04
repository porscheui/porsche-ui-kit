import 'jasmine';
import {VisualRegressionTester} from '@porsche-ui/visual-regression-tester';
import {getVisualRegressionTester} from '../helpers/setup';

describe('Link Pure', () => {
  let vrt: VisualRegressionTester;

  beforeAll(async () => {
    vrt = await getVisualRegressionTester();
  });

  it('should have no visual regression', async () => {
    expect(
      await vrt.test('link-pure', async () => {
        await vrt.goTo('/src/components/navigation/link-pure/link-pure.test.html');
        await vrt.focus('#test-focus-state');
      })
    ).toBeFalsy();
  });
});
