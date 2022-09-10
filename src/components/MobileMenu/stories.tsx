import { Story, Meta } from '@storybook/react/types-6-0';
import { MobileMenu } from '.';

export default {
  title: 'MobileMenu',
  component: MobileMenu,
} as Meta;

export const Default: Story = () => <MobileMenu />;
