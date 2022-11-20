export type Theme = 'dark' | 'light';

export type Color = {
  dark: string;
  light: string;
};

export type Colors = {
  [key: string]: Color;
};
