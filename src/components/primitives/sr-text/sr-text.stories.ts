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
      description:
        "Control amount of white space around text <br> `'spacer-h1'` `'spacer-h2'` `'spacer-h3'` `'spacer-h4'` `'spacer-h5'` `'spacer-h6'` `'spacer-text'` `'spacer-caption'` `'spacer-endnote'` `'spacer-0'`",
      options: [
        'spacer-h1',
        'spacer-h2',
        'spacer-h3',
        'spacer-h4',
        'spacer-h5',
        'spacer-h6',
        'spacer-text',
        'spacer-caption',
        'spacer-endnote',
        'spacer-0',
      ],
      control: { type: 'select' },
    },
    paddingTop: {
      description:
        "Control amount of white space at top side only <br> `'spacer-h1'` `'spacer-h2'` `'spacer-h3'` `'spacer-h4'` `'spacer-h5'` `'spacer-h6'` `'spacer-text'` `'spacer-caption'` `'spacer-endnote'` `'spacer-0'`",
      options: [
        'spacer-h1',
        'spacer-h2',
        'spacer-h3',
        'spacer-h4',
        'spacer-h5',
        'spacer-h6',
        'spacer-text',
        'spacer-caption',
        'spacer-endnote',
        'spacer-0',
      ],
      control: { type: 'select' },
    },
    paddingRight: {
      description:
        "Control amount of white space at right side only <br> `'spacer-h1'` `'spacer-h2'` `'spacer-h3'` `'spacer-h4'` `'spacer-h5'` `'spacer-h6'` `'spacer-text'` `'spacer-caption'` `'spacer-endnote'` `'spacer-0'`",
      options: [
        'spacer-h1',
        'spacer-h2',
        'spacer-h3',
        'spacer-h4',
        'spacer-h5',
        'spacer-h6',
        'spacer-text',
        'spacer-caption',
        'spacer-endnote',
        'spacer-0',
      ],
      control: { type: 'select' },
    },
    paddingBottom: {
      description:
        "Control amount of white space at bottom side only <br> `'spacer-h1'` `'spacer-h2'` `'spacer-h3'` `'spacer-h4'` `'spacer-h5'` `'spacer-h6'` `'spacer-text'` `'spacer-caption'` `'spacer-endnote'` `'spacer-0'` ",
      options: [
        'spacer-h1',
        'spacer-h2',
        'spacer-h3',
        'spacer-h4',
        'spacer-h5',
        'spacer-h6',
        'spacer-text',
        'spacer-caption',
        'spacer-endnote',
        'spacer-0',
      ],
      control: { type: 'select' },
    },
    paddingLeft: {
      description:
        "Control amount of white space at left side only <br> `'spacer-h1'` `'spacer-h2'` `'spacer-h3'` `'spacer-h4'` `'spacer-h5'` `'spacer-h6'` `'spacer-text'` `'spacer-caption'` `'spacer-endnote'` `'spacer-0'``",
      options: [
        'spacer-h1',
        'spacer-h2',
        'spacer-h3',
        'spacer-h4',
        'spacer-h5',
        'spacer-h6',
        'spacer-text',
        'spacer-caption',
        'spacer-endnote',
        'spacer-0',
      ],
      control: { type: 'select' },
    },
    margin: {
      description:
        "Control amount of white space around itself <br> `'spacer-h1'` `'spacer-h2'` `'spacer-h3'` `'spacer-h4'` `'spacer-h5'` `'spacer-h6'` `'spacer-text'` `'spacer-caption'` `'spacer-endnote'` `'spacer-0'`",
      options: [
        'spacer-h1',
        'spacer-h2',
        'spacer-h3',
        'spacer-h4',
        'spacer-h5',
        'spacer-h6',
        'spacer-text',
        'spacer-caption',
        'spacer-endnote',
        'spacer-0',
      ],
      control: { type: 'select' },
    },
    marginTop: {
      description:
        "Control amount of space at top side only <br> `'spacer-h1'` `'spacer-h2'` `'spacer-h3'` `'spacer-h4'` `'spacer-h5'` `'spacer-h6'` `'spacer-text'` `'spacer-caption'` `'spacer-endnote'` `'spacer-0'`",
      options: [
        'spacer-h1',
        'spacer-h2',
        'spacer-h3',
        'spacer-h4',
        'spacer-h5',
        'spacer-h6',
        'spacer-text',
        'spacer-caption',
        'spacer-endnote',
        'spacer-0',
      ],
      control: { type: 'select' },
    },
    marginRight: {
      description:
        "Control amount of space at right side only <br> `'spacer-h1'` `'spacer-h2'` `'spacer-h3'` `'spacer-h4'` `'spacer-h5'` `'spacer-h6'` `'spacer-text'` `'spacer-caption'` `'spacer-endnote'` `'spacer-0'`",
      options: [
        'spacer-h1',
        'spacer-h2',
        'spacer-h3',
        'spacer-h4',
        'spacer-h5',
        'spacer-h6',
        'spacer-text',
        'spacer-caption',
        'spacer-endnote',
        'spacer-0',
      ],
      control: { type: 'select' },
    },
    marginBottom: {
      description:
        "Control amount of space at bottom side only <br> `'spacer-h1'` `'spacer-h2'` `'spacer-h3'` `'spacer-h4'` `'spacer-h5'` `'spacer-h6'` `'spacer-text'` `'spacer-caption'` `'spacer-endnote'` `'spacer-0'`",
      options: [
        'spacer-h1',
        'spacer-h2',
        'spacer-h3',
        'spacer-h4',
        'spacer-h5',
        'spacer-h6',
        'spacer-text',
        'spacer-caption',
        'spacer-endnote',
        'spacer-0',
      ],
      control: { type: 'select' },
    },
    marginLeft: {
      description:
        "Control amount of space at left side only <br> `'spacer-h1'` `'spacer-h2'` `'spacer-h3'` `'spacer-h4'` `'spacer-h5'` `'spacer-h6'` `'spacer-text'` `'spacer-caption'` `'spacer-endnote'` `'spacer-0'`",
      options: [
        'spacer-h1',
        'spacer-h2',
        'spacer-h3',
        'spacer-h4',
        'spacer-h5',
        'spacer-h6',
        'spacer-text',
        'spacer-caption',
        'spacer-endnote',
        'spacer-0',
      ],
      control: { type: 'select' },
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
    ${args.text || 'Header'}
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
  text: 'Tune in to the sound of your soul',
};
