import type { Meta, StoryFn } from '@storybook/react';
import { ThemeSwitcher } from '.';

export default {
  title: 'ThemeSwitcher',
  component: ThemeSwitcher,
} as Meta;

export const Default: StoryFn = () => <ThemeSwitcher />;
