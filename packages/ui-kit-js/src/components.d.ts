/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ButtonType,
  LinkTarget,
  TextColor,
  TextSize,
  TextWeight,
  Theme,
} from './types';
import {
  IconName,
} from './components/icon/icon/icon-name';
import {
  BreakpointCustomizable,
} from './utils';

export namespace Components {
  interface PButton {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Check native tabindex to ensure that it doesn't get set on the host element
    */
    'nativeTabindex'?: number;
    /**
    * To remove the element from tab order.
    */
    'tabbable'?: boolean;
    /**
    * Adapts the button color depending on the theme.
    */
    'theme'?: Theme;
    /**
    * Specifies the type of the button.
    */
    'type'?: ButtonType;
    /**
    * The style variant of the button.
    */
    'variant'?: 'primary' | 'secondary' | 'tertiary';
  }
  interface PButtonPure {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Check native tabindex to ensure that it doesn't get set on the host element
    */
    'nativeTabindex'?: number;
    /**
    * Size of the button.
    */
    'size'?: BreakpointCustomizable<TextSize>;
    /**
    * To remove the element from tab order.
    */
    'tabbable'?: boolean;
    /**
    * Adapts the button color depending on the theme.
    */
    'theme'?: Theme;
    /**
    * Specifies the type of the button.
    */
    'type'?: ButtonType;
    /**
    * The weight of the text (only has effect with visible label).
    */
    'weight'?: TextWeight;
  }
  interface PFlex {
    /**
    * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis.
    */
    'alignContent'?: BreakpointCustomizable<
    'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    >;
    /**
    * Defines how the flex items are aligned along the cross axis.
    */
    'alignItems'?: BreakpointCustomizable<'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'>;
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
    /**
    * Defines the flex containers content flow if 2 or more containers are siblings of each other.
    */
    'inline'?: BreakpointCustomizable<boolean>;
    /**
    * Defines how the flex items are aligned along the main axis.
    */
    'justifyContent'?: BreakpointCustomizable<
    'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    >;
    /**
    * If set, overflowing elements will wrap to a new line.
    */
    'wrap'?: BreakpointCustomizable<'nowrap' | 'wrap' | 'wrap-reverse'>;
  }
  interface PFlexItem {
    /**
    * Defines how this flex item is aligned along the cross axis. This overwrites the cross axis alignment set by the container. Corresponds to the "alignSelf" css property.
    */
    'alignSelf'?: BreakpointCustomizable<'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'>;
    /**
    * The shorthand property for the combined definition of "shrink", "grow" and "basis"
    */
    'flex'?: BreakpointCustomizable<'initial' | 'auto' | 'none' | 'equal'>;
    /**
    * The ability to allow/disallow the flex child to grow.
    */
    'grow'?: BreakpointCustomizable<0 | 1>;
    /**
    * The offset of the column. You can also supply values for specific breakpoints, like {base: "none", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<
    'none' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters'
    >;
    /**
    * The ability to allow/disallow the flex child to shrink.
    */
    'shrink'?: BreakpointCustomizable<1 | 0>;
    /**
    * The width of the flex item. You can also supply values for specific breakpoints, like {base: "full", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'width'?: BreakpointCustomizable<
    'auto' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters' | 'full'
    >;
  }
  interface PGrid {
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {base: "column", l: "row"}. You always need to provide a base value when doing this.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  }
  interface PGridItem {
    /**
    * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
    /**
    * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  }
  interface PHeadline {
    /**
    * Text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations.
    */
    'color'?: TextColor;
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets a custom HTML tag depending of the usage of the headline component.
    */
    'tag'?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
    * Style of the text.
    */
    'variant'?: | 'large-title'
    | 'headline-1'
    | 'headline-2'
    | 'headline-3'
    | 'headline-4'
    | 'headline-5'
    | 'headline-6';
  }
  interface PIcon {
    /**
    * Basic color variations.
    */
    'color'?: TextColor;
    /**
    * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
    */
    'lazy'?: boolean;
    /**
    * Specifies which icon to use.
    */
    'name'?: IconName;
    /**
    * The size of the icon.
    */
    'size'?: 'small' | 'medium' | 'large' | 'inherit';
    /**
    * Specifies a whole icon path which can be used for custom icons.
    */
    'source'?: string;
    'variant'?: 'outline' | 'filled';
  }
  interface PLink {
    /**
    * Special download attribute to open native browser download dialog if target url points to a downloadable file.
    */
    'download'?: string;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * When providing an url then the component will be rendered as `<a>`.
    */
    'href'?: string;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Check native tabindex to ensure that it doesn't get set on the host element
    */
    'nativeTabindex'?: number;
    /**
    * Specifies the relationship of the target object to the link object.
    */
    'rel'?: string;
    /**
    * To remove the element from tab order.
    */
    'tabbable'?: boolean;
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: LinkTarget;
    /**
    * Adapts the link color when used on dark background.
    */
    'theme'?: Theme;
    /**
    * The style variant of the link.
    */
    'variant'?: 'primary' | 'secondary' | 'tertiary';
  }
  interface PMarque {
    /**
    * Show/hide trademark sign.
    */
    'trademark'?: boolean;
  }
  interface PPagination {
    /**
    * Index of the currently active page.
    */
    'activePage'?: number;
    /**
    * The total count of items which should be shown per page.
    */
    'itemsPerPage': number;
    /**
    * Aria label what the pagination is used for.
    */
    'label'?: string;
    /**
    * Aria label for next page icon.
    */
    'labelNext'?: string;
    /**
    * Aria label for page navigation.
    */
    'labelPage'?: string;
    /**
    * Aria label for previous page icon.
    */
    'labelPrev'?: string;
    /**
    * The number of pages between ellipsis. 'small' = mobile | 'large' = desktop | 'auto' = breakpoint specific
    */
    'pageRange'?: 'small' | 'large' | 'auto';
    /**
    * Adapts the color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * The total count of items.
    */
    'totalItemsCount': number;
  }
  interface PSpinner {
    /**
    * A visually hidden aria-label text to improve accessibility which describes the function behind the loader.
    */
    'allyLabel'?: string;
    /**
    * Predefined spinner sizes.
    */
    'size'?: 'small' | 'medium' | 'large' | 'x-large' | 'inherit';
    /**
    * Adapts the spinner color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
  }
  interface PText {
    /**
    * Text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations.
    */
    'color'?: TextColor;
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Size of the text. Also defines the size for specific breakpoints, like {base: "small", l: "medium"}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<TextSize>;
    /**
    * Sets a custom HTML tag depending of the usage of the text component.
    */
    'tag'?: | 'p'
    | 'span'
    | 'div'
    | 'address'
    | 'blockquote'
    | 'figcaption'
    | 'cite'
    | 'time'
    | 'legend';
    /**
    * The weight of the text.
    */
    'weight'?: TextWeight;
  }
  interface PTextLink {
    /**
    * Basic text color variations.
    */
    'color'?: TextColor;
    /**
    * Special download attribute to open native browser download dialog if target url points to a downloadable file.
    */
    'download'?: string;
    /**
    * Target url to where the component should link to.
    */
    'href'?: string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Specifies the relationship of the target object to the link object.
    */
    'rel'?: string;
    /**
    * The style of the text.
    */
    'size'?: TextSize;
    /**
    * Set a custom HTML tag depending of the usage of the component.
    */
    'tag'?: 'span' | 'a';
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: 'self' | 'blank' | 'parent' | 'top';
  }
  interface PTextList {
    /**
    * Basic text list color variations.
    */
    'color'?: TextColor;
    /**
    * The type of the text list.
    */
    'listType'?: 'unordered' | 'ordered';
  }
  interface PTextListItem {}
}

