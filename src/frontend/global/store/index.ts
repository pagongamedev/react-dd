import create from 'zustand';

import { helperZustandUseStore } from '../../../core/helper/zustand';

export const store = create((setState, getState) => ({
  user: '',
  setUser: (name: string) => setState(() => ({ user: name })),
}));

export const useStore = (stateList: string[], isShallow?: boolean) => {
  return helperZustandUseStore(stateList, store, isShallow);
};

export const setStore = (prop: any) => store.setState(prop);
