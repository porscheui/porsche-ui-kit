import { Component, h, Element, Prop, Host, Watch, State } from '@stencil/core';
import { isTouchDevice, prefix } from '../../../utils';
import { TextWeight, Theme } from '../../../types';

@Component({
  tag: 'p-tabs',
  styleUrl: 'tabs.scss',
  shadow: true
})
export class Tabs {
  @Element() public host!: HTMLElement;

  /** The text size. */
  @Prop() public size?: 'small' | 'medium' = 'medium';

  /** The text weight. */
  @Prop() public weight?: Extract<TextWeight, 'regular' | 'semibold'> = 'regular';

  /** Adapts color when used on dark background. */
  @Prop() public theme?: Theme = 'light';

  @State() public tabsItems: HTMLPTabsItemElement[] = Array.from(this.host.querySelectorAll('p-tabs-item'));

  /** Defines the tab to be activated (index: zero-based). */
  @Prop({reflect: true}) public activeTab?: number = this.tabsItems.findIndex((tab) => tab.selected);

  @State() public isPrevVisible = false;
  @State() public isNextVisible = false;
  @State() public statusWidth = 0;
  @State() public statusPositionLeft = 0;

  private hostObserver: MutationObserver;
  private intersectionObserver: IntersectionObserver;


  @Watch('activeTab')
  public activeTabHandler(activeTab: number): void {
    this.handleTabChange(activeTab);
  }

  @Watch('tabsItems')
  public handleTabsItemChange(): void {
    this.handleTabChange();
  }

  public connectedCallback(): void {
    this.updateTabItems();
    this.handleTabChange();
    this.observeHost();
  }

  public componentDidLoad(): void {
    this.setStatusStyle(this.activeTab);
    this.observeIntersection();
  }

  public componentDidUpdate(): void {
    this.setStatusStyle(this.activeTab);
  }

  public disconnectedCallback(): void {
    this.hostObserver.disconnect();
    this.intersectionObserver.disconnect();
  }

  public render(): JSX.Element {
    const tabHeaderClasses = {
      [prefix('tabs__header')]: true
    };

    const tabActionClasses = {
      [prefix('tabs__action')]: true
    };

    const tabPrevClasses = {
      ...tabActionClasses,
      [prefix('tabs__action--prev')]: true,
      [prefix(`tabs__action--theme-${this.theme}`)]: true,
      [prefix('tabs__action--visible')]: this.isPrevVisible
    };

    const tabNextClasses = {
      ...tabActionClasses,
      [prefix('tabs__action--next')]: true,
      [prefix(`tabs__action--theme-${this.theme}`)]: true,
      [prefix('tabs__action--visible')]: this.isNextVisible
    };

    const tabNavClasses = {
      [prefix('tabs__nav')]: true
    };

    const tabButtonClasses = {
      [prefix('tabs__button')]: true,
      [prefix(`tabs__button--theme-${this.theme}`)]: true,
      [prefix(`tabs__button--size-${this.size}`)]: true,
      [prefix(`tabs__button--weight-${this.weight}`)]: true
    };

    const tabButtonListClasses = {
      [prefix('tabs__button-list')]: true,
    };

    const statusClasses = {
      [prefix('tabs__status')]: true,
      [prefix(`tabs__status--theme-${this.theme}`)]: true
    };

    return (
      <Host>
        <div class={tabHeaderClasses}>
          <nav class={tabNavClasses}>
            <ul class={tabButtonListClasses}>
              {this.tabsItems.map((tab, index) => {
                const extendedTabButtonClasses = {
                  ...tabButtonClasses,
                  [prefix('tabs__button--selected')]: tab.selected
                };

                const Tag = tab.href === undefined ? 'button' : 'a';
                const props = (({href, target}) => ({href, target}))(tab);

                return (
                  <li>
                    <Tag
                      class={extendedTabButtonClasses}
                      role="tab"
                      {...props}
                      onClick={() => this.handleTabButtonClick(index)}
                    >
                      {tab.label}
                    </Tag>
                  </li>
                );
              })}
            </ul>
            <span class={statusClasses} style={{width: `${this.statusWidth}px`, left: `${this.statusPositionLeft}px`}}/>
          </nav>
          <div class={tabPrevClasses}>
            <p-button-pure
              theme={this.theme}
              hide-label="true"
              icon="arrow-head-left"
              onClick={() => this.handleAction('prev')}
            >
              Prev
            </p-button-pure>
          </div>
          <div class={tabNextClasses}>
            <p-button-pure
              theme={this.theme}
              hide-label="true"
              icon="arrow-head-right"
              onClick={() => this.handleAction('next')}
            >
              Next
            </p-button-pure>
          </div>
        </div>
        <slot/>
      </Host>
    );
  }