declare global {


  interface HTMLPButtonElement extends Components.PButton, HTMLStencilElement {}
  var HTMLPButtonElement: {
    prototype: HTMLPButtonElement;
    new (): HTMLPButtonElement;
  };

  interface HTMLPButtonPureElement extends Components.PButtonPure, HTMLStencilElement {}
  var HTMLPButtonPureElement: {
    prototype: HTMLPButtonPureElement;
    new (): HTMLPButtonPureElement;
  };

  interface HTMLPFlexElement extends Components.PFlex, HTMLStencilElement {}
  var HTMLPFlexElement: {
    prototype: HTMLPFlexElement;
    new (): HTMLPFlexElement;
  };

  interface HTMLPFlexItemElement extends Components.PFlexItem, HTMLStencilElement {}
  var HTMLPFlexItemElement: {
    prototype: HTMLPFlexItemElement;
    new (): HTMLPFlexItemElement;
  };

  interface HTMLPGridElement extends Components.PGrid, HTMLStencilElement {}
  var HTMLPGridElement: {
    prototype: HTMLPGridElement;
    new (): HTMLPGridElement;
  };

  interface HTMLPGridItemElement extends Components.PGridItem, HTMLStencilElement {}
  var HTMLPGridItemElement: {
    prototype: HTMLPGridItemElement;
    new (): HTMLPGridItemElement;
  };

  interface HTMLPHeadlineElement extends Components.PHeadline, HTMLStencilElement {}
  var HTMLPHeadlineElement: {
    prototype: HTMLPHeadlineElement;
    new (): HTMLPHeadlineElement;
  };

  interface HTMLPIconElement extends Components.PIcon, HTMLStencilElement {}
  var HTMLPIconElement: {
    prototype: HTMLPIconElement;
    new (): HTMLPIconElement;
  };

  interface HTMLPLinkElement extends Components.PLink, HTMLStencilElement {}
  var HTMLPLinkElement: {
    prototype: HTMLPLinkElement;
    new (): HTMLPLinkElement;
  };

  interface HTMLPMarqueElement extends Components.PMarque, HTMLStencilElement {}
  var HTMLPMarqueElement: {
    prototype: HTMLPMarqueElement;
    new (): HTMLPMarqueElement;
  };

  interface HTMLPPaginationElement extends Components.PPagination, HTMLStencilElement {}
  var HTMLPPaginationElement: {
    prototype: HTMLPPaginationElement;
    new (): HTMLPPaginationElement;
  };

  interface HTMLPSpinnerElement extends Components.PSpinner, HTMLStencilElement {}
  var HTMLPSpinnerElement: {
    prototype: HTMLPSpinnerElement;
    new (): HTMLPSpinnerElement;
  };

  interface HTMLPTextElement extends Components.PText, HTMLStencilElement {}
  var HTMLPTextElement: {
    prototype: HTMLPTextElement;
    new (): HTMLPTextElement;
  };

  interface HTMLPTextLinkElement extends Components.PTextLink, HTMLStencilElement {}
  var HTMLPTextLinkElement: {
    prototype: HTMLPTextLinkElement;
    new (): HTMLPTextLinkElement;
  };

  interface HTMLPTextListElement extends Components.PTextList, HTMLStencilElement {}
  var HTMLPTextListElement: {
    prototype: HTMLPTextListElement;
    new (): HTMLPTextListElement;
  };

  interface HTMLPTextListItemElement extends Components.PTextListItem, HTMLStencilElement {}
  var HTMLPTextListItemElement: {
    prototype: HTMLPTextListItemElement;
    new (): HTMLPTextListItemElement;
  };
  interface HTMLElementTagNameMap {
    'p-button': HTMLPButtonElement;
    'p-button-pure': HTMLPButtonPureElement;
    'p-flex': HTMLPFlexElement;
    'p-flex-item': HTMLPFlexItemElement;
    'p-grid': HTMLPGridElement;
    'p-grid-item': HTMLPGridItemElement;
    'p-headline': HTMLPHeadlineElement;
    'p-icon': HTMLPIconElement;
    'p-link': HTMLPLinkElement;
    'p-marque': HTMLPMarqueElement;
    'p-pagination': HTMLPPaginationElement;
    'p-spinner': HTMLPSpinnerElement;
    'p-text': HTMLPTextElement;
    'p-text-link': HTMLPTextLinkElement;
    'p-text-list': HTMLPTextListElement;
    'p-text-list-item': HTMLPTextListItemElement;
  }
}

