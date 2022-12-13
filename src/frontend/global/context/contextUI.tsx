import React, { createContext, useContext, useState } from 'react';

export type TypeContextUI = {
  isLoading: boolean;
  setIsLoading: Function;
};

const typeContext: TypeContextUI = {
  isLoading: false,
  setIsLoading: () => {},
};

export const ContextUI = createContext<TypeContextUI>(typeContext);

export const useContextUI = () => useContext<TypeContextUI>(ContextUI);

export const ProviderUI = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <ContextUI.Provider
      value={{
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </ContextUI.Provider>
  );
};
