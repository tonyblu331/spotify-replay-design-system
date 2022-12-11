import { Component, h } from '@stencil/core';

/**
 * Paragraph component
 * no properties - only a slot for the text to insert in the paragraph
 * @extends `<p>`
 */
@Component({
  tag: 'sr-paragraph',
  styleUrl: 'sr-paragraph.css',
  shadow: true,
})
export class SRParagraph {
  /**
   * TODOJCS discuss (un)opinionated aspects of applying styles
   * what style is being applied?
   * what options are there for applying it?
   * is a prop really necessary?
   * if allowing styling via in-situ css, i.e.
   * ```html
   *  <sr-paragraph class="text-justify font-weight-200">
   *    lalalala
   *  </sr-paragraph>
   * ```
   * we need to turn off shadow dom (i think)
   *
   */
  render() {
    return (
      <p>
        <slot></slot>
      </p>
    );
  }
}
