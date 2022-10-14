import React from 'react';

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

export const useFlashbang = () => React.useContext(FlashbangContext);
