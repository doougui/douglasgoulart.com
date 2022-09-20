import 'match-media-mock';
import { render, screen } from 'utils/tests';

import { Guestbook } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: '',
  pathname: '/',
  route: '/',
}));

jest.mock('./components/LoginBox', () => ({
  __esModule: true,
  LoginBox: () => <div data-testid="login-box" />,
}));

describe('<Guestbook />', () => {
  it('should render correctly', () => {
    render(<Guestbook />);

    expect(
      screen.getByRole('heading', { name: /Guestbook/i }),
    ).toBeInTheDocument();

    expect(screen.getByTestId('login-box')).toBeInTheDocument();
  });
});
