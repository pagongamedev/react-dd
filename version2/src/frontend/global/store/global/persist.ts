import HelperZustand from 'skillvir-universal-helper/zustand';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// ============ State ==============
interface IState {
  userData: any;
}

// cant use method
const store = create(
  persist(
    (): IState => ({
      userData: null,
    }),
    {
      name: 'storage-user',
    },
  ),
);

// ============ Method ==============

interface IMethod {
  setUserData: (userData: any) => void;
  updateUserData: (payload: any) => void;
}

const method: IMethod = {
  setUserData: (userData: any) => {
    store.setState({ userData });
  },
  updateUserData: (payload: any) => {
    store.setState((state: IState) => ({
      userData: {
        ...state.userData,
        payload,
      },
    }));
  },
};

// ============ Export ==============
export interface IStoreGlobalPersist {
  IState: IState;
  IMethod: IMethod;
}

const StoreGlobalPersist = HelperZustand.ExportStore<
  IStoreGlobalPersist['IState'],
  IStoreGlobalPersist['IMethod']
>(store, method);

export default StoreGlobalPersist;
