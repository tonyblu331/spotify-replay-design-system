import { Component, h } from '@stencil/core';

@Component({
  tag: 'sr-paragraph',
  styleUrl: 'sr-paragraph.css',
  shadow: true,
})
export class SRParagraph {
  // TODOJCS
  // Prop for alignment/justification?
  // Prop for font weight? color?

  render() {
    return (
      <p>
        <slot></slot>
      </p>
    );
  }
}
