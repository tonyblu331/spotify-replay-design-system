export default {
  title: 'Components/Form/Label',
  argTypes: {
    content: {
      description: 'Text to be injected in the component slot',
      control: { type: 'text' },
    },
    variant: {
      options: ['default', 'success', 'error'],
      control: { type: 'select' },
      description: "Label variant state <br> `'default'` `'success'` `'error'`",
    },
  },
};

const Template = args => {
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');
  return `
  <sr-label ${argsProps}>
    ${args.content}
  </sr-label>
`;
};

export const LabelDefault = Template.bind({});
LabelDefault.args = {
  variant: 'default',
  content: 'Default Label',
};

export const LabelSuccess = Template.bind({});
LabelSuccess.args = {
  variant: 'success',
  content: 'Success Label',
};

export const LabelError = Template.bind({});
LabelError.args = {
  variant: 'error',
  content: 'Error Label',
};
