import { Component, h, Prop, Event } from '@stencil/core';
import { css } from '@emotion/css';

import {
  SpacerSpacer2,
  BorderRadiusBorderRadiusSm,
  ColorFoundationNeutralBlack200,
  ColorFoundationNeutralGray400,
  ColorFoundationRedRed200,
} from '../../../design-tokens/js/variables.js';

@Component({
  tag: 'sr-text-area',
  styleUrl: 'sr-text-area.css',
  shadow: false,
  scoped: true,
})
export class SrTextArea {
  /**
   *  Text label to place alongside the input
   */
  @Prop()
  label?: string;

  /**
   *  Indicate the purpose of the text field
   */
  @Prop({ reflect: true, attribute: 'helperText' })
  helperText?: string;

  /**
   *  The text to display when the input is empty
   */
  @Prop()
  placeholder: string = 'Placeholder text';

  /**
   * Error State
   */
  @Prop({ reflect: true, attribute: 'isError' })
  isError: boolean = false;
  /**
   * Emitted when the input's value changes
   */
  @Event()
  _change;

  changeHandler(e) {
    this._change.emit(e);
  }

  renderInputStyling() {
    return css`
      padding: ${SpacerSpacer2}px;
      border: 1px solid
        ${!this.isError
          ? ColorFoundationNeutralBlack200
          : ColorFoundationRedRed200};
      border-radius: ${BorderRadiusBorderRadiusSm}px !important;
      ::placeholder {
        color: ${ColorFoundationNeutralGray400};
      }
      :focus {
        outline: none !important;
      }
      :focus:not(:read-only) {
        border: 2px solid ${ColorFoundationNeutralBlack200};
        transition: all 0.2s 0s ease-out;
      }
      :invalid {
        border: 2px solid ${ColorFoundationRedRed200};
        transition: all 0.2s 0s ease-out;
      }
    `;
  }

  render() {
    return (
      <sr-stack orientation="vertical" gap="spacer-1">
        {this.label && (
          <sr-label variant={this.isError ? 'error' : 'default'}>
            {this.label}
          </sr-label>
        )}
        <textarea
          class={this.renderInputStyling()}
          onChange={event => this.changeHandler(event)}
          placeholder={this.placeholder}
        ></textarea>
        {this.helperText && (
          <sr-help-text variant={this.isError ? 'error' : 'default'}>
            {this.helperText}
          </sr-help-text>
        )}
      </sr-stack>
    );
  }
}
