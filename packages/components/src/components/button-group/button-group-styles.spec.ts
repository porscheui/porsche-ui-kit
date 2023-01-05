import { getComponentCss } from './button-group-styles';
import type { ButtonGroupDirection } from './button-group-utils';
import type { BreakpointCustomizable } from '../../types';

xdescribe('getComponentCss()', () => {
  it.each<BreakpointCustomizable<ButtonGroupDirection>>([
    { base: 'column', xs: 'row' },
    'column',
    'row',
    { base: 'row', xs: 'column', s: 'row', m: 'column', l: 'row', xl: 'column' },
  ])('should return correct css for direction: %j', (direction) => {
    expect(getComponentCss(direction)).toMatchSnapshot();
  });
});
