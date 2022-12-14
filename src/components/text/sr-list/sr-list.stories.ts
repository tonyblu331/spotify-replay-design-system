export default {
  title: 'Components/Text Content/List',
  argTypes: {
    items: {
      description: 'Items to be injected in the component slot',
    },
    ordered: {
      description:
        'Dictates whether to use an ordered list instead of an unordered list.',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
  },
};

const Template = ({ items, ordered }) => `
  <sr-list ordered="${ordered}">
    ${items}
  </sr-list>
`;

export const unordered = Template.bind({});
unordered.args = {
  items: `<sr-list-item>Item 1</sr-list-item><sr-list-item>Item 1</sr-list-item>`,
};

export const ordered = Template.bind({});
ordered.args = {
  items: `<sr-list-item>Item 1</sr-list-item><sr-list-item>Item 1</sr-list-item>`,
  ordered: true,
};
