export type Actions = {
  disallows: {
    resuming: boolean;
  };
};

type ExternalUrls = {
  [key: string]: string;
};

type ExternalIds = {
  [key: string]: string;
};

export type Context = {
  external_urls: ExternalUrls;
  href: string;
  type: string;
  uri: string;
};

export type Artist = {
  external_urls: ExternalUrls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
};

export type Image = {
  width: number;
  height: number;
  url: string;
};

export type AvailableMarket = string;

export type Album = {
  album_type: string;
  artists: Artist[];
  available_markets: AvailableMarket[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

export type Item = {
  album: Album;
  artists: Artist[];
  available_markets: AvailableMarket[];
  disc_number: number;
  duration_ms: number;
  explicit: number;
  external_ids: ExternalIds;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
};
