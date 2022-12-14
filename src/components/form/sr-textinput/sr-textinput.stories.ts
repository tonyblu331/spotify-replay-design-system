export default {
  title: 'Components/Form/Text input',
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The label to accompany the text input',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'The placeholder to display when the text input is empty',
    },
  },
};

const Template = ({ label, placeholder }) => {
  if (label) {
    if (placeholder) {
      return `
        <sr-textinput label="${label}" placeholder="${placeholder}" />
      `;
    } else {
      return `
        <sr-textinput label="${label}" />
      `;
    }
  } else {
    if (placeholder) {
      return `
        <sr-textinput placeholder="${placeholder}" />
      `;
    } else {
      return `
        <sr-textinput />
      `;
    }
  }
};

// const Template = ({ label, placeholder }) => `
//   <sr-textinput ${label !== '' ? `label='${label}"` : ''} ${
//   placeholder ? `placeholder="${placeholder}"` : ''
// } />
// `;

export const DefaultPlaceholder = Template.bind({});
DefaultPlaceholder.args = {};

export const PlaceholderAndLabel = Template.bind({});
PlaceholderAndLabel.args = {
  label: 'My favorite genre',
  placeholder: 'e.g. ska',
};
