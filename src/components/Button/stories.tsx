import type { Meta, StoryFn } from '@storybook/react';
import { Button, ButtonProps } from '.';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Button',
    fullWidth: false,
  },
  argTypes: {
    children: {
      type: 'string',
    },
    fullWidth: {
      type: 'boolean',
    },
  },
} as Meta<ButtonProps>;

export const Default: StoryFn<ButtonProps> = (args: ButtonProps) => (
  <Button {...args} />
);
