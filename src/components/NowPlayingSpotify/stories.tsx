import type { Meta, StoryFn } from '@storybook/react';
import { NowPlayingSpotify } from '.';

export default {
  title: 'NowPlayingSpotify',
  component: NowPlayingSpotify,
} as Meta;

export const Default: StoryFn = () => <NowPlayingSpotify />;
