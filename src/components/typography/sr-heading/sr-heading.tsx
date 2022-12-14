import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import {
  TypographyDisplayxl900,
  TypographyDisplaylg400,
  TypographyDisplaylg700,
  TypographySubheading1400,
  TypographySubheading2400,
  TypographySubheading3400,
  TypographySubheading4400,
  TypographySubheading1700,
  TypographySubheading2700,
  TypographySubheading3700,
  TypographySubheading4700,
} from '../../../design-tokens/js/variables.js';

/**
 * Heading component, with support for heading elements, and custom alignment.
 * Its convenience for pointing out document sections makes it one of the most consumed components in our Design System.
 @property `level` (default h1)
 @property `align` (default 'left')

 * ### Example:
 * ```html
 * <sr-heading level="h1" text-align="center">Section name</hs-header>
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
   * */
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

  /**
   * Specify text color
   */
  @Prop({ reflect: true })
  color: 'black' | 'white' = 'black';

  getFontSize() {
    switch (this.level) {
      case 'h1':
        return TypographyDisplayxl900.fontSize.value.measure.value;
      case 'h2-regular':
        return TypographyDisplaylg400.fontSize.value.measure.value;
      case 'h2-bold':
        return TypographyDisplaylg700.fontSize.value.measure.value;
      case 'h3-regular':
        return TypographySubheading1400.fontSize.value.measure.value;
      case 'h3-bold':
        return TypographySubheading1700.fontSize.value.measure.value;
      case 'h4-regular':
        return TypographySubheading2400.fontSize.value.measure.value;
      case 'h4-bold':
        return TypographySubheading2700.fontSize.value.measure.value;
      case 'h5-regular':
        return TypographySubheading3400.fontSize.value.measure.value;
      case 'h5-bold':
        return TypographySubheading3700.fontSize.value.measure.value;
      case 'h6-regular':
        return TypographySubheading4400.fontSize.value.measure.value;
      case 'h6-bold':
        return TypographySubheading4700.fontSize.value.measure.value;
    }
  }

  getLineHeight() {
    switch (this.level) {
      case 'h1':
        return TypographyDisplayxl900.lineHeight.value.measure.value;
      case 'h2-regular':
        return TypographyDisplaylg400.lineHeight.value.measure.value;
      case 'h2-bold':
        return TypographyDisplaylg700.lineHeight.value.measure.value;
      case 'h3-regular':
        return TypographySubheading1400.lineHeight.value.measure.value;
      case 'h3-bold':
        return TypographySubheading1700.lineHeight.value.measure.value;
      case 'h4-regular':
        return TypographySubheading2400.lineHeight.value.measure.value;
      case 'h4-bold':
        return TypographySubheading2700.lineHeight.value.measure.value;
      case 'h5-regular':
        return TypographySubheading3400.lineHeight.value.measure.value;
      case 'h5-bold':
        return TypographySubheading3700.lineHeight.value.measure.value;
      case 'h6-regular':
        return TypographySubheading4400.lineHeight.value.measure.value;
      case 'h6-bold':
        return TypographySubheading4700.lineHeight.value.measure.value;
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
        return `${TypographyDisplayxl900.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h2-regular':
        return `${TypographyDisplaylg400.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h2-bold':
        return `${TypographyDisplaylg700.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h3-regular':
        return `${TypographySubheading1400.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h3-bold':
        return `${TypographySubheading1700.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h4-regular':
        return `${TypographySubheading2400.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h4-bold':
        return `${TypographySubheading2700.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h5-regular':
        return `${TypographySubheading3400.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h5-bold':
        return `${TypographySubheading3700.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h6-regular':
        return `${TypographySubheading4400.font.value.subfamily.value}`.toLocaleLowerCase();
      case 'h6-bold':
        return `${TypographySubheading4700.font.value.subfamily.value}`.toLocaleLowerCase();
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
