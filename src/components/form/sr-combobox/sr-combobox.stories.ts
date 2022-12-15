export default {
  title: 'Components/Form/Combo box',
  argTypes: {
    options: {
      description:
        'The available options for selection. Please wrap each option in a pair of `<option>` tags',
    },
    label: {
      control: 'text',
      description:
        'The text to add to the label that is paired with the combo box',
    },
    allowEmpty: {
      control: 'boolean',
      description:
        'If true, the checkbox will allow the selection of an empty value',
    },
  },
};

// prettier-ignore
const Template = (args) => {
  const options = args.options
  delete(args.options)
  const propsString = Object.entries(args).reduce((prev, [key, value]) => `${prev} ${key}="${value}"`.trim(), '');
  return `<sr-combobox ${propsString}>
            ${options}
          </sr-combobox>`
}

export const Labelless = Template.bind({});
Labelless.args = {
  options: `<option>Potáto</option> <option>Potäto</option>`,
  allowEmpty: false,
};

export const Labelled = Template.bind({});
Labelled.args = {
  options: `<option>Avatar</option> <option>Ghost in the Shell</option> <option>Memento</option>`,
  label: 'My favorite movie',
  allowEmpty: false,
};
