import { render, screen } from 'utils/tests';
import { About } from '.';

describe('<About />', () => {
  it('should render correctly', () => {
    render(<About />);

    expect(
      screen.getByText(
        'I‘m a UI developer based in Barcelona. I‘m interested in design systems, web3, user/dev experience and under engineering.',
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'I‘m currently doing UI/DX at Rainbow to help create the world‘s friendliest wallet.',
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Previously, I worked at Modulz. Where I co-created Radix, designed the Stitches API and led the developer community.',
      ),
    ).toBeInTheDocument();
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
