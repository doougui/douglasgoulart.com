import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    grid: {
      container: string;
      gutter: string;
    };
    border: {
      radius: string;
    };
    layers: {
      base: number;
      menu: number;
      overlay: number;
      modal: number;
      alwaysOnTop: number;
    };
    transition: {
      default: string;
      fast: string;
    };
    font: {
      family: string;
      light: number;
      normal: number;
      bold: number;
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
      };
    };
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      mainBg: string;

      textDarker: string;
      textDark: string;
      text: string;
    };
  }
}
