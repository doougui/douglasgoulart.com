import { render, screen } from 'utils/tests';
import { About } from '.';

describe('<About />', () => {
  it('should render correctly', () => {
    const { container } = render(<About />);

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render "More about me" link and social media links', () => {
    render(<About />);

    expect(screen.getByRole('link', { name: 'More about me' })).toHaveAttribute(
      'href',
      '/about',
    );

    expect(screen.getByTestId('github-link')).toHaveAttribute(
      'href',
      'https://github.com/doougui',
    );

    expect(screen.getByTestId('linkedin-link')).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/douglaspigoulart/',
    );

    expect(screen.getByTestId('twitter-link')).toHaveAttribute(
      'href',
      'https://twitter.com/oDougui',
    );
  });
});
