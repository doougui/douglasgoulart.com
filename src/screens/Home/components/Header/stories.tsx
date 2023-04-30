import type { Meta, StoryFn } from '@storybook/react';
import { Header } from '.';

export default {
  title: 'Screens/Home/Header',
  component: Header,
} as Meta;

export const Default: StoryFn = () => <Header />;
