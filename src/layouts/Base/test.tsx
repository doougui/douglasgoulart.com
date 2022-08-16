import { render, screen } from 'utils/tests';

import { Base } from '.';

jest.mock('components/Menu', () => ({
  __esModule: true,
  Menu: () => <div data-testid="menu" />,
}));

jest.mock('components/Footer', () => ({
  __esModule: true,
  Footer: () => <div data-testid="footer" />,
}));

describe('<Base />', () => {
  it('should render menu, children and footer', () => {
    render(<Base>Base</Base>);

    expect(screen.getByTestId('menu')).toBeInTheDocument();
    expect(screen.getByText('Base')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
