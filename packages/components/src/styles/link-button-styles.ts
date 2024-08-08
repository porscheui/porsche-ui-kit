import type { Styles } from 'jss';
import { buildResponsiveStyles, darken, hasVisibleIcon, isHighContrastMode, lighten } from '../utils';
import type { BreakpointCustomizable, LinkButtonIconName, LinkButtonVariant, Theme } from '../types';
import {
  addImportantToEachRule,
  colorSchemeStyles,
  getFocusJssStyle,
  getHiddenTextJssStyle,
  getHighContrastColors,
  getThemedColors,
  getTransition,
  hostHiddenStyles,
  hoverMediaQuery,
  prefersColorSchemeDarkMediaQuery,
  SCALING_BASE_VALUE,
} from './';
import {
  borderRadiusSmall,
  borderWidthBase,
  fontLineHeight,
  frostedGlassStyle,
  textSmallStyle,
} from '@porsche-design-system/styles';
import { JssStyle } from 'jss';

const { primaryColor: darkThemePrimaryColor } = getThemedColors('dark');
const { primaryColor: lightThemePrimaryColor } = getThemedColors('light');

type Colors = {
  textColor: string;
  borderColor: string;
  borderColorHover: string;
  backgroundColor: string;
  backgroundColorHover: string;
};

const getVariantColors = (variant: LinkButtonVariant, theme: Theme): Colors => {
  const { primaryColor, contrastHighColor, contrastMediumColor, hoverColor, backgroundFrostedColor } =
    getThemedColors(theme);
  const { canvasColor } = getHighContrastColors();

  const colors: {
    [v in Exclude<LinkButtonVariant, 'tertiary'>]: Colors;
  } = {
    primary: {
      textColor: theme === 'dark' ? lightThemePrimaryColor : darkThemePrimaryColor,
      borderColor: primaryColor,
      borderColorHover: contrastHighColor,
      backgroundColor: primaryColor,
      backgroundColorHover: contrastHighColor,
    },
    secondary: {
      textColor: primaryColor,
      borderColor: primaryColor,
      borderColorHover: contrastMediumColor,
      backgroundColor: isHighContrastMode ? canvasColor : 'transparent',
      backgroundColorHover: hoverColor,
    },
    ghost: {
      textColor: primaryColor,
      borderColor: backgroundFrostedColor,
      borderColorHover: theme === 'dark' ? lighten(backgroundFrostedColor) : darken(backgroundFrostedColor),
      backgroundColor: backgroundFrostedColor,
      backgroundColorHover: theme === 'dark' ? lighten(backgroundFrostedColor) : darken(backgroundFrostedColor),
    },
  };

  return colors[variant === 'tertiary' ? 'secondary' : variant];
};

