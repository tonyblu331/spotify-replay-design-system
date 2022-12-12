import { css } from '@emotion/css';
import { Component, h, Prop } from '@stencil/core';

/**
 * Callout components provide a way to draw the user's attention.
 * The available types are 'note', 'warning', and 'critical'.
 * TODOJCS clarify with Tony
 * @property `headerText` (default is the type property, capitalized)
 * @property `type` (default 'note')
 *
 * ### Example
 * ```html
 * <!-- Warning -->
 * <sr-callout type="warning">Experimental features may imply longer loading times.</sr-callout>
 */
@Component({
  tag: 'sr-callout',
  styleUrl: 'sr-callout.css',
  shadow: false,
  scoped: true,
})
export class SRCallout {
  /**
   * The title to display in the topmost part of the callout
   */
  @Prop({ mutable: true, attribute: 'headerText' })
  headerText?: string;

  /**
   * Indicates the importance of the callout. The default is 'note', for the lowest level of importance.
   */
  @Prop({ reflect: true })
  type: 'note' | 'warning' | 'critical' = 'note';

  componentWillLoad() {
    if (this.headerText) return;
    switch (this.type) {
      case 'note':
        this.headerText = 'Note';
        break;
      case 'warning':
        this.headerText = 'Warning';
        break;
      case 'critical':
        this.headerText = 'Critical';
        break;
      default:
        break;
    }
  }

  // TODOJCS use design tokens here. ASK TONY WHICH
  note = '#3574FF'; // blue
  warning = '#F37618'; // orange
  critical = '#F1043A'; // Red
  handleColor() {
    switch (this.type) {
      case 'note':
        return this.note;
      case 'warning':
        return this.warning;
      case 'critical':
        return this.critical;
      default:
        console.log('Error!!');
        break;
    }
  }

  render() {
    // TODOJCS what border color?
    const containerStyles = css`
      display: flex;
      border-style: solid;
      border-width: 2px;
      border-radius: 5px;
      border-color: ${this.handleColor()};
    `;
    const stripeStyles = css`
      width: 5px;
      background-color: ${this.handleColor()};
    `;
    const bodyStyles = css`
      display: flex;
      flex-direction: column;
    `;
    const headerStyles = css`
      background-color: ${this.handleColor()}22;
    `;
    return (
      // TODOJCS use box primitive to handle marg/padd
      <div class={containerStyles}>
        <div class={stripeStyles}></div>
        <div class={bodyStyles}>
          <div class={headerStyles}>
            {/* TODOJCS use header element here? what level?? ask tony */}
            {/* <sr-heading level={2}>{this.headerText}</sr-heading> */}
            {this.headerText}
          </div>
          <slot></slot>
        </div>
      </div>
    );
  }
}
