import { Component, Event, h, Host, Prop } from '@stencil/core';

/**
 * Combobox allows selection of a single value from the options specified in the transcluded slot.
 * This component expects that the HTML elements passed in the slot are of type <option>
 *
 * @property `labelText` (default '')
 * @property `allowEmpty` (default true)
 * @emits `selected` when a value is selected
 *
 * ### Example
 * ```html
 * <sr-combobox labelText="My favorite movie">
 *  <option>Frozen</option>
 *  <option>Scarface</option>
 * </sr-combobox>
 * ```
 */
@Component({
  tag: 'sr-combobox',
  styleUrl: 'sr-combobox.css',
  shadow: false,
  scoped: true,
})
export class SRCombobox {
  /**
   * Text string to add to a label to describe the combobox
   */
  @Prop()
  labelText?: string;

  /**
   * If true, the checkbox will allow the selection of an empty value
   */
  @Prop()
  allowEmpty: boolean = true;

  /**
   * Emitted when the one of the options in the combobox is selected
   */
  @Event({})
  selected;

  selectHandler(e) {
    this.selected.emit(e);
  }

  componentWillLoad() {
    console.log('loading combo with allowEmpty=', this.allowEmpty);
  }

  render() {
    return (
      <Host>
        {this.labelText && <label>{this.labelText}</label>}
        <select onChange={e => this.selectHandler(e)}>
          {/* TODO the empty option is always being shown, even when stories are passing false */}
          {this.allowEmpty && <option></option>}
          <slot></slot>
        </select>
      </Host>
    );
  }
}
