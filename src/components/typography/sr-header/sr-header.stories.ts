export default {
  title: 'Components/Typography/Header',
  argTypes: {
    text: {
      description: 'Text to be injected in the component slot',
      defaultValue: 'Lorem ipsum dolor sit amet',
      control: { type: 'text' },
    },
    textAlign: {
      options: ['left', 'center', 'right', 'justify'],
      control: { type: 'radio' },
      description: 'The header alignment',
    },
    level: {
      control: {
        type: 'number',
        min: 1,
        max: 2,
      },
      description: 'The header level (h1-h2)',
      defaultValue: 1,
    },
  },
};

const Template = args => `
  <sr-header level="${args.level}" textAlign="${args.textAlign}">
    ${args.text}
  </sr-header>
`;

export const LeftAlignedLevel1 = Template.bind({});
LeftAlignedLevel1.args = {
  textAlign: 'left',
  level: 1,
};
