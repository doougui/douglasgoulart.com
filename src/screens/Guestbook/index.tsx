import { GuestMessage } from 'components/GuestMessage';
import { Heading1 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import { Base } from 'layouts/Base';
import { LoginBox } from './components/LoginBox';
import guestMessagesMock from './mock';
import * as S from './styles';

export function Guestbook() {
  return (
    <Base>
      <Heading1>Guestbook</Heading1>
      <MutedText>
        Leave a comment below. It could be anything – appreciation, information,
        wisdom, or even humor. Surprise me!
      </MutedText>

      <LoginBox />

      <S.GuestMessages spacing="2rem">
        {guestMessagesMock.map((guestMessage) => (
          <GuestMessage {...guestMessage} />
        ))}
      </S.GuestMessages>
    </Base>
  );
}
