import { css } from '@emotion/css';
import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'sr-list',
  styleUrl: 'sr-list.css',
  shadow: false,
  scoped: true,
})
export class SRList {
  // TODOJCS
  // ASK TONY Prop for ordered / unordered?
  @Prop({ reflect: true })
  ordered: boolean = false;

  // Prop for gap? is gap (actually padd/marg combo) fixed?

  // TODOJCS ASK PABLO what is up with the comma being rendered between list items
  // TODOJCS ASK PABLO why ordered toggle doesnt work (always false)

  render() {
    console.log('instantiation with ordered=', this.ordered);
    const Tag = `${this.ordered ? 'o' : 'u'}l`;

    const tagStyles = css``;

    return (
      <Tag class={tagStyles}>
        <slot></slot>
      </Tag>
    );
  }
}
