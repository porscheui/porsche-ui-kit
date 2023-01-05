import type { Theme } from '../../../types';
import type { TabsItem } from '../tabs-item/tabs-item';
import type { TabsItemInternalHTMLProps } from '../tabs-item/tabs-item-utils';
import { forceUpdate } from '@stencil/core';

export const syncTabsItemsProps = (host: HTMLElement, theme: Theme): void => {
  Array.from(host.children).forEach((item: HTMLElement & TabsItem & TabsItemInternalHTMLProps) => {
    item.theme = theme;
    forceUpdate(item);
  });
};
