export default {
  title: 'Components/Form/Combo box',
  argTypes: {
    options: {
      description: 'The available options selectable from to the combobox',
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
  options: `<option>Potáto</option><option>Potäto</option>`,
  allowEmpty: false,
};

export const Labelled = Template.bind({});
Labelled.args = {
  options: `<option>Avatar</option><option>Ghost in the Shell</option><option>Memento</option>`,
  labelText: 'My favorite movie',
  allowEmpty: false,
};
