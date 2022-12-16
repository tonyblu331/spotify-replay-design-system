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
        'The button variant <br> `roundedBtn` `squaredBtn` `outlinedRoundBtn` `outlinedSquaredBtn` `blackRoundButton` `blackSquaredBtn` `blackOutlinedRoundBtn` `blackOutlinedSquaredBtn` `roundedBtnWithWhiteText` `squaredBtnWithWhiteText` `whiteRoundedBtn` `whiteSquaredBtn` `whiteOutlineRoundedBtn` `whiteOutlineSquaredBtn`',
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
  text: "I'm a Re:Play Button",
};

export const SquaredButton = Template.bind({});
SquaredButton.args = {
  variant: 'squaredBtn',
  text: "I'm a Re:Play Button",
};

export const OutlineRoundedButton = Template.bind({});
OutlineRoundedButton.args = {
  variant: 'outlinedRoundBtn',
  text: "I'm a Re:Play Button",
};

export const OutlineSquaredButton = Template.bind({});
OutlineSquaredButton.args = {
  variant: 'outlinedSquaredBtn',
  text: "I'm a Re:Play Button",
};

export const BlackRoundedButton = Template.bind({});
BlackRoundedButton.args = {
  variant: 'blackRoundedBtn',
  text: "I'm a Re:Play Button",
};

export const BlackSquaredButton = Template.bind({});
BlackSquaredButton.args = {
  variant: 'blackSquaredBtn',
  text: "I'm a Re:Play Button",
};

export const BlackOutlineRoundedButton = Template.bind({});
BlackOutlineRoundedButton.args = {
  variant: 'blackOutlinedRoundBtn',
  text: "I'm a Re:Play Button",
};

export const BlackOutlinedSquaredButton = Template.bind({});
BlackOutlinedSquaredButton.args = {
  variant: 'blackOutlinedSquaredBtn',
  text: "I'm a Re:Play Button",
};

export const RoundedButtonWithWhiteText = Template.bind({});
RoundedButtonWithWhiteText.args = {
  variant: 'roundedBtnWithWhiteText',
  text: "I'm a Re:Play Button",
};

export const SquaredButtonWithWhiteText = Template.bind({});
SquaredButtonWithWhiteText.args = {
  variant: 'squaredBtnWithWhiteText',
  text: "I'm a Re:Play Button",
};

export const WhiteRoundedButton = Template.bind({});
WhiteRoundedButton.args = {
  variant: 'whiteRoundedBtn',
  text: "I'm a Re:Play Button",
};

export const WhiteSquaredButton = Template.bind({});
WhiteSquaredButton.args = {
  variant: 'whiteSquaredBtn',
  text: "I'm a Re:Play Button",
};

export const WhiteOutlineRoundedButton = Template.bind({});
WhiteOutlineRoundedButton.args = {
  variant: 'whiteOutlineRoundedBtn',
  text: "I'm a Re:Play Button",
};

export const WhiteOutlineSquaredButton = Template.bind({});
WhiteOutlineSquaredButton.args = {
  variant: 'whiteOutlineSquaredBtn',
  text: "I'm a Re:Play Button",
};
