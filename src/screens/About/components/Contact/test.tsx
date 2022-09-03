import { render, screen } from 'utils/tests';

import { Contact } from '.';

describe('<Contact />', () => {
  it('should render title and contact button', () => {
    const { container } = render(<Contact />);

    expect(
      screen.getByRole('heading', { name: /Do you like what you see?/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: 'Send me a message' }),
    ).toHaveAttribute('href', 'mailto:douglaspigoulart@gmail.com');

    expect(container.firstChild).toMatchSnapshot();
  });
});
