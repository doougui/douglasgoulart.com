import { render } from 'utils/tests';

import { Projects } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: '',
  pathname: '/',
  route: '/',
}));

describe('<Projects />', () => {
  it('should render correctly', () => {
    render(<Projects />);
  });
});
