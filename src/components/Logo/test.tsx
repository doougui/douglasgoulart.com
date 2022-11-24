import { render } from 'utils/tests';

import { Logo } from '.';

describe('<Logo />', () => {
  it('should render correctly', () => {
    const { container } = render(<Logo />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
