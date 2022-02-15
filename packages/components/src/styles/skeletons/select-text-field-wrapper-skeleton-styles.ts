import { getMinifiedCss } from '@porsche-design-system/shared-src/src/styles/getMinifiedCss';
import {
  BUTTON_LINK_SKELETON_WIDTH,
  ELEMENT_SKELETON_HEIGHT,
  getBaseSkeletonStyles,
  getSkeletonElementHeight,
} from './';
import { pxToRemWithUnit } from '../common-styles';

export const getSelectTextFieldWrapperSkeletonCss = (): string => {
  return getMinifiedCss({
    '@global': {
      'p-select-wrapper, p-text-field-wrapper': {
        '&:not(.hydrated)': {
          minWidth: pxToRemWithUnit(BUTTON_LINK_SKELETON_WIDTH),
          height: getSkeletonElementHeight(ELEMENT_SKELETON_HEIGHT),
          ...getBaseSkeletonStyles(),
        },
      },
    },
  });
};
