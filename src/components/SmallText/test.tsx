import { render, screen } from 'utils/tests';

import { SmallText } from '.';

describe('<SmallText />', () => {
  it('should render correctly', () => {
    const { container } = render(<SmallText>This is a small text</SmallText>);

    expect(screen.getByText('This is a small text')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
