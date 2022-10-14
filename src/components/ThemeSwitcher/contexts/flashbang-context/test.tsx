import { renderHook } from '@testing-library/react';
import { render, screen } from 'utils/tests';
import { FlashbangContext, FlashbangProvider, useFlashbang } from '.';

describe('FlashbangContext', () => {
  it('should be able to change open state', () => {
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <FlashbangProvider>{children}</FlashbangProvider>
    );

    const { result } = renderHook(() => useFlashbang(), { wrapper });

    expect(result.current.isOpen).toBe(false);
  });

  it('should be closed by default', () => {
    render(
      <FlashbangContext.Consumer>
        {(value) => {
          value.setIsOpen(true);
          return <span>Is open: {value.isOpen.toString()}</span>;
        }}
      </FlashbangContext.Consumer>,
    );

    expect(screen.getByText('Is open: false')).toBeInTheDocument();
  });
});
