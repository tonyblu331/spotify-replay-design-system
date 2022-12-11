import { css } from '@emotion/css';
import { Component, h } from '@stencil/core';

/**
 * List item, indended to be used within a List component
 * to adhere to a lists' style. if all we want to do is pad each item,
 * we can skip this comp and just use a box primitive to apply basic
 * positional styling
 * TODO ASK TONY. we probably dont need it unless list item requires
 * something other than basic margin/padding/alignment
 */
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
