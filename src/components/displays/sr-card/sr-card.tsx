// import { Component, h, Prop } from '@stencil/core';
// import { css } from '@emotion/css';
// import {
//   SpacingLarge,
//   SpacingSmall,
//   ColorFoundationUiGreenUiGreenDark,
//   ColorFoundationPinkPink300,
//   ColorFoundationRoseRose75,
//   ColorFoundationNeutralPureBlak,
// } from '../../../design-tokens/js/variables.js';

// /**
//  * The `<sr-card>` component is used to group various pieces of content
//  * into a container.
//  * @property `padding` (default 'SpacingSmall')
//  * @property `margin`
//  * @property `backgroundColor` (default 'default')
//  * @property `hasBorder` (default false)
//  *
//  * ### Example
//  * ```html
//  *  <sr-card>
//  *    <sr-heading level="1">Card Header</sr-heading>
//  *    <sr-paragraph>Show content here!</sr-paragraph>
//  *  </sr-card>
//  * ```
//  */
// @Component({
//   tag: 'sr-card',
//   styleUrl: 'sr-card.css',
//   shadow: false,
//   scoped: true,
// })
// export class SRCard {
//   /**
//    * TODOROSE Update type referring to design
//    */
//   @Prop({ reflect: true })
//   padding: SpacingLarge | SpacingSmall = SpacingSmall;

//   /**
//    * TODOROSE Update type referring to design
//    */
//   @Prop({ reflect: true })
//   margin: SpacingLarge | SpacingSmall;

//   /**
//    * TODOROSE Update type referring to design
//    */
//   @Prop({ reflect: true, attribute: 'backgroundColor' })
//   backgroundColor: 'primary' | 'secondary' | 'default' | 'dark' = 'default';

//   @Prop({ reflect: true, attribute: 'hasBorder' })
//   hasBorder: boolean = false;

//   paddingHandler() {
//     const pad = this.padding === 'small' ? SpacingSmall : SpacingLarge;
//     return `${pad.top}px
//       ${pad.right}px
//       ${pad.bottom}px
//       ${pad.left}px`;
//   }

//   marginHandler() {
//     if (this.margin) {
//       const mg = this.margin === 'small' ? SpacingSmall : SpacingLarge;
//       return `${mg.top}px
//         ${mg.right}px
//         ${mg.bottom}px
//         ${mg.left}px`;
//     }
//   }

//   /**
//    *
//    * TODOROSE Update color referring to design
//    */
//   backgroundHandler() {
//     switch (this.backgroundColor) {
//       case 'primary':
//         return ColorFoundationUiGreenUiGreenDark;
//       case 'secondary':
//         return ColorFoundationPinkPink300;
//       case 'dark':
//         return ColorFoundationRoseRose75;
//       default:
//         break;
//     }
//   }

//   renderStyling() {
//     return css`
//       padding: ${this.paddingHandler()};
//       margin: ${this.marginHandler()};
//       background-color: ${this.backgroundHandler()};
//       border: 1px solid
//         ${this.hasBorder ? ColorFoundationNeutralPureBlak : 'transparent'};
//       border-radius: 6px;
//     `;
//   }

//   render() {
//     return (
//       <div class={this.renderStyling()}>
//         <slot></slot>
//       </div>
//     );
//   }
// }
