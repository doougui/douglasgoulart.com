import React from 'react';
import { render } from 'utils/tests';
import { Analytics } from '.';

jest.mock('next/script', () => ({
  __esModule: true,
  default: (props: React.ScriptHTMLAttributes<HTMLScriptElement>) => (
    <script {...props} />
  ),
}));

describe('<Base />', () => {
  it('should render analytics script', () => {
    const { container } = render(<Analytics />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <script
        async=""
        src="https://www.googletagmanager.com/gtag/js?id=X-XXXXXXXXXX"
      />
    `);
  });
});
