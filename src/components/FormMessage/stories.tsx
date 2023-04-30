import type { Meta, StoryFn } from '@storybook/react';
import { FormMessage, FormMessageProps } from '.';

export default {
  title: 'FormMessage',
  component: FormMessage,
} as Meta<FormMessageProps>;

export const Error: StoryFn<FormMessageProps> = (args) => (
  <FormMessage {...args} type="error">
    This is an error message
  </FormMessage>
);

export const Success: StoryFn<FormMessageProps> = (args) => (
  <FormMessage {...args} type="success">
    This is a success message
  </FormMessage>
);
