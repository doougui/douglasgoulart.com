import { render, screen } from 'utils/tests';
import positionMock from './mock';

import { Position } from '.';

describe('<Position />', () => {
  it('should render title, company, period and responsabilities', () => {
    const { container } = render(<Position {...positionMock} />);

    expect(
      screen.getByRole('heading', { name: 'Software Developer at Tecimob' }),
    ).toBeInTheDocument();

    expect(screen.getByText('Aug 2021 - Present')).toBeInTheDocument();

    expect(
      screen.getByText(
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
      ),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
