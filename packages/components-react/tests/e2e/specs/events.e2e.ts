import { ElementHandle, Page } from 'puppeteer';
import { selectNode, goto, waitForComponentsReady } from '../helpers';
import { browser } from '../config';

describe('events', () => {
  let page: Page;
  beforeEach(async () => (page = await browser.newPage()));
  afterEach(async () => await page.close());

  const clickElement = async (el: ElementHandle) => {
    await el.click();
    await page.waitForTimeout(50);
  };

  const getCounterValue = async (el: ElementHandle): Promise<string> =>
    await el.evaluate((element) => element.innerHTML, el);

  describe('pagination', () => {
    xit('should emit events once', async () => {
      await goto(page, 'events');

      const nav = await selectNode(page, 'p-pagination >>> nav');
      const pageChangeEventCounter = await selectNode(page, 'p-pagination + p');
      const [, secondBtn, thirdBtn, fourthBtn] = await nav.$$('.goto');

      await clickElement(secondBtn);
      expect(await getCounterValue(pageChangeEventCounter)).toBe('1');

      await clickElement(thirdBtn);
      expect(await getCounterValue(pageChangeEventCounter)).toBe('2');

      await clickElement(fourthBtn);
      expect(await getCounterValue(pageChangeEventCounter)).toBe('3');
    });
  });

  describe('tabs-bar', () => {
    it('should emit events once', async () => {
      await goto(page, 'events');

      const tabsBar = await selectNode(page, 'p-tabs-bar');
      const tabChangeEventCounter = await selectNode(page, 'p-tabs-bar + p');
      const [firstBtn, secondBtn, thirdBtn] = await tabsBar.$$('button');

      await clickElement(secondBtn);
      expect(await getCounterValue(tabChangeEventCounter)).toBe('1');

      await clickElement(thirdBtn);
      expect(await getCounterValue(tabChangeEventCounter)).toBe('2');

      await clickElement(firstBtn);
      expect(await getCounterValue(tabChangeEventCounter)).toBe('3');
    });
  });

  describe('tabs', () => {
    it('should emit events once', async () => {
      await goto(page, 'events');

      const tabsBar = await selectNode(page, 'p-tabs >>> p-tabs-bar');
      const tabChangeEventCounter = await selectNode(page, 'p-tabs + p');
      const [firstBtn, secondBtn, thirdBtn] = await tabsBar.$$('button');

      await clickElement(secondBtn);
      expect(await getCounterValue(tabChangeEventCounter)).toBe('1');

      await clickElement(thirdBtn);
      expect(await getCounterValue(tabChangeEventCounter)).toBe('2');

      await clickElement(firstBtn);
      expect(await getCounterValue(tabChangeEventCounter)).toBe('3');
    });
  });

  describe('switch', () => {
    it('should emit events once', async () => {
      await goto(page, 'events');

      const switchBtn = await selectNode(page, 'p-switch >>> button');
      const switchChangeEventCounter = await selectNode(page, 'p-switch + p');

      await clickElement(switchBtn);
      expect(await getCounterValue(switchChangeEventCounter)).toBe('1');

      await clickElement(switchBtn);
      expect(await getCounterValue(switchChangeEventCounter)).toBe('2');

      await clickElement(switchBtn);
      expect(await getCounterValue(switchChangeEventCounter)).toBe('3');
    });
  });

  describe('modal', () => {
    it('should emit events once', async () => {
      await goto(page, 'events');

      const modalOpenBtn = await selectNode(page, 'p-modal + p button');
      const modalCloseBtn = await selectNode(page, 'p-modal >>> p-button-pure >>> button');
      const modalCloseEventCounter = await selectNode(page, 'p-modal + p');

      await clickElement(modalOpenBtn);
      await waitForComponentsReady(page);
      await clickElement(modalCloseBtn);
      await waitForComponentsReady(page);
      expect(await getCounterValue(modalCloseEventCounter)).toBe('1 <button>Open Modal</button>');

      await clickElement(modalOpenBtn);
      await waitForComponentsReady(page);
      await clickElement(modalCloseBtn);
      await waitForComponentsReady(page);
      expect(await getCounterValue(modalCloseEventCounter)).toBe('2 <button>Open Modal</button>');

      await clickElement(modalOpenBtn);
      await waitForComponentsReady(page);
      await clickElement(modalCloseBtn);
      await waitForComponentsReady(page);
      expect(await getCounterValue(modalCloseEventCounter)).toBe('3 <button>Open Modal</button>');
    });
  });

  describe('table', () => {
    it('should emit events once', async () => {
      await goto(page, 'events');

      const tableHeadBtn = await selectNode(page, 'p-table-head-cell >>> button');
      const tableSortingChangeEventCounter = await selectNode(page, 'p-table + p');

      await clickElement(tableHeadBtn);
      expect(await getCounterValue(tableSortingChangeEventCounter)).toBe('1');

      await clickElement(tableHeadBtn);
      expect(await getCounterValue(tableSortingChangeEventCounter)).toBe('2');

      await clickElement(tableHeadBtn);
      expect(await getCounterValue(tableSortingChangeEventCounter)).toBe('3');
    });
  });
});
