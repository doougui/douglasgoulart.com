import { useDarkMode } from 'hooks/use-dark-mode';
import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { useTheme } from 'styled-components';
import * as S from './styles';

export function ThemeSwitcher() {
  const theme = useTheme();

  const { isDarkMode, disable, enable } = useDarkMode();

  return (
    <S.Container>
      <S.Toggle isActive={!isDarkMode} onClick={disable}>
        <RiSunLine size={15} color={theme.colors.text} />
      </S.Toggle>
      <S.Toggle isActive={isDarkMode} onClick={enable}>
        <RiMoonLine size={15} color={theme.colors.text} />
      </S.Toggle>
    </S.Container>
  );
}
