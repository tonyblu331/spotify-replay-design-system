import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

/**
 * The `<sr-flex>` component is a layout component manages layout of children components.
 * Its convenience for arranging direction and alignment of children inside the flex component.
 * @property `direction` (default 'horizontal')
 * @property `vAlignment` (default 'top')
 * @property `hAlignment` (default 'left')
 * @property `gap` (default 0)
 * @property `wrap` (default false)
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
  tag: 'sr-flex',
  styleUrl: 'sr-flex.css',
  shadow: false,
  scoped: true,
})
export class SRFlex {
  /**
   * The `direction` property allows users to indicate what direction
   * of children components or slots is.
   */
  @Prop({ reflect: true })
  direction:
    | 'horizontal'
    | 'vertical'
    | 'horizontal-reverse'
    | 'vertical-reverse' = 'horizontal';

  /**
   * The `vAlignment` property allows user to align children or slots on the cross axis
   */
  @Prop({ reflect: true, attribute: 'vAlignment' })
  vAlignment: 'top' | 'center' | 'bottom' | 'stretch' = 'top';

  /**
   * The `hAlignment` property allows user to align children or slots on the main axis
   */
  @Prop({ reflect: true, attribute: 'hAlignment' })
  hAlignment: 'left' | 'center' | 'right' | 'around' | 'between' = 'left';

  /**
   * The `gap` property adjusts spacing between children components in side flex
   */
  @Prop({ reflect: true })
  gap: number = 0;

  /**
   * The `wrap` property allows children components wrap onto multiple lines
   */
  @Prop({ reflect: true })
  wrap: boolean = false;

  directionHandler() {
    switch (this.direction) {
      case 'horizontal':
        return 'row';
      case 'vertical':
        return 'column';
      case 'horizontal-reverse':
        return 'row-reverse';
      case 'vertical-reverse':
        return 'column-reverse';
      default:
        break;
    }
  }

  hAlignHandler() {
    switch (this.hAlignment) {
      case 'left':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'right':
        return 'flex-end';
      case 'around':
        return 'space-around';
      case 'between':
        return 'space-between';
      default:
        break;
    }
  }

  vAlignHandler() {
    switch (this.vAlignment) {
      case 'top':
        return 'flex-start';
      case 'center':
        return 'center';
      case 'bottom':
        return 'flex-end';
      case 'stretch':
        return 'stretch';
      default:
        break;
    }
  }

  render() {
    const flexStyle = css`
      display: flex;
      flex-direction: ${this.directionHandler()};
      gap: ${this.gap}px;
      flex-wrap: ${this.wrap ? 'wrap' : 'unset'};
      justify-content: ${this.hAlignHandler()};
      align-items: ${this.vAlignHandler()};
    `;
    return (
      <div class={flexStyle}>
        <slot></slot>
      </div>
    );
  }
}