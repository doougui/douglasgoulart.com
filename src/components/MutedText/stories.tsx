import { Story, Meta } from '@storybook/react/types-6-0';
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

export const Default: Story = (args) => <MutedText {...args} />;

Default.args = {
  children: 'This is a muted text',
};
