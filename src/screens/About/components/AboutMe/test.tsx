import { render } from 'utils/tests';

import { AboutMe } from '.';

jest.mock('components/Image', () => ({
  __esModule: true,
  Image: () => <div data-testid="me-image" />,
}));

describe('<AboutMe />', () => {
  it('should render correctly', () => {
    const { container } = render(<AboutMe />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
