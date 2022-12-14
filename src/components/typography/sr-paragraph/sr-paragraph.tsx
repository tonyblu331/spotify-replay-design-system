import { Component, h } from '@stencil/core';
import { SRText } from '~/components/primitives/sr-text/sr-text';
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
      <SRText as="p">
        <slot></slot>
      </SRText>
    );
  }
}
