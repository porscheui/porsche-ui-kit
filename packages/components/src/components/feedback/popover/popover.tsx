import { JSX, Component, Prop, h, Element, Host, State } from '@stencil/core';
import { getAutoDirection, getOffset, isClickInsideHost, isWithinViewport } from './popover-utils';
import { attachComponentCss, attachSlottedCss, getPrefixedTagNames, getThemeDarkAttribute } from '../../../utils';
import { getComponentCss } from './popover-styles';
import type { PopoverDirection } from './popover-utils';
import type { Theme } from '../../../types';
import { getSlottedCss } from '../../basic/typography/text/text-styles';

@Component({
  tag: 'p-popover',
  shadow: true,
})
export class Popover {
  @Element() public host!: HTMLElement;

  /** Preferred direction in which popover should open, given there is enough space in viewport.
   * Otherwise it will be opened in the direction with most available space. */
  @Prop() public direction: PopoverDirection = 'bottom';

  /** Theme. */
  @Prop() public theme?: Theme = 'light';

  @State() private open = false;

  private spacer: HTMLDivElement;
  private popover: HTMLDivElement;

  public connectedCallback(): void {
    attachSlottedCss(this.host, getSlottedCss);
  }

  public componentWillRender(): void {
    attachComponentCss(this.host, getComponentCss, this.direction, this.theme);
  }

  public componentDidRender(): void {
    if (this.open) {
      this.popover.style.margin = '0';

      let direction = this.direction;
      if (!isWithinViewport(this.popover, this.direction)) {
        direction = getAutoDirection(this.spacer, this.popover);
        if (direction !== this.direction) {
          attachComponentCss(this.host, getComponentCss, direction, this.theme);
        }
      }

      this.popover.style.margin = getOffset(this.spacer, this.popover, direction);
    }
  }

  public componentDidLoad(): void {
    document.addEventListener('click', this.onClick);
  }

  public disconnectedCallback(): void {
    document.removeEventListener('click', this.onClick);
  }

  public render(): JSX.Element {
    const PrefixedTagNames = getPrefixedTagNames(this.host);

    return (
      <Host {...getThemeDarkAttribute(this.theme)}>
        <PrefixedTagNames.pButtonPure
          icon="information"
          hideLabel="true"
          theme={this.theme}
          onClick={() => (this.open = !this.open)}
        >
          Open Popover
        </PrefixedTagNames.pButtonPure>
        {this.open && (
          <div class="spacer" ref={(el) => (this.spacer = el)}>
            <div class="popover" ref={(el) => (this.popover = el)}>
              <slot />
            </div>
          </div>
        )}
      </Host>
    );
  }

  // TODO: test for composedPath or onClick to ensure its only called when open
  private onClick = (e: MouseEvent): void => {
    if (!isClickInsideHost(this.host, this.open, e)) {
      this.open = false;
    }
  };
}
