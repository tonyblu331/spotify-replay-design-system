import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
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
  gap?:
    | 'Spacer1'
    | 'Spacer2'
    | 'Spacer3'
    | 'Spacer4'
    | 'Spacer5'
    | 'Spacer6'
    | 'Spacer7'
    | 'Spacer8';

  gapHandler() {
    if (!this.gap || this.gap == undefined) return 0;
    switch (this.gap) {
      case 'Spacer1':
        return SpacerSpacer1;
      case 'Spacer2':
        return SpacerSpacer2;
      case 'Spacer3':
        return SpacerSpacer3;
      case 'Spacer4':
        return SpacerSpacer4;
      case 'Spacer5':
        return SpacerSpacer5;
      case 'Spacer6':
        return SpacerSpacer6;
      case 'Spacer7':
        return SpacerSpacer7;
      case 'Spacer8':
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
