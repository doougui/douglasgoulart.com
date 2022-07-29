import { Story, Meta } from '@storybook/react/types-6-0';
import { SectionTitle } from '.';

export default {
  title: 'SectionTitle',
  component: SectionTitle,
} as Meta;

export const Default: Story = () => (
  <SectionTitle>Featured writings</SectionTitle>
);
