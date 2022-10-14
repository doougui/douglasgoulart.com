import { Themes } from './components/Themes';
import { FlashbangProvider } from './contexts/FlashbangContext';
import * as S from './styles';

export function ThemeSwitcher() {
  return (
    <FlashbangProvider>
      <S.Container>
        <Themes />
      </S.Container>
    </FlashbangProvider>
  );
}
