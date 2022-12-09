import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';

@Component({
  tag: 'sr-flex',
  styleUrl: 'sr-flex.css',
  shadow: false,
  scoped: true
})
export class SrFlex {

  @Prop({ reflect: true }) 
  direction: 'horizontal' | 'vertical' | 'horizontal-reverse' | 'vertical-reverse' = 'horizontal';

  @Prop({ reflect: true })
  vAlign: 'top' | 'center' | 'bottom' | 'stretch' = 'top';

  @Prop({ reflect: true})
  hAlign: 'left' | 'center' | 'right' | 'around' | 'between' = 'left';

  @Prop({ reflect: true})
  gap: number = 0;

  @Prop({ reflect: true})
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
    switch (this.hAlign) {
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
    switch (this.vAlign) {
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
    console.log(this.wrap);
    const flexStyle = css`
      display: flex;
      flex-direction: ${this.directionHandler()};
      gap: ${this.gap}px;
      flex-wrap: ${this.wrap} ? wrap : unset;
      justify-content: ${this.hAlignHandler()};
    `
    return (
      <div class={flexStyle}>
        <slot></slot>
      </div>
    );
  }

}
