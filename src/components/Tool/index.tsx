import type * as CSS from 'csstype';
import * as S from './styles';

export type ToolProps = {
  color: CSS.Property.BackgroundColor;
  name: string;
};

export function Tool({ color, name }: ToolProps) {
  return (
    <S.Container>
      <S.Dot color={color} />
      <S.Content>{name}</S.Content>
    </S.Container>
  );
}
