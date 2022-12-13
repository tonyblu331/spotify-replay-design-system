// export default {
//   title: 'Components/Displays/Card',
//   argTypes: {
//     backgroundColor: {
//       description: 'Background color variant',
//       options: ['default', 'primary', 'secondary', 'dark'],
//       control: { type: 'select' },
//       defaultValue: 'default',
//     },
//     padding: {
//       description: 'Spacing inside card',
//       options: ['small', 'large'],
//       control: { type: 'radio' },
//       defaultValue: 'small',
//     },
//     margin: {
//       description: 'Spacing outside card',
//       options: ['small', 'large'],
//       control: { type: 'radio' },
//       defaultValue: 'small',
//     },
//     border: {
//       description: 'Show card border',
//       control: { type: 'boolean' },
//       defaultValue: 'false',
//     },
//   },
// };

// const Template = args => `
//   <sr-card
//     backgroundColor=${args.backgroundColor}
//     padding=${args.padding}
//     margin=${args.margin}
//     hasBorder=${args.border}
//     >
//     <sr-heading level="1">Header</sr-heading>
//     <sr-paragraph>Show content here!</sr-paragraph>
//   </sr-card>
// `;

// export const CardPadding = Template.bind({});
// CardPadding.args = {
//   padding: 'small',
// };

// export const CardMargin = Template.bind({});
// CardMargin.args = {
//   margin: 'large',
//   backgroundColor: 'primary',
// };

// export const CardBorder = Template.bind({});
// CardBorder.args = {
//   border: 'true',
// };
