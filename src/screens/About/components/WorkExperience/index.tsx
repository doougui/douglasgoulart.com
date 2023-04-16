import { Heading2 } from 'components/Headings';
import { Position, PositionProps } from 'components/Position';
import { MutedText } from 'components/MutedText';
import { Stack } from 'components/Stack';
import * as S from './styles';

export function WorkExperience() {
  const positions: PositionProps[] = [
    {
      title: 'Software Developer',
      company: 'Tecimob',
      startDate: 'Aug 2021',
      endDate: 'Present',
      responsabilities: [
        'Write internal projects to speed up the workflow of the other members of the company',
        'Write modern, maintainable and performant code for a diverse array of clients using primarily React.js and its ecosystem',
        'Design the UI, defining the overall technical architecture and developing our mobile application with over 5000 users by using React Native with tools like TypeScript, Styled Components, Jest, Git, etc.',
        'Architect, design and lead the development of a Chrome extension to integrate with WhatsApp and ease the workflow of our users',
      ],
    },
    {
      title: 'Junior Full-Stack Developer',
      company: 'QuikDev',
      startDate: 'May 2021',
      endDate: 'Aug 2021',
      responsabilities: [
        'Maintain and evolve the enterprise management application Terravista while helping more than 253 enterprises grow',
        'Work as a full-stack developer by making use of technologies like PHP with Zend Framework, Docker and JavaScript',
        'Collaborate closely with team members to deliver a high quality product by making use of SCRUM as an Agile Framework',
      ],
    },
  ];

  return (
    <section>
      <Heading2>Work Experience</Heading2>
      <MutedText>
        These are some of the awesome places I have been able to contribute to
        and make things happen
      </MutedText>

      <S.Positions>
        <Stack spacing="3rem">
          {positions.map((position) => (
            <Position
              key={`${position.title}-${position.company}`}
              {...position}
            />
          ))}
        </Stack>
      </S.Positions>
    </section>
  );
}
