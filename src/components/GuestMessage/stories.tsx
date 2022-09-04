import { Story, Meta } from '@storybook/react/types-6-0';
import { GuestMessage, GuestMessageProps } from '.';

export default {
  title: 'GuestMessage',
  component: GuestMessage,
  args: {
    message: 'Nice work',
    author: 'Douglas Pinheiro Goulart',
    date: new Date(2002, 9, 22),
  },
  argTypes: {
    date: {
      type: 'symbol',
    },
  },
} as Meta;

export const Default: Story<GuestMessageProps> = (args) => (
  <GuestMessage {...args} />
);
