import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
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
export class SRText {
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
  padding: number = 0;

  /**
   * Define amount of white space at top side only
   */
  @Prop({ reflect: true, attribute: 'paddingTop' })
  paddingTop?: number = 0;

  /**
   * Define amount of white space at right side only
   */
  @Prop({ reflect: true, attribute: 'paddingRight' })
  paddingRight?: number = 0;

  /**
   * Define amount of white space at left side only
   */
  @Prop({ reflect: true, attribute: 'paddingLeft' })
  paddingLeft?: number = 0;

  /**
   * Define amount of white space at bottom side only
   */
  @Prop({ reflect: true, attribute: 'paddingBottom' })
  paddingBottom?: number = 0;

  /**
   * Control amount of white space around the box component itself.
   */
  @Prop({ reflect: true })
  margin?: number = 0;

  /**
   * Define amount of space at top side only.
   */
  @Prop({ reflect: true, attribute: 'marginTop' })
  marginTop?: number = 0;

  /**
   * Define amount of space at right side only.
   */
  @Prop({ reflect: true, attribute: 'marginRight' })
  marginRight?: number = 0;

  /**
   * Define amount of space at left side only.
   */
  @Prop({ reflect: true, attribute: 'marginLeft' })
  marginLeft?: number = 0;

  /**
   * Define amount of space at bottom side only.
   */
  @Prop({ reflect: true, attribute: 'marginBottom' })
  marginBottom?: number = 0;

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
    const Tag = `${this.as}`;
    const tagStyles = css`
      color: ${this.getFontColor()};
      font-family: 'Plus Jakarta Sans', 'Helvetica Neue', 'Arial',
        'San Francisco', 'Segoe UI', 'Roboto', 'sans-serif';
      line-height: ${this.lineHeight}%;
      font-size: ${this.fontSize}px !important;
      padding: ${this.padding}em;
      padding-top: ${this.paddingTop > 0 ? this.paddingTop : this.padding}em;
      padding-left: ${this.paddingLeft > 0 ? this.paddingLeft : this.padding}em;
      padding-right: ${this.paddingRight > 0
        ? this.paddingRight
        : this.padding}em;
      padding-bottom: ${this.paddingBottom > 0
        ? this.paddingBottom
        : this.padding}em;
      margin: ${this.margin}em;
      margin-top: ${this.marginTop > 0 ? this.marginTop : this.margin}em;
      margin-left: ${this.marginLeft > 0 ? this.marginLeft : this.margin}em;
      margin-right: ${this.marginRight > 0 ? this.marginRight : this.margin}em;
      margin-bottom: ${this.marginBottom > 0
        ? this.marginBottom
        : this.margin}em;
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
