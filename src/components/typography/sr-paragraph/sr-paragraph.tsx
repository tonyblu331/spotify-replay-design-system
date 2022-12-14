import { Component, h } from '@stencil/core';
/**
 * Paragraph component
 * no properties - only a slot for the text to insert in the paragraph
 * @extends `<p>`
 */
@Component({
  tag: 'sr-paragraph',
  styleUrl: 'sr-paragraph.css',
  shadow: false,
  scoped: false,
})
export class SRParagraph {
  render() {
    return (
      // <p style={FontBody}> // TODOJCS fix this, design tokens broke this import
      <p>
        <slot></slot>
      </p>
    );
  }
}
