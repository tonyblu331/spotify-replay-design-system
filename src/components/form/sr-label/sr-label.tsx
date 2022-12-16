import { Component, h, Prop } from '@stencil/core';
import {
  ColorFoundationRedRed200,
  ColorFoundationUiGreenUiGreen,
  ColorFoundationNeutralGray400,
  TypographyTypographyTextBody700,
} from '../../../design-tokens/js/variables.js';
/**
 * The `<sr-label>` component is a caption that helps provide context regarding field inputs.
 */
@Component({
  tag: 'sr-label',
  styleUrl: 'sr-label.css',
  shadow: false,
  scoped: true,
})
export class SrLabel {
  /**
   * Label variant state
   */
  @Prop({ reflect: true })
  variant: 'default' | 'error' | 'success' = 'default';

  getColor() {
    switch (this.variant) {
      case 'error':
        return ColorFoundationRedRed200;
      case 'success':
        return ColorFoundationUiGreenUiGreen;
      default:
        return ColorFoundationNeutralGray400;
    }
  }

  getTextFontSize() {
    return TypographyTypographyTextBody700.fontSize.value.measure.value;
  }
  render() {
    return (
      <sr-text
        as="span"
        marginBottom="spacer-text"
        color={this.getColor()}
        fontSize={this.getTextFontSize()}
        fontWeight="extrabold"
        letterSpacing={0.5}
        lineHeight={1.625}
      >
        <slot></slot>
      </sr-text>
    );
  }
}
