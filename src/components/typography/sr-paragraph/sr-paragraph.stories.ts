export default {
  title: 'Components/Typography/Paragraph',
  argTypes: {
    text: {
      description: 'Text to be injected in the component slot',
      control: { type: 'text' },
    },
  },
};

const Template = args => `
  <sr-paragraph>${args.text}</sr-paragraph>
`;

export const Paragraph = Template.bind({});
Paragraph.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
};
