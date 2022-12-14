export default {
  title: 'Components/Form/Combo box',
  argTypes: {
    options: {
      description:
        'The available options for selection. Please wrap each option in a pair of `<option>` tags',
    },
    labelText: {
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

const Template = ({ labelText, options, allowEmpty }) =>
  `<sr-combobox 
      ${labelText ? `labelText="${labelText}"` : ''} 
      ${allowEmpty ? 'allowEmpty' : ''}>
    ${options}
  <sr-combobox/>`;

export const Labelless = Template.bind({});
Labelless.args = {
  options: `<option>Potáto</option>\n<option>Potäto</option>`,
  allowEmpty: false,
};

export const Labelled = Template.bind({});
Labelled.args = {
  options: `<option>Avatar</option>\n<option>Ghost in the Shell</option>\n<option>Memento</option>`,
  labelText: 'My favorite movie',
  allowEmpty: false,
};
