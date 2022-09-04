import { Story, Meta } from '@storybook/react/types-6-0';
import { LoginBox } from '.';

export default {
  title: 'LoginBox',
  component: LoginBox,
} as Meta;

export const Default: Story = () => <LoginBox />;
