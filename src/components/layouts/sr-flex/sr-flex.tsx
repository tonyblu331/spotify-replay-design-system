import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

/**
 * Flex container
 * @property `vAlignment` TODOROSE
 document when you have some spare time :DD:D
 plz and thank u
 */
@Component({
  tag: 'sr-flex',
  styleUrl: 'sr-flex.css',
  shadow: false,
  scoped: true,
})
export class SRFlex {
  /**
   * TODOROSE DOCUMENT
   */
  @Prop({ reflect: true })
  direction:
    | 'horizontal'
    | 'vertical'
    | 'horizontal-reverse'
    | 'vertical-reverse' = 'horizontal';

  /**
   * TODOROSE DOCUMENT
   */
  @Prop({ reflect: true, attribute: 'vAlignment' })
  vAlignment: 'top' | 'center' | 'bottom' | 'stretch' = 'top';

  /**
   * TODOROSE DOCUMENT
   */
  @Prop({ reflect: true, attribute: 'hAlignment' })
  hAlignment: 'left' | 'center' | 'right' | 'around' | 'between' = 'left';

  /**
   * TODOROSE DOCUMENT
   */
  @Prop({ reflect: true })
  gap: number = 0;

  /**
   * TODOROSE DOCUMENT
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
      flex-wrap: ${this.wrap} ? wrap : unset;
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
