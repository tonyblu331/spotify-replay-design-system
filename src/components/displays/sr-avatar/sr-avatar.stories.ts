export default {
  title: 'Components/Displays/Avatar',
  argTypes: {
    size: {
      description: 'Indicate size of avatar',
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    variant: {
      description: 'Indicate the color of badge',
      options: [
        'labeled',
        'offline',
        'listening',
        'online',
        'template',
        'offline',
        'listening',
        'online',
        'default',
        'verified',
      ],
      control: { type: 'select' },
    },
    username: {
      description: 'Indicate username for small avatar',
      control: { type: 'text' },
    },
    name: {
      description: 'Indicate name for small avatar',
      control: { type: 'text' },
    },
    image: {
      description: 'Set image',
      control: { type: 'text' },
    },
  },
};

const Template = args => {
  const argsProps = Object.entries(args).reduce((prev, [key, value]) => {
    return `${prev} ${key}="${value}"`.trim();
  }, '');
  return `
  <sr-stack orientation='vertical' gap='spacer-1'>
  <sr-avatar ${argsProps}></sr-avatar>
  </sr-stack>
`;
};

const SmallTemplate = () => {
  return `
  <sr-stack orientation='vertical' gap='spacer-3'>
    <sr-flex direction='vertical' vAlignment="top" gap='spacer-1'>
      <sr-avatar variant="offline" size="small"></sr-avatar>
      <sr-text>Offline</sr-text>
    </sr-flex>
    <sr-flex direction='vertical' vAlignment="top" gap='spacer-1'>
      <sr-avatar variant="online" size="small"></sr-avatar>
      <sr-text>Online</sr-text>
    </sr-flex>
    <sr-flex direction='vertical' vAlignment="top" gap='spacer-1'>
      <sr-avatar variant="listening" size="small"></sr-avatar>
      <sr-text>Listening</sr-text>
    </sr-flex>
    <sr-flex direction='vertical' vAlignment="top" gap='spacer-1'>
      <sr-avatar variant="template" size="small"></sr-avatar>
      <sr-text>Template</sr-text>
    </sr-flex>
    <sr-flex direction='vertical' vAlignment="top" gap='spacer-1'>
    <sr-avatar variant="labeled" size="small" name="Supatsara" username="@rosejhh"></sr-avatar>
      <sr-text>Labeled</sr-text>
    </sr-flex>
  </sr-stack>
`;
};

const MediumTemplate = () => {
  return `
  <sr-stack orientation='vertical' gap='spacer-3'>
    <sr-flex direction='vertical' vAlignment="top" gap='spacer-1'>
      <sr-avatar variant="offline" ></sr-avatar>
      <sr-text>Offline</sr-text>
    </sr-flex>
    <sr-flex direction='vertical' vAlignment="top" gap='spacer-1'>
      <sr-avatar variant="online"></sr-avatar>
      <sr-text>Online</sr-text>
    </sr-flex>
    <sr-flex direction='vertical' vAlignment="top" gap='spacer-1'>
    <sr-avatar variant="listening"></sr-avatar>
      <sr-text>Listening</sr-text>
    </sr-flex>
    <sr-flex direction='vertical' vAlignment="top" gap='spacer-1'>
      <sr-avatar variant="template"></sr-avatar>
      <sr-text>Template</sr-text>
    </sr-flex>
  </sr-stack>
`;
};

const LargeTemplate = () => {
  return `
  <sr-stack orientation='vertical' gap='spacer-3'>
    <sr-flex direction='vertical' vAlignment="top" gap='spacer-1'>
      <sr-avatar variant="default" size="large"></sr-avatar>
      <sr-text>Default</sr-text>
    </sr-flex>
    <sr-flex direction='vertical' vAlignment="top" gap='spacer-1'>
      <sr-avatar variant="verified" size="large"></sr-avatar>
      <sr-text>Verified</sr-text>
    </sr-flex>
  </sr-stack>
`;
};

export const DefaultAvatar = Template.bind({});
DefaultAvatar.args = {
  variant: 'online',
  size: 'medium',
};

export const SmallAvatar = SmallTemplate.bind({});

export const MediumAvatar = MediumTemplate.bind({});

export const LargeAvatar = LargeTemplate.bind({});
