import { render, screen } from 'utils/tests';

import { MyStack } from '.';

describe('<MyStack />', () => {
  it('should render correctly', () => {
    render(<MyStack />);

    expect(
      screen.getByRole('heading', { name: /My stack/i }),
    ).toBeInTheDocument();
  });
});
