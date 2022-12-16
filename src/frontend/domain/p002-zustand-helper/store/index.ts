import { helperZustand } from 'universal-helper';
import create from 'zustand';

export const store = create((setState, getState) => ({
  user: '',
  setUser: (name: string) => setState(() => ({ user: name })),
  cartCount: 0,
  login: () => setState(() => ({ user: 'Jack' })),
  logout: () => setState(() => ({ user: '' })),
  addToCart: () => setState((state: any) => ({ cartCount: state.cartCount + 1 })),
}));

export const useStore = (stateList: string[], isShallow?: boolean) => {
  return helperZustand.StateMapping(stateList, store, isShallow);
};

export const setStore = (state: any) => store.setState(state);
