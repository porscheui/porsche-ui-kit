import { Component, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
import { getPrefixedTagNames, isDark, mapBreakpointPropToClasses } from '../../../utils';
import type { BreakpointCustomizable, Theme } from '../../../types';
import type { HeadlineTag } from '../../basic/typography/headline/headline-utils';
import type { AccordionChangeEvent, AccordionHeaderSize, AccordionWeight } from './accordion-utils';

@Component({
  tag: 'p-accordion',
  styleUrl: 'accordion.scss',
  shadow: true,
})
export class Accordion {
  @Element() public host!: HTMLElement;

  /** The text size. */
  @Prop() public size?: BreakpointCustomizable<AccordionHeaderSize> = 'small';

  /** The text weight. */
  @Prop() public weight?: AccordionWeight = 'semibold';

  /** Adapts the color when used on dark background. */
  @Prop() public theme?: Theme = 'light';

  /** Defines the heading used in accordion. */
  @Prop() public heading?: string;

  /** Sets a headline tag, so it fits correctly within the outline of the page. */
  @Prop() public tag?: HeadlineTag = 'h2';

  /** Defines if accordion is open. */
  @Prop() public open?: boolean;

  /** Emitted when accordion state is changed. */
  @Event({ bubbles: false }) public accordionChange: EventEmitter<AccordionChangeEvent>;

  public render(): JSX.Element {
    const buttonId = 'accordion-control';
    const contentId = 'accordion-panel';

    const rootClasses = {
      ['root']: true,
      ['root--theme-dark']: isDark(this.theme),
      ['root--open']: this.open,
      ['root--weight-regular']: this.weight === 'regular',
      ...mapBreakpointPropToClasses('root--size', this.size),
    };

    const PrefixedTagNames = getPrefixedTagNames(this.host);

    return (
      <div class={rootClasses}>
        <PrefixedTagNames.pHeadline
          class="headline"
          tag={this.tag}
          theme={this.theme}
          variant="inherit"
          onClick={this.handleHeadlineClick}
        >
          <button id={buttonId} type="button" aria-expanded={this.open} aria-controls={contentId}>
            {this.heading || <slot name="heading" />}
            <PrefixedTagNames.pIcon class="icon" name="arrowHeadDown" theme={this.theme} aria-hidden="true" />
          </button>
        </PrefixedTagNames.pHeadline>
        <div id={contentId} class="content" role="region" aria-labelledby={buttonId}>
          <slot />
        </div>
      </div>
    );
  }

  private handleHeadlineClick = (): void => {
    this.accordionChange.emit({ open: !this.open });
  };
}
