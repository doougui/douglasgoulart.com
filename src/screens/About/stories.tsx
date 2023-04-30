import type { Meta, StoryFn } from '@storybook/react';
import { About } from '.';

export default {
  title: 'Screens/About',
  component: About,
} as Meta;

export const Default: StoryFn = () => <About />;
