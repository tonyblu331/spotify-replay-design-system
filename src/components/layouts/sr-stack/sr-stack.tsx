import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

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
  gap: number = 0;

  renderStackStyling() {
    return css`
      display: flex;
      gap: ${this.gap}px;
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
