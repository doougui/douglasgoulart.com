import { render, screen } from 'utils/tests';
import { Writing } from '.';
import writingMock from './mock';

jest.mock('next/link', () => ({
  __esModule: true,
  default: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props}>{props.children}</a>
  ),
}));

describe('<Writing />', () => {
  it('should render correctly', () => {
    render(<Writing {...writingMock} />);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/writings/mock');
    expect(
      screen.getByRole('img', { name: 'Mock Writing' }),
    ).toBeInTheDocument();
    expect(screen.getByText('Mock Writing')).toBeInTheDocument();
    expect(screen.getByText('This is a mock writing')).toBeInTheDocument();
    expect(screen.getByText('November 15, 2022')).toBeInTheDocument();
  });
});
