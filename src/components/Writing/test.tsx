import { render, screen } from 'utils/tests';

import { Writing } from '.';

describe('<Writing />', () => {
  it('should render correctly', () => {
    render(<Writing />);

    expect(
      screen.getByRole('heading', { name: /Writing/i }),
    ).toBeInTheDocument();
  });
});
