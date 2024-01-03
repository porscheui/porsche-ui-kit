import * as fs from 'fs';
import * as path from 'path';
import * as globby from 'globby';
import { capitalCase } from 'change-case';
import type { TagName } from '@porsche-design-system/shared';

const removeBuiltWith = (str: string): string =>
  str.replace(/\s+----------------------------------------------\s+\*Built with.*/, '');

const removeAutoGeneratedBelow = (str: string): string => str.replace(/\s+<!-- Auto Generated Below -->\s/, '');

const adjustHeadlines = (str: string): string => {
  let [, tagName, pTagName] = (str.match(/(# (.*))/) as [string, string, TagName]) || [];
  const cleanedTagName = tagName.replace(/^#\sp-/, '');
  const componentHeadline = capitalCase(cleanedTagName);

  // replacements for multi prop pages where the h1 is not the component but rather the whole multi prop category
  const h1Replacements: { [key in TagName]?: string } = {
    'p-flex': 'Flex',
    'p-flyout-navigation': 'Flyout Navigation',
    'p-grid': 'Grid',
    'p-multi-select': 'Multi Select',
    'p-segmented-control': 'Segmented Control',
    'p-stepper-horizontal': 'Stepper Horizontal',
    'p-table': 'Table',
    'p-tabs': 'Tabs',
  };

  // all component names on multi prop pages
  const multiPropReplacements: TagName[] = [
    ...(Object.keys(h1Replacements) as TagName[]),
    'p-flex-item',
    'p-flyout-navigation-item',
    'p-grid-item',
    'p-multi-select-option',
    'p-stepper-horizontal-item',
    'p-segmented-control-item',
    'p-table-cell',
    'p-table-head-cell',
    'p-tabs-item',
  ];

  // append # to component names on multi prop pages to restore hierarchy
  if (multiPropReplacements.includes(pTagName)) {
    str = str.replace(/(#+)\s/g, '$1# ');
  }

  let headline: string;
  // depends on the order of components passed in the storefront.config.js
  // extend the multi prop page by the multi prop category
  if (h1Replacements[pTagName]) {
    headline = `# ${h1Replacements[pTagName]}\n\n## ${componentHeadline}`;
    tagName = '#' + tagName;
  } else {
    headline = `# ${componentHeadline}`;
  }

  return str.replace(tagName, headline);
};

const fixMethods = (str: string): string =>
  str
    .replace(/(#+\s)`/g, '`') // remove headline hashes before code
    .replace(/#+\sReturns[\s\S]*?`\n/g, ''); // remove return types

const replacePropsTable =
  (componentName: string): ((str: string) => string) =>
  (str: string): string =>
    str.replace(/(## Properties\n+)(?:\|.+\n)+\n?/, `$1<PropsTable component="p-${componentName}"></PropsTable>\n`);

const cleanReadmes = (): void => {
  const files = globby.sync('./src/components/**/readme.md');
  for (const file of files) {
    const sourceFile = path.normalize(file);
    const sourceDirectory = path.dirname(sourceFile);
    const componentName = path.basename(sourceDirectory);
    const sourceFileContent = fs.readFileSync(sourceFile, 'utf8');

    const content = [
      removeAutoGeneratedBelow,
      removeBuiltWith,
      fixMethods, // TODO: probably obsolete with #1473
      adjustHeadlines,
      replacePropsTable(componentName), // vue component visualizing componentMeta
    ].reduce((previousResult, fn) => fn(previousResult), sourceFileContent);

    // use this for easy debugging
    // fs.writeFileSync(path.normalize(`${sourceDirectory}/${componentName}.props.md`), content);

    fs.writeFileSync(sourceFile, content);
    fs.renameSync(sourceFile, path.normalize(`${sourceDirectory}/${componentName}.props.md`));
  }
};

cleanReadmes();
