import { buildResponsiveStyles, getCss } from '../../utils';
import { pxToRemWithUnit } from '../../styles';
import { getThemedTypographyColor } from '../../styles/text-icon-styles';
import { getFontWeight } from '../../styles/font-weight-styles';
import {
  borderRadiusMedium,
  gradientToBottomStyle,
  gradientToTopStyle,
  spacingFluidLarge,
  spacingFluidMedium,
  spacingFluidSmall,
  spacingStaticXSmall,
  textLargeStyle,
  textSmallStyle,
} from '@porsche-design-system/utilities-v2';
import type { JssDirections } from '../../styles/jss-direction-styles';
import { getJssDirectionStyle } from '../../styles/jss-direction-styles';
import { getBaseLinkButtonTileStyles } from '../../styles/link-button-tile-styles';
import type { BreakpointCustomizable } from '../../types';
import type { LinkTileAspectRatio, LinkTileWeight } from '../link-tile/link-tile-utils';

export const getComponentCss = (
  aspectRatio: BreakpointCustomizable<LinkTileAspectRatio>,
  weight: BreakpointCustomizable<LinkTileWeight>,
  direction: BreakpointCustomizable<JssDirections>,
  hasDescription: boolean
): string => {
  return getCss({
    ...getBaseLinkButtonTileStyles({
      aspectRatio,
      additionalContentStyles: {
        bottom: 0,
        padding: `${spacingFluidLarge} ${spacingFluidMedium} ${spacingFluidMedium}`,
        gridTemplateRows: 'auto auto',
        gridTemplateColumns: 'auto',
        ...gradientToTopStyle,
      },
    }),
    model: {
      position: 'absolute',
      padding: spacingFluidMedium,
      borderRadius: borderRadiusMedium,
      top: 0,
      left: 0,
      right: 0,
      ...gradientToBottomStyle,
    },
    heading: {
      ...(!hasDescription && { color: getThemedTypographyColor('dark', 'primary') }),
      margin: 0,
      ...textLargeStyle,
      ...buildResponsiveStyles(weight, (w: LinkTileWeight) => ({ fontWeight: getFontWeight(w) })),
    },
    ...(hasDescription && {
      'description-group': {
        color: getThemedTypographyColor('dark', 'primary'),
        maxWidth: pxToRemWithUnit(550), // in this case rem unit makes sense to scale up available space
        gap: spacingStaticXSmall,
      },
      description: {
        margin: 0,
        ...textSmallStyle,
      },
    }),
    'link-group': {
      display: 'flex',
      width: '100%',
      gap: spacingFluidSmall,
      ...buildResponsiveStyles(direction, getJssDirectionStyle),
    },
  });
};
