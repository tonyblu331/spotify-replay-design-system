export default {
  title: 'Components/Form/Button',
  argTypes: {
    text: {
      description: 'Transcluded text to be injected in the component slot',
      control: { type: 'text' },
    },
    variant: {
      options: [
        'roundedBtn',
        'squaredBtn',
        'outlinedRoundBtn',
        'outlinedSquaredBtn',
        'blackRoundButton',
        'blackSquaredBtn',
        'blackOutlinedRoundBtn',
        'blackOutlinedSquaredBtn',
        'roundedBtnWithWhiteText',
        'squaredBtnWithWhiteText',
        'whiteRoundedBtn',
        'whiteSquaredBtn',
        'whiteOutlineRoundedBtn',
        'whiteOutlineSquaredBtn',
      ],
      control: { type: 'select' },
      description:
        "The button variant <br> `'roundedBtn'` `'squaredBtn'` `'outlinedRoundBtn'` `'outlinedSquaredBtn'` `'blackRoundButton'` `'blackSquaredBtn'` `'blackOutlinedRoundBtn'` `'blackOutlinedSquaredBtn'` `'roundedBtnWithWhiteText'` `'squaredBtnWithWhiteText'` `'whiteRoundedBtn'` `'whiteSquaredBtn'` `whiteOutlineRoundedBtn` `'whiteOutlineSquaredBtn'`",
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
  variant: 'roundedBtn',
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

export const RoundedButtonWithWhiteText = Template.bind({});
RoundedButtonWithWhiteText.args = {
  variant: 'roundedBtnWithWhiteText',
};

export const SquaredButtonWithWhiteText = Template.bind({});
SquaredButtonWithWhiteText.args = {
  variant: 'squaredBtnWithWhiteText',
};

export const WhiteRoundedButton = Template.bind({});
WhiteRoundedButton.args = {
  variant: 'whiteRoundedBtn',
};

export const WhiteSquaredButton = Template.bind({});
WhiteSquaredButton.args = {
  variant: 'whiteSquaredBtn',
};

export const WhiteOutlineRoundedButton = Template.bind({});
WhiteOutlineRoundedButton.args = {
  variant: 'whiteOutlineRoundedBtn',
};

export const WhiteOutlineSquaredButton = Template.bind({});
WhiteOutlineSquaredButton.args = {
  variant: 'whiteOutlineSquaredBtn',
};
