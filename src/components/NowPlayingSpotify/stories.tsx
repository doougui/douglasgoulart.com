import { Story, Meta } from '@storybook/react/types-6-0';
import { NowPlayingSpotify } from '.';

export default {
  title: 'NowPlayingSpotify',
  component: NowPlayingSpotify,
} as Meta;

export const Default: Story = () => <NowPlayingSpotify />;
