import {
  FlashbangProvider,
  useFlashbang,
} from 'components/ThemeSwitcher/contexts/flashbang-context';
import { act } from 'react-dom/test-utils';
import { ThemeProvider } from 'styled-components';
import theme from 'styles/theme';
import { renderHook } from 'utils/tests';
import { Flashbang } from '.';

describe('<Flashbang />', () => {
  it('should render correctly', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <ThemeProvider theme={theme}>
        <FlashbangProvider>
          {children}
          <Flashbang />
        </FlashbangProvider>
      </ThemeProvider>
    );

    const { result } = renderHook(() => useFlashbang(), { wrapper });

    act(() => result.current.setIsOpen(true));

    expect(result.current.isOpen).toBe(true);
  });
});
