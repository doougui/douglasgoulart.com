import { render, screen } from 'utils/tests';

import { MutedText } from '.';

describe('<MutedText />', () => {
  it('should render correctly', () => {
    const { container } = render(<MutedText>This is a muted text</MutedText>);

    expect(screen.getByText('This is a muted text')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
