import { getVariableName } from 'utils/css/get-variable-name';
import { COLORS } from '../colors';
import { STORAGE_KEY } from '../config';
import { Color, Colors, Theme } from '../types';

function setColorsByTheme(
  storageKey: string,
  variableNameGetter: (type: string, rawName: string) => string,
) {
  const colors: Colors | string = 'replaceWithColors';

  function getColorMode(): Theme {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const prefersDarkFromMQ = mql.matches;
    const defaultOS: Theme = prefersDarkFromMQ ? 'dark' : 'light';

    const storagedMode = localStorage.getItem(storageKey) as
      | 'dark'
      | 'light'
      | undefined;

    if (!storagedMode) return defaultOS;

    return storagedMode;
  }

  const root = document.documentElement;
  const mode = getColorMode();

  root.style.setProperty('--initial-color-mode', mode);

  if (typeof colors === 'string') return;
  Object.entries(colors).forEach(([name, colorByTheme]) => {
    root.style.setProperty(
      variableNameGetter('color', name),
      (colorByTheme as Color)[mode],
    );
  });
}

// This script prevents hydration mismatch and flash problems from color theme
// More info about this method at: https://www.joshwcomeau.com/react/dark-mode
export function ColorThemeScriptTag() {
  const boundFn = String(setColorsByTheme).replace(
    '"replaceWithColors"',
    JSON.stringify(COLORS),
  );

  const calledFunction = `(${boundFn})('${STORAGE_KEY}', ${getVariableName})`;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
}
