import { Story, Meta } from '@storybook/react/types-6-0';
import { Container } from 'components/Container';
import { Footer } from '.';

export default {
  title: 'Footer',
  component: Footer,
} as Meta;

export const Default: Story = () => (
  <Container>
    <Footer />
  </Container>
);
