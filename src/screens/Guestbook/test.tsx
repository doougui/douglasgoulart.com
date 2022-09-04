import { render, screen } from 'utils/tests';

import { Guestbook } from '.';

describe('<Guestbook />', () => {
  it('should render correctly', () => {
    render(<Guestbook />);

    expect(
      screen.getByRole('heading', { name: /Guestbook/i }),
    ).toBeInTheDocument();
  });
});
