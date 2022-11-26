import { render } from 'utils/tests';
import { ColorThemeScriptTag } from '.';

describe('<ColorThemeScriptTag />', () => {
  it('should render correctly', () => {
    const { container } = render(<ColorThemeScriptTag />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
