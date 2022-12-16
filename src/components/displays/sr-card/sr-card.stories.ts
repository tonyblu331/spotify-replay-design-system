export default {
  title: 'Components/Displays/Card',
  argTypes: {
    content: {
      description: 'Markup to be injected in the component slot',
    },
    heading: {
      description: 'Text for the card header',
      control: { type: 'text' },
    },
    primaryButtonText: {
      description: 'Text for the primary button on the card',
      control: { type: 'text' },
    },
    secondaryButtonText: {
      description: 'Text for the secondary button on the card',
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

export const ButtonLess = Template.bind({});
ButtonLess.args = {
  heading: 'About',
  content: `<sr-paragraph>This nameless artist was born and raised in Ohio. He lived from 1983 to 2019, and his musical career was nothing short of amazing. There are so many different takes on his style that he has created subcultures of addicted listeners and critics worldwide.`,
};

export const Bordered = Template.bind({});
Bordered.args = {
  heading: 'Lorem ipsum (a classic)',
  content: `
    <sr-paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</sr-paragraph>
`,
  hideBorder: false,
  primaryButtonText: 'OK',
};

export const Borderless = Template.bind({});
Borderless.args = {
  heading: 'Song listing',
  content: `
    The available songs are:
    <sr-list>
        <li>Song 1</li> <li>Song 2</li>
    </sr-list>
`,
  hideBorder: true,
  primaryButtonText: 'Add more songs',
  secondaryButtonText: 'Return',
};
