import { Story, Meta } from '@storybook/react/types-6-0';
import { MobileMenu } from '.';

export default {
  title: 'MobileMenu',
  component: MobileMenu,
} as Meta;

export const Default: Story = () => (
  <div style={{ margin: '3rem 0' }}>
    <MobileMenu />
  </div>
);

Default.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
