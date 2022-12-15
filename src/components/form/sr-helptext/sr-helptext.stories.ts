export default {
  title: 'Components/Form/Help text',
  argTypes: {
    content: {
      description: 'Text to be injected in the component slot',
      control: { type: 'text' },
    },
    variant: {
      options: ['default', 'success', 'error'],
      control: { type: 'select' },
      description:
        "Help text variant state <br> `'default'` `'success'` `'error'`",
    },
  },
};

const Template = args => {
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');
  return `
  <sr-help-text ${argsProps}>
    ${args.content}
  </sr-help-text>
`;
};

export const HelpTextDefault = Template.bind({});
HelpTextDefault.args = {
  variant: 'default',
  content: 'Helper Text Default Status',
};

export const HelpTextSuccess = Template.bind({});
HelpTextSuccess.args = {
  variant: 'success',
  content: 'Helper Text Valid Status',
};

export const HelpTextError = Template.bind({});
HelpTextError.args = {
  variant: 'error',
  content: 'Helper Text Invalid Status',
};
