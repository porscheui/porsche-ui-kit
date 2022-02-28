import { joinArrayElementsToString, withoutTagsOption } from './utils';
import { INTERNAL_TAG_NAMES, TAG_NAMES, TAG_NAMES_WITH_SKELETON } from '@porsche-design-system/shared';
import {
  getButtonLinkPureSkeletonCss,
  getButtonLinkSocialSkeletonCss,
  getCheckboxRadioWrapperSkeletonCss,
  getFieldsetWrapperSkeletonCss,
  getHeadlineSkeletonCss,
  getSelectTextFieldWrapperSkeletonCss,
  getTextareaWrapperSkeletonCss,
  getTextListItemSkeletonCss,
  getTextListSkeletonCss,
  getTextSkeletonCss,
} from '../../../../components/src/styles/skeletons';

// TODO: remove skeleton styles after all are hydrated

const skeletonTagNamesTypeLiteral = joinArrayElementsToString(TAG_NAMES_WITH_SKELETON, ' | ');

const tagNames = joinArrayElementsToString(TAG_NAMES.filter((x) => !INTERNAL_TAG_NAMES.includes(x)));

const tagNamesWithSkeleton = joinArrayElementsToString(TAG_NAMES_WITH_SKELETON);

export const generateInitialStylesPartial = (): string => {
  // 'any' is fallback when TAG_NAMES_WITH_SKELETON is an empty array because shared wasn't built, yet
  const types = `export type SkeletonTagName = ${skeletonTagNamesTypeLiteral || 'any'};

  type GetInitialStylesOptions = {
  skeletonTagNames?: SkeletonTagName[];
  prefix?: string;
  ${withoutTagsOption}
  format?: Format;
};
type GetInitialStylesOptionsFormatHtml = Omit<GetInitialStylesOptions, 'withoutTags'> & {
  format: 'html';
};
type GetInitialStylesOptionsFormatJsx = Omit<GetInitialStylesOptions, 'withoutTags'> & {
   format: 'jsx';
};
type GetInitialStylesOptionsWithoutTags = Omit<GetInitialStylesOptions, 'format'>;`;

  const skeletonTypes = `type SkeletonStylesOptions = {
  prefixedTagNamesWithSkeleton: string[];
  prefixedUnusedTagNamesWithSkeleton: string[];
  prefix?: string;
}`;

  const skeletonKeyframes = '@keyframes opacity{0%{opacity:0.35}50%{opacity:0.15}100%{opacity:0.35}';

  const skeletonStyles = {
    'p-button|p-link': getButtonLinkSocialSkeletonCss(),
    'p-button-pure|p-link-pure': getButtonLinkPureSkeletonCss(),
    'p-checkbox-wrapper|p-radio-button-wrapper': getCheckboxRadioWrapperSkeletonCss(),
    'p-fieldset-wrapper': getFieldsetWrapperSkeletonCss(),
    'p-headline': getHeadlineSkeletonCss(),
    'p-select-wrapper|p-text-field-wrapper': getSelectTextFieldWrapperSkeletonCss(),
    'p-text': getTextSkeletonCss(),
    'p-text-list': getTextListSkeletonCss(),
    'p-text-list-item': getTextListItemSkeletonCss(),
    'p-textarea-wrapper': getTextareaWrapperSkeletonCss(),
  };

  const initialStylesFunction = `export function getInitialStyles(opts?: GetInitialStylesOptionsFormatHtml): string;
export function getInitialStyles(opts?: GetInitialStylesOptionsFormatJsx): JSX.Element;
export function getInitialStyles(opts?: GetInitialStylesOptionsWithoutTags): string;
export function getInitialStyles(opts?: GetInitialStylesOptions): string | JSX.Element {
  const { skeletonTagNames, prefix, withoutTags, format }: GetInitialStylesOptions = {
    skeletonTagNames: [],
    prefix: '',
    withoutTags: false,
    format: 'html',
    ...opts
  };

  const tagNames = [${tagNames}];
  const prefixedTagNames = getPrefixedTagNames(tagNames, prefix);

  const tagNamesWithSkeleton: SkeletonTagName[] = [${tagNamesWithSkeleton}];

  const invalidComponentTagNames = skeletonTagNames.filter((x) => !tagNamesWithSkeleton.includes(x));

  if (invalidComponentTagNames.length) {
    throw new Error(\`The following supplied skeleton tag names are invalid:
  \${invalidComponentTagNames.join(', ')}

Please use only valid component tag names:
  \${tagNamesWithSkeleton.join(', ')}\`);
  }

  const usedTagNamesWithSkeleton = tagNamesWithSkeleton.filter((skeletonTagName) => skeletonTagNames.includes(skeletonTagName));
  const prefixedTagNamesWithSkeleton = getPrefixedTagNames(usedTagNamesWithSkeleton, prefix);
  const prefixedUnusedTagNamesWithSkeleton = getPrefixedTagNames(tagNamesWithSkeleton.filter((skeletonTagName) => !skeletonTagNames.includes(skeletonTagName)), prefix);

  const initialVisibilityHiddenStyles = prefixedTagNames.join(',') + '{visibility:hidden}';

  const mergedStyles = \`\${initialVisibilityHiddenStyles}\${getSkeletonStyles({prefixedTagNamesWithSkeleton,prefixedUnusedTagNamesWithSkeleton, prefix})}\`;
  const markup = format === 'html' ?  \`<style>\${mergedStyles}</style>\` : <style>{mergedStyles}</style>;

  return withoutTags
    ? mergedStyles
    : markup;
};`;

  const skeletonStylesFunction = `const getSkeletonStyles = (opts?: SkeletonStylesOptions): string => {
  const options: SkeletonStylesOptions = {
     prefixedTagNamesWithSkeleton: [],
     prefixedUnusedTagNamesWithSkeleton: [],
     prefix: '',
     ...opts
  };
  const { prefixedTagNamesWithSkeleton, prefixedUnusedTagNamesWithSkeleton, prefix } = options;

  const skeletonStylesWithKey = ${JSON.stringify(skeletonStyles)};
  let skeletonStyles = prefixedTagNamesWithSkeleton.map((prefixedTagName)=>{
    let tagNameToFind = prefixedTagName;

    if(prefix){
      const prefixRegExp = new RegExp(\`\${prefix}-\`, 'g');
      tagNameToFind = prefixedTagName.replace(prefixRegExp, '');
    }
    const tagNameToFindRegExp = new RegExp(\`(\${tagNameToFind}(?!-))\`, 'g');

    const skeletonStyleKey = Object.keys(skeletonStylesWithKey)[
        Object.keys(skeletonStylesWithKey).findIndex(
          (skeletonStyleKey) => skeletonStyleKey.split('|').some((x) => x.match(tagNameToFindRegExp))
        )
    ];
    let skeletonStyle = skeletonStylesWithKey[skeletonStyleKey];
    if (skeletonStyle) {
      if (prefix) {
        skeletonStyleKey.split('|').forEach(key => {
          skeletonStyle = skeletonStyle.replace(new RegExp(\`(\${key}(?!-))\`, 'g'), prefix + '-' + key);
        });
      };

      delete skeletonStylesWithKey[skeletonStyleKey];

      return skeletonStyle;
    } else {
      return '';
    }
  }).join('');

  // remove unused skeleton selectors
  prefixedUnusedTagNamesWithSkeleton.forEach((tagName) => {
    const unusedSkeletonTagName = new RegExp(\`((?:,)*\${tagName}:not\\\\(\\\\.hydrated\\\\)(?:\\\\:\\\\:(?:after|before))*)\`, 'g');
    skeletonStyles = skeletonStyles.replace(unusedSkeletonTagName, '');
  });

  const result = skeletonStyles + \`\${prefixedTagNamesWithSkeleton.length ? '${skeletonKeyframes}' : ''}\`;
  // escape the "at" sign for sed replace command to work properly
  return result.replace(/(@)/g, '\\\\$1');
};`;

  const helperFunction = `const getPrefixedTagNames = (tagNames: string[], prefix?: string): string[] => {
  return prefix ? tagNames.map((x) => \`\${prefix}-\${x}\`) : tagNames;
}
`;

  return [types, skeletonTypes, helperFunction, initialStylesFunction, skeletonStylesFunction].join('\n\n');
};
