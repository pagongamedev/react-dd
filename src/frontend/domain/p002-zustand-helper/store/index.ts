import create from 'zustand';

import { helperZustandUseStore } from '../../../../core/helper/zustand';

export const store = create((setState, getState) => ({
  user: '',
  setUser: (name: string) => setState(() => ({ user: name })),
  cartCount: 0,
  login: () => setState(() => ({ user: 'Jack' })),
  logout: () => setState(() => ({ user: '' })),
  addToCart: () => setState((state: any) => ({ cartCount: state.cartCount + 1 })),
}));

export const useStore = (stateList: string[], isShallow?: boolean) => {
  return helperZustandUseStore(stateList, store, isShallow);
};

export const setStore = (prop: any) => store.setState(prop);
