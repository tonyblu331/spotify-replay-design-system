import { css } from '@emotion/css';
import { Component, h, Prop } from '@stencil/core';

/**
 * List of text (?) TODOJCS define List element with Tony,
 * i.e. only for text? can we even validate a slot's content? possibly yes
 * can apply margin/padding in children via box primitives
 * @property `ordered` (default false)
 */
@Component({
  tag: 'sr-list',
  styleUrl: 'sr-list.css',
  shadow: false,
  scoped: true,
})
export class SRList {
  // TODOJCS ASK TONY Prop for ordered / unordered?
  /**
   * Opt for an ordered list `<ol>` or `<ul>` if false. False by default
   */
  @Prop({ reflect: true })
  ordered: boolean = false;

  // TODOJCS ASK PABLO what is up with the comma being rendered between list items

  render() {
    console.debug('rendering sr-list with ordered=', this.ordered);
    const Tag = `${this.ordered ? 'o' : 'u'}l`;

    const tagStyles = css``;

    return (
      <Tag class={tagStyles}>
        <slot></slot>
      </Tag>
    );
  }
}
