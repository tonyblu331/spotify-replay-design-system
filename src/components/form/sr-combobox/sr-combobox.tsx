import { css } from '@emotion/css';
import { Component, Event, h, Prop } from '@stencil/core';
import {
  SpacerSpacer1,
  SpacerSpacer2,
} from '../../../design-tokens/js/variables.js';

/**
 * Combobox allows selection of a single value from the options specified in the transcluded slot.
 * This component expects that the HTML elements passed in the slot are of type <option>
 * If you want an empty option to be selectable, add an empty `<option>`. The last option will be the initial selection.
 *
 * @property `label` (default '')
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
  label?: string;

  /**
   * Emitted when the one of the options in the combobox is selected
   */
  @Event()
  selected;

  _isOpen: boolean = false;
  onClickHandler() {
    this._isOpen = true;
  }

  selectHandler(e) {
    this._isOpen = false;
    this.selected.emit(e);
  }

  whiteChevronUp =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAAAiElEQVRIie3UQQqAIBCF4c5QJnWJLtYmPGouOk38LXJhkpU2QQvfRlCYjwFnqqqk5BcBamAE1FdAC8zsWYBeGtCAdcDqTgtoKSDsYBDt6AToIvd5UAy4eE+D7oDX0FMgG0oFkqFc4DEEKG8Osv8/x3my+JsBMG+BCGTCTiaEdpJXr5GoV1ISzwYwx34vzH2u3AAAAABJRU5ErkJggg==';

  whiteChevronDown =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA+ElEQVRoge3YSw6CMBRGYdihEgkDXb3GROJjA5gcJzZeDUUQaEv8z7iP+6UjyDKllFJKKaWGBJTABTgCq9jzfAasgRNwAyrfohw486rxLo4QUD1ncl2B3Le45r0kMC0IgLprQ9GyISrGg2iA4tvGTcvGO7ALNLudpfTMsu17QHTMaIQ5KBpmMoQ5MDhmcoQ5OBhmNoS5YHbM7Ahz0WyYYAhz4eSY4Ahz8WSYaAgzwGhMdIQZ5GdMMggz0GBMcggzWG9MsghXH0zyCFcXZjEIF/5vh6S+cXrleZllvMRnHZjlIFwtmOUhXMAKOAB7Evy9pJRSSiml/qwH6IVh8kHODn4AAAAASUVORK5CYII=';

  // prettier-ignore
  render() {
    return (
      <sr-stack orientation="vertical" gap="spacer-0">
        {this.label && <sr-label>{this.label}</sr-label>}
          <select onClick={this.onClickHandler}
            class={css`
              padding-left: ${SpacerSpacer2}px;
              padding-top: ${SpacerSpacer1}px;
              padding-bottom: ${SpacerSpacer1}px;
              background-image: url(${this._isOpen ? this.whiteChevronUp :this.whiteChevronDown});
              background-size: 25px 25px;
              background-position: 98%;
              background-repeat: no-repeat;
            `}
            onChange={e => this.selectHandler(e)}
          >
            <slot></slot>
          </select>
      </sr-stack>
    );
  }
}
