import { render, screen } from 'utils/tests';

import { Home } from '.';

jest.mock('components/Menu', () => ({
  __esModule: true,
  Menu: () => <div data-testid="menu" />,
}));

jest.mock('./components/Header', () => ({
  __esModule: true,
  Header: () => <div data-testid="header" />,
}));

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Home />);

    expect(screen.getByTestId('menu')).toBeInTheDocument();
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
