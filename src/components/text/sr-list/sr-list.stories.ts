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

export const Unordered = Template.bind({});
Unordered.args = {
  items: `<li>Item 1</li><li>Item 1</li>`,
};

export const Ordered = Template.bind({});
Ordered.args = {
  items: `<li>Item 1</li><li>Item 1</li>`,
  ordered: true,
};
