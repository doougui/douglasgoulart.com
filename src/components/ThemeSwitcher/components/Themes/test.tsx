import 'match-media-mock';
import { render, screen } from 'utils/tests';

import { Themes } from '.';

jest.mock('usehooks-ts', () => ({
  __esModule: true,
  useDarkMode: () => ({
    isDarkMode: false,
    disable: () => jest.fn(),
    enable: () => jest.fn(),
    toggle: () => jest.fn(),
  }),
}));

describe('<Themes />', () => {
  it('should render correctly', () => {
    const { container } = render(<Themes />);

    const lightToggle = screen.getByTestId('light-toggle');

    expect(lightToggle).toHaveStyle({
      background: '#504F57',
    });

    expect(container.firstChild).toMatchSnapshot();
  });
});
