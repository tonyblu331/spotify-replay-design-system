import { Component, h, Prop } from '@stencil/core';
import { AVATAR_LARGE, AVATAR_MEDIUM, AVATAR_SMALL } from '~/type';
import { Avatar } from '.';

@Component({
  tag: 'sr-avatar',
  styleUrl: 'sr-avatar.css',
  shadow: false,
  scoped: true,
})
export class SrAvatar {
  /**
   * Indicate size of avatar
   */
  @Prop({ reflect: true })
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Indicate variant status of avatar
   */
  @Prop({ reflect: true })
  variant: AVATAR_SMALL | AVATAR_MEDIUM | AVATAR_LARGE;

  /**
   * Get Image
   */
  @Prop({ reflect: true })
  image;

  /**
   * Get Username
   */
  @Prop({ reflect: true })
  username;

  /**
   * Get Username
   */
  @Prop({ reflect: true })
  name;

  getVariantColorValue() {
    return Avatar[this.size][this.variant].color;
  }

  getSizeValue(key) {
    return Avatar[this.size][key] || 0;
  }

  getClassName() {
    return `absolute-${this.size}`;
  }
  render() {
    return (
      <sr-stack orientation="horizontal" gap="spacer-1">
        <sr-stack class="container" gap="spacer-0" orientation="horizontal">
          <sr-box
            class="circle"
            minWidth={this.getSizeValue('size')}
            maxWidth={this.getSizeValue('size')}
            minHeight={this.getSizeValue('size')}
            maxHeight={this.getSizeValue('size')}
            padding="spacer-0"
            margin="spacer-0"
            isCircle
            backgroundColor="black"
          ></sr-box>
          {this.size != 'large' && (
            <sr-box
              class={this.getClassName()}
              minWidth={this.getSizeValue('sizeStatus')}
              maxWidth={this.getSizeValue('sizeStatus')}
              minHeight={this.getSizeValue('sizeStatus')}
              maxHeight={this.getSizeValue('sizeStatus')}
              padding="spacer-0"
              margin="spacer-0"
              backgroundColor={this.getVariantColorValue()}
              isCircle
            ></sr-box>
          )}
        </sr-stack>
        {this.size === 'small' && this.variant === 'labeled' && (
          <sr-stack orientation="vertical" gap="spacer-0">
            <sr-text fontSize={12} fontWeight="regular">
              {' '}
              {this.name}
            </sr-text>
            <sr-text fontSize={12} fontWeight="regular">
              {' '}
              {this.username}
            </sr-text>
          </sr-stack>
        )}
      </sr-stack>
    );
  }
}
