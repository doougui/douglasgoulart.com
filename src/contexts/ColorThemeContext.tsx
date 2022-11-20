import { COLORS } from 'components/ColorTheme/colors';
import { getVariableName, STORAGE_KEY } from 'components/ColorTheme/config';
import { Color, Theme } from 'components/ColorTheme/types';
import React from 'react';
import { getWrongContextUsageMessage } from 'utils/shared/get-wrong-context-usage-message';

type ColorThemeContextData = {
  colorMode: Theme | undefined;
  setColorMode: (value: Theme) => void;
};

type ColorThemeProviderProps = {
  initialTheme?: Theme;
  children: React.ReactNode;
};

export const ColorThemeContextDefaultValues = {
  colorMode: 'dark' as Theme,
  setColorMode: () => null,
};

export const ColorThemeContext = React.createContext<ColorThemeContextData>(
  ColorThemeContextDefaultValues,
);

export function ColorThemeProvider({
  initialTheme,
  ...props
}: ColorThemeProviderProps) {
  const [colorMode, rawSetColorMode] = React.useState<Theme | undefined>(
    undefined,
  );

  React.useEffect(() => {
    if (!initialTheme) return;

    rawSetColorMode(initialTheme);

    const root = window.document.documentElement;

    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      root.style.setProperty(
        getVariableName('color', name),
        (colorByTheme as Color)[initialTheme],
      );
    });
  }, [initialTheme]);

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
