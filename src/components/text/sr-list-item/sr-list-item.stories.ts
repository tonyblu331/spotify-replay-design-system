export default {
  title: 'Components/Text Content/ListItem',
  argTypes: {
    content: {
      description: 'Content to be injected in the component slot',
      defaultValue: 'Lorem ipsum dolor sit amet',
      control: { type: 'text' },
    },
  },
};

const Template = args => `
  <sr-list-item>
    ${args.content}
  </sr-list-item>
`;

export const TextListItem = Template.bind({});
TextListItem.args = {};
