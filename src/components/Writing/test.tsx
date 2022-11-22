import { render, screen } from 'utils/tests';
import writingMocks from 'screens/Writings/mock';
import { WritingProps, Writing } from 'components/Writing';

jest.mock('next/link', () => ({
  __esModule: true,
  default: (linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...linkProps}>{linkProps.children}</a>
  ),
}));

const props: WritingProps = {
  slug: writingMocks[0].slug,
  title: writingMocks[0].title,
  cover: writingMocks[0].cover,
  excerpt: writingMocks[0].excerpt,
  publishedAt: writingMocks[0].publishedAt,
};

describe('<Writing />', () => {
  it('should render correctly', () => {
    render(<Writing {...props} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/writings/mock1');
    expect(
      screen.getByRole('img', { name: 'Mock Writing 1' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Mock Writing 1')).toBeInTheDocument();
    expect(screen.getByText('This is a mock writing 1')).toBeInTheDocument();
    expect(screen.getByText('November 15, 2022')).toBeInTheDocument();
  });
});
