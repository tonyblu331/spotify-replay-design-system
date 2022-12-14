import { Component, h, Prop, Event } from '@stencil/core';

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
})
export class SRButton {
  /**
   * Type of button. TODOJCS add available variants as | expression
   */
  @Prop()
  variant = 'neutral';

  /**
   * Button size. TODOJCS add available variants as | expr
   */
  @Prop()
  size = 'medium';

  /**
   * Emitted when button is clicked
   */
  @Event()
  clicked;

  clickHandler(e) {
    this.clicked.emit(e);
  }

  render() {
    return (
      <button
        class={`${this.variant} ${this.size}`}
        onClick={e => this.clickHandler(e)}
      >
        <slot></slot>
      </button>
    );
  }
}
