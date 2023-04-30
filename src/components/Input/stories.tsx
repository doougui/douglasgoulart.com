import type { Meta, StoryFn } from '@storybook/react';
import { Input, InputProps } from '.';

export default {
  title: 'Input',
  argTypes: {
    placeholder: {
      type: 'string',
    },
  },
  args: {
    placeholder: 'Enter your email',
  },
  component: Input,
} as Meta<InputProps>;

export const Default: StoryFn<InputProps> = (args) => <Input {...args} />;
