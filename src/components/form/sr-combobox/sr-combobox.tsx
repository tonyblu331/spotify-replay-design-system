import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sr-combobox',
  styleUrl: 'sr-combobox.css',
  shadow: true,
})
export class SrCombobox {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
