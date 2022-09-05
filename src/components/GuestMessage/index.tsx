import { formatDistance } from 'date-fns';
import * as S from './styles';

export type GuestMessageProps = {
  message: string;
  author: string;
  date: Date;
};

export function GuestMessage({ message, author, date }: GuestMessageProps) {
  return (
    <S.Container>
      <S.Message>{message}</S.Message>

      <S.Infos>
        <S.Author>{author}</S.Author>
        <S.Date>{formatDistance(date, new Date(), { addSuffix: true })}</S.Date>
      </S.Infos>
    </S.Container>
  );
}
