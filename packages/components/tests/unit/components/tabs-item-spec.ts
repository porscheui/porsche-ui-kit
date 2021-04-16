import * as domUtils from '../../../src/utils/dom';
import { TabsItem } from '../../../src/components/content/tabs/tabs-item/tabs-item';

describe('tabs-item', () => {
  describe('connectedCallback', () => {
    it('should call throwIfParentIsNotOfKind()', () => {
      const spy = jest.spyOn(domUtils, 'throwIfParentIsNotOfKind');
      const component = new TabsItem();

      expect(spy).toBeCalledTimes(0);

      try {
        component.connectedCallback();
      } catch (e) {}

      expect(spy).toBeCalledTimes(1);
    });
  });
});
