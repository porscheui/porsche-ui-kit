import {
  attachCss,
  buildResponsiveHostStyles,
  buildSlottedStyles,
  getCss,
  getFocusPseudoStyles,
  insertSlottedStyles,
  mergeDeep,
} from '../../../utils';
import type { BreakpointCustomizable, GetStylesFunction, JssStyle } from '../../../utils';

export const getSlottedCss = (host: HTMLElement): string => {
  return getCss(buildSlottedStyles(host, getFocusPseudoStyles({ offset: 1 })));
};

export const addSlottedCss = (host: HTMLElement): void => {
  insertSlottedStyles(host, getSlottedCss(host));
};

const getStretchStyles: GetStylesFunction = (stretch: BreakpointCustomizable<boolean>): JssStyle => ({
  display: stretch ? 'flex' : 'inline-block',
});

export const getComponentCss = (stretch: BreakpointCustomizable<boolean>): string => {
  return getCss(mergeDeep(buildResponsiveHostStyles(stretch, getStretchStyles)));
};

export const addComponentCss = (host: HTMLElement, stretch: BreakpointCustomizable<boolean>): void => {
  attachCss(host, getComponentCss(stretch));
};
