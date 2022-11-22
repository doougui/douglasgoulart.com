import { Story, Meta } from '@storybook/react/types-6-0';
import { Container } from 'components/Container';
import { WorkExperience } from '.';

export default {
  title: 'Screens/About/WorkExperience',
  component: WorkExperience,
} as Meta;

export const Default: Story = () => (
  <Container>
    <WorkExperience />
  </Container>
);
