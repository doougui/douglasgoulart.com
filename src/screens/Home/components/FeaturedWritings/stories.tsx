import type { Meta, StoryFn } from '@storybook/react';
import writingsMock from '__mocks__/writings';
import { FeaturedWritings, FeaturedWritingsProps } from '.';

export default {
  title: 'Screens/Home/FeaturedWritings',
  component: FeaturedWritings,
} as Meta<FeaturedWritingsProps>;

export const Default: StoryFn<FeaturedWritingsProps> = () => (
  <FeaturedWritings data={writingsMock} />
);
