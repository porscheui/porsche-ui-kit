import {
  defaultViewports,
  getVisualRegressionSkeletonTester,
  getVisualRegressionTester,
  vrtTest,
} from '@porsche-design-system/shared/testing';

it.each(defaultViewports)('should have no visual regression for viewport %s', async (viewport) => {
  expect(await vrtTest(getVisualRegressionTester(viewport), 'text', '/text')).toBeFalsy();
});

it('should have no visual regression for skeleton', async () => {
  expect(await vrtTest(getVisualRegressionSkeletonTester(), 'text-skeleton', '/text-skeleton')).toBeFalsy();
});
