import { render, screen } from 'utils/tests';

import { MobileMenu } from '.';

jest.mock('./components/Navigation', () => ({
  __esModules: true,
  Navigation: () => <div data-testid="navigation" />,
}));

jest.mock('./components/Toggle', () => ({
  __esModules: true,
  Toggle: () => <div data-testid="toggle" />,
}));

jest.mock('framer-motion', () => ({
  ...jest.requireActual('framer-motion'),
  useReducedMotion: () => true,
}));

describe('<MobileMenu />', () => {
  it('should render only on mobile devices', () => {
    render(<MobileMenu />);

    expect(screen.getByTestId('navigation').parentElement).toHaveStyleRule(
      'display',
      'none',
      {
        media: '(min-width: 768px)',
      },
    );

    expect(screen.getByTestId('navigation').parentElement).not.toHaveStyleRule(
      'display',
      'none',
      {
        media: '(max-width: 768px)',
      },
    );
  });

  it('should render navigation and toggle button', () => {
    render(<MobileMenu />);

    expect(screen.getByTestId('navigation')).toBeInTheDocument();
    expect(screen.getByTestId('toggle')).toBeInTheDocument();
  });
});
