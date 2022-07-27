import { render, screen } from 'utils/tests';

import { Base } from '.';

jest.mock('components/Menu', () => ({
  __esModule: true,
  Menu: () => <div data-testid="menu" />,
}));

describe('<Base />', () => {
  it('should render children', () => {
    render(<Base>Base</Base>);

    expect(screen.getByText('Base')).toBeInTheDocument();
  });
});
