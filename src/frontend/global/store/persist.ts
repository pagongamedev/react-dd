import { helperZustand } from 'universal-helper';
import create from 'zustand';
import { persist } from 'zustand/middleware';

// ============ Store ==============
export type TypeStoreGlobalPersist = {
  userData: any;
};

// cant use method
export const storeGlobalPersist = create(
  persist(
    (): TypeStoreGlobalPersist => ({
      userData: null,
    }),
    {
      name: 'storage-user',
    },
  ),
);

// ============ Method ==============

export type TypeMethodStoreGlobalPersist = {
  setUserData: (userData: any) => void;
};

const methodStoreGlobalPersist = {
  setUserData: (userData: any) => {
    storeGlobalPersist.setState((state: TypeStoreGlobalPersist) => ({ userData }));
  },
};

// ============ Export ==============

export const useStoreGlobalPersist = (stateList: string[], isShallow?: boolean) => {
  return helperZustand.StateMapping(stateList, storeGlobalPersist, isShallow);
};

export const getMethodStoreGlobalPersist = (): TypeMethodStoreGlobalPersist => {
  return methodStoreGlobalPersist;
};

export const setGlobalStorePersist = (prop: any) => storeGlobalPersist.setState(prop);
