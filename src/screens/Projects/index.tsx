import { Heading1 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import { Base } from 'layouts/Base';
import { Project, ProjectProps } from 'components/Project';
import * as S from './styles';

export function Projects() {
  const projects: ProjectProps[] = [
    {
      title: 'Appointful',
      description:
        'Appointful is an API made in Node.js to manage dentist appointments. There you can list dentists and appointments, schedule appointments, cancel appointments and much more.',
      accomplishments: [
        'Applied design patterns such as Factory, Adapter, Composite and many more;',
        'Applied SOLID principles;',
        'Wrote unit and end-to-end tests with Vitest to assert that everything works flawlessly;',
        'Documented API routes with Swagger;',
        'Used Prisma with PostgreSQL to persist and retrieve data;',
        'Deployed both database and application to production with Render.com;',
      ],
      url: 'https://github.com/doougui/appointful',
      stack: [
        'TypeScript',
        'Node.js',
        'Express.js',
        'PostgreSQL',
        'Prisma',
        'ESLint',
        'Prettier',
        'Vitest',
        'Swagger',
      ],
    },
  ];

  return (
    <Base>
      <Heading1>Projects</Heading1>
      <MutedText>TO-DO</MutedText>

      <S.Projects>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </S.Projects>
    </Base>
  );
}
