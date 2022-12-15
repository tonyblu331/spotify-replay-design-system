import { Component, h, Event, EventEmitter } from '@stencil/core';
import { breadcrumbStore } from '../sr-breadcrumb-item/sr-breadcrumb-item.store';

@Component({
  tag: 'sr-breadcrumb',
  styleUrl: 'sr-breadcrumb.css',
  shadow: false,
  scoped: true,
})
export class SrBreadcrumb {
  @Event({ eventName: 'valueChange' })
  valueChange: EventEmitter;

  componentWillLoad() {
    breadcrumbStore.onChange('selectedValue', newValue => {
      this.valueChange.emit(newValue);
    });
  }

  render() {
    return (
      <sr-stack orientation="horizontal" gap="spacer-1">
        <slot></slot>
      </sr-stack>
    );
  }
}
