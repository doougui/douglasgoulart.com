import { useColorTheme } from 'contexts/ColorThemeContext';
import * as S from './styles';

export function Themes() {
  const { colorMode, setColorMode } = useColorTheme();

  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        x: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: 200,
      opacity: 0,
      transition: {
        x: { stiffness: 1000 },
      },
    },
  };

  return (
    <S.Container variants={variants}>
      <S.Theme
        isActive={colorMode === 'light'}
        onClick={() => setColorMode('light')}
      >
        Light
      </S.Theme>
      <S.Theme
        isActive={colorMode === 'dark'}
        onClick={() => setColorMode('dark')}
      >
        Dark
      </S.Theme>
    </S.Container>
  );
}
