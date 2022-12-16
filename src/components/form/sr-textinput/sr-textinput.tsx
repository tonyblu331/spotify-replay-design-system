import { css } from '@emotion/css';
import { Component, Event, h, Prop } from '@stencil/core';
import {
  SpacerSpacer2,
  BorderRadiusBorderRadiusSm,
  BorderRadiusBorderRadiusFull,
  ColorFoundationNeutralBlack200,
  ColorFoundationNeutralGray400,
  ColorFoundationRedRed200,
  ColorFoundationNeutralWhite200,
  ColorFoundationUiGreenUiGreen,
} from '../../../design-tokens/js/variables.js';
/**
 *  A <sr-text-input> component is an input component used to enter critical information required to use the service or user information.
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
  type: 'number' | 'text' | 'email' | 'password' = 'text';

  /**
   *  Indicate Error state
   */
  @Prop({ reflect: true, attribute: 'isError' })
  isError: boolean = false;

  /**
   *  Indicate Success state
   */
  @Prop({ reflect: true, attribute: 'isSuccess' })
  isSuccess: boolean = false;

  /**
   * Emitted when the input's value changes
   */
  @Event()
  _change;

  isValid: boolean = false;

  changeHandler(e) {
    this._change.emit(e);
  }

  renderInputStyling() {
    return css`
      padding: ${SpacerSpacer2}px;
      border: 1px solid
        ${this.isSuccess
          ? ColorFoundationUiGreenUiGreen
          : ColorFoundationNeutralBlack200};
      border-radius: ${this.variant === 'rounded'
        ? BorderRadiusBorderRadiusFull
        : BorderRadiusBorderRadiusSm}px;
      ::placeholder {
        color: ${ColorFoundationNeutralGray400};
      }
      :focus {
        outline: none !important;
      }
      :focus:not(:read-only) {
        border: 2px solid
          ${this.isSuccess
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
      <sr-stack orientation="vertical" gap="spacer-1">
        {this.label && (
          <sr-label
            variant={
              this.isError ? 'error' : this.isSuccess ? 'success' : 'default'
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
              this.isError ? 'error' : this.isSuccess ? 'success' : 'default'
            }
          >
            {this.helperText}
          </sr-help-text>
        )}
      </sr-stack>
    );
  }
}
