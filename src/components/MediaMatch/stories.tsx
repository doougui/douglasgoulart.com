import { Story, Meta } from '@storybook/react/types-6-0';
import { MediaMatch, MediaMatchProps } from '.';

export default {
  title: 'MediaMatch',
  component: MediaMatch,
} as Meta<MediaMatchProps>;

export const Desktop: Story<MediaMatchProps> = () => (
  <MediaMatch greaterThan="medium">Only on Desktop</MediaMatch>
);

export const Mobile: Story<MediaMatchProps> = () => (
  <MediaMatch lessThan="medium">Only on Mobile</MediaMatch>
);

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
};
