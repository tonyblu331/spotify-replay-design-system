import { Component, h, Prop } from '@stencil/core';

/**
 * Anchor component to redirect to another URL.
 * @property `href`
 * @property `external`
 * @property `openInNewTab`
 */
@Component({
  tag: 'sr-anchor',
  styleUrl: 'sr-anchor.css',
  shadow: true,
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
    // TODO style conditionally in response to external or remove the prop
    return (
      <a
        target={this.openInNewTab ? '_blank' : '_top'}
        href={this.href}
        class={this.external ? 'external' : ''}
      >
        <sr-text>
          <slot></slot>
        </sr-text>
        {this.external && '⬈'}
      </a>
    );
  }
}
