import { Image } from 'components/Image';
import { Stack } from 'components/Stack';
import { Writing as WritingType } from 'types/Writing';
import { formatDateString } from 'utils/time/formatDateString';
import * as S from './styles';

type WritingProps = WritingType;

export function Writing({ title, excerpt, cover, publishedAt }: WritingProps) {
  return (
    <S.Container>
      {!!cover && (
        <S.ImageBox>
          <Image src={cover?.url} alt={cover?.alt} width={80} height={80} />
        </S.ImageBox>
      )}

      <S.Content>
        <Stack spacing="8px">
          <S.Title>{title}</S.Title>
          <S.Excerpt>{excerpt}</S.Excerpt>
          <S.Date>
            {formatDateString(publishedAt, 'yyyy-MM-dd', 'MMMM dd, yyyy')}
          </S.Date>
        </Stack>
      </S.Content>
    </S.Container>
  );
}
