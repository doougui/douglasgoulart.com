import { Heading1 } from 'components/Headings';
import { Stack } from 'components/Stack';
import { Base } from 'layouts/Base';
import { AboutMe } from './components/AboutMe';
import { MyStack } from './components/MyStack';

export function About() {
  return (
    <Base>
      <Stack spacing="5rem">
        <Heading1>Who am I</Heading1>
        <AboutMe />
        <MyStack />
      </Stack>
    </Base>
  );
}
