import { render, screen } from 'utils/tests';
import theme from 'styles/themes/default';

import { Menu } from '.';

jest.mock('components/Logo', () => ({
  __esModule: true,
  Logo: () => <div data-testid="logo" />,
}));

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: '',
  pathname: '/',
  route: '/',
}));

describe('<Menu />', () => {
  it('should render the logo and menu items', () => {
    render(<Menu />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Writings' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Guestbook' })).toBeInTheDocument();
  });

  it('should render active and inactive menu items', () => {
    render(<Menu />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveStyle({
      color: theme.colors.primary,
    });

    expect(screen.getByRole('link', { name: 'About' })).toHaveStyle({
      color: theme.colors.text,
    });
  });
});
