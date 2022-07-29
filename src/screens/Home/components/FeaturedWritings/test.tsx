import { render, screen } from 'utils/tests';

import { FeaturedWritings } from '.';

describe('<FeaturedWritings />', () => {
  it('should render correctly', () => {
    render(<FeaturedWritings />);

    expect(
      screen.getByRole('heading', { name: 'Featured writings' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Read all' })).toBeInTheDocument();
  });
});
