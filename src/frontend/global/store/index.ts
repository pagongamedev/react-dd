// import { helperZustandUseStore } from 'universal-helper';
import { helperZustand } from 'universal-helper';
import create from 'zustand';

export const store = create((setState, getState) => ({
  user: '',
  setUser: (name: string) => setState(() => ({ user: name })),
}));

export const useStore = (stateList: string[], isShallow?: boolean) => {
  return helperZustand.UseStore(stateList, store, isShallow);
};

export const setStore = (prop: any) => store.setState(prop);
