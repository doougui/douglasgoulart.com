import type { Meta, StoryFn } from '@storybook/react';
import { Container } from 'components/Container';
import { MyStack } from '.';

export default {
  title: 'Screens/About/MyStack',
  component: MyStack,
} as Meta;

export const Default: StoryFn = () => (
  <Container>
    <MyStack />
  </Container>
);
