import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { SPACER } from '~/enum.js';
import {
  ColorFoundationUiGreenUiGreen,
  ColorFoundationPinkPink300,
  ColorFoundationBlueBlue300,
  ColorFoundationNeutralPureBlack,
  ColorFoundationNeutralPureWhite,
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
 * @property `backgroundColor` (default 'default')
 * @property `color` (default dark)
 * @property `hasBorder` (default false)
 * @property `borderColor` (default 'default')
 * @property `width`
 * @property `height`
 * @property `boxShadow`
 * @property `borderWidth`
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
  backgroundColor: 'primary' | 'secondary' | 'default' | 'dark' = 'default';

  /**
   * Specify text color inside box component
   */
  @Prop({ reflect: true })
  color: 'dark' | 'bright' = 'dark';

  /**
   * Enable or disable border around box component
   */
  @Prop({ reflect: true, attribute: 'isBorder' })
  isBorder: boolean = false;

  /**
   * Specify border color
   */
  @Prop({ reflect: true, attribute: 'borderColor' })
  borderColor: 'default' | 'primary' = 'default';

  /**
   * Specify border radius
   */
  @Prop({ reflect: true, attribute: 'borderRadius' })
  borderRadius: 'default' | 'none' = 'default';

  /**
   * Specify border width
   */
  @Prop({ reflect: true, attribute: 'borderWidth' })
  borderWidth: 'thin' | 'thick' = 'thick';

  /**
   * Specify width of box component
   */
  @Prop({ reflect: true })
  width: 'small' | 'medium' | 'large';

  /**
   * Specify height of box component
   */
  @Prop({ reflect: true })
  height: 'small' | 'medium' | 'large';

  /**
   * Control shadow effects around box component
   */
  @Prop({ reflect: true, attribute: 'boxShadow' })
  boxShadow: 'level0' | 'level1' | 'level2' | 'level3' | 'level4';

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
        break;
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
   *
   * TODOROSE Update color referring to design
   */
  backgroundHandler() {
    switch (this.backgroundColor) {
      case 'primary':
        return ColorFoundationUiGreenUiGreen;
      case 'secondary':
        return ColorFoundationPinkPink300;
      case 'dark':
        return ColorFoundationBlueBlue300;
      default:
        break;
    }
  }

  /**
   * TODOROSE Fix base on design token
   */
  borderRadiusHandler() {
    switch (this.borderRadius) {
      case 'default':
        return '6px';
      default:
        return '0px';
    }
  }

  textColorHandler() {
    switch (this.color) {
      case 'dark':
        return ColorFoundationNeutralPureBlack;
      case 'bright':
        return ColorFoundationNeutralPureWhite;
      default:
        break;
    }
  }

  /**
   * TODOROSE Fix base on design token
   */
  borderColorHandler() {
    switch (this.borderColor) {
      case 'default':
        return ColorFoundationNeutralPureBlack;
      case 'primary':
        return ColorFoundationUiGreenUiGreen;
      default:
        break;
    }
  }

  borderWidthHandler() {
    switch (this.borderWidth) {
      case 'thin':
        return '1px';
      case 'thick':
        return '2px';
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
    return css`
      width: ${this.widthHandler()};
      height: ${this.heightHandler()};
      color: ${this.textColorHandler()};
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
      background-color: ${this.backgroundHandler()};
      border: ${this.isBorder
        ? this.borderWidthHandler() + ' solid ' + this.borderColorHandler()
        : ''};
      border-radius: ${this.borderRadiusHandler()};
      box-shadow: ${this.boxShadowHandler()};
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
