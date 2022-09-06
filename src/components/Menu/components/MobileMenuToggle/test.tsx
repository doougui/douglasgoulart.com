import { render } from 'utils/tests';

import { MobileMenuToggle } from '.';

describe('<MobileMenuToggle />', () => {
  it('should render correctly', () => {
    const { container } = render(<MobileMenuToggle />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
