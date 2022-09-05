import { Button } from 'components/Button';
import { Heading2 } from 'components/Headings';
import * as S from './styles';

export function LoginBox() {
  return (
    <S.Container>
      <Heading2>Log in to sign the guestbook</Heading2>
      <S.Description>
        You are a time traveler. Use your wisdom to share the secrets of the
        universe to the people of the future.
      </S.Description>

      <S.Actions>
        <Button>Log in</Button>
        <S.InformationUsage>
          Your information is only used to display your name and reply by email.
        </S.InformationUsage>
      </S.Actions>
    </S.Container>
  );
}
