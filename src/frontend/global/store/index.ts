import create from 'zustand';

import { helperZustandUseStore } from '../../../core/helper/zustand';

export const store = create((set) => ({
  user: '',
  setUser: (name: string) => set(() => ({ user: name })),
}));

export const useStore = (stateList: string[], isShallow?: boolean) => {
  return helperZustandUseStore(stateList, store, isShallow);
};

export const setStore = (prop: any) => store.setState(prop);
