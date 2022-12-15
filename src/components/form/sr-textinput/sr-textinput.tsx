import { css } from '@emotion/css';
import { Component, Event, h, Prop } from '@stencil/core';
import {
  SpacerSpacer2,
  // BorderRadiusBorderRadiusSm,
  BorderRadiusBorderRadiusFull,
  ColorFoundationNeutralBlack200,
  ColorFoundationNeutralGray400,
  ColorFoundationRedRed200,
  ColorFoundationNeutralWhite200,
  ColorFoundationUiGreenUiGreen,
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
   *  Specify Button variant
   */
  @Prop({ reflect: true })
  variant: 'rounded' | 'squared' = 'squared';
  /**
   *  Text label to place alongside the input
   */
  @Prop()
  label?: string;

  /**
   * Specify current value in text field
   */
  @Prop()
  value?: any = '';

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
   *  Indicate whether this text field is required or not
   */
  @Prop({ reflect: true, attribute: 'isRequired' })
  isRequired: boolean = false;

  /**
   *  Indicate whether this text field is readonly or not
   */
  @Prop({ reflect: true, attribute: 'isReadOnly' })
  isReadOnly: boolean = false;

  /**
   *  Indicate whether this text field is disabled or not
   */
  @Prop({ reflect: true, attribute: 'isDisabled' })
  isDisabled: boolean = false;

  /**
   *  Specify type of text field
   */
  @Prop({ reflect: true })
  type: 'number' | 'text' | 'email' = 'text';

  /**
   * Emitted when the input's value changes
   */
  @Event()
  _change;

  isValid: boolean = false;

  componentWillLoad() {
    if (this.value != '' && !this.isDisabled && !this.isReadOnly) {
      this.isValid = true;
    }
  }

  changeHandler(e) {
    this.value = e.target.value;
    this.isValid = e.target.validity.valid;
    this._change.emit(e);
  }

  renderInputStyling() {
    return css`
      padding: ${SpacerSpacer2}px;
      border: 1px solid
        ${this.isValid
          ? ColorFoundationUiGreenUiGreen
          : ColorFoundationNeutralBlack200};
      border-radius: ${this.variant === 'rounded'
        ? BorderRadiusBorderRadiusFull
        : 4}px;
      margin: 5px 0;

      ::placeholder {
        color: ${ColorFoundationNeutralGray400};
      }
      :focus {
        outline: none !important;
      }
      :focus:not(:read-only) {
        border: 2px solid
          ${this.isValid
            ? ColorFoundationUiGreenUiGreen
            : ColorFoundationNeutralBlack200};
        transition: all 0.2s 0s ease-out;
      }
      :invalid:not(:read-only) {
        border: 2px solid ${ColorFoundationRedRed200};
        transition: all 0.2s 0s ease-out;
      }
      :disabled {
        background-color: ${ColorFoundationNeutralWhite200};
        border: none;
      }
    `;
  }
  render() {
    return (
      <sr-stack orientation="vertical" gap="spacer-0">
        {this.label && (
          <sr-label
            variant={
              this.isRequired && !this.isValid
                ? 'error'
                : this.isValid && !this.isDisabled && !this.isReadOnly
                ? 'success'
                : 'default'
            }
          >
            {this.label}
          </sr-label>
        )}
        <input
          class={this.renderInputStyling()}
          onInput={event => this.changeHandler(event)}
          placeholder={this.placeholder}
          type={this.type}
          required={this.isRequired}
          readonly={this.isReadOnly}
          value={this.value ? this.value : ''}
          disabled={this.isDisabled}
        ></input>
        {this.helperText && (
          <sr-help-text
            variant={
              this.isRequired && !this.isValid
                ? 'error'
                : this.isValid && !this.isDisabled && !this.isReadOnly
                ? 'success'
                : 'default'
            }
          >
            {this.helperText}
          </sr-help-text>
        )}
      </sr-stack>
    );
  }
}
