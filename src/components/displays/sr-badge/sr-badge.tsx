import { css } from '@emotion/css';
import { Component, h, Prop } from '@stencil/core';
import { BadgeVariants } from '.';

@Component({
  tag: 'sr-badge',
  styleUrl: 'sr-badge.css',
  shadow: false,
  scoped: true,
})
export class SrBadge {
  /**
   * Indicate wording to show inside badge
   */
  @Prop({ reflect: true })
  text: string;

  /**
   * Indicate the color of badge
   */
  @Prop({ reflect: true })
  variant:
    | 'default'
    | 'red'
    | 'yellow'
    | 'orange'
    | 'aqua'
    | 'pink'
    | 'purple'
    | 'lime'
    | 'blue'
    | 'withIcon' = 'default';

  /**
   * Indicate type of Badge whether rounded or squared
   */
  @Prop({ reflect: true })
  type: 'rounded' | 'squared' = 'rounded';

  getPropertyValue(key) {
    return BadgeVariants[this.variant][key];
  }

  icon =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEgMTIuMDQ0MkMxIDcuOTIzMSAzLjI2NjExIDQuMzMxNzkgNi42MjAxMiAyLjQ0NzUxTDcuNTg0NDcgNC4xOTk5NUM0Ljg0ODE0IDUuNzQzOSAzIDguNjc3OTggMyAxMi4wNDQyQzMgMTUuMzMyMyA0Ljc2MzE4IDE4LjIwODcgNy4zOTYgMTkuNzc5MUw2LjQ2NDg0IDIxLjU1MjVDMy4xOTYyOSAxOS42NDU4IDEgMTYuMTAxMyAxIDEyLjA0NDJaIiBmaWxsPSIjMUVCOTU1Ii8+CjxwYXRoIGQ9Ik0xNy41MzQyIDIxLjU1MjVDMjAuODAzMiAxOS42NDU4IDIzIDE2LjEwMTggMjMgMTIuMDQ0MkMyMyA3LjkyNzk4IDIwLjczODggNC4zMzk2IDE3LjM5MTEgMi40NTM4NkwxNi40NjA5IDQuMjI1ODNDMTkuMTcyOSA1Ljc3NjEyIDIxIDguNjk2NTMgMjEgMTIuMDQ0MkMyMSAxNS4zNDY5IDE5LjIyMTIgMTguMjMzNiAxNi41Njk4IDE5Ljc5OTZMMTcuNTM0MiAyMS41NTI1WiIgZmlsbD0iIzFFQjk1NSIvPgo8cGF0aCBkPSJNMTUuNjA1IDE4LjA0NTdDMTcuNjM5MiAxNi44MjEgMTkgMTQuNTkxNiAxOSAxMi4wNDQyQzE5IDkuNDY1NTggMTcuNjA2IDcuMjEyNjUgMTUuNTMwMyA1Ljk5ODI5TDE0LjM2NTcgOC4yMTU1OEMxNS42NDY1IDkuMDA4NTQgMTYuNSAxMC40MjcgMTYuNSAxMi4wNDQyQzE2LjUgMTMuNjQ3NyAxNS42NjExIDE1LjA1NTQgMTQuMzk4NCAxNS44NTIzTDE1LjYwNSAxOC4wNDU3WiIgZmlsbD0iIzFFQjk1NSIvPgo8cGF0aCBkPSJNOS40OTQxNCAxNS43ODI1QzguMjkxNSAxNC45NzQ5IDcuNSAxMy42MDE4IDcuNSAxMi4wNDQyQzcuNSAxMC4zNzY3IDguNDA2NzQgOC45MjExNCA5Ljc1MzkxIDguMTQzOEw4LjU0ODM0IDUuOTUyODhDNi40MjkyIDcuMTU2MDEgNSA5LjQzMjg2IDUgMTIuMDQ0MkM1IDE0LjU2MzcgNi4zMzA1NyAxNi43NzE3IDguMzI3NjQgMTguMDA0Nkw5LjQ5NDE0IDE1Ljc4MjVaIiBmaWxsPSIjMUVCOTU1Ii8+CjxwYXRoIGQ9Ik0xMiAxNC4wNDQyQzEzLjEwNDUgMTQuMDQ0MiAxNCAxMy4xNDg3IDE0IDEyLjA0NDJDMTQgMTAuOTM5NyAxMy4xMDQ1IDEwLjA0NDIgMTIgMTAuMDQ0MkMxMC44OTU1IDEwLjA0NDIgMTAgMTAuOTM5NyAxMCAxMi4wNDQyQzEwIDEzLjE0ODcgMTAuODk1NSAxNC4wNDQyIDEyIDE0LjA0NDJaIiBmaWxsPSIjMUVCOTU1Ii8+Cjwvc3ZnPgo=';
  getIcon() {
    return css`
      background-image: url(${this.icon});
      background-size: 20px 20px;
      background-position: 99%;
      background-repeat: no-repeat;
      width: 20px;
    `;
  }

  render() {
    return (
      <sr-box
        backgroundColor={this.getPropertyValue('backgroundColor')}
        color={this.getPropertyValue('color')}
        paddingLeft="spacer-2"
        paddingRight="spacer-2"
        margin="spacer-0"
        borderRadius={this.type === 'rounded' ? 'full' : 'small'}
      >
        <sr-stack orientation="horizontal" gap="spacer-1">
          {this.variant === 'withIcon' && (
            <sr-box
              class={this.getIcon()}
              backgroundColor="transparent"
              margin="spacer-0"
            ></sr-box>
          )}
          <sr-text fontWeight="bold" fontSize={13}>
            {this.text}
          </sr-text>
        </sr-stack>
      </sr-box>
    );
  }
}
