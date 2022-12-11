export default {
  title: 'Components/Text Content/Callout',
  argTypes: {
    headerText: {
      control: { type: 'text' },
      description: 'The text to place in the callout header',
      defaultValue: '',
    },
    type: {
      options: ['note', 'warning', 'critical'],
      control: { type: 'radio' },
      description: 'The callout variant',
      defaultValue: 'note',
    },
    content: {
      description: 'Content to be injected in the component slot',
    },
  },
};

const Template = ({ headerText, type, content }) => {
  if (headerText !== '') {
    return `
      <sr-callout headerText="${headerText}" type="${type}">
        ${content}
      </sr-callout>
    `;
  } else {
    return `
      <sr-callout type="${type}">
        ${content}
      </sr-callout>
    `;
  }
};

export const Note = Template.bind({});
Note.args = {
  content:
    'This is a message you should take note of, but its not that important',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'warning',
  content: 'This message is alarming, but not too much',
};

// TODOJCS why doesnt headerText prop work?
export const Critical = Template.bind({});
Critical.args = {
  type: 'critical',
  headerText: 'Danger ⚠️',
  content: 'This message is important, proceed with caution',
};
