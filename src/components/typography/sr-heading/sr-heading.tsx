import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import {
  TypographyTypographyHeadersDisplayxl900,
  TypographyTypographyHeadersDisplaylg400,
  TypographyTypographyHeadersDisplaylg700,
  TypographyTypographyHeadersSubheadersSubheading1400,
  TypographyTypographyHeadersSubheadersSubheading1700,
  TypographyTypographyHeadersSubheadersSubheading2700,
  TypographyTypographyHeadersSubheadersSubheading2400,
  TypographyTypographyHeadersSubheadersSubheading3400,
  TypographyTypographyHeadersSubheadersSubheading3700,
  TypographyTypographyHeadersSubheadersSubheading4400,
  TypographyTypographyHeadersSubheadersSubheading4700,
} from '../../../design-tokens/js/variables.js';

/**
 * Heading component, with support for heading elements spanning from `h1` to `h6`, and custom alignment.
 * Its convenience for pointing out document sections makes it one of the most consumed components in our Design System.
 @property `level` (default 1)
 @property `align` (default 'left')

 * ### Example:
 * ```html
 * <sr-heading level="2" text-align="center">Section name</hs-header>
 * ```
 */
@Component({
  tag: 'sr-heading',
  styleUrl: 'sr-heading.css',
  shadow: false,
  scoped: true,
})
export class SRHeading {
  /**
   * The `level` property allows users to indicate what header hierarchy this element is.
   * It must take a number from `1` to `6`.  */
  @Prop({ reflect: true })
  level:
    | 'h1'
    | 'h2-regular'
    | 'h2-bold'
    | 'h3-regular'
    | 'h3-bold'
    | 'h4-regular'
    | 'h4-bold'
    | 'h5-regular'
    | 'h5-bold'
    | 'h6-regular'
    | 'h6-bold' = 'h1';

  /**
   * Provides support for implementing horizontal alignment to the text contained in the header.
   */
  @Prop({ reflect: true, attribute: 'textAlign' })
  textAlign: 'left' | 'right' | 'center' | 'justify' = 'left';

  @Prop({ reflect: true })
  color: 'black' | 'white' = 'black';

  getFontSize() {
    switch (this.level) {
      case 'h1':
        return TypographyTypographyHeadersDisplayxl900.fontSize.value.measure
          .value;
      case 'h2-regular':
        return TypographyTypographyHeadersDisplaylg400.fontSize.value.measure
          .value;
      case 'h2-bold':
        return TypographyTypographyHeadersDisplaylg700.fontSize.value.measure
          .value;
      case 'h3-regular':
        return TypographyTypographyHeadersSubheadersSubheading1400.fontSize
          .value.measure.value;
      case 'h3-bold':
        return TypographyTypographyHeadersSubheadersSubheading1700.fontSize
          .value.measure.value;
      case 'h4-regular':
        return TypographyTypographyHeadersSubheadersSubheading2400.fontSize
          .value.measure.value;
      case 'h4-bold':
        return TypographyTypographyHeadersSubheadersSubheading2700.fontSize
          .value.measure.value;
      case 'h5-regular':
        return TypographyTypographyHeadersSubheadersSubheading3400.fontSize
          .value.measure.value;
      case 'h5-bold':
        return TypographyTypographyHeadersSubheadersSubheading3700.fontSize
          .value.measure.value;
      case 'h6-regular':
        return TypographyTypographyHeadersSubheadersSubheading4400.fontSize
          .value.measure.value;
      case 'h6-bold':
        return TypographyTypographyHeadersSubheadersSubheading4700.fontSize
          .value.measure.value;
    }
  }

