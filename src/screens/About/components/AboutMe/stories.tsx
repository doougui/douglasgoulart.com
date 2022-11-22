import { Story, Meta } from '@storybook/react/types-6-0';
import { Container } from 'components/Container';
import { AboutMe } from '.';

export default {
  title: 'Screens/About/AboutMe',
  component: AboutMe,
} as Meta;

export const Default: Story = () => (
  <Container>
    <AboutMe />
  </Container>
);
