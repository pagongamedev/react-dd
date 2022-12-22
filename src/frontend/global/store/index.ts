import { helperZustand } from 'universal-helper';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import {
  FirebaseSignInWithEmailAndPassword,
  FirebaseSignOut,
} from '../../../core/middleware/firebase';
import { GameCore } from '../../../interactive/domain/three-js';

export const storePersist = create(
  persist(
    (setState, getState) => ({
      userData: null,
      setUserData: (userData: any) => {
        setState({ userData });
      },
    }),
    {
      name: 'storage-user',
    },
  ),
);

export const useGlobalStorePersist = (stateList: string[], isShallow?: boolean) => {
  return helperZustand.StateMapping(stateList, storePersist, isShallow);
};

export const store = create((setState, getState) => ({
  gameCore: new GameCore(),
  isLoading: false,
  setLoading: (isLoading: boolean) => {
    setState({ isLoading });
  },
  menu: {
    sHeaderName: '',
    iIconID: 0,
  },
  // user: '',
  // setUser: (name: string) => setState(() => ({ user: name })),
  setMenu: (sHeaderName: string, iIconID: number) =>
    setState(() => ({ menu: { sHeaderName, iIconID } })),
  signIn: async (
    sEmail: string,
    sPassword: string,
  ): Promise<{ res: any; error: Error | null }> => {
    setState({ isLoading: true });
    const resAuth = await FirebaseSignInWithEmailAndPassword(sEmail, sPassword);

    if (resAuth.error) {
      setState({ isLoading: false });
      return { res: null, error: resAuth.error };
    }

    // console.log('resAuth.res ', resAuth.res);

    // const { setUserData }: any = useGlobalStorePersist(['setUserData']);
    const { setUserData }: any = storePersist.getState();
    setUserData(resAuth.res);
    setState({ isLoading: false });
    return { res: resAuth.res, error: null };
    // isLoading
  },
  signOut: async () => {
    setState({ isLoading: true });
    await FirebaseSignOut();
    // const { setUserData }: any = useGlobalStorePersist(['setUserData']);
    const { setUserData }: any = storePersist.getState();
    setUserData(null);
    setState({ isLoading: false });
  },
}));

export const useGlobalStore = (stateList: string[], isShallow?: boolean) => {
  return helperZustand.StateMapping(stateList, store, isShallow);
};

export const setGlobalStore = (prop: any) => store.setState(prop);
