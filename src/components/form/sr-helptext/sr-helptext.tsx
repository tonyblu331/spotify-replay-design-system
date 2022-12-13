import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sr-helptext',
  styleUrl: 'sr-helptext.css',
  shadow: true,
})
export class SRHelptext {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
