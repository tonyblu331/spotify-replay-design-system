import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sr-textinput',
  styleUrl: 'sr-textinput.css',
  shadow: true,
})
export class SRTextinput {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
