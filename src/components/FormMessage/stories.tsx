import { Story, Meta } from '@storybook/react/types-6-0';
import { FormMessage, FormMessageProps } from '.';

export default {
  title: 'FormMessage',
  component: FormMessage,
} as Meta<FormMessageProps>;

export const Error: Story<FormMessageProps> = (args) => (
  <FormMessage {...args} type="error">
    This is an error message
  </FormMessage>
);

export const Success: Story<FormMessageProps> = (args) => (
  <FormMessage {...args} type="success">
    This is a success message
  </FormMessage>
);
