import HelperZustand from 'skillvir-universal-helper/zustand';
import { create } from 'zustand';

// import APIGlobal from '../api';
// import { GetMethodStoreGlobalPersist } from './persist';

// ============ State ==============
interface IState {
  isLoading: boolean;
}

const store = create(
  (): IState => ({
    isLoading: false,
  }),
);

// ============ Method ==============
interface IMethod {
  setLoading: (isLoading: boolean) => void;
  // signIn: (sEmail: string, sPassword: string) => Promise<HelperType.TypeGolangResponse>;
  // signOut: () => void;
}

const method: IMethod = {
  setLoading: (isLoading: boolean) => {
    // StoreGlobal.setState((state: TypeStoreGlobal) => ({ isLoading }));
    store.setState(() => ({ isLoading }));
  },

  //   signIn: async (
  //     sEmail: string,
  //     sPassword: string,
  //   ): Promise<HelperType.TypeGolangResponse> => {
  //     StoreGlobal.setState({ isLoading: true });
  //     // ======== Auth
  //     const resAuth = await APIGlobal.SetSignIn(sEmail, sPassword);

  //     if (resAuth.error) {
  //       StoreGlobal.setState({ isLoading: false });
  //       return { res: null, error: resAuth.error };
  //     }

  //     // await testGetToken();

  //     // ======== Get User Data
  //     const resReadUser = await APIGlobal.ReadUser();
  //     if (resReadUser.error) {
  //       StoreGlobal.setState({ isLoading: false });
  //       return { res: null, error: resReadUser.error };
  //     }

  //     GetMethodStoreGlobalPersist().setUserData(resReadUser.res?.data);
  //     StoreGlobal.setState({ isLoading: false });
  //     // setState({ isLoading: false });
  //     return { res: resReadUser.res, error: null };
  //   },
  //   signOut: async () => {
  //     StoreGlobal.setState({ isLoading: true });

  //     await APIGlobal.GetSignOut();
  //     // console.log('setUserData', setUserData);
  //     GetMethodStoreGlobalPersist().setUserData(null);
  //     StoreGlobal.setState({ isLoading: false });
  //   },
};

// ============ Export ==============
export interface IStoreGlobal {
  IState: IState;
  IMethod: IMethod;
}

const StoreGlobal = HelperZustand.ExportStore<
  IStoreGlobal['IState'],
  IStoreGlobal['IMethod']
>(store, method);

export default StoreGlobal;
