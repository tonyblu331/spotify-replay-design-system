export default {
  title: 'Components/Form/Combobox',
  argTypes: {
    options: {
      description:
        'The available options for selection. Please wrap each option in a pair of `<option>` tags, adding the `selected` and `disabled` to your liking',
    },
    label: {
      control: 'text',
      description:
        'The text to add to the label that is paired with the combo box',
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

export const DisabledOptionAsPlaceholder = Template.bind({});
DisabledOptionAsPlaceholder.args = {
  options: `<option selected disabled>Choose a genre</option> <option>Ska</option> <option>Pop</option> <option>Rock</option>`,
};

export const Labelless = Template.bind({});
Labelless.args = {
  options: `<option selected>Potáto</option> <option>Potäto</option>`,
};

export const Labelled = Template.bind({});
Labelled.args = {
  options: `<option>Avatar</option> <option selected>Ghost in the Shell</option> <option>Memento</option>`,
  label: 'My favorite movie',
};
