import { render, screen } from 'utils/tests';
import writingsMock from 'screens/Writings/mock';
import { FeaturedWritings, FeaturedWritingsProps } from '.';

jest.mock('components/Writing', () => ({
  __esModule: true,
  Writing: () => <div data-testid="writing" />,
}));

const props: FeaturedWritingsProps = {
  data: writingsMock,
};

describe('<FeaturedWritings />', () => {
  it('should render heading, read all link and writings', () => {
    render(<FeaturedWritings {...props} />);

    expect(
      screen.getByRole('heading', { name: 'Featured writings' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Read all' })).toBeInTheDocument();

    expect(screen.getAllByTestId('writing')).toHaveLength(3);
  });
});
