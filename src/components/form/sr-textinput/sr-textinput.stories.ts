export default {
  title: 'Components/Form/Text input',
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['squared', 'rounded'],
      description: "Specify Button variant <br> `'squared'` `'rounded'`",
    },
    value: {
      description: 'Specify current text value in text field',
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
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');
  return ` <sr-text-input ${argsProps} />`;
};

export const SquaredInputText = Template.bind({});
SquaredInputText.args = {
  label: 'My favorite genre',
  placeholder: 'e.g. ska',
  value: '',
};

export const RoundedInputText = Template.bind({});
RoundedInputText.args = {
  label: 'My favorite genre',
  placeholder: 'e.g. ska',
  helperText: 'Please insert your favorite genre',
  variant: 'roundedInput',
  value: '',
};
