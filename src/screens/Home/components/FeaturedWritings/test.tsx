import { render, screen } from 'utils/tests';

import { FeaturedWritings } from '.';

jest.mock('components/Writing', () => ({
  __esModule: true,
  Writing: () => <div data-testid="writing" />,
}));

describe('<FeaturedWritings />', () => {
  it('should render correctly', () => {
    render(<FeaturedWritings />);

    expect(
      screen.getByRole('heading', { name: 'Featured writings' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Read all' })).toBeInTheDocument();

    expect(screen.getAllByTestId('writing')).toHaveLength(3);
  });
});
