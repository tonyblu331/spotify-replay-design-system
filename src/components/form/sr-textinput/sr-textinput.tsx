import { Component, Event, h, Prop } from '@stencil/core';

/**
 * Text input that emits event on change
 * @property `label`
 * @property `placeholder` (default 'Input text')
 * @emits `change`
 */
@Component({
  tag: 'sr-textinput',
  styleUrl: 'sr-textinput.css',
  shadow: false,
  scoped: true,
})
export class SRTextinput {
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

  // TODOJCS replace margin right by tony's spacer token
  // TODOJCS horiz orientation ok?
  render() {
    return (
      <sr-stack orientation="horizontal">
        {this.label && <sr-text marginRight={1}>{this.label}</sr-text>}
        <input
          onChange={this.changeHandler}
          type="text"
          placeholder={this.placeholder}
        ></input>
      </sr-stack>
    );
  }
}
