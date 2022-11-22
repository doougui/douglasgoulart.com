import { Story, Meta } from '@storybook/react/types-6-0';
import { Container } from 'components/Container';
import { MyStack } from '.';

export default {
  title: 'Screens/About/MyStack',
  component: MyStack,
} as Meta;

export const Default: Story = () => (
  <Container>
    <MyStack />
  </Container>
);
