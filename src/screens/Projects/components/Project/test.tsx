import { render, screen } from 'utils/tests';
import projectMock from './mock';

import { Project } from '.';

describe('<Project />', () => {
  it('should title, description, accomplishments and tech stack', () => {
    const { container } = render(<Project {...projectMock} />);

    expect(screen.getByRole('link', { name: /Appointful/i })).toHaveAttribute(
      'href',
      'https://example.com',
    );

    expect(
      screen.getByRole('heading', { name: 'Appointful' }),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Appointful is an API made in Node.js to manage dentist appointments. There you can list dentists and appointments, schedule appointments, cancel appointments and much more.',
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        'Appled design patterns such as Factory, Adapter, Composite and maniy more;',
      ),
    ).toBeInTheDocument();

    expect(screen.getByText('Applied SOLID principles;')).toBeInTheDocument();

    expect(
      screen.getByText(
        'TypeScript, Node.js, Express.js, PostgreSQL, Prisma, ESLint, Prettier, Vitest, Swagger',
      ),
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
