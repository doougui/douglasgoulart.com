import { render, screen } from 'utils/tests';

import { Input } from '.';

describe('<Input />', () => {
  it('should render the input', () => {
    const { container } = render(<Input placeholder="input" />);

    expect(screen.getByPlaceholderText('input')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
