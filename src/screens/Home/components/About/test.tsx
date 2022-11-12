import React from 'react';
import { render, screen } from 'utils/tests';
import { About } from '.';

jest.mock('next/link', () => ({
  __esModule: true,
  default: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a {...props}>{props.children}</a>
  ),
}));

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

    expect(screen.getByLabelText("Douglas' GitHub")).toHaveAttribute(
      'href',
      'https://github.com/doougui',
    );

    expect(screen.getByLabelText("Douglas' Linkedin")).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/douglaspigoulart/',
    );

    expect(screen.getByLabelText("Douglas' Twitter")).toHaveAttribute(
      'href',
      'https://twitter.com/oDougui',
    );
  });
});
