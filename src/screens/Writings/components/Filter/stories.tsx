import { Story, Meta } from '@storybook/react/types-6-0';
import { Filter, FilterProps } from '.';

export default {
  title: 'Screens/Writings/Filter',
  component: Filter,
  args: {
    search: null,
    tag: null,
    sort: 'new',
    onFilter: () => null,
  },
} as Meta<FilterProps>;

export const Default: Story<FilterProps> = (args) => <Filter {...args} />;
