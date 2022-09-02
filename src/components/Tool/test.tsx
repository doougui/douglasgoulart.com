import { render } from 'utils/tests';
import toolMock from './mock';

import { Tool } from '.';

describe('<Tool />', () => {
  it('should render correctly', () => {
    const { container } = render(<Tool {...toolMock} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
