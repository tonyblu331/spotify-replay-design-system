export default {
  title: 'Components/Paragraph',
  argTypes: {
    text: {
      description: 'Transcluded text to be injected in the component slot',
      defaultValue: 'Lorem ipsum dolor sit amet',
      control: { type: 'text' },
    },
  },
};

const Template = args => `
  <sr-paragraph>${args.text}</sr-paragraph>
`;

export const ComponentStory = Template.bind({});
ComponentStory.args = {};
