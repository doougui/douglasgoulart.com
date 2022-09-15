import { useLocalStorage } from 'hooks/use-local-storage';
import React from 'react';

const COLOR_SCHEME_QUERY = '(prefers-color-scheme: dark)';

type UseDarkModeOutput = {
  isDarkMode: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
};

export function useDarkMode(defaultValue?: boolean): UseDarkModeOutput {
  const getPrefersScheme = React.useCallback((): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(COLOR_SCHEME_QUERY).matches;
    }

    return !!defaultValue;
  }, [defaultValue]);

  const [isDarkMode, setDarkMode] = useLocalStorage<boolean>(
    '@app:darkMode',
    getPrefersScheme(),
  );

  // Update darkMode if os prefers changes
  React.useEffect(() => {
    const handler = () => setDarkMode(getPrefersScheme);
    const matchMedia = window.matchMedia(COLOR_SCHEME_QUERY);

    matchMedia.addEventListener('change', handler);

    return () => {
      matchMedia.removeEventListener('change', handler);
    };
  }, [getPrefersScheme, setDarkMode]);

  return {
    isDarkMode,
    toggle: () => setDarkMode((prev: boolean) => !prev),
    enable: () => setDarkMode(true),
    disable: () => setDarkMode(false),
  };
}
