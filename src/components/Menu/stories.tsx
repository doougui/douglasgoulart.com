import { Story, Meta } from '@storybook/react/types-6-0';
import { Container } from 'components/Container';
import { Menu } from '.';

export default {
  title: 'Menu',
  component: Menu,
  nextRouter: {
    pathname: '/',
  },
} as Meta;

export const Default: Story = () => (
  <Container>
    <Menu />
  </Container>
);
