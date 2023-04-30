import type { Meta, StoryFn } from '@storybook/react';
import { Container } from 'components/Container';
import { WorkExperience } from '.';

export default {
  title: 'Screens/About/WorkExperience',
  component: WorkExperience,
} as Meta;

export const Default: StoryFn = () => (
  <Container>
    <WorkExperience />
  </Container>
);
