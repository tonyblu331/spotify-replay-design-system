import { css } from '@emotion/css';
import { Component, h } from '@stencil/core';

@Component({
  tag: 'sr-list-item',
  styleUrl: 'sr-list-item.css',
  shadow: false,
  scoped: true,
})
export class SRListItem {
  render() {
    const listStyles = css``;

    return (
      <li class={listStyles}>
        <slot></slot>
      </li>
    );
  }
}
