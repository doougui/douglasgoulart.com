import { render, screen } from 'utils/tests';

import { List } from '.';
import { Item } from '../Item';

jest.mock('../Item', () => ({
  __esModule: true,
  Item: () => <div data-testid="item" />,
}));

describe('<List />', () => {
  it('should render correctly with children', () => {
    const { container } = render(
      <List>
        <Item href="/">Home</Item>
        <Item href="/about">About</Item>
      </List>,
    );

    expect(screen.getAllByTestId('item')).toHaveLength(2);

    expect(container.firstChild).toMatchSnapshot();
  });
});
