import { async } from '@firebase/util';
import React, { createContext, useContext, useState } from 'react';

import { useContextUI } from './contextUI';

export type TypeContextUser = {
  userData: any;
};

const typeContext: TypeContextUser = {
  userData: null,
};

export const ContextUser = createContext<TypeContextUser>(typeContext);

export const useContextUser = () => useContext<TypeContextUser>(ContextUser);

export const ProviderUser = ({ children }: { children: React.ReactNode }) => {
  const { isLoading, setIsLoading } = useContextUI();

  const [userData, setUserData] = useState<any>(null);

  return (
    <ContextUser.Provider
      value={{
        userData,
      }}
    >
      {children}
    </ContextUser.Provider>
  );
};
