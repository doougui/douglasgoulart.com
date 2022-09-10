import { render, screen } from 'utils/tests';

import { Navigation } from '.';

describe('<Navigation />', () => {
  it('should render closed state', () => {
    const { container } = render(<Navigation isOpen={false} />);

    expect(screen.getByTestId('container')).toHaveStyle({
      pointerEvents: 'none',
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render open state', () => {
    render(<Navigation isOpen={true} />);

    expect(screen.getByTestId('container')).toHaveStyle({
      pointerEvents: 'auto',
    });
  });
});
