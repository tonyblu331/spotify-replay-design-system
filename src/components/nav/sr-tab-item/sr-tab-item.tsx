import { Component, h, Prop } from '@stencil/core';
import { tabHeaderStore } from './sr-tab-item.store';

@Component({
  tag: 'sr-tab-item',
  styleUrl: 'sr-tab-item.css',
  shadow: false,
  scoped: true,
})
export class SrTab {
  /**
   * Specify Tab header
   */
  @Prop({ reflect: true })
  name: string;

  /**
   * Specify Tab content
   */
  @Prop({ reflect: true })
  href?: string;

  /**
   * Selected Tab header
   */
  @Prop({ reflect: true, attribute: 'selectedItem' })
  selectedItem?: string;

  /**
   * Inactive Tab
   */
  @Prop({ reflect: true, attribute: 'inActive' })
  inActive?: boolean = false;

  selected?: boolean = false;
  clickHandler() {
    if (!this.inActive) tabHeaderStore.state.selectedValue = this.name;
  }

  componentWillLoad() {
    if (this.selectedItem === this.name) this.selected = true;
    tabHeaderStore.onChange('selectedValue', newValue => {
      this.selected = this.name === newValue;
      this.selectedItem = newValue;
    });
  }

  render() {
    return (
      <sr-anchor
        selected={this.selected}
        variant="underline"
        onClick={this.clickHandler.bind(this)}
        href={this.href}
        inActive={this.inActive}
      >
        {this.name}
      </sr-anchor>
    );
  }
}
