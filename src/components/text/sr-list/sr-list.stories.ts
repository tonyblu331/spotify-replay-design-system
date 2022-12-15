export default {
  title: 'Components/Text Content/List',
  argTypes: {
    items: {
      description:
        'The items to list. Please wrap each item in a pair of `<li>` tags.',
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
  items: `<li>Item 1</li> <li>Item 2</li>`,
};

export const Ordered = Template.bind({});
Ordered.args = {
  items: `<li>Item 1</li> <li>Item 2</li>`,
  ordered: true,
};

export const LongText = Template.bind({});
LongText.args = {
  items: `<li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li><li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</li>`,
};
