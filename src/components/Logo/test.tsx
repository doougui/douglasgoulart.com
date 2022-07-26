import { render, screen } from 'utils/tests';

import { Logo } from '.';

describe('<Logo />', () => {
  it('should render correctly', () => {
    const { container } = render(<Logo />);

    expect(
      screen.getByRole('heading', { name: /Douglas./i }),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
