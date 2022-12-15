export default {
  title: 'Components/Navigation/Breadcrumb',
};

const Template = () => `
<sr-breadcrumb>
  <sr-breadcrumb-item name="Breadcrumb 1" href="#"></sr-breadcrumb-item>
  <sr-breadcrumb-item name="Breadcrumb 2" href="#"></sr-breadcrumb-item>
  <sr-breadcrumb-item
    name="Breadcrumb 3"
    href=""
    isLastItem
  ></sr-breadcrumb-item>
</sr-breadcrumb>
`;

export const Breadcrumb = Template.bind({});
