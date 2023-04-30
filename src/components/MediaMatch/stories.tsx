import type { Meta, StoryFn } from '@storybook/react';
import { MediaMatch, MediaMatchProps } from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch,
} as Meta<MediaMatchProps>;

export const Desktop: StoryFn<MediaMatchProps> = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);

export const Mobile: StoryFn<MediaMatchProps> = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
