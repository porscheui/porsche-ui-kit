import {
  getBrowser,
  getStyleOnFocus,
  selectNode, setAttribute, expectedStyleOnFocus,
  setContentWithDesignSystem, waitForInheritedCSSTransition, waitForStencilLifecycle
} from '../helpers';
import { Page } from 'puppeteer';

describe('text', () => {
  let page: Page;

  beforeEach(async () => (page = await getBrowser().newPage()));
  afterEach(async () => await page.close());

  const getHost = () => selectNode(page, 'p-text-list');
  const getLink = () => selectNode(page, 'p-text-list a');

  describe('focus state', () => {
    it('should show outline of slotted <a> when it is focused', async () => {
      await setContentWithDesignSystem(
        page,
        `
        <p-text-list>
          <p-text-list-item>The quick brown fox jumps over the lazy dog</p-text-list-item>
          <p-text-list-item>The quick <a href="#">brown fox</a> jumps over the lazy dog</p-text-list-item>
        </p-text-list>`
      );

      const host = await getHost();
      const link = await getLink();

      expect(await getStyleOnFocus(link)).toBe(expectedStyleOnFocus());

      await setAttribute(host, 'theme', 'dark');
      await waitForStencilLifecycle(page);
      await waitForInheritedCSSTransition(page);

      expect(await getStyleOnFocus(link)).toBe(expectedStyleOnFocus({theme: 'dark'}));
    });
  });
});
