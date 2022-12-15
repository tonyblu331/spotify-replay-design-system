import { css } from '@emotion/css';
import { Component, h, Prop } from '@stencil/core';

/**
 * List element for showing text, separated into list elements
 * This component expects that the HTML elements passed in the slot are of type <li>
 *
 * @property `ordered` (default false)
 */
@Component({
  tag: 'sr-list',
  styleUrl: 'sr-list.css',
  shadow: false,
  scoped: true,
})
export class SRList {
  /**
   * Opt for an ordered list `<ol>` or `<ul>` if false. False by default
   */
  @Prop({ reflect: true })
  ordered: boolean = false;

  render() {
    const Tag = `${this.ordered ? 'o' : 'u'}l`;

    const tagStyles = css`
      line-height: 20px;
    `;

    return (
      <sr-text as="p">
        <Tag class={tagStyles}>
          <sr-stack gap="spacer-2">
            <slot></slot>
          </sr-stack>
        </Tag>
      </sr-text>
    );
  }
}
