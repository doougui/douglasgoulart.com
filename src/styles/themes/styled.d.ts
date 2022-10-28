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
      weights: {
        light: number;
        normal: number;
        bold: number;
      };
      sizes: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
      };
      heights: {
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

      background: string;

      textDarker: string;
      textDark: string;

      highlightText: string;
      text: string;

      success: string;
      danger: string;
    };
  }
}
