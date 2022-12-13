import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { SPACER } from '~/enum.js';
import {
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
 * The `<sr-stack>` component is a layout component manages layout of children
 * along the vertical or horizontal axis.
 * @property `orientation` (default 'vertical')
 * @property `gap` (default 0)
 *
 * ### Example
 * ```html
 * <sr-stack orientation="vertical" gap="30">
 *  <sr-heading level="1">Card</sr-heading>
 *  <sr-card>
 *    <sr-heading level="1">Card Header</sr-heading>
 *  </sr-card>
 * </sr-stack>
 * ```
 */
@Component({
  tag: 'sr-stack',
  styleUrl: 'sr-stack.css',
  shadow: false,
  scoped: true,
})
export class SrStack {
  /**
   * The `orientation` property sets the direction for the flow,
   * either vertical or horizontal.
   */
  @Prop({ reflect: true })
  orientation: 'vertical' | 'horizontal' = 'vertical';

  /**
   * The `gap` property sets the spacing in between elements, and has no effect
   * in the leading or trailing element.
   */
  @Prop({ reflect: true })
  gap?: SPACER;

  gapHandler() {
    if (!this.gap || this.gap == undefined) return 0;
    switch (this.gap) {
      case 'spacer8':
        return SpacerSpacer1;
      case 'spacer16':
        return SpacerSpacer2;
      case 'spacer24':
        return SpacerSpacer3;
      case 'spacer32':
        return SpacerSpacer4;
      case 'spacer40':
        return SpacerSpacer5;
      case 'spacer48':
        return SpacerSpacer6;
      case 'spacer56':
        return SpacerSpacer7;
      case 'spacer64':
        return SpacerSpacer8;
      default:
        break;
    }
  }

  renderStackStyling() {
    return css`
      display: flex;
      gap: ${this.gapHandler()}px;
      flex-direction: ${this.orientation === 'horizontal' ? 'row' : 'column'};
    `;
  }

  render() {
    return (
      <div class={this.renderStackStyling()}>
        <slot></slot>
      </div>
    );
  }
}