declare namespace LocalJSX {
  interface PButton {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * To remove the element from tab order.
    */
    'tabbable'?: boolean;
    /**
    * Adapts the button color depending on the theme.
    */
    'theme'?: Theme;
    /**
    * Specifies the type of the button.
    */
    'type'?: ButtonType;
    /**
    * The style variant of the button.
    */
    'variant'?: 'primary' | 'secondary' | 'tertiary';
  }
  interface PButtonPure {
    /**
    * Disables the button. No events will be triggered while disabled state is active.
    */
    'disabled'?: boolean;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Disables the button and shows a loading indicator. No events will be triggered while loading state is active.
    */
    'loading'?: boolean;
    /**
    * Size of the button.
    */
    'size'?: BreakpointCustomizable<TextSize>;
    /**
    * To remove the element from tab order.
    */
    'tabbable'?: boolean;
    /**
    * Adapts the button color depending on the theme.
    */
    'theme'?: Theme;
    /**
    * Specifies the type of the button.
    */
    'type'?: ButtonType;
    /**
    * The weight of the text (only has effect with visible label).
    */
    'weight'?: TextWeight;
  }
  interface PFlex {
    /**
    * This aligns a flex container's individual lines when there is extra space in the cross-axis, similar to how "justifyContent" aligns individual items along the main axis.
    */
    'alignContent'?: BreakpointCustomizable<
    'stretch' | 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    >;
    /**
    * Defines how the flex items are aligned along the cross axis.
    */
    'alignItems'?: BreakpointCustomizable<'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'>;
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
    /**
    * Defines the flex containers content flow if 2 or more containers are siblings of each other.
    */
    'inline'?: BreakpointCustomizable<boolean>;
    /**
    * Defines how the flex items are aligned along the main axis.
    */
    'justifyContent'?: BreakpointCustomizable<
    'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly'
    >;
    /**
    * If set, overflowing elements will wrap to a new line.
    */
    'wrap'?: BreakpointCustomizable<'nowrap' | 'wrap' | 'wrap-reverse'>;
  }
  interface PFlexItem {
    /**
    * Defines how this flex item is aligned along the cross axis. This overwrites the cross axis alignment set by the container. Corresponds to the "alignSelf" css property.
    */
    'alignSelf'?: BreakpointCustomizable<'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch'>;
    /**
    * The shorthand property for the combined definition of "shrink", "grow" and "basis"
    */
    'flex'?: BreakpointCustomizable<'initial' | 'auto' | 'none' | 'equal'>;
    /**
    * The ability to allow/disallow the flex child to grow.
    */
    'grow'?: BreakpointCustomizable<0 | 1>;
    /**
    * The offset of the column. You can also supply values for specific breakpoints, like {base: "none", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<
    'none' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters'
    >;
    /**
    * The ability to allow/disallow the flex child to shrink.
    */
    'shrink'?: BreakpointCustomizable<1 | 0>;
    /**
    * The width of the flex item. You can also supply values for specific breakpoints, like {base: "full", l: "one-quarter"}. You always need to provide a base value when doing this.
    */
    'width'?: BreakpointCustomizable<
    'auto' | 'one-quarter' | 'one-third' | 'half' | 'two-thirds' | 'three-quarters' | 'full'
    >;
  }
  interface PGrid {
    /**
    * Defines the direction of the main and cross axis. The default "row" defines the main axis as horizontal left to right. Also defines the direction for specific breakpoints, like {base: "column", l: "row"}. You always need to provide a base value when doing this.
    */
    'direction'?: BreakpointCustomizable<'row' | 'row-reverse' | 'column' | 'column-reverse'>;
  }
  interface PGridItem {
    /**
    * The offset of the column. Can be between 0 and 11. Also defines the offset of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
    */
    'offset'?: BreakpointCustomizable<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11>;
    /**
    * The size of the column. Can be between 1 and 12. Also defines the size of the column for specific breakpoints, like {base: 6, l: 3}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12>;
  }
  interface PHeadline {
    /**
    * Text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations.
    */
    'color'?: TextColor;
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Sets a custom HTML tag depending of the usage of the headline component.
    */
    'tag'?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    /**
    * Style of the text.
    */
    'variant'?: | 'large-title'
    | 'headline-1'
    | 'headline-2'
    | 'headline-3'
    | 'headline-4'
    | 'headline-5'
    | 'headline-6';
  }
  interface PIcon {
    /**
    * Basic color variations.
    */
    'color'?: TextColor;
    /**
    * If enabled, ion-icon will be loaded lazily when it's visible in the viewport. Default, `false`.
    */
    'lazy'?: boolean;
    /**
    * Specifies which icon to use.
    */
    'name'?: IconName;
    /**
    * The size of the icon.
    */
    'size'?: 'small' | 'medium' | 'large' | 'inherit';
    /**
    * Specifies a whole icon path which can be used for custom icons.
    */
    'source'?: string;
  }
  interface PLink {
    /**
    * Special download attribute to open native browser download dialog if target url points to a downloadable file.
    */
    'download'?: string;
    /**
    * Show or hide label. For better accessibility it is recommended to show the label.
    */
    'hideLabel'?: BreakpointCustomizable<boolean>;
    /**
    * When providing an url then the component will be rendered as `<a>`.
    */
    'href'?: string;
    /**
    * The icon shown.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Specifies the relationship of the target object to the link object.
    */
    'rel'?: string;
    /**
    * To remove the element from tab order.
    */
    'tabbable'?: boolean;
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: LinkTarget;
    /**
    * Adapts the link color when used on dark background.
    */
    'theme'?: Theme;
    /**
    * The style variant of the link.
    */
    'variant'?: 'primary' | 'secondary' | 'tertiary';
  }
  interface PMarque {
    /**
    * Show/hide trademark sign.
    */
    'trademark'?: boolean;
  }
  interface PPagination {
    /**
    * Index of the currently active page.
    */
    'activePage'?: number;
    /**
    * The total count of items which should be shown per page.
    */
    'itemsPerPage'?: number;
    /**
    * Aria label what the pagination is used for.
    */
    'label'?: string;
    /**
    * Aria label for next page icon.
    */
    'labelNext'?: string;
    /**
    * Aria label for page navigation.
    */
    'labelPage'?: string;
    /**
    * Aria label for previous page icon.
    */
    'labelPrev'?: string;
    /**
    * Emitted when the link is clicked.
    */
    'onPClick'?: (event: CustomEvent<any>) => void;
    /**
    * The number of pages between ellipsis. 'small' = mobile | 'large' = desktop | 'auto' = breakpoint specific
    */
    'pageRange'?: 'small' | 'large' | 'auto';
    /**
    * Adapts the color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
    /**
    * The total count of items.
    */
    'totalItemsCount'?: number;
  }
  interface PSpinner {
    /**
    * A visually hidden aria-label text to improve accessibility which describes the function behind the loader.
    */
    'allyLabel'?: string;
    /**
    * Predefined spinner sizes.
    */
    'size'?: 'small' | 'medium' | 'large' | 'x-large' | 'inherit';
    /**
    * Adapts the spinner color when used on dark background.
    */
    'theme'?: 'light' | 'dark';
  }
  interface PText {
    /**
    * Text alignment of the component.
    */
    'align'?: 'left' | 'center' | 'right';
    /**
    * Basic text color variations.
    */
    'color'?: TextColor;
    /**
    * Adds an ellipsis to a single line of text if it overflows.
    */
    'ellipsis'?: boolean;
    /**
    * Size of the text. Also defines the size for specific breakpoints, like {base: "small", l: "medium"}. You always need to provide a base value when doing this.
    */
    'size'?: BreakpointCustomizable<TextSize>;
    /**
    * Sets a custom HTML tag depending of the usage of the text component.
    */
    'tag'?: | 'p'
    | 'span'
    | 'div'
    | 'address'
    | 'blockquote'
    | 'figcaption'
    | 'cite'
    | 'time'
    | 'legend';
    /**
    * The weight of the text.
    */
    'weight'?: TextWeight;
  }
  interface PTextLink {
    /**
    * Basic text color variations.
    */
    'color'?: TextColor;
    /**
    * Special download attribute to open native browser download dialog if target url points to a downloadable file.
    */
    'download'?: string;
    /**
    * Target url to where the component should link to.
    */
    'href'?: string;
    /**
    * The icon shown next to the label.
    */
    'icon'?: IconName;
    /**
    * A custom URL path to a custom icon.
    */
    'iconSource'?: string;
    /**
    * Emitted when the link is clicked.
    */
    'onPClick'?: (event: CustomEvent<void>) => void;
    /**
    * Specifies the relationship of the target object to the link object.
    */
    'rel'?: string;
    /**
    * The style of the text.
    */
    'size'?: TextSize;
    /**
    * Set a custom HTML tag depending of the usage of the component.
    */
    'tag'?: 'span' | 'a';
    /**
    * Target attribute where the link should be opened.
    */
    'target'?: 'self' | 'blank' | 'parent' | 'top';
  }
  interface PTextList {
    /**
    * Basic text list color variations.
    */
    'color'?: TextColor;
    /**
    * The type of the text list.
    */
    'listType'?: 'unordered' | 'ordered';
  }
  interface PTextListItem {}

