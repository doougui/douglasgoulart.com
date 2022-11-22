import { Story, Meta } from '@storybook/react/types-6-0';
import { Container } from 'components/Container';
import { About } from '.';

export default {
  title: 'Screens/Home/About',
  component: About,
} as Meta;

export const Default: Story = () => (
  <Container>
    <About />
  </Container>
);
