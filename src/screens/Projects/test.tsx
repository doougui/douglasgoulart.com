import { render, screen } from 'utils/tests';
import projectsMock from './mock';

import { Projects } from '.';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter');

useRouter.mockImplementation(() => ({
  push: jest.fn(),
  query: '',
  pathname: '/',
  route: '/',
}));

jest.mock('components/Project', () => ({
  __esModule: true,
  Project: () => <div data-testid="project" />,
}));

describe('<Projects />', () => {
  it('should render heading and projects', () => {
    const { container } = render(<Projects projects={projectsMock} />);

    expect(
      screen.getByRole('heading', { name: /Projects/i }),
    ).toBeInTheDocument();

    expect(screen.getAllByTestId('project')).toHaveLength(3);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render "See all projects" button', () => {
    render(<Projects projects={projectsMock} />);

    expect(
      screen.getByRole('link', { name: /See all my projects/i }),
    ).toHaveAttribute('href', 'https://github.com/doougui');
  });
});
