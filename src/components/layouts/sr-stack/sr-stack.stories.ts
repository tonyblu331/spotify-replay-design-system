export default {
  title: 'Components/Layouts/Stack',
  argTypes: {
    orientation: {
      description:
        'Indicate the direction of the children components either vertical or horizontal',
      options: ['vertical', 'horizontal'],
      control: { type: 'radio' },
    },
    gap: {
      description:
        ' Sets the spacing in between elements, and has no effect in the leading or trailing element',
      options: [
        'Spacer1',
        'Spacer2',
        'Spacer3',
        'Spacer4',
        'Spacer5',
        'Spacer6',
        'Spacer7',
        'Spacer8',
      ],
      control: { type: 'select' },
    },
  },
};

function renderCard() {
  let temp = '';
  for (let i = 0; i < 3; i++) {
    const color = i % 2 == 0 ? 'dark' : 'primary';
    temp += `<sr-box backgroundColor="${color}" padding="large">
      <sr-heading level="1">Header ${i + 1}</sr-heading>
      <sr-paragraph>Show content here!</sr-paragraph>
    </sr-box>`;
  }
  return temp;
}

const Template = args => `
  <sr-box padding="small" hasBorder>
    <sr-stack gap=${args.gap} orientation=${args.orientation}>
    ${renderCard()}
    </sr-stack>
  </sr-box>
`;

export const StackVertical = Template.bind({});
StackVertical.args = {
  orientation: 'vertical',
  gap: 'Spacer1',
};

export const StackHorizontal = Template.bind({});
StackHorizontal.args = {
  orientation: 'horizontal',
  gap: 'Spacer1',
};
