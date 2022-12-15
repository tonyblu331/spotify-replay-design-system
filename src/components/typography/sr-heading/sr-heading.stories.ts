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
      options: [1, 2, 3, 4, 5, 6],
      description:
        'The header level, which styles applies six different levels of dimensions and styles',
    },
    color: {
      control: {
        type: 'color',
      },
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

export const LargestHeader = Template.bind({});
LargestHeader.args = {
  ...defaultOption,
  level: 1,
  text: 'h1 - Big Title 3000',
};

export const Subheading = Template.bind({});
Subheading.args = {
  ...defaultOption,
  level: 3,
  text: 'A subheading',
};
