export default {
  title: 'Components/Form/Text Input',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['medium', 'rounded'],
      description: "Specify Button variant <br> `'medium'` `'rounded'`",
    },
    value: {
      description: 'Specify current text value in text field',
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
      description: 'The label to accompany the text input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'The placeholder to display when the text input is empty',
    },
    isReadonly: {
      control: { type: 'boolean' },
      description: 'Indicate whether this text field is readonly or not',
    },
    isRequired: {
      control: { type: 'boolean' },
      description: 'Indicate whether this text field is required or not',
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'Indicate whether this text field is disabled or not',
    },
    isError: {
      control: { type: 'boolean' },
      description: 'Indicate Error state',
    },
    isSuccess: {
      control: { type: 'boolean' },
      description: 'Indicate Success state',
    },
    type: {
      control: { type: 'select' },
      options: ['number', 'text', 'email'],
      description:
        "Specify type of text field <br> `'number'` `'text'` `'email'`",
    },
    helperText: {
      control: { type: 'text' },
      description: 'Indicate the purpose of the text field',
    },
  },
};

const Template = args => {
  const argsProps = Object.entries(args).reduce(
    (prev, [key, value]) => `${prev} ${key}="${value}"`.trim(),
    '',
  );
  return `<sr-text-input ${argsProps} />`;
};

export const SquaredInputText = Template.bind({});
SquaredInputText.args = {
  label: 'My favorite genre',
  placeholder: 'e.g. ska',
  variant: 'medium',
  value: '',
};

export const RoundedInputText = Template.bind({});
RoundedInputText.args = {
  label: 'My favorite genre',
  placeholder: 'e.g. ska',
  helperText: 'Please insert your favorite genre',
  variant: 'rounded',
  value: '',
};

export const SuccessInputText = Template.bind({});
SuccessInputText.args = {
  label: 'Enter username',
  value: 'Rose',
  isSuccess: true,
};

export const ErrorInputTextWithHelperText = Template.bind({});
ErrorInputTextWithHelperText.args = {
  label: 'Enter username',
  value: '',
  isRequired: true,
  helperText: 'Please enter your username',
  isError: true,
};

export const ReadOnlyInputText = Template.bind({});
ReadOnlyInputText.args = {
  label: 'Username',
  variant: 'medium',
  value: 'Juan',
  isReadonly: true,
};

export const DisabledInputText = Template.bind({});
DisabledInputText.args = {
  label: 'Broken Record',
  variant: 'medium',
  value: ' ',
  isDisabled: true,
};
