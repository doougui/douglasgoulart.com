import { Stack } from 'components/Stack';
import { Base } from 'layouts/Base';
import { AboutMe } from './components/AboutMe';
import * as S from './styles';

export function About() {
  return (
    <Base>
      <Stack spacing="5rem">
        <S.Title>Who am I</S.Title>
        <AboutMe />
      </Stack>
    </Base>
  );
}
