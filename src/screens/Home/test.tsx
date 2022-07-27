import { render, screen } from 'utils/tests';

import { Home } from '.';

jest.mock('components/Menu', () => ({
  __esModule: true,
  Menu: () => <div data-testid="menu" />,
}));

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument();
  });
});
