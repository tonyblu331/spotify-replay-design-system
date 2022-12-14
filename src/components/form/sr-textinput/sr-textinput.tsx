import { Component, h, Prop } from '@stencil/core';

/**
 * Text input component TODOJCS document
 */
@Component({
  tag: 'sr-textinput',
  styleUrl: 'sr-textinput.css',
  shadow: false,
  scoped: true,
})
export class SRTextinput {
  /**
   *  TODOJCS describe prop
   */
  @Prop()
  label?: string;

  /**
   *  TODOJCS describe prop
   */
  @Prop()
  placeholder: string = 'Input text';

  componentWillLoad() {
    console.log('loading ti with', this.label, this.placeholder);
  }

  // TODOJCS replace margin right by tony's spacer token
  // TODOJCS horiz orientation ok?
  render() {
    return (
      <sr-stack orientation="horizontal">
        {this.label && <sr-text marginRight={1}>{this.label}</sr-text>}
        <input type="text" placeholder={this.placeholder}></input>
      </sr-stack>
    );
  }
}
