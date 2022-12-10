export default {
  title: 'Components/Header',
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
        max: 6,
      },
      description: 'The header level (h1-h6)',
    },
  },
};

const Template = args => `
  <hs-header level="${args.level}" text-align="${args.textAlign}">
    ${args.text}
  </hs-header>
`;

export const ComponentStory = Template.bind({});
ComponentStory.args = {
  textAlign: 'left',
  level: 1,
};
