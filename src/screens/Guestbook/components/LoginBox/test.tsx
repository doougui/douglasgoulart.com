import { render, screen } from 'utils/tests';

import { LoginBox } from '.';

describe('<LoginBox />', () => {
  it('should render heading, log in button and user information usage message', () => {
    render(<LoginBox />);

    expect(
      screen.getByRole('heading', { name: /Log in to sign the guestbook/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'You are a time traveler. Use your wisdom to share the secrets of the universe to the people of the future.',
      ),
    ).toBeInTheDocument();

    expect(screen.getByRole('button', { name: 'Log in' })).toBeInTheDocument();

    expect(
      screen.getByText(
        'Your information is only used to display your name and reply by email.',
      ),
    ).toBeInTheDocument();
  });
});
