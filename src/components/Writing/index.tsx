import { Image } from 'components/Image';
import { MediaMatch } from 'components/MediaMatch';
import { Stack } from 'components/Stack';
import { Writing as WritingType } from 'types/Writing';
import { formatDateString } from 'utils/time/formatDateString';
import * as S from './styles';

type WritingProps = WritingType;

export function Writing({
  slug,
  title,
  excerpt,
  cover,
  publishedAt,
}: WritingProps) {
  return (
    <S.Link href={`/writings/${slug}`}>
      <S.Container>
        {!!cover && (
          <S.ImageBox>
            <Image src={cover?.url} alt={cover?.alt} width={80} height={80} />
          </S.ImageBox>
        )}

        <div>
          <Stack spacing="8px">
            <S.Title>{title}</S.Title>

            <MediaMatch greaterThan="small">
              <Stack spacing="8px">
                <S.Excerpt>{excerpt}</S.Excerpt>
                <S.Date>
                  {formatDateString(publishedAt, 'yyyy-MM-dd', 'MMMM dd, yyyy')}
                </S.Date>
              </Stack>
            </MediaMatch>
          </Stack>
        </div>
      </S.Container>
    </S.Link>
  );
}
