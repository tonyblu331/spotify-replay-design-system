import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import {
  TypographyDisplayxl900,
  TypographyDisplaylg700,
  TypographySubheading2400,
  TypographySubheading3400,
  TypographySubheading4400,
  TypographySubheading1700,
} from '../../../design-tokens/js/variables.js';
import { SPACE_TEXT } from '~/type.js';

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
  level: 1 | 2 | 3 | 4 | 5 | 6 | '1' | '2' | '3' | '4' | '5' | '6' = 1;

  /**
   * Provides support for implementing horizontal alignment to the text contained in the header.
   */
  @Prop({ reflect: true, attribute: 'textAlign' })
  textAlign: 'left' | 'right' | 'center' | 'justify' = 'left';

  /**
   * Specify text color
   */
  @Prop({ reflect: true })
  color?;

  getFontSize() {
    switch (this.level) {
      case 1:
        return TypographyDisplayxl900.fontSize.value.measure.value;
      case 2:
        return TypographyDisplaylg700.fontSize.value.measure.value;
      case 3:
        return TypographySubheading1700.fontSize.value.measure.value;
      case 4:
        return TypographySubheading2400.fontSize.value.measure.value;
      case 5:
        return TypographySubheading3400.fontSize.value.measure.value;
      case 6:
        return TypographySubheading4400.fontSize.value.measure.value;
    }
  }

  getLineHeight() {
    switch (this.level) {
      case 1:
        return TypographyDisplayxl900.lineHeight.value.measure.value;
      case 2:
        return TypographyDisplaylg700.lineHeight.value.measure.value;
      case 3:
        return TypographySubheading1700.lineHeight.value.measure.value;
      case 4:
        return TypographySubheading2400.lineHeight.value.measure.value;
      case 5:
        return TypographySubheading3400.lineHeight.value.measure.value;
      case 6:
        return TypographySubheading4400.lineHeight.value.measure.value;
    }
  }

  // TODOJCS hook
  getLetterSpacing() {
    switch (this.level) {
      case 1:
      case 2:
        return 0.5;
      case 3:
        return 0.25;
      case 4:
        return 0;
      case 5:
      case 6:
        return 0.15;
    }
  }

  getMarginBottom() {
    return `spacer-h${this.level}`;
  }

  renderTag() {
    return `h${this.level}`;
  }

  getFontWeight() {
    switch (this.level) {
      case 1:
        return `${TypographyDisplayxl900.font.value.subfamily.value}`.toLocaleLowerCase();
      case 2:
        return `${TypographyDisplaylg700.font.value.subfamily.value}`.toLocaleLowerCase();
      case 3:
        return `${TypographySubheading1700.font.value.subfamily.value}`.toLocaleLowerCase();
      case 4:
        return `${TypographySubheading2400.font.value.subfamily.value}`.toLocaleLowerCase();
      case 5:
        return `${TypographySubheading3400.font.value.subfamily.value}`.toLocaleLowerCase();
      case 6:
        return `${TypographySubheading4400.font.value.subfamily.value}`.toLocaleLowerCase();
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
        marginBottom={this.getMarginBottom() as SPACE_TEXT}
        letterSpacing={this.getLetterSpacing()}
        lineHeight={this.getLineHeight()}
        fontSize={this.getFontSize()}
        fontWeight={this.getFontWeight() as any}
        aria-role="heading"
        color={this.color ? this.color : null}
        class={tagStyles}
      >
        <slot></slot>
      </sr-text>
    );
  }
}
