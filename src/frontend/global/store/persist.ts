import { HelperZustand } from 'universal-helper';
import create from 'zustand';
import { persist } from 'zustand/middleware';

// ============ Store ==============
export type TypeStoreGlobalPersist = {
  userData: any;
};

// cant use method
export const StoreGlobalPersist = create(
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
    StoreGlobalPersist.setState({ userData });
  },
  updateUserData: (payload: any) => {
    StoreGlobalPersist.setState((state: TypeStoreGlobalPersist) => ({
      userData: {
        ...state.userData,
        payload,
      },
    }));
  },
};

// ============ Export ==============

export const UseStoreGlobalPersist = (
  stateList: string[],
  isShallow?: boolean,
): TypeStoreGlobalPersist => {
  return HelperZustand.StateMapping(
    stateList,
    StoreGlobalPersist,
    isShallow,
  ) as TypeStoreGlobalPersist;
};

export const GetMethodStoreGlobalPersist = (): TypeMethodStoreGlobalPersist => {
  return methodStoreGlobalPersist;
};

export const GetStoreGlobalPersist = () => StoreGlobalPersist.getState();
export const SetGlobalStorePersist = (prop: any) => StoreGlobalPersist.setState(prop);
