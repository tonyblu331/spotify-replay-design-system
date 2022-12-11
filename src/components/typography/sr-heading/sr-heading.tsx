import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import {
  FontHeading1,
  FontHeading2,
} from '../../../design-tokens/js/variables.js';

/**
 * Heading component, with support for heading elements spanning from `h1` to `h6`, and custom alignment.
 * Its convenience for pointing out document sections makes it one of the most consumed components in our Design System.
 @property `level` (default 1)
 @property `align` (default 'left')

 * ### Example:
 * ```html
 * <sr-heading level="2" text-align="center">Section name</hs-header>
 * ```
 */
@Component({
  tag: 'sr-heading',
  styleUrl: 'sr-heading.css',
  shadow: false,
  scoped: true,
})
export class SRHeading {
  /**
   * The `level` property allows users to indicate what header hierarchy this element is.
   * It must take a number from `1` to `6`.  */
  @Prop({ reflect: true })
  level: 1 | 2 | 3 | 4 | 5 | 6 = 1;

  /**
   * Provides support for implementing horizontal alignment to the text contained in the header.
   */
  @Prop({ reflect: true, attribute: 'textAlign' })
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

  getFontHeadingToken() {
    switch (this.level) {
      case 1:
        return FontHeading1;
      case 2:
        return FontHeading2;
      // TODOJCS get design tokens for h3-6
      // case 3:
      //   return FontHeading3;
      // case 4:
      //   return FontHeading4;
      // case 5:
      //   return FontHeading5;
      // case 6:
      //   return FontHeading6;
    }
  }

  render() {
    // We create a JSX tag on the fly
    const Tag = `h${this.level}`;

    // TODOJCS fontHeading design tokens have good values? Font family is off
    // TODOJCS ASK Tony:
    // - what default color for heading? pureblack? colorbody?
    const tagStyles = css`
      color: #e0e0e0 
      font-size: ${this.getFontHeadingToken().fontSize}px;
      text-align: ${this.textAlign};
    `;

    return (
      <Tag className={tagStyles} aria-role="heading">
        <slot></slot>
      </Tag>
    );
  }
}
