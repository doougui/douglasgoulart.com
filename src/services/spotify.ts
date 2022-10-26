import axios from 'axios';
import { Actions, Context, Item } from 'types/Spotify';

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');
const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

type TokenResponse = {
  access_token: string;
  expires_in: number;
  scope: string;
  token_type: string;
};

type TokenError = {
  error: string;
  error_description: string;
};

type NowPlayingResponse = {
  actions: Actions;
  context: Context;
  currently_playing_type: string;
  item: Item;
  is_playing: boolean;
  progress_ms: number;
  timestamp: number;
};

export const isTokenError = (
  req: TokenResponse | TokenError,
): req is TokenError => {
  return 'error' in req && 'error_description' in req;
};

const getAccessToken = async () => {
  const response = axios.post<TokenResponse | TokenError>(
    TOKEN_ENDPOINT,
    {
      grant_type: 'refresh_token',
      refresh_token: refreshToken,
    },
    {
      headers: {
        Authorization: `Basic ${basic}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  return response;
};

export const getNowPlaying = async () => {
  const accessTokenReq = await getAccessToken();

  if (isTokenError(accessTokenReq.data)) return null;

  const { access_token: accessToken } = accessTokenReq.data;

  return axios.get<NowPlayingResponse>(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};
