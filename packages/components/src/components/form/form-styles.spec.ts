import type { BreakpointCustomizable, JssStyle } from '../../utils';
import type { ChildSelector } from './form-styles';
import type { FormState, Theme } from '../../types';
import { getBaseChildStyles, getLabelStyles, isVisibleState } from './form-styles';

describe('isVisibleState()', () => {
  it.each<[FormState, boolean]>([
    ['success', true],
    ['error', true],
    ['none', false],
    [undefined, false],
  ])('should for state: %s return %s', (state, result) => {
    expect(isVisibleState(state)).toBe(result);
  });
});

describe('getBaseChildStyles()', () => {
  it.each<[ChildSelector, FormState, Theme, JssStyle]>([
    ['input', 'none', 'light', undefined],
    ['input', 'success', 'light', undefined],
    ['input', 'error', 'light', undefined],
    ['textarea', 'none', 'dark', undefined],
    ['textarea', 'success', 'dark', undefined],
    ['textarea', 'error', 'dark', undefined],
    ['textarea', 'error', 'dark', { bottom: 5 }],
  ])(
    'should return correct css for child: %s, state: %s, theme: %s and additionalDefaultJssStyle: %o',
    (child, state, theme, additionalDefaultJssStyle) => {
      expect(getBaseChildStyles(child, state, theme, additionalDefaultJssStyle)).toMatchSnapshot();
    }
  );
});

describe('getLabelStyles()', () => {
  it.each<[ChildSelector, BreakpointCustomizable<boolean>, FormState, Theme, string]>([
    ['input', false, 'none', 'light', undefined],
    ['input', false, 'success', 'light', undefined],
    ['input', false, 'error', 'light', undefined],
    ['input', true, 'none', 'light', undefined],
    ['input', true, 'success', 'light', undefined],
    ['input', true, 'error', 'light', undefined],
    ['textarea', false, 'none', 'dark', undefined],
    ['textarea', false, 'success', 'dark', undefined],
    ['textarea', false, 'error', 'dark', undefined],
    ['textarea', true, 'none', 'dark', undefined],
    ['textarea', true, 'success', 'dark', undefined],
    ['textarea', true, 'error', 'dark', undefined],
    ['input', { base: true, xs: false, s: true, m: false, l: true, xl: false }, 'error', 'dark', '$unit'],
  ])(
    'should return correct css for child: %s, hideLabel: %o, state: %s, theme: %s and additionalRefForInputHover: %s',
    (child, hideLabel, state, theme, additionalRefForInputHover) => {
      expect(getLabelStyles(child, hideLabel, state, theme, additionalRefForInputHover)).toMatchSnapshot();
    }
  );
});
