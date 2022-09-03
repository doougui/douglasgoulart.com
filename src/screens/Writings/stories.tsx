import { Story, Meta } from '@storybook/react/types-6-0';
import { Writings } from '.';

export default {
  title: 'Writings',
  component: Writings,
} as Meta;

export const Default: Story = () => <Writings />;
