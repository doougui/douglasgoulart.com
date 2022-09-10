import { render } from 'utils/tests';

import { Toggle } from '.';

describe('<Toggle />', () => {
  it('should render correctly', () => {
    const { container } = render(<Toggle toggle={jest.fn()} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
