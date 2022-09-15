import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import * as NextImage from 'next/image';
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

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      // The icon for the toolbar item
      icon: 'circlehollow',
      // Array of options
      items: [
        { value: 'light', icon: 'circlehollow', title: 'light' },
        { value: 'dark', icon: 'circle', title: 'dark' },
      ],
      // Property that specifies if the name of the item will be displayed
      showName: true,
    },
  },
}

export const decorators = [
  (Story, context) => {
    const theme = context.parameters.theme || context.globals.theme;
    const storyTheme = theme === 'dark' ? dark : light;

    return (
      <ThemeProvider theme={storyTheme}>
        <GlobalStyles removeBg />
        <Story />
      </ThemeProvider>
    );
  },
];
