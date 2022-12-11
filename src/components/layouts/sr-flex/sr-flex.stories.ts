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
      description: 'Flex direction',
    },
    vAlignment: {
      options: ['top', 'center', 'bottom', 'stretch'],
      control: { type: 'select' },
      description: 'Vertical alignment',
    },
    hAlignment: {
      options: ['left', 'center', 'right', 'around', 'between'],
      control: { type: 'select' },
      description: 'Horizontal alignment',
    },
    gap: {
      defaultValue: 0,
      description: ' The size of the gap between items in flex component',
    },
    wrap: {
      description:
        'Wrap helps to specify whether flex items are forced onto one line or can wrap onto multiple lines',
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
    temp += `<sr-card backgroundColor="${color}" padding="large">
      <sr-heading level="1">Header ${i + 1}</sr-heading>
      <sr-paragraph>Show content here!</sr-paragraph>
    </sr-card>`;
  }
  return temp;
}

const Template = args => `
<sr-card padding="large" hasBorder>
  <sr-flex 
      direction=${args.direction}
      vAlignment=${args.vAlignment}
      hAlignment=${args.hAlignment}
      wrap=${args.wrap} 
      gap=${args.gap}
    >
    ${renderCard(3)}
  </sr-flex>
</sr-card>
`;

const TemplateWrap = args => `
<sr-card padding="large" hasBorder>
  <sr-flex 
      direction=${args.direction}
      vAlignment=${args.vAlignment}
      hAlignment=${args.hAlignment}
      wrap=${args.wrap} 
      gap=${args.gap}
    >
    ${renderCard(10)}
  </sr-flex>
</sr-card>
`;

export const FlexRow = Template.bind({});
FlexRow.args = {
  direction: 'horizontal',
  gap: 30,
};

export const FlexColumn = Template.bind({});
FlexColumn.args = {
  direction: 'vertical',
  gap: 30,
};

export const FlexWrap = TemplateWrap.bind({});
FlexWrap.args = {
  wrap: 'true',
  direction: 'horizontal',
  gap: 30,
};
