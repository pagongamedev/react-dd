import { helperType, helperZustand } from 'universal-helper';
import create from 'zustand';
import { persist } from 'zustand/middleware';

// import {
//   FirebaseSignInWithEmailAndPassword,
//   FirebaseSignOut,
// } from '../../../core/middleware/firebase';
import { GameCore } from '../../../interactive/domain/three-js';

// export type TypeStoreGlobalMethodPersist = {
//   setUserData: (userData: any) => void;
// };

// cant use method
type TypeStoreGlobalPersist = {
  userData: any;
  setUserData: (userData: any) => void;
};

export const storeGlobalPersist = create(
  persist(
    (setState: any, getState: any): TypeStoreGlobalPersist => ({
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
  return helperZustand.StateMapping(stateList, storeGlobalPersist, isShallow);
};

// export const getMethodStoreGlobalPersist = (): TypeStoreGlobalMethodPersist => {
//   return storeGlobalPersist.getState().method;
// };

export type TypeMethodStoreGlobal = {
  setLoading: (isLoading: boolean) => void;
  setMenu: (sHeaderName: string, iIconID: number) => void;
  // signIn: (sEmail: string, sPassword: string) => Promise<helperType.TypeGolangResponse>;
  // signOut: () => void;
};

type TypeStoreGlobal = {
  gameCore: GameCore;
  isLoading: boolean;
  menu: {
    sHeaderName: string;
    iIconID: number;
  };
  method: TypeMethodStoreGlobal;
};

export const storeGlobal = create(
  (setState: any, getState: any): TypeStoreGlobal => ({
    gameCore: new GameCore(),
    isLoading: false,

    menu: {
      sHeaderName: '',
      iIconID: 0,
    },
    method: {
      setLoading: (isLoading: boolean) => {
        setState({ isLoading });
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
    },
  }),
);

export const useStoreGlobal = (stateList: string[], isShallow?: boolean) => {
  return helperZustand.StateMapping(stateList, storeGlobal, isShallow);
};

export const getMethodStoreGlobal = (): TypeMethodStoreGlobal => {
  return storeGlobal.getState().method;
};

export const setStoreGlobal = (prop: any) => storeGlobal.setState(prop);
