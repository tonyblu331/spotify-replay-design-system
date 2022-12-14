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
    temp += `<sr-box backgroundColor="${color}" padding="spacer-3">
      <sr-heading level="h3-bold">Header ${i + 1}</sr-heading>
      <sr-text>Show content here!</sr-text>
    </sr-box>`;
  }
  return temp;
}

const Template = args => {
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');
  return `
  <sr-box padding="spacer-3" hasBorder>
    <sr-stack ${argsProps}>
    ${renderCard()}
    </sr-stack>
  </sr-box>
`;
};

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
