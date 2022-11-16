import { render, screen } from 'utils/tests';
import writingMocks from 'screens/Writings/mock';
import { Writing } from '.';

jest.mock('next/link', () => ({
  __esModule: true,
  default: (linkProps: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...linkProps}>{linkProps.children}</a>
  ),
}));

const props = writingMocks[0];

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
