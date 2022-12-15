export default {
  title: 'Components/Navigation/Tabs Nav',
};

const Template = () => `
<sr-tab>
  <sr-tab-item name="Home"></sr-tab-item>
  <sr-tab-item name="Your Playlist"></sr-tab-item>
  <sr-tab-item name="Your Library"></sr-tab-item>
  <sr-tab-item name="Profile"></sr-tab-item>
</sr-tab>
`;

const Template2 = () => `
<sr-tab>
  <sr-tab-item name="New Release"></sr-tab-item>
  <sr-tab-item name="New Podcasts" inActive></sr-tab-item>
  <sr-tab-item name="New Albums" inActive></sr-tab-item>
  <sr-tab-item name="New Playlists"></sr-tab-item>
</sr-tab>
`;

export const TabsNav = Template.bind({});
export const InactiveTabsNav = Template2.bind({});
