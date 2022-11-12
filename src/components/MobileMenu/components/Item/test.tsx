import { render, screen } from 'utils/tests';

import { Item } from '.';

jest.mock('next/link', () => ({
  __esModule: true,
  default: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props}>{props.children}</a>
  ),
}));

describe('<Item />', () => {
  it('should render correctly', () => {
    const { container } = render(<Item href="/item">Item</Item>);

    expect(screen.getByRole('link')).toHaveAttribute('href', '/item');
    expect(container.firstChild).toMatchSnapshot();
  });
});
