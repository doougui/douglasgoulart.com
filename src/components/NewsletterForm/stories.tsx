import { Story, Meta } from '@storybook/react/types-6-0';
import { NewsletterForm } from '.';

export default {
  title: 'NewsletterForm',
  component: NewsletterForm,
} as Meta;

export const Default: Story = () => (
  <div style={{ width: '500px', margin: '0 auto' }}>
    <NewsletterForm />
  </div>
);
