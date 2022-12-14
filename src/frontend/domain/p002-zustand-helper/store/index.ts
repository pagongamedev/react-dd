import create from 'zustand';

import { helperZustandUseStore } from '../../../../core/helper/zustand';

export const store = create((set) => ({
  user: '',
  setUser: (name: string) => set(() => ({ user: name })),
  cartCount: 0,
  login: () => set(() => ({ user: 'Jack' })),
  logout: () => set(() => ({ user: '' })),
  addToCart: () => set((state: any) => ({ cartCount: state.cartCount + 1 })),
}));

export const useStore = (stateList: string[], isShallow?: boolean) => {
  return helperZustandUseStore(stateList, store, isShallow);
};

export const setStore = (prop: any) => store.setState(prop);
