import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import {
  ColorFoundationNeutralPureBlack,
  SpacerSpacerH1,
  SpacerSpacerH2,
  SpacerSpacerH3,
  SpacerSpacerH4,
  SpacerSpacerH5,
  SpacerSpacerText,
  SpacerSpacerCaption,
  SpacerSpacerEndnote,
} from '../../../design-tokens/js/variables.js';
import { SPACER } from '~/type.js';

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
  color?;

  /**
   * Specify font size
   */
  @Prop({ reflect: true, attribute: 'fontSize' })
  fontSize: SPACER;

  /**
   * Control font weight
   */
  @Prop({ reflect: true, attribute: 'fontWeight' })
  fontWeight: 'regular' | 'bold' | 'extraBold' = 'regular';

  /**
   * Control amount of white space around child components inside of a box
   */
  @Prop({ reflect: true })
  padding: SPACER = 'spacer-0';

  /**
   * Define amount of white space at top side only
   */
  @Prop({ reflect: true, attribute: 'paddingTop' })
  paddingTop?: SPACER = 'spacer-0';

  /**
   * Define amount of white space at right side only
   */
  @Prop({ reflect: true, attribute: 'paddingRight' })
  paddingRight?: SPACER = 'spacer-0';

  /**
   * Define amount of white space at left side only
   */
  @Prop({ reflect: true, attribute: 'paddingLeft' })
  paddingLeft?: SPACER = 'spacer-0';

  /**
   * Define amount of white space at bottom side only
   */
  @Prop({ reflect: true, attribute: 'paddingBottom' })
  paddingBottom?: SPACER = 'spacer-0';

  /**
   * Control amount of white space around the box component itself.
   */
  @Prop({ reflect: true })
  margin?: SPACER = 'spacer-0';

  /**
   * Define amount of space at top side only.
   */
  @Prop({ reflect: true, attribute: 'marginTop' })
  marginTop?: SPACER = 'spacer-0';

  /**
   * Define amount of space at right side only.
   */
  @Prop({ reflect: true, attribute: 'marginRight' })
  marginRight?: SPACER = 'spacer-0';

  /**
   * Define amount of space at left side only.
   */
  @Prop({ reflect: true, attribute: 'marginLeft' })
  marginLeft?: SPACER = 'spacer-0';

  /**
   * Define amount of space at bottom side only.
   */
  @Prop({ reflect: true, attribute: 'marginBottom' })
  marginBottom?: SPACER = 'spacer-0';

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
    if (!this.color) {
      return ColorFoundationNeutralPureBlack;
    }
    return this.color;
  }

  getSpacer(variant) {
    switch (variant) {
      case 'spacer-h1':
        return SpacerSpacerH1;
      case 'spacer-h2':
        return SpacerSpacerH2;
      case 'spacer-h3':
        return SpacerSpacerH3;
      case 'spacer-h4':
        return SpacerSpacerH4;
      case 'spacer-h5':
        return SpacerSpacerH5;
      case 'spacer-h6':
      case 'spacer-text':
      case 'spacer-blockquote':
        return SpacerSpacerText;
      case 'spacer-caption':
        return SpacerSpacerCaption;
      case 'spacer-endnote':
        return SpacerSpacerEndnote;
      case 'spacer-0':
        return 0;
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
      padding: ${this.getSpacer(this.padding)}px;
      padding-top: ${this.paddingTop != 'spacer-0'
        ? this.getSpacer(this.paddingTop)
        : this.getSpacer(this.padding)}px;
      padding-left: ${this.paddingLeft != 'spacer-0'
        ? this.getSpacer(this.paddingLeft)
        : this.getSpacer(this.padding)}px;
      padding-right: ${this.paddingRight != 'spacer-0'
        ? this.getSpacer(this.paddingRight)
        : this.getSpacer(this.padding)}px;
      padding-bottom: ${this.paddingBottom != 'spacer-0'
        ? this.getSpacer(this.paddingBottom)
        : this.getSpacer(this.padding)}px;
      margin: ${this.getSpacer(this.margin)}px;
      margin-top: ${this.marginTop != 'spacer-0'
        ? this.getSpacer(this.marginTop)
        : this.getSpacer(this.margin)}px;
      margin-left: ${this.marginLeft != 'spacer-0'
        ? this.getSpacer(this.marginLeft)
        : this.getSpacer(this.margin)}px;
      margin-right: ${this.marginRight != 'spacer-0'
        ? this.getSpacer(this.marginRight)
        : this.getSpacer(this.margin)}px;
      margin-bottom: ${this.marginBottom != 'spacer-0'
        ? this.getSpacer(this.marginBottom)
        : this.getSpacer(this.margin)}px;
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
