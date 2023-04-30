import type { Meta, StoryFn } from '@storybook/react';
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

export const Default: StoryFn<WritingProps> = (args) => (
  <Writing {...writingMock} {...args} />
);
