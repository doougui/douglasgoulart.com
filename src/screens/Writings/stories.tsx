import { Story, Meta } from '@storybook/react/types-6-0';
import writingsMock from '__mocks__/writings';
import { SortTypes } from 'utils/mdx/writings/types';
import { Writings, WritingsProps } from '.';

export default {
  title: 'Screens/Writings',
  component: Writings,
  args: {
    search: null,
    tag: null,
    sort: 'new',
    sortOptions: SortTypes,
  },
} as Meta<WritingsProps>;

export const Default: Story<WritingsProps> = (args) => (
  <Writings {...args} writings={writingsMock} />
);
