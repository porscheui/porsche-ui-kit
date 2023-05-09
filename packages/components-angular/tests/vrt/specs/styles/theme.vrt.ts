import { getVisualRegressionStatesTester, vrtTest } from '@porsche-design-system/shared/testing';

const id = 'styles-theme';
it('should have no visual regression', async () => {
  expect(await vrtTest(getVisualRegressionStatesTester(), id, `/${id}`)).toBeFalsy();
});
