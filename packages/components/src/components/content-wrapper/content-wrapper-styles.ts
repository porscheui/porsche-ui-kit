import type { JssStyle } from 'jss';
import type { Theme } from '../../types';
import type { ContentWrapperWidth, ContentWrapperBackgroundColor } from './content-wrapper-utils';
import { getCss } from '../../utils';
import { getThemedColors } from '../../styles';
import { gridWidthMax, gridSafeZone } from '@porsche-design-system/utilities-v2';

const widthMap: { [key in ContentWrapperWidth]?: JssStyle } = {
  basic: {
    maxWidth: gridWidthMax,
    boxSizing: 'border-box',
    padding: `0 ${gridSafeZone}`,
  },
  extended: {
    maxWidth: gridWidthMax,
  },
};

export const getComponentCss = (
  width: ContentWrapperWidth,
  backgroundColor: ContentWrapperBackgroundColor,
  theme: Theme
): string => {
  return getCss({
    '@global': {
      ':host': {
        display: 'flex',
      },
    },
    root: {
      margin: '0 auto',
      width: '100%',
      minWidth: 0, // to handle automatic minimum size, in case it's used within flex mode
      ...widthMap[width],
      backgroundColor: backgroundColor === 'default' ? getThemedColors(theme).backgroundColor : 'transparent',
    },
  });
};
