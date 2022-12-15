import { Component, h, Prop } from '@stencil/core';
import { css } from '@emotion/css';
import {
  SpacerSpacer2,
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
  title: string = '';

  @Prop({ reflect: true, attribute: 'hideBorder' })
  hideBorder: boolean = false;

  boxStyles() {
    return css`
      padding: ${SpacerSpacer2};
      margin: 0;
      background-color: ${ColorFoundationNeutralWhite50};
      border: ${this.hideBorder ? 0 : 2}px solid
        ${ColorFoundationNeutralGray200};
      border-radius: 5px;
    `;
    //TODOJCS shadow? apply paired with border
  }

  render() {
    return (
      <sr-box class={this.boxStyles()}>
        <sr-heading level={3}>{this.title}</sr-heading>
        <slot></slot>
      </sr-box>
    );
  }
}
