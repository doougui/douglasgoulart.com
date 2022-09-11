import { render } from 'utils/tests';

import { Footer } from '.';

describe('<Footer />', () => {
  it('should render correctly', () => {
    const { container } = render(<Footer />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
