import {
  getCollapsibleElementHeight,
  getContentWrapperHeight,
} from '../../../src/components/content/accordion/accordion-utils';

describe('getCollapsibleElementHeight()', () => {
  it('should return "200px" if isOpen = true', () => {
    expect(getCollapsibleElementHeight(true, '200px')).toBe('200px');
  });

  it('should return "0" if isOpen = false', () => {
    expect(getCollapsibleElementHeight(false, '200px')).toBe('0');
  });
});

describe('getContentWrapperHeight()', () => {
  it.each([
    [true, undefined, { height: 20 }, '2.25rem'],
    [false, undefined, { height: 20 }, '3.75rem'],
    [true, { blockSize: 300 }, { height: 20 }, '18.75rem'],
    [true, [{ blockSize: 300 }], { height: 20 }, '18.75rem'],
    [false, { blockSize: 300 }, { height: 20 }, '18.75rem'],
    [false, [{ blockSize: 300 }], { height: 20 }, '18.75rem'],
  ])(
    'should for compact = %s border boxSize = %o and contentRect = %o return %s',
    (compact: boolean, borderBoxSize: any, contentRect: DOMRectReadOnly, expected: string) => {
      expect(
        getContentWrapperHeight(
          compact,
          borderBoxSize as ResizeObserverSize | readonly ResizeObserverSize[],
          contentRect
        )
      ).toBe(expected);
    }
  );
});
