export default {
  title: 'Components/Form/Help Text',
  argTypes: {
    content: {
      description: 'Text to be injected in the component slot',
      control: { type: 'text' },
    },
    variant: {
      options: ['default', 'success', 'error'],
      control: { type: 'select' },
      description: 'Help text variants <br> `default` `success` `error`',
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
  <sr-help-text ${argsProps}>
    ${content}
  </sr-help-text>
`;
};

export const HelpTextDefault = Template.bind({});
HelpTextDefault.args = {
  variant: 'default',
  content: 'Helpful helptext to help you',
};

export const HelpTextSuccess = Template.bind({});
HelpTextSuccess.args = {
  variant: 'success',
  content: 'Text confirms successful state',
};

export const HelpTextError = Template.bind({});
HelpTextError.args = {
  variant: 'error',
  content: 'Add more special characters to your password',
};
