import { Heading1 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import { Base } from 'layouts/Base';
import { Project, ProjectProps } from 'components/Project';
import { Stack } from 'components/Stack';
import { Button } from 'components/Button';
import * as S from './styles';

export function Projects() {
  const projects: ProjectProps[] = [
    {
      title: 'This website',
      description:
        "Douglasgoulart.com is my personal space. This is where I like to share some cool stuff I learn along my way as a software engineer. It's also where you can find some additional information about me, including all my links.",
      accomplishments: [
        'Architected, created and developed the entire application;',
        'Designed the UI from scratch on Figma;',
        'Built all the front-end components;',
        'Used Next.js API routes to integrate with external APIs like Spotify and Mailchimp;',
        'Wrote unit tests using Jest and React Testing Library;',
        'Used MDX to write customized and rich blog posts;',
        'Used Storybook to build and display UI components in isolation;',
      ],
      url: 'https://github.com/doougui/douglasgoulart.com',
      stack: [
        'TypeScript',
        'Next.js',
        'React.js',
        'Storybook',
        'Styled-Components',
        'Jest',
        'React Testing Library',
        'ESLint',
        'Prettier',
      ],
    },
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

      <Stack spacing="3rem">
        <S.Projects>
          <Stack spacing="3rem">
            {projects.map((project) => (
              <Project key={project.title} {...project} />
            ))}
          </Stack>
        </S.Projects>

        <Button as="a" href="https://github.com/doougui" target="_blank">
          See all my projects
        </Button>
      </Stack>
    </Base>
  );
}
