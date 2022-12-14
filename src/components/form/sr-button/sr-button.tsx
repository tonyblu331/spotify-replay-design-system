import { Component, h, Prop, Event } from '@stencil/core';
// import { css } from '@emotion/css';
import { ButtonType } from './index.js';

/**
 * Button component with variable size and variants
 * @property `variant` (default neutral)
 * @property `size` (default medium)
 * @emits `clicked` on button click
 */
@Component({
  tag: 'sr-button',
  styleUrl: 'sr-button.css',
  shadow: false, // Disable Shadow DOM to benefit from global styles defined in Design Tokens
  scoped: true,
})
export class SRButton {
  @Prop({ reflect: true })
  text: string = 'I’m a Re:Play Button';
  /**
   * Type of button.
   */
  @Prop()
  variant:
    | 'roundBtn'
    | 'squaredBtn'
    | 'outlinedRoundBtn'
    | 'outlinedSquaredBtn'
    | 'blackRoundButton'
    | 'blackSquaredBtn'
    | 'blackOutlinedRoundBtn'
    | 'blackOutlinedSquaredBtn' = 'roundBtn';

  @Prop({ reflect: true, attribute: 'isDisabled' })
  isDisabled: boolean = false;

  /**
   * Emitted when button is clicked
   */
  @Event()
  clicked;

  clickHandler(e) {
    document.getElementById('button').focus();
    this.clicked.emit(e);
  }

  renderText() {
    console.log(this.text);

    return <sr-text fontWeight="bold">{this.text}</sr-text>;
  }

  getBorderRadius() {
    return ButtonType[this.variant].default.borderRadius;
  }

  getPropertyValue(key, property) {
    const buttonType = ButtonType[key];
    if (buttonType) {
      if (this.isDisabled) return buttonType.disabled[property];
      else return buttonType.default[property];
    }
  }

  getBackgroundDefaultColor() {
    return this.getPropertyValue(this.variant, 'backgroundColor');
  }

  getTextDefaultColor() {
    return this.getPropertyValue(this.variant, 'color');
  }

  getDefaultBorderColor() {
    return this.getPropertyValue(this.variant, 'borderColor');
  }

  renderBorder() {
    return this.getPropertyValue(this.variant, 'isBorder');
  }

  getBorderWidth() {
    return this.getPropertyValue(this.variant, 'borderWidth');
  }

  renderButton() {
    return (
      <sr-box
        id="button"
        paddingTop="spacer-1"
        paddingBottom="spacer-1"
        paddingLeft="spacer-4"
        paddingRight="spacer-4"
        borderRadius={this.getBorderRadius() as any}
        backgroundColor={this.getBackgroundDefaultColor()}
        color={this.getTextDefaultColor()}
        borderColor={this.getDefaultBorderColor()}
        isBorder={this.renderBorder()}
        borderWidth={this.getBorderWidth()}
        _hoverBackground={ButtonType[this.variant].hover.backgroundColor}
        _activeBackground={ButtonType[this.variant].pressed.backgroundColor}
        _hoverBorderWidth={ButtonType[this.variant].hover.borderWidth as any}
        _hoverBorderColor={ButtonType[this.variant].hover.borderColor}
        _activeBorderWidth={ButtonType[this.variant].pressed.borderWidth}
        _focusBorderWidth={ButtonType[this.variant].focused.borderWidth as any}
        _focusBorderColor={ButtonType[this.variant].focused.borderColor}
        _focusBackgroundColor={ButtonType[this.variant].focused.backgroundColor}
        isDisabled={this.isDisabled}
        isClickable={!this.isDisabled}
        onClick={e => this.clickHandler(e)}
      >
        {this.renderText()}
      </sr-box>
    );
  }

  render() {
    return this.renderButton();
  }
}
