import logo from 'assets/logo.svg';
import { Image } from 'components/Image';
import * as S from './styles';

export function Logo() {
  return (
    <S.Link href="/">
      <Image src={logo} alt="Douglas' Logo" />
    </S.Link>
  );
}
