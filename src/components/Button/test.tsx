import { render, screen } from 'utils/tests';

import { Button } from '.';

describe('<Button />', () => {
  it('should render correctly', () => {
    render(<Button />);

    expect(
      screen.getByRole('heading', { name: /Button/i }),
    ).toBeInTheDocument();
  });
});
