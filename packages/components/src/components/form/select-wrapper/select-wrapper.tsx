import { JSX, Host, Component, Prop, h, Element, State, Listen } from '@stencil/core';
import cx from 'classnames';
import {
  BreakpointCustomizable,
  getPrefixedTagNames,
  insertSlottedStyles,
  isTouchDevice,
  mapBreakpointPropToPrefixedClasses,
  prefix,
  transitionListener
} from '../../../utils';
import { FormState } from '../../../types';

interface optionMap {
  readonly key: number;
  readonly value: string;
  readonly disabled: boolean;
  readonly hidden: boolean;
  readonly selected: boolean;
  readonly highlighted: boolean;
}

@Component({
  tag: 'p-select-wrapper',
  styleUrl: 'select-wrapper.scss',
  shadow: true
})
export class SelectWrapper {
  @Element() public host!: HTMLElement;

  /** The label text. */
  @Prop() public label?: string = '';

  /** The description text. */
  @Prop() public description?: string = '';

  /** The validation state. */
  @Prop() public state?: FormState = 'none';

  /** The message styled depending on validation state. */
  @Prop() public message?: string = '';

  /** Show or hide label. For better accessibility it is recommended to show the label. */
  @Prop() public hideLabel?: BreakpointCustomizable<boolean> = false;

  /** Filter results by typing a charcter */
  @Prop() public filter?: boolean = false;

  @State() private disabled: boolean;
  @State() private fakeOptionListHidden = true;
  @State() private optionMaps: readonly optionMap[] = [];
  @State() private filterHasResult = true;
  @State() private isTouch: boolean = isTouchDevice();

  private select: HTMLSelectElement;
  private options: NodeListOf<HTMLOptionElement>;
  private fakeOptionListNode: HTMLDivElement;
  private fakeOptionHighlightedNode: HTMLDivElement;
  private selectObserver: MutationObserver;
  private filterWrapper: HTMLDivElement;
  private filterInput: HTMLInputElement;

  // this stops click events when filter input is clicked
  @Listen('click', { capture: false })
  public handleOnClick(e: MouseEvent): void {
    if (this.filter) {
      e.stopPropagation();
    }
  }

  public componentWillLoad(): void {
    this.initSelect();
    this.setAriaAttributes();
    this.setState();
    this.bindStateListener();
    this.addSlottedStyles();

    if (!this.isTouch) {
      this.observeSelect();
      this.setOptionList();
      if (!this.filter) {this.select.addEventListener('mousedown', this.handleMouseEvents.bind(this));}
      this.select.addEventListener('keydown', this.handleKeyboardEvents.bind(this));
      if (typeof document !== 'undefined') {
        document.addEventListener('mousedown', this.handleClickOutside.bind(this), false);
      }
    }

  }

  public componentDidLoad(): void {
    if(!this.isTouch && this.filter) {
      this.filterWrapper.addEventListener('mousedown', this.handleFilterWrapperClick.bind(this));
      this.filterInput.addEventListener('keydown', this.handleKeyboardEvents.bind(this));
      this.filterInput.addEventListener('input', this.handleFilterInputEvents.bind(this));
    }
  }

  public componentDidUpdate(): void {
    this.setAriaAttributes();
  }

  public componentDidUnload(): void {
    if (!this.isTouch) {
      this.selectObserver.disconnect();
      this.select.removeEventListener('mousedown', this.handleMouseEvents.bind(this));
      this.select.removeEventListener('keydown', this.handleKeyboardEvents.bind(this));
      if (typeof document !== 'undefined') {
        document.removeEventListener('mousedown', this.handleClickOutside.bind(this), false);
      }
    }
  }

