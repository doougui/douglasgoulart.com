import { render } from 'utils/tests';

import { ThemeSwitcher } from '.';

describe('<ThemeSwitcher />', () => {
  it('should render correctly', () => {
    const { container } = render(<ThemeSwitcher />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
