export default {
  title: 'Components/Layouts/Stack',
  argTypes: {
    orientation: {
      description:
        "Indicate the direction of the children components either vertical or horizontal <br> `'vertical'` `'horizontal'`",
      options: ['vertical', 'horizontal'],
      control: { type: 'radio' },
    },
    gap: {
      description:
        "Adjusting spacing between children components inside flex <br> `'spacer8'` `'spacer16'` `'spacer24'` `'spacer32'` `'spacer40'` `'spacer48'` `'spacer56'` `'spacer64'`",
      options: [
        'spacer8',
        'spacer16',
        'spacer24',
        'spacer32',
        'spacer40',
        'spacer48',
        'spacer56',
        'spacer64',
      ],
      control: { type: 'select' },
    },
  },
};

function renderCard() {
  let temp = '';
  for (let i = 0; i < 3; i++) {
    const color = i % 2 == 0 ? 'dark' : 'primary';
    temp += `<sr-box backgroundColor="${color}" padding="spacer16">
      <sr-heading level="1">Header ${i + 1}</sr-heading>
      <sr-paragraph>Show content here!</sr-paragraph>
    </sr-box>`;
  }
  return temp;
}

const Template = args => `
  <sr-box padding="spacer16" hasBorder>
    <sr-stack gap=${args.gap} orientation=${args.orientation}>
    ${renderCard()}
    </sr-stack>
  </sr-box>
`;

export const StackVertical = Template.bind({});
StackVertical.args = {
  orientation: 'vertical',
  gap: 'spacer8',
};

export const StackHorizontal = Template.bind({});
StackHorizontal.args = {
  orientation: 'horizontal',
  gap: 'spacer8',
};
