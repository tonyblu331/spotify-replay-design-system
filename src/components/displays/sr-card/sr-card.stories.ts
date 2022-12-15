export default {
  title: 'Components/Displays/Card',
  argTypes: {
    content: {
      description: 'Markup to be injected in the component slot',
    },
    title: {
      description: 'Text for the card header',
      control: { type: 'text' },
    },
    hideBorder: {
      description: 'Hide card border (and shadow)',
      control: { type: 'boolean' },
    },
  },
};

const Template = args => {
  const content = args.content;
  delete args.content;
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');
  return `
  <sr-card ${argsProps}>
    ${content}
  </sr-card>
`;
};

export const Bordered = Template.bind({});
Bordered.args = {
  title: 'Lorem ipsum (a classic)',
  content: `
    <sr-paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</sr-paragraph>
`,
  hideBorder: false,
};

export const Borderless = Template.bind({});
Borderless.args = {
  title: 'Listing',
  content: `
    The available items are:
    <sr-list>
        <li>Item 1</li> <li>Item 2</li>
    </sr-list>
`,
  hideBorder: true,
};
