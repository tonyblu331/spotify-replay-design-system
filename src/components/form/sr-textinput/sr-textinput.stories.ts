export default {
  title: 'Components/Form/Text input',
  // TODOJCS
  // argTypes: {
  //   variant: {
  //     options: ['neutral', 'error'], // Value presets
  //     control: { type: 'select' }, // Knob type. It can be select, radio, etc
  //     description: 'The button variant', // The description text displayed in the knobs table
  //   },
  // },
};

const Template = args => `
  <sr-textinput>
    ${args.content}
  </sr-textinput>
`;

export const ComponentStory = Template.bind({});
ComponentStory.args = {
  // Populate this object with key/value pairs, customizing the component atribute values or even its content. Eg:
  // content: 'Demo text',
};
