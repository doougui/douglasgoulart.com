import { Heading3 } from 'components/Headings';
import { SmallText } from 'components/SmallText';
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
      <SmallText>
        {startDate} - {endDate}
      </SmallText>

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
