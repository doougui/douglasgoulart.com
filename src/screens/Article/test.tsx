import 'match-media-mock';
import { render } from 'utils/tests';

import { Article } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: '',
  pathname: '/',
  route: '/',
}));

describe('<Article />', () => {
  it('should render correctly', () => {
    render(<Article />);
  });
});
