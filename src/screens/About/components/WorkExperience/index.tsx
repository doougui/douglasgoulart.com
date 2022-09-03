import { Heading2 } from 'components/Headings';
import { SmallText } from 'components/SmallText';
import { Stack } from 'components/Stack';
import * as S from './styles';

export function WorkExperience() {
  return (
    <S.Container>
      <Heading2>Work Experience</Heading2>
      <SmallText>
        These are some of the awesome places I have been able to contribute to
        and make things happen
      </SmallText>

      <Stack spacing="3rem" />
    </S.Container>
  );
}
