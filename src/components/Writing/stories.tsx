import { Story, Meta } from '@storybook/react/types-6-0';
import writingsMock from 'screens/Writings/mock';
import { Writing, WritingProps } from '.';

export default {
  title: 'Writing',
  component: Writing,
  argTypes: {
    cover: {
      type: 'symbol',
    },
  },
} as Meta<WritingProps>;

export const Default: Story<WritingProps> = (args) => (
  <Writing {...writingsMock[0]} {...args} />
);
