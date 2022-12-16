import { Component, h, Prop } from '@stencil/core';
import { ColorFoundationNeutralBlack400 } from '../../../design-tokens/js/variables.js';
/**
 * Anchor component to redirect to another URL.
 * @property `variant` (default normal)
 * @property `href`
 * @property `external`
 * @property `openInNewTab`
 */
@Component({
  tag: 'sr-anchor',
  styleUrl: 'sr-anchor.css',
  shadow: false,
  scoped: true,
})
export class SRAnchor {
  /**
   * Anchor variant
   */
  @Prop({ reflect: true })
  variant: 'normal' | 'underline' = 'normal';
  /**
   * The URL to redirect to.
   */
  @Prop()
  href?: string;

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

  /**
   * Indicate active state of anchor
   * Use this prop in tab component
   */
  @Prop()
  selected: boolean = false;

  /**
   * Indicate inActive state of anchor
   * Use this prop in tab component
   */
  @Prop({ reflect: true, attribute: 'inActive' })
  inActive: boolean = false;

  addClass() {
    if (this.inActive) return 'in-active';
    if (this.external) return 'external';
    switch (this.variant) {
      case 'underline':
        return 'underline';
      case 'normal':
        return 'normal';
    }
  }

  render() {
    return (
      <sr-box
        minHeight={28}
        class={this.inActive ? 'in-active' : this.selected ? 'selected' : ''}
        margin="spacer-0"
        borderRadius="none"
      >
        <a
          target={this.openInNewTab ? '_blank' : '_top'}
          href={!this.inActive ? this.href : null}
          class={this.addClass()}
        >
          <sr-stack orientation="horizontal" gap="spacer-1">
            <sr-text fontWeight="bold">
              <slot></slot>
            </sr-text>
            {this.external && (
              <sr-box padding="spacer-0" margin="spacer-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 1.375C10.2875 1.375 10.125 1.5375 10.125 1.75C10.125 1.9625 10.2875 2.125 10.5 2.125H13.3501L7.55005 7.92505C7.40005 8.07505 7.40005 8.31245 7.55005 8.44995C7.62505 8.52495 7.725 8.5625 7.8125 8.5625C7.9 8.5625 7.99995 8.52495 8.07495 8.44995L13.875 2.6499V5.5C13.875 5.7125 14.0375 5.875 14.25 5.875C14.4625 5.875 14.625 5.7125 14.625 5.5V1.75C14.625 1.5375 14.4625 1.375 14.25 1.375H10.5ZM3 3.875C2.1 3.875 1.375 4.6 1.375 5.5V13C1.375 13.9 2.1 14.625 3 14.625H10.5C11.4 14.625 12.125 13.9 12.125 13V7.375C12.125 7.1625 11.9625 7 11.75 7C11.5375 7 11.375 7.1625 11.375 7.375V13C11.375 13.4875 10.9875 13.875 10.5 13.875H3C2.5125 13.875 2.125 13.4875 2.125 13V5.5C2.125 5.0125 2.5125 4.625 3 4.625H8.625C8.8375 4.625 9 4.4625 9 4.25C9 4.0375 8.8375 3.875 8.625 3.875H3Z"
                    fill={ColorFoundationNeutralBlack400}
                  />
                </svg>
              </sr-box>
            )}
          </sr-stack>
        </a>
      </sr-box>
    );
  }
}
