import { ColorThemeProvider } from 'contexts/ColorThemeContext';
import { render, screen } from 'utils/tests';

import { Logo } from '.';

describe('<Logo />', () => {
  it('should render the logo', () => {
    const { container } = render(<Logo />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with dark theme by default', () => {
    render(<Logo />);

    expect(screen.getByTestId('name')).toHaveAttribute('fill', '#EDEDEF');
    expect(screen.getByTestId('dot')).toHaveAttribute('fill', '#107BEB');
  });

  it('renders with light theme', () => {
    render(
      <ColorThemeProvider initialTheme="light">
        <Logo />
      </ColorThemeProvider>,
    );

    expect(screen.getByTestId('name')).toHaveAttribute('fill', '#1A1523');
    expect(screen.getByTestId('dot')).toHaveAttribute('fill', '#107BEB');
  });
});
