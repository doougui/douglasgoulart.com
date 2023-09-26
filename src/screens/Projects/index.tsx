import { Heading1 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import { Base } from 'layouts/Base';
import { Project, ProjectProps } from 'screens/Projects/components/Project';
import { Stack } from 'components/Stack';
import { Button } from 'components/Button';
import * as S from './styles';

type ProjectsProps = {
  projects: ProjectProps[];
};

export function Projects({ projects }: ProjectsProps) {
  return (
    <Base>
      <Heading1>Projects</Heading1>
      <MutedText>
        Throughout my journey as a Software Engineer, I have had the opportunity
        to create and contribute to various projects. Some of these include:
      </MutedText>

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
