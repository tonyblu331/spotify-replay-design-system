import { Component, h } from '@stencil/core';

@Component({
  tag: 'sr-breadcrumb',
  styleUrl: 'sr-breadcrumb.css',
  shadow: false,
  scoped: true,
})
export class SrBreadcrumb {
  render() {
    return (
      <sr-stack orientation="horizontal" gap="spacer-1">
        <slot></slot>
      </sr-stack>
    );
  }
}
