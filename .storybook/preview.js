import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import * as NextImage from 'next/image';
import theme from 'styles/themes/default';
import dark from 'styles/themes/dark';
import light from 'styles/themes/light';
import { themes } from '@storybook/theming';
import { RouterContext } from "next/dist/shared/lib/router-context";

const OriginalNextImage = NextImage.default;

/* eslint no-import-assign: "off" */
/* eslint react/jsx-filename-extension: "off" */
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: light.colors.background,
      },
      {
        name: 'dark',
        value: dark.colors.background,
      },
    ],
  },
  darkMode: {
    dark: { ...themes.dark, appBg: 'black' },
    light: { ...themes.normal, appBg: 'red' }
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles removeBg />
        <Story />
      </ThemeProvider>
    );
  },
];
