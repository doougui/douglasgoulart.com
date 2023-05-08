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
        'Developed internal projects with over 100k interactions per month by using React.js and its ecosystem to streamline the workflow of company members.',
        'Successfully designed, analyzed, and recreated the existing mobile application, resulting in an increase in the rating from 3.6 to 4.8 stars on the Google Play Store and 4.9 stars on the App Store.',
        'Completely redesigned the user interface of our mobile application using Figma, led the entire development process and published the updated version of the application on the Google Play Store and App Store for Android and iOS users.',
        'Designed and led the development of a Chrome extension, including UI design using Figma and complete application development. This facilitated the work of thousands of real estate brokers, allowing them to focus on what really matters and streamlining their workflow.',
      ],
    },
    {
      title: 'Full-Stack Developer',
      company: 'QuikDev',
      startDate: 'May 2021',
      endDate: 'Aug 2021',
      responsabilities: [
        'Worked on the maintenance and evolution of the Terravista enterprise management application.',
        'Identified and solved problems in collaboration with the development team.',
        'Proposed code improvements to increase the scalability and stability of the application.',
        'Contributed to the success of the application, helping over 253 companies to grow.',
        'Improved the usability and user interface of the application, resulting in a more intuitive and satisfying experience for the users.',
      ],
    },
    {
      title: 'Freelancer web developer',
      company: 'home',
      startDate: 'Jan 2020',
      endDate: 'May 2021',
      responsabilities: [
        'Developed several customized web applications for national and international clients.',
        'Worked as a full-stack developer, taking responsibility for the complete construction of web applications, from UI/UX design creation to front-end and back-end implementation.',
        'Developed modern, accessible, and search engine optimized websites, using technologies such as HTML5, CSS3, JavaScript, and PHP. Ensured that the websites were compatible with various devices and browsers, providing the best possible experience to users.',
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
