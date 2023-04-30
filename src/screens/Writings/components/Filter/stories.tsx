import type { Meta, StoryFn } from '@storybook/react';
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

export const Default: StoryFn<FilterProps> = (args) => <Filter {...args} />;
