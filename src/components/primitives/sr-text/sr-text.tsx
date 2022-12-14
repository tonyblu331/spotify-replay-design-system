import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
// import { number } from '~/enum';
import {
  ColorFoundationNeutralPureBlack,
  ColorFoundationNeutralPureWhite,
} from '../../../design-tokens/js/variables.js';

@Component({
  tag: 'sr-text',
  styleUrl: 'sr-text.css',
  shadow: false,
  scoped: true,
})
export class SrText {
  /**
   * Specify wrapper HTML element
   */
  @Prop({ reflect: true })
  as:
    | 'div'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'p'
    | 'blockquote'
    | 'caption'
    | 'endnote'
    | 'span' = 'div';

  /**
   * Specify font color
   */
  @Prop({ reflect: true })
  color: 'black' | 'white';

  /**
   * Specify font size
   */
  @Prop({ reflect: true, attribute: 'fontSize' })
  fontSize: number;

  /**
   * Control font weight
   */
  @Prop({ reflect: true, attribute: 'fontWeight' })
  fontWeight: 'regular' | 'bold' | 'extraBold' = 'regular';

  /**
   * Control amount of white space around child components inside of a box
   */
  @Prop({ reflect: true })
  padding: number;

  /**
   * Define amount of white space at top side only
   */
  @Prop({ reflect: true, attribute: 'paddingTop' })
  paddingTop?: number;

  /**
   * Define amount of white space at right side only
   */
  @Prop({ reflect: true, attribute: 'paddingRight' })
  paddingRight?: number;

  /**
   * Define amount of white space at left side only
   */
  @Prop({ reflect: true, attribute: 'paddingLeft' })
  paddingLeft?: number;

  /**
   * Define amount of white space at bottom side only
   */
  @Prop({ reflect: true, attribute: 'paddingBottom' })
  paddingBottom?: number;

  /**
   * Control amount of white space around the box component itself.
   */
  @Prop({ reflect: true })
  margin?: number;

  /**
   * Define amount of space at top side only.
   */
  @Prop({ reflect: true, attribute: 'marginTop' })
  marginTop?: number;

  /**
   * Define amount of space at right side only.
   */
  @Prop({ reflect: true, attribute: 'marginRight' })
  marginRight?: number;

  /**
   * Define amount of space at left side only.
   */
  @Prop({ reflect: true, attribute: 'marginLeft' })
  marginLeft?: number;

  /**
   * Define amount of space at bottom side only.
   */
  @Prop({ reflect: true, attribute: 'marginBottom' })
  marginBottom?: number;

  /**
   * Define the space between characters in a text
   */
  @Prop({ reflect: true, attribute: 'letterSpacing' })
  letterSpacing?: number;

  /**
   * Define the height of a line
   */
  @Prop({ reflect: true, attribute: 'lineHeight' })
  lineHeight?: number;

  renderFontWeight() {
    switch (this.fontWeight) {
      case 'regular':
        return 400;
      case 'bold':
        return 700;
      case 'extraBold':
        return 800;
      default:
        break;
    }
  }

  getFontColor() {
    switch (this.color) {
      case 'black':
        return ColorFoundationNeutralPureBlack;
      case 'white':
        return ColorFoundationNeutralPureWhite;
      default:
        break;
    }
  }

  render() {
    console.log(this.padding, 'font');

    const Tag = `${this.as}`;
    const tagStyles = css`
      color: ${this.getFontColor()};
      font-family: 'Plus Jakarta Sans', 'Helvetica Neue', 'Arial',
        'San Francisco', 'Segoe UI', 'Roboto', 'sans-serif';
      line-height: ${this.lineHeight}%;
      font-size: ${this.fontSize}px !important;
      padding: ${this.padding}em;
      padding-top: ${this.paddingTop}em;
      padding-left: ${this.paddingLeft}em;
      padding-right: ${this.paddingRight}em;
      padding-bottom: ${this.paddingBottom}em;
      margin: ${this.margin}em;
      margin-top: ${this.marginTop}em;
      margin-left: ${this.marginLeft}em;
      margin-right: ${this.marginRight}em;
      margin-bottom: ${this.marginBottom}em;
      letter-spacing: ${this.letterSpacing}px;
      font-weight: ${this.renderFontWeight()};
    `;
    return (
      <Tag class={tagStyles}>
        <slot></slot>
      </Tag>
    );
  }
}
