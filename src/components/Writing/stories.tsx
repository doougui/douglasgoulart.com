import { Story, Meta } from '@storybook/react/types-6-0';
import writingMock from '__mocks__/writing';
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
  <Writing {...writingMock} {...args} />
);
