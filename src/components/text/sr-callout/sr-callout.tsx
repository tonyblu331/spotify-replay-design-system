import { css } from '@emotion/css';
import { Component, h, Prop } from '@stencil/core';
import { CalloutType } from '.';
/**
 * Callout components provide a way to draw the user's attention.
 * @property `headerText` (default is the type property, capitalized)
 * @property `type` (default 'note')
 *
 * ### Example
 * ```html
 * <!-- Warning -->
 * <sr-callout type="warning">Experimental features may imply longer loading times.</sr-callout>
 */
@Component({
  tag: 'sr-callout',
  styleUrl: 'sr-callout.css',
  shadow: false,
  scoped: true,
})
export class SRCallout {
  /**
   * The title to display in the topmost part of the callout
   */
  @Prop({ mutable: true, attribute: 'headerText' })
  headerText?: string;

  /**
   * Indicates the importance of the callout. The default is 'informative', for the lowest level of importance.
   */
  @Prop({ reflect: true })
  type:
    | 'informative'
    | 'warning'
    | 'success'
    | 'template'
    | 'new'
    | 'critical' = 'informative';

  /**
   * The detail to display in the topmost part of the callout
   */
  @Prop({ mutable: true, attribute: 'content' })
  content?: string;

  getPropertyValue(key) {
    return CalloutType[this.type][key];
  }

  getIcon() {
    return css`
      background-image: url(${this.getPropertyValue('icon')});
      background-size: 20px 20px;
      background-position: 99%;
      background-repeat: no-repeat;
      width: 20px;
    `;
  }
  render() {
    return (
      <sr-box
        padding="spacer-4"
        boxShadow="level2"
        color={this.getPropertyValue('color')}
        backgroundColor={this.getPropertyValue('backgroundColor')}
        borderRadius="small"
        borderColor={this.getPropertyValue('borderColor')}
        borderWidth="thin"
        isBorder
      >
        <sr-flex direction="horizontal" gap="spacer-2">
          <sr-box
            class={this.getIcon()}
            backgroundColor="transparent"
            marginTop="spacer-0"
          ></sr-box>
          <sr-stack orientation="vertical" gap="spacer-1">
            <sr-text as="h3" fontWeight="bold">
              {this.headerText}
            </sr-text>
            <sr-text as="p">{this.content}</sr-text>
          </sr-stack>
        </sr-flex>
      </sr-box>
    );
  }
}
