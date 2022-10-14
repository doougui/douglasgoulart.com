import React from 'react';
import { getWrongContextUsageMessage } from 'utils/shared/get-wrong-context-usage-message';

type FlashbangContextData = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type FlashbangProviderProps = {
  children: React.ReactNode;
};

export const FlashbangContextDefaultValues = {
  isOpen: false,
  setIsOpen: () => null,
};

export const FlashbangContext = React.createContext<FlashbangContextData>(
  FlashbangContextDefaultValues,
);

export function FlashbangProvider(props: FlashbangProviderProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  const value = React.useMemo(() => ({ isOpen, setIsOpen }), [isOpen]);

  return <FlashbangContext.Provider value={value} {...props} />;
}

export function useFlashbang() {
  const context = React.useContext(FlashbangContext);

  if (!context) {
    throw new Error(
      getWrongContextUsageMessage('useFlashbang', 'FlashbangProvider'),
    );
  }

  return context;
}
