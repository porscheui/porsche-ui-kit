import { Component, Element, h, JSX, Prop } from '@stencil/core';
import cx from 'classnames';
import { BreakpointCustomizable, mapBreakpointPropToPrefixedClasses, prefix, lineHeight } from '../../../utils';
import { ButtonType, TextSize, TextWeight, Theme } from '../../../types';
import { improveFocusHandlingForCustomElement } from '../../../utils/focusHandling';
import { improveButtonHandlingForCustomElement } from '../../../utils/buttonHandling';
import { IconName } from '../../icon/icon/icon-name';
import { throttle } from 'throttle-debounce';

@Component({
  tag: 'p-button-pure',
  styleUrl: 'button-pure.scss',
  shadow: true
})
export class ButtonPure {
  @Element() public element!: HTMLElement;

  /** To remove the element from tab order. */
  @Prop() public tabbable?: boolean = true;

  /** Specifies the type of the button. */
  @Prop() public type?: ButtonType = 'button';

  /** Disables the button. No events will be triggered while disabled state is active. */
  @Prop() public disabled?: boolean = false;

  /** Disables the button and shows a loading indicator. No events will be triggered while loading state is active. */
  @Prop() public loading?: boolean = false;

  /** Size of the button. */
  @Prop() public size?: BreakpointCustomizable<TextSize> = 'small';

  /** The weight of the text (only has effect with visible label). */
  @Prop() public weight?: TextWeight = 'regular';

  /** The icon shown. */
  @Prop() public icon?: IconName = 'arrow-head-right';

  /** A custom URL path to a custom icon. */
  @Prop() public iconSource?: string = undefined;

  /** Show or hide label. For better accessibility it is recommended to show the label. */
  @Prop() public hideLabel?: BreakpointCustomizable<boolean> = false;

  /** Adapts the button color depending on the theme. */
  @Prop() public theme?: Theme = 'light';

  private buttonTag: HTMLElement;
  private iconTag: HTMLElement;

  public componentDidLoad() {
    improveFocusHandlingForCustomElement(this.element);
    improveButtonHandlingForCustomElement(this.element, () => this.type, () => this.isDisabled());

    this.buttonTag.addEventListener('transitionend', e => {
      if (e.propertyName === 'font-size') {
        throttle(50, () => {
          this.updateLineHeight();
        })();
      }
    });

    throttle(50, () => {
      this.updateLineHeight();
    })();
  }

  public render(): JSX.Element {
    const buttonPureClasses = cx(
      prefix('button-pure'),
      mapBreakpointPropToPrefixedClasses('button-pure-', this.hideLabel, ['without-label', 'with-label']),
      mapBreakpointPropToPrefixedClasses('button-pure--size', this.size),
      prefix(`button-pure--theme-${this.theme}`)
    );

    const iconClasses = cx(
      prefix('button-pure__icon')
    );

    const labelClasses = cx(
      prefix('button-pure__label')
    );

    return (
      <button
        class={buttonPureClasses}
        type={this.type}
        disabled={this.isDisabled()}
        tabindex={this.tabbable ? 0 : -1}
        ref={el => this.buttonTag = el as HTMLElement}
      >
        {this.loading ? (
          <p-spinner
            class={iconClasses}
            size='inherit'
            theme={this.theme}
            ref={el => this.iconTag = el as HTMLElement}
          />
        ) : (
          <p-icon
            class={iconClasses}
            color='inherit'
            size='inherit'
            name={this.icon}
            source={this.iconSource}
            ref={el => this.iconTag = el as HTMLElement}
          />
        )}
        <p-text
          class={labelClasses}
          tag='span'
          color='inherit'
          size='inherit'
          weight={this.weight}
        >
          <slot/>
        </p-text>
      </button>
    );
  }

  private updateLineHeight() {
    const fontSize = parseInt(window.getComputedStyle(this.buttonTag).fontSize, 10);
    const lineHeightFactor = lineHeight(fontSize);
    this.buttonTag.style.lineHeight = `${lineHeightFactor}`;
    this.iconTag.style.width = `${lineHeightFactor}em`;
  }

  private isDisabled() {
    return this.disabled || this.loading;
  }
}
