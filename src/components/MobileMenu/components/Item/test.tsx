import { render, screen } from 'utils/tests';

import { Item } from '.';

describe('<Item />', () => {
  it('should render correctly', () => {
    const { container } = render(<Item href="/item">Item</Item>);

    expect(screen.getByRole('link', { name: 'Item' })).toHaveAttribute(
      'href',
      '/item',
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
