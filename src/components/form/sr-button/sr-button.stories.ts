export default {
  title: 'Components/Form/Button',
  argTypes: {
    text: {
      description: 'Transcluded text to be injected in the component slot',
    },
    variant: {
      options: ['neutral', 'error'],
      control: { type: 'select' },
      description: 'The button variant',
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
      description: 'The button size',
    },
  },
};

const Template = args => `
  <sr-button variant="${args.variant}" size="${args.size}">
    ${args.text}
  </sr-button>
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
  size: 'small',
};
