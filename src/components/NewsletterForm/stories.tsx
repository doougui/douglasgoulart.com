import type { Meta, StoryFn } from '@storybook/react';
import { NewsletterForm } from '.';

export default {
  title: 'NewsletterForm',
  component: NewsletterForm,
} as Meta;

export const Default: StoryFn = () => (
  <div style={{ width: '500px', margin: '0 auto' }}>
    <NewsletterForm />
  </div>
);
