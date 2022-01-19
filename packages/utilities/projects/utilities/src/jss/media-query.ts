export type Breakpoint = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';

export const breakpoint: { [key in Breakpoint]: number } = {
  xxs: 0,
  xs: 480,
  s: 760,
  m: 1000,
  l: 1300,
  xl: 1760,
  xxl: 1920,
};

export const mediaQueryMin = (minBreakpoint: Breakpoint): string => {
  return `@media (min-width: ${breakpoint[minBreakpoint]}px)`;
};

export const mediaQueryMax = (maxBreakpoint: Breakpoint): string => {
  return `@media (max-width: ${breakpoint[maxBreakpoint] - 1}px)`;
};

export const mediaQueryMinMax = (minBreakpoint: Breakpoint, maxBreakpoint: Breakpoint): string => {
  return `${mediaQueryMin(minBreakpoint)} and (max-width: ${breakpoint[maxBreakpoint] - 1}px)`;
};
