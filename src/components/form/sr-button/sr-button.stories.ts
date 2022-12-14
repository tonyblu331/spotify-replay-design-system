export default {
  title: 'Components/Form/Button',
  argTypes: {
    text: {
      description: 'Transcluded text to be injected in the component slot',
      control: { type: 'text' },
    },
    variant: {
      options: [
        'roundBtn',
        'squaredBtn',
        'outlinedRoundBtn',
        'outlinedSquaredBtn',
        'blackRoundButton',
        'blackSquaredBtn',
        'blackOutlinedRoundBtn',
        'blackOutlinedSquaredBtn',
      ],
      control: { type: 'select' },
      description:
        "The button variant <br> `'roundBtn'` `'squaredBtn'` `'outlinedRoundBtn'` `'outlinedSquaredBtn'` `'blackRoundButton'` `'blackSquaredBtn'` `'blackOutlinedRoundBtn'` `'blackOutlinedSquaredBtn'`",
    },
    isDisabled: {
      control: { type: 'boolean' },
      description: 'Control Disabled button',
    },
  },
};

const Template = args => {
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');
  return `
  <sr-button ${argsProps}>
  </sr-button>
`;
};

export const RoundedButton = Template.bind({});
RoundedButton.args = {
  variant: 'roundBtn',
};

export const SquaredButton = Template.bind({});
SquaredButton.args = {
  variant: 'squaredBtn',
};

export const OutlineRoundedButton = Template.bind({});
OutlineRoundedButton.args = {
  variant: 'outlinedRoundBtn',
};

export const BlackRoundedButton = Template.bind({});
BlackRoundedButton.args = {
  variant: 'outlinedSquaredBtn',
};

export const BlackSquaredButton = Template.bind({});
BlackSquaredButton.args = {
  variant: 'blackSquaredBtn',
};

export const BlackOutlineRoundedButton = Template.bind({});
BlackOutlineRoundedButton.args = {
  variant: 'blackOutlinedRoundBtn',
};

export const BlackOutlinedSquaredButton = Template.bind({});
BlackOutlinedSquaredButton.args = {
  variant: 'blackOutlinedSquaredBtn',
};
