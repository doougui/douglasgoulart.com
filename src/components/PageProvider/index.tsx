import { useTheme } from 'next-themes';
import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import dark from 'styles/themes/dark';
import light from 'styles/themes/light';

type PageProviderProps = {
  children: React.ReactNode;
};

export function PageProvider({ children }: PageProviderProps) {
  const [selectedTheme, setSelectedTheme] = React.useState<DefaultTheme | null>(
    null,
  );

  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    if (resolvedTheme === 'light') {
      setSelectedTheme(light);
      return;
    }

    setSelectedTheme(dark);
  }, [resolvedTheme]);

  if (!selectedTheme) return null;

  return <ThemeProvider theme={selectedTheme}>{children}</ThemeProvider>;
}
