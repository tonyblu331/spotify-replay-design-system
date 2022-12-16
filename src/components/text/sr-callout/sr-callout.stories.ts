export default {
  title: 'Components/Text Content/Callout',
  argTypes: {
    headerText: {
      control: { type: 'text' },
      description: 'The text to place in the callout header',
    },
    type: {
      options: [
        'informative',
        'warning',
        'success',
        'template',
        'new',
        'critical',
      ],
      control: { type: 'select' },
      description: 'The callout variant',
    },
    content: {
      description: 'Content details',
    },
  },
};

const Template = args => {
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');
  return `<sr-callout ${argsProps}></sr-callout>`;
};

const defaultOptions = {
  headerText: 'Callout Header Title Placeholder',
  content:
    'Use the content here to display useful information towards your audience. This is information that they need to know.',
};

export const InformativeState = Template.bind({});
InformativeState.args = {
  ...defaultOptions,
};

export const CriticalState = Template.bind({});
CriticalState.args = {
  ...defaultOptions,
  type: 'critical',
};

export const WarningState = Template.bind({});
WarningState.args = {
  type: 'warning',
  ...defaultOptions,
};

export const SuccessfulState = Template.bind({});
SuccessfulState.args = {
  type: 'success',
  ...defaultOptions,
};

export const TemplateState = Template.bind({});
TemplateState.args = {
  type: 'template',
  ...defaultOptions,
};

export const NewState = Template.bind({});
NewState.args = {
  type: 'new',
  ...defaultOptions,
};
