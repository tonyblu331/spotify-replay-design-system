import { Component, Event, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import {
  SpacerSpacer4,
  ColorFoundationNeutralWhite50,
  ColorFoundationNeutralGray200,
} from '../../../design-tokens/js/variables.js';

/**
 * The `<sr-card>` component is used to group various pieces of content
 * into a container. Add a heading title with the `title` property, and introduce other content in the component's slot.
 *
 * @property `title` (default '')
 * @property `hideBorder` (default false)
 *
 * ### Example
 * ```html
 *  <sr-card title="Contributing to GitHub">
 *    <sr-paragraph>Spotify Re:Play is an open source project and contribution is welcome and encouraged.</sr-paragraph>
 *  </sr-card>
 * ```
 */
@Component({
  tag: 'sr-card',
  styleUrl: 'sr-card.css',
  shadow: false,
  scoped: true,
})
export class SRCard {
  @Prop()
  heading: string = '';

  @Prop({ reflect: true, attribute: 'hideBorder' })
  hideBorder: boolean = false;

  @Prop({ reflect: true, attribute: 'primaryButtonText' })
  primaryButtonText?: string;

  @Event()
  primaryButtonClicked;

  @Prop({ reflect: true, attribute: 'secondaryButtonText' })
  secondaryButtonText?: string;

  @Event()
  secondaryButtonClicked;

  handlePrimaryButtonClicked(e) {
    this.primaryButtonClicked.emit(e);
  }

  handleSecondaryButtonClicked(e) {
    this.secondaryButtonClicked.emit(e);
  }

  boxStyles() {
    return css`
      background-color: ${ColorFoundationNeutralWhite50};
      border: ${this.hideBorder ? 0 : 1}px solid
        ${ColorFoundationNeutralGray200};
      border-radius: 8px;
      box-shadow: 0 6px 12px -2.3px rgba(49, 49, 49, 0.22),
        0.5px 3px 6px -3px rgba(60, 60, 60, 0.15);
    `;
  }

  renderButtons() {
    if (this.primaryButtonText && this.secondaryButtonText) {
      return (
        <sr-flex hAlignment="between">
          <sr-button
            text={this.primaryButtonText}
            variant="roundedBtn"
            onClicked={this.handlePrimaryButtonClicked}
          ></sr-button>
          <sr-button
            text={this.secondaryButtonText}
            variant="outlinedRoundBtn"
            onClicked={this.handleSecondaryButtonClicked}
          />
        </sr-flex>
      );
    } else if (this.primaryButtonText) {
      return (
        <sr-flex hAlignment="right">
          <sr-button
            text={this.primaryButtonText}
            variant="roundedBtn"
            onClicked={this.handlePrimaryButtonClicked}
          />
        </sr-flex>
      );
    }
  }

  render() {
    return (
      <sr-box class={this.boxStyles()} padding="spacer-4">
        <sr-stack>
          <sr-heading level={3}>{this.heading}</sr-heading>
          <slot></slot>
          {(this.primaryButtonText || this.secondaryButtonText) &&
            this.renderButtons()}
        </sr-stack>
      </sr-box>
    );
  }
}
