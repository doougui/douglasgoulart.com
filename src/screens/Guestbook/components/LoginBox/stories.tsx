import { Story, Meta } from '@storybook/react/types-6-0';
import { LoginBox } from '.';

export default {
  title: 'Screens/Guestbook/LoginBox',
  component: LoginBox,
} as Meta;

export const Default: Story = () => <LoginBox />;
