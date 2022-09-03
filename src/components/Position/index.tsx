import { Heading3 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import * as S from './styles';

export type PositionProps = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  responsabilities: string[];
};

export function Position({
  title,
  company,
  startDate,
  endDate,
  responsabilities,
}: PositionProps) {
  return (
    <S.Container>
      <Heading3>
        {title} <S.Company>at {company}</S.Company>
      </Heading3>
      <MutedText>
        {startDate} - {endDate}
      </MutedText>

      <S.Responsabilities>
        {responsabilities.map((responsability, index) => (
          <S.Responsability key={`${responsability}-${String(index)}`}>
            {responsability}
          </S.Responsability>
        ))}
      </S.Responsabilities>
    </S.Container>
  );
}
