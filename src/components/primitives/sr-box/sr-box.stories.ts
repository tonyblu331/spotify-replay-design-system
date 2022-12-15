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
      description: 'Specify background fill inside box component <br> `color`',
      control: { type: 'color' },
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
    minWidth: {
      description: "Specify min width of box component <br> `'number'``",
      control: { type: 'number' },
    },
    minHeight: {
      description: "Specify min height of box component <br> `'number'`",
      control: { type: 'number' },
    },
    maxWidth: {
      description: "Specify max width of box component <br> `'number'``",
      control: { type: 'number' },
    },
    maxHeight: {
      description: "Specify max height of box component <br> `'number'`",
      control: { type: 'number' },
    },
    color: {
      description: 'Specify text color inside box component <br> `color`',
      control: { type: 'color' },
    },
    isBorder: {
      description:
        'Enable or disable border around box component <br> `boolean`',
      control: { type: 'boolean' },
    },
    borderColor: {
      description: 'Specify border color <br> `color`',
    },
    borderRadius: {
      description: "Specify border radius <br> `'small'` `'medium'` `'full'`",
      options: ['small', 'medium', 'full'],
      control: { type: 'radio' },
    },
    borderWidth: {
      description: "Specify border width <br> `'thin'` `'thick'`",
      options: ['thin', 'medium', 'thick'],
      control: { type: 'select' },
    },
    padding: {
      description:
        "Control amount of white space around child components inside of a box <br> `'spacer-1'` `'spacer-2'` `'spacer-3'` `'spacer-4'` `'spacer-5'` `'spacer-6'` `'spacer-7'` `'spacer-8'`",
      options: [
        'spacer-1',
        'spacer-2',
        'spacer-3',
        'spacer-4',
        'spacer-5',
        'spacer-6',
        'spacer-7',
        'spacer-8',
      ],
      control: { type: 'select' },
    },
    paddingTop: {
      description:
        "Control amount of white space at top side only <br> `'spacer-1'` `'spacer-2'` `'spacer-3'` `'spacer-4'` `'spacer-5'` `'spacer-6'` `'spacer-7'` `'spacer-8'`",
      options: [
        'spacer-1',
        'spacer-2',
        'spacer-3',
        'spacer-4',
        'spacer-5',
        'spacer-6',
        'spacer-7',
        'spacer-8',
      ],
      control: { type: 'select' },
    },
    paddingRight: {
      description:
        "Control amount of white space at right side only <br> `'spacer-1'` `'spacer-2'` `'spacer-3'` `'spacer-4'` `'spacer-5'` `'spacer-6'` `'spacer-7'` `'spacer-8'`",
      options: [
        'spacer-1',
        'spacer-2',
        'spacer-3',
        'spacer-4',
        'spacer-5',
        'spacer-6',
        'spacer-7',
        'spacer-8',
      ],
      control: { type: 'select' },
    },
    paddingBottom: {
      description:
        "Control amount of white space at bottom side only <br> `'spacer-1'` `'spacer-2'` `'spacer-3'` `'spacer-4'` `'spacer-5'` `'spacer-6'` `'spacer-7'` `'spacer-8'`",
      options: [
        'spacer-1',
        'spacer-2',
        'spacer-3',
        'spacer-4',
        'spacer-5',
        'spacer-6',
        'spacer-7',
        'spacer-8',
      ],
      control: { type: 'select' },
    },
    paddingLeft: {
      description:
        "Control amount of white space at left side only <br> `'spacer-1'` `'spacer-2'` `'spacer-3'` `'spacer-4'` `'spacer-5'` `'spacer-6'` `'spacer-7'` `'spacer-8'`",
      options: [
        'spacer-1',
        'spacer-2',
        'spacer-3',
        'spacer-4',
        'spacer-5',
        'spacer-6',
        'spacer-7',
        'spacer-8',
      ],
      control: { type: 'select' },
    },
    margin: {
      description:
        "Control amount of white space around the box component itself <br> `'spacer-1'` `'spacer-2'` `'spacer-3'` `'spacer-4'` `'spacer-5'` `'spacer-6'` `'spacer-7'` `'spacer-8'`",
      options: [
        'spacer-1',
        'spacer-2',
        'spacer-3',
        'spacer-4',
        'spacer-5',
        'spacer-6',
        'spacer-7',
        'spacer-8',
      ],
      control: { type: 'select' },
    },
    marginTop: {
      description:
        "Control amount of space at top side only <br> `'spacer-1'` `'spacer-2'` `'spacer-3'` `'spacer-4'` `'spacer-5'` `'spacer-6'` `'spacer-7'` `'spacer-8'`",
      options: [
        'spacer-1',
        'spacer-2',
        'spacer-3',
        'spacer-4',
        'spacer-5',
        'spacer-6',
        'spacer-7',
        'spacer-8',
      ],
      control: { type: 'select' },
    },
    marginRight: {
      description:
        "Control amount of space at right side only <br> `'spacer-1'` `'spacer-2'` `'spacer-3'` `'spacer-4'` `'spacer-5'` `'spacer-6'` `'spacer-7'` `'spacer-8'`",
      options: [
        'spacer-1',
        'spacer-2',
        'spacer-3',
        'spacer-4',
        'spacer-5',
        'spacer-6',
        'spacer-7',
        'spacer-8',
      ],
      control: { type: 'select' },
    },
    marginBottom: {
      description:
        "Control amount of space at bottom side only <br> `'spacer-1'` `'spacer-2'` `'spacer-3'` `'spacer-4'` `'spacer-5'` `'spacer-6'` `'spacer-7'` `'spacer-8'`",
      options: [
        'spacer-1',
        'spacer-2',
        'spacer-3',
        'spacer-4',
        'spacer-5',
        'spacer-6',
        'spacer-7',
        'spacer-8',
      ],
      control: { type: 'select' },
    },
    marginLeft: {
      description:
        "Control amount of space at left side only <br> `'spacer-1'` `'spacer-2'` `'spacer-3'` `'spacer-4'` `'spacer-5'` `'spacer-6'` `'spacer-7'` `'spacer-8'`",
      options: [
        'spacer-1',
        'spacer-2',
        'spacer-3',
        'spacer-4',
        'spacer-5',
        'spacer-6',
        'spacer-7',
        'spacer-8',
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
    <sr-heading level="h2-bold">${args.text || 'Header'}</sr-heading>
    <sr-text>Show content here!</sr-text>
  </sr-box>
`;
};

const defaultOptions = {
  as: 'div',
  backgroundColor: 'var(--sr-color-foundation-ui-green-ui-green)',
  minHeight: '100px',
  color: 'white',
  padding: 'spacer-2',
};

export const BoxPadding = Template.bind({ as: 'div' });
BoxPadding.args = {
  ...defaultOptions,
  padding: 'spacer-2',
  text: 'Box Padding',
};

export const BoxMargin = Template.bind({});
BoxMargin.args = {
  ...defaultOptions,
  margin: 'spacer-6',
  text: 'Box Margin',
};

export const BoxBorder = Template.bind({});
BoxBorder.args = {
  isBorder: 'true',
  text: 'Box Border',
  padding: 'spacer-2',
};

export const BoxShadow = Template.bind({});
BoxShadow.args = {
  ...defaultOptions,
  boxShadow: 'level4',
  text: 'Box Shadow',
};
