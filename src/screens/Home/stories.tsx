import type { Meta, StoryFn } from '@storybook/react';
import writingsMock from '__mocks__/writings';
import { Home, HomeProps } from '.';

export default {
  title: 'Screens/Home',
  component: Home,
} as Meta<HomeProps>;

export const Default: StoryFn<HomeProps> = () => (
  <Home featuredWritings={writingsMock} />
);
