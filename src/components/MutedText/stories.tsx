import type { Meta, StoryFn } from '@storybook/react';
import { MutedText } from '.';

export default {
  title: 'MutedText',
  component: MutedText,
  argTypes: {
    children: {
      type: 'string',
    },
  },
} as Meta;

export const Default: StoryFn = (args) => <MutedText {...args} />;

Default.args = {
  children: 'This is a muted text',
};
