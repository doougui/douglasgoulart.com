import { Heading2 } from 'components/Headings';
import { Position, PositionProps } from 'components/Position';
import { SmallText } from 'components/SmallText';
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
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
        'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress, Prismic, and Netlify',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis',
      ],
    },
    {
      title: 'Junior Full-Stack Developer',
      company: 'QuikDev',
      startDate: 'May 2021',
      endDate: 'Aug - 2021',
      responsabilities: [
        'Developed and shipped highly interactive web applications for Apple Music using Ember.js',
        'Built and shipped the Apple Music Extension within Facebook Messenger leveraging third-party and internal APIs',
        "Architected and implemented the front-end of Apple Music's embeddable web player widget, which lets users log in and listen to full songs in the browser",
        'Contributed extensively to MusicKit.js, a JavaScript framework that allows developers to add an Apple Music player to their web apps',
      ],
    },
  ];

  return (
    <section>
      <Heading2>Work Experience</Heading2>
      <SmallText>
        These are some of the awesome places I have been able to contribute to
        and make things happen
      </SmallText>

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
