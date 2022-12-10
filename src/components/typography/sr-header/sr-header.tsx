import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import { FontHeading1, ColorBody } from '../../../design-tokens/js/variables.js';

/**
 * Heading component, with support for header elements spanning from `h1` to `h6`, and custom alignment.
 * Its convenience for pointing out document sections makes it one of the most consumed components in our Design System.
 * ### Example:
 * ```html
 * <hs-heading level="1" text-align="center">Section name</hs-heading>
 * ```
 */
@Component({
  tag: 'sr-header',
  styleUrl: 'sr-header.css',
  shadow: true,
})
export class SRHeader {
  /**
   * The `level` property allows users to indicate what header hierarchy this element is.
   * It must take a number from `1` to `6`.
   */
  @Prop({ reflect: true })
  level: number = 1;

  /**
   * Provides support for implementing horizontal alignment to the text contained in the header.
   */
  @Prop({ reflect: true })
  textAlign: 'left' | 'right' | 'center' | 'justify' = 'left';

  componentWillLoad() {
    /**
     * We validate here that the 'level' property, which will be used later to compose a
     * HTML tag 'on the fly', will only take values from 1 to 6. TypeScript gives us
     * statical type checking on dev time but TypeScript annotations are wiped once the component
     * is traspiled. This conditional check ensures that the component is properly used
     * later on "in the wild".
     */
    if (this.level < 1 || this.level > 6) {
      throw new Error('SRHeader: the level property must be between 1 and 6');
    }
  }

  render() {
    // We create a JSX tag on the fly
    const Tag = `h${this.level}`;

    // TODOJCS fontHeading design tokens have good values? Font family is off
    // TODOJCS check with Tony:
    // - what color for heading? pureblack? colorbody?
    const tagStyles = css`
      color: ${ColorBody}
      font-size: ${this.level === 1 ? `${FontHeading1.fontSize}px` : undefined};
      text-align: ${this.textAlign};
    `;

    return (
      <Tag className={tagStyles} aria-role="heading">
        <slot></slot>
      </Tag>
    );
  }
}
