export default {
  parameters: {
    viewMode: 'docs',
  },
  title: 'Primitives/Box',
  argTypes: {
    as: {
      description:
        "Specify wrapper HTML element <br> `'div'` `'section'` `'article'` `'span'`",
      options: ['div', 'section', 'article', 'span'],
      control: { type: 'select' },
    },
    backgroundColor: {
      description:
        "Specify background fill inside box component <br> `'default'` `'primary'` `'secondary'` `'dark'`",
      options: ['default', 'primary', 'secondary', 'dark'],
      control: { type: 'select' },
    },
    width: {
      description:
        "Specify width of box component <br> `'small'` `'medium'` `'large'`",
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    height: {
      description:
        "Specify height of box component <br> `'small'` `'medium'` `'large'`",
      options: ['small', 'medium', 'large'],
      control: { type: 'select' },
    },
    color: {
      description:
        "Specify text color inside box component <br> `'dark'` `'bright'`",
      options: ['dark', 'bright'],
      control: { type: 'radio' },
    },
    isBorder: {
      description:
        'Enable or disable border around box component <br> `boolean`',
      control: { type: 'boolean' },
    },
    borderColor: {
      description: "Specify border color <br> `'default'` `'primary'`",
      options: ['default', 'primary'],
      control: { type: 'select' },
    },
    borderRadius: {
      description: "Specify border radius <br> `'default'` `'none'`",
      options: ['default', 'none'],
      control: { type: 'radio' },
    },
    borderWidth: {
      description: "Specify border width <br> `'thin'` `'thick'`",
      options: ['thin', 'thick'],
      control: { type: 'radio' },
    },
    padding: {
      description:
        "Control amount of white space around child components inside of a box <br> `'spacer8'` `'spacer16'` `'spacer24'` `'spacer32'` `'spacer40'` `'spacer48'` `'spacer56'` `'spacer64'`",
      options: [
        'spacer8',
        'spacer16',
        'spacer24',
        'spacer32',
        'spacer40',
        'spacer48',
        'spacer56',
        'spacer64',
      ],
      control: { type: 'select' },
    },
    paddingTop: {
      description:
        "Control amount of white space at top side only <br> `'spacer8'` `'spacer16'` `'spacer24'` `'spacer32'` `'spacer40'` `'spacer48'` `'spacer56'` `'spacer64'`",
      options: [
        'spacer8',
        'spacer16',
        'spacer24',
        'spacer32',
        'spacer40',
        'spacer48',
        'spacer56',
        'spacer64',
      ],
      control: { type: 'select' },
    },
    paddingRight: {
      description:
        "Control amount of white space at right side only <br> `'spacer8'` `'spacer16'` `'spacer24'` `'spacer32'` `'spacer40'` `'spacer48'` `'spacer56'` `'spacer64'`",
      options: [
        'spacer8',
        'spacer16',
        'spacer24',
        'spacer32',
        'spacer40',
        'spacer48',
        'spacer56',
        'spacer64',
      ],
      control: { type: 'select' },
    },
    paddingBottom: {
      description:
        "Control amount of white space at bottom side only <br> `'spacer8'` `'spacer16'` `'spacer24'` `'spacer32'` `'spacer40'` `'spacer48'` `'spacer56'` `'spacer64'`",
      options: [
        'spacer8',
        'spacer16',
        'spacer24',
        'spacer32',
        'spacer40',
        'spacer48',
        'spacer56',
        'spacer64',
      ],
      control: { type: 'select' },
    },
    paddingLeft: {
      description:
        "Control amount of white space at left side only <br> `'spacer8'` `'spacer16'` `'spacer24'` `'spacer32'` `'spacer40'` `'spacer48'` `'spacer56'` `'spacer64'`",
      options: [
        'spacer8',
        'spacer16',
        'spacer24',
        'spacer32',
        'spacer40',
        'spacer48',
        'spacer56',
        'spacer64',
      ],
      control: { type: 'select' },
    },
    margin: {
      description:
        "Control amount of white space around the box component itself <br> `'spacer8'` `'spacer16'` `'spacer24'` `'spacer32'` `'spacer40'` `'spacer48'` `'spacer56'` `'spacer64'`",
      options: [
        'spacer8',
        'spacer16',
        'spacer24',
        'spacer32',
        'spacer40',
        'spacer48',
        'spacer56',
        'spacer64',
      ],
      control: { type: 'select' },
    },
    marginTop: {
      description:
        "Control amount of space at top side only <br> `'spacer8'` `'spacer16'` `'spacer24'` `'spacer32'` `'spacer40'` `'spacer48'` `'spacer56'` `'spacer64'`",
      options: [
        'spacer8',
        'spacer16',
        'spacer24',
        'spacer32',
        'spacer40',
        'spacer48',
        'spacer56',
        'spacer64',
      ],
      control: { type: 'select' },
    },
    marginRight: {
      description:
        "Control amount of space at right side only <br> `'spacer8'` `'spacer16'` `'spacer24'` `'spacer32'` `'spacer40'` `'spacer48'` `'spacer56'` `'spacer64'`",
      options: [
        'spacer8',
        'spacer16',
        'spacer24',
        'spacer32',
        'spacer40',
        'spacer48',
        'spacer56',
        'spacer64',
      ],
      control: { type: 'select' },
    },
    marginBottom: {
      description:
        "Control amount of space at bottom side only <br> `'spacer8'` `'spacer16'` `'spacer24'` `'spacer32'` `'spacer40'` `'spacer48'` `'spacer56'` `'spacer64'`",
      options: [
        'spacer8',
        'spacer16',
        'spacer24',
        'spacer32',
        'spacer40',
        'spacer48',
        'spacer56',
        'spacer64',
      ],
      control: { type: 'select' },
    },
    marginLeft: {
      description:
        "Control amount of space at left side only <br> `'spacer8'` `'spacer16'` `'spacer24'` `'spacer32'` `'spacer40'` `'spacer48'` `'spacer56'` `'spacer64'`",
      options: [
        'spacer8',
        'spacer16',
        'spacer24',
        'spacer32',
        'spacer40',
        'spacer48',
        'spacer56',
        'spacer64',
      ],
      control: { type: 'select' },
    },
    boxShadow: {
      description:
        "Control shadow effects around box component <br> `'level0'` `'level1'` `'level2'` `'level3'` `'level4'`",
      options: ['level0', 'level1', 'level2', 'level3', 'level4'],
      control: { type: 'select' },
    },
  },
};

const Template = args => {
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');

  return `
  <sr-box 
    ${argsProps}
    >
    <sr-heading level="1">${(args.text, 'Header')}</sr-heading>
    <sr-paragraph>Show content here!</sr-paragraph>
  </sr-box>
`;
};

const defaultOptions = {
  as: 'div',
  backgroundColor: 'primary',
};

export const BoxPadding = Template.bind({ as: 'div' });
BoxPadding.args = {
  ...defaultOptions,
  padding: 'spacer8',
  text: 'Box Padding',
  color: 'bright',
};

export const BoxMargin = Template.bind({});
BoxMargin.args = {
  margin: 'spacer8',
  backgroundColor: 'primary',
  text: 'Box Margin',
  color: 'bright',
};

export const BoxBorder = Template.bind({});
BoxBorder.args = {
  isBorder: 'true',
  text: 'Box Border',
};

export const BoxShadow = Template.bind({});
BoxShadow.args = {
  backgroundColor: 'primary',
  boxShadow: 'level4',
  text: 'Box Shadow',
  color: 'bright',
};
