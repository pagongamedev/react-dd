import { helperZustand } from 'universal-helper';
import create from 'zustand';

// import {
//   FirebaseSignInWithEmailAndPassword,
//   FirebaseSignOut,
// } from '../../../core/middleware/firebase';
import { GameCore } from '../../../interactive/domain/three-js';

// export const getMethodStoreGlobalPersist = (): TypeStoreGlobalMethodPersist => {
//   return storeGlobalPersist.getState().method;
// };

// ============ Store ==============

type TypeStoreGlobal = {
  gameCore: GameCore;
  isLoading: boolean;
  sI18NDomainName: string;
  menu: {
    sHeaderName: string;
    iIconID: number;
  };
};

export const storeGlobal = create(
  (): TypeStoreGlobal => ({
    gameCore: new GameCore(),
    isLoading: false,
    sI18NDomainName: '',
    menu: {
      sHeaderName: '',
      iIconID: 0,
    },
  }),
);

// ============ Method ==============
export type TypeMethodStoreGlobal = {
  setLoading: (isLoading: boolean) => void;
  setMenu: (sHeaderName: string, iIconID: number) => void;
  setI18NDomainName: (sI18NDomainName: string) => void;
  // signIn: (sEmail: string, sPassword: string) => Promise<helperType.TypeGolangResponse>;
  // signOut: () => void;
};

export const methodStoreGlobal: TypeMethodStoreGlobal = {
  setLoading: (isLoading: boolean) => {
    storeGlobal.setState((state: TypeStoreGlobal) => ({ isLoading }));
  },
  // user: '',
  // setUser: (name: string) => setState(() => ({ user: name })),
  setI18NDomainName: (sI18NDomainName: string) => {
    storeGlobal.setState({ sI18NDomainName });
  },
  setMenu: (sHeaderName: string, iIconID: number) => {
    storeGlobal.setState((state: TypeStoreGlobal) => ({
      menu: { sHeaderName, iIconID },
    }));
  },
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
};

// ============ Export ==============

export const useStoreGlobal = (stateList: string[], isShallow?: boolean) => {
  return helperZustand.StateMapping(stateList, storeGlobal, isShallow);
};

export const getMethodStoreGlobal = (): TypeMethodStoreGlobal => {
  return methodStoreGlobal;
};

export const getStoreGlobal = () => storeGlobal.getState();
export const setStoreGlobal = (prop: any) => storeGlobal.setState(prop);
