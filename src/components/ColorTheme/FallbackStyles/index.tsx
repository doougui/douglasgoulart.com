import { getVariableName } from 'utils/css/get-variable-name';
import { COLORS } from '../colors';

// if user doesn't have JavaScript enabled, set variables properly in a
// head style tag anyways (dark mode)
export function FallbackStyles() {
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n${getVariableName('color', name)}: ${colorByTheme.dark};`;
    },
    '',
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
}
