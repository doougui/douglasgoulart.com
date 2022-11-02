import 'match-media-mock';
import { render, screen } from 'utils/tests';

import { Home } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: '',
  pathname: '/',
  route: '/',
}));

jest.mock('./components/Header', () => ({
  __esModule: true,
  Header: () => <div data-testid="header" />,
}));

jest.mock('./components/About', () => ({
  __esModule: true,
  About: () => <div data-testid="about" />,
}));

jest.mock('./components/FeaturedWritings', () => ({
  __esModule: true,
  FeaturedWritings: () => <div data-testid="featured-writings" />,
}));

jest.mock('./components/Contact', () => ({
  __esModule: true,
  Contact: () => <div data-testid="contact" />,
}));

describe('<Home />', () => {
  it('should render the sections', () => {
    render(<Home featuredWritings={[]} />);

    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('about')).toBeInTheDocument();
    expect(screen.getByTestId('featured-writings')).toBeInTheDocument();
    expect(screen.getByTestId('contact')).toBeInTheDocument();
  });
});
