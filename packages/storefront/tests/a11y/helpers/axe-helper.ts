import { AxeBuilder } from '@axe-core/playwright';
import { type Page, expect } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const console = require('console'); // workaround for nicer logs

const AXE_RESULTS_DIR = path.resolve(__dirname, '../results');
fs.mkdirSync(AXE_RESULTS_DIR, { recursive: true });
fs.readdirSync(AXE_RESULTS_DIR)
  .filter((file) => file.match(/^a11y-[a-z\d-]+\.json$/))
  .forEach((file) => fs.rmSync(path.resolve(AXE_RESULTS_DIR, file)));

export const a11yAnalyze = async (
  page: Page,
  opts?: { suffix?: string; excludeSelector?: string; includeSelector?: string }
) => {
  const pageUrl = page.url();
  const { suffix, includeSelector, excludeSelector } = opts || {};

  // docs: https://github.com/dequelabs/axe-core-npm/tree/develop/packages/playwright
  const axe = new AxeBuilder({ page })
    // defaults aren't good enough: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#axe-core-tags
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']);

  if (includeSelector) {
    axe.include(includeSelector);
  }
  if (excludeSelector) {
    axe.exclude(excludeSelector);
  }

  const result = await axe.analyze();

  const { length: amountOfViolations } = result.violations.filter((violation) => {
    // TODO: needs to be re-enabled with issue #1919
    return violation.id !== 'target-size';
  });

  if (amountOfViolations > 0) {
    const testId = (pageUrl.replace(/\//g, '-') || 'root') + (suffix ? `-${suffix}` : '');
    fs.writeFileSync(path.resolve(AXE_RESULTS_DIR, 'a11y-' + testId + '.json'), JSON.stringify(result, null, 2));

    // map strangely nested and unreadable violations to readable and usable element selectors
    const output = result.violations
      .map((item) => {
        const title = `${item.id} (${item.impact})` + (suffix ? ` on ${suffix}` : '');

        const selectors = item.nodes
          .map(
            (node) =>
              '– ' +
              (Array.isArray(node.target)[0] ? (node.target[0] as unknown as string[]) : node.target).join(' >>> ')
          )
          .join('\n');
        return `${title}:\n${selectors}`;
      })
      .join('\n');

    console.log(output);
  }

  expect(amountOfViolations).toBe(0);
};
