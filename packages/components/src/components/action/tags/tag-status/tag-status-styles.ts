import { getCss, isThemeDark, mergeDeep } from '../../../../utils';
import {
  addImportantToEachRule,
  getFocusJssStyle,
  getThemedColors,
  getTransition,
  pxToRemWithUnit,
  ThemedColors,
} from '../../../../styles';
import { fontStyle, fontWeight, textXSmall } from '@porsche-design-system/utilities-v2';
import type { TagStatusColor } from './tag-status-utils';
import type { Theme } from '../../../../types';

export const getComponentCss = (color: TagStatusColor, isFocusable: boolean, theme: Theme): string => {
export const getThemedBackgroundColor = (tagStatusColor: TagStatusColor, themedColors: ThemedColors): string => {
  const colorMap: { [key in TagStatusColor]: string } = {
    'background-default': themedColors.backgroundColor,
    'background-surface': themedColors.backgroundSurfaceColor,
    'neutral-contrast-high': themedColors.contrastHighColor,
    'notification-neutral': themedColors.neutralSoftColor,
    'notification-success': themedColors.successSoftColor,
    'notification-error': themedColors.errorSoftColor,
    'notification-warning': themedColors.warningSoftColor,
  };

  return colorMap[tagStatusColor];
};
  const themedColors = getThemedColors(theme);
  const isDark = isThemeDark(theme);
  const hasInvertedThemeColor =
    (!isDark && color !== 'neutral-contrast-high') ||
    (isDark && (color === 'background-surface' || color === 'background-default'));

  const { baseColor, hoverColor } = hasInvertedThemeColor ? themedColors : getThemedColors(isDark ? 'light' : 'dark');
  const outlineColor = hasInvertedThemeColor ? themedColors.focusColor : themedColors.baseColor;
  const { focusColor } = themedColors;

  return getCss({
    '@global': {
      ':host': {
        display: 'inline-flex',
        verticalAlign: 'top',
      },
      span: {
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        height: pxToRemWithUnit(24),
        padding: `0 ${pxToRemWithUnit(6)}`,
        borderRadius: pxToRemWithUnit(4),
        background: getThemedBackgroundColor(color, themedColors),
        color: baseColor,
        ...textXSmall,
        whiteSpace: 'nowrap',
        ...(isFocusable && {
          transition: getTransition('color'),
          '&:hover': {
            color: hoverColor,
          },
        }),
      },
      '::slotted': addImportantToEachRule({
        ...(isFocusable && {
          ...mergeDeep(
            {
              '&(a),&(button)': {
                display: 'inline',
                position: 'static',
                textDecoration: 'underline',
                cursor: 'pointer',
                font: 'inherit',
                outline: 0, // reset native blue outline
                // color: 'inherit', // TODO: chrome hover bug. Use when fixed.
                '&::before': {
                  borderRadius: pxToRemWithUnit(4),
                },
              },
            },
            // Transform selectors of getFocusJssStyle() to fit the ::slotted syntax
            Object.fromEntries(
              Object.entries({
                ...getFocusJssStyle({ offset: 2, pseudo: '::before', color: outlineColor }),
                ...(!hasInvertedThemeColor && {
                  '&:focus-visible:hover::before': {
                    transition: getTransition('outline-color'),
                    outlineColor: focusColor,
                  },
                }),
              })
                .filter(([key]) => key !== 'outline') // Needs to be set on correct ::slotted selector
                // Use Values of getFocusJssStyle, but transform keys to fit ::slotted
                .map(([key, value]) => [key.replace(/^&([a-z:\-()]*)(::[a-z\-]+)$/, '&(a$1)$2, &(button$1)$2'), value])
            )
          ),
          '&(a)': {
            color: baseColor, // TODO: chrome hover bug. Remove when fixed.
            transition: getTransition('color'), // TODO: chrome hover bug. Remove when fixed.
          },
          '&(a:hover)': {
            color: hoverColor, // TODO: chrome hover bug. Remove when fixed.
          },
          '&(button)': {
            margin: 0,
            padding: 0,
            background: 0,
            border: 0,
            color: 'inherit', // TODO: chrome hover bug. Remove when fixed.
            textAlign: 'left',
          },
        }),
        '&(br)': {
          display: 'none',
        },
        '&(strong),&(b)': {
          fontWeight: fontWeight.bold,
        },
        '&(em),&(i)': {
          fontStyle: fontStyle,
        },
      }),
    },
    icon: {
      margin: `0 ${pxToRemWithUnit(2)} 0 ${pxToRemWithUnit(-2)}`,
    },
  });
};
