import { useTheme } from 'next-themes';
import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import dark from 'styles/themes/dark';
import light from 'styles/themes/light';

type PageProviderProps = {
  children: React.ReactNode;
};

export function PageProvider({ children }: PageProviderProps) {
  const [mounted, setMounted] = React.useState(false);
  const { theme } = useTheme();
  const [selectedTheme, setSelectedTheme] = React.useState<DefaultTheme>(dark);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (theme === 'light') {
      setSelectedTheme(light);
      return;
    }

    setSelectedTheme(dark);
  }, [theme]);

  if (!mounted) return null;

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
}