  getLineHeight() {
    switch (this.level) {
      case 'h1':
        return TypographyTypographyHeadersDisplayxl900.lineHeight.value.measure
          .value;
      case 'h2-regular':
        return TypographyTypographyHeadersDisplaylg400.lineHeight.value.measure
          .value;
      case 'h2-bold':
        return TypographyTypographyHeadersDisplaylg700.lineHeight.value.measure
          .value;
      case 'h3-regular':
        return TypographyTypographyHeadersSubheadersSubheading1400.lineHeight
          .value.measure.value;
      case 'h3-bold':
        return TypographyTypographyHeadersSubheadersSubheading1700.lineHeight
          .value.measure.value;
      case 'h4-regular':
        return TypographyTypographyHeadersSubheadersSubheading2400.lineHeight
          .value.measure.value;
      case 'h4-bold':
        return TypographyTypographyHeadersSubheadersSubheading2700.lineHeight
          .value.measure.value;
      case 'h5-regular':
        return TypographyTypographyHeadersSubheadersSubheading3400.lineHeight
          .value.measure.value;
      case 'h5-bold':
        return TypographyTypographyHeadersSubheadersSubheading3700.lineHeight
          .value.measure.value;
      case 'h6-regular':
        return TypographyTypographyHeadersSubheadersSubheading4400.lineHeight
          .value.measure.value;
      case 'h6-bold':
        return TypographyTypographyHeadersSubheadersSubheading4700.lineHeight
          .value.measure.value;
    }
  }

  getLetterSpacing() {
    switch (this.level) {
      case 'h1':
      case 'h2-regular':
      case 'h2-bold':
        return 0.5;
      case 'h3-regular':
      case 'h3-bold':
        return 0.25;
      case 'h4-regular':
      case 'h4-bold':
        return 0;
      case 'h5-regular':
      case 'h5-bold':
      case 'h6-regular':
      case 'h6-bold':
        return 0.15;
    }
  }

  getMarginBottom() {
    switch (this.level) {
      case 'h1':
        return 0.46;
      case 'h2-bold':
      case 'h2-regular':
      case 'h4-regular':
      case 'h4-bold':
        return 0.6;
      case 'h3-regular':
      case 'h3-bold':
        return 0.86;
      case 'h5-regular':
      case 'h5-bold':
        return 0.7;
      case 'h6-regular':
      case 'h6-bold':
        return 0.75;
      default:
        break;
    }
  }

  renderTag() {
    switch (this.level) {
      case 'h1':
        return 'h1';
      case 'h2-bold':
      case 'h2-regular':
        return 'h2';
      case 'h3-regular':
      case 'h3-bold':
        return 'h3';
      case 'h4-regular':
      case 'h4-bold':
        return 'h4';
      case 'h5-regular':
      case 'h5-bold':
        return 'h5';
      case 'h6-regular':
      case 'h6-bold':
        return 'h6';
      default:
        break;
    }
  }

  getFontWeight() {
    switch (this.level) {
      case 'h1':
        return `${TypographyTypographyHeadersDisplayxl900.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h2-regular':
        return `${TypographyTypographyHeadersDisplaylg400.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h2-bold':
        return `${TypographyTypographyHeadersDisplaylg700.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h3-regular':
        return `${TypographyTypographyHeadersSubheadersSubheading1400.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h3-bold':
        return `${TypographyTypographyHeadersSubheadersSubheading1700.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h4-regular':
        return `${TypographyTypographyHeadersSubheadersSubheading2400.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h4-bold':
        return `${TypographyTypographyHeadersSubheadersSubheading2700.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h5-regular':
        return `${TypographyTypographyHeadersSubheadersSubheading3400.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h5-bold':
        return `${TypographyTypographyHeadersSubheadersSubheading3700.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h6-regular':
        return `${TypographyTypographyHeadersSubheadersSubheading4400.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h6-bold':
        return `${TypographyTypographyHeadersSubheadersSubheading4700.font.value.subfamily.value}`.toLocaleLowerCase();
    }
  }

  render() {
    const Tag = this.renderTag();
    const tagStyles = css`
      text-align: ${this.textAlign};
    `;
    return (
      <sr-text
        as={Tag as any}
        marginBottom={this.getMarginBottom()}
        letterSpacing={this.getLetterSpacing()}
        lineHeight={this.getLineHeight()}
        fontSize={this.getFontSize()}
        fontWeight={this.getFontWeight() as any}
        aria-role="heading"
        color={this.color}
        class={tagStyles}
      >
        <slot></slot>
      </sr-text>
    );
  }
}
