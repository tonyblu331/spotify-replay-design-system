export default {
  title: 'Components/Displays/Badge',
  argTypes: {
    text: {
      description: 'Indicate wording to show inside badge',
    },
    variant: {
      description: 'Indicate the color of badge',
      options: [
        'default',
        'red',
        'yellow',
        'orange',
        'aqua',
        'pink',
        'purple',
        'lime',
        'blue',
        'withIcon',
      ],
      control: { type: 'select' },
    },
    type: {
      description: 'Indicate type of Badge whether rounded or squared',
      control: { type: 'select' },
      options: ['rounded', 'squared'],
    },
  },
};

const Template = args => {
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');
  return `
  <sr-stack orientation='vertical' gap='spacer-1'>
  <sr-badge ${argsProps}></sr-badge>
  </sr-stack>
`;
};

const AllTemplate = () => {
  return `
  <sr-stack orientation='vertical' gap='spacer-1'>
    <sr-badge text='I am a badge' variant='default'></sr-badge>
    <sr-badge text='This is a podcast Badge' variant='withIcon'></sr-badge>
    <sr-badge text='I am a badge' variant='red'></sr-badge>
    <sr-badge text='I am a badge' variant='yellow'></sr-badge>
    <sr-badge text='I am a badge' variant='orange'></sr-badge>
    <sr-badge text='I am a badge' variant='aqua'></sr-badge>
    <sr-badge text='I am a badge' variant='pink'></sr-badge>
    <sr-badge text='I am a badge' variant='purple'></sr-badge>
    <sr-badge text='I am a badge' variant='lime'></sr-badge>
    <sr-badge text='I am a badge' variant='blue'></sr-badge>
  </sr-stack>
`;
};

const AllSquaredTemplate = () => {
  return `
  <sr-stack orientation='vertical' gap='spacer-1'>
    <sr-badge text='I am a badge' variant='default' type='squared'></sr-badge>
    <sr-badge text='This is a podcast Badge' variant='withIcon' type='squared'></sr-badge>
    <sr-badge text='I am a badge' variant='red' type='squared'></sr-badge>
    <sr-badge text='I am a badge' variant='yellow' type='squared'></sr-badge>
    <sr-badge text='I am a badge' variant='orange' type='squared'></sr-badge>
    <sr-badge text='I am a badge' variant='aqua' type='squared'></sr-badge>
    <sr-badge text='I am a badge' variant='pink' type='squared'></sr-badge>
    <sr-badge text='I am a badge' variant='purple' type='squared'></sr-badge>
    <sr-badge text='I am a badge' variant='lime' type='squared'></sr-badge>
    <sr-badge text='I am a badge' variant='blue' type='squared'></sr-badge>
  </sr-stack>
`;
};

export const DefaultBadge = Template.bind({});
DefaultBadge.args = {
  text: 'I am a badge',
};

export const AllRoundedBadge = AllTemplate.bind({});

export const AllSquaredBadge = AllSquaredTemplate.bind({});
