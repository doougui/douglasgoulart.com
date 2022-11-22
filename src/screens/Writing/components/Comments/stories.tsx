import { Story, Meta } from '@storybook/react/types-6-0';
import { Comments } from '.';

export default {
  title: 'Screens/Writing/Comments',
  component: Comments,
} as Meta;

export const Default: Story = () => <Comments />;
