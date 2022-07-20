import { RenderOptions, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/themes/default';

const customRender = (
  ui: React.ReactElement,
  { ...renderOptions }: RenderOptions = {},
) => render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>, renderOptions);

export * from '@testing-library/react';
export { customRender as render };