export const getLinkButtonStyles = (
  icon: LinkButtonIconName,
  iconSource: string,
  variant: LinkButtonVariant,
  hideLabel: BreakpointCustomizable<boolean>,
  isDisabledOrLoading: boolean,
  hasSlottedAnchor: boolean,
  compact: boolean,
  cssVariableInternalScaling: string,
  theme: Theme
): Styles => {
  const isPrimary = variant === 'primary';
  const { textColor, borderColor, borderColorHover, backgroundColor, backgroundColorHover } = getVariantColors(
    variant,
    theme
  );
  const {
    textColor: textColorDark,
    borderColor: borderColorDark,
    borderColorHover: borderColorHoverDark,
    backgroundColor: backgroundColorDark,
    backgroundColorHover: backgroundColorHoverDark,
  } = getVariantColors(variant, 'dark');

  const { focusColor } = getThemedColors(theme);
  const hasIcon = hasVisibleIcon(icon, iconSource) || hideLabel;

  const scalingVar = `var(${cssVariableInternalScaling}, ${compact ? 'calc(4 / 13)' : 1})`; // Compact mode needs to have 4px paddingBlock thus this scaling factor

  const borderCompensation = variant === 'ghost' ? `+ ${borderWidthBase}` : ''; // Compensate for missing border in ghost variant (Fixes border backdrop-filter blur rendering issue in safari)

  const paddingBlock = `calc(${scalingVar} * 0.8125em ${borderCompensation})`; // 0.8125em corresponds to 13px (fontSize: SCALING_BASE_VALUE)
  const paddingInline = `max(calc(${scalingVar} * 1.625em ${borderCompensation}), ${variant === 'ghost' ? '6px' : '4px'})`; // 1.625em corresponds to 26px (fontSize: SCALING_BASE_VALUE)
  const gap = `clamp(2px, calc(${scalingVar} * 0.5em), 16px)`; // 0.5em corresponds to 8px (fontSize: SCALING_BASE_VALUE)
  const iconMarginInlineStart = `clamp(-16px, calc(${scalingVar} * -0.5em), -2px)`; // -0.5em corresponds to -8px (fontSize: SCALING_BASE_VALUE)

  return {
    '@global': {
      ':host': {
        display: 'inline-block',
        ...addImportantToEachRule({
          verticalAlign: 'top',
          outline: 0, // custom element is able to delegate the focus
          borderRadius: borderRadiusSmall,
          ...colorSchemeStyles,
          ...hostHiddenStyles,
        }),
      },
    },
    root: {
      fontSize: SCALING_BASE_VALUE,
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'start',
      WebkitAppearance: 'none', // iOS safari
      appearance: 'none',
      textDecoration: 'none',
      ...(variant === 'ghost'
        ? { ...frostedGlassStyle, border: 'none' } // We can't use a border in the ghost variant due to rendering issues with backdrop-filter in safari
        : { border: `${borderWidthBase} solid ${borderColor}` }),
      borderRadius: borderRadiusSmall,
      transform: 'translate3d(0,0,0)', // creates new stacking context (for slotted anchor + focus)
      backgroundColor,
      color: textColor,
      transition: `${getTransition('background-color')}, ${getTransition('border-color')}, ${getTransition('color')}`,
      ...buildResponsiveStyles(hideLabel, (hideLabelValue: boolean) => ({
        padding: hideLabelValue ? paddingBlock : `${paddingBlock} ${paddingInline}`,
        gap: hideLabelValue ? 0 : gap,
      })),
      ...(!hasSlottedAnchor && getFocusJssStyle(theme)),
      ...(!isDisabledOrLoading &&
        hoverMediaQuery({
          '&:hover': {
            backgroundColor: backgroundColorHover,
            borderColor: isHighContrastMode ? focusColor : borderColorHover,
            ...(!isPrimary && frostedGlassStyle),
            ...prefersColorSchemeDarkMediaQuery(theme, {
              backgroundColor: backgroundColorHoverDark,
              borderColor: borderColorHoverDark,
            }),
          },
        })),
      ...prefersColorSchemeDarkMediaQuery(theme, {
        borderColor: borderColorDark,
        backgroundColor: backgroundColorDark,
        color: textColorDark,
      }),
    },
    label: buildResponsiveStyles(hideLabel, (isHidden = true, isShownJssStyle?: JssStyle) => ({
      ...getHiddenTextJssStyle(isHidden, isShownJssStyle),
      ...textSmallStyle, // Overwrite scaling fontSize
    })),
    ...(hasIcon && {
      icon: {
        ...textSmallStyle, // Overwrite scaling fontSize
        width: fontLineHeight, // ensure space is already reserved until icon component is loaded (ssr)
        height: fontLineHeight, // ensure space is already reserved until icon component is loaded (ssr)
        ...buildResponsiveStyles(hideLabel, (hideLabelValue: boolean) => ({
          marginInlineStart: hideLabelValue ? 0 : iconMarginInlineStart, // compensate white space of svg icon and optimize visual alignment
        })),
      },
    }),
  };
};
