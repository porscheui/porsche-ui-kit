import { JSX, Component, Prop, h, Element, Event, EventEmitter } from '@stencil/core';
import { prefix, getPrefixedTagNames, insertSlottedStyles, getHTMLElement } from '../../../utils';
import type { BannerState, Theme } from '../../../types';

@Component({
  tag: 'p-banner',
  styleUrl: 'banner.scss',
  shadow: true,
})
export class Banner {
  @Element() public host!: HTMLElement;

  /** State of the banner. */
  @Prop() public state?: BannerState = 'neutral';

  /** Defines if the banner can be closed/removed by the user. */
  @Prop() public persistent?: boolean = false;

  /** Defines the width of the banner corresponding to the `content-wrapper` dimensions */
  @Prop() public width?: 'basic' | 'extended' | 'fluid' = 'basic';

  /** Adapts the banner color depending on the theme. */
  @Prop() public theme?: Theme = 'light';

  /** Emitted when the close button is clicked. */
  @Event({ bubbles: false }) public dismiss?: EventEmitter<void>;

  private closeButton: HTMLButtonElement;

  public connectedCallback(): void {
    if (!this.persistent) {
      document.addEventListener('keydown', this.handleKeyboardEvents);
    }
  }

  public componentWillLoad(): void {
    this.addSlottedStyles();
  }

  public componentDidLoad(): void {
    if (!this.persistent) {
      this.closeButton.focus();
    }
  }

  public disconnectedCallback(): void {
    if (!this.persistent) {
      document.removeEventListener('keydown', this.handleKeyboardEvents);
    }
  }

  public render(): JSX.Element {
    const bannerClasses = {
      [prefix('banner')]: true,
      [prefix(`banner--${this.state}`)]: true,
      [prefix(`banner--theme-${this.theme}`)]: true,
    };

    const contentClasses = prefix('banner__content');
    const iconClasses = prefix('banner__icon');
    const titleClasses = prefix('banner__title');
    const descriptionClasses = prefix('banner__description');
    const buttonClasses = prefix('banner__button');

    const bannerLabelId = prefix('banner-label');
    const bannerDescriptionId = prefix('banner-description');

    const PrefixedTagNames = getPrefixedTagNames(this.host, [
      'p-content-wrapper',
      'p-headline',
      'p-text',
      'p-icon',
      'p-button-pure',
    ]);

    return (
      <PrefixedTagNames.pContentWrapper
        width={this.width}
        role="alertdialog"
        aria-labelledby={bannerLabelId}
        aria-describedby={bannerDescriptionId}
      >
        <div class={bannerClasses}>
          {this.state !== 'neutral' && (
            <PrefixedTagNames.pIcon name={this.state === 'error' ? 'exclamation' : 'warning'} class={iconClasses} />
          )}
          <div class={contentClasses}>
            {this.isTitleDefined && (
              <PrefixedTagNames.pHeadline variant="headline-5" id={bannerLabelId} class={titleClasses}>
                <slot name="title" />
              </PrefixedTagNames.pHeadline>
            )}
            {this.isDescriptionDefined && (
              <PrefixedTagNames.pText id={bannerDescriptionId} class={descriptionClasses}>
                <slot name="description" />
              </PrefixedTagNames.pText>
            )}
            {!this.persistent && (
              <div class={buttonClasses}>
                <PrefixedTagNames.pButtonPure
                  icon="close"
                  hideLabel={true}
                  onClick={this.removeBanner}
                  ref={(el) => (this.closeButton = el)}
                >
                  Close notification
                </PrefixedTagNames.pButtonPure>
              </div>
            )}
          </div>
        </div>
      </PrefixedTagNames.pContentWrapper>
    );
  }

  private handleKeyboardEvents = (e: KeyboardEvent): void => {
    const { key } = e;
    if (key === 'Esc' || key === 'Escape') {
      this.removeBanner();
    }
  };

  private removeBanner = (): void => {
    this.dismiss.emit();
    this.host.classList.add(prefix('banner--close'));
    // eslint-disable-next-line @typescript-eslint/unbound-method
    setTimeout(this.host.remove, 1000);
  };

  private get isTitleDefined(): boolean {
    return !!getHTMLElement(this.host, '[slot="title"]');
  }

  private get isDescriptionDefined(): boolean {
    return !!getHTMLElement(this.host, '[slot="description"]');
  }

  private addSlottedStyles(): void {
    const tagName = this.host.tagName.toLowerCase();
    const style = `${tagName} a {
      outline: none transparent !important;
      color: inherit !important;
      text-decoration: underline !important;
      -webkit-transition: color .24s ease !important;
      transition: color .24s ease !important;
      outline: transparent solid 1px !important;
      outline-offset: 1px !important;
    }

    ${tagName} a:hover {
      color: #d5001c !important;
    }

    ${tagName} a:focus {
      outline-color: currentColor !important;
    }

    ${tagName} a:focus:not(:focus-visible) {
      outline-color: transparent !important;
    }`;

    insertSlottedStyles(this.host, style);
  }
}
