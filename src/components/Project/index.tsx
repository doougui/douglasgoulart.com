import { Heading2 } from 'components/Headings';
import { MutedText } from 'components/MutedText';
import * as S from './styles';

export type ProjectProps = {
  title: string;
  description: string;
  accomplishments: string[];
  url: string;
  stack: string[];
};

export function Project({
  title,
  description,
  accomplishments,
  url,
  stack,
}: ProjectProps) {
  return (
    <S.Link href={url} target="_blank" aria-label={title}>
      <S.Container>
        <Heading2>{title}</Heading2>
        <MutedText>{description}</MutedText>

        <S.Accomplishments>
          {accomplishments.map((accomplishment) => (
            <S.Accomplishment key={accomplishment}>
              {accomplishment}
            </S.Accomplishment>
          ))}
        </S.Accomplishments>

        <S.Stack>
          Tech stack: <strong>{stack.join(', ')}</strong>
        </S.Stack>
      </S.Container>
    </S.Link>
  );
}
