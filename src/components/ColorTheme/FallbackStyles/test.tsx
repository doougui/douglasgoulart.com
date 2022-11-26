import { render } from '@testing-library/react';
import { FallbackStyles } from '.';

describe('<FallbackStyles />', () => {
  it('should render dark theme by default', () => {
    const { container } = render(<FallbackStyles />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <style>
        html { 
      --color-primary: #107BEB;
      --color-secondary: #1C1C1C;
      --color-tertiary: #2D2D2F;
      --color-background: #151718;
      --color-textDarker: #504F57;
      --color-textDark: #888888;
      --color-highlightText: #EDEDEF;
      --color-text: #EDEDEF;
      --color-success: #26FF56;
      --color-danger: #FF4747; }
      </style>
    `);
  });
});
