import { css } from '@emotion/css';
import { Component, Event, h, Prop } from '@stencil/core';
import {
  SpacerSpacer2,
  BorderRadiusBorderRadiusSm,
  ColorFoundationNeutralBlack200,
  ColorFoundationNeutralGray400,
  ColorFoundationRedRed200,
} from '../../../design-tokens/js/variables.js';
/**
 * Text input that emits event on change
 * @property `label`
 * @property `placeholder` (default 'Input text')
 * @emits `change`
 */
@Component({
  tag: 'sr-text-input',
  styleUrl: 'sr-textinput.css',
  shadow: false,
  scoped: true,
})
export class SRTextInput {
  /**
   *  Text label to place alongside the input
   */
  @Prop()
  label?: string;

  /**
   *  The text to display when the input is empty
   */
  @Prop()
  placeholder: string = 'Input text';

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
      border: 1px solid ${ColorFoundationNeutralBlack200};
      border-radius: ${BorderRadiusBorderRadiusSm}px;

      ::placeholder {
        color: ${ColorFoundationNeutralGray400};
      }
      :focus {
        outline: none !important;
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
        {this.label && <sr-label>{this.label}</sr-label>}
        <input
          class={this.renderInputStyling()}
          onChange={this.changeHandler}
          type="number"
          placeholder={this.placeholder}
          value="5"
          min="18"
        ></input>
      </sr-stack>
    );
  }
}
