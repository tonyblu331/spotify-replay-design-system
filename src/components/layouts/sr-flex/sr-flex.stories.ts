export default {
  title: 'Components/Layouts/Flex',
  argTypes: {
    direction: {
      options: [
        'horizontal',
        'vertical',
        'horizontal-reverse',
        'vertical-reverse',
      ],
      control: { type: 'select' },
      description:
        "Flex direction <br> `'horizontal'` `'vertical'` `'vertical'` `'vertical-reverse'`",
    },
    vAlignment: {
      options: ['top', 'center', 'bottom', 'stretch'],
      control: { type: 'select' },
      description:
        "Vertical alignment <br> `'top'` `'center'` `'bottom'` `'stretch'`",
    },
    hAlignment: {
      options: ['left', 'center', 'right', 'around', 'between'],
      control: { type: 'select' },
      description:
        "Horizontal alignment <br> `'left'` `'center'` `'right'` `'around'` `'between'`",
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
    wrap: {
      description:
        'Wrap helps to specify whether flex items are forced onto one line or can wrap onto multiple lines <br> `boolean`',
      options: [true, false],
      control: { type: 'boolean' },
      defaultValue: false,
    },
  },
};

function renderCard(items) {
  let temp = '';
  for (let i = 0; i < items; i++) {
    const color =
      i % 2 == 0
        ? 'var(--sr-color-foundation-ui-green-ui-green)'
        : 'var(--sr-color-foundation-blue-blue-300)';
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
  <sr-flex ${argsProps}>
    ${renderCard(3)}
  </sr-flex>
</sr-box>
`;
};

const TemplateWrap = args => {
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');
  return `
<sr-box padding="spacer-3" hasBorder>
<sr-flex ${argsProps}>
    ${renderCard(10)}
  </sr-flex>
</sr-box>
`;
};

export const FlexRow = Template.bind({});
FlexRow.args = {
  direction: 'horizontal',
  gap: 'spacer-1',
};

export const FlexColumn = Template.bind({});
FlexColumn.args = {
  direction: 'vertical',
  gap: 'spacer-1',
};

export const FlexWrap = TemplateWrap.bind({});
FlexWrap.args = {
  wrap: 'true',
  direction: 'horizontal',
  hAlignment: 'left',
  gap: 'spacer-1',
};