  public render(): JSX.Element {
    const labelClasses = cx(prefix('select-wrapper__label'));
    const labelTextClasses = cx(
      prefix('select-wrapper__label-text'),
      mapBreakpointPropToPrefixedClasses('select-wrapper__label-text-', this.hideLabel, ['hidden', 'visible']),
      { [prefix('select-wrapper__label-text--disabled')]: this.disabled }
    );
    const descriptionTextClasses = cx(
      prefix('select-wrapper__description-text'),
      mapBreakpointPropToPrefixedClasses('select-wrapper__description-text-', this.hideLabel, ['hidden', 'visible']),
      { [prefix('select-wrapper__description-text--disabled')]: this.disabled }
    );
    const fakeSelectClasses = cx(
      prefix('select-wrapper__fake-select'),
      { [prefix('select-wrapper__fake-select--disabled')]: this.disabled },
      { [prefix(`select-wrapper__fake-select--${this.state}`)]: this.state !== 'none' }
    );
    const fakeOptionListClasses = cx(prefix('select-wrapper__fake-option-list'), {
      [prefix('select-wrapper__fake-option-list--hidden')]: this.fakeOptionListHidden
    });
    const iconClasses = cx(
      prefix('select-wrapper__icon'),
      { [prefix('select-wrapper__icon--disabled')]: this.disabled },
      { [prefix('select-wrapper__icon--opened')]: !this.fakeOptionListHidden }
    );
    const messageClasses = cx(prefix('select-wrapper__message'), {
      [prefix(`select-wrapper__message--${this.state}`)]: this.state !== 'none'
    });

    const filterClasses = cx(prefix('select-wrapper__filter'));
    const filterInputClasses = cx(prefix('select-wrapper__filter-input'));

    const PrefixedTagNames = getPrefixedTagNames(this.host, ['p-icon', 'p-text']);

    return (
      <Host>
        <div class={labelClasses}>
          <label>
            {this.isLabelVisible && (
              <PrefixedTagNames.pText class={labelTextClasses} tag="span" color="inherit" onClick={this.labelClick}>
                {this.label || (
                  <span>
                    <slot name="label" />
                  </span>
                )}
              </PrefixedTagNames.pText>
            )}
            {this.isDescriptionVisible && (
              <PrefixedTagNames.pText
                class={descriptionTextClasses}
                tag="span"
                color="inherit"
                size="x-small"
                onClick={this.labelClick}
              >
                {this.description || (
                  <span>
                    <slot name="description" />
                  </span>
                )}
              </PrefixedTagNames.pText>
            )}
            <span class={fakeSelectClasses}>
              <PrefixedTagNames.pIcon class={iconClasses} name="arrow-head-down" color="inherit" />
              <slot />
            </span>
          </label>
          {(this.filter && !this.isTouch) && (
            <div
              class={filterClasses}
              ref={(el) => (this.filterWrapper = el)}
            >
              <input
                type="text"
                class={filterInputClasses}
                role="combobox"
                aria-autocomplete="both"
                aria-controls="p-listbox"
                disabled={this.disabled}
                aria-activedescendant={`option-${this.optionMaps.findIndex(e => e.highlighted)}`}
                ref={(el) => (this.filterInput = el)}
              />
              <span/>
            </div>
          )}
          {!this.isTouch && (
            <div
              class={fakeOptionListClasses}
              role="listbox"
              id="p-listbox"
              aria-activedescendant={`option-${this.optionMaps.findIndex(e => e.selected)}`}
              tabIndex={-1}
              aria-expanded={this.fakeOptionListHidden ? 'false' : 'true'}
              aria-labelledby={this.label}
              ref={(el) => (this.fakeOptionListNode = el)}
            >
              {this.createFakeOptionList()}
            </div>
          )}
        </div>
        {this.isMessageVisible && (
          <PrefixedTagNames.pText class={messageClasses} color="inherit" role={this.state === 'error' && 'alert'}>
            {this.message || (
              <span>
                <slot name="message" />
              </span>
            )}
          </PrefixedTagNames.pText>
        )}
      </Host>
    );
  }

  private get isLabelVisible(): boolean {
    return !!this.label || !!this.host.querySelector('[slot="label"]');
  }

  private get isDescriptionVisible(): boolean {
    return !!this.description || !!this.host.querySelector('[slot="description"]');
  }

  private get isMessageDefined(): boolean {
    return !!this.message || !!this.host.querySelector('[slot="message"]');
  }

  private get isMessageVisible(): boolean {
    return ['success', 'error'].includes(this.state) && this.isMessageDefined;
  }

  /*
   * <START NATIVE SELECT>
   */
  private initSelect(): void {
    this.select = this.host.querySelector('select');
    if(this.filter) {
      this.select.setAttribute('tabindex', '-1');
    }
  }

  /*
   * This is a workaround to improve accessibility because the select and the label/description/message text are placed in different DOM.
   * Referencing ID's from outside the component is impossible because the web component’s DOM is separate.
   * We have to wait for full support of the Accessibility Object Model (AOM) to provide the relationship between shadow DOM and slots.
   */
  private setAriaAttributes(): void {
    if (this.label && this.message) {
      this.select.setAttribute('aria-label', `${this.label}. ${this.message}`);
    } else if (this.label && this.description) {
      this.select.setAttribute('aria-label', `${this.label}. ${this.description}`);
    } else if (this.label) {
      this.select.setAttribute('aria-label', this.label);
    }

    if (this.state === 'error') {
      this.select.setAttribute('aria-invalid', 'true');
    } else {
      this.select.removeAttribute('aria-invalid');
    }
  }

  private setState = (): void => {
    this.disabled = this.select.disabled;
  };

  private labelClick = (): void => {
    this.select.focus();
  };

  private bindStateListener(): void {
    transitionListener(this.select, 'border-top-color', this.setState);
  }


