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
        'Develop internal projects to speed up the workflow of the other members of the company.',
        'Architected, analyzed, and recreated the existing mobile application, resulting in an increased rating from 3.6 to 4.8 stars on Google Play Store and 4.9 stars on App Store.',
        'Redesigned the UI of our mobile application from scratch on Figma, led the entire development process, and published the updated application on both Google Play Store and App Store for Android and iOS users.',
        'Architected, designed and led the development of a Chrome extension, including UI design using Figma and code logic development with Webpack configuration. Also integrated with WhatsApp to enable realtors to send macro messages and media files, and successfully published the application on the Chrome Web Store.',
      ],
    },
    {
      title: 'Junior Full-Stack Developer',
      company: 'QuikDev',
      startDate: 'May 2021',
      endDate: 'Aug 2021',
      responsabilities: [
        'Maintained and evolved the enterprise management application Terravista while helping more than 253 enterprises grow.',
        'Worked as a full-stack developer by making use of technologies like PHP with Zend Framework, Docker and JavaScript.',
        'Collaborated closely with team members to deliver a high quality product by making use of SCRUM as an Agile Framework.',
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
