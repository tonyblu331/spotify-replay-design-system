export default {
  title: 'Components/Button',
  argTypes: {
    text: {
      description: 'Transcluded text to be injected in the component slot',
      defaultValue: 'Submit',
    },
    variant: {
      options: ['neutral', 'error'],
      control: { type: 'select' },
      description: 'The button variant',
    },
    size: {
      options: ['medium', 'small', 'large'],
      control: { type: 'radio' },
      description: 'The button size',
    },
  },
};

const Template = args => `
  <hs-button variant="${args.variant}" size="${args.size}">
    ${args.text}
  </hs-button>
`;

export const Button = Template.bind({});
Button.args = {
  text: 'Button',
  variant: 'neutral',
  size: 'medium',
};

export const RedButton = Template.bind({});
RedButton.args = {
  text: 'Button',
  variant: 'error',
  size: 'medium',
};
