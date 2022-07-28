import { render, screen } from 'utils/tests';

import { Link } from '.';

describe('<Link />', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Link href="https://example.com">Example</Link>,
    );

    expect(screen.getByRole('link', { name: 'Example' })).toHaveAttribute(
      'href',
      'https://example.com',
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