  interface IntrinsicElements {
    'p-button': PButton;
    'p-button-pure': PButtonPure;
    'p-flex': PFlex;
    'p-flex-item': PFlexItem;
    'p-grid': PGrid;
    'p-grid-item': PGridItem;
    'p-headline': PHeadline;
    'p-icon': PIcon;
    'p-link': PLink;
    'p-marque': PMarque;
    'p-pagination': PPagination;
    'p-spinner': PSpinner;
    'p-text': PText;
    'p-text-link': PTextLink;
    'p-text-list': PTextList;
    'p-text-list-item': PTextListItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'p-button': LocalJSX.PButton & JSXBase.HTMLAttributes<HTMLPButtonElement>;
      'p-button-pure': LocalJSX.PButtonPure & JSXBase.HTMLAttributes<HTMLPButtonPureElement>;
      'p-flex': LocalJSX.PFlex & JSXBase.HTMLAttributes<HTMLPFlexElement>;
      'p-flex-item': LocalJSX.PFlexItem & JSXBase.HTMLAttributes<HTMLPFlexItemElement>;
      'p-grid': LocalJSX.PGrid & JSXBase.HTMLAttributes<HTMLPGridElement>;
      'p-grid-item': LocalJSX.PGridItem & JSXBase.HTMLAttributes<HTMLPGridItemElement>;
      'p-headline': LocalJSX.PHeadline & JSXBase.HTMLAttributes<HTMLPHeadlineElement>;
      'p-icon': LocalJSX.PIcon & JSXBase.HTMLAttributes<HTMLPIconElement>;
      'p-link': LocalJSX.PLink & JSXBase.HTMLAttributes<HTMLPLinkElement>;
      'p-marque': LocalJSX.PMarque & JSXBase.HTMLAttributes<HTMLPMarqueElement>;
      'p-pagination': LocalJSX.PPagination & JSXBase.HTMLAttributes<HTMLPPaginationElement>;
      'p-spinner': LocalJSX.PSpinner & JSXBase.HTMLAttributes<HTMLPSpinnerElement>;
      'p-text': LocalJSX.PText & JSXBase.HTMLAttributes<HTMLPTextElement>;
      'p-text-link': LocalJSX.PTextLink & JSXBase.HTMLAttributes<HTMLPTextLinkElement>;
      'p-text-list': LocalJSX.PTextList & JSXBase.HTMLAttributes<HTMLPTextListElement>;
      'p-text-list-item': LocalJSX.PTextListItem & JSXBase.HTMLAttributes<HTMLPTextListItemElement>;
    }
  }
}


