import * as fs from 'fs';
import * as path from 'path';
import * as globby from 'globby';
import { capitalCase, pascalCase } from 'change-case';
import type { TagName } from '@porsche-design-system/shared';

const removeGenerator = (str: string): string =>
  str.replace(/\s+----------------------------------------------\s+\*Built with.*/g, '');

const transformDoubleToSingleQuotes = (str: string): string => str.replace(/"/g, "'");

const removeAutoGeneratedBelow = (str: string): string => str.replace(/\s+<!-- Auto Generated Below -->\s/, '');

const adjustHeadline = (str: string): string => {
  let [, tagName, pTagName] = (str.match(/(# (.*))/) as [string, string, TagName]) ?? [];
  const cleanedTagName = tagName.includes('content-wrapper')
    ? tagName.replace(/^#\sp-/, '')
    : tagName.replace(/^#\sp-|-wrapper/g, '');
  const componentHeadline = capitalCase(cleanedTagName);

  const h1Replacements: { [key in TagName]?: string } = {
    'p-headline': 'Typography',
    'p-inline-notification': 'Notifications',
  };
  const multiPropReplacements: TagName[] = [
    ...(Object.keys(h1Replacements) as TagName[]),
    'p-text',
    'p-banner',
    'p-toast',
  ];

  let headline;

  if (multiPropReplacements.includes(pTagName)) {
    str = str.replace(/(#+)\s/g, '$1# ');
  }

  if (h1Replacements[pTagName]) {
    headline = `# ${h1Replacements[pTagName]}\n\n## ${componentHeadline}`;
    tagName = '#' + tagName;
  } else {
    headline = `# ${componentHeadline}`;
  }

  return str.replace(tagName, headline);
};

const fixBreakpointCustomizable = (str: string): string => {
  const breakpointCustomizableTypes: string[] = [];

  // Matches all rows and columns of the props table to capture the attribute name and type of the property
  let content = str.replace(
    /(?:\|\s`(.*?)`\s*?){2}\|.*?\|\s`(.*?)`/g,
    (match, attribute: string, attributeType: string): string => {
      // Check if the type of the row contains breakpointCustomizable
      let [, breakpointCustomizable] = attributeType.match(/string\s\\\|\s{.*?base:\s(.*?);\s}/) ?? [];

      if (breakpointCustomizable) {
        // Sort if Numbers
        if (breakpointCustomizable.match(/\s\d+\s/)?.length) {
          breakpointCustomizable = breakpointCustomizable
            .split(' \\| ')
            .map((x: string) => (isNaN(+x) ? x : +x))
            .sort((a: any, b: any) => a - b)
            .join(' \\| ');
        }
        const transformedAttribute = pascalCase(attribute);
        const cleanBreakpointCustomizable = breakpointCustomizable.replace(/\\\|/g, '|');
        breakpointCustomizableTypes.push(`type ${transformedAttribute} = ${cleanBreakpointCustomizable}`);

        match = match.replace(
          attributeType,
          `${breakpointCustomizable} \\| BreakpointCustomizable<${transformedAttribute}>`
        );
      }
      return match;
    }
  );

  if (breakpointCustomizableTypes.length) {
    breakpointCustomizableTypes.push(
      'type BreakpointCustomizable<T> = { base: T; xs?: T; s?: T; m?: T; l?: T; xl?: T; }'
    );
    content = content.replace(
      /## Properties/,
      `$&\n\n<p style="max-width: 100%">\n\n${breakpointCustomizableTypes.map((x) => `\`${x}\``).join('  \n')}\n\n</p>`
    );
  }

  return content;
};
const fixMethods = (str: string): string => {
  // remove headline hashes before code
  str = str.replace(/(#+\s)`/g, '`');
  // remove return types
  return str.replace(/#+\sReturns(?:\s|.)*?`\n/g, '');
};
const fixAriaTypes = (str: string): string =>
  str.replace(/(?:\|\s`aria`\s*?){2}\|.*?\|\s`(.*?)\|\s`/, (match): string => {
    return match.replace('`string \\| {', '`{');
  });

const replacePipesWithNewLines = (str: string): string => str.replace(/\s(\\\|)\s/g, '` <br>` ');

const cleanReadmes = (): void => {
  const files = globby.sync('./src/components/**/readme.md');
  for (const file of files) {
    const sourceFile = path.normalize(file);
    const sourceDirectory = path.dirname(sourceFile);
    const componentName = path.basename(sourceDirectory);
    const sourceFileContent = fs.readFileSync(sourceFile, 'utf8');

    const content = [
      adjustHeadline,
      removeGenerator,
      transformDoubleToSingleQuotes,
      fixBreakpointCustomizable,
      fixAriaTypes,
      fixMethods,
      replacePipesWithNewLines,
      removeAutoGeneratedBelow,
    ].reduce((previousResult, fn) => fn(previousResult), sourceFileContent);

    // Use this for easy debugging
    // fs.writeFileSync(path.normalize(`${sourceDirectory}/${componentName}.props.md`), content);

    fs.writeFileSync(sourceFile, content);
    fs.renameSync(sourceFile, path.normalize(`${sourceDirectory}/${componentName}.props.md`));
  }
};

cleanReadmes();
