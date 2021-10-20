import {
  addImportantToEachRule,
  buildHostStyles,
  buildSlottedStyles,
  getBaseSlottedStyles,
  getCss,
  getThemedColors,
  mediaQuery,
  pxToRemWithUnit,
} from '../../../utils';
import type { Theme } from '../../../types';
import type { BannerInlineState } from './banner-inline-utils';

export const getComponentCss = (state: BannerInlineState, theme: Theme): string => {
  const themedColors = getThemedColors(theme);
  const backgroundColor = themedColors[state + 'SoftColor'];
  const borderAndIconColor = themedColors[state + 'Color'];

  return getCss({
    ...buildHostStyles(
      addImportantToEachRule({
        display: 'flex',
        alignItems: 'flex-start',
        position: 'relative',
        padding: pxToRemWithUnit(16),
        background: backgroundColor,
        borderLeft: `${pxToRemWithUnit(4)} solid ${borderAndIconColor}`,
      })
    ),
    content: {
      width: '100%',
      '& *': {
        maxWidth: pxToRemWithUnit(800),
      },
      // p-text for description
      '& *:nth-child(2):not(.close)': {
        marginTop: pxToRemWithUnit(4),
      },
    },
    icon: {
      display: 'none',
      [mediaQuery('s')]: {
        display: 'block',
        paddingRight: pxToRemWithUnit(8),
        color: borderAndIconColor,
      },
    },
    action: {
      marginLeft: pxToRemWithUnit(16),
    },
    close: {
      marginLeft: pxToRemWithUnit(16),
    },
  });
};

export const getSlottedCss = (host: HTMLElement): string => {
  return getCss(buildSlottedStyles(host, getBaseSlottedStyles()));
};
