import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { SPACER } from '~/enum.js';
import {
  ColorFoundationNeutralPureBlack,
  ColorFoundationNeutralPureWhite,
  ColorFoundationNeutralBlack400,
  SpacerSpacer1,
  SpacerSpacer2,
  SpacerSpacer3,
  SpacerSpacer4,
  SpacerSpacer5,
  SpacerSpacer6,
  SpacerSpacer7,
  SpacerSpacer8,
} from '../../../design-tokens/js/variables.js';
/**
 * The `<sr-box>` component is a primitive component.
 * It is a simple wrapper component that can create other components such as card.
 *
 * @property `as` (default 'div')
 * @property `padding` (default 'small')
 * @property `paddingTop`
 * @property `paddingRight`
 * @property `paddingLeft`
 * @property `paddingBottom`
 * @property `margin` (default 'small')
 * @property `marginTop`
 * @property `marginRight`
 * @property `marginLeft`
 * @property `marginBottom`
 * @property `backgroundColor`
 * @property `color` (default black)
 * @property `hasBorder` (default false)
 * @property `borderColor`
 * @property `width`
 * @property `height`
 * @property `boxShadow`
 * @property `borderWidth`
 * @property `minWidth`
 * @property `minHeight`
 * @property `maxWidth`
 * @property `maxHeight`
 * */

@Component({
  tag: 'sr-box',
  styleUrl: 'sr-box.css',
  shadow: false,
  scoped: true,
})
export class SRBox {
  /**
   * Specify wrapper HTML element
   */
  @Prop({ reflect: true })
  as: 'div' | 'section' | 'article' | 'span' = 'div';

  /**
   * Control amount of white space around child components inside of a box
   */
  @Prop({ reflect: true })
  padding: SPACER = 'spacer-1';

  /**
   * Define amount of white space at top side only
   */
  @Prop({ reflect: true, attribute: 'paddingTop' })
  paddingTop?: SPACER;

  /**
   * Define amount of white space at right side only
   */
  @Prop({ reflect: true, attribute: 'paddingRight' })
  paddingRight?: SPACER;

  /**
   * Define amount of white space at left side only
   */
  @Prop({ reflect: true, attribute: 'paddingLeft' })
  paddingLeft?: SPACER;

  /**
   * Define amount of white space at bottom side only
   */
  @Prop({ reflect: true, attribute: 'paddingBottom' })
  paddingBottom?: SPACER;

  /**
   * Control amount of white space around the box component itself.
   */
  @Prop({ reflect: true })
  margin?: SPACER = 'spacer-1';

  /**
   * Define amount of space at top side only.
   */
  @Prop({ reflect: true, attribute: 'marginTop' })
  marginTop?: SPACER;

  /**
   * Define amount of space at right side only.
   */
  @Prop({ reflect: true, attribute: 'marginRight' })
  marginRight?: SPACER;

  /**
   * Define amount of space at left side only.
   */
  @Prop({ reflect: true, attribute: 'marginLeft' })
  marginLeft?: SPACER;

  /**
   * Define amount of space at bottom side only.
   */
  @Prop({ reflect: true, attribute: 'marginBottom' })
  marginBottom?: SPACER;

  /**
   * Specify background fill inside box component
   */
  @Prop({ reflect: true, attribute: 'backgroundColor' })
  backgroundColor = ColorFoundationNeutralPureWhite;

  /**
   * Specify text color inside box component
   */
  @Prop({ reflect: true })
  color = ColorFoundationNeutralBlack400;

  /**
   * Enable or disable border around box component
   */
  @Prop({ reflect: true, attribute: 'isBorder' })
  isBorder: boolean = false;

  /**
   * Specify border color
   */
  @Prop({ reflect: true, attribute: 'borderColor' })
  borderColor = ColorFoundationNeutralPureBlack;

  /**
   * Specify border radius
   */
  @Prop({ reflect: true, attribute: 'borderRadius' })
  borderRadius: 'rounded' | 'squared' = 'squared';

  /**
   * Specify border width
   */
  @Prop({ reflect: true, attribute: 'borderWidth' })
  borderWidth: 'thin' | 'medium' | 'thick' = 'thick';

