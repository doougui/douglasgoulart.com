import { Story, Meta } from '@storybook/react/types-6-0';
import { About } from '.';

export default {
  title: 'About',
  component: About,
} as Meta;

export const Default: Story = () => <About />;
