import { getBrowser, setContentWithDesignSystem } from '../helpers';
import { Page } from 'puppeteer';
import {
  ICONS_CDN_BASE_URL,
  ICONS_MANIFEST,
  MARQUES_CDN_BASE_URL,
  MARQUES_MANIFEST,
  META_ICONS_CDN_BASE_URL,
  META_ICONS_MANIFEST,
} from '@porsche-design-system/assets';

describe('cdn', () => {
  let page: Page;

  beforeEach(async () => (page = await getBrowser().newPage()));
  afterEach(async () => await page.close());

  type Request = { url: string };
  type Response = { url: string; status: number };
  const requests: Request[] = [];
  const responses: Response[] = [];

  beforeEach(async () => {
    await page.setRequestInterception(true);

    requests.length = 0; // clear old array
    responses.length = 0; // clear old array

    page.removeAllListeners('request');
    page.removeAllListeners('response');

    page.on('request', (req) => {
      const url = req.url();

      if (url.includes('cdn.ui.porsche')) {
        requests.push({ url });
      }
      req.continue();
    });

    page.on('response', (resp) => {
      const url = resp.url();
      const status = resp.status();

      if (url.includes('cdn.ui.porsche')) {
        // console.log(url);
        responses.push({ url, status });
      }
    });
  });

  const isStatusNot200 = (item: Response): boolean => item.status !== 200;
  const isStatus400 = (item: Response): boolean => item.status === 400;
  const urlIncludes = (str: string) => (item: Response): boolean => item.url.includes(str);
  const urlStartsWith = (str: string) => (item: Response): boolean => item.url.startsWith(str);
  const fetchUrl = (url: string): Promise<void> =>
    page.evaluate(async (url: string) => {
      await fetch(url);
    }, url);

  describe('.com and .cn domains', () => {
    const assetPaths = {
      components: 'components/porsche-design-system.v',
      styles: 'styles/font-face.min.',
      icons: 'icons/arrow-head-right.min.',
      fonts: 'fonts/porsche-next-w-la-regular.min.',
      marque: 'marque/porsche-marque-trademark.medium.min.',
    };

    const content = `
<p-content-wrapper>
  <p-marque></p-marque>
  <p-headline variant="headline-1">Some Headline</p-headline>
  <p-button>Some label</p-button>
</p-content-wrapper>`;

    it('should request from .com cdn for { cdn: "auto" } when outside of china', async () => {
      await setContentWithDesignSystem(page, content, 'auto');

      const cdnDomain = 'cdn.ui.porsche.com';
      const baseUrl = `https://${cdnDomain}/porsche-design-system`;

      expect(requests.length).toBe(responses.length);
      expect(responses.filter(isStatusNot200).length).toBe(0);
      expect(responses.filter(urlIncludes(cdnDomain)).length).toBe(responses.length);

      expect(responses.filter(urlStartsWith(`${baseUrl}/${assetPaths.components}`)).length).toBe(1);
      expect(responses.filter(urlStartsWith(`${baseUrl}/${assetPaths.styles}`)).length).toBe(1);
      expect(responses.filter(urlStartsWith(`${baseUrl}/${assetPaths.icons}`)).length).toBe(1);
      expect(responses.filter(urlStartsWith(`${baseUrl}/${assetPaths.fonts}`)).length).toBe(1);
      expect(responses.filter(urlStartsWith(`${baseUrl}/${assetPaths.marque}`)).length).toBe(1);

      const responseErrors = responses.filter(isStatus400);
      if (responseErrors.length) {
        console.log('status 400', responseErrors);
      }
    });

    it('should request always from .cn cdn for { cdn: "cn" }', async () => {
      await setContentWithDesignSystem(page, content, 'cn');

      const cdnDomain = 'cdn.ui.porsche.cn';
      const baseUrl = `https://${cdnDomain}/porsche-design-system`;

      expect(requests.length).toBe(responses.length);
      expect(responses.filter(isStatusNot200).length).toBe(0);
      expect(responses.filter(urlIncludes(cdnDomain)).length).toBe(responses.length);

      expect(responses.filter(urlStartsWith(`${baseUrl}/${assetPaths.components}`)).length).toBe(1);
      expect(responses.filter(urlStartsWith(`${baseUrl}/${assetPaths.styles}`)).length).toBe(1);
      expect(responses.filter(urlStartsWith(`${baseUrl}/${assetPaths.icons}`)).length).toBe(1);
      expect(responses.filter(urlStartsWith(`${baseUrl}/${assetPaths.fonts}`)).length).toBe(1);
      expect(responses.filter(urlStartsWith(`${baseUrl}/${assetPaths.marque}`)).length).toBe(1);

      const responseErrors = responses.filter(isStatus400);
      if (responseErrors.length) {
        console.log('status 400', responseErrors);
      }
    });
  });

  describe('assets', () => {
    let responseCounter = 0;

    const bulkRequestItems = (items: string[], baseUrl: string) => {
      responseCounter = 0;
      for (const item of items) {
        ((item: string) => {
          it(`should exist: ${item}`, async () => {
            await fetchUrl(`${baseUrl}/${item}`);
            expect(responses.filter(isStatusNot200).length).toBe(0);
            responseCounter += responses.length;

            const responseErrors = responses.filter(isStatus400);
            if (responseErrors.length) {
              console.log('status 400', responseErrors);
            }
          });
        })(item);
      }
    };

    describe('icons', () => {
      const icons = Object.values(ICONS_MANIFEST);
      bulkRequestItems(icons, ICONS_CDN_BASE_URL);

      it(`should have all ${icons.length} icons`, () => {
        expect(responseCounter).toBe(icons.length);
      });
    });

    describe('meta-icons', () => {
      const metaIcons = Object.values(META_ICONS_MANIFEST)
        .map(Object.values)
        // @ts-ignore
        .flat();
      bulkRequestItems(metaIcons, META_ICONS_CDN_BASE_URL);

      it(`should have all ${metaIcons.length} meta-icons`, () => {
        expect(responseCounter).toBe(metaIcons.length);
      });
    });

    describe('marque', () => {
      const marques = Object.values(MARQUES_MANIFEST)
        .map((x) => Object.values(x).map(Object.values))
        // @ts-ignore
        .flat(2);
      bulkRequestItems(marques, MARQUES_CDN_BASE_URL);

      it(`should have all ${marques.length} marques`, () => {
        expect(responseCounter).toBe(marques.length);
      });
    });
  });
});
