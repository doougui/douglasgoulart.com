import { Image } from 'components/Image';
import * as S from './styles';

export function Writing() {
  return (
    <S.Container>
      <S.ImageBox>
        <Image
          src="https://picsum.photos/400"
          width={80}
          height={80}
          layout="responsive"
        />
      </S.ImageBox>
      <h1>Writing</h1>
    </S.Container>
  );
}
