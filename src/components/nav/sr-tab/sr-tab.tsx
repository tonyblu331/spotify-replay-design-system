import { Component, h, Event, EventEmitter } from '@stencil/core';
import { tabHeaderStore } from '../sr-tab-item/sr-tab-item.store';

@Component({
  tag: 'sr-tab',
  styleUrl: 'sr-tab.css',
  shadow: false,
  scoped: true,
})
export class SrTab {
  @Event({ eventName: 'valueChange' })
  valueChange: EventEmitter;

  componentWillLoad() {
    tabHeaderStore.onChange('selectedValue', newValue => {
      this.valueChange.emit(newValue);
    });
  }

  render() {
    return (
      <sr-stack orientation="horizontal" gap="spacer-0">
        <slot></slot>
      </sr-stack>
    );
  }
}
