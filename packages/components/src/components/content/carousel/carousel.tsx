import { Component, Element, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import {
  AllowedTypes,
  attachComponentCss,
  getPrefixedTagNames,
  parseJSON,
  THEMES,
  validateProps,
} from '../../../utils';
import type { BreakpointCustomizable, PropTypes, Theme } from '../../../types';
import { getComponentCss } from './carousel-styles';
import { Splide } from '@splidejs/splide';
import type { CarouselChangeEvent, CarouselI18n } from './carousel-utils';
import {
  getAmountOfPages,
  getSplideBreakpoints,
  renderPagination,
  slideNext,
  slidePrev,
  updatePagination,
  updatePrevNextButtonAria,
} from './carousel-utils';
import { ButtonPure } from '../../action/button-pure/button-pure';
import { gridGap } from '@porsche-design-system/utilities-v2';

const propTypes: PropTypes<typeof Carousel> = {
  heading: AllowedTypes.string,
  wrapHeading: AllowedTypes.boolean,
  slidesPerPage: AllowedTypes.breakpoint('number'),
  slidesPerMove: AllowedTypes.breakpoint('number'),
  disablePagination: AllowedTypes.breakpoint('boolean'),
  i18n: AllowedTypes.shape<CarouselI18n>({
    prev: AllowedTypes.string,
    next: AllowedTypes.string,
    first: AllowedTypes.string,
    last: AllowedTypes.string,
    slideLabel: AllowedTypes.string,
  }),
  theme: AllowedTypes.oneOf<Theme>(THEMES),
};

@Component({
  tag: 'p-carousel',
  shadow: true,
})
export class Carousel {
  @Element() public host!: HTMLElement;

  /** Defines the heading used in carousel. */
  @Prop() public heading?: string;

  /** Whether the heading should receive a padding to the sides to be aligned on the grid when used full width and not within content-wrapper. */
  @Prop() public wrapHeading?: boolean;

  /** Sets the amount of slides visible at the same time. */
  @Prop({ mutable: true }) public slidesPerPage?: BreakpointCustomizable<number> = 1;

  /** Sets the amount of slides that move on a single prev/next click. */
  @Prop({ mutable: true }) public slidesPerMove?: BreakpointCustomizable<number> = 1;

  /** If true, the carousel will not show pagination bullets at the bottom. */
  @Prop({ mutable: true }) public disablePagination?: BreakpointCustomizable<boolean> = false;

  /** Override the default wordings that are used for aria-labels on the next/prev buttons and pagination. */
  @Prop() public i18n?: CarouselI18n = {};

  /** Adapts the color when used on dark background. */
  @Prop() public theme?: Theme = 'light';

  /** Emitted when carousel's content slides. */
  @Event({ bubbles: false }) public carouselChange: EventEmitter<CarouselChangeEvent>;

  private splide: Splide;
  private container: HTMLElement;
  private btnPrev: ButtonPure;
  private btnNext: ButtonPure;
  private pagination: HTMLElement;
  private slides: HTMLElement[];
  private amountOfPages: number;

  public componentWillLoad(): void {
    this.slidesPerPage = parseJSON(this.slidesPerPage) as any;
    this.slidesPerMove = parseJSON(this.slidesPerMove) as any;

    this.slides = Array.from(this.host.children).filter((el) => !el.slot) as HTMLElement[];
    this.slides.forEach((el, i) => el.setAttribute('slot', `slide-${i}`));
    this.amountOfPages = getAmountOfPages(this.slides.length, this.slidesPerPage as number); // TODO: correct breakpoint
  }

  public componentDidLoad(): void {
    this.splide = new Splide(this.container, {
      start: 0,
      arrows: false,
      pagination: false,
      dragMinThreshold: {
        mouse: 1000, // should be enough to disable mouse dragging
        touch: 10,
      },
      mediaQuery: 'min',
      breakpoints: getSplideBreakpoints(this.slidesPerPage, this.slidesPerMove),
      gap: gridGap,
      i18n: this.i18n,
    });

    this.splide.on('mounted', () => {
      updatePrevNextButtonAria(this.btnPrev, this.btnNext, this.splide);
      if (this.pagination) {
        renderPagination(this.pagination, this.amountOfPages);
        updatePagination(this.pagination, 0);
      }
    });

    this.splide.on('move', (newIndex, prevIndex): void => {
      updatePrevNextButtonAria(this.btnPrev, this.btnNext, this.splide);
      if (this.pagination) {
        updatePagination(this.pagination, newIndex, prevIndex);
      }
    });

    this.splide.mount();
    // TODO: update on slide addition/removal or prop change?
    // TODO: focus/keyboard handling?
  }

  public componentWillRender(): void {
    validateProps(this, propTypes);
    this.disablePagination = parseJSON(this.disablePagination) as any;

    // TODO: validate heading.. !!this.heading || hasNamedSlot(this.host, 'heading')
    attachComponentCss(this.host, getComponentCss, this.wrapHeading, this.disablePagination, this.theme);
  }

  public render(): JSX.Element {
    const PrefixedTagNames = getPrefixedTagNames(this.host);

    const btnProps = {
      class: 'btn',
      type: 'button',
      hideLabel: true,
      // aria: {
      //   'aria-controls': 'splide-track', // TODO: cross shadow dom? use native button tag instead of p-button-pure?
      // },
    };

    return (
      <Host>
        <div class="header">
          {this.heading ? <h2>{this.heading}</h2> : <slot name="heading" />}

          <PrefixedTagNames.pButtonPure
            {...btnProps}
            icon="arrow-head-left"
            ref={(ref) => (this.btnPrev = ref)}
            onClick={() => slidePrev(this.splide, this.amountOfPages)}
          />
          <PrefixedTagNames.pButtonPure
            {...btnProps}
            icon="arrow-head-right"
            ref={(ref) => (this.btnNext = ref)}
            onClick={() => slideNext(this.splide, this.amountOfPages)}
          />
        </div>

        <div id="splide" class="splide" ref={(ref) => (this.container = ref)}>
          <div class="splide__track">
            <div class="splide__list">
              {this.slides.map((_, i) => (
                <div class="splide__slide">
                  <slot name={`slide-${i}`} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {this.disablePagination !== true && <div class="pagination" ref={(ref) => (this.pagination = ref)} />}
      </Host>
    );
  }
}
