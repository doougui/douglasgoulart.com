import { render, screen } from 'utils/tests';

import { Writings } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: '',
  pathname: '/',
  route: '/',
}));

jest.mock('./components/Filter', () => ({
  __esModule: true,
  Filter: () => <div data-testid="filter" />,
}));

jest.mock('components/Writing', () => ({
  __esModule: true,
  Writing: () => <div data-testid="writing" />,
}));

describe('<Writings />', () => {
  it('should render heading, filter and writings', () => {
    const { container } = render(<Writings />);

    expect(
      screen.getByRole('heading', { name: /Writings/i }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Brain dumps, explorations, and how-to guides. I write about different topics, such as design system, accessibility, start ups and user/dev experience.',
      ),
    ).toBeInTheDocument();

    expect(screen.getByTestId('filter')).toBeInTheDocument();

    expect(screen.getAllByTestId('writing')).toHaveLength(6);

    expect(container.firstChild).toMatchSnapshot();
  });
});
