import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import * as S from './styles';

export function ThemeSwitcher() {
  const theme = useTheme();

  return (
    <S.Container>
      <S.Toggle isActive={false}>
        <RiSunLine size={15} color={theme.colors.text} />
      </S.Toggle>
      <S.Toggle isActive>
        <RiMoonLine size={15} color={theme.colors.text} />
      </S.Toggle>
    </S.Container>
  );
}
