import { attachCss, breakpoint, getCss, mediaQuery } from '../../../utils';

const easeOutQuad = 'cubic-bezier(0.5, 1, 0.89, 1)';

export const getMediaQueryStyles = (): string =>
  getCss({
    '@keyframes animateMobileOut': {
      from: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      },
      to: {
        opacity: 0,
        transform: 'translate3d(0, calc(var(--p-banner-position-bottom) + 100%), 0)',
      },
    },
    '@keyframes animateDesktopOut': {
      from: {
        opacity: 1,
        transform: 'translate3d(0, 0, 0)',
      },
      to: {
        opacity: 0,
        transform: 'translate3d(0, calc(-100% - var(--p-banner-position-bottom)), 0)',
      },
    },
    ':host(.banner--close)': {
      [`${mediaQuery('xxs')} and (max-width: ${breakpoint.s}px)`]: {
        animation: `600ms $animateMobileOut ${easeOutQuad} forwards !important`,
      },
      [mediaQuery('s')]: {
        animation: `600ms $animateDesktopOut ${easeOutQuad} forwards !important`,
      },
    },
  });

export const addCss = (host: HTMLElement): void => {
  attachCss(host, getMediaQueryStyles());
};
