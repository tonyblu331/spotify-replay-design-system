export default {
  title: 'Components/Typography/Header',
  argTypes: {
    text: {
      description: 'Text to be injected in the component slot',
      control: { type: 'text' },
    },
    textAlign: {
      options: ['left', 'center', 'right', 'justify'],
      control: { type: 'radio' },
      description: 'The header alignment',
    },
    level: {
      control: {
        type: 'select',
      },
      options: [
        'h1',
        'h2-regular',
        'h2-bold',
        'h3-regular',
        'h3-bold',
        'h4-regular',
        'h4-bold',
        'h5-regular',
        'h5-bold',
        'h6-regular',
        'h6-bold',
      ],
      description:
        "The header level <br> `'h1'` `'h2-regular'` `'h2-bold'` `'h3-regular'` `'h3-bold'` `'h4-regular'` `'h4-bold'` `'h5-regular'` `'h5-bold'` `'h6-regular'` `'h6-bold'`",
    },
    color: {
      control: {
        type: 'color',
      },
      description: 'Specify Font Color <br> `color`',
    },
  },
};

const Template = args => {
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');
  return `
  <sr-heading ${argsProps}">
    ${args.text || 'Lorem ipsum dolor sit amet'}
  </sr-heading>
`;
};

const defaultOption = {
  textAlign: 'left',
  color: 'black',
};

export const Header1 = Template.bind({});
Header1.args = {
  ...defaultOption,
  level: 'h1',
  text: 'H1 - Big Title 900',
};

export const Header2Regular = Template.bind({});
Header2Regular.args = {
  ...defaultOption,
  level: 'h2-regular',
  text: 'H2 -  Main Section Title 400',
};

export const Header2Bold = Template.bind({});
Header2Bold.args = {
  ...defaultOption,
  level: 'h2-bold',
  text: 'H2 -  Main Section Title 700',
};

export const Header3Regular = Template.bind({});
Header3Regular.args = {
  ...defaultOption,
  level: 'h3-regular',
  text: 'H3 - Subheading 1 400',
};

export const Header3Bold = Template.bind({});
Header3Bold.args = {
  ...defaultOption,
  level: 'h3-bold',
  text: 'H3 - Subheading 1 700',
};

export const Header4Regular = Template.bind({});
Header4Regular.args = {
  ...defaultOption,
  level: 'h4-regular',
  text: 'H4 - Subheading 2  400',
};

export const Header4Bold = Template.bind({});
Header4Bold.args = {
  ...defaultOption,
  level: 'h4-bold',
  text: 'H4 - Subheading 2  700',
};

export const Header5Regular = Template.bind({});
Header5Regular.args = {
  ...defaultOption,
  level: 'h5-regular',
  text: 'H5 - Subheading 3 400',
};

export const Header5Bold = Template.bind({});
Header5Bold.args = {
  ...defaultOption,
  level: 'h5-bold',
  text: 'H5 - Subheading 3 700',
};

export const Header6Regular = Template.bind({});
Header6Regular.args = {
  ...defaultOption,
  level: 'h6-regular',
  text: 'H6 - Subheading 4 400',
};

export const Header6Bold = Template.bind({});
Header6Bold.args = {
  ...defaultOption,
  level: 'h6-bold',
  text: 'H6 - Subheading 4 700',
};
