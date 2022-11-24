import { Story, Meta } from '@storybook/react/types-6-0';
import writingsMock from '__mocks__/writings';
import { Home, HomeProps } from '.';

export default {
  title: 'Screens/Home',
  component: Home,
} as Meta<HomeProps>;

export const Default: Story<HomeProps> = () => (
  <Home featuredWritings={writingsMock} />
);
