import { Component, h } from '@stencil/core';
/**
 * Paragraph component
 * no properties - only a slot for the text to insert in the paragraph
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
      <sr-text as="p">
        <slot></slot>
      </sr-text>
    );
  }
}
