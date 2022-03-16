import { pxToRemWithUnit } from '../common-styles';
import {
  BUTTON_LINK_SKELETON_WIDTH,
  ELEMENT_SKELETON_DIMENSION,
  extendPseudoWithThemeJssStyle,
  getBaseSkeletonJssStyle,
  getSkeletonPropertyNames,
  getThemedPseudoJssStyle,
} from './base-skeleton-styles';
import { PDS_SKELETON_CLASS_PREFIX } from '@porsche-design-system/shared';
import { Styles } from 'jss';

export const getButtonLinkPureSkeletonStyles = (): Styles<'@global'> => {
  const skeletonPropertyNames = getSkeletonPropertyNames('p-button-pure');

  return {
    '@global': {
      'p-button-pure, p-link-pure': {
        '&:not(.hydrated)': {
          ...extendPseudoWithThemeJssStyle({
            styleFunction: () => getBaseSkeletonJssStyle(false, ELEMENT_SKELETON_DIMENSION / 2),
          }),
          display: 'inline-block',
          minWidth: pxToRemWithUnit(BUTTON_LINK_SKELETON_WIDTH),
          ...getThemedPseudoJssStyle(),

          [`&[${skeletonPropertyNames.hideLabel}=true], &.${PDS_SKELETON_CLASS_PREFIX}${skeletonPropertyNames.hideLabel}`]:
            {
              minWidth: pxToRemWithUnit(ELEMENT_SKELETON_DIMENSION),
            },
          [`&[${skeletonPropertyNames.stretch}=true], &.${PDS_SKELETON_CLASS_PREFIX}${skeletonPropertyNames.stretch}`]:
            {
              display: 'block',
            },
          [`&[${skeletonPropertyNames.size}=medium], &.${PDS_SKELETON_CLASS_PREFIX}${skeletonPropertyNames.size}-medium`]:
            {
              minHeight: pxToRemWithUnit(36),
            },
          [`&[${skeletonPropertyNames.size}=x-small], &.${PDS_SKELETON_CLASS_PREFIX}${skeletonPropertyNames.size}-x-small`]:
            {
              minHeight: pxToRemWithUnit(20),
            },
          [`&[${skeletonPropertyNames.size}=large], &.${PDS_SKELETON_CLASS_PREFIX}${skeletonPropertyNames.size}-large`]:
            {
              minHeight: pxToRemWithUnit(48),
            },
          [`&[${skeletonPropertyNames.size}=x-large], &.${PDS_SKELETON_CLASS_PREFIX}${skeletonPropertyNames.size}-x-large`]:
            {
              minHeight: pxToRemWithUnit(64),
            },
        },
      },
    },
  };
};
