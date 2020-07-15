import { JSX, Component, Prop, h, Element } from '@stencil/core';
import cx from 'classnames';
import { prefix, insertSlottedStyles } from '../../../../utils';
import { HeadlineVariant, ComponentTheme } from '../../../../types';

@Component({
  tag: 'p-headline',
  styleUrl: 'headline.scss',
  shadow: true
})
export class Headline {

  @Element() public host!: HTMLElement;

  /** Style of the headline. */
  @Prop() public variant?: HeadlineVariant = 'headline-1';

  /** Sets a custom HTML tag depending of the usage of the headline component. */
  @Prop() public tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = undefined;

  /** Text alignment of the component. */
  @Prop() public align?: 'left' | 'center' | 'right' = 'left';

  /** Basic text color variations depending on theme property. */
  @Prop() public color?: 'default' | 'inherit' = 'default';

  /** Adds an ellipsis to a single line of text if it overflows. */
  @Prop() public ellipsis?: boolean = false;

  /** Adapts the text color depending on the theme. Has no effect when "inherit" is set as color prop. */
  @Prop() public theme?: ComponentTheme = 'light';

  public componentWillLoad(): void {
    this.addSlottedStyles();
  }

  public render(): JSX.Element {
    const variantToTagMap: { [key in HeadlineVariant]: string } = {
      'large-title': 'h1',
      'headline-1': 'h1',
      'headline-2': 'h2',
      'headline-3': 'h3',
      'headline-4': 'h4',
      'headline-5': 'h5'
    };

    const TagType = this.hasSlottedHeadlineTag ? 'div' : this.tag || variantToTagMap[this.variant];

    const headlineClasses = cx(
      prefix('headline'),
      prefix(`headline--variant-${this.variant}`),
      prefix(`headline--align-${this.align}`),
      prefix(`headline--color-${this.color}`),
      this.ellipsis && prefix('headline--ellipsis'),
      this.color !== 'inherit' && prefix(`headline--theme-${this.theme}`)
    );

    return (
      <TagType class={headlineClasses}>
        <slot/>
      </TagType>
    );
  }

  private get hasSlottedHeadlineTag(): boolean {
    const el = this.host.querySelector(':first-child');
    return el?.matches('h1, h2, h3, h4, h5, h6');
  }

  private addSlottedStyles(): void {
    const tagName= this.host.tagName.toLowerCase();
    const style = `${tagName} a {
      color: inherit;
      text-decoration: none;
    }`;

    insertSlottedStyles(this.host, style);
  }
}
