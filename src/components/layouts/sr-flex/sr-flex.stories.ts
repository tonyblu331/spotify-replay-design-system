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

const Template = args => `
<sr-card padding="large" hasBorder>
  <sr-flex 
      direction=${args.direction}
      vAlignment=${args.vAlignment}
      hAlignment=${args.hAlignment}
      wrap=${args.wrap} 
      gap=${args.gap}
    >
      <sr-card backgroundColor="dark" padding="large"></sr-card>
      <sr-card backgroundColor="primary" padding="large"></sr-card>
      <sr-card backgroundColor="secondary" padding="large"></sr-card>
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
  gap: 0,
};
