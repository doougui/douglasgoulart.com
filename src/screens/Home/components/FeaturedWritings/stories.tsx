import { Story, Meta } from '@storybook/react/types-6-0';
import writingsMock from 'screens/Writings/mock';
import { FeaturedWritings, FeaturedWritingsProps } from '.';

export default {
  title: 'Screens/Home/FeaturedWritings',
  component: FeaturedWritings,
} as Meta<FeaturedWritingsProps>;

export const Default: Story<FeaturedWritingsProps> = () => (
  <FeaturedWritings data={writingsMock} />
);
