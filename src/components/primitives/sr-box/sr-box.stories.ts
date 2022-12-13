export default {
  parameters: {
    viewMode: 'docs',
  },
  title: 'Primitives/Box',
  argTypes: {
    backgroundColor: {
      description:
        "Specify background fill inside box component <br> `'default'` `'primary'` `'secondary'` `'dark'`",
      options: ['default', 'primary', 'secondary', 'dark'],
      control: { type: 'select' },
      defaultValue: 'default',
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
      defaultValue: 'dark',
    },
    border: {
      description:
        'Enable or disable border around box component <br> `boolean`',
      control: { type: 'boolean' },
      defaultValue: 'false',
    },
    borderColor: {
      description: "Specify border color <br> `'default'` `'primary'`",
      options: ['default', 'primary'],
      control: { type: 'select' },
      defaultValue: 'default',
    },
    borderRadius: {
      description: "Specify border radius <br> `'default'` `'none'`",
      options: ['default', 'none'],
      control: { type: 'radio' },
      defaultValue: 'default',
    },
    padding: {
      description:
        "Control amount of white space around child components inside of a box <br> `'small'` `'large'` `'none'`",
      options: ['small', 'large', 'none'],
      control: { type: 'select' },
      defaultValue: 'small',
    },
    paddingTop: {
      description:
        "Control amount of white space at top side only <br> `'small'` `'large'` `'none'`",
      options: ['small', 'large', 'none'],
      control: { type: 'select' },
    },
    paddingRight: {
      description:
        "Control amount of white space at right side only <br> `'small'` `'large'` `'none'`",
      options: ['small', 'large', 'none'],
      control: { type: 'select' },
    },
    paddingBottom: {
      description:
        "Control amount of white space at bottom side only <br> `'small'` `'large'` `'none'`",
      options: ['small', 'large', 'none'],
      control: { type: 'select' },
    },
    paddingLeft: {
      description:
        "Control amount of white space at left side only <br> `'small'` `'large'` `'none'`",
      options: ['small', 'large', 'none'],
      control: { type: 'select' },
    },
    margin: {
      description:
        "Control amount of white space around the box component itself <br> `'small'` `'large'` `'none'`",
      options: ['small', 'large', 'none'],
      control: { type: 'select' },
      defaultValue: 'small',
    },
    marginTop: {
      description:
        "Control amount of space at top side only <br> `'small'` `'large'` `'none'`",
      options: ['small', 'large', 'none'],
      control: { type: 'select' },
    },
    marginRight: {
      description:
        "Control amount of space at right side only <br> `'small'` `'large'` `'none'`",
      options: ['small', 'large', 'none'],
      control: { type: 'select' },
    },
    marginBottom: {
      description:
        "Control amount of space at bottom side only <br> `'small'` `'large'` `'none'`",
      options: ['small', 'large', 'none'],
      control: { type: 'select' },
    },
    marginLeft: {
      description:
        "Control amount of space at left side only <br> `'small'` `'large'` `'none'`",
      options: ['small', 'large', 'none'],
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

const Template = args => `
  <sr-box 
    backgroundColor=${args.backgroundColor}
    color=${args.color ? args.color : ''}
    padding=${args.padding} 
    margin=${args.margin}
    paddingTop=${args.paddingTop}
    paddingRight=${args.paddingRight}
    paddingBottom=${args.paddingBottom}
    paddingLeft=${args.paddingLeft}
    marginTop=${args.marginTop}
    marginRight=${args.marginRight}
    marginBottom=${args.marginBottom}
    marginLeft=${args.marginLeft}
    hasBorder=${args.border}
    borderColor=${args.borderColor}
    borderRadius=${args.borderRadius}
    width=${args.width}
    height=${args.height}
    boxShadow=${args.boxShadow}
    >
    <sr-heading level="1">${args.text || 'Header'}</sr-heading>
    <sr-paragraph>Show content here!</sr-paragraph>
  </sr-box>
`;

export const BoxPadding = Template.bind({});
BoxPadding.args = {
  padding: 'large',
  backgroundColor: 'primary',
  text: 'Box Padding',
  color: 'bright',
};

export const BoxMargin = Template.bind({});
BoxMargin.args = {
  margin: 'large',
  backgroundColor: 'primary',
  text: 'Box Margin',
  color: 'bright',
};

export const BoxBorder = Template.bind({});
BoxBorder.args = {
  border: 'true',
  text: 'Box Border',
};

export const BoxShadow = Template.bind({});
BoxShadow.args = {
  backgroundColor: 'primary',
  boxShadow: 'level4',
  text: 'Box Shadow',
  color: 'bright',
};