  /**
   * Specify width of box component
   */
  @Prop({ reflect: true })
  width: 'small' | 'medium' | 'large' | 'fit-content' = 'fit-content';

  /**
   * Specify height of box component
   */
  @Prop({ reflect: true })
  height: 'small' | 'medium' | 'large';

  /**
   * Specify min width of box component
   */
  @Prop({ reflect: true, attribute: 'minWidth' })
  minWidth: number;

  /**
   * Specify min height of box component
   */
  @Prop({ reflect: true, attribute: 'minHeight' })
  minHeight: number;

  /**
   * Specify max width of box component
   */
  @Prop({ reflect: true, attribute: 'maxWidth' })
  maxWidth?: number;

  /**
   * Specify max height of box component
   */
  @Prop({ reflect: true, attribute: 'maxHeight' })
  maxHeight?: number;

  /**
   * Control shadow effects around box component
   */
  @Prop({ reflect: true, attribute: 'boxShadow' })
  boxShadow: 'level0' | 'level1' | 'level2' | 'level3' | 'level4';

  /**
   * Control hover color
   */
  @Prop({ reflect: true, attribute: '_hoverBackground' })
  _hoverBackground?;

  /**
   * Control active background color
   */
  @Prop({ reflect: true, attribute: '_activeBackground' })
  _activeBackground?;

  /**
   * Control hover border width
   */
  @Prop({ reflect: true, attribute: '_hoverBorderWidth' })
  _hoverBorderWidth?: 'thin' | 'medium' | 'thick';

  /**
   * Control hover border color width
   */
  @Prop({ reflect: true, attribute: '_hoverBorderColor' })
  _hoverBorderColor?;

  /**
   * Control active border width
   */
  @Prop({ reflect: true, attribute: '_activeBorderWidth' })
  _activeBorderWidth?: 'thin' | 'medium' | 'thick';

  /**
   * Control focus border width
   */
  @Prop({ reflect: true, attribute: '_focusBorderWidth' })
  _focusBorderWidth?: 'thin' | 'medium' | 'thick';

  /**
   * Control focus border color
   */
  @Prop({ reflect: true, attribute: '_focusBorderColor' })
  _focusBorderColor?;

  /**
   * Control focus background color
   */
  @Prop({ reflect: true, attribute: '_focusBackgroundColor' })
  _focusBackgroundColor;

  /**
   * Control disable state
   */
  @Prop({ reflect: true, attribute: 'isDisabled' })
  isDisabled: boolean = false;

  /**
   * Control clickable state
   */
  @Prop({ reflect: true, attribute: 'isClickable' })
  isClickable: boolean = false;

  spacingHandler(selectedType, side?) {
    if (!selectedType || selectedType == 'undefined') return;
    const spacing = this.getSpacingValue(selectedType);

    if (!side) {
      return `${spacing}px
      ${spacing}px
      ${spacing}px
      ${spacing}px`;
    } else {
      return `${spacing}px`;
    }
  }

  getSpacingValue(selectedType) {
    if (!selectedType || selectedType == undefined) return 0;
    switch (selectedType) {
      case 'spacer-1':
        return SpacerSpacer1;
      case 'spacer-2':
        return SpacerSpacer2;
      case 'spacer-3':
        return SpacerSpacer3;
      case 'spacer-4':
        return SpacerSpacer4;
      case 'spacer-5':
        return SpacerSpacer5;
      case 'spacer-6':
        return SpacerSpacer6;
      case 'spacer-7':
        return SpacerSpacer7;
      case 'spacer-8':
        return SpacerSpacer8;
      default:
        break;
    }
  }

  /**
   * TODOROSE Fix base on design token
   */
  widthHandler() {
    switch (this.width) {
      case 'small':
        return '200px';
      case 'medium':
        return '50%';
      case 'large':
        return '100%';
      default:
        return 'fit-content';
    }
  }

  /**
   * TODOROSE Fix base on design token
   */
  heightHandler() {
    switch (this.height) {
      case 'small':
        return 'fit-content';
      case 'medium':
        return '10rem';
      case 'large':
        return '12rem';
      default:
        break;
    }
  }

