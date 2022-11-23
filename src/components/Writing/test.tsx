import { render, screen } from 'utils/tests';
import writingMock from '__mocks__/writing';
import { WritingProps, Writing } from 'components/Writing';

jest.mock('next/link', () => ({
  __esModule: true,
  default: (linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...linkProps}>{linkProps.children}</a>
  ),
}));

const props: WritingProps = {
  slug: writingMock.slug,
  title: writingMock.title,
  cover: writingMock.cover,
  excerpt: writingMock.excerpt,
  publishedAt: writingMock.publishedAt,
};

describe('<Writing />', () => {
  it('should render correctly', () => {
    render(<Writing {...props} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/writings/mock');
    expect(
      screen.getByRole('img', { name: 'Mock Writing' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Mock Writing')).toBeInTheDocument();
    expect(screen.getByText('This is a mock writing')).toBeInTheDocument();
    expect(screen.getByText('November 15, 2022')).toBeInTheDocument();
  });
});
