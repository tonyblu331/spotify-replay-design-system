export default {
  parameters: {
    viewMode: 'docs',
  },
  title: 'Primitives/Text',
  argTypes: {
    as: {
      description:
        "Specify wrapper HTML element <br> `'div'` `'h1'` `'h2'` `'h3'` `'h4'` `'h5'` `'h6'` `'p'` `'blockquote'` `'caption'` `'endnote'` `'span'`",
      options: [
        'div',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'p',
        'blockquote',
        'caption',
        'endnote',
      ],
      control: { type: 'select' },
    },
    color: {
      description: "Specify font color <br> `'black'` `'white'`",
      options: ['black', 'white'],
      control: { type: 'radio' },
    },
    fontSize: {
      description: 'Specify font size <br> `number`',
      control: { type: 'number' },
    },
    fontWeight: {
      description:
        "Specify font weight <br> `'regular'` `'bold'` `'extraBold'`",
      options: ['regular', 'bold', 'extraBold'],
      control: { type: 'select' },
    },
    padding: {
      description: 'Control amount of white space around text <br> `number`',
      control: { type: 'number' },
    },
    paddingTop: {
      description:
        'Control amount of white space at top side only <br> `number`',
      control: { type: 'number' },
    },
    paddingRight: {
      description:
        'Control amount of white space at right side only <br> `number`',
      control: { type: 'number' },
    },
    paddingBottom: {
      description:
        'Control amount of white space at bottom side only <br> `number`',
      control: { type: 'number' },
    },
    paddingLeft: {
      description:
        'Control amount of white space at left side only <br> `number`',
      control: { type: 'number' },
    },
    margin: {
      description: 'Control amount of white space around itself <br> `number`',
      control: { type: 'number' },
    },
    marginTop: {
      description: 'Control amount of space at top side only <br> `number`',
      control: { type: 'number' },
    },
    marginRight: {
      description: 'Control amount of space at right side only <br> `number`',
      control: { type: 'number' },
    },
    marginBottom: {
      description: 'Control amount of space at bottom side only <br> `number`',
      control: { type: 'number' },
    },
    marginLeft: {
      description: 'Control amount of space at left side only <br> `number`',
      control: { type: 'number' },
    },
    letterSpacing: {
      description:
        'Define the space between characters in a text <br> `number`',
      control: { type: 'number' },
    },
    lineHeight: {
      description: 'Define the height of a line <br> `number`',
      control: { type: 'number' },
    },
  },
};

const Template = args => {
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');

  return `
  <sr-text ${argsProps}>
    ${(args.text, 'Header')}
  </sr-text>
`;
};

const defaultOptions = {
  as: 'h1',
  color: 'black',
};

export const Text = Template.bind({});
Text.args = {
  ...defaultOptions,
  text: 'Lorem ipsum dolor sit amet',
};
