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
  AboutMe: () => <div data-testid="aboutMe" />,
}));

jest.mock('./components/MyStack', () => ({
  __esModule: true,
  MyStack: () => <div data-testid="myStack" />,
}));

jest.mock('./components/WorkExperience', () => ({
  __esModule: true,
  WorkExperience: () => <div data-testid="workExperience" />,
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

    expect(screen.getByTestId('aboutMe')).toBeInTheDocument();
    expect(screen.getByTestId('myStack')).toBeInTheDocument();
    expect(screen.getByTestId('workExperience')).toBeInTheDocument();
  });
});
