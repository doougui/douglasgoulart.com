import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/global';
import * as NextImage from 'next/image';
import defaultTheme from 'styles/theme';
import { RouterContext } from "next/dist/shared/lib/router-context";
import { ColorThemeProvider } from 'contexts/ColorThemeContext';
import { COLORS } from 'components/ColorTheme/colors';

const OriginalNextImage = NextImage.default;

/* eslint no-import-assign: "off" */
/* eslint react/jsx-filename-extension: "off" */
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      width={0}
      height={0}
      blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAADAAQDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAbEAADAAMBAQAAAAAAAAAAAAABAgMABAURUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8Anz9voy1dCI2mectSE5ioFCqia+KCwJ8HzGMZPqJb1oPEf//Z"
    />
  ),
});

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'light',
        value: COLORS.background.light,
      },
      {
        name: 'dark',
        value: COLORS.background.dark,
      },
    ],
  },
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'circlehollow',
      // Array of plain string values or MenuItem shape (see below)
      items: ['light', 'dark'],
      // Property that specifies if the name of the item will be displayed
      showName: true,
      // Change title based on selected value
      dynamicTitle: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const theme = context.parameters.theme || context.globals.theme;

    return (
      <ThemeProvider theme={defaultTheme}>
        <ColorThemeProvider initialTheme={theme || 'dark'}>
          <GlobalStyles removeBg />
          <Story />
        </ColorThemeProvider>
      </ThemeProvider>
    );
  },
];
