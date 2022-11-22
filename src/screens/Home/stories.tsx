import { Story, Meta } from '@storybook/react/types-6-0';
import writingsMock from 'screens/Writings/mock';
import { Home, HomeProps } from '.';

export default {
  title: 'Screens/Home',
  component: Home,
} as Meta<HomeProps>;

export const Default: Story<HomeProps> = () => (
  <Home featuredWritings={writingsMock} />
);
