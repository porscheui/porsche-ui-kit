import type {
  BreakpointCustomizable,
  ButtonAriaAttributes,
  ButtonType,
  ButtonVariant,
  LinkButtonIconName,
  PropTypes,
  SelectedAriaAttributes,
  Theme,
} from '../../types';
import {
  AllowedTypes,
  attachComponentCss,
  BUTTON_ARIA_ATTRIBUTES,
  BUTTON_TYPES,
  getPrefixedTagNames, hasVisibleIcon,
  improveButtonHandlingForCustomElement,
  isDisabledOrLoading,
  LINK_BUTTON_VARIANTS,
  THEMES,
  validateProps,
} from '../../utils';
import { Component, Element, h, JSX, Listen, Prop } from '@stencil/core';
import { getButtonAriaAttributes } from './button-utils';
import { getComponentCss } from './button-styles';

const propTypes: PropTypes<typeof Button> = {
  type: AllowedTypes.oneOf<ButtonType>(BUTTON_TYPES),
  variant: AllowedTypes.oneOf<ButtonVariant>(LINK_BUTTON_VARIANTS),
  tabbable: AllowedTypes.boolean,
  disabled: AllowedTypes.boolean,
  loading: AllowedTypes.boolean,
  icon: AllowedTypes.string,
  theme: AllowedTypes.oneOf<Theme>(THEMES),
  iconSource: AllowedTypes.string,
  hideLabel: AllowedTypes.breakpoint('boolean'),
  aria: AllowedTypes.aria<ButtonAriaAttributes>(BUTTON_ARIA_ATTRIBUTES),
};

@Component({
  tag: 'p-button',
  shadow: { delegatesFocus: true },
})
export class Button {
  @Element() public host!: HTMLElement;

  /** To remove the element from tab order.
   * @deprecated since v2.8.0, use `tabindex="-1"` instead
   */
  @Prop() public tabbable?: boolean = true;

  /** Specifies the type of the button. */
  @Prop() public type?: ButtonType = 'submit';

  /** Disables the button. No events will be triggered while disabled state is active. */
  @Prop() public disabled?: boolean = false;

  /** Disables the button and shows a loading indicator. No events will be triggered while loading state is active. */
  @Prop() public loading?: boolean = false;

  /** The style variant of the button. */
  @Prop() public variant?: ButtonVariant = 'primary';

  /** The icon shown. By choosing 'none', no icon is displayed. */
  @Prop() public icon?: LinkButtonIconName = 'none';

  /** A URL path to a custom icon. */
  @Prop() public iconSource?: string;

  /** Show or hide label. For better accessibility it is recommended to show the label. */
  @Prop() public hideLabel?: BreakpointCustomizable<boolean> = false;

  /** Adapts the button color depending on the theme. */
  @Prop() public theme?: Theme = 'light';

  /** Add ARIA attributes. */
  @Prop() public aria?: SelectedAriaAttributes<ButtonAriaAttributes>;

  private get isDisabledOrLoading(): boolean {
    return isDisabledOrLoading(this.disabled, this.loading);
  }

  @Listen('click', { capture: true })
  public onClick(e: MouseEvent): void {
    if (this.isDisabledOrLoading) {
      e.stopPropagation();
    }
  }

  public componentDidLoad(): void {
    improveButtonHandlingForCustomElement(
      this.host,
      () => this.type,
      () => this.isDisabledOrLoading
    );
  }

  public render(): JSX.Element {
    validateProps(this, propTypes);
    attachComponentCss(this.host, getComponentCss, this.icon, this.iconSource, this.variant, this.hideLabel, this.disabled, this.isDisabledOrLoading, this.loading, this.theme);

    const PrefixedTagNames = getPrefixedTagNames(this.host);
    const iconProps = {
      class: 'icon',
      size: 'inherit',
    };
    const spinnerProps = {
      class: 'spinner',
      size: 'inherit',
    };

    return (
      <button
        {...getButtonAriaAttributes(this.disabled, this.loading, this.aria)}
        class="root"
        type={this.type}
        tabIndex={this.tabbable ? parseInt(this.host.getAttribute('tabindex'), 10) || null : -1}
      >
        {this.loading && (
          <PrefixedTagNames.pSpinner
            {...spinnerProps}
            theme={this.variant === ('secondary' || 'tertiary') ? this.theme : 'dark'}
            aria={{ 'aria-label': 'Loading state:' }}
          />
        )}
        {(hasVisibleIcon(this.icon, this.iconSource) || this.hideLabel) && (
          <PrefixedTagNames.pIcon
            {...iconProps}
            name={this.icon}
            source={this.iconSource}
            color="inherit"
            theme={
              this.variant === 'tertiary'
                ? this.theme
                : this.variant === 'secondary' && this.theme === 'dark'
                ? 'light'
                : 'dark'
            } // relevant for ssr support
            aria-hidden="true"
          />
        )}
        <span class="label">
          <slot />
        </span>
      </button>
    );
  }
}
