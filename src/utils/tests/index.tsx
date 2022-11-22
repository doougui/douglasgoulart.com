import { RenderOptions, render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';

function Provider({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

const customRender = (
  ui: React.ReactElement,
  { ...renderOptions }: Omit<RenderOptions, 'wrapper'> = {},
) => render(ui, { wrapper: Provider, ...renderOptions });

export * from '@testing-library/react';
export { customRender as render };
