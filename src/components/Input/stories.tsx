import { Story, Meta } from '@storybook/react/types-6-0';
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

export const Default: Story<InputProps> = (args) => <Input {...args} />;
