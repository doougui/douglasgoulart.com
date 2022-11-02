import { render, screen } from 'utils/tests';

import { FeaturedWritings, FeaturedWritingsProps } from '.';

jest.mock('components/Writing', () => ({
  __esModule: true,
  Writing: () => <div data-testid="writing" />,
}));

const props: FeaturedWritingsProps = {
  data: [],
};

describe('<FeaturedWritings />', () => {
  it('should render correctly', () => {
    render(<FeaturedWritings {...props} />);

    expect(
      screen.getByRole('heading', { name: 'Featured writings' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Read all' })).toBeInTheDocument();
  });
});
