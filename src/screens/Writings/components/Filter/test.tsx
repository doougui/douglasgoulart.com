import { render, screen } from 'utils/tests';
import userEvent from '@testing-library/user-event';

import { Filter } from '.';

describe('<Filter />', () => {
  it('should render correctly', () => {
    const { container } = render(<Filter />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render search', () => {
    render(<Filter />);

    expect(screen.getByPlaceholderText('Search articles')).toBeInTheDocument();
  });

  it('should render order filter', async () => {
    render(<Filter />);

    await userEvent.selectOptions(screen.getByRole('listbox'), 'Top');

    expect(
      screen.getByRole<HTMLOptionElement>('option', { name: 'New' }).selected,
    ).toBe(false);

    expect(
      screen.getByRole<HTMLOptionElement>('option', { name: 'Top' }).selected,
    ).toBe(true);

    expect(
      screen.getByRole<HTMLOptionElement>('option', { name: 'Hot' }).selected,
    ).toBe(false);
  });
});
