import type { Meta, StoryFn } from '@storybook/react';
import { Comments } from '.';

export default {
  title: 'Screens/Writing/Comments',
  component: Comments,
} as Meta;

export const Default: StoryFn = () => <Comments />;
