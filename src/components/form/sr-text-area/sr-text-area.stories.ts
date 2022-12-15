export default {
  title: 'Components/Form/Text Area',
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label to accompany the text input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'The placeholder to display when the text input is empty',
    },
    helperText: {
      control: { type: 'text' },
      description: 'Indicate the purpose of the text field',
    },
    isError: {
      control: { type: 'boolean' },
      description: 'Indicate Error state',
    },
  },
};

const Template = args => {
  const argsProps = Object.entries(args).reduce(
    (prev, [key, value]) => `${prev} ${key}="${value}"`.trim(),
    '',
  );
  return `<sr-text-area ${argsProps} />`;
};

export const TextAreaWithLabel = Template.bind({});
TextAreaWithLabel.args = {
  label: 'Label',
};

export const TextAreaWithHelperText = Template.bind({});
TextAreaWithHelperText.args = {
  label: 'Label',
  helperText: 'Insert helper text here',
};

export const TextAreaWithErrorState = Template.bind({});
TextAreaWithErrorState.args = {
  label: 'Label',
  isError: 'true',
};
