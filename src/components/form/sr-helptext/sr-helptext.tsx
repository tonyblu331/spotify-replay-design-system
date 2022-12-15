import { Component, h, Prop } from '@stencil/core';
import {
  ColorFoundationRedRed200,
  ColorFoundationUiGreenUiGreen,
  ColorFoundationNeutralGray400,
  TypographyTypographyTextCaption400,
} from '../../../design-tokens/js/variables.js';
@Component({
  tag: 'sr-help-text',
  styleUrl: 'sr-helptext.css',
  shadow: false,
  scoped: true,
})
export class SRHelpText {
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

  getCaptionFontSize() {
    return TypographyTypographyTextCaption400.fontSize.value.measure.value;
  }
  render() {
    return (
      <sr-text
        as="span"
        marginBottom="spacer-caption"
        color={this.getColor()}
        fontSize={this.getCaptionFontSize()}
        letterSpacing={0.4}
        lineHeight={1.6}
      >
        <slot></slot>
      </sr-text>
    );
  }
}
