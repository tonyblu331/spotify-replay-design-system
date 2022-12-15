import { Component, h, Prop } from '@stencil/core';
import { ColorFoundationNeutralBlack400 } from '../../../design-tokens/js/variables.js';
/**
 * Anchor component to redirect to another URL.
 * @property `href`
 * @property `external`
 * @property `openInNewTab`
 */
@Component({
  tag: 'sr-anchor',
  styleUrl: 'sr-anchor.css',
  shadow: false,
})
export class SRAnchor {
  /**
   * The URL to redirect to.
   */
  @Prop()
  href: string;

  /**
   * Indicates whether the component points to an external URL. You define external, and it will be styled differently. Defaults to false.
   */
  @Prop({ reflect: true })
  external: boolean = false;

  /**
   * Whether or not to open the URL in a new tab. Defaults to false.
   */
  @Prop()
  openInNewTab: boolean = false;

  render() {
    return (
      <a
        target={this.openInNewTab ? '_blank' : '_top'}
        href={this.href}
        class={this.external ? 'external' : ''}
      >
        <sr-stack orientation="horizontal" gap="spacer-1">
          <sr-text color={ColorFoundationNeutralBlack400}>
            <slot></slot>
          </sr-text>
          {this.external && ' ⬈'}
        </sr-stack>
      </a>
    );
  }
}
