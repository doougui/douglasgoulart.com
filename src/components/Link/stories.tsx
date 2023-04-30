import type { Meta, StoryFn } from '@storybook/react';
import { Link } from '.';

export default {
  title: 'Link',
  component: Link,
} as Meta;

export const Default: StoryFn = () => (
  <Link href="https://example.com">Example</Link>
);