  /**
   * TODOROSE Fix base on design token
   */
  borderRadiusHandler() {
    switch (this.borderRadius) {
      case 'squared':
        return '8px';
      case 'rounded':
        return '27px';
      default:
        return '0px';
    }
  }

  borderWidthHandler(value) {
    switch (value) {
      case 'thin':
        return '1.5px';
      case 'medium':
        return '2px';
      case 'thick':
        return '3px';
      default:
        break;
    }
  }

  /**
   * TODOROSE Fix base on design token
   */
  boxShadowHandler() {
    switch (this.boxShadow) {
      case 'level0':
        return '0px 0px 0px -3px rgba(60, 60, 60, 0.15), 0px 0px 0px rgba(49, 49, 49, 0.2)';
      case 'level1':
        return '0.25px 1.5px 3px -3px rgba(60, 60, 60, 0.15), 0px 3px 6px -1.15px rgba(49, 49, 49, 0.21)';
      case 'level2':
        return '0.5px 3px 6px -3px rgba(60, 60, 60, 0.15), 0px 6px 12px -2.3px rgba(49, 49, 49, 0.22)';
      case 'level3':
        return '0.75px 4.5px 9px -3px rgba(60, 60, 60, 0.15), 0px 9px 18px -3.45px rgba(49, 49, 49, 0.23)';
      case 'level4':
        return '1px 6px 12px -3px rgba(60, 60, 60, 0.15), 0px 12px 24px -4.6px rgba(49, 49, 49, 0.24)';
      default:
        return '';
    }
  }

  renderStyling() {
    console.log(this.isBorder);

    return css`
      width: ${this.widthHandler()};
      height: ${this.heightHandler()};
      color: ${this.color};
      padding: ${this.spacingHandler(this.padding)};
      padding-top: ${this.spacingHandler(this.paddingTop, 'top')};
      padding-right: ${this.spacingHandler(this.paddingRight, 'right')};
      padding-bottom: ${this.spacingHandler(this.paddingBottom, 'bottom')};
      padding-left: ${this.spacingHandler(this.paddingLeft, 'left')};
      margin: ${this.spacingHandler(this.margin)};
      margin-top: ${this.spacingHandler(this.marginTop, 'top')};
      margin-right: ${this.spacingHandler(this.marginRight, 'right')};
      margin-bottom: ${this.spacingHandler(this.marginBottom, 'bottom')};
      margin-left: ${this.spacingHandler(this.marginLeft, 'left')};
      background-color: ${this.backgroundColor};
      border: ${this.isBorder
        ? this.borderWidthHandler(this.borderWidth) +
          ' solid ' +
          this.borderColor
        : ''};
      border-radius: ${this.borderRadiusHandler()};
      box-shadow: ${this.boxShadowHandler()};
      min-width: ${this.minWidth}px;
      min-height: ${this.minHeight}px;
      max-width: ${this.maxWidth}px;
      max-height: ${this.maxHeight}px;
      cursor: ${this.isClickable ? 'pointer' : ''};
      &:hover:not(:active) {
        background-color: ${!this.isDisabled
          ? this._hoverBackground
          : ''} !important;
        border: ${!this.isDisabled
          ? this.borderWidthHandler(this._hoverBorderWidth) +
            ' solid ' +
            this._hoverBorderColor
          : ''};
      }
      &:active {
        background-color: ${!this.isDisabled
          ? this._activeBackground
          : ''} !important;
        border-width: ${!this.isDisabled
          ? this.borderWidthHandler(this._activeBorderWidth)
          : ''}!important;
      }
      &:focus {
        border: ${!this.isDisabled
          ? this.borderWidthHandler(this._focusBorderWidth) +
            ' solid ' +
            this._focusBorderColor
          : ''};
        background-color: ${!this.isDisabled
          ? this._focusBackgroundColor
          : ''} !important;
      }
    `;
  }
  render() {
    const Tag = `${this.as}`;
    return (
      <Tag class={this.renderStyling()}>
        <slot></slot>
      </Tag>
    );
  }
}
