import { render, screen } from 'utils/tests';

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
  it('should render the logo and desktop and mobile menu', () => {
    render(<Menu />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument();
    expect(screen.getByTestId('desktop-menu')).toBeInTheDocument();
  });
});
