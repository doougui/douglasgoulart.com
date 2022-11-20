import { COLORS } from 'components/Theme/colors';
import { getVariableName, STORAGE_KEY } from 'components/Theme/config';
import { Color, Theme } from 'components/Theme/types';
import React from 'react';
import { getWrongContextUsageMessage } from 'utils/shared/get-wrong-context-usage-message';

type ColorThemeContextData = {
  colorMode: Theme | undefined;
  setColorMode: (value: Theme) => void;
};

type ColorThemeProviderProps = {
  children: React.ReactNode;
};

export const ColorThemeContextDefaultValues = {
  colorMode: 'dark' as Theme,
  setColorMode: () => null,
};

export const ColorThemeContext = React.createContext<ColorThemeContextData>(
  ColorThemeContextDefaultValues,
);

export function ColorThemeProvider(props: ColorThemeProviderProps) {
  const [colorMode, rawSetColorMode] = React.useState<Theme | undefined>(
    undefined,
  );

  React.useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode',
    ) as Theme;

    if (!initialColorValue) return;

    rawSetColorMode(initialColorValue);
  }, []);

  const setColorMode = (value: Theme) => {
    const root = window.document.documentElement;

    rawSetColorMode(value);

    localStorage.setItem(STORAGE_KEY, value);

    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      root.style.setProperty(
        getVariableName('color', name),
        (colorByTheme as Color)[value],
      );
    });
  };

  const value = React.useMemo(() => ({ colorMode, setColorMode }), [colorMode]);

  return <ColorThemeContext.Provider value={value} {...props} />;
}

export function useColorTheme() {
  const context = React.useContext(ColorThemeContext);

  if (!context) {
    throw new Error(
      getWrongContextUsageMessage('useColorTheme', 'ColorThemeProvider'),
    );
  }

  return context;
}
