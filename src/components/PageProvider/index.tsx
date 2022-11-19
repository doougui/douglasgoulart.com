import { useTheme } from 'next-themes';
import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import dark from 'styles/themes/dark';
import light from 'styles/themes/light';

type PageProviderProps = {
  children: React.ReactNode;
};

export function PageProvider({ children }: PageProviderProps) {
  const { theme } = useTheme();
  const [selectedTheme, setSelectedTheme] = React.useState<DefaultTheme>(dark);

  React.useEffect(() => {
    if (theme === 'light') {
      setSelectedTheme(light);
      return;
    }

    setSelectedTheme(dark);
  }, [theme]);

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
}
