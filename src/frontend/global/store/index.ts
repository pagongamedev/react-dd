import { helperType, helperZustand } from 'universal-helper';
import create from 'zustand';
import { persist } from 'zustand/middleware';

// import {
//   FirebaseSignInWithEmailAndPassword,
//   FirebaseSignOut,
// } from '../../../core/middleware/firebase';
import { GameCore } from '../../../interactive/domain/three-js';

type TypeStorePersist = {
  userData: any;
  setUserData: (userData: any) => void;
};

export const storePersist = create(
  persist(
    (setState: any, getState: any): TypeStorePersist => ({
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

export const useStoreGlobalPersist = (stateList: string[], isShallow?: boolean) => {
  return helperZustand.StateMapping(stateList, storePersist, isShallow);
};

type TypeStore = {
  gameCore: GameCore;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  menu: {
    sHeaderName: string;
    iIconID: number;
  };
  setMenu: (sHeaderName: string, iIconID: number) => void;
  // signIn: (sEmail: string, sPassword: string) => Promise<helperType.TypeGolangResponse>;
  // signOut: () => void;
};

export const store = create(
  (setState: any, getState: any): TypeStore => ({
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
    // signIn: async (
    //   sEmail: string,
    //   sPassword: string,
    // ): Promise<{ res: any; error: Error | null }> => {
    //   setState({ isLoading: true });
    //   const resAuth = await FirebaseSignInWithEmailAndPassword(sEmail, sPassword);

    //   if (resAuth.error) {
    //     setState({ isLoading: false });
    //     return { res: null, error: resAuth.error };
    //   }

    //   // console.log('resAuth.res ', resAuth.res);

    //   // const { setUserData }: any = useStoreGlobalPersist(['setUserData']);
    //   const { setUserData }: any = storePersist.getState();
    //   setUserData(resAuth.res);
    //   setState({ isLoading: false });
    //   return { res: resAuth.res, error: null };
    //   // isLoading
    // },
    // signOut: async () => {
    //   setState({ isLoading: true });
    //   await FirebaseSignOut();
    //   // const { setUserData }: any = useStoreGlobalPersist(['setUserData']);
    //   const { setUserData }: any = storePersist.getState();
    //   setUserData(null);
    //   setState({ isLoading: false });
    // },
  }),
);

export const useStoreGlobal = (stateList: string[], isShallow?: boolean) => {
  return helperZustand.StateMapping(stateList, store, isShallow);
};

export const setStoreGlobal = (prop: any) => store.setState(prop);
