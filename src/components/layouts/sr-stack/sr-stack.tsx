import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

/**
 * The `<sr-stack>` component is a layout component providing horizontal and vertical
 * flow capabilities for all its children components and elements.
 *
 * ### Example
 * ```html
 * <sr-stack orientation="vertical" gap="small">
 *  <img src="test.png" />
 *  <button>Save</button>
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
