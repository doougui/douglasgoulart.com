import { render, screen } from 'utils/tests';

import { Home } from '.';

describe('<Home />', () => {
  it('should render correctly', () => {
    render(<Home />);

    expect(screen.getByRole('heading', { name: /Home/i })).toBeInTheDocument();
  });
});
