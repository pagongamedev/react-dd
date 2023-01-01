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
  updateUserData: (payload: any) => void;
};

const methodStoreGlobalPersist: TypeMethodStoreGlobalPersist = {
  setUserData: (userData: any) => {
    storeGlobalPersist.setState({ userData });
  },
  updateUserData: (payload: any) => {
    storeGlobalPersist.setState((state: TypeStoreGlobalPersist) => ({
      userData: {
        ...state.userData,
        payload,
      },
    }));
  },
};

// ============ Export ==============

export const useStoreGlobalPersist = (stateList: string[], isShallow?: boolean) => {
  return helperZustand.StateMapping(stateList, storeGlobalPersist, isShallow);
};

export const getMethodStoreGlobalPersist = (): TypeMethodStoreGlobalPersist => {
  return methodStoreGlobalPersist;
};

export const getStoreGlobalPersist = () => storeGlobalPersist.getState();
export const setGlobalStorePersist = (prop: any) => storeGlobalPersist.setState(prop);
