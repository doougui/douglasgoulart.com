import { NextApiRequest, NextApiResponse } from 'next';
import { getNowPlaying } from 'services/spotify';

export default async function handler(_: NextApiRequest, res: NextApiResponse) {
  const response = await getNowPlaying();

  if (!response || response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false });
  }

  const song = response.data;
  const isPlaying = song.is_playing;
  const title = song.item.name;
  const artist = song.item.artists
    .map((artistItem) => artistItem.name)
    .join(', ');
  const album = song.item.album.name;
  const albumImageUrl = song.item.album.images[0].url;
  const songUrl = song.item.external_urls.spotify;

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  });
}