  private resetTabs = (): void => {
    this.tabsItems.forEach((tab) => (tab.selected = false));
  };

  private setActiveTab = (index: number): void => {
    const tabs = this.tabsItems;
    const maxIndex = tabs.length - 1;
    this.activeTab = maxIndex < index ? maxIndex : index < 0 ? 0 : index;
    tabs[this.activeTab].selected = true;
  };

  private handleTabChange = (activeTabIndex?: number): void => {
    this.resetTabs();
    this.setStatusStyle(activeTabIndex ?? this.activeTab);
    this.setActiveTab(activeTabIndex ?? this.activeTab);
  };

  private setStatusStyle = (activeTabIndex: number): void => {
    const tabs = this.getHTMLElements('tabs');
    const activeTab = tabs[activeTabIndex];
    this.statusWidth = (activeTab !== undefined) ? activeTab.offsetWidth : 0;
    this.statusPositionLeft = (activeTab !== undefined) ? activeTab.offsetLeft : 0;
  };

  private handleTabButtonClick = (tabIndex: number): void => {
    const activeTabOnClick = this.activeTab;
    this.handleTabChange(tabIndex);

    const tabs = this.getHTMLElements('tabs');
    let nextTabIndex = 0;

    if (tabIndex > activeTabOnClick && tabIndex < this.tabsItems.length - 1) {
      nextTabIndex = this.activeTab + 1;
    } else if (tabIndex < activeTabOnClick && tabIndex > 0) {
      nextTabIndex = this.activeTab - 1;
    } else nextTabIndex = tabIndex;

    const nextTabElement = tabs[nextTabIndex];

    nextTabElement.scrollIntoView({behavior: 'smooth', inline: 'center'});
  };

  private updateTabItems = (): void => {
    this.tabsItems = Array.from(this.host.querySelectorAll('p-tabs-item'));
  };

  private observeHost(): void {
    this.hostObserver = new MutationObserver((mutations): void => {
      if (mutations.filter(({type}) => type === 'childList' || type === 'attributes')) {
        this.updateTabItems();
      }
    });
    this.hostObserver.observe(this.host, {
      childList: true,
      subtree: true,
      attributeFilter: ['label', 'href', 'target']
    });
  }

  private handleAction = (action: 'prev' | 'next'): void => {
    const nav = this.getHTMLElement('nav');
    const tabs = this.getHTMLElements('tabs');
    const lastTab = tabs[tabs.length - 1];
    const navWidth = nav.offsetWidth;
    const currentScrollPosition = nav.scrollLeft;
    const scrollToStep = navWidth * 0.2;
    const scrollToMax = lastTab.offsetLeft + lastTab.offsetWidth - navWidth;

    let scrollTo: number;

    if (action === 'next') {
      if (currentScrollPosition + scrollToStep * 2 > scrollToMax) {
        scrollTo = scrollToMax;
      } else {
        scrollTo = currentScrollPosition + scrollToStep;
      }
    } else {
      if (currentScrollPosition - scrollToStep * 2 < 0) {
        scrollTo = 0;
      } else {
        scrollTo = currentScrollPosition - scrollToStep;
      }
    }

    nav.scrollTo({
      left: scrollTo,
      behavior: 'smooth'
    });
  };

  private observeIntersection(): void {
    if (isTouchDevice()) {
      return;
    }

    const tabs = this.getHTMLElements('tabs');
    const firstTab = tabs[0];
    const lastTab = tabs[tabs.length - 1];

    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.target === firstTab) this.isPrevVisible = !entry.isIntersecting;
          if (entry.target === lastTab) this.isNextVisible = !entry.isIntersecting;
        }
      },
      {threshold: 0.9}
    );

    this.intersectionObserver.observe(firstTab);
    this.intersectionObserver.observe(lastTab);
  }

  private getHTMLElement(element: 'nav'): HTMLElement {
    const selector = {
      nav: 'tabs__nav',
      status: 'tabs__status'
    }

    return this.host.shadowRoot.querySelector(`.${prefix(selector[element])}`);
  }

  private getHTMLElements(elements: 'tabs'): HTMLElement[] {
    const selector = {
      tabs: 'tabs__button'
    }

    return Array.from(this.host.shadowRoot.querySelectorAll(`.${prefix(selector[elements])}`));
  }
}
