import { Image } from 'components/Image';
import { Stack } from 'components/Stack';
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

      <S.Content>
        <Stack spacing="8px">
          <S.Title>Why I Build Design Systems with Stitches and Radix</S.Title>
          <S.Excerpt>A biased view.</S.Excerpt>
          <S.Date>April 26, 2021</S.Date>
        </Stack>
      </S.Content>
    </S.Container>
  );
}
