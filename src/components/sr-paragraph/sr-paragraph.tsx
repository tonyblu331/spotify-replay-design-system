import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sr-paragraph',
  styleUrl: 'sr-paragraph.css',
  shadow: true,
})
export class SRParagraph {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
