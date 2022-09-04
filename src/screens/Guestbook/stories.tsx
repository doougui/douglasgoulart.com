import { Story, Meta } from '@storybook/react/types-6-0';
import { Guestbook } from '.';

export default {
  title: 'Guestbook',
  component: Guestbook,
} as Meta;

export const Default: Story = () => <Guestbook />;
