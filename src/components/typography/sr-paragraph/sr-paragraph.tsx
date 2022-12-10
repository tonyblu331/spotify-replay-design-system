import { Component, h } from '@stencil/core';

/**
 * Paragraph component
 * no properties - only a slot for the text to insert in the paragraph
 * (TODOJCS is this a component? mix of what? talk with TONY)
 * @extends `<p>`
 */
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
