import { SmallText } from 'components/SmallText';
import * as S from './styles';

export function Header() {
  return (
    <header>
      <S.Introduction>Hi there, I’m a...</S.Introduction>
      <S.Role>
        <strong>Front-end and Mobile developer</strong> with an eye for design.
      </S.Role>
      <SmallText>
        Helping developers build a faster web. Teaching about web development,
        serverless, and React / Next.js.
      </SmallText>
    </header>
  );
}
