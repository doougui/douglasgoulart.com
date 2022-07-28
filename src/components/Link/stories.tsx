import { Story, Meta } from '@storybook/react/types-6-0';
import { Link } from '.';

export default {
  title: 'Link',
  component: Link,
} as Meta;

export const Default: Story = () => (
  <Link href="https://example.com">Example</Link>
);