  /*
   * <START CUSTOM SELECT DROPDOWN>
   */
  private observeSelect(): void {
    this.selectObserver = new MutationObserver((mutations: MutationRecord[]) => {
      mutations.filter((mutation) => mutation.type === 'childList').forEach(this.setOptionList);
      mutations.filter((mutation) => mutation.type === 'attributes').forEach(this.setOptionList);
    });
    const config = { childList: true, subtree: true, attributes: true, attributeFilter: ['disabled'] };
    this.selectObserver.observe(this.select, config);
  }

  private handleClickOutside(e): void {
    if (this.host.contains(e.target)) {
      return;
    }
    this.fakeOptionListHidden = true;
  }

  private handleMouseEvents(e: MouseEvent): void {
    e.preventDefault();
    this.select.focus();
    this.fakeOptionListHidden = this.fakeOptionListHidden === false;
  }

  private handleFocus(e: MouseEvent): void {
    if(!this.filter) {
      this.select.focus();
    } else {
      e.preventDefault();
      this.filterInput.focus();
    }
  }

  private handleKeyboardEvents(e: KeyboardEvent): void {
    const key = e.key;
    switch (key) {
      case 'ArrowUp':
      case 'Up':
        e.preventDefault();
        this.fakeOptionListHidden = false;
        this.cycleFakeOptionList('up');
        break;
      case 'ArrowDown':
      case 'Down':
        e.preventDefault();
        this.fakeOptionListHidden = false;
        this.cycleFakeOptionList('down');
        break;
      case 'ArrowLeft':
      case 'Left':
        e.preventDefault();
        this.cycleFakeOptionList('left');
        break;
      case 'ArrowRight':
      case 'Right':
        e.preventDefault();
        this.cycleFakeOptionList('right');
        break;
      case ' ':
      case 'Spacebar':
        e.preventDefault();
        this.fakeOptionListHidden = this.fakeOptionListHidden === false;
        if (this.fakeOptionListHidden) {
          this.setOptionSelected(this.optionMaps.findIndex(item => item.highlighted));
        }
        break;
      case 'Enter':
        e.preventDefault();
        this.fakeOptionListHidden = true;
        this.setOptionSelected(this.optionMaps.findIndex(item => item.highlighted));
        break;
      case 'Escape':
      case 'Esc':
        if (!this.fakeOptionListHidden) {
          this.fakeOptionListHidden = true;
          this.optionMaps = this.optionMaps.map((item: optionMap, num) => ({
            ...item,
            highlighted: num === this.select.selectedIndex
          }));
        }
        break;
      case 'PageUp':
        e.preventDefault();
        if (!this.fakeOptionListHidden) {
          this.optionMaps = this.optionMaps.map((item: optionMap, num) => ({
            ...item,
            highlighted: num === 0
          }));
          this.handleScroll();
        }
        break;
      case 'PageDown':
        e.preventDefault();
        if (!this.fakeOptionListHidden) {
          this.optionMaps = this.optionMaps.map((item: optionMap, num) => ({
            ...item,
            highlighted: num === this.options.length - 1
          }));
          this.handleScroll();
        }
        break;
      case 'Tab':
        if (!this.fakeOptionListHidden) {
          this.fakeOptionListHidden = true;
        }
        break;
      default:
        this.nativeSearchOptions();
    }
  }

  private setOptionList = (): void => {
    this.optionMaps = [];
    this.options = this.select.querySelectorAll('option');
    [...Array.from(this.options)].map((option: HTMLOptionElement, key:number) => {
      const disabled = option.hasAttribute('disabled');
      const selected = option.selected;
      const highlighted = option.selected;
      this.optionMaps = [...this.optionMaps, {key, value:option.text, disabled, hidden: false, selected, highlighted}];
    });
  };

  private setOptionSelected = (key: number): void => {
    this.select.selectedIndex = key;
    this.optionMaps = this.optionMaps.map((item: optionMap, num) => ({
      ...item,
      selected: num === this.select.selectedIndex,
      highlighted: num === this.select.selectedIndex
    }));
    this.fakeOptionListHidden = true;

    // IE11 workaround for dispatchEvent
    let event: Event;
    if (typeof Event === 'function') {
      event = new Event('change', { bubbles: true });
    } else {
      event = document.createEvent('Event');
      event.initEvent('change', true, false);
    }
    this.select.dispatchEvent(event);

    this.select.focus();
  };

