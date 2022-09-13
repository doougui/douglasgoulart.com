import { Story, Meta } from '@storybook/react/types-6-0';
import { ThemeSwitcher } from '.';

export default {
  title: 'ThemeSwitcher',
  component: ThemeSwitcher,
} as Meta;

export const Default: Story = () => <ThemeSwitcher />;
