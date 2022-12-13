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
        "Adjusting spacing between children components inside flex <br> `'spacer-1'` `'spacer-2'` `'spacer-3'` `'spacer-4'` `'spacer-5'` `'spacer-6'` `'spacer-7'` `'spacer-8'`",
      options: [
        'spacer-1',
        'spacer-2',
        'spacer-3',
        'spacer-4',
        'spacer-5',
        'spacer-6',
        'spacer-7',
        'spacer-8',
      ],
      control: { type: 'select' },
    },
  },
};

function renderCard() {
  let temp = '';
  for (let i = 0; i < 3; i++) {
    const color = i % 2 == 0 ? 'dark' : 'primary';
    temp += `<sr-box backgroundColor="${color}" padding="spacer-2">
      <sr-heading level="1">Header ${i + 1}</sr-heading>
      <sr-paragraph>Show content here!</sr-paragraph>
    </sr-box>`;
  }
  return temp;
}

const Template = args => `
  <sr-box padding="spacer-2" hasBorder>
    <sr-stack gap=${args.gap} orientation=${args.orientation}>
    ${renderCard()}
    </sr-stack>
  </sr-box>
`;

export const StackVertical = Template.bind({});
StackVertical.args = {
  orientation: 'vertical',
  gap: 'spacer-1',
};

export const StackHorizontal = Template.bind({});
StackHorizontal.args = {
  orientation: 'horizontal',
  gap: 'spacer-1',
};
