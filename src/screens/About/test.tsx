import { render, screen } from 'utils/tests';

import { About } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: '',
  pathname: '/',
  route: '/',
}));

jest.mock('./components/AboutMe', () => ({
  __esModule: true,
  AboutMe: () => <div data-testid="about-me" />,
}));

jest.mock('./components/MyStack', () => ({
  __esModule: true,
  MyStack: () => <div data-testid="my-stack" />,
}));

jest.mock('./components/WorkExperience', () => ({
  __esModule: true,
  WorkExperience: () => <div data-testid="work-experience" />,
}));

describe('<About />', () => {
  it('should render page title', () => {
    render(<About />);

    expect(
      screen.getByRole('heading', { name: 'Who am I' }),
    ).toBeInTheDocument();
  });

  it('should render the sections', () => {
    render(<About />);

    expect(screen.getByTestId('about-me')).toBeInTheDocument();
    expect(screen.getByTestId('my-stack')).toBeInTheDocument();
    expect(screen.getByTestId('work-experience')).toBeInTheDocument();
  });
});
