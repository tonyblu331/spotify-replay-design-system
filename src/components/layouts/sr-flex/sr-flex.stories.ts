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
        "Adjusting spacing between children components inside flex <br> `'Spacer1'` `'Spacer2'` `'Spacer3'` `'Spacer4'` `'Spacer5'` `'Spacer6'` `'Spacer7'` `'Spacer8'`",
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
    const color = i % 2 == 0 ? 'dark' : 'primary';
    temp += `<sr-box backgroundColor="${color}" padding="large">
      <sr-heading level="1">Header ${i + 1}</sr-heading>
      <sr-paragraph>Show content here!</sr-paragraph>
    </sr-box>`;
  }
  return temp;
}

const Template = args => `
<sr-box padding="large" hasBorder>
  <sr-flex 
      direction=${args.direction}
      vAlignment=${args.vAlignment}
      hAlignment=${args.hAlignment}
      wrap=${args.wrap} 
      gap=${args.gap}
    >
    ${renderCard(3)}
  </sr-flex>
</sr-box>
`;

const TemplateWrap = args => `
<sr-box padding="large" hasBorder>
  <sr-flex 
      direction=${args.direction}
      vAlignment=${args.vAlignment}
      hAlignment=${args.hAlignment}
      wrap=${args.wrap} 
      gap=${args.gap}
    >
    ${renderCard(10)}
  </sr-flex>
</sr-box>
`;

export const FlexRow = Template.bind({});
FlexRow.args = {
  direction: 'horizontal',
  gap: 'Spacer1',
};

export const FlexColumn = Template.bind({});
FlexColumn.args = {
  direction: 'vertical',
  gap: 'Spacer1',
};

export const FlexWrap = TemplateWrap.bind({});
FlexWrap.args = {
  wrap: 'true',
  direction: 'horizontal',
  hAlignment: 'center',
  gap: 'Spacer1',
};
