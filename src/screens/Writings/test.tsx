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

describe('<Writings />', () => {
  it('should render correctly', () => {
    render(<Writings />);

    expect(
      screen.getByRole('heading', { name: /Writings/i }),
    ).toBeInTheDocument();
  });
});