  private createFakeOptionList(): JSX.Element[][] | string {
    const PrefixedTagNames = getPrefixedTagNames(this.host, ['p-icon']);
    if(!this.filterHasResult) {
      return (<div class={cx(prefix('select-wrapper__fake-option'))}><span>---</span></div>);
    } else {
      return Array.from(this.options).map((option: HTMLOptionElement, key: number) => [
        (option.parentElement.tagName === 'OPTGROUP' && option.previousElementSibling === null) && (
          <span class={cx(prefix('select-wrapper__fake-optgroup-label'))} role="presentation">
            {option.closest('optgroup').label}
          </span>
        ),
        <div
          id={`option-${key}`}
          role="option"
          color="inherit"
          class={cx(prefix('select-wrapper__fake-option'), {
            [prefix('select-wrapper__fake-option--selected')]: this.optionMaps[key].selected,
            [prefix('select-wrapper__fake-option--highlighted')]: this.optionMaps[key].highlighted,
            [prefix('select-wrapper__fake-option--disabled')]: this.optionMaps[key].disabled,
            [prefix('select-wrapper__fake-option--hidden')]: this.optionMaps[key].hidden,
          })}
          onClick={(e) => (!this.optionMaps[key].disabled && !this.optionMaps[key].selected ? this.setOptionSelected(key) : this.handleFocus(e))}
          aria-selected={this.optionMaps[key].highlighted && 'true'}
          aria-disabled={this.optionMaps[key].disabled && 'true'}
          aria-hidden={this.optionMaps[key].hidden && 'true'}
        >
          <span>{option.text}</span>
          {this.optionMaps[key].selected && (
            <PrefixedTagNames.pIcon
              class={cx(prefix('select-wrapper__fake-option-icon'))}
              aria-hidden="true"
              name="check"
              color="inherit"
            />
          )}
        </div>
      ]);
    }
  }

  private cycleFakeOptionList(direction: string): void {
    const validItems = this.optionMaps.filter(e => e.hidden !== true && e.disabled !== true);
    const validMax = validItems.length-1;
    let i = validItems.findIndex(e => e.highlighted);
    if (direction === 'down' || direction === 'right') {
      i = i < validMax ? i+1 : 0;
    } else if (direction === 'up' || direction === 'left') {
      i = i > 0 ? i-1 : validMax;
    }
    this.optionMaps = this.optionMaps.map((item: optionMap, key) => ({
      ...item,
      highlighted: key === validItems[i].key
    }));

    if (direction === 'left' || direction === 'right') {
      this.setOptionSelected(this.optionMaps.findIndex(e => e.highlighted));
    }

    this.handleScroll();
  }

  private handleScroll(): void {
    const fakeOptionListNodeHeight = 200;
    if (this.fakeOptionListNode.scrollHeight > fakeOptionListNodeHeight) {
      this.fakeOptionHighlightedNode = this.fakeOptionListNode.querySelectorAll('div')[this.optionMaps.findIndex(e => e.highlighted)];
      const scrollBottom = fakeOptionListNodeHeight + this.fakeOptionListNode.scrollTop;
      const elementBottom = this.fakeOptionHighlightedNode.offsetTop + this.fakeOptionHighlightedNode.offsetHeight;
      if (elementBottom > scrollBottom) {
        this.fakeOptionListNode.scrollTop = elementBottom - fakeOptionListNodeHeight;
      } else if (this.fakeOptionHighlightedNode.offsetTop < this.fakeOptionListNode.scrollTop) {
        this.fakeOptionListNode.scrollTop = this.fakeOptionHighlightedNode.offsetTop;
      }
    }
  }

  private nativeSearchOptions(): void {
    // timeout is needed if fast keyboard events are triggered and dom needs time to update state
    setTimeout(() => {
      const selected = this.select.selectedIndex;
      this.optionMaps = this.optionMaps.map((item: optionMap, key) => ({
        ...item,
        highlighted: key === selected,
        selected: key === selected
      }));

      this.handleScroll();
    }, 100);
  }


  /*
   * <START CUSTOM FILTER>
   */
  private handleFilterWrapperClick(e): void {
    e.preventDefault();
    if(!this.disabled) {
      this.filterInput.focus();
      this.fakeOptionListHidden = this.fakeOptionListHidden === false;
    }
  }

  private handleFilterInputEvents(ev):void {
    const val = ev.target.value;
    this.optionMaps = this.optionMaps.map((item: optionMap) => ({
      ...item,
      hidden: !item.value.toLowerCase().startsWith(val.toLowerCase()),
    }));

    const hiddenItems = this.optionMaps.filter(e => e.hidden === true).length;
    this.filterHasResult = hiddenItems !== Object.keys(this.optionMaps).length;
    this.fakeOptionListHidden = val > 0;
  }

  private addSlottedStyles(): void {
    const tagName = this.host.tagName.toLowerCase();
    const style = `${tagName} a {
      outline: none transparent;
      color: inherit;
      text-decoration: underline;
      -webkit-transition: outline-color .24s ease, color .24s ease;
      transition: outline-color .24s ease, color .24s ease;
    }
    ${tagName} a:hover {
      color: #d5001c;
    }
    ${tagName} a:focus {
      outline: 2px solid #00d5b9;
      outline-offset: 1px;
    }`;

    insertSlottedStyles(this.host, style);
  }
}
