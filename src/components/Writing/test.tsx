import { render, screen } from 'utils/tests';

import { Writing } from '.';

jest.mock('components/Image', () => ({
  __esModule: true,
  Image: () => <div data-testid="cover-image" />,
}));

describe('<Writing />', () => {
  it('should render correctly', () => {
    render(<Writing />);

    expect(screen.getByTestId('cover-image')).toBeInTheDocument();

    expect(
      screen.getByText('Why I Build Design Systems with Stitches and Radix'),
    ).toBeInTheDocument();
    expect(screen.getByText('A biased view.')).toBeInTheDocument();
    expect(screen.getByText('April 26, 2021')).toBeInTheDocument();
  });
});
