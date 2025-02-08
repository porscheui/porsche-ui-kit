import {
  borderRadiusMedium,
  borderRadiusSmall,
  fontFamily,
  fontSizeTextSmall,
  fontSizeTextXSmall,
  fontWeightSemiBold,
  themeDarkBackgroundBase,
  themeDarkBackgroundFrosted,
  themeDarkBackgroundSurface,
  themeDarkContrastLow,
  themeDarkContrastMedium,
  themeDarkNotificationError,
  themeDarkNotificationInfo,
  themeDarkPrimary,
  themeDarkStateDisabled,
  themeDarkStateFocus,
  themeDarkStateHover,
  themeLightBackgroundBase,
  themeLightBackgroundFrosted,
  themeLightBackgroundSurface,
  themeLightContrastLow,
  themeLightContrastMedium,
  themeLightNotificationError,
  themeLightNotificationInfo,
  themeLightPrimary,
  themeLightStateDisabled,
  themeLightStateFocus,
  themeLightStateHover,
} from '@porsche-design-system/components-js/styles';

import { type Theme, themeQuartz } from 'ag-grid-community';

// TODO update focus glow for inputs

import { themeDark, themeLight } from '../colors';
import { checkboxStyle, pdsSvgIcons, toggleButtonStyle } from '../parts';
import { PdsThemeMode } from '../types/theme-mode';

export const pdsTheme: Theme = themeQuartz
  .withParams({
    checkboxBorderWidth: 2,
    checkboxBorderRadius: borderRadiusSmall,
    focusShadow: 'none',
    inputFocusShadow: 'none',
    spacing: 10,
    toggleButtonHeight: 28,
    toggleButtonWidth: 48,
    iconSize: 24,
    borderRadius: borderRadiusSmall,
    wrapperBorderRadius: borderRadiusMedium,
    fontFamily: fontFamily,
    fontSize: fontSizeTextSmall,
    headerFontWeight: fontWeightSemiBold,
    headerFontSize: fontSizeTextXSmall,
    headerHeight: 'calc(var(--ag-font-size) + var(--ag-spacing) * 2.9)',
    rowHeight: 'calc(var(--ag-font-size) + var(--ag-spacing) * 4)',
    toggleButtonSwitchInset: 3,
    browserColorScheme: 'light',
    accentColor: themeLightNotificationInfo,
    backgroundColor: themeLightBackgroundBase,
    foregroundColor: themeLightPrimary,
    headerBackgroundColor: themeLightBackgroundSurface,
    selectedRowBackgroundColor: themeLight.backgroundSurfaceColorDarken,
    oddRowBackgroundColor: themeLightBackgroundSurface,
    modalOverlayBackgroundColor: themeLightBackgroundFrosted,
    rowHoverColor: themeLightStateHover,
    columnHoverColor: themeLightStateHover,
    rangeSelectionBorderColor: themeLightStateFocus,
    borderColor: themeLightContrastLow,
    inputBorder: `1px solid ${themeLightContrastMedium}`,
    inputInvalidBorder: `1px solid ${themeLightNotificationError}`,
    inputDisabledBorder: `1px solid ${themeLightStateDisabled}`,
    inputDisabledBackgroundColor: themeLightBackgroundBase,
    invalidColor: themeLightNotificationError,
    inputFocusBorder: `1px solid ${themeLightPrimary}`,
  })
  .withParams(
    {
      browserColorScheme: 'dark',
      accentColor: themeDarkNotificationInfo,
      backgroundColor: themeDarkBackgroundBase,
      foregroundColor: themeDarkPrimary,
      headerBackgroundColor: themeDarkBackgroundSurface,
      selectedRowBackgroundColor: themeDark.backgroundSurfaceColorDarken,
      oddRowBackgroundColor: themeDarkBackgroundSurface,
      modalOverlayBackgroundColor: themeDarkBackgroundFrosted,
      rowHoverColor: themeDarkStateHover,
      columnHoverColor: themeDarkStateHover,
      rangeSelectionBorderColor: themeDarkStateFocus,
      borderColor: themeDarkContrastLow,
      inputBorder: `1px solid ${themeDarkContrastMedium}`,
      inputInvalidBorder: `1px solid ${themeDarkNotificationError}`,
      inputDisabledBorder: `1px solid ${themeDarkStateDisabled}`,
      inputDisabledBackgroundColor: themeDarkBackgroundBase,
      invalidColor: themeDarkNotificationError,
      inputFocusBorder: `1px solid ${themeDarkPrimary}`,
    },
    PdsThemeMode.DARK
  )
  .withPart(pdsSvgIcons)
  .withPart(toggleButtonStyle)
  .withPart(checkboxStyle);
