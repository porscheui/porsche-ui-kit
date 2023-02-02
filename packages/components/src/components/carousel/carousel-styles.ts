import type { BreakpointCustomizable, Theme } from '../../types';
import { buildResponsiveStyles, getCss } from '../../utils';
import {
  addImportantToEachRule,
  getBackfaceVisibilityJssStyle,
  getScreenReaderOnlyJssStyle,
  getThemedColors,
  pxToRemWithUnit,
} from '../../styles';
import {
  gridWidthMax,
  gridSafeZone,
  textSmallStyle,
  getMediaQueryMin,
  gridGap,
  borderRadiusSmall,
  headingXLargeStyle,
} from '@porsche-design-system/utilities-v2';
import { spacingFluidMedium } from '@porsche-design-system/utilities-v2/src/js';

export const bulletActiveClass = 'bullet--active';

const mediaQueryS = getMediaQueryMin('s');
const mediaQueryXl = getMediaQueryMin('xl');

export const getComponentCss = (
  wrapContent: boolean,
  disablePagination: BreakpointCustomizable<boolean>,
  theme: Theme
): string => {
  const { primaryColor, disabledColor } = getThemedColors(theme);

  return getCss({
    '@global': {
      ':host': addImportantToEachRule({
        display: 'grid',
        maxWidth: gridWidthMax,
        marginLeft: 'auto',
        marginRight: 'auto',
        gap: spacingFluidMedium,
        gridAutoFlow: 'row',
        /*
        [mediaQueryXl]: {
          gap: '32px',
        },
         */
      }),
      'h2,::slotted([slot=heading])': addImportantToEachRule({
        ...headingXLargeStyle,
        margin: 0,
        color: primaryColor,
        maxWidth: '900px',
      }),
      'p,::slotted([slot=description])': addImportantToEachRule({
        ...textSmallStyle,
        margin: 0,
        color: primaryColor,
        maxWidth: '550px',
        gridColumn: 1, // to force it into 2nd line
      }),
    },
    splide: {
      overflow: 'hidden',
      // visibility: 'hidden',
      '&__track': {
        cursor: 'grab',
        // to override inline styles set by splide library
        ...(wrapContent &&
          addImportantToEachRule({
            // TODO: 0 calc(${gridSafeZone} + ${gridGap})
            padding: `0 calc(${gridSafeZone} + 7%) 0 ${gridSafeZone}`,
            [mediaQueryXl]: {
              padding: `0 calc(${gridSafeZone} + 7%) 0 ${gridSafeZone}`,
            },
          })),
        '&--draggable': {
          userSelect: 'none',
          WebkitUserSelect: 'none',
          WebkitTouchCallout: 'none',
        },
      },
      '&__list': {
        display: 'flex',
        height: '100%',
        ...getBackfaceVisibilityJssStyle(),
      },
      '&__slide': {
        position: 'relative',
        flexShrink: 0,
        ...getBackfaceVisibilityJssStyle(),
        transform: 'translateZ(0)', // fixes mobile safari flickering, https://github.com/nolimits4web/swiper/issues/3527#issuecomment-609088939
      },
      '&__sr': getScreenReaderOnlyJssStyle(), // appears in the DOM when sliding
    },
    // .splide.is-initialized,
    // .splide.is-rendered {
    //     visibility: visible,
    //   }
    // .splide.is-initialized:not(.is-active) .splide__list {
    //     display: block,
    //   }
    header: {
      display: 'grid',
      gap: gridGap,
      padding: wrapContent ? `0 ${gridSafeZone}` : null,
      [mediaQueryS]: {
        gridTemplateColumns: 'minmax(0px, 1fr) 80px', // 2nd row has width of nav buttons
        position: 'relative',
        minHeight: '40px', // actual height of prev/next buttons
      },
    },
    nav: {
      display: 'none',
      [mediaQueryS]: {
        display: 'grid',
        gridAutoFlow: 'column',
        position: 'absolute', // we can't span across multiple rows with implicit grid
        right: wrapContent ? gridSafeZone : 0,
        bottom: 0,
      },
    },
    btn: {
      padding: pxToRemWithUnit(8),
    },
    ...(disablePagination !== true && {
      pagination: {
        ...buildResponsiveStyles(disablePagination, (value: boolean) => ({ display: value ? 'none' : 'block' })),
        textAlign: 'center',
        lineHeight: '8px',
      },
      bullet: {
        display: 'inline-block',
        borderRadius: borderRadiusSmall,
        background: disabledColor,
        margin: '0 4px',
        transition: 'background-color 0.5s, width 0.5s',
        width: '8px',
        height: '8px',
      },
      [bulletActiveClass]: {
        background: primaryColor,
        width: '20px',
      },
    }),
  });
};
