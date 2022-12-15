export default {
  title: 'Components/Navigation/Breadcrumb',
  argTypes: {
    selectedItem: {
      description: 'Selected Item',
      control: { type: 'text' },
    },
  },
};

const Template = args => `
<sr-breadcrumb>
  <sr-breadcrumb-item name="Breadcrumb 1" href="#" selectedItem="${args.selectedItem}"></sr-breadcrumb-item>
  <sr-breadcrumb-item name="Breadcrumb 2" href="#" selectedItem="${args.selectedItem}"></sr-breadcrumb-item>
  <sr-breadcrumb-item
    name="Breadcrumb 3"
    href=""
    isLastItem 
    selectedItem="${args.selectedItem}"
  ></sr-breadcrumb-item>
</sr-breadcrumb>
`;

export const Breadcrumb = Template.bind({});
